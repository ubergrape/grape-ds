export default {
  staticPath:
    process.env.NODE_ENV === 'production'
      ? window.location.origin
      : 'http://localhost:55555/src/fonts/',
}
