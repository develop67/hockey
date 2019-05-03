module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*!\n' +
            ' * Hockey v<%= pkg.version %>\n' +
            ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' */\n',

    concat: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: [
          'js/src/jquery.min.js',
          'js/src/bootstrap.bundle.min.js',
          'js/src/postboot.min.js',
          'js/src/slick.min.js',
          'js/src/main.js'
        ],
        dest: 'js/app.js'
      }
    },

    uglify: {
      dist: {
        files: {
          'js/app.min.js': '<%= concat.dist.dest %>'
        }
      }
    },

    sass: {
      options: {
        sourcemap: 'none'
      },
      dist: {
        files: {
          'css/app.css': 'scss/main.scss'
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: [
          'Chrome >= 35',
          'Firefox >= 38',
          'Edge >= 12',
          'Explorer >= 10',
          'iOS >= 8',
          'Safari >= 8',
          'Android 2.3',
          'Android >= 4',
          'Opera >= 12'
        ]
      },
      dist: {
        files: {
          'css/app.css': 'css/app.css'
        }
      }
    },

    cssmin: {
      dist: {	
        files: {	
          'css/app.min.css': [
            'css/bootstrap.min.css',
            'css/postboot.min.css',
            'css/slick.css',
            'css/slick-theme.css',
            'css/app.css'
          ]
        }
      }
    },

    usebanner: {
      options: {
        position: 'top',
        banner: '<%= banner %>'
      },
      files: {
        src: 'css/app.min.css'
      }
    },

    watch: {
      dist_css: {
        files: 'scss/*.scss',
        tasks: ['dist-css']
      },
      dist_js: {
        files: 'js/src/*.js',
        tasks: ['dist-js']
      }
    }
  });

  // JS distribution task.
  grunt.registerTask('dist-js', ['concat:dist', 'uglify:dist']);

  // CSS distribution task.
  grunt.registerTask('dist-css', ['sass:dist', 'autoprefixer:dist', 'usebanner', 'cssmin:dist']);

  // Full distribution task.
  grunt.registerTask('dist', ['dist-js', 'dist-css']);

  // Default task(s).
  grunt.registerTask('default', 'dist');
};
