var gulp = require('gulp');
var htmlImport = require('gulp-html-import');

gulp.task('import', function () {
    gulp.src('./*.html')
        .pipe(htmlImport('./components/'))
        .pipe(gulp.dest('dist')); 
})