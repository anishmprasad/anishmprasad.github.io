(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{132:function(e,n,a){"use strict";a.d(n,"a",function(){return c});var t=a(1),r=a.n(t);a(133);function c(e){return r.a.createElement("div",{className:"spinner"},r.a.createElement("span",{className:"ball-1"}),r.a.createElement("span",{className:"ball-2"}),r.a.createElement("span",{className:"ball-3"}),r.a.createElement("span",{className:"ball-4"}),r.a.createElement("span",{className:"ball-5"}),r.a.createElement("span",{className:"ball-6"}),r.a.createElement("span",{className:"ball-7"}),r.a.createElement("span",{className:"ball-8"}))}},133:function(e,n,a){},218:function(e,n,a){var t={"./Graph":[112,9,0,2,1],"./Graph/":[112,9,0,2,1],"./Graph/Circular":[101,9,4],"./Graph/Circular/":[101,9,4],"./Graph/Circular/index":[101,9,4],"./Graph/Circular/index.js":[101,9,4],"./Graph/Circular/index.scss":[103,7,20],"./Graph/Config":[110,9,7],"./Graph/Config.js":[110,9,7],"./Graph/Data":[111,9,8],"./Graph/Data.js":[111,9,8],"./Graph/index":[112,9,0,2,1],"./Graph/index.js":[112,9,0,2,1],"./Graph/index.scss":[156,7,21],"./ProgressiveImage":[130,9,5],"./ProgressiveImage/":[130,9,5],"./ProgressiveImage/index":[130,9,5],"./ProgressiveImage/index.js":[130,9,5],"./VisReact":[131,9,0,3,6],"./VisReact/":[131,9,0,3,6],"./VisReact/index":[131,9,0,3,6],"./VisReact/index.js":[131,9,0,3,6],"./VisReact/index.scss":[157,7,22]};function r(e){if(!a.o(t,e))return Promise.resolve().then(function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=t[e],r=n[0];return Promise.all(n.slice(2).map(a.e)).then(function(){return a.t(r,n[1])})}r.keys=function(){return Object.keys(t)},r.id=218,e.exports=r},362:function(e,n,a){"use strict";a.r(n);var t=a(7),r=a.n(t);function c(e,n,a,t,r,c,s){try{var o=e[c](s),i=o.value}catch(u){return void a(u)}o.done?n(i):Promise.resolve(i).then(t,r)}function s(e){return function(){var n=this,a=arguments;return new Promise(function(t,r){var s=e.apply(n,a);function o(e){c(s,t,r,o,i,"next",e)}function i(e){c(s,t,r,o,i,"throw",e)}o(void 0)})}}var o=a(20),i=a(21),u=a(22),l=a(19),p=a(23),m=a(1),h=a.n(m),f=a(14),d={"react-circular-graph":"Graph","vis-react":"VisReact"},v=a(132),b=function(e){function n(){var e,t;Object(o.a)(this,n);for(var c=arguments.length,i=new Array(c),p=0;p<c;p++)i[p]=arguments[p];return(t=Object(u.a)(this,(e=Object(l.a)(n)).call.apply(e,[this].concat(i)))).state={components:[]},t.addComponent=function(){var e=s(r.a.mark(function e(n){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Loading ".concat(n," component...")),a(218)("./".concat(n)).then(function(e){return t.setState({components:t.state.components.concat(e.default)})}).catch(function(e){console.error('"'.concat(n,'" not yet supported'))});case 2:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t}return Object(p.a)(n,e),Object(i.a)(n,[{key:"mapProject",value:function(e){return d[e]}},{key:"componentWillMount",value:function(){var e=s(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.addComponent(this.mapProject(this.props.match.params.project));case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.components;if(0===e.length)return h.a.createElement(v.a,null);var n=e.map(function(e){return h.a.createElement(e,{key:Math.random()})});return h.a.createElement("div",{className:"project"},n)}}]),n}(m.Component);n.default=Object(f.e)(b)}}]);
//# sourceMappingURL=OpenSourceProject.adc4fd94.chunk.js.map