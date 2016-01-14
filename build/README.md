Build modules go here. They should follow a general format:

```
import gulp from 'gulp';
// Other global imports
// Local imports from ./utils

const INPUT = path.join(global.paths.src, '...');
const OUTPUT = path.join(global.paths.dest, '...');
// Other constants, such as plugin configs

function build_RESOURCENAME() {
    return gulp.src(INPUT)
        .pipe(...)
        .pipe(gulp.dest(OUTPUT));
}

gulp.task('build:RESOURCENAME', build_RESOURCENAME);
gulp.task('watch:RESOURCENAME', ...);

export default build_RESOURCENAME;
```

They can also do things with `global.args` if they wish, for branched
execution.

Sample Build Module on [Github](https://gist.github.com/gscoppino/857b8fee85135625c56b).