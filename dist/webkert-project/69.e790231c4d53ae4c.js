"use strict";(self.webpackChunkwebkert_project=self.webpackChunkwebkert_project||[]).push([[69],{1069:(M,g,e)=>{e.r(g),e.d(g,{LoginModule:()=>L});var p=e(9808),r=e(1402),s=e(3075),n=e(5e3),d=e(7556),m=e(1271),f=e(773),h=e(9224),c=e(4106),v=e(7531),C=e(7423);function y(o,l){1&o&&(n.TgZ(0,"span"),n._UZ(1,"div",6),n.TgZ(2,"span",7),n._UZ(3,"mat-spinner"),n.qZA()())}const Z=[{path:"",component:(()=>{class o{constructor(t,i,a){this.loadingService=t,this.router=i,this._snackBar=a,this.email=new s.NI(""),this.passwd=new s.NI(""),this.loading=!1}ngOnInit(){}login(){this.loading=!0,console.log(this.email.value,this.passwd.value),console.log("loading = ",this.loading),this.loadingService.normal_login(this.email.value,this.passwd.value).then(t=>{console.log("Credentials: ",t),this.router.navigateByUrl("/main"),this.loading=!1,this.openSnackBar("Sikeres bejelentkez\xe9s!")}).catch(t=>{console.error(t),this.loading=!1,this.openSnackBar("Sikertelen bejelentkez\xe9s!")})}ngOnDestroy(){var t;console.log("destroyed"),null===(t=this.loadingSubscription)||void 0===t||t.unsubscribe()}openSnackBar(t){this._snackBar.open(t,"Bez\xe1r",{duration:3e3})}entered(t){13===t.keyCode&&this.login()}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(d.e),n.Y36(r.F0),n.Y36(m.ux))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-login"]],decls:21,vars:4,consts:[[4,"ngIf"],[1,"login_component"],["matInput","","type","text",3,"formControl","keyup"],["matInput","","type","password",3,"formControl","keyup"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","",3,"routerLink"],[1,"overlay"],[1,"spinner"]],template:function(t,i){1&t&&(n.YNc(0,y,4,0,"span",0),n.TgZ(1,"div",1)(2,"mat-card")(3,"h1"),n._uU(4,"Bejelentkez\xe9s"),n.qZA(),n.TgZ(5,"mat-form-field")(6,"mat-label"),n._uU(7,"Email c\xedm: "),n.qZA(),n.TgZ(8,"input",2),n.NdJ("keyup",function(u){return i.entered(u)}),n.qZA()(),n._UZ(9,"br"),n.TgZ(10,"mat-form-field")(11,"mat-label"),n._uU(12,"Jelsz\xf3: "),n.qZA(),n.TgZ(13,"input",3),n.NdJ("keyup",function(u){return i.entered(u)}),n.qZA()(),n._UZ(14,"br"),n.TgZ(15,"span")(16,"button",4),n.NdJ("click",function(){return i.login()}),n._uU(17,"Bejelentkez\xe9s"),n.qZA(),n._UZ(18,"br"),n.TgZ(19,"button",5),n._uU(20,"M\xe9g nem regisztr\xe1lt\xe1lt\xe1l? Kattints ide!"),n.qZA()()()()),2&t&&(n.Q6J("ngIf",i.loading),n.xp6(8),n.Q6J("formControl",i.email),n.xp6(5),n.Q6J("formControl",i.passwd),n.xp6(6),n.Q6J("routerLink","/register"))},directives:[p.O5,f.Ou,h.a8,c.KE,c.hX,v.Nt,s.Fj,s.JJ,s.oH,C.lW,r.rH],styles:["div[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;text-align:center;height:100%}h1[_ngcontent-%COMP%]{padding-top:50px;padding-bottom:50px;font-size:xx-large}.login_component[_ngcontent-%COMP%]{height:100vh;align-items:center}mat-form-field[_ngcontent-%COMP%]{width:50%}span[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:5px}mat-card[_ngcontent-%COMP%]{width:50%}"]}),o})()}];let k=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[r.Bz.forChild(Z)],r.Bz]}),o})(),L=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[p.ez,k]]}),o})()}}]);