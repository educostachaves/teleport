module.exports = function(grunt) {
 
    // Project configuration.
    grunt.initConfig({
 
        //Read the package.json (optional)
        pkg: grunt.file.readJSON('package.json'),
 
        // Metadata.
        meta: {
            basePath: './',
            srcPath: './src/sass/',
            deployPath: './dev/css/'
        },
 
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '* Copyright (c) <%= grunt.template.today("yyyy") %> ',
 
        // SASS
        sass: {
            dev: {
            	options: { 
			        style: 'compressed',
                    compass: true
			    },
                files: {
                    '<%= meta.deployPath %>main.css': '<%= meta.srcPath %>main.scss'
                }
            }
        },

        //Uglify
        uglify: {
            'dev/js/home.js': 'src/js/home.js',
            'dev/js/main.js': 'src/js/main.js'  
        },

        //CONCAT
        concat: {
            options: {
                separator: ';'
            },
            dev: {
                src: ['src/js/*.js'],
                dest: 'dev/js/app.js'
            }
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
    grunt.registerTask('default', [ 'sass' , 'uglify' , 'concat' ]);
 
};