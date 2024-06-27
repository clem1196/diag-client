import{d as H,o as J,r as S,a as v,b as a,e as c,f as t,t as h,w as F,v as L,g as Q,F as N,h as O,u as V,i as y,j as R,k as W,l as A,R as X,m as P,n as vt}from"./index-Q8u7QvsL.js";import{g as Y}from"./diagnosis-Ca66f_EQ.js";import _t from"./diagnosisCreate-CUIO1CV4.js";import{_ as ht}from"./diagnosisDelete.vue_vue_type_script_setup_true_lang-VEQirVWG.js";import{_ as ft}from"./diagnosisEdit.vue_vue_type_script_setup_true_lang-DD_wDPG-.js";import"./diagnosis-C12lJr_m.js";import"./helpers.segment-Dc4JXg8Y.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const pt={class:"container-fluid"},bt={class:"card card-title"},mt={class:"card card-search"},gt={class:"row row-search"},kt=t("label",{class:"form-check-label",for:"switDiagnosisPatient"},null,-1),yt={class:"col-auto"},Ct={class:"row m-2"},xt={class:"col-auto"},wt=t("i",{class:"bi-search"},null,-1),$t={class:"row"},Dt=t("div",{class:"col-auto"},[t("button",{type:"submit",class:"btn-form"},"Search")],-1),Mt={class:"col-auto"},Vt={key:1,disabled:"",type:"button",class:"btn-form"},zt={class:"col-auto mt-1"},St=t("i",{class:"bi-search"},null,-1),Ft=t("div",{class:"col-auto icon-print",title:"Print"},[t("a",{type:"button"},[t("i",{class:"bi-printer"})])],-1),Lt={class:"scale-table"},Et={class:"table table-hover text-center"},Pt=t("thead",null,[t("tr",{class:"thead-tr"},[t("th")])],-1),Nt={key:0,class:"text-success"},Ot={key:1,class:"text-danger"},Rt=H({__name:"diagnosisPatientList",props:{title:{type:String,default:"Pacientes"}},setup(I){J(async()=>{const d=await Y();(d==null?void 0:d.statusText)=="OK"&&(b.values=d.data.patients),b.length>0&&k(r.value)});const b=S([]),r=v(1),p=v(),w=v(!0),C=v(!0);let u=S([]);const _=v(""),m=v(""),g=v(""),z=()=>{C.value==!0?C.value=!1:C.value=!0},D=()=>{if(console.log(b.values),b.values.length>0)if(_.value.length==0&&b.values.length>0)k(1);else{const d=o=>b.values.filter(x=>x.patient!==null&&x.patient!==void 0&&x.patient.toLowerCase().indexOf(o.toLowerCase())>-1);if(d(_.value).length>0)u.values=d(_.value),w.value=!1,g.value=u.values.length+" records found",m.value="";else{let o=[];u.values=o.values,w.value=!1,g.value="",m.value="No records found"}}},k=async d=>{let o=[];if(u.values=o.values,_.value="",m.value="",g.value="",w.value=!0,r.value=d,u.values.length>0){let f=d*p.value-p.value,x=d*p.value;u.slice(f,x)}else{let f=d*p.value-p.value,x=d*p.value,E=b.values;u.values=E.slice(f,x)}};return(d,o)=>(a(),c("div",pt,[t("div",bt,h(I.title),1),t("div",null,[t("div",mt,[t("div",gt,[t("div",{class:"col-auto"},[t("div",{class:"form-switch form-check",title:"Clasic mode"},[kt,t("input",{onClick:z,type:"checkbox",name:"inputNameSwitch",class:"form-check-input myCheck",id:"switDiagnosisPatient"})])]),t("div",yt,[C.value==!0?(a(),c("form",{key:0,onKeyup:D},[t("div",Ct,[t("div",xt,[wt,F(t("input",{"onUpdate:modelValue":o[0]||(o[0]=f=>_.value=f),type:"search",id:"inputMode1",name:"inputMode1",class:"form-control form-control-sm search"},null,512),[[L,_.value]])])])],32)):(a(),c("form",{key:1,onSubmit:Q(D,["prevent"])},[t("div",$t,[Dt,t("div",Mt,[g.value.length>0||m.value.length>0?(a(),c("button",{key:0,onClick:o[1]||(o[1]=f=>k(1)),type:"button",class:"btn-form cancel"}," Exit ")):(a(),c("button",Vt,"Exit"))]),t("div",zt,[St,F(t("input",{"onUpdate:modelValue":o[2]||(o[2]=f=>_.value=f),id:"inputMode2",name:"inputMode2",class:"form-control form-control-sm search",type:"search"},null,512),[[L,_.value]])])])],32))]),Ft])]),t("div",Lt,[t("table",Et,[Pt,t("tbody",null,[(a(!0),c(N,null,O(V(u).values,f=>(a(),c("tr",{key:f.diagnosis_id,class:"tbody-tr"},[t("td",null,[R(V(X),{class:"td-decoration",to:"/diagnosis/"+f.patient,title:"Detail"},{default:W(()=>[A(h(f.patient),1)]),_:2},1032,["to"])])]))),128))]),g.value.length>0?(a(),c("small",Nt,h(g.value),1)):y("",!0),m.value.length>0?(a(),c("small",Ot,h(m.value),1)):y("",!0)])])])]))}}),At={class:"container-fluid"},It=t("div",{class:"card card-title"},"Diagnosis",-1),Bt={class:"card card-search"},Tt={class:"row row-search"},Kt=t("i",{class:"bi-person-fill-add"},null,-1),Ut=[Kt],jt=t("label",{class:"form-check-label",for:"switDiagnosisPatient"},null,-1),Gt={class:"col-auto"},Ht={class:"row m-2"},Jt={class:"col-auto"},Qt=t("i",{class:"bi-search"},null,-1),Wt={class:"row"},Xt=t("div",{class:"col-auto"},[t("button",{type:"submit",class:"btn-form"},"Search")],-1),Yt={class:"col-auto"},Zt={key:1,disabled:"",type:"button",class:"btn-form"},qt={class:"col-auto mt-1"},te=t("i",{class:"bi-search"},null,-1),ee=t("i",{class:"bi-printer"},null,-1),se=[ee],le={class:"scale-table"},oe={class:"table table-hover text-center"},ne=t("i",{class:"bi-filter"},null,-1),ae=t("i",{class:"bi-filter"},null,-1),ie=t("i",{class:"bi-filter"},null,-1),ce=t("i",{class:"bi-filter"},null,-1),ue=t("i",{class:"bi-filter"},null,-1),re=t("i",{class:"bi-filter"},null,-1),de=t("i",{class:"bi-filter"},null,-1),ve=t("i",{class:"bi-filter"},null,-1),_e=t("th",null,[t("button",{class:"btn btn-sm th-font-size"},"Action")],-1),he={class:"color-td"},fe={class:"color-td"},pe={class:"color-td"},be={class:"color-td"},me={class:"color-td"},ge={class:"color-td"},ke={class:"color-td"},ye={class:"color-td"},Ce={class:"colorBarra"},xe=t("i",{class:"bi-card-checklist"},null,-1),we=["onClick"],$e=t("i",{class:"bi-pencil-fill"},null,-1),De=[$e],Me=["onClick"],Ve=t("i",{class:"bi-trash-fill"},null,-1),ze=[Ve],Se={key:0,class:"text-success"},Fe={key:1,class:"text-danger"},Le={key:0,class:"pagination justify-content-center"},Ee=t("li",{class:"page-item disabled"},[t("button",{class:"page-link size"},"Pages")],-1),Pe=t("button",{type:"button",class:"page-link size"},"First",-1),Ne=[Pe],Oe=t("button",{type:"button",class:"page-link size"},"First",-1),Re=[Oe],Ae=t("button",{class:"page-link size",type:"button"},[t("i",{class:"bi-chevron-left"})],-1),Ie=[Ae],Be=t("button",{type:"button",class:"page-link size"},[t("i",{class:"bi-chevron-left"})],-1),Te=[Be],Ke=["onClick"],Ue={key:0,type:"button",class:"page-link size"},je={key:0,type:"button",class:"page-link size"},Ge=t("i",{class:"bi-chevron-right"},null,-1),He=[Ge],Je=t("button",{type:"button",class:"page-link size"},[t("i",{class:"bi-chevron-right"})],-1),Qe=[Je],We=t("button",{type:"button",class:"page-link size"},"Last",-1),Xe=[We],Ye=t("button",{type:"button",class:"page-link size"},"Last",-1),Ze=[Ye],qe={class:"page-item disabled"},ts={class:"page-link size"},us=H({__name:"diagnosisList",props:{title:{type:String,default:"Detalles"}},setup(I){J(async()=>{const l=await Y();(l==null?void 0:l.statusText)=="OK"&&(b.values=l==null?void 0:l.data.results,console.log(l==null?void 0:l.data.results)),$(r.value),B()});const b=S([]),r=v(1),p=v(3),w=v(!0),C=v(!0);let u=S([]);const _=v(""),m=v(!1),g=v(!1),z=v(!1);let D=v(0);const k=v(""),d=v(""),o=v(!1),f=()=>{m.value=!0},x=()=>{m.value=!1},E=l=>{console.log(l),D.value=l,g.value=!0},Z=()=>{g.value=!1},q=l=>{console.log(l),D.value=l,z.value=!0},tt=()=>{z.value=!1},B=async()=>{let l=await document.getElementsByClassName("color-td");for(let n=0;n<l.length;n++){const e=l[n];(e.textContent==="Saludable"||e.textContent==="Normal")&&e.setAttribute("style","color:#4CAF50;"),(e.textContent==="Riesgo inicial"||e.textContent==="Riesgo final"||e.textContent==="Bajo"||e.textContent==="Alto"||e.textContent==="Severo")&&e.setAttribute("style","color:#FF9800;"),(e.textContent==="Peligro inicial"||e.textContent==="Peligro final"||e.textContent==="Muy alto")&&e.setAttribute("style","color:#FF5722;"),(e.textContent==="Leve"||e.textContent==="Moderado")&&e.setAttribute("style","color:#CDDC39;"),(e.textContent==="Leve"||e.textContent==="Moderado")&&e.setAttribute("style","color:#CDDC39;")}console.log(typeof l[6].textContent)},et=()=>{window.print()},st=()=>{const l=(s,i)=>s.diagnosis_id-i.diagnosis_id,n=(s,i)=>i.diagnosis_id-s.diagnosis_id,e=u.values;return o.value?(o.value=!1,e.sort(l)):(o.value=!0,console.log(o),e.sort(n))},lt=()=>{const l=(s,i)=>s.patient.localeCompare(i.patient),n=(s,i)=>i.patient.localeCompare(s.patient),e=u.values;return o.value?(o.value=!1,e.sort(l)):(o.value=!0,e.sort(n))},ot=()=>{const l=(s,i)=>s.test.localeCompare(i.test),n=(s,i)=>i.test.localeCompare(s.test),e=u.values;return o.value?(o.value=!1,e.sort(l)):(o.value=!0,e.sort(n))},nt=()=>{const l=(s,i)=>parseFloat(s.result)-parseFloat(i.result),n=(s,i)=>parseFloat(i.result)-parseFloat(s.result),e=u.values;return o.value?(o.value=!1,e.sort(l)):(o.value=!0,console.log(o),e.sort(n))},at=()=>{const l=(s,i)=>s.pi-i.pi,n=(s,i)=>i.pi-s.pi,e=u.values;return o.value?(o.value=!1,e.sort(l)):(o.value=!0,console.log(o),e.sort(n))},it=()=>{const l=(s,i)=>s.ideal-i.ideal,n=(s,i)=>i.ideal-s.ideal,e=u.values;return o.value?(o.value=!1,e.sort(l)):(o.value=!0,console.log(o),e.sort(n))},ct=()=>{const l=(s,i)=>s.pf-i.pf,n=(s,i)=>i.pf-s.pf,e=u.values;return o.value?(o.value=!1,e.sort(l)):(o.value=!0,console.log(o),e.sort(n))},ut=()=>{const l=(s,i)=>s.interpretation.localeCompare(i.interpretation),n=(s,i)=>i.interpretation.localeCompare(s.interpretation),e=u.values;return o.value?(o.value=!1,e.sort(l)):(o.value=!0,e.sort(n))},T=()=>{if(_.value.length==0)$(1);else{const l=n=>b.values.filter(s=>s.diagnosis_id!==null&&s.diagnosis_id!==void 0&&s.diagnosis_id.toString().indexOf(n)>-1||s.patient!==null&&s.patient!==void 0&&s.patient.toLowerCase().indexOf(n.toLowerCase())>-1||s.test!==null&&s.test!==void 0&&s.test.toLowerCase().indexOf(n.toLowerCase())>-1||s.result!==null&&s.result!==void 0&&s.result.toString().indexOf(n)>-1||s.pi!==null&&s.pi!==void 0&&s.pi.toString().indexOf(n)>-1||s.ideal!==null&&s.ideal!==void 0&&s.ideal.toString().indexOf(n)>-1||s.pf!==null&&s.pf!==void 0&&s.pf.toString().indexOf(n)>-1||s.interpretation!==null&&s.interpretation!==void 0&&s.interpretation.toLowerCase().indexOf(n.toLowerCase())>-1);if(l(_.value).length>0)u.values=l(_.value),w.value=!1,d.value=u.values.length+" records found",k.value="";else{let n=[];u.values=n.values,w.value=!1,d.value="",k.value="No records found"}}},rt=()=>{C.value==!0?C.value=!1:C.value=!0},dt=l=>l==r.value?"active":"",M=()=>Math.ceil(b.values.length/p.value),$=async l=>{let n=[];if(u.values=n.values,_.value="",k.value="",d.value="",w.value=!0,r.value=l,u.values.length>0){let e=l*p.value-p.value,s=l*p.value;u.slice(e,s)}else{let e=l*p.value-p.value,s=l*p.value,i=b.values;u.values=i.slice(e,s)}},K=()=>{r.value>1&&r.value--,$(1)},U=()=>{r.value>1&&r.value--,$(r.value)},j=()=>{r.value<M()&&r.value++,$(r.value)},G=()=>{r.value<M()&&r.value++,$(M())};return(l,n)=>(a(),c("div",At,[R(Rt),t("div",null,[It,t("div",Bt,[t("div",Tt,[t("a",{onClick:f,type:"button",class:"col-1 icon-add",title:"Create diagnosis"},Ut),t("div",{class:"col-auto"},[t("div",{class:"form-switch form-check",title:"Clasic mode"},[jt,t("input",{onClick:rt,type:"checkbox",name:"inputNameSwitch",class:"form-check-input myCheck",id:"switDiagnosisPatient"})])]),t("div",Gt,[C.value==!0?(a(),c("form",{key:0,onKeyup:T},[t("div",Ht,[t("div",Jt,[Qt,F(t("input",{"onUpdate:modelValue":n[0]||(n[0]=e=>_.value=e),type:"search",id:"inputMode1",name:"inputMode1",class:"form-control form-control-sm search"},null,512),[[L,_.value]])])])],32)):(a(),c("form",{key:1,onSubmit:Q(T,["prevent"])},[t("div",Wt,[Xt,t("div",Yt,[d.value.length>0||k.value.length>0?(a(),c("button",{key:0,onClick:n[1]||(n[1]=e=>$(1)),type:"button",class:"btn-form cancel"}," Exit ")):(a(),c("button",Zt,"Exit"))]),t("div",qt,[te,F(t("input",{"onUpdate:modelValue":n[2]||(n[2]=e=>_.value=e),id:"inputMode2",name:"inputMode2",class:"form-control form-control-sm search",type:"search"},null,512),[[L,_.value]])])])],32))]),t("div",{class:"col-auto icon-print",title:"Print"},[t("a",{onClick:et,type:"button"},se)])])]),t("div",le,[t("table",oe,[t("thead",null,[t("tr",{class:"thead-tr"},[t("th",null,[ne,t("button",{onClick:st,class:"btn btn-sm th-font-size"},"Id")]),t("th",null,[ae,t("button",{onClick:lt,class:"btn btn-sm th-font-size"},"FullName")]),t("th",null,[ie,t("button",{onClick:ot,class:"btn btn-sm th-font-size"},"Test")]),t("th",null,[ce,t("button",{onClick:nt,class:"btn btn-sm th-font-size"},"Result")]),t("th",null,[ue,t("button",{onClick:at,class:"btn btn-sm th-font-size"},"Ri")]),t("th",null,[re,t("button",{onClick:it,class:"btn btn-sm th-font-size"},"Ideal")]),t("th",null,[de,t("button",{onClick:ct,class:"btn btn-sm th-font-size"},"Rf")]),t("th",null,[ve,t("button",{onClick:ut,class:"btn btn-sm th-font-size"}," Interpretation ")]),_e])]),t("tbody",null,[(a(!0),c(N,null,O(V(u).values,e=>(a(),c("tr",{key:e.diagnosis_id,class:"tbody-tr"},[t("td",he,h(e.diagnosis_id),1),t("td",fe,h(e.patient),1),t("td",pe,h(e.test),1),t("td",be,h(e.result),1),t("td",me,h(e.pi),1),t("td",ge,h(e.ideal),1),t("td",ke,h(e.pf),1),t("td",ye,h(e.interpretation),1),t("td",Ce,[R(V(X),{to:"/diagnosis/detail/"+e.diagnosis_id,class:"btn btn-outline-info btn-sm",title:"Detail"},{default:W(()=>[xe]),_:2},1032,["to"]),A(" | "),t("button",{onClick:s=>E(e.diagnosis_id),class:"btn btn-outline-warning btn-sm",title:"Edit"},De,8,we),A(" | "),t("button",{onClick:s=>q(e.diagnosis_id),class:"btn btn-outline-danger btn-sm",title:"Delete"},ze,8,Me)])]))),128))]),d.value.length>0?(a(),c("small",Se,h(d.value),1)):y("",!0),k.value.length>0?(a(),c("small",Fe,h(k.value),1)):y("",!0)])]),t("nav",{onClick:B,"aria-label":"Page navigation"},[w.value?(a(),c("ul",Le,[Ee,r.value>=2?(a(),c("li",{key:0,onClick:K,class:"page-item"},Ne)):(a(),c("li",{key:1,onClick:K,class:"page-item disabled"},Re)),r.value>=2?(a(),c("li",{key:2,onClick:U,class:"page-item"},Ie)):(a(),c("li",{key:3,onClick:U,class:"page-item disabled"},Te)),(a(!0),c(N,null,O(M(),e=>(a(),c("li",{key:e,onClick:s=>$(e),class:vt(["page-item",dt(e)])},[r.value-1<e&&e<r.value+3?(a(),c("button",Ue,h(e),1)):y("",!0)],10,Ke))),128)),r.value<M()?(a(),c("li",{key:4,onClick:j,class:"page-item"},[r.value<M()?(a(),c("button",je,He)):y("",!0)])):(a(),c("li",{key:5,onClick:j,class:"page-item disabled"},Qe)),r.value<M()?(a(),c("li",{key:6,onClick:G,class:"page-item"},Xe)):(a(),c("li",{key:7,onClick:G,class:"page-item disabled"},Ze)),t("li",qe,[t("button",ts,"Total: "+h(b.values.length),1)])])):y("",!0)])]),m.value?(a(),P(_t,{key:0,"close-form-create":x})):y("",!0),g.value?(a(),P(ft,{key:1,"close-form-edit":Z,"edit-id":V(D)},null,8,["edit-id"])):y("",!0),z.value?(a(),P(ht,{key:2,"close-form-remove":tt,"delete-id":V(D)},null,8,["delete-id"])):y("",!0)]))}});export{us as default};