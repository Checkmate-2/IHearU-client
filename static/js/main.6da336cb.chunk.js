(this["webpackJsonpihearu-client"]=this["webpackJsonpihearu-client"]||[]).push([[0],{434:function(e,n,t){},441:function(e,n,t){},506:function(e,n){},507:function(e,n){},515:function(e,n){},525:function(e,n){},526:function(e,n){},527:function(e,n){},535:function(e,n){},624:function(e,n,t){"use strict";t.r(n);var a=t(17),r=t.n(a),c=t(75),o=t.n(c),i=(t(434),t(4)),s=t.n(i),l=t(11),u=t(5),d=t(132),h=(t(441),t(388)),f=t.n(h),p=t(422),j=t.n(p),b=t(423),g=t.n(b),m=t(187),v=t.n(m),O=t(249),x=t.n(O),w=t(424),k=t.n(w),y=t(396),S=t.n(y),C=t(389),A=t.n(C),H=t(395),W=t.n(H),N=t(391),T=t.n(N),U=t(392),I=t.n(U),L=t(390),P=t.n(L),F=t(394),E=t.n(F),R=t(260),B=t.n(R),D=t(294),z=t.n(D),J=t(195),M={settings:{threshold:85,showStats:!1,speakAlong:!0},sentence:{predictions:[],words:[],log:[]}},V=Object(J.b)({name:"settings",initialState:M.settings,reducers:{setThreshold:function(e,n){e.threshold=n.payload},setShowStats:function(e,n){e.showStats=n.payload},setSpeakAlong:function(e,n){e.speakAlong=n.payload}}}),$=Object(J.b)({name:"sentence",initialState:M.sentence,reducers:{addPrediction:function(e,n){e.predictions.push(n.payload)},addWord:function(e,n){e.predictions=[],e.words.push(n.payload)},logWords:function(e){e.log.unshift(e.words),e.words=[]}}}),q=(V.reducer,Object(J.a)({reducer:{settings:V.reducer,sentence:$.reducer}})),G=q.getState,K=q.dispatch,Q=t(393),X=t.n(Q),Y=t(39);function Z(e){return"".concat(e,"%")}function _(e){var n=e.open,t=e.handleClose,a=Object(d.c)((function(e){return e.settings})),r=Object(d.b)();return Object(Y.jsx)("div",{children:Object(Y.jsxs)(A.a,{fullWidth:!0,maxWidth:"sm",open:n,onClose:t,"aria-labelledby":"settings-dialog-title",children:[Object(Y.jsx)(P.a,{id:"settings-dialog-title",children:"Settings"}),Object(Y.jsx)(T.a,{children:Object(Y.jsx)(I.a,{children:Object(Y.jsxs)(X.a,{children:[Object(Y.jsx)(B.a,{control:Object(Y.jsx)(E.a,{value:a.threshold,getAriaValueText:Z,"aria-labelledby":"threshold-slider",valueLabelDisplay:"auto",step:5,marks:!0,min:50,max:99,onChange:function(e,n){return r(V.actions.setThreshold(n))}}),label:"Accuracy threshold",labelPlacement:"top"}),Object(Y.jsx)(B.a,{control:Object(Y.jsx)(z.a,{checked:a.showStats,onChange:function(e){return r(V.actions.setShowStats(e.target.checked))},name:"showStats",color:"primary"}),label:"Show Stats"}),Object(Y.jsx)(B.a,{control:Object(Y.jsx)(z.a,{checked:a.speakAlong,onChange:function(e){return r(V.actions.setSpeakAlong(e.target.checked))},name:"showStats",color:"primary"}),label:"Speak along signing"})]})})}),Object(Y.jsx)(W.a,{children:Object(Y.jsx)(S.a,{autoFocus:!0,onClick:t,color:"primary",children:"Close"})})]})})}var ee,ne=t(20),te=t(420),ae=t(419),re=t(296),ce=[],oe=[],ie=[],se=[],le=[],ue=new Array(63).fill(0),de=function(e){return e.reduce((function(e,n){return e.concat([n.x,n.y,n.z])}),[])};function he(){return fe.apply(this,arguments)}function fe(){return(fe=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/IHearU-client/model/model.json",e.next=3,re.a("/IHearU-client/model/model.json");case 3:ee=e.sent;case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function pe(){return je.apply(this,arguments)}function je(){return(je=Object(l.a)(s.a.mark((function e(){var n,t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/IHearU-client/model.csv");case 2:return n=e.sent,e.next=5,n.text();case 5:t=e.sent,ce=t.split(",");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function be(e){return ge.apply(this,arguments)}function ge(){return(ge=Object(l.a)(s.a.mark((function e(n){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new ae.Hands({locateFile:function(e){return"/IHearU-client/hands/".concat(e)}})).setOptions({maxNumHands:2,minDetectionConfidence:.5,minTrackingConfidence:.5}),t.onResults(me),e.next=5,t.initialize();case 5:n&&new te.Camera(n,{onFrame:function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.send({image:n});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}).start();case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function me(e){if(function(e){if(e.multiHandLandmarks&&e.multiHandedness){for(var n=ue,t=ue,a=0;a<e.multiHandLandmarks.length;a++){var r="Right"===e.multiHandedness[a].label,c=e.multiHandLandmarks[a];r?t=de(c):n=de(c)}oe=[].concat(Object(ne.a)(n),Object(ne.a)(t)),ie.push(oe)}}(e),2===ie.length){var n=function(e){var n=re.b([e]),t=ee.predict(n).dataSync(),a=Math.max.apply(Math,Object(ne.a)(t)),r=Object(ne.a)(t).indexOf(a);return a>=G().settings.threshold/100?(console.log(ce[r],a),ce[r]):null}(ie),t=n!==le[le.length-1],a=se.length>4&&n===(r=se).sort((function(e,n){return r.filter((function(n){return n===e})).length-r.filter((function(e){return e===n})).length})).pop();if(n&&(se.push(n),K($.actions.addPrediction(n))),n&&t&&a)if(le.push(n),se=[],K($.actions.addWord(n)),G().settings.speakAlong)try{new Audio("audio/".concat(n,".mp3")).play()}catch(c){}ie=[]}var r}function ve(){K($.actions.logWords()),le=[]}function Oe(e){return e.reduce((function(e,n){return n in e?e[n]++:e[n]=1,e}),{})}var xe=t(425),we=t.n(xe),ke=t(426),ye=t.n(ke),Se=t(259),Ce=t(421),Ae=t.n(Ce),He=Object(Se.createTheme)({palette:{primary:{light:"#ffce42",main:"#ffbd00",dark:"#bd8c00",contrastText:"#fff"}}});var We=function(){var e=Object(a.useRef)(null),n=r.a.useState(!1),t=Object(u.a)(n,2),c=t[0],o=t[1],i=r.a.useState(!0),h=Object(u.a)(i,2),p=h[0],b=h[1],m=Object(d.c)((function(e){return e.settings})),O=Object(d.c)((function(e){return e.sentence}));return Object(a.useEffect)((function(){(function(){var n=Object(l.a)(s.a.mark((function n(){var t,a;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,pe();case 2:return n.next=4,he();case 4:if(!(null===(t=e.current)||void 0===t?void 0:t.video)){n.next=7;break}return n.next=7,be(null===(a=e.current)||void 0===a?void 0:a.video);case 7:b(!1);case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[]),Object(Y.jsxs)(Se.ThemeProvider,{theme:He,children:[Object(Y.jsx)(j.a,{position:"static",children:Object(Y.jsxs)(g.a,{className:"appbar-toolbar",children:[Object(Y.jsxs)("div",{className:"appbar-toolbar--title",children:[Object(Y.jsx)("img",{src:"/favicon.ico",alt:"logo"}),Object(Y.jsx)(v.a,{variant:"h6",children:"IHearU"})]}),Object(Y.jsx)(x.a,{edge:"end","aria-label":"settings","aria-haspopup":"true",color:"inherit",onClick:function(){o(!0)},children:Object(Y.jsx)(k.a,{})})]})}),Object(Y.jsxs)("div",{className:"App-body",children:[!p&&m.showStats&&Object(Y.jsx)("div",{className:"stats",children:Object(Y.jsx)("div",{children:Object.keys(Oe(O.predictions)).map((function(e){return Object(Y.jsxs)("span",{children:[e,": ",Oe(O.predictions)[e]," "]},e)}))})}),Object(Y.jsx)(f.a,{ref:e,style:{display:p?"none":"block"}}),Object(Y.jsx)(_,{open:c,handleClose:function(){o(!1)}}),p&&Object(Y.jsxs)("div",{className:"loading-scrim",children:[Object(Y.jsx)("img",{src:"/logo192.png",alt:"IHearU Logo",className:"App-logo"}),Object(Y.jsx)("h3",{children:"Loading detection models"}),Object(Y.jsx)(we.a,{})]}),!p&&Object(Y.jsxs)("div",{className:"word-container",children:[Object(Y.jsxs)("div",{className:"typewriter-container",children:[Object(Y.jsx)(Ae.a,{typing:1,children:O.words.join(" ")}),Object(Y.jsx)(x.a,{edge:"end","aria-label":"settings","aria-haspopup":"true",color:"primary",onClick:ve,disabled:0===O.words.length,children:Object(Y.jsx)(ye.a,{})})]}),Object(Y.jsx)("div",{className:"word-log",children:O.log.map((function(e,n){return Object(Y.jsxs)("p",{children:[e.join(" ")," "]},"".concat(e,"-").concat(n))}))})]})]})]})},Ne=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Te(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Ue=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,626)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,c=n.getLCP,o=n.getTTFB;t(e),a(e),r(e),c(e),o(e)}))};o.a.render(Object(Y.jsx)(d.a,{store:q,children:Object(Y.jsx)(We,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/IHearU-client",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/IHearU-client","/service-worker.js");Ne?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Te(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Te(n,e)}))}}(),Ue()}},[[624,1,2]]]);
//# sourceMappingURL=main.6da336cb.chunk.js.map