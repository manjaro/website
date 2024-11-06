import RSS from 'rss'
import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  const feed = new RSS({
    title: 'Manjaro Linux Official',
    description: 'This page provides an overview of Manjaro Linux, an open source operating system designed for ease of use. Learn about its features, installation, and support options. Get the most out of Manjaro Linux with the latest news, downloads, and tips from our helpful community',
    site_url: 'https://manjaro.org',
    feed_url: `https://manjaro.org/news/feed.xml`,
  })

  const contents = await serverQueryContent(event)
    .sort({ date: -1 })
    .where({ _partial: false })
    .find()

  const blogPosts = contents.filter(doc => doc?._path?.includes('/news'))
  for (const doc of blogPosts) {
    feed.item({
      title: doc.title ?? '-',
      url: `https://manjaro.org${doc._path}`,
      date: doc.date,
      description: doc.description,
      enclosure: {
        url: `https://manjaro.org${doc._path}/${doc.image}`,
        type: 'image/jpeg',
      },
    })
  }

  const feedString = feed.xml({ indent: true })
  event.node.res.setHeader('content-type', 'text/xml')
  event.node.res.end(feedString)
})
