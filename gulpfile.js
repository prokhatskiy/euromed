var gulp = require('gulp');
var concat = require('gulp-concat');
var stylus = require('gulp-stylus');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var fileinclude = require('gulp-file-include');

var path = {
    root: '',
    stylus : 'styl/styles.styl',
    css: 'css/',
    images: 'img/',
    partials: 'partials/',
    pages: 'pages/*.html',
    js: 'js/',
    jsDist: 'js/min/'
};

var config = {
    stylusOptions : {
        compress : false,
        linenos : true
    },

    autoprefixerOptions : {
        browsers: ['last 2 versions', 'ie 8'],
        cascade: true
    },

    fileincludeOptions: {
        prefix: '@@',
        basepath: '@file'
    }
};

gulp.task('stylus', function() {
    return gulp.src(path.stylus)
        .pipe(stylus(config.stylusOptions))
        .pipe(autoprefixer(config.autoprefixerOptions))
        .pipe(gulp.dest(path.css))
});

gulp.task('watch', function() {
    gulp.watch('styl/**', ['stylus']);
    gulp.watch('pages/*.html' , ['pages']);
});


gulp.task('pages', function() {
    gulp.src(path.pages)
        .pipe(fileinclude(config.fileincludeOptions))
        .pipe(gulp.dest(path.root))
});

gulp.task('default', ['stylus', 'pages', 'watch']);