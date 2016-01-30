A SASS/ES2015/BrowserSync boilerplate, which is built on a modular Gulp
configuration scheme.

Compiles ES2015 apps from a given entry point and SASS files from
a given entry point. Serves distribution files and provides
livereload functionality via BrowserSync and Gulp.

# Using The Boilerplate

## In a new project

1. Clone this branch.
2. Run `npm install` and `jspm install`.

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

## Running JSPM

**(Recommended)**

Install JSPM globally in order to use JSPM commands from the CLI.
`npm install -g jspm`

**(Not Recommended)**

Open `package.json` and create an npm script to run the local project
jspm installation.
```
"scripts": {
    "jspm": "jspm"
}
```

Though this method works, it is not officially supported by JSPM.