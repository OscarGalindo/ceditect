var gulp = require('gulp');
var sass = require('gulp-sass');
var copy = require('gulp-copy');

gulp.task('sass', function() {
    gulp.src('./web/bundles/ceditect/sass/ceditect.scss')
        .pipe(sass({sourceComments: 'map'}))
        .pipe(gulp.dest('./web/css'));
});

gulp.task('copy', function() {
    return gulp.src('./web/components/fontawesome/fonts/*')
        .pipe(copy('./web/fonts', {prefix: 7}));
});

gulp.task('js', function() {
    gulp.src([
        './web/bundles/ceditect/js/**/*.js',
        './web/components/jquery/dist/jquery.js'
    ])
        .pipe(gulp.dest('./web/js'));
});

gulp.task('watch', function () {
    var onChange = function (event) {
        console.log('File '+event.path+' has been '+event.type);
    };
    gulp.watch('./src/CeditectBundle/Resources/public/sass/**/*.scss', ['sass'])
        .on('change', onChange);
    gulp.watch('./src/CeditectBund/Resources/public/js/**/*.js', ['js'])
        .on('change', onChange);
});