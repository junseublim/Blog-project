import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { readPost, unloadPost } from "../../modules/post";
import PostViewer from "../../components/post/PostViewer";
import { withRouter } from "react-router-dom";
import PostActionButtons from '../../components/post/PostActionButtons';
import {setOriginalPost} from '../../modules/write';
import {removePost} from '../../lib/api/posts';

const PostViewerContainer = ({match, history}) => {
    const {postId} = match.params;
    const dispatch = useDispatch();

    const {post,error, loading, user} = useSelector(({post,loading, user}) => ({
        post: post.post,
        error: post.error,
        loading: loading['post/READ_POST'],
        user: user.user
    }));

    const onEdit = () => {
        dispatch(setOriginalPost(post));
        history.push('/write');
    }

    const onRemove = async () => {
        try {
            await removePost(postId);
            history.push('/');
        } catch(e) {
            console.log(e);
        }
    }

    useEffect(()=> {
        dispatch(readPost(postId));
        return () => {
            dispatch(unloadPost());
        }
    }, [dispatch, postId]);

    return <PostViewer post={post} loading={loading} error={error} actionButtons={<PostActionButtons onEdit={onEdit} onRemove={onRemove}/> } ownPost={user && user.id === post && post.id} />;
};

export default withRouter(PostViewerContainer);