var faker = require('faker');
var Q = require('q');

module.exports = function (obj) {
    console.log("Creating....");
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
        
        console.log(obj.schema);

        for(obj.min; obj.min<obj.max; obj.min++){
            obj.model.create(obj.schema, function(err, created){
                if(err) console.log(err);
                if(obj.get){
                    ret.push(created[obj.get]);
                } else {
                    ret.push(created);  
                };
            });
        };
        
        //Must return promise
        //return ret;
    } else {
        console.log('Requires an object');
        return;
    }
}