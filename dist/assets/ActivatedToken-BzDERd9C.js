import{T as m}from"./TokenDisplay-wDr10YVU.js";import{_ as d}from"./ButtonActivateTokenTips.vue_vue_type_script_setup_true_lang-MPLMYH5U.js";import{d as p,r as i,a as l,c as _,i as o,f as a,I as k}from"./index-Bqw1JUEX.js";import"./BaseCodeSnippet.vue_vue_type_script_setup_true_lang-OvFwzsmC.js";import"./BaseCopyButton-CN8wYYrF.js";const w={class:"mt-16 text-sm"},T=p({__name:"ActivatedToken",props:{tokenData:{}},emits:["howToUse"],setup(s){const e=s,n=i({hostname:e.tokenData.hostname||"",webdav_fs_type:e.tokenData.webdav_fs_type||"",webdav_password:e.tokenData.webdav_password||"",webdav_server:e.tokenData.webdav_server||""});return(r,t)=>(l(),_(k,null,[o(m,{"token-data":n.value},null,8,["token-data"]),t[1]||(t[1]=a("p",{class:"mt-16 text-sm"}," When the WebDAV folder is browsed, your Canarytoken will be triggered. ",-1)),a("p",w,[o(d,{onHowToUse:t[0]||(t[0]=f=>r.$emit("howToUse"))})])],64))}});export{T as default};
