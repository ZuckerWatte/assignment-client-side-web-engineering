module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      dist: {
        options: {
          transform: [
            [
              'babelify', { 'presets': ['es2015'] }
            ]
          ]
        },
        files: {
          './giphydownloader/scripts/background.js': ['./src/background.js'],
          './giphydownloader/scripts/content.js': ['./src/content.js'],
          './giphydownloader/scripts/popup.js': ['./src/popup.js']

        }
      }
    },
    watch: {
      scripts: {
        files: ['./src/*.js'],
        tasks: ['browserify']
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ['browserify']);
};
