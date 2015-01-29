/*global require*/
'use strict';

require.config({
  baseUrl: '/'
  ,shim: {
    bootstrap: {
      deps: ['jquery']
      ,exports: 'jquery'
    }
  }
  ,paths: {
    text: 'bower_components/requirejs-text/text'
    ,jquery: 'bower_components/jquery/dist/jquery'
    ,backbone: 'bower_components/backbone/backbone'
    ,underscore: 'bower_components/lodash/dist/lodash'
    ,mustache: 'bower_components/mustache/mustache'
  }
  ,packages: [{
    name: 'lateralus'
    ,location: 'bower_components/lateralus/scripts'
    ,main: 'lateralus'
  }, {
    name: 'build-test'
    ,location: 'scripts'
    ,main: 'build-test'
  }, {
    name: 'build-test.component.container'
    ,location: 'scripts/components/container'
  }]
});

require([

  'build-test'

], function (

  BuildTest

) {
  window.buildTest = new BuildTest(document.getElementById('build-test'));
});
