var gulp           = require('gulp'),
		sass           = require('gulp-sass'),
		browserSync    = require('browser-sync'),
		concat         = require('gulp-concat'),
		uglify         = require('gulp-uglify'),
		cleanCSS       = require('gulp-clean-css'),
		rename         = require('gulp-rename'),
		del            = require('del'),
		autoprefixer   = require('gulp-autoprefixer'),
		// cache          = require('gulp-cache'),
		// imagemin       = require('gulp-imagemin'),
		// gutil          = require('gulp-util'),
		// ftp            = require('vinyl-ftp'),
		// rsync          = require('gulp-rsync')
		notify         = require("gulp-notify");

// gulp.task('common-js', function() {
// 	return gulp.src([
// 		'app/libs/slick-carousel/slick/slick.min.js',
// 		'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js',
// 		'app/libs/jquery-ui.min.js',
// 		'app/libs/jquery.ui.touch-punch.js',
// 		'app/libs/custom-scroll-master/source/jquery.custom-scroll.js',
// 		'app/libs/jquery.inputmask.bundle.js',
// 		'app/libs/Readmore.js/readmore.min.js',
// 		'app/js/common.js',
// 		'app/js/video-play.js'
// 		])
// 	.pipe(concat('common.min.js'))
// 	.pipe(uglify())
// 	.pipe(gulp.dest('app/js'));
// });

gulp.task('js', function() {
	return gulp.src([
		'app/libs/slick-carousel/slick/slick.min.js',
		'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js',
		'app/js/common.js'
		])
	.pipe(concat('scripts.js'))
	// .pipe(uglify())
	.pipe(gulp.dest('app/js'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function() {
	browserSync({
		// proxy: "domain/index.php", // local server
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});

gulp.task('sass', function() {
	return gulp.src('app/sass/**/*.sass')
	.pipe(sass({outputStyle: 'expanded'}).on("error", notify.onError()))
	// .pipe(rename({suffix: '.min', prefix : ''}))
	.pipe(autoprefixer(['last 15 versions']))
	.pipe(cleanCSS())
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('code', function() {
	return gulp.src('app/*.html')
	.pipe(browserSync.reload({ stream: true }));
});

gulp.task('images', function() {
	return gulp.src('app/img/**/*')
	.pipe(gulp.dest('dist/img')); 
});

gulp.task('watch', function() {
	gulp.watch('app/sass/**/*.sass', gulp.parallel('sass'));
	gulp.watch(['libs/**/*.js', 'app/js/common.js'], gulp.parallel('js'));
	gulp.watch('app/*.html', gulp.parallel('code'));
});


gulp.task('build', gulp.parallel('images', 'sass', 'js'), function() {

	var buildFiles = gulp.src([
		'app/*.html',
		'app/*.php'
		]).pipe(gulp.dest('dist'));

	var buildCss = gulp.src([
		'app/css/styles.css',
		]).pipe(gulp.dest('dist/css'));

	var buildJs = gulp.src([
		'app/js/scripts.js'
		]).pipe(gulp.dest('dist/js'));

	var buildJquery = gulp.src([
		'app/libs/jquery/dist/jquery.min.js'
		]).pipe(gulp.dest('dist/libs/jquery/dist'));

	var buildFonts = gulp.src([
		'app/fonts/**/*',
		]).pipe(gulp.dest('dist/fonts'));

});



gulp.task('default', gulp.parallel('watch', 'sass', 'js', 'browser-sync'));