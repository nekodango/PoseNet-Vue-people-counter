<template>
    <div>
        <v-container fluid>
            <v-row dense>
                <v-col>
                    <div id="info" style='display:none'>
                    </div>
                    <div id="loading">
                        Loading the model...
                    </div>

                    <div id='main' style='display:none'>
                        <video id="video" playsinline style="display: none;">
                        </video>
                        <canvas id="output" />
                    </div>

                </v-col>
                <v-col>
                    <v-card
                            class="mx-auto"
                            outlined
                            align="left"
                    >
                        <v-list-item three-line>
                            <v-list-item-content>
                                <div class="overline mb-4">count</div>
                                <v-list-item-title class="headline mb-1"><v-icon large>mdi-walk</v-icon>{{ people_count }}</v-list-item-title>
                                <v-list-item-subtitle>Count from {{ last_reset }}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-card-actions>
                            <v-btn @click="clear_count">Reset</v-btn>
                        </v-card-actions>
                    </v-card>

                    <v-card>
                        <v-expansion-panels>
                            <v-expansion-panel>
                                <v-expansion-panel-header>Detect line width</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <v-slider
                                            v-model="thresh"
                                            min="0"
                                            max="100"
                                            label="width"
                                    >
                                        <template v-slot:append>
                                            <v-text-field
                                                    v-model="thresh"
                                                    suffix="px"
                                                    class="mt-0 pt-0"
                                                    hide-details
                                                    single-line
                                                    type="number"
                                                    style="width: 60px"
                                            ></v-text-field>
                                        </template>
                                    </v-slider>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel>
                                <v-expansion-panel-header>Move detect line</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <v-list-item>
                                        <v-slider
                                                v-model="p1.x"
                                                min="0"
                                                max="800"
                                                label="p1_x"
                                        >
                                            <template v-slot:append>
                                                <v-text-field
                                                        v-model="p1.x"
                                                        class="mt-0 pt-0"
                                                        hide-details
                                                        single-line
                                                        type="number"
                                                        style="width: 60px"
                                                ></v-text-field>
                                            </template>
                                        </v-slider>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-slider
                                                v-model="p1.y"
                                                min="0"
                                                max="600"
                                                label="p1_y"
                                        >
                                            <template v-slot:append>
                                                <v-text-field
                                                        v-model="p1.y"
                                                        class="mt-0 pt-0"
                                                        hide-details
                                                        single-line
                                                        type="number"
                                                        style="width: 60px"
                                                ></v-text-field>
                                            </template>
                                        </v-slider>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-slider
                                                v-model="p2.x"
                                                min="0"
                                                max="800"
                                                label="p2_x"
                                        >
                                            <template v-slot:append>
                                                <v-text-field
                                                        v-model="p2.x"
                                                        class="mt-0 pt-0"
                                                        hide-details
                                                        single-line
                                                        type="number"
                                                        style="width: 60px"
                                                ></v-text-field>
                                            </template>
                                        </v-slider>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-slider
                                                v-model="p2.y"
                                                min="0"
                                                max="600"
                                                label="p2_y"
                                        >
                                            <template v-slot:append>
                                                <v-text-field
                                                        v-model="p2.y"
                                                        class="mt-0 pt-0"
                                                        hide-details
                                                        single-line
                                                        type="number"
                                                        style="width: 60px"
                                                ></v-text-field>
                                            </template>
                                        </v-slider>
                                    </v-list-item>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-card>


                </v-col>
            </v-row>
        </v-container>


    </div>
</template>

