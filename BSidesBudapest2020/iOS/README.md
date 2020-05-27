# Mobile Hacking Workshop - iOS

For this workshop, the following requirements are needed:

* Install VMWare Player 15 (**DO NOT USE VirtualBox!!**)
https://www.vmware.com/products/workstation-player/workstation-player-evaluation.html

* Download **MobexlerLite** virtual machine (default password: 12345)
https://drive.google.com/file/d/1r2exB-4OyBW0vRKFAPY7ls7ezX2ioXtl/view?usp=sharing

* Import the OVA file using VMWare Player 15. If an error message appears sayng the OVA file didn't pass the OVF specifications, please click retry. It should work :)

* Edit the Virtual Machine hardware configuration:
  - Memory: 4Go
  - Processors: Enable "Virtualize Intel VT-x/EPT or AMD-V/RVI" 

* Download inside the Virtual Machine the following IPA:
   - DVIA: https://github.com/randorisec/workshops/blob/master/BSidesBudapest2020/iOS/dvia.ipa
   - iGoat: https://github.com/randorisec/workshops/blob/master/BSidesBudapest2020/iOS/iGoat.ipa
   - Headbook: https://github.com/randorisec/workshops/blob/master/BSidesBudapest2020/iOS/Headbook-v1.0.ipa

* Install DVIA and iGoat on your jailbroken device using Cydia Impactor
	
* Install the vmwares tools inside the Virtual Machine to be more comfortable:
https://linuxconfig.org/install-vmware-tools-on-ubuntu-18-04-bionic-beaver-linux 
	
* Install rvi_capture
https://github.com/gh2o/rvi_capture
