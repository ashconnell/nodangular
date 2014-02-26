# Nodangular
A bare bones all-in-one boilerplate for creating Web Applications for desktop and mobile.

It is based on the MEAN stack and uses [MongoDB](mongodb.org), [Express](expressjs.com), [AngularJS](angularjs.org) and [Node](nodejs.org) to create an entire solution and workflow for building practically anything in a short amount of time.

The Frontend stack uses [Jade](http://jade-lang.com/) and [Sass](http://sass-lang.com/) with [Grunt](gruntjs.com) which builds your project and refreshes styles as you code!

## Features (development mode)
- Live reloads CSS and HTML
- Jade Templates
- Sass Stylesheets
- Automatically builds your project as you code
- Keeps scripts un-minified and un-concatenated for easy debugging

## Features (production mode)
- Build the project with one command: `grunt --production`
- Minifies and concats scripts using UglifyJS

## Requirements
- [Node](nodejs.org) `>=0.10.7`
- [Npm](npmjs.org) `>=1.2.23`
- [MongoDB](mongodb.org)
- [Grunt CLI](gruntjs.com)
- [Nodemon](https://github.com/remy/nodemon) (optional)
- [Forever](https://github.com/nodejitsu/forever) (optional)

## Setup (Development)

- `npm install`  
  Installs all node modules

- `grunt`  
  Runs the build task and then watches files. When jade/sass/scripts change, it builds them. Also livereloads the browser when css changes

- `nodemon server.js` or `node server`  
  Nodemon will restart server when server files change. If you prefer not to use it, just run default `node app`

## Setup (Production)

- `npm install --production`  
  Only install node modules needed for production (excludes devDependencies)

- `grunt --production`  
  Builds the project and exits

- `forever server.js` or `node server.js`  
  Starts the node server. Forever is a utility that will restart your node server when it crashes or the machine reboots

## Working with Scripts
In development, `public_src/index.jade` is injected with the scripts located in `public_src/scripts.json`. In production we use scripts.json to concatinate and minify files preserving their order, we then inject a single script into `public_src/index.jade` for performance reasons.

When you need to add/update scripts, all you need to do is edit the file located at `public_src/scripts.json` and everything is handled automatically.

## Bonus
- User signup/login is already implemented as a template for working with the RESTful api
- A basic Angular Frontend is already set up with some best practices. I will be working on this more in the near future

## Coming soon (todo)
- SMTP server + nodemailer
- Favicon + App Icon
- Karma + Jasmine
  - Unit tests
- Angular
  - touch
  - resource template
  - page title service

## Production Notes
- You can run mongod in the background permanently with "sudo mongod --fork --logpath /var/log/mongod.log"
  Then to kill it, find his pid with "ps aux | grep mongod" and "kill <pid>" 
