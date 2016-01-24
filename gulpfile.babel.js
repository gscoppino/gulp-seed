import gulp from 'gulp';
import path from 'path';
import minimist from 'minimist';


// Input and Output folders
const SRC_PATH  = path.join(process.cwd(), 'src');
const DEST_PATH = path.join(process.cwd(), 'dist');


// Parse Command Line Arguments
const argv = minimist(process.argv.slice(2)); // First two args are the paths
                                              // to node and gulp, don't
                                              // include these.


// Define configuration for build modules.
// Pass the input and output folders,
// along with command line arguments to gulp.
let config = {
    argv:  argv,
    paths: {
        src: SRC_PATH,
        dest: DEST_PATH
    }
};


// Instantiate build modules.

/** Example **/
/**

import RDMFactory from './build/RDM';
let RDM = RDMFactory(config); // exposes RDM.build and RDM.watch

...
...

**/


/** Compose Gulp Tasks **/

gulp.task('build', []);
gulp.task('watch', []);
gulp.task('test', []);
gulp.task('default', []);