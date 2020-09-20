"use strict";

const {src, dest} = require("gulp");
const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const cssbeautify = require("gulp-cssbeautify");
const removeComments = require('gulp-strip-css-comments');
const rename = require("gulp-rename");
const sass = require("gulp-sass");
const cssnano = require("gulp-cssnano");
const rigger = require("gulp-rigger");
const terser = require('gulp-terser');
const plumber = require("gulp-plumber");
const imagemin = require("gulp-imagemin");
const htmlmin = require('gulp-htmlmin');
const del = require("del");
const panini = require("panini");
const browsersync = require("browser-sync").create();


/* Paths */
var path = {
    openServer: {
        html: "F:/OSPanel/domains/dist/",
        js: "F:/OSPanel/domains/dist/assets/js/",
        css: "F:/OSPanel/domains/dist/assets/css/",
        images: "F:/OSPanel/domains/dist/assets/img/",
        fonts: "F:/OSPanel/domains/dist/assets/fonts/"
    },
    build: {
        html: "dist/",
        js: "dist/assets/js/",
        css: "dist/assets/css/",
        images: "dist/assets/img/",
        fonts: "dist/assets/fonts/"
    },
    src: {
        html: "src/templates/pages/**/*.html",
        js: "src/assets/js/app.js",
        css: "src/assets/sass/*.{scss,css}",
        images: "src/assets/img/**/*.{jpg,png,svg,gif,ico}",
        fonts: "src/assets/fonts/*.*"
    },
    watch: {
        data: "src/templates/data/*.{json,yml}",
        html: "src/**/*.html",
        js: "src/assets/js/**/*.js",
        css: "src/assets/sass/**/*.{scss,css}",
        images: "src/assets/img/**/*.{jpg,png,svg,gif,ico}"
    },
    clean: "./dist",
    cleanOpenServer: "F:/OSPanel/domains/dist"
}



/* Tasks */
function browserSync(done) {
    browsersync.init({
        server: {
            baseDir: "./dist/"
        },
        port: 3000,
        browser: 'firefox'
    });
}

function browserSyncReload(done) {
    browsersync.reload();
}

function html() {
    panini.refresh();
    return src(path.src.html, { base: "src/templates/pages/" })
        .pipe(plumber())
        .pipe(panini({
            root: 'src/templates/pages/',
            layouts: 'src/templates/layouts/',
            pages: 'src/templates/pages/',
            partials: 'src/templates/partials/',
            helpers: 'src/templates/helpers/',
            data: 'src/templates/data/'
        }))
        .pipe(htmlmin({
            removeComments: true,
            removeOptionalTags: true,
            collapseWhitespace: false,
            cssmin: true,               //minifier inline css
            jsmin: true,                //minifier inline javascript
            caseSensitive: true,
            removeIgnored: true       //remove tags not recognize
        }))
        .pipe(dest(path.build.html))
        .pipe(dest(path.openServer.html))
        .pipe(browsersync.stream());
}

function css() {
    return src(path.src.css, { base: "src/assets/sass/" })
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cssbeautify())
        .pipe(dest(path.build.css))
        .pipe(dest(path.openServer.css))
        .pipe(cssnano({
            zindex: false,
            discardComments: {
                removeAll: true
            }
        }))
        .pipe(removeComments())
        .pipe(rename({
            suffix: ".min",
            extname: ".css"
        }))
        .pipe(dest(path.build.css))
        .pipe(dest(path.openServer.css))
        .pipe(browsersync.stream());
}

function js() {
    return src(path.src.js, {base: './src/assets/js/'})
        .pipe(plumber())
        .pipe(rigger())
        .pipe(gulp.dest(path.build.js))
        .pipe(gulp.dest(path.openServer.js))
        .pipe(terser())
        .pipe(rename({
            suffix: ".min",
            extname: ".js"
        }))
        .pipe(dest(path.build.js))
        .pipe(dest(path.openServer.js))
        .pipe(browsersync.stream());
}

function images() {
    return src(path.src.images)
        .pipe(imagemin())
        .pipe(dest(path.build.images))
        .pipe(dest(path.openServer.images));
}

function fonts() {
    return src(path.src.fonts)
        .pipe(dest(path.build.fonts))
        .pipe(dest(path.openServer.fonts));
}

function clean() {
    return del(path.clean);
}

function watchFiles() {
    gulp.watch([path.watch.data], html);
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
    gulp.watch([path.watch.images], images);
}

const build = gulp.series(clean, gulp.parallel(html, css, js, images, fonts));
const watch = gulp.parallel(build, watchFiles, browserSync);
const run = gulp.parallel(watchFiles, browserSync);



/* Exports Tasks */
exports.html = html;
exports.css = css;
exports.js = js;
exports.images = images;
exports.clean = clean;
exports.build = build;
exports.watch = watch;
exports.run = run;
exports.default = run;
