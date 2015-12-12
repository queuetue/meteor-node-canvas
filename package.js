Package.describe({
  name: 'queuetue:node-canvas',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Meteor Package for Server Side Node Canvas',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/queuetue/meteor-node-canvas',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  'canvas': '1.3.5'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('node-canvas.js');
  api.export(['NodeCanvas'], 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('queuetue:node-canvas');
  api.addFiles('node-canvas-tests.js');
});
