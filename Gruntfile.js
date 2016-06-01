module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    copy: {
      bootstrap: {
        expand: true,
        cwd: 'assets/bootstrap/scss/',
        src: ['**/*'],
        dest: '_sass/vendors/bootstrap/'
      }
    }

  });

  require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });
  require('time-grunt')(grunt);

  grunt.registerTask('build', ['copy']);

};
