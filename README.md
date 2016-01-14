A modular ES2015 Gulp configuration, with sensible defaults.

The goal of this sample is for tasks to not be coupled to a Gulpfile, but
instead usable anywhere where just two fields are defined: a source to look for
input, and a destination to write output. To this end, the concept of a
**Resource Definition Module** was born.

A **Resource Definition Module** is simply a module that exposes a build
function when imported, and defines `build` and `watch` tasks on the gulp
object. The build function uses the global path information to do its work,
and is the functional basis of the `build` and `watch` tasks for gulp.

With this setup, all the Gulpfile has to do is set up paths on the global
object, then import all the **Resource Definition Modules**. Once that is
done, all the tasks will be available for Gulp to compose larger tasks,
such as a build task that runs all other build tasks.

# Using gulp-seed

## In a new project

1. Clone this repo.
2. Modify `package.json` to your liking.

## In an existing project

1. Copy `.babelrc` and `gulpfile.babel.js` into your project.
2. Make sure that `GULP_MODULES` in `gulpfile.babel.js` is pointing to an
existing directory.
3. Merge your `package.json`'s *devDependencies` with the ones specified here.
4. Begin re-adapting your build steps as **Resource Definition Modules**.