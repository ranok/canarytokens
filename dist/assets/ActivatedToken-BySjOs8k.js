import{d as i,r,a as p,c as m,i as t,f as l,I as c,p as k}from"./index-wlt9MRCn.js";import{_ as d}from"./TokenDisplay.vue_vue_type_script_setup_true_lang-CFlj62yZ.js";import"./BaseSwitch-DzfXz1Rn.js";import"./BaseCodeSnippet.vue_vue_type_script_setup_true_lang-C_In6E2f.js";import"./BaseCopyButton-BbclLwc7.js";const v=i({__name:"ActivatedToken",props:{tokenData:{}},emits:["howToUse"],setup(o){const s=r(o.tokenData.clonedsite_js||"");return(n,e)=>{const a=k;return p(),m(c,null,[t(d,{"token-snippet":s.value},null,8,["token-snippet"]),e[1]||(e[1]=l("p",{class:"mt-16 text-sm"}," Use this Javascript to detect when someone has cloned a webpage. ",-1)),t(a,{class:"mt-24",variant:"info",message:"When someone clones your site, they’ll grab this JavaScript too. When the script runs on their cloned site, it triggers an alert to let you know what’s going on.","text-link":"More tips?",onClick:e[0]||(e[0]=()=>n.$emit("howToUse"))})],64)}}});export{v as default};
