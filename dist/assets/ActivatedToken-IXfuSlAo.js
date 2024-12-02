import{d as m,r as p,a as c,c as l,i as a,f as s,I as k,p as d}from"./index-B_YBSFCz.js";import{_ as f}from"./TokenDisplay.vue_vue_type_script_setup_true_lang-Ad8P7pAq.js";import{_}from"./ButtonActivateTokenTips.vue_vue_type_script_setup_true_lang-C-B-B89n.js";import"./BaseCodeSnippet.vue_vue_type_script_setup_true_lang-CiF6lhg-.js";import"./BaseCopyButton-CHm5Bxep.js";const y=m({__name:"ActivatedToken",props:{tokenData:{}},emits:["howToUse"],setup(o){const e=o,n=p({token:e.tokenData.token||"",auth:e.tokenData.auth_token||"",appId:e.tokenData.app_id||"",displayName:e.tokenData.cert_name||"",fileWithCertAndPrivateKey:e.tokenData.cert_file_name||"",tenant:e.tokenData.tenant_id||""});return(i,t)=>{const r=d;return c(),l(k,null,[a(f,{"token-data":n.value},null,8,["token-data"]),t[1]||(t[1]=s("p",{class:"mt-16 text-sm"}," This token is triggered when someone uses this Service Principal Login to access Azure programmatically (through the API). ",-1)),t[2]||(t[2]=s("p",{class:"mt-16 text-sm"}," The Service Principal Login is unique. i.e. there is no chance of somebody guessing these credentials. ",-1)),a(_,{onHowToUse:t[0]||(t[0]=u=>i.$emit("howToUse"))}),a(r,{class:"mt-24",variant:"info",message:"If this token fires, it is a clear indication that this set of keys has 'leaked'"})],64)}}});export{y as default};
