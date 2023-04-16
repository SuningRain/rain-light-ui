import gulp from 'gulp'
import dartSass from 'sass'
import gulpSass from 'gulp-sass' // sass - css
import minifyCSS  from 'gulp-minify-css'

const sass = gulpSass(dartSass)
gulp.task('sass', async function () {
  return gulp.src('packages/css/**/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/packages/css'))
})