module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		watch: {
			stylus: {
				files: [
					'css/stylus/*.styl'
				],
				tasks: ['stylus']
			}
			jade: {
				files['* .jade '],

			}
		},

		stylus: {
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

		'css_output_location': 'css',
		jade: {
			options: {
				pretty: true,
			}
		}
	});

	// Load grunt plugins.
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jade')

};