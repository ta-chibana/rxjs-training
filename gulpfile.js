const gulp = require('gulp');
const typescript = require('gulp-typescript');

gulp.task('compile:ts', () => {
  return gulp.src(['src/*.ts'])
    .pipe(typescript())
    .pipe(gulp.dest('dist/'));
});

gulp.task('watch', () => {
  gulp.watch([
    'src/*.ts'
  ], ['compile:ts'])
});

gulp.task('default', ['compile:ts']);
