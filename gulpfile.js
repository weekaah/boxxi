var browserSync = require('browser-sync').create(),
    gulp = require('gulp'),
    cssnano = require('gulp-cssnano'),
    plumber = require('gulp-plumber'),
    svgmin = require('gulp-svgmin'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    runSequence = require('run-sequence');


// -----------------------------------------------------------------------------
// start local server
// -----------------------------------------------------------------------------
gulp.task('browser-sync', function() {
  browserSync.init(['**/*.css', 'js/*.js', '**/*.html'], {
    server: './',
    port: 51723,
    browser: ['opera'],
  });
});


// -----------------------------------------------------------------------------
// optimize svg
// -----------------------------------------------------------------------------
gulp.task('svg-optimize', function () {
  return gulp.src(['svg/*.svg'])
  .pipe(svgmin())
  .pipe(gulp.dest('svg'));
});


// -----------------------------------------------------------------------------
// minify css
// -----------------------------------------------------------------------------
gulp.task('css-minify', function() {
  gulp.src('css/boxxi.css')
  .pipe(plumber())
  .pipe(cssnano({discardComments: {removeAll: true}}))
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('dist/css'));
});


// -----------------------------------------------------------------------------
// minify js
// -----------------------------------------------------------------------------
gulp.task('js-minify', function() {
  gulp.src('js/boxxi.js')
  .pipe(plumber())
  .pipe(uglify())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('dist/js'));
});


// -----------------------------------------------------------------------------
// default gulp task
// -----------------------------------------------------------------------------
gulp.task('production', function() {
  runSequence(
    'css-minify',
    'js-minify'
  );
});


// -----------------------------------------------------------------------------
// default gulp task
// -----------------------------------------------------------------------------
gulp.task('default', function() {
  runSequence(
    'browser-sync'
  );
});
