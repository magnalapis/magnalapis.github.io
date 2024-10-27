"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1181],{1439:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>x,contentTitle:()=>d,default:()=>g,frontMatter:()=>c,metadata:()=>h,toc:()=>p});var i=t(4848),s=t(8453);const o=t.p+"assets/images/gner_context-7c9fe99ac2acc6adad07aa421ace3309.png",r=t.p+"assets/images/gner_prompt-baec6b1e6049ea7ac34df4cdfbb9b3c7.png",a=t.p+"assets/images/gner_sup-b78ca4620e9f5666bb8b449f1d5425c4.png",l=t.p+"assets/images/gner_beam-02dd5e36280800d1b0bf608d16135c64.png",c={id:"gner",sidebar_position:400},d="GNER",h={id:"tasks/informationextraction/gner",title:"GNER",description:"Rethinking Negative Instances for Generative Named Entity Recognition",source:"@site/docs/tasks/informationextraction/GNER.md",sourceDirName:"tasks/informationextraction",slug:"/tasks/informationextraction/gner",permalink:"/docs/tasks/informationextraction/gner",draft:!1,unlisted:!1,editUrl:"https://github.com/logicbaron/logicbaron.github.io/tree/dev/docs/tasks/informationextraction/GNER.md",tags:[],version:"current",sidebarPosition:400,frontMatter:{id:"gner",sidebar_position:400},sidebar:"InformationextractionSidebar",previous:{title:"GoLLIE",permalink:"/docs/tasks/informationextraction/gollie"},next:{title:"nuextract",permalink:"/docs/tasks/informationextraction/nuextract"}},x={},p=[{value:"Rethinking Negative Instances for Generative Named Entity Recognition",id:"rethinking-negative-instances-for-generative-named-entity-recognition",level:2},{value:"Data",id:"data",level:2},{value:"Model",id:"model",level:2},{value:"Propmt Example",id:"propmt-example",level:4},{value:"Learning with Entity Context",id:"learning-with-entity-context",level:3},{value:"Input w. context",id:"input-w-context",level:4},{value:"Entity Boundary of Generative Model",id:"entity-boundary-of-generative-model",level:3},{value:"Output Example",id:"output-example",level:4},{value:"Long Sequence prediction Issues",id:"long-sequence-prediction-issues",level:3},{value:"Result",id:"result",level:2},{value:"Ablation Study: Beam Search",id:"ablation-study-beam-search",level:3},{value:"Limitation",id:"limitation",level:3}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"gner",children:"GNER"})}),"\n",(0,i.jsx)(n.h2,{id:"rethinking-negative-instances-for-generative-named-entity-recognition",children:"Rethinking Negative Instances for Generative Named Entity Recognition"}),"\n",(0,i.jsx)(n.p,{children:"LLM\uc758 \ub4f1\uc7a5 \uc774\ud6c4 IE\ub97c LLM\uc744 \uc774\uc6a9\ud574\uc11c \ud480\ub824\ub294 \uc2dc\ub3c4\uac00 \ub9ce\uc774 \uc788\uc5c8\uc2b5\ub2c8\ub2e4. \uc5f0\uad6c\uc758 \ud750\ub984\uc740 propmt\ub97c \uc774\uc6a9\ud55c IE\uc5d0\uc11c Instruction tuning \uc744 \uc798\ud558\ub294 \ubc29\ud5a5\uc73c\ub85c \ubc1c\uc804\ud574\uc654\uc2b5\ub2c8\ub2e4. \uadf8\ub9ac\uace0 LLM\uc744 \ud65c\uc6a9\ud55c \ubb38\uc81c \ud574\uacb0\uc740 \uc5b8\uc81c\ub098 LLM output \uc815\uc81c\uc758 \ubb38\uc81c \uc5ed\uc2dc \ub0a8\uc544\uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.p,{children:"InstructUIE\ub294 \ud558\ub098\uc758 \ud14d\uc2a4\ud2b8\uc5d0\uc11c entity type-entity span\uc744 \uc804\ubd80 \ucc3e\uc544\ub0b4\ub294 \ubc29\uc2dd\uc744 \uc0ac\uc6a9\ud588\uc2b5\ub2c8\ub2e4. UniversalNER\uc740 Instruction tuning\uc744 \ud1b5\ud574 entity type\uc744 \ud558\ub098\uc529 \ub2f5\ubcc0\uc73c\ub85c \uc0dd\uc131\ud558\ub294 LLM \uc744 \ud559\uc2b5\ud588\uace0, GoLLIE \ub17c entity type guideline\uacfc \ud568\uaed8 code format\uc744 \uc0ac\uc6a9\ud588\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsxs)(n.p,{children:["GNER\uc740 \uae30\uc874 Instruction tuning \uc758 \ubb38\uc81c\uc810 \uc911 \ud558\ub098\ub85c ",(0,i.jsx)(n.strong,{children:"positive entity \uc911\uc2ec\uc758 \ud559\uc2b5 \ubc29\ubc95"}),"\uc744 \uc9c0\uc801\ud569\ub2c8\ub2e4. \ubaa8\ub378\uc774 postivie span\uc744 \ucc3e\uc544\ub0b4\ub294 \uac83 \ubfd0\ub9cc \uc544\ub2c8\ub77c ",(0,i.jsx)(n.strong,{children:"negative span\uc744 \ucc3e\uc544\ub0b4\ub294 \uac83\ub3c4 \ud568\uaed8 \ud559\uc2b5\ud574\uc57c \ud55c\ub2e4\ub294 \uc774\uc57c\uae30"}),'\uc785\ub2c8\ub2e4. BERT-base \ubc29\uc2dd\uc5d0\uc11c\ub294 \ub2f9\uc5f0\ud55c \ubc29\uc2dd\uc774\uc9c0\ub9cc LLM-base \ubc29\uc2dd\uc5d0\uc11c\ub294 \uc774\ub7ec\ud55c \uc2dc\ub3c4\uac00 \ub9ce\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4. negative mining\uc744 \uc218\ud589\ud558\ub354\ub77c\ub3c4 \uc544\ubb34\uac83\ub3c4 \uc608\uce21\ud558\uc9c0 \uc54a\ub294 \uc815\ub3c4\uc758 \ud559\uc2b5\uc774\uc5c8\uace0 "negative" tag\ub97c \uc608\uce21\ud558\uc9c0\ub294 \uc54a\uc558\uc2b5\ub2c8\ub2e4.']}),"\n",(0,i.jsxs)(n.p,{children:["GNER \ub17c\ubb38\uc740 \uae30\uc874 Bert-base NER\uc5d0\uc11c \ub9ce\uc774 \ud65c\uc6a9\ub418\uc5b4 \uc628 ",(0,i.jsx)(n.strong,{children:"BIO \ud0dc\uadf8 \uae30\ubc18\uc758 inference\ub97c \ud559\uc2b5"}),'\ud569\ub2c8\ub2e4. \ubaa8\ub378\uc740 negative - "O": \uc608\uce21\uc744 \ud568\uaed8 \ud559\uc2b5\ud558\uac8c \ub429\ub2c8\ub2e4. \ub610\ud55c Generated text \ud574\uc11d\uc744 \uc704\ud55c \uba54\ucee4\ub2c8\uc998\uc744 \uc81c\uc548\ud569\ub2c8\ub2e4.']}),"\n",(0,i.jsx)(n.h2,{id:"data",children:"Data"}),"\n",(0,i.jsx)(n.p,{children:"InstructUIE dataset\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.p,{children:"\ud559\uc2b5\uc5d0 \uc0ac\uc6a9\ub41c \ub370\uc774\ud130\uc151\uc740 Pile-NER \ub370\uc774\ud130\uc151\uc785\ub2c8\ub2e4. Evaluation\uc5d0\ub294 CrossNER\uacfc MIT \ub370\uc774\ud130\uc151\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.p,{children:"Supervised Dataset\uc73c\ub85c\ub294 InstructUIE\uc5d0\uc11c \uc0ac\uc6a9\ub41c 20\uac1c\uc758 \ub370\uc774\ud130\uc151 \uc911 18\uac1c\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. BIO-format\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub294 2\uac1c\uc758 \ub370\uc774\ud130\uc151\uc740 \uc81c\uc678\ud569\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.h2,{id:"model",children:"Model"}),"\n",(0,i.jsx)(n.p,{children:"Flan-T5(encoder-decoder)\ubaa8\ub378\uacfc LLaMa(decoder-only) \ubaa8\ub378\uc744 \ubc31\ubcf8\uc73c\ub85c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.p,{children:"UniversalNER, GLiNER, InstructUIE, GoLLIE\ub97c Baseline \ubaa8\ub378\ub85c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.h4,{id:"propmt-example",children:"Propmt Example"}),"\n",(0,i.jsx)("pre",{children:(0,i.jsxs)("code",{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)("b",{children:"Token inputs (X)"}),": John explored Tokyo , sampling its famed sushi ,\nand flew back to New York ."]}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)("b",{children:"Entity type (L)"}),": [Person, Location]"]})]})}),"\n",(0,i.jsx)(n.p,{children:"GNER \ubaa8\ub378\uc740 \ud1a0\ud070 \ubcc4\ub85c entity type \uc608\uce21\uc744 \uc9c4\ud589\ud558\uae30 \ub54c\ubb38\uc5d0 \ud6c8\ub828\uc5d0 \uc0ac\uc6a9\ud560 \ub370\uc774\ud130 \uad6c\uc131\uc744 \uace0\ubbfc\ud574\uc57c \ud588\uc2b5\ub2c8\ub2e4. Instruct Tuning \uacfc\uc815\uc5d0\uc11c entity \uc5d0 \ud574\ub2f9\ud558\ub294 token \ub9cc\uc744 \uc0ac\uc6a9\ud574\uc11c \ud6c8\ub828\uc744 \ud558\ub294 \ubc29\ubc95\uc740 entity \uc8fc\ubcc0 context\uc758 \uc815\ubcf4\ub97c \ubaa8\ub378\uc774 \ud559\uc2b5\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.h3,{id:"learning-with-entity-context",children:"Learning with Entity Context"}),"\n",(0,i.jsxs)(n.p,{children:['GNER \ubaa8\ub378\uc740 IE \uacfc\uc81c\uc5d0\uc11c\ub294 entity span \uc790\uccb4\uac00 \uc544\ub2c8\ub77c \uc8fc\ubcc0\uc758 context \uac00 \ub9e4\uc6b0 \uc911\uc694\ud55c \uc5ed\ud560\uc744 \ud55c\ub2e4\uace0 \uc774\uc57c\uae30\ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4\uc11c "go to" \ub4a4\uc5d0\ub294 Location\uc5d0 \ud574\ub2f9\ud558\ub294 \ub2e8\uc5b4\uac00 \uc704\uce58\ud560 \ud655\ub960\uc774 \ub192\uc2b5\ub2c8\ub2e4. GNER \ubaa8\ub378\uc740 entity \ub9cc\uc744 \uc0ac\uc6a9\ud574\uc11c \ud559\uc2b5\uc744 \ud558\ub294 \ubc29\uc2dd\uc740 context \uc815\ubcf4\ub97c \ud65c\uc6a9\ud560 \uc218 \uc5c6\ub2e4\uace0 \uc774\uc57c\uae30\ud558\uba70, ',(0,i.jsx)(n.strong,{children:"entity \uc5d0\uc11c \uac00\uae4c\uc6b4 \uc21c\uc11c\ub300\ub85c L \uae38\uc774\ub9cc\ud07c\uc758 \ud1a0\ud070\uc744 \uc720\uc9c0\ud558\ub294 \ubc29\uc2dd\uc73c\ub85c context \uc815\ubcf4\ub97c input\uc5d0 \ub0a8\uaca8\ub461\ub2c8\ub2e4"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"input-w-context",children:"Input w. context"}),"\n",(0,i.jsx)("pre",{children:(0,i.jsxs)("code",{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)("b",{children:"Training Propmt"}),"\n",(0,i.jsx)("b",{children:"w/o context"}),": [John](Person) [Tokyo](Location) [New York](Location)."]}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)("b",{children:"w/ context length 2"}),": [John](Person) explored [Tokyo](Location) , sampling ......\nback to [New York](Location) ."]}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)("b",{children:"w/ full context"}),": [John](Person) explored [Tokyo](Location) , sampling its\nfamed sushi , and flew back to [New York](Location)"]})]})}),"\n",(0,i.jsxs)(n.p,{children:["context length\ub97c \uc0ac\uc6a9\ud55c Prompt \uc608\uc2dc\uc785\ub2c8\ub2e4. token \ub2e8\uc704 \ud559\uc2b5\uc744 \ud560 \ub54c ",(0,i.jsx)(n.strong,{children:"context\ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc73c\uba74 \uc644\uc804\ud788 positive samples\ub85c\ub9cc \ud559\uc2b5\uc744 \ud558\ub294 \uc608\uc2dc"}),"\uac00 \ub429\ub2c8\ub2e4. \uc77c\ubc18\uc801\uc73c\ub85c \uc6b0\ub9ac\uac00 \uc55e\uc5d0\uc11c \uc0b4\ud3b4\ubcf8 GoLLie, InstructUIE \ub4f1\uc758 \ub17c\ubb38\uc740 \uc0ac\uc2e4 ",(0,i.jsx)(n.strong,{children:"w/ full context"})," \ub85c \ud559\uc2b5\ud569\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uadf8\ub7ec\ud55c \ub17c\ubb38\ub4e4\uc740 full context\uc5d0\uc11c \ud2b9\uc815 entity \ub97c \ucc3e\uc544\ub0b4\ub294 \ubaa8\ub378\uc774\uc9c0\ub9cc GNER\uc740 token \ub2e8\uc704\ub85c entity type\uc744 \uc608\uce21\ud558\ub294 \ubaa8\ub378\uc785\ub2c8\ub2e4."]}),"\n",(0,i.jsx)("div",{style:{textAlign:"Center"},children:(0,i.jsx)("img",{src:o,style:{border:"solid",width:400}})}),"\n",(0,i.jsx)(n.p,{children:"context\ub97c \ud558\ub098\ub97c \ud3ec\ud568\uc2dc\ud0a4\uba74 \ud558\ub098\ub3c4 \ud3ec\ud568\uc2dc\ud0a4\uc9c0 \uc54a\ub294 \uac83\uc5d0 \ube44\ud574 \uc131\ub2a5\uc774 \ud06c\uac8c \uc99d\uac00\ud569\ub2c8\ub2e4. \uc774\ud6c4\ub85c\ub3c4 context length\ub97c \ub298\ub9b4\uc218\ub85d \ubaa8\ub378\uc758 \uc131\ub2a5\uc774 \uc870\uae08\uc529 \ud5a5\uc0c1\ud55c\ub2e4\ub294 \uc0ac\uc2e4\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.h3,{id:"entity-boundary-of-generative-model",children:"Entity Boundary of Generative Model"}),"\n",(0,i.jsx)(n.p,{children:"context\ub97c \ud3ec\ud568\uc2dc\ud0a4\uac8c \ub418\uba74 \ubaa8\ub378\uc758 \uc608\uce21\uc744 \uc774\ud574\ud558\uae30\uac00 \uc5b4\ub824\uc6cc\uc9d1\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4\uc11c, \ub2e8\uc77c Entity span\ub9cc\uc744 \uc0ac\uc6a9\ud55c\ub2e4\uba74 \ubaa8\ub378\uc758 output\uc744 \ud574\uc11d\ud560 \ud544\uc694 \uc5c6\uc774 \ubaa8\ub378\uc758 \uc608\uce21\uac12\uc744 \uadf8\ub300\ub85c \uc0ac\uc6a9\ud558\uba74 \ub429\ub2c8\ub2e4. \ud558\uc9c0\ub9cc context\uac00 \ud3ec\ud568\ub418\uba74 \uac01\uac01\uc758 token\uc5d0 \ub300\ud55c \uc608\uce21\uac12\uc744 \uad6c\ubd84\ud560 \ud544\uc694\uac00 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.p,{children:'GNER \ubaa8\ub378\uc740 \uc774 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 BIO \uc804\ub7b5\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. negative sample \uc740 "O" tag\ub97c \uc0ac\uc6a9\ud558\uace0 entity type\uc5d0 \ud574\ub2f9\ud558\ub294 token\uc740 "B-entity type" \uacfc "I-entity type" \uc73c\ub85c \ub77c\ubca8\ub9c1\ud569\ub2c8\ub2e4. \ubaa8\ub378\uc758 output\uc740 \uac01\uac01\uc758 token\uc5d0 \ub300\ud574 BIO label\uc744 \uc608\uce21\ud558\ub294 \uc544\ub798\uc640 \uac19\uc740 \ud615\ud0dc\uc785\ub2c8\ub2e4.'}),"\n",(0,i.jsx)(n.h4,{id:"output-example",children:"Output Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"John(B-Person) explored(O) Tokyo(B-Location)\n......(omitted text) and(O) flew(O) back(O) to(O)\nNew(B-Location) York(I-Location) .(O)\n"})}),"\n",(0,i.jsx)(n.p,{children:"\ucd5c\uc885\uc801\uc73c\ub85c \ubaa8\ub378\uc740 \uc544\ub798\uc640 \uac19\uc740 Propmt\ub97c \ud65c\uc6a9\ud558\uc5ec \ubaa8\ub378\uc744 Instruction Tuning \ud569\ub2c8\ub2e4. GoLLIE \uc5d0\uc11c \uc0ac\uc6a9\ud55c Regularization \uacfc external entity type sampling\uc744 \ud6c8\ub828\uc5d0\uc11c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."}),"\n",(0,i.jsx)("div",{style:{textAlign:"Center"},children:(0,i.jsx)("img",{src:r,style:{border:"solid",width:500}})}),"\n",(0,i.jsx)(n.h3,{id:"long-sequence-prediction-issues",children:"Long Sequence prediction Issues"}),"\n",(0,i.jsxs)(n.p,{children:["TokenClassification \uc73c\ub85c BIO \ud0dc\uadf8\ub97c \uc608\uce21\ud558\ub294 Bert-base \ubaa8\ub378\uacfc \ub2ec\ub9ac ",(0,i.jsx)(n.code,{children:"token(label)"})," set\uc744 \uc0dd\uc131\ud558\ub294 LLM \ubc29\uc2dd\uc740 generation \uc5d0 \uc758\ud55c \uace0\uc9c8\uc801\uc778 \ubb38\uc81c\uac00 \ub2f9\uc5f0\ud788 \ubc1c\uc0dd\ud569\ub2c8\ub2e4. ",(0,i.jsx)(n.strong,{children:"Omission, Additions and Substituions"})," \uac00 \ub300\ud45c\uc801\uc778 \uc608\uc2dc\uc785\ub2c8\ub2e4. \ub2e8\uc5b4\uac00 \uc0dd\ub7b5\ub418\uac70\ub098, \uc5c6\ub358 \ub2e8\uc5b4\uac00 \ucd94\uac00\ub418\uac70\ub098 \ub2e8\uc5b4\uac00 \ubcc0\ud615\ub418\ub294 \ubb38\uc81c\uc785\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(n.p,{children:["\ubaa8\ub378\uc758 output ",(0,i.jsx)(n.code,{children:"token(label)"})," set\uc774 input token set\uacfc \uc77c\uce58\ud558\uc9c0 \uc54a\uc73c\ubbc0\ub85c \ubaa8\ub378\uc758 \uc5d0\uce21 label\uc744 \uc801\uc808\ud558\uac8c input token\uc5d0 \ud560\ub2f9\ud574\uc8fc\uae30 \uc704\ud55c \ucc98\ub9ac\uac00 \ud544\uc694\ud569\ub2c8\ub2e4. GNER\uc5d0\uc11c\ub294 ",(0,i.jsx)(n.strong,{children:"Longest Common Subsequence"})," \uc54c\uace0\ub9ac\uc998\uacfc ",(0,i.jsx)(n.strong,{children:"Back Tokenization"}),"\uc744 \ud65c\uc6a9\ud569\ub2c8\ub2e4. \uc774 \ubd80\ubd84\uc758 \uc2e4\uc81c \uad6c\ud604\uc740 \ub17c\ubb38\uc758 \ub258\uc559\uc2a4\uc640 \uc57d\uac04 \ucc28\uc774\uac00 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Back Tokenization"}),"\uc740 \uc608\uce21 \ud1a0\ud070\uc774 \uc6d0\ubcf8\uacfc \ub2e4\ub974\uac8c \ubcc0\ud615\ub41c \uacbd\uc6b0\uc5d0 \ub300\uc751\ud569\ub2c8\ub2e4. LLM\uc740 \uac00\ub054 \uc0dd\uc131 \uacfc\uc815\uc5d0\uc11c \uc624\ud0c0\ub97c \uace0\uce58\ub294 \ub4f1\uc758 \uc6d0\ub2e8\uc5b4\uc758 \ubcc0\ud615\uc744 \uc77c\uc73c\ud0b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4\uc11c ",(0,i.jsx)(n.code,{children:"antropologia"})," \ub77c\ub294 \ub2e8\uc5b4\uac00 ",(0,i.jsx)(n.code,{children:"antropologa"})," \ub85c \ubc14\ub00c\uc5b4\uc11c \uc0dd\uc131\ub418\ub294 \uacbd\uc6b0\uac00 \uc788\uc2b5\ub2c8\ub2e4. Back Tokenization\uc740 \uc774 \ubb38\uc81c\ub97c \uc5b4\ub290\uc815\ub3c4 \ud574\uacb0\ud558\uae30 \uc704\ud55c \uc54c\uace0\ub9ac\uc998\uc73c\ub85c \uc6d0\ubcf8 \ub2e8\uc5b4\ub97c \uadf8\ub300\ub85c \uc608\uce21 \uac12\uacfc \ub9e4\uce6d\ud558\uc9c0 \uc54a\uace0 model vocabulary\ub97c \uc0ac\uc6a9\ud558\uc5ec tokenizing -> detokenizing step\uc744 \uac70\uccd0 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \ubaa8\ub4e0 \ubcc0\ud615\uc744 \uc7a1\uc544\ub0bc \uc218 \ub294 \uc5c6\uc9c0\ub9cc \uc77c\ubd80 \ucf00\uc774\uc2a4\ub294 \uc7a1\uc544\ub0bc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, ",(0,i.jsx)(n.code,{children:"antropologia"})," -> ",(0,i.jsx)(n.code,{children:"antro, polo, g, <unknown>, a"})," -> ",(0,i.jsx)(n.code,{children:"antropologa"})," \ub85c \ub9e4\uce6d\ub418\uc5b4 \ubcc0\ud615\uc5d0 \ub354\uc6b1 \uac15\uc778\ud574\uc9d1\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(n.p,{children:["\uc6d0\ubcf8 word \uc5d0 \ub300\ud55c back tokenization\uacb0\uacfc\uac00 \uc0dd\uc131\ub41c \ub2e8\uc5b4\uc640 \ub9e4\uce6d\uc774 \ub418\uc9c0 \uc54a\uc744 \uacbd\uc6b0\uc5d0\ub294 \uc0dd\uc131\ub41c \ub2e8\uc5b4\uc640 \uc6d0\ubcf8 \ub2e8\uc5b4\uac00 \uc5bc\ub9c8\ub098 \uc77c\uce58\ud558\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4. \ud655\uc778\ud558\ub294 \ubc29\ubc95\uc740 \ub450 \ub2e8\uacc4\ub85c \uccab \ubc88\uc9f8 \ubc29\ubc95\uc740 ",(0,i.jsx)(n.strong,{children:"substring match"}),"\uc785\ub2c8\ub2e4. substring match\uac00 \ub9de\uc9c0 \uc54a\uc744 \uacbd\uc6b0 ",(0,i.jsx)(n.strong,{children:"Longest Common Subsequence"})," \uc54c\uace0\ub9ac\uc998\uc744 \ud1b5\ud574 \uc2e4\uc81c \ud1a0\ud070 \uc151\uacfc \uc608\uce21 \ud1a0\ud070 \uc151 \uc0ac\uc774 \uc77c\uce58\ud558\ub294 \ud1a0\ud070\uc774 \uac00\uc7a5 \ub9ce\uc544\uc9c0\ub294 \ub9e4\ud551\uc744 \ucc3e\uc2b5\ub2c8\ub2e4. LCS \uc54c\uace0\ub9ac\uc998\uc5d0 \ub300\ud574\uc11c\ub294 \ub530\ub85c \uc124\uba85\ud558\uc9c0 \uc54a\uaca0\uc2b5\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(n.h2,{id:"result",children:"Result"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Zero-shot"})," \uc5d0\uc11c GNER \ubaa8\ub378\uc740 \uac70\uc758 \ubaa8\ub4e0 \ub370\uc774\ud130\uc151\uc5d0\uc11c f1@60 \uc810\uc744 \ub118\uc5b4\uac11\ub2c8\ub2e4! GNER-7B \ubaa8\ub378\uc740 UniNER-7B \ubcf4\ub2e4 f1@12.7 \uc810\uc744 \ud3c9\uade0\uc801\uc73c\ub85c \uc55e\uc12d\ub2c8\ub2e4. GNER-7B \ubaa8\ub378\uc740 UniNER-13B \ubaa8\ub378\ub3c4 f1@10.5\uc810 \uc55e\uc11c\uace0 \uc788\uc2b5\ub2c8\ub2e4. 7B \ubcf4\ub2e4 \ub354 \uc791\uc740 \uc0ac\uc774\uc988\uc758 \ubaa8\ub378\ub3c4 UniNER \uacfc \ube44\uc2b7\ud558\uac70\ub098 \ub354 \uc88b\uc740 \uc131\ub2a5\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Supervised Evaluation"}),"\uc740: UniNER, InstructUIE \uc640 \uac19\uc740 backbone \ubaa8\ub378, \uac19\uc740 dataset \uc744 \uc0ac\uc6a9\ud574 \ube44\uad50\ud569\ub2c8\ub2e4. flan-T5 \ubaa8\ub378\uc744 \ud65c\uc6a9\ud55c \uacbd\uc6b0 f1@4.6\uc810 \uc55e\uc11c\uace0, LLama \ubaa8\ub378\uc758 \uacbd\uc6b0 f1@1 \uc810\uc774 \ud5a5\uc0c1\ub429\ub2c8\ub2e4. GNER \ub17c\ubb38\uc758 \uacb0\uacfc\ub97c \uc0b4\ud3b4\ubcf4\uba74 \ubaa8\ub378\uc758 \uc0ac\uc774\uc988\uac00 \uc5b4\ub290 \uc815\ub3c4 \uc774\uc0c1 \ucee4\uc9c0\uba74 \uc131\ub2a5 \ud5a5\uc0c1 \uc18d\ub3c4\uac00 \uc218\ub834\ud569\ub2c8\ub2e4. supervised setting \uc5d0\uc11c\ub294 783M \uc0ac\uc774\uc988 \ubaa8\ub378\ub85c\ub3c4 \ucda9\ubd84\ud788 \ubaa8\ub378\uc774 \ubb38\uc81c\ub97c \uc798 \ud574\uacb0\ud558\uace0 \uc788\ub2e4\ub294 \ub9d0\uc774\uae30\ub3c4 \ud569\ub2c8\ub2e4."]}),"\n",(0,i.jsx)("div",{style:{textAlign:"Center"},children:(0,i.jsx)("img",{src:a,style:{border:"solid",width:500}})}),"\n",(0,i.jsx)(n.p,{children:"\ub17c\ubb38\uc5d0\uc11c\ub294 GNER-T5-large \ubaa8\ub378\uc774 UniNER \uc5d0 \ube44\ud574 10\ubc30 \uc801\uc740 \uc0ac\uc774\uc988, 10\ubc30 \ube60\ub978 inference \uc18d\ub3c4\uc5d0\uc11c \ub354 \uc88b\uc740 \uc131\ub2a5\uc744 \ubcf4\uc5ec\uc8fc\uace0 \uc788\uc74c\uc744 \uac15\uc870\ud569\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.h3,{id:"ablation-study-beam-search",children:"Ablation Study: Beam Search"}),"\n",(0,i.jsxs)(n.p,{children:["LLM\uc758 \uacbd\uc6b0 generation \uc5d0\uc11c \uc798 \uc54c\ub824\uc9c4 ",(0,i.jsx)(n.strong,{children:"beam search \ubcf4\ub2e4 nucleus sampling\uc744 \ud65c\uc6a9"}),"\ud569\ub2c8\ub2e4. nucleus sampling\uc740 beam search\uc5d0 \ube44\ud574 surprising result\uac00 \uc798 \uc0dd\uc131\ub41c\ub2e4\ub294 \uc7a5\uc810\uc744 \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,i.jsx)("div",{style:{textAlign:"Center"},children:(0,i.jsx)("img",{src:l,style:{border:"solid",width:500}})}),"\n",(0,i.jsxs)(n.p,{children:["IE task\ub97c \ud478\ub294 \uacfc\uc815\uc5d0\uc11c\ub3c4 beam search \uc640 nucleus sampling \uc5d0 \uc758\ud55c \uc131\ub2a5 \ubcc0\ud654\uac00 \uc788\uc2b5\ub2c8\ub2e4. ",(0,i.jsx)(n.strong,{children:"UniNER \ubc29\uc2dd\uc758 \uc811\uadfc\uc758 \uacbd\uc6b0 Beam search\ub97c \uc0ac\uc6a9\ud560 \uacbd\uc6b0 beam size\uac00 \ucee4\uc9c8\uc218\ub85d \uc131\ub2a5\uc774 \ud558\ub77d"}),"\ud569\ub2c8\ub2e4. \ubc18\uba74, ",(0,i.jsx)(n.strong,{children:"GNER\uc740 beam search\ub97c \ud65c\uc6a9\ud558\uba74 \uc131\ub2a5\uc774 \ud5a5\uc0c1"}),"\ub429\ub2c8\ub2e4. \uc800\uc790\ub4e4\uc740 \uc774 \ud604\uc0c1\uc774 beam size\uac00 \ucee4\uc9c0\uba74 subsequent token\ub4e4\uc744 \ubc88\uc5ed\ud558\uba74\uc11c earlier mistakes\uac00 \uace0\uccd0\uc9c4\ub2e4\uace0 \uc774\uc57c\uae30\ud569\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(n.p,{children:'\uc608\ub97c \ub4e4\uc5b4\uc11c, "Tesla CEO Elon Musk" \uae4c\uc9c0 \ubaa8\ub378\uc774 \ud655\uc778\ud588\uc744 \ub54c Elon Musk\ub97c PERSON\uc73c\ub85c \uc608\uce21\ud558\uc9c0 \ubabb\ud558\ub354\ub77c\ub3c4, "Tesla CEO Elon Musk plays an ..." \uae4c\uc9c0 \ud655\uc778\ud55c \ub4a4\uc5d0\ub294 \uac00\uc7a5 \ud655\ub960 \ub192\uc740 Beam \uc774 Elon Musk\ub97c PERSON\uc73c\ub85c \uc608\uce21\ud558\uac8c \ub418\ub294 \uacbd\uc6b0\uac00 \ub9ce\uc558\ub2e4\ub294 \uc0ac\uc2e4\uc785\ub2c8\ub2e4.'}),"\n",(0,i.jsx)(n.h1,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(n.p,{children:"BIO tagging \ubc29\uc2dd\uc774 LLM\uc5d0\uc11c \uc2dc\ub3c4\ud574\ubcf4\ub294 \uac83\uc774 \uc0dd\uac01\ud574\ubcfc\ub9cc\ud55c\ub370 \uc0dd\uac01\ud574\ubcf8\uc801\uc774 \uc5c6\uc5c8\uc2b5\ub2c8\ub2e4. GNER \ubaa8\ub378\uc740 \ub2e8\uc21c\ud788 BIO schema\ub97c \uc801\uc6a9\ud558\ub294 \uac83\uc774 \uc544\ub2c8\ub77c \ubaa8\ub378\uc774 negative sample\uc744 \ud559\uc2b5\ud558\ub294 \uac83\uc774 \uc911\uc694\ud558\ub2e4\uace0 \uc8fc\uc7a5\ud569\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \uc2e4\uc81c\ub85c \uc131\ub2a5 \ud5a5\uc0c1\uc774 \ub9e4\uc6b0 \ucef8\uc73c\uba70 \uc131\ub2a5\uc774 \uc218\ub834\ud558\ub294 \ubaa8\ub378 \uc0ac\uc774\uc988\ub3c4 \ud06c\uac8c \ub0ae\ucd94\uc5c8\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.h3,{id:"limitation",children:"Limitation"}),"\n",(0,i.jsx)(n.p,{children:"GNER \ubaa8\ub378\uc740 flat-NER \ubc29\uc2dd\uc774 \uc801\uc6a9\ub418\uc5b4 \ubd88\uc5f0\uc18d\uc801\uc73c\ub85c \ub4f1\uc7a5\ud558\ub294 entity\ub97c \ucc98\ub9ac\ud558\uae30 \uc5b4\ub835\ub2e4\ub294 \uc810\uc744 \ubb38\uc81c\ub85c \uaf3d\uc2b5\ub2c8\ub2e4. \uadf8\ub7f0\ub370 \uc774\ub7f0 \ubcf5\uc7a1\ud55c \uad6c\uc870\uc758 entity prediction\uc740 \uc5b8\uc81c\ub098 \uc5b4\ub824\uc6b4 \uc77c\uc774\uc5c8\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.h1,{id:"ref",children:"Ref"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://arxiv.org/pdf/2402.16602.pdf",children:"Rethinking Negative Instances for Generative Named Entity Recognition"})}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(6540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);