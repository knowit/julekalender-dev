var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,o=(e,t)=>{for(var a in t||(t={}))n.call(t,a)&&l(e,a,t[a]);if(r)for(var a of r(t))s.call(t,a)&&l(e,a,t[a]);return e},i=(e,r)=>t(e,a(r));import{R as c,L as u,ac as d,ad as m,ae as f,af as p,ag as h,ah as g,ai as v,aj as y,ak as b,al as E,b as _,am as x,an as w,ao as N,ap as k,aq as A,ar as S,as as C,at as B,au as I,av as L,aw as V,ax as $,u as F,e as U,p as j,a as M,k as O,n as P,g as Q,c as T,ay as q,r as D,O as R,I as z,j as G,az as H,aA as J,a2 as K,_ as W,d as X,aB as Y,a0 as Z,T as ee,z as te,M as ae,aC as re,aD as ne,aE as se,f as le,a3 as oe,a4 as ie,a5 as ce}from"./vendor.7f23a0e5.js";import{B as ue,C as de,P as me,F as fe,u as pe,g as he,a as ge,b as ve,c as ye,d as be,S as Ee,e as _e}from"./index.a24c22f2.js";const xe=()=>c.createElement("header",{className:"space-x-16"},c.createElement("span",{className:"space-x-8"},c.createElement(u,{to:"/admin/doors"},c.createElement(ue,{content:"Luker"})),c.createElement(u,{to:"/admin/doors/new"},c.createElement(ue,null,"Ny luke"))),c.createElement("span",{className:"space-x-8"},c.createElement(u,{to:"/admin/service_messages"},c.createElement(ue,{content:"Driftsmeldinger"})),c.createElement(u,{to:"/admin/service_messages/new"},c.createElement(ue,null,"Ny driftsmelding"))));var we=d;var Ne=function(e,t,a){for(var r=-1,n=e.length;++r<n;){var s=e[r],l=t(s);if(null!=l&&(void 0===o?l==l&&!we(l):a(l,o)))var o=l,i=s}return i},ke=m,Ae=function(e,t){return e<t};var Se=function(e,t){return e&&e.length?Ne(e,ke(t),Ae):void 0};var Ce=function(e){for(var t=-1,a=null==e?0:e.length,r=0,n=[];++t<a;){var s=e[t];s&&(n[r++]=s)}return n},Be=p,Ie=h,Le=f?f.isConcatSpreadable:void 0;var Ve=g,$e=function(e){return Ie(e)||Be(e)||!!(Le&&e&&e[Le])};var Fe=function e(t,a,r,n,s){var l=-1,o=t.length;for(r||(r=$e),s||(s=[]);++l<o;){var i=t[l];a>0&&r(i)?a>1?e(i,a-1,r,n,s):Ve(s,i):n||(s[s.length]=i)}return s};var Ue=d;var je=function(e,t){if(e!==t){var a=void 0!==e,r=null===e,n=e==e,s=Ue(e),l=void 0!==t,o=null===t,i=t==t,c=Ue(t);if(!o&&!c&&!s&&e>t||s&&l&&i&&!o&&!c||r&&l&&i||!a&&i||!n)return 1;if(!r&&!s&&!c&&e<t||c&&a&&n&&!r&&!s||o&&a&&n||!l&&n||!i)return-1}return 0};var Me=v,Oe=y,Pe=m,Qe=b,Te=function(e,t){var a=e.length;for(e.sort(t);a--;)e[a]=e[a].value;return e},qe=E,De=function(e,t,a){for(var r=-1,n=e.criteria,s=t.criteria,l=n.length,o=a.length;++r<l;){var i=je(n[r],s[r]);if(i)return r>=o?i:i*("desc"==a[r]?-1:1)}return e.index-t.index},Re=_,ze=h;var Ge=Fe,He=function(e,t,a){t=t.length?Me(t,(function(e){return ze(e)?function(t){return Oe(t,1===e.length?e[0]:e)}:e})):[Re];var r=-1;t=Me(t,qe(Pe));var n=Qe(e,(function(e,a,n){return{criteria:Me(t,(function(t){return t(e)})),index:++r,value:e}}));return Te(n,(function(e,t){return De(e,t,a)}))},Je=w,Ke=x((function(e,t){if(null==e)return[];var a=t.length;return a>1&&Je(e,t[0],t[1])?t=[]:a>2&&Je(t[0],t[1],t[2])&&(t=[t[0]]),He(e,Ge(t,1),[])})),We=N,Xe=k;var Ye=function(e){return"number"==typeof e||Xe(e)&&"[object Number]"==We(e)},Ze=A,et=S,tt=C,at=B,rt=I;var nt=y,st=function(e,t,a,r){if(!at(e))return e;for(var n=-1,s=(t=et(t,e)).length,l=s-1,o=e;null!=o&&++n<s;){var i=rt(t[n]),c=a;if("__proto__"===i||"constructor"===i||"prototype"===i)return e;if(n!=l){var u=o[i];void 0===(c=r?r(u,i,o):void 0)&&(c=at(u)?u:tt(t[n+1])?[]:{})}Ze(o,i,c),o=o[i]}return e},lt=S;var ot=function(e,t,a){for(var r=-1,n=t.length,s={};++r<n;){var l=t[r],o=nt(e,l);a(o,l)&&st(s,lt(l,e),o)}return s},it=L;var ct=Fe;var ut=function(e){return(null==e?0:e.length)?ct(e,1):[]},dt=V,mt=$;var ft=function(e,t){return ot(e,t,(function(t,a){return it(e,a)}))},pt=function(e){return mt(dt(e,void 0,ut),e+"")}((function(e,t){return null==e?{}:ft(e,t)}));const ht=async()=>await M.get("/admin/challenges").then((({data:e})=>O(e,"door"))),gt=e=>F(["admin","challenges"],ht,i(o({},e),{staleTime:6e5})),vt=e=>F(["admin","challenges"],ht,{staleTime:6e5,select:e?j(e):void 0}),yt=e=>F(["admin","posts",e],(()=>(e=>M.get(`/admin/challenges/${e}/posts`).then((({data:e})=>e)))(e)),{staleTime:3e5}),bt=(e,t)=>F(["admin","challenges","preview",e],(()=>(async e=>{if(e=pt(e,["markdown_content","files"]),!P(e))return await M.post("/admin/challenge_markdown",{challenge:e}).then((({data:e})=>e))})(e)),o({staleTime:1/0,cacheTime:0},t)),Et=()=>{const e=Q();return U(["admin","serviceMessages","update"],(e=>{var t=e,{uuid:a}=t,l=((e,t)=>{var a={};for(var l in e)n.call(e,l)&&t.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&r)for(var l of r(e))t.indexOf(l)<0&&s.call(e,l)&&(a[l]=e[l]);return a})(t,["uuid"]);return M.patch(`/admin/service_messages/${a}`,l)}),{onSuccess:()=>{e.invalidateQueries("serviceMessages")}})},_t=({door:e,setDoor:t})=>{const{data:a}=gt();return a?c.createElement("label",{className:"block space-x-4"},c.createElement("select",{className:"form-select",defaultValue:e,onChange:e=>t(parseInt(e.target.value))},T(Ke(Ce(q(a)),"door"),(({door:e,title:t},a)=>c.createElement("option",{key:a,value:e,label:`Luke ${e}: ${t}`}))))):null};var xt=D.exports.memo((()=>{var e;const t=R(),{search:a}=z(),r=null==(e=a.match(/door=(?<door>\d+)/))?void 0:e.groups,{data:n}=gt(),s=D.exports.useMemo((()=>Se(q(n),"door")),[n]),{mutate:l,isLoading:o}=(()=>{const e=Q();return U(["admin","challenges","destroy"],(async({door:e})=>Ye(e)&&M.delete(`/admin/challenges/${e}`)),{onSuccess:()=>{e.invalidateQueries("challenges"),e.invalidateQueries(["admin","challenges"])}})})(),[i,d]=D.exports.useState(r&&parseInt(r.door));D.exports.useLayoutEffect((()=>{d((e=>null!=e?e:null==s?void 0:s.door))}),[d,s]);const{data:m}=vt(null!=i?i:null==s?void 0:s.door);return G(i)?null:c.createElement("div",{className:"space-y-door-elements"},c.createElement(de,{challenge:m,withoutInput:!0,preamble:c.createElement("div",{className:"w-full flex justify-between mb-8"},c.createElement(_t,{door:i,setDoor:d}),c.createElement("div",{className:"space-x-8"},c.createElement(u,{to:`/admin/doors/${i}/edit`},c.createElement(ue,{disabled:o},"Rediger luke")),c.createElement(ue,{disabled:o,onClick:()=>{window.confirm(`Er du sikker på at du vil slette luke ${i} "${null==m?void 0:m.title}"?`)&&l({door:i},{onSuccess:()=>{d(void 0),t.push("/admin/doors")}})}},"Slett luke")))}),c.createElement(me,{door:i,usePosts:yt,withoutInput:!0}))}));var wt=H,Nt=J,kt=m,At=h,St=function(e){if("function"!=typeof e)throw new TypeError("Expected a function");return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}};var Ct=function(e,t){return(At(e)?wt:Nt)(e,St(kt(t)))};const Bt=()=>{const{data:e}=gt();return Ct(K(1,25),(t=>W(e,t)))};var It={exports:{}},Lt=It.exports=function(e){var t=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];function a(e,t){var a=e[0],r=e[1],n=e[2],s=e[3];r=((r+=((n=((n+=((s=((s+=((a=((a+=(r&n|~r&s)+t[0]-680876936|0)<<7|a>>>25)+r|0)&r|~a&n)+t[1]-389564586|0)<<12|s>>>20)+a|0)&a|~s&r)+t[2]+606105819|0)<<17|n>>>15)+s|0)&s|~n&a)+t[3]-1044525330|0)<<22|r>>>10)+n|0,r=((r+=((n=((n+=((s=((s+=((a=((a+=(r&n|~r&s)+t[4]-176418897|0)<<7|a>>>25)+r|0)&r|~a&n)+t[5]+1200080426|0)<<12|s>>>20)+a|0)&a|~s&r)+t[6]-1473231341|0)<<17|n>>>15)+s|0)&s|~n&a)+t[7]-45705983|0)<<22|r>>>10)+n|0,r=((r+=((n=((n+=((s=((s+=((a=((a+=(r&n|~r&s)+t[8]+1770035416|0)<<7|a>>>25)+r|0)&r|~a&n)+t[9]-1958414417|0)<<12|s>>>20)+a|0)&a|~s&r)+t[10]-42063|0)<<17|n>>>15)+s|0)&s|~n&a)+t[11]-1990404162|0)<<22|r>>>10)+n|0,r=((r+=((n=((n+=((s=((s+=((a=((a+=(r&n|~r&s)+t[12]+1804603682|0)<<7|a>>>25)+r|0)&r|~a&n)+t[13]-40341101|0)<<12|s>>>20)+a|0)&a|~s&r)+t[14]-1502002290|0)<<17|n>>>15)+s|0)&s|~n&a)+t[15]+1236535329|0)<<22|r>>>10)+n|0,r=((r+=((n=((n+=((s=((s+=((a=((a+=(r&s|n&~s)+t[1]-165796510|0)<<5|a>>>27)+r|0)&n|r&~n)+t[6]-1069501632|0)<<9|s>>>23)+a|0)&r|a&~r)+t[11]+643717713|0)<<14|n>>>18)+s|0)&a|s&~a)+t[0]-373897302|0)<<20|r>>>12)+n|0,r=((r+=((n=((n+=((s=((s+=((a=((a+=(r&s|n&~s)+t[5]-701558691|0)<<5|a>>>27)+r|0)&n|r&~n)+t[10]+38016083|0)<<9|s>>>23)+a|0)&r|a&~r)+t[15]-660478335|0)<<14|n>>>18)+s|0)&a|s&~a)+t[4]-405537848|0)<<20|r>>>12)+n|0,r=((r+=((n=((n+=((s=((s+=((a=((a+=(r&s|n&~s)+t[9]+568446438|0)<<5|a>>>27)+r|0)&n|r&~n)+t[14]-1019803690|0)<<9|s>>>23)+a|0)&r|a&~r)+t[3]-187363961|0)<<14|n>>>18)+s|0)&a|s&~a)+t[8]+1163531501|0)<<20|r>>>12)+n|0,r=((r+=((n=((n+=((s=((s+=((a=((a+=(r&s|n&~s)+t[13]-1444681467|0)<<5|a>>>27)+r|0)&n|r&~n)+t[2]-51403784|0)<<9|s>>>23)+a|0)&r|a&~r)+t[7]+1735328473|0)<<14|n>>>18)+s|0)&a|s&~a)+t[12]-1926607734|0)<<20|r>>>12)+n|0,r=((r+=((n=((n+=((s=((s+=((a=((a+=(r^n^s)+t[5]-378558|0)<<4|a>>>28)+r|0)^r^n)+t[8]-2022574463|0)<<11|s>>>21)+a|0)^a^r)+t[11]+1839030562|0)<<16|n>>>16)+s|0)^s^a)+t[14]-35309556|0)<<23|r>>>9)+n|0,r=((r+=((n=((n+=((s=((s+=((a=((a+=(r^n^s)+t[1]-1530992060|0)<<4|a>>>28)+r|0)^r^n)+t[4]+1272893353|0)<<11|s>>>21)+a|0)^a^r)+t[7]-155497632|0)<<16|n>>>16)+s|0)^s^a)+t[10]-1094730640|0)<<23|r>>>9)+n|0,r=((r+=((n=((n+=((s=((s+=((a=((a+=(r^n^s)+t[13]+681279174|0)<<4|a>>>28)+r|0)^r^n)+t[0]-358537222|0)<<11|s>>>21)+a|0)^a^r)+t[3]-722521979|0)<<16|n>>>16)+s|0)^s^a)+t[6]+76029189|0)<<23|r>>>9)+n|0,r=((r+=((n=((n+=((s=((s+=((a=((a+=(r^n^s)+t[9]-640364487|0)<<4|a>>>28)+r|0)^r^n)+t[12]-421815835|0)<<11|s>>>21)+a|0)^a^r)+t[15]+530742520|0)<<16|n>>>16)+s|0)^s^a)+t[2]-995338651|0)<<23|r>>>9)+n|0,r=((r+=((s=((s+=(r^((a=((a+=(n^(r|~s))+t[0]-198630844|0)<<6|a>>>26)+r|0)|~n))+t[7]+1126891415|0)<<10|s>>>22)+a|0)^((n=((n+=(a^(s|~r))+t[14]-1416354905|0)<<15|n>>>17)+s|0)|~a))+t[5]-57434055|0)<<21|r>>>11)+n|0,r=((r+=((s=((s+=(r^((a=((a+=(n^(r|~s))+t[12]+1700485571|0)<<6|a>>>26)+r|0)|~n))+t[3]-1894986606|0)<<10|s>>>22)+a|0)^((n=((n+=(a^(s|~r))+t[10]-1051523|0)<<15|n>>>17)+s|0)|~a))+t[1]-2054922799|0)<<21|r>>>11)+n|0,r=((r+=((s=((s+=(r^((a=((a+=(n^(r|~s))+t[8]+1873313359|0)<<6|a>>>26)+r|0)|~n))+t[15]-30611744|0)<<10|s>>>22)+a|0)^((n=((n+=(a^(s|~r))+t[6]-1560198380|0)<<15|n>>>17)+s|0)|~a))+t[13]+1309151649|0)<<21|r>>>11)+n|0,r=((r+=((s=((s+=(r^((a=((a+=(n^(r|~s))+t[4]-145523070|0)<<6|a>>>26)+r|0)|~n))+t[11]-1120210379|0)<<10|s>>>22)+a|0)^((n=((n+=(a^(s|~r))+t[2]+718787259|0)<<15|n>>>17)+s|0)|~a))+t[9]-343485551|0)<<21|r>>>11)+n|0,e[0]=a+e[0]|0,e[1]=r+e[1]|0,e[2]=n+e[2]|0,e[3]=s+e[3]|0}function r(e){var t,a=[];for(t=0;t<64;t+=4)a[t>>2]=e.charCodeAt(t)+(e.charCodeAt(t+1)<<8)+(e.charCodeAt(t+2)<<16)+(e.charCodeAt(t+3)<<24);return a}function n(e){var t,a=[];for(t=0;t<64;t+=4)a[t>>2]=e[t]+(e[t+1]<<8)+(e[t+2]<<16)+(e[t+3]<<24);return a}function s(e){var t,n,s,l,o,i,c=e.length,u=[1732584193,-271733879,-1732584194,271733878];for(t=64;t<=c;t+=64)a(u,r(e.substring(t-64,t)));for(n=(e=e.substring(t-64)).length,s=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t=0;t<n;t+=1)s[t>>2]|=e.charCodeAt(t)<<(t%4<<3);if(s[t>>2]|=128<<(t%4<<3),t>55)for(a(u,s),t=0;t<16;t+=1)s[t]=0;return l=(l=8*c).toString(16).match(/(.*?)(.{0,8})$/),o=parseInt(l[2],16),i=parseInt(l[1],16)||0,s[14]=o,s[15]=i,a(u,s),u}function l(e){var t,r,s,l,o,i,c=e.length,u=[1732584193,-271733879,-1732584194,271733878];for(t=64;t<=c;t+=64)a(u,n(e.subarray(t-64,t)));for(r=(e=t-64<c?e.subarray(t-64):new Uint8Array(0)).length,s=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t=0;t<r;t+=1)s[t>>2]|=e[t]<<(t%4<<3);if(s[t>>2]|=128<<(t%4<<3),t>55)for(a(u,s),t=0;t<16;t+=1)s[t]=0;return l=(l=8*c).toString(16).match(/(.*?)(.{0,8})$/),o=parseInt(l[2],16),i=parseInt(l[1],16)||0,s[14]=o,s[15]=i,a(u,s),u}function o(e){var a,r="";for(a=0;a<4;a+=1)r+=t[e>>8*a+4&15]+t[e>>8*a&15];return r}function i(e){var t;for(t=0;t<e.length;t+=1)e[t]=o(e[t]);return e.join("")}function c(e){return/[\u0080-\uFFFF]/.test(e)&&(e=unescape(encodeURIComponent(e))),e}function u(e,t){var a,r=e.length,n=new ArrayBuffer(r),s=new Uint8Array(n);for(a=0;a<r;a+=1)s[a]=e.charCodeAt(a);return t?s:n}function d(e){return String.fromCharCode.apply(null,new Uint8Array(e))}function m(e,t,a){var r=new Uint8Array(e.byteLength+t.byteLength);return r.set(new Uint8Array(e)),r.set(new Uint8Array(t),e.byteLength),a?r:r.buffer}function f(e){var t,a=[],r=e.length;for(t=0;t<r-1;t+=2)a.push(parseInt(e.substr(t,2),16));return String.fromCharCode.apply(String,a)}function p(){this.reset()}return i(s("hello")),"undefined"==typeof ArrayBuffer||ArrayBuffer.prototype.slice||function(){function t(e,t){return(e=0|e||0)<0?Math.max(e+t,0):Math.min(e,t)}ArrayBuffer.prototype.slice=function(a,r){var n,s,l,o,i=this.byteLength,c=t(a,i),u=i;return r!==e&&(u=t(r,i)),c>u?new ArrayBuffer(0):(n=u-c,s=new ArrayBuffer(n),l=new Uint8Array(s),o=new Uint8Array(this,c,n),l.set(o),s)}}(),p.prototype.append=function(e){return this.appendBinary(c(e)),this},p.prototype.appendBinary=function(e){this._buff+=e,this._length+=e.length;var t,n=this._buff.length;for(t=64;t<=n;t+=64)a(this._hash,r(this._buff.substring(t-64,t)));return this._buff=this._buff.substring(t-64),this},p.prototype.end=function(e){var t,a,r=this._buff,n=r.length,s=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(t=0;t<n;t+=1)s[t>>2]|=r.charCodeAt(t)<<(t%4<<3);return this._finish(s,n),a=i(this._hash),e&&(a=f(a)),this.reset(),a},p.prototype.reset=function(){return this._buff="",this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},p.prototype.getState=function(){return{buff:this._buff,length:this._length,hash:this._hash.slice()}},p.prototype.setState=function(e){return this._buff=e.buff,this._length=e.length,this._hash=e.hash,this},p.prototype.destroy=function(){delete this._hash,delete this._buff,delete this._length},p.prototype._finish=function(e,t){var r,n,s,l=t;if(e[l>>2]|=128<<(l%4<<3),l>55)for(a(this._hash,e),l=0;l<16;l+=1)e[l]=0;r=(r=8*this._length).toString(16).match(/(.*?)(.{0,8})$/),n=parseInt(r[2],16),s=parseInt(r[1],16)||0,e[14]=n,e[15]=s,a(this._hash,e)},p.hash=function(e,t){return p.hashBinary(c(e),t)},p.hashBinary=function(e,t){var a=i(s(e));return t?f(a):a},p.ArrayBuffer=function(){this.reset()},p.ArrayBuffer.prototype.append=function(e){var t,r=m(this._buff.buffer,e,!0),s=r.length;for(this._length+=e.byteLength,t=64;t<=s;t+=64)a(this._hash,n(r.subarray(t-64,t)));return this._buff=t-64<s?new Uint8Array(r.buffer.slice(t-64)):new Uint8Array(0),this},p.ArrayBuffer.prototype.end=function(e){var t,a,r=this._buff,n=r.length,s=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(t=0;t<n;t+=1)s[t>>2]|=r[t]<<(t%4<<3);return this._finish(s,n),a=i(this._hash),e&&(a=f(a)),this.reset(),a},p.ArrayBuffer.prototype.reset=function(){return this._buff=new Uint8Array(0),this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},p.ArrayBuffer.prototype.getState=function(){var e=p.prototype.getState.call(this);return e.buff=d(e.buff),e},p.ArrayBuffer.prototype.setState=function(e){return e.buff=u(e.buff,!0),p.prototype.setState.call(this,e)},p.ArrayBuffer.prototype.destroy=p.prototype.destroy,p.ArrayBuffer.prototype._finish=p.prototype._finish,p.ArrayBuffer.hash=function(e,t){var a=i(l(new Uint8Array(e)));return t?f(a):a},p}();let Vt=0;const $t=({challenge:e,register:t,setValue:a,className:r})=>{t("files");const{mutateAsync:n}=U(["admin","activeStorage","createBlob"],(({blob:e,config:t})=>M.post("/rails/active_storage/direct_uploads",{blob:e},t).then((({data:e})=>e)))),{mutateAsync:s}=U(["admin","activeStorage","uploadFile"],(({upload:{file:e,directUpload:t},config:a})=>M.put(t.url,e,i(o({},a),{headers:t.headers})))),[l,u]=D.exports.useState(T(e.files,(e=>i(o({},e),{fileId:Vt++}))));D.exports.useEffect((()=>{a("files",T(l,"signed_id"))}),[a,l]);const[d,m]=D.exports.useState({}),f=(()=>{const e=D.exports.useRef(!0),t=D.exports.useCallback((()=>e.current),[]);return D.exports.useEffect((()=>()=>{e.current=!1}),[]),t})(),p=D.exports.useRef(null);return c.createElement("div",{className:X("space-y-2",r)},c.createElement(fe,{label:"Filer",note:"husk å dobbeltsjekke riktig filnavn i markdown"},c.createElement("input",{ref:p,className:"hidden",type:"file",multiple:!0,onChange:({target:{files:e}})=>e&&(async e=>{await Promise.all(T(e,(async e=>{const t=Vt++;m((e=>i(o({},e),{[t]:{progress:0}})));const a={filename:e.name,content_type:e.type,byte_size:e.size,checksum:btoa(Lt.ArrayBuffer.hash(await e.arrayBuffer(),!0))},{signed_id:r,direct_upload:l}=await n({blob:a});f()&&(u((a=>[...a,{signed_id:r,filename:e.name,fileId:t}])),await s({upload:{file:e,directUpload:l},config:{onUploadProgress:e=>{f()&&m((a=>i(o({},a),{[t]:{progress:e.loaded/e.total}})))}}}),f()&&m((e=>i(o({},e),{[t]:{progress:1}}))))})))})(e)}),c.createElement(ue,{className:"block form-input",type:"button",underline:!1,content:"Velg filer...",onClick:()=>{var e;return null==(e=p.current)?void 0:e.click()}})),c.createElement("div",{className:"grid grid-cols-4 gap-2"},T(l,(({filename:e,signed_id:t,fileId:a})=>{var r,n;const s=null!=(n=null==(r=d[a])?void 0:r.progress)?n:1;return c.createElement("span",{key:t,className:"relative overflow-hidden p-1 border-2 rounded-md border-lightbulb-yellow text-center"},s<1&&c.createElement("div",{style:{width:`calc(${100*s}% + ${.5*s}rem)`},className:"absolute top-[-.25rem] left-[-.25rem] h-[calc(100%+.5rem)] bg-blue-400 bg-opacity-20"}),c.createElement("span",{className:"inline-block w-[calc(100%-1.5rem)] line-clamp-1"},e),c.createElement(Y,{className:"absolute top-0 right-2 h-full w-3 cursor-pointer",onClick:()=>u((e=>Ct(e,{signed_id:t})))}))}))))};var Ft=D.exports.memo((({challenge:e,newForm:t=!1,submit:a})=>{var r,n;pe();const[s,l]=D.exports.useState(!1),{register:u,handleSubmit:d,setValue:m,getValues:f,watch:p,formState:{dirtyFields:{door:h}}}=Z({defaultValues:i(o({},e),{files:T(e.files,"signed_id")})}),[g,v]=D.exports.useState(),{data:y}=bt(g,{enabled:s}),b=Bt(),E=p("door"),_=null!=(r=e.active_from)?r:he(h?E:e.door),x=null!=(n=e.active_to)?n:ge();return c.createElement("div",{className:"space-y-8"},c.createElement("form",{className:"space-y-4",onSubmit:d((t=>a(i(o({},t),{door:h?E:e.door}))))},c.createElement("div",{className:"space-x-4"},c.createElement(ue,{type:"submit"},"Lagre"),c.createElement(ue,{type:"button",className:"uppercase",onClick:()=>{l((e=>(v(e?void 0:f()),!e)))}},s?"Rediger":"Forhåndsvisning")),c.createElement("div",{className:X("grid grid-cols-3 gap-4",s&&"hidden")},t&&c.createElement(fe,{label:"Luke",className:"col-span-3"},c.createElement("select",o({className:"block form-select",defaultValue:b[0]},u("door",{required:!0})),T(b,(e=>c.createElement("option",{key:e,value:e,label:te(e)}))))),c.createElement(ve,o({label:"Tittel",type:"text",defaultValue:e.title},u("title",{required:!0}))),c.createElement(ve,o({label:"Forfatter",type:"text",defaultValue:e.author},u("author",{required:!0}))),c.createElement(ve,o({label:"Svar",note:"omringende whitespace blir ignorert",type:"text",defaultValue:e.answer},u("answer",{required:!0}))),c.createElement(ve,{label:"Aktiv fra",disabled:!0,type:"datetime-local",value:ye(_)}),c.createElement(ve,{label:"Aktiv til",disabled:!0,type:"datetime-local",value:ye(x)}),c.createElement($t,{challenge:e,register:u,setValue:m,className:"col-span-3"}),c.createElement(fe,{label:"Innhold",note:"tittel-elementet blir erstattet med tittel fra over",className:"col-span-3"},c.createElement(ee,o({className:"block w-full form-textarea",rows:5,defaultValue:e.markdown_content},u("markdown_content",{required:!0})))))),s&&g&&y&&c.createElement(de,{withoutInput:!0,challenge:i(o({},g),{content:y.html})}))}));const Ut=()=>{const{door:e}=ae(),t=parseInt(e),a=R(),{data:r,isLoading:n}=vt(t),{mutate:s}=(()=>{const e=Q();return U(["admin","challenges","update"],(({challenge:e})=>M.patch(`/admin/challenges/${e.door}`,{challenge:e})),{onSuccess:()=>{e.invalidateQueries("challenges"),e.invalidateQueries(["admin","challenges"])}})})();return D.exports.useEffect((()=>{n||r||a.push("/admin/doors/new")}),[n,r,a]),n||!r?null:c.createElement("div",{className:"space-y-8"},c.createElement("div",{className:"text-center"},c.createElement("span",{className:"text-4xl font-semibold"},"Luke ",t)),c.createElement(Ft,{challenge:r,submit:e=>{s({challenge:e},{onSuccess:()=>a.push(`/admin/doors?door=${e.door}`)})}}))};var jt=te,Mt=/^\s+/,Ot=re.parseInt;var Pt=function(e,t,a){return a||null==t?t=0:t&&(t=+t),Ot(jt(e).replace(Mt,""),t||0)};var Qt=D.exports.memo((({serviceMessage:e,newForm:t=!1,submit:a})=>{var r,n,s,l,i;const{register:u,handleSubmit:d,setValue:m}=Z({defaultValues:o(o({},e),!t&&{resolved_at:ye(null!=(r=e.resolved_at)?r:ne(new Date))})}),{data:f}=gt({select:e=>T(se(e),Pt)});return c.createElement("div",{className:"space-y-8"},c.createElement("form",{className:"space-y-4",onSubmit:d(a)},c.createElement("div",{className:"space-x-4"},c.createElement(ue,{type:"submit"},"Lagre")),c.createElement("div",{className:X("grid grid-cols-3 gap-4")},c.createElement(ve,o({label:"Innhold",type:"text",labelClassName:"col-span-3",className:"w-full",defaultValue:e.content},u("content",{required:!0}))),!t&&c.createElement(ve,o({label:"Løsning",type:"text",labelClassName:"col-span-3",className:"w-full",defaultValue:null!=(n=e.resolution_content)?n:""},u("resolution_content",{setValueAs:e=>P(e)?null:e}))),c.createElement(fe,{label:"Luke",className:"col-span-3",defaultValue:null!=(s=e.resolution_content)?s:""},c.createElement("select",o({className:"block form-select",defaultValue:null!=(l=e.door)?l:void 0},u("door",{setValueAs:e=>P(e)?void 0:Pt(e)})),c.createElement("option",{label:"-",value:""}),T(f,(e=>c.createElement("option",{key:e,label:te(e),value:e}))))),!t&&c.createElement(c.Fragment,null,c.createElement(ve,{label:"Opprettet",type:"datetime-local",value:ye(null!=(i=e.created_at)?i:""),disabled:!0}),c.createElement("div",null,c.createElement(ve,o({label:"Løsningstidspunkt",type:"datetime-local"},u("resolved_at"))),c.createElement(ue,{type:"button",className:"!text-xs",onClick:()=>m("resolved_at",null),content:"Nullstill"}))))))}));const Tt=()=>{const{uuid:e}=ae(),t=R(),{data:a,isLoading:r}=be({select:t=>le(t,{uuid:e})}),{mutate:n}=Et();return D.exports.useEffect((()=>{r||a||t.push("/admin/service_messages/new")}),[r,a,t]),r||!a?null:c.createElement("div",{className:"space-y-8"},c.createElement("div",{className:"text-center"},c.createElement("span",{className:"text-4xl font-semibold"},"Endre driftsmelding")),c.createElement(Qt,{serviceMessage:a,submit:a=>{n({uuid:e,service_message:a},{onSuccess:()=>t.push("/admin/service_messages")})}}))},qt=()=>{const e=R(),{mutate:t}=(()=>{const e=Q();return U(["admin","challenges","create"],(({challenge:e})=>M.post("/admin/challenges",{challenge:e})),{onSuccess:()=>{e.invalidateQueries("challenges"),e.invalidateQueries(["admin","challenges"])}})})(),a=Bt();return P(a)?c.createElement("div",{className:"text-center"},c.createElement("span",{className:"text-4xl font-semibold"},"Ingen ledige luker!")):c.createElement("div",{className:"space-y-8"},c.createElement("div",{className:"text-center"},c.createElement("span",{className:"text-4xl font-semibold"},"Ny luke")),c.createElement(Ft,{newForm:!0,challenge:{door:a[0],title:"",author:"",answer:"",markdown_content:"",files:[]},submit:a=>{t({challenge:a},{onSuccess:()=>e.push(`/admin/doors?door=${a.door}`)})}}))},Dt=()=>{const e=R(),{mutate:t}=(()=>{const e=Q();return U(["admin","serviceMessages","create"],(e=>M.post("/admin/service_messages",e)),{onSuccess:()=>{e.invalidateQueries("serviceMessages")}})})();return c.createElement("div",{className:"space-y-8"},c.createElement("div",{className:"text-center"},c.createElement("span",{className:"text-4xl font-semibold"},"Ny driftsmelding")),c.createElement(Qt,{newForm:!0,serviceMessage:{content:"",resolution_content:null,resolved_at:null},submit:a=>{t({service_message:a},{onSuccess:()=>e.push("/admin/service_messages")})}}))},Rt=()=>{const{data:e,isLoading:t}=be(),{mutate:a}=(()=>{const e=Q();return U(["admin","serviceMessages","delete"],(({uuid:e})=>M.delete(`/admin/service_messages/${e}`)),{onSuccess:()=>{e.invalidateQueries("serviceMessages")}})})();return t?null:c.createElement(c.Fragment,null,c.createElement("div",{className:"text-center"},c.createElement("h1",{className:"text-4xl font-semibold"},"Driftsmeldinger")),c.createElement("div",{className:"grid grid-cols-1 gap-6 justify-items-center"},P(e)?c.createElement("div",null,"🎄 Ingen driftsmeldinger. Livet er herlig! 🎄"):T(e,(e=>{const t=e.resolved_at?"border-lightbulb-yellow border-opacity-70 text-gray-700 text-opacity-70":"border-red-700 border-opacity-70";return c.createElement("div",{key:e.uuid,className:"w-full max-w-[40rem]"},c.createElement("div",{className:"m-2 space-x-4"},c.createElement(u,{to:`/admin/service_messages/${e.uuid}/edit`},c.createElement(ue,{content:"Rediger"})),c.createElement(ue,{content:"Slett",onClick:()=>{return t=e.uuid,void(window.confirm("Sikker på at du vil slette driftsmelding?")&&a({uuid:t}));var t}})),c.createElement(Ee,{className:X("border-2 p-4 rounded-md w-full",t),serviceMessage:e}))}))))},zt=()=>c.createElement(_e,{className:"py-12 px-8 md:px-12 mx-4 md:mx-8 bg-gray-100 text-gray-700 rounded-md space-y-8"},c.createElement(xe,null),c.createElement(oe,null,c.createElement(ie,{exact:!0,path:"/admin/doors",component:xt}),c.createElement(ie,{path:"/admin/doors/new",component:qt}),c.createElement(ie,{path:"/admin/doors/:door/edit",component:Ut}),c.createElement(ie,{exact:!0,path:"/admin/service_messages",component:Rt}),c.createElement(ie,{path:"/admin/service_messages/new",component:Dt}),c.createElement(ie,{path:"/admin/service_messages/:uuid/edit",component:Tt}),c.createElement(ce,{to:"/admin/doors"})));export{zt as default};
