import gulp from 'gulp';

import require_dir from 'require-dir'; // import modules in a folder.
import minimist from 'minimist'; // argument parsing engine.
import path from 'path'; // utilities for working with directory paths.

// Store arguments to gulp on the global object, so that any module included
// can access them.
// Start parsing at the 3rd index of process.argv as the first two indexes are
// node itself and the name of the file, respectively.
global.argv = minimist(process.argv.slice(2));


// Constants
const GULP_MODULES = path.join(process.cwd(), 'build');
const SRC_PATH     = path.join(process.cwd(), 'src');
const DEST_PATH    = path.join(process.cwd(), 'dist');


// Store directory paths on the global object, so that any module included
// can access them.
global.paths = {
    'src': SRC_PATH,
    'dest': DEST_PATH
};


// Import all build modules.
require_dir(GULP_MODULES);


// Composed Tasks
gulp.task('build', []);
gulp.task('watch', []);
gulp.task('test', []);
gulp.task('default', []);