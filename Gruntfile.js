module.exports = function(grunt) {
    var production = grunt.option('production') || false;

    appendPublicSrc = function(files){
        var newFiles = [];
        for(i=0; i<files.length; i++){
            newFiles.push('public_src/' + files[i]);
        }
        return newFiles;
    }

    grunt.initConfig({
        clean: ['public_build'],

        watch: {
            styles: {
                files: ['public_src/**/*.scss'],
                tasks: ['sass'],
            },
            views: {
                files: ['public_src/**/*.jade', 'public_src/scripts.json'],
                tasks: ['jade'],
            },
            scripts: {
                files: ['public_src/**/*.js'],
                tasks: ['copy'],
                options: {
                    spawn: false
                }
            },
            livereload: {
                files: ['public_build/**/*.css', 'public_build/**/*.html'],
                options: {
                    livereload: true
                }
            }
        },

        sass: {
            dev: {
                options: {
                    style: 'compressed'
                },
                files: [{
                    expand: true,
                    cwd: 'public_src',
                    src: 'styles/styles.scss',
                    dest: 'public_build',
                    ext: '.css'
                }]
            }
        },

        jade: {
            dev: {
                options: {
                    pretty: false,
                    data: {
                        dev: !production,
                        scripts: grunt.file.readJSON('public_src/scripts.json')
                    }
                },
                files: [{
                    expand: true,
                    cwd: 'public_src',
                    src: '**/*.jade',
                    dest: 'public_build',
                    ext: '.html'
                }]
            }
        },

        copy: {
            dev: {
                files: [{
                    expand: true,
                    cwd: 'public_src/scripts',
                    src: '**/*.js',
                    dest: 'public_build/scripts'
                }]
            }
        },

        uglify: {
            production: {
                options: {
                    mangle: false,
                    sourceMap: true
                    // ,report: 'min'
                },
                files: {
                    'public_build/scripts/scripts.min.js': appendPublicSrc(grunt.file.readJSON('public_src/scripts.json'))
                }
            }
        }
    });

    grunt.event.on('watch', function(action, filepath) {
        grunt.config('copy.dev.files', [{
            src: filepath,
            dest: filepath.replace('public_src', 'public_build')
        }]);
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    var tasks;
    if(production) 
        tasks = ['clean', 'sass', 'jade', 'uglify'];
    else
        tasks = ['clean', 'sass', 'jade', 'copy', 'watch']; 

    grunt.registerTask('default', tasks);
};