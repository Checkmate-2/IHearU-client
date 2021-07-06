(this["webpackJsonpihearu-client"]=this["webpackJsonpihearu-client"]||[]).push([[0],{323:function(e,n,t){},330:function(e,n,t){},336:function(e,n){},337:function(e,n){},345:function(e,n){},355:function(e,n){},356:function(e,n){},357:function(e,n){},365:function(e,n){},394:function(e,n,t){"use strict";t.r(n);var r=t(11),a=t.n(r),c=t(63),o=t.n(c),i=(t(323),t(4)),s=t.n(i),l=t(12),u=t(5),d=t(121),h=(t(330),t(283)),f=t.n(h),p=t(436),j=t(437),b=t(230),g=t(433),v=t(308),m=t.n(v),O=t(435),x=t(439),w=t(434),y=t(429),k=t(430),S=t(428),C=t(440),W=t(432),A=t(441),L=t(169),H={settings:{threshold:85,showStats:!1},sentence:{predictions:[],words:[],log:[]}},N=Object(L.b)({name:"settings",initialState:H.settings,reducers:{setThreshold:function(e,n){e.threshold=n.payload},setShowStats:function(e,n){e.showStats=n.payload}}}),T=Object(L.b)({name:"sentence",initialState:H.sentence,reducers:{addPrediction:function(e,n){e.predictions.push(n.payload)},addWord:function(e,n){e.predictions=[],e.words.push(n.payload)},logWords:function(e){e.log.unshift(e.words),e.words=[]}}}),F=(N.reducer,Object(L.a)({reducer:{settings:N.reducer,sentence:T.reducer}})),P=F.getState,U=F.dispatch,B=t(431),E=t(42);function R(e){return"".concat(e,"%")}function D(e){var n=e.open,t=e.handleClose,r=Object(d.c)((function(e){return e.settings})),a=Object(d.b)();return Object(E.jsx)("div",{children:Object(E.jsxs)(x.a,{fullWidth:!0,maxWidth:"sm",open:n,onClose:t,"aria-labelledby":"settings-dialog-title",children:[Object(E.jsx)(S.a,{id:"settings-dialog-title",children:"Settings"}),Object(E.jsx)(y.a,{children:Object(E.jsx)(k.a,{children:Object(E.jsxs)(B.a,{children:[Object(E.jsx)(W.a,{control:Object(E.jsx)(C.a,{value:r.threshold,getAriaValueText:R,"aria-labelledby":"threshold-slider",valueLabelDisplay:"auto",step:5,marks:!0,min:50,max:99,onChange:function(e,n){return a(N.actions.setThreshold(n))}}),label:"Accuracy threshold",labelPlacement:"top"}),Object(E.jsx)(W.a,{control:Object(E.jsx)(A.a,{checked:r.showStats,onChange:function(e){return a(N.actions.setShowStats(e.target.checked))},name:"showStats",color:"primary"}),label:"Show Stats"})]})})}),Object(E.jsx)(w.a,{children:Object(E.jsx)(O.a,{autoFocus:!0,onClick:t,color:"primary",children:"Close"})})]})})}var I,z=t(18),J=t(307),M=t(306),V=t(228),$=t(227),q=[],G=[],K=[],Q=[],X=[],Y=new Array(63).fill(0),Z=function(e){return e.reduce((function(e,n){return e.concat([n.x,n.y,n.z])}),[])};function _(){return ee.apply(this,arguments)}function ee(){return(ee=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"model/model.json",e.next=3,V.a("model/model.json");case 3:I=e.sent;case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ne(){return te.apply(this,arguments)}function te(){return(te=Object(l.a)(s.a.mark((function e(){var n,t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/model.csv");case 2:return n=e.sent,e.next=5,n.text();case 5:t=e.sent,q=t.split(",");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function re(e){return ae.apply(this,arguments)}function ae(){return(ae=Object(l.a)(s.a.mark((function e(n){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new M.Hands({locateFile:function(e){return"/hands/".concat(e)}})).setOptions({maxNumHands:2,minDetectionConfidence:.5,minTrackingConfidence:.5}),t.onResults(ce),e.next=5,t.initialize();case 5:n&&new J.Camera(n,{onFrame:function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.send({image:n});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}).start();case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ce(e){if(function(e){if(e.multiHandLandmarks&&e.multiHandedness){for(var n=Y,t=Y,r=0;r<e.multiHandLandmarks.length;r++){var a="Right"===e.multiHandedness[r].label,c=e.multiHandLandmarks[r];a?t=Z(c):n=Z(c)}G=[].concat(Object(z.a)(n),Object(z.a)(t)),K.push(G)}}(e),2===K.length){var n=function(e){var n=V.b([e]),t=I.predict(n).dataSync(),r=Math.max.apply(Math,Object(z.a)(t)),a=Object(z.a)(t).indexOf(r);return r>=P().settings.threshold/100?(console.log(q[a],r),q[a]):null}(K),t=n!==X[X.length-1],r=Q.length>4&&n===(a=Q).sort((function(e,n){return a.filter((function(n){return n===e})).length-a.filter((function(e){return e===n})).length})).pop();n&&(Q.push(n),U(T.actions.addPrediction(n))),n&&t&&r&&(X.push(n),Q=[],U(T.actions.addWord(n))),K=[]}var a}function oe(){var e=P().sentence.words,n=$.getAudioUrl(e.join(" "),{lang:"ar",slow:!1,host:"https://translate.google.com"});console.log(n),$.getAudioBase64(e.join(" "),{lang:"ar",slow:!1}).then((function(e){console.log({base64:e});var n=new Audio("data:audio/mp3;base64,".concat(e));n.oncanplaythrough=function(e){return n.play()}})).catch(console.error),U(T.actions.logWords())}function ie(e){return e.reduce((function(e,n){return n in e?e[n]++:e[n]=1,e}),{})}var se=t(438),le=t(309),ue=t.n(le);var de=function(){var e=Object(r.useRef)(null),n=a.a.useState(!1),t=Object(u.a)(n,2),c=t[0],o=t[1],i=a.a.useState(!0),h=Object(u.a)(i,2),v=h[0],O=h[1],x=Object(d.c)((function(e){return e.settings})),w=Object(d.c)((function(e){return e.sentence}));return Object(r.useEffect)((function(){(function(){var n=Object(l.a)(s.a.mark((function n(){var t,r;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,ne();case 2:return n.next=4,_();case 4:if(!(null===(t=e.current)||void 0===t?void 0:t.video)){n.next=7;break}return n.next=7,re(null===(r=e.current)||void 0===r?void 0:r.video);case 7:O(!1);case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[]),Object(E.jsxs)("div",{className:"App",children:[Object(E.jsx)(p.a,{position:"static",children:Object(E.jsxs)(j.a,{className:"appbar-toolbar",children:[Object(E.jsx)(b.a,{variant:"h6",className:"appbar-toolbar--title",children:"IHearU"}),Object(E.jsx)(g.a,{edge:"end","aria-label":"settings","aria-haspopup":"true",color:"inherit",onClick:function(){o(!0)},children:Object(E.jsx)(m.a,{})})]})}),!v&&x.showStats&&Object(E.jsx)("div",{className:"stats",children:Object(E.jsx)("div",{children:Object.keys(ie(w.predictions)).map((function(e){return Object(E.jsxs)("span",{children:[e,": ",ie(w.predictions)[e]," "]},e)}))})}),Object(E.jsx)(f.a,{ref:e,style:{display:v?"none":"block"}}),Object(E.jsx)(D,{open:c,handleClose:function(){o(!1)}}),v&&Object(E.jsxs)("div",{className:"loading-scrim",children:[Object(E.jsx)("h3",{children:"Loading detection models"}),Object(E.jsx)(se.a,{})]}),Object(E.jsxs)("h3",{children:[w.words.map((function(e,n){return Object(E.jsxs)("span",{children:[e," "]},"".concat(e,"-").concat(n))})),Object(E.jsx)(g.a,{edge:"end","aria-label":"settings","aria-haspopup":"true",color:"primary",onClick:oe,disabled:0===w.words.length,children:Object(E.jsx)(ue.a,{})})]}),Object(E.jsx)("h3",{children:w.log.map((function(e,n){return Object(E.jsxs)("p",{children:[e.join(" ")," "]},"".concat(e,"-").concat(n))}))})]})},he=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function fe(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var pe=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,442)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,c=n.getLCP,o=n.getTTFB;t(e),r(e),a(e),c(e),o(e)}))};o.a.render(Object(E.jsx)(d.a,{store:F,children:Object(E.jsx)(de,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");he?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):fe(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):fe(n,e)}))}}(),pe()}},[[394,1,2]]]);
//# sourceMappingURL=main.d28a746c.chunk.js.map