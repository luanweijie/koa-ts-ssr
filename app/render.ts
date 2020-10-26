import * as views from 'koa-views';
import * as path from 'path';

// setup views mapping .html
// to the swig template engine


export const render = views(path.join(__dirname, '/../views'), {
    extension: 'html',
    map: { html: 'ejs' }
});
