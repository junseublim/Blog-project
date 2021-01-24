import Post from '../../models/posts';
import mongoose from 'mongoose';
import Joi from 'joi';

const {ObjectId} = mongoose.Types;

//id 확인하는 미들웨어. posts/index.js에서 미들웨어 추가해서 사용
export const checkObjectId = (ctx, next) => {
    const {id} = ctx.params;
    if (!ObjectId.isValid(id)) {
        ctx.status = 400;
        return;
    }
    return next();
}

export const write = async ctx => {
    const schema = Joi.object().keys({
        // 객체가 다음 필드를 가지고 있음을 증명
        title: Joi.string().required(), //required가 있으면 필수 항목이다
        body: Joi.string().required(),
        tags: Joi.array().items(Joi.string()).required(),
    })
    const result = Joi.validate(ctx.request.body, schema);
    if (result.error) {
        ctx.status = 400;
        ctx.body = result.error
    }
    const {title,body, tags} = ctx.request.body;
    const post = new Post({title, body, tags});
    try {
        await post.save();
        ctx.body = post;
    }
    catch (e) {
        ctx.throw(500,e);
    }
}

export const list = async ctx => {
    const page = parseInt(ctx.query.page || '1', 10);
    if (page <1) {
        ctx.status = 400;
        return;
    }
    try {
        //find 함수는 조회. exec()을 붙여줘야 서버에 쿼리를 요청함
        //역순으로 표시하기 위해 sort해줌
        //limit으로 개수 제한
        const posts = await Post.find().sort({_id: -1}).limit(10).skip((page-1)*10).exec();
        const postCount = await Post.countDocuments().exec();
        //커스텀 헤더 설정
        ctx.set('Last-Page', Math.ceil(postCount/10));

        //200자 제한하기 위해 json 형태로 변환한뒤 바꿔준다
        //혹은 데이터를 조회할때 lean 함수를 사용하면 처음부터 JSON형태로 반환한다.
        ctx.body = posts.map(post => post.toJSON()).map(post => ({
            ...post,
            body: post.body.length < 200 ? post.body : `${post.body.slice(0,200)}...`
        }));
    } catch(e){
        ctx.throw(500,e);
    }
}

export const read = async ctx => {
    const id = ctx.params;
    try {
        const post = await Post.findById(id).exec();
        if (!post) {
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    } catch(e) {
        ctx.throw(500,e);
    }
}

export const remove = async ctx => {
    const {id} = ctx.params;
    try {
        await Post.findByIdAndRemove(id).exec();
        ctx.status = 204;
    } catch(e) {
        ctx.throw(500,e);
    }
}


export const update = async ctx => {
    const {id} = ctx.params;
    const schema = Joi.object().keys({
        // 객체가 다음 필드를 가지고 있음을 증명
        title: Joi.string(), 
        body: Joi.string(),
        tags: Joi.array().items(Joi.string()),
    })
    const result = Joi.validate(ctx.request.body, schema);
    if (result.error) {
        ctx.status = 400;
        ctx.body = result.error
    }
    try {
        const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
            new: true, //설정시 업데이트된 데이터 반환. false이면 업데이트 전의 데이터 반환
        }).exec();
        if (!post) {
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    } catch(e) {
        ctx.throw(500,e);
    }
}