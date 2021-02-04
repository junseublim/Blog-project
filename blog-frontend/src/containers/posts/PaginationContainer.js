import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import qs from 'qs';
import Pagination from "../../components/post/Pagination";

const PaginationContainer = ({location}) => {
    const {lastPage, posts, loading} = useSelector(({posts, loading}) => ({
        posts: posts.posts,
        loading: loading['post/LIST_POST'],
        lastPage: posts.lastPage
    }));

    if (!posts || loading) return null;

    const {tag, username, page = 1} = qs.parse(location.search, {
        ignoreQueryPrefix: true,
    });

    return (
        <Pagination
        tag={tag}
        username={username}
        page={parseInt(page, 10)}
        lastPage={lastPage}
        />
    )
};

export default withRouter(PaginationContainer);