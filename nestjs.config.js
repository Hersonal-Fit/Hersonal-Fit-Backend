module.exports = {
  apps: [
    {
      name: 'Hersonal-Fit',
      interpreter: 'ts-node',
      script: 'src/main.ts',
      watch: false,
      env: {
        NODE_ENV: 'development',
      },
    },
  ],
};
