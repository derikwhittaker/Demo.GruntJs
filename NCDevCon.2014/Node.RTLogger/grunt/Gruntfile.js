'use strict';

module.exports = function (grunt) {
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
                node: true,
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                unused: true,
                boss: true,
                eqnull: true,
                globals: {
                    "angular": true
                }
            },
            files: {
                src: ['../**/*.js',
                    '!../grunt/**', '!../typeings/**', '!../node_modules/**']
            }
        },
        typescript: {
            options: {
                module: 'commonjs',
                target: 'es5',
                sourceMap: false
            },
            source: {
                src: ['../**/*.ts', '!../**/*.d.ts', '!./**/*.d.ts'],
                dest: './'
            }
        },
        tsd:{
            refresh: {
                options: {
                    command: 'reinstall',
                    latest: true,
                    overwrite: true,
                    config: './tsd.json'
                }
            }
        },
        watch: {
//            gruntfile: {
//                files: 'gruntfile.js',
//                tasks: ['jshint:gruntfile']
//            },
            source: {
                files: ['../**/*.ts', '!../**/*.d.ts', '!./**/*.d.ts'],
                tasks: ['typescript', 'jshint']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.loadNpmTasks('grunt-tsd');
    grunt.loadNpmTasks('grunt-typescript');

    grunt.registerTask('default', ['compile']);
    grunt.registerTask('compile', ['tsd', 'typescript', 'jshint']);

};