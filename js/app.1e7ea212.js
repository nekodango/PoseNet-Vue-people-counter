(function(e){function t(t){for(var i,r,s=t[0],l=t[1],c=t[2],p=0,d=[];p<s.length;p++)r=s[p],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(i=!1)}i&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var i={},a={app:0},o=[];function r(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("div",{staticClass:"d-flex align-center"},[e._v(" PoseNet people counter ")])]),n("v-content",[n("Camera")],1)],1)},o=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-container",{attrs:{fluid:""}},[n("v-row",{attrs:{dense:""}},[n("v-col",[n("div",{staticStyle:{display:"none"},attrs:{id:"info"}}),n("div",{attrs:{id:"loading"}},[e._v(" Loading the model... ")]),n("div",{staticStyle:{display:"none"},attrs:{id:"main"}},[n("video",{staticStyle:{display:"none"},attrs:{id:"video",playsinline:""}}),n("canvas",{attrs:{id:"output"}})])]),n("v-col",[n("v-card",{staticClass:"mx-auto",attrs:{outlined:"",align:"left"}},[n("v-list-item",{attrs:{"three-line":""}},[n("v-list-item-content",[n("div",{staticClass:"overline mb-4"},[e._v("count")]),n("v-list-item-title",{staticClass:"headline mb-1"},[n("v-icon",{attrs:{large:""}},[e._v("mdi-walk")]),e._v(e._s(e.people_count))],1),n("v-list-item-subtitle",[e._v("Count from "+e._s(e.last_reset))])],1)],1),n("v-card-actions",[n("v-btn",{on:{click:e.clear_count}},[e._v("Reset")])],1)],1),n("v-card",[n("v-expansion-panels",{model:{value:e.panel,callback:function(t){e.panel=t},expression:"panel"}},[n("v-expansion-panel",[n("v-expansion-panel-header",[e._v("Detection Keypoints")]),n("v-expansion-panel-content",[n("v-select",{attrs:{items:e.keypoints,label:"#1","return-object":""},model:{value:e.selected_keypoints.k1,callback:function(t){e.$set(e.selected_keypoints,"k1",t)},expression:"selected_keypoints.k1"}}),n("v-select",{attrs:{items:e.keypoints,label:"#2","return-object":""},model:{value:e.selected_keypoints.k2,callback:function(t){e.$set(e.selected_keypoints,"k2",t)},expression:"selected_keypoints.k2"}})],1)],1),n("v-expansion-panel",[n("v-expansion-panel-header",[e._v("Max Pose Detections")]),n("v-expansion-panel-content",[n("v-slider",{attrs:{min:"0",max:"50",label:"Max Pose Detections"},scopedSlots:e._u([{key:"append",fn:function(){return[n("v-text-field",{staticClass:"mt-0 pt-0",staticStyle:{width:"60px"},attrs:{"hide-details":"","single-line":"",type:"number"},model:{value:e.maxPoseDetections,callback:function(t){e.maxPoseDetections=t},expression:"maxPoseDetections"}})]},proxy:!0}]),model:{value:e.maxPoseDetections,callback:function(t){e.maxPoseDetections=t},expression:"maxPoseDetections"}})],1)],1),n("v-expansion-panel",[n("v-expansion-panel-header",[e._v("Detect line width")]),n("v-expansion-panel-content",[n("v-slider",{attrs:{min:"0",max:"100",label:"width"},scopedSlots:e._u([{key:"append",fn:function(){return[n("v-text-field",{staticClass:"mt-0 pt-0",staticStyle:{width:"60px"},attrs:{suffix:"px","hide-details":"","single-line":"",type:"number"},model:{value:e.thresh,callback:function(t){e.thresh=t},expression:"thresh"}})]},proxy:!0}]),model:{value:e.thresh,callback:function(t){e.thresh=t},expression:"thresh"}})],1)],1),n("v-expansion-panel",[n("v-expansion-panel-header",[e._v("Move detect line")]),n("v-expansion-panel-content",[n("v-list-item",[n("v-slider",{attrs:{min:"0",max:"800",label:"p1_x"},scopedSlots:e._u([{key:"append",fn:function(){return[n("v-text-field",{staticClass:"mt-0 pt-0",staticStyle:{width:"60px"},attrs:{"hide-details":"","single-line":"",type:"number"},model:{value:e.p1.x,callback:function(t){e.$set(e.p1,"x",t)},expression:"p1.x"}})]},proxy:!0}]),model:{value:e.p1.x,callback:function(t){e.$set(e.p1,"x",t)},expression:"p1.x"}})],1),n("v-list-item",[n("v-slider",{attrs:{min:"0",max:"600",label:"p1_y"},scopedSlots:e._u([{key:"append",fn:function(){return[n("v-text-field",{staticClass:"mt-0 pt-0",staticStyle:{width:"60px"},attrs:{"hide-details":"","single-line":"",type:"number"},model:{value:e.p1.y,callback:function(t){e.$set(e.p1,"y",t)},expression:"p1.y"}})]},proxy:!0}]),model:{value:e.p1.y,callback:function(t){e.$set(e.p1,"y",t)},expression:"p1.y"}})],1),n("v-list-item",[n("v-slider",{attrs:{min:"0",max:"800",label:"p2_x"},scopedSlots:e._u([{key:"append",fn:function(){return[n("v-text-field",{staticClass:"mt-0 pt-0",staticStyle:{width:"60px"},attrs:{"hide-details":"","single-line":"",type:"number"},model:{value:e.p2.x,callback:function(t){e.$set(e.p2,"x",t)},expression:"p2.x"}})]},proxy:!0}]),model:{value:e.p2.x,callback:function(t){e.$set(e.p2,"x",t)},expression:"p2.x"}})],1),n("v-list-item",[n("v-slider",{attrs:{min:"0",max:"600",label:"p2_y"},scopedSlots:e._u([{key:"append",fn:function(){return[n("v-text-field",{staticClass:"mt-0 pt-0",staticStyle:{width:"60px"},attrs:{"hide-details":"","single-line":"",type:"number"},model:{value:e.p2.y,callback:function(t){e.$set(e.p2,"y",t)},expression:"p2.y"}})]},proxy:!0}]),model:{value:e.p2.y,callback:function(t){e.$set(e.p2,"y",t)},expression:"p2.y"}})],1)],1)],1)],1)],1)],1)],1)],1)],1)},s=[],l=(n("cb29"),n("4de4"),n("4160"),n("d3b7"),n("159b"),n("96cf"),n("1da1")),c=n("8726"),u=n("3191"),p=n.n(u),d=(n("ddb0"),n("3835")),f=n("0b53"),m={getName:function(){return""},color:"aqua",lineWidth:2,toTuple:function(e){return[e.y,e.x]},drawPoint:function(e,t,n,i){e.beginPath(),e.arc(n,t,i,0,2*Math.PI),e.fillStyle="pink",e.fill()},drawSegment:function(e,t,n,i,a){a.beginPath(),a.moveTo(e[1]*i,e[0]*i),a.lineTo(t[1]*i,t[0]*i),a.lineWidth=5,a.strokeStyle=n,a.stroke()},drawSkeleton:function(e,t,n){var i=this,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,o=c["a"](e,t);o.forEach((function(e){i.drawSegment(i.toTuple(e[0].position),i.toTuple(e[1].position),"pink",a,n)}))},drawKeypoints:function(e,t,n,i){for(var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=0;o<e.length;o++){var r=e[o];if(!(r.score<t)){var s=r.position,l=s.y,c=s.x;this.drawPoint(n,l*a,c*a,2,i)}}},drawBoundingBox:function(e,t){var n=c["b"](e);t.rect(n.minX,n.minY,n.maxX-n.minX,n.maxY-n.minY),t.stroke()},renderToCanvas:function(e,t){return Object(l["a"])(regeneratorRuntime.mark((function n(){var i,a,o,r,s,l,c,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=Object(d["a"])(e.shape,2),a=i[0],o=i[1],r=new ImageData(o,a),n.next=4,e.data();case 4:for(s=n.sent,l=0;l<a*o;++l)c=4*l,u=3*l,r.data[c]=s[u],r.data[c+1]=s[u+1],r.data[c+2]=s[u+2],r.data[c+3]=255;t.putImageData(r,0,0);case 7:case"end":return n.stop()}}),n)})))()},renderImageToCanvas:function(e,t,n){n.width=t[0],n.height=t[1]},drawHeatMapValues:function(e,t,n,i){var a=n.getContext("2d"),o=5,r=e.mul(f["a"](t,"int32"));this.drawPoints(a,r,o,i)},drawPoints:function(e,t,n,i){for(var a=t.buffer().values,o=0;o<a.length;o+=2){var r=a[o],s=a[o+1];0!==s&&0!==r&&(e.beginPath(),e.arc(s,r,n,0,2*Math.PI),e.fillStyle=i,e.fill())}},drawOffsetVectors:function(e,t,n){for(var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,a=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0,r=c["singlePose"].getOffsetPoints(e,n,t),s=e.buffer().values,l=r.buffer().values,u=0;u<s.length;u+=2){var p=s[u]*n,d=s[u+1]*n,f=l[u],m=l[u+1];this.drawSegment([p,d],[f,m],o,i,a)}},drawOffsetVector:function(e,t,n,i,a,o){this.drawSegment([t*i,n*i],[t*i+a,n*i+o],"red",1,e)},drawDisplacementEdgesFrom:function(e,t,n,i,a,o,r,s,l){var c=this,u=n.shape[2]/2,p=r*i+l,d=o*i+s,f=a[t]||[];f.length>0&&f.forEach((function(t){var i=n.get(o,r,t),a=n.get(o,r,t+u);c.drawSegment([d,p],[d+i,p+a],"blue",1,e)}))}},v=800,h=600,x=new p.a,y={algorithm:"multi-pose",input:{mobileNetArchitecture:"0.75",outputStride:16,imageScaleFactor:.5},singlePoseDetection:{minPoseConfidence:.1,minPartConfidence:.5},multiPoseDetection:{minPoseConfidence:.15,minPartConfidence:.1,nmsRadius:30},output:{showVideo:!0,showSkeleton:!0,showPoints:!0},net:null},g={name:"Camera",data:function(){return{is_rear_camera:!0,people_count:0,p1:{x:0,y:300},p2:{x:800,y:300},thresh:10,last_reset:"",prev_detected:{x:-1,y:-1,on:null},maxPoseDetections:10,panel:[],keypoints:["nose","leftEye","rightEye","leftEar","rightEar","leftShoulder","rightShoulder","leftElbow","rightElbow","leftWrist","rightWrist","leftHip","rightHip","leftKnee","rightKnee","leftAnkle","rightAnkle"],selected_keypoints:{k1:"leftShoulder",k2:"rightAnkle"}}},computed:{is_editing_detectline:function(){return 3===this.panel}},mounted:function(){this.onMounted()},methods:{clear_count:function(){this.last_reset=(new Date).toLocaleString(),this.people_count=0},detectPoseInRealTime:function(e,t){var n=this;console.log(t);var i,a=document.getElementById("output"),o=a.getContext("2d");function r(){return s.apply(this,arguments)}function s(){return s=Object(l["a"])(regeneratorRuntime.mark((function t(){var a,s,l,u,p;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!y.changeToArchitecture){t.next=6;break}return y.net.dispose(),t.next=4,c["c"]();case 4:y.net=t.sent,y.changeToArchitecture=null;case 6:x.begin(),a=null,s=[],p="red",t.t0=y.algorithm,t.next="single-pose"===t.t0?13:"multi-pose"===t.t0?20:26;break;case 13:return t.next=15,y.net.estimatePoses(e,{flipHorizontal:i,decodingMethod:"single-person"});case 15:return a=t.sent,s.push(a),l=+y.singlePoseDetection.minPoseConfidence,u=+y.singlePoseDetection.minPartConfidence,t.abrupt("break",26);case 20:return t.next=22,y.net.estimatePoses(e,{flipHorizontal:i,decodingMethod:"multi-person",maxDetections:n.maxPoseDetections,scoreThreshold:y.multiPoseDetection.minPartConfidence,nmsRadius:y.multiPoseDetection.nmsRadius});case 22:return s=t.sent,l=+y.multiPoseDetection.minPoseConfidence,u=+y.multiPoseDetection.minPartConfidence,t.abrupt("break",26);case 26:o.clearRect(0,0,v,h),y.output.showVideo&&(o.save(),o.drawImage(e,0,0,v,h),o.restore()),s.forEach((function(e){var t=e.score,i=e.keypoints;if(t>=l){console.log(JSON.stringify(i),u,o),y.output.showPoints&&m.drawKeypoints(i,u,o),y.output.showSkeleton&&m.drawSkeleton(i,u,o);var a=i.filter((function(e){return e.part===n.selected_keypoints.k1}))[0],r=i.filter((function(e){return e.part===n.selected_keypoints.k2}))[0],s=function(e,t,n,i){var a=(e.x-t.x)*(n.y-e.y)+(e.y-t.y)*(e.x-n.x),o=(e.x-t.x)*(i.y-e.y)+(e.y-t.y)*(e.x-i.x),r=(n.x-i.x)*(e.y-n.y)+(n.y-i.y)*(n.x-e.x),s=(n.x-i.x)*(t.y-n.y)+(n.y-i.y)*(n.x-t.x);return a*o<0&&r*s<0},c=function(e,t,n,i,a,o){var r=a-n,s=o-i,l=r*r,c=s*s,u=l+c,p=-(r*(n-e)+s*(i-t));if(p<0)return(n-e)*(n-e)+(i-t)*(i-t);if(p>u)return(a-e)*(a-e)+(o-t)*(o-t);var d=r*(i-t)-s*(n-e);return d*d/u},d={x:n.p1.x,y:n.p1.y},f={x:n.p2.x,y:n.p2.y},v=a.position,h=r.position,x=(v.x+h.x)/2,g=(v.y+h.y)/2;if(o.beginPath(),o.moveTo(v.x,v.y),o.lineTo(h.x,h.y),o.lineWidth=4,o.strokeStyle="green",o.stroke(),o.beginPath(),o.arc(x,g,2,0,2*Math.PI),o.fillStyle="yellow",o.fill(),s(d,f,v,h)){var b="aqua";c(x,g,n.p1.x,n.p1.y,n.p2.x,n.p2.y)<=n.thresh&&(new Date).getTime()-n.prev_detected.on>=300&&(p="yellow",n.people_count++,n.prev_detected={x:x,y:g,on:(new Date).getTime()},b="orange",o.beginPath(),o.arc(x,g,30,0,2*Math.PI),o.fillStyle="red",o.fill()),o.beginPath(),o.moveTo(v.x,v.y),o.lineTo(h.x,h.y),o.lineWidth=6,o.strokeStyle=b,o.stroke()}}})),o.beginPath(),o.moveTo(n.p1.x,n.p1.y),o.lineTo(n.p2.x,n.p2.y),o.lineWidth=n.thresh,o.strokeStyle=p,o.stroke(),n.is_editing_detectline&&(o.font="bold 20px sans-serif",o.fillStyle=p,o.fillText("p1",n.p1.x+n.thresh+5,n.p1.y+20),o.fillText("p2",n.p2.x+n.thresh+5,n.p2.y-15)),x.end(),requestAnimationFrame(r);case 38:case"end":return t.stop()}}),t)}))),s.apply(this,arguments)}i=!1,a.width=v,a.height=h,r()},setupCamera:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var n,i,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){t.next=2;break}throw new Error("Browser API navigator.mediaDevices.getUserMedia not available");case 2:return n=document.getElementById("video"),n.width=v,n.height=h,a=e.isMobile(),i=a?{exact:"environment"}:"user",t.next=9,navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:i,width:a?void 0:v,height:a?void 0:h}});case 9:return o=t.sent,n.srcObject=o,t.abrupt("return",new Promise((function(e){n.onloadedmetadata=function(){e(n)}})));case 12:case"end":return t.stop()}}),t)})))()},loadVideo:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.setupCamera();case 2:return n=t.sent,n.play(),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))()},setupFPS:function(){x.showPanel(0),document.body.appendChild(x.dom)},setupGui:function(e,t){y.net=t,e.length>0&&(y.camera=e[0].deviceId)},onMounted:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var n,i,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c["c"]();case 2:return n=t.sent,document.getElementById("loading").style.display="none",document.getElementById("main").style.display="block",t.prev=5,t.next=8,e.loadVideo();case 8:i=t.sent,t.next=17;break;case 11:throw t.prev=11,t.t0=t["catch"](5),a=document.getElementById("info"),a.textContent="this browser does not support video capture,or this device does not have a camera",a.style.display="block",t.t0;case 17:e.setupGui([],n),e.prev_detected.on=(new Date).getTime(),e.last_reset=(new Date).toLocaleString(),e.detectPoseInRealTime(i,n);case 21:case"end":return t.stop()}}),t,null,[[5,11]])})))()},isAndroid:function(){return/Android/i.test(navigator.userAgent)},isiOS:function(){return/iPhone|iPad|iPod/i.test(navigator.userAgent)},isMobile:function(){return this.isAndroid()||this.isiOS()}}},b=g,w=n("2877"),k=n("6544"),P=n.n(k),_=n("8336"),S=n("b0af"),C=n("99d9"),D=n("62ad"),T=n("a523"),V=n("cd55"),O=n("49e2"),E=n("c865"),I=n("0393"),M=n("132d"),j=n("da13"),R=n("5d23"),A=n("0fd9"),$=n("b974"),B=n("ba0d"),L=n("8654"),W=Object(w["a"])(b,r,s,!1,null,null,null),H=W.exports;P()(W,{VBtn:_["a"],VCard:S["a"],VCardActions:C["a"],VCol:D["a"],VContainer:T["a"],VExpansionPanel:V["a"],VExpansionPanelContent:O["a"],VExpansionPanelHeader:E["a"],VExpansionPanels:I["a"],VIcon:M["a"],VListItem:j["a"],VListItemContent:R["a"],VListItemSubtitle:R["b"],VListItemTitle:R["c"],VRow:A["a"],VSelect:$["a"],VSlider:B["a"],VTextField:L["a"]});var F={name:"App",components:{Camera:H},data:function(){return{drawer:!1}}},K=F,N=n("7496"),q=n("40dc"),J=n("a75b"),U=Object(w["a"])(K,a,o,!1,null,null,null),X=U.exports;P()(U,{VApp:N["a"],VAppBar:q["a"],VContent:J["a"]});var Y=n("f309");i["a"].use(Y["a"]);var z=new Y["a"]({});i["a"].config.productionTip=!1,new i["a"]({vuetify:z,render:function(e){return e(X)}}).$mount("#app")},6:function(e,t){}});
//# sourceMappingURL=app.1e7ea212.js.map