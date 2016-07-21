/**
 * @ngdoc service
 * @name wp-api-angularjs.$wpApiCustom
 * @description
 * Custom entity
 * @requires  $injector
 */
import Parent from './parent.service.js';

export default class {
    constructor($injector) {
        'ngInject';
        this.$injector = $injector;
    }

    /**
     * @ngdoc function
     * @name wp-api-angularjs.$wpApiCustom#getInstance
     * @access public
     * @methodOf wp-api-angularjs.$wpApiCustom
     *
     * @description
     * Get page list
     * @param {string} entityName   The name of the entity to fetch
     * @example
     * <pre>
     * var cars = $wpApiCustom.getInstance('cars');
     * cars.getList();
     * cars.get(666);
     * </pre>
     * @returns {Object} Entity instance. You can use get and getList methods the same way as other entities
     */
    getInstance(entityName = null) {
        if (!entityName) {
            throw new Error(`getInstance needs an entity name`);
        }
        return new Custom(this.$injector, entityName);
    }
}

class Custom extends Parent {

    constructor($injector, entityName) {
        'ngInject';

        super($injector);
        this.entityName = entityName;
    }

    getList(params, data, headers) {
        return super.getList(`/${this.entityName}`, params, data, headers);
    }

    get(customId, params, data, headers) {
        super.requiredInput('$wpApiCustom:get', {
            customId
        });
        return super.get(`/${this.entityName}/${customId}`, params, data, headers);
    }

    create(data, params, headers) {
        return super.post(`/${this.entityName}`, params, data, headers);
    }

    update(customId, data, params, headers) {
        super.requiredInput('$wpApiCustom:update', {
            customId
        });
        return super.post(`/${this.entityName}/${customId}`, params, data, headers);
    }

    delete(customId, data, params, headers) {
        super.requiredInput('$wpApiCustom:delete', {
            customId
        });
        return super.delete(`/${this.entityName}/${customId}`, data, params, headers);
    }
}
