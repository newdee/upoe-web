import{x as ne,d as B,u as W,o as b,b as oe,$ as Te,a0 as ke,l as ae,U as Se,O as Ae,g as U,c as _,k as N,f as Oe,e as x,t as Y,_ as re,a as xe,F as Q,D as Ne,a1 as ie,s as q,a2 as Me,a3 as Pe,a4 as $e,a5 as Ie,a6 as je,a7 as Re,a8 as Be,a9 as De,aa as Fe,ab as Ve,ac as Ze,j as Ue,y as Ye,ad as qe,ae as We,af as Xe}from"./chunks/framework.c7ac2435.js";import{t as se}from"./chunks/theme.ec2a9bf1.js";/*! medium-zoom 1.1.0 | MIT License | https://github.com/francoischalifour/medium-zoom */var C=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(n[r]=o[r])}return n},j=function(t){return t.tagName==="IMG"},Ke=function(t){return NodeList.prototype.isPrototypeOf(t)},R=function(t){return t&&t.nodeType===1},ee=function(t){var o=t.currentSrc||t.src;return o.substr(-4).toLowerCase()===".svg"},te=function(t){try{return Array.isArray(t)?t.filter(j):Ke(t)?[].slice.call(t).filter(j):R(t)?[t].filter(j):typeof t=="string"?[].slice.call(document.querySelectorAll(t)).filter(j):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},Ge=function(t){var o=document.createElement("div");return o.classList.add("medium-zoom-overlay"),o.style.background=t,o},Je=function(t){var o=t.getBoundingClientRect(),r=o.top,i=o.left,g=o.width,E=o.height,h=t.cloneNode(),H=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,M=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return h.removeAttribute("id"),h.style.position="absolute",h.style.top=r+H+"px",h.style.left=i+M+"px",h.style.width=g+"px",h.style.height=E+"px",h.style.transform="",h},S=function(t,o){var r=C({bubbles:!1,cancelable:!1,detail:void 0},o);if(typeof window.CustomEvent=="function")return new CustomEvent(t,r);var i=document.createEvent("CustomEvent");return i.initCustomEvent(t,r.bubbles,r.cancelable,r.detail),i},Qe=function n(t){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=window.Promise||function(a){function s(){}a(s,s)},i=function(a){var s=a.target;if(s===$){z();return}v.indexOf(s)!==-1&&K({target:s})},g=function(){if(!(T||!e.original)){var a=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(G-a)>l.scrollOffset&&setTimeout(z,150)}},E=function(a){var s=a.key||a.keyCode;(s==="Escape"||s==="Esc"||s===27)&&z()},h=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=a;if(a.background&&($.style.background=a.background),a.container&&a.container instanceof Object&&(s.container=C({},l.container,a.container)),a.template){var c=R(a.template)?a.template:document.querySelector(a.template);s.template=c}return l=C({},l,s),v.forEach(function(m){m.dispatchEvent(S("medium-zoom:update",{detail:{zoom:u}}))}),u},H=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return n(C({},l,a))},M=function(){for(var a=arguments.length,s=Array(a),c=0;c<a;c++)s[c]=arguments[c];var m=s.reduce(function(d,f){return[].concat(d,te(f))},[]);return m.filter(function(d){return v.indexOf(d)===-1}).forEach(function(d){v.push(d),d.classList.add("medium-zoom-image")}),P.forEach(function(d){var f=d.type,y=d.listener,k=d.options;m.forEach(function(w){w.addEventListener(f,y,k)})}),u},ce=function(){for(var a=arguments.length,s=Array(a),c=0;c<a;c++)s[c]=arguments[c];e.zoomed&&z();var m=s.length>0?s.reduce(function(d,f){return[].concat(d,te(f))},[]):v;return m.forEach(function(d){d.classList.remove("medium-zoom-image"),d.dispatchEvent(S("medium-zoom:detach",{detail:{zoom:u}}))}),v=v.filter(function(d){return m.indexOf(d)===-1}),u},me=function(a,s){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return v.forEach(function(m){m.addEventListener("medium-zoom:"+a,s,c)}),P.push({type:"medium-zoom:"+a,listener:s,options:c}),u},ue=function(a,s){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return v.forEach(function(m){m.removeEventListener("medium-zoom:"+a,s,c)}),P=P.filter(function(m){return!(m.type==="medium-zoom:"+a&&m.listener.toString()===s.toString())}),u},X=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=a.target,c=function(){var d={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},f=void 0,y=void 0;if(l.container)if(l.container instanceof Object)d=C({},d,l.container),f=d.width-d.left-d.right-l.margin*2,y=d.height-d.top-d.bottom-l.margin*2;else{var k=R(l.container)?l.container:document.querySelector(l.container),w=k.getBoundingClientRect(),D=w.width,ge=w.height,he=w.left,ye=w.top;d=C({},d,{width:D,height:ge,left:he,top:ye})}f=f||d.width-l.margin*2,y=y||d.height-l.margin*2;var O=e.zoomedHd||e.original,ze=ee(O)?f:O.naturalWidth||f,be=ee(O)?y:O.naturalHeight||y,I=O.getBoundingClientRect(),Ee=I.top,we=I.left,F=I.width,V=I.height,_e=Math.min(Math.max(F,ze),f)/F,Le=Math.min(Math.max(V,be),y)/V,Z=Math.min(_e,Le),Ce=(-we+(f-F)/2+l.margin+d.left)/Z,He=(-Ee+(y-V)/2+l.margin+d.top)/Z,J="scale("+Z+") translate3d("+Ce+"px, "+He+"px, 0)";e.zoomed.style.transform=J,e.zoomedHd&&(e.zoomedHd.style.transform=J)};return new r(function(m){if(s&&v.indexOf(s)===-1){m(u);return}var d=function D(){T=!1,e.zoomed.removeEventListener("transitionend",D),e.original.dispatchEvent(S("medium-zoom:opened",{detail:{zoom:u}})),m(u)};if(e.zoomed){m(u);return}if(s)e.original=s;else if(v.length>0){var f=v;e.original=f[0]}else{m(u);return}if(e.original.dispatchEvent(S("medium-zoom:open",{detail:{zoom:u}})),G=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,T=!0,e.zoomed=Je(e.original),document.body.appendChild($),l.template){var y=R(l.template)?l.template:document.querySelector(l.template);e.template=document.createElement("div"),e.template.appendChild(y.content.cloneNode(!0)),document.body.appendChild(e.template)}if(e.original.parentElement&&e.original.parentElement.tagName==="PICTURE"&&e.original.currentSrc&&(e.zoomed.src=e.original.currentSrc),document.body.appendChild(e.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),e.original.classList.add("medium-zoom-image--hidden"),e.zoomed.classList.add("medium-zoom-image--opened"),e.zoomed.addEventListener("click",z),e.zoomed.addEventListener("transitionend",d),e.original.getAttribute("data-zoom-src")){e.zoomedHd=e.zoomed.cloneNode(),e.zoomedHd.removeAttribute("srcset"),e.zoomedHd.removeAttribute("sizes"),e.zoomedHd.removeAttribute("loading"),e.zoomedHd.src=e.zoomed.getAttribute("data-zoom-src"),e.zoomedHd.onerror=function(){clearInterval(k),console.warn("Unable to reach the zoom image target "+e.zoomedHd.src),e.zoomedHd=null,c()};var k=setInterval(function(){e.zoomedHd.complete&&(clearInterval(k),e.zoomedHd.classList.add("medium-zoom-image--opened"),e.zoomedHd.addEventListener("click",z),document.body.appendChild(e.zoomedHd),c())},10)}else if(e.original.hasAttribute("srcset")){e.zoomedHd=e.zoomed.cloneNode(),e.zoomedHd.removeAttribute("sizes"),e.zoomedHd.removeAttribute("loading");var w=e.zoomedHd.addEventListener("load",function(){e.zoomedHd.removeEventListener("load",w),e.zoomedHd.classList.add("medium-zoom-image--opened"),e.zoomedHd.addEventListener("click",z),document.body.appendChild(e.zoomedHd),c()})}else c()})},z=function(){return new r(function(a){if(T||!e.original){a(u);return}var s=function c(){e.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(e.zoomed),e.zoomedHd&&document.body.removeChild(e.zoomedHd),document.body.removeChild($),e.zoomed.classList.remove("medium-zoom-image--opened"),e.template&&document.body.removeChild(e.template),T=!1,e.zoomed.removeEventListener("transitionend",c),e.original.dispatchEvent(S("medium-zoom:closed",{detail:{zoom:u}})),e.original=null,e.zoomed=null,e.zoomedHd=null,e.template=null,a(u)};T=!0,document.body.classList.remove("medium-zoom--opened"),e.zoomed.style.transform="",e.zoomedHd&&(e.zoomedHd.style.transform=""),e.template&&(e.template.style.transition="opacity 150ms",e.template.style.opacity=0),e.original.dispatchEvent(S("medium-zoom:close",{detail:{zoom:u}})),e.zoomed.addEventListener("transitionend",s)})},K=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=a.target;return e.original?z():X({target:s})},pe=function(){return l},fe=function(){return v},ve=function(){return e.original},v=[],P=[],T=!1,G=0,l=o,e={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(t)==="[object Object]"?l=t:(t||typeof t=="string")&&M(t),l=C({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},l);var $=Ge(l.background);document.addEventListener("click",i),document.addEventListener("keyup",E),document.addEventListener("scroll",g),window.addEventListener("resize",z);var u={open:X,close:z,toggle:K,update:h,clone:H,attach:M,detach:ce,on:me,off:ue,getOptions:pe,getImages:fe,getZoomedImage:ve};return u};function et(n,t){t===void 0&&(t={});var o=t.insertAt;if(!(!n||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",o==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=n:i.appendChild(document.createTextNode(n))}}var tt=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";et(tt);const nt=Qe,ot=":not(a) > img:not(.image-src, .visitor, .vp-sponsor-grid-image)",at=Symbol("medium-zoom"),rt=(n,t)=>{const o=nt();o.refresh=(r=ot)=>{o.detach(),o.attach(r)},n.provide(at,o),ne(()=>t.route.path,()=>setTimeout(()=>o.refresh()))},it=B({__name:"MLayout",setup(n){const{Layout:t}=se,{isDark:o}=W(),r=()=>"startViewTransition"in document&&window.matchMedia("(prefers-reduced-motion: no-preference)").matches;return Se("toggle-appearance",async({clientX:i,clientY:g})=>{if(!r()){o.value=!o.value;return}const E=[`circle(0px at ${i}px ${g}px)`,`circle(${Math.hypot(Math.max(i,innerWidth-i),Math.max(g,innerHeight-g))}px at ${i}px ${g}px)`];await document.startViewTransition(async()=>{o.value=!o.value,await Ae()}).ready,document.documentElement.animate({clipPath:o.value?E.reverse():E},{duration:300,easing:"ease-in",pseudoElement:`::view-transition-${o.value?"old":"new"}(root)`})}),(i,g)=>(b(),oe(ae(t),Te(ke(i.$attrs)),null,16))}}),st=/[\u0000-\u001f]/g,dt=/[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g,lt=/[\u0300-\u036F]/g,de=n=>n.normalize("NFKD").replace(lt,"").replace(st,"").replace(dt,"-").replace(/-{2,}/g,"-").replace(/^-+|-+$/g,"").replace(/^(\d)/,"_$1").toLowerCase(),ct=["href"],mt={class:"box"},ut={class:"box-header"},pt=["innerHTML"],ft={key:1,class:"icon"},vt=["src","alt"],gt=["id"],ht={key:0,class:"desc"},yt=B({__name:"MNavLink",props:{icon:{},title:{},desc:{},link:{}},setup(n){const t=n,o=U(()=>t.title?de(t.title):""),r=U(()=>typeof t.icon=="object"?t.icon.svg:"");return(i,g)=>i.link?(b(),_("a",{key:0,class:"m-nav-link",href:i.link,target:"_blank",rel:"noreferrer"},[N("article",mt,[N("div",ut,[r.value?(b(),_("div",{key:0,class:"icon",innerHTML:r.value},null,8,pt)):i.icon&&typeof i.icon=="string"?(b(),_("div",ft,[N("img",{src:ae(Oe)(i.icon),alt:i.title,onerror:"this.parentElement.style.display='none'"},null,8,vt)])):x("",!0),i.title?(b(),_("h5",{key:2,id:o.value,class:"title"},Y(i.title),9,gt)):x("",!0)]),i.desc?(b(),_("p",ht,Y(i.desc),1)):x("",!0)])],8,ct)):x("",!0)}});const zt=re(yt,[["__scopeId","data-v-1605d8f3"]]),bt=["id"],Et=["href"],wt={class:"m-nav-links"},_t=B({__name:"MNavLinks",props:{title:{},items:{}},setup(n){const t=n,o=U(()=>de(t.title));return(r,i)=>(b(),_(Q,null,[r.title?(b(),_("h2",{key:0,id:o.value,tabindex:"-1"},[xe(Y(r.title)+" ",1),N("a",{class:"header-anchor",href:`#${o.value}`,"aria-hidden":"true"},null,8,Et)],8,bt)):x("",!0),N("div",wt,[(b(!0),_(Q,null,Ne(r.items,({icon:g,title:E,desc:h,link:H})=>(b(),oe(zt,{key:H,icon:g,title:E,desc:h,link:H},null,8,["icon","title","desc","link"]))),128))])],64))}});const Lt=re(_t,[["__scopeId","data-v-47b65f67"]]);let L;const Ct={extends:se,Layout:()=>{var o;const n={},{frontmatter:t}=W();return(o=t.value)!=null&&o.layoutClass&&(n.class=t.value.layoutClass),ie(it,n)},enhanceApp({app:n,router:t}){rt(n,t),n.component("MNavLinks",Lt),typeof window<"u"&&ne(()=>t.route.data.relativePath,()=>Ht(location.pathname==="/"||location.pathname==="/vitepress-nav-template/"),{immediate:!0})}};if(typeof window<"u"){const n=navigator.userAgent.toLowerCase();n.includes("chrome")?document.documentElement.classList.add("browser-chrome"):n.includes("firefox")?document.documentElement.classList.add("browser-firefox"):n.includes("safari")&&document.documentElement.classList.add("browser-safari")}function Ht(n){if(n){if(L)return;L=document.createElement("style"),L.innerHTML=`
    :root {
      animation: rainbow 12s linear infinite;
    }`,document.body.appendChild(L)}else{if(!L)return;L.remove(),L=void 0}}function le(n){if(n.extends){const t=le(n.extends);return{...t,...n,async enhanceApp(o){t.enhanceApp&&await t.enhanceApp(o),n.enhanceApp&&await n.enhanceApp(o)}}}return n}const A=le(Ct),Tt=B({name:"VitePressApp",setup(){const{site:n}=W();return Ue(()=>{Ye(()=>{document.documentElement.lang=n.value.lang,document.documentElement.dir=n.value.dir})}),qe(),We(),Xe(),A.setup&&A.setup(),()=>ie(A.Layout)}});async function kt(){const n=At(),t=St();t.provide(Pe,n);const o=$e(n.route);return t.provide(Ie,o),t.component("Content",je),t.component("ClientOnly",Re),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return o.frontmatter.value}},$params:{get(){return o.page.value.params}}}),A.enhanceApp&&await A.enhanceApp({app:t,router:n,siteData:Be}),{app:t,router:n,data:o}}function St(){return De(Tt)}function At(){let n=q,t;return Fe(o=>{let r=Ve(o),i=null;return r&&(n&&(t=r),(n||t===r)&&(r=r.replace(/\.js$/,".lean.js")),i=Ze(()=>import(r),[])),q&&(n=!1),i},A.NotFound)}q&&kt().then(({app:n,router:t,data:o})=>{t.go().then(()=>{Me(t.route,o.site),n.mount("#app")})});export{kt as createApp};
