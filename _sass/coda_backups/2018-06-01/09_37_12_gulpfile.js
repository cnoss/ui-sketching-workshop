var gulp = require("gulp"),
    sass = require("gulp-sass"),
    postcss = require('gulp-postcss'),
    autoprefixer = require("gulp-autoprefixer"),
    hash = require("gulp-hash"),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify'),
    del = require("del"),
    purgecss = require('gulp-purgecss'),
    sourcemaps = require('gulp-sourcemaps');

// Hash images
function images() {
  return gulp.task("images", function () {
    del(["static/images/**/*"])
    gulp.src("src/images/**/*")
        .pipe(hash())
        .pipe(gulp.dest("static/images"))
        .pipe(hash.manifest("hash.json"))
        .pipe(gulp.dest("data/images"))
		});
}

exports.images = images;


gulp.task('images', images);