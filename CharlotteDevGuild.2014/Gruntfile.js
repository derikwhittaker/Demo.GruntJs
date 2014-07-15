'use strict';

module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
                options: {
                    force: true
                },
                files:  ['./bin/*'],
                folder: ['./output'],
            },
        typescript: {
            options: {
                module: 'commonjs'
            },        
            common: {
                src: ['./www/PlsRemindMe.Web/js/*.ts'],
                dest: './www/PlsRemindMe.Web/js/_output/plsRemindMe.common.js',
            },
            binders: {
                src: ['./www/PlsRemindMe.Web/js/binders/*.ts'],
                dest: './www/PlsRemindMe.Web/js/_output/plsRemindMe.binders.js',
            },
            models: {
                src: ['./www/PlsRemindMe.Web/js/models/*.ts'],
                dest: './www/PlsRemindMe.Web/js/_output/plsRemindMe.models.js',
            },
            viewModels: {
                src: ['./www/PlsRemindMe.Web/js/viewModels/*.ts'],
                dest: './www/PlsRemindMe.Web/js/_output/plsRemindMe.viewModels.js',
            }
        },      
        jshint : {
            options: {
                //force : true,
                '-W069': false,   // failure due to the way typescript works w/ enums
                '-W004': false,    // failre due to typescript inheritance,      
                ignores: ['./www/PlsRemindMe.Web/js/_output/plsRemindMe.common.js'],    
            },
              files: ['./www/PlsRemindMe.Web/js/_output/*.js']
        },        
        uglify: {
            development: {
//              files: {
//              './www/PlsRemindMe.Web/js/_output/plsRemindMe.binders.js': ['./www/PlsRemindMe.Web/js/_output/plsRemindMe.binders.js'],
//              }
              files: [{
                  expand: true,
                  cwd: './www/PlsRemindMe.Web/js/_output/',
                  src: '**/*.js',
                  dest: './www/PlsRemindMe.Web/js/_output/'
              }]                 
            },
            options: {
            },        
        }, 
    });
  
    
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    grunt.registerTask('default', ['clean', 'typescript', 'uglify']);
    
    grunt.registerTask('setupdemo', function(){
        
        if( grunt.file.exists('output') ){            
            grunt.file.delete('output');
        }
        
        if( grunt.file.exists('bin') ){            
            grunt.file.delete('bin');
        }
        
        grunt.file.mkdir('output');
        grunt.file.write('output/foo.txt', "foo foo foo");
        
        grunt.file.mkdir('bin');    
        grunt.file.write('bin/foo.txt', "bar bar bar");
    });
};