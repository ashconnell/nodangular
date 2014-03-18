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
        clean: {
            all: {
                src: ['public_build']
            },
            scripts: {
                src: ['public_build/scripts']
            },
            images: {
                src: ['public_build/imgs']
            }
        },

        watch: {
            styles: {
                files: ['public_src/**/*.scss'],
                tasks: ['sass'],
            },
            views: {
                files: ['public_src/**/*.jade', 'public_src/scripts.json'],
                tasks: ['jade'],
            },
            images: {
                files: ['public_src/imgs/**/*'],
                tasks: ['clean:images', 'copy:images'],
                options: {
                    spawn: false
                }
            },
            scripts: {
                files: ['public_src/**/*.js'],
                tasks: ['clean:scripts', 'copy'],
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
            scripts: {
                files: [{
                    expand: true,
                    cwd: 'public_src/scripts',
                    src: '**/*.js',
                    dest: 'public_build/scripts'
                }]
            },
            images: {
                files: [{
                    expand: true,
                    cwd: 'public_src/imgs',
                    src: '**/*',
                    dest: 'public_build/imgs'
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

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    var tasks;
    if(production) 
        tasks = ['clean:all', 'sass', 'jade', 'copy:images', 'uglify'];
    else
        tasks = ['clean:all', 'sass', 'jade', 'copy', 'watch']; 

    grunt.registerTask('default', tasks);
};