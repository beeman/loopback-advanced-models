# loopback-advanced-models

The aim of this project is to experiment with loopback models and to serve as
an example for fellow developers.

## Abstract

It is initiated and maintained by:

- [Pulkit Singhal](https://github.com/pulkitsinghal)
- [Rares Golea](https://github.com/rgolea)
- [Bram Borggreve](https://github.com/beeman)

After an online meeting we thought it would be a good idea to work on a reference
project that could show of the more advances usages of modes in loopback.

## Running this project

    $ git clone https://github.com/loopbackers/loopback-advanced-models.git
    $ cd loopback-advanced-models
    $ npm install
    $ npm run dev # run the server in Development mode (with nodemon and fake data)
    $ npm start   # run the server in normal mode (with node and no fake data)

There are environment variables that influence the behavior of this application:

    FAKEDATA   # Triggers the boot-script to create fake data if variable is set
    MAX_NOTES  # Number of `notes` objects that are created

For example, this command will start the server with some fake data and no nodemon

    $ FAKEDATA=1 MAX_NOTES=50 npm start

## What is implemented

### AppModel

This is a model that extends PersitedModel and can be used in its place. It adds
automatically updated created/modified properties to a model.

### Create fake model data

This project uses [Faker.js](https://github.com/marak/Faker.js/) to create some
dummy content.

## What to implement

### ACL's

There should be some advanced ACL examples in place.

### Hiding remote methods

The example should hide some of the remote methods using the built-in methods.

### Unit testing

All functionality should be unit-tested to proof their working.

### Angular SDK

All functionality should have an AngularJS demo.

### Passport integration

While it is not just a matter of defining models, there should by an implementation
of loopback-component-passport.

There should be an API endpoint (/api/auth-providers) that can list the available
providers, so a client app doesn't need to hardcode this. Somewhat like how it's
done in [this  commit](https://github.com/loopbackers/loopback-angular-admin/commit/ad88478ee261b41415eee72fe2466a14bc7aa0be#diff-44f70a8b9cd0111def427647ebf3d4f2R1).

Currently the authentication providers are defined in a file called `providers.json`.
Ideally the providers should be configured by setting ENV variables. This way they
can be easily configured when running on a PAAS like Heroku.

For instance, this should start the project with the Facebook-login enabled:  

    $ FACEBOOK_CLIENT_ID=987zyx FACEBOOK_CLIENT_SECRET=abc123 npm start

### Please tell us what should be added

[Create an issue here.](https://github.com/loopbackers/loopback-advanced-models/issues)

### Watch the meetings here

[Users in Loopback.io](https://www.youtube.com/watch?v=UdsOcOVg_0M)
[Users in Loopback.io Part 2 (Live)](https://www.youtube.com/watch?v=RRH3oxbJdBs&lc=z13mw1jirsapshvm3225yrmhokm2thjly)

## Contact

Talk to us on gitter:

[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/loopbackers/loopback-advanced-models?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
