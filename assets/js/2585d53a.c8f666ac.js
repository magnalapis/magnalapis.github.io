"use strict";(self.webpackChunklogicbaron=self.webpackChunklogicbaron||[]).push([[3592],{8544:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var a=s(7624),i=s(2172);const t={id:"kl_divergence",sidebar_position:3,tags:["information"]},r="KL Divergence",c={id:"concepts/math/information/kl_divergence",title:"KL Divergence",description:"KL Divergence \ub294 Cross Entropy\ub97c \uc77d\uc5b4\ubcf4\uace0 \uacf5\ubd80\ud558\ub294 \uac83\uc744 \ucd94\ucc9c\ud569\ub2c8\ub2e4.",source:"@site/docs/concepts/math/information/kl_divergence.md",sourceDirName:"concepts/math/information",slug:"/concepts/math/information/kl_divergence",permalink:"/docs/concepts/math/information/kl_divergence",draft:!1,unlisted:!1,editUrl:"https://github.com/logicbaron/logicbaron.github.io/tree/dev/docs/concepts/math/information/kl_divergence.md",tags:[{label:"information",permalink:"/docs/tags/information"}],version:"current",sidebarPosition:3,frontMatter:{id:"kl_divergence",sidebar_position:3,tags:["information"]},sidebar:"MathSidebar",previous:{title:"Cross Entropy",permalink:"/docs/concepts/math/information/cross_entropy"},next:{title:"Calculus",permalink:"/docs/concepts/math/calculus/"}},l={},o=[{value:"Definition &amp; Meaning of KL Divergence",id:"definition--meaning-of-kl-divergence",level:2}];function m(e){const n={a:"a",admonition:"admonition",annotation:"annotation",h1:"h1",h2:"h2",math:"math",mi:"mi",mo:"mo",mrow:"mrow",p:"p",semantics:"semantics",span:"span",...(0,i.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"kl-divergence",children:"KL Divergence"}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["KL Divergence \ub294 ",(0,a.jsx)(n.a,{href:"/docs/concepts/math/information/cross_entropy",children:"Cross Entropy"}),"\ub97c \uc77d\uc5b4\ubcf4\uace0 \uacf5\ubd80\ud558\ub294 \uac83\uc744 \ucd94\ucc9c\ud569\ub2c8\ub2e4."]})}),"\n",(0,a.jsxs)(n.p,{children:["KL Divergence \ub294 \uc2e4\uc81c \ud655\ub960 \ubd84\ud3ec ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"p"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"("}),(0,a.jsx)(n.mi,{children:"X"}),(0,a.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"p(X)"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"p"}),(0,a.jsx)(n.span,{className:"mopen",children:"("}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"X"}),(0,a.jsx)(n.span,{className:"mclose",children:")"})]})})]})," \ub97c \uac00\uc9c0\ub294 Random Variable ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsx)(n.mi,{children:"X"})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"X"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"X"})]})})]})," \uc5d0 \ub300\ud574, ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsx)(n.mi,{children:"X"})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"X"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"X"})]})})]})," \uc758 \ud655\ub960 \ubd84\ud3ec\ub97c ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"q"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"("}),(0,a.jsx)(n.mi,{children:"X"}),(0,a.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"q(X)"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"q"}),(0,a.jsx)(n.span,{className:"mopen",children:"("}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"X"}),(0,a.jsx)(n.span,{className:"mclose",children:")"})]})})]})," \ub85c \ucd94\uc815\ud560 \ub54c \uc99d\uac00\ud558\ub294 \ubd88\ud655\uc2e4\uc131\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."]}),"\n",(0,a.jsx)(n.p,{children:"KL divergence \ub294 \ud655\ub960 \ubd84\ud3ec \uac04\uc758 \uc720\uc0ac\ub3c4 \uac1c\ub150\uc73c\ub85c \ub9ce\uc774 \uc774\ud574\ud558\uace0 \uc788\uc9c0\ub9cc \uc815\ubcf4\ub7c9 \uad00\uc810\uc5d0\uc11c \uc811\uadfc\ud574\uc57c \uc815\ud655\ud55c \uc774\ud574\uac00 \uac00\ub2a5\ud569\ub2c8\ub2e4."}),"\n",(0,a.jsx)(n.h2,{id:"definition--meaning-of-kl-divergence",children:"Definition & Meaning of KL Divergence"})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},2172:(e,n,s)=>{s.d(n,{I:()=>c,M:()=>r});var a=s(1504);const i={},t=a.createContext(i);function r(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);