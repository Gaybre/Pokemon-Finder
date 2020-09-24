module.exports = {
  ci: {
    collect: {
      staticDistDir: './build',
      // url: ['http://localhost:8080']
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', {minScore: .9}],
        'categories:accessibility': ['warn', {minScore: .8}]
      }
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};