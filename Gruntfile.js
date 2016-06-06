module.exports = function (grunt) {
  'use strict';

  var bootstrapScripts = [
    'assets/bootstrap/js/dist/util.js',
    'assets/bootstrap/js/dist/alert.js',
    'assets/bootstrap/js/dist/button.js',
    'assets/bootstrap/js/dist/carousel.js',
    'assets/bootstrap/js/dist/collapse.js',
    'assets/bootstrap/js/dist/dropdown.js',
    'assets/bootstrap/js/dist/modal.js',
    'assets/bootstrap/js/dist/scrollspy.js',
    'assets/bootstrap/js/dist/tab.js',
    'assets/bootstrap/js/dist/tooltip.js',
    'assets/bootstrap/js/dist/popover.js'
  ];

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      js: 'js/',
      bootstrap: '<%= copy.bootstrap.dest %>'
    },

    copy: {
      jquery: {
        expand: true,
        cwd: 'assets/jquery/dist/',
        src: 'jquery.min.js',
        dest: 'js/'
      },
      bootstrap: {
        expand: true,
        cwd: 'assets/bootstrap/scss/',
        src: ['**/*'],
        dest: '_sass/vendors/bootstrap/'
      }
    },

    jshint: {
      options: { jshintrc: '_scripts/.jshintrc' },
      grunt: {
        options: { jshintrc: '.jshintrc' },
        src: 'Gruntfile.js'
      },
      core: { src: '_scripts/*.js' }
    },

    jscs: {
      options: { config: 'assets/bootstrap/js/.jscsrc' },
      grunt: { src: '<%= jshint.grunt.src %>' },
      core: { src: '<%= jshint.core.src %>' }
    },

    concat: {
      core: {
        src: [
          bootstrapScripts,
          '_scripts/main.js'
        ],
        dest: 'js/main.js'
      }
    },

    uglify: {
      options: {
        compress: { warnings: false },
        mangle: true
      },
      core: {
        src: '<%= concat.core.dest %>',
        dest: 'js/main.min.js'
      }
    },

    watch: {
      js: {
        files: '<%= jshint.core.src %>',
        tasks: 'build',
        options: { livereload: true }
      },
      grunt: {
        files: 'Gruntfile.js',
        tasks: 'build',
        options: { livereload: true }
      }
    }

  });

  require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });
  require('time-grunt')(grunt);

  grunt.registerTask('build', ['clean', 'copy', 'jshint', 'jscs', 'concat', 'uglify']);
  grunt.registerTask('default', ['build']);
};
