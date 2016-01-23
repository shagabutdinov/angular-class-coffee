var gulp = require('gulp');
var util = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var coffee = require('gulp-coffee');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('compile-coffee', function() {
  return gulp
    .src(['angular-class.coffee'])
    .pipe(sourcemaps.init())
    .pipe(coffee())
    .on('error', function(message) {
      util.log(util.colors.red(message));
      this.end();
    })
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build'));
});

gulp.task('minify-coffee', function() {
  return gulp
    .src(['angular-class.coffee'])
    .pipe(coffee())
    .pipe(uglify())
    .pipe(rename(function(path) { path.basename += '.min' }))
    .on('error', function(message) {
      util.log(util.colors.red(message));
      this.end();
    })
    .pipe(gulp.dest('build'));
});

gulp.task('default', ['compile-coffee', 'minify-coffee']);
