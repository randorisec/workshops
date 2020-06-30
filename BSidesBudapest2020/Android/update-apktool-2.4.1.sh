#! /usr/bin/bash

DEST="/usr/local/bin"

# Download wrapper script
wget https://raw.githubusercontent.com/iBotPeaches/Apktool/master/scripts/linux/apktool

# Download apktool 2.4.1.jar
wget https://bitbucket.org/iBotPeaches/apktool/downloads/apktool_2.4.1.jar

echo "Give execution permission"
chmod a+x apktool
chmod a+x apktool_2.4.1.jar

echo "Move files to $DEST"
sudo mv apktool $DEST/apktool
sudo mv apktool_2.4.1.jar $DEST/apktool.jar
