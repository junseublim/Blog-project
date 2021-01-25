import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';
import checkLoggedIn from '../../lib/checkLoggedIn';


const posts = new Router();

posts.get('/', postsCtrl.list);
posts.post('/', checkLoggedIn, postsCtrl.write);
posts.delete('/:id',checkLoggedIn,postsCtrl.checkOwnPost,postsCtrl.checkOwnPost, postsCtrl.remove);
posts.get('/:id', postsCtrl.checkOwnPost, postsCtrl.read);
posts.patch('/:id', checkLoggedIn, postsCtrl.getPostById,postsCtrl.checkOwnPost, postsCtrl.update);
module.exports = posts;
export default posts;