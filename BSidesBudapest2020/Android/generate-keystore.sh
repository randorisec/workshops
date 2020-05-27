#! /bin/bash
keytool -genkeypair -dname "cn=Daniel Kloo, ou=Budapest, o=Bsides, c=HU" -alias budkey -keystore bud.keystore -storepass bsides -validity 2000 -keyalg RSA -keysize 2048  -sigalg SHA1withRSA
