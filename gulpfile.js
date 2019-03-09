const gulp = require('gulp')
const plumber = require('gulp-plumber')
const autoprefixer = require('gulp-autoprefixer')
const server = require('browser-sync').create()
const csso = require('gulp-csso')
const concatCss = require('gulp-concat-css')
const rename = require('gulp-rename')
const twig = require('gulp-twig')

gulp.task('styles', function () {
  return gulp.src('src/styles/index.css')
    .pipe(plumber())
    .pipe(concatCss('styles.css'))
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('css'))
    .pipe(csso())
    .pipe(rename('styles.min.css'))
    .pipe(gulp.dest('css'))
    .pipe(server.stream())
})

gulp.task('html', function () {
  return gulp.src('src/*.twig')
    .pipe(twig())
    .pipe(gulp.dest('./'))
})

gulp.task('reload', function (done) {
  server.reload()
  done()
})

gulp.task('server', function () {
  server.init({
    server: './',
    notify: false,
    open: false,
    cors: true,
    ui: false
  })

  gulp.watch('src/styles/**/*.css', gulp.series('styles', 'reload'))
  gulp.watch('src/**/*.twig', gulp.series('html', 'reload'))
  gulp.watch('img/**.*', gulp.series('build', 'reload'))
})

gulp.task('build', gulp.series(
  'styles',
  'html'
))

gulp.task('start', gulp.series('build', 'server'))
