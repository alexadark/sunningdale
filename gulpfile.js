var gulp = require('gulp'),
 clean = require('gulp-clean'),
 sass = require('gulp-sass'),
 sourcemaps = require('gulp-sourcemaps'),
 autoprefixer = require('gulp-autoprefixer'),
 plumber = require('gulp-plumber'),
 watch = require('gulp-watch'),
 cssNano = require('gulp-cssnano'),
 uglify = require('gulp-uglify'),
 concat = require('gulp-concat'),
 jshint = require('gulp-jshint'),
 stylish = require('jshint-stylish'),

 basePaths = {
        src: 'source',
 dest: '.'
 },

 paths = {
        js: {
            src: basePaths.src + '/js',
 dest: basePaths.dest + '/js',
 node: basePaths.dest + '/node_modules'
 },
 css: {
            src: basePaths.src + '/scss',
 dest: basePaths.dest + '/css'
 }
    };

/*
 Styles - Clean
 */
gulp.task('clean-styles', function() {
    return gulp.src([paths.css.dest + '/style.css', paths.css.dest + '/style.css.map'], {read: false})
        .pipe(clean());
});

/*
 Styles Task
 */
gulp.task('styles', ['clean-styles'], function() {
    return gulp.src(paths.css.src + '/**/*.scss')
        .pipe(plumber({
            errorHandler: function(error) {
                console.log('Styles Error: ' + error.message);
 this.emit('end');
 }
        }))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer('last 2 version'))
        .pipe(cssNano({zindex: false}))
 .pipe(sourcemaps.write('./'))
 .pipe(gulp.dest(paths.css.dest));
});

/*
 Scripts - Clean
 */
gulp.task('clean-scripts', function() {
 return gulp.src([paths.js.dest + '/all.min.js', paths.js.dest + '/all.min.js.map'], {read: false})
 .pipe(clean());
});

/*
 Scripts - Hint
 */
gulp.task('hint', function() {
 return gulp.src(paths.js.src + '/**/*.js')
 .pipe(jshint())
 .pipe(jshint.reporter(stylish))
 .pipe(jshint.reporter('fail'));
});


/*
 Scripts - Concat and Uglify
 */
gulp.task('scripts', ['clean-scripts', 'hint'], function() {
 return gulp.src([
 paths.js.src + '/**/*.js'
 ])
 .pipe(plumber({
 errorHandler: function(error) {
 console.log('Scripts Error: ' + error.message);
 this.emit('end');
 }
 }))
 .pipe(concat('./all.min.js'))
 .pipe(sourcemaps.init())
 .pipe(uglify())
 .pipe(sourcemaps.write('./'))
 .pipe(gulp.dest(paths.js.dest));
});

/*
 Default and Watch Task
 */
gulp.task('default', ['styles', 'scripts'], function() {
 gulp.watch(paths.css.src + '/**/*.scss', ['styles']);
 gulp.watch(paths.js.src + '/**/*.js', ['scripts']);
});