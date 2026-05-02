import{_ as c,g as he,s as me,q as ke,p as ye,a as pe,b as ve,c as lt,d as ge,ap as j,l as nt,j as Te,i as xe,y as be,u as we}from"./mermaid.core-BSSitJJh.js";import{g as Ct}from"./elk-api-DIMSqasN.js";import{s as vt,E as _e,F as De,G as Se,r as Ce,H as Me,I as Ee,J as qt,K as Gt,L as Ie,M as $e,N as Ye,O as Fe,P as Ae,Q as Le,R as We,S as jt,T as Xt,U as Ut,V as Zt,W as Qt,X as Oe}from"./d3-wIndiOZE.js";import"./canvas-3d-D6Zkhnwj.js";import"./react-Cpd4151S.js";import"./canvas-runtime-BBWzroUB.js";import"./canvas-3d-shell-DAMZ8lsu.js";import"./design-canvas-eLIBlUF9.js";import"./geospatial-B0FPVxMu.js";import"./markdown-parser-DToUwB6h.js";import"./markdown-it-BX_wUld1.js";import"./markdown-ast-Cp1T4cP6.js";import"./ui-BNTQIuor.js";import"./graph-canvas-CbLpgqvr.js";import"./canvas-zoom-B4-h6kyD.js";import"./canvas-2d-DJG8Tm21.js";import"./schema-1_flJfP0.js";import"./markdown-COqdqZ-9.js";import"./workspace-main-BCMok6Lv.js";import"./flow-editor-ui-8k-h2qqf.js";import"./flow-editor-canvas-CQoTxin-.js";import"./flow-canvas-core-BNpS_eEs.js";import"./workspace-fs-sht5B2nC.js";import"./workspace-source-files-BAjHPzZP.js";import"./panel-flow-editor-4qmsbfZX.js";import"./canvas-shell-1oEz_qmX.js";import"./panels-BJa-j7wz.js";import"./schema-editor-B73KKeui.js";import"./toolbar-ui-UNMufvM_.js";import"./markdown-code-DvtFTtng.js";import"./highlightjs-Cd02PMP8.js";import"./markdown-preview-hFtiR89q.js";import"./toolbar-Bjsbo_lI.js";import"./graph-canvas-root-Bntb3Tek.js";import"./toolbar-launch-C68K7QM8.js";import"./settings-view-CnhTAq9R.js";import"./settings-registry-ZfQHiJf_.js";import"./settings-Dg01UL78.js";import"./canvas-3d-scene-BSLg1Ox1.js";import"./canvas-3d-visuals-Id8CI6aE.js";import"./three-core-CI_PzYtU.js";import"./three-renderers-COZi_ocn.js";import"./three-textures-D4KpcNGc.js";import"./three-scene-core-Dxf37R84.js";import"./three-math-Cn_OgFNR.js";import"./three-extras-BrFkphqG.js";import"./three-objects-yoth8-Fa.js";import"./three-materials-CsgPCM-x.js";import"./three-geometries-CNb6CxmU.js";import"./three-lights-Bos6o4Yh.js";import"./three-examples-DwdOs8T0.js";import"./three-fiber-Bekn5R3f.js";import"./toolbar-imports-DsDbLDWs.js";import"./workspace-actions-D4ngEGaB.js";import"./workspace-runtime-BgbUQekn.js";import"./workspace-ui-CuZ7-rFS.js";import"./workspace-BcV7EdKh.js";import"./panel-preview-BBHzM9vQ.js";import"./panel-graph-fields-B4__A2pN.js";import"./spotlight-w1GrN1iE.js";import"./toolbar-menu-BbJgn0Bc.js";import"./flow-canvas-CTx8jW-_.js";var gt={exports:{}},Pe=gt.exports,Kt;function Ve(){return Kt||(Kt=1,(function(t,a){(function(i,s){t.exports=s()})(Pe,(function(){var i="day";return function(s,n,k){var y=function(A){return A.add(4-A.isoWeekday(),i)},_=n.prototype;_.isoWeekYear=function(){return y(this).year()},_.isoWeek=function(A){if(!this.$utils().u(A))return this.add(7*(A-this.isoWeek()),i);var b,L,V,N,z=y(this),M=(b=this.isoWeekYear(),L=this.$u,V=(L?k.utc:k)().year(b).startOf("year"),N=4-V.isoWeekday(),V.isoWeekday()>4&&(N+=7),V.add(N,i));return z.diff(M,"week")+1},_.isoWeekday=function(A){return this.$utils().u(A)?this.day()||7:this.day(this.day()%7?A:A-7)};var W=_.startOf;_.startOf=function(A,b){var L=this.$utils(),V=!!L.u(b)||b;return L.p(A)==="isoweek"?V?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):W.bind(this)(A,b)}}}))})(gt)),gt.exports}var Ne=Ve();const ze=Ct(Ne);var Tt={exports:{}},Re=Tt.exports,Jt;function He(){return Jt||(Jt=1,(function(t,a){(function(i,s){t.exports=s()})(Re,(function(){var i={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},s=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d/,k=/\d\d/,y=/\d\d?/,_=/\d*[^-_:/,()\s\d]+/,W={},A=function(D){return(D=+D)+(D>68?1900:2e3)},b=function(D){return function(S){this[D]=+S}},L=[/[+-]\d\d:?(\d\d)?|Z/,function(D){(this.zone||(this.zone={})).offset=(function(S){if(!S||S==="Z")return 0;var O=S.match(/([+-]|\d\d)/g),Y=60*O[1]+(+O[2]||0);return Y===0?0:O[0]==="+"?-Y:Y})(D)}],V=function(D){var S=W[D];return S&&(S.indexOf?S:S.s.concat(S.f))},N=function(D,S){var O,Y=W.meridiem;if(Y){for(var R=1;R<=24;R+=1)if(D.indexOf(Y(R,0,S))>-1){O=R>12;break}}else O=D===(S?"pm":"PM");return O},z={A:[_,function(D){this.afternoon=N(D,!1)}],a:[_,function(D){this.afternoon=N(D,!0)}],Q:[n,function(D){this.month=3*(D-1)+1}],S:[n,function(D){this.milliseconds=100*+D}],SS:[k,function(D){this.milliseconds=10*+D}],SSS:[/\d{3}/,function(D){this.milliseconds=+D}],s:[y,b("seconds")],ss:[y,b("seconds")],m:[y,b("minutes")],mm:[y,b("minutes")],H:[y,b("hours")],h:[y,b("hours")],HH:[y,b("hours")],hh:[y,b("hours")],D:[y,b("day")],DD:[k,b("day")],Do:[_,function(D){var S=W.ordinal,O=D.match(/\d+/);if(this.day=O[0],S)for(var Y=1;Y<=31;Y+=1)S(Y).replace(/\[|\]/g,"")===D&&(this.day=Y)}],w:[y,b("week")],ww:[k,b("week")],M:[y,b("month")],MM:[k,b("month")],MMM:[_,function(D){var S=V("months"),O=(V("monthsShort")||S.map((function(Y){return Y.slice(0,3)}))).indexOf(D)+1;if(O<1)throw new Error;this.month=O%12||O}],MMMM:[_,function(D){var S=V("months").indexOf(D)+1;if(S<1)throw new Error;this.month=S%12||S}],Y:[/[+-]?\d+/,b("year")],YY:[k,function(D){this.year=A(D)}],YYYY:[/\d{4}/,b("year")],Z:L,ZZ:L};function M(D){var S,O;S=D,O=W&&W.formats;for(var Y=(D=S.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(g,v,p){var f=p&&p.toUpperCase();return v||O[p]||i[p]||O[f].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(o,l,h){return l||h.slice(1)}))}))).match(s),R=Y.length,q=0;q<R;q+=1){var E=Y[q],T=z[E],d=T&&T[0],u=T&&T[1];Y[q]=u?{regex:d,parser:u}:E.replace(/^\[|\]$/g,"")}return function(g){for(var v={},p=0,f=0;p<R;p+=1){var o=Y[p];if(typeof o=="string")f+=o.length;else{var l=o.regex,h=o.parser,m=g.slice(f),x=l.exec(m)[0];h.call(v,x),g=g.replace(x,"")}}return(function(r){var P=r.afternoon;if(P!==void 0){var e=r.hours;P?e<12&&(r.hours+=12):e===12&&(r.hours=0),delete r.afternoon}})(v),v}}return function(D,S,O){O.p.customParseFormat=!0,D&&D.parseTwoDigitYear&&(A=D.parseTwoDigitYear);var Y=S.prototype,R=Y.parse;Y.parse=function(q){var E=q.date,T=q.utc,d=q.args;this.$u=T;var u=d[1];if(typeof u=="string"){var g=d[2]===!0,v=d[3]===!0,p=g||v,f=d[2];v&&(f=d[2]),W=this.$locale(),!g&&f&&(W=O.Ls[f]),this.$d=(function(m,x,r,P){try{if(["x","X"].indexOf(x)>-1)return new Date((x==="X"?1e3:1)*m);var e=M(x)(m),w=e.year,F=e.month,$=e.day,I=e.hours,G=e.minutes,C=e.seconds,Q=e.milliseconds,rt=e.zone,ot=e.week,ft=new Date,ht=$||(w||F?1:ft.getDate()),ct=w||ft.getFullYear(),H=0;w&&!F||(H=F>0?F-1:ft.getMonth());var Z,X=I||0,it=G||0,K=C||0,st=Q||0;return rt?new Date(Date.UTC(ct,H,ht,X,it,K,st+60*rt.offset*1e3)):r?new Date(Date.UTC(ct,H,ht,X,it,K,st)):(Z=new Date(ct,H,ht,X,it,K,st),ot&&(Z=P(Z).week(ot).toDate()),Z)}catch{return new Date("")}})(E,u,T,O),this.init(),f&&f!==!0&&(this.$L=this.locale(f).$L),p&&E!=this.format(u)&&(this.$d=new Date("")),W={}}else if(u instanceof Array)for(var o=u.length,l=1;l<=o;l+=1){d[1]=u[l-1];var h=O.apply(this,d);if(h.isValid()){this.$d=h.$d,this.$L=h.$L,this.init();break}l===o&&(this.$d=new Date(""))}else R.call(this,q)}}}))})(Tt)),Tt.exports}var Be=He();const qe=Ct(Be);var xt={exports:{}},Ge=xt.exports,te;function je(){return te||(te=1,(function(t,a){(function(i,s){t.exports=s()})(Ge,(function(){return function(i,s){var n=s.prototype,k=n.format;n.format=function(y){var _=this,W=this.$locale();if(!this.isValid())return k.bind(this)(y);var A=this.$utils(),b=(y||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,(function(L){switch(L){case"Q":return Math.ceil((_.$M+1)/3);case"Do":return W.ordinal(_.$D);case"gggg":return _.weekYear();case"GGGG":return _.isoWeekYear();case"wo":return W.ordinal(_.week(),"W");case"w":case"ww":return A.s(_.week(),L==="w"?1:2,"0");case"W":case"WW":return A.s(_.isoWeek(),L==="W"?1:2,"0");case"k":case"kk":return A.s(String(_.$H===0?24:_.$H),L==="k"?1:2,"0");case"X":return Math.floor(_.$d.getTime()/1e3);case"x":return _.$d.getTime();case"z":return"["+_.offsetName()+"]";case"zzz":return"["+_.offsetName("long")+"]";default:return L}}));return k.bind(this)(b)}}}))})(xt)),xt.exports}var Xe=je();const Ue=Ct(Xe);var bt={exports:{}},Ze=bt.exports,ee;function Qe(){return ee||(ee=1,(function(t,a){(function(i,s){t.exports=s()})(Ze,(function(){var i,s,n=1e3,k=6e4,y=36e5,_=864e5,W=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,A=31536e6,b=2628e6,L=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,V={years:A,months:b,days:_,hours:y,minutes:k,seconds:n,milliseconds:1,weeks:6048e5},N=function(E){return E instanceof R},z=function(E,T,d){return new R(E,d,T.$l)},M=function(E){return s.p(E)+"s"},D=function(E){return E<0},S=function(E){return D(E)?Math.ceil(E):Math.floor(E)},O=function(E){return Math.abs(E)},Y=function(E,T){return E?D(E)?{negative:!0,format:""+O(E)+T}:{negative:!1,format:""+E+T}:{negative:!1,format:""}},R=(function(){function E(d,u,g){var v=this;if(this.$d={},this.$l=g,d===void 0&&(this.$ms=0,this.parseFromMilliseconds()),u)return z(d*V[M(u)],this);if(typeof d=="number")return this.$ms=d,this.parseFromMilliseconds(),this;if(typeof d=="object")return Object.keys(d).forEach((function(o){v.$d[M(o)]=d[o]})),this.calMilliseconds(),this;if(typeof d=="string"){var p=d.match(L);if(p){var f=p.slice(2).map((function(o){return o!=null?Number(o):0}));return this.$d.years=f[0],this.$d.months=f[1],this.$d.weeks=f[2],this.$d.days=f[3],this.$d.hours=f[4],this.$d.minutes=f[5],this.$d.seconds=f[6],this.calMilliseconds(),this}}return this}var T=E.prototype;return T.calMilliseconds=function(){var d=this;this.$ms=Object.keys(this.$d).reduce((function(u,g){return u+(d.$d[g]||0)*V[g]}),0)},T.parseFromMilliseconds=function(){var d=this.$ms;this.$d.years=S(d/A),d%=A,this.$d.months=S(d/b),d%=b,this.$d.days=S(d/_),d%=_,this.$d.hours=S(d/y),d%=y,this.$d.minutes=S(d/k),d%=k,this.$d.seconds=S(d/n),d%=n,this.$d.milliseconds=d},T.toISOString=function(){var d=Y(this.$d.years,"Y"),u=Y(this.$d.months,"M"),g=+this.$d.days||0;this.$d.weeks&&(g+=7*this.$d.weeks);var v=Y(g,"D"),p=Y(this.$d.hours,"H"),f=Y(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3,o=Math.round(1e3*o)/1e3);var l=Y(o,"S"),h=d.negative||u.negative||v.negative||p.negative||f.negative||l.negative,m=p.format||f.format||l.format?"T":"",x=(h?"-":"")+"P"+d.format+u.format+v.format+m+p.format+f.format+l.format;return x==="P"||x==="-P"?"P0D":x},T.toJSON=function(){return this.toISOString()},T.format=function(d){var u=d||"YYYY-MM-DDTHH:mm:ss",g={Y:this.$d.years,YY:s.s(this.$d.years,2,"0"),YYYY:s.s(this.$d.years,4,"0"),M:this.$d.months,MM:s.s(this.$d.months,2,"0"),D:this.$d.days,DD:s.s(this.$d.days,2,"0"),H:this.$d.hours,HH:s.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:s.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:s.s(this.$d.seconds,2,"0"),SSS:s.s(this.$d.milliseconds,3,"0")};return u.replace(W,(function(v,p){return p||String(g[v])}))},T.as=function(d){return this.$ms/V[M(d)]},T.get=function(d){var u=this.$ms,g=M(d);return g==="milliseconds"?u%=1e3:u=g==="weeks"?S(u/V[g]):this.$d[g],u||0},T.add=function(d,u,g){var v;return v=u?d*V[M(u)]:N(d)?d.$ms:z(d,this).$ms,z(this.$ms+v*(g?-1:1),this)},T.subtract=function(d,u){return this.add(d,u,!0)},T.locale=function(d){var u=this.clone();return u.$l=d,u},T.clone=function(){return z(this.$ms,this)},T.humanize=function(d){return i().add(this.$ms,"ms").locale(this.$l).fromNow(!d)},T.valueOf=function(){return this.asMilliseconds()},T.milliseconds=function(){return this.get("milliseconds")},T.asMilliseconds=function(){return this.as("milliseconds")},T.seconds=function(){return this.get("seconds")},T.asSeconds=function(){return this.as("seconds")},T.minutes=function(){return this.get("minutes")},T.asMinutes=function(){return this.as("minutes")},T.hours=function(){return this.get("hours")},T.asHours=function(){return this.as("hours")},T.days=function(){return this.get("days")},T.asDays=function(){return this.as("days")},T.weeks=function(){return this.get("weeks")},T.asWeeks=function(){return this.as("weeks")},T.months=function(){return this.get("months")},T.asMonths=function(){return this.as("months")},T.years=function(){return this.get("years")},T.asYears=function(){return this.as("years")},E})(),q=function(E,T,d){return E.add(T.years()*d,"y").add(T.months()*d,"M").add(T.days()*d,"d").add(T.hours()*d,"h").add(T.minutes()*d,"m").add(T.seconds()*d,"s").add(T.milliseconds()*d,"ms")};return function(E,T,d){i=d,s=d().$utils(),d.duration=function(v,p){var f=d.locale();return z(v,{$l:f},p)},d.isDuration=N;var u=T.prototype.add,g=T.prototype.subtract;T.prototype.add=function(v,p){return N(v)?q(this,v,1):u.bind(this)(v,p)},T.prototype.subtract=function(v,p){return N(v)?q(this,v,-1):g.bind(this)(v,p)}}}))})(bt)),bt.exports}var Ke=Qe();const Je=Ct(Ke);var It=(function(){var t=c(function(f,o,l,h){for(l=l||{},h=f.length;h--;l[f[h]]=o);return l},"o"),a=[6,8,10,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,33,35,36,38,40],i=[1,26],s=[1,27],n=[1,28],k=[1,29],y=[1,30],_=[1,31],W=[1,32],A=[1,33],b=[1,34],L=[1,9],V=[1,10],N=[1,11],z=[1,12],M=[1,13],D=[1,14],S=[1,15],O=[1,16],Y=[1,19],R=[1,20],q=[1,21],E=[1,22],T=[1,23],d=[1,25],u=[1,35],g={trace:c(function(){},"trace"),yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,weekend:19,weekend_friday:20,weekend_saturday:21,dateFormat:22,inclusiveEndDates:23,topAxis:24,axisFormat:25,tickInterval:26,excludes:27,includes:28,todayMarker:29,title:30,acc_title:31,acc_title_value:32,acc_descr:33,acc_descr_value:34,acc_descr_multiline_value:35,section:36,clickStatement:37,taskTxt:38,taskData:39,click:40,callbackname:41,callbackargs:42,href:43,clickStatementDebug:44,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",20:"weekend_friday",21:"weekend_saturday",22:"dateFormat",23:"inclusiveEndDates",24:"topAxis",25:"axisFormat",26:"tickInterval",27:"excludes",28:"includes",29:"todayMarker",30:"title",31:"acc_title",32:"acc_title_value",33:"acc_descr",34:"acc_descr_value",35:"acc_descr_multiline_value",36:"section",38:"taskTxt",39:"taskData",40:"click",41:"callbackname",42:"callbackargs",43:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[19,1],[19,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[37,2],[37,3],[37,3],[37,4],[37,3],[37,4],[37,2],[44,2],[44,3],[44,3],[44,4],[44,3],[44,4],[44,2]],performAction:c(function(o,l,h,m,x,r,P){var e=r.length-1;switch(x){case 1:return r[e-1];case 2:this.$=[];break;case 3:r[e-1].push(r[e]),this.$=r[e-1];break;case 4:case 5:this.$=r[e];break;case 6:case 7:this.$=[];break;case 8:m.setWeekday("monday");break;case 9:m.setWeekday("tuesday");break;case 10:m.setWeekday("wednesday");break;case 11:m.setWeekday("thursday");break;case 12:m.setWeekday("friday");break;case 13:m.setWeekday("saturday");break;case 14:m.setWeekday("sunday");break;case 15:m.setWeekend("friday");break;case 16:m.setWeekend("saturday");break;case 17:m.setDateFormat(r[e].substr(11)),this.$=r[e].substr(11);break;case 18:m.enableInclusiveEndDates(),this.$=r[e].substr(18);break;case 19:m.TopAxis(),this.$=r[e].substr(8);break;case 20:m.setAxisFormat(r[e].substr(11)),this.$=r[e].substr(11);break;case 21:m.setTickInterval(r[e].substr(13)),this.$=r[e].substr(13);break;case 22:m.setExcludes(r[e].substr(9)),this.$=r[e].substr(9);break;case 23:m.setIncludes(r[e].substr(9)),this.$=r[e].substr(9);break;case 24:m.setTodayMarker(r[e].substr(12)),this.$=r[e].substr(12);break;case 27:m.setDiagramTitle(r[e].substr(6)),this.$=r[e].substr(6);break;case 28:this.$=r[e].trim(),m.setAccTitle(this.$);break;case 29:case 30:this.$=r[e].trim(),m.setAccDescription(this.$);break;case 31:m.addSection(r[e].substr(8)),this.$=r[e].substr(8);break;case 33:m.addTask(r[e-1],r[e]),this.$="task";break;case 34:this.$=r[e-1],m.setClickEvent(r[e-1],r[e],null);break;case 35:this.$=r[e-2],m.setClickEvent(r[e-2],r[e-1],r[e]);break;case 36:this.$=r[e-2],m.setClickEvent(r[e-2],r[e-1],null),m.setLink(r[e-2],r[e]);break;case 37:this.$=r[e-3],m.setClickEvent(r[e-3],r[e-2],r[e-1]),m.setLink(r[e-3],r[e]);break;case 38:this.$=r[e-2],m.setClickEvent(r[e-2],r[e],null),m.setLink(r[e-2],r[e-1]);break;case 39:this.$=r[e-3],m.setClickEvent(r[e-3],r[e-1],r[e]),m.setLink(r[e-3],r[e-2]);break;case 40:this.$=r[e-1],m.setLink(r[e-1],r[e]);break;case 41:case 47:this.$=r[e-1]+" "+r[e];break;case 42:case 43:case 45:this.$=r[e-2]+" "+r[e-1]+" "+r[e];break;case 44:case 46:this.$=r[e-3]+" "+r[e-2]+" "+r[e-1]+" "+r[e];break}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(a,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:i,13:s,14:n,15:k,16:y,17:_,18:W,19:18,20:A,21:b,22:L,23:V,24:N,25:z,26:M,27:D,28:S,29:O,30:Y,31:R,33:q,35:E,36:T,37:24,38:d,40:u},t(a,[2,7],{1:[2,1]}),t(a,[2,3]),{9:36,11:17,12:i,13:s,14:n,15:k,16:y,17:_,18:W,19:18,20:A,21:b,22:L,23:V,24:N,25:z,26:M,27:D,28:S,29:O,30:Y,31:R,33:q,35:E,36:T,37:24,38:d,40:u},t(a,[2,5]),t(a,[2,6]),t(a,[2,17]),t(a,[2,18]),t(a,[2,19]),t(a,[2,20]),t(a,[2,21]),t(a,[2,22]),t(a,[2,23]),t(a,[2,24]),t(a,[2,25]),t(a,[2,26]),t(a,[2,27]),{32:[1,37]},{34:[1,38]},t(a,[2,30]),t(a,[2,31]),t(a,[2,32]),{39:[1,39]},t(a,[2,8]),t(a,[2,9]),t(a,[2,10]),t(a,[2,11]),t(a,[2,12]),t(a,[2,13]),t(a,[2,14]),t(a,[2,15]),t(a,[2,16]),{41:[1,40],43:[1,41]},t(a,[2,4]),t(a,[2,28]),t(a,[2,29]),t(a,[2,33]),t(a,[2,34],{42:[1,42],43:[1,43]}),t(a,[2,40],{41:[1,44]}),t(a,[2,35],{43:[1,45]}),t(a,[2,36]),t(a,[2,38],{42:[1,46]}),t(a,[2,37]),t(a,[2,39])],defaultActions:{},parseError:c(function(o,l){if(l.recoverable)this.trace(o);else{var h=new Error(o);throw h.hash=l,h}},"parseError"),parse:c(function(o){var l=this,h=[0],m=[],x=[null],r=[],P=this.table,e="",w=0,F=0,$=2,I=1,G=r.slice.call(arguments,1),C=Object.create(this.lexer),Q={yy:{}};for(var rt in this.yy)Object.prototype.hasOwnProperty.call(this.yy,rt)&&(Q.yy[rt]=this.yy[rt]);C.setInput(o,Q.yy),Q.yy.lexer=C,Q.yy.parser=this,typeof C.yylloc>"u"&&(C.yylloc={});var ot=C.yylloc;r.push(ot);var ft=C.options&&C.options.ranges;typeof Q.yy.parseError=="function"?this.parseError=Q.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function ht(U){h.length=h.length-2*U,x.length=x.length-U,r.length=r.length-U}c(ht,"popStack");function ct(){var U;return U=m.pop()||C.lex()||I,typeof U!="number"&&(U instanceof Array&&(m=U,U=m.pop()),U=l.symbols_[U]||U),U}c(ct,"lex");for(var H,Z,X,it,K={},st,J,Bt,pt;;){if(Z=h[h.length-1],this.defaultActions[Z]?X=this.defaultActions[Z]:((H===null||typeof H>"u")&&(H=ct()),X=P[Z]&&P[Z][H]),typeof X>"u"||!X.length||!X[0]){var Mt="";pt=[];for(st in P[Z])this.terminals_[st]&&st>$&&pt.push("'"+this.terminals_[st]+"'");C.showPosition?Mt="Parse error on line "+(w+1)+`:
`+C.showPosition()+`
Expecting `+pt.join(", ")+", got '"+(this.terminals_[H]||H)+"'":Mt="Parse error on line "+(w+1)+": Unexpected "+(H==I?"end of input":"'"+(this.terminals_[H]||H)+"'"),this.parseError(Mt,{text:C.match,token:this.terminals_[H]||H,line:C.yylineno,loc:ot,expected:pt})}if(X[0]instanceof Array&&X.length>1)throw new Error("Parse Error: multiple actions possible at state: "+Z+", token: "+H);switch(X[0]){case 1:h.push(H),x.push(C.yytext),r.push(C.yylloc),h.push(X[1]),H=null,F=C.yyleng,e=C.yytext,w=C.yylineno,ot=C.yylloc;break;case 2:if(J=this.productions_[X[1]][1],K.$=x[x.length-J],K._$={first_line:r[r.length-(J||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(J||1)].first_column,last_column:r[r.length-1].last_column},ft&&(K._$.range=[r[r.length-(J||1)].range[0],r[r.length-1].range[1]]),it=this.performAction.apply(K,[e,F,w,Q.yy,X[1],x,r].concat(G)),typeof it<"u")return it;J&&(h=h.slice(0,-1*J*2),x=x.slice(0,-1*J),r=r.slice(0,-1*J)),h.push(this.productions_[X[1]][0]),x.push(K.$),r.push(K._$),Bt=P[h[h.length-2]][h[h.length-1]],h.push(Bt);break;case 3:return!0}}return!0},"parse")},v=(function(){var f={EOF:1,parseError:c(function(l,h){if(this.yy.parser)this.yy.parser.parseError(l,h);else throw new Error(l)},"parseError"),setInput:c(function(o,l){return this.yy=l||this.yy||{},this._input=o,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:c(function(){var o=this._input[0];this.yytext+=o,this.yyleng++,this.offset++,this.match+=o,this.matched+=o;var l=o.match(/(?:\r\n?|\n).*/g);return l?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),o},"input"),unput:c(function(o){var l=o.length,h=o.split(/(?:\r\n?|\n)/g);this._input=o+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-l),this.offset-=l;var m=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),h.length-1&&(this.yylineno-=h.length-1);var x=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:h?(h.length===m.length?this.yylloc.first_column:0)+m[m.length-h.length].length-h[0].length:this.yylloc.first_column-l},this.options.ranges&&(this.yylloc.range=[x[0],x[0]+this.yyleng-l]),this.yyleng=this.yytext.length,this},"unput"),more:c(function(){return this._more=!0,this},"more"),reject:c(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:c(function(o){this.unput(this.match.slice(o))},"less"),pastInput:c(function(){var o=this.matched.substr(0,this.matched.length-this.match.length);return(o.length>20?"...":"")+o.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:c(function(){var o=this.match;return o.length<20&&(o+=this._input.substr(0,20-o.length)),(o.substr(0,20)+(o.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:c(function(){var o=this.pastInput(),l=new Array(o.length+1).join("-");return o+this.upcomingInput()+`
`+l+"^"},"showPosition"),test_match:c(function(o,l){var h,m,x;if(this.options.backtrack_lexer&&(x={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(x.yylloc.range=this.yylloc.range.slice(0))),m=o[0].match(/(?:\r\n?|\n).*/g),m&&(this.yylineno+=m.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:m?m[m.length-1].length-m[m.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+o[0].length},this.yytext+=o[0],this.match+=o[0],this.matches=o,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(o[0].length),this.matched+=o[0],h=this.performAction.call(this,this.yy,this,l,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),h)return h;if(this._backtrack){for(var r in x)this[r]=x[r];return!1}return!1},"test_match"),next:c(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var o,l,h,m;this._more||(this.yytext="",this.match="");for(var x=this._currentRules(),r=0;r<x.length;r++)if(h=this._input.match(this.rules[x[r]]),h&&(!l||h[0].length>l[0].length)){if(l=h,m=r,this.options.backtrack_lexer){if(o=this.test_match(h,x[r]),o!==!1)return o;if(this._backtrack){l=!1;continue}else return!1}else if(!this.options.flex)break}return l?(o=this.test_match(l,x[m]),o!==!1?o:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:c(function(){var l=this.next();return l||this.lex()},"lex"),begin:c(function(l){this.conditionStack.push(l)},"begin"),popState:c(function(){var l=this.conditionStack.length-1;return l>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:c(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:c(function(l){return l=this.conditionStack.length-1-Math.abs(l||0),l>=0?this.conditionStack[l]:"INITIAL"},"topState"),pushState:c(function(l){this.begin(l)},"pushState"),stateStackSize:c(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:c(function(l,h,m,x){switch(m){case 0:return this.begin("open_directive"),"open_directive";case 1:return this.begin("acc_title"),31;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),33;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:break;case 9:break;case 10:break;case 11:return 10;case 12:break;case 13:break;case 14:this.begin("href");break;case 15:this.popState();break;case 16:return 43;case 17:this.begin("callbackname");break;case 18:this.popState();break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 41;case 21:this.popState();break;case 22:return 42;case 23:this.begin("click");break;case 24:this.popState();break;case 25:return 40;case 26:return 4;case 27:return 22;case 28:return 23;case 29:return 24;case 30:return 25;case 31:return 26;case 32:return 28;case 33:return 27;case 34:return 29;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return 20;case 43:return 21;case 44:return"date";case 45:return 30;case 46:return"accDescription";case 47:return 36;case 48:return 38;case 49:return 39;case 50:return":";case 51:return 6;case 52:return"INVALID"}},"anonymous"),rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:weekend\s+friday\b)/i,/^(?:weekend\s+saturday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],inclusive:!0}}};return f})();g.lexer=v;function p(){this.yy={}}return c(p,"Parser"),p.prototype=g,g.Parser=p,new p})();It.parser=It;var tr=It;j.extend(ze);j.extend(qe);j.extend(Ue);var re={friday:5,saturday:6},tt="",At="",Lt=void 0,Wt="",mt=[],kt=[],Ot=new Map,Pt=[],Dt=[],dt="",Vt="",ne=["active","done","crit","milestone","vert"],Nt=[],yt=!1,zt=!1,Rt="sunday",St="saturday",$t=0,er=c(function(){Pt=[],Dt=[],dt="",Nt=[],wt=0,Ft=void 0,_t=void 0,B=[],tt="",At="",Vt="",Lt=void 0,Wt="",mt=[],kt=[],yt=!1,zt=!1,$t=0,Ot=new Map,be(),Rt="sunday",St="saturday"},"clear"),rr=c(function(t){At=t},"setAxisFormat"),sr=c(function(){return At},"getAxisFormat"),ir=c(function(t){Lt=t},"setTickInterval"),nr=c(function(){return Lt},"getTickInterval"),ar=c(function(t){Wt=t},"setTodayMarker"),or=c(function(){return Wt},"getTodayMarker"),cr=c(function(t){tt=t},"setDateFormat"),lr=c(function(){yt=!0},"enableInclusiveEndDates"),ur=c(function(){return yt},"endDatesAreInclusive"),dr=c(function(){zt=!0},"enableTopAxis"),fr=c(function(){return zt},"topAxisEnabled"),hr=c(function(t){Vt=t},"setDisplayMode"),mr=c(function(){return Vt},"getDisplayMode"),kr=c(function(){return tt},"getDateFormat"),yr=c(function(t){mt=t.toLowerCase().split(/[\s,]+/)},"setIncludes"),pr=c(function(){return mt},"getIncludes"),vr=c(function(t){kt=t.toLowerCase().split(/[\s,]+/)},"setExcludes"),gr=c(function(){return kt},"getExcludes"),Tr=c(function(){return Ot},"getLinks"),xr=c(function(t){dt=t,Pt.push(t)},"addSection"),br=c(function(){return Pt},"getSections"),wr=c(function(){let t=se();const a=10;let i=0;for(;!t&&i<a;)t=se(),i++;return Dt=B,Dt},"getTasks"),ae=c(function(t,a,i,s){const n=t.format(a.trim()),k=t.format("YYYY-MM-DD");return s.includes(n)||s.includes(k)?!1:i.includes("weekends")&&(t.isoWeekday()===re[St]||t.isoWeekday()===re[St]+1)||i.includes(t.format("dddd").toLowerCase())?!0:i.includes(n)||i.includes(k)},"isInvalidDate"),_r=c(function(t){Rt=t},"setWeekday"),Dr=c(function(){return Rt},"getWeekday"),Sr=c(function(t){St=t},"setWeekend"),oe=c(function(t,a,i,s){if(!i.length||t.manualEndTime)return;let n;t.startTime instanceof Date?n=j(t.startTime):n=j(t.startTime,a,!0),n=n.add(1,"d");let k;t.endTime instanceof Date?k=j(t.endTime):k=j(t.endTime,a,!0);const[y,_]=Cr(n,k,a,i,s);t.endTime=y.toDate(),t.renderEndTime=_},"checkTaskDates"),Cr=c(function(t,a,i,s,n){let k=!1,y=null;for(;t<=a;)k||(y=a.toDate()),k=ae(t,i,s,n),k&&(a=a.add(1,"d")),t=t.add(1,"d");return[a,y]},"fixTaskDates"),Yt=c(function(t,a,i){if(i=i.trim(),c(_=>{const W=_.trim();return W==="x"||W==="X"},"isTimestampFormat")(a)&&/^\d+$/.test(i))return new Date(Number(i));const k=/^after\s+(?<ids>[\d\w- ]+)/.exec(i);if(k!==null){let _=null;for(const A of k.groups.ids.split(" ")){let b=at(A);b!==void 0&&(!_||b.endTime>_.endTime)&&(_=b)}if(_)return _.endTime;const W=new Date;return W.setHours(0,0,0,0),W}let y=j(i,a.trim(),!0);if(y.isValid())return y.toDate();{nt.debug("Invalid date:"+i),nt.debug("With date format:"+a.trim());const _=new Date(i);if(_===void 0||isNaN(_.getTime())||_.getFullYear()<-1e4||_.getFullYear()>1e4)throw new Error("Invalid date:"+i);return _}},"getStartDate"),ce=c(function(t){const a=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return a!==null?[Number.parseFloat(a[1]),a[2]]:[NaN,"ms"]},"parseDuration"),le=c(function(t,a,i,s=!1){i=i.trim();const k=/^until\s+(?<ids>[\d\w- ]+)/.exec(i);if(k!==null){let b=null;for(const V of k.groups.ids.split(" ")){let N=at(V);N!==void 0&&(!b||N.startTime<b.startTime)&&(b=N)}if(b)return b.startTime;const L=new Date;return L.setHours(0,0,0,0),L}let y=j(i,a.trim(),!0);if(y.isValid())return s&&(y=y.add(1,"d")),y.toDate();let _=j(t);const[W,A]=ce(i);if(!Number.isNaN(W)){const b=_.add(W,A);b.isValid()&&(_=b)}return _.toDate()},"getEndDate"),wt=0,ut=c(function(t){return t===void 0?(wt=wt+1,"task"+wt):t},"parseId"),Mr=c(function(t,a){let i;a.substr(0,1)===":"?i=a.substr(1,a.length):i=a;const s=i.split(","),n={};Ht(s,n,ne);for(let y=0;y<s.length;y++)s[y]=s[y].trim();let k="";switch(s.length){case 1:n.id=ut(),n.startTime=t.endTime,k=s[0];break;case 2:n.id=ut(),n.startTime=Yt(void 0,tt,s[0]),k=s[1];break;case 3:n.id=ut(s[0]),n.startTime=Yt(void 0,tt,s[1]),k=s[2];break}return k&&(n.endTime=le(n.startTime,tt,k,yt),n.manualEndTime=j(k,"YYYY-MM-DD",!0).isValid(),oe(n,tt,kt,mt)),n},"compileData"),Er=c(function(t,a){let i;a.substr(0,1)===":"?i=a.substr(1,a.length):i=a;const s=i.split(","),n={};Ht(s,n,ne);for(let k=0;k<s.length;k++)s[k]=s[k].trim();switch(s.length){case 1:n.id=ut(),n.startTime={type:"prevTaskEnd",id:t},n.endTime={data:s[0]};break;case 2:n.id=ut(),n.startTime={type:"getStartDate",startData:s[0]},n.endTime={data:s[1]};break;case 3:n.id=ut(s[0]),n.startTime={type:"getStartDate",startData:s[1]},n.endTime={data:s[2]};break}return n},"parseData"),Ft,_t,B=[],ue={},Ir=c(function(t,a){const i={section:dt,type:dt,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:a},task:t,classes:[]},s=Er(_t,a);i.raw.startTime=s.startTime,i.raw.endTime=s.endTime,i.id=s.id,i.prevTaskId=_t,i.active=s.active,i.done=s.done,i.crit=s.crit,i.milestone=s.milestone,i.vert=s.vert,i.order=$t,$t++;const n=B.push(i);_t=i.id,ue[i.id]=n-1},"addTask"),at=c(function(t){const a=ue[t];return B[a]},"findTaskById"),$r=c(function(t,a){const i={section:dt,type:dt,description:t,task:t,classes:[]},s=Mr(Ft,a);i.startTime=s.startTime,i.endTime=s.endTime,i.id=s.id,i.active=s.active,i.done=s.done,i.crit=s.crit,i.milestone=s.milestone,i.vert=s.vert,Ft=i,Dt.push(i)},"addTaskOrg"),se=c(function(){const t=c(function(i){const s=B[i];let n="";switch(B[i].raw.startTime.type){case"prevTaskEnd":{const k=at(s.prevTaskId);s.startTime=k.endTime;break}case"getStartDate":n=Yt(void 0,tt,B[i].raw.startTime.startData),n&&(B[i].startTime=n);break}return B[i].startTime&&(B[i].endTime=le(B[i].startTime,tt,B[i].raw.endTime.data,yt),B[i].endTime&&(B[i].processed=!0,B[i].manualEndTime=j(B[i].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),oe(B[i],tt,kt,mt))),B[i].processed},"compileTask");let a=!0;for(const[i,s]of B.entries())t(i),a=a&&s.processed;return a},"compileTasks"),Yr=c(function(t,a){let i=a;lt().securityLevel!=="loose"&&(i=xe.sanitizeUrl(a)),t.split(",").forEach(function(s){at(s)!==void 0&&(fe(s,()=>{window.open(i,"_self")}),Ot.set(s,i))}),de(t,"clickable")},"setLink"),de=c(function(t,a){t.split(",").forEach(function(i){let s=at(i);s!==void 0&&s.classes.push(a)})},"setClass"),Fr=c(function(t,a,i){if(lt().securityLevel!=="loose"||a===void 0)return;let s=[];if(typeof i=="string"){s=i.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let k=0;k<s.length;k++){let y=s[k].trim();y.startsWith('"')&&y.endsWith('"')&&(y=y.substr(1,y.length-2)),s[k]=y}}s.length===0&&s.push(t),at(t)!==void 0&&fe(t,()=>{we.runFunc(a,...s)})},"setClickFun"),fe=c(function(t,a){Nt.push(function(){const i=document.querySelector(`[id="${t}"]`);i!==null&&i.addEventListener("click",function(){a()})},function(){const i=document.querySelector(`[id="${t}-text"]`);i!==null&&i.addEventListener("click",function(){a()})})},"pushFun"),Ar=c(function(t,a,i){t.split(",").forEach(function(s){Fr(s,a,i)}),de(t,"clickable")},"setClickEvent"),Lr=c(function(t){Nt.forEach(function(a){a(t)})},"bindFunctions"),Wr={getConfig:c(()=>lt().gantt,"getConfig"),clear:er,setDateFormat:cr,getDateFormat:kr,enableInclusiveEndDates:lr,endDatesAreInclusive:ur,enableTopAxis:dr,topAxisEnabled:fr,setAxisFormat:rr,getAxisFormat:sr,setTickInterval:ir,getTickInterval:nr,setTodayMarker:ar,getTodayMarker:or,setAccTitle:ve,getAccTitle:pe,setDiagramTitle:ye,getDiagramTitle:ke,setDisplayMode:hr,getDisplayMode:mr,setAccDescription:me,getAccDescription:he,addSection:xr,getSections:br,getTasks:wr,addTask:Ir,findTaskById:at,addTaskOrg:$r,setIncludes:yr,getIncludes:pr,setExcludes:vr,getExcludes:gr,setClickEvent:Ar,setLink:Yr,getLinks:Tr,bindFunctions:Lr,parseDuration:ce,isInvalidDate:ae,setWeekday:_r,getWeekday:Dr,setWeekend:Sr};function Ht(t,a,i){let s=!0;for(;s;)s=!1,i.forEach(function(n){const k="^\\s*"+n+"\\s*$",y=new RegExp(k);t[0].match(y)&&(a[n]=!0,t.shift(1),s=!0)})}c(Ht,"getTaskTags");j.extend(Je);var Or=c(function(){nt.debug("Something is calling, setConf, remove the call")},"setConf"),ie={monday:We,tuesday:Le,wednesday:Ae,thursday:Fe,friday:Ye,saturday:$e,sunday:Ie},Pr=c((t,a)=>{let i=[...t].map(()=>-1/0),s=[...t].sort((k,y)=>k.startTime-y.startTime||k.order-y.order),n=0;for(const k of s)for(let y=0;y<i.length;y++)if(k.startTime>=i[y]){i[y]=k.endTime,k.order=y+a,y>n&&(n=y);break}return n},"getMaxIntersections"),et,Et=1e4,Vr=c(function(t,a,i,s){const n=lt().gantt,k=lt().securityLevel;let y;k==="sandbox"&&(y=vt("#i"+a));const _=k==="sandbox"?vt(y.nodes()[0].contentDocument.body):vt("body"),W=k==="sandbox"?y.nodes()[0].contentDocument:document,A=W.getElementById(a);et=A.parentElement.offsetWidth,et===void 0&&(et=1200),n.useWidth!==void 0&&(et=n.useWidth);const b=s.db.getTasks();let L=[];for(const u of b)L.push(u.type);L=d(L);const V={};let N=2*n.topPadding;if(s.db.getDisplayMode()==="compact"||n.displayMode==="compact"){const u={};for(const v of b)u[v.section]===void 0?u[v.section]=[v]:u[v.section].push(v);let g=0;for(const v of Object.keys(u)){const p=Pr(u[v],g)+1;g+=p,N+=p*(n.barHeight+n.barGap),V[v]=p}}else{N+=b.length*(n.barHeight+n.barGap);for(const u of L)V[u]=b.filter(g=>g.type===u).length}A.setAttribute("viewBox","0 0 "+et+" "+N);const z=_.select(`[id="${a}"]`),M=_e().domain([De(b,function(u){return u.startTime}),Se(b,function(u){return u.endTime})]).rangeRound([0,et-n.leftPadding-n.rightPadding]);function D(u,g){const v=u.startTime,p=g.startTime;let f=0;return v>p?f=1:v<p&&(f=-1),f}c(D,"taskCompare"),b.sort(D),S(b,et,N),ge(z,N,et,n.useMaxWidth),z.append("text").text(s.db.getDiagramTitle()).attr("x",et/2).attr("y",n.titleTopMargin).attr("class","titleText");function S(u,g,v){const p=n.barHeight,f=p+n.barGap,o=n.topPadding,l=n.leftPadding,h=Ce().domain([0,L.length]).range(["#00B9FA","#F95002"]).interpolate(Me);Y(f,o,l,g,v,u,s.db.getExcludes(),s.db.getIncludes()),q(l,o,g,v),O(u,f,o,l,p,h,g),E(f,o),T(l,o,g,v)}c(S,"makeGantt");function O(u,g,v,p,f,o,l){u.sort((e,w)=>e.vert===w.vert?0:e.vert?1:-1);const m=[...new Set(u.map(e=>e.order))].map(e=>u.find(w=>w.order===e));z.append("g").selectAll("rect").data(m).enter().append("rect").attr("x",0).attr("y",function(e,w){return w=e.order,w*g+v-2}).attr("width",function(){return l-n.rightPadding/2}).attr("height",g).attr("class",function(e){for(const[w,F]of L.entries())if(e.type===F)return"section section"+w%n.numberSectionStyles;return"section section0"}).enter();const x=z.append("g").selectAll("rect").data(u).enter(),r=s.db.getLinks();if(x.append("rect").attr("id",function(e){return e.id}).attr("rx",3).attr("ry",3).attr("x",function(e){return e.milestone?M(e.startTime)+p+.5*(M(e.endTime)-M(e.startTime))-.5*f:M(e.startTime)+p}).attr("y",function(e,w){return w=e.order,e.vert?n.gridLineStartPadding:w*g+v}).attr("width",function(e){return e.milestone?f:e.vert?.08*f:M(e.renderEndTime||e.endTime)-M(e.startTime)}).attr("height",function(e){return e.vert?b.length*(n.barHeight+n.barGap)+n.barHeight*2:f}).attr("transform-origin",function(e,w){return w=e.order,(M(e.startTime)+p+.5*(M(e.endTime)-M(e.startTime))).toString()+"px "+(w*g+v+.5*f).toString()+"px"}).attr("class",function(e){const w="task";let F="";e.classes.length>0&&(F=e.classes.join(" "));let $=0;for(const[G,C]of L.entries())e.type===C&&($=G%n.numberSectionStyles);let I="";return e.active?e.crit?I+=" activeCrit":I=" active":e.done?e.crit?I=" doneCrit":I=" done":e.crit&&(I+=" crit"),I.length===0&&(I=" task"),e.milestone&&(I=" milestone "+I),e.vert&&(I=" vert "+I),I+=$,I+=" "+F,w+I}),x.append("text").attr("id",function(e){return e.id+"-text"}).text(function(e){return e.task}).attr("font-size",n.fontSize).attr("x",function(e){let w=M(e.startTime),F=M(e.renderEndTime||e.endTime);if(e.milestone&&(w+=.5*(M(e.endTime)-M(e.startTime))-.5*f,F=w+f),e.vert)return M(e.startTime)+p;const $=this.getBBox().width;return $>F-w?F+$+1.5*n.leftPadding>l?w+p-5:F+p+5:(F-w)/2+w+p}).attr("y",function(e,w){return e.vert?n.gridLineStartPadding+b.length*(n.barHeight+n.barGap)+60:(w=e.order,w*g+n.barHeight/2+(n.fontSize/2-2)+v)}).attr("text-height",f).attr("class",function(e){const w=M(e.startTime);let F=M(e.endTime);e.milestone&&(F=w+f);const $=this.getBBox().width;let I="";e.classes.length>0&&(I=e.classes.join(" "));let G=0;for(const[Q,rt]of L.entries())e.type===rt&&(G=Q%n.numberSectionStyles);let C="";return e.active&&(e.crit?C="activeCritText"+G:C="activeText"+G),e.done?e.crit?C=C+" doneCritText"+G:C=C+" doneText"+G:e.crit&&(C=C+" critText"+G),e.milestone&&(C+=" milestoneText"),e.vert&&(C+=" vertText"),$>F-w?F+$+1.5*n.leftPadding>l?I+" taskTextOutsideLeft taskTextOutside"+G+" "+C:I+" taskTextOutsideRight taskTextOutside"+G+" "+C+" width-"+$:I+" taskText taskText"+G+" "+C+" width-"+$}),lt().securityLevel==="sandbox"){let e;e=vt("#i"+a);const w=e.nodes()[0].contentDocument;x.filter(function(F){return r.has(F.id)}).each(function(F){var $=w.querySelector("#"+F.id),I=w.querySelector("#"+F.id+"-text");const G=$.parentNode;var C=w.createElement("a");C.setAttribute("xlink:href",r.get(F.id)),C.setAttribute("target","_top"),G.appendChild(C),C.appendChild($),C.appendChild(I)})}}c(O,"drawRects");function Y(u,g,v,p,f,o,l,h){if(l.length===0&&h.length===0)return;let m,x;for(const{startTime:$,endTime:I}of o)(m===void 0||$<m)&&(m=$),(x===void 0||I>x)&&(x=I);if(!m||!x)return;if(j(x).diff(j(m),"year")>5){nt.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");return}const r=s.db.getDateFormat(),P=[];let e=null,w=j(m);for(;w.valueOf()<=x;)s.db.isInvalidDate(w,r,l,h)?e?e.end=w:e={start:w,end:w}:e&&(P.push(e),e=null),w=w.add(1,"d");z.append("g").selectAll("rect").data(P).enter().append("rect").attr("id",$=>"exclude-"+$.start.format("YYYY-MM-DD")).attr("x",$=>M($.start.startOf("day"))+v).attr("y",n.gridLineStartPadding).attr("width",$=>M($.end.endOf("day"))-M($.start.startOf("day"))).attr("height",f-g-n.gridLineStartPadding).attr("transform-origin",function($,I){return(M($.start)+v+.5*(M($.end)-M($.start))).toString()+"px "+(I*u+.5*f).toString()+"px"}).attr("class","exclude-range")}c(Y,"drawExcludeDays");function R(u,g,v,p){if(v<=0||u>g)return 1/0;const f=g-u,o=j.duration({[p??"day"]:v}).asMilliseconds();return o<=0?1/0:Math.ceil(f/o)}c(R,"getEstimatedTickCount");function q(u,g,v,p){const f=s.db.getDateFormat(),o=s.db.getAxisFormat();let l;o?l=o:f==="D"?l="%d":l=n.axisFormat??"%Y-%m-%d";let h=Ee(M).tickSize(-p+g+n.gridLineStartPadding).tickFormat(qt(l));const x=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(s.db.getTickInterval()||n.tickInterval);if(x!==null){const r=parseInt(x[1],10);if(isNaN(r)||r<=0)nt.warn(`Invalid tick interval value: "${x[1]}". Skipping custom tick interval.`);else{const P=x[2],e=s.db.getWeekday()||n.weekday,w=M.domain(),F=w[0],$=w[1],I=R(F,$,r,P);if(I>Et)nt.warn(`The tick interval "${r}${P}" would generate ${I} ticks, which exceeds the maximum allowed (${Et}). This may indicate an invalid date or time range. Skipping custom tick interval.`);else switch(P){case"millisecond":h.ticks(Qt.every(r));break;case"second":h.ticks(Zt.every(r));break;case"minute":h.ticks(Ut.every(r));break;case"hour":h.ticks(Xt.every(r));break;case"day":h.ticks(jt.every(r));break;case"week":h.ticks(ie[e].every(r));break;case"month":h.ticks(Gt.every(r));break}}}if(z.append("g").attr("class","grid").attr("transform","translate("+u+", "+(p-50)+")").call(h).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),s.db.topAxisEnabled()||n.topAxis){let r=Oe(M).tickSize(-p+g+n.gridLineStartPadding).tickFormat(qt(l));if(x!==null){const P=parseInt(x[1],10);if(isNaN(P)||P<=0)nt.warn(`Invalid tick interval value: "${x[1]}". Skipping custom tick interval.`);else{const e=x[2],w=s.db.getWeekday()||n.weekday,F=M.domain(),$=F[0],I=F[1];if(R($,I,P,e)<=Et)switch(e){case"millisecond":r.ticks(Qt.every(P));break;case"second":r.ticks(Zt.every(P));break;case"minute":r.ticks(Ut.every(P));break;case"hour":r.ticks(Xt.every(P));break;case"day":r.ticks(jt.every(P));break;case"week":r.ticks(ie[w].every(P));break;case"month":r.ticks(Gt.every(P));break}}}z.append("g").attr("class","grid").attr("transform","translate("+u+", "+g+")").call(r).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}c(q,"makeGrid");function E(u,g){let v=0;const p=Object.keys(V).map(f=>[f,V[f]]);z.append("g").selectAll("text").data(p).enter().append(function(f){const o=f[0].split(Te.lineBreakRegex),l=-(o.length-1)/2,h=W.createElementNS("http://www.w3.org/2000/svg","text");h.setAttribute("dy",l+"em");for(const[m,x]of o.entries()){const r=W.createElementNS("http://www.w3.org/2000/svg","tspan");r.setAttribute("alignment-baseline","central"),r.setAttribute("x","10"),m>0&&r.setAttribute("dy","1em"),r.textContent=x,h.appendChild(r)}return h}).attr("x",10).attr("y",function(f,o){if(o>0)for(let l=0;l<o;l++)return v+=p[o-1][1],f[1]*u/2+v*u+g;else return f[1]*u/2+g}).attr("font-size",n.sectionFontSize).attr("class",function(f){for(const[o,l]of L.entries())if(f[0]===l)return"sectionTitle sectionTitle"+o%n.numberSectionStyles;return"sectionTitle"})}c(E,"vertLabels");function T(u,g,v,p){const f=s.db.getTodayMarker();if(f==="off")return;const o=z.append("g").attr("class","today"),l=new Date,h=o.append("line");h.attr("x1",M(l)+u).attr("x2",M(l)+u).attr("y1",n.titleTopMargin).attr("y2",p-n.titleTopMargin).attr("class","today"),f!==""&&h.attr("style",f.replace(/,/g,";"))}c(T,"drawToday");function d(u){const g={},v=[];for(let p=0,f=u.length;p<f;++p)Object.prototype.hasOwnProperty.call(g,u[p])||(g[u[p]]=!0,v.push(u[p]));return v}c(d,"checkUnique")},"draw"),Nr={setConf:Or,draw:Vr},zr=c(t=>`
  .mermaid-main-font {
        font-family: ${t.fontFamily};
  }

  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${t.fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${t.fontFamily};
    fill: ${t.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .vert {
    stroke: ${t.vertLineColor};
  }

  .vertText {
    font-size: 15px;
    text-anchor: middle;
    fill: ${t.vertLineColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.titleColor||t.textColor};
    font-family: ${t.fontFamily};
  }
`,"getStyles"),Rr=zr,Qs={parser:tr,db:Wr,renderer:Nr,styles:Rr};export{Qs as diagram};
