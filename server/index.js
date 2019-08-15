import next from 'next'
import Koa from 'koa'
import Router from 'koa-router'

const port = parseInt(process.env.PORT, 10) || 3000
const isDevelopment = process.env.NODE_ENV !== 'production'

const app = next({ dev: isDevelopment })

async function main() {
  await app.prepare();

  const handle = app.getRequestHandler()
  const server = new Koa()
  const router = new Router()

  router.get('*', async ctx => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200
    await next()
  })

  server.use(router.routes())
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  })
}

main().then(null, (e) => { console.log(e) })
