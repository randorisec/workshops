#! /bin/bash

KEYSTORE=/home/mobexlerlite/bud.keystore
APK=$1

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore $KEYSTORE -storepass bsides $APK budkey
