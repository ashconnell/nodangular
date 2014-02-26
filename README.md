# Nodangular
A bare bones all-in-one boilerplate for creating Web Applications for desktop and mobile.
It is based on the MEAN stack and uses MongoDB, Express, AngularJS and Node to create an entire solution and workflow for building practically anything in a short amount of time.
The frontend stack uses Jade (html template engine) and Sass (css preprocessor), and grunt builds your project and refreshes styles as you code!

## Requirements
- Node _>=0.10.7_
- Npm _>=1.2.23_
- MongoDB
- Grunt CLI
- Nodemon (optional)
- Forever (optional)

## Development Setup

- run _'npm install'_

    Installs all node modules

- run _'grunt'_

    Runs the build task and then watches files. When jade/sass/scripts change, it builds them. Also livereloads the browser when css changes

- run _'nodemon app.js'_ or _'node app'_

    Nodemon will restart server when server files change. If you prefer not to use it, just run default 'node app'

## Production Setup

- run _'npm install --production'_

    Only install node modules needed for production (excludes devDependencies)

- run _'grunt --production'_

    Builds the project and exits

- run _'forever app.js'_ _'node app.js'_

    Starts the node server. Forever is a utility that will restart your node server when it crashes or the machine reboots

## Work in progress
This is currently a work in progress and will be ready for public consumption soon  :)

## Todo
- Favicon
- App icon
- Karma + Jasmine suite
  - Template unit test

## Notes
- You can run mongod in the background permanently with "sudo mongod --fork --logpath /var/log/mongod.log"
  Then to kill it, find his pid with "ps aux | grep mongod" and "kill <pid>" 

