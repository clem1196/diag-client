import{d as lt,o as nt,r as E,a as d,b as a,c,e as t,t as v,f as I,v as P,w as at,F as O,h as N,u as x,i as _,k as T,j as z,s as it,l as ct,R as rt,g as B,n as ut}from"./index-Be44v_bb.js";import{g as dt}from"./diagnosis-Ca66f_EQ.js";import vt from"./diagnosisGraphics-B9K5QVql.js";import{_ as _t}from"./diagnosisAdd.vue_vue_type_script_setup_true_lang-BOKxIxS_.js";import{_ as pt}from"./diagnosisEdit.vue_vue_type_script_setup_true_lang-df37LOGQ.js";import{_ as ht}from"./diagnosisDelete.vue_vue_type_script_setup_true_lang-D-qSKdaE.js";import"./helpers.segment-Dc4JXg8Y.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./diagnosis-CnflPhT8.js";const ft={class:"container"},bt={class:"card mt-3 p-3"},mt={class:"col-1"},gt={key:0},kt={key:0,class:"card card-title"},Ct={class:"bi-check-circle-fill text-success"},yt={key:1,class:"card card-title"},xt={class:"card card-search"},wt={class:"row row-search"},Dt=t("i",{class:"bi-person-fill-add"},null,-1),Mt=[Dt],Vt={class:"col-auto"},zt={class:"row m-2"},Ft={class:"col-auto"},St=t("i",{class:"bi-search"},null,-1),At={class:"row"},Lt=t("div",{class:"col-auto"},[t("button",{type:"submit",class:"btn-form"},"Search")],-1),Rt={class:"col-auto"},$t={key:1,disabled:"",type:"button",class:"btn-form"},Et={class:"col-auto mt-1"},It=t("i",{class:"bi-search"},null,-1),Pt=t("i",{class:"bi-printer"},null,-1),Ot=[Pt],Nt={class:"scale-table"},Tt={class:"table size-static table-hover table-responsive-sm text-center"},Bt=t("i",{class:"bi-filter"},null,-1),jt=t("i",{class:"bi-filter"},null,-1),Gt=t("i",{class:"bi-filter"},null,-1),Kt=t("i",{class:"bi-filter"},null,-1),Ut=t("i",{class:"bi-filter"},null,-1),Ht=t("i",{class:"bi-filter"},null,-1),Jt=t("i",{class:"bi-filter"},null,-1),Qt=t("th",null,[t("button",{class:"btn btn-sm"},"Action")],-1),Wt={class:"color-td font-size-test"},Xt={class:"color-td"},Yt={class:"color-td"},Zt=t("i",{class:"bi-card-checklist size-checklist"},null,-1),qt=["onClick"],te=t("i",{class:"bi-pencil-fill size-pencil"},null,-1),ee=[te],se=["onClick"],oe=t("i",{class:"bi-trash-fill size-trash"},null,-1),le=[oe],ne={key:0,class:"text-success"},ae={key:1,class:"text-danger"},ie={key:0,class:"pagination justify-content-center"},ce=t("li",{class:"page-item disabled"},[t("button",{disabled:"",class:"page-link size"},"Pages")],-1),re=t("button",{type:"button",class:"page-link size"},"First",-1),ue=[re],de=t("button",{type:"button",class:"page-link size"},"First",-1),ve=[de],_e=t("button",{class:"page-link size",type:"button"},[t("i",{class:"bi-chevron-left"})],-1),pe=[_e],he=t("button",{type:"button",class:"page-link size"},[t("i",{class:"bi-chevron-left"})],-1),fe=[he],be=["onClick"],me={key:0,type:"button",class:"page-link size"},ge={key:0,type:"button",class:"page-link size"},ke=t("i",{class:"bi-chevron-right"},null,-1),Ce=[ke],ye=t("button",{type:"button",class:"page-link size"},[t("i",{class:"bi-chevron-right"})],-1),xe=[ye],we=t("button",{type:"button",class:"page-link size"},"Last",-1),De=[we],Me=t("button",{type:"button",class:"page-link size"},"Last",-1),Ve=[Me],ze={class:"page-item disabled"},Fe={class:"page-link size"},Se=t("div",{class:"card card-title"}," Graphics ",-1),Be=lt({__name:"diagnosisPatientDetail",props:{title:{type:String,default:"Detalles"}},setup(Ae){const w=it();nt(async()=>{if(w.params.name!==void 0){const o=await dt();if((o==null?void 0:o.statusText)=="OK"){console.log(w.params.name);let l=await(o==null?void 0:o.data.results.filter(e=>e.patient===w.params.name));p.values=l}console.log(p),f(r.value),F()}});const p=E([]),r=d(1),b=d(3),C=d(!0),j=d(!0);let u=E([]);const h=d(""),D=d(!1),M=d(!1),V=d(!1);let y=d(0);const g=d(""),k=d(""),i=d(!1),G=()=>{D.value=!0},K=()=>{D.value=!1,location.reload()},U=o=>{console.log(o),y.value=o,M.value=!0},H=()=>{M.value=!1},J=o=>{console.log(o),y.value=o,V.value=!0},Q=()=>{V.value=!1},F=async()=>{let o=await document.getElementsByClassName("color-td");for(let l=0;l<o.length;l++){const e=o[l];(e.textContent==="Saludable"||e.textContent==="Normal")&&e.setAttribute("style","color:#4CAF50;"),(e.textContent==="Riesgo inicial"||e.textContent==="Riesgo final"||e.textContent==="Bajo"||e.textContent==="Alto"||e.textContent==="Severo")&&e.setAttribute("style","color:#FF9800;"),(e.textContent==="Peligro inicial"||e.textContent==="Peligro final"||e.textContent==="Muy alto")&&e.setAttribute("style","color:#FF5722;"),(e.textContent==="Leve"||e.textContent==="Moderado")&&e.setAttribute("style","color:#CDDC39;"),(e.textContent==="Leve"||e.textContent==="Moderado")&&e.setAttribute("style","color:#CDDC39;")}console.log(typeof o[6].textContent)},W=()=>{window.print()},X=()=>{const o=(s,n)=>s.diagnosis_id-n.diagnosis_id,l=(s,n)=>n.diagnosis_id-s.diagnosis_id,e=u.values;return i.value?(i.value=!1,e.sort(o)):(i.value=!0,console.log(i),e.sort(l))},Y=()=>{const o=(s,n)=>s.test.localeCompare(n.test),l=(s,n)=>n.test.localeCompare(s.test),e=u.values;return i.value?(i.value=!1,e.sort(o)):(i.value=!0,e.sort(l))},Z=()=>{const o=(s,n)=>parseFloat(s.result)-parseFloat(n.result),l=(s,n)=>parseFloat(n.result)-parseFloat(s.result),e=u.values;return i.value?(i.value=!1,e.sort(o)):(i.value=!0,console.log(i),e.sort(l))},q=()=>{const o=(s,n)=>s.pi-n.pi,l=(s,n)=>n.pi-s.pi,e=u.values;return i.value?(i.value=!1,e.sort(o)):(i.value=!0,console.log(i),e.sort(l))},tt=()=>{const o=(s,n)=>s.ideal-n.ideal,l=(s,n)=>n.ideal-s.ideal,e=u.values;return i.value?(i.value=!1,e.sort(o)):(i.value=!0,console.log(i),e.sort(l))},et=()=>{const o=(s,n)=>s.pf-n.pf,l=(s,n)=>n.pf-s.pf,e=u.values;return i.value?(i.value=!1,e.sort(o)):(i.value=!0,console.log(i),e.sort(l))},st=()=>{const o=(s,n)=>s.interpretation.localeCompare(n.interpretation),l=(s,n)=>n.interpretation.localeCompare(s.interpretation),e=u.values;return i.value?(i.value=!1,e.sort(o)):(i.value=!0,e.sort(l))},S=()=>{if(h.value.length==0)f(1);else{const o=l=>p.values.filter(s=>s.diagnosis_id!==null&&s.diagnosis_id!==void 0&&s.diagnosis_id.toString().indexOf(l)>-1||s.patient!==null&&s.patient!==void 0&&s.patient.toLowerCase().indexOf(l.toLowerCase())>-1||s.test!==null&&s.test!==void 0&&s.test.toLowerCase().indexOf(l.toLowerCase())>-1||s.result!==null&&s.result!==void 0&&s.result.toString().indexOf(l)>-1||s.pi!==null&&s.pi!==void 0&&s.pi.toString().indexOf(l)>-1||s.ideal!==null&&s.ideal!==void 0&&s.ideal.toString().indexOf(l)>-1||s.pf!==null&&s.pf!==void 0&&s.pf.toString().indexOf(l)>-1||s.interpretation!==null&&s.interpretation!==void 0&&s.interpretation.toLowerCase().indexOf(l.toLowerCase())>-1);if(o(h.value).length>0)u.values=o(h.value),C.value=!1,k.value=u.values.length+" records found",g.value="";else{let l=[];u.values=l.values,C.value=!1,k.value="",g.value="No records found"}}},ot=o=>o==r.value?"active":"",m=()=>Math.ceil(p.values.length/b.value),f=async o=>{let l=[];if(u.values=l.values,h.value="",g.value="",k.value="",C.value=!0,r.value=o,u.values.length>0){let e=o*b.value-b.value,s=o*b.value;u.slice(e,s)}else{let e=o*b.value-b.value,s=o*b.value,n=p.values;u.values=n.slice(e,s)}},A=()=>{r.value>1&&r.value--,f(1)},L=()=>{r.value>1&&r.value--,f(r.value)},R=()=>{r.value<m()&&r.value++,f(r.value)},$=()=>{r.value<m()&&r.value++,f(m())};return(o,l)=>(a(),c("div",ft,[t("div",bt,[t("div",mt,[t("button",{onClick:l[0]||(l[0]=e=>o.$router.back()),class:"btn btn-salir",type:"button"},"Salir")]),o.$route.params.name!==void 0?(a(),c("div",gt,[p.values.length===13?(a(),c("div",kt,[t("i",Ct,v(" "+o.$route.params.name+": ")+"Test Completo",1)])):(a(),c("div",yt,v(o.$route.params.name+`(${p.values.length} de 13)`),1)),t("div",xt,[t("div",wt,[t("a",{onClick:G,type:"button",class:"col-auto icon-add",title:"Add diagnosis"},Mt),t("div",Vt,[j.value==!0?(a(),c("form",{key:0,onKeyup:S},[t("div",zt,[t("div",Ft,[St,I(t("input",{"onUpdate:modelValue":l[1]||(l[1]=e=>h.value=e),type:"search",id:"inputMode1",name:"inputMode1",class:"form-control form-control-sm search"},null,512),[[P,h.value]])])])],32)):(a(),c("form",{key:1,onSubmit:at(S,["prevent"])},[t("div",At,[Lt,t("div",Rt,[k.value.length>0||g.value.length>0?(a(),c("button",{key:0,onClick:l[2]||(l[2]=e=>f(1)),type:"button",class:"btn-form cancel"}," Exit ")):(a(),c("button",$t,"Exit"))]),t("div",Et,[It,I(t("input",{"onUpdate:modelValue":l[3]||(l[3]=e=>h.value=e),id:"inputMode2",name:"inputMode2",class:"form-control form-control-sm search",type:"search"},null,512),[[P,h.value]])])])],32))]),t("div",{class:"col-auto icon-print",title:"Print"},[t("a",{onClick:W},Ot)])])]),t("div",Nt,[t("table",Tt,[t("thead",null,[t("tr",{class:"thead-tr"},[t("th",{hidden:""},[Bt,t("button",{onClick:X,class:"btn btn-sm",title:"Id"},"Id")]),t("th",null,[jt,t("button",{onClick:Y,class:"btn btn-sm",title:"Tipo de prueba"},"Test")]),t("th",null,[Gt,t("button",{onClick:Z,class:"btn btn-sm",title:"Valor de la prueba clínica"},"Res")]),t("th",{hidden:""},[Kt,t("button",{onClick:q,class:"btn btn-sm",title:"rango inicial"},"Ri")]),t("th",{hidden:""},[Ut,t("button",{onClick:tt,class:"btn btn-sm",title:"Rango ideal"},"Ideal")]),t("th",{hidden:""},[Ht,t("button",{onClick:et,class:"btn btn-sm",title:"Rango final"},"Rf")]),t("th",null,[Jt,t("button",{onClick:st,class:"btn btn-sm",title:"Interpretación del resultado"}," Interp ")]),Qt])]),t("tbody",null,[(a(!0),c(O,null,N(x(u).values,e=>(a(),c("tr",{key:e.diagnosis_id,class:"tbody-tr"},[t("td",Wt,v(e.test),1),t("td",Xt,v(e.result),1),t("td",Yt,v(e.interpretation),1),t("td",null,[T(x(rt),{to:"/diagnosis/detail/"+e.diagnosis_id,title:"Detail"},{default:ct(()=>[Zt]),_:2},1032,["to"]),B(" | "),t("a",{onClick:s=>U(e.diagnosis_id),title:"Edit"},ee,8,qt),B(" | "),t("a",{onClick:s=>J(e.diagnosis_id),title:"Delete"},le,8,se)])]))),128))]),k.value.length>0?(a(),c("small",ne,v(k.value),1)):_("",!0),g.value.length>0?(a(),c("small",ae,v(g.value),1)):_("",!0)])]),t("nav",{onClick:F,"aria-label":"Page navigation"},[C.value?(a(),c("ul",ie,[ce,r.value>=2?(a(),c("li",{key:0,onClick:A,class:"page-item"},ue)):(a(),c("li",{key:1,onClick:A,class:"page-item disabled"},ve)),r.value>=2?(a(),c("li",{key:2,onClick:L,class:"page-item"},pe)):(a(),c("li",{key:3,onClick:L,class:"page-item disabled"},fe)),(a(!0),c(O,null,N(m(),e=>(a(),c("li",{key:e,onClick:s=>f(e),class:ut(["page-item",ot(e)])},[r.value-1<e&&e<r.value+3?(a(),c("button",me,v(e),1)):_("",!0)],10,be))),128)),r.value<m()?(a(),c("li",{key:4,onClick:R,class:"page-item"},[r.value<m()?(a(),c("button",ge,Ce)):_("",!0)])):(a(),c("li",{key:5,onClick:R,class:"page-item disabled"},xe)),r.value<m()?(a(),c("li",{key:6,onClick:$,class:"page-item"},De)):(a(),c("li",{key:7,onClick:$,class:"page-item disabled"},Ve)),t("li",ze,[t("button",Fe,"Total: "+v(p.values.length),1)])])):_("",!0)]),Se,t("div",null,[T(vt)])])):_("",!0),D.value?(a(),z(_t,{key:1,"close-form-add":K})):_("",!0),M.value?(a(),z(pt,{key:2,"close-form-edit":H,"edit-id":x(y)},null,8,["edit-id"])):_("",!0),V.value?(a(),z(ht,{key:3,"close-form-delete":Q,"delete-id":x(y)},null,8,["delete-id"])):_("",!0)])]))}});export{Be as default};
