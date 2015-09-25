wp-api-angularjs
================

AngularJS services to consume [WP-API v2](http://v2.wp-api.org/)

## Documentation

<http://shprink.github.io/wp-api-angularjs/>

## oAuth1

<http://v2.wp-api.org/guide/authentication/>

### Install OAuth1 plugin

Export <https://github.com/WP-API/OAuth1> zip and upload it into your WP instance.

### Install WP-CLI

```
curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
chmod +x wp-cli.phar
sudo mv wp-cli.phar /usr/local/bin/wp
```

More info: <http://wp-cli.org/>

### Create a consumer:

```
$ wp oauth1 add

ID: 4
Key: sDc51JgH2mFu
Secret: LnUdIsyhPFnURkatekRIAUfYV7nmP4iF3AVxkS5PRHPXxgOW
```

## Contribute

```
npm install
cp config.dist.json config.json

# Open two terminals
# and run watch to build on the lib files changes
npm run watch

# in the other terminal run following to build the test page and the doc
npm run devserver
```

Open ```http://localhost:8080```
