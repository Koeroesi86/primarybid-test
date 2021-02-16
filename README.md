# Primary Bid test

Single page application that provides URL shortening functionality.

Technologies used:
* Docker
* MongoDB
* NodeJS
* ExpressJS
* Typescript
* Webpack
* HTML, CSS
* Axios
* Jest

### Dependencies
* [Docker](https://www.docker.com/products/docker-desktop)

### Running locally
```shell
docker-compose up
```

### Running tests
```shell
docker-compose run --rm app sh -c "yarn && yarn test"
```

### Deployable build
```shell
docker build .
```

### To use with pbid.io domain:

Add to `C:\Windows\System32\drivers\etc\hosts` (on Windows) or `/etc/hosts` (on Mac or Linux):

    127.0.0.1 pbid.io


TODO: more test coverage
