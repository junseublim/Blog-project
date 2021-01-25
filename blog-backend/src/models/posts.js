import mongoose from 'mongoose';

const {Schema}  = mongoose;

const PostSchema = new Schema({
    title: String,
    body: String,
    tags: [String],
    publishedDate: {
        type: Date,
        default: Date.now,
    },
    user: {
        _id: mongoose.Types.ObjectId,
        username: String
    }
});
//스키마 이름, 스키마 객체 파라미터로
//세번째 인자는 옵션으로 컬렉션 이름을 넣어준다.
const Post = mongoose.model('Post', PostSchema);
export default Post;