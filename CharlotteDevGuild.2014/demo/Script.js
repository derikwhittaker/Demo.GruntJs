-- Empty clean task
        clean: {
                options: {
                },
                files:  ['./bin/*'],
            },

-- SetupDemo task
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

-- setup for deleting a folder
folder: ['./output'],
    
-- load the typescript plugin
grunt.loadNpmTasks('grunt-typescript');
            
-- typescript configuration
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
            
            
-- jshint shell
        jshint : {
            options: {
            },
              files: ['./www/PlsRemindMe.Web/js/_output/*.js']
        },
           
-- sjhint errors
                '-W069': false,   // failure due to the way typescript works w/ enums
                '-W004': false,    // failre due to typescript inheritance,
                    
-- ignore file
ignores: ['./www/PlsRemindMe.Web/js/_output/plsRemindMe.common.js'],
    
    
    
-- uglify shell
        uglify: {
            development: {
              files: {}
            },
            options: {
            },        
        },    
            
-- single file
'./www/PlsRemindMe.Web/js/_output/plsRemindMe.binders.js': ['./www/PlsRemindMe.Web/js/_output/plsRemindMe.binders.js'],
    
-- entire folder

              files: [{
                  expand: true,
                  cwd: './www/PlsRemindMe.Web/js/_output/',
                  src: '**/*.js',
                  dest: './www/PlsRemindMe.Web/js/_output/'
              }] 

              
-- turn off mangle
            mangle: false,
                
-- how to compress
    compress: {
        drop_console: true
    },  
        
-- beautify
//beautify: true,
