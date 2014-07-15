'use strict';

module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
                options: {
                    force: true
                },
                folder: ['./output'],
                files:  ['./bin/*'],
            },
        
    });
    
    grunt.loadNpmTasks('grunt-contrib-clean');
    
    grunt.registerTask('default', ['clean:files']);
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