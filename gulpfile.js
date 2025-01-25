const {src, dest, watch, parallel, series} = require('gulp');

const sass          = require('gulp-sass')(require('sass'));
const concat        = require('gulp-concat');
const autoprefixer  = require('gulp-autoprefixer');
const uglify        = require('gulp-uglify');
const imagemin      = require('gulp-imagemin');
const svgSprite     = require('gulp-svg-sprite');
const cheerio       = require('gulp-cheerio');
const del           = require('del');
const browserSync   = require('browser-sync').create();

function browsersync() {
  browserSync.init({
    server: {
      baseDir: 'app/'
    },
    notify: false
  })
}

function styles() {
  return src('app/scss/style.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(concat('style.min.css'))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 10 versions'],
      grid: true
    }))
    .pipe(dest('app/css/'))
    .pipe(browserSync.stream())
}

function scripts() {
  return src([
      'node_modules/swiper/swiper-bundle.js',
      'app/js/main.js'
    ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js'))
    .pipe(browserSync.stream())
}

function images() {
  return src('app/img/**/*.*')
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.mozjpeg({quality: 75, progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
        plugins: [
          {
            name: 'removeViewBox',
            active: true
          },
          {
            name: 'cleanupIDs',
            active: false
          }
        ]
      })
    ]))
    .pipe(dest('dist/img'))
}

function svgSprites() {
  return src('app/img/icons/*.svg')
    .pipe(cheerio({
      run: ($) => {
        $("[fill]").removeAttr("fill");
        $("[stroke]").removeAttr("stroke");
        $("[style]").removeAttr("style");
      },
      parserOptions: {xmlMode: true},
    }))
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: '../sprite.svg',
          },
        },
      })
    )
		.pipe(dest('app/img'));
}

function build() {
  return src([
      'app/**/*.html',
      'app/css/style.min.css',
      'app/js/main.min.js'
    ], {base: 'app'})
    .pipe(dest('dist'))
}

function cleanDist() {
  return del('dist');
}

function watching() {
  watch(['app/scss/**/*.scss'], styles);
  watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
  watch(['app/**/*.html']).on('change', browserSync.reload);
  watch(['app/img/icons/*.svg'], svgSprites);
}

exports.styles      = styles;
exports.scripts     = scripts;
exports.browsersync = browsersync;
exports.watching    = watching;
exports.images      = images;
exports.cleanDist   = cleanDist;
exports.build       = series(cleanDist, images, svgSprites, build);
exports.svgSprites  = svgSprites;

exports.default  = parallel(styles, scripts, browsersync, svgSprites, watching);