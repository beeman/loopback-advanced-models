var faker = require('faker');
var Q = require('q');

module.exports = function (obj) {
    console.log("Creating....");
    if (typeof obj === 'object') {

        var deferred = Q.defer();

        /*Object template
            obj = {
                model: app.models.NameOfModel,
                min: number,
                max: number,
                schema: {},
                get: returned
            };
        */


        obj.min = (obj.min - 1) || 0;
        obj.max = obj.max || 10;

        if (!obj.model) {
            deferred.reject('Please define model');
        }

        var ret = Array();

        for (obj.min; obj.min < obj.max; obj.min++) {
            obj.model.create(obj.schema, function (err, created) {
                if (err) {
                    console.log(err);
                    deferred.reject(err);
                } else if (obj.get) {
                    ret.push(created[obj.get]);
                } else {
                    ret.push(created);
                };

                if (ret[obj.max] != null) {
                    deferred.resolve(ret);
                }
            });
        };

    } else {
        deferred.reject('Requires an object');
    }

    return deferred.promise;
}