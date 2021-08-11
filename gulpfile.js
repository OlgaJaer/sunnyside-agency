let {src, dest, task, series, watch} = require('gulp'),
  sync = require('browser-sync').create(),
  scss = require('gulp-sass')(require('sass')),
  rename = require('gulp-rename'),
  cleanCss = require('gulp-clean-css'),
  webp = require('gulp-webp'),
  del = require('del')
  ;


//const gcmq = require('gulp-group-css-media-queries')

// // Static Server + watching scss/html files
// gulp.task('serve', ['sass'], function() {

//   browserSync.init({
//       server: "./app"
//   });

//   gulp.watch("src/scss/**/*.scss", ['sass']);
//   gulp.watch("src/*.html").on('change', browserSync.reload);
// });

// // Compile sass into CSS & auto-inject into browsers
// gulp.task('sass', function() {
//   return gulp.src("src/scss/**/*.scss")
//       .pipe(sass())
//       .pipe(gulp.dest("app/css"))
//       .pipe(browserSync.stream());
// });

// gulp.task('default', ['serve']);

function html() {
  return src('./src/*.html').pipe(dest('./dist'))
}

function css() {
  return src('./src/css/*.css').pipe(dest('./dist'))
}

function imagesWebp() {
  return src('./src/img/**/*').pipe(webp()).pipe(dest('./dist/img'))
}

function images() {
  return src('./src/img/**/*').pipe(dest('./dist/img'))
}

function js() {
  return src('./src/js/*')
    .pipe(dest('./dist/js'))
}

function compileScss(){
  return src('./src/scss/style.scss')
    .pipe(scss())
    // .pipe(cleanCss())
    .pipe(rename('style.min.css'))
    .pipe(dest('./dist/css'))
}

// gulp.task('watch-scss', function(){
//   return gulp.watch('src/scss/**/*.scss', gulp.series(compileScss))
// })
// gulp.task('watch-html', function(){
//   return gulp.watch('src/*.html', gulp.series(compileScss))
// })

function clear() {
  return del('dist')
}

task('html', html)

//gulp.task('critical', criticalCSS);
task('images', images)
task('webp', imagesWebp)
task('js', js)

// gulp.task(
//   'build',
//   gulp.series(
//     gulp.parallel(html, compileScss)
//     //criticalCSS
//   )
// )


// let watch = gulp.parallel(build,browserSync);

// exports.watch = watch;
// exports.default = watch;

function serve() {
  sync.init({
    server: './dist'
  })

  watch('src/**.html', series(html)).on('change', sync.reload)
  watch('src/scss/**.scss', series(compileScss)).on('change', sync.reload)
}


exports.build = series(clear, images, compileScss, html, js )
exports.serve = series(clear, images, compileScss, html, js, serve)
exports.clear = clear