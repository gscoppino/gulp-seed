A modular ES2015 Gulp configuration, with sensible defaults.

The goal of this concept is to show how Gulp configurations for specific
resources can be broken out of the main Gulpfile, and made so that they can
be easily re-used. To this end, the concept of a **Resource Definition Module**
was born.

A **Resource Definition Module** is a ES2015 module that exposes a factory when
imported, that can be invoked with a configuration object to define and
expose `build` and `watch` tasks for a resource. The only two fields which
are required by a **Resource Definition Module** are: a source to look for
input, and a destination to write output.

With this setup, all the Gulpfile has to do is define a configuration,
then import all the **Resource Definition Modules**, executing their factory
functions with the configuration. The **Resource Definition Modules** expose
the names of their builder and watcher tasks upon instantiation. Once all that
is done, all the tasks names will be available for Gulp to use to compose
larger tasks, such as a build task that runs all other build tasks.

Another thing that is often of importance to build scripts is some
way to differentiate between development and production builds. It
is common for this to be indicated on the command line as arguments to
gulp. To this end, the main Gulpfile also parses the command line arguments
and stores them in the configuration object. This way, all
**Resource Definition Modules** can use this information to customize their
functionality.

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

## Running the gulpfile

**(Recommended)**

Install Gulp globally in order to run the project gulpfile:
`npm install -g gulp`

**(Not Recommended)**

Open `package.json` and create an npm script to run the project gulpfile
using the local installation of gulp.
```
"scripts": {
    "gulp": "gulp"
}
```
Though this method works, it is not offically supported and may break
in Gulp 4.x.