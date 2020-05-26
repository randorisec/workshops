Java.perform(function () {
  console.log("Starting uncrackable1...");

  var sysexit = Java.use("java.lang.System");
  sysexit.exit.implementation = function() {
    // We avoid exiting the application
    console.log("System.exit() function was called!");
  };
});