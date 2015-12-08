Package.describe({
  name: 'mpowaga:jquery-ui-widget',
  version: '1.11.4',
  summary: 'Meteor wrapper package for jQuery UI widgets API',
  git: 'https://github.com/mpowaga/meteor-jquery-ui-widget.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('jquery.ui.widget.js', 'client');
});
