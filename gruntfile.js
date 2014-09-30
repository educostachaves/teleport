module.exports = function(grunt) {
 
    // Project configuration.
    grunt.initConfig({
 
        //Read the package.json (optional)
        pkg: grunt.file.readJSON('package.json'),
 
        // Metadata.
        meta: {
            basePath: './',
            srcPath: './src/sass/',
            deployPath: './dist/css/'
        },
 
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '* Copyright (c) <%= grunt.template.today("yyyy") %> ',
 
        // SASS
        sass: {
            dist: {
            	options: { 
			        style: 'compact'
			    },
                files: {
                    '<%= meta.deployPath %>main.css': '<%= meta.srcPath %>main.scss'
                }
            }
        },

        //Uglify
        uglify: {
            'build/home.js': 'src/home.js',
            'build/main.js': 'src/main.js'  
         },

        //watch
        watch: {
            scripts: {
                files: [
                    '<%= meta.srcPath %>/**/*.scss'
                ],
                tasks: ['sass']
            }
        }
 
    });
 
    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
 
    // Default task.
    grunt.registerTask('default', [ 'sass' , 'uglify' ]);
 
};