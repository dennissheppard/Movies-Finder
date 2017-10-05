module.exports = {
  navigateFallback: '/index.html',
  stripPrefix: 'dist',
  root: 'dist/',
  staticFileGlobs: [
    'dist/index.html',
    'dist/**.js',
    'dist/**.css'
  ],
  runtimeCaching: [
    {
      urlPattern: '/*',
      handler: 'cacheFirst',
      options: {
        origin: 'tmdb.org',
        cache: {
          maxEntries: 100,
          name: 'movie-cache'
        }
      }
    },
    {
      urlPattern: '/*',
      handler: 'cacheFirst',
      options: {
        origin: 'themoviedb.org',
        cache: {
          maxEntries: 10,
          name: 'movie-cache'
        }
      }
    },
      {
        urlPattern: '/*',
          handler: 'cacheFirst',
          options: {
            origin: 'bootstrapcdn.com'
          }
      },
      {
        urlPattern: '/*',
          handler: 'cacheFirst',
          options: {
            origin: 'jquery.com'
          }
      }
  ]
};