import{H as Ct,I as It,J as r,K as Ce,o as Ie,L as St,M as V,r as I,N as Ye,i as $,O as Tt,P as be,Q as le,R as Xe,S as Ot,e as Et,T as Pt,U as Nt,d as ie,x as L,V as De,B as J,W as ke,F as Q,y as u,A as G,X as Ze,G as z,Y as qe,Z as et,_ as tt,$ as te,v as k,a0 as ne,a1 as re,z as Mt,a2 as Dt,a3 as kt,D as at,E as $e,C as D}from"./DONxu-aI.js";import{b as nt,i as $t,u as rt,a as At,E as Ae,c as xt,d as ot,e as jt,w as Lt,f as Bt,_ as Ft}from"./Candn5L5.js";import{_ as zt}from"./DBH9MV3T.js";import{_ as Rt}from"./BB7t7v4c.js";import{_ as Ut}from"./DlAUqK2U.js";var xe;const st=typeof window<"u";st&&((xe=window==null?void 0:window.navigator)!=null&&xe.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Ht(e){return typeof e=="function"?e():r(e)}function Gt(e){return e}function Wt(e){return Ct()?(It(e),!0):!1}function Kt(e,t=!0){Ce()?Ie(e):t?e():St(e)}function Vt(e){var t;const a=Ht(e);return(t=a==null?void 0:a.$el)!=null?t:a}const Qt=st?window:void 0;function Jt(e,t=!1){const a=I(),n=()=>a.value=!!e();return n(),Kt(n,t),a}const je=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Le="__vueuse_ssr_handlers__";je[Le]=je[Le]||{};var Be=Object.getOwnPropertySymbols,Yt=Object.prototype.hasOwnProperty,Xt=Object.prototype.propertyIsEnumerable,Zt=(e,t)=>{var a={};for(var n in e)Yt.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&Be)for(var n of Be(e))t.indexOf(n)<0&&Xt.call(e,n)&&(a[n]=e[n]);return a};function qt(e,t,a={}){const n=a,{window:o=Qt}=n,i=Zt(n,["window"]);let c;const s=Jt(()=>o&&"ResizeObserver"in o),p=()=>{c&&(c.disconnect(),c=void 0)},y=V(()=>Vt(e),_=>{p(),s.value&&o&&_&&(c=new ResizeObserver(t),c.observe(_,i))},{immediate:!0,flush:"post"}),g=()=>{p(),y()};return Wt(g),{isSupported:s,stop:g}}var Fe;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Fe||(Fe={}));var ea=Object.defineProperty,ze=Object.getOwnPropertySymbols,ta=Object.prototype.hasOwnProperty,aa=Object.prototype.propertyIsEnumerable,Re=(e,t,a)=>t in e?ea(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,na=(e,t)=>{for(var a in t||(t={}))ta.call(t,a)&&Re(e,a,t[a]);if(ze)for(var a of ze(t))aa.call(t,a)&&Re(e,a,t[a]);return e};const ra={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};na({linear:Gt},ra);var oa=typeof global=="object"&&global&&global.Object===Object&&global,sa=typeof self=="object"&&self&&self.Object===Object&&self,ue=oa||sa||Function("return this")(),Y=ue.Symbol,it=Object.prototype,ia=it.hasOwnProperty,la=it.toString,ae=Y?Y.toStringTag:void 0;function ua(e){var t=ia.call(e,ae),a=e[ae];try{e[ae]=void 0;var n=!0}catch{}var o=la.call(e);return n&&(t?e[ae]=a:delete e[ae]),o}var ca=Object.prototype,da=ca.toString;function fa(e){return da.call(e)}var pa="[object Null]",va="[object Undefined]",Ue=Y?Y.toStringTag:void 0;function lt(e){return e==null?e===void 0?va:pa:Ue&&Ue in Object(e)?ua(e):fa(e)}function ha(e){return e!=null&&typeof e=="object"}var ma="[object Symbol]";function ce(e){return typeof e=="symbol"||ha(e)&&lt(e)==ma}function ga(e,t){for(var a=-1,n=e==null?0:e.length,o=Array(n);++a<n;)o[a]=t(e[a],a,e);return o}var Se=Array.isArray,ba=1/0,He=Y?Y.prototype:void 0,Ge=He?He.toString:void 0;function ut(e){if(typeof e=="string")return e;if(Se(e))return ga(e,ut)+"";if(ce(e))return Ge?Ge.call(e):"";var t=e+"";return t=="0"&&1/e==-ba?"-0":t}var ya=/\s/;function _a(e){for(var t=e.length;t--&&ya.test(e.charAt(t)););return t}var wa=/^\s+/;function Ca(e){return e&&e.slice(0,_a(e)+1).replace(wa,"")}function X(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var We=NaN,Ia=/^[-+]0x[0-9a-f]+$/i,Sa=/^0b[01]+$/i,Ta=/^0o[0-7]+$/i,Oa=parseInt;function Ke(e){if(typeof e=="number")return e;if(ce(e))return We;if(X(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=X(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Ca(e);var a=Sa.test(e);return a||Ta.test(e)?Oa(e.slice(2),a?2:8):Ia.test(e)?We:+e}var Ea="[object AsyncFunction]",Pa="[object Function]",Na="[object GeneratorFunction]",Ma="[object Proxy]";function Da(e){if(!X(e))return!1;var t=lt(e);return t==Pa||t==Na||t==Ea||t==Ma}var ye=ue["__core-js_shared__"],Ve=function(){var e=/[^.]+$/.exec(ye&&ye.keys&&ye.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function ka(e){return!!Ve&&Ve in e}var $a=Function.prototype,Aa=$a.toString;function xa(e){if(e!=null){try{return Aa.call(e)}catch{}try{return e+""}catch{}}return""}var ja=/[\\^$.*+?()[\]{}|]/g,La=/^\[object .+?Constructor\]$/,Ba=Function.prototype,Fa=Object.prototype,za=Ba.toString,Ra=Fa.hasOwnProperty,Ua=RegExp("^"+za.call(Ra).replace(ja,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Ha(e){if(!X(e)||ka(e))return!1;var t=Da(e)?Ua:La;return t.test(xa(e))}function Ga(e,t){return e==null?void 0:e[t]}function ct(e,t){var a=Ga(e,t);return Ha(a)?a:void 0}function Wa(e,t){return e===t||e!==e&&t!==t}var Ka=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Va=/^\w*$/;function Qa(e,t){if(Se(e))return!1;var a=typeof e;return a=="number"||a=="symbol"||a=="boolean"||e==null||ce(e)?!0:Va.test(e)||!Ka.test(e)||t!=null&&e in Object(t)}var se=ct(Object,"create");function Ja(){this.__data__=se?se(null):{},this.size=0}function Ya(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Xa="__lodash_hash_undefined__",Za=Object.prototype,qa=Za.hasOwnProperty;function en(e){var t=this.__data__;if(se){var a=t[e];return a===Xa?void 0:a}return qa.call(t,e)?t[e]:void 0}var tn=Object.prototype,an=tn.hasOwnProperty;function nn(e){var t=this.__data__;return se?t[e]!==void 0:an.call(t,e)}var rn="__lodash_hash_undefined__";function on(e,t){var a=this.__data__;return this.size+=this.has(e)?0:1,a[e]=se&&t===void 0?rn:t,this}function W(e){var t=-1,a=e==null?0:e.length;for(this.clear();++t<a;){var n=e[t];this.set(n[0],n[1])}}W.prototype.clear=Ja;W.prototype.delete=Ya;W.prototype.get=en;W.prototype.has=nn;W.prototype.set=on;function sn(){this.__data__=[],this.size=0}function de(e,t){for(var a=e.length;a--;)if(Wa(e[a][0],t))return a;return-1}var ln=Array.prototype,un=ln.splice;function cn(e){var t=this.__data__,a=de(t,e);if(a<0)return!1;var n=t.length-1;return a==n?t.pop():un.call(t,a,1),--this.size,!0}function dn(e){var t=this.__data__,a=de(t,e);return a<0?void 0:t[a][1]}function fn(e){return de(this.__data__,e)>-1}function pn(e,t){var a=this.__data__,n=de(a,e);return n<0?(++this.size,a.push([e,t])):a[n][1]=t,this}function Z(e){var t=-1,a=e==null?0:e.length;for(this.clear();++t<a;){var n=e[t];this.set(n[0],n[1])}}Z.prototype.clear=sn;Z.prototype.delete=cn;Z.prototype.get=dn;Z.prototype.has=fn;Z.prototype.set=pn;var vn=ct(ue,"Map");function hn(){this.size=0,this.__data__={hash:new W,map:new(vn||Z),string:new W}}function mn(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function fe(e,t){var a=e.__data__;return mn(t)?a[typeof t=="string"?"string":"hash"]:a.map}function gn(e){var t=fe(this,e).delete(e);return this.size-=t?1:0,t}function bn(e){return fe(this,e).get(e)}function yn(e){return fe(this,e).has(e)}function _n(e,t){var a=fe(this,e),n=a.size;return a.set(e,t),this.size+=a.size==n?0:1,this}function K(e){var t=-1,a=e==null?0:e.length;for(this.clear();++t<a;){var n=e[t];this.set(n[0],n[1])}}K.prototype.clear=hn;K.prototype.delete=gn;K.prototype.get=bn;K.prototype.has=yn;K.prototype.set=_n;var wn="Expected a function";function Te(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(wn);var a=function(){var n=arguments,o=t?t.apply(this,n):n[0],i=a.cache;if(i.has(o))return i.get(o);var c=e.apply(this,n);return a.cache=i.set(o,c)||i,c};return a.cache=new(Te.Cache||K),a}Te.Cache=K;var Cn=500;function In(e){var t=Te(e,function(n){return a.size===Cn&&a.clear(),n}),a=t.cache;return t}var Sn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Tn=/\\(\\)?/g,On=In(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(Sn,function(a,n,o,i){t.push(o?i.replace(Tn,"$1"):n||a)}),t});function En(e){return e==null?"":ut(e)}function Pn(e,t){return Se(e)?e:Qa(e,t)?[e]:On(En(e))}var Nn=1/0;function Mn(e){if(typeof e=="string"||ce(e))return e;var t=e+"";return t=="0"&&1/e==-Nn?"-0":t}function Dn(e,t){t=Pn(t,e);for(var a=0,n=t.length;e!=null&&a<n;)e=e[Mn(t[a++])];return a&&a==n?e:void 0}function kn(e,t,a){var n=e==null?void 0:Dn(e,t);return n===void 0?a:n}var _e=function(){return ue.Date.now()},$n="Expected a function",An=Math.max,xn=Math.min;function jn(e,t,a){var n,o,i,c,s,p,y=0,g=!1,_=!1,T=!0;if(typeof e!="function")throw new TypeError($n);t=Ke(t)||0,X(a)&&(g=!!a.leading,_="maxWait"in a,i=_?An(Ke(a.maxWait)||0,t):i,T="trailing"in a?!!a.trailing:T);function w(d){var h=n,O=o;return n=o=void 0,y=d,c=e.apply(O,h),c}function E(d){return y=d,s=setTimeout(P,t),g?w(d):c}function B(d){var h=d-p,O=d-y,N=t-h;return _?xn(N,i-O):N}function A(d){var h=d-p,O=d-y;return p===void 0||h>=t||h<0||_&&O>=i}function P(){var d=_e();if(A(d))return M(d);s=setTimeout(P,B(d))}function M(d){return s=void 0,T&&n?w(d):(n=o=void 0,c)}function f(){s!==void 0&&clearTimeout(s),y=0,n=p=o=s=void 0}function v(){return s===void 0?c:M(_e())}function C(){var d=_e(),h=A(d);if(n=arguments,o=this,p=d,h){if(s===void 0)return E(p);if(_)return clearTimeout(s),s=setTimeout(P,t),w(p)}return s===void 0&&(s=setTimeout(P,t)),c}return C.cancel=f,C.flush=v,C}var Ln="Expected a function";function Qe(e,t,a){var n=!0,o=!0;if(typeof e!="function")throw new TypeError(Ln);return X(a)&&(n="leading"in a?!!a.leading:n,o="trailing"in a?!!a.trailing:o),jn(e,t,{leading:n,maxWait:t,trailing:o})}var Bn={name:"en",el:{breadcrumb:{label:"Breadcrumb"},colorpicker:{confirm:"OK",clear:"Clear",defaultLabel:"color picker",description:"current color is {color}. press enter to select a new color.",alphaLabel:"pick alpha value"},datepicker:{now:"Now",today:"Today",cancel:"Cancel",clear:"Clear",confirm:"OK",dateTablePrompt:"Use the arrow keys and enter to select the day of the month",monthTablePrompt:"Use the arrow keys and enter to select the month",yearTablePrompt:"Use the arrow keys and enter to select the year",selectedDate:"Selected date",selectDate:"Select date",selectTime:"Select time",startDate:"Start Date",startTime:"Start Time",endDate:"End Date",endTime:"End Time",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",year:"",month1:"January",month2:"February",month3:"March",month4:"April",month5:"May",month6:"June",month7:"July",month8:"August",month9:"September",month10:"October",month11:"November",month12:"December",week:"week",weeks:{sun:"Sun",mon:"Mon",tue:"Tue",wed:"Wed",thu:"Thu",fri:"Fri",sat:"Sat"},weeksFull:{sun:"Sunday",mon:"Monday",tue:"Tuesday",wed:"Wednesday",thu:"Thursday",fri:"Friday",sat:"Saturday"},months:{jan:"Jan",feb:"Feb",mar:"Mar",apr:"Apr",may:"May",jun:"Jun",jul:"Jul",aug:"Aug",sep:"Sep",oct:"Oct",nov:"Nov",dec:"Dec"}},inputNumber:{decrease:"decrease number",increase:"increase number"},select:{loading:"Loading",noMatch:"No matching data",noData:"No data",placeholder:"Select"},mention:{loading:"Loading"},dropdown:{toggleDropdown:"Toggle Dropdown"},cascader:{noMatch:"No matching data",loading:"Loading",placeholder:"Select",noData:"No data"},pagination:{goto:"Go to",pagesize:"/page",total:"Total {total}",pageClassifier:"",page:"Page",prev:"Go to previous page",next:"Go to next page",currentPage:"page {pager}",prevPages:"Previous {pager} pages",nextPages:"Next {pager} pages",deprecationWarning:"Deprecated usages detected, please refer to the el-pagination documentation for more details"},dialog:{close:"Close this dialog"},drawer:{close:"Close this dialog"},messagebox:{title:"Message",confirm:"OK",cancel:"Cancel",error:"Illegal input",close:"Close this dialog"},upload:{deleteTip:"press delete to remove",delete:"Delete",preview:"Preview",continue:"Continue"},slider:{defaultLabel:"slider between {min} and {max}",defaultRangeStartLabel:"pick start value",defaultRangeEndLabel:"pick end value"},table:{emptyText:"No Data",confirmFilter:"Confirm",resetFilter:"Reset",clearFilter:"All",sumText:"Sum"},tour:{next:"Next",previous:"Previous",finish:"Finish"},tree:{emptyText:"No Data"},transfer:{noMatch:"No matching data",noData:"No data",titles:["List 1","List 2"],filterPlaceholder:"Enter keyword",noCheckedFormat:"{total} items",hasCheckedFormat:"{checked}/{total} checked"},image:{error:"FAILED"},pageHeader:{title:"Back"},popconfirm:{confirmButtonText:"Yes",cancelButtonText:"No"},carousel:{leftArrow:"Carousel arrow left",rightArrow:"Carousel arrow right",indicator:"Carousel switch to index {index}"}}};const Fn=e=>(t,a)=>zn(t,a,r(e)),zn=(e,t,a)=>kn(a,e,e).replace(/\{(\w+)\}/g,(n,o)=>{var i;return`${(i=t==null?void 0:t[o])!=null?i:`{${o}}`}`}),Rn=e=>{const t=$(()=>r(e).name),a=Tt(e)?e:I(e);return{lang:t,locale:a,t:Fn(e)}},Un=Symbol("localeContextKey"),Hn=e=>{const t=Ye(Un,I());return Rn($(()=>t.value||Bn))},Gn=nt({initialIndex:{type:Number,default:0},height:{type:String,default:""},trigger:{type:String,values:["hover","click"],default:"hover"},autoplay:{type:Boolean,default:!0},interval:{type:Number,default:3e3},indicatorPosition:{type:String,values:["","none","outside"],default:""},arrow:{type:String,values:["always","hover","never"],default:"hover"},type:{type:String,values:["","card"],default:""},cardScale:{type:Number,default:.83},loop:{type:Boolean,default:!0},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},pauseOnHover:{type:Boolean,default:!0},motionBlur:Boolean}),Wn={change:(e,t)=>[e,t].every($t)},dt=Symbol("carouselContextKey"),we="ElCarouselItem",oe=e=>{const t=be(e)?e:[e],a=[];return t.forEach(n=>{var o;be(n)?a.push(...oe(n)):le(n)&&((o=n.component)!=null&&o.subTree)?a.push(n,...oe(n.component.subTree)):le(n)&&be(n.children)?a.push(...oe(n.children)):a.push(n)}),a},Kn=(e,t,a)=>oe(e.subTree).filter(i=>{var c;return le(i)&&((c=i.type)==null?void 0:c.name)===t&&!!i.component}).map(i=>i.component.uid).map(i=>a[i]).filter(i=>!!i),Vn=(e,t)=>{const a={},n=Xe([]);return{children:n,addChild:c=>{a[c.uid]=c,n.value=Kn(e,t,a)},removeChild:c=>{delete a[c],n.value=n.value.filter(s=>s.uid!==c)}}},Je=300,Qn=(e,t,a)=>{const{children:n,addChild:o,removeChild:i}=Vn(Ce(),we),c=Ot(),s=I(-1),p=I(null),y=I(!1),g=I(),_=I(0),T=I(!0),w=I(!0),E=I(!1),B=$(()=>e.arrow!=="never"&&!r(M)),A=$(()=>n.value.some(l=>l.props.label.toString().length>0)),P=$(()=>e.type==="card"),M=$(()=>e.direction==="vertical"),f=$(()=>e.height!=="auto"?{height:e.height}:{height:`${_.value}px`,overflow:"hidden"}),v=Qe(l=>{x(l)},Je,{trailing:!0}),C=Qe(l=>{R(l)},Je),d=l=>T.value?s.value<=1?l<=1:l>1:!0;function h(){p.value&&(clearInterval(p.value),p.value=null)}function O(){e.interval<=0||!e.autoplay||p.value||(p.value=setInterval(()=>N(),e.interval))}const N=()=>{w.value||(E.value=!0),w.value=!1,s.value<n.value.length-1?s.value=s.value+1:e.loop?s.value=0:E.value=!1};function x(l){if(w.value||(E.value=!0),w.value=!1,Nt(l)){const F=n.value.filter(H=>H.props.name===l);F.length>0&&(l=n.value.indexOf(F[0]))}if(l=Number(l),Number.isNaN(l)||l!==Math.floor(l))return;const b=n.value.length,j=s.value;l<0?s.value=e.loop?b-1:0:l>=b?s.value=e.loop?0:b-1:s.value=l,j===s.value&&m(j),Ee()}function m(l){n.value.forEach((b,j)=>{b.translateItem(j,s.value,l)})}function q(l,b){var j,F,H,Pe;const ee=r(n),Ne=ee.length;if(Ne===0||!l.states.inStage)return!1;const mt=b+1,gt=b-1,Me=Ne-1,bt=ee[Me].states.active,yt=ee[0].states.active,_t=(F=(j=ee[mt])==null?void 0:j.states)==null?void 0:F.active,wt=(Pe=(H=ee[gt])==null?void 0:H.states)==null?void 0:Pe.active;return b===Me&&yt||_t?"left":b===0&&bt||wt?"right":!1}function pe(){y.value=!0,e.pauseOnHover&&h()}function ve(){y.value=!1,O()}function he(){E.value=!1}function S(l){r(M)||n.value.forEach((b,j)=>{l===q(b,j)&&(b.states.hover=!0)})}function Oe(){r(M)||n.value.forEach(l=>{l.states.hover=!1})}function U(l){l!==s.value&&(w.value||(E.value=!0)),s.value=l}function R(l){e.trigger==="hover"&&l!==s.value&&(s.value=l,w.value||(E.value=!0))}function me(){x(s.value-1)}function pt(){x(s.value+1)}function Ee(){h(),e.pauseOnHover||O()}function vt(l){e.height==="auto"&&(_.value=l)}function ht(){var l;const b=(l=c.default)==null?void 0:l.call(c);if(!b)return null;const F=oe(b).filter(H=>le(H)&&H.type.name===we);return(F==null?void 0:F.length)===2&&e.loop&&!P.value?(T.value=!0,F):(T.value=!1,null)}V(()=>s.value,(l,b)=>{m(b),T.value&&(l=l%2,b=b%2),b>-1&&t("change",l,b)}),V(()=>e.autoplay,l=>{l?O():h()}),V(()=>e.loop,()=>{x(s.value)}),V(()=>e.interval,()=>{Ee()});const ge=Xe();return Ie(()=>{V(()=>n.value,()=>{n.value.length>0&&x(e.initialIndex)},{immediate:!0}),ge.value=qt(g.value,()=>{m()}),O()}),Et(()=>{h(),g.value&&ge.value&&ge.value.stop()}),Pt(dt,{root:g,isCardType:P,isVertical:M,items:n,loop:e.loop,cardScale:e.cardScale,addItem:o,removeItem:i,setActiveItem:x,setContainerHeight:vt}),{root:g,activeIndex:s,arrowDisplay:B,hasLabel:A,hover:y,isCardType:P,isTransitioning:E,items:n,isVertical:M,containerStyle:f,isItemsTwoLength:T,handleButtonEnter:S,handleTransitionEnd:he,handleButtonLeave:Oe,handleIndicatorClick:U,handleMouseEnter:pe,handleMouseLeave:ve,setActiveItem:x,prev:me,next:pt,PlaceholderItem:ht,isTwoLengthShow:d,throttledArrowClick:v,throttledIndicatorHover:C}},Jn="ElCarousel",Yn=ie({name:Jn}),Xn=ie({...Yn,props:Gn,emits:Wn,setup(e,{expose:t,emit:a}){const n=e,{root:o,activeIndex:i,arrowDisplay:c,hasLabel:s,hover:p,isCardType:y,items:g,isVertical:_,containerStyle:T,handleButtonEnter:w,handleButtonLeave:E,isTransitioning:B,handleIndicatorClick:A,handleMouseEnter:P,handleMouseLeave:M,handleTransitionEnd:f,setActiveItem:v,prev:C,next:d,PlaceholderItem:h,isTwoLengthShow:O,throttledArrowClick:N,throttledIndicatorHover:x}=Qn(n,a),m=rt("carousel"),{t:q}=Hn(),pe=$(()=>{const S=[m.b(),m.m(n.direction)];return r(y)&&S.push(m.m("card")),S}),ve=$(()=>{const S=[m.e("container")];return n.motionBlur&&r(B)&&g.value.length>1&&S.push(r(_)?`${m.namespace.value}-transitioning-vertical`:`${m.namespace.value}-transitioning`),S}),he=$(()=>{const S=[m.e("indicators"),m.em("indicators",n.direction)];return r(s)&&S.push(m.em("indicators","labels")),n.indicatorPosition==="outside"&&S.push(m.em("indicators","outside")),r(_)&&S.push(m.em("indicators","right")),S});return t({activeIndex:i,setActiveItem:v,prev:C,next:d}),(S,Oe)=>(k(),L("div",{ref_key:"root",ref:o,class:z(r(pe)),onMouseenter:te(r(P),["stop"]),onMouseleave:te(r(M),["stop"])},[r(c)?(k(),De(ke,{key:0,name:"carousel-arrow-left",persisted:""},{default:J(()=>[ne(u("button",{type:"button",class:z([r(m).e("arrow"),r(m).em("arrow","left")]),"aria-label":r(q)("el.carousel.leftArrow"),onMouseenter:U=>r(w)("left"),onMouseleave:r(E),onClick:te(U=>r(N)(r(i)-1),["stop"])},[G(r(Ae),null,{default:J(()=>[G(r(At))]),_:1})],42,["aria-label","onMouseenter","onMouseleave","onClick"]),[[re,(S.arrow==="always"||r(p))&&(n.loop||r(i)>0)]])]),_:1})):Q("v-if",!0),r(c)?(k(),De(ke,{key:1,name:"carousel-arrow-right",persisted:""},{default:J(()=>[ne(u("button",{type:"button",class:z([r(m).e("arrow"),r(m).em("arrow","right")]),"aria-label":r(q)("el.carousel.rightArrow"),onMouseenter:U=>r(w)("right"),onMouseleave:r(E),onClick:te(U=>r(N)(r(i)+1),["stop"])},[G(r(Ae),null,{default:J(()=>[G(r(xt))]),_:1})],42,["aria-label","onMouseenter","onMouseleave","onClick"]),[[re,(S.arrow==="always"||r(p))&&(n.loop||r(i)<r(g).length-1)]])]),_:1})):Q("v-if",!0),u("div",{class:z(r(ve)),style:qe(r(T)),onTransitionend:r(f)},[G(r(h)),Ze(S.$slots,"default")],46,["onTransitionend"]),S.indicatorPosition!=="none"?(k(),L("ul",{key:2,class:z(r(he))},[(k(!0),L(et,null,tt(r(g),(U,R)=>ne((k(),L("li",{key:R,class:z([r(m).e("indicator"),r(m).em("indicator",S.direction),r(m).is("active",R===r(i))]),onMouseenter:me=>r(x)(R),onClick:te(me=>r(A)(R),["stop"])},[u("button",{class:z(r(m).e("button")),"aria-label":r(q)("el.carousel.indicator",{index:R+1})},[r(s)?(k(),L("span",{key:0},Mt(U.props.label),1)):Q("v-if",!0)],10,["aria-label"])],42,["onMouseenter","onClick"])),[[re,r(O)(R)]])),128))],2)):Q("v-if",!0),n.motionBlur?(k(),L("svg",{key:3,xmlns:"http://www.w3.org/2000/svg",version:"1.1",style:{display:"none"}},[u("defs",null,[u("filter",{id:"elCarouselHorizontal"},[u("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"12,0"})]),u("filter",{id:"elCarouselVertical"},[u("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"0,10"})])])])):Q("v-if",!0)],42,["onMouseenter","onMouseleave"]))}});var Zn=ot(Xn,[["__file","carousel.vue"]]);const qn=nt({name:{type:String,default:""},label:{type:[String,Number],default:""}}),er=e=>{const t=Ye(dt),a=Ce(),n=I(),o=I(!1),i=I(0),c=I(1),s=I(!1),p=I(!1),y=I(!1),g=I(!1),{isCardType:_,isVertical:T,cardScale:w}=t;function E(f,v,C){const d=C-1,h=v-1,O=v+1,N=C/2;return v===0&&f===d?-1:v===d&&f===0?C:f<h&&v-f>=N?C+1:f>O&&f-v>=N?-2:f}function B(f,v){var C,d;const h=r(T)?((C=t.root.value)==null?void 0:C.offsetHeight)||0:((d=t.root.value)==null?void 0:d.offsetWidth)||0;return y.value?h*((2-w)*(f-v)+1)/4:f<v?-(1+w)*h/4:(3+w)*h/4}function A(f,v,C){const d=t.root.value;return d?((C?d.offsetHeight:d.offsetWidth)||0)*(f-v):0}const P=(f,v,C)=>{var d;const h=r(_),O=(d=t.items.value.length)!=null?d:Number.NaN,N=f===v;!h&&!jt(C)&&(g.value=N||f===C),!N&&O>2&&t.loop&&(f=E(f,v,O));const x=r(T);s.value=N,h?(y.value=Math.round(Math.abs(f-v))<=1,i.value=B(f,v),c.value=r(s)?1:w):i.value=A(f,v,x),p.value=!0,N&&n.value&&t.setContainerHeight(n.value.offsetHeight)};function M(){if(t&&r(_)){const f=t.items.value.findIndex(({uid:v})=>v===a.uid);t.setActiveItem(f)}}return Ie(()=>{t.addItem({props:e,states:Dt({hover:o,translate:i,scale:c,active:s,ready:p,inStage:y,animating:g}),uid:a.uid,translateItem:P})}),kt(()=>{t.removeItem(a.uid)}),{carouselItemRef:n,active:s,animating:g,hover:o,inStage:y,isVertical:T,translate:i,isCardType:_,scale:c,ready:p,handleItemClick:M}},tr=ie({name:we}),ar=ie({...tr,props:qn,setup(e){const t=e,a=rt("carousel"),{carouselItemRef:n,active:o,animating:i,hover:c,inStage:s,isVertical:p,translate:y,isCardType:g,scale:_,ready:T,handleItemClick:w}=er(t),E=$(()=>[a.e("item"),a.is("active",o.value),a.is("in-stage",s.value),a.is("hover",c.value),a.is("animating",i.value),{[a.em("item","card")]:g.value,[a.em("item","card-vertical")]:g.value&&p.value}]),B=$(()=>{const P=`${`translate${r(p)?"Y":"X"}`}(${r(y)}px)`,M=`scale(${r(_)})`;return{transform:[P,M].join(" ")}});return(A,P)=>ne((k(),L("div",{ref_key:"carouselItemRef",ref:n,class:z(r(E)),style:qe(r(B)),onClick:r(w)},[r(g)?ne((k(),L("div",{key:0,class:z(r(a).e("mask"))},null,2)),[[re,!r(o)]]):Q("v-if",!0),Ze(A.$slots,"default")],14,["onClick"])),[[re,r(T)]])}});var ft=ot(ar,[["__file","carousel-item.vue"]]);const nr=Lt(Zn,{CarouselItem:ft}),rr=Bt(ft),or=at("/image/image.png"),sr=at("/image/pic_recruitment.png"),ir={class:"home"},lr={class:"about"},ur={class:"dgimg"},cr=["src"],dr=ie({__name:"index",setup(e){const t=()=>{const o=window.location.href+"chan";window.open(o,"_self")},a=()=>{const o=window.location.href+"wu";window.open(o,"_self")};return(n,o)=>{const i=rr,c=nr;return k(),L("div",ir,[o[8]||(o[8]=$e('<div class="image-container" data-v-333db601><img src="'+or+'" alt="Background Image" class="background-image" data-v-333db601><div class="overlay" data-v-333db601><p class="title" data-v-333db601>SZU</p><p class="subtitle" data-v-333db601>Database Group</p><p class="subtitle2" data-v-333db601>About the Database Group</p></div></div>',1)),u("div",lr,[u("div",ur,[G(c,{width:"788px",height:"460px",direction:"vertical"},{default:J(()=>[(k(),L(et,null,tt(2,s=>G(i,{key:s},{default:J(()=>[u("img",{src:`/academicpage/image/${s}.png`,alt:"",style:{width:"100%",height:"100%"}},null,8,cr)]),_:2},1024)),64))]),_:1})]),o[0]||(o[0]=u("div",{class:"dgoverlay"},null,-1)),o[1]||(o[1]=u("p",{class:"dgWord"},[D(" This database group is affiliated with Big Data Institude (led by Prof. (Joshua) Zhexue Huang) in Shenzhen University.Currently, we have the following directions： "),u("br"),u("br"),u("span",{class:"dgword"},[D(" Efficient Algorithms for Geographic Information Systems"),u("br"),D(" Efficient Algorithms for Large-scale Data Visualization"),u("br"),D(" Efficient Query Processing for Spatial/Graph Databases"),u("br"),D(" Distributed Algorithms for Spatial/Graph Databases"),u("br"),D(" Development of Efficient Software Packages and System Prototypes ")]),u("br"),u("br"),D(" In this group, we have published many papers in top-tier conferences and journals in the database/data management field, including SIGMOD, PVLDB, ICDE, TODS, VLDBJ, and TKDE. ")],-1))]),u("div",{class:"member"},[o[4]||(o[4]=u("img",{src:Ft,alt:"",class:"ellipse"},null,-1)),o[5]||(o[5]=u("p",{class:"mtitle"},"Faculty Members",-1)),o[6]||(o[6]=u("div",{class:"line1"},null,-1)),o[7]||(o[7]=u("div",{class:"line2"},null,-1)),u("div",{class:"teacher1",onClick:t},o[2]||(o[2]=[u("div",{class:"teacherbg"},[u("p",{class:"tname"},"Prof. Tsz Nam Chan"),u("p",{class:"tintro"},[D(" Distinguished Professor"),u("br"),D(" BEng, PhD PolyU (HK), SrMIEEE, MACM"),u("br"),D(" NSF for Excellent Young Scientists (Overseas) ")])],-1),u("img",{src:zt,alt:"",class:"teacherimg"},null,-1)])),u("div",{class:"teacher2",onClick:a},o[3]||(o[3]=[u("div",{class:"teacherbg"},[u("p",{class:"tname"},"Dr. Dingming Wu"),u("p",{class:"tintro"},[D(" Associate Professor"),u("br"),D(" B. Sc. HUST, M. Sc. PKU, Ph. D. AAU (DK) ")])],-1),u("img",{src:Rt,alt:"",class:"teacherimg"},null,-1)]))]),o[9]||(o[9]=$e('<div class="recruitment" data-v-333db601><div class="recruitmentbg" data-v-333db601></div><p class="rtitle" data-v-333db601>Recruitment</p><p class="rintro" data-v-333db601> Our database group is now hiring an assistant professor and an associate researcher (副研究员). Interested applicants<br data-v-333db601><br data-v-333db601> (1) should have strong academic background in database research or other related fields (e.g., publish papers in prestigious conferences and journals (e.g., CCF: A and CSranking)<br data-v-333db601><br data-v-333db601> (2) must show independent research skills and<br data-v-333db601><br data-v-333db601> (3) must show strong presentation skills. Applicants who successfully join this research group are expected to work with us and other members in Big Data Institute. </p><p class="rinvite" data-v-333db601> If you are interested in joining us, please contact us via these two email addresses, which are <span style="color:#0072CB;" data-v-333db601>(1) edisonchan2013928@gmail.com (Dr. Tsz Nam Chan)</span> and <span style="color:#0072CB;" data-v-333db601>(2) dingming.wu@gmail.com (Dr. Dingming Wu).</span></p><p class="rsubtitle" data-v-333db601>Welcome to the Database Group in Shenzhen University (SZU).</p><img src="'+sr+'" alt="" class="rimg" data-v-333db601></div>',1))])}}}),gr=Ut(dr,[["__scopeId","data-v-333db601"]]);export{gr as default};
