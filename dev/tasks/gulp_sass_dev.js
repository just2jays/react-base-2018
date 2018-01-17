import gulp from 'gulp';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
//import livereload from 'gulp-livereload';
import config from './../configs/config';

gulp.task('sass-dev', function sassDev() {
  const targetProps = config.styles.main;
  const { cssDest, stylesSrc, sassConf } = targetProps;

  return gulp
    .src(stylesSrc)
    .pipe(sourcemaps.init())
    .pipe(sass(sassConf).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(cssDest))
    // .pipe(
    //   livereload({ file: 'http://localhost:3000/dist/static/css/main.css' })
    // );
});
