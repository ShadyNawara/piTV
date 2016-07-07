#!/bin/bash
sudo pkill omxplayer
if [ -e "/tmp/omx" ]; then
    sudo rm /tmp/omx
    mkfifo /tmp/omx
else 
    mkfifo /tmp/omx
fi
presskey=$(sh presskey.sh l)
url=$(youtube-dl -f best -g $1)
omxplayer --live --aspect-mode stretch "$url" < /tmp/omx &
sudo echo . > /tmp/omx
presskey=$(sh presskey.sh n)