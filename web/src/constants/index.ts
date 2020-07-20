export default {
  staticPath:
    process.env.NODE_ENV === 'production'
      ? 'http://localhost:55555'
      : 'http://localhost:55555',
}
