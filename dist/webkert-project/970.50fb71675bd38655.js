"use strict";(self.webpackChunkwebkert_project=self.webpackChunkwebkert_project||[]).push([[970],{7970:(S,f,i)=>{i.r(f),i.d(f,{RegisterModule:()=>T});var v=i(9808),u=i(1402),o=i(3075),t=i(5e3),C=i(7556),E=i(3071),F=i(1271),y=i(773),x=i(9224),h=i(4106),z=i(7531),A=i(7423),Z=i(4623);function U(e,a){1&e&&(t.TgZ(0,"span"),t._UZ(1,"div",14),t.TgZ(2,"span",15),t._UZ(3,"mat-spinner"),t.qZA()())}const M=[{path:"",component:(()=>{class e{constructor(n,r,s,l){this.loadingService=n,this.userService=r,this._snackBar=s,this.router=l,this.registerForm=new o.cw({fn:new o.NI(""),ln:new o.NI(""),email:new o.NI(""),passwd:new o.NI(""),passwd_conf:new o.NI(""),birthday:new o.NI("")}),this.loading=!1}ngOnInit(){}register(){var n,r;console.log(this.registerForm.value.fn),this.loading=!0,this.loadingService.normal_signup(null===(n=this.registerForm.get("email"))||void 0===n?void 0:n.value,null===(r=this.registerForm.get("passwd"))||void 0===r?void 0:r.value).then(s=>{var l,g,m,d,c,p;console.log("Sign up credentials: ",s);const k={id:null===(l=s.user)||void 0===l?void 0:l.uid,email:null===(g=this.registerForm.get("email"))||void 0===g?void 0:g.value,username:null===(m=this.registerForm.get("email"))||void 0===m?void 0:m.value.split("@")[0],firstname:null===(d=this.registerForm.get("fn"))||void 0===d?void 0:d.value,lastname:null===(c=this.registerForm.get("ln"))||void 0===c?void 0:c.value,birtday:null===(p=this.registerForm.get("birthday"))||void 0===p?void 0:p.value};this.userService.createUser(k).then(O=>{console.log("Succesful user insert"),this.loading=!1,this.openSnackBar("Sikeres regisztr\xe1ci\xf3! \u{1f44d}"),this.router.navigateByUrl("offers")}).catch(O=>{console.error("noooo"),this.loading=!1,this.openSnackBar("Sikertelen regisztr\xe1ci\xf3! \u{1f622}")})}).catch(s=>{console.error(s),this.loading=!1,this.openSnackBar("Sikertelen regisztr\xe1ci\xf3! \u{1f622} Hibak\xf3d konzolba \xedrva!")})}openSnackBar(n){this._snackBar.open(n,"Bez\xe1r",{duration:3e3})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(C.e),t.Y36(E.K),t.Y36(F.ux),t.Y36(u.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-register"]],decls:44,vars:2,consts:[[4,"ngIf"],[1,"register_component"],[1,"div_flex"],[3,"formGroup"],[1,"name_field"],["matInput","","type","text","formControlName","fn"],["matInput","","type","text","formControlName","ln"],[1,"other_field"],["matInput","","type","text","formControlName","email"],["matInput","","type","password","formControlName","passwd"],["matInput","","type","password","formControlName","passwd_conf"],["matInput","","type","date","formControlName","birthday"],["mat-raised-button","","color","primary",3,"click"],[1,"reg_feltet"],[1,"overlay"],[1,"spinner"]],template:function(n,r){1&n&&(t.YNc(0,U,4,0,"span",0),t.TgZ(1,"div",1)(2,"div",2)(3,"mat-card")(4,"h1"),t._uU(5,"Regisztr\xe1ci\xf3"),t.qZA(),t.TgZ(6,"form",3)(7,"div",4)(8,"mat-form-field")(9,"mat-label"),t._uU(10,"Keresztn\xe9v: "),t.qZA(),t._UZ(11,"input",5),t.qZA(),t.TgZ(12,"mat-form-field")(13,"mat-label"),t._uU(14,"Vezet\xe9kn\xe9v: "),t.qZA(),t._UZ(15,"input",6),t.qZA()(),t.TgZ(16,"div",7)(17,"mat-form-field")(18,"mat-label"),t._uU(19,"Email c\xedm: "),t.qZA(),t._UZ(20,"input",8),t.qZA(),t.TgZ(21,"mat-form-field")(22,"mat-label"),t._uU(23,"Jelsz\xf3: "),t.qZA(),t._UZ(24,"input",9),t.qZA(),t.TgZ(25,"mat-form-field")(26,"mat-label"),t._uU(27,"Jelsz\xf3 \xfajra: "),t.qZA(),t._UZ(28,"input",10),t.qZA(),t.TgZ(29,"mat-form-field")(30,"mat-label"),t._uU(31,"Sz\xfclet\xe9si d\xe1tum: "),t.qZA(),t._UZ(32,"input",11),t.qZA()(),t.TgZ(33,"div")(34,"button",12),t.NdJ("click",function(){return r.register()}),t._uU(35,"Regisztr\xe1l\xe1s"),t.qZA()()(),t.TgZ(36,"p",13)(37,"strong"),t._uU(38,"Regisztr\xe1l\xe1si felt\xe9telek"),t.qZA()(),t.TgZ(39,"mat-list")(40,"mat-list-item"),t._uU(41,"- 18 \xe9ven fel\xfclieknek enged\xe9lyezett hat\xf3s\xe1gi szab\xe1lyok ok\xe1n"),t.qZA(),t.TgZ(42,"mat-list-item"),t._uU(43,"- Fi\xf3k l\xe9trehoz\xe1s\xe1val elfogadja adatainak marketing c\xe9l\xfa felhaszn\xe1l\xe1s\xe1t"),t.qZA()()()()()),2&n&&(t.Q6J("ngIf",r.loading),t.xp6(6),t.Q6J("formGroup",r.registerForm))},directives:[v.O5,y.Ou,x.a8,o._Y,o.JL,o.sg,h.KE,h.hX,z.Nt,o.Fj,o.JJ,o.u,A.lW,Z.i$,Z.Tg],styles:[".div_flex[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;text-align:center;height:100%}div[_ngcontent-%COMP%]{align-items:center}h1[_ngcontent-%COMP%]{padding-top:50px;padding-bottom:50px;font-size:xx-large}.register_component[_ngcontent-%COMP%]{height:100vh}form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding:5px}.name_field[_ngcontent-%COMP%]{column-count:2;margin-left:13%;margin-right:13%;align-items:center}mat-form-field[_ngcontent-%COMP%]{padding:5px;width:60%;align-self:center}div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:5px}mat-card[_ngcontent-%COMP%]{margin:50px;align-self:center;width:50%}.reg_feltet[_ngcontent-%COMP%]{text-align:center;text-transform:uppercase;letter-spacing:2px;font-size:25px;padding-top:30px}mat-list[_ngcontent-%COMP%]{margin:auto 50px;font-size:17px}"]}),e})()}];let R=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[u.Bz.forChild(M)],u.Bz]}),e})(),T=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[v.ez,R]]}),e})()}}]);