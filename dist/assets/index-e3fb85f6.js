var ze=Object.defineProperty;var we=(t,e,l)=>e in t?ze(t,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[e]=l;var Gt=(t,e,l)=>(we(t,typeof e!="symbol"?e+"":e,l),l);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const u of s)if(u.type==="childList")for(const a of u.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function l(s){const u={};return s.integrity&&(u.integrity=s.integrity),s.referrerPolicy&&(u.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?u.credentials="include":s.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(s){if(s.ep)return;s.ep=!0;const u=l(s);fetch(s.href,u)}})();function S(){}function _e(t){return t()}function ue(){return Object.create(null)}function ft(t){t.forEach(_e)}function he(t){return typeof t=="function"}function be(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Ee(t){return Object.keys(t).length===0}function n(t,e){t.appendChild(e)}function Rt(t,e,l){t.insertBefore(e,l||null)}function gt(t){t.parentNode&&t.parentNode.removeChild(t)}function ke(t,e){for(let l=0;l<t.length;l+=1)t[l]&&t[l].d(e)}function r(t){return document.createElement(t)}function ge(t){return document.createTextNode(t)}function d(){return ge(" ")}function f(t,e,l,o){return t.addEventListener(e,l,o),()=>t.removeEventListener(e,l,o)}function i(t,e,l){l==null?t.removeAttribute(e):t.getAttribute(e)!==l&&t.setAttribute(e,l)}function Le(t){return Array.from(t.childNodes)}function Be(t,e){e=""+e,t.data!==e&&(t.data=e)}function Tt(t,e,l,o){l==null?t.style.removeProperty(e):t.style.setProperty(e,l,o?"important":"")}let qt;function at(t){qt=t}const Y=[],de=[];let D=[];const ae=[],Oe=Promise.resolve();let It=!1;function Ne(){It||(It=!0,Oe.then(me))}function Ht(t){D.push(t)}const Mt=new Set;let F=0;function me(){if(F!==0)return;const t=qt;do{try{for(;F<Y.length;){const e=Y[F];F++,at(e),Se(e.$$)}}catch(e){throw Y.length=0,F=0,e}for(at(null),Y.length=0,F=0;de.length;)de.pop()();for(let e=0;e<D.length;e+=1){const l=D[e];Mt.has(l)||(Mt.add(l),l())}D.length=0}while(Y.length);for(;ae.length;)ae.pop()();It=!1,Mt.clear(),at(t)}function Se(t){if(t.fragment!==null){t.update(),ft(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Ht)}}function Ae(t){const e=[],l=[];D.forEach(o=>t.indexOf(o)===-1?e.push(o):l.push(o)),l.forEach(o=>o()),D=e}const kt=new Set;let Pe;function mt(t,e){t&&t.i&&(kt.delete(t),t.i(e))}function Ft(t,e,l,o){if(t&&t.o){if(kt.has(t))return;kt.add(t),Pe.c.push(()=>{kt.delete(t),o&&(l&&t.d(1),o())}),t.o(e)}else o&&o()}function pe(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function je(t){t&&t.c()}function ye(t,e,l){const{fragment:o,after_update:s}=t.$$;o&&o.m(e,l),Ht(()=>{const u=t.$$.on_mount.map(_e).filter(he);t.$$.on_destroy?t.$$.on_destroy.push(...u):ft(u),t.$$.on_mount=[]}),s.forEach(Ht)}function ve(t,e){const l=t.$$;l.fragment!==null&&(Ae(l.after_update),ft(l.on_destroy),l.fragment&&l.fragment.d(e),l.on_destroy=l.fragment=null,l.ctx=[])}function Ge(t,e){t.$$.dirty[0]===-1&&(Y.push(t),Ne(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ce(t,e,l,o,s,u,a=null,k=[-1]){const m=qt;at(t);const c=t.$$={fragment:null,ctx:[],props:u,update:S,not_equal:s,bound:ue(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(m?m.$$.context:[])),callbacks:ue(),dirty:k,skip_bound:!1,root:e.target||m.$$.root};a&&a(c.root);let B=!1;if(c.ctx=l?l(t,e.props||{},(p,z,...O)=>{const L=O.length?O[0]:z;return c.ctx&&s(c.ctx[p],c.ctx[p]=L)&&(!c.skip_bound&&c.bound[p]&&c.bound[p](L),B&&Ge(t,p)),z}):[],c.update(),B=!0,ft(c.before_update),c.fragment=o?o(c.ctx):!1,e.target){if(e.hydrate){const p=Le(e.target);c.fragment&&c.fragment.l(p),p.forEach(gt)}else c.fragment&&c.fragment.c();e.intro&&mt(t.$$.fragment),ye(t,e.target,e.anchor),me()}at(m)}class xe{constructor(){Gt(this,"$$");Gt(this,"$$set")}$destroy(){ve(this,1),this.$destroy=S}$on(e,l){if(!he(l))return S;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(l),()=>{const s=o.indexOf(l);s!==-1&&o.splice(s,1)}}$set(e){this.$$set&&!Ee(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Te="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Te);function Me(t){let e;return{c(){e=r("div"),i(e,"class","letter-box svelte-gp88e")},m(l,o){Rt(l,e,o)},p:S,i:S,o:S,d(l){l&&gt(e)}}}class Ie extends xe{constructor(e){super(),Ce(this,e,null,Me,be,{})}}function He(t,e,l){const o=t.slice();return o[40]=e[l],o}function Ue(t,e,l){const o=t.slice();return o[43]=e[l],o}function Re(t){let e,l;return e=new Ie({}),{c(){je(e.$$.fragment)},m(o,s){ye(e,o,s),l=!0},i(o){l||(mt(e.$$.fragment,o),l=!0)},o(o){Ft(e.$$.fragment,o),l=!1},d(o){ve(e,o)}}}function qe(t){let e,l,o,s=pe({length:5}),u=[];for(let a=0;a<s.length;a+=1)u[a]=Re(Ue(t,s,a));return{c(){e=r("div");for(let a=0;a<u.length;a+=1)u[a].c();l=d(),i(e,"class","letter-row svelte-8ds6iz")},m(a,k){Rt(a,e,k);for(let m=0;m<u.length;m+=1)u[m]&&u[m].m(e,null);n(e,l),o=!0},p:S,i(a){if(!o){for(let k=0;k<s.length;k+=1)mt(u[k]);o=!0}},o(a){u=u.filter(Boolean);for(let k=0;k<u.length;k+=1)Ft(u[k]);o=!1},d(a){a&&gt(e),ke(u,a)}}}function Fe(t){let e,l,o,s,u,a,k,m,c,B,p,z,O,L,pt,w,C,_t,yt,A,vt,P,Ct,j,xt,G,$t,h,ht,zt,T,wt,M,Et,I,Lt,H,Bt,U,Ot,R,Nt,g,b,x,q,y,V,St,N,Yt,J,Dt,K,Vt,Q,Jt,W,Kt,_,At,Qt,X,Wt,Z,Xt,tt,Zt,et,te,nt,ee,lt,ne,ot,le,ct,oe,st,ce,rt,se,it,re,ut,dt,Pt,ie,jt=pe({length:5}),$=[];for(let v=0;v<jt.length;v+=1)$[v]=qe(He(t,jt,v));return{c(){e=r("main"),l=r("h1"),l.textContent="Code-le",o=d(),s=r("div"),u=r("pre"),a=r("p"),k=ge(t[0]),m=d(),c=r("div");for(let v=0;v<$.length;v+=1)$[v].c();B=d(),p=r("div"),z=r("button"),z.textContent="Del",O=d(),L=r("button"),L.textContent="Enter",pt=d(),w=r("div"),C=r("div"),_t=r("u"),_t.innerHTML="<h2>Keywords</h2>",yt=d(),A=r("button"),A.textContent="if",vt=d(),P=r("button"),P.textContent="while",Ct=d(),j=r("button"),j.textContent="do",xt=d(),G=r("button"),G.textContent="out",$t=d(),h=r("div"),ht=r("u"),ht.innerHTML="<h2>Types</h2>",zt=d(),T=r("button"),T.textContent="int",wt=d(),M=r("button"),M.textContent="uint",Et=d(),I=r("button"),I.textContent="float",Lt=d(),H=r("button"),H.textContent="double",Bt=d(),U=r("button"),U.textContent="byte",Ot=d(),R=r("button"),R.textContent="string",Nt=d(),g=r("button"),g.textContent="bool",b=d(),x=r("button"),x.textContent="void",q=d(),y=r("div"),V=r("u"),V.innerHTML="<h2>Compairson</h2>",St=d(),N=r("button"),N.textContent="<",Yt=d(),J=r("button"),J.textContent="<=",Dt=d(),K=r("button"),K.textContent=">",Vt=d(),Q=r("button"),Q.textContent=">=",Jt=d(),W=r("button"),W.textContent="==",Kt=d(),_=r("div"),At=r("u"),At.innerHTML="<h2>Operation</h2>",Qt=d(),X=r("button"),X.textContent="++",Wt=d(),Z=r("button"),Z.textContent="--",Xt=d(),tt=r("button"),tt.textContent="+=",Zt=d(),et=r("button"),et.textContent="-=",te=d(),nt=r("button"),nt.textContent="%=",ee=d(),lt=r("button"),lt.textContent="/=",ne=d(),ot=r("button"),ot.textContent="+",le=d(),ct=r("button"),ct.textContent="-",oe=d(),st=r("button"),st.textContent="*",ce=d(),rt=r("button"),rt.textContent="/",se=d(),it=r("button"),it.textContent="%",re=d(),ut=r("button"),ut.textContent="=",i(a,"id","code"),Tt(a,"color","white"),i(s,"id","code-div"),i(s,"class","center-text svelte-8ds6iz"),i(c,"class","game-board svelte-8ds6iz"),i(z,"class","keyboard-button svelte-8ds6iz"),Tt(z,"width","100px"),i(L,"class","keyboard-button svelte-8ds6iz"),Tt(L,"width","100px"),i(p,"class","center svelte-8ds6iz"),i(A,"class","keyboard-button svelte-8ds6iz"),i(P,"class","keyboard-button svelte-8ds6iz"),i(j,"class","keyboard-button svelte-8ds6iz"),i(G,"class","keyboard-button svelte-8ds6iz"),i(C,"class","column svelte-8ds6iz"),i(T,"class","keyboard-button svelte-8ds6iz"),i(M,"class","keyboard-button svelte-8ds6iz"),i(I,"class","keyboard-button svelte-8ds6iz"),i(H,"class","keyboard-button svelte-8ds6iz"),i(U,"class","keyboard-button svelte-8ds6iz"),i(R,"class","keyboard-button svelte-8ds6iz"),i(g,"class","keyboard-button svelte-8ds6iz"),i(x,"class","keyboard-button svelte-8ds6iz"),i(h,"class","column svelte-8ds6iz"),i(N,"class","keyboard-button svelte-8ds6iz"),i(J,"class","keyboard-button svelte-8ds6iz"),i(K,"class","keyboard-button svelte-8ds6iz"),i(Q,"class","keyboard-button svelte-8ds6iz"),i(W,"class","keyboard-button svelte-8ds6iz"),i(y,"class","column svelte-8ds6iz"),i(X,"class","keyboard-button svelte-8ds6iz"),i(Z,"class","keyboard-button svelte-8ds6iz"),i(tt,"class","keyboard-button svelte-8ds6iz"),i(et,"class","keyboard-button svelte-8ds6iz"),i(nt,"class","keyboard-button svelte-8ds6iz"),i(lt,"class","keyboard-button svelte-8ds6iz"),i(ot,"class","keyboard-button svelte-8ds6iz"),i(ct,"class","keyboard-button svelte-8ds6iz"),i(st,"class","keyboard-button svelte-8ds6iz"),i(rt,"class","keyboard-button svelte-8ds6iz"),i(it,"class","keyboard-button svelte-8ds6iz"),i(ut,"class","keyboard-button svelte-8ds6iz"),i(_,"class","column svelte-8ds6iz"),i(w,"class","grid-container svelte-8ds6iz")},m(v,E){Rt(v,e,E),n(e,l),n(e,o),n(e,s),n(s,u),n(u,a),n(a,k),n(e,m),n(e,c);for(let bt=0;bt<$.length;bt+=1)$[bt]&&$[bt].m(c,null);n(e,B),n(e,p),n(p,z),n(p,O),n(p,L),n(e,pt),n(e,w),n(w,C),n(C,_t),n(C,yt),n(C,A),n(C,vt),n(C,P),n(C,Ct),n(C,j),n(C,xt),n(C,G),n(w,$t),n(w,h),n(h,ht),n(h,zt),n(h,T),n(h,wt),n(h,M),n(h,Et),n(h,I),n(h,Lt),n(h,H),n(h,Bt),n(h,U),n(h,Ot),n(h,R),n(h,Nt),n(h,g),n(h,b),n(h,x),n(w,q),n(w,y),n(y,V),n(y,St),n(y,N),n(y,Yt),n(y,J),n(y,Dt),n(y,K),n(y,Vt),n(y,Q),n(y,Jt),n(y,W),n(w,Kt),n(w,_),n(_,At),n(_,Qt),n(_,X),n(_,Wt),n(_,Z),n(_,Xt),n(_,tt),n(_,Zt),n(_,et),n(_,te),n(_,nt),n(_,ee),n(_,lt),n(_,ne),n(_,ot),n(_,le),n(_,ct),n(_,oe),n(_,st),n(_,ce),n(_,rt),n(_,se),n(_,it),n(_,re),n(_,ut),dt=!0,Pt||(ie=[f(z,"click",t[2]),f(L,"click",t[3]),f(A,"click",t[4]),f(P,"click",t[5]),f(j,"click",t[6]),f(G,"click",t[7]),f(T,"click",t[8]),f(M,"click",t[9]),f(I,"click",t[10]),f(H,"click",t[11]),f(U,"click",t[12]),f(R,"click",t[13]),f(g,"click",t[14]),f(x,"click",t[15]),f(N,"click",t[16]),f(J,"click",t[17]),f(K,"click",t[18]),f(Q,"click",t[19]),f(W,"click",t[20]),f(X,"click",t[21]),f(Z,"click",t[22]),f(tt,"click",t[23]),f(et,"click",t[24]),f(nt,"click",t[25]),f(lt,"click",t[26]),f(ot,"click",t[27]),f(ct,"click",t[28]),f(st,"click",t[29]),f(rt,"click",t[30]),f(it,"click",t[31]),f(ut,"click",t[32])],Pt=!0)},p(v,E){(!dt||E[0]&1)&&Be(k,v[0])},i(v){if(!dt){for(let E=0;E<jt.length;E+=1)mt($[E]);dt=!0}},o(v){$=$.filter(Boolean);for(let E=0;E<$.length;E+=1)Ft($[E]);dt=!1},d(v){v&&gt(e),ke($,v),Pt=!1,ft(ie)}}}const Ut="#80ae80",$e="#ffff80",Ye=5,fe=/@{1}[^>\s]*@{1}/g;function De(t,e){for(const l of document.getElementsByClassName("keyboard-button")){const o=l;if(o.textContent===t){let s=o.style.backgroundColor;if(s===Ut||s===$e&&e!==Ut)return;o.style.backgroundColor=e,o.style.color="black";break}}}function Ve(t,e,l){let o=Ye,s=[],u=0,a=`int,int,=,+=,+=
//This function will take 2 numbers and return their sum
@int@ Sum(int x, int y)
{
    @int@ z @=@ 0
    z @+=@ x;
    z @+=@ y;

    return z;
}`,k=a.split(`
`)[0].split(","),m=a.split(`
`).slice(1).join(`
`).replace(fe,"____");function c(g){if(u===5)return;g=g.toLowerCase();let x=document.getElementsByClassName("letter-row")[5-o].children[u];x.textContent=g,s.push(g),B(),u++}function B(){l(0,m=a.split(`
`).slice(1).join(`
`).replace(fe,"____"));for(const g of s)console.log(g),l(0,m=m.replace("____",g))}function p(){if(u==0)return;let b=document.getElementsByClassName("letter-row")[5-o].children[u-1];b.textContent="",b.classList.remove("filled-box"),s.pop(),B(),u--}function z(){let g=document.getElementsByClassName("letter-row")[5-o];for(const b of s);if(s.length==5){for(let b=0;b<5;b++){let x="transparent",q="white",y=g.children[b],V=s[b];k.indexOf(s[b])===-1?x="grey":s[b]===k[b]?(x=Ut,q="black"):(x=$e,q="black");let N=250*b;setTimeout(()=>{y.style.backgroundColor=x,y.style.color=q,De(V,x)},N)}if(O()){alert("You guessed right! Game over!"),document.getElementById("code").textContent=a.split(`
`).slice(1).join(`
`).replaceAll("@",""),o=0;return}else o-=1,s=[],u=0,o===0&&(alert("You've run out of guesses! Game over!"),document.getElementById("code").textContent=a.split(`
`).slice(1).join(`
`).replaceAll("@",""))}}function O(){for(var g=!0,b=0;b<5;b++)s[b]!=k[b]&&(g=!1);return g}return[m,c,p,z,()=>c("if"),()=>c("while"),()=>c("do"),()=>c("out"),()=>c("int"),()=>c("uint"),()=>c("float"),()=>c("double"),()=>c("byte"),()=>c("string"),()=>c("bool"),()=>c("void"),()=>c("<"),()=>c("<="),()=>c(">"),()=>c(">="),()=>c("=="),()=>c("++"),()=>c("--"),()=>c("+="),()=>c("-="),()=>c("%="),()=>c("/="),()=>c("+"),()=>c("-"),()=>c("*"),()=>c("/"),()=>c("%"),()=>c("=")]}class Je extends xe{constructor(e){super(),Ce(this,e,Ve,Fe,be,{},null,[-1,-1])}}new Je({target:document.getElementById("app")});
