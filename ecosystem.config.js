module.exports = {
  apps: [
    {
      name: 'nestjs-app',
      script: 'npm',
      args: 'run start',
      watch: true,
      ignore_watch: ['node_modules', 'logs', 'public'],
    },
  ],
};
