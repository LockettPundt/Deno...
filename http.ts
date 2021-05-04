import { Oak } from './deps.ts'

const app = new Oak.Application();
const router = new Oak.Router()

router.get('/hi', context => {
  context.response.body = {
    hello: 'hi'
  }
})
  .get('/api/hi',  context => {
    console.log('hi there')
    context.response.body = 'hi there'
  })
  .get('/api/hi/:id', context => {
    context.response.body = `here is the id --> ${context.params.id}`
  })

app.use(router.routes())

app.use(async (context: Oak.Context) => {
  await Oak.send(context, context.request.url.pathname, {
    root: `${Deno.cwd()}/static`,
    index: 'index.html'
  })
})

await app.listen({ port: 8000 });