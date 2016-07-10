#!/bin/sh
apt-get update
apt-get install xterm tint2 omxplayer php5-fpm php5 wget xdotool openbox unclutter xinit -y
wget https://raw.githubusercontent.com/shandoosheri/piTV/master/ginstall-ytdl
chmod +x ginstall-ytdl
./ginstall-ytdl
echo "allowed_users=anybody" > '/etc/X11/Xwrapper.config'
wget http://steinerdatenbank.de/software/kweb-1.7.2.tar.gz
tar -xzf kweb-1.7.2.tar.gz
cd kweb-1.7.2
./debinstall
wget https://github.com/shandoosheri/piTV/archive/master.zip -O pitv.zip
unzip pitv.zip
mv piTV-master/pitv /home/pi/
sed -i '$ d' /etc/rc.local
echo "sudo sh /home/pi/pitv/startup.sh" >> /etc/rc.local
echo "exit 0" >> /etc/rc.local

echo Enter your location Woeid to get weather updates
read woeid
echo woeid > '/home/pi/pitv/scripts/weather.txt'
reboot