# Voxel [:star:](https://voxel-rsr.herokuapp.com/dist)

> A minimal theme.

[![Travis](https://img.shields.io/travis/rishabhsrao/voxel.svg?style=flat-square "Build status")](https://travis-ci.org/rishabhsrao/voxel)
[![Gemnasium](https://img.shields.io/gemnasium/rishabhsrao/voxel.svg?style=flat-square "Dependency status")](https://gemnasium.com/rishabhsrao/voxel)
[![Code Climate](https://img.shields.io/codeclimate/github/rishabhsrao/voxel.svg?style=flat-square "Code Climate status")](https://codeclimate.com/github/rishabhsrao/voxel)
[![Coveralls](https://img.shields.io/coveralls/rishabhsrao/voxel.svg?style=flat-square "Test coverage status")](https://coveralls.io/r/rishabhsrao/voxel)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](license.md)


## :star: Live demo

The live demo is hosted on [Heroku](http://www.heroku.com) at [voxel-rsr.herokuapp.com/dist](https://voxel-rsr.herokuapp.com/dist).


## :rowboat: Get started

This project depends on the following tools:

* [Node.js](http://nodejs.org)
* [Ruby](https://www.ruby-lang.org)
* [Bundler](http://bundler.io) gem

:tophat: **Tip** Use [nvm](https://github.com/creationix/nvm) and [rvm](http://rvm.io) for easy management of NodeJS and Ruby installations.

```
git clone git@github.com:rishabhsrao/voxel.git voxel
cd voxel
npm install
bundle install
./node_modules/.bin/bower install
./node_modules/.bin/gulp serve && say awesome # Only on Mac OSX; use espeak on GNU/Linux. Windows users, sorry, no awesomeness for you!
```

:tophat: **Tip** If you have global installations of `bower` and `gulp`, then you can avoid typing the `./node_modules/.bin/` bit.

:tophat: **Tip** Downloading dependencies over `git://` may be blocked if you are behind a firewall. The solution is to configure Git to use `https://` instead of `git://`. Run the following to force Git to use HTTPS:

```
git config url.https://.insteadOf git://
# Undo using git config unset url.https://
```


## :nut_and_bolt: Build

This project is built using [Gulp](http://gulpjs.com).

You can run a task using `./node_modules/.bin/gulp {{task-name}}`. The following build tasks are available:

* **build** Creates a build artifact, ready for deployment.
* **clean:deploy** Cleans all generated artifacts, except the distribution artifact.
* **clean** Cleans the distribution artifact and any other generated artifacts.
* **image:minify** Compresses the image files using [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin).
* **script:lint** Lints the JavaScript files using [JSHint](https://github.com/jshint/jshint).
* **script:minify:json** Minifies the JSON files using [JSON Minify](https://www.npmjs.org/package/gulp-jsonminify).
* **script:minify** Minifies the JavaScript files using [UglifyJS](http://github.com/mishoo/UglifyJS).
* **script:optimize** Combines and optimizes all RequireJS modules into one file using [RequireJS Optimizer](http://requirejs.org/docs/optimization.html).
* **script:test:report** Uploads the code coverage report to [Coveralls](https://coveralls.io).
* **script:test:unit** Runs the JavaScript unit tests using [Karma](http://karma-runner.github.io) and [Jasmine](http://jasmine.github.io).
* **script:test** Runs all the JavaScript tests.
* **serve** Starts a web server with live-reload support using [BrowserSync](http://www.browsersync.io).
* **source** Copies the source files in the distribution artifact.
* **style:compile** Compiles the Sass files using [Compass](http://compass-style.org).
* **style:lint** Lints the Sass files using [SCSS-Lint](https://github.com/causes/scss-lint).

:tophat: **Tip** It's a good idea to occasionally run:

```
git gc
npm prune && npm install
bower prune && bower install
bundle clean --force && bundle install
```

... to keep your repository lean and mean.

:tophat: **Tip** The environment variable, `VOXEL_CI`, must be set in [Travis](http://docs.travis-ci.com/user/environment-variables). It is used to control how Gulp builds the project, for example, sending operating system build notifications.


## :rocket: Deploy

This project is continuously deployed to [Heroku](http://www.heroku.com) at [voxel-rsr.herokuapp.com/dist](http://voxel-rsr.herokuapp.com/dist) using a [NodeJS](https://github.com/heroku/heroku-buildpack-nodejs) [buildpack](https://devcenter.heroku.com/articles/buildpacks) by [Travis](https://travis-ci.org), whenever a new tag is pushed. This should be configured **only once** using the [Heroku toolbelt](https://toolbelt.heroku.com):

```
heroku create voxel-rsr
heroku ps:scale web=1 --app voxel-rsr
heroku config:set BUILDPACK_URL=https://github.com/heroku/heroku-buildpack-nodejs#v75 --app voxel-rsr
```

:tophat: **Tip** You will need to authenticate Travis with Heroku by adding an API key using:

```
bundle exec travis encrypt $(heroku auth:token) --add deploy.api_key
```

... which will update `.travis.yml` with an encrypted Heroku API key.

:tophat: **Tip** The `heroku ps:scale web=1` will spin up a [dyno](https://devcenter.heroku.com/articles/dynos) under the [free](https://blog.heroku.com/archives/2015/5/7/heroku-free-dynos) plan.

:tophat: **Tip** The `#75` above is the [release tag](https://github.com/heroku/heroku-buildpack-nodejs/releases) for the project. Use the latest tag for best results.

:tophat: **Tip** The non-minified version of this project is also deployed to Heroku at [voxel-rsr.herokuapp.com/app](http://voxel-rsr.herokuapp.com/app).


## :scroll: License

See [license.md](license.md).

[HexIcons](http://www.iconfinder.com/iconsets/hex-ico) courtesy [ExpanseLook](http://www.iconfinder.com/brucen.wayne.58).

Color theme palette courtesy [Google Material Design Colors](http://www.google.co.in/design/spec/style/color.html#color-color-palette).

HTML example page courtesy [Poole](http://demo.getpoole.com/page2).
