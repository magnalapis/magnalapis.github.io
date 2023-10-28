"use strict";(self.webpackChunkmagnalapis=self.webpackChunkmagnalapis||[]).push([[488],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(n),p=r,h=u["".concat(c,".").concat(p)]||u[p]||d[p]||i;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2503:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),i=n(6010),o=n(5999),l=n(6668),c=n(9960);const s={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"};function m(e){let{as:t,id:n,...m}=e;const{navbar:{hideOnScroll:u}}=(0,l.L)();if("h1"===t||!n)return r.createElement(t,(0,a.Z)({},m,{id:void 0}));const d=(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof m.children?m.children:n});return r.createElement(t,(0,a.Z)({},m,{className:(0,i.Z)("anchor",u?s.anchorWithHideOnScrollNavbar:s.anchorWithStickyNavbar,m.className),id:n}),m.children,r.createElement(c.Z,{className:"hash-link",to:`#${n}`,"aria-label":d,title:d},"\u200b"))}},7572:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>p,default:()=>b,frontMatter:()=>d,metadata:()=>h,toc:()=>f});var a=n(7462),r=n(7294),i=n(3905),o=n(5999),l=n(9960),c=n(2503);function s(e){let{className:t,name:n,children:a,githubUrl:i,twitterUrl:o}=e;return r.createElement("div",{className:t},r.createElement("div",{className:"card card--full-height"},r.createElement("div",{className:"card__header"},r.createElement("div",{className:"avatar avatar--vertical"},r.createElement("img",{className:"avatar__photo avatar__photo--xl",src:`${i}.png`,alt:`${n}'s avatar`}),r.createElement("div",{className:"avatar__intro"},r.createElement(c.Z,{as:"h3",className:"avatar__name"},n)))),r.createElement("div",{className:"card__body"},a),r.createElement("div",{className:"card__footer"},r.createElement("div",{className:"button-group button-group--block"},i&&r.createElement(l.Z,{className:"button button--secondary",href:i},"GitHub"),o&&r.createElement(l.Z,{className:"button button--secondary",href:o},"Twitter")))))}function m(e){return r.createElement(s,(0,a.Z)({},e,{className:"col col--6 margin-bottom--lg"}))}function u(){return r.createElement("div",{className:"row"},r.createElement(m,{name:"Jonghun Park",githubUrl:"https://github.com/magnalapis"},r.createElement(o.Z,{id:"team.profile.Jonghun Park.body"},"Novice AI & ML Engineer. \ud83d\ude04 Striving for growth. Passionate about fundamental theories, including math.\ud83e\udd88")))}const d={id:"hello",sidebar_position:0},p="Hello",h={unversionedId:"community/hello",id:"community/hello",title:"Hello",description:"Hello and thank you for visiting \ud83d\uddffmagnalapis.",source:"@site/docs/community/hello.md",sourceDirName:"community",slug:"/community/hello",permalink:"/docs/community/hello",draft:!1,editUrl:"https://github.com/magnalapis/magnalapis.github.io/tree/dev/docs/community/hello.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"hello",sidebar_position:0},sidebar:"CommunitySidebar",next:{title:"Contributing",permalink:"/docs/community/contribute"}},g={},f=[{value:"Active Team",id:"active-team",level:2},{value:"Features",id:"features",level:2}],v={toc:f},y="wrapper";function b(e){let{components:t,...n}=e;return(0,i.kt)(y,(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"hello"},"Hello"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Hello and thank you for visiting ",(0,i.kt)("strong",{parentName:"p"},"\ud83d\uddffmagnalapis"),".")),(0,i.kt)("p",null,"\xa0"," ",(0,i.kt)("strong",{parentName:"p"},"\ud83d\uddffmagnalapis")," is my personal wiki where I, as an ML and AI engineer, compile and organize what I've learned."),(0,i.kt)("h2",{id:"active-team"},"Active Team"),(0,i.kt)("p",null,"\xa0"," This webpage is being developed by a solo developer."),(0,i.kt)("p",null,"\xa0"," However, I always welcome those who want to contribute and collaborate."),(0,i.kt)(u,{mdxType:"ActiveTeamRow"}),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("p",null,"\xa0"," The articles in ",(0,i.kt)("strong",{parentName:"p"},"\ud83d\uddffmagnalapis")," always aim for a ",(0,i.kt)("strong",{parentName:"p"},"deeper and more fundamental understanding")," than what's typically found online. While this might make the content more challenging, I assure you it offers richer insights."),(0,i.kt)("p",null,"\xa0"," But I do strive to make my writing ",(0,i.kt)("strong",{parentName:"p"},"accessible"),". Generally, I introduce the main concepts and key details at the beginning, with more in-depth explanations following."),(0,i.kt)("p",null,"\xa0"," Lastly, the articles on magnalapis will likely be ",(0,i.kt)("strong",{parentName:"p"},"written in Korean")," for now. I've been considering English, but given its pros and cons, I haven't made a decision yet."))}b.isMDXComponent=!0}}]);