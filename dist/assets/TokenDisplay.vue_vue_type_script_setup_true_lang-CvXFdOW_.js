import{d as l,a as i,c,f as n,E as p,i as d,j as u,h as _,I as f,q as m}from"./index-B_YBSFCz.js";import{p as g}from"./pwaIconService-CEXrhOhO.js";const x={class:"flex flex-col items-center justify-center gap-8 p-16 py-24 mb-16 bg-white border border-grey-100 rounded-3xl"},b={class:"p-4 border rounded-2xl border-grey-100"},k=["src"],y={class:"mb-8 text-sm font-semibold leading-tight text-center text-grey-500"},v=l({__name:"TokenDisplay",props:{tokenData:{}},setup(a){const o=a;function r(){const t=g.find(e=>e.value===o.tokenData.pwa_icon);return t?t.url:(console.error(`Icon not found for value: ${o.tokenData.pwa_icon}.`),"")}return(t,e)=>{const s=m;return i(),c(f,null,[n("div",x,[n("div",b,[n("img",{src:r(),alt:"App icon",class:"rounded-lg w-[56px] h-[56px]"},null,8,k)]),n("h3",y,p(t.tokenData.pwa_app_name),1),d(s,{class:"w-full",href:t.tokenData.url,target:"_blank",variant:"primary"},{default:u(()=>e[0]||(e[0]=[_("Get Fake App Canarytoken")])),_:1},8,["href"])]),e[1]||(e[1]=n("div",{class:"flex justify-center"},null,-1))],64)}}});export{v as _};
