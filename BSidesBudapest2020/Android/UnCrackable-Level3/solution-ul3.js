// Frida script resolving the UnCrackable Level 3

function hook_native_libs() {

	// offset from the unnamed function
	var offset_fun = 0x000012c0;
	// retrieve the base address from libfoo.so
	var p_foo = Module.findBaseAddress('libfoo.so');
	// now from the base address and the offset, we can retrieve the pointer to the function
	var p_fun_secret = p_foo.add(offset_fun);


	Interceptor.attach( p_fun_secret, {
		onEnter: function (args) {
		// the argument is a pointer to the secret
		// we juste save this pointer when entering
			this.secret = args[0];
			console.log("onEnter() p_fun_secret");
		},
		onLeave: function (retval) {
		// at the end, we display, the content of the pointer
		// as a byte array, we display the 24  bytes
			console.log("onLeave() p_fun_secret");
			console.log(Memory.readByteArray(this.secret,24));
		}
	});
}


Java.perform(function () {
  console.log("Starting uncrackable3...");

  var root_class = Java.use("java.lang.System");
  root_class.exit.implementation = function() {
    console.log("System.exit() function was called!");
  };

  // this is just a placeholder to be sure the libfoo.so was correctly loaded
  var mainactivity = Java.use("sg.vantagepoint.uncrackable3.MainActivity");
  mainactivity.onStart.overload().implementation = function() {
     console.log("MainActivity was called!!!");
     var ret = this.onStart.overload().call(this);
  };

  // Now, we can attach to libfoo.so
  hook_native_libs();
});


Interceptor.attach(Module.findExportByName("libc.so", "strstr"), {

	onEnter: function (args) {

	this.frida = Boolean(0);

		var haystack = Memory.readUtf8String(args[0]);
		var needle   = Memory.readUtf8String(args[1]);

		if ( haystack.indexOf("frida") != -1 ) {
			this.frida = Boolean(1);
		}
	},

	onLeave: function (retval) {

		if (this.frida) {
			retval.replace(0);
		}

		return retval;
	}
});
