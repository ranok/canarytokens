import{d as m,r as l,a as i,c as k,i as o,f as n,I as _,p as c}from"./index-tvY-knJ6.js";import{_ as u}from"./TokenDisplay.vue_vue_type_script_setup_true_lang-BeKC7Duc.js";import"./pwaIconService-Z82AFKC8.js";const w=m({__name:"ActivatedToken",props:{tokenData:{}},emits:["howToUse"],setup(a){const t=a;console.log(t.tokenData);const s=l({url:t.tokenData.token_url||"",pwa_icon:t.tokenData.pwa_icon||"",pwa_app_name:t.tokenData.pwa_app_name||""});return(p,e)=>{const r=c;return i(),k(_,null,[o(u,{"token-data":s.value},null,8,["token-data"]),e[1]||(e[1]=n("p",{class:"mt-16 text-sm text-center"}," The token gets triggered whenever you open the app. ",-1)),o(r,{class:"mt-24",variant:"info",message:"When you open the token link on your phone, press 'Share', then 'Add to Home Screen' to install.","text-link":"More tips?",onClick:e[0]||(e[0]=()=>p.$emit("howToUse"))}),e[2]||(e[2]=n("p",{class:"mt-24 text-sm"},null,-1))],64)}}});export{w as default};
