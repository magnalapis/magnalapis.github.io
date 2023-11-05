"use strict";(self.webpackChunkmagnalapis=self.webpackChunkmagnalapis||[]).push([[304],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),k=a,d=m["".concat(c,".").concat(k)]||m[k]||s[k]||l;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8337:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={id:"introductoin",sidebar_position:0},o="Concept: Machine Learning",i={unversionedId:"concepts/mlconcept/introductoin",id:"concepts/mlconcept/introductoin",title:"Concept: Machine Learning",description:"Machine learning(ML) \uc5d0\uc11c \ud1b5\uc6a9\ub418\ub294 \uac1c\ub150\ub4e4\uc5d0 \ub300\ud55c \uc18c\uac1c.",source:"@site/docs/concepts/mlconcept/introduction.md",sourceDirName:"concepts/mlconcept",slug:"/concepts/mlconcept/introductoin",permalink:"/docs/concepts/mlconcept/introductoin",draft:!1,editUrl:"https://github.com/magnalapis/magnalapis.github.io/tree/dev/docs/concepts/mlconcept/introduction.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"introductoin",sidebar_position:0},sidebar:"MLConceptSidebar",next:{title:"Introduction",permalink:"/docs/concepts/mlconcept/data/introduction"}},c={},p=[{value:"0. Define problem &amp; object.",id:"0-define-problem--object",level:2},{value:"Collect &amp; Analyse Data.",id:"collect--analyse-data",level:2}],u={toc:p},m="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"concept-machine-learning"},"Concept: Machine Learning"),(0,a.kt)("p",null,"Machine learning(ML) \uc5d0\uc11c \ud1b5\uc6a9\ub418\ub294 \uac1c\ub150\ub4e4\uc5d0 \ub300\ud55c \uc18c\uac1c."),(0,a.kt)("h1",{id:"flow-of-machine-learning"},"Flow of Machine Learning"),(0,a.kt)("p",null,"\uba38\uc2e0 \ub7ec\ub2dd\uc73c\ub85c \uacfc\uc81c\ub97c \uc218\ud589\ud558\ub294 \uae30\ubcf8\uc801\uc778 flow \ub97c \uba3c\uc800 \uc124\uba85\ud569\ub2c8\ub2e4."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},' "\uc774\ubbf8\uc9c0\uc5d0\uc11c \ub3d9\ubb3c\uc744 \ud45c\uc2dc\ud574\uc8fc\uc790."')),(0,a.kt)("h2",{id:"0-define-problem--object"},"0. Define problem & object."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\ubb38\uc81c \uba85\ud655\ud654.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc774\ubbf8\uc9c0\uc5d0\uc11c \ub3d9\ubb3c\uc744 \ud45c\uc2dc\ud558\uc790 -> \uc774\ubbf8\uc9c0\uc5d0\uc11c \ub3d9\ubb3c \uc601\uc5ed\uc744 \ud655\uc778\ud558\uace0, \ud574\ub2f9 \uc601\uc5ed \uc774\ubbf8\uc9c0\uc758 \ub3d9\ubb3c \uc885\uc744 \ud30c\uc545\ud55c \ub4a4, \ud45c\uc2dc\ud574\uc8fc\uc790.")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\ubb38\uc81c \uad6c\uccb4\ud654 : input \uacfc output \uc744 \uad6c\uccb4\ud654 \ud55c\ub2e4.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ub300\uc0c1 \uc774\ubbf8\uc9c0 : \ub0ae\uc5d0 \ucc0d\uc740 \ub3d9\ubb3c\uc5d0 \ucd08\uc810\uc774 \ub9de\ucd94\uc5b4\uc9c4 \uc0ac\uc9c4\uc73c\ub85c \ud558\uc790."),(0,a.kt)("li",{parentName:"ul"},"\ub300\uc0c1 \ub3d9\ubb3c \uc885 : \uace0\uc591\uc774, \uac1c\uc640 \uac19\uc740 \uc721\uc0c1 \ud3ec\uc720\ub958 10\uc885\uc5d0 \ud55c\uc815\ud558\uc790.")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\ubb38\uc81c \ubd84\ud560(\ub2e8\uc21c\ud654)")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc774\ubbf8\uc9c0\uc5d0\uc11c \ub3d9\ubb3c \ud0d0\uc9c0 \ub2e8\uacc4 : detection, segementation"),(0,a.kt)("li",{parentName:"ul"},"\uc774\ubbf8\uc9c0\uc5d0\uc11c \ub3d9\ubb3c \uc885\uc758 \uad6c\ubd84 : classification")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"\uc804\uccb4 \ubaa9\ud45c \uc124\uc815 (metric)")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ub3d9\ubb3c\uc774 \uc544\ub2cc \uc601\uc5ed\uc744 \ud0d0\uc9c0\ud558\ub294 \uac83\uc5d0 \uc8fc\uc758\ud574\uc11c \ub3d9\ubb3c\uc744 \uc798 \ucc3e\uc544\uc8fc\uc790.")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"\ub2e8\uacc4\ubcc4 \ubaa9\ud45c \uad6c\uccb4\ud654 \ubc0f metric \uc124\uc815.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc601\uc5ed \ud0d0\uc9c0 : \ub3d9\ubb3c\uc774 \uc544\ub2cc \uc601\uc5ed\uc744 \ub3d9\ubb3c\ub85c \ud0d0\uc9c0\ud558\ub294 \uac74 \uc548\ub41c\ub2e4.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"precision + (recall, f1)"))),(0,a.kt)("li",{parentName:"ul"},"\uc885 \uad6c\ubd84 : \ucd5c\ub300\ud55c \uc815\ud655\ud558\uac8c \ub3d9\ubb3c\uc758 \uc885\uc744 \uad6c\ubd84\ud558\uc790.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"acc + ")))),(0,a.kt)("p",null,"\ud574\ub2f9 \uacfc\uc815\uc740 \ud6c4\uc220\ud558\ub294 \uacfc\uc815\uc744 \uc9c4\ud589\ud558\uba74\uc11c \uacc4\uc18d \ub17c\uc758\uc640 \uc5c5\ub370\uc774\ud2b8\ub97c \ud574\uc918\uc57c \ud55c\ub2e4."),(0,a.kt)("p",null,"\uadf8\ub807\uc9c0\ub9cc \ucd08\uae30 \ubc29\ud5a5\uc131\uc740 \ub9e4\uc6b0 \uc911\uc694\ud558\uae30\ub584\ubb38\uc5d0 \uc2e0\uc911\ud558\uac8c \ub9ce\uc740 \ub178\ub825\uc744 \uac78\uccd0\uc11c \uc774 \uacfc\uc815\uc744 \uc9c4\ud589\ud558\uc790."),(0,a.kt)("h2",{id:"collect--analyse-data"},"Collect & Analyse Data."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\ub370\uc774\ud130 \uac80\ud1a0\n\ubb38\uc81c\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 \uac01 \uacfc\uc815\uc5d0\uc11c \uc5b4\ub5a4 data, feature\uac00 \ud544\uc694\ud558\uc9c0 \ud655\uc778\ud55c\ub2e4.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc601\uc5ed \ud0d0\uc9c0 : \ub3d9\ubb3c \uc601\uc5ed\uc774 \ud45c\uc2dc\ub418\uc5b4 \uc788\ub294 \uc774\ubbf8\uc9c0. (\ub300\uc0c1 \uc774\ubbf8\uc9c0\uc5d0 \ub9de\ub294)"),(0,a.kt)("li",{parentName:"ul"},"\uc885 \uad6c\ubd84 : \ub3d9\ubb3c \uc885\uc774 \uad6c\ubd84\ub418\uc5b4 \uc788\ub294 \ub3d9\ubb3c \uc774\ubbf8\uc9c0."),(0,a.kt)("li",{parentName:"ul"},"\ub3d9\ubb3c \uc601\uc5ed\uacfc \ub3d9\ubb3c \uc885\uc774 \ubaa8\ub450 \ud45c\uc2dc\ub41c \uc774\ubbf8\uc9c0\uba74 \ub354\uc6b1 \uc88b\ub2e4.")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\ud544\uc694\ud55c \ub370\uc774\ud130 \uc911 \ubaa8\uc744 \uc218 \uc788\ub294 \ub370\uc774\ud130\ub97c \ud655\uc778\ud55c\ub2e4.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\ub370\uc774\ud130\ub97c \uc218\uc9d1\ud55c\ub2e4.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\ub370\uc774\ud130 \ubd84\uc11d"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"noise \ubd84\uc11d."),(0,a.kt)("li",{parentName:"ul"},"invraince \ud655\uc778 : \ud68c\uc804\ub418\uc5b4 \uc788\ub294 \uc774\ubbf8\uc9c0, \uc0c9\ubc18\uc804\ub418\uc5b4 \uc788\ub294 \ub4f1\uc758 \ubcc0\ud654\uac00 \uac00\ud574\uc9c4 \uc774\ubbf8\uc9c0\uac00 \uc788\ub294\uc9c0 \ud655\uc778."),(0,a.kt)("li",{parentName:"ul"},"data distribution \ud655\uc778 : \ud2b9\uc815 \ub3d9\ubb3c \uc885\uc758 \uc774\ubbf8\uc9c0\uac00 \ub108\ubb34 \ub9ce\uc9c0 \uc54a\uc740\uac00? "),(0,a.kt)("li",{parentName:"ul"},"feature \ubd84\uc11d : \ucd08\uae30 \uc0ac\uc6a9\ud558\ub824\uace0 \ud55c \uc774\ubbf8\uc9c0\uc758 feature \ub294 \ub370\uc774\ud130\uc758 \ubd84\ud3ec\uc5d0\uc11c \ud569\ub2f9\ud55c\uac00?")))}s.isMDXComponent=!0}}]);