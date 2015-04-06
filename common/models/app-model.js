module.exports = function(AppModel) {

  // I created this method to implement automatic created/modified generation.
  // Loopback now supports to call a default function on an object property this
  // method is not needed anymore. I leave it here as a reference :)
  //
  // created: {type: Date, defaultFn: 'now'}
  //
  // Also see https://github.com/strongloop/loopback-datasource-juggler/pull/458
  //
  // AppModel.observe('before save', function(ctx, next) {
  //   // Add created and modified stamp to a new object
  //   if(ctx.instance) {
  //     ctx.instance.created = ctx.instance.modified = new Date();
  //   }
  //   // Update modified stamp on an existing object
  //   if(ctx.data) {
  //     ctx.data.modified = new Date();
  //   }
  //   next();
  // });


  // About the ownerId property:
  //
  // It might be a good idea to make the model logic automatically fill in the
  // property ownerId if a logged in user adds or updates the model 

};
