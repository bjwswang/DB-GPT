(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[470],{78141:function(e,t,a){"use strict";var i=a(78997);t.Z=void 0;var n=i(a(76906)),o=a(9268),r=(0,n.default)((0,o.jsx)("path",{d:"m19 8-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"}),"Cached");t.Z=r},22199:function(e,t,a){Promise.resolve().then(a.bind(a,16692))},16692:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return ea}});var i=a(9268),n=a(56008),o=a(86006),r=a(50645),s=a(5737),l=a(78635),c=a(70900),d=a(44334),h=a(311),p=a(22046),u=a(53113),g=a(83192),m=a(46750),v=a(40431),x=a(89791),f=a(47562),C=a(46319),b=a(53832),y=a(49657),j=a(88930),S=a(47093),Z=a(18587);function _(e){return(0,Z.d6)("MuiChip",e)}let P=(0,Z.sI)("MuiChip",["root","clickable","colorPrimary","colorNeutral","colorDanger","colorInfo","colorSuccess","colorWarning","colorContext","disabled","endDecorator","focusVisible","label","labelSm","labelMd","labelLg","sizeSm","sizeMd","sizeLg","startDecorator","variantPlain","variantSolid","variantSoft","variantOutlined"]),w=o.createContext({disabled:void 0,variant:void 0,color:void 0});var I=a(326);let D=["children","className","color","slotProps","onClick","disabled","size","variant","startDecorator","endDecorator"],T=e=>{let{disabled:t,size:a,color:i,clickable:n,variant:o,focusVisible:r}=e,s={root:["root",t&&"disabled",i&&`color${(0,b.Z)(i)}`,a&&`size${(0,b.Z)(a)}`,o&&`variant${(0,b.Z)(o)}`,n&&"clickable"],action:["action",t&&"disabled",r&&"focusVisible"],label:["label",a&&`label${(0,b.Z)(a)}`],startDecorator:["startDecorator"],endDecorator:["endDecorator"]};return(0,f.Z)(s,_,{})},k=(0,r.Z)("div",{name:"JoyChip",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e,ownerState:t})=>{var a,i,n,o,r,s;return[(0,v.Z)({"--Chip-decoratorChildOffset":"min(calc(var(--Chip-paddingInline) - (var(--_Chip-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Chip-decoratorChildHeight)) / 2), var(--Chip-paddingInline))","--Chip-decoratorChildRadius":"max(var(--_Chip-radius) - var(--variant-borderWidth, 0px) - var(--_Chip-paddingBlock), min(var(--_Chip-paddingBlock) + var(--variant-borderWidth, 0px), var(--_Chip-radius) / 2))","--Chip-deleteRadius":"var(--Chip-decoratorChildRadius)","--Chip-deleteSize":"var(--Chip-decoratorChildHeight)","--Avatar-radius":"var(--Chip-decoratorChildRadius)","--Avatar-size":"var(--Chip-decoratorChildHeight)","--Icon-margin":"initial","--unstable_actionRadius":"var(--_Chip-radius)"},"sm"===t.size&&{"--Chip-gap":"0.25rem","--Chip-paddingInline":"0.5rem","--Chip-decoratorChildHeight":"calc(min(1.125rem, var(--_Chip-minHeight)) - 2 * var(--variant-borderWidth, 0px))","--Icon-fontSize":"calc(var(--_Chip-minHeight) / 1.714)","--_Chip-minHeight":"var(--Chip-minHeight, 1.5rem)",fontSize:e.vars.fontSize.xs},"md"===t.size&&{"--Chip-gap":"0.375rem","--Chip-paddingInline":"0.75rem","--Chip-decoratorChildHeight":"min(1.375rem, var(--_Chip-minHeight))","--Icon-fontSize":"calc(var(--_Chip-minHeight) / 1.778)","--_Chip-minHeight":"var(--Chip-minHeight, 2rem)",fontSize:e.vars.fontSize.sm},"lg"===t.size&&{"--Chip-gap":"0.5rem","--Chip-paddingInline":"1rem","--Chip-decoratorChildHeight":"min(1.75rem, var(--_Chip-minHeight))","--Icon-fontSize":"calc(var(--_Chip-minHeight) / 2)","--_Chip-minHeight":"var(--Chip-minHeight, 2.5rem)",fontSize:e.vars.fontSize.md},{"--_Chip-radius":"var(--Chip-radius, 1.5rem)","--_Chip-paddingBlock":"max((var(--_Chip-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Chip-decoratorChildHeight)) / 2, 0px)",minHeight:"var(--_Chip-minHeight)",paddingInline:"var(--Chip-paddingInline)",borderRadius:"var(--_Chip-radius)",position:"relative",fontWeight:e.vars.fontWeight.md,fontFamily:e.vars.fontFamily.body,display:"inline-flex",alignItems:"center",justifyContent:"center",whiteSpace:"nowrap",textDecoration:"none",verticalAlign:"middle",boxSizing:"border-box",[`&.${P.disabled}`]:{color:null==(a=e.variants[`${t.variant}Disabled`])?void 0:null==(i=a[t.color])?void 0:i.color}}),...t.clickable?[{"--variant-borderWidth":"0px",color:null==(r=e.variants[t.variant])?void 0:null==(s=r[t.color])?void 0:s.color}]:[null==(n=e.variants[t.variant])?void 0:n[t.color],{[`&.${P.disabled}`]:null==(o=e.variants[`${t.variant}Disabled`])?void 0:o[t.color]}]]}),z=(0,r.Z)("span",{name:"JoyChip",slot:"Label",overridesResolver:(e,t)=>t.label})(({ownerState:e})=>(0,v.Z)({display:"inline-block",overflow:"hidden",textOverflow:"ellipsis",order:1,minInlineSize:0,flexGrow:1},e.clickable&&{zIndex:1,pointerEvents:"none"})),R=(0,r.Z)("button",{name:"JoyChip",slot:"Action",overridesResolver:(e,t)=>t.action})(({theme:e,ownerState:t})=>{var a,i,n,o;return[{position:"absolute",zIndex:0,top:0,left:0,bottom:0,right:0,border:"none",cursor:"pointer",padding:"initial",margin:"initial",backgroundColor:"initial",textDecoration:"none",borderRadius:"inherit",[e.focus.selector]:e.focus.default},null==(a=e.variants[t.variant])?void 0:a[t.color],{"&:hover":null==(i=e.variants[`${t.variant}Hover`])?void 0:i[t.color]},{"&:active":null==(n=e.variants[`${t.variant}Active`])?void 0:n[t.color]},{[`&.${P.disabled}`]:null==(o=e.variants[`${t.variant}Disabled`])?void 0:o[t.color]}]}),O=(0,r.Z)("span",{name:"JoyChip",slot:"StartDecorator",overridesResolver:(e,t)=>t.startDecorator})({"--Avatar-marginInlineStart":"calc(var(--Chip-decoratorChildOffset) * -1)","--Chip-deleteMargin":"0 0 0 calc(var(--Chip-decoratorChildOffset) * -1)","--Icon-margin":"0 0 0 calc(var(--Chip-paddingInline) / -4)",display:"inherit",marginInlineEnd:"var(--Chip-gap)",order:0,zIndex:1,pointerEvents:"none"}),N=(0,r.Z)("span",{name:"JoyChip",slot:"EndDecorator",overridesResolver:(e,t)=>t.endDecorator})({"--Chip-deleteMargin":"0 calc(var(--Chip-decoratorChildOffset) * -1) 0 0","--Icon-margin":"0 calc(var(--Chip-paddingInline) / -4) 0 0",display:"inherit",marginInlineStart:"var(--Chip-gap)",order:2,zIndex:1,pointerEvents:"none"}),A=o.forwardRef(function(e,t){let a=(0,j.Z)({props:e,name:"JoyChip"}),{children:n,className:r,color:s="primary",slotProps:l={},onClick:c,disabled:d=!1,size:h="md",variant:p="solid",startDecorator:u,endDecorator:g}=a,f=(0,m.Z)(a,D),{getColor:b}=(0,S.VT)(p),Z=b(e.color,s),_=!!c||!!l.action,P=(0,v.Z)({},a,{disabled:d,size:h,color:Z,variant:p,clickable:_,focusVisible:!1}),A="function"==typeof l.action?l.action(P):l.action,E=o.useRef(null),{focusVisible:H,getRootProps:L}=(0,C.Z)((0,v.Z)({},A,{disabled:d,ref:E}));P.focusVisible=H;let U=T(P),B=(0,v.Z)({},f,{slotProps:l}),[F,J]=(0,I.Z)("root",{ref:t,className:(0,x.Z)(U.root,r),elementType:k,externalForwardedProps:B,ownerState:P}),[W,M]=(0,I.Z)("label",{className:U.label,elementType:z,externalForwardedProps:B,ownerState:P}),$=(0,y.Z)(M.id),[V,Y]=(0,I.Z)("action",{className:U.action,elementType:R,externalForwardedProps:B,ownerState:P,getSlotProps:L,additionalProps:{"aria-labelledby":$,as:null==A?void 0:A.component,onClick:c}}),[G,K]=(0,I.Z)("startDecorator",{className:U.startDecorator,elementType:O,externalForwardedProps:B,ownerState:P}),[X,q]=(0,I.Z)("endDecorator",{className:U.endDecorator,elementType:N,externalForwardedProps:B,ownerState:P}),Q=o.useMemo(()=>({disabled:d,variant:p,color:"context"===Z?void 0:Z}),[Z,d,p]);return(0,i.jsx)(w.Provider,{value:Q,children:(0,i.jsxs)(F,(0,v.Z)({},J,{children:[_&&(0,i.jsx)(V,(0,v.Z)({},Y)),(0,i.jsx)(W,(0,v.Z)({},M,{id:$,children:n})),u&&(0,i.jsx)(G,(0,v.Z)({},K,{children:u})),g&&(0,i.jsx)(X,(0,v.Z)({},q,{children:g}))]}))})});var E=a(11437),H=a(90545),L=a(35086),U=a(866),B=a(28086),F=a(65326),J=a.n(F),W=a(72474),M=a(59534),$=a(78141),V=a(50157),Y=a(23910),G=a(21628),K=a(1031),X=a(52040);let{Dragger:q}=V.default,Q=(0,r.Z)(s.Z)(e=>{let{theme:t}=e;return{width:"50%",backgroundColor:"dark"===t.palette.mode?t.palette.background.level1:"#fff",...t.typography.body2,padding:t.spacing(1),textAlign:"center",borderRadius:4,color:t.vars.palette.text.secondary}}),ee=["Choose a Datasource type","Setup the Datasource"],et=[{type:"text",title:"Text",subTitle:"Fill your raw text"},{type:"webPage",title:"URL",subTitle:"Fetch the content of a URL"},{type:"file",title:"Document",subTitle:"Upload a document, document type can be PDF, CSV, Text, PowerPoint, Word, Markdown"}];var ea=()=>{let e=(0,n.useRouter)(),t=(0,n.useSearchParams)().get("name"),{mode:a}=(0,l.tv)(),[r,m]=(0,o.useState)(!1),[v,x]=(0,o.useState)(0),[f,C]=(0,o.useState)(""),[b,y]=(0,o.useState)([]),[j,S]=(0,o.useState)(""),[Z,_]=(0,o.useState)(""),[P,w]=(0,o.useState)(""),[I,D]=(0,o.useState)(""),[T,k]=(0,o.useState)(null),[z,R]=(0,o.useState)(0),[O,N]=(0,o.useState)(0),[F,V]=(0,o.useState)(!0);return(0,o.useEffect)(()=>{(async function(){let e=await fetch("".concat(X.env.API_BASE_URL,"/knowledge/").concat(t,"/document/list"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({page:1,page_size:20})}),a=await e.json();a.success&&(y(a.data.data),R(a.data.total),N(a.data.page))})()},[]),(0,i.jsxs)("div",{className:"p-4",children:[(0,i.jsxs)(c.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",sx:{marginBottom:"20px"},children:[(0,i.jsxs)(d.Z,{"aria-label":"breadcrumbs",children:[(0,i.jsx)(h.Z,{onClick:()=>{e.push("/datastores")},underline:"hover",color:"neutral",fontSize:"inherit",children:"Knowledge Space"},"Knowledge Space"),(0,i.jsx)(p.ZP,{fontSize:"inherit",children:"Documents"})]}),(0,i.jsx)(u.Z,{variant:"outlined",onClick:()=>m(!0),children:"+ Add Datasource"})]}),b.length?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(g.Z,{color:"primary",variant:"plain",size:"lg",sx:{"& tbody tr: hover":{backgroundColor:"light"===a?"rgb(246, 246, 246)":"rgb(33, 33, 40)"},"& tbody tr: hover a":{textDecoration:"underline"}},children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Type"}),(0,i.jsx)("th",{children:"Size"}),(0,i.jsx)("th",{children:"Last Synch"}),(0,i.jsx)("th",{children:"Status"}),(0,i.jsx)("th",{children:"Result"}),(0,i.jsx)("th",{children:"Operation"})]})}),(0,i.jsx)("tbody",{children:b.map(a=>(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:a.doc_name}),(0,i.jsx)("td",{children:(0,i.jsx)(A,{variant:"solid",color:"neutral",sx:{opacity:.5},children:a.doc_type})}),(0,i.jsxs)("td",{children:[a.chunk_size," chunks"]}),(0,i.jsx)("td",{children:J()(a.last_sync).format("YYYY-MM-DD HH:MM:SS")}),(0,i.jsx)("td",{children:(0,i.jsx)(A,{sx:{opacity:.5},variant:"solid",color:function(){switch(a.status){case"TODO":return"neutral";case"RUNNING":return"primary";case"FINISHED":return"success";case"FAILED":return"danger"}}(),children:a.status})}),(0,i.jsx)("td",{children:"TODO"===a.status||"RUNNING"===a.status?"":"FINISHED"===a.status?(0,i.jsx)(Y.Z,{content:a.result,trigger:"hover",children:(0,i.jsx)(A,{variant:"solid",color:"success",sx:{opacity:.5},children:"SUCCESS"})}):(0,i.jsx)(Y.Z,{content:a.result,trigger:"hover",children:(0,i.jsx)(A,{variant:"solid",color:"danger",sx:{opacity:.5},children:"FAILED"})})}),(0,i.jsx)("td",{children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(u.Z,{variant:"outlined",size:"sm",sx:{marginRight:"20px"},onClick:async()=>{let e=await fetch("".concat(X.env.API_BASE_URL,"/knowledge/").concat(t,"/document/sync"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({doc_ids:[a.id]})}),i=await e.json();i.success?G.ZP.success("success"):G.ZP.error(i.err_msg||"failed")},children:["Synch",(0,i.jsx)($.Z,{})]}),(0,i.jsx)(u.Z,{variant:"outlined",size:"sm",onClick:()=>{e.push("/datastores/documents/chunklist?spacename=".concat(t,"&documentid=").concat(a.id))},children:"Details"})]})})]},a.id))})]}),(0,i.jsx)(c.Z,{direction:"row",justifyContent:"flex-end",sx:{marginTop:"20px"},children:(0,i.jsx)(K.Z,{defaultPageSize:20,showSizeChanger:!1,current:O,total:z,onChange:async e=>{let a=await fetch("".concat(X.env.API_BASE_URL,"/knowledge/").concat(t,"/document/list"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({page:e,page_size:20})}),i=await a.json();i.success&&(y(i.data.data),R(i.data.total),N(i.data.page))},hideOnSinglePage:!0})})]}):(0,i.jsx)(i.Fragment,{}),(0,i.jsx)(E.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center","z-index":1e3},open:r,onClose:()=>m(!1),children:(0,i.jsxs)(s.Z,{variant:"outlined",sx:{width:800,borderRadius:"md",p:3,boxShadow:"lg"},children:[(0,i.jsx)(H.Z,{sx:{width:"100%"},children:(0,i.jsx)(c.Z,{spacing:2,direction:"row",children:ee.map((e,t)=>(0,i.jsxs)(Q,{sx:{fontWeight:v===t?"bold":"",color:v===t?"#814DDE":""},children:[t<v?(0,i.jsx)(M.Z,{}):"".concat(t+1,"."),"".concat(e)]},e))})}),0===v?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(H.Z,{sx:{margin:"30px auto"},children:et.map(e=>(0,i.jsxs)(s.Z,{sx:{boxSizing:"border-box",height:"80px",padding:"12px",display:"flex",flexDirection:"column",justifyContent:"space-between",border:"1px solid gray",borderRadius:"6px",marginBottom:"20px",cursor:"pointer"},onClick:()=>{C(e.type),x(1)},children:[(0,i.jsx)(s.Z,{sx:{fontSize:"20px",fontWeight:"bold"},children:e.title}),(0,i.jsx)(s.Z,{children:e.subTitle})]},e.type))})}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(H.Z,{sx:{margin:"30px auto"},children:["Name:",(0,i.jsx)(L.ZP,{placeholder:"Please input the name",onChange:e=>_(e.target.value),sx:{marginBottom:"20px"}}),"webPage"===f?(0,i.jsxs)(i.Fragment,{children:["Web Page URL:",(0,i.jsx)(L.ZP,{placeholder:"Please input the Web Page URL",onChange:e=>S(e.target.value)})]}):"file"===f?(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(q,{name:"file",multiple:!1,onChange(e){var t;if(console.log(e),0===e.fileList.length){k(null),_("");return}k(e.file.originFileObj),_(null===(t=e.file.originFileObj)||void 0===t?void 0:t.name)},children:[(0,i.jsx)("p",{className:"ant-upload-drag-icon",children:(0,i.jsx)(W.Z,{})}),(0,i.jsx)("p",{style:{color:"rgb(22, 108, 255)",fontSize:"20px"},children:"Select or Drop file"}),(0,i.jsx)("p",{className:"ant-upload-hint",style:{color:"rgb(22, 108, 255)"},children:"PDF, PowerPoint, Excel, Word, Text, Markdown,"})]})}):(0,i.jsxs)(i.Fragment,{children:["Text Source(Optional):",(0,i.jsx)(L.ZP,{placeholder:"Please input the text source",onChange:e=>w(e.target.value),sx:{marginBottom:"20px"}}),"Text:",(0,i.jsx)(U.Z,{onChange:e=>D(e.target.value),minRows:4,sx:{marginBottom:"20px"}})]}),(0,i.jsx)(p.ZP,{component:"label",sx:{marginTop:"20px"},endDecorator:(0,i.jsx)(B.Z,{checked:F,onChange:e=>V(e.target.checked)}),children:"Synch:"})]}),(0,i.jsxs)(c.Z,{direction:"row",justifyContent:"flex-start",alignItems:"center",sx:{marginBottom:"20px"},children:[(0,i.jsx)(u.Z,{variant:"outlined",sx:{marginRight:"20px"},onClick:()=>x(0),children:"< Back"}),(0,i.jsx)(u.Z,{variant:"outlined",onClick:async()=>{if(""===Z){G.ZP.error("Please input the name");return}if("webPage"===f){if(""===j){G.ZP.error("Please input the Web Page URL");return}let e=await fetch("".concat(X.env.API_BASE_URL,"/knowledge/").concat(t,"/document/add"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({doc_name:Z,content:j,doc_type:"URL"})}),a=await e.json();if(a.success&&F&&fetch("".concat(X.env.API_BASE_URL,"/knowledge/").concat(t,"/document/sync"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({doc_ids:[a.data]})}),a.success){G.ZP.success("success"),m(!1);let e=await fetch("".concat(X.env.API_BASE_URL,"/knowledge/").concat(t,"/document/list"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({page:O,page_size:20})}),a=await e.json();a.success&&(y(a.data.data),R(a.data.total),N(a.data.page))}else G.ZP.error(a.err_msg||"failed")}else if("file"===f){if(!T){G.ZP.error("Please select a file");return}let e=new FormData;e.append("doc_name",Z),e.append("doc_file",T),e.append("doc_type","DOCUMENT");let a=await fetch("".concat(X.env.API_BASE_URL,"/knowledge/").concat(t,"/document/upload"),{method:"POST",body:e}),i=await a.json();if(i.success&&F&&fetch("".concat(X.env.API_BASE_URL,"/knowledge/").concat(t,"/document/sync"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({doc_ids:[i.data]})}),i.success){G.ZP.success("success"),m(!1);let e=await fetch("".concat(X.env.API_BASE_URL,"/knowledge/").concat(t,"/document/list"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({page:O,page_size:20})}),a=await e.json();a.success&&(y(a.data.data),R(a.data.total),N(a.data.page))}else G.ZP.error(i.err_msg||"failed")}else{if(""===I){G.ZP.error("Please input the text");return}let e=await fetch("".concat(X.env.API_BASE_URL,"/knowledge/").concat(t,"/document/add"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({doc_name:Z,source:P,content:I,doc_type:"TEXT"})}),a=await e.json();if(a.success&&F&&fetch("".concat(X.env.API_BASE_URL,"/knowledge/").concat(t,"/document/sync"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({doc_ids:[a.data]})}),a.success){G.ZP.success("success"),m(!1);let e=await fetch("".concat(X.env.API_BASE_URL,"/knowledge/").concat(t,"/document/list"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({page:O,page_size:20})}),a=await e.json();a.success&&(y(a.data.data),R(a.data.total),N(a.data.page))}else G.ZP.error(a.err_msg||"failed")}},children:"Finish"})]})]})]})})]})}}},function(e){e.O(0,[550,797,577,86,693,118,440,672,55,642,253,769,744],function(){return e(e.s=22199)}),_N_E=e.O()}]);