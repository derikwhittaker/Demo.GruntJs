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
                src: ['../src/**/*.js',
                    '!../grunt/**', '!../typings/**', '!../src/node_modules/**', '!../src/bower_components/**']
            }
        },
        typescript: {
            options: {
                module: 'commonjs',
                target: 'es5',
                sourceMap: false
            },
            source: {
                src: ['../src/**/*.ts', '!../src/**/*.d.ts', '!../src/node_modules/*.ts', '!./**/*.d.ts'],
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
                files: ['../src/**/*.ts', '!../src/**/*.d.ts', '!./**/*.d.ts'],
                tasks: ['typescript', 'jshint']
            }
        },
        nodemon: {
            dev: {
                options: {
                    args: ['dev'],
                    nodeArgs: ['--debug'],
                    callback: function (nodemon) {
                        nodemon.on('log', function (event) {
                            console.log(event.colour);
                        });
                    },
                    cwd: './',
                    ignore: ['node_modules/**', '../grunt/**'],
                    watch: ['../**']
                    //delay: 5
                },
                script: '../src/app.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-nodemon');

    grunt.loadNpmTasks('grunt-tsd');
    grunt.loadNpmTasks('grunt-typescript');

    grunt.registerTask('default', ['compile']);
    grunt.registerTask('compile', ['tsd', 'typescript', 'jshint']);

};