import client from './client';
import qs from 'qs';
export const writePost = ({title, body, tags}) => client.post('/api/posts', {title, body, tags});

export const readPost  = id => client.get(`/api/posts/${id}`);

export const listPosts = ({page, username, tag}) => {
    const queryString = qs.stringify({
        page,
        username,
        tag,
    });
    return client.get(`/api/posts?${queryString}`);
}
//자동으로 /api/posts?username=test&page=2 처럼 쿼리 만들어줌.

export const updatePost = ({id, title, body, tags}) => client.patch(`/api/posts/${id}`, {
    title,
    body,
    tags
});

export const removePost = id => client.delete(`/api/posts/${id}`);