
import SitemapPlugin from 'sitemap-webpack-plugin'
// You can write the paths as an array of strings or an array of objects
const paths = [
  {
      path: '/',
      lastmod: '2023-02-26',
      priority: 1.0,
      changefreq: 'monthly'
  },
  {
      path: '/hgt/',
      lastmod: '2023-02-22',
      priority: 0.9,
      changefreq: 'yearly'
  }
]

// export default  {
//   plugins: [
//     new SitemapPlugin({ base: 'https://hypatiagames.net/', paths })
//   ]
// }

export const configureWebpack = {
    plugins: [
        new SitemapPlugin({ base: 'https://hypatiagames.net/', paths })
    ]
}


