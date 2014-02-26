# Nodangular
A bare bones all-in-one boilerplate for creating Web Applications for desktop and mobile.

## Requirements
- Node _>=0.10.7_
- Npm _>=1.2.23_
- MongoDB
- Grunt CLI

## Development Setup
- run 'npm install'
  Installs both dev and production node modules
- run 'grunt'
  Runs the build task and then watches files. When jade/sass/scripts change, it builds them. Also livereloads the browser when css changes
- run 'nodemon app.js' or 'node app'
  Nodemon will restart server when server files change. If you prefer not to use it, just run default 'node app'

## Production Setup
- run 'npm install --production'
  Installs all of the node modules required for production
- run 'grunt --production'
  Runs the build task and then exits
- run 'node app.js'
  Starts the node server

## Work in progress
This is currently a work in progress and will be ready for public consumption soon  :)

## Todo
- Seperate public/ into public_src/ and public_build/ directories
  - public_src/ will contain all js, jade, scss
  - public_build/ will contain all minfied js, html, css
  - leads to grunt...
- Grunt
  - Sass
  - Jade
  - UglifyJS + Concat
  - Live reload
- Favicon
- App icon
- Karma + Jasmine suite
  - Template unit test

## Notes
- You can run mongod in the background permanently with "sudo mongod --fork --logpath /var/log/mongod.log"
  Then to kill it, find his pid with "ps aux | grep mongod" and "kill <pid>"
- 

