import{d as m,r as c,a as _,c as p,i as t,f as a,I as k,p as l}from"./index-pt1RmN_n.js";import{_ as u}from"./TokenDisplay.vue_vue_type_script_setup_true_lang-D5XnVTAy.js";import{_ as d}from"./ButtonActivateTokenTips.vue_vue_type_script_setup_true_lang-ImeiZbPE.js";import"./BaseCodeSnippet.vue_vue_type_script_setup_true_lang-CKZZ42r-.js";import"./BaseCopyButton-p-7kUoZm.js";const D=m({__name:"ActivatedToken",props:{tokenData:{}},emits:["howToUse"],setup(o){const s=o,n=c({aws_access_key_id:s.tokenData.aws_access_key_id||"",aws_secret_access_key:s.tokenData.aws_secret_access_key||"",output:s.tokenData.output||"",region:s.tokenData.region||""});return(i,e)=>{const r=l;return _(),p(k,null,[t(u,{"token-data":n.value},null,8,["token-data"]),e[1]||(e[1]=a("p",{class:"mt-16 text-sm"}," This token is triggered when someone uses this credential pair to access AWS programmatically (through the API). The key is unique. i.e. There is no chance of somebody guessing these credentials. ",-1)),t(d,{onHowToUse:e[0]||(e[0]=f=>i.$emit("howToUse"))}),t(r,{class:"mt-24",variant:"info",message:"If this token fires, it is a clear indication that this set of keys has 'leaked'"}),e[2]||(e[2]=a("p",{class:"mt-24 text-sm"},null,-1))],64)}}});export{D as default};
