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

export function clean( path ) {
  del(path)
}

export function images() {
	clean(paths.images.stat);
  return gulp.src(paths.images.src)
		.pipe(hash())
		.pipe(gulp.dest(paths.images.stat))
		.pipe(hash.manifest("hash.json"))
		.pipe(gulp.dest(paths.images.dest));
}

export default images;