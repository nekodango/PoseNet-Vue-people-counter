# PoseNet people counter

[![github pages](https://github.com/nekodango/PoseNet-Vue-people-counter/workflows/github%20pages/badge.svg)](https://github.com/nekodango/PoseNet-Vue-people-counter/actions?query=workflow%3A%22github+pages%22)

## Overview
People counter running on a web browser using [PoseNet](https://github.com/tensorflow/tfjs-models/tree/master/posenet), [Vue.js](https://vuejs.org/), [Vuetify](https://vuetifyjs.com/).
![demo](demos/sample3.png)

![demo](demos/sample4.gif)

Code for the most part is directly from [PoseNet official demos](https://github.com/tensorflow/tfjs-models/tree/master/posenet/demos) and [xunxdd/Posenet-Demo--In-My-Feelings-Challenge-AI](https://github.com/xunxdd/Posenet-Demo--In-My-Feelings-Challenge-AI).


## Live demo
Try it on your device now!
https://nekodango.github.io/PoseNet-Vue-people-counter/


## Settings
You can change settings interactively.

### Detection Keypoints
You can select two keypoints from below.
 - nose
 - leftEye
 - rightEye
 - leftEar
 - rightEar
 - leftShoulder
 - rightShoulder
 - leftElbow
 - rightElbow
 - leftWrist
 - rightWrist
 - leftHip
 - rightHip
 - leftKnee
 - rightKnee
 - leftAnkle
 - rightAnkle
 
![demo](demos/sample6.png)


### Line width and position
![demo](demos/sample5.gif)

### Select Camera
![demo](demos/sample7.png)

## Running on Mobile Device
#### iOS/Safari
Use "Request Mobile Website" to change Rear camera.

![demo](demos/mobile.png)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
