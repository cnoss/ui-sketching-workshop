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

const theme = "themes/micgn/layouts/partials/";
const paths = {
  scss: {
    src: ["src/scss/**/*.scss", theme + "**/*.scss"],
    stat: 'static/css/',
    dest: 'data/css/'
  },
  js: {
    src: ["src/js/**/*.js",  theme + "**/*.js"],
    stat: 'static/js/',
    dest: 'data/js/'
  },
  images: {
    src: 'static/images/**/*',
    stat: 'static/images/',
    dest: 'data/images/'
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

export function js() {
	clean(paths.js.stat);
	return gulp.src(paths.js.src)
		.pipe(concat('main.js'))
		.pipe(hash())
		.pipe(gulp.dest(paths.js.stat))
		.pipe(hash.manifest("hash.json"))
		.pipe(gulp.dest(paths.js.stat))
}

export function scss() {
	clean(paths.scss.stat);
	return gulp.src(paths.scss.src)
		.pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
		.pipe(sass({outputStyle: "compressed" }))
		.pipe(autoprefixer({ browsers: ["last 20 versions"]}))
		.pipe(concat('main.css'))
		.pipe(hash())
		.pipe(sourcemaps.init())
		.pipe(postcss([require('precss'), require('autoprefixer')]))
		.pipe(sourcemaps.write('.'))
		//.pipe( purgecss({ content: ['src/**/*.html'] }))
		.pipe(gulp.dest(paths.css.stat))
		//Create a hash map
		.pipe(hash.manifest("hash.json"))
		//Put the map in the data directory
		.pipe(gulp.dest(paths.scss.stat))
}

function watchFiles() {
  gulp.watch(paths.js.src, js);
  gulp.watch(paths.scss.src, scss);
}

export default watchFiles;