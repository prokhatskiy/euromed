var gulp = require('gulp');
var concat = require('gulp-concat');
var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');
var fileinclude = require('gulp-file-include');
var rupture = require('rupture');
var jshint = require('gulp-jshint');

var path = {
    root: '',
    stylus : 'styl/styles.styl',
    css: 'css/',
    images: 'img/',
    partials: 'partials/',
    pages: 'pages/*.html',
    js: [
        'js/lib/*.js',
        'js/modules/*.js',
        'js/app/app.js'
    ],
    jsDest: 'javascripts/'
};

var config = {
    stylusOptions : {
        compress : false,
        linenos : true,
        use: [rupture()]
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

gulp.task('js', function() {
   return gulp.src(path.js)
            .pipe(jshint())
            .pipe(concat('app.js'))
            .pipe(gulp.dest(path.jsDest));
});

gulp.task('watch', function() {
    gulp.watch('styl/**', ['stylus']);
    gulp.watch(['pages/*.html', 'partials/**'] , ['pages']);
    gulp.watch('js/**', ['js']);
});


gulp.task('pages', function() {
    gulp.src(path.pages)
        .pipe(fileinclude(config.fileincludeOptions))
        .pipe(gulp.dest(path.root))
});

gulp.task('default', ['stylus', 'pages', 'js','watch']);