import{X as St,Y as It,G as r,M as Se,o as Ie,Z as Tt,L as K,r as S,D as Ze,i as k,_ as Ot,$ as be,a0 as le,a1 as qe,N as Et,e as Pt,R as Nt,a2 as Mt,d as ie,x as L,E as ke,B as J,a3 as $e,Q,y as d,A as G,J as et,F as z,H as tt,P as at,a4 as nt,a5 as te,v as D,a6 as ne,a7 as re,z as Dt,S as kt,a8 as $t,V as At,W as ye,C as j}from"./LmJYVUJX.js";import{b as rt,i as xt,u as ot,g as jt,E as Ae,h as Lt,_ as st,j as Bt,w as Ft,c as zt,e as xe}from"./Cck8h7k-.js";import{_ as Rt}from"./DlAUqK2U.js";var je;const it=typeof window<"u";it&&((je=window==null?void 0:window.navigator)!=null&&je.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Ht(e){return typeof e=="function"?e():r(e)}function Ut(e){return e}function Gt(e){return St()?(It(e),!0):!1}function Wt(e,t=!0){Se()?Ie(e):t?e():Tt(e)}function Vt(e){var t;const a=Ht(e);return(t=a==null?void 0:a.$el)!=null?t:a}const Kt=it?window:void 0;function Qt(e,t=!1){const a=S(),n=()=>a.value=!!e();return n(),Wt(n,t),a}const Le=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Be="__vueuse_ssr_handlers__";Le[Be]=Le[Be]||{};var Fe=Object.getOwnPropertySymbols,Jt=Object.prototype.hasOwnProperty,Yt=Object.prototype.propertyIsEnumerable,Xt=(e,t)=>{var a={};for(var n in e)Jt.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&Fe)for(var n of Fe(e))t.indexOf(n)<0&&Yt.call(e,n)&&(a[n]=e[n]);return a};function Zt(e,t,a={}){const n=a,{window:l=Kt}=n,s=Xt(n,["window"]);let u;const o=Qt(()=>l&&"ResizeObserver"in l),v=()=>{u&&(u.disconnect(),u=void 0)},y=K(()=>Vt(e),_=>{v(),o.value&&l&&_&&(u=new ResizeObserver(t),u.observe(_,s))},{immediate:!0,flush:"post"}),g=()=>{v(),y()};return Gt(g),{isSupported:o,stop:g}}var ze;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(ze||(ze={}));var qt=Object.defineProperty,Re=Object.getOwnPropertySymbols,ea=Object.prototype.hasOwnProperty,ta=Object.prototype.propertyIsEnumerable,He=(e,t,a)=>t in e?qt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,aa=(e,t)=>{for(var a in t||(t={}))ea.call(t,a)&&He(e,a,t[a]);if(Re)for(var a of Re(t))ta.call(t,a)&&He(e,a,t[a]);return e};const na={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};aa({linear:Ut},na);var ra=typeof global=="object"&&global&&global.Object===Object&&global,oa=typeof self=="object"&&self&&self.Object===Object&&self,ue=ra||oa||Function("return this")(),Y=ue.Symbol,lt=Object.prototype,sa=lt.hasOwnProperty,ia=lt.toString,ae=Y?Y.toStringTag:void 0;function la(e){var t=sa.call(e,ae),a=e[ae];try{e[ae]=void 0;var n=!0}catch{}var l=ia.call(e);return n&&(t?e[ae]=a:delete e[ae]),l}var ua=Object.prototype,ca=ua.toString;function da(e){return ca.call(e)}var fa="[object Null]",va="[object Undefined]",Ue=Y?Y.toStringTag:void 0;function ut(e){return e==null?e===void 0?va:fa:Ue&&Ue in Object(e)?la(e):da(e)}function pa(e){return e!=null&&typeof e=="object"}var ha="[object Symbol]";function ce(e){return typeof e=="symbol"||pa(e)&&ut(e)==ha}function ma(e,t){for(var a=-1,n=e==null?0:e.length,l=Array(n);++a<n;)l[a]=t(e[a],a,e);return l}var Te=Array.isArray,ga=1/0,Ge=Y?Y.prototype:void 0,We=Ge?Ge.toString:void 0;function ct(e){if(typeof e=="string")return e;if(Te(e))return ma(e,ct)+"";if(ce(e))return We?We.call(e):"";var t=e+"";return t=="0"&&1/e==-ga?"-0":t}var ba=/\s/;function ya(e){for(var t=e.length;t--&&ba.test(e.charAt(t)););return t}var _a=/^\s+/;function wa(e){return e&&e.slice(0,ya(e)+1).replace(_a,"")}function X(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Ve=NaN,Ca=/^[-+]0x[0-9a-f]+$/i,Sa=/^0b[01]+$/i,Ia=/^0o[0-7]+$/i,Ta=parseInt;function Ke(e){if(typeof e=="number")return e;if(ce(e))return Ve;if(X(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=X(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=wa(e);var a=Sa.test(e);return a||Ia.test(e)?Ta(e.slice(2),a?2:8):Ca.test(e)?Ve:+e}var Oa="[object AsyncFunction]",Ea="[object Function]",Pa="[object GeneratorFunction]",Na="[object Proxy]";function Ma(e){if(!X(e))return!1;var t=ut(e);return t==Ea||t==Pa||t==Oa||t==Na}var _e=ue["__core-js_shared__"],Qe=function(){var e=/[^.]+$/.exec(_e&&_e.keys&&_e.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Da(e){return!!Qe&&Qe in e}var ka=Function.prototype,$a=ka.toString;function Aa(e){if(e!=null){try{return $a.call(e)}catch{}try{return e+""}catch{}}return""}var xa=/[\\^$.*+?()[\]{}|]/g,ja=/^\[object .+?Constructor\]$/,La=Function.prototype,Ba=Object.prototype,Fa=La.toString,za=Ba.hasOwnProperty,Ra=RegExp("^"+Fa.call(za).replace(xa,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Ha(e){if(!X(e)||Da(e))return!1;var t=Ma(e)?Ra:ja;return t.test(Aa(e))}function Ua(e,t){return e==null?void 0:e[t]}function dt(e,t){var a=Ua(e,t);return Ha(a)?a:void 0}function Ga(e,t){return e===t||e!==e&&t!==t}var Wa=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Va=/^\w*$/;function Ka(e,t){if(Te(e))return!1;var a=typeof e;return a=="number"||a=="symbol"||a=="boolean"||e==null||ce(e)?!0:Va.test(e)||!Wa.test(e)||t!=null&&e in Object(t)}var se=dt(Object,"create");function Qa(){this.__data__=se?se(null):{},this.size=0}function Ja(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Ya="__lodash_hash_undefined__",Xa=Object.prototype,Za=Xa.hasOwnProperty;function qa(e){var t=this.__data__;if(se){var a=t[e];return a===Ya?void 0:a}return Za.call(t,e)?t[e]:void 0}var en=Object.prototype,tn=en.hasOwnProperty;function an(e){var t=this.__data__;return se?t[e]!==void 0:tn.call(t,e)}var nn="__lodash_hash_undefined__";function rn(e,t){var a=this.__data__;return this.size+=this.has(e)?0:1,a[e]=se&&t===void 0?nn:t,this}function W(e){var t=-1,a=e==null?0:e.length;for(this.clear();++t<a;){var n=e[t];this.set(n[0],n[1])}}W.prototype.clear=Qa;W.prototype.delete=Ja;W.prototype.get=qa;W.prototype.has=an;W.prototype.set=rn;function on(){this.__data__=[],this.size=0}function de(e,t){for(var a=e.length;a--;)if(Ga(e[a][0],t))return a;return-1}var sn=Array.prototype,ln=sn.splice;function un(e){var t=this.__data__,a=de(t,e);if(a<0)return!1;var n=t.length-1;return a==n?t.pop():ln.call(t,a,1),--this.size,!0}function cn(e){var t=this.__data__,a=de(t,e);return a<0?void 0:t[a][1]}function dn(e){return de(this.__data__,e)>-1}function fn(e,t){var a=this.__data__,n=de(a,e);return n<0?(++this.size,a.push([e,t])):a[n][1]=t,this}function Z(e){var t=-1,a=e==null?0:e.length;for(this.clear();++t<a;){var n=e[t];this.set(n[0],n[1])}}Z.prototype.clear=on;Z.prototype.delete=un;Z.prototype.get=cn;Z.prototype.has=dn;Z.prototype.set=fn;var vn=dt(ue,"Map");function pn(){this.size=0,this.__data__={hash:new W,map:new(vn||Z),string:new W}}function hn(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function fe(e,t){var a=e.__data__;return hn(t)?a[typeof t=="string"?"string":"hash"]:a.map}function mn(e){var t=fe(this,e).delete(e);return this.size-=t?1:0,t}function gn(e){return fe(this,e).get(e)}function bn(e){return fe(this,e).has(e)}function yn(e,t){var a=fe(this,e),n=a.size;return a.set(e,t),this.size+=a.size==n?0:1,this}function V(e){var t=-1,a=e==null?0:e.length;for(this.clear();++t<a;){var n=e[t];this.set(n[0],n[1])}}V.prototype.clear=pn;V.prototype.delete=mn;V.prototype.get=gn;V.prototype.has=bn;V.prototype.set=yn;var _n="Expected a function";function Oe(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(_n);var a=function(){var n=arguments,l=t?t.apply(this,n):n[0],s=a.cache;if(s.has(l))return s.get(l);var u=e.apply(this,n);return a.cache=s.set(l,u)||s,u};return a.cache=new(Oe.Cache||V),a}Oe.Cache=V;var wn=500;function Cn(e){var t=Oe(e,function(n){return a.size===wn&&a.clear(),n}),a=t.cache;return t}var Sn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,In=/\\(\\)?/g,Tn=Cn(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(Sn,function(a,n,l,s){t.push(l?s.replace(In,"$1"):n||a)}),t});function On(e){return e==null?"":ct(e)}function En(e,t){return Te(e)?e:Ka(e,t)?[e]:Tn(On(e))}var Pn=1/0;function Nn(e){if(typeof e=="string"||ce(e))return e;var t=e+"";return t=="0"&&1/e==-Pn?"-0":t}function Mn(e,t){t=En(t,e);for(var a=0,n=t.length;e!=null&&a<n;)e=e[Nn(t[a++])];return a&&a==n?e:void 0}function Dn(e,t,a){var n=e==null?void 0:Mn(e,t);return n===void 0?a:n}var we=function(){return ue.Date.now()},kn="Expected a function",$n=Math.max,An=Math.min;function xn(e,t,a){var n,l,s,u,o,v,y=0,g=!1,_=!1,T=!0;if(typeof e!="function")throw new TypeError(kn);t=Ke(t)||0,X(a)&&(g=!!a.leading,_="maxWait"in a,s=_?$n(Ke(a.maxWait)||0,t):s,T="trailing"in a?!!a.trailing:T);function w(c){var h=n,O=l;return n=l=void 0,y=c,u=e.apply(O,h),u}function E(c){return y=c,o=setTimeout(P,t),g?w(c):u}function B(c){var h=c-v,O=c-y,N=t-h;return _?An(N,s-O):N}function $(c){var h=c-v,O=c-y;return v===void 0||h>=t||h<0||_&&O>=s}function P(){var c=we();if($(c))return M(c);o=setTimeout(P,B(c))}function M(c){return o=void 0,T&&n?w(c):(n=l=void 0,u)}function f(){o!==void 0&&clearTimeout(o),y=0,n=v=l=o=void 0}function p(){return o===void 0?u:M(we())}function C(){var c=we(),h=$(c);if(n=arguments,l=this,v=c,h){if(o===void 0)return E(v);if(_)return clearTimeout(o),o=setTimeout(P,t),w(v)}return o===void 0&&(o=setTimeout(P,t)),u}return C.cancel=f,C.flush=p,C}var jn="Expected a function";function Je(e,t,a){var n=!0,l=!0;if(typeof e!="function")throw new TypeError(jn);return X(a)&&(n="leading"in a?!!a.leading:n,l="trailing"in a?!!a.trailing:l),xn(e,t,{leading:n,maxWait:t,trailing:l})}var Ln={name:"en",el:{breadcrumb:{label:"Breadcrumb"},colorpicker:{confirm:"OK",clear:"Clear",defaultLabel:"color picker",description:"current color is {color}. press enter to select a new color.",alphaLabel:"pick alpha value"},datepicker:{now:"Now",today:"Today",cancel:"Cancel",clear:"Clear",confirm:"OK",dateTablePrompt:"Use the arrow keys and enter to select the day of the month",monthTablePrompt:"Use the arrow keys and enter to select the month",yearTablePrompt:"Use the arrow keys and enter to select the year",selectedDate:"Selected date",selectDate:"Select date",selectTime:"Select time",startDate:"Start Date",startTime:"Start Time",endDate:"End Date",endTime:"End Time",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",year:"",month1:"January",month2:"February",month3:"March",month4:"April",month5:"May",month6:"June",month7:"July",month8:"August",month9:"September",month10:"October",month11:"November",month12:"December",week:"week",weeks:{sun:"Sun",mon:"Mon",tue:"Tue",wed:"Wed",thu:"Thu",fri:"Fri",sat:"Sat"},weeksFull:{sun:"Sunday",mon:"Monday",tue:"Tuesday",wed:"Wednesday",thu:"Thursday",fri:"Friday",sat:"Saturday"},months:{jan:"Jan",feb:"Feb",mar:"Mar",apr:"Apr",may:"May",jun:"Jun",jul:"Jul",aug:"Aug",sep:"Sep",oct:"Oct",nov:"Nov",dec:"Dec"}},inputNumber:{decrease:"decrease number",increase:"increase number"},select:{loading:"Loading",noMatch:"No matching data",noData:"No data",placeholder:"Select"},mention:{loading:"Loading"},dropdown:{toggleDropdown:"Toggle Dropdown"},cascader:{noMatch:"No matching data",loading:"Loading",placeholder:"Select",noData:"No data"},pagination:{goto:"Go to",pagesize:"/page",total:"Total {total}",pageClassifier:"",page:"Page",prev:"Go to previous page",next:"Go to next page",currentPage:"page {pager}",prevPages:"Previous {pager} pages",nextPages:"Next {pager} pages",deprecationWarning:"Deprecated usages detected, please refer to the el-pagination documentation for more details"},dialog:{close:"Close this dialog"},drawer:{close:"Close this dialog"},messagebox:{title:"Message",confirm:"OK",cancel:"Cancel",error:"Illegal input",close:"Close this dialog"},upload:{deleteTip:"press delete to remove",delete:"Delete",preview:"Preview",continue:"Continue"},slider:{defaultLabel:"slider between {min} and {max}",defaultRangeStartLabel:"pick start value",defaultRangeEndLabel:"pick end value"},table:{emptyText:"No Data",confirmFilter:"Confirm",resetFilter:"Reset",clearFilter:"All",sumText:"Sum"},tour:{next:"Next",previous:"Previous",finish:"Finish"},tree:{emptyText:"No Data"},transfer:{noMatch:"No matching data",noData:"No data",titles:["List 1","List 2"],filterPlaceholder:"Enter keyword",noCheckedFormat:"{total} items",hasCheckedFormat:"{checked}/{total} checked"},image:{error:"FAILED"},pageHeader:{title:"Back"},popconfirm:{confirmButtonText:"Yes",cancelButtonText:"No"},carousel:{leftArrow:"Carousel arrow left",rightArrow:"Carousel arrow right",indicator:"Carousel switch to index {index}"}}};const Bn=e=>(t,a)=>Fn(t,a,r(e)),Fn=(e,t,a)=>Dn(a,e,e).replace(/\{(\w+)\}/g,(n,l)=>{var s;return`${(s=t==null?void 0:t[l])!=null?s:`{${l}}`}`}),zn=e=>{const t=k(()=>r(e).name),a=Ot(e)?e:S(e);return{lang:t,locale:a,t:Bn(e)}},Rn=Symbol("localeContextKey"),Hn=e=>{const t=Ze(Rn,S());return zn(k(()=>t.value||Ln))},Un=rt({initialIndex:{type:Number,default:0},height:{type:String,default:""},trigger:{type:String,values:["hover","click"],default:"hover"},autoplay:{type:Boolean,default:!0},interval:{type:Number,default:3e3},indicatorPosition:{type:String,values:["","none","outside"],default:""},arrow:{type:String,values:["always","hover","never"],default:"hover"},type:{type:String,values:["","card"],default:""},cardScale:{type:Number,default:.83},loop:{type:Boolean,default:!0},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},pauseOnHover:{type:Boolean,default:!0},motionBlur:Boolean}),Gn={change:(e,t)=>[e,t].every(xt)},ft=Symbol("carouselContextKey"),Ce="ElCarouselItem",oe=e=>{const t=be(e)?e:[e],a=[];return t.forEach(n=>{var l;be(n)?a.push(...oe(n)):le(n)&&((l=n.component)!=null&&l.subTree)?a.push(n,...oe(n.component.subTree)):le(n)&&be(n.children)?a.push(...oe(n.children)):a.push(n)}),a},Wn=(e,t,a)=>oe(e.subTree).filter(s=>{var u;return le(s)&&((u=s.type)==null?void 0:u.name)===t&&!!s.component}).map(s=>s.component.uid).map(s=>a[s]).filter(s=>!!s),Vn=(e,t)=>{const a={},n=qe([]);return{children:n,addChild:u=>{a[u.uid]=u,n.value=Wn(e,t,a)},removeChild:u=>{delete a[u],n.value=n.value.filter(o=>o.uid!==u)}}},Ye=300,Kn=(e,t,a)=>{const{children:n,addChild:l,removeChild:s}=Vn(Se(),Ce),u=Et(),o=S(-1),v=S(null),y=S(!1),g=S(),_=S(0),T=S(!0),w=S(!0),E=S(!1),B=k(()=>e.arrow!=="never"&&!r(M)),$=k(()=>n.value.some(i=>i.props.label.toString().length>0)),P=k(()=>e.type==="card"),M=k(()=>e.direction==="vertical"),f=k(()=>e.height!=="auto"?{height:e.height}:{height:`${_.value}px`,overflow:"hidden"}),p=Je(i=>{A(i)},Ye,{trailing:!0}),C=Je(i=>{R(i)},Ye),c=i=>T.value?o.value<=1?i<=1:i>1:!0;function h(){v.value&&(clearInterval(v.value),v.value=null)}function O(){e.interval<=0||!e.autoplay||v.value||(v.value=setInterval(()=>N(),e.interval))}const N=()=>{w.value||(E.value=!0),w.value=!1,o.value<n.value.length-1?o.value=o.value+1:e.loop?o.value=0:E.value=!1};function A(i){if(w.value||(E.value=!0),w.value=!1,Mt(i)){const F=n.value.filter(U=>U.props.name===i);F.length>0&&(i=n.value.indexOf(F[0]))}if(i=Number(i),Number.isNaN(i)||i!==Math.floor(i))return;const b=n.value.length,x=o.value;i<0?o.value=e.loop?b-1:0:i>=b?o.value=e.loop?0:b-1:o.value=i,x===o.value&&m(x),Pe()}function m(i){n.value.forEach((b,x)=>{b.translateItem(x,o.value,i)})}function q(i,b){var x,F,U,Ne;const ee=r(n),Me=ee.length;if(Me===0||!i.states.inStage)return!1;const gt=b+1,bt=b-1,De=Me-1,yt=ee[De].states.active,_t=ee[0].states.active,wt=(F=(x=ee[gt])==null?void 0:x.states)==null?void 0:F.active,Ct=(Ne=(U=ee[bt])==null?void 0:U.states)==null?void 0:Ne.active;return b===De&&_t||wt?"left":b===0&&yt||Ct?"right":!1}function ve(){y.value=!0,e.pauseOnHover&&h()}function pe(){y.value=!1,O()}function he(){E.value=!1}function I(i){r(M)||n.value.forEach((b,x)=>{i===q(b,x)&&(b.states.hover=!0)})}function Ee(){r(M)||n.value.forEach(i=>{i.states.hover=!1})}function H(i){i!==o.value&&(w.value||(E.value=!0)),o.value=i}function R(i){e.trigger==="hover"&&i!==o.value&&(o.value=i,w.value||(E.value=!0))}function me(){A(o.value-1)}function pt(){A(o.value+1)}function Pe(){h(),e.pauseOnHover||O()}function ht(i){e.height==="auto"&&(_.value=i)}function mt(){var i;const b=(i=u.default)==null?void 0:i.call(u);if(!b)return null;const F=oe(b).filter(U=>le(U)&&U.type.name===Ce);return(F==null?void 0:F.length)===2&&e.loop&&!P.value?(T.value=!0,F):(T.value=!1,null)}K(()=>o.value,(i,b)=>{m(b),T.value&&(i=i%2,b=b%2),b>-1&&t("change",i,b)}),K(()=>e.autoplay,i=>{i?O():h()}),K(()=>e.loop,()=>{A(o.value)}),K(()=>e.interval,()=>{Pe()});const ge=qe();return Ie(()=>{K(()=>n.value,()=>{n.value.length>0&&A(e.initialIndex)},{immediate:!0}),ge.value=Zt(g.value,()=>{m()}),O()}),Pt(()=>{h(),g.value&&ge.value&&ge.value.stop()}),Nt(ft,{root:g,isCardType:P,isVertical:M,items:n,loop:e.loop,cardScale:e.cardScale,addItem:l,removeItem:s,setActiveItem:A,setContainerHeight:ht}),{root:g,activeIndex:o,arrowDisplay:B,hasLabel:$,hover:y,isCardType:P,isTransitioning:E,items:n,isVertical:M,containerStyle:f,isItemsTwoLength:T,handleButtonEnter:I,handleTransitionEnd:he,handleButtonLeave:Ee,handleIndicatorClick:H,handleMouseEnter:ve,handleMouseLeave:pe,setActiveItem:A,prev:me,next:pt,PlaceholderItem:mt,isTwoLengthShow:c,throttledArrowClick:p,throttledIndicatorHover:C}},Qn="ElCarousel",Jn=ie({name:Qn}),Yn=ie({...Jn,props:Un,emits:Gn,setup(e,{expose:t,emit:a}){const n=e,{root:l,activeIndex:s,arrowDisplay:u,hasLabel:o,hover:v,isCardType:y,items:g,isVertical:_,containerStyle:T,handleButtonEnter:w,handleButtonLeave:E,isTransitioning:B,handleIndicatorClick:$,handleMouseEnter:P,handleMouseLeave:M,handleTransitionEnd:f,setActiveItem:p,prev:C,next:c,PlaceholderItem:h,isTwoLengthShow:O,throttledArrowClick:N,throttledIndicatorHover:A}=Kn(n,a),m=ot("carousel"),{t:q}=Hn(),ve=k(()=>{const I=[m.b(),m.m(n.direction)];return r(y)&&I.push(m.m("card")),I}),pe=k(()=>{const I=[m.e("container")];return n.motionBlur&&r(B)&&g.value.length>1&&I.push(r(_)?`${m.namespace.value}-transitioning-vertical`:`${m.namespace.value}-transitioning`),I}),he=k(()=>{const I=[m.e("indicators"),m.em("indicators",n.direction)];return r(o)&&I.push(m.em("indicators","labels")),n.indicatorPosition==="outside"&&I.push(m.em("indicators","outside")),r(_)&&I.push(m.em("indicators","right")),I});return t({activeIndex:s,setActiveItem:p,prev:C,next:c}),(I,Ee)=>(D(),L("div",{ref_key:"root",ref:l,class:z(r(ve)),onMouseenter:te(r(P),["stop"]),onMouseleave:te(r(M),["stop"])},[r(u)?(D(),ke($e,{key:0,name:"carousel-arrow-left",persisted:""},{default:J(()=>[ne(d("button",{type:"button",class:z([r(m).e("arrow"),r(m).em("arrow","left")]),"aria-label":r(q)("el.carousel.leftArrow"),onMouseenter:H=>r(w)("left"),onMouseleave:r(E),onClick:te(H=>r(N)(r(s)-1),["stop"])},[G(r(Ae),null,{default:J(()=>[G(r(jt))]),_:1})],42,["aria-label","onMouseenter","onMouseleave","onClick"]),[[re,(I.arrow==="always"||r(v))&&(n.loop||r(s)>0)]])]),_:1})):Q("v-if",!0),r(u)?(D(),ke($e,{key:1,name:"carousel-arrow-right",persisted:""},{default:J(()=>[ne(d("button",{type:"button",class:z([r(m).e("arrow"),r(m).em("arrow","right")]),"aria-label":r(q)("el.carousel.rightArrow"),onMouseenter:H=>r(w)("right"),onMouseleave:r(E),onClick:te(H=>r(N)(r(s)+1),["stop"])},[G(r(Ae),null,{default:J(()=>[G(r(Lt))]),_:1})],42,["aria-label","onMouseenter","onMouseleave","onClick"]),[[re,(I.arrow==="always"||r(v))&&(n.loop||r(s)<r(g).length-1)]])]),_:1})):Q("v-if",!0),d("div",{class:z(r(pe)),style:tt(r(T)),onTransitionend:r(f)},[G(r(h)),et(I.$slots,"default")],46,["onTransitionend"]),I.indicatorPosition!=="none"?(D(),L("ul",{key:2,class:z(r(he))},[(D(!0),L(at,null,nt(r(g),(H,R)=>ne((D(),L("li",{key:R,class:z([r(m).e("indicator"),r(m).em("indicator",I.direction),r(m).is("active",R===r(s))]),onMouseenter:me=>r(A)(R),onClick:te(me=>r($)(R),["stop"])},[d("button",{class:z(r(m).e("button")),"aria-label":r(q)("el.carousel.indicator",{index:R+1})},[r(o)?(D(),L("span",{key:0},Dt(H.props.label),1)):Q("v-if",!0)],10,["aria-label"])],42,["onMouseenter","onClick"])),[[re,r(O)(R)]])),128))],2)):Q("v-if",!0),n.motionBlur?(D(),L("svg",{key:3,xmlns:"http://www.w3.org/2000/svg",version:"1.1",style:{display:"none"}},[d("defs",null,[d("filter",{id:"elCarouselHorizontal"},[d("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"12,0"})]),d("filter",{id:"elCarouselVertical"},[d("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"0,10"})])])])):Q("v-if",!0)],42,["onMouseenter","onMouseleave"]))}});var Xn=st(Yn,[["__file","carousel.vue"]]);const Zn=rt({name:{type:String,default:""},label:{type:[String,Number],default:""}}),qn=e=>{const t=Ze(ft),a=Se(),n=S(),l=S(!1),s=S(0),u=S(1),o=S(!1),v=S(!1),y=S(!1),g=S(!1),{isCardType:_,isVertical:T,cardScale:w}=t;function E(f,p,C){const c=C-1,h=p-1,O=p+1,N=C/2;return p===0&&f===c?-1:p===c&&f===0?C:f<h&&p-f>=N?C+1:f>O&&f-p>=N?-2:f}function B(f,p){var C,c;const h=r(T)?((C=t.root.value)==null?void 0:C.offsetHeight)||0:((c=t.root.value)==null?void 0:c.offsetWidth)||0;return y.value?h*((2-w)*(f-p)+1)/4:f<p?-(1+w)*h/4:(3+w)*h/4}function $(f,p,C){const c=t.root.value;return c?((C?c.offsetHeight:c.offsetWidth)||0)*(f-p):0}const P=(f,p,C)=>{var c;const h=r(_),O=(c=t.items.value.length)!=null?c:Number.NaN,N=f===p;!h&&!Bt(C)&&(g.value=N||f===C),!N&&O>2&&t.loop&&(f=E(f,p,O));const A=r(T);o.value=N,h?(y.value=Math.round(Math.abs(f-p))<=1,s.value=B(f,p),u.value=r(o)?1:w):s.value=$(f,p,A),v.value=!0,N&&n.value&&t.setContainerHeight(n.value.offsetHeight)};function M(){if(t&&r(_)){const f=t.items.value.findIndex(({uid:p})=>p===a.uid);t.setActiveItem(f)}}return Ie(()=>{t.addItem({props:e,states:kt({hover:l,translate:s,scale:u,active:o,ready:v,inStage:y,animating:g}),uid:a.uid,translateItem:P})}),$t(()=>{t.removeItem(a.uid)}),{carouselItemRef:n,active:o,animating:g,hover:l,inStage:y,isVertical:T,translate:s,isCardType:_,scale:u,ready:v,handleItemClick:M}},er=ie({name:Ce}),tr=ie({...er,props:Zn,setup(e){const t=e,a=ot("carousel"),{carouselItemRef:n,active:l,animating:s,hover:u,inStage:o,isVertical:v,translate:y,isCardType:g,scale:_,ready:T,handleItemClick:w}=qn(t),E=k(()=>[a.e("item"),a.is("active",l.value),a.is("in-stage",o.value),a.is("hover",u.value),a.is("animating",s.value),{[a.em("item","card")]:g.value,[a.em("item","card-vertical")]:g.value&&v.value}]),B=k(()=>{const P=`${`translate${r(v)?"Y":"X"}`}(${r(y)}px)`,M=`scale(${r(_)})`;return{transform:[P,M].join(" ")}});return($,P)=>ne((D(),L("div",{ref_key:"carouselItemRef",ref:n,class:z(r(E)),style:tt(r(B)),onClick:r(w)},[r(g)?ne((D(),L("div",{key:0,class:z(r(a).e("mask"))},null,2)),[[re,!r(l)]]):Q("v-if",!0),et($.$slots,"default")],14,["onClick"])),[[re,r(T)]])}});var vt=st(tr,[["__file","carousel-item.vue"]]);const ar=Ft(Xn,{CarouselItem:vt}),nr=zt(vt),Xe=At("/image/sofia.png"),rr={class:"home"},or={class:"about"},sr={class:"dgimg"},ir=["src"],lr=ie({__name:"index",setup(e){const t=()=>{const n=window.location.href+"chan";window.open(n,"_self")};return(a,n)=>{const l=nr,s=ar;return D(),L("div",rr,[n[8]||(n[8]=ye('<div class="image-container" data-v-7ebe2fbd><img src="'+Xe+'" alt="Background Image" class="background-image" data-v-7ebe2fbd><div class="overlay" data-v-7ebe2fbd><p class="title" data-v-7ebe2fbd>SZU</p><p class="subtitle" data-v-7ebe2fbd>Database Group</p><p class="subtitle2" data-v-7ebe2fbd>About the Database Group</p></div></div>',1)),d("div",or,[d("div",sr,[G(s,{width:"788px",height:"460px",direction:"vertical"},{default:J(()=>[(D(),L(at,null,nt(5,u=>G(l,{key:u},{default:J(()=>[d("img",{src:`/academicpage/image/${u}.png`,alt:"",style:{width:"100%",height:"100%"}},null,8,ir)]),_:2},1024)),64))]),_:1})]),n[0]||(n[0]=d("div",{class:"dgoverlay"},null,-1)),n[1]||(n[1]=d("p",{class:"dgWord"},[j(" This database group is affiliated with Big Data Institude (led by Prof. (Joshua) Zhexue Huang) in Shenzhen University.Currently, we have the following directions： "),d("br"),d("br"),d("span",{class:"dgword"},[j(" Efficient Algorithms for Geographic Information Systems"),d("br"),j(" Efficient Algorithms for Large-scale Data Visualization"),d("br"),j(" Efficient Query Processing for Spatial/Graph Databases"),d("br"),j(" Distributed Algorithms for Spatial/Graph Databases"),d("br"),j(" Development of Efficient Software Packages and System Prototypes ")]),d("br"),d("br"),j(" In this group, we have published many papers in top-tier conferences and journals in the database/data management field, including SIGMOD, PVLDB, ICDE, TODS, VLDBJ, and TKDE. ")],-1))]),d("div",{class:"member"},[n[3]||(n[3]=d("div",{class:"ellipse"},null,-1)),n[4]||(n[4]=d("p",{class:"mtitle"},"Faculty Members",-1)),n[5]||(n[5]=d("div",{class:"line1"},null,-1)),n[6]||(n[6]=d("div",{class:"line2"},null,-1)),d("div",{class:"teacher1",onClick:t},n[2]||(n[2]=[d("div",{class:"teacherbg"},[d("p",{class:"tname"},"Prof. Tsz Nam Chan"),d("p",{class:"tintro"},[j(" Distinguished Professor"),d("br"),j(" BEng, PhD PolyU (HK), SrMIEEE, MACM"),d("br"),j(" NSF for Excellent Young Scientists (Overseas) ")])],-1),d("img",{src:xe,alt:"",class:"teacherimg"},null,-1)])),n[7]||(n[7]=ye('<div class="teacher2" data-v-7ebe2fbd><div class="teacherbg" data-v-7ebe2fbd><p class="tname" data-v-7ebe2fbd>Dr. Dingming Wu</p><p class="tintro" data-v-7ebe2fbd> Associate Professor<br data-v-7ebe2fbd> B. Sc. HUST, M. Sc. PKU, Ph. D. AAU (DK) </p></div><img src="'+xe+'" alt="" class="teacherimg" data-v-7ebe2fbd></div>',1))]),n[9]||(n[9]=ye('<div class="recruitment" data-v-7ebe2fbd><div class="recruitmentbg" data-v-7ebe2fbd></div><p class="rtitle" data-v-7ebe2fbd>Recruitment</p><p class="rintro" data-v-7ebe2fbd> Our database group is now hiring an assistant professor and an associate researcher (副研究员). Interested applicants<br data-v-7ebe2fbd><br data-v-7ebe2fbd> (1) should have strong academic background in database research or other related fields (e.g., publish papers in prestigious conferences and journals (e.g., CCF: A and CSranking)<br data-v-7ebe2fbd><br data-v-7ebe2fbd> (2) must show independent research skills and<br data-v-7ebe2fbd><br data-v-7ebe2fbd> (3) must show strong presentation skills. Applicants who successfully join this research group are expected to work with us and other members in Big Data Institute. </p><p class="rinvite" data-v-7ebe2fbd> If you are interested in joining us, please contact us via these two email addresses, which are <span style="color:#0072CB;" data-v-7ebe2fbd>(1) edisonchan2013928@gmail.com (Dr. Tsz Nam Chan)</span> and <span style="color:#0072CB;" data-v-7ebe2fbd>(2) dingming.wu@gmail.com (Dr. Dingming Wu).</span></p><p class="rsubtitle" data-v-7ebe2fbd>Welcome to the Database Group in Shenzhen University (SZU).</p><img src="'+Xe+'" alt="" class="rimg" data-v-7ebe2fbd></div>',1))])}}}),fr=Rt(lr,[["__scopeId","data-v-7ebe2fbd"]]);export{fr as default};
