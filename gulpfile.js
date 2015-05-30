var gulp 		= require('gulp');
var handlebars 	= require('gulp-handlebars');
var wrap 		= require('gulp-wrap');
var declare 	= require('gulp-declare');
var concat 		= require('gulp-concat');

// path
var hbs = 'app/assets/hbs/*.hbs';
var dest = 'app/assets/javascripts/backbonejs/templates';

gulp.task('hbs', function(){
  gulp.src(hbs)
    .pipe(handlebars())
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'MyApp.Templates',
      noRedeclare: true, // Avoid duplicate declarations
    }))
    .pipe(concat('layout.js'))
    .pipe(gulp.dest(dest));
});

gulp.task('watch', function() {
	gulp.watch(hbs, ['hbs']);
});

gulp.task('default', ['hbs','watch']);