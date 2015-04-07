var faker = require('faker');
var Q = require('q');

module.exports = function (obj) {
    var deffer = Q.deffer();
    if (typeof obj === 'object') {

        /*Object template
            obj = {
                model: app.models.NameOfModel,
                min: number,
                max: number,
                schema: {},
                get: returned
            };
        */
        
        var ret = [];

        obj.min = (obj.min - 1) || 0;
        obj.max = obj.max || 10;

        if (!obj.model) {
            console.log('Please define model');
            return;
        }

        for(var i = obj.min; i<obj.max; i++){
            obj.model(obj.schema, function(err, created){
                if(err) console.log(err);
                if(obj.get){
                    ret.push(created[obj.get]);
                } else {
                    ret.push(created);  
                };
            });
        };
        
        return ret;
    } else {
        console.log('Requires an object');
        return;
    }
}