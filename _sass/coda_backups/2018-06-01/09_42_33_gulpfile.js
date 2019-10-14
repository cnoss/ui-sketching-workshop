import gulp from 'gulp';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'gulp-autoprefixer';
import hash from 'gulp-hash';
import concat from 'gulp-concat';
import purgecss from 'gulp-purgecss';
import sourcemaps from 'gulp-sourcemaps';
//import notify from 'gulp-notify';
//import plumber from 'gulp-plumber';
// import cleanCSS from 'gulp-clean-css';
import del from 'del';

const paths = {
  scss: {
    src: 'src/styles/**/*.less',
    dest: 'assets/styles/'
  },
  js: {
    src: 'src/scripts/**/*.js',
    dest: 'assets/scripts/'
  },
  images: {
    src: 'static/images/**/*',
    stat: 'static/images',
    dest: 'data/images'
  },
};

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

var all = gulp.series(images);

gulp.task('all', all);