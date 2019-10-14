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

