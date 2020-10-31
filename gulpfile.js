//JS
var gulp = require('gulp');
var sass = require('gulp-sass');
var fileinclude = require('gulp-file-include');
var connect = require('gulp-connect');

//JS
gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children directories
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    // .pipe(browserSync.reload({
    //   stream: true
    // }))
});

//JS
gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', ['sass']);
  // autres observations
});

gulp.task( 'default', [ 'watch' ] )

// Component HTML
gulp.task('fileinclude', function() {
  gulp.src(['index.html'])
    .pipe(fileinclude())
    .pipe(gulp.dest('./'));
});

// RUN PROJECT
gulp.task('connect', function() {
  connect.server({
    root: '.',
    livereload: true
  })
});

// gulp.task('watch', ['fileinclude','connect'], function () {
//   gulp.watch('app/scss/**/*.scss', ['sass']);
//   // gulp.watch(['app/**/*'], reload);
//   // gulp.watch('app/styles/**/*.scss', ['styles']);
//   // gulp.watch('app/scripts/**/*.js', ['scripts']);
//   // gulp.watch('app/images/**/*', ['images']);
//   // gulp.watch('bower.json', ['wiredep']);
// });
