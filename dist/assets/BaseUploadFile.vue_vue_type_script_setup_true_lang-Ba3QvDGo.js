import{d as L,a as u,c as f,f as a,n as o,r as v,ag as z,ah as U,ak as $,o as q,C as w,i as x,E as m,e as D,h as k,j as O,w as B,u as _,Q as P,q as Q}from"./index-wlt9MRCn.js";const S={viewBox:"0 0 52 39",fill:"none",xmlns:"http://www.w3.org/2000/svg"},G=L({__name:"FolderIcon",props:{hasFile:{}},setup(y){return(r,g)=>(u(),f("svg",S,[a("path",{d:"M0.642383 38.1777C0.418066 37.865 0.285645 37.4814 0.285645 37.067V33.0276V7.19802C0.285645 6.28191 1.02823 5.53876 1.94491 5.53876H3.19777C4.46034 5.53876 5.48375 4.51534 5.48375 3.25278C5.48375 1.99021 6.50716 0.966797 7.76973 0.966797H20.7721C21.6249 0.966797 22.4068 1.44112 22.8001 2.19797L23.8983 4.30872C24.2921 5.06501 25.0735 5.5399 25.9263 5.5399H40.9801C41.8962 5.5399 42.6393 6.28248 42.6393 7.19916V16.6992L0.642383 38.1777Z",fill:"#18884F",class:o({"is-file-folder-animation":r.hasFile})},null,2),a("path",{d:"M5 14C5 12.3431 6.34315 11 8 11H36C37.6569 11 39 12.3431 39 14V34C39 35.6569 37.6569 37 36 37H8C6.34315 37 5 35.6569 5 34V14Z",class:o([[{"is-file-animation":r.hasFile}],"file"]),fill:"#F6F7FA"},null,2),a("path",{d:"M9.66834 18.0504C10.0371 17.2279 10.855 16.6982 11.7563 16.6982H49.8639C51.1619 16.6982 52.0283 18.0362 51.4975 19.2205L43.3753 37.3343C42.9278 38.3326 41.9358 38.9753 40.8416 38.9753H6.23395H2.19453C1.55469 38.9753 0.989042 38.6608 0.642578 38.1779L0.64429 38.1767L5.28018 27.837L9.66834 18.0504Z",fill:"#38D47F",class:o({"is-file-folder-animation":r.hasFile})},null,2)]))}}),J={class:"flex flex-col items-center justify-center pt-5 pb-6"},K={key:0,class:"py-8 mb-2 text-grey-500"},W={key:1,class:"py-8 mb-2 font-semibold text-grey-500"},X={key:2,class:"py-8 mb-2 text-sm text-center text-grey-500"},Y={class:"font-semibold"},ee={class:"font-normal"},le={id:"error-message",class:"pt-16 text-sm font-semibold leading-4 text-red"},se=["id","disabled"],te=L({__name:"BaseUploadFile",props:{id:{},infoAllowedFile:{},disabled:{type:Boolean}},emits:["file-selected"],setup(y,{emit:r}){const g=y,V=r,c=v(null),p=v(null),i=v(),n=v(!1),b=z(g,"id"),{value:H,errorMessage:M,handleBlur:C,resetField:h}=U(b),I=$(b);q(()=>{n.value=!1});const d=w(()=>i.value),N=w(()=>I.value?"border-red-300 hover:border-red-300":g.disabled?"border-grey-300 opacity-80 bg-grey-50":"border-green-600 hover:border-green-300");function j(e){var l,s;h(),(l=c.value)==null||l.click(),(s=e.target)==null||s.blur()}function F(e){return i.value=e.name,H.value=e,V("file-selected",e)}function E(e){var l;e.preventDefault(),(l=p.value)==null||l.classList.add("bg-green-50"),n.value=!0}function A(){var e;n.value=!1,(e=p.value)==null||e.classList.remove("bg-green-50")}function R(e){var l,s;if(e.preventDefault(),n.value=!1,(l=e.dataTransfer)!=null&&l.files){const t=e.dataTransfer.files[0];F(t),(s=p.value)==null||s.classList.remove("bg-green-50")}}function T(e){var l;(l=e.target)==null||l.blur(),c.value&&(c.value.value="",i.value=null),h()}function Z(e){var s;h();const l=e.target;if((s=l.files)!=null&&s.length){const t=l.files[0];F(t)}}return(e,l)=>{const s=Q;return u(),f("div",{class:o(["relative flex items-center justify-center w-full",e.disabled&&"pointer-events-none"]),onDragover:E,onDrop:R,onDragleave:A},[a("label",{ref_key:"labelFileInput",ref:p,for:"dropzone-file",class:o([N.value,"flex flex-col items-center justify-center w-full py-16 border border-dashed rounded-2xl"])},[a("div",J,[x(G,{class:o(["w-[3.5rem] h-[3rem]",[n.value?"scale-105":"scale-100",e.disabled&&"grayscale"]]),"has-file":d.value},null,8,["class","has-file"]),i.value?(u(),f("p",K,m(d.value),1)):D("",!0),n.value?(u(),f("p",W," Drop the file! 🎤 ")):i.value?D("",!0):(u(),f("p",X,[a("span",Y,[l[2]||(l[2]=k("Drag and drop ")),a("span",ee,m(e.infoAllowedFile),1)]),l[3]||(l[3]=a("span",{class:"block text-grey-300"},"or",-1))])),x(s,{class:"upload-button",disabled:e.disabled,variant:d.value?"text":"secondary",onClick:l[0]||(l[0]=B(t=>d.value?T(t):j(t),["stop"]))},{default:O(()=>[k(m(d.value?"Remove file":"Browse file"),1)]),_:1},8,["disabled","variant"])]),a("p",le,m(_(M)),1),a("input",P(e.$attrs,{id:b.value,ref_key:"fileInput",ref:c,type:"file",class:"hidden",disabled:e.disabled,onChange:B(Z,["stop"]),onBlur:l[1]||(l[1]=(...t)=>_(C)&&_(C)(...t))}),null,16,se)],2)],34)}}});export{te as _};
