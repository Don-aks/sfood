const { src, dest, watch, parallel, series } = require('gulp');

const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const svgSprite = require('gulp-svg-sprite');
const cheerio = require('gulp-cheerio');
const del = require('del');
const browserSync = require('browser-sync').create();
const fileInclude = require('gulp-file-include');

function browsersync() {
  browserSync.init({
    server: {
      baseDir: 'app/',
    },
    notify: false,
  });
}

function styles() {
  return src(['app/scss/**/*.scss', 'app/components/**/*.scss'])
    .pipe(sass({ style: 'compressed' }))
    .pipe(
      rename({
        suffix: '.min',
      })
    )
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['last 10 versions'],
        grid: true,
      })
    )
    .pipe(dest('app/css/'))
    .pipe(browserSync.stream());
}

function scripts() {
  return src([
    'node_modules/swiper/swiper-bundle.js',
    'node_modules/choices.js/public/assets/scripts/choices.js',
    'app/js/libs/dual-range.js',
    'node_modules/micromodal/dist/micromodal.js',

    'app/js/utils/debounce.js',
    'app/js/utils/get-els.js',
    'app/js/utils/set-tab-index.js',
    'app/js/utils/return-focus-to-last-el.js',
    'app/js/utils/show-to-sr.js',
    'app/js/utils/hide-from-sr.js',
    'app/js/utils/generate-swiper-config.js',
    'app/js/utils/create-swiper.js',

    'app/js/config.js',

    'app/js/modules/header.js',
    'app/js/modules/menu.js',
    'app/js/modules/esc-closing.js',
    'app/js/modules/tabs.js',
    'app/js/modules/restaurant-swiper.js',
    'app/js/modules/filters.js',
    'app/js/modules/pagination.js',
    'app/js/modules/modal-swiper.js',
    'app/js/modules/product-count.js',
    'app/js/modules/rating-arrows.js',

    'app/js/main.js',
  ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js'))
    .pipe(browserSync.stream());
}

function images() {
  return src(['app/img/**/*.*', '!**/icons/**', '!**/icons-original/**'])
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [
            {
              name: 'removeViewBox',
              active: true,
            },
            {
              name: 'cleanupIDs',
              active: false,
            },
          ],
        }),
      ])
    )
    .pipe(dest('dist/img'));
}

function svgSprites() {
  return src('app/img/icons/*.svg')
    .pipe(
      cheerio({
        run: $ => {
          $('[fill]').removeAttr('fill');
          $('[stroke]').removeAttr('stroke');
          $('[style]').removeAttr('style');
        },
        parserOptions: { xmlMode: true },
      })
    )
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

function svgSpritesWithoutRemovingAttributes() {
  return src('app/img/icons-original/*.svg')
    .pipe(
      cheerio({
        parserOptions: { xmlMode: true },
      })
    )
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: '../sprite-original.svg',
          },
        },
      })
    )
    .pipe(dest('app/img'));
}

function htmlInclude() {
  return src(['app/html/*.html'])
    .pipe(
      fileInclude({
        prefix: '@',
        basepath: '@file',
        indent: true,
      })
    )
    .pipe(dest('app'))
    .pipe(browserSync.stream());
}

function build() {
  return src(
    [
      'app/*.html',
      'app/fonts/**/*',
      'app/css/index.min.css',
      'app/css/catalog.min.css',
      'app/css/product.min.css',
      'app/js/main.min.js',
    ],
    {
      base: 'app',
    }
  ).pipe(dest('dist'));
}

function cleanDist() {
  return del('dist');
}

function watching() {
  watch(['app/scss/**/*.scss', 'app/components/**/*.scss'], styles);
  watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
  watch(['app/**/*.html']).on('change', browserSync.reload);
  watch(['app/img/icons/*.svg'], svgSprites);
  watch(['app/img/icons-original/*.svg'], svgSpritesWithoutRemovingAttributes);
  watch(['app/html/**/*.html', 'app/components/**/*.html'], htmlInclude);
}

exports.styles = styles;
exports.scripts = scripts;
exports.browsersync = browsersync;
exports.watching = watching;
exports.images = images;
exports.cleanDist = cleanDist;
exports.build = series(cleanDist, images, svgSprites, build);
exports.svgSprites = svgSprites;
exports.svgOriginalSprites = svgSpritesWithoutRemovingAttributes;
exports.htmlInclude = htmlInclude;

exports.default = parallel(
  styles,
  scripts,
  browsersync,
  svgSprites,
  svgSpritesWithoutRemovingAttributes,
  htmlInclude,
  watching
);
