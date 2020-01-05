var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var cleanCss = require('gulp-clean-css');
 
 
gulp.task('pack-css', function () {    
    return gulp.src(['src/styles.css'])
        .pipe(concat('style.css'))
        .pipe(cleanCss())
        .pipe(gulp.dest(['build']))
        .pipe(gulp.dest(['stub/build']));
});

        // 