"use strict";(self.webpackChunkmagnalapis=self.webpackChunkmagnalapis||[]).push([[488],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(a),d=r,h=p["".concat(c,".").concat(d)]||p[d]||u[d]||i;return a?n.createElement(h,o(o({ref:t},m),{},{components:a})):n.createElement(h,o({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2503:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7462),r=a(7294),i=a(6010),o=a(5999),l=a(6668),c=a(9960);const s={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"};function m(e){let{as:t,id:a,...m}=e;const{navbar:{hideOnScroll:p}}=(0,l.L)();if("h1"===t||!a)return r.createElement(t,(0,n.Z)({},m,{id:void 0}));const u=(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof m.children?m.children:a});return r.createElement(t,(0,n.Z)({},m,{className:(0,i.Z)("anchor",p?s.anchorWithHideOnScrollNavbar:s.anchorWithStickyNavbar,m.className),id:a}),m.children,r.createElement(c.Z,{className:"hash-link",to:`#${a}`,"aria-label":u,title:u},"\u200b"))}},7572:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>h,toc:()=>f});var n=a(7462),r=a(7294),i=a(3905),o=a(5999),l=a(9960),c=a(2503);function s(e){let{className:t,name:a,children:n,githubUrl:i,twitterUrl:o}=e;return r.createElement("div",{className:t},r.createElement("div",{className:"card card--full-height"},r.createElement("div",{className:"card__header"},r.createElement("div",{className:"avatar avatar--vertical"},r.createElement("img",{className:"avatar__photo avatar__photo--xl",src:`${i}.png`,alt:`${a}'s avatar`}),r.createElement("div",{className:"avatar__intro"},r.createElement(c.Z,{as:"h3",className:"avatar__name"},a)))),r.createElement("div",{className:"card__body"},n),r.createElement("div",{className:"card__footer"},r.createElement("div",{className:"button-group button-group--block"},i&&r.createElement(l.Z,{className:"button button--secondary",href:i},"GitHub"),o&&r.createElement(l.Z,{className:"button button--secondary",href:o},"Twitter")))))}function m(e){return r.createElement(s,(0,n.Z)({},e,{className:"col col--6 margin-bottom--lg"}))}function p(){return r.createElement("div",{className:"row"},r.createElement(m,{name:"Jonghun Park",githubUrl:"https://github.com/magnalapis"},r.createElement(o.Z,{id:"team.profile.Jonghun Park.body"},"Novice AI & ML Engineer. \ud83d\ude04 Striving for growth. Passionate about fundamental theories, including math.\ud83e\udd88")))}const u={sidebar_position:0},d="Hello",h={unversionedId:"community/hello",id:"community/hello",title:"Hello",description:"Hello and thank you for visiting \ud83d\uddffmagnalapis.",source:"@site/docs/community/hello.md",sourceDirName:"community",slug:"/community/hello",permalink:"/docs/community/hello",draft:!1,editUrl:"https://https://github.com/magnalapis/magnalapis.github.io/docs/community/hello.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"CommunitySidebar"},g={},f=[{value:"Active Team",id:"active-team",level:2},{value:"Features",id:"features",level:2}],v={toc:f},y="wrapper";function b(e){let{components:t,...a}=e;return(0,i.kt)(y,(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"hello"},"Hello"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Hello and thank you for visiting ",(0,i.kt)("strong",{parentName:"p"},"\ud83d\uddffmagnalapis"),".")),(0,i.kt)("p",null,"\xa0"," ",(0,i.kt)("strong",{parentName:"p"},"\ud83d\uddffmagnalapis")," is my personal wiki where I, as an ML and AI engineer, compile and organize what I've learned."),(0,i.kt)("h2",{id:"active-team"},"Active Team"),(0,i.kt)("p",null,"\xa0"," This webpage is being developed by a solo developer."),(0,i.kt)("p",null,"\xa0"," However, I always welcome those who want to contribute and collaborate."),(0,i.kt)(p,{mdxType:"ActiveTeamRow"}),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("p",null,"\xa0"," The articles in ",(0,i.kt)("strong",{parentName:"p"},"\ud83d\uddffmagnalapis")," always aim for a ",(0,i.kt)("strong",{parentName:"p"},"deeper and more fundamental understanding")," than what's typically found online. While this might make the content more challenging, I assure you it offers richer insights."),(0,i.kt)("p",null,"\xa0"," But I do strive to make my writing ",(0,i.kt)("strong",{parentName:"p"},"accessible"),". Generally, I introduce the main concepts and key details at the beginning, with more in-depth explanations following."),(0,i.kt)("p",null,"\xa0"," Lastly, the articles on magnalapis will likely be ",(0,i.kt)("strong",{parentName:"p"},"written in Korean")," for now. I've been considering English, but given its pros and cons, I haven't made a decision yet."))}b.isMDXComponent=!0}}]);