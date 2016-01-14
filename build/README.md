Build modules go here. They should follow a general format:

```
import gulp from 'gulp';
// Other global imports
// Local imports from ./utils

const INPUT = path.join(global.paths.src, '...');
const OUTPUT = path.join(global.paths.dest, '...');

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