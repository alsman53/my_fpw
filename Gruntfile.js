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
				files: ['jade/*.jade'],
				tasks: ['jade']
			}
		},

		stylus: {
			copy: {

			},
			compile: {
				options: {
					compress: false,
					paths: ['stylus'],
					import: [
						'nib/*'
					]
				},
				files: {
					'<%= css_output_location %>/main.css': ['stylus/*.styl']
				}
			}
		},
		'css_output_location': 'build/css',
		// miniclean:{
		// 	uglify:{
		// 		files:["build/css"],
		// 		tasks: ['uglify']
		// 	}

		// 	folder: ['path/to/dir/'],
		// 	folder_v2: ['path/to/dir/**'],
		// 	contents: ['path/to/dir/*'],
		// 	subfolders: ['path/to/dir/*/'],
		// 	css: ['path/to/dir/*.css'],
		// 	all_css: ['path/to/dir/**/*.css']
		// 	js: ['path/to/dir/*.js', '!path/to/dir/*.min.js']

		//    },

		jade: {
			compile: {
				options: {
					// pretty: true,
					// compress: true
				},
				files: [{
					expand: true, // Enable dynamic expansion.
					cwd: 'jade/', // Src matches are relative to this path.
					src: ['*.jade'], // Actual pattern(s) to match.
					dest: 'build', // Destination path prefix.
					ext: '.html',
				}]
			}
		},
		copy: {
			main: {
				options: {flatten: true}, 
				files: [
					{expand: true, src: ['css/**'], dest: 'build/css' ,
					// cwd: 'css/',      // Src matches are relative to this path.
					// src: ['**/*.js'], // Actual pattern(s) to match.
			 },
					{ expand: true,src: ['js/**'], dest: 'build/js' }
				]
			}
		},


	});

	// Load grunt plugins.
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.registerTask('default', ['watch']);
	grunt.loadNpmTasks('grunt-contrib-copy');

	// grunt.registerTask(['copy']);

	grunt.loadNpmTasks('grunt-contrib-uglify');
};