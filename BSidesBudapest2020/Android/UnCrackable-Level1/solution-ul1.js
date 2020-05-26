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

  var aaClass = Java.use("sg.vantagepoint.a.a");
  // We modify the code in order to execute the method
  aaClass.a.implementation = function(arg1, arg2) {
      var retval = this.a(arg1, arg2);
      // Then , we just translate the byte array in string
      var password = '';
      for(var i = 0; i < retval.length; i++) {
          password += String.fromCharCode(retval[i]);
      }

      console.log("[*] Decrypted: " + password);
      return retval;
  };
});
