// Bypass root and Frida detection
// UnCrackable-Level3


Java.perform(function () {

  console.log("Starting uncrackable3...");
  
  // Hook the System.exit() function to do nothing  
  var root_class = Java.use("java.lang.System");
  root_class.exit.implementation = function() {
    console.log("System.exit() function was called!");
  }; 
});

// Attach to the strstr() function
Interceptor.attach(Module.findExportByName("libc.so", "strstr"), {
    
	onEnter: function (args) {
	
	this.frida = Boolean(0);
       var haystack = Memory.readUtf8String(args[0]);
       var needle   = Memory.readUtf8String(args[1]);
    
	// If the string "frida" is detected, so set this.frida to true
	if ( haystack.indexOf("frida") != -1) {
            this.frida = Boolean(1);
        }
    },
    onLeave: function (retval) {
		// If Frida was detected modified the return value of the function
        if (this.frida) { 
			retval.replace(0);
		}
        return retval;
    } 
});
