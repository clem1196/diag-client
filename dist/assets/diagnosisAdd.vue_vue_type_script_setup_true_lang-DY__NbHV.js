import{d as M,r as b,o as B,b as n,c as i,e as t,t as c,u as p,w as E,g as v,y as I,F as T,h as G,v as w,i as g,f as y,s as S}from"./index-CuO5nfLT.js";import{g as V,b as N}from"./diagnosis-Ca66f_EQ.js";import{a as U,b as H}from"./diagnosis-BpbWYSpc.js";import{i as P}from"./helpers.segment-Dc4JXg8Y.js";const z=t("button",{type:"button",id:"formAdd",hidden:"",class:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#staticBackdrop"}," Launch static backdrop modal ",-1),K={class:"modal fade",id:"staticBackdrop","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},j={class:"modal-dialog"},q={class:"modal-content"},Q={class:"modal-header bg-light"},W={class:"m-2"},$={class:"m-4 mt-2 mb-0"},J={class:"modal-body"},X={class:"card card-body"},Y={class:"col-auto"},Z=t("label",{for:"test"},"Test",-1),tt=["value"],st={key:0,class:"text-alert-error"},et={key:1,class:"text-alert-optional"},at={class:"col-auto"},ot=t("label",{for:"result"},"Result",-1),lt={key:0,class:"text-alert-optional"},nt={key:1,class:"text-alert-error"},it={class:"col-auto"},rt=t("label",{for:"observation"},"Observación",-1),dt={key:0,class:"text-alert-error"},ct={key:0,class:"modal-footer"},ut=t("button",{disabled:"",type:"submit",class:"btn btn-save"},"Agregar",-1),mt=t("button",{disabled:"",class:"btn btn-light","data-bs-dismiss":"modal"}," Cancelar ",-1),bt={key:1,class:"modal-footer"},_t=t("button",{type:"submit",class:"btn btn-save"},"Agregar",-1),pt={key:0,class:"alert alert-success mt-2",role:"alert"},gt=t("i",{class:"bi-check-circle-fill m-1"},null,-1),ht={key:1,class:"alert alert-warning mt-2",role:"alert"},vt=t("i",{class:"bi-exclamation-triangle-fill m-1"},null,-1),yt={key:2,class:"alert alert-danger mt-2"},ft=t("i",{class:"bi-exclamation-triangle-fill m-1"},null,-1),Ct=M({__name:"diagnosisAdd",props:{title:{type:String,default:"Detalles"},closeFormAdd:{type:Function}},setup(C){const u=C,R=S(),L=b([]),s=b({patient:"",sex:"F",test:"LDH/DHL",result:"0.0",condition:"activo",observation:""});let r=b(["LDH/DHL","GLUCOSA","COL. TOTAL","TRIGLICERIDOS","UREA","Co2","VCM","RDW ADE IDE","GGTP","TGO AST","TGP ALT","ACIDO URICO","HEMOGLOBINA"]);const m=b({validatePatient:"",validateResult:""}),l=b({success:"",warning:"",err:""});B(async()=>{await f(),console.log(r.values.length),console.log(r.length),h();let e=document.getElementById("formAdd");e==null||e.click(),console.log(r)});const h=async()=>{m.validatePatient=await U(s.patient),m.validateResult=await H(s.result)},O=async()=>{try{let e=await N(s);(e==null?void 0:e.statusText)==="Created"&&(l.success=e.data.Message,l.err="",await f(),await k(),console.log(r.values.length),console.log(r.length),setTimeout(async()=>{l.success=""},1500))}catch(e){l.success="",l.err=e.response.data.Message,console.log(e.response.data.Message)}},f=async()=>{var A,x;const e=await V();(e==null?void 0:e.statusText)=="OK"&&(L.values=e==null?void 0:e.data.results);let a=await(e==null?void 0:e.data.results.filter(d=>d.patient===R.params.name));s.patient=a[0].patient,s.sex=(A=a[0])==null?void 0:A.sex,s.condition=(x=a[0])==null?void 0:x.condition;const o=[];for(let d=0;d<a.length;d++){const _=a[d];o.push(_.test)}const D=r.reduce((d,_)=>(o.find(F=>F===_)||(d=[...d,_]),d),[]);r.values=D,r.values.length===0&&(l.success="En hora buena ya tienes tus tests completo",setTimeout(()=>{l.success=""},5e3))},k=async()=>{s.test="",s.result="0.0",s.condition="activo",s.observation="",l.success="",l.err="",l.warning="",await h()};return(e,a)=>(n(),i(T,null,[z,t("div",K,[t("div",j,[t("div",q,[t("div",Q,[t("h5",W," Add to: "+c(e.$route.params.name),1),t("button",{type:"button",onClick:a[0]||(a[0]=(...o)=>u.closeFormAdd&&u.closeFormAdd(...o)),class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]),t("p",$,"Quedan"+c(" "+p(r).values.length+" ")+"de"+c(" "+p(r).length),1),t("div",J,[t("form",{onSubmit:E(O,["prevent"]),onKeyup:h},[t("div",X,[t("div",Y,[Z,v(t("select",{"onUpdate:modelValue":a[1]||(a[1]=o=>s.test=o),class:"form-select select-size",id:"test"},[(n(!0),i(T,null,G(p(r).values,o=>(n(),i("option",{key:o,value:o},c(o),9,tt))),128))],512),[[I,s.test]]),s.test===""||s.test.length===0||s.test===void 0?(n(),i("small",st," Requerido ")):(n(),i("small",et))]),t("div",at,[ot,v(t("input",{"onUpdate:modelValue":a[2]||(a[2]=o=>s.result=o),type:"text",class:"form-control input-size",id:"result"},null,512),[[w,s.result]]),m.validateResult===""||m.validateResult==="Opcional"?(n(),i("small",lt,c(m.validateResult),1)):(n(),i("small",nt,c(m.validateResult),1))]),t("div",it,[rt,v(t("textarea",{"onUpdate:modelValue":a[3]||(a[3]=o=>s.observation=o),type:"text",class:"form-control input-size",id:"observation",placeholder:""},null,512),[[w,s.observation]]),s.observation!==null&&s.observation.length>2083?(n(),i("small",dt," No se aceptan mas caracteres ")):g("",!0)])]),s.result==="0.0"||s.result===".0"||s.result==="0."||s.result==="0"||p(P)(s.result)===!1?(n(),i("div",ct,[ut,mt,t("button",{onClick:a[4]||(a[4]=(...o)=>u.closeFormAdd&&u.closeFormAdd(...o)),type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Terminar ")])):(n(),i("div",bt,[_t,t("button",{onClick:k,class:"btn btn-light"},"Cancelar"),t("button",{onClick:a[5]||(a[5]=(...o)=>u.closeFormAdd&&u.closeFormAdd(...o)),type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Terminar ")]))],32),l.success.length>0?(n(),i("p",pt,[gt,y(c(l.success),1)])):g("",!0),l.warning.length>0?(n(),i("p",ht,[vt,y(c(l.warning),1)])):g("",!0),l.err.length>0?(n(),i("p",yt,[ft,y(c(l.err),1)])):g("",!0)])])])])],64))}});export{Ct as _};