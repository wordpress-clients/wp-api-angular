wp-api-angularjs
================

wp-api-angularjs is under development and will only cover GET methods of the [WP-API](https://github.com/WP-API/WP-API) master branch.

## Services

### WpApiProvider

wp-api-angularjs is based on Restangular therefore you can use any of the [Restangular Provider methods](https://github.com/mgonto/restangular/tree/1.4.0#configuring-in-the-config)

```
.config(function(WpApiProvider) {
    var RestangularProvider = WpApiProvider.getRestangularProvider();
    RestangularProvider.setBaseUrl('/api/v1');
});
```

wp-api-angularjs always returns promises:

```
$wpApiPosts.$get(id).then(function(post) {
        // OK
    }).catch(function() {
        // KO
    });
```

### Posts ```$wpApiPosts```

```
$wpApiPosts.$getList();
$wpApiPosts.$get(id);

# DOES NOT WORK FOR NOW
$wpApiPosts.$create();
```

### Media ```$wpApiMedia```

```
$wpApiMedia.$getList();
$wpApiMedia.$get(id);

# DOES NOT WORK FOR NOW
$wpApiMedia.$create();
```

### Users ```$wpApiUsers```

Requires [authentication](http://wp-api.org/guides/authentication.html)

```
$wpApiUsers.$getList();
$wpApiUsers.$get(id);
$wpApiUsers.$getMe();

# DOES NOT WORK FOR NOW
$wpApiMedia.$create();
```

### Taxonomies ```$wpApiTaxonomies```

```
$wpApiTaxonomies.$getList();
$wpApiTaxonomies.$get(taxonomy);
$wpApiTaxonomies.$getTermList(taxonomy);
$wpApiTaxonomies.$getTerm(taxonomy, id);
```

## Contribute

```
sudo npm install webpack webpack-dev-server -g
npm install
webpack-dev-server
```

Open ```http://localhost:8080/test.html```
