
module.exports = function(grunt){
    grunt.initConfig({
watch :{
    scripts :{
      files : ['js/**','*.md','css/*.css','templates/*.html'],
      tasks : ['uglify','markdown','copy'],
      options: {
	livereload: 9090,}
    }
  },

markdown: {
    all: {
      files: [
        {
          expand: true,
          src: '*.md',
          dest: 'out/',
          ext: '.html'
        }
      ],
      options: {
        template: 'templates/index.html',
        markdownOptions: {
          gfm: true,
          codeLines: {
            before: '<span>',
            after: '</span>'
          }
        }
      }
    }
  },

  uglify:{
		build: {
		src:['js/app.js'],
		dest: 'js/app.min.js'
		}
    },
copy:{
    main: {
        files: [
            // includes files within path and its sub-directories
            {expand: true, src: ['js/**'], dest: 'out/'},
            {expand: true, src: ['css/**'], dest: 'out/'},
            {expand: true, src: ['imgs/**'], dest: 'out/'},
            {expand: true, src: ['fonts/**'], dest: 'out/'}]
    }
}

});



grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-markdown');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-copy');

grunt.registerTask('default' , ['uglify','markdown']);
};
