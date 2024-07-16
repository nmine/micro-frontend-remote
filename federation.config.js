const { withModuleFederation } = require('@angular-architects/module-federation/webpack');
const { shareAll } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederation({
  name: 'fe1',
  filename: 'remoteEntry.js',
  exposes: {
    './Module': './src/app/remote/remote.module.ts',
    './routes': './src/app/app.routes.ts',
  },
  shared: shareAll({
    singleton: true,
    strictVersion: true,
    requiredVersion: 'auto',
  }),
});
