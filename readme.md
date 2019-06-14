# RICOH Theta V direct mode httpProxy

This is a proxy to grab the livePreview in a simple way for theta V in directmode.
Runs in [Node](http://nodejs.org) without any dependency, it should run all platforms
There is no need to install any plugin in the camera
The mjpeg stream is 1024x512

## instructions

* Put camera in direct mode (blue wifi light)
* Connect the computer to the camera's AP
* run the script

## View the stream

* In [VLC](https://www.videolan.org/index.html) open ***http://127.0.0.1:8000*** It has a delay due the VLC buffering
* In [gstreamer](https://gstreamer.freedesktop.org/)`gst-launch-1.0 -v souphttpsrc location=http://127.0.0.1:8000 ! decodebin ! autovideosink`


