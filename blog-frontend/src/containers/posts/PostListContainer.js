import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import PostList from "../../components/post/PostList";
import {listPosts} from '../../modules/posts';
import qs from 'qs';

const PostListContainer = ({location}) => {
    const dispatch = useDispatch();
    const {posts,error, loading, user} = useSelector(({posts,loading, user}) => ({
        posts: posts.posts,
        error: posts.error,
        loading: loading['post/READ_POST'],
        user: user.user
    }));

    useEffect(()=> {
        const {tag, username, page} = qs.parse(location.search, {
            ignoreQueryPrefix: true,
        });
        dispatch(listPosts({tag, username, page}));
    }, [dispatch, location.search]);

    return (
        <PostList
            loading={loading}
            error={error}
            posts={posts}
            showWriteButton={user}
        />
    )
};

export default withRouter(PostListContainer);