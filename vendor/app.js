import getPosts from './functions/getPosts.js'

async function start() {
  const posts = await getPosts()

  return {
    posts,
  }
}

const data = await start()
console.log(data)