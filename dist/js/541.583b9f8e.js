"use strict";(self["webpackChunkPNE"]=self["webpackChunkPNE"]||[]).push([[541],{541:function(e,t,n){n.r(t),n.d(t,{KEYBOARD_DID_CLOSE:function(){return o},KEYBOARD_DID_OPEN:function(){return i},copyVisualViewport:function(){return k},keyboardDidClose:function(){return w},keyboardDidOpen:function(){return b},keyboardDidResize:function(){return g},resetKeyboardAssist:function(){return d},setKeyboardClose:function(){return p},setKeyboardOpen:function(){return f},startKeyboardAssist:function(){return h},trackViewportChanges:function(){return D}});
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const i="ionKeyboardDidShow",o="ionKeyboardDidHide",r=150;let s={},a={},u=!1;const d=()=>{s={},a={},u=!1},h=e=>{c(e),e.visualViewport&&(a=k(e.visualViewport),e.visualViewport.onresize=()=>{D(e),b()||g(e)?f(e):w(e)&&p(e)})},c=e=>{e.addEventListener("keyboardDidShow",(t=>f(e,t))),e.addEventListener("keyboardDidHide",(()=>p(e)))},f=(e,t)=>{l(e,t),u=!0},p=e=>{y(e),u=!1},b=()=>{const e=(s.height-a.height)*a.scale;return!u&&s.width===a.width&&e>r},g=e=>u&&!w(e),w=e=>u&&a.height===e.innerHeight,l=(e,t)=>{const n=t?t.keyboardHeight:e.innerHeight-a.height,o=new CustomEvent(i,{detail:{keyboardHeight:n}});e.dispatchEvent(o)},y=e=>{const t=new CustomEvent(o);e.dispatchEvent(t)},D=e=>{s=Object.assign({},a),a=k(e.visualViewport)},k=e=>({width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale})}}]);
//# sourceMappingURL=541.583b9f8e.js.map