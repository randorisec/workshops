# Mobile Hacking Workshop - Android

For this workshop, the following requirements are needed:

* Install VMWare Player 15 (**DO NOT USE VirtualBox!!**)
https://www.vmware.com/products/workstation-player/workstation-player-evaluation.html

* Download **MobexlerLite** virtual machine (default password: 12345)
https://mobexler.com/download.htm

* Import the OVA file using VMWare Player 15. If an error message appears sayng the OVA file didn't pass the OVF specifications, please click retry. It should work :)

* Edit the Virtual Machine hardware configuration:
  - Memory: 4Go
  - Processors: Enable "Virtualize Intel VT-x/EPT or AMD-V/RVI" 

* Download inside the Virtual Machine the OWASP Crackmes:
   - Level1: https://github.com/OWASP/owasp-mstg/tree/master/Crackmes/Android/Level_01
   - Level2: https://github.com/OWASP/owasp-mstg/tree/master/Crackmes/Android/Level_02
   - Level3: https://github.com/OWASP/owasp-mstg/tree/master/Crackmes/Android/Level_03
	
* Install the vmwares tools inside the Virtual Machine to be more comfortable:
https://linuxconfig.org/install-vmware-tools-on-ubuntu-18-04-bionic-beaver-linux 
	
* Enable kvm permission to create an emulator
https://stackoverflow.com/questions/37300811/android-studio-dev-kvm-device-permission-denied

   1. sudo apt install qemu-kvm
   2. sudo adduser MobexlerLite kvm
   3. reboot


