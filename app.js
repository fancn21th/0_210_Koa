const Koa = require("koa");
const KoaRouter = require("koa-router");

const app = new Koa();
const router = new KoaRouter();

// app.use(async (ctx) => (ctx.body = { msg: "hello there" }));

router.get("/foo", (ctx) => (ctx.body = { msg: "hello there" }));

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => console.log("server started at port 3000..."));
