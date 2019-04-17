
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');

// compile scss into css

gulp.task("scss", function() {
    
    // 1. find my scss file
    return gulp.src('./scss/**/*.scss')
    // 2. pass that file through sass compiler
        .pipe(sass().on('error', sass.logError))
        .pipe( autoprefixer() )
    // 3. where do we want to get it compiled to
        .pipe(gulp.dest('./css/'))
    // 4. stream changes to all browser
        .pipe(browserSync.stream());
});

gulp.task("watch", function() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./scss/**/*.scss', gulp.series('scss'));
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./*.js').on('change', browserSync.reload);
    
});

// exports.style = style;
// exports.watch = watch;