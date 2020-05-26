Java.perform(function () {
  console.log("Starting uncrackable1...");

  var root_class = Java.use("sg.vantagepoint.a.c");
  root_class.a.implementation = function() {
    console.log("a() function was called!");
    return false;
  };

  root_class.b.implementation = function() {
    console.log("b() function was called!");
    return false;
  };

  root_class.c.implementation = function() {
    console.log("c() function was called!");
    return false;
  };
});