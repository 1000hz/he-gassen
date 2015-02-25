var gulp         = require('gulp')
var gutil        = require('gulp-util')
var plumber      = require('gulp-plumber')
var sass         = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')
var imagemin     = require('gulp-imagemin')
var del          = require('del')
var browserSync  = require('browser-sync')
var reload       = browserSync.reload

var paths = {
  src: {
    sass: 'src/css/**/*.scss',
    css:  'src/css',
    js:   'src/js/**/*.js',
    img:  'src/images/*',
    html: 'src/index.html'
  },
  dest: {
    css:  'dist/assets',
    js:   'dist/assets',
    img:  'dist/assets',
    html: 'dist'
  }
}

var onError = function (err) {
  gutil.beep()
  gutil.log(gutil.colors.red(err))
  this.emit('end')
}

gulp.task('clean', function (cb) {
  del(['dist'], cb)
})

gulp.task('copy', function () {
  return gulp.src(paths.src.html)
    .pipe(gulp.dest(paths.dest.html))
})

gulp.task('js', function () {
  return gulp.src(paths.src.js)
    .pipe(gulp.dest(paths.dest.js))
})

gulp.task('css', function () {
  return gulp.src(paths.src.sass)
    .pipe(plumber({errorHandler: onError}))
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest(paths.dest.css))
    .pipe(reload({stream: true}))
})

gulp.task('img', function () {
  return gulp.src(paths.src.img)
    .pipe(imagemin({
      progressive: true
    }))
    .pipe(gulp.dest(paths.dest.img))
})

gulp.task('serve', ['build', 'watch'], function () {
  browserSync({
    server: './dist',
    open: false
  })
})

gulp.task('watch', function () {
  gulp.watch(paths.src.sass, ['css'])
  gulp.watch(paths.src.html, ['copy', reload])
  gulp.watch(paths.src.js,   ['js', reload])
})

gulp.task('build', ['copy', 'css', 'js', 'img'])