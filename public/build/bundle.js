var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function o(){return Object.create(null)}function i(t){t.forEach(n)}function l(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}const r="undefined"!=typeof window;let c=r?()=>window.performance.now():()=>Date.now(),u=r?t=>requestAnimationFrame(t):t;const a=new Set;function m(t){a.forEach((e=>{e.c(t)||(a.delete(e),e.f())})),0!==a.size&&u(m)}function d(t,e){t.appendChild(e)}function f(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function h(t){const e=b("style");return function(t,e){d(t.head||t,e)}(f(t),e),e}function _(t,e,n){t.insertBefore(e,n||null)}function v(t){t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function b(t){return document.createElement(t)}function y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function g(t){return document.createTextNode(t)}function $(){return g(" ")}function x(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function z(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function k(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function C(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}const T=new Set;let E,w=0;function M(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),i=n.length-o.length;i&&(t.style.animation=o.join(", "),w-=i,w||u((()=>{w||(T.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),T.clear())})))}function A(t){E=t}function S(t){(function(){if(!E)throw new Error("Function called outside component initialization");return E})().$$.on_mount.push(t)}const D=[],I=[],L=[],R=[],G=Promise.resolve();let Z=!1;function B(t){L.push(t)}let P=!1;const H=new Set;function N(){if(!P){P=!0;do{for(let t=0;t<D.length;t+=1){const e=D[t];A(e),j(e.$$)}for(A(null),D.length=0;I.length;)I.pop()();for(let t=0;t<L.length;t+=1){const e=L[t];H.has(e)||(H.add(e),e())}L.length=0}while(D.length);for(;R.length;)R.pop()();Z=!1,P=!1,H.clear()}}function j(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(B)}}let O;function q(t,e,n){t.dispatchEvent(function(t,e,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}(`${e?"intro":"outro"}${n}`))}const F=new Set;function J(t,e){t&&t.i&&(F.delete(t),t.i(e))}const K={duration:0};function Q(n,o,i){let s,r,d=o(n,i),_=!1,v=0;function p(){s&&M(n,s)}function b(){const{delay:o=0,duration:i=300,easing:l=e,tick:b=t,css:y}=d||K;y&&(s=function(t,e,n,o,i,l,s,r=0){const c=16.666/o;let u="{\n";for(let t=0;t<=1;t+=c){const o=e+(n-e)*l(t);u+=100*t+`%{${s(o,1-o)}}\n`}const a=u+`100% {${s(n,1-n)}}\n}`,m=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(a)}_${r}`,d=f(t);T.add(d);const _=d.__svelte_stylesheet||(d.__svelte_stylesheet=h(t).sheet),v=d.__svelte_rules||(d.__svelte_rules={});v[m]||(v[m]=!0,_.insertRule(`@keyframes ${m} ${a}`,_.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${m} ${o}ms linear ${i}ms 1 both`,w+=1,m}(n,0,1,i,o,l,y,v++)),b(0,1);const g=c()+o,$=g+i;r&&r.abort(),_=!0,B((()=>q(n,!0,"start"))),r=function(t){let e;return 0===a.size&&u(m),{promise:new Promise((n=>{a.add(e={c:t,f:n})})),abort(){a.delete(e)}}}((t=>{if(_){if(t>=$)return b(1,0),q(n,!0,"end"),p(),_=!1;if(t>=g){const e=l((t-g)/i);b(e,1-e)}}return _}))}let y=!1;return{start(){y||(y=!0,M(n),l(d)?(d=d(),(O||(O=Promise.resolve(),O.then((()=>{O=null}))),O).then(b)):b())},invalidate(){y=!1},end(){_&&(p(),_=!1)}}}function U(t,e){-1===t.$$.dirty[0]&&(D.push(t),Z||(Z=!0,G.then(N)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function V(e,s,r,c,u,a,m,d=[-1]){const f=E;A(e);const h=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:u,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(f?f.$$.context:[])),callbacks:o(),dirty:d,skip_bound:!1,root:s.target||f.$$.root};m&&m(h.root);let _=!1;if(h.ctx=r?r(e,s.props||{},((t,n,...o)=>{const i=o.length?o[0]:n;return h.ctx&&u(h.ctx[t],h.ctx[t]=i)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](i),_&&U(e,t)),n})):[],h.update(),_=!0,i(h.before_update),h.fragment=!!c&&c(h.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);h.fragment&&h.fragment.l(t),t.forEach(v)}else h.fragment&&h.fragment.c();s.intro&&J(e.$$.fragment),function(t,e,o,s){const{fragment:r,on_mount:c,on_destroy:u,after_update:a}=t.$$;r&&r.m(e,o),s||B((()=>{const e=c.map(n).filter(l);u?u.push(...e):i(e),t.$$.on_mount=[]})),a.forEach(B)}(e,s.target,s.anchor,s.customElement),N()}A(f)}class W{constructor(t,e){this._hour=t,this._min=e,this._alarm=!1,this._alarmHour,this._alarmMin,this._larm=!1,(this._hour>=24||this._hour<0)&&console.log("Error: hour value must be >= 0 and < 24"),(this._min>60||this._min<0)&&console.log("Error: minute value must be >= 0 and < 60")}get time(){return this._hour<10&&this._min<10?"0"+this._hour+":0"+this._min:this._hour<10&&this._min>=10?"0"+this._hour+":"+this._min:this._hour>=10&&this._min<10?this._hour+":0"+this._min:this._hour>=10&&this._min>=10?this._hour+":"+this._min:void 0}tick(){this._min+=1,this._min>=60&&(this._hour+=1,this._min-=60),24===this._hour&&(this._hour-=24),this._hour<10&&this._min<10&&console.log("0"+this._hour+":0"+this._min),this._hour<10&&this._min>=10&&console.log("0"+this._hour+":"+this._min),this._hour>=10&&this._min<10&&console.log(this._hour+":0"+this._min),this._hour>=10&&this._min>=10&&console.log(this._hour+":"+this._min),this._alarmHour==this._hour&&this._alarmMin==this._min&&this._alarm&&(console.log("Alarm!!!"),this._larm=!0)}setAlarm(t,e){this._alarmHour=t,this._alarmMin=e,this._alarm=!0}activateAlarm(){this._alarm=!0}deactivateAlarm(){this._alarm=!1}get alarmIsActive(){return this._alarm}}function X(t){const e=t-1;return e*e*e+1}function Y(t,{delay:e=0,duration:n=400,easing:o=X,x:i=0,y:l=0,opacity:s=0}={}){const r=getComputedStyle(t),c=+r.opacity,u="none"===r.transform?"":r.transform,a=c*(1-s);return{delay:e,duration:n,easing:o,css:(t,e)=>`\n\t\t\ttransform: ${u} translate(${(1-t)*i}px, ${(1-t)*l}px);\n\t\t\topacity: ${c-a*e}`}}function tt(t,e,n){const o=t.slice();return o[42]=e[n],o}function et(t,e,n){const o=t.slice();return o[45]=e[n],o}function nt(e){let n;return{c(){n=b("p")},m(t,e){_(t,n,e)},p:t,i:t,o:t,d(t){t&&v(n)}}}function ot(e){let n,o,i,l;return{c(){n=b("p"),o=g("Alarm set to "),i=g(e[3]),z(n,"id","titleAlarm"),z(n,"class","svelte-dnfb6z")},m(t,e){_(t,n,e),d(n,o),d(n,i)},p(t,e){8&e[0]&&k(i,t[3])},i(t){l||B((()=>{l=Q(n,Y,{y:-50}),l.start()}))},o:t,d(t){t&&v(n)}}}function it(e){let n;return{c(){n=b("p")},m(t,e){_(t,n,e)},i:t,o:t,d(t){t&&v(n)}}}function lt(e){let n,o;return{c(){n=b("p"),n.textContent="alarm",z(n,"id","larm"),z(n,"class","svelte-dnfb6z")},m(t,e){_(t,n,e)},i(t){o||B((()=>{o=Q(n,Y,{y:-50}),o.start()}))},o:t,d(t){t&&v(n)}}}function st(e){let n,o,i;return{c(){n=b("button"),n.textContent="Click Me to Disable Alarm",z(n,"class","setter svelte-dnfb6z")},m(t,l){_(t,n,l),o||(i=x(n,"click",e[20]),o=!0)},p:t,d(t){t&&v(n),o=!1,i()}}}function rt(e){let n,o,i;return{c(){n=b("button"),n.textContent="Click me to set alarm",z(n,"class","setter svelte-dnfb6z")},m(t,l){_(t,n,l),o||(i=x(n,"click",e[17]),o=!0)},p:t,d(t){t&&v(n),o=!1,i()}}}function ct(e){let n;return{c(){n=b("p")},m(t,e){_(t,n,e)},p:t,i:t,o:t,d(t){t&&v(n)}}}function ut(e){let n,o,i,l;return{c(){n=b("p"),o=g("Alarm set to "),i=g(e[2]),z(n,"id","titleAlarm"),z(n,"class","svelte-dnfb6z")},m(t,e){_(t,n,e),d(n,o),d(n,i)},p(t,e){4&e[0]&&k(i,t[2])},i(t){l||B((()=>{l=Q(n,Y,{y:-50}),l.start()}))},o:t,d(t){t&&v(n)}}}function at(e){let n;return{c(){n=b("p")},m(t,e){_(t,n,e)},i:t,o:t,d(t){t&&v(n)}}}function mt(e){let n,o;return{c(){n=b("p"),n.textContent="alarm",z(n,"id","larm"),z(n,"class","svelte-dnfb6z")},m(t,e){_(t,n,e)},i(t){o||B((()=>{o=Q(n,Y,{y:-50}),o.start()}))},o:t,d(t){t&&v(n)}}}function dt(e){let n,o,i;return{c(){n=b("button"),n.textContent="Click Me to Disable Alarm",z(n,"class","setter svelte-dnfb6z")},m(t,l){_(t,n,l),o||(i=x(n,"click",e[19]),o=!0)},p:t,d(t){t&&v(n),o=!1,i()}}}function ft(e){let n,o,i;return{c(){n=b("button"),n.textContent="Click me to set alarm",z(n,"class","setter svelte-dnfb6z")},m(t,l){_(t,n,l),o||(i=x(n,"click",e[18]),o=!0)},p:t,d(t){t&&v(n),o=!1,i()}}}function ht(e){let n;return{c(){n=b("p")},m(t,e){_(t,n,e)},p:t,i:t,o:t,d(t){t&&v(n)}}}function _t(e){let n,o,i,l;return{c(){n=b("p"),o=g("Alarm set to "),i=g(e[1]),z(n,"id","titleAlarm"),z(n,"class","svelte-dnfb6z")},m(t,e){_(t,n,e),d(n,o),d(n,i)},p(t,e){2&e[0]&&k(i,t[1])},i(t){l||B((()=>{l=Q(n,Y,{y:-50}),l.start()}))},o:t,d(t){t&&v(n)}}}function vt(t){let e,n;return{c(){e=y("line"),z(e,"class","minor svelte-dnfb6z"),z(e,"y1","42"),z(e,"y2","45"),z(e,"transform",n="rotate("+6*(t[42]+t[45])+")")},m(t,n){_(t,e,n)},d(t){t&&v(e)}}}function pt(e){let n,o,i,l=[1,2,3,4],s=[];for(let t=0;t<4;t+=1)s[t]=vt(et(e,l,t));return{c(){n=y("line");for(let t=0;t<4;t+=1)s[t].c();i=g(""),z(n,"class","major svelte-dnfb6z"),z(n,"y1","35"),z(n,"y2","45"),z(n,"transform",o="rotate("+30*e[42]+")")},m(t,e){_(t,n,e);for(let n=0;n<4;n+=1)s[n].m(t,e);_(t,i,e)},p:t,d(t){t&&v(n),p(s,t),t&&v(i)}}}function bt(e){let n;return{c(){n=b("p")},m(t,e){_(t,n,e)},i:t,o:t,d(t){t&&v(n)}}}function yt(e){let n,o;return{c(){n=b("p"),n.textContent="alarm",z(n,"id","larmRight"),z(n,"class","svelte-dnfb6z")},m(t,e){_(t,n,e)},i(t){o||B((()=>{o=Q(n,Y,{y:-50}),o.start()}))},o:t,d(t){t&&v(n)}}}function gt(e){let n,o,i;return{c(){n=b("button"),n.textContent="Click Me to Disable Alarm",z(n,"class","setter svelte-dnfb6z")},m(t,l){_(t,n,l),o||(i=x(n,"click",e[21]),o=!0)},p:t,d(t){t&&v(n),o=!1,i()}}}function $t(e){let n,o,i;return{c(){n=b("button"),n.textContent="Click me to set alarm",z(n,"class","setter svelte-dnfb6z")},m(t,l){_(t,n,l),o||(i=x(n,"click",e[16]),o=!0)},p:t,d(t){t&&v(n),o=!1,i()}}}function xt(e){let n,o,l,s,r,c,u,a,m,f,h,T,E,w,M,A,S,D,I,L,R,G,Z,B,P,H,N,j,O,q,F,K,Q,U,V,W,X,Y,et,vt,xt,zt,kt,Ct,Tt,Et,wt,Mt,At,St,Dt,It,Lt,Rt,Gt,Zt,Bt,Pt,Ht,Nt,jt,Ot,qt,Ft,Jt,Kt,Qt,Ut,Vt,Wt,Xt,Yt,te,ee,ne,oe,ie,le,se,re,ce;function ue(t,e){return t[8]&&0!=t[3]?ot:nt}let ae=ue(e),me=ae(e);function de(t,e){return t[6]?lt:it}let fe=de(e),he=fe(e);function _e(t,e){return 0==t[6]&&1!=t[8]?rt:1==t[8]?st:void 0}let ve=_e(e),pe=ve&&ve(e);function be(t,e){return t[7]&&0!=t[2]?ut:ct}let ye=be(e),ge=ye(e);function $e(t,e){return t[5]?mt:at}let xe=$e(e),ze=xe(e);function ke(t,e){return 0==t[5]&&1!=t[7]?ft:1==t[7]?dt:void 0}let Ce=ke(e),Te=Ce&&Ce(e);function Ee(t,e){return t[9]&&0!=t[1]?_t:ht}let we=Ee(e),Me=we(e),Ae=[0,5,10,15,20,25,30,35,40,45,50,55],Se=[];for(let t=0;t<12;t+=1)Se[t]=pt(tt(e,Ae,t));function De(t,e){return t[4]?yt:bt}let Ie=De(e),Le=Ie(e);function Re(t,e){return 0==t[4]&&1!=t[9]?$t:1==t[9]?gt:void 0}let Ge=Re(e),Ze=Ge&&Ge(e);return{c(){n=b("link"),o=$(),l=b("link"),s=$(),r=b("link"),c=$(),u=b("main"),a=b("div"),a.innerHTML='<h1 id="mainTitle" class="svelte-dnfb6z">time:viewer</h1>',m=$(),f=b("div"),h=b("div"),me.c(),T=$(),E=b("div"),w=y("svg"),M=y("rect"),A=y("rect"),S=$(),D=b("div"),I=b("p"),L=g(e[10]),R=$(),G=b("p"),Z=g(e[11]),B=$(),he.c(),P=$(),H=b("div"),N=b("input"),j=$(),O=b("form"),q=b("select"),F=b("option"),F.textContent="Local Time",K=b("option"),K.textContent="GMT",Q=b("option"),Q.textContent="EST",U=$(),V=b("div"),pe&&pe.c(),W=$(),X=b("button"),X.textContent="Press to update time",Y=$(),et=b("div"),ge.c(),vt=$(),xt=b("p"),zt=g(e[0]),kt=$(),ze.c(),Ct=$(),Tt=b("div"),Et=b("input"),wt=$(),Mt=b("form"),At=b("select"),St=b("option"),St.textContent="Local Time",Dt=b("option"),Dt.textContent="GMT",It=b("option"),It.textContent="EST",Lt=$(),Rt=b("div"),Te&&Te.c(),Gt=$(),Zt=b("button"),Zt.textContent="Press to update time",Bt=$(),Pt=b("div"),Me.c(),Ht=$(),Nt=y("svg"),jt=y("circle");for(let t=0;t<12;t+=1)Se[t].c();Ot=y("line"),Ft=y("line"),Kt=$(),Le.c(),Qt=$(),Ut=b("div"),Vt=b("input"),Wt=$(),Xt=b("form"),Yt=b("select"),te=b("option"),te.textContent="Local Time",ee=b("option"),ee.textContent="GMT",ne=b("option"),ne.textContent="EST",oe=$(),ie=b("div"),Ze&&Ze.c(),le=$(),se=b("button"),se.textContent="Press to update time",z(n,"href","https://fonts.googleapis.com/css?family=Anton"),z(n,"rel","stylesheet"),z(n,"type","text/css"),z(l,"href","https://fonts.googleapis.com/css?family=Lobster"),z(l,"rel","stylesheet"),z(l,"type","text/css"),z(r,"href","https://fonts.googleapis.com/css?family=Inconsolata"),z(r,"rel","stylesheet"),z(r,"type","text/css"),z(a,"id","top"),z(a,"class","svelte-dnfb6z"),z(M,"id","leftHourTimer"),z(M,"x",e[12]),z(M,"rx","10"),z(M,"ry","10"),z(M,"y","10"),z(M,"class","svelte-dnfb6z"),z(A,"id","leftMinTimer"),z(A,"x",e[13]),z(A,"rx","10"),z(A,"ry","10"),z(A,"y","70"),z(A,"class","svelte-dnfb6z"),z(I,"id","leftClockHourDis"),z(I,"class","svelte-dnfb6z"),z(G,"id","leftClockMinDis"),z(G,"class","svelte-dnfb6z"),z(D,"id","leftClockDivDis"),z(D,"class","svelte-dnfb6z"),z(E,"class","leftTimerContainer svelte-dnfb6z"),z(N,"class","button svelte-dnfb6z"),z(N,"type","time"),z(N,"id","DisablerLeft"),F.__value="localTime",F.value=F.__value,K.__value="GMT",K.value=K.__value,Q.__value="EST",Q.value=Q.__value,z(q,"style",""),z(q,"id","timeZonesLeft"),z(q,"name","Time Zones"),z(q,"class","svelte-dnfb6z"),C(O,"display","inline"),z(V,"id","setter"),z(X,"id","button"),z(X,"class","svelte-dnfb6z"),z(h,"class","clockcontainer svelte-dnfb6z"),z(xt,"id","time"),z(xt,"class","svelte-dnfb6z"),z(Et,"class","button svelte-dnfb6z"),z(Et,"type","time"),z(Et,"id","DisablerMiddle"),St.__value="localTime",St.value=St.__value,Dt.__value="GMT",Dt.value=Dt.__value,It.__value="EST",It.value=It.__value,z(At,"id","timeZonesMiddle"),z(At,"name","Time Zones"),z(At,"class","svelte-dnfb6z"),C(Mt,"display","inline"),z(Rt,"id","setter"),z(Zt,"id","button"),z(Zt,"class","svelte-dnfb6z"),z(et,"class","clockcontainer svelte-dnfb6z"),z(jt,"class","clock-face svelte-dnfb6z"),z(jt,"r","48"),z(Ot,"class","hour svelte-dnfb6z"),z(Ot,"y1","2"),z(Ot,"y2","-20"),z(Ot,"transform",qt="rotate("+(30*e[15]+e[14]/2)+")"),z(Ft,"class","minute svelte-dnfb6z"),z(Ft,"y1","4"),z(Ft,"y2","-30"),z(Ft,"transform",Jt="rotate("+6*e[14]+")"),z(Nt,"id","circleClock"),z(Nt,"viewBox","-50 -50 100 100"),z(Nt,"class","svelte-dnfb6z"),z(Vt,"class","button svelte-dnfb6z"),z(Vt,"type","time"),z(Vt,"id","DisablerRight"),te.__value="localTime",te.value=te.__value,ee.__value="GMT",ee.value=ee.__value,ne.__value="EST",ne.value=ne.__value,z(Yt,"id","timeZonesRight"),z(Yt,"name","Time Zones"),z(Yt,"class","svelte-dnfb6z"),C(Xt,"display","inline"),z(se,"id","button"),z(se,"class","svelte-dnfb6z"),z(Pt,"class","clockcontainer svelte-dnfb6z"),z(f,"class","flexcontainer svelte-dnfb6z")},m(t,i){_(t,n,i),_(t,o,i),_(t,l,i),_(t,s,i),_(t,r,i),_(t,c,i),_(t,u,i),d(u,a),d(u,m),d(u,f),d(f,h),me.m(h,null),d(h,T),d(h,E),d(E,w),d(w,M),d(w,A),d(E,S),d(E,D),d(D,I),d(I,L),d(D,R),d(D,G),d(G,Z),d(h,B),he.m(h,null),d(h,P),d(h,H),d(H,N),d(H,j),d(H,O),d(O,q),d(q,F),d(q,K),d(q,Q),d(h,U),d(h,V),pe&&pe.m(V,null),d(h,W),d(h,X),d(f,Y),d(f,et),ge.m(et,null),d(et,vt),d(et,xt),d(xt,zt),d(et,kt),ze.m(et,null),d(et,Ct),d(et,Tt),d(Tt,Et),d(Tt,wt),d(Tt,Mt),d(Mt,At),d(At,St),d(At,Dt),d(At,It),d(et,Lt),d(et,Rt),Te&&Te.m(Rt,null),d(et,Gt),d(et,Zt),d(f,Bt),d(f,Pt),Me.m(Pt,null),d(Pt,Ht),d(Pt,Nt),d(Nt,jt);for(let t=0;t<12;t+=1)Se[t].m(Nt,null);d(Nt,Ot),d(Nt,Ft),d(Pt,Kt),Le.m(Pt,null),d(Pt,Qt),d(Pt,Ut),d(Ut,Vt),d(Ut,Wt),d(Ut,Xt),d(Xt,Yt),d(Yt,te),d(Yt,ee),d(Yt,ne),d(Pt,oe),d(Pt,ie),Ze&&Ze.m(ie,null),d(Pt,le),d(Pt,se),re||(ce=[x(X,"click",e[22]),x(Zt,"click",e[22]),x(se,"click",e[22])],re=!0)},p(t,e){ae===(ae=ue(t))&&me?me.p(t,e):(me.d(1),me=ae(t),me&&(me.c(),J(me,1),me.m(h,T))),4096&e[0]&&z(M,"x",t[12]),8192&e[0]&&z(A,"x",t[13]),1024&e[0]&&k(L,t[10]),2048&e[0]&&k(Z,t[11]),fe!==(fe=de(t))&&(he.d(1),he=fe(t),he&&(he.c(),J(he,1),he.m(h,P))),ve===(ve=_e(t))&&pe?pe.p(t,e):(pe&&pe.d(1),pe=ve&&ve(t),pe&&(pe.c(),pe.m(V,null))),ye===(ye=be(t))&&ge?ge.p(t,e):(ge.d(1),ge=ye(t),ge&&(ge.c(),J(ge,1),ge.m(et,vt))),1&e[0]&&k(zt,t[0]),xe!==(xe=$e(t))&&(ze.d(1),ze=xe(t),ze&&(ze.c(),J(ze,1),ze.m(et,Ct))),Ce===(Ce=ke(t))&&Te?Te.p(t,e):(Te&&Te.d(1),Te=Ce&&Ce(t),Te&&(Te.c(),Te.m(Rt,null))),we===(we=Ee(t))&&Me?Me.p(t,e):(Me.d(1),Me=we(t),Me&&(Me.c(),J(Me,1),Me.m(Pt,Ht))),49152&e[0]&&qt!==(qt="rotate("+(30*t[15]+t[14]/2)+")")&&z(Ot,"transform",qt),16384&e[0]&&Jt!==(Jt="rotate("+6*t[14]+")")&&z(Ft,"transform",Jt),Ie!==(Ie=De(t))&&(Le.d(1),Le=Ie(t),Le&&(Le.c(),J(Le,1),Le.m(Pt,Qt))),Ge===(Ge=Re(t))&&Ze?Ze.p(t,e):(Ze&&Ze.d(1),Ze=Ge&&Ge(t),Ze&&(Ze.c(),Ze.m(ie,null)))},i(t){J(me),J(he),J(ge),J(ze),J(Me),J(Le)},o:t,d(t){t&&v(n),t&&v(o),t&&v(l),t&&v(s),t&&v(r),t&&v(c),t&&v(u),me.d(),he.d(),pe&&pe.d(),ge.d(),ze.d(),Te&&Te.d(),Me.d(),p(Se,t),Le.d(),Ze&&Ze.d(),re=!1,i(ce)}}}function zt(t,e,n){let o,i,l=0,s=0;S((()=>{const t=setInterval((()=>{}),1e3);return()=>{clearInterval(t)}}));let r=0,c=0,u=0,a="",m="",d="",f=new W(20,50),h=new W(19,50),_=new W(14,50),v="",p="",b="",y=!1,g=!1,$=!1,x="",z="",k="",C=!1,T=!1,E=!1,w="24",M="",A="",D="";function I(){f.tick(),h.tick(),_.tick(),n(12,A=9.583333333333334*w-225),n(13,D=3.75*M-225)}return setInterval((function(){m==p&&C&&n(5,g=!0),a==b&&T&&n(6,$=!0),d==v&&E&&n(4,y=!0)}),1e3),setInterval(I,1e3),setInterval((function(){k=document.getElementById("timeZonesRight").value,x=document.getElementById("timeZonesLeft").value,z=document.getElementById("timeZonesMiddle").value}),250),setInterval((function(){"localTime"==z?n(0,u=f.time):"GMT"==z?n(0,u=h.time):(z="EST")&&n(0,u=_.time),m=u.toString()}),500),setInterval((function(){"localTime"==x?(r=f.time,n(10,w=f._hour),n(11,M=f._min)):"GMT"==x?(r=h.time,n(10,w=h._hour),n(11,M=h._min)):(x="EST")&&(r=_.time,n(10,w=_._hour),n(11,M=_._min)),a=r.toString()}),500),setInterval((function(){d=c.toString(),"localTime"==k?(c=f.time,n(23,l=f._hour),n(24,s=f._min)):"GMT"==k?(c=h.time,n(23,l=h._hour),n(24,s=h._min)):(k="EST")&&(c=_.time,n(23,l=_._hour),n(24,s=_._min))}),500),t.$$.update=()=>{8388608&t.$$.dirty[0]&&n(15,o=l),16777216&t.$$.dirty[0]&&n(14,i=s)},[u,v,p,b,y,g,$,C,T,E,w,M,A,D,i,o,function(){n(1,v=document.getElementById("DisablerRight").value),n(9,E=!0)},function(){n(3,b=document.getElementById("DisablerLeft").value),n(8,T=!0)},function(){n(2,p=document.getElementById("DisablerMiddle").value),n(7,C=!0)},function(){n(5,g=!1),n(7,C=!1)},function(){n(6,$=!1),n(8,T=!1)},function(){n(4,y=!1),n(9,E=!1)},I,l,s]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),V(this,t,zt,xt,s,{},null,[-1,-1])}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
