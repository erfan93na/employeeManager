(this["webpackJsonpreact-table-project"]=this["webpackJsonpreact-table-project"]||[]).push([[0],{14:function(e,t,a){e.exports={main:"TableFooter_main__1-dSj",pagination:"TableFooter_pagination__2xS6W",paginationPage:"TableFooter_paginationPage__1wJq5",paginationPrevAndNext:"TableFooter_paginationPrevAndNext__23LLw",paginationEllipsis:"TableFooter_paginationEllipsis__vvjg1",paginationActive:"TableFooter_paginationActive__ntHQk"}},18:function(e,t,a){e.exports={overlay:"InfoModal_overlay__15qSb",modalContent:"InfoModal_modalContent__1oewH",closeButton:"InfoModal_closeButton__3ABSH",reloadButton:"InfoModal_reloadButton__JWSNo"}},25:function(e,t,a){e.exports={mainTable:"Table_mainTable__39A17",reloadMessage:"Table_reloadMessage__1M5PZ"}},26:function(e,t,a){e.exports={overlay:"DeleteModal_overlay__-_msa",modal:"DeleteModal_modal__2QSQq"}},27:function(e,t,a){e.exports={formContainer:"MainForm_formContainer__1G20t",closeButton:"MainForm_closeButton__sn1yl",reloadButton:"MainForm_reloadButton__E-Lsx"}},42:function(e,t,a){e.exports={main:"Header_main__1O7WF"}},44:function(e,t,a){e.exports={container:"AddEditPage_container__2V6Uq"}},45:function(e,t,a){e.exports={textInputContainer:"FormInput_textInputContainer__2snle"}},50:function(e,t,a){},51:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(17),o=a.n(s),l=(a(50),a(51),a(11)),i=a(3),r=a(1),d=function(){return Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"ID"}),Object(r.jsx)("th",{children:"Name"}),Object(r.jsx)("th",{children:"Image"}),Object(r.jsx)("th",{children:"Salary"}),Object(r.jsx)("th",{children:"Age"}),Object(r.jsx)("th",{children:"Actions"})]})})},j=a(12),b=a(9),u=c.a.createContext(),O=function(e){var t=Object(n.useContext)(u),a=t.setInfoModalOpen,c=t.setClickedId,s=t.setDeleteModalOpen,o=e.id,l=e.employee_name,i=e.employee_salary,d=e.employee_age;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("tr",{onClick:function(e){var t=e.target.tagName;"svg"!==t&&"A"!==t&&"path"!==t&&(a(!0),c(o))},children:[Object(r.jsx)("td",{children:o}),Object(r.jsx)("td",{children:l}),Object(r.jsx)("td",{children:Object(r.jsx)(b.e,{size:"3em"})}),Object(r.jsx)("td",{children:i}),Object(r.jsx)("td",{children:d}),Object(r.jsxs)("td",{children:[Object(r.jsx)("span",{children:Object(r.jsx)(j.b,{to:"/".concat(o,"/edit"),children:Object(r.jsx)(b.c,{size:"2em"})})}),Object(r.jsxs)("span",{children:[" ",Object(r.jsx)(b.b,{size:"2em",onClick:function(){return s(!0)}})]})]})]})})},m=function(e){var t=e.employees;return Object(r.jsx)("tbody",{children:t.map((function(e){return Object(n.createElement)(O,Object(l.a)(Object(l.a)({},e),{},{key:e.id}))}))})},p=a(13),h=a.n(p),x=a(42),f=a.n(x),g=function(){return Object(r.jsxs)("div",{className:f.a.main,children:[Object(r.jsx)("h3",{children:"Employee List"}),Object(r.jsx)(j.b,{to:"/add",children:Object(r.jsxs)("div",{children:["Add Row ",Object(r.jsx)(b.f,{size:"2em"})]})})]})},v={position:"top-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0},_=a(5),y=a(43),N=a.n(y),C=a(14),S=a.n(C),A=function(e){var t=e.pageNum,a=e.rowsNumber,n=e.setRowsNumber,c=e.setPageNum,s=e.length;return Object(r.jsxs)("div",{className:S.a.main,children:[Object(r.jsxs)("div",{className:S.a.rowsBar,children:[Object(r.jsx)("span",{children:"Rows Per Page:"})," ",Object(r.jsxs)("select",{onChange:function(e){c(0),n(+e.target.value)},defaultValue:6,children:[" ",Object(r.jsx)("option",{children:"2"}),Object(r.jsx)("option",{children:"4"}),Object(r.jsx)("option",{children:"6"})]})]}),Object(r.jsx)(N.a,{previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",breakClassName:S.a.paginationEllipsis,pageCount:s/a,forcePage:t,marginPagesDisplayed:2,pageRangeDisplayed:1,onPageChange:function(e){c(e.selected)},containerClassName:S.a.pagination,pageClassName:S.a.paginationPage,previousClassName:S.a.paginationPrevAndNext,nextClassName:S.a.paginationPrevAndNext,activeClassName:S.a.paginationActive})]})},P=a(25),T=a.n(P),M=a(19),F=a.n(M),B=a(18),E=a.n(B),I=function(e){var t=Object(n.useState)(null),a=Object(i.a)(t,2),c=a[0],s=a[1],o=Object(n.useState)(!0),l=Object(i.a)(o,2),d=l[0],j=l[1],O=Object(n.useContext)(u),m=O.isInfoOpen,p=O.setInfoModalOpen,x=O.clickedId,f=Object(n.useState)({}),g=Object(i.a)(f,2),y=g[0],N=y.employee_name,C=y.employee_age,S=y.employee_salary,A=g[1];return Object(n.useEffect)((function(){m&&(A({}),h.a.get("http://dummy.restapiexample.com/api/v1/employee/".concat(x)).then((function(e){A(e.data.data)})).catch((function(e){_.b.error("Could Not Load Employee Data. Please Try Again",v),s(Object(r.jsx)("div",{children:Object(r.jsx)(b.d,{size:"3rem",className:E.a.reloadButton,onClick:function(){return j((function(e){return!e}))}})}))})))}),[d,m,x]),Object(n.useEffect)((function(){document.body.style.overflow=m?"hidden":"unset"})),Object(r.jsxs)(F.a,{ariaHideApp:!1,isOpen:m,className:E.a.modalContent,overlayClassName:E.a.overlay,children:[Object(r.jsx)(b.a,{onClick:function(){p(!1)},className:E.a.closeButton,size:"3rem"}),Object(r.jsx)("h1",{children:"Employee Info"}),c,Object(r.jsxs)("div",{children:["Name: ",N]}),Object(r.jsxs)("div",{children:["Salary: ",S]}),Object(r.jsxs)("div",{children:["Age: ",C]})]})},k=a(2),w=a(26),D=a.n(w),H=function(){var e=Object(n.useContext)(u),t=e.isDeleteModalOpen,a=e.setDeleteModalOpen,c=Object(k.g)().id;return Object(n.useEffect)((function(){document.body.style.overflow=t?"hidden":"unset"})),Object(r.jsx)(F.a,{className:D.a.modal,overlayClassName:D.a.overlay,ariaHideApp:!1,isOpen:t,children:Object(r.jsxs)("form",{children:[Object(r.jsx)("div",{children:"Are You Sure You Want to Delete the Employee?"}),Object(r.jsx)("input",{type:"button",value:"Yes",onClick:function(){h.a.delete("https://dummy.restapiexample.com/api/v1/delete/".concat(c)).then((function(e){a(!1),_.b.info(e.data.message,Object(l.a)({},v))})).catch((function(e){return _.b.error("Error: "+e.response.data.message+" Please Try Again.",v)}))}}),Object(r.jsx)("input",{type:"button",value:"Cancel",onClick:function(){a(!1)}})]})})},L=function(e){var t=Object(n.useState)(!0),a=Object(i.a)(t,2),c=a[0],s=a[1],o=Object(n.useState)([]),j=Object(i.a)(o,2),b=j[0],O=j[1],p=Object(n.useState)(6),x=Object(i.a)(p,2),f=x[0],y=x[1],N=Object(n.useState)(0),C=Object(i.a)(N,2),S=C[0],P=C[1],M=Object(n.useState)(0),F=Object(i.a)(M,2),B=F[0],E=F[1],k=Object(n.useState)(!1),w=Object(i.a)(k,2),D=w[0],L=w[1],z=Object(n.useState)(!1),R=Object(i.a)(z,2),q=R[0],J=R[1],W={pageNum:S,rowsNumber:f,setRowsNumber:y,setPageNum:P,length:b.length};Object(n.useEffect)((function(){h.a.get("http://dummy.restapiexample.com/api/v1/employees").then((function(e){var t=e.data.data;O(t)})).catch((function(e){_.b.error("Please Try Again",v)}))}),[c]);var Y=b.length?Object(r.jsxs)(u.Provider,{value:{isInfoOpen:D,setInfoModalOpen:L,isDeleteModalOpen:q,setDeleteModalOpen:J,clickedId:B,setClickedId:E},children:["  ",Object(r.jsxs)("table",{children:[Object(r.jsx)(d,{}),Object(r.jsx)(m,{employees:b.slice(S*f,S*f+f)})]})," ",Object(r.jsx)(A,Object(l.a)({},W)),Object(r.jsx)(I,{}),Object(r.jsx)(H,{})]}):Object(r.jsxs)("div",{className:T.a.reloadMessage,children:[Object(r.jsx)("div",{children:"Could Not Load Table. Please Try Again"}),Object(r.jsx)("button",{onClick:function(){return s((function(e){return!e}))},children:"Reload Table"})]});return Object(r.jsxs)("div",{className:T.a.mainTable,children:[Object(r.jsx)(g,{}),Y]})},z=a(44),R=a.n(z),q=a(27),J=a.n(q),W=(a(84),a(45)),Y=a.n(W),Q=function(e){var t=Object(k.f)(),a=t.pathname.includes("info");return Object(r.jsxs)("div",{className:Y.a.textInputContainer,children:[Object(r.jsx)("label",{children:a&&e.label}),Object(r.jsx)("input",{disabled:t.pathname.includes("info"),type:"text",name:e.name,placeholder:a?"":e.placeHolder,onChange:e.onchange,value:e.value})," ",e.error?Object(r.jsx)("div",{children:e.error}):null," "]})},V=Object(k.h)((function(e){var t=Object(k.f)(),a=Object(k.g)().id,c=t.pathname.includes("add")?"add":t.pathname.includes("edit")?"edit":"info",s="add"===c?"post":"put",o="post"===s?"/create":"/update/".concat(a),d=Object(n.useState)(null),j=Object(i.a)(d,2),u=j[0],O=j[1],m=Object(n.useState)(!0),p=Object(i.a)(m,2),x=p[0],f=p[1],g=Object(n.useState)(""),y=Object(i.a)(g,2),N=y[0],C=y[1],S=Object(n.useState)(""),A=Object(i.a)(S,2),P=A[0],T=A[1],M=Object(n.useState)(""),F=Object(i.a)(M,2),B=F[0],E=F[1],I=Object(n.useState)(""),w=Object(i.a)(I,2),D=w[0],H=w[1],L=Object(n.useState)(""),z=Object(i.a)(L,2),R=z[0],q=z[1],W=Object(n.useState)(""),Y=Object(i.a)(W,2),V=Y[0],$=Y[1];Object(n.useEffect)((function(){a&&h.a.get("http://dummy.restapiexample.com/api/v1/employee/".concat(a)).then((function(e){var t=e.data.data;H(t.employee_name),q(t.employee_salary),$(t.employee_age),O(null)})).catch((function(e){_.b.error(e.response.data.message,v),O(Object(r.jsx)("div",{children:Object(r.jsx)(b.d,{size:"3em",className:J.a.reloadButton,onClick:function(){return f((function(e){return!e}))}})}))}))}),[x,a]);var Z=Object(n.useCallback)((function(t){if(t.preventDefault(),D&&R&&V){var a={name:D,salary:R,age:V};h()({method:s,url:"https://dummy.restapiexample.com/api/v1".concat(o),data:JSON.stringify(a)}).then((function(t){e.history.push("/"),_.b.success(t.data.message,Object(l.a)({},v))})).catch((function(e){e.response?_.b.error(e.response.data.message+" Please Try Again",Object(l.a)({},v)):e.request?_.b.error("There Was a Problem with Sending Request, Try Again",Object(l.a)({},v)):console.log(e)}))}else _.b.error("All Fields Should Be Field",v)}),[V,s,D,o,R,e.history]),G=Object(n.useCallback)((function(e){C(""),E(""),T("");var t=e.target.value,a=e.target.name;t||(a.includes("name")&&C("This Field Should Be Filled"),a.includes("salary")&&T("This Field Should Be Filled"),a.includes("age")&&E("This Field Should Be Filled")),"employee_name"===a&&(/^[a-zA-Z0_ ]*$/.test(t)?H(e.target.value):C("This Field Should Be A Valid Name")),"employee_salary"===a&&(/^[0-9]*$/.test(t)?q(e.target.value):T("This Field Should Be A Number")),"employee_age"===a&&(/^[0-9]*$/.test(t)?t>60?E("Maximum Age is 60 Years Old"):$(t):E("This Field Should Be A Number"))}),[]);return Object(r.jsxs)("div",{className:J.a.formContainer,children:[Object(r.jsxs)("h2",{children:["add"===c?"Add New ":"edit"===c?"Edit ":"","Employee","info"===c?" Info":null]}),Object(r.jsx)("div",{children:u}),Object(r.jsxs)("form",{onSubmit:Z,children:[Object(r.jsx)(Q,{onchange:G,error:N,label:"Name",value:D,placeHolder:"Please Enter Name",name:"employee_name"}),Object(r.jsx)(Q,{onchange:G,error:P,value:R,label:"Salary",placeHolder:"Please Enter Salary",name:"employee_salary"}),Object(r.jsx)(Q,{onchange:G,error:B,value:V,label:"Age",placeHolder:"Please Enter Age",name:"employee_age"}),"info"===c?null:Object(r.jsx)("input",{type:"submit",value:"Submit"})]})]})})),$=function(){return console.log("render"),Object(r.jsx)("div",{className:R.a.container,children:Object(r.jsx)(V,{})})};var Z=function(){return Object(r.jsxs)(j.a,{basename:"/employeeManager/",children:[Object(r.jsxs)(k.c,{children:[Object(r.jsx)(k.a,{exact:!0,path:"/",children:Object(r.jsx)(L,{})}),Object(r.jsx)(k.a,{path:"/add",children:Object(r.jsx)($,{})}),Object(r.jsx)(k.a,{exact:!0,path:"/:id/edit",children:Object(r.jsx)($,{})})]}),Object(r.jsx)(_.a,{})]})};o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(Z,{})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.9aaf8bdc.chunk.js.map