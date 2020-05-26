Java.perform(function () {
  console.log("Starting uncrackable1...");

  var sysexit = Java.use("java.lang.System");
  sysexit.exit.implementation = function() {
    // We avoid exiting the application
    console.log("System.exit() function was called!");
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
