import{d as i,r as m,a as c,c as p,i as t,f as d,h as f,I as u,p as _}from"./index-DttDySxD.js";import{_ as l}from"./TokenDisplay.vue_vue_type_script_setup_true_lang-skA7wIqa.js";import{_ as k}from"./ButtonActivateTokenTips.vue_vue_type_script_setup_true_lang-nju7rcNA.js";const h={class:"mt-24 text-sm"},$=i({__name:"ActivatedToken",props:{tokenData:{}},emits:["howToUse"],setup(o){const a=o,s=m({token:a.tokenData.token||"",auth:a.tokenData.auth_token||""});return(n,e)=>{const r=_;return c(),p(u,null,[t(l,{"token-data":s.value},null,8,["token-data"]),d("p",h,[e[1]||(e[1]=f(" You'll get an alert whenever this document is opened with Acrobat Reader, regardless of the user's security preferences in Reader. ")),t(k,{onHowToUse:e[0]||(e[0]=g=>n.$emit("howToUse"))})]),t(r,{class:"mt-24",variant:"info",message:"You can rename the document without affecting its operation."})],64)}}});export{$ as default};
