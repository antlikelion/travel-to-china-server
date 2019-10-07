module.exports = {
  apps: [
    {
      name: 'MACKTA-SERVER',
      script: 'build/server/index.js',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      instances: 1,
      env: {
        NODE_ENV: 'development'
      },
      env_test: {
        NODE_ENV: 'test'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
}
