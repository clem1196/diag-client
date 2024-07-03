import{d as J,o as Q,r as E,a as d,b as i,c,e as t,w as X,f as R,v as T,t as _,g as f,h as I,F as N,i as P,u as $,j as O,k as B,l as Y,R as Z,p as ht,m as pt,n as ft}from"./index-DlYst6iZ.js";import{g as q}from"./diagnosis-Ca66f_EQ.js";import tt from"./diagnosisCreate-CieIBzw_.js";import{_ as bt}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as mt}from"./diagnosisDelete.vue_vue_type_script_setup_true_lang-dastwVcj.js";import{_ as gt}from"./diagnosisEdit.vue_vue_type_script_setup_true_lang-D76r9YAR.js";import"./diagnosis-D0-_Vw6D.js";import"./helpers.segment-Dc4JXg8Y.js";const A=V=>(ht("data-v-8e9cb55d"),V=V(),pt(),V),Ct={class:"container-fluid"},kt={class:"card card-search1"},yt={class:"row row-search"},xt={class:"col-auto"},wt={class:"row"},Dt=A(()=>t("div",{class:"col-auto mt-2"},"Nombre o DNI.",-1)),Lt={class:"col-auto"},Mt=A(()=>t("i",{class:"bi-search"},null,-1)),St=A(()=>t("div",{class:"col-auto"},[t("button",{type:"submit",class:"btn btn-sm btn-search"},"Buscar")],-1)),$t={class:"container text-center mt-3"},Vt={key:0,class:"text-success"},zt={key:1,class:"text-danger"},It={key:0,class:"mt-3"},At=A(()=>t("i",{class:"bi-plus-square-fill"},null,-1)),Ot={class:"scale-table"},Et={class:"table table-hover text-center"},Ft=A(()=>t("thead",null,[t("tr",{class:"thead-tr"},[t("th")])],-1)),Rt=J({__name:"diagnosisPatientList",props:{title:{type:String,default:"Pacientes"}},setup(V){Q(async()=>{const o=await q();(o==null?void 0:o.statusText)=="OK"&&(b.values=o.data.patients),b.length>0&&k(u.value)});const b=E([]),u=d(1),h=d(),y=d(!0),x=d(!1);let r=E([]);const v=d(""),C=d(""),m=d(""),z=()=>{x.value=!0},S=()=>{x.value=!1},w=()=>{if(b.values.length>0)if(v.value.length===0)k(1);else{const o=g=>b.values.filter(L=>L.patient.toLowerCase()===g.toLowerCase());if(o(v.value).length>0)r.values=o(v.value),y.value=!1,m.value=r.values.length+" registro encontrado",C.value="";else{let g=[];r.values=g.values,y.value=!1,m.value="",C.value='No se encontró, ningun registro para "'+v.value+'" vuelva a intentar'}}},k=async o=>{let g=[];if(r.values=g.values,v.value="",C.value="",m.value="",y.value=!0,u.value=o,r.values.length>0){let p=o*h.value-h.value,L=o*h.value;r.slice(p,L)}else{let p=o*h.value-h.value,L=o*h.value,F=b.values;r.values=F.slice(p,L)}};return(o,g)=>(i(),c("div",Ct,[t("div",null,[t("div",kt,[t("div",yt,[t("div",xt,[t("form",{onSubmit:X(w,["prevent"])},[t("div",wt,[Dt,t("div",Lt,[Mt,R(t("input",{"onUpdate:modelValue":g[0]||(g[0]=p=>v.value=p),id:"inputMode2",name:"inputMode2",class:"form-control form-control-sm search",type:"search"},null,512),[[T,v.value]])]),St])],32)]),t("div",$t,[m.value.length>0?(i(),c("small",Vt,_(m.value),1)):f("",!0),C.value.length>0?(i(),c("small",zt,_(C.value),1)):f("",!0)]),m.value.length===0?(i(),c("div",It,[I(" Si eres nuevo registre su prueba de laboratorio tales como: 'LDH/DHL', 'GLUCOSA', 'COL. TOTAL', 'TRIGLICERIDOS', 'UREA', 'Co2', 'VCM', 'RDW ADE IDE', 'GGTP', 'TGO AST', 'TGP ALT', 'ACIDO URICO' y 'HEMOGLOBINA' "),t("a",{onClick:z,title:"Registre aquí el resultado de su prueba clínico",type:"button"},[I(" Aquí"),At])])):f("",!0)])]),t("div",Ot,[t("table",Et,[Ft,t("tbody",null,[(i(!0),c(N,null,P($(r).values,p=>(i(),c("tr",{key:p.diagnosis_id,class:"tbody-tr"},[t("td",null,[B($(Z),{class:"td-decoration",to:"/diagnosis/"+p.patient,title:"Detail"},{default:Y(()=>[I(_(p.patient),1)]),_:2},1032,["to"])])]))),128))])])]),x.value?(i(),O(tt,{key:0,"close-form-create":S})):f("",!0)])]))}}),Tt=bt(Rt,[["__scopeId","data-v-8e9cb55d"]]),Nt={class:"container"},Pt={class:"card mt-3 p-3"},Bt=t("div",{class:"card card-title"},"Lectura y Análisis de pruebas de Laboratorio Clínico",-1),Gt={hidden:""},Ut={class:"card card-search"},jt={class:"row row-search"},Ht=t("i",{class:"bi-person-fill-add"},null,-1),Kt=[Ht],Wt=t("label",{class:"form-check-label",for:"switDiagnosisPatient"},null,-1),Jt={class:"col-auto"},Qt={class:"row m-2"},Xt={class:"col-auto"},Yt=t("i",{class:"bi-search"},null,-1),Zt={class:"row"},qt=t("div",{class:"col-auto"},[t("button",{type:"submit",class:"btn-form"},"Search")],-1),te={class:"col-auto"},ee={key:1,disabled:"",type:"button",class:"btn-form"},se={class:"col-auto mt-1"},le=t("i",{class:"bi-search"},null,-1),oe=t("i",{class:"bi-printer"},null,-1),ne=[oe],ae={class:"scale-table"},ie={class:"table table-hover text-center"},ce=t("i",{class:"bi-filter"},null,-1),re=t("i",{class:"bi-filter"},null,-1),ue=t("i",{class:"bi-filter"},null,-1),de=t("i",{class:"bi-filter"},null,-1),ve=t("i",{class:"bi-filter"},null,-1),_e=t("i",{class:"bi-filter"},null,-1),he=t("i",{class:"bi-filter"},null,-1),pe=t("i",{class:"bi-filter"},null,-1),fe=t("th",null,[t("button",{class:"btn btn-sm th-font-size"},"Action")],-1),be={class:"color-td"},me={class:"color-td"},ge={class:"color-td"},Ce={class:"color-td"},ke={class:"color-td"},ye={class:"color-td"},xe={class:"color-td"},we={class:"color-td"},De={class:"colorBarra"},Le=t("i",{class:"bi-card-checklist"},null,-1),Me=["onClick"],Se=t("i",{class:"bi-pencil-fill"},null,-1),$e=[Se],Ve=["onClick"],ze=t("i",{class:"bi-trash-fill"},null,-1),Ie=[ze],Ae={key:0,class:"text-success"},Oe={key:1,class:"text-danger"},Ee={key:0,class:"pagination justify-content-center"},Fe=t("li",{class:"page-item disabled"},[t("button",{class:"page-link size"},"Pages")],-1),Re=t("button",{type:"button",class:"page-link size"},"First",-1),Te=[Re],Ne=t("button",{type:"button",class:"page-link size"},"First",-1),Pe=[Ne],Be=t("button",{class:"page-link size",type:"button"},[t("i",{class:"bi-chevron-left"})],-1),Ge=[Be],Ue=t("button",{type:"button",class:"page-link size"},[t("i",{class:"bi-chevron-left"})],-1),je=[Ue],He=["onClick"],Ke={key:0,type:"button",class:"page-link size"},We={key:0,type:"button",class:"page-link size"},Je=t("i",{class:"bi-chevron-right"},null,-1),Qe=[Je],Xe=t("button",{type:"button",class:"page-link size"},[t("i",{class:"bi-chevron-right"})],-1),Ye=[Xe],Ze=t("button",{type:"button",class:"page-link size"},"Last",-1),qe=[Ze],ts=t("button",{type:"button",class:"page-link size"},"Last",-1),es=[ts],ss={class:"page-item disabled"},ls={class:"page-link size"},vs=J({__name:"diagnosisList",props:{title:{type:String,default:"Detalles"}},setup(V){Q(async()=>{const l=await q();(l==null?void 0:l.statusText)=="OK"&&(b.values=l==null?void 0:l.data.results,console.log(l==null?void 0:l.data.results)),D(u.value),G()});const b=E([]),u=d(1),h=d(3),y=d(!0),x=d(!0);let r=E([]);const v=d(""),C=d(!1),m=d(!1),z=d(!1);let S=d(0);const w=d(""),k=d(""),o=d(!1),g=()=>{C.value=!0},p=()=>{C.value=!1},L=l=>{console.log(l),S.value=l,m.value=!0},F=()=>{m.value=!1},et=l=>{console.log(l),S.value=l,z.value=!0},st=()=>{z.value=!1},G=async()=>{let l=await document.getElementsByClassName("color-td");for(let n=0;n<l.length;n++){const e=l[n];(e.textContent==="Saludable"||e.textContent==="Normal")&&e.setAttribute("style","color:#4CAF50;"),(e.textContent==="Riesgo inicial"||e.textContent==="Riesgo final"||e.textContent==="Bajo"||e.textContent==="Alto"||e.textContent==="Severo")&&e.setAttribute("style","color:#FF9800;"),(e.textContent==="Peligro inicial"||e.textContent==="Peligro final"||e.textContent==="Muy alto")&&e.setAttribute("style","color:#FF5722;"),(e.textContent==="Leve"||e.textContent==="Moderado")&&e.setAttribute("style","color:#CDDC39;"),(e.textContent==="Leve"||e.textContent==="Moderado")&&e.setAttribute("style","color:#CDDC39;")}console.log(typeof l[6].textContent)},lt=()=>{window.print()},ot=()=>{const l=(s,a)=>s.diagnosis_id-a.diagnosis_id,n=(s,a)=>a.diagnosis_id-s.diagnosis_id,e=r.values;return o.value?(o.value=!1,e.sort(l)):(o.value=!0,console.log(o),e.sort(n))},nt=()=>{const l=(s,a)=>s.patient.localeCompare(a.patient),n=(s,a)=>a.patient.localeCompare(s.patient),e=r.values;return o.value?(o.value=!1,e.sort(l)):(o.value=!0,e.sort(n))},at=()=>{const l=(s,a)=>s.test.localeCompare(a.test),n=(s,a)=>a.test.localeCompare(s.test),e=r.values;return o.value?(o.value=!1,e.sort(l)):(o.value=!0,e.sort(n))},it=()=>{const l=(s,a)=>parseFloat(s.result)-parseFloat(a.result),n=(s,a)=>parseFloat(a.result)-parseFloat(s.result),e=r.values;return o.value?(o.value=!1,e.sort(l)):(o.value=!0,console.log(o),e.sort(n))},ct=()=>{const l=(s,a)=>s.pi-a.pi,n=(s,a)=>a.pi-s.pi,e=r.values;return o.value?(o.value=!1,e.sort(l)):(o.value=!0,console.log(o),e.sort(n))},rt=()=>{const l=(s,a)=>s.ideal-a.ideal,n=(s,a)=>a.ideal-s.ideal,e=r.values;return o.value?(o.value=!1,e.sort(l)):(o.value=!0,console.log(o),e.sort(n))},ut=()=>{const l=(s,a)=>s.pf-a.pf,n=(s,a)=>a.pf-s.pf,e=r.values;return o.value?(o.value=!1,e.sort(l)):(o.value=!0,console.log(o),e.sort(n))},dt=()=>{const l=(s,a)=>s.interpretation.localeCompare(a.interpretation),n=(s,a)=>a.interpretation.localeCompare(s.interpretation),e=r.values;return o.value?(o.value=!1,e.sort(l)):(o.value=!0,e.sort(n))},U=()=>{if(v.value.length==0)D(1);else{const l=n=>b.values.filter(s=>s.diagnosis_id!==null&&s.diagnosis_id!==void 0&&s.diagnosis_id.toString().indexOf(n)>-1||s.patient!==null&&s.patient!==void 0&&s.patient.toLowerCase().indexOf(n.toLowerCase())>-1||s.test!==null&&s.test!==void 0&&s.test.toLowerCase().indexOf(n.toLowerCase())>-1||s.result!==null&&s.result!==void 0&&s.result.toString().indexOf(n)>-1||s.pi!==null&&s.pi!==void 0&&s.pi.toString().indexOf(n)>-1||s.ideal!==null&&s.ideal!==void 0&&s.ideal.toString().indexOf(n)>-1||s.pf!==null&&s.pf!==void 0&&s.pf.toString().indexOf(n)>-1||s.interpretation!==null&&s.interpretation!==void 0&&s.interpretation.toLowerCase().indexOf(n.toLowerCase())>-1);if(l(v.value).length>0)r.values=l(v.value),y.value=!1,k.value=r.values.length+" records found",w.value="";else{let n=[];r.values=n.values,y.value=!1,k.value="",w.value="No records found"}}},vt=()=>{x.value==!0?x.value=!1:x.value=!0},_t=l=>l==u.value?"active":"",M=()=>Math.ceil(b.values.length/h.value),D=async l=>{let n=[];if(r.values=n.values,v.value="",w.value="",k.value="",y.value=!0,u.value=l,r.values.length>0){let e=l*h.value-h.value,s=l*h.value;r.slice(e,s)}else{let e=l*h.value-h.value,s=l*h.value,a=b.values;r.values=a.slice(e,s)}},j=()=>{u.value>1&&u.value--,D(1)},H=()=>{u.value>1&&u.value--,D(u.value)},K=()=>{u.value<M()&&u.value++,D(u.value)},W=()=>{u.value<M()&&u.value++,D(M())};return(l,n)=>(i(),c("div",Nt,[t("div",Pt,[Bt,B(Tt),t("div",Gt,[t("div",Ut,[t("div",jt,[t("a",{onClick:g,type:"button",class:"col-1 icon-add",title:"Create diagnosis"},Kt),t("div",{class:"col-auto"},[t("div",{class:"form-switch form-check",title:"Clasic mode"},[Wt,t("input",{onClick:vt,type:"checkbox",name:"inputNameSwitch",class:"form-check-input myCheck",id:"switDiagnosisPatient"})])]),t("div",Jt,[x.value==!0?(i(),c("form",{key:0,onKeyup:U},[t("div",Qt,[t("div",Xt,[Yt,R(t("input",{"onUpdate:modelValue":n[0]||(n[0]=e=>v.value=e),type:"search",id:"inputMode1",name:"inputMode1",class:"form-control form-control-sm search"},null,512),[[T,v.value]])])])],32)):(i(),c("form",{key:1,onSubmit:X(U,["prevent"])},[t("div",Zt,[qt,t("div",te,[k.value.length>0||w.value.length>0?(i(),c("button",{key:0,onClick:n[1]||(n[1]=e=>D(1)),type:"button",class:"btn-form cancel"}," Exit ")):(i(),c("button",ee,"Exit"))]),t("div",se,[le,R(t("input",{"onUpdate:modelValue":n[2]||(n[2]=e=>v.value=e),id:"inputMode2",name:"inputMode2",class:"form-control form-control-sm search",type:"search"},null,512),[[T,v.value]])])])],32))]),t("div",{class:"col-auto icon-print",title:"Print"},[t("a",{onClick:lt,type:"button"},ne)])])]),t("div",ae,[t("table",ie,[t("thead",null,[t("tr",{class:"thead-tr"},[t("th",null,[ce,t("button",{onClick:ot,class:"btn btn-sm th-font-size"},"Id")]),t("th",null,[re,t("button",{onClick:nt,class:"btn btn-sm th-font-size"},"FullName")]),t("th",null,[ue,t("button",{onClick:at,class:"btn btn-sm th-font-size"},"Test")]),t("th",null,[de,t("button",{onClick:it,class:"btn btn-sm th-font-size"},"Result")]),t("th",null,[ve,t("button",{onClick:ct,class:"btn btn-sm th-font-size"},"Ri")]),t("th",null,[_e,t("button",{onClick:rt,class:"btn btn-sm th-font-size"},"Ideal")]),t("th",null,[he,t("button",{onClick:ut,class:"btn btn-sm th-font-size"},"Rf")]),t("th",null,[pe,t("button",{onClick:dt,class:"btn btn-sm th-font-size"}," Interpretation ")]),fe])]),t("tbody",null,[(i(!0),c(N,null,P($(r).values,e=>(i(),c("tr",{key:e.diagnosis_id,class:"tbody-tr"},[t("td",be,_(e.diagnosis_id),1),t("td",me,_(e.patient),1),t("td",ge,_(e.test),1),t("td",Ce,_(e.result),1),t("td",ke,_(e.pi),1),t("td",ye,_(e.ideal),1),t("td",xe,_(e.pf),1),t("td",we,_(e.interpretation),1),t("td",De,[B($(Z),{to:"/diagnosis/detail/"+e.diagnosis_id,class:"btn btn-outline-info btn-sm",title:"Detail"},{default:Y(()=>[Le]),_:2},1032,["to"]),I(" | "),t("button",{onClick:s=>L(e.diagnosis_id),class:"btn btn-outline-warning btn-sm",title:"Edit"},$e,8,Me),I(" | "),t("button",{onClick:s=>et(e.diagnosis_id),class:"btn btn-outline-danger btn-sm",title:"Delete"},Ie,8,Ve)])]))),128))]),k.value.length>0?(i(),c("small",Ae,_(k.value),1)):f("",!0),w.value.length>0?(i(),c("small",Oe,_(w.value),1)):f("",!0)])]),t("nav",{onClick:G,"aria-label":"Page navigation"},[y.value?(i(),c("ul",Ee,[Fe,u.value>=2?(i(),c("li",{key:0,onClick:j,class:"page-item"},Te)):(i(),c("li",{key:1,onClick:j,class:"page-item disabled"},Pe)),u.value>=2?(i(),c("li",{key:2,onClick:H,class:"page-item"},Ge)):(i(),c("li",{key:3,onClick:H,class:"page-item disabled"},je)),(i(!0),c(N,null,P(M(),e=>(i(),c("li",{key:e,onClick:s=>D(e),class:ft(["page-item",_t(e)])},[u.value-1<e&&e<u.value+3?(i(),c("button",Ke,_(e),1)):f("",!0)],10,He))),128)),u.value<M()?(i(),c("li",{key:4,onClick:K,class:"page-item"},[u.value<M()?(i(),c("button",We,Qe)):f("",!0)])):(i(),c("li",{key:5,onClick:K,class:"page-item disabled"},Ye)),u.value<M()?(i(),c("li",{key:6,onClick:W,class:"page-item"},qe)):(i(),c("li",{key:7,onClick:W,class:"page-item disabled"},es)),t("li",ss,[t("button",ls,"Total: "+_(b.values.length),1)])])):f("",!0)])])]),C.value?(i(),O(tt,{key:0,"close-form-create":p})):f("",!0),m.value?(i(),O(gt,{key:1,"close-form-edit":F,"edit-id":$(S)},null,8,["edit-id"])):f("",!0),z.value?(i(),O(mt,{key:2,"close-form-delete":st,"delete-id":$(S)},null,8,["delete-id"])):f("",!0)]))}});export{vs as default};
