import * as Router from 'koa-router';
import { DefaultState, Context } from 'koa';

const router = new Router<DefaultState, Context>();
const posts: Array<string>[] = [];



/**
 * Basic healthcheck
 */
router.get('/healthcheck', async ctx => ctx.body = 'OK');

router.get('/', list)
  .get('/post/new', add)
  .get('/post/:id', show)
  .post('/post', create);


/**
 * Post listing.
 */

async function list(ctx: Context)  {
  await ctx.render('list', { posts: posts });
}


/**
 * Show creation form.
 */

async function add(ctx: Context) {
  await ctx.render('new');
}

/**
 * Show post :id.
 */

async function show(ctx: Context) {
  const id = ctx.params.id;
  const post = posts[id];
  if (!post) ctx.throw(404, 'invalid post id');
  await ctx.render('show', { post: post });
}

/**
 * Create a post.
 */

async function create(ctx: Context) {
  const post = ctx.request.body;
  const id = posts.push(post) - 1;
  post.created_at = new Date();
  post.id = id;
  ctx.redirect('/');
}

export const routes = router.routes();
