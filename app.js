const Koa = require("koa");
const KoaRouter = require("koa-router");
const path = require("path");
const render = require("koa-ejs");

const app = new Koa();
const router = new KoaRouter();

// 简单的无路由处理
// app.use(async (ctx) => (ctx.body = { msg: "hello there" }));

render(app, {
  root: path.join(__dirname, "views"),
  layout: "layout",
  viewExt: "html",
  cache: false,
  debug: false,
});

// 路由中间件
router.get("/", async (ctx) => {
  await ctx.render("index");
});

router.get("/foo", (ctx) => (ctx.body = { msg: "hello foo" }));

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => console.log("server started at port 3000..."));
