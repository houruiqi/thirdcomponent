module.exports = function(grunt) {
    grunt.initConfig({
        uglify: {
            release:{
              files: {
                './dist/component.min.js': 'component.js'
              }
            }       
        },
        cssmin: {  
            './dist/component.min.css': 'component.css'
        },
        htmlmin: {
            options: {
              collapseWhitespace: true,
              preserveLineBreaks: false
            },
            files: {
              src: 'index.html',
              dest: './dist/index.html'
            }
        }
        
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
   
    grunt.registerTask('default',['htmlmin','cssmin','uglify']);
};