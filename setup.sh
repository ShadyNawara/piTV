#!/bin/sh
apt-get update
apt-get install xterm tint2 omxplayer php5-fpm php5 wget xdotool openbox unclutter xinit -y
ginstall-ytdl
echo "allowed_users=anybody" > '/etc/X11/Xwrapper.config'
wget http://steinerdatenbank.de/software/kweb-1.7.2.tar.gz
tar -xzf kweb-1.7.2.tar.gz
cd kweb-1.7.2
./debinstall
wget https://github.com/shandoosheri/piTV/archive/master.zip -O pitv.zip
mv piTV-master/pitv ./pitv
rm -r kweb-1.7.2.tar.gz master.zip piTV-master youtube-dl pitv.zip
sed -i '$ d' /etc/rc.local
echo "sudo sh /home/pi/pitv/startup.sh" >> /etc/rc.local
echo "exit 0" >> /etc/rc.local