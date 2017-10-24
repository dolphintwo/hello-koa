const Koa = require('koa');
const app = new Koa();

// app将调用async一部函数处理请求
// ctx为koa传入的封装了req/res的变量 next是下一个异步函数
app.use(async(ctx, next) => {
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, koa2!</h1>';
});

app.listen(3001);
console.log('app started at port 3001...');