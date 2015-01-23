module.exports = {
    filterize: function (filters) {
        filters = filters || {}
        var query = {};
        for (var i in filters) {
            query['filter[' + i + ']'] = filters[i];
        };
        return query;
    }
}