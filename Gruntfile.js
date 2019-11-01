module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		watch: {
			stylus: {
				files: ['stylus/*.styl'],
				tasks: ['stylus']
			},
			jade: {
				files: ['pug/**/*.pug'],
				tasks: ['pug']
			}
		},

		stylus: {
			compile: {
				options: {
					sourcemap: {
						inline: true,
						comment: true
					},
					// cwd: 'stylus',  // set working folder / root to copy
					// src: '**/*', 
					expand: true,
					// dest: 'ali-rasheed.github.io/css',
					compress: false,
					paths: ['stylus'],
					import: [
						'nib/*'
					]
				},
				files: {
					'ali-rasheed.github.io/css/main.css': ['stylus/*.styl']
				}
			} 
		},

		// 'css_output_location': 'ali-rasheed.github.io/css',

		pug: {
			compile: {
				options: {
					pretty: true,
					// compress: true
				},
				files: [{
					expand: true, // Enable dynamic expansion.
					cwd: 'pug/', // Src matches are relative to this path.
					src: ['**/*.pug'], // Actual pattern(s) to match.
					dest: 'ali-rasheed.github.io', // Destination path prefix.
					ext: '.html',
				}]
			}
		},
		purgecss: {
			my_target: {
				options: {
					content: ['./src/**/*.html']
				},
				files: {
					'dist/app.css': ['src/css/app.css']
				}
			}
		},

	});

	// Load grunt plugins.
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-watch');
	// grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.registerTask('default', ['watch']);
	grunt.loadNpmTasks('grunt-contrib-pug');
	// grunt.loadNpmTasks('grunt-contrib-copy');
	// grunt.registerTask(['copy']);
	grunt.loadNpmTasks('grunt-purgecss');
	grunt.loadNpmTasks('grunt-contrib-uglify');
};