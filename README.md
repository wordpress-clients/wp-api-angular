wp-api-angularjs
================

wp-api-angularjs is under development and will only cover GET methods of the [WP-API](https://github.com/WP-API/WP-API) master branch.

## Install
 
wp-api-angularjs depends on [Restangular](https://github.com/mgonto/restangular) that itself depends on [Underscore](https://github.com/jashkenas/underscore) or [Lodash](https://github.com/lodash/lodash)

include the bundled version ```dist/wp-api-angularjs.bundle.js``` (that includes Restangular) or ```dist/wp-api-angularjs.js``` (that does not include Restangular)

Do not forget to include [Underscore](https://github.com/jashkenas/underscore) or [Lodash](https://github.com/lodash/lodash) in your project.

```
angular.module('myApp', ['wp-api-angularjs']);
```

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
// Get latests posts
$wpApiPosts.$getList();

// Get filtered posts
$wpApiPosts.$getList({
    "page" : 2,
    "filter[category_name]": "uncategorized",
    "filter[posts_per_page]": 5,
    "filter[orderby]": "date",
    "filter[order]": "desc",
    "filter[post_status]": "publish"
});

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
