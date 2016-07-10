#!/bin/sh
nohup php -S 0.0.0.0:9090 -t /home/pi/pitv/ &>/dev/null &
sleep 10
su -l pi -c "xinit /home/pi/pitv/ktop"