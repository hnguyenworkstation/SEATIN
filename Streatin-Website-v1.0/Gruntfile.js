module.exports = function(grunt) {
	
	// ===========================================================================
	// CONFIGURE GRUNT ===========================================================
	// ===========================================================================
	grunt.initConfig({

		// get the configuration info from package.json ----------------------------
		// this way we can use things like name and version (pkg.name)
		pkg: grunt.file.readJSON('package.json'),
		
    compass: {
      options: {
        bundleExec: true,
        require: ['compass/import-once/activate'],
        require: ['breakpoint']
      }
    },
    
		watch: {
		    options: {
		        event: ['changed', 'added', 'deleted']
		    },
			css: {
				files: ['sass/*.scss', 'sass/bases/*.scss'],
				tasks: ['sass:prod']
			},
			js: {
				files: ['js/*.js'],
				tasks: ['test']
			}
		},
		
		jshint: {
			options: {
				reporter: require('jshint-stylish'), // use jshint-stylish to make our errors look and read good
				globals: {
                    jQuery: true,
                    console: false,
                    module: true,
                    document: true
                }
			},

			// when this task is run, lint the Gruntfile and all js files in src
			build: ['Gruntfile.js', ]
		},
		
		// Compile SCSS files to CSS files
		sass: {
			dev: {
				files: [{
					'css/main.css': 'sass/main.scss'
				}],
				options: {
					outputStyle: 'expanded'
				},
			},
			prod: {
				files: [{
					'css/main.css': 'sass/main.scss'
				}],
				options: {
					outputStyle: 'compressed'
				},
			}
		},
	});

	// ===========================================================================
	// LOAD GRUNT PLUGINS ========================================================
	// ===========================================================================
	// we can only load these if they are in our package.json
	// make sure you have run npm install so our app can find these
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	// ============= // CREATE TASKS ========== //
	grunt.registerTask('test', ['jshint']);
	grunt.registerTask('default', ['test', 'sass:dev']);
	grunt.registerTask('prod', ['test', 'sass:prod']);
};