<script>
    import * as posenet from '@tensorflow-models/posenet';
    import Stats from 'stats.js';
    import Util from '@/services/utils';

    const videoWidth = 800;
    const videoHeight = 600;
    const stats = new Stats();
    const guiState = {
        algorithm: 'multi-pose',
        input: {
            mobileNetArchitecture: '0.75',
            outputStride: 16,
            imageScaleFactor: 0.5,
        },
        singlePoseDetection: {
            minPoseConfidence: 0.1,
            minPartConfidence: 0.5,
        },
        multiPoseDetection: {
            maxPoseDetections: 5,
            minPoseConfidence: 0.15,
            minPartConfidence: 0.1,
            nmsRadius: 30.0,
        },
        output: {
            showVideo: true,
            showSkeleton: true,
            showPoints: true,
        },
        net: null,
    };
    export default {
        name: 'Camera',
        data: () => ({
            is_rear_camera: true,
            people_count: 0,
            p1: {"x": 400, "y": 0},
            p2: {"x": 400, "y": 600},
            thresh: 10,
            last_reset: '',
            prev_detected: {"x": -1, 'y': -1, 'on': null}
        }),
        mounted() {
            this.onMounted();
        },

        methods: {
            clear_count: function() {
                this.last_reset = new Date().toLocaleString();
                this.people_count = 0
            },
            detectPoseInRealTime: function(video, net) {
                const vm = this
                console.log(net)
                const canvas = document.getElementById('output');
                const ctx = canvas.getContext('2d');
                // since images are being fed from a webcam
                let flipHorizontal
                flipHorizontal = false
                // if (this.is_rear_camera === false) {
                //     flipHorizontal = false
                // } else {
                //     flipHorizontal = true
                // }

                canvas.width = videoWidth;
                canvas.height = videoHeight;

                async function poseDetectionFrame() {
                    if (guiState.changeToArchitecture) {
                        // Important to purge variables and free up GPU memory
                        guiState.net.dispose();

                        // Load the PoseNet model weights for either the 0.50, 0.75, 1.00, or 1.01
                        // version
                        guiState.net = await posenet.load(+guiState.changeToArchitecture);

                        guiState.changeToArchitecture = null;
                    }

                    // Begin monitoring code for frames per second
                    stats.begin();

                    // Scale an image down to a certain factor. Too large of an image will slow
                    // down the GPU
                    // const imageScaleFactor = guiState.input.imageScaleFactor;
                    // const outputStride = +guiState.input.outputStride;

                    let pose = null
                    let poses = [];
                    let minPoseConfidence;
                    let minPartConfidence;
                    let line_color = 'red'

                    switch (guiState.algorithm) {
                        case 'single-pose':
                            pose = await guiState.net.estimatePoses(
                                video, {
                                    flipHorizontal: flipHorizontal,
                                    decodingMethod: 'single-person'
                                });
                            poses.push(pose);

                            minPoseConfidence = +guiState.singlePoseDetection.minPoseConfidence;
                            minPartConfidence = +guiState.singlePoseDetection.minPartConfidence;
                            break;
                        case 'multi-pose':
                            // poses = await guiState.net.estimateMultiplePoses(
                            //     video, imageScaleFactor, flipHorizontal, outputStride,
                            //     guiState.multiPoseDetection.maxPoseDetections,
                            //     guiState.multiPoseDetection.minPartConfidence,
                            //     guiState.multiPoseDetection.nmsRadius);
                            poses = await guiState.net.estimatePoses(
                                video, {
                                    flipHorizontal: flipHorizontal,
                                    decodingMethod: 'multi-person',
                                    maxDetections: guiState.multiPoseDetection.maxPoseDetections,
                                    scoreThreshold: guiState.multiPoseDetection.minPartConfidence,
                                    nmsRadius:guiState.multiPoseDetection.nmsRadius
                                });

                            minPoseConfidence = +guiState.multiPoseDetection.minPoseConfidence;
                            minPartConfidence = +guiState.multiPoseDetection.minPartConfidence;
                            break;
                    }

                    ctx.clearRect(0, 0, videoWidth, videoHeight);

                    if (guiState.output.showVideo) {
                        ctx.save();
                        // ctx.scale(-1, 1);
                        // ctx.translate(-videoWidth, 0);
                        ctx.drawImage(video, 0, 0, videoWidth, videoHeight);
                        ctx.restore();
                    }

                    // For each pose (i.e. person) detected in an image, loop through the poses
                    // and draw the resulting skeleton and keypoints if over certain confidence
                    // scores
                    poses.forEach(({
                                       score,
                                       keypoints
                                   }) => {
                        if (score >= minPoseConfidence) {
                            console.log(JSON.stringify(keypoints), minPartConfidence, ctx)
                            if (guiState.output.showPoints) {
                                Util.drawKeypoints(keypoints, minPartConfidence, ctx);
                            }
                            if (guiState.output.showSkeleton) {
                                Util.drawSkeleton(keypoints, minPartConfidence, ctx);
                            }

                            // const nose = keypoints.filter(elem => elem.part === 'nose')[0]
                            const left = keypoints.filter(elem => elem.part === 'leftShoulder')[0]
                            const right = keypoints.filter(elem => elem.part === 'rightShoulder')[0]
                            // const target = keypoints.filter(elem => elem.part === 'leftShoulder')[0]


                            const intersect = function(p1, p2, p3, p4) {
                                const t1 = (p1.x - p2.x) * (p3.y - p1.y) + (p1.y - p2.y) * (p1.x - p3.x)
                                const t2 = (p1.x - p2.x) * (p4.y - p1.y) + (p1.y - p2.y) * (p1.x - p4.x)
                                const t3 = (p3.x - p4.x) * (p1.y - p3.y) + (p3.y - p4.y) * (p3.x - p1.x)
                                const t4 = (p3.x - p4.x) * (p2.y - p3.y) + (p3.y - p4.y) * (p3.x - p2.x)
                                return ((t1 * t2) < 0) && ((t3 * t4) < 0)
                            }

                            const min_d2 = function(x0, y0, x1, y1, x2, y2) {
                                var a = x2 - x1;
                                var b = y2 - y1;
                                var a2 = a * a;
                                var b2 = b * b;
                                var r2 = a2 + b2;
                                var tt = -(a*(x1-x0)+b*(y1-y0));
                                if( tt < 0 ) {
                                    return (x1-x0)*(x1-x0) + (y1-y0)*(y1-y0);
                                }
                                if( tt > r2 ) {
                                    return (x2-x0)*(x2-x0) + (y2-y0)*(y2-y0);
                                }
                                var f1 = a*(y1-y0)-b*(x1-x0);
                                return (f1*f1)/r2;
                            }

                            const a1 = {"x":vm.p1.x,"y":vm.p1.y}
                            const a2 = {"x":vm.p2.x,"y":vm.p2.y}
                            const b1 = left.position
                            const b2 = right.position

                            const center_x = (b1.x + b2.x) / 2
                            const center_y = (b1.y + b2.y) / 2

                            ctx.beginPath();
                            ctx.arc(center_x, center_y, 2, 0, 2 * Math.PI);
                            ctx.fillStyle = 'green';
                            ctx.fill();


                            if(intersect(a1, a2, b1, b2)) {
                                let left_right_line_color = 'aqua'
                                if(min_d2(center_x, center_y, vm.p1.x, vm.p1.y, vm.p2.x, vm.p2.y) <= vm.thresh) {
                                    if(new Date().getTime() - vm.prev_detected.on >= 300) {
                                        line_color = 'yellow'
                                        vm.people_count++;
                                        vm.prev_detected = {x: center_x, y: center_y, on: new Date().getTime()}
                                        left_right_line_color = 'orange'
                                        ctx.beginPath();
                                        ctx.arc(center_x, center_y, 30, 0, 2 * Math.PI);
                                        ctx.fillStyle = 'red';
                                        ctx.fill();
                                    }
                                }
                                ctx.beginPath();
                                ctx.moveTo(b1.x, b1.y);
                                ctx.lineTo(b2.x, b2.y);
                                ctx.lineWidth = 4;
                                ctx.strokeStyle = left_right_line_color;
                                ctx.stroke();
                            }
                        }
                    });

                    // Draw detect line
                    ctx.beginPath();
                    ctx.moveTo(vm.p1.x, vm.p1.y);
                    ctx.lineTo(vm.p2.x, vm.p2.y);
                    ctx.lineWidth = vm.thresh;
                    ctx.strokeStyle = line_color;
                    ctx.stroke();

                    ctx.font = "bold 20px sans-serif";
                    ctx.fillStyle = line_color;
                    ctx.fillText("p1", vm.p1.x + vm.thresh + 5, vm.p1.y + 20);
                    ctx.fillText("p2", vm.p2.x + vm.thresh + 5, vm.p2.y - 15);


                    // End monitoring code for frames per second
                    stats.end();

                    requestAnimationFrame(poseDetectionFrame);
                }

                poseDetectionFrame();
            },

            async setupCamera() {
                if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                    throw new Error(
                        'Browser API navigator.mediaDevices.getUserMedia not available');
                }

                const video = document.getElementById('video');
                video.width = videoWidth;
                video.height = videoHeight;

                let facing_mode
                const mobile = this.isMobile();
                if (mobile) {
                    facing_mode = { exact: "environment" }
                } else {
                    facing_mode = 'user'
                }

                const stream = await navigator.mediaDevices.getUserMedia({
                    'audio': false,
                    'video': {
                        facingMode: facing_mode,
                        width: mobile ? undefined : videoWidth,
                        height: mobile ? undefined : videoHeight,

                    }
                });
                video.srcObject = stream;

                return new Promise((resolve) => {
                    video.onloadedmetadata = () => {
                        resolve(video);
                    };
                });
            },

            async loadVideo() {
                const video = await this.setupCamera();
                video.play();

                return video;
            },

            /**
             * Sets up a frames per second panel on the top-left of the window
             */
            setupFPS() {
                stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
                document.body.appendChild(stats.dom);
            },
            /**
             * Sets up dat.gui controller on the top-right of the window
             */
            setupGui(cameras, net) {
                guiState.net = net;

                if (cameras.length > 0) {
                    guiState.camera = cameras[0].deviceId;
                }
            },

            async onMounted() {
                // Load the PoseNet model weights
                const net = await posenet.load();

                document.getElementById('loading').style.display = 'none';
                document.getElementById('main').style.display = 'block';

                let video;

                try {
                    video = await this.loadVideo();
                } catch (e) {
                    let info = document.getElementById('info');
                    info.textContent = 'this browser does not support video capture,' +
                        'or this device does not have a camera';
                    info.style.display = 'block';
                    throw e;
                }
                this.setupGui([], net);
                this.prev_detected.on = new Date().getTime()
                this.last_reset = new Date().toLocaleString();
                this.detectPoseInRealTime(video, net);

            },

            isAndroid() {
                return /Android/i.test(navigator.userAgent);
            },

            isiOS() {
                return /iPhone|iPad|iPod/i.test(navigator.userAgent);
            },

            isMobile() {
                return this.isAndroid() || this.isiOS();
            }
        }
    }
</script>
