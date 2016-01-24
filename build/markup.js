/* Markup Resource Definition Module
 * @depends: gulp, gulp-watch, gulp-batch
 * @input(s): A glob of HTML files
 * @output(s): The input glob of HTML files.
 */

 // Node imports
 import path from 'path';

 // Gulp imports
 import gulp from 'gulp';
 import watch from 'gulp-watch';
 import batch from 'gulp-batch';

 export default function (config) {

    // Templates paths
    const INPUT = path.join(config.paths.src, '*.html');
    const OUTPUT_DIR = config.paths.dest;

    /* Gulp Configuration */

    gulp.task('build:markup', function () {
        return gulp.src(INPUT)
            .pipe(gulp.dest(OUTPUT_DIR));
    });

    gulp.task('watch:markup', function () {
        watch(INPUT, batch(function (events, done) {
            gulp.start('build:markup', done);
        }));
    });

    return {
        build: 'build:markup',
        watch: 'watch:markup'
    };
 }