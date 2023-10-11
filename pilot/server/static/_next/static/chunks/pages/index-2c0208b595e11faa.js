(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{48312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(86761)}])},48567:function(e,t,n){"use strict";n.d(t,{Z:function(){return f},A:function(){return d}});var r=n(85893),o=n(41468),l=n(51009);let a={proxyllm:{label:"Proxy LLM",icon:"/models/chatgpt.png"},"flan-t5-base":{label:"flan-t5-base",icon:"/models/google.png"},"vicuna-13b":{label:"vicuna-13b",icon:"/models/vicuna.jpeg"},"vicuna-7b":{label:"vicuna-7b",icon:"/models/vicuna.jpeg"},"vicuna-13b-v1.5":{label:"vicuna-13b-v1.5",icon:"/models/vicuna.jpeg"},"vicuna-7b-v1.5":{label:"vicuna-7b-v1.5",icon:"/models/vicuna.jpeg"},"codegen2-1b":{label:"codegen2-1B",icon:"/models/vicuna.jpeg"},"codet5p-2b":{label:"codet5p-2b",icon:"/models/vicuna.jpeg"},"chatglm-6b-int4":{label:"chatglm-6b-int4",icon:"/models/chatglm.png"},"chatglm-6b":{label:"chatglm-6b",icon:"/models/chatglm.png"},"chatglm2-6b":{label:"chatglm2-6b",icon:"/models/chatglm.png"},"chatglm2-6b-int4":{label:"chatglm2-6b-int4",icon:"/models/chatglm.png"},"guanaco-33b-merged":{label:"guanaco-33b-merged",icon:"/models/huggingface.svg"},"falcon-40b":{label:"falcon-40b",icon:"/models/falcon.jpeg"},"gorilla-7b":{label:"gorilla-7b",icon:"/models/gorilla.png"},"gptj-6b":{label:"ggml-gpt4all-j-v1.3-groovy.bin",icon:""},chatgpt_proxyllm:{label:"chatgpt_proxyllm",icon:"/models/chatgpt.png"},bard_proxyllm:{label:"bard_proxyllm",icon:"/models/bard.gif"},claude_proxyllm:{label:"claude_proxyllm",icon:"/models/claude.png"},wenxin_proxyllm:{label:"wenxin_proxyllm",icon:""},tongyi_proxyllm:{label:"tongyi_proxyllm",icon:"/models/qwen2.png"},zhipu_proxyllm:{label:"zhipu_proxyllm",icon:"/models/zhipu.png"},"llama-2-7b":{label:"Llama-2-7b-chat-hf",icon:"/models/llama.jpg"},"llama-2-13b":{label:"Llama-2-13b-chat-hf",icon:"/models/llama.jpg"},"llama-2-70b":{label:"Llama-2-70b-chat-hf",icon:"/models/llama.jpg"},"baichuan-13b":{label:"Baichuan-13B-Chat",icon:"/models/baichuan.png"},"baichuan-7b":{label:"baichuan-7b",icon:"/models/baichuan.png"},"baichuan2-7b":{label:"Baichuan2-7B-Chat",icon:"/models/baichuan.png"},"baichuan2-13b":{label:"Baichuan2-13B-Chat",icon:"/models/baichuan.png"},"wizardlm-13b":{label:"WizardLM-13B-V1.2",icon:"/models/wizardlm.png"},"llama-cpp":{label:"ggml-model-q4_0.bin",icon:"/models/huggingface.svg"},"internlm-7b":{label:"internlm-chat-7b-v1_1",icon:"/models/internlm.png"},"internlm-7b-8k":{label:"internlm-chat-7b-8k",icon:"/models/internlm.png"}};var i=n(25675),c=n.n(i),u=n(67294),s=n(67421);function d(e,t){var n;let{width:o,height:l}=t||{};return e?(0,r.jsx)(c(),{className:"rounded-full border border-gray-200 object-contain bg-white inline-block",width:o||24,height:l||24,src:(null===(n=a[e])||void 0===n?void 0:n.icon)||"/models/huggingface.svg",alt:"llm"}):null}var f=function(e){let{onChange:t}=e,{t:n}=(0,s.$G)(),{modelList:i,model:c}=(0,u.useContext)(o.p);return!i||i.length<=0?null:(0,r.jsx)(l.default,{value:c,placeholder:n("choose_model"),onChange:e=>{null==t||t(e)},children:i.map(e=>{var t;return(0,r.jsx)(l.default.Option,{children:(0,r.jsxs)("div",{className:"flex items-center justify-center",children:[d(c),(0,r.jsx)("span",{className:"ml-2",children:(null===(t=a[c])||void 0===t?void 0:t.label)||c})]})},e)})})}},38954:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(85893),o=n(27496),l=n(59566),a=n(71577),i=n(67294),c=n(2487),u=n(83062),s=n(2453),d=n(74627),f=n(39479),m=n(51009),p=n(58299),b=n(577),h=n(30119),g=n(67421);let v=e=>{let{data:t,loading:n,submit:o,close:l}=e,{t:a}=(0,g.$G)(),i=e=>()=>{o(e),l()};return(0,r.jsx)("div",{style:{maxHeight:400,overflow:"auto"},children:(0,r.jsx)(c.Z,{dataSource:null==t?void 0:t.data,loading:n,rowKey:e=>e.prompt_name,renderItem:e=>(0,r.jsx)(c.Z.Item,{onClick:i(e.content),children:(0,r.jsx)(u.Z,{title:e.content,children:(0,r.jsx)(c.Z.Item.Meta,{style:{cursor:"copy"},title:e.prompt_name,description:a("Prompt_Info_Scene")+"：".concat(e.chat_scene,"，")+a("Prompt_Info_Sub_Scene")+"：".concat(e.sub_chat_scene)})})},e.prompt_name)})})};var x=e=>{let{submit:t}=e,{t:n}=(0,g.$G)(),[o,l]=(0,i.useState)(!1),[a,c]=(0,i.useState)("common"),{data:x,loading:y}=(0,b.Z)(()=>(0,h.PR)("/prompt/list",{prompt_type:a}),{refreshDeps:[a],onError:e=>{s.ZP.error(null==e?void 0:e.message)}});return(0,r.jsx)(d.Z,{title:(0,r.jsx)(f.Z.Item,{label:"Prompt "+n("Type"),children:(0,r.jsx)(m.default,{style:{width:130},value:a,onChange:e=>{c(e)},options:[{label:n("Public")+" Prompts",value:"common"},{label:n("Private")+" Prompts",value:"private"}]})}),content:(0,r.jsx)(v,{data:x,loading:y,submit:t,close:()=>{l(!1)}}),placement:"topRight",trigger:"click",open:o,onOpenChange:e=>{l(e)},children:(0,r.jsx)(u.Z,{title:n("Click_Select")+" Prompt",children:(0,r.jsx)(p.Z,{className:"bottom-32"})})})},y=function(e){let{children:t,loading:n,onSubmit:c,...u}=e,[s,d]=(0,i.useState)("");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.default.TextArea,{className:"flex-1",size:"large",value:s,autoSize:{minRows:1,maxRows:4},...u,onPressEnter:e=>{if(s.trim()&&13===e.keyCode){if(e.shiftKey){d(e=>e+"\n");return}c(s),setTimeout(()=>{d("")},0)}},onChange:e=>{if("number"==typeof u.maxLength){d(e.target.value.substring(0,u.maxLength));return}d(e.target.value)}}),(0,r.jsx)(a.ZP,{className:"ml-2 flex items-center justify-center",size:"large",type:"text",loading:n,icon:(0,r.jsx)(o.Z,{}),onClick:()=>{c(s)}}),(0,r.jsx)(x,{submit:e=>{d(s+e)}}),t]})}},32665:function(e,t,n){"use strict";function r(e){}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"clientHookInServerComponentError",{enumerable:!0,get:function(){return r}}),n(38754),n(67294),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},41219:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{ReadonlyURLSearchParams:function(){return m},useSearchParams:function(){return p},usePathname:function(){return b},ServerInsertedHTMLContext:function(){return c.ServerInsertedHTMLContext},useServerInsertedHTML:function(){return c.useServerInsertedHTML},useRouter:function(){return h},useParams:function(){return g},useSelectedLayoutSegments:function(){return v},useSelectedLayoutSegment:function(){return x},redirect:function(){return u.redirect},notFound:function(){return s.notFound}});let r=n(67294),o=n(27473),l=n(35802),a=n(32665),i=n(43512),c=n(98751),u=n(96885),s=n(86323),d=Symbol("internal for urlsearchparams readonly");function f(){return Error("ReadonlyURLSearchParams cannot be modified")}class m{[Symbol.iterator](){return this[d][Symbol.iterator]()}append(){throw f()}delete(){throw f()}set(){throw f()}sort(){throw f()}constructor(e){this[d]=e,this.entries=e.entries.bind(e),this.forEach=e.forEach.bind(e),this.get=e.get.bind(e),this.getAll=e.getAll.bind(e),this.has=e.has.bind(e),this.keys=e.keys.bind(e),this.values=e.values.bind(e),this.toString=e.toString.bind(e)}}function p(){(0,a.clientHookInServerComponentError)("useSearchParams");let e=(0,r.useContext)(l.SearchParamsContext),t=(0,r.useMemo)(()=>e?new m(e):null,[e]);return t}function b(){return(0,a.clientHookInServerComponentError)("usePathname"),(0,r.useContext)(l.PathnameContext)}function h(){(0,a.clientHookInServerComponentError)("useRouter");let e=(0,r.useContext)(o.AppRouterContext);if(null===e)throw Error("invariant expected app router to be mounted");return e}function g(){(0,a.clientHookInServerComponentError)("useParams");let e=(0,r.useContext)(o.GlobalLayoutRouterContext);return e?function e(t,n){void 0===n&&(n={});let r=t[1];for(let t of Object.values(r)){let r=t[0],o=Array.isArray(r),l=o?r[1]:r;!l||l.startsWith("__PAGE__")||(o&&(n[r[0]]=r[1]),n=e(t,n))}return n}(e.tree):null}function v(e){void 0===e&&(e="children"),(0,a.clientHookInServerComponentError)("useSelectedLayoutSegments");let{tree:t}=(0,r.useContext)(o.LayoutRouterContext);return function e(t,n,r,o){let l;if(void 0===r&&(r=!0),void 0===o&&(o=[]),r)l=t[1][n];else{var a;let e=t[1];l=null!=(a=e.children)?a:Object.values(e)[0]}if(!l)return o;let c=l[0],u=(0,i.getSegmentValue)(c);return!u||u.startsWith("__PAGE__")?o:(o.push(u),e(l,n,!1,o))}(t,e)}function x(e){void 0===e&&(e="children"),(0,a.clientHookInServerComponentError)("useSelectedLayoutSegment");let t=v(e);return 0===t.length?null:t[0]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},86323:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{notFound:function(){return r},isNotFoundError:function(){return o}});let n="NEXT_NOT_FOUND";function r(){let e=Error(n);throw e.digest=n,e}function o(e){return(null==e?void 0:e.digest)===n}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},96885:function(e,t,n){"use strict";var r,o;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{RedirectType:function(){return r},getRedirectError:function(){return i},redirect:function(){return c},isRedirectError:function(){return u},getURLFromRedirectError:function(){return s},getRedirectTypeFromError:function(){return d}});let l=n(68214),a="NEXT_REDIRECT";function i(e,t){let n=Error(a);n.digest=a+";"+t+";"+e;let r=l.requestAsyncStorage.getStore();return r&&(n.mutableCookies=r.mutableCookies),n}function c(e,t){throw void 0===t&&(t="replace"),i(e,t)}function u(e){if("string"!=typeof(null==e?void 0:e.digest))return!1;let[t,n,r]=e.digest.split(";",3);return t===a&&("replace"===n||"push"===n)&&"string"==typeof r}function s(e){return u(e)?e.digest.split(";",3)[2]:null}function d(e){if(!u(e))throw Error("Not a redirect error");return e.digest.split(";",3)[1]}(o=r||(r={})).push="push",o.replace="replace",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},43512:function(e,t){"use strict";function n(e){return Array.isArray(e)?e[1]:e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSegmentValue",{enumerable:!0,get:function(){return n}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},98751:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{ServerInsertedHTMLContext:function(){return l},useServerInsertedHTML:function(){return a}});let r=n(61757),o=r._(n(67294)),l=o.default.createContext(null);function a(e){let t=(0,o.useContext)(l);t&&t(e)}},86761:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}});var r=n(85893),o=n(577),l=n(67294),a=n(94184),i=n.n(a),c=n(53124),u=n(14747),s=n(67968),d=n(45503);let f=e=>{let{componentCls:t,sizePaddingEdgeHorizontal:n,colorSplit:r,lineWidth:o}=e;return{[t]:Object.assign(Object.assign({},(0,u.Wf)(e)),{borderBlockStart:`${o}px solid ${r}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",margin:`0 ${e.dividerVerticalGutterMargin}px`,verticalAlign:"middle",borderTop:0,borderInlineStart:`${o}px solid ${r}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${e.dividerHorizontalGutterMargin}px 0`},[`&-horizontal${t}-with-text`]:{display:"flex",alignItems:"center",margin:`${e.dividerHorizontalWithTextGutterMargin}px 0`,color:e.colorTextHeading,fontWeight:500,fontSize:e.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${r}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${o}px solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${t}-with-text-left`]:{"&::before":{width:"5%"},"&::after":{width:"95%"}},[`&-horizontal${t}-with-text-right`]:{"&::before":{width:"95%"},"&::after":{width:"5%"}},[`${t}-inner-text`]:{display:"inline-block",padding:"0 1em"},"&-dashed":{background:"none",borderColor:r,borderStyle:"dashed",borderWidth:`${o}px 0 0`},[`&-horizontal${t}-with-text${t}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${t}-dashed`]:{borderInlineStartWidth:o,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${t}-with-text`]:{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize},[`&-horizontal${t}-with-text-left${t}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${t}-inner-text`]:{paddingInlineStart:n}},[`&-horizontal${t}-with-text-right${t}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${t}-inner-text`]:{paddingInlineEnd:n}}})}};var m=(0,s.Z)("Divider",e=>{let t=(0,d.TS)(e,{dividerVerticalGutterMargin:e.marginXS,dividerHorizontalWithTextGutterMargin:e.margin,dividerHorizontalGutterMargin:e.marginLG});return[f(t)]},{sizePaddingEdgeHorizontal:0}),p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n},b=e=>{let{getPrefixCls:t,direction:n,divider:r}=l.useContext(c.E_),{prefixCls:o,type:a="horizontal",orientation:u="center",orientationMargin:s,className:d,rootClassName:f,children:b,dashed:h,plain:g,style:v}=e,x=p(e,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","plain","style"]),y=t("divider",o),[_,j]=m(y),S=u.length>0?`-${u}`:u,w=!!b,P="left"===u&&null!=s,O="right"===u&&null!=s,E=i()(y,null==r?void 0:r.className,j,`${y}-${a}`,{[`${y}-with-text`]:w,[`${y}-with-text${S}`]:w,[`${y}-dashed`]:!!h,[`${y}-plain`]:!!g,[`${y}-rtl`]:"rtl"===n,[`${y}-no-default-orientation-margin-left`]:P,[`${y}-no-default-orientation-margin-right`]:O},d,f),C=l.useMemo(()=>"number"==typeof s?s:/^\d+$/.test(s)?Number(s):s,[s]),M=Object.assign(Object.assign({},P&&{marginLeft:C}),O&&{marginRight:C});return _(l.createElement("div",Object.assign({className:E,style:Object.assign(Object.assign({},null==r?void 0:r.style),v)},x,{role:"separator"}),b&&"vertical"!==a&&l.createElement("span",{className:`${y}-inner-text`,style:M},b)))},h=n(75081),g=n(39332),v=n(25675),x=n.n(v),y=n(50489),_=n(48567),j=n(41468),S=n(38954),w=n(67421),P=n(8937),O=()=>{let e=(0,g.useRouter)(),{model:t,setModel:n}=(0,l.useContext)(j.p),{t:a}=(0,w.$G)(),[i,c]=(0,l.useState)(!1),[u,s]=(0,l.useState)(!1),{data:d=[]}=(0,o.Z)(async()=>{s(!0);let[,e]=await (0,y.Vx)((0,y.CU)());return s(!1),null!=e?e:[]}),f=async n=>{c(!0);let[,r]=await (0,y.Vx)((0,y.sW)({chat_mode:"chat_normal"}));r&&(localStorage.setItem(P.rU,JSON.stringify({id:r.conv_uid,message:n})),e.push("/chat/chat_normal/".concat(r.conv_uid).concat(t?"?model=".concat(t):""))),c(!1)},m=async n=>{let[,r]=await (0,y.Vx)((0,y.sW)({chat_mode:"chat_normal"}));r&&e.push("/chat/".concat(n.chat_scene,"/").concat(r.conv_uid).concat(t?"?model=".concat(t):""))};return(0,r.jsxs)("div",{className:"mx-auto h-full justify-center flex max-w-3xl flex-col px-4",children:[(0,r.jsx)("div",{className:"my-0 mx-auto",children:(0,r.jsx)(x(),{src:"/LOGO.png",alt:"Revolutionizing Database Interactions with Private LLM Technology",width:856,height:160,className:"w-full",unoptimized:!0})}),(0,r.jsx)(b,{className:"!text-[#878c93] !my-6",plain:!0,children:a("Quick_Start")}),(0,r.jsx)(h.Z,{spinning:u,children:(0,r.jsx)("div",{className:"flex flex-wrap -m-1 md:-m-3",children:d.map(e=>(0,r.jsx)("div",{className:"w-full sm:w-1/2 lg:w-1/3 p-1 md:p-3",children:(0,r.jsx)("div",{className:"cursor-pointer flex items-center justify-center w-full h-12 rounded font-semibold text-sm bg-[#E6F4FF] text-[#1677FE] dark:text-gray-100 dark:bg-[#4E4F56]",onClick:()=>{m(e)},children:e.scene_name})},e.chat_scene))})}),(0,r.jsx)("div",{className:"mt-8 mb-2",children:(0,r.jsx)(_.Z,{onChange:e=>{n(e)}})}),(0,r.jsx)("div",{className:"flex",children:(0,r.jsx)(S.Z,{loading:i,onSubmit:f})})]})}},30119:function(e,t,n){"use strict";n.d(t,{Tk:function(){return c},PR:function(){return u},Ej:function(){return s}});var r=n(2453),o=n(6154),l=n(83454);let a=o.Z.create({baseURL:l.env.API_BASE_URL});a.defaults.timeout=1e4,a.interceptors.response.use(e=>e.data,e=>Promise.reject(e)),n(96486);let i={"content-type":"application/json"},c=(e,t)=>{if(t){let n=Object.keys(t).filter(e=>void 0!==t[e]&&""!==t[e]).map(e=>"".concat(e,"=").concat(t[e])).join("&");n&&(e+="?".concat(n))}return a.get("/api"+e,{headers:i}).then(e=>e).catch(e=>{r.ZP.error(e),Promise.reject(e)})},u=(e,t)=>a.post(e,t,{headers:i}).then(e=>e).catch(e=>{r.ZP.error(e),Promise.reject(e)}),s=(e,t)=>a.post(e,t).then(e=>e).catch(e=>{r.ZP.error(e),Promise.reject(e)})},39332:function(e,t,n){e.exports=n(41219)},80211:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"createAsyncLocalStorage",{enumerable:!0,get:function(){return r}});class n{disable(){throw Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available")}getStore(){}run(){throw Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available")}exit(){throw Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available")}enterWith(){throw Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available")}}function r(){return globalThis.AsyncLocalStorage?new globalThis.AsyncLocalStorage:new n}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},68214:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"requestAsyncStorage",{enumerable:!0,get:function(){return o}});let r=n(80211),o=(0,r.createAsyncLocalStorage)();("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}},function(e){e.O(0,[662,996,566,479,647,411,615,539,774,888,179],function(){return e(e.s=48312)}),_N_E=e.O()}]);