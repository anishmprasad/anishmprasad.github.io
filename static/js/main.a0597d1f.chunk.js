(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{100:function(e,t,n){"use strict";n.r(t);var a=n(18),r=n(21),s={};var o=n(22),c=[];var i=n(19),u={};var l=Object(a.c)({Graph:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.c:return t.payload;case i.a:return Object.assign({},e,t.payload);default:return e}}}),d=Object(a.c)({Header:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.a:return t.payload;default:return e}},OpenSource:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.a:return t.projects;default:return e}},Project:l}),h=n(11),f=n.n(h),p=n(10),m=n(37),g=n.n(m),b=n(60),v=n(35),O=f.a.mark(E),w=f.a.mark(k);function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"OpenSource",t="AIzaSyCe8cPGdRbjqUPy6LijCtiJeFMGk-7RNEY",n="1vsuEOL0F6UdHU75kbm36XAvIQlVu-mgcnNhn0pI72Rg",a="https://sheets.googleapis.com/v4/spreadsheets/".concat(n,"/values/").concat(e,"?key=").concat(t);return g.a.get(a).then((function(e){return Object(v.b)(e.data)}))}function E(e){var t;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(p.b)(y,e.id);case 2:return t=n.sent,n.next=5,Object(p.d)(Object(b.a)(t));case 5:case"end":return n.stop()}}),O)}function k(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.a)([Object(p.e)(o.b,E)]);case 2:case"end":return e.stop()}}),w)}var x=n(43),j=f.a.mark(P),N=f.a.mark(L),S=f.a.mark(I);function P(e){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(p.d)(Object(x.a)(e));case 2:case"end":return t.stop()}}),j)}function L(e){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(p.d)(Object(x.b)(e));case 2:case"end":return t.stop()}}),N)}function I(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.a)([Object(p.e)(i.d,P),Object(p.e)(i.b,L)]);case 2:case"end":return e.stop()}}),S)}var T=n(61),G=f.a.mark(W),M=f.a.mark(R);function A(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Home",t="AIzaSyCe8cPGdRbjqUPy6LijCtiJeFMGk-7RNEY",n="1vsuEOL0F6UdHU75kbm36XAvIQlVu-mgcnNhn0pI72Rg",a="https://sheets.googleapis.com/v4/spreadsheets/".concat(n,"/values/").concat(e,"?key=").concat(t);return g.a.get(a).then((function(e){return Object(v.b)(e.data)}))}function W(e){var t;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(p.b)(A,e.id);case 2:return t=n.sent,n.next=5,Object(p.d)(Object(T.a)(t));case 5:case"end":return n.stop()}}),G)}function R(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.a)([Object(p.e)(r.b,W)]);case 2:case"end":return e.stop()}}),M)}var C=f.a.mark(H);function H(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.a)([Object(p.c)(k),Object(p.c)(I),Object(p.c)(R)]);case 2:case"end":return e.stop()}}),C)}var V=n(46);n.d(t,"sagaMiddleware",(function(){return z})),n.d(t,"default",(function(){return U}));var z=Object(V.a)();function U(e){var t=Object(V.a)(),n=Object(a.e)(d,e,Object(a.a)(t));return t.run(H),n}},101:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(32),o=(n(74),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function c(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var i=n(63),u=n.n(i),l=n(48),d=n(25),h=n(26),f=n(28),p=n(27),m=n(9);n(95);function g(e){return r.a.createElement("div",{className:"a-logo"})}n(96);var b=n(5),v=n(64),O=n.n(v),w=n(65),y=n.n(w),E=(n(97),function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).toggleShape=function(){console.log(e.state.screen),0===e.state.screen?e.animFire(e.state.splitText):1===e.state.screen?e.animMap(e.state.splitText):2===e.state.screen&&e.animBack(),e.setState({screen:(e.state.screen+1)%3})},e.state={screen:0,splitText:void 0},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.setState({splitText:this.staggerP.childNodes}),b.d.set(this.g2.childNodes,{drawSVG:"33% 0%"}),b.d.set(this.g3.childNodes,{drawSVG:"65% 100%"}),b.d.set(this.g4.childNodes,{drawSVG:"67% 100%"}),b.d.set(this.hero,{css:{transformPerspective:700,perspective:400,transformStyle:"preserve-3d"}}),window.matchMedia("(max-width: 600px)").matches&&b.d.set(this.hero,{css:{transformPerspective:200,perspective:200,transformStyle:"preserve-3d"}})}},{key:"animFire",value:function(e){var t=new b.c,n=e.innerText;function a(e){var t=new b.c;return t.staggerFromTo(e.childNodes,1.5,{rotation:0,strokeWidth:9},{rotation:90,svgOrigin:"527.45 351.8",strokeWidth:1,ease:b.a.easeOut},.05),t}t.staggerFromTo(this.g2.childNodes,1.75,{drawSVG:"33% 0%"},{drawSVG:"71% 100%",ease:b.a.easeOut},.08,"start"),t.staggerFromTo(this.g3.childNodes,1.75,{drawSVG:"65% 100%"},{drawSVG:"30.5% 0%",ease:b.a.easeOut},.08,"start"),t.staggerFromTo(this.g4.childNodes,1.75,{drawSVG:"67% 100%"},{drawSVG:"28.5% 0%",ease:b.a.easeOut},.08,"start"),t.add(a(this.g2),"start+=2"),t.add(a(this.g3),"start+=2"),t.add(a(this.g4),"start+=2"),t.fromTo(this.crect,.5,{scaleX:1,scaleY:1,x:0,y:0},{scaleX:.5,scaleY:1.2,x:-35,y:-50,transformOrigin:"50% 50%",ease:b.b.easeInOut},"start+=2"),t.fromTo(this.shapes,.5,{scale:1,x:0,y:0,opacity:1},{scale:2,x:0,opacity:.25,transformOrigin:"50% 50%",ease:b.b.easeInOut},"start+=2"),window.matchMedia("(max-width: 600px)").matches&&t.to(this.heroarea,.5,{x:-30,ease:b.b.easeInOut},"start+=2"),t.to(this.hero,.5,{x:-125,y:70,ease:b.b.easeInOut},"start+=2"),t.to(this.text,.5,{top:"30vh",x:-50,ease:b.b.easeInOut},"start+=2"),t.to(this.button,.5,{x:-112,ease:b.b.easeIn},"start+=2"),t.to(this.button.childNodes[0],.25,{opacity:0,display:"none",ease:b.b.easeIn},"start+=2"),t.to(this.button.childNodes[1],.25,{display:"block",opacity:1,ease:b.b.easeOut},"start+=2.25"),t.to(this.staggerP,.1,{opacity:1},"start+=2.5"),t.staggerFromTo(n,3,{opacity:0},{opacity:1,ease:b.b.easeOut},.06,"start+=2.5"),t.timeScale(1.7)}},{key:"animBack",value:function(){var e=new b.c,t="start3+=1";function n(e){var t=new b.c;return t.staggerTo(e.childNodes,.8,{rotation:0,strokeWidth:9,scaleX:1,scaleY:1,svgOrigin:"527.45 351.8",ease:b.a.easeOut},.05),t}e.add("start3"),e.to(this.hero,.5,{z:0,rotationX:0,y:0,x:0,ease:b.b.easeOut},"start3"),e.to(this.gray,.25,{autoAlpha:1,ease:b.b.easeOut},"start3"),e.to(this.crect,.25,{scaleX:1,scaleY:1,x:0,y:0,transformOrigin:"50% 50%",ease:b.b.easeOut},"start3"),e.to(this.button.childNodes[2],.25,{opacity:0,display:"none",ease:b.b.easeIn},"start3"),e.to(this.button.childNodes[0],.25,{display:"block",opacity:1,ease:b.b.easeOut},"start3+=0.25"),e.to(this.shapes,.5,{scaleX:1,scaleY:1,scale:1,x:0,y:0,opacity:1,svgOrigin:"520 400",ease:b.b.easeInOut},"start3"),e.to(this.text,.5,{top:"auto",x:0,y:0,ease:b.b.easeIn},"start3"),e.add(n(this.g2),"start3"),e.add(n(this.g3),"start3"),e.add(n(this.g4),"start3"),e.staggerTo(this.g2.childNodes,1,{drawSVG:"33% 0%",ease:b.a.easeOut},.1,t),e.staggerTo(this.g3.childNodes,1,{drawSVG:"65% 100%",ease:b.a.easeOut},.1,t),e.staggerTo(this.g4.childNodes,1,{drawSVG:"67% 100%",ease:b.a.easeOut},.1,t)}},{key:"animMap",value:function(e){var t=new b.c,n=e.lines;function a(e){var t=new b.c;return t.staggerTo(e.childNodes,1,{scaleX:.93,scaleY:2.22,strokeWidth:5,svgOrigin:"493 351.8",ease:b.b.easeOut},.05),t}t.add("start2"),t.to(this.hero,.5,{z:20,rotationX:70,y:100,x:40,ease:b.b.easeOut},"start2"),t.to(this.gray,.25,{autoAlpha:0,ease:b.b.easeOut},"start2"),t.to(this.crect,.25,{scaleX:1,scaleY:.75,transformOrigin:"50% 50%",ease:b.b.easeOut},"start2"),t.add(a(this.g2),"start2"),t.add(a(this.g3),"start2"),t.add(a(this.g4),"start2"),t.to(this.text,.5,{top:"20vh",x:0,ease:b.b.easeIn},"start2"),t.to(this.shapes,.5,{opacity:.75,ease:b.b.easeOut},"start2"),t.to(this.button,.3,{x:0,ease:b.b.easeOut},"start2"),t.to(this.button.childNodes[1],.25,{opacity:0,display:"none",ease:b.b.easeIn},"start2"),t.to(this.button.childNodes[2],.25,{display:"block",opacity:1,ease:b.b.easeOut},"start2+=0.25"),window.matchMedia("(max-width: 600px)").matches&&(t.to(this.heroarea,.5,{x:-150,ease:b.b.easeOut},"start2+=0.5"),t.to(this.text,.5,{y:100,ease:b.b.easeOut},"start2")),t.staggerTo(n,.4,{opacity:0,ease:b.b.easeOut},.03,"start2+=0.8")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"hero-area",ref:function(t){return e.heroarea=t}},r.a.createElement("svg",{className:"hero",ref:function(t){return e.hero=t},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1054.9 703.6"},r.a.createElement("defs",null,r.a.createElement("clipPath",{id:"clip-path",transform:"translate(0 -67)"},r.a.createElement("rect",{id:"crect",ref:function(t){return e.crect=t},x:"25.6",y:"175",width:"1011.3",height:"550",fill:"none"}))),r.a.createElement("title",null,"change-shape2"),r.a.createElement("g",{style:{clipPath:"url(#clip-path)"}},r.a.createElement("image",{ref:function(t){return e.map=t},width:"1000",height:"667",transform:"scale(1.05)",xlinkHref:O.a}),r.a.createElement("image",{className:"gray",ref:function(t){return e.gray=t},width:"1000",height:"667",transform:"scale(1.05)",xlinkHref:y.a})),r.a.createElement("rect",{id:"square",x:"417.9",y:"268.9",width:"217",height:"217",fill:"none",stroke:"#fff",strokeMiterlimit:"10",strokeWidth:"9"}),r.a.createElement("polygon",{id:"triangle",points:"525.6 271.6 650 487 401.2 487 525.6 271.6",fill:"none",stroke:"#fff",strokeMiterlimit:"10",strokeWidth:"9"}),r.a.createElement("g",{id:"shapes",ref:function(t){return e.shapes=t}},r.a.createElement("g",{id:"g4",ref:function(t){return e.g4=t}},r.a.createElement("path",{d:"M417.9,335.9v249s1,54-62,51-53-74.4,12-80c27.2-2.3,33.3-1.9,33.3-1.9H650",transform:"translate(0 -67)",fill:"none",stroke:"#3953a4",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"9"}),r.a.createElement("path",{d:"M417.9,335.9v249s1,54-62,51-53-74.4,12-80c27.2-2.3,33.3-1.9,33.3-1.9H650",transform:"translate(0 -67)",fill:"none",stroke:"#6abd45",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"9"}),r.a.createElement("path",{d:"M417.9,335.9v249s1,54-62,51-53-74.4,12-80c27.2-2.3,33.3-1.9,33.3-1.9H650",transform:"translate(0 -67)",fill:"none",stroke:"#ed2024",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"9"})),r.a.createElement("g",{id:"g3",ref:function(t){return e.g3=t}},r.a.createElement("path",{d:"M634.9,552.9v-217s10.5-84-61.5-83.5c-70.1.5-60.1,64.4-47.8,86.2S650,554,650,554",transform:"translate(0 -67)",fill:"none",stroke:"#3953a4",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"9"}),r.a.createElement("path",{d:"M634.9,552.9v-217s10.5-84-61.5-83.5c-70.1.5-60.1,64.4-47.8,86.2S650,554,650,554",transform:"translate(0 -67)",fill:"none",stroke:"#6abd45",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"9"}),r.a.createElement("path",{d:"M634.9,552.9v-217s10.5-84-61.5-83.5c-70.1.5-60.1,64.4-47.8,86.2S650,554,650,554",transform:"translate(0 -67)",fill:"none",stroke:"#ed2024",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"9"})),r.a.createElement("g",{id:"g2",ref:function(t){return e.g2=t}},r.a.createElement("path",{d:"M525.6,338.6,647.4,546.4l5,6.5c-44,16.5-8,60-8,60,39,51.5,63.5.5,63.5.5,32.5-72-40.1-59.8-61.2-60.1-7-.1-11.8-.4-11.8-.4h-217",transform:"translate(0 -67)",fill:"none",stroke:"#3953a4",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"9"}),r.a.createElement("path",{d:"M525.6,338.6,647.4,546.4l5,6.5c-44,16.5-8,60-8,60,39,51.5,63.5.5,63.5.5,32.5-72-40.1-59.8-61.2-60.1-7-.1-11.8-.4-11.8-.4h-217",transform:"translate(0 -67)",fill:"none",stroke:"#6abd45",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"9"}),r.a.createElement("path",{d:"M525.6,338.6,647.4,546.4l5,6.5c-44,16.5-8,60-8,60,39,51.5,63.5.5,63.5.5,32.5-72-40.1-59.8-61.2-60.1-7-.1-11.8-.4-11.8-.4h-217",transform:"translate(0 -67)",fill:"none",stroke:"#ed2024",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"9"})))),r.a.createElement("div",{className:"textarea",ref:function(t){return e.text=t}},r.a.createElement("h1",null,"Anish M Prasad"),r.a.createElement("button",{className:"button",ref:function(t){return e.button=t},onClick:this.toggleShape},r.a.createElement("span",{className:"read"},"Read More >"),r.a.createElement("span",{className:"share"},"See Map"),r.a.createElement("span",{className:"home"},"Return Home")),r.a.createElement("div",{className:"staggerP",ref:function(t){return e.staggerP=t}},r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam illum repellendus, molestiae excepturi quo, ab possimus perspiciatis sunt quis. Magni impedit hic culpa, ea. Praesentium facilis dicta excepturi magnam perferendis?"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam illum repellendus, molestiae excepturi quo, ab possimus perspiciatis sunt quis. Magni impedit hic culpa, ea. Praesentium facilis dicta excepturi magnam perferendis?"))))}}]),n}(a.Component)),k=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"external"},r.a.createElement(E,null))}}]),n}(a.Component),x=Object(a.lazy)((function(){return Promise.all([n.e(15),n.e(8)]).then(n.bind(null,152))})),j=Object(a.lazy)((function(){return n.e(5).then(n.bind(null,143))})),N=Object(a.lazy)((function(){return n.e(0).then(n.bind(null,144))})),S=Object(a.lazy)((function(){return n.e(4).then(n.bind(null,153))})),P=Object(a.lazy)((function(){return n.e(2).then(n.bind(null,145))})),L=Object(a.lazy)((function(){return n.e(6).then(n.bind(null,146))})),I=Object(a.lazy)((function(){return n.e(1).then(n.bind(null,147))})),T=Object(a.lazy)((function(){return n.e(3).then(n.bind(null,151))})),G=Object(a.lazy)((function(){return Promise.all([n.e(16),n.e(10)]).then(n.bind(null,148))})),M=Object(a.lazy)((function(){return n.e(9).then(n.bind(null,149))})),A=Object(a.lazy)((function(){return Promise.all([n.e(14),n.e(7)]).then(n.bind(null,154))})),W=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.ga&&(window.ga("set","page",window.location.pathname+window.location.search),window.ga("send","pageview",window.location.pathname+window.location.search))}},{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement(a.Suspense,{fallback:r.a.createElement(g,null)},r.a.createElement(S,null),r.a.createElement(P,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",render:function(){return r.a.createElement(j,null)}}),r.a.createElement(m.a,{exact:!0,path:"/opensource",render:function(){return r.a.createElement(x,null)}}),r.a.createElement(m.a,{exact:!0,path:"/opensource/react-circular-graph",render:function(){return r.a.createElement(T,null)}}),r.a.createElement(m.a,{exact:!0,path:"/opensource/vis-react",render:function(){return r.a.createElement(G,null)}}),r.a.createElement(m.a,{exact:!0,path:"/opensource/react-imgr",render:function(){return r.a.createElement(M,null)}}),r.a.createElement(m.a,{exact:!0,path:"/opensource/netslider",render:function(){return r.a.createElement(A,null)}}),r.a.createElement(m.a,{exact:!0,path:"/about",render:function(){return r.a.createElement(N,null)}}),r.a.createElement(m.a,{exact:!0,path:"/animatedtransition",render:function(){return r.a.createElement(k,null)}}),r.a.createElement(m.a,{exact:!0,path:"/lab",render:function(){return r.a.createElement(L,null)}}),r.a.createElement(m.a,{exact:!0,path:"/contact",render:function(){return r.a.createElement(I,null)}})))))}}]),n}(a.Component),R=n(42);n(99);function C(e){return r.a.createElement(l.a,{store:e.store},r.a.createElement(R.a,null,r.a.createElement(m.a,{path:"/",component:W})))}var H=n(105),V=u()(),z=document.getElementById("a_m_p");H.a({dsn:"https://61ed62c4f4e9441db6c0fa551760eb7f@sentry.io/1547458"}),Object(s.render)(r.a.createElement(C,{store:V}),z),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");o?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):c(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")}))):c(t,e)}))}}()},19:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return o}));var a="GRAPH_NODE",r="GRAPH_CHANGED",s="GRAPH_SAGA",o="GRAPH_CHANGED_SAGA"},21:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var a="RECEIVE_INITIALFETCH",r="REQUEST_INITIALFETCH"},22:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a="REQUEST_OPENSOURCE",r="RECEIVE_OPENSOURCE"},35:function(e,t,n){"use strict";function a(e,t,n){var r=[];for(var s in e)if(e&&"function"==typeof e.hasOwnProperty){if(!e.hasOwnProperty(s))continue;"object"===typeof e[s]?r=r.concat(a(e[s],t,n)):s===t&&e[t]===n&&r.push(e)}return r}function r(e){for(var t=e.values,n=[],a=1;a<t.length;a++){for(var r={},s=0;s<t[a].length;s++)r[t[0][s]]=t[a][s];n.push(r)}return n}n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}))},43:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return s}));var a=n(19);function r(e){return{type:a.c,payload:e}}function s(e){return{type:a.a,payload:e}}},60:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return s}));var a=n(22);function r(e){return{type:a.b,id:e}}function s(e){return console.log("receiveOpenSource"),{type:a.a,projects:e}}},61:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return s}));var a=n(21);function r(e){return{type:a.b,payload:e}}function s(e){return{type:a.a,payload:e}}},63:function(e,t,n){e.exports=n(100)},64:function(e,t,n){e.exports=n.p+"static/media/persp-map.da96d7b7.gif"},65:function(e,t,n){e.exports=n.p+"static/media/blog-hero2.d3145208.jpg"},69:function(e,t,n){e.exports=n(101)},74:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},99:function(e,t,n){}},[[69,12,13]]]);
//# sourceMappingURL=main.a0597d1f.chunk.js.map