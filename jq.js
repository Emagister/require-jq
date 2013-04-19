/*
 * jq! loader plugin
 *
 * Allows loading jquery prior to files depending on it.
 */
define([], function() {
  return {
      load : function(name, req, load) {
        var dep = req.specified('packages/jquery') ? 'packages/jquery' : 'jquery';
          req([dep], function() {
              req([name], function (value) {
                  load(value);
              });
          });
      }
  };
});
