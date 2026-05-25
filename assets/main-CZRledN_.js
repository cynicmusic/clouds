(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ia="170",Pp=0,Su=1,Lp=2,Ip=0,bc=1,qs=2,mi=3,Jn=0,Zt=1,cn=2,On=0,Yr=1,El=2,xu=3,yu=4,Np=5,ar=100,Op=101,Up=102,Fp=103,Bp=104,Hp=200,zp=201,Gp=202,kp=203,wl=204,Tl=205,Wp=206,Vp=207,Xp=208,Yp=209,qp=210,$p=211,jp=212,Zp=213,Kp=214,Ml=0,$s=1,bl=2,$r=3,Al=4,Rl=5,Cl=6,Dl=7,Hd=0,Jp=1,Qp=2,Ei=0,em=1,tm=2,nm=3,zd=4,im=5,rm=6,am=7,Gd=300,jr=301,Zr=302,Pl=303,Ll=304,lo=306,Un=1e3,un=1001,Il=1002,zt=1003,sm=1004,us=1005,Ze=1006,Po=1007,xi=1008,Jt=1009,Ac=1010,Rc=1011,Kr=1012,co=1013,Ai=1014,rn=1015,Bt=1016,Cc=1017,Dc=1018,hr=1020,kd=35902,Wd=1021,Vd=1022,Kt=1023,Xd=1024,Yd=1025,ur=1026,dr=1027,ra=1028,Pc=1029,qd=1030,Lc=1031,Ic=1033,zs=33776,Gs=33777,ks=33778,Ws=33779,Nl=35840,Ol=35841,Ul=35842,Fl=35843,Bl=36196,Hl=37492,zl=37496,Gl=37808,kl=37809,Wl=37810,Vl=37811,Xl=37812,Yl=37813,ql=37814,$l=37815,jl=37816,Zl=37817,Kl=37818,Jl=37819,Ql=37820,ec=37821,Vs=36492,tc=36494,nc=36495,$d=36283,ic=36284,rc=36285,ac=36286,ja=3200,om=3201,Nc=0,lm=1,nn="",It="srgb",_n="srgb-linear",uo="linear",Tt="srgb",Sr=7680,Eu=519,cm=512,um=513,hm=514,jd=515,dm=516,fm=517,pm=518,mm=519,wu=35044,Vi="300 es",yi=2e3,js=2001;class ri{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Tu=1234567;const Oa=Math.PI/180,Wa=180/Math.PI;function aa(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]).toLowerCase()}function tn(n,e,t){return Math.max(e,Math.min(t,n))}function Oc(n,e){return(n%e+e)%e}function gm(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function vm(n,e,t){return n!==e?(t-n)/(e-n):0}function Ua(n,e,t){return(1-t)*n+t*e}function _m(n,e,t,i){return Ua(n,e,1-Math.exp(-t*i))}function Sm(n,e=1){return e-Math.abs(Oc(n,e*2)-e)}function xm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function ym(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Em(n,e){return n+Math.floor(Math.random()*(e-n+1))}function wm(n,e){return n+Math.random()*(e-n)}function Tm(n){return n*(.5-Math.random())}function Mm(n){n!==void 0&&(Tu=n);let e=Tu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function bm(n){return n*Oa}function Am(n){return n*Wa}function Rm(n){return(n&n-1)===0&&n!==0}function Cm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Dm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Pm(n,e,t,i,r){const a=Math.cos,s=Math.sin,o=a(t/2),l=s(t/2),c=a((e+i)/2),h=s((e+i)/2),d=a((e-i)/2),f=s((e-i)/2),g=a((i-e)/2),_=s((i-e)/2);switch(r){case"XYX":n.set(o*h,l*d,l*f,o*c);break;case"YZY":n.set(l*f,o*h,l*d,o*c);break;case"ZXZ":n.set(l*d,l*f,o*h,o*c);break;case"XZX":n.set(o*h,l*_,l*g,o*c);break;case"YXY":n.set(l*g,o*h,l*_,o*c);break;case"ZYZ":n.set(l*_,l*g,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Hr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function pn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const me={DEG2RAD:Oa,RAD2DEG:Wa,generateUUID:aa,clamp:tn,euclideanModulo:Oc,mapLinear:gm,inverseLerp:vm,lerp:Ua,damp:_m,pingpong:Sm,smoothstep:xm,smootherstep:ym,randInt:Em,randFloat:wm,randFloatSpread:Tm,seededRandom:Mm,degToRad:bm,radToDeg:Am,isPowerOfTwo:Rm,ceilPowerOfTwo:Cm,floorPowerOfTwo:Dm,setQuaternionFromProperEuler:Pm,normalize:pn,denormalize:Hr};class Ee{constructor(e=0,t=0){Ee.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*r+e.x,this.y=a*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(e,t,i,r,a,s,o,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,l,c)}set(e,t,i,r,a,s,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=a,h[5]=l,h[6]=i,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],g=i[5],_=i[8],S=r[0],p=r[3],m=r[6],R=r[1],A=r[4],M=r[7],H=r[2],D=r[5],L=r[8];return a[0]=s*S+o*R+l*H,a[3]=s*p+o*A+l*D,a[6]=s*m+o*M+l*L,a[1]=c*S+h*R+d*H,a[4]=c*p+h*A+d*D,a[7]=c*m+h*M+d*L,a[2]=f*S+g*R+_*H,a[5]=f*p+g*A+_*D,a[8]=f*m+g*M+_*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*s*h-t*o*c-i*a*h+i*o*l+r*a*c-r*s*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*s-o*c,f=o*l-h*a,g=c*a-s*l,_=t*d+i*f+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=d*S,e[1]=(r*c-h*i)*S,e[2]=(o*i-r*s)*S,e[3]=f*S,e[4]=(h*t-r*l)*S,e[5]=(r*a-o*t)*S,e[6]=g*S,e[7]=(i*l-c*t)*S,e[8]=(s*t-i*a)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-r*c,r*l,-r*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Lo.makeScale(e,t)),this}rotate(e){return this.premultiply(Lo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Lo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Lo=new Je;function Zd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Va(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Lm(){const n=Va("canvas");return n.style.display="block",n}const Mu={};function Ca(n){n in Mu||(Mu[n]=!0,console.warn(n))}function Im(n,e,t){return new Promise(function(i,r){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}function Nm(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Om(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ft={enabled:!0,workingColorSpace:_n,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Tt&&(n.r=wi(n.r),n.g=wi(n.g),n.b=wi(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Tt&&(n.r=qr(n.r),n.g=qr(n.g),n.b=qr(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===nn?uo:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function wi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function qr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const bu=[.64,.33,.3,.6,.15,.06],Au=[.2126,.7152,.0722],Ru=[.3127,.329],Cu=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Du=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ft.define({[_n]:{primaries:bu,whitePoint:Ru,transfer:uo,toXYZ:Cu,fromXYZ:Du,luminanceCoefficients:Au,workingColorSpaceConfig:{unpackColorSpace:It},outputColorSpaceConfig:{drawingBufferColorSpace:It}},[It]:{primaries:bu,whitePoint:Ru,transfer:Tt,toXYZ:Cu,fromXYZ:Du,luminanceCoefficients:Au,outputColorSpaceConfig:{drawingBufferColorSpace:It}}});let xr;class Um{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{xr===void 0&&(xr=Va("canvas")),xr.width=e.width,xr.height=e.height;const i=xr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=xr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Va("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=wi(a[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(wi(t[i]/255)*255):t[i]=wi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Fm=0;class Kd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fm++}),this.uuid=aa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(Io(r[s].image)):a.push(Io(r[s]))}else a=Io(r);i.url=a}return t||(e.images[this.uuid]=i),i}}function Io(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Um.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Bm=0;class Ht extends ri{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,i=un,r=un,a=Ze,s=xi,o=Kt,l=Jt,c=Ht.DEFAULT_ANISOTROPY,h=nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=aa(),this.name="",this.source=new Kd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Un:e.x=e.x-Math.floor(e.x);break;case un:e.x=e.x<0?0:1;break;case Il:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Un:e.y=e.y-Math.floor(e.y);break;case un:e.y=e.y<0?0:1;break;case Il:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=Gd;Ht.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,i=0,r=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a;const l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],g=l[5],_=l[9],S=l[2],p=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-S)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+S)<.1&&Math.abs(_+p)<.1&&Math.abs(c+g+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,M=(g+1)/2,H=(m+1)/2,D=(h+f)/4,L=(d+S)/4,O=(_+p)/4;return A>M&&A>H?A<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(A),r=D/i,a=L/i):M>H?M<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(M),i=D/r,a=O/r):H<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(H),i=L/a,r=O/a),this.set(i,r,a,t),this}let R=Math.sqrt((p-_)*(p-_)+(d-S)*(d-S)+(f-h)*(f-h));return Math.abs(R)<.001&&(R=1),this.x=(p-_)/R,this.y=(d-S)/R,this.z=(f-h)/R,this.w=Math.acos((c+g+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hm extends ri{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ze,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new Ht(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Kd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ot extends Hm{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Uc extends Ht{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zm extends Ot{constructor(e=1,t=1,i=1,r={}){super(e,t,r),this.isWebGLArrayRenderTarget=!0,this.depth=i,this.texture=new Uc(null,e,t,i),this.texture.isRenderTargetTexture=!0}}class Ti extends Ht{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ni{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,s,o){let l=i[r+0],c=i[r+1],h=i[r+2],d=i[r+3];const f=a[s+0],g=a[s+1],_=a[s+2],S=a[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=g,e[t+2]=_,e[t+3]=S;return}if(d!==S||l!==f||c!==g||h!==_){let p=1-o;const m=l*f+c*g+h*_+d*S,R=m>=0?1:-1,A=1-m*m;if(A>Number.EPSILON){const H=Math.sqrt(A),D=Math.atan2(H,m*R);p=Math.sin(p*D)/H,o=Math.sin(o*D)/H}const M=o*R;if(l=l*p+f*M,c=c*p+g*M,h=h*p+_*M,d=d*p+S*M,p===1-o){const H=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=H,c*=H,h*=H,d*=H}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,a,s){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],d=a[s],f=a[s+1],g=a[s+2],_=a[s+3];return e[t]=o*_+h*d+l*g-c*f,e[t+1]=l*_+h*f+c*d-o*g,e[t+2]=c*_+h*g+o*f-l*d,e[t+3]=h*_-o*d-l*f-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),d=o(a/2),f=l(i/2),g=l(r/2),_=l(a/2);switch(s){case"XYZ":this._x=f*h*d+c*g*_,this._y=c*g*d-f*h*_,this._z=c*h*_+f*g*d,this._w=c*h*d-f*g*_;break;case"YXZ":this._x=f*h*d+c*g*_,this._y=c*g*d-f*h*_,this._z=c*h*_-f*g*d,this._w=c*h*d+f*g*_;break;case"ZXY":this._x=f*h*d-c*g*_,this._y=c*g*d+f*h*_,this._z=c*h*_+f*g*d,this._w=c*h*d-f*g*_;break;case"ZYX":this._x=f*h*d-c*g*_,this._y=c*g*d+f*h*_,this._z=c*h*_-f*g*d,this._w=c*h*d+f*g*_;break;case"YZX":this._x=f*h*d+c*g*_,this._y=c*g*d+f*h*_,this._z=c*h*_-f*g*d,this._w=c*h*d-f*g*_;break;case"XZY":this._x=f*h*d-c*g*_,this._y=c*g*d-f*h*_,this._z=c*h*_+f*g*d,this._w=c*h*d+f*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],a=t[8],s=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=i+o+d;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(h-l)*g,this._y=(a-c)*g,this._z=(s-r)*g}else if(i>o&&i>d){const g=2*Math.sqrt(1+i-o-d);this._w=(h-l)/g,this._x=.25*g,this._y=(r+s)/g,this._z=(a+c)/g}else if(o>d){const g=2*Math.sqrt(1+o-i-d);this._w=(a-c)/g,this._x=(r+s)/g,this._y=.25*g,this._z=(l+h)/g}else{const g=2*Math.sqrt(1+d-i-o);this._w=(s-r)/g,this._x=(a+c)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,a=e._z,s=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+s*o+r*c-a*l,this._y=r*h+s*l+a*o-i*c,this._z=a*h+s*c+i*l-r*o,this._w=s*h-i*o-r*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,s=this._w;let o=s*e._w+i*e._x+r*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=i,this._y=r,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const g=1-t;return this._w=g*s+t*this._w,this._x=g*i+t*this._x,this._y=g*r+t*this._y,this._z=g*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=s*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=a*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,i=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*r-o*i),h=2*(o*t-a*r),d=2*(a*i-s*t);return this.x=t+l*c+s*d-o*h,this.y=i+l*h+o*c-a*d,this.z=r+l*d+a*h-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=r*l-a*o,this.y=a*s-i*l,this.z=i*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return No.copy(this).projectOnVector(e),this.sub(No)}reflect(e){return this.sub(No.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const No=new P,Pu=new ni;class sa{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Gn):Gn.fromBufferAttribute(a,s),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),hs.copy(i.boundingBox)),hs.applyMatrix4(e.matrixWorld),this.union(hs)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(va),ds.subVectors(this.max,va),yr.subVectors(e.a,va),Er.subVectors(e.b,va),wr.subVectors(e.c,va),Li.subVectors(Er,yr),Ii.subVectors(wr,Er),Yi.subVectors(yr,wr);let t=[0,-Li.z,Li.y,0,-Ii.z,Ii.y,0,-Yi.z,Yi.y,Li.z,0,-Li.x,Ii.z,0,-Ii.x,Yi.z,0,-Yi.x,-Li.y,Li.x,0,-Ii.y,Ii.x,0,-Yi.y,Yi.x,0];return!Oo(t,yr,Er,wr,ds)||(t=[1,0,0,0,1,0,0,0,1],!Oo(t,yr,Er,wr,ds))?!1:(fs.crossVectors(Li,Ii),t=[fs.x,fs.y,fs.z],Oo(t,yr,Er,wr,ds))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const oi=[new P,new P,new P,new P,new P,new P,new P,new P],Gn=new P,hs=new sa,yr=new P,Er=new P,wr=new P,Li=new P,Ii=new P,Yi=new P,va=new P,ds=new P,fs=new P,qi=new P;function Oo(n,e,t,i,r){for(let a=0,s=n.length-3;a<=s;a+=3){qi.fromArray(n,a);const o=r.x*Math.abs(qi.x)+r.y*Math.abs(qi.y)+r.z*Math.abs(qi.z),l=e.dot(qi),c=t.dot(qi),h=i.dot(qi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Gm=new sa,_a=new P,Uo=new P;class Fc{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Gm.setFromPoints(e).getCenter(i);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_a.subVectors(e,this.center);const t=_a.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(_a,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_a.copy(e.center).add(Uo)),this.expandByPoint(_a.copy(e.center).sub(Uo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const li=new P,Fo=new P,ps=new P,Ni=new P,Bo=new P,ms=new P,Ho=new P;class km{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(li.copy(this.origin).addScaledVector(this.direction,t),li.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Fo.copy(e).add(t).multiplyScalar(.5),ps.copy(t).sub(e).normalize(),Ni.copy(this.origin).sub(Fo);const a=e.distanceTo(t)*.5,s=-this.direction.dot(ps),o=Ni.dot(this.direction),l=-Ni.dot(ps),c=Ni.lengthSq(),h=Math.abs(1-s*s);let d,f,g,_;if(h>0)if(d=s*l-o,f=s*o-l,_=a*h,d>=0)if(f>=-_)if(f<=_){const S=1/h;d*=S,f*=S,g=d*(d+s*f+2*o)+f*(s*d+f+2*l)+c}else f=a,d=Math.max(0,-(s*f+o)),g=-d*d+f*(f+2*l)+c;else f=-a,d=Math.max(0,-(s*f+o)),g=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-s*a+o)),f=d>0?-a:Math.min(Math.max(-a,-l),a),g=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-a,-l),a),g=f*(f+2*l)+c):(d=Math.max(0,-(s*a+o)),f=d>0?a:Math.min(Math.max(-a,-l),a),g=-d*d+f*(f+2*l)+c);else f=s>0?-a:a,d=Math.max(0,-(s*f+o)),g=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Fo).addScaledVector(ps,f),g}intersectSphere(e,t){li.subVectors(e.center,this.origin);const i=li.dot(this.direction),r=li.dot(li)-i*i,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,s,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(a=(e.min.y-f.y)*h,s=(e.max.y-f.y)*h):(a=(e.max.y-f.y)*h,s=(e.min.y-f.y)*h),i>s||a>r||((a>i||isNaN(i))&&(i=a),(s<r||isNaN(r))&&(r=s),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,li)!==null}intersectTriangle(e,t,i,r,a){Bo.subVectors(t,e),ms.subVectors(i,e),Ho.crossVectors(Bo,ms);let s=this.direction.dot(Ho),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Ni.subVectors(this.origin,e);const l=o*this.direction.dot(ms.crossVectors(Ni,ms));if(l<0)return null;const c=o*this.direction.dot(Bo.cross(Ni));if(c<0||l+c>s)return null;const h=-o*Ni.dot(Ho);return h<0?null:this.at(h/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ue{constructor(e,t,i,r,a,s,o,l,c,h,d,f,g,_,S,p){Ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,l,c,h,d,f,g,_,S,p)}set(e,t,i,r,a,s,o,l,c,h,d,f,g,_,S,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=a,m[5]=s,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=f,m[3]=g,m[7]=_,m[11]=S,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ue().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Tr.setFromMatrixColumn(e,0).length(),a=1/Tr.setFromMatrixColumn(e,1).length(),s=1/Tr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){const f=s*h,g=s*d,_=o*h,S=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=g+_*c,t[5]=f-S*c,t[9]=-o*l,t[2]=S-f*c,t[6]=_+g*c,t[10]=s*l}else if(e.order==="YXZ"){const f=l*h,g=l*d,_=c*h,S=c*d;t[0]=f+S*o,t[4]=_*o-g,t[8]=s*c,t[1]=s*d,t[5]=s*h,t[9]=-o,t[2]=g*o-_,t[6]=S+f*o,t[10]=s*l}else if(e.order==="ZXY"){const f=l*h,g=l*d,_=c*h,S=c*d;t[0]=f-S*o,t[4]=-s*d,t[8]=_+g*o,t[1]=g+_*o,t[5]=s*h,t[9]=S-f*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const f=s*h,g=s*d,_=o*h,S=o*d;t[0]=l*h,t[4]=_*c-g,t[8]=f*c+S,t[1]=l*d,t[5]=S*c+f,t[9]=g*c-_,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const f=s*l,g=s*c,_=o*l,S=o*c;t[0]=l*h,t[4]=S-f*d,t[8]=_*d+g,t[1]=d,t[5]=s*h,t[9]=-o*h,t[2]=-c*h,t[6]=g*d+_,t[10]=f-S*d}else if(e.order==="XZY"){const f=s*l,g=s*c,_=o*l,S=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+S,t[5]=s*h,t[9]=g*d-_,t[2]=_*d-g,t[6]=o*h,t[10]=S*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wm,e,Vm)}lookAt(e,t,i){const r=this.elements;return An.subVectors(e,t),An.lengthSq()===0&&(An.z=1),An.normalize(),Oi.crossVectors(i,An),Oi.lengthSq()===0&&(Math.abs(i.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Oi.crossVectors(i,An)),Oi.normalize(),gs.crossVectors(An,Oi),r[0]=Oi.x,r[4]=gs.x,r[8]=An.x,r[1]=Oi.y,r[5]=gs.y,r[9]=An.y,r[2]=Oi.z,r[6]=gs.z,r[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],g=i[13],_=i[2],S=i[6],p=i[10],m=i[14],R=i[3],A=i[7],M=i[11],H=i[15],D=r[0],L=r[4],O=r[8],w=r[12],E=r[1],N=r[5],G=r[9],W=r[13],Y=r[2],ne=r[6],X=r[10],oe=r[14],Z=r[3],le=r[7],ve=r[11],De=r[15];return a[0]=s*D+o*E+l*Y+c*Z,a[4]=s*L+o*N+l*ne+c*le,a[8]=s*O+o*G+l*X+c*ve,a[12]=s*w+o*W+l*oe+c*De,a[1]=h*D+d*E+f*Y+g*Z,a[5]=h*L+d*N+f*ne+g*le,a[9]=h*O+d*G+f*X+g*ve,a[13]=h*w+d*W+f*oe+g*De,a[2]=_*D+S*E+p*Y+m*Z,a[6]=_*L+S*N+p*ne+m*le,a[10]=_*O+S*G+p*X+m*ve,a[14]=_*w+S*W+p*oe+m*De,a[3]=R*D+A*E+M*Y+H*Z,a[7]=R*L+A*N+M*ne+H*le,a[11]=R*O+A*G+M*X+H*ve,a[15]=R*w+A*W+M*oe+H*De,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],g=e[14],_=e[3],S=e[7],p=e[11],m=e[15];return _*(+a*l*d-r*c*d-a*o*f+i*c*f+r*o*g-i*l*g)+S*(+t*l*g-t*c*f+a*s*f-r*s*g+r*c*h-a*l*h)+p*(+t*c*d-t*o*g-a*s*d+i*s*g+a*o*h-i*c*h)+m*(-r*o*h-t*l*d+t*o*f+r*s*d-i*s*f+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],g=e[11],_=e[12],S=e[13],p=e[14],m=e[15],R=d*p*c-S*f*c+S*l*g-o*p*g-d*l*m+o*f*m,A=_*f*c-h*p*c-_*l*g+s*p*g+h*l*m-s*f*m,M=h*S*c-_*d*c+_*o*g-s*S*g-h*o*m+s*d*m,H=_*d*l-h*S*l-_*o*f+s*S*f+h*o*p-s*d*p,D=t*R+i*A+r*M+a*H;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/D;return e[0]=R*L,e[1]=(S*f*a-d*p*a-S*r*g+i*p*g+d*r*m-i*f*m)*L,e[2]=(o*p*a-S*l*a+S*r*c-i*p*c-o*r*m+i*l*m)*L,e[3]=(d*l*a-o*f*a-d*r*c+i*f*c+o*r*g-i*l*g)*L,e[4]=A*L,e[5]=(h*p*a-_*f*a+_*r*g-t*p*g-h*r*m+t*f*m)*L,e[6]=(_*l*a-s*p*a-_*r*c+t*p*c+s*r*m-t*l*m)*L,e[7]=(s*f*a-h*l*a+h*r*c-t*f*c-s*r*g+t*l*g)*L,e[8]=M*L,e[9]=(_*d*a-h*S*a-_*i*g+t*S*g+h*i*m-t*d*m)*L,e[10]=(s*S*a-_*o*a+_*i*c-t*S*c-s*i*m+t*o*m)*L,e[11]=(h*o*a-s*d*a-h*i*c+t*d*c+s*i*g-t*o*g)*L,e[12]=H*L,e[13]=(h*S*r-_*d*r+_*i*f-t*S*f-h*i*p+t*d*p)*L,e[14]=(_*o*r-s*S*r-_*i*l+t*S*l+s*i*p-t*o*p)*L,e[15]=(s*d*r-h*o*r+h*i*l-t*d*l-s*i*f+t*o*f)*L,this}scale(e){const t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),a=1-i,s=e.x,o=e.y,l=e.z,c=a*s,h=a*o;return this.set(c*s+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*s,0,c*l-r*o,h*l+r*s,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,s){return this.set(1,i,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,c=a+a,h=s+s,d=o+o,f=a*c,g=a*h,_=a*d,S=s*h,p=s*d,m=o*d,R=l*c,A=l*h,M=l*d,H=i.x,D=i.y,L=i.z;return r[0]=(1-(S+m))*H,r[1]=(g+M)*H,r[2]=(_-A)*H,r[3]=0,r[4]=(g-M)*D,r[5]=(1-(f+m))*D,r[6]=(p+R)*D,r[7]=0,r[8]=(_+A)*L,r[9]=(p-R)*L,r[10]=(1-(f+S))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let a=Tr.set(r[0],r[1],r[2]).length();const s=Tr.set(r[4],r[5],r[6]).length(),o=Tr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],kn.copy(this);const c=1/a,h=1/s,d=1/o;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=h,kn.elements[5]*=h,kn.elements[6]*=h,kn.elements[8]*=d,kn.elements[9]*=d,kn.elements[10]*=d,t.setFromRotationMatrix(kn),i.x=a,i.y=s,i.z=o,this}makePerspective(e,t,i,r,a,s,o=yi){const l=this.elements,c=2*a/(t-e),h=2*a/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r);let g,_;if(o===yi)g=-(s+a)/(s-a),_=-2*s*a/(s-a);else if(o===js)g=-s/(s-a),_=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,a,s,o=yi){const l=this.elements,c=1/(t-e),h=1/(i-r),d=1/(s-a),f=(t+e)*c,g=(i+r)*h;let _,S;if(o===yi)_=(s+a)*d,S=-2*d;else if(o===js)_=a*d,S=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=S,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Tr=new P,kn=new Ue,Wm=new P(0,0,0),Vm=new P(1,1,1),Oi=new P,gs=new P,An=new P,Lu=new Ue,Iu=new ni;class Fn{constructor(e=0,t=0,i=0,r=Fn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],l=r[1],c=r[5],h=r[9],d=r[2],f=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(tn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-tn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-tn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Lu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Iu.setFromEuler(this),this.setFromQuaternion(Iu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fn.DEFAULT_ORDER="XYZ";class Jd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Xm=0;const Nu=new P,Mr=new ni,ci=new Ue,vs=new P,Sa=new P,Ym=new P,qm=new ni,Ou=new P(1,0,0),Uu=new P(0,1,0),Fu=new P(0,0,1),Bu={type:"added"},$m={type:"removed"},br={type:"childadded",child:null},zo={type:"childremoved",child:null};class Gt extends ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=aa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new P,t=new Fn,i=new ni,r=new P(1,1,1);function a(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ue},normalMatrix:{value:new Je}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Mr.setFromAxisAngle(e,t),this.quaternion.multiply(Mr),this}rotateOnWorldAxis(e,t){return Mr.setFromAxisAngle(e,t),this.quaternion.premultiply(Mr),this}rotateX(e){return this.rotateOnAxis(Ou,e)}rotateY(e){return this.rotateOnAxis(Uu,e)}rotateZ(e){return this.rotateOnAxis(Fu,e)}translateOnAxis(e,t){return Nu.copy(e).applyQuaternion(this.quaternion),this.position.add(Nu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ou,e)}translateY(e){return this.translateOnAxis(Uu,e)}translateZ(e){return this.translateOnAxis(Fu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?vs.copy(e):vs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(Sa,vs,this.up):ci.lookAt(vs,Sa,this.up),this.quaternion.setFromRotationMatrix(ci),r&&(ci.extractRotation(r.matrixWorld),Mr.setFromRotationMatrix(ci),this.quaternion.premultiply(Mr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bu),br.child=e,this.dispatchEvent(br),br.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($m),zo.child=e,this.dispatchEvent(zo),zo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bu),br.child=e,this.dispatchEvent(br),br.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,e,Ym),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,qm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];a(e.shapes,d)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(a(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),h=s(e.images),d=s(e.shapes),f=s(e.skeletons),g=s(e.animations),_=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=r,i;function s(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Gt.DEFAULT_UP=new P(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wn=new P,ui=new P,Go=new P,hi=new P,Ar=new P,Rr=new P,Hu=new P,ko=new P,Wo=new P,Vo=new P,Xo=new lt,Yo=new lt,qo=new lt;class Zn{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Wn.subVectors(e,t),r.cross(Wn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){Wn.subVectors(r,t),ui.subVectors(i,t),Go.subVectors(e,t);const s=Wn.dot(Wn),o=Wn.dot(ui),l=Wn.dot(Go),c=ui.dot(ui),h=ui.dot(Go),d=s*c-o*o;if(d===0)return a.set(0,0,0),null;const f=1/d,g=(c*l-o*h)*f,_=(s*h-o*l)*f;return a.set(1-g-_,_,g)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(e,t,i,r,a,s,o,l){return this.getBarycoord(e,t,i,r,hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,hi.x),l.addScaledVector(s,hi.y),l.addScaledVector(o,hi.z),l)}static getInterpolatedAttribute(e,t,i,r,a,s){return Xo.setScalar(0),Yo.setScalar(0),qo.setScalar(0),Xo.fromBufferAttribute(e,t),Yo.fromBufferAttribute(e,i),qo.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(Xo,a.x),s.addScaledVector(Yo,a.y),s.addScaledVector(qo,a.z),s}static isFrontFacing(e,t,i,r){return Wn.subVectors(i,t),ui.subVectors(e,t),Wn.cross(ui).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Wn.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,a){return Zn.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return Zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,a=this.c;let s,o;Ar.subVectors(r,i),Rr.subVectors(a,i),ko.subVectors(e,i);const l=Ar.dot(ko),c=Rr.dot(ko);if(l<=0&&c<=0)return t.copy(i);Wo.subVectors(e,r);const h=Ar.dot(Wo),d=Rr.dot(Wo);if(h>=0&&d<=h)return t.copy(r);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return s=l/(l-h),t.copy(i).addScaledVector(Ar,s);Vo.subVectors(e,a);const g=Ar.dot(Vo),_=Rr.dot(Vo);if(_>=0&&g<=_)return t.copy(a);const S=g*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(Rr,o);const p=h*_-g*d;if(p<=0&&d-h>=0&&g-_>=0)return Hu.subVectors(a,r),o=(d-h)/(d-h+(g-_)),t.copy(r).addScaledVector(Hu,o);const m=1/(p+S+f);return s=S*m,o=f*m,t.copy(i).addScaledVector(Ar,s).addScaledVector(Rr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Qd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},_s={h:0,s:0,l:0};function $o(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Oe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=ft.workingColorSpace){return this.r=e,this.g=t,this.b=i,ft.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=ft.workingColorSpace){if(e=Oc(e,1),t=tn(t,0,1),i=tn(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,s=2*i-a;this.r=$o(s,a,e+1/3),this.g=$o(s,a,e),this.b=$o(s,a,e-1/3)}return ft.toWorkingColorSpace(this,r),this}setStyle(e,t=It){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){const i=Qd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}copyLinearToSRGB(e){return this.r=qr(e.r),this.g=qr(e.g),this.b=qr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return ft.fromWorkingColorSpace(on.copy(this),e),Math.round(tn(on.r*255,0,255))*65536+Math.round(tn(on.g*255,0,255))*256+Math.round(tn(on.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.fromWorkingColorSpace(on.copy(this),t);const i=on.r,r=on.g,a=on.b,s=Math.max(i,r,a),o=Math.min(i,r,a);let l,c;const h=(o+s)/2;if(o===s)l=0,c=0;else{const d=s-o;switch(c=h<=.5?d/(s+o):d/(2-s-o),s){case i:l=(r-a)/d+(r<a?6:0);break;case r:l=(a-i)/d+2;break;case a:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ft.workingColorSpace){return ft.fromWorkingColorSpace(on.copy(this),t),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=It){ft.fromWorkingColorSpace(on.copy(this),e);const t=on.r,i=on.g,r=on.b;return e!==It?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ui),this.setHSL(Ui.h+e,Ui.s+t,Ui.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ui),e.getHSL(_s);const i=Ua(Ui.h,_s.h,t),r=Ua(Ui.s,_s.s,t),a=Ua(Ui.l,_s.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new Oe;Oe.NAMES=Qd;let jm=0;class Bn extends ri{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jm++}),this.uuid=aa(),this.name="",this.blending=Yr,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wl,this.blendDst=Tl,this.blendEquation=ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=$r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sr,this.stencilZFail=Sr,this.stencilZPass=Sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Yr&&(i.blending=this.blending),this.side!==Jn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==wl&&(i.blendSrc=this.blendSrc),this.blendDst!==Tl&&(i.blendDst=this.blendDst),this.blendEquation!==ar&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==$r&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Eu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Sr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Sr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Sr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ho extends Bn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=Hd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _i=Zm();function Zm(){const n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,r[l]=24,r[l|256]=24):(i[l]=31744,i[l|256]=64512,r[l]=13,r[l|256]=13)}const a=new Uint32Array(2048),s=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,a[l]=c|h}for(let l=1024;l<2048;++l)a[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)s[l]=l<<23;s[31]=1199570944,s[32]=2147483648;for(let l=33;l<63;++l)s[l]=2147483648+(l-32<<23);s[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:r,mantissaTable:a,exponentTable:s,offsetTable:o}}function Km(n){Math.abs(n)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),n=tn(n,-65504,65504),_i.floatView[0]=n;const e=_i.uint32View[0],t=e>>23&511;return _i.baseTable[t]+((e&8388607)>>_i.shiftTable[t])}function Jm(n){const e=n>>10;return _i.uint32View[0]=_i.mantissaTable[_i.offsetTable[e]+(n&1023)]+_i.exponentTable[e],_i.floatView[0]}const Zs={toHalfFloat:Km,fromHalfFloat:Jm},Ft=new P,Ss=new Ee;class dn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=wu,this.updateRanges=[],this.gpuType=rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ss.fromBufferAttribute(this,t),Ss.applyMatrix3(e),this.setXY(t,Ss.x,Ss.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Hr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=pn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hr(t,this.array)),t}setX(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hr(t,this.array)),t}setY(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hr(t,this.array)),t}setW(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),i=pn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),i=pn(i,this.array),r=pn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),i=pn(i,this.array),r=pn(r,this.array),a=pn(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wu&&(e.usage=this.usage),e}}class ef extends dn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class tf extends dn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class an extends dn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Qm=0;const In=new Ue,jo=new Gt,Cr=new P,Rn=new sa,xa=new sa,qt=new P;class Pn extends ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qm++}),this.uuid=aa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zd(e)?tf:ef)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Je().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,t,i){return In.makeTranslation(e,t,i),this.applyMatrix4(In),this}scale(e,t,i){return In.makeScale(e,t,i),this.applyMatrix4(In),this}lookAt(e){return jo.lookAt(e),jo.updateMatrix(),this.applyMatrix4(jo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,a=e.length;r<a;r++){const s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new an(i,3))}else{for(let i=0,r=t.count;i<r;i++){const a=e[i];t.setXYZ(i,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const a=t[i];Rn.setFromBufferAttribute(a),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];xa.setFromBufferAttribute(o),this.morphTargetsRelative?(qt.addVectors(Rn.min,xa.min),Rn.expandByPoint(qt),qt.addVectors(Rn.max,xa.max),Rn.expandByPoint(qt)):(Rn.expandByPoint(xa.min),Rn.expandByPoint(xa.max))}Rn.getCenter(i);let r=0;for(let a=0,s=e.count;a<s;a++)qt.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(qt));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)qt.fromBufferAttribute(o,c),l&&(Cr.fromBufferAttribute(e,c),qt.add(Cr)),r=Math.max(r,i.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let O=0;O<i.count;O++)o[O]=new P,l[O]=new P;const c=new P,h=new P,d=new P,f=new Ee,g=new Ee,_=new Ee,S=new P,p=new P;function m(O,w,E){c.fromBufferAttribute(i,O),h.fromBufferAttribute(i,w),d.fromBufferAttribute(i,E),f.fromBufferAttribute(a,O),g.fromBufferAttribute(a,w),_.fromBufferAttribute(a,E),h.sub(c),d.sub(c),g.sub(f),_.sub(f);const N=1/(g.x*_.y-_.x*g.y);isFinite(N)&&(S.copy(h).multiplyScalar(_.y).addScaledVector(d,-g.y).multiplyScalar(N),p.copy(d).multiplyScalar(g.x).addScaledVector(h,-_.x).multiplyScalar(N),o[O].add(S),o[w].add(S),o[E].add(S),l[O].add(p),l[w].add(p),l[E].add(p))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let O=0,w=R.length;O<w;++O){const E=R[O],N=E.start,G=E.count;for(let W=N,Y=N+G;W<Y;W+=3)m(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const A=new P,M=new P,H=new P,D=new P;function L(O){H.fromBufferAttribute(r,O),D.copy(H);const w=o[O];A.copy(w),A.sub(H.multiplyScalar(H.dot(w))).normalize(),M.crossVectors(D,w);const N=M.dot(l[O])<0?-1:1;s.setXYZW(O,A.x,A.y,A.z,N)}for(let O=0,w=R.length;O<w;++O){const E=R[O],N=E.start,G=E.count;for(let W=N,Y=N+G;W<Y;W+=3)L(e.getX(W+0)),L(e.getX(W+1)),L(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new dn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,g=i.count;f<g;f++)i.setXYZ(f,0,0,0);const r=new P,a=new P,s=new P,o=new P,l=new P,c=new P,h=new P,d=new P;if(e)for(let f=0,g=e.count;f<g;f+=3){const _=e.getX(f+0),S=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,S),s.fromBufferAttribute(t,p),h.subVectors(s,a),d.subVectors(r,a),h.cross(d),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,g=t.count;f<g;f+=3)r.fromBufferAttribute(t,f+0),a.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),h.subVectors(s,a),d.subVectors(r,a),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h);let g=0,_=0;for(let S=0,p=l.length;S<p;S++){o.isInterleavedBufferAttribute?g=l[S]*o.data.stride+o.offset:g=l[S]*h;for(let m=0;m<h;m++)f[_++]=c[g++]}return new dn(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,d=c.length;h<d;h++){const f=c[h],g=e(f,i);l.push(g)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const g=c[d];h.push(g.toJSON(e.data))}h.length>0&&(r[l]=h,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const a=e.morphAttributes;for(const c in a){const h=[],d=a[c];for(let f=0,g=d.length;f<g;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,h=s.length;c<h;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zu=new Ue,$i=new km,xs=new Fc,Gu=new P,ys=new P,Es=new P,ws=new P,Zo=new P,Ts=new P,ku=new P,Ms=new P;class wt extends Gt{constructor(e=new Pn,t=new ho){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){Ts.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],d=a[l];h!==0&&(Zo.fromBufferAttribute(d,e),s?Ts.addScaledVector(Zo,h):Ts.addScaledVector(Zo.sub(t),h))}t.add(Ts)}return t}raycast(e,t){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xs.copy(i.boundingSphere),xs.applyMatrix4(a),$i.copy(e.ray).recast(e.near),!(xs.containsPoint($i.origin)===!1&&($i.intersectSphere(xs,Gu)===null||$i.origin.distanceToSquared(Gu)>(e.far-e.near)**2))&&(zu.copy(a).invert(),$i.copy(e.ray).applyMatrix4(zu),!(i.boundingBox!==null&&$i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,$i)))}_computeIntersections(e,t,i){let r;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,d=a.attributes.normal,f=a.groups,g=a.drawRange;if(o!==null)if(Array.isArray(s))for(let _=0,S=f.length;_<S;_++){const p=f[_],m=s[p.materialIndex],R=Math.max(p.start,g.start),A=Math.min(o.count,Math.min(p.start+p.count,g.start+g.count));for(let M=R,H=A;M<H;M+=3){const D=o.getX(M),L=o.getX(M+1),O=o.getX(M+2);r=bs(this,m,e,i,c,h,d,D,L,O),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,g.start),S=Math.min(o.count,g.start+g.count);for(let p=_,m=S;p<m;p+=3){const R=o.getX(p),A=o.getX(p+1),M=o.getX(p+2);r=bs(this,s,e,i,c,h,d,R,A,M),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let _=0,S=f.length;_<S;_++){const p=f[_],m=s[p.materialIndex],R=Math.max(p.start,g.start),A=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let M=R,H=A;M<H;M+=3){const D=M,L=M+1,O=M+2;r=bs(this,m,e,i,c,h,d,D,L,O),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,g.start),S=Math.min(l.count,g.start+g.count);for(let p=_,m=S;p<m;p+=3){const R=p,A=p+1,M=p+2;r=bs(this,s,e,i,c,h,d,R,A,M),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function eg(n,e,t,i,r,a,s,o){let l;if(e.side===Zt?l=i.intersectTriangle(s,a,r,!0,o):l=i.intersectTriangle(r,a,s,e.side===Jn,o),l===null)return null;Ms.copy(o),Ms.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ms);return c<t.near||c>t.far?null:{distance:c,point:Ms.clone(),object:n}}function bs(n,e,t,i,r,a,s,o,l,c){n.getVertexPosition(o,ys),n.getVertexPosition(l,Es),n.getVertexPosition(c,ws);const h=eg(n,e,t,i,ys,Es,ws,ku);if(h){const d=new P;Zn.getBarycoord(ku,ys,Es,ws,d),r&&(h.uv=Zn.getInterpolatedAttribute(r,o,l,c,d,new Ee)),a&&(h.uv1=Zn.getInterpolatedAttribute(a,o,l,c,d,new Ee)),s&&(h.normal=Zn.getInterpolatedAttribute(s,o,l,c,d,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new P,materialIndex:0};Zn.getNormal(ys,Es,ws,f.normal),h.face=f,h.barycoord=d}return h}class Xi extends Pn{constructor(e=1,t=1,i=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],h=[],d=[];let f=0,g=0;_("z","y","x",-1,-1,i,t,e,s,a,0),_("z","y","x",1,-1,i,t,-e,s,a,1),_("x","z","y",1,1,e,i,t,r,s,2),_("x","z","y",1,-1,e,i,-t,r,s,3),_("x","y","z",1,-1,e,t,i,r,a,4),_("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new an(c,3)),this.setAttribute("normal",new an(h,3)),this.setAttribute("uv",new an(d,2));function _(S,p,m,R,A,M,H,D,L,O,w){const E=M/L,N=H/O,G=M/2,W=H/2,Y=D/2,ne=L+1,X=O+1;let oe=0,Z=0;const le=new P;for(let ve=0;ve<X;ve++){const De=ve*N-W;for(let Fe=0;Fe<ne;Fe++){const Ye=Fe*E-G;le[S]=Ye*R,le[p]=De*A,le[m]=Y,c.push(le.x,le.y,le.z),le[S]=0,le[p]=0,le[m]=D>0?1:-1,h.push(le.x,le.y,le.z),d.push(Fe/L),d.push(1-ve/O),oe+=1}}for(let ve=0;ve<O;ve++)for(let De=0;De<L;De++){const Fe=f+De+ne*ve,Ye=f+De+ne*(ve+1),re=f+(De+1)+ne*(ve+1),ce=f+(De+1)+ne*ve;l.push(Fe,Ye,ce),l.push(Ye,re,ce),Z+=6}o.addGroup(g,Z,w),g+=Z,f+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Jr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function mn(n){const e={};for(let t=0;t<n.length;t++){const i=Jr(n[t]);for(const r in i)e[r]=i[r]}return e}function tg(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function nf(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}const ng={clone:Jr,merge:mn};var ig=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nt extends Bn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ig,this.fragmentShader=rg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Jr(e.uniforms),this.uniformsGroups=tg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Za extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=yi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fi=new P,Wu=new Ee,Vu=new Ee;class Dn extends Za{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Wa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Oa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wa*2*Math.atan(Math.tan(Oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z)}getViewSize(e,t){return this.getViewBounds(e,Wu,Vu),t.subVectors(Vu,Wu)}setViewOffset(e,t,i,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Oa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*r/l,t-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Dr=-90,Pr=1;class ag extends Gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Dn(Dr,Pr,e,t);r.layers=this.layers,this.add(r);const a=new Dn(Dr,Pr,e,t);a.layers=this.layers,this.add(a);const s=new Dn(Dr,Pr,e,t);s.layers=this.layers,this.add(s);const o=new Dn(Dr,Pr,e,t);o.layers=this.layers,this.add(o);const l=new Dn(Dr,Pr,e,t);l.layers=this.layers,this.add(l);const c=new Dn(Dr,Pr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,a,s,o,l]=t;for(const c of t)this.remove(c);if(e===yi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===js)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,a),e.setRenderTarget(i,1,r),e.render(t,s),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(d,f,g),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class rf extends Ht{constructor(e,t,i,r,a,s,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:jr,super(e,t,i,r,a,s,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sg extends Ot{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new rf(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ze}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Xi(5,5,5),a=new Nt({name:"CubemapFromEquirect",uniforms:Jr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zt,blending:On});a.uniforms.tEquirect.value=t;const s=new wt(r,a),o=t.minFilter;return t.minFilter===xi&&(t.minFilter=Ze),new ag(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,i,r){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(a)}}const Ko=new P,og=new P,lg=new Je;class ir{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ko.subVectors(i,t).cross(og.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ko),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||lg.getNormalMatrix(e),r=this.coplanarPoint(Ko).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ji=new Fc,As=new P;class Bc{constructor(e=new ir,t=new ir,i=new ir,r=new ir,a=new ir,s=new ir){this.planes=[e,t,i,r,a,s]}set(e,t,i,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=yi){const i=this.planes,r=e.elements,a=r[0],s=r[1],o=r[2],l=r[3],c=r[4],h=r[5],d=r[6],f=r[7],g=r[8],_=r[9],S=r[10],p=r[11],m=r[12],R=r[13],A=r[14],M=r[15];if(i[0].setComponents(l-a,f-c,p-g,M-m).normalize(),i[1].setComponents(l+a,f+c,p+g,M+m).normalize(),i[2].setComponents(l+s,f+h,p+_,M+R).normalize(),i[3].setComponents(l-s,f-h,p-_,M-R).normalize(),i[4].setComponents(l-o,f-d,p-S,M-A).normalize(),t===yi)i[5].setComponents(l+o,f+d,p+S,M+A).normalize();else if(t===js)i[5].setComponents(o,d,S,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(e){return ji.center.set(0,0,0),ji.radius=.7071067811865476,ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(As.x=r.normal.x>0?e.max.x:e.min.x,As.y=r.normal.y>0?e.max.y:e.min.y,As.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(As)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function af(){let n=null,e=!1,t=null,i=null;function r(a,s){t(a,s),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function cg(n){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),o.onUploadCallback();let g;if(c instanceof Float32Array)g=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=n.HALF_FLOAT:g=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=n.SHORT;else if(c instanceof Uint32Array)g=n.UNSIGNED_INT;else if(c instanceof Int32Array)g=n.INT;else if(c instanceof Int8Array)g=n.BYTE;else if(c instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,h);else{d.sort((g,_)=>g.start-_.start);let f=0;for(let g=1;g<d.length;g++){const _=d[f],S=d[g];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++f,d[f]=S)}d.length=f+1;for(let g=0,_=d.length;g<_;g++){const S=d[g];n.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:a,update:s}}class wn extends Pn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const a=e/2,s=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,d=e/o,f=t/l,g=[],_=[],S=[],p=[];for(let m=0;m<h;m++){const R=m*f-s;for(let A=0;A<c;A++){const M=A*d-a;_.push(M,-R,0),S.push(0,0,1),p.push(A/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let R=0;R<o;R++){const A=R+c*m,M=R+c*(m+1),H=R+1+c*(m+1),D=R+1+c*m;g.push(A,M,D),g.push(M,H,D)}this.setIndex(g),this.setAttribute("position",new an(_,3)),this.setAttribute("normal",new an(S,3)),this.setAttribute("uv",new an(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wn(e.width,e.height,e.widthSegments,e.heightSegments)}}var ug=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_g=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Sg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Eg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Tg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Mg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,bg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ag=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Lg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ig=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ng=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Og=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ug=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Wg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Xg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$g=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Jg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,e0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,t0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,n0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,i0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,r0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,a0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,s0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,o0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,l0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,c0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,u0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,h0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,d0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,f0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,g0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,v0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,S0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,y0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,E0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,w0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,T0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,b0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,R0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,C0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,L0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,I0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,N0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,O0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,U0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,F0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,B0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,H0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,z0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,G0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,k0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,W0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,V0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,X0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Y0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,q0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,j0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Z0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,K0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,J0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Q0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ev=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,iv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,av=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ov=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,lv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_v=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Sv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ev=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Tv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Av=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Rv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Dv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Pv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Nv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ov=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Bv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tt={alphahash_fragment:ug,alphahash_pars_fragment:hg,alphamap_fragment:dg,alphamap_pars_fragment:fg,alphatest_fragment:pg,alphatest_pars_fragment:mg,aomap_fragment:gg,aomap_pars_fragment:vg,batching_pars_vertex:_g,batching_vertex:Sg,begin_vertex:xg,beginnormal_vertex:yg,bsdfs:Eg,iridescence_fragment:wg,bumpmap_pars_fragment:Tg,clipping_planes_fragment:Mg,clipping_planes_pars_fragment:bg,clipping_planes_pars_vertex:Ag,clipping_planes_vertex:Rg,color_fragment:Cg,color_pars_fragment:Dg,color_pars_vertex:Pg,color_vertex:Lg,common:Ig,cube_uv_reflection_fragment:Ng,defaultnormal_vertex:Og,displacementmap_pars_vertex:Ug,displacementmap_vertex:Fg,emissivemap_fragment:Bg,emissivemap_pars_fragment:Hg,colorspace_fragment:zg,colorspace_pars_fragment:Gg,envmap_fragment:kg,envmap_common_pars_fragment:Wg,envmap_pars_fragment:Vg,envmap_pars_vertex:Xg,envmap_physical_pars_fragment:n0,envmap_vertex:Yg,fog_vertex:qg,fog_pars_vertex:$g,fog_fragment:jg,fog_pars_fragment:Zg,gradientmap_pars_fragment:Kg,lightmap_pars_fragment:Jg,lights_lambert_fragment:Qg,lights_lambert_pars_fragment:e0,lights_pars_begin:t0,lights_toon_fragment:i0,lights_toon_pars_fragment:r0,lights_phong_fragment:a0,lights_phong_pars_fragment:s0,lights_physical_fragment:o0,lights_physical_pars_fragment:l0,lights_fragment_begin:c0,lights_fragment_maps:u0,lights_fragment_end:h0,logdepthbuf_fragment:d0,logdepthbuf_pars_fragment:f0,logdepthbuf_pars_vertex:p0,logdepthbuf_vertex:m0,map_fragment:g0,map_pars_fragment:v0,map_particle_fragment:_0,map_particle_pars_fragment:S0,metalnessmap_fragment:x0,metalnessmap_pars_fragment:y0,morphinstance_vertex:E0,morphcolor_vertex:w0,morphnormal_vertex:T0,morphtarget_pars_vertex:M0,morphtarget_vertex:b0,normal_fragment_begin:A0,normal_fragment_maps:R0,normal_pars_fragment:C0,normal_pars_vertex:D0,normal_vertex:P0,normalmap_pars_fragment:L0,clearcoat_normal_fragment_begin:I0,clearcoat_normal_fragment_maps:N0,clearcoat_pars_fragment:O0,iridescence_pars_fragment:U0,opaque_fragment:F0,packing:B0,premultiplied_alpha_fragment:H0,project_vertex:z0,dithering_fragment:G0,dithering_pars_fragment:k0,roughnessmap_fragment:W0,roughnessmap_pars_fragment:V0,shadowmap_pars_fragment:X0,shadowmap_pars_vertex:Y0,shadowmap_vertex:q0,shadowmask_pars_fragment:$0,skinbase_vertex:j0,skinning_pars_vertex:Z0,skinning_vertex:K0,skinnormal_vertex:J0,specularmap_fragment:Q0,specularmap_pars_fragment:ev,tonemapping_fragment:tv,tonemapping_pars_fragment:nv,transmission_fragment:iv,transmission_pars_fragment:rv,uv_pars_fragment:av,uv_pars_vertex:sv,uv_vertex:ov,worldpos_vertex:lv,background_vert:cv,background_frag:uv,backgroundCube_vert:hv,backgroundCube_frag:dv,cube_vert:fv,cube_frag:pv,depth_vert:mv,depth_frag:gv,distanceRGBA_vert:vv,distanceRGBA_frag:_v,equirect_vert:Sv,equirect_frag:xv,linedashed_vert:yv,linedashed_frag:Ev,meshbasic_vert:wv,meshbasic_frag:Tv,meshlambert_vert:Mv,meshlambert_frag:bv,meshmatcap_vert:Av,meshmatcap_frag:Rv,meshnormal_vert:Cv,meshnormal_frag:Dv,meshphong_vert:Pv,meshphong_frag:Lv,meshphysical_vert:Iv,meshphysical_frag:Nv,meshtoon_vert:Ov,meshtoon_frag:Uv,points_vert:Fv,points_frag:Bv,shadow_vert:Hv,shadow_frag:zv,sprite_vert:Gv,sprite_frag:kv},be={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},ti={basic:{uniforms:mn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:mn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Oe(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:mn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:mn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:mn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Oe(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:mn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:mn([be.points,be.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:mn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:mn([be.common,be.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:mn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:mn([be.sprite,be.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:mn([be.common,be.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:mn([be.lights,be.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};ti.physical={uniforms:mn([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const Rs={r:0,b:0,g:0},Zi=new Fn,Wv=new Ue;function Vv(n,e,t,i,r,a,s){const o=new Oe(0);let l=a===!0?0:1,c,h,d=null,f=0,g=null;function _(R){let A=R.isScene===!0?R.background:null;return A&&A.isTexture&&(A=(R.backgroundBlurriness>0?t:e).get(A)),A}function S(R){let A=!1;const M=_(R);M===null?m(o,l):M&&M.isColor&&(m(M,1),A=!0);const H=n.xr.getEnvironmentBlendMode();H==="additive"?i.buffers.color.setClear(0,0,0,1,s):H==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(n.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(R,A){const M=_(A);M&&(M.isCubeTexture||M.mapping===lo)?(h===void 0&&(h=new wt(new Xi(1,1,1),new Nt({name:"BackgroundCubeMaterial",uniforms:Jr(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(H,D,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Zi.copy(A.backgroundRotation),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Wv.makeRotationFromEuler(Zi)),h.material.toneMapped=ft.getTransfer(M.colorSpace)!==Tt,(d!==M||f!==M.version||g!==n.toneMapping)&&(h.material.needsUpdate=!0,d=M,f=M.version,g=n.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new wt(new wn(2,2),new Nt({name:"BackgroundMaterial",uniforms:Jr(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=ft.getTransfer(M.colorSpace)!==Tt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||f!==M.version||g!==n.toneMapping)&&(c.material.needsUpdate=!0,d=M,f=M.version,g=n.toneMapping),c.layers.enableAll(),R.unshift(c,c.geometry,c.material,0,0,null))}function m(R,A){R.getRGB(Rs,nf(n)),i.buffers.color.setClear(Rs.r,Rs.g,Rs.b,A,s)}return{getClearColor:function(){return o},setClearColor:function(R,A=1){o.set(R),l=A,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(R){l=R,m(o,l)},render:S,addToRenderList:p}}function Xv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let a=r,s=!1;function o(E,N,G,W,Y){let ne=!1;const X=d(W,G,N);a!==X&&(a=X,c(a.object)),ne=g(E,W,G,Y),ne&&_(E,W,G,Y),Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),(ne||s)&&(s=!1,M(E,N,G,W),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return n.createVertexArray()}function c(E){return n.bindVertexArray(E)}function h(E){return n.deleteVertexArray(E)}function d(E,N,G){const W=G.wireframe===!0;let Y=i[E.id];Y===void 0&&(Y={},i[E.id]=Y);let ne=Y[N.id];ne===void 0&&(ne={},Y[N.id]=ne);let X=ne[W];return X===void 0&&(X=f(l()),ne[W]=X),X}function f(E){const N=[],G=[],W=[];for(let Y=0;Y<t;Y++)N[Y]=0,G[Y]=0,W[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:G,attributeDivisors:W,object:E,attributes:{},index:null}}function g(E,N,G,W){const Y=a.attributes,ne=N.attributes;let X=0;const oe=G.getAttributes();for(const Z in oe)if(oe[Z].location>=0){const ve=Y[Z];let De=ne[Z];if(De===void 0&&(Z==="instanceMatrix"&&E.instanceMatrix&&(De=E.instanceMatrix),Z==="instanceColor"&&E.instanceColor&&(De=E.instanceColor)),ve===void 0||ve.attribute!==De||De&&ve.data!==De.data)return!0;X++}return a.attributesNum!==X||a.index!==W}function _(E,N,G,W){const Y={},ne=N.attributes;let X=0;const oe=G.getAttributes();for(const Z in oe)if(oe[Z].location>=0){let ve=ne[Z];ve===void 0&&(Z==="instanceMatrix"&&E.instanceMatrix&&(ve=E.instanceMatrix),Z==="instanceColor"&&E.instanceColor&&(ve=E.instanceColor));const De={};De.attribute=ve,ve&&ve.data&&(De.data=ve.data),Y[Z]=De,X++}a.attributes=Y,a.attributesNum=X,a.index=W}function S(){const E=a.newAttributes;for(let N=0,G=E.length;N<G;N++)E[N]=0}function p(E){m(E,0)}function m(E,N){const G=a.newAttributes,W=a.enabledAttributes,Y=a.attributeDivisors;G[E]=1,W[E]===0&&(n.enableVertexAttribArray(E),W[E]=1),Y[E]!==N&&(n.vertexAttribDivisor(E,N),Y[E]=N)}function R(){const E=a.newAttributes,N=a.enabledAttributes;for(let G=0,W=N.length;G<W;G++)N[G]!==E[G]&&(n.disableVertexAttribArray(G),N[G]=0)}function A(E,N,G,W,Y,ne,X){X===!0?n.vertexAttribIPointer(E,N,G,Y,ne):n.vertexAttribPointer(E,N,G,W,Y,ne)}function M(E,N,G,W){S();const Y=W.attributes,ne=G.getAttributes(),X=N.defaultAttributeValues;for(const oe in ne){const Z=ne[oe];if(Z.location>=0){let le=Y[oe];if(le===void 0&&(oe==="instanceMatrix"&&E.instanceMatrix&&(le=E.instanceMatrix),oe==="instanceColor"&&E.instanceColor&&(le=E.instanceColor)),le!==void 0){const ve=le.normalized,De=le.itemSize,Fe=e.get(le);if(Fe===void 0)continue;const Ye=Fe.buffer,re=Fe.type,ce=Fe.bytesPerElement,fe=re===n.INT||re===n.UNSIGNED_INT||le.gpuType===co;if(le.isInterleavedBufferAttribute){const _e=le.data,Ie=_e.stride,Ge=le.offset;if(_e.isInstancedInterleavedBuffer){for(let Ve=0;Ve<Z.locationSize;Ve++)m(Z.location+Ve,_e.meshPerAttribute);E.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Ve=0;Ve<Z.locationSize;Ve++)p(Z.location+Ve);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let Ve=0;Ve<Z.locationSize;Ve++)A(Z.location+Ve,De/Z.locationSize,re,ve,Ie*ce,(Ge+De/Z.locationSize*Ve)*ce,fe)}else{if(le.isInstancedBufferAttribute){for(let _e=0;_e<Z.locationSize;_e++)m(Z.location+_e,le.meshPerAttribute);E.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let _e=0;_e<Z.locationSize;_e++)p(Z.location+_e);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let _e=0;_e<Z.locationSize;_e++)A(Z.location+_e,De/Z.locationSize,re,ve,De*ce,De/Z.locationSize*_e*ce,fe)}}else if(X!==void 0){const ve=X[oe];if(ve!==void 0)switch(ve.length){case 2:n.vertexAttrib2fv(Z.location,ve);break;case 3:n.vertexAttrib3fv(Z.location,ve);break;case 4:n.vertexAttrib4fv(Z.location,ve);break;default:n.vertexAttrib1fv(Z.location,ve)}}}}R()}function H(){O();for(const E in i){const N=i[E];for(const G in N){const W=N[G];for(const Y in W)h(W[Y].object),delete W[Y];delete N[G]}delete i[E]}}function D(E){if(i[E.id]===void 0)return;const N=i[E.id];for(const G in N){const W=N[G];for(const Y in W)h(W[Y].object),delete W[Y];delete N[G]}delete i[E.id]}function L(E){for(const N in i){const G=i[N];if(G[E.id]===void 0)continue;const W=G[E.id];for(const Y in W)h(W[Y].object),delete W[Y];delete G[E.id]}}function O(){w(),s=!0,a!==r&&(a=r,c(a.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:O,resetDefaultState:w,dispose:H,releaseStatesOfGeometry:D,releaseStatesOfProgram:L,initAttributes:S,enableAttribute:p,disableUnusedAttributes:R}}function Yv(n,e,t){let i;function r(c){i=c}function a(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function s(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),t.update(h,i,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_];t.update(g,i,1)}function l(c,h,d,f){if(d===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<c.length;_++)s(c[_],h[_],f[_]);else{g.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,d);let _=0;for(let S=0;S<d;S++)_+=h[S]*f[S];t.update(_,i,1)}}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function qv(n,e,t,i){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(L){return!(L!==Kt&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const O=L===Bt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Jt&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==rn&&!O)}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),g=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),R=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),H=_>0,D=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:g,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:R,maxVaryings:A,maxFragmentUniforms:M,vertexTextures:H,maxSamples:D}}function $v(n){const e=this;let t=null,i=0,r=!1,a=!1;const s=new ir,o=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const g=d.length!==0||f||i!==0||r;return r=f,i=d.length,g},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,g){const _=d.clippingPlanes,S=d.clipIntersection,p=d.clipShadows,m=n.get(d);if(!r||_===null||_.length===0||a&&!p)a?h(null):c();else{const R=a?0:i,A=R*4;let M=m.clippingState||null;l.value=M,M=h(_,f,A,g);for(let H=0;H!==A;++H)M[H]=t[H];m.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,f,g,_){const S=d!==null?d.length:0;let p=null;if(S!==0){if(p=l.value,_!==!0||p===null){const m=g+S*4,R=f.matrixWorldInverse;o.getNormalMatrix(R),(p===null||p.length<m)&&(p=new Float32Array(m));for(let A=0,M=g;A!==S;++A,M+=4)s.copy(d[A]).applyMatrix4(R,o),s.normal.toArray(p,M),p[M+3]=s.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,p}}function jv(n){let e=new WeakMap;function t(s,o){return o===Pl?s.mapping=jr:o===Ll&&(s.mapping=Zr),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===Pl||o===Ll)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new sg(l.height);return c.fromEquirectangularTexture(n,s),e.set(s,c),s.addEventListener("dispose",r),t(c.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class oa extends Za{constructor(e=-1,t=1,i=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,s=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const kr=4,Xu=[.125,.215,.35,.446,.526,.582],sr=20,Jo=new oa,Yu=new Oe;let Qo=null,el=0,tl=0,nl=!1;const rr=(1+Math.sqrt(5))/2,Lr=1/rr,qu=[new P(-rr,Lr,0),new P(rr,Lr,0),new P(-Lr,0,rr),new P(Lr,0,rr),new P(0,rr,-Lr),new P(0,rr,Lr),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class $u{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Qo=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ku(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qo,el,tl),this._renderer.xr.enabled=nl,e.scissorTest=!1,Cs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===jr||e.mapping===Zr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qo=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ze,minFilter:Ze,generateMipmaps:!1,type:Bt,format:Kt,colorSpace:_n,depthBuffer:!1},r=ju(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ju(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zv(a)),this._blurMaterial=Kv(a,e,t)}return r}_compileMaterial(e){const t=new wt(this._lodPlanes[0],e);this._renderer.compile(t,Jo)}_sceneToCubeUV(e,t,i,r){const o=new Dn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Yu),h.toneMapping=Ei,h.autoClear=!1;const g=new ho({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1}),_=new wt(new Xi,g);let S=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,S=!0):(g.color.copy(Yu),S=!0);for(let m=0;m<6;m++){const R=m%3;R===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):R===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const A=this._cubeSize;Cs(r,R*A,m>2?A:0,A,A),h.setRenderTarget(r),S&&h.render(_,o),h.render(e,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===jr||e.mapping===Zr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ku()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zu());const a=r?this._cubemapMaterial:this._equirectMaterial,s=new wt(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;Cs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(s,Jo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=qu[(r-a-1)%qu.length];this._blur(e,a-1,a,s,o)}t.autoClear=i}_blur(e,t,i,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",a),this._halfBlur(s,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new wt(this._lodPlanes[r],c),f=c.uniforms,g=this._sizeLods[i]-1,_=isFinite(a)?Math.PI/(2*g):2*Math.PI/(2*sr-1),S=a/_,p=isFinite(a)?1+Math.floor(h*S):sr;p>sr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${sr}`);const m=[];let R=0;for(let L=0;L<sr;++L){const O=L/S,w=Math.exp(-O*O/2);m.push(w),L===0?R+=w:L<p&&(R+=2*w)}for(let L=0;L<m.length;L++)m[L]=m[L]/R;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:A}=this;f.dTheta.value=_,f.mipInt.value=A-i;const M=this._sizeLods[r],H=3*M*(r>A-kr?r-A+kr:0),D=4*(this._cubeSize-M);Cs(t,H,D,3*M,2*M),l.setRenderTarget(t),l.render(d,Jo)}}function Zv(n){const e=[],t=[],i=[];let r=n;const a=n-kr+1+Xu.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);t.push(o);let l=1/o;s>n-kr?l=Xu[s-n+kr-1]:s===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],g=6,_=6,S=3,p=2,m=1,R=new Float32Array(S*_*g),A=new Float32Array(p*_*g),M=new Float32Array(m*_*g);for(let D=0;D<g;D++){const L=D%3*2/3-1,O=D>2?0:-1,w=[L,O,0,L+2/3,O,0,L+2/3,O+1,0,L,O,0,L+2/3,O+1,0,L,O+1,0];R.set(w,S*_*D),A.set(f,p*_*D);const E=[D,D,D,D,D,D];M.set(E,m*_*D)}const H=new Pn;H.setAttribute("position",new dn(R,S)),H.setAttribute("uv",new dn(A,p)),H.setAttribute("faceIndex",new dn(M,m)),e.push(H),r>kr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ju(n,e,t){const i=new Ot(n,e,t);return i.texture.mapping=lo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Cs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Kv(n,e,t){const i=new Float32Array(sr),r=new P(0,1,0);return new Nt({name:"SphericalGaussianBlur",defines:{n:sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Zu(){return new Nt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Ku(){return new Nt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Hc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Jv(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Pl||l===Ll,h=l===jr||l===Zr;if(c||h){let d=e.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new $u(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const g=o.image;return c&&g&&g.height>0||h&&g&&r(g)?(t===null&&(t=new $u(n)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",a),d.texture):null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function Qv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Ca("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function e_(n,e,t,i){const r={},a=new WeakMap;function s(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const S=f.morphAttributes[_];for(let p=0,m=S.length;p<m;p++)e.remove(S[p])}f.removeEventListener("dispose",s),delete r[f.id];const g=a.get(f);g&&(e.remove(g),a.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const _ in f)e.update(f[_],n.ARRAY_BUFFER);const g=d.morphAttributes;for(const _ in g){const S=g[_];for(let p=0,m=S.length;p<m;p++)e.update(S[p],n.ARRAY_BUFFER)}}function c(d){const f=[],g=d.index,_=d.attributes.position;let S=0;if(g!==null){const R=g.array;S=g.version;for(let A=0,M=R.length;A<M;A+=3){const H=R[A+0],D=R[A+1],L=R[A+2];f.push(H,D,D,L,L,H)}}else if(_!==void 0){const R=_.array;S=_.version;for(let A=0,M=R.length/3-1;A<M;A+=3){const H=A+0,D=A+1,L=A+2;f.push(H,D,D,L,L,H)}}else return;const p=new(Zd(f)?tf:ef)(f,1);p.version=S;const m=a.get(d);m&&e.remove(m),a.set(d,p)}function h(d){const f=a.get(d);if(f){const g=d.index;g!==null&&f.version<g.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function t_(n,e,t){let i;function r(f){i=f}let a,s;function o(f){a=f.type,s=f.bytesPerElement}function l(f,g){n.drawElements(i,g,a,f*s),t.update(g,i,1)}function c(f,g,_){_!==0&&(n.drawElementsInstanced(i,g,a,f*s,_),t.update(g,i,_))}function h(f,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,a,f,0,_);let p=0;for(let m=0;m<_;m++)p+=g[m];t.update(p,i,1)}function d(f,g,_,S){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/s,g[m],S[m]);else{p.multiDrawElementsInstancedWEBGL(i,g,0,a,f,0,S,0,_);let m=0;for(let R=0;R<_;R++)m+=g[R]*S[R];t.update(m,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function n_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=o*(a/3);break;case n.LINES:t.lines+=o*(a/2);break;case n.LINE_STRIP:t.lines+=o*(a-1);break;case n.LINE_LOOP:t.lines+=o*a;break;case n.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function i_(n,e,t){const i=new WeakMap,r=new lt;function a(s,o,l){const c=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let w=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],R=o.morphAttributes.color||[];let A=0;g===!0&&(A=1),_===!0&&(A=2),S===!0&&(A=3);let M=o.attributes.position.count*A,H=1;M>e.maxTextureSize&&(H=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const D=new Float32Array(M*H*4*d),L=new Uc(D,M,H,d);L.type=rn,L.needsUpdate=!0;const O=A*4;for(let E=0;E<d;E++){const N=p[E],G=m[E],W=R[E],Y=M*H*4*E;for(let ne=0;ne<N.count;ne++){const X=ne*O;g===!0&&(r.fromBufferAttribute(N,ne),D[Y+X+0]=r.x,D[Y+X+1]=r.y,D[Y+X+2]=r.z,D[Y+X+3]=0),_===!0&&(r.fromBufferAttribute(G,ne),D[Y+X+4]=r.x,D[Y+X+5]=r.y,D[Y+X+6]=r.z,D[Y+X+7]=0),S===!0&&(r.fromBufferAttribute(W,ne),D[Y+X+8]=r.x,D[Y+X+9]=r.y,D[Y+X+10]=r.z,D[Y+X+11]=W.itemSize===4?r.w:1)}}f={count:d,texture:L,size:new Ee(M,H)},i.set(o,f),o.addEventListener("dispose",w)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let g=0;for(let S=0;S<c.length;S++)g+=c[S];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:a}}function r_(n,e,t,i){let r=new WeakMap;function a(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function s(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:s}}class Ka extends Ht{constructor(e,t,i,r,a,s,o,l,c,h=ur){if(h!==ur&&h!==dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ur&&(i=Ai),i===void 0&&h===dr&&(i=hr),super(null,r,a,s,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:zt,this.minFilter=l!==void 0?l:zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const sf=new Ht,Ju=new Ka(1,1),of=new Uc,lf=new Ti,cf=new rf,Qu=[],eh=[],th=new Float32Array(16),nh=new Float32Array(9),ih=new Float32Array(4);function la(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let a=Qu[r];if(a===void 0&&(a=new Float32Array(r),Qu[r]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,n[s].toArray(a,o)}return a}function kt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function fo(n,e){let t=eh[e];t===void 0&&(t=new Int32Array(e),eh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function a_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function s_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2fv(this.addr,e),Wt(t,e)}}function o_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;n.uniform3fv(this.addr,e),Wt(t,e)}}function l_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4fv(this.addr,e),Wt(t,e)}}function c_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(kt(t,i))return;ih.set(i),n.uniformMatrix2fv(this.addr,!1,ih),Wt(t,i)}}function u_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(kt(t,i))return;nh.set(i),n.uniformMatrix3fv(this.addr,!1,nh),Wt(t,i)}}function h_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(kt(t,i))return;th.set(i),n.uniformMatrix4fv(this.addr,!1,th),Wt(t,i)}}function d_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function f_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2iv(this.addr,e),Wt(t,e)}}function p_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3iv(this.addr,e),Wt(t,e)}}function m_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4iv(this.addr,e),Wt(t,e)}}function g_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function v_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2uiv(this.addr,e),Wt(t,e)}}function __(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3uiv(this.addr,e),Wt(t,e)}}function S_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4uiv(this.addr,e),Wt(t,e)}}function x_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let a;this.type===n.SAMPLER_2D_SHADOW?(Ju.compareFunction=jd,a=Ju):a=sf,t.setTexture2D(e||a,r)}function y_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||lf,r)}function E_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||cf,r)}function w_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||of,r)}function T_(n){switch(n){case 5126:return a_;case 35664:return s_;case 35665:return o_;case 35666:return l_;case 35674:return c_;case 35675:return u_;case 35676:return h_;case 5124:case 35670:return d_;case 35667:case 35671:return f_;case 35668:case 35672:return p_;case 35669:case 35673:return m_;case 5125:return g_;case 36294:return v_;case 36295:return __;case 36296:return S_;case 35678:case 36198:case 36298:case 36306:case 35682:return x_;case 35679:case 36299:case 36307:return y_;case 35680:case 36300:case 36308:case 36293:return E_;case 36289:case 36303:case 36311:case 36292:return w_}}function M_(n,e){n.uniform1fv(this.addr,e)}function b_(n,e){const t=la(e,this.size,2);n.uniform2fv(this.addr,t)}function A_(n,e){const t=la(e,this.size,3);n.uniform3fv(this.addr,t)}function R_(n,e){const t=la(e,this.size,4);n.uniform4fv(this.addr,t)}function C_(n,e){const t=la(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function D_(n,e){const t=la(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function P_(n,e){const t=la(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function L_(n,e){n.uniform1iv(this.addr,e)}function I_(n,e){n.uniform2iv(this.addr,e)}function N_(n,e){n.uniform3iv(this.addr,e)}function O_(n,e){n.uniform4iv(this.addr,e)}function U_(n,e){n.uniform1uiv(this.addr,e)}function F_(n,e){n.uniform2uiv(this.addr,e)}function B_(n,e){n.uniform3uiv(this.addr,e)}function H_(n,e){n.uniform4uiv(this.addr,e)}function z_(n,e,t){const i=this.cache,r=e.length,a=fo(t,r);kt(i,a)||(n.uniform1iv(this.addr,a),Wt(i,a));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||sf,a[s])}function G_(n,e,t){const i=this.cache,r=e.length,a=fo(t,r);kt(i,a)||(n.uniform1iv(this.addr,a),Wt(i,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||lf,a[s])}function k_(n,e,t){const i=this.cache,r=e.length,a=fo(t,r);kt(i,a)||(n.uniform1iv(this.addr,a),Wt(i,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||cf,a[s])}function W_(n,e,t){const i=this.cache,r=e.length,a=fo(t,r);kt(i,a)||(n.uniform1iv(this.addr,a),Wt(i,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||of,a[s])}function V_(n){switch(n){case 5126:return M_;case 35664:return b_;case 35665:return A_;case 35666:return R_;case 35674:return C_;case 35675:return D_;case 35676:return P_;case 5124:case 35670:return L_;case 35667:case 35671:return I_;case 35668:case 35672:return N_;case 35669:case 35673:return O_;case 5125:return U_;case 36294:return F_;case 36295:return B_;case 36296:return H_;case 35678:case 36198:case 36298:case 36306:case 35682:return z_;case 35679:case 36299:case 36307:return G_;case 35680:case 36300:case 36308:case 36293:return k_;case 36289:case 36303:case 36311:case 36292:return W_}}class X_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=T_(t.type)}}class Y_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=V_(t.type)}}class q_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,t[o.id],i)}}}const il=/(\w+)(\])?(\[|\.)?/g;function rh(n,e){n.seq.push(e),n.map[e.id]=e}function $_(n,e,t){const i=n.name,r=i.length;for(il.lastIndex=0;;){const a=il.exec(i),s=il.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===r){rh(t,c===void 0?new X_(o,n,e):new Y_(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new q_(o),rh(t,d)),t=d}}}class Xs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(t,r),s=e.getUniformLocation(t,a.name);$_(a,s,this)}}setValue(e,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&i.push(s)}return i}}function ah(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const j_=37297;let Z_=0;function K_(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}const sh=new Je;function J_(n){ft._getMatrix(sh,ft.workingColorSpace,n);const e=`mat3( ${sh.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(n)){case uo:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function oh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+K_(n.getShaderSource(e),s)}else return r}function Q_(n,e){const t=J_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function eS(n,e){let t;switch(e){case em:t="Linear";break;case tm:t="Reinhard";break;case nm:t="Cineon";break;case zd:t="ACESFilmic";break;case rm:t="AgX";break;case am:t="Neutral";break;case im:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ds=new P;function tS(){ft.getLuminanceCoefficients(Ds);const n=Ds.x.toFixed(4),e=Ds.y.toFixed(4),t=Ds.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Da).join(`
`)}function iS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function rS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=n.getActiveAttrib(e,r),s=a.name;let o=1;a.type===n.FLOAT_MAT2&&(o=2),a.type===n.FLOAT_MAT3&&(o=3),a.type===n.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:n.getAttribLocation(e,s),locationSize:o}}return t}function Da(n){return n!==""}function lh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ch(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aS=/^[ \t]*#include +<([\w\d./]+)>/gm;function sc(n){return n.replace(aS,oS)}const sS=new Map;function oS(n,e){let t=tt[e];if(t===void 0){const i=sS.get(e);if(i!==void 0)t=tt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return sc(t)}const lS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uh(n){return n.replace(lS,cS)}function cS(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function hh(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function uS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===bc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===qs?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===mi&&(e="SHADOWMAP_TYPE_VSM"),e}function hS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case jr:case Zr:e="ENVMAP_TYPE_CUBE";break;case lo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function dS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Zr:e="ENVMAP_MODE_REFRACTION";break}return e}function fS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Hd:e="ENVMAP_BLENDING_MULTIPLY";break;case Jp:e="ENVMAP_BLENDING_MIX";break;case Qp:e="ENVMAP_BLENDING_ADD";break}return e}function pS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function mS(n,e,t,i){const r=n.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=uS(t),c=hS(t),h=dS(t),d=fS(t),f=pS(t),g=nS(t),_=iS(a),S=r.createProgram();let p,m,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Da).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Da).join(`
`),m.length>0&&(m+=`
`)):(p=[hh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Da).join(`
`),m=[hh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ei?"#define TONE_MAPPING":"",t.toneMapping!==Ei?tt.tonemapping_pars_fragment:"",t.toneMapping!==Ei?eS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,Q_("linearToOutputTexel",t.outputColorSpace),tS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Da).join(`
`)),s=sc(s),s=lh(s,t),s=ch(s,t),o=sc(o),o=lh(o,t),o=ch(o,t),s=uh(s),o=uh(o),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,p=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Vi?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vi?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const A=R+p+s,M=R+m+o,H=ah(r,r.VERTEX_SHADER,A),D=ah(r,r.FRAGMENT_SHADER,M);r.attachShader(S,H),r.attachShader(S,D),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function L(N){if(n.debug.checkShaderErrors){const G=r.getProgramInfoLog(S).trim(),W=r.getShaderInfoLog(H).trim(),Y=r.getShaderInfoLog(D).trim();let ne=!0,X=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(ne=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,S,H,D);else{const oe=oh(r,H,"vertex"),Z=oh(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+G+`
`+oe+`
`+Z)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(W===""||Y==="")&&(X=!1);X&&(N.diagnostics={runnable:ne,programLog:G,vertexShader:{log:W,prefix:p},fragmentShader:{log:Y,prefix:m}})}r.deleteShader(H),r.deleteShader(D),O=new Xs(r,S),w=rS(r,S)}let O;this.getUniforms=function(){return O===void 0&&L(this),O};let w;this.getAttributes=function(){return w===void 0&&L(this),w};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(S,j_)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Z_++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=H,this.fragmentShader=D,this}let gS=0;class vS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new _S(e),t.set(e,i)),i}}class _S{constructor(e){this.id=gS++,this.code=e,this.usedTimes=0}}function SS(n,e,t,i,r,a,s){const o=new Jd,l=new vS,c=new Set,h=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(w){return c.add(w),w===0?"uv":`uv${w}`}function p(w,E,N,G,W){const Y=G.fog,ne=W.geometry,X=w.isMeshStandardMaterial?G.environment:null,oe=(w.isMeshStandardMaterial?t:e).get(w.envMap||X),Z=oe&&oe.mapping===lo?oe.image.height:null,le=_[w.type];w.precision!==null&&(g=r.getMaxPrecision(w.precision),g!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));const ve=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,De=ve!==void 0?ve.length:0;let Fe=0;ne.morphAttributes.position!==void 0&&(Fe=1),ne.morphAttributes.normal!==void 0&&(Fe=2),ne.morphAttributes.color!==void 0&&(Fe=3);let Ye,re,ce,fe;if(le){const vt=ti[le];Ye=vt.vertexShader,re=vt.fragmentShader}else Ye=w.vertexShader,re=w.fragmentShader,l.update(w),ce=l.getVertexShaderID(w),fe=l.getFragmentShaderID(w);const _e=n.getRenderTarget(),Ie=n.state.buffers.depth.getReversed(),Ge=W.isInstancedMesh===!0,Ve=W.isBatchedMesh===!0,ct=!!w.map,je=!!w.matcap,xt=!!oe,z=!!w.aoMap,Vt=!!w.lightMap,it=!!w.bumpMap,Qe=!!w.normalMap,He=!!w.displacementMap,gt=!!w.emissiveMap,ke=!!w.metalnessMap,C=!!w.roughnessMap,x=w.anisotropy>0,B=w.clearcoat>0,$=w.dispersion>0,J=w.iridescence>0,Q=w.sheen>0,xe=w.transmission>0,ue=x&&!!w.anisotropyMap,Se=B&&!!w.clearcoatMap,ze=B&&!!w.clearcoatNormalMap,se=B&&!!w.clearcoatRoughnessMap,Te=J&&!!w.iridescenceMap,Re=J&&!!w.iridescenceThicknessMap,Pe=Q&&!!w.sheenColorMap,we=Q&&!!w.sheenRoughnessMap,Be=!!w.specularMap,Ne=!!w.specularColorMap,Le=!!w.specularIntensityMap,F=xe&&!!w.transmissionMap,K=xe&&!!w.thicknessMap,te=!!w.gradientMap,ae=!!w.alphaMap,Ae=w.alphaTest>0,Ce=!!w.alphaHash,Ke=!!w.extensions;let Pt=Ei;w.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Pt=n.toneMapping);const Xt={shaderID:le,shaderType:w.type,shaderName:w.name,vertexShader:Ye,fragmentShader:re,defines:w.defines,customVertexShaderID:ce,customFragmentShaderID:fe,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,batching:Ve,batchingColor:Ve&&W._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&W.instanceColor!==null,instancingMorph:Ge&&W.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:_e===null?n.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:_n,alphaToCoverage:!!w.alphaToCoverage,map:ct,matcap:je,envMap:xt,envMapMode:xt&&oe.mapping,envMapCubeUVHeight:Z,aoMap:z,lightMap:Vt,bumpMap:it,normalMap:Qe,displacementMap:f&&He,emissiveMap:gt,normalMapObjectSpace:Qe&&w.normalMapType===lm,normalMapTangentSpace:Qe&&w.normalMapType===Nc,metalnessMap:ke,roughnessMap:C,anisotropy:x,anisotropyMap:ue,clearcoat:B,clearcoatMap:Se,clearcoatNormalMap:ze,clearcoatRoughnessMap:se,dispersion:$,iridescence:J,iridescenceMap:Te,iridescenceThicknessMap:Re,sheen:Q,sheenColorMap:Pe,sheenRoughnessMap:we,specularMap:Be,specularColorMap:Ne,specularIntensityMap:Le,transmission:xe,transmissionMap:F,thicknessMap:K,gradientMap:te,opaque:w.transparent===!1&&w.blending===Yr&&w.alphaToCoverage===!1,alphaMap:ae,alphaTest:Ae,alphaHash:Ce,combine:w.combine,mapUv:ct&&S(w.map.channel),aoMapUv:z&&S(w.aoMap.channel),lightMapUv:Vt&&S(w.lightMap.channel),bumpMapUv:it&&S(w.bumpMap.channel),normalMapUv:Qe&&S(w.normalMap.channel),displacementMapUv:He&&S(w.displacementMap.channel),emissiveMapUv:gt&&S(w.emissiveMap.channel),metalnessMapUv:ke&&S(w.metalnessMap.channel),roughnessMapUv:C&&S(w.roughnessMap.channel),anisotropyMapUv:ue&&S(w.anisotropyMap.channel),clearcoatMapUv:Se&&S(w.clearcoatMap.channel),clearcoatNormalMapUv:ze&&S(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&S(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&S(w.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&S(w.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&S(w.sheenColorMap.channel),sheenRoughnessMapUv:we&&S(w.sheenRoughnessMap.channel),specularMapUv:Be&&S(w.specularMap.channel),specularColorMapUv:Ne&&S(w.specularColorMap.channel),specularIntensityMapUv:Le&&S(w.specularIntensityMap.channel),transmissionMapUv:F&&S(w.transmissionMap.channel),thicknessMapUv:K&&S(w.thicknessMap.channel),alphaMapUv:ae&&S(w.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(Qe||x),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!ne.attributes.uv&&(ct||ae),fog:!!Y,useFog:w.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ie,skinning:W.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:Fe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:Pt,decodeVideoTexture:ct&&w.map.isVideoTexture===!0&&ft.getTransfer(w.map.colorSpace)===Tt,decodeVideoTextureEmissive:gt&&w.emissiveMap.isVideoTexture===!0&&ft.getTransfer(w.emissiveMap.colorSpace)===Tt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===cn,flipSided:w.side===Zt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ke&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ke&&w.extensions.multiDraw===!0||Ve)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Xt.vertexUv1s=c.has(1),Xt.vertexUv2s=c.has(2),Xt.vertexUv3s=c.has(3),c.clear(),Xt}function m(w){const E=[];if(w.shaderID?E.push(w.shaderID):(E.push(w.customVertexShaderID),E.push(w.customFragmentShaderID)),w.defines!==void 0)for(const N in w.defines)E.push(N),E.push(w.defines[N]);return w.isRawShaderMaterial===!1&&(R(E,w),A(E,w),E.push(n.outputColorSpace)),E.push(w.customProgramCacheKey),E.join()}function R(w,E){w.push(E.precision),w.push(E.outputColorSpace),w.push(E.envMapMode),w.push(E.envMapCubeUVHeight),w.push(E.mapUv),w.push(E.alphaMapUv),w.push(E.lightMapUv),w.push(E.aoMapUv),w.push(E.bumpMapUv),w.push(E.normalMapUv),w.push(E.displacementMapUv),w.push(E.emissiveMapUv),w.push(E.metalnessMapUv),w.push(E.roughnessMapUv),w.push(E.anisotropyMapUv),w.push(E.clearcoatMapUv),w.push(E.clearcoatNormalMapUv),w.push(E.clearcoatRoughnessMapUv),w.push(E.iridescenceMapUv),w.push(E.iridescenceThicknessMapUv),w.push(E.sheenColorMapUv),w.push(E.sheenRoughnessMapUv),w.push(E.specularMapUv),w.push(E.specularColorMapUv),w.push(E.specularIntensityMapUv),w.push(E.transmissionMapUv),w.push(E.thicknessMapUv),w.push(E.combine),w.push(E.fogExp2),w.push(E.sizeAttenuation),w.push(E.morphTargetsCount),w.push(E.morphAttributeCount),w.push(E.numDirLights),w.push(E.numPointLights),w.push(E.numSpotLights),w.push(E.numSpotLightMaps),w.push(E.numHemiLights),w.push(E.numRectAreaLights),w.push(E.numDirLightShadows),w.push(E.numPointLightShadows),w.push(E.numSpotLightShadows),w.push(E.numSpotLightShadowsWithMaps),w.push(E.numLightProbes),w.push(E.shadowMapType),w.push(E.toneMapping),w.push(E.numClippingPlanes),w.push(E.numClipIntersection),w.push(E.depthPacking)}function A(w,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reverseDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),w.push(o.mask)}function M(w){const E=_[w.type];let N;if(E){const G=ti[E];N=ng.clone(G.uniforms)}else N=w.uniforms;return N}function H(w,E){let N;for(let G=0,W=h.length;G<W;G++){const Y=h[G];if(Y.cacheKey===E){N=Y,++N.usedTimes;break}}return N===void 0&&(N=new mS(n,E,w,a),h.push(N)),N}function D(w){if(--w.usedTimes===0){const E=h.indexOf(w);h[E]=h[h.length-1],h.pop(),w.destroy()}}function L(w){l.remove(w)}function O(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:M,acquireProgram:H,releaseProgram:D,releaseShaderCache:L,programs:h,dispose:O}}function xS(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function i(s){n.delete(s)}function r(s,o,l){n.get(s)[o]=l}function a(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:a}}function yS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function dh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function fh(){const n=[];let e=0;const t=[],i=[],r=[];function a(){e=0,t.length=0,i.length=0,r.length=0}function s(d,f,g,_,S,p){let m=n[e];return m===void 0?(m={id:d.id,object:d,geometry:f,material:g,groupOrder:_,renderOrder:d.renderOrder,z:S,group:p},n[e]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=g,m.groupOrder=_,m.renderOrder=d.renderOrder,m.z=S,m.group=p),e++,m}function o(d,f,g,_,S,p){const m=s(d,f,g,_,S,p);g.transmission>0?i.push(m):g.transparent===!0?r.push(m):t.push(m)}function l(d,f,g,_,S,p){const m=s(d,f,g,_,S,p);g.transmission>0?i.unshift(m):g.transparent===!0?r.unshift(m):t.unshift(m)}function c(d,f){t.length>1&&t.sort(d||yS),i.length>1&&i.sort(f||dh),r.length>1&&r.sort(f||dh)}function h(){for(let d=e,f=n.length;d<f;d++){const g=n[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:o,unshift:l,finish:h,sort:c}}function ES(){let n=new WeakMap;function e(i,r){const a=n.get(i);let s;return a===void 0?(s=new fh,n.set(i,[s])):r>=a.length?(s=new fh,a.push(s)):s=a[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function wS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Oe};break;case"SpotLight":t={position:new P,direction:new P,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function TS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let MS=0;function bS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function AS(n){const e=new wS,t=TS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);const r=new P,a=new Ue,s=new Ue;function o(c){let h=0,d=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let g=0,_=0,S=0,p=0,m=0,R=0,A=0,M=0,H=0,D=0,L=0;c.sort(bS);for(let w=0,E=c.length;w<E;w++){const N=c[w],G=N.color,W=N.intensity,Y=N.distance,ne=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=G.r*W,d+=G.g*W,f+=G.b*W;else if(N.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(N.sh.coefficients[X],W);L++}else if(N.isDirectionalLight){const X=e.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const oe=N.shadow,Z=t.get(N);Z.shadowIntensity=oe.intensity,Z.shadowBias=oe.bias,Z.shadowNormalBias=oe.normalBias,Z.shadowRadius=oe.radius,Z.shadowMapSize=oe.mapSize,i.directionalShadow[g]=Z,i.directionalShadowMap[g]=ne,i.directionalShadowMatrix[g]=N.shadow.matrix,R++}i.directional[g]=X,g++}else if(N.isSpotLight){const X=e.get(N);X.position.setFromMatrixPosition(N.matrixWorld),X.color.copy(G).multiplyScalar(W),X.distance=Y,X.coneCos=Math.cos(N.angle),X.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),X.decay=N.decay,i.spot[S]=X;const oe=N.shadow;if(N.map&&(i.spotLightMap[H]=N.map,H++,oe.updateMatrices(N),N.castShadow&&D++),i.spotLightMatrix[S]=oe.matrix,N.castShadow){const Z=t.get(N);Z.shadowIntensity=oe.intensity,Z.shadowBias=oe.bias,Z.shadowNormalBias=oe.normalBias,Z.shadowRadius=oe.radius,Z.shadowMapSize=oe.mapSize,i.spotShadow[S]=Z,i.spotShadowMap[S]=ne,M++}S++}else if(N.isRectAreaLight){const X=e.get(N);X.color.copy(G).multiplyScalar(W),X.halfWidth.set(N.width*.5,0,0),X.halfHeight.set(0,N.height*.5,0),i.rectArea[p]=X,p++}else if(N.isPointLight){const X=e.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity),X.distance=N.distance,X.decay=N.decay,N.castShadow){const oe=N.shadow,Z=t.get(N);Z.shadowIntensity=oe.intensity,Z.shadowBias=oe.bias,Z.shadowNormalBias=oe.normalBias,Z.shadowRadius=oe.radius,Z.shadowMapSize=oe.mapSize,Z.shadowCameraNear=oe.camera.near,Z.shadowCameraFar=oe.camera.far,i.pointShadow[_]=Z,i.pointShadowMap[_]=ne,i.pointShadowMatrix[_]=N.shadow.matrix,A++}i.point[_]=X,_++}else if(N.isHemisphereLight){const X=e.get(N);X.skyColor.copy(N.color).multiplyScalar(W),X.groundColor.copy(N.groundColor).multiplyScalar(W),i.hemi[m]=X,m++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;const O=i.hash;(O.directionalLength!==g||O.pointLength!==_||O.spotLength!==S||O.rectAreaLength!==p||O.hemiLength!==m||O.numDirectionalShadows!==R||O.numPointShadows!==A||O.numSpotShadows!==M||O.numSpotMaps!==H||O.numLightProbes!==L)&&(i.directional.length=g,i.spot.length=S,i.rectArea.length=p,i.point.length=_,i.hemi.length=m,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=M+H-D,i.spotLightMap.length=H,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=L,O.directionalLength=g,O.pointLength=_,O.spotLength=S,O.rectAreaLength=p,O.hemiLength=m,O.numDirectionalShadows=R,O.numPointShadows=A,O.numSpotShadows=M,O.numSpotMaps=H,O.numLightProbes=L,i.version=MS++)}function l(c,h){let d=0,f=0,g=0,_=0,S=0;const p=h.matrixWorldInverse;for(let m=0,R=c.length;m<R;m++){const A=c[m];if(A.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),d++}else if(A.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),g++}else if(A.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(p),s.identity(),a.copy(A.matrixWorld),a.premultiply(p),s.extractRotation(a),M.halfWidth.set(A.width*.5,0,0),M.halfHeight.set(0,A.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),_++}else if(A.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(p),f++}else if(A.isHemisphereLight){const M=i.hemi[S];M.direction.setFromMatrixPosition(A.matrixWorld),M.direction.transformDirection(p),S++}}}return{setup:o,setupView:l,state:i}}function ph(n){const e=new AS(n),t=[],i=[];function r(h){c.camera=h,t.length=0,i.length=0}function a(h){t.push(h)}function s(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:s}}function RS(n){let e=new WeakMap;function t(r,a=0){const s=e.get(r);let o;return s===void 0?(o=new ph(n),e.set(r,[o])):a>=s.length?(o=new ph(n),s.push(o)):o=s[a],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class CS extends Bn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ja,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class DS extends Bn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const PS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function IS(n,e,t){let i=new Bc;const r=new Ee,a=new Ee,s=new lt,o=new CS({depthPacking:om}),l=new DS,c={},h=t.maxTextureSize,d={[Jn]:Zt,[Zt]:Jn,[cn]:cn},f=new Nt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:PS,fragmentShader:LS}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const _=new Pn;_.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new wt(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bc;let m=this.type;this.render=function(D,L,O){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||D.length===0)return;const w=n.getRenderTarget(),E=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),G=n.state;G.setBlending(On),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const W=m!==mi&&this.type===mi,Y=m===mi&&this.type!==mi;for(let ne=0,X=D.length;ne<X;ne++){const oe=D[ne],Z=oe.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;r.copy(Z.mapSize);const le=Z.getFrameExtents();if(r.multiply(le),a.copy(Z.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(a.x=Math.floor(h/le.x),r.x=a.x*le.x,Z.mapSize.x=a.x),r.y>h&&(a.y=Math.floor(h/le.y),r.y=a.y*le.y,Z.mapSize.y=a.y)),Z.map===null||W===!0||Y===!0){const De=this.type!==mi?{minFilter:zt,magFilter:zt}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Ot(r.x,r.y,De),Z.map.texture.name=oe.name+".shadowMap",Z.camera.updateProjectionMatrix()}n.setRenderTarget(Z.map),n.clear();const ve=Z.getViewportCount();for(let De=0;De<ve;De++){const Fe=Z.getViewport(De);s.set(a.x*Fe.x,a.y*Fe.y,a.x*Fe.z,a.y*Fe.w),G.viewport(s),Z.updateMatrices(oe,De),i=Z.getFrustum(),M(L,O,Z.camera,oe,this.type)}Z.isPointLightShadow!==!0&&this.type===mi&&R(Z,O),Z.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(w,E,N)};function R(D,L){const O=e.update(S);f.defines.VSM_SAMPLES!==D.blurSamples&&(f.defines.VSM_SAMPLES=D.blurSamples,g.defines.VSM_SAMPLES=D.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Ot(r.x,r.y)),f.uniforms.shadow_pass.value=D.map.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(L,null,O,f,S,null),g.uniforms.shadow_pass.value=D.mapPass.texture,g.uniforms.resolution.value=D.mapSize,g.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(L,null,O,g,S,null)}function A(D,L,O,w){let E=null;const N=O.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(N!==void 0)E=N;else if(E=O.isPointLight===!0?l:o,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const G=E.uuid,W=L.uuid;let Y=c[G];Y===void 0&&(Y={},c[G]=Y);let ne=Y[W];ne===void 0&&(ne=E.clone(),Y[W]=ne,L.addEventListener("dispose",H)),E=ne}if(E.visible=L.visible,E.wireframe=L.wireframe,w===mi?E.side=L.shadowSide!==null?L.shadowSide:L.side:E.side=L.shadowSide!==null?L.shadowSide:d[L.side],E.alphaMap=L.alphaMap,E.alphaTest=L.alphaTest,E.map=L.map,E.clipShadows=L.clipShadows,E.clippingPlanes=L.clippingPlanes,E.clipIntersection=L.clipIntersection,E.displacementMap=L.displacementMap,E.displacementScale=L.displacementScale,E.displacementBias=L.displacementBias,E.wireframeLinewidth=L.wireframeLinewidth,E.linewidth=L.linewidth,O.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const G=n.properties.get(E);G.light=O}return E}function M(D,L,O,w,E){if(D.visible===!1)return;if(D.layers.test(L.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&E===mi)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,D.matrixWorld);const W=e.update(D),Y=D.material;if(Array.isArray(Y)){const ne=W.groups;for(let X=0,oe=ne.length;X<oe;X++){const Z=ne[X],le=Y[Z.materialIndex];if(le&&le.visible){const ve=A(D,le,w,E);D.onBeforeShadow(n,D,L,O,W,ve,Z),n.renderBufferDirect(O,null,W,ve,D,Z),D.onAfterShadow(n,D,L,O,W,ve,Z)}}}else if(Y.visible){const ne=A(D,Y,w,E);D.onBeforeShadow(n,D,L,O,W,ne,null),n.renderBufferDirect(O,null,W,ne,D,null),D.onAfterShadow(n,D,L,O,W,ne,null)}}const G=D.children;for(let W=0,Y=G.length;W<Y;W++)M(G[W],L,O,w,E)}function H(D){D.target.removeEventListener("dispose",H);for(const O in c){const w=c[O],E=D.target.uuid;E in w&&(w[E].dispose(),delete w[E])}}}const NS={[Ml]:$s,[bl]:Cl,[Al]:Dl,[$r]:Rl,[$s]:Ml,[Cl]:bl,[Dl]:Al,[Rl]:$r};function OS(n,e){function t(){let F=!1;const K=new lt;let te=null;const ae=new lt(0,0,0,0);return{setMask:function(Ae){te!==Ae&&!F&&(n.colorMask(Ae,Ae,Ae,Ae),te=Ae)},setLocked:function(Ae){F=Ae},setClear:function(Ae,Ce,Ke,Pt,Xt){Xt===!0&&(Ae*=Pt,Ce*=Pt,Ke*=Pt),K.set(Ae,Ce,Ke,Pt),ae.equals(K)===!1&&(n.clearColor(Ae,Ce,Ke,Pt),ae.copy(K))},reset:function(){F=!1,te=null,ae.set(-1,0,0,0)}}}function i(){let F=!1,K=!1,te=null,ae=null,Ae=null;return{setReversed:function(Ce){if(K!==Ce){const Ke=e.get("EXT_clip_control");K?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT);const Pt=Ae;Ae=null,this.setClear(Pt)}K=Ce},getReversed:function(){return K},setTest:function(Ce){Ce?_e(n.DEPTH_TEST):Ie(n.DEPTH_TEST)},setMask:function(Ce){te!==Ce&&!F&&(n.depthMask(Ce),te=Ce)},setFunc:function(Ce){if(K&&(Ce=NS[Ce]),ae!==Ce){switch(Ce){case Ml:n.depthFunc(n.NEVER);break;case $s:n.depthFunc(n.ALWAYS);break;case bl:n.depthFunc(n.LESS);break;case $r:n.depthFunc(n.LEQUAL);break;case Al:n.depthFunc(n.EQUAL);break;case Rl:n.depthFunc(n.GEQUAL);break;case Cl:n.depthFunc(n.GREATER);break;case Dl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ae=Ce}},setLocked:function(Ce){F=Ce},setClear:function(Ce){Ae!==Ce&&(K&&(Ce=1-Ce),n.clearDepth(Ce),Ae=Ce)},reset:function(){F=!1,te=null,ae=null,Ae=null,K=!1}}}function r(){let F=!1,K=null,te=null,ae=null,Ae=null,Ce=null,Ke=null,Pt=null,Xt=null;return{setTest:function(vt){F||(vt?_e(n.STENCIL_TEST):Ie(n.STENCIL_TEST))},setMask:function(vt){K!==vt&&!F&&(n.stencilMask(vt),K=vt)},setFunc:function(vt,Mn,zn){(te!==vt||ae!==Mn||Ae!==zn)&&(n.stencilFunc(vt,Mn,zn),te=vt,ae=Mn,Ae=zn)},setOp:function(vt,Mn,zn){(Ce!==vt||Ke!==Mn||Pt!==zn)&&(n.stencilOp(vt,Mn,zn),Ce=vt,Ke=Mn,Pt=zn)},setLocked:function(vt){F=vt},setClear:function(vt){Xt!==vt&&(n.clearStencil(vt),Xt=vt)},reset:function(){F=!1,K=null,te=null,ae=null,Ae=null,Ce=null,Ke=null,Pt=null,Xt=null}}}const a=new t,s=new i,o=new r,l=new WeakMap,c=new WeakMap;let h={},d={},f=new WeakMap,g=[],_=null,S=!1,p=null,m=null,R=null,A=null,M=null,H=null,D=null,L=new Oe(0,0,0),O=0,w=!1,E=null,N=null,G=null,W=null,Y=null;const ne=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,oe=0;const Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(Z)[1]),X=oe>=1):Z.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),X=oe>=2);let le=null,ve={};const De=n.getParameter(n.SCISSOR_BOX),Fe=n.getParameter(n.VIEWPORT),Ye=new lt().fromArray(De),re=new lt().fromArray(Fe);function ce(F,K,te,ae){const Ae=new Uint8Array(4),Ce=n.createTexture();n.bindTexture(F,Ce),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ke=0;Ke<te;Ke++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(K,0,n.RGBA,1,1,ae,0,n.RGBA,n.UNSIGNED_BYTE,Ae):n.texImage2D(K+Ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ae);return Ce}const fe={};fe[n.TEXTURE_2D]=ce(n.TEXTURE_2D,n.TEXTURE_2D,1),fe[n.TEXTURE_CUBE_MAP]=ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[n.TEXTURE_2D_ARRAY]=ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),fe[n.TEXTURE_3D]=ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),_e(n.DEPTH_TEST),s.setFunc($r),it(!1),Qe(Su),_e(n.CULL_FACE),z(On);function _e(F){h[F]!==!0&&(n.enable(F),h[F]=!0)}function Ie(F){h[F]!==!1&&(n.disable(F),h[F]=!1)}function Ge(F,K){return d[F]!==K?(n.bindFramebuffer(F,K),d[F]=K,F===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=K),F===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=K),!0):!1}function Ve(F,K){let te=g,ae=!1;if(F){te=f.get(K),te===void 0&&(te=[],f.set(K,te));const Ae=F.textures;if(te.length!==Ae.length||te[0]!==n.COLOR_ATTACHMENT0){for(let Ce=0,Ke=Ae.length;Ce<Ke;Ce++)te[Ce]=n.COLOR_ATTACHMENT0+Ce;te.length=Ae.length,ae=!0}}else te[0]!==n.BACK&&(te[0]=n.BACK,ae=!0);ae&&n.drawBuffers(te)}function ct(F){return _!==F?(n.useProgram(F),_=F,!0):!1}const je={[ar]:n.FUNC_ADD,[Op]:n.FUNC_SUBTRACT,[Up]:n.FUNC_REVERSE_SUBTRACT};je[Fp]=n.MIN,je[Bp]=n.MAX;const xt={[Hp]:n.ZERO,[zp]:n.ONE,[Gp]:n.SRC_COLOR,[wl]:n.SRC_ALPHA,[qp]:n.SRC_ALPHA_SATURATE,[Xp]:n.DST_COLOR,[Wp]:n.DST_ALPHA,[kp]:n.ONE_MINUS_SRC_COLOR,[Tl]:n.ONE_MINUS_SRC_ALPHA,[Yp]:n.ONE_MINUS_DST_COLOR,[Vp]:n.ONE_MINUS_DST_ALPHA,[$p]:n.CONSTANT_COLOR,[jp]:n.ONE_MINUS_CONSTANT_COLOR,[Zp]:n.CONSTANT_ALPHA,[Kp]:n.ONE_MINUS_CONSTANT_ALPHA};function z(F,K,te,ae,Ae,Ce,Ke,Pt,Xt,vt){if(F===On){S===!0&&(Ie(n.BLEND),S=!1);return}if(S===!1&&(_e(n.BLEND),S=!0),F!==Np){if(F!==p||vt!==w){if((m!==ar||M!==ar)&&(n.blendEquation(n.FUNC_ADD),m=ar,M=ar),vt)switch(F){case Yr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case El:n.blendFunc(n.ONE,n.ONE);break;case xu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Yr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case El:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case xu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}R=null,A=null,H=null,D=null,L.set(0,0,0),O=0,p=F,w=vt}return}Ae=Ae||K,Ce=Ce||te,Ke=Ke||ae,(K!==m||Ae!==M)&&(n.blendEquationSeparate(je[K],je[Ae]),m=K,M=Ae),(te!==R||ae!==A||Ce!==H||Ke!==D)&&(n.blendFuncSeparate(xt[te],xt[ae],xt[Ce],xt[Ke]),R=te,A=ae,H=Ce,D=Ke),(Pt.equals(L)===!1||Xt!==O)&&(n.blendColor(Pt.r,Pt.g,Pt.b,Xt),L.copy(Pt),O=Xt),p=F,w=!1}function Vt(F,K){F.side===cn?Ie(n.CULL_FACE):_e(n.CULL_FACE);let te=F.side===Zt;K&&(te=!te),it(te),F.blending===Yr&&F.transparent===!1?z(On):z(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),s.setFunc(F.depthFunc),s.setTest(F.depthTest),s.setMask(F.depthWrite),a.setMask(F.colorWrite);const ae=F.stencilWrite;o.setTest(ae),ae&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),gt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?_e(n.SAMPLE_ALPHA_TO_COVERAGE):Ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function it(F){E!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),E=F)}function Qe(F){F!==Pp?(_e(n.CULL_FACE),F!==N&&(F===Su?n.cullFace(n.BACK):F===Lp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ie(n.CULL_FACE),N=F}function He(F){F!==G&&(X&&n.lineWidth(F),G=F)}function gt(F,K,te){F?(_e(n.POLYGON_OFFSET_FILL),(W!==K||Y!==te)&&(n.polygonOffset(K,te),W=K,Y=te)):Ie(n.POLYGON_OFFSET_FILL)}function ke(F){F?_e(n.SCISSOR_TEST):Ie(n.SCISSOR_TEST)}function C(F){F===void 0&&(F=n.TEXTURE0+ne-1),le!==F&&(n.activeTexture(F),le=F)}function x(F,K,te){te===void 0&&(le===null?te=n.TEXTURE0+ne-1:te=le);let ae=ve[te];ae===void 0&&(ae={type:void 0,texture:void 0},ve[te]=ae),(ae.type!==F||ae.texture!==K)&&(le!==te&&(n.activeTexture(te),le=te),n.bindTexture(F,K||fe[F]),ae.type=F,ae.texture=K)}function B(){const F=ve[le];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function $(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Q(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xe(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ue(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Se(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ze(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Te(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Re(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pe(F){Ye.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),Ye.copy(F))}function we(F){re.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),re.copy(F))}function Be(F,K){let te=c.get(K);te===void 0&&(te=new WeakMap,c.set(K,te));let ae=te.get(F);ae===void 0&&(ae=n.getUniformBlockIndex(K,F.name),te.set(F,ae))}function Ne(F,K){const ae=c.get(K).get(F);l.get(K)!==ae&&(n.uniformBlockBinding(K,ae,F.__bindingPointIndex),l.set(K,ae))}function Le(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},le=null,ve={},d={},f=new WeakMap,g=[],_=null,S=!1,p=null,m=null,R=null,A=null,M=null,H=null,D=null,L=new Oe(0,0,0),O=0,w=!1,E=null,N=null,G=null,W=null,Y=null,Ye.set(0,0,n.canvas.width,n.canvas.height),re.set(0,0,n.canvas.width,n.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:_e,disable:Ie,bindFramebuffer:Ge,drawBuffers:Ve,useProgram:ct,setBlending:z,setMaterial:Vt,setFlipSided:it,setCullFace:Qe,setLineWidth:He,setPolygonOffset:gt,setScissorTest:ke,activeTexture:C,bindTexture:x,unbindTexture:B,compressedTexImage2D:$,compressedTexImage3D:J,texImage2D:Te,texImage3D:Re,updateUBOMapping:Be,uniformBlockBinding:Ne,texStorage2D:ze,texStorage3D:se,texSubImage2D:Q,texSubImage3D:xe,compressedTexSubImage2D:ue,compressedTexSubImage3D:Se,scissor:Pe,viewport:we,reset:Le}}function mh(n,e,t,i){const r=US(i);switch(t){case Wd:return n*e;case Xd:return n*e;case Yd:return n*e*2;case ra:return n*e/r.components*r.byteLength;case Pc:return n*e/r.components*r.byteLength;case qd:return n*e*2/r.components*r.byteLength;case Lc:return n*e*2/r.components*r.byteLength;case Vd:return n*e*3/r.components*r.byteLength;case Kt:return n*e*4/r.components*r.byteLength;case Ic:return n*e*4/r.components*r.byteLength;case zs:case Gs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ks:case Ws:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ol:case Fl:return Math.max(n,16)*Math.max(e,8)/4;case Nl:case Ul:return Math.max(n,8)*Math.max(e,8)/2;case Bl:case Hl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case zl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Gl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case kl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Wl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Xl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Yl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ql:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case $l:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case jl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Zl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Kl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Jl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ql:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ec:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Vs:case tc:case nc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case $d:case ic:return Math.ceil(n/4)*Math.ceil(e/4)*8;case rc:case ac:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function US(n){switch(n){case Jt:case Ac:return{byteLength:1,components:1};case Kr:case Rc:case Bt:return{byteLength:2,components:1};case Cc:case Dc:return{byteLength:2,components:4};case Ai:case co:case rn:return{byteLength:4,components:1};case kd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function FS(n,e,t,i,r,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ee,h=new WeakMap;let d;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,x){return g?new OffscreenCanvas(C,x):Va("canvas")}function S(C,x,B){let $=1;const J=ke(C);if((J.width>B||J.height>B)&&($=B/Math.max(J.width,J.height)),$<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Q=Math.floor($*J.width),xe=Math.floor($*J.height);d===void 0&&(d=_(Q,xe));const ue=x?_(Q,xe):d;return ue.width=Q,ue.height=xe,ue.getContext("2d").drawImage(C,0,0,Q,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Q+"x"+xe+")."),ue}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function p(C){return C.generateMipmaps}function m(C){n.generateMipmap(C)}function R(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(C,x,B,$,J=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Q=x;if(x===n.RED&&(B===n.FLOAT&&(Q=n.R32F),B===n.HALF_FLOAT&&(Q=n.R16F),B===n.UNSIGNED_BYTE&&(Q=n.R8)),x===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(Q=n.R8UI),B===n.UNSIGNED_SHORT&&(Q=n.R16UI),B===n.UNSIGNED_INT&&(Q=n.R32UI),B===n.BYTE&&(Q=n.R8I),B===n.SHORT&&(Q=n.R16I),B===n.INT&&(Q=n.R32I)),x===n.RG&&(B===n.FLOAT&&(Q=n.RG32F),B===n.HALF_FLOAT&&(Q=n.RG16F),B===n.UNSIGNED_BYTE&&(Q=n.RG8)),x===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(Q=n.RG8UI),B===n.UNSIGNED_SHORT&&(Q=n.RG16UI),B===n.UNSIGNED_INT&&(Q=n.RG32UI),B===n.BYTE&&(Q=n.RG8I),B===n.SHORT&&(Q=n.RG16I),B===n.INT&&(Q=n.RG32I)),x===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),B===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),B===n.UNSIGNED_INT&&(Q=n.RGB32UI),B===n.BYTE&&(Q=n.RGB8I),B===n.SHORT&&(Q=n.RGB16I),B===n.INT&&(Q=n.RGB32I)),x===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),B===n.UNSIGNED_INT&&(Q=n.RGBA32UI),B===n.BYTE&&(Q=n.RGBA8I),B===n.SHORT&&(Q=n.RGBA16I),B===n.INT&&(Q=n.RGBA32I)),x===n.RGB&&B===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),x===n.RGBA){const xe=J?uo:ft.getTransfer($);B===n.FLOAT&&(Q=n.RGBA32F),B===n.HALF_FLOAT&&(Q=n.RGBA16F),B===n.UNSIGNED_BYTE&&(Q=xe===Tt?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function M(C,x){let B;return C?x===null||x===Ai||x===hr?B=n.DEPTH24_STENCIL8:x===rn?B=n.DEPTH32F_STENCIL8:x===Kr&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ai||x===hr?B=n.DEPTH_COMPONENT24:x===rn?B=n.DEPTH_COMPONENT32F:x===Kr&&(B=n.DEPTH_COMPONENT16),B}function H(C,x){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==zt&&C.minFilter!==Ze?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function D(C){const x=C.target;x.removeEventListener("dispose",D),O(x),x.isVideoTexture&&h.delete(x)}function L(C){const x=C.target;x.removeEventListener("dispose",L),E(x)}function O(C){const x=i.get(C);if(x.__webglInit===void 0)return;const B=C.source,$=f.get(B);if($){const J=$[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&w(C),Object.keys($).length===0&&f.delete(B)}i.remove(C)}function w(C){const x=i.get(C);n.deleteTexture(x.__webglTexture);const B=C.source,$=f.get(B);delete $[x.__cacheKey],s.memory.textures--}function E(C){const x=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(x.__webglFramebuffer[$]))for(let J=0;J<x.__webglFramebuffer[$].length;J++)n.deleteFramebuffer(x.__webglFramebuffer[$][J]);else n.deleteFramebuffer(x.__webglFramebuffer[$]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[$])}else{if(Array.isArray(x.__webglFramebuffer))for(let $=0;$<x.__webglFramebuffer.length;$++)n.deleteFramebuffer(x.__webglFramebuffer[$]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let $=0;$<x.__webglColorRenderbuffer.length;$++)x.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[$]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const B=C.textures;for(let $=0,J=B.length;$<J;$++){const Q=i.get(B[$]);Q.__webglTexture&&(n.deleteTexture(Q.__webglTexture),s.memory.textures--),i.remove(B[$])}i.remove(C)}let N=0;function G(){N=0}function W(){const C=N;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),N+=1,C}function Y(C){const x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function ne(C,x){const B=i.get(C);if(C.isVideoTexture&&He(C),C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){const $=C.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(B,C,x);return}}t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+x)}function X(C,x){const B=i.get(C);if(C.version>0&&B.__version!==C.version){re(B,C,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+x)}function oe(C,x){const B=i.get(C);if(C.version>0&&B.__version!==C.version){re(B,C,x);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+x)}function Z(C,x){const B=i.get(C);if(C.version>0&&B.__version!==C.version){ce(B,C,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+x)}const le={[Un]:n.REPEAT,[un]:n.CLAMP_TO_EDGE,[Il]:n.MIRRORED_REPEAT},ve={[zt]:n.NEAREST,[sm]:n.NEAREST_MIPMAP_NEAREST,[us]:n.NEAREST_MIPMAP_LINEAR,[Ze]:n.LINEAR,[Po]:n.LINEAR_MIPMAP_NEAREST,[xi]:n.LINEAR_MIPMAP_LINEAR},De={[cm]:n.NEVER,[mm]:n.ALWAYS,[um]:n.LESS,[jd]:n.LEQUAL,[hm]:n.EQUAL,[pm]:n.GEQUAL,[dm]:n.GREATER,[fm]:n.NOTEQUAL};function Fe(C,x){if(x.type===rn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Ze||x.magFilter===Po||x.magFilter===us||x.magFilter===xi||x.minFilter===Ze||x.minFilter===Po||x.minFilter===us||x.minFilter===xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,le[x.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,le[x.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,le[x.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,ve[x.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,ve[x.minFilter]),x.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,De[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===zt||x.minFilter!==us&&x.minFilter!==xi||x.type===rn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Ye(C,x){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",D));const $=x.source;let J=f.get($);J===void 0&&(J={},f.set($,J));const Q=Y(x);if(Q!==C.__cacheKey){J[Q]===void 0&&(J[Q]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,B=!0),J[Q].usedTimes++;const xe=J[C.__cacheKey];xe!==void 0&&(J[C.__cacheKey].usedTimes--,xe.usedTimes===0&&w(x)),C.__cacheKey=Q,C.__webglTexture=J[Q].texture}return B}function re(C,x,B){let $=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&($=n.TEXTURE_3D);const J=Ye(C,x),Q=x.source;t.bindTexture($,C.__webglTexture,n.TEXTURE0+B);const xe=i.get(Q);if(Q.version!==xe.__version||J===!0){t.activeTexture(n.TEXTURE0+B);const ue=ft.getPrimaries(ft.workingColorSpace),Se=x.colorSpace===nn?null:ft.getPrimaries(x.colorSpace),ze=x.colorSpace===nn||ue===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let se=S(x.image,!1,r.maxTextureSize);se=gt(x,se);const Te=a.convert(x.format,x.colorSpace),Re=a.convert(x.type);let Pe=A(x.internalFormat,Te,Re,x.colorSpace,x.isVideoTexture);Fe($,x);let we;const Be=x.mipmaps,Ne=x.isVideoTexture!==!0,Le=xe.__version===void 0||J===!0,F=Q.dataReady,K=H(x,se);if(x.isDepthTexture)Pe=M(x.format===dr,x.type),Le&&(Ne?t.texStorage2D(n.TEXTURE_2D,1,Pe,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,Pe,se.width,se.height,0,Te,Re,null));else if(x.isDataTexture)if(Be.length>0){Ne&&Le&&t.texStorage2D(n.TEXTURE_2D,K,Pe,Be[0].width,Be[0].height);for(let te=0,ae=Be.length;te<ae;te++)we=Be[te],Ne?F&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,we.width,we.height,Te,Re,we.data):t.texImage2D(n.TEXTURE_2D,te,Pe,we.width,we.height,0,Te,Re,we.data);x.generateMipmaps=!1}else Ne?(Le&&t.texStorage2D(n.TEXTURE_2D,K,Pe,se.width,se.height),F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,se.width,se.height,Te,Re,se.data)):t.texImage2D(n.TEXTURE_2D,0,Pe,se.width,se.height,0,Te,Re,se.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ne&&Le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,K,Pe,Be[0].width,Be[0].height,se.depth);for(let te=0,ae=Be.length;te<ae;te++)if(we=Be[te],x.format!==Kt)if(Te!==null)if(Ne){if(F)if(x.layerUpdates.size>0){const Ae=mh(we.width,we.height,x.format,x.type);for(const Ce of x.layerUpdates){const Ke=we.data.subarray(Ce*Ae/we.data.BYTES_PER_ELEMENT,(Ce+1)*Ae/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,Ce,we.width,we.height,1,Te,Ke)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,we.width,we.height,se.depth,Te,we.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,Pe,we.width,we.height,se.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?F&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,we.width,we.height,se.depth,Te,Re,we.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,Pe,we.width,we.height,se.depth,0,Te,Re,we.data)}else{Ne&&Le&&t.texStorage2D(n.TEXTURE_2D,K,Pe,Be[0].width,Be[0].height);for(let te=0,ae=Be.length;te<ae;te++)we=Be[te],x.format!==Kt?Te!==null?Ne?F&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,we.width,we.height,Te,we.data):t.compressedTexImage2D(n.TEXTURE_2D,te,Pe,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?F&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,we.width,we.height,Te,Re,we.data):t.texImage2D(n.TEXTURE_2D,te,Pe,we.width,we.height,0,Te,Re,we.data)}else if(x.isDataArrayTexture)if(Ne){if(Le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,K,Pe,se.width,se.height,se.depth),F)if(x.layerUpdates.size>0){const te=mh(se.width,se.height,x.format,x.type);for(const ae of x.layerUpdates){const Ae=se.data.subarray(ae*te/se.data.BYTES_PER_ELEMENT,(ae+1)*te/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ae,se.width,se.height,1,Te,Re,Ae)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Te,Re,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Pe,se.width,se.height,se.depth,0,Te,Re,se.data);else if(x.isData3DTexture)Ne?(Le&&t.texStorage3D(n.TEXTURE_3D,K,Pe,se.width,se.height,se.depth),F&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Te,Re,se.data)):t.texImage3D(n.TEXTURE_3D,0,Pe,se.width,se.height,se.depth,0,Te,Re,se.data);else if(x.isFramebufferTexture){if(Le)if(Ne)t.texStorage2D(n.TEXTURE_2D,K,Pe,se.width,se.height);else{let te=se.width,ae=se.height;for(let Ae=0;Ae<K;Ae++)t.texImage2D(n.TEXTURE_2D,Ae,Pe,te,ae,0,Te,Re,null),te>>=1,ae>>=1}}else if(Be.length>0){if(Ne&&Le){const te=ke(Be[0]);t.texStorage2D(n.TEXTURE_2D,K,Pe,te.width,te.height)}for(let te=0,ae=Be.length;te<ae;te++)we=Be[te],Ne?F&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,Te,Re,we):t.texImage2D(n.TEXTURE_2D,te,Pe,Te,Re,we);x.generateMipmaps=!1}else if(Ne){if(Le){const te=ke(se);t.texStorage2D(n.TEXTURE_2D,K,Pe,te.width,te.height)}F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Te,Re,se)}else t.texImage2D(n.TEXTURE_2D,0,Pe,Te,Re,se);p(x)&&m($),xe.__version=Q.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function ce(C,x,B){if(x.image.length!==6)return;const $=Ye(C,x),J=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+B);const Q=i.get(J);if(J.version!==Q.__version||$===!0){t.activeTexture(n.TEXTURE0+B);const xe=ft.getPrimaries(ft.workingColorSpace),ue=x.colorSpace===nn?null:ft.getPrimaries(x.colorSpace),Se=x.colorSpace===nn||xe===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const ze=x.isCompressedTexture||x.image[0].isCompressedTexture,se=x.image[0]&&x.image[0].isDataTexture,Te=[];for(let ae=0;ae<6;ae++)!ze&&!se?Te[ae]=S(x.image[ae],!0,r.maxCubemapSize):Te[ae]=se?x.image[ae].image:x.image[ae],Te[ae]=gt(x,Te[ae]);const Re=Te[0],Pe=a.convert(x.format,x.colorSpace),we=a.convert(x.type),Be=A(x.internalFormat,Pe,we,x.colorSpace),Ne=x.isVideoTexture!==!0,Le=Q.__version===void 0||$===!0,F=J.dataReady;let K=H(x,Re);Fe(n.TEXTURE_CUBE_MAP,x);let te;if(ze){Ne&&Le&&t.texStorage2D(n.TEXTURE_CUBE_MAP,K,Be,Re.width,Re.height);for(let ae=0;ae<6;ae++){te=Te[ae].mipmaps;for(let Ae=0;Ae<te.length;Ae++){const Ce=te[Ae];x.format!==Kt?Pe!==null?Ne?F&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae,0,0,Ce.width,Ce.height,Pe,Ce.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae,Be,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae,0,0,Ce.width,Ce.height,Pe,we,Ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae,Be,Ce.width,Ce.height,0,Pe,we,Ce.data)}}}else{if(te=x.mipmaps,Ne&&Le){te.length>0&&K++;const ae=ke(Te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,K,Be,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(se){Ne?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Te[ae].width,Te[ae].height,Pe,we,Te[ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Be,Te[ae].width,Te[ae].height,0,Pe,we,Te[ae].data);for(let Ae=0;Ae<te.length;Ae++){const Ke=te[Ae].image[ae].image;Ne?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae+1,0,0,Ke.width,Ke.height,Pe,we,Ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae+1,Be,Ke.width,Ke.height,0,Pe,we,Ke.data)}}else{Ne?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Pe,we,Te[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Be,Pe,we,Te[ae]);for(let Ae=0;Ae<te.length;Ae++){const Ce=te[Ae];Ne?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae+1,0,0,Pe,we,Ce.image[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae+1,Be,Pe,we,Ce.image[ae])}}}p(x)&&m(n.TEXTURE_CUBE_MAP),Q.__version=J.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function fe(C,x,B,$,J,Q){const xe=a.convert(B.format,B.colorSpace),ue=a.convert(B.type),Se=A(B.internalFormat,xe,ue,B.colorSpace),ze=i.get(x),se=i.get(B);if(se.__renderTarget=x,!ze.__hasExternalTextures){const Te=Math.max(1,x.width>>Q),Re=Math.max(1,x.height>>Q);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,Q,Se,Te,Re,x.depth,0,xe,ue,null):t.texImage2D(J,Q,Se,Te,Re,0,xe,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),Qe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,J,se.__webglTexture,0,it(x)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,J,se.__webglTexture,Q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function _e(C,x,B){if(n.bindRenderbuffer(n.RENDERBUFFER,C),x.depthBuffer){const $=x.depthTexture,J=$&&$.isDepthTexture?$.type:null,Q=M(x.stencilBuffer,J),xe=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=it(x);Qe(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,Q,x.width,x.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,Q,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Q,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,C)}else{const $=x.textures;for(let J=0;J<$.length;J++){const Q=$[J],xe=a.convert(Q.format,Q.colorSpace),ue=a.convert(Q.type),Se=A(Q.internalFormat,xe,ue,Q.colorSpace),ze=it(x);B&&Qe(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ze,Se,x.width,x.height):Qe(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ze,Se,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Se,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ie(C,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(x.depthTexture);$.__renderTarget=x,(!$.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),ne(x.depthTexture,0);const J=$.__webglTexture,Q=it(x);if(x.depthTexture.format===ur)Qe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(x.depthTexture.format===dr)Qe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ge(C){const x=i.get(C),B=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){const $=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),$){const J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,$.removeEventListener("dispose",J)};$.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=$}if(C.depthTexture&&!x.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ie(x.__webglFramebuffer,C)}else if(B){x.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[$]),x.__webglDepthbuffer[$]===void 0)x.__webglDepthbuffer[$]=n.createRenderbuffer(),_e(x.__webglDepthbuffer[$],C,!1);else{const J=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=x.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,Q)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),_e(x.__webglDepthbuffer,C,!1);else{const $=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,J)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ve(C,x,B){const $=i.get(C);x!==void 0&&fe($.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Ge(C)}function ct(C){const x=C.texture,B=i.get(C),$=i.get(x);C.addEventListener("dispose",L);const J=C.textures,Q=C.isWebGLCubeRenderTarget===!0,xe=J.length>1;if(xe||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=x.version,s.memory.textures++),Q){B.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[ue]=[];for(let Se=0;Se<x.mipmaps.length;Se++)B.__webglFramebuffer[ue][Se]=n.createFramebuffer()}else B.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let ue=0;ue<x.mipmaps.length;ue++)B.__webglFramebuffer[ue]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(xe)for(let ue=0,Se=J.length;ue<Se;ue++){const ze=i.get(J[ue]);ze.__webglTexture===void 0&&(ze.__webglTexture=n.createTexture(),s.memory.textures++)}if(C.samples>0&&Qe(C)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ue=0;ue<J.length;ue++){const Se=J[ue];B.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[ue]);const ze=a.convert(Se.format,Se.colorSpace),se=a.convert(Se.type),Te=A(Se.internalFormat,ze,se,Se.colorSpace,C.isXRRenderTarget===!0),Re=it(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,Te,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,B.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),_e(B.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),Fe(n.TEXTURE_CUBE_MAP,x);for(let ue=0;ue<6;ue++)if(x.mipmaps&&x.mipmaps.length>0)for(let Se=0;Se<x.mipmaps.length;Se++)fe(B.__webglFramebuffer[ue][Se],C,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Se);else fe(B.__webglFramebuffer[ue],C,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);p(x)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let ue=0,Se=J.length;ue<Se;ue++){const ze=J[ue],se=i.get(ze);t.bindTexture(n.TEXTURE_2D,se.__webglTexture),Fe(n.TEXTURE_2D,ze),fe(B.__webglFramebuffer,C,ze,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,0),p(ze)&&m(n.TEXTURE_2D)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ue=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,$.__webglTexture),Fe(ue,x),x.mipmaps&&x.mipmaps.length>0)for(let Se=0;Se<x.mipmaps.length;Se++)fe(B.__webglFramebuffer[Se],C,x,n.COLOR_ATTACHMENT0,ue,Se);else fe(B.__webglFramebuffer,C,x,n.COLOR_ATTACHMENT0,ue,0);p(x)&&m(ue),t.unbindTexture()}C.depthBuffer&&Ge(C)}function je(C){const x=C.textures;for(let B=0,$=x.length;B<$;B++){const J=x[B];if(p(J)){const Q=R(C),xe=i.get(J).__webglTexture;t.bindTexture(Q,xe),m(Q),t.unbindTexture()}}}const xt=[],z=[];function Vt(C){if(C.samples>0){if(Qe(C)===!1){const x=C.textures,B=C.width,$=C.height;let J=n.COLOR_BUFFER_BIT;const Q=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(C),ue=x.length>1;if(ue)for(let Se=0;Se<x.length;Se++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Se=0;Se<x.length;Se++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),ue){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[Se]);const ze=i.get(x[Se]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ze,0)}n.blitFramebuffer(0,0,B,$,0,0,B,$,J,n.NEAREST),l===!0&&(xt.length=0,z.length=0,xt.push(n.COLOR_ATTACHMENT0+Se),C.depthBuffer&&C.resolveDepthBuffer===!1&&(xt.push(Q),z.push(Q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,z)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,xt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let Se=0;Se<x.length;Se++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,xe.__webglColorRenderbuffer[Se]);const ze=i.get(x[Se]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,ze,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const x=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function it(C){return Math.min(r.maxSamples,C.samples)}function Qe(C){const x=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function He(C){const x=s.render.frame;h.get(C)!==x&&(h.set(C,x),C.update())}function gt(C,x){const B=C.colorSpace,$=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==_n&&B!==nn&&(ft.getTransfer(B)===Tt?($!==Kt||J!==Jt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),x}function ke(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=G,this.setTexture2D=ne,this.setTexture2DArray=X,this.setTexture3D=oe,this.setTextureCube=Z,this.rebindTextures=Ve,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=Qe}function BS(n,e){function t(i,r=nn){let a;const s=ft.getTransfer(r);if(i===Jt)return n.UNSIGNED_BYTE;if(i===Cc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Dc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===kd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ac)return n.BYTE;if(i===Rc)return n.SHORT;if(i===Kr)return n.UNSIGNED_SHORT;if(i===co)return n.INT;if(i===Ai)return n.UNSIGNED_INT;if(i===rn)return n.FLOAT;if(i===Bt)return n.HALF_FLOAT;if(i===Wd)return n.ALPHA;if(i===Vd)return n.RGB;if(i===Kt)return n.RGBA;if(i===Xd)return n.LUMINANCE;if(i===Yd)return n.LUMINANCE_ALPHA;if(i===ur)return n.DEPTH_COMPONENT;if(i===dr)return n.DEPTH_STENCIL;if(i===ra)return n.RED;if(i===Pc)return n.RED_INTEGER;if(i===qd)return n.RG;if(i===Lc)return n.RG_INTEGER;if(i===Ic)return n.RGBA_INTEGER;if(i===zs||i===Gs||i===ks||i===Ws)if(s===Tt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===zs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Gs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ks)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ws)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===zs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Gs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ks)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ws)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Nl||i===Ol||i===Ul||i===Fl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Nl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ol)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ul)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Fl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Bl||i===Hl||i===zl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Bl||i===Hl)return s===Tt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===zl)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Gl||i===kl||i===Wl||i===Vl||i===Xl||i===Yl||i===ql||i===$l||i===jl||i===Zl||i===Kl||i===Jl||i===Ql||i===ec)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Gl)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===kl)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wl)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Vl)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xl)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Yl)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ql)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$l)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===jl)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Zl)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Kl)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Jl)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ql)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ec)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Vs||i===tc||i===nc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===Vs)return s===Tt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===tc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===nc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===$d||i===ic||i===rc||i===ac)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===Vs)return a.COMPRESSED_RED_RGTC1_EXT;if(i===ic)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===rc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ac)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===hr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class HS extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Kn extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zS={type:"move"};class rl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const S of e.hand.values()){const p=t.getJointPose(S,i),m=this._getHandJoint(c,S);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),g=.02,_=.005;c.inputState.pinching&&f>g+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=g-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zS)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Kn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const GS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class WS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Ht,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Nt({vertexShader:GS,fragmentShader:kS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wt(new wn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class VS extends ri{constructor(e,t){super();const i=this;let r=null,a=1,s=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,g=null,_=null;const S=new WS,p=t.getContextAttributes();let m=null,R=null;const A=[],M=[],H=new Ee;let D=null;const L=new Dn;L.viewport=new lt;const O=new Dn;O.viewport=new lt;const w=[L,O],E=new HS;let N=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let ce=A[re];return ce===void 0&&(ce=new rl,A[re]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(re){let ce=A[re];return ce===void 0&&(ce=new rl,A[re]=ce),ce.getGripSpace()},this.getHand=function(re){let ce=A[re];return ce===void 0&&(ce=new rl,A[re]=ce),ce.getHandSpace()};function W(re){const ce=M.indexOf(re.inputSource);if(ce===-1)return;const fe=A[ce];fe!==void 0&&(fe.update(re.inputSource,re.frame,c||s),fe.dispatchEvent({type:re.type,data:re.inputSource}))}function Y(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",ne);for(let re=0;re<A.length;re++){const ce=M[re];ce!==null&&(M[re]=null,A[re].disconnect(ce))}N=null,G=null,S.reset(),e.setRenderTarget(m),g=null,f=null,d=null,r=null,R=null,Ye.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(H.width,H.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){a=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){o=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(re){c=re},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(re){if(r=re,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",ne),p.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(H),r.renderState.layers===void 0){const ce={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:a};g=new XRWebGLLayer(r,t,ce),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),R=new Ot(g.framebufferWidth,g.framebufferHeight,{format:Kt,type:Jt,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ce=null,fe=null,_e=null;p.depth&&(_e=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=p.stencil?dr:ur,fe=p.stencil?hr:Ai);const Ie={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:a};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(Ie),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),R=new Ot(f.textureWidth,f.textureHeight,{format:Kt,type:Jt,depthTexture:new Ka(f.textureWidth,f.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(o),Ye.setContext(r),Ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function ne(re){for(let ce=0;ce<re.removed.length;ce++){const fe=re.removed[ce],_e=M.indexOf(fe);_e>=0&&(M[_e]=null,A[_e].disconnect(fe))}for(let ce=0;ce<re.added.length;ce++){const fe=re.added[ce];let _e=M.indexOf(fe);if(_e===-1){for(let Ge=0;Ge<A.length;Ge++)if(Ge>=M.length){M.push(fe),_e=Ge;break}else if(M[Ge]===null){M[Ge]=fe,_e=Ge;break}if(_e===-1)break}const Ie=A[_e];Ie&&Ie.connect(fe)}}const X=new P,oe=new P;function Z(re,ce,fe){X.setFromMatrixPosition(ce.matrixWorld),oe.setFromMatrixPosition(fe.matrixWorld);const _e=X.distanceTo(oe),Ie=ce.projectionMatrix.elements,Ge=fe.projectionMatrix.elements,Ve=Ie[14]/(Ie[10]-1),ct=Ie[14]/(Ie[10]+1),je=(Ie[9]+1)/Ie[5],xt=(Ie[9]-1)/Ie[5],z=(Ie[8]-1)/Ie[0],Vt=(Ge[8]+1)/Ge[0],it=Ve*z,Qe=Ve*Vt,He=_e/(-z+Vt),gt=He*-z;if(ce.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(gt),re.translateZ(He),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),Ie[10]===-1)re.projectionMatrix.copy(ce.projectionMatrix),re.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const ke=Ve+He,C=ct+He,x=it-gt,B=Qe+(_e-gt),$=je*ct/C*ke,J=xt*ct/C*ke;re.projectionMatrix.makePerspective(x,B,$,J,ke,C),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function le(re,ce){ce===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(ce.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(r===null)return;let ce=re.near,fe=re.far;S.texture!==null&&(S.depthNear>0&&(ce=S.depthNear),S.depthFar>0&&(fe=S.depthFar)),E.near=O.near=L.near=ce,E.far=O.far=L.far=fe,(N!==E.near||G!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),N=E.near,G=E.far),L.layers.mask=re.layers.mask|2,O.layers.mask=re.layers.mask|4,E.layers.mask=L.layers.mask|O.layers.mask;const _e=re.parent,Ie=E.cameras;le(E,_e);for(let Ge=0;Ge<Ie.length;Ge++)le(Ie[Ge],_e);Ie.length===2?Z(E,L,O):E.projectionMatrix.copy(L.projectionMatrix),ve(re,E,_e)};function ve(re,ce,fe){fe===null?re.matrix.copy(ce.matrixWorld):(re.matrix.copy(fe.matrixWorld),re.matrix.invert(),re.matrix.multiply(ce.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(ce.projectionMatrix),re.projectionMatrixInverse.copy(ce.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Wa*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&g===null))return l},this.setFoveation=function(re){l=re,f!==null&&(f.fixedFoveation=re),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=re)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(E)};let De=null;function Fe(re,ce){if(h=ce.getViewerPose(c||s),_=ce,h!==null){const fe=h.views;g!==null&&(e.setRenderTargetFramebuffer(R,g.framebuffer),e.setRenderTarget(R));let _e=!1;fe.length!==E.cameras.length&&(E.cameras.length=0,_e=!0);for(let Ge=0;Ge<fe.length;Ge++){const Ve=fe[Ge];let ct=null;if(g!==null)ct=g.getViewport(Ve);else{const xt=d.getViewSubImage(f,Ve);ct=xt.viewport,Ge===0&&(e.setRenderTargetTextures(R,xt.colorTexture,f.ignoreDepthValues?void 0:xt.depthStencilTexture),e.setRenderTarget(R))}let je=w[Ge];je===void 0&&(je=new Dn,je.layers.enable(Ge),je.viewport=new lt,w[Ge]=je),je.matrix.fromArray(Ve.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(Ve.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(ct.x,ct.y,ct.width,ct.height),Ge===0&&(E.matrix.copy(je.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),_e===!0&&E.cameras.push(je)}const Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){const Ge=d.getDepthInformation(fe[0]);Ge&&Ge.isValid&&Ge.texture&&S.init(e,Ge,r.renderState)}}for(let fe=0;fe<A.length;fe++){const _e=M[fe],Ie=A[fe];_e!==null&&Ie!==void 0&&Ie.update(_e,ce,c||s)}De&&De(re,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),_=null}const Ye=new af;Ye.setAnimationLoop(Fe),this.setAnimationLoop=function(re){De=re},this.dispose=function(){}}}const Ki=new Fn,XS=new Ue;function YS(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,nf(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,R,A,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?a(p,m):m.isMeshToonMaterial?(a(p,m),d(p,m)):m.isMeshPhongMaterial?(a(p,m),h(p,m)):m.isMeshStandardMaterial?(a(p,m),f(p,m),m.isMeshPhysicalMaterial&&g(p,m,M)):m.isMeshMatcapMaterial?(a(p,m),_(p,m)):m.isMeshDepthMaterial?a(p,m):m.isMeshDistanceMaterial?(a(p,m),S(p,m)):m.isMeshNormalMaterial?a(p,m):m.isLineBasicMaterial?(s(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,R,A):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Zt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Zt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const R=e.get(m),A=R.envMap,M=R.envMapRotation;A&&(p.envMap.value=A,Ki.copy(M),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),p.envMapRotation.value.setFromMatrix4(XS.makeRotationFromEuler(Ki)),p.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function s(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,R,A){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*R,p.scale.value=A*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function g(p,m,R){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Zt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=R.texture,p.transmissionSamplerSize.value.set(R.width,R.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function S(p,m){const R=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(R.matrixWorld),p.nearDistance.value=R.shadow.camera.near,p.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function qS(n,e,t,i){let r={},a={},s=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,A){const M=A.program;i.uniformBlockBinding(R,M)}function c(R,A){let M=r[R.id];M===void 0&&(_(R),M=h(R),r[R.id]=M,R.addEventListener("dispose",p));const H=A.program;i.updateUBOMapping(R,H);const D=e.render.frame;a[R.id]!==D&&(f(R),a[R.id]=D)}function h(R){const A=d();R.__bindingPointIndex=A;const M=n.createBuffer(),H=R.__size,D=R.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,H,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,M),M}function d(){for(let R=0;R<o;R++)if(s.indexOf(R)===-1)return s.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(R){const A=r[R.id],M=R.uniforms,H=R.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let D=0,L=M.length;D<L;D++){const O=Array.isArray(M[D])?M[D]:[M[D]];for(let w=0,E=O.length;w<E;w++){const N=O[w];if(g(N,D,w,H)===!0){const G=N.__offset,W=Array.isArray(N.value)?N.value:[N.value];let Y=0;for(let ne=0;ne<W.length;ne++){const X=W[ne],oe=S(X);typeof X=="number"||typeof X=="boolean"?(N.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,G+Y,N.__data)):X.isMatrix3?(N.__data[0]=X.elements[0],N.__data[1]=X.elements[1],N.__data[2]=X.elements[2],N.__data[3]=0,N.__data[4]=X.elements[3],N.__data[5]=X.elements[4],N.__data[6]=X.elements[5],N.__data[7]=0,N.__data[8]=X.elements[6],N.__data[9]=X.elements[7],N.__data[10]=X.elements[8],N.__data[11]=0):(X.toArray(N.__data,Y),Y+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(R,A,M,H){const D=R.value,L=A+"_"+M;if(H[L]===void 0)return typeof D=="number"||typeof D=="boolean"?H[L]=D:H[L]=D.clone(),!0;{const O=H[L];if(typeof D=="number"||typeof D=="boolean"){if(O!==D)return H[L]=D,!0}else if(O.equals(D)===!1)return O.copy(D),!0}return!1}function _(R){const A=R.uniforms;let M=0;const H=16;for(let L=0,O=A.length;L<O;L++){const w=Array.isArray(A[L])?A[L]:[A[L]];for(let E=0,N=w.length;E<N;E++){const G=w[E],W=Array.isArray(G.value)?G.value:[G.value];for(let Y=0,ne=W.length;Y<ne;Y++){const X=W[Y],oe=S(X),Z=M%H,le=Z%oe.boundary,ve=Z+le;M+=le,ve!==0&&H-ve<oe.storage&&(M+=H-ve),G.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=M,M+=oe.storage}}}const D=M%H;return D>0&&(M+=H-D),R.__size=M,R.__cache={},this}function S(R){const A={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(A.boundary=4,A.storage=4):R.isVector2?(A.boundary=8,A.storage=8):R.isVector3||R.isColor?(A.boundary=16,A.storage=12):R.isVector4?(A.boundary=16,A.storage=16):R.isMatrix3?(A.boundary=48,A.storage=48):R.isMatrix4?(A.boundary=64,A.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),A}function p(R){const A=R.target;A.removeEventListener("dispose",p);const M=s.indexOf(A.__bindingPointIndex);s.splice(M,1),n.deleteBuffer(r[A.id]),delete r[A.id],delete a[A.id]}function m(){for(const R in r)n.deleteBuffer(r[R]);s=[],r={},a={}}return{bind:l,update:c,dispose:m}}class uf{constructor(e={}){const{canvas:t=Lm(),context:i=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=s;const _=new Uint32Array(4),S=new Int32Array(4);let p=null,m=null;const R=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=It,this.toneMapping=Ei,this.toneMappingExposure=1;const M=this;let H=!1,D=0,L=0,O=null,w=-1,E=null;const N=new lt,G=new lt;let W=null;const Y=new Oe(0);let ne=0,X=t.width,oe=t.height,Z=1,le=null,ve=null;const De=new lt(0,0,X,oe),Fe=new lt(0,0,X,oe);let Ye=!1;const re=new Bc;let ce=!1,fe=!1;const _e=new Ue,Ie=new Ue,Ge=new P,Ve=new lt,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function xt(){return O===null?Z:1}let z=i;function Vt(u,v){return t.getContext(u,v)}try{const u={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ia}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),z===null){const v="webgl2";if(z=Vt(v,u),z===null)throw Vt(v)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(u){throw console.error("THREE.WebGLRenderer: "+u.message),u}let it,Qe,He,gt,ke,C,x,B,$,J,Q,xe,ue,Se,ze,se,Te,Re,Pe,we,Be,Ne,Le,F;function K(){it=new Qv(z),it.init(),Ne=new BS(z,it),Qe=new qv(z,it,e,Ne),He=new OS(z,it),Qe.reverseDepthBuffer&&f&&He.buffers.depth.setReversed(!0),gt=new n_(z),ke=new xS,C=new FS(z,it,He,ke,Qe,Ne,gt),x=new jv(M),B=new Jv(M),$=new cg(z),Le=new Xv(z,$),J=new e_(z,$,gt,Le),Q=new r_(z,J,$,gt),Pe=new i_(z,Qe,C),se=new $v(ke),xe=new SS(M,x,B,it,Qe,Le,se),ue=new YS(M,ke),Se=new ES,ze=new RS(it),Re=new Vv(M,x,B,He,Q,g,l),Te=new IS(M,Q,Qe),F=new qS(z,gt,Qe,He),we=new Yv(z,it,gt),Be=new t_(z,it,gt),gt.programs=xe.programs,M.capabilities=Qe,M.extensions=it,M.properties=ke,M.renderLists=Se,M.shadowMap=Te,M.state=He,M.info=gt}K();const te=new VS(M,z);this.xr=te,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const u=it.get("WEBGL_lose_context");u&&u.loseContext()},this.forceContextRestore=function(){const u=it.get("WEBGL_lose_context");u&&u.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(u){u!==void 0&&(Z=u,this.setSize(X,oe,!1))},this.getSize=function(u){return u.set(X,oe)},this.setSize=function(u,v,y=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=u,oe=v,t.width=Math.floor(u*Z),t.height=Math.floor(v*Z),y===!0&&(t.style.width=u+"px",t.style.height=v+"px"),this.setViewport(0,0,u,v)},this.getDrawingBufferSize=function(u){return u.set(X*Z,oe*Z).floor()},this.setDrawingBufferSize=function(u,v,y){X=u,oe=v,Z=y,t.width=Math.floor(u*y),t.height=Math.floor(v*y),this.setViewport(0,0,u,v)},this.getCurrentViewport=function(u){return u.copy(N)},this.getViewport=function(u){return u.copy(De)},this.setViewport=function(u,v,y,T){u.isVector4?De.set(u.x,u.y,u.z,u.w):De.set(u,v,y,T),He.viewport(N.copy(De).multiplyScalar(Z).round())},this.getScissor=function(u){return u.copy(Fe)},this.setScissor=function(u,v,y,T){u.isVector4?Fe.set(u.x,u.y,u.z,u.w):Fe.set(u,v,y,T),He.scissor(G.copy(Fe).multiplyScalar(Z).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(u){He.setScissorTest(Ye=u)},this.setOpaqueSort=function(u){le=u},this.setTransparentSort=function(u){ve=u},this.getClearColor=function(u){return u.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(u=!0,v=!0,y=!0){let T=0;if(u){let b=!1;if(O!==null){const I=O.texture.format;b=I===Ic||I===Lc||I===Pc}if(b){const I=O.texture.type,k=I===Jt||I===Ai||I===Kr||I===hr||I===Cc||I===Dc,ee=Re.getClearColor(),V=Re.getClearAlpha(),j=ee.r,q=ee.g,ie=ee.b;k?(_[0]=j,_[1]=q,_[2]=ie,_[3]=V,z.clearBufferuiv(z.COLOR,0,_)):(S[0]=j,S[1]=q,S[2]=ie,S[3]=V,z.clearBufferiv(z.COLOR,0,S))}else T|=z.COLOR_BUFFER_BIT}v&&(T|=z.DEPTH_BUFFER_BIT),y&&(T|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(T)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),Se.dispose(),ze.dispose(),ke.dispose(),x.dispose(),B.dispose(),Q.dispose(),Le.dispose(),F.dispose(),xe.dispose(),te.dispose(),te.removeEventListener("sessionstart",as),te.removeEventListener("sessionend",ss),ai.stop()};function ae(u){u.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const u=gt.autoReset,v=Te.enabled,y=Te.autoUpdate,T=Te.needsUpdate,b=Te.type;K(),gt.autoReset=u,Te.enabled=v,Te.autoUpdate=y,Te.needsUpdate=T,Te.type=b}function Ce(u){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",u.statusMessage)}function Ke(u){const v=u.target;v.removeEventListener("dispose",Ke),Pt(v)}function Pt(u){Xt(u),ke.remove(u)}function Xt(u){const v=ke.get(u).programs;v!==void 0&&(v.forEach(function(y){xe.releaseProgram(y)}),u.isShaderMaterial&&xe.releaseShaderCache(u))}this.renderBufferDirect=function(u,v,y,T,b,I){v===null&&(v=ct);const k=b.isMesh&&b.matrixWorld.determinant()<0,ee=Do(u,v,y,T,b);He.setMaterial(T,k);let V=y.index,j=1;if(T.wireframe===!0){if(V=J.getWireframeAttribute(y),V===void 0)return;j=2}const q=y.drawRange,ie=y.attributes.position;let de=q.start*j,pe=(q.start+q.count)*j;I!==null&&(de=Math.max(de,I.start*j),pe=Math.min(pe,(I.start+I.count)*j)),V!==null?(de=Math.max(de,0),pe=Math.min(pe,V.count)):ie!=null&&(de=Math.max(de,0),pe=Math.min(pe,ie.count));const Me=pe-de;if(Me<0||Me===1/0)return;Le.setup(b,T,ee,y,V);let ye,ge=we;if(V!==null&&(ye=$.get(V),ge=Be,ge.setIndex(ye)),b.isMesh)T.wireframe===!0?(He.setLineWidth(T.wireframeLinewidth*xt()),ge.setMode(z.LINES)):ge.setMode(z.TRIANGLES);else if(b.isLine){let he=T.linewidth;he===void 0&&(he=1),He.setLineWidth(he*xt()),b.isLineSegments?ge.setMode(z.LINES):b.isLineLoop?ge.setMode(z.LINE_LOOP):ge.setMode(z.LINE_STRIP)}else b.isPoints?ge.setMode(z.POINTS):b.isSprite&&ge.setMode(z.TRIANGLES);if(b.isBatchedMesh)if(b._multiDrawInstances!==null)ge.renderMultiDrawInstances(b._multiDrawStarts,b._multiDrawCounts,b._multiDrawCount,b._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))ge.renderMultiDraw(b._multiDrawStarts,b._multiDrawCounts,b._multiDrawCount);else{const he=b._multiDrawStarts,rt=b._multiDrawCounts,We=b._multiDrawCount,At=V?$.get(V).bytesPerElement:1,pt=ke.get(T).currentProgram.getUniforms();for(let qe=0;qe<We;qe++)pt.setValue(z,"_gl_DrawID",qe),ge.render(he[qe]/At,rt[qe])}else if(b.isInstancedMesh)ge.renderInstances(de,Me,b.count);else if(y.isInstancedBufferGeometry){const he=y._maxInstanceCount!==void 0?y._maxInstanceCount:1/0,rt=Math.min(y.instanceCount,he);ge.renderInstances(de,Me,rt)}else ge.render(de,Me)};function vt(u,v,y){u.transparent===!0&&u.side===cn&&u.forceSinglePass===!1?(u.side=Zt,u.needsUpdate=!0,_r(u,v,y),u.side=Jn,u.needsUpdate=!0,_r(u,v,y),u.side=cn):_r(u,v,y)}this.compile=function(u,v,y=null){y===null&&(y=u),m=ze.get(y),m.init(v),A.push(m),y.traverseVisible(function(b){b.isLight&&b.layers.test(v.layers)&&(m.pushLight(b),b.castShadow&&m.pushShadow(b))}),u!==y&&u.traverseVisible(function(b){b.isLight&&b.layers.test(v.layers)&&(m.pushLight(b),b.castShadow&&m.pushShadow(b))}),m.setupLights();const T=new Set;return u.traverse(function(b){if(!(b.isMesh||b.isPoints||b.isLine||b.isSprite))return;const I=b.material;if(I)if(Array.isArray(I))for(let k=0;k<I.length;k++){const ee=I[k];vt(ee,y,b),T.add(ee)}else vt(I,y,b),T.add(I)}),A.pop(),m=null,T},this.compileAsync=function(u,v,y=null){const T=this.compile(u,v,y);return new Promise(b=>{function I(){if(T.forEach(function(k){ke.get(k).currentProgram.isReady()&&T.delete(k)}),T.size===0){b(u);return}setTimeout(I,10)}it.get("KHR_parallel_shader_compile")!==null?I():setTimeout(I,10)})};let Mn=null;function zn(u){Mn&&Mn(u)}function as(){ai.stop()}function ss(){ai.start()}const ai=new af;ai.setAnimationLoop(zn),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(u){Mn=u,te.setAnimationLoop(u),u===null?ai.stop():ai.start()},te.addEventListener("sessionstart",as),te.addEventListener("sessionend",ss),this.render=function(u,v){if(v!==void 0&&v.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(u.matrixWorldAutoUpdate===!0&&u.updateMatrixWorld(),v.parent===null&&v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(v),v=te.getCamera()),u.isScene===!0&&u.onBeforeRender(M,u,v,O),m=ze.get(u,A.length),m.init(v),A.push(m),Ie.multiplyMatrices(v.projectionMatrix,v.matrixWorldInverse),re.setFromProjectionMatrix(Ie),fe=this.localClippingEnabled,ce=se.init(this.clippingPlanes,fe),p=Se.get(u,R.length),p.init(),R.push(p),te.enabled===!0&&te.isPresenting===!0){const I=M.xr.getDepthSensingMesh();I!==null&&fa(I,v,-1/0,M.sortObjects)}fa(u,v,0,M.sortObjects),p.finish(),M.sortObjects===!0&&p.sort(le,ve),je=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,je&&Re.addToRenderList(p,u),this.info.render.frame++,ce===!0&&se.beginShadows();const y=m.state.shadowsArray;Te.render(y,u,v),ce===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const T=p.opaque,b=p.transmissive;if(m.setupLights(),v.isArrayCamera){const I=v.cameras;if(b.length>0)for(let k=0,ee=I.length;k<ee;k++){const V=I[k];os(T,b,u,V)}je&&Re.render(u);for(let k=0,ee=I.length;k<ee;k++){const V=I[k];pa(p,u,V,V.viewport)}}else b.length>0&&os(T,b,u,v),je&&Re.render(u),pa(p,u,v);O!==null&&(C.updateMultisampleRenderTarget(O),C.updateRenderTargetMipmap(O)),u.isScene===!0&&u.onAfterRender(M,u,v),Le.resetDefaultState(),w=-1,E=null,A.pop(),A.length>0?(m=A[A.length-1],ce===!0&&se.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,R.pop(),R.length>0?p=R[R.length-1]:p=null};function fa(u,v,y,T){if(u.visible===!1)return;if(u.layers.test(v.layers)){if(u.isGroup)y=u.renderOrder;else if(u.isLOD)u.autoUpdate===!0&&u.update(v);else if(u.isLight)m.pushLight(u),u.castShadow&&m.pushShadow(u);else if(u.isSprite){if(!u.frustumCulled||re.intersectsSprite(u)){T&&Ve.setFromMatrixPosition(u.matrixWorld).applyMatrix4(Ie);const k=Q.update(u),ee=u.material;ee.visible&&p.push(u,k,ee,y,Ve.z,null)}}else if((u.isMesh||u.isLine||u.isPoints)&&(!u.frustumCulled||re.intersectsObject(u))){const k=Q.update(u),ee=u.material;if(T&&(u.boundingSphere!==void 0?(u.boundingSphere===null&&u.computeBoundingSphere(),Ve.copy(u.boundingSphere.center)):(k.boundingSphere===null&&k.computeBoundingSphere(),Ve.copy(k.boundingSphere.center)),Ve.applyMatrix4(u.matrixWorld).applyMatrix4(Ie)),Array.isArray(ee)){const V=k.groups;for(let j=0,q=V.length;j<q;j++){const ie=V[j],de=ee[ie.materialIndex];de&&de.visible&&p.push(u,k,de,y,Ve.z,ie)}}else ee.visible&&p.push(u,k,ee,y,Ve.z,null)}}const I=u.children;for(let k=0,ee=I.length;k<ee;k++)fa(I[k],v,y,T)}function pa(u,v,y,T){const b=u.opaque,I=u.transmissive,k=u.transparent;m.setupLightsView(y),ce===!0&&se.setGlobalState(M.clippingPlanes,y),T&&He.viewport(N.copy(T)),b.length>0&&vr(b,v,y),I.length>0&&vr(I,v,y),k.length>0&&vr(k,v,y),He.buffers.depth.setTest(!0),He.buffers.depth.setMask(!0),He.buffers.color.setMask(!0),He.setPolygonOffset(!1)}function os(u,v,y,T){if((y.isScene===!0?y.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[T.id]===void 0&&(m.state.transmissionRenderTarget[T.id]=new Ot(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?Bt:Jt,minFilter:xi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace}));const I=m.state.transmissionRenderTarget[T.id],k=T.viewport||N;I.setSize(k.z,k.w);const ee=M.getRenderTarget();M.setRenderTarget(I),M.getClearColor(Y),ne=M.getClearAlpha(),ne<1&&M.setClearColor(16777215,.5),M.clear(),je&&Re.render(y);const V=M.toneMapping;M.toneMapping=Ei;const j=T.viewport;if(T.viewport!==void 0&&(T.viewport=void 0),m.setupLightsView(T),ce===!0&&se.setGlobalState(M.clippingPlanes,T),vr(u,y,T),C.updateMultisampleRenderTarget(I),C.updateRenderTargetMipmap(I),it.has("WEBGL_multisampled_render_to_texture")===!1){let q=!1;for(let ie=0,de=v.length;ie<de;ie++){const pe=v[ie],Me=pe.object,ye=pe.geometry,ge=pe.material,he=pe.group;if(ge.side===cn&&Me.layers.test(T.layers)){const rt=ge.side;ge.side=Zt,ge.needsUpdate=!0,ls(Me,y,T,ye,ge,he),ge.side=rt,ge.needsUpdate=!0,q=!0}}q===!0&&(C.updateMultisampleRenderTarget(I),C.updateRenderTargetMipmap(I))}M.setRenderTarget(ee),M.setClearColor(Y,ne),j!==void 0&&(T.viewport=j),M.toneMapping=V}function vr(u,v,y){const T=v.isScene===!0?v.overrideMaterial:null;for(let b=0,I=u.length;b<I;b++){const k=u[b],ee=k.object,V=k.geometry,j=T===null?k.material:T,q=k.group;ee.layers.test(y.layers)&&ls(ee,v,y,V,j,q)}}function ls(u,v,y,T,b,I){u.onBeforeRender(M,v,y,T,b,I),u.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,u.matrixWorld),u.normalMatrix.getNormalMatrix(u.modelViewMatrix),b.onBeforeRender(M,v,y,T,u,I),b.transparent===!0&&b.side===cn&&b.forceSinglePass===!1?(b.side=Zt,b.needsUpdate=!0,M.renderBufferDirect(y,v,T,b,u,I),b.side=Jn,b.needsUpdate=!0,M.renderBufferDirect(y,v,T,b,u,I),b.side=cn):M.renderBufferDirect(y,v,T,b,u,I),u.onAfterRender(M,v,y,T,b,I)}function _r(u,v,y){v.isScene!==!0&&(v=ct);const T=ke.get(u),b=m.state.lights,I=m.state.shadowsArray,k=b.state.version,ee=xe.getParameters(u,b.state,I,v,y),V=xe.getProgramCacheKey(ee);let j=T.programs;T.environment=u.isMeshStandardMaterial?v.environment:null,T.fog=v.fog,T.envMap=(u.isMeshStandardMaterial?B:x).get(u.envMap||T.environment),T.envMapRotation=T.environment!==null&&u.envMap===null?v.environmentRotation:u.envMapRotation,j===void 0&&(u.addEventListener("dispose",Ke),j=new Map,T.programs=j);let q=j.get(V);if(q!==void 0){if(T.currentProgram===q&&T.lightsStateVersion===k)return ga(u,ee),q}else ee.uniforms=xe.getUniforms(u),u.onBeforeCompile(ee,M),q=xe.acquireProgram(ee,V),j.set(V,q),T.uniforms=ee.uniforms;const ie=T.uniforms;return(!u.isShaderMaterial&&!u.isRawShaderMaterial||u.clipping===!0)&&(ie.clippingPlanes=se.uniform),ga(u,ee),T.needsLights=Pi(u),T.lightsStateVersion=k,T.needsLights&&(ie.ambientLightColor.value=b.state.ambient,ie.lightProbe.value=b.state.probe,ie.directionalLights.value=b.state.directional,ie.directionalLightShadows.value=b.state.directionalShadow,ie.spotLights.value=b.state.spot,ie.spotLightShadows.value=b.state.spotShadow,ie.rectAreaLights.value=b.state.rectArea,ie.ltc_1.value=b.state.rectAreaLTC1,ie.ltc_2.value=b.state.rectAreaLTC2,ie.pointLights.value=b.state.point,ie.pointLightShadows.value=b.state.pointShadow,ie.hemisphereLights.value=b.state.hemi,ie.directionalShadowMap.value=b.state.directionalShadowMap,ie.directionalShadowMatrix.value=b.state.directionalShadowMatrix,ie.spotShadowMap.value=b.state.spotShadowMap,ie.spotLightMatrix.value=b.state.spotLightMatrix,ie.spotLightMap.value=b.state.spotLightMap,ie.pointShadowMap.value=b.state.pointShadowMap,ie.pointShadowMatrix.value=b.state.pointShadowMatrix),T.currentProgram=q,T.uniformsList=null,q}function ma(u){if(u.uniformsList===null){const v=u.currentProgram.getUniforms();u.uniformsList=Xs.seqWithValue(v.seq,u.uniforms)}return u.uniformsList}function ga(u,v){const y=ke.get(u);y.outputColorSpace=v.outputColorSpace,y.batching=v.batching,y.batchingColor=v.batchingColor,y.instancing=v.instancing,y.instancingColor=v.instancingColor,y.instancingMorph=v.instancingMorph,y.skinning=v.skinning,y.morphTargets=v.morphTargets,y.morphNormals=v.morphNormals,y.morphColors=v.morphColors,y.morphTargetsCount=v.morphTargetsCount,y.numClippingPlanes=v.numClippingPlanes,y.numIntersection=v.numClipIntersection,y.vertexAlphas=v.vertexAlphas,y.vertexTangents=v.vertexTangents,y.toneMapping=v.toneMapping}function Do(u,v,y,T,b){v.isScene!==!0&&(v=ct),C.resetTextureUnits();const I=v.fog,k=T.isMeshStandardMaterial?v.environment:null,ee=O===null?M.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:_n,V=(T.isMeshStandardMaterial?B:x).get(T.envMap||k),j=T.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,q=!!y.attributes.tangent&&(!!T.normalMap||T.anisotropy>0),ie=!!y.morphAttributes.position,de=!!y.morphAttributes.normal,pe=!!y.morphAttributes.color;let Me=Ei;T.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Me=M.toneMapping);const ye=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,ge=ye!==void 0?ye.length:0,he=ke.get(T),rt=m.state.lights;if(ce===!0&&(fe===!0||u!==E)){const nt=u===E&&T.id===w;se.setState(T,u,nt)}let We=!1;T.version===he.__version?(he.needsLights&&he.lightsStateVersion!==rt.state.version||he.outputColorSpace!==ee||b.isBatchedMesh&&he.batching===!1||!b.isBatchedMesh&&he.batching===!0||b.isBatchedMesh&&he.batchingColor===!0&&b.colorTexture===null||b.isBatchedMesh&&he.batchingColor===!1&&b.colorTexture!==null||b.isInstancedMesh&&he.instancing===!1||!b.isInstancedMesh&&he.instancing===!0||b.isSkinnedMesh&&he.skinning===!1||!b.isSkinnedMesh&&he.skinning===!0||b.isInstancedMesh&&he.instancingColor===!0&&b.instanceColor===null||b.isInstancedMesh&&he.instancingColor===!1&&b.instanceColor!==null||b.isInstancedMesh&&he.instancingMorph===!0&&b.morphTexture===null||b.isInstancedMesh&&he.instancingMorph===!1&&b.morphTexture!==null||he.envMap!==V||T.fog===!0&&he.fog!==I||he.numClippingPlanes!==void 0&&(he.numClippingPlanes!==se.numPlanes||he.numIntersection!==se.numIntersection)||he.vertexAlphas!==j||he.vertexTangents!==q||he.morphTargets!==ie||he.morphNormals!==de||he.morphColors!==pe||he.toneMapping!==Me||he.morphTargetsCount!==ge)&&(We=!0):(We=!0,he.__version=T.version);let At=he.currentProgram;We===!0&&(At=_r(T,v,b));let pt=!1,qe=!1,Rt=!1;const at=At.getUniforms(),yt=he.uniforms;if(He.useProgram(At.program)&&(pt=!0,qe=!0,Rt=!0),T.id!==w&&(w=T.id,qe=!0),pt||E!==u){He.buffers.depth.getReversed()?(_e.copy(u.projectionMatrix),Nm(_e),Om(_e),at.setValue(z,"projectionMatrix",_e)):at.setValue(z,"projectionMatrix",u.projectionMatrix),at.setValue(z,"viewMatrix",u.matrixWorldInverse);const Yt=at.map.cameraPosition;Yt!==void 0&&Yt.setValue(z,Ge.setFromMatrixPosition(u.matrixWorld)),Qe.logarithmicDepthBuffer&&at.setValue(z,"logDepthBufFC",2/(Math.log(u.far+1)/Math.LN2)),(T.isMeshPhongMaterial||T.isMeshToonMaterial||T.isMeshLambertMaterial||T.isMeshBasicMaterial||T.isMeshStandardMaterial||T.isShaderMaterial)&&at.setValue(z,"isOrthographic",u.isOrthographicCamera===!0),E!==u&&(E=u,qe=!0,Rt=!0)}if(b.isSkinnedMesh){at.setOptional(z,b,"bindMatrix"),at.setOptional(z,b,"bindMatrixInverse");const nt=b.skeleton;nt&&(nt.boneTexture===null&&nt.computeBoneTexture(),at.setValue(z,"boneTexture",nt.boneTexture,C))}b.isBatchedMesh&&(at.setOptional(z,b,"batchingTexture"),at.setValue(z,"batchingTexture",b._matricesTexture,C),at.setOptional(z,b,"batchingIdTexture"),at.setValue(z,"batchingIdTexture",b._indirectTexture,C),at.setOptional(z,b,"batchingColorTexture"),b._colorsTexture!==null&&at.setValue(z,"batchingColorTexture",b._colorsTexture,C));const ut=y.morphAttributes;if((ut.position!==void 0||ut.normal!==void 0||ut.color!==void 0)&&Pe.update(b,y,At),(qe||he.receiveShadow!==b.receiveShadow)&&(he.receiveShadow=b.receiveShadow,at.setValue(z,"receiveShadow",b.receiveShadow)),T.isMeshGouraudMaterial&&T.envMap!==null&&(yt.envMap.value=V,yt.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1),T.isMeshStandardMaterial&&T.envMap===null&&v.environment!==null&&(yt.envMapIntensity.value=v.environmentIntensity),qe&&(at.setValue(z,"toneMappingExposure",M.toneMappingExposure),he.needsLights&&si(yt,Rt),I&&T.fog===!0&&ue.refreshFogUniforms(yt,I),ue.refreshMaterialUniforms(yt,T,Z,oe,m.state.transmissionRenderTarget[u.id]),Xs.upload(z,ma(he),yt,C)),T.isShaderMaterial&&T.uniformsNeedUpdate===!0&&(Xs.upload(z,ma(he),yt,C),T.uniformsNeedUpdate=!1),T.isSpriteMaterial&&at.setValue(z,"center",b.center),at.setValue(z,"modelViewMatrix",b.modelViewMatrix),at.setValue(z,"normalMatrix",b.normalMatrix),at.setValue(z,"modelMatrix",b.matrixWorld),T.isShaderMaterial||T.isRawShaderMaterial){const nt=T.uniformsGroups;for(let Yt=0,yn=nt.length;Yt<yn;Yt++){const bn=nt[Yt];F.update(bn,At),F.bind(bn,At)}}return At}function si(u,v){u.ambientLightColor.needsUpdate=v,u.lightProbe.needsUpdate=v,u.directionalLights.needsUpdate=v,u.directionalLightShadows.needsUpdate=v,u.pointLights.needsUpdate=v,u.pointLightShadows.needsUpdate=v,u.spotLights.needsUpdate=v,u.spotLightShadows.needsUpdate=v,u.rectAreaLights.needsUpdate=v,u.hemisphereLights.needsUpdate=v}function Pi(u){return u.isMeshLambertMaterial||u.isMeshToonMaterial||u.isMeshPhongMaterial||u.isMeshStandardMaterial||u.isShadowMaterial||u.isShaderMaterial&&u.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(u,v,y){ke.get(u.texture).__webglTexture=v,ke.get(u.depthTexture).__webglTexture=y;const T=ke.get(u);T.__hasExternalTextures=!0,T.__autoAllocateDepthBuffer=y===void 0,T.__autoAllocateDepthBuffer||it.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),T.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(u,v){const y=ke.get(u);y.__webglFramebuffer=v,y.__useDefaultFramebuffer=v===void 0},this.setRenderTarget=function(u,v=0,y=0){O=u,D=v,L=y;let T=!0,b=null,I=!1,k=!1;if(u){const V=ke.get(u);if(V.__useDefaultFramebuffer!==void 0)He.bindFramebuffer(z.FRAMEBUFFER,null),T=!1;else if(V.__webglFramebuffer===void 0)C.setupRenderTarget(u);else if(V.__hasExternalTextures)C.rebindTextures(u,ke.get(u.texture).__webglTexture,ke.get(u.depthTexture).__webglTexture);else if(u.depthBuffer){const ie=u.depthTexture;if(V.__boundDepthTexture!==ie){if(ie!==null&&ke.has(ie)&&(u.width!==ie.image.width||u.height!==ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(u)}}const j=u.texture;(j.isData3DTexture||j.isDataArrayTexture||j.isCompressedArrayTexture)&&(k=!0);const q=ke.get(u).__webglFramebuffer;u.isWebGLCubeRenderTarget?(Array.isArray(q[v])?b=q[v][y]:b=q[v],I=!0):u.samples>0&&C.useMultisampledRTT(u)===!1?b=ke.get(u).__webglMultisampledFramebuffer:Array.isArray(q)?b=q[y]:b=q,N.copy(u.viewport),G.copy(u.scissor),W=u.scissorTest}else N.copy(De).multiplyScalar(Z).floor(),G.copy(Fe).multiplyScalar(Z).floor(),W=Ye;if(He.bindFramebuffer(z.FRAMEBUFFER,b)&&T&&He.drawBuffers(u,b),He.viewport(N),He.scissor(G),He.setScissorTest(W),I){const V=ke.get(u.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+v,V.__webglTexture,y)}else if(k){const V=ke.get(u.texture),j=v||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,V.__webglTexture,y||0,j)}w=-1},this.readRenderTargetPixels=function(u,v,y,T,b,I,k){if(!(u&&u.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ee=ke.get(u).__webglFramebuffer;if(u.isWebGLCubeRenderTarget&&k!==void 0&&(ee=ee[k]),ee){He.bindFramebuffer(z.FRAMEBUFFER,ee);try{const V=u.texture,j=V.format,q=V.type;if(!Qe.textureFormatReadable(j)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qe.textureTypeReadable(q)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}v>=0&&v<=u.width-T&&y>=0&&y<=u.height-b&&z.readPixels(v,y,T,b,Ne.convert(j),Ne.convert(q),I)}finally{const V=O!==null?ke.get(O).__webglFramebuffer:null;He.bindFramebuffer(z.FRAMEBUFFER,V)}}},this.readRenderTargetPixelsAsync=async function(u,v,y,T,b,I,k){if(!(u&&u.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ee=ke.get(u).__webglFramebuffer;if(u.isWebGLCubeRenderTarget&&k!==void 0&&(ee=ee[k]),ee){const V=u.texture,j=V.format,q=V.type;if(!Qe.textureFormatReadable(j))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qe.textureTypeReadable(q))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(v>=0&&v<=u.width-T&&y>=0&&y<=u.height-b){He.bindFramebuffer(z.FRAMEBUFFER,ee);const ie=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,ie),z.bufferData(z.PIXEL_PACK_BUFFER,I.byteLength,z.STREAM_READ),z.readPixels(v,y,T,b,Ne.convert(j),Ne.convert(q),0);const de=O!==null?ke.get(O).__webglFramebuffer:null;He.bindFramebuffer(z.FRAMEBUFFER,de);const pe=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Im(z,pe,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,ie),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,I),z.deleteBuffer(ie),z.deleteSync(pe),I}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(u,v=null,y=0){u.isTexture!==!0&&(Ca("WebGLRenderer: copyFramebufferToTexture function signature has changed."),v=arguments[0]||null,u=arguments[1]);const T=Math.pow(2,-y),b=Math.floor(u.image.width*T),I=Math.floor(u.image.height*T),k=v!==null?v.x:0,ee=v!==null?v.y:0;C.setTexture2D(u,0),z.copyTexSubImage2D(z.TEXTURE_2D,y,0,0,k,ee,b,I),He.unbindTexture()},this.copyTextureToTexture=function(u,v,y=null,T=null,b=0){u.isTexture!==!0&&(Ca("WebGLRenderer: copyTextureToTexture function signature has changed."),T=arguments[0]||null,u=arguments[1],v=arguments[2],b=arguments[3]||0,y=null);let I,k,ee,V,j,q,ie,de,pe;const Me=u.isCompressedTexture?u.mipmaps[b]:u.image;y!==null?(I=y.max.x-y.min.x,k=y.max.y-y.min.y,ee=y.isBox3?y.max.z-y.min.z:1,V=y.min.x,j=y.min.y,q=y.isBox3?y.min.z:0):(I=Me.width,k=Me.height,ee=Me.depth||1,V=0,j=0,q=0),T!==null?(ie=T.x,de=T.y,pe=T.z):(ie=0,de=0,pe=0);const ye=Ne.convert(v.format),ge=Ne.convert(v.type);let he;v.isData3DTexture?(C.setTexture3D(v,0),he=z.TEXTURE_3D):v.isDataArrayTexture||v.isCompressedArrayTexture?(C.setTexture2DArray(v,0),he=z.TEXTURE_2D_ARRAY):(C.setTexture2D(v,0),he=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,v.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,v.unpackAlignment);const rt=z.getParameter(z.UNPACK_ROW_LENGTH),We=z.getParameter(z.UNPACK_IMAGE_HEIGHT),At=z.getParameter(z.UNPACK_SKIP_PIXELS),pt=z.getParameter(z.UNPACK_SKIP_ROWS),qe=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Me.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Me.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,V),z.pixelStorei(z.UNPACK_SKIP_ROWS,j),z.pixelStorei(z.UNPACK_SKIP_IMAGES,q);const Rt=u.isDataArrayTexture||u.isData3DTexture,at=v.isDataArrayTexture||v.isData3DTexture;if(u.isRenderTargetTexture||u.isDepthTexture){const yt=ke.get(u),ut=ke.get(v),nt=ke.get(yt.__renderTarget),Yt=ke.get(ut.__renderTarget);He.bindFramebuffer(z.READ_FRAMEBUFFER,nt.__webglFramebuffer),He.bindFramebuffer(z.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer);for(let yn=0;yn<ee;yn++)Rt&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ke.get(u).__webglTexture,b,q+yn),u.isDepthTexture?(at&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ke.get(v).__webglTexture,b,pe+yn),z.blitFramebuffer(V,j,I,k,ie,de,I,k,z.DEPTH_BUFFER_BIT,z.NEAREST)):at?z.copyTexSubImage3D(he,b,ie,de,pe+yn,V,j,I,k):z.copyTexSubImage2D(he,b,ie,de,pe+yn,V,j,I,k);He.bindFramebuffer(z.READ_FRAMEBUFFER,null),He.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else at?u.isDataTexture||u.isData3DTexture?z.texSubImage3D(he,b,ie,de,pe,I,k,ee,ye,ge,Me.data):v.isCompressedArrayTexture?z.compressedTexSubImage3D(he,b,ie,de,pe,I,k,ee,ye,Me.data):z.texSubImage3D(he,b,ie,de,pe,I,k,ee,ye,ge,Me):u.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,b,ie,de,I,k,ye,ge,Me.data):u.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,b,ie,de,Me.width,Me.height,ye,Me.data):z.texSubImage2D(z.TEXTURE_2D,b,ie,de,I,k,ye,ge,Me);z.pixelStorei(z.UNPACK_ROW_LENGTH,rt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,We),z.pixelStorei(z.UNPACK_SKIP_PIXELS,At),z.pixelStorei(z.UNPACK_SKIP_ROWS,pt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,qe),b===0&&v.generateMipmaps&&z.generateMipmap(he),He.unbindTexture()},this.copyTextureToTexture3D=function(u,v,y=null,T=null,b=0){return u.isTexture!==!0&&(Ca("WebGLRenderer: copyTextureToTexture3D function signature has changed."),y=arguments[0]||null,T=arguments[1]||null,u=arguments[2],v=arguments[3],b=arguments[4]||0),Ca('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(u,v,y,T,b)},this.initRenderTarget=function(u){ke.get(u).__webglFramebuffer===void 0&&C.setupRenderTarget(u)},this.initTexture=function(u){u.isCubeTexture?C.setTextureCube(u,0):u.isData3DTexture?C.setTexture3D(u,0):u.isDataArrayTexture||u.isCompressedArrayTexture?C.setTexture2DArray(u,0):C.setTexture2D(u,0),He.unbindTexture()},this.resetState=function(){D=0,L=0,O=null,He.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}}class zc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Oe(e),this.density=t}clone(){return new zc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}let jn=class extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};class fr extends Ht{constructor(e=null,t=1,i=1,r,a,s,o,l,c=zt,h=zt,d,f){super(null,s,o,l,c,h,r,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class po extends Pn{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const a=[],s=[],o=[],l=[],c=new P,h=new Ee;s.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){const g=i+d/t*r;c.x=e*Math.cos(g),c.y=e*Math.sin(g),s.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(s[f]/e+1)/2,h.y=(s[f+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)a.push(d,d+1,0);this.setIndex(a),this.setAttribute("position",new an(s,3)),this.setAttribute("normal",new an(o,3)),this.setAttribute("uv",new an(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new po(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ja extends Pn{constructor(e=1,t=1,i=1,r=32,a=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:a,openEnded:s,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),a=Math.floor(a);const h=[],d=[],f=[],g=[];let _=0;const S=[],p=i/2;let m=0;R(),s===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new an(d,3)),this.setAttribute("normal",new an(f,3)),this.setAttribute("uv",new an(g,2));function R(){const M=new P,H=new P;let D=0;const L=(t-e)/i;for(let O=0;O<=a;O++){const w=[],E=O/a,N=E*(t-e)+e;for(let G=0;G<=r;G++){const W=G/r,Y=W*l+o,ne=Math.sin(Y),X=Math.cos(Y);H.x=N*ne,H.y=-E*i+p,H.z=N*X,d.push(H.x,H.y,H.z),M.set(ne,L,X).normalize(),f.push(M.x,M.y,M.z),g.push(W,1-E),w.push(_++)}S.push(w)}for(let O=0;O<r;O++)for(let w=0;w<a;w++){const E=S[w][O],N=S[w+1][O],G=S[w+1][O+1],W=S[w][O+1];(e>0||w!==0)&&(h.push(E,N,W),D+=3),(t>0||w!==a-1)&&(h.push(N,G,W),D+=3)}c.addGroup(m,D,0),m+=D}function A(M){const H=_,D=new Ee,L=new P;let O=0;const w=M===!0?e:t,E=M===!0?1:-1;for(let G=1;G<=r;G++)d.push(0,p*E,0),f.push(0,E,0),g.push(.5,.5),_++;const N=_;for(let G=0;G<=r;G++){const Y=G/r*l+o,ne=Math.cos(Y),X=Math.sin(Y);L.x=w*X,L.y=p*E,L.z=w*ne,d.push(L.x,L.y,L.z),f.push(0,E,0),D.x=ne*.5+.5,D.y=X*.5*E+.5,g.push(D.x,D.y),_++}for(let G=0;G<r;G++){const W=H+G,Y=N+G;M===!0?h.push(Y,Y+1,W):h.push(Y+1,Y,W),O+=3}c.addGroup(m,O,M===!0?1:2),m+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ja(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Gc extends Ja{constructor(e=1,t=1,i=32,r=1,a=!1,s=0,o=Math.PI*2){super(0,e,t,i,r,a,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:s,thetaLength:o}}static fromJSON(e){return new Gc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class mo extends Nt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class ca extends Bn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nc,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $S extends ca{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ee(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class jS extends Bn{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nc,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}const Ks={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class hf{constructor(e,t,i){const r=this;let a=!1,s=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,a===!1&&r.onStart!==void 0&&r.onStart(h,s,o),a=!0},this.itemEnd=function(h){s++,r.onProgress!==void 0&&r.onProgress(h,s,o),s===o&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){const g=c[d],_=c[d+1];if(g.global&&(g.lastIndex=0),g.test(h))return _}return null}}}const ZS=new hf;class Hn{constructor(e){this.manager=e!==void 0?e:ZS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Hn.DEFAULT_MATERIAL_NAME="__DEFAULT";const di={};class KS extends Error{constructor(e,t){super(e),this.response=t}}class kc extends Hn{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=Ks.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(di[e]!==void 0){di[e].push({onLoad:t,onProgress:i,onError:r});return}di[e]=[],di[e].push({onLoad:t,onProgress:i,onError:r});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=di[e],d=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),g=f?parseInt(f):0,_=g!==0;let S=0;const p=new ReadableStream({start(m){R();function R(){d.read().then(({done:A,value:M})=>{if(A)m.close();else{S+=M.byteLength;const H=new ProgressEvent("progress",{lengthComputable:_,loaded:S,total:g});for(let D=0,L=h.length;D<L;D++){const O=h[D];O.onProgress&&O.onProgress(H)}m.enqueue(M),R()}},A=>{m.error(A)})}}});return new Response(p)}else throw new KS(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),f=d&&d[1]?d[1].toLowerCase():void 0,g=new TextDecoder(f);return c.arrayBuffer().then(_=>g.decode(_))}}}).then(c=>{Ks.add(e,c);const h=di[e];delete di[e];for(let d=0,f=h.length;d<f;d++){const g=h[d];g.onLoad&&g.onLoad(c)}}).catch(c=>{const h=di[e];if(h===void 0)throw this.manager.itemError(e),c;delete di[e];for(let d=0,f=h.length;d<f;d++){const g=h[d];g.onError&&g.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class JS extends Hn{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,s=Ks.get(e);if(s!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0),s;const o=Va("img");function l(){h(),Ks.add(e,this),t&&t(this),a.manager.itemEnd(e)}function c(d){h(),r&&r(d),a.manager.itemError(e),a.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),a.manager.itemStart(e),o.src=e,o}}class QS extends Hn{constructor(e){super(e)}load(e,t,i,r){const a=this,s=new fr,o=new kc(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(a.withCredentials),o.load(e,function(l){let c;try{c=a.parse(l)}catch(h){if(r!==void 0)r(h);else{console.error(h);return}}c.image!==void 0?s.image=c.image:c.data!==void 0&&(s.image.width=c.width,s.image.height=c.height,s.image.data=c.data),s.wrapS=c.wrapS!==void 0?c.wrapS:un,s.wrapT=c.wrapT!==void 0?c.wrapT:un,s.magFilter=c.magFilter!==void 0?c.magFilter:Ze,s.minFilter=c.minFilter!==void 0?c.minFilter:Ze,s.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(s.colorSpace=c.colorSpace),c.flipY!==void 0&&(s.flipY=c.flipY),c.format!==void 0&&(s.format=c.format),c.type!==void 0&&(s.type=c.type),c.mipmaps!==void 0&&(s.mipmaps=c.mipmaps,s.minFilter=xi),c.mipmapCount===1&&(s.minFilter=Ze),c.generateMipmaps!==void 0&&(s.generateMipmaps=c.generateMipmaps),s.needsUpdate=!0,t&&t(s,c)},i,r),s}}class ex extends Hn{constructor(e){super(e)}load(e,t,i,r){const a=new Ht,s=new JS(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){a.image=o,a.needsUpdate=!0,t!==void 0&&t(a)},i,r),a}}class Wc extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class tx extends Wc{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const al=new Ue,gh=new P,vh=new P;class nx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bc,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;gh.setFromMatrixPosition(e.matrixWorld),t.position.copy(gh),vh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vh),t.updateMatrixWorld(),al.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(al),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(al)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ix extends nx{constructor(){super(new oa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rx extends Wc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new ix}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ax extends Wc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class sx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=_h(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=_h();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function _h(){return performance.now()}class U{constructor(e){this.value=e}clone(){return new U(this.value.clone===void 0?this.value:this.value.clone())}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ia}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ia);const Ut={groundRadius:6371,atmosphereRadius:6471,rayleighScaleHeight:8,mieScaleHeight:1.2,ozoneCenter:25,ozoneWidth:15},vn={rayleigh:new P(.005802,.013558,.0331),mie:.021,mieExtRatio:1.1,ozoneAbs:new P(65e-5,.001881,85e-6)},Vc=`
const float PI = 3.14159265358979323846;

vec2 raySphereIntersect(vec3 rayOrigin, vec3 rayDir, float sphereRadius) {
  vec3 oc = rayOrigin / sphereRadius;
  float b = dot(oc, rayDir);
  float c = dot(oc, oc) - 1.0;
  float disc = b * b - c;
  if (disc < -1e-6) return vec2(-1.0, -1.0);
  float s = sqrt(max(disc, 0.0));
  return vec2((-b - s) * sphereRadius, (-b + s) * sphereRadius);
}

float rayleighDensity(float altitude, float scaleHeight) {
  return exp(-altitude / scaleHeight);
}

float mieDensity(float altitude, float scaleHeight) {
  return exp(-altitude / scaleHeight);
}

float ozoneDensity(float altitude, float center, float width) {
  return max(0.0, 1.0 - abs(altitude - center) / width);
}

vec3 sampleMediumDensity(vec3 point, float planetRadius,
                         float rayleighSH, float mieSH,
                         float ozoneCenter, float ozoneWidth,
                         bool mieOn, bool ozoneOn) {
  float h = length(point) - planetRadius;
  float r = rayleighDensity(h, rayleighSH);
  float m = mieOn ? mieDensity(h, mieSH) : 0.0;
  float o = ozoneOn ? ozoneDensity(h, ozoneCenter, ozoneWidth) : 0.0;
  return vec3(r, m, o);
}

float rayleighPhase(float mu) {
  return 3.0 / (16.0 * PI) * (1.0 + mu * mu);
}

float miePhase(float mu, float g) {
  float gg = g * g;
  float num = 3.0 * (1.0 - gg) * (1.0 + mu * mu);
  float den = (8.0 * PI) * (2.0 + gg) * pow(max(1.0 + gg - 2.0 * g * mu, 1e-4), 1.5);
  return num / den;
}

vec2 getTransmittanceLUTUv(vec3 samplePoint, vec3 lightDir,
                           float planetRadius, float atmosphereRadius) {
  vec3 up = normalize(samplePoint);
  float mu = dot(up, lightDir);
  float radius = length(samplePoint);
  float u = mu * 0.5 + 0.5;
  float v = clamp((radius - planetRadius) / max(atmosphereRadius - planetRadius, 1e-5),
                  0.0, 1.0);
  return vec2(u, v);
}
`,df=`
float encodeLatitude(float l, bool warp) {
  if (!warp) return clamp(l / PI + 0.5, 0.0, 1.0);
  float a = clamp(abs(l) / (PI * 0.5), 0.0, 1.0);
  return 0.5 + 0.5 * sign(l) * sqrt(a);
}

float decodeLatitude(float v, bool warp) {
  if (!warp) return (v - 0.5) * PI;
  float s = 2.0 * v - 1.0;
  return sign(s) * (PI * 0.5) * s * s;
}
`,ff=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`,ox=`
varying vec2 vUv;

uniform float uPlanetRadius;
uniform float uAtmosphereRadius;
uniform float uRayleighSH;
uniform vec3  uRayleighBeta;
uniform float uMieSH;
uniform float uMieBetaExt;
uniform bool  uMieOn;
uniform float uOzoneCenter;
uniform float uOzoneWidth;
uniform vec3  uOzoneBetaAbs;
uniform bool  uOzoneOn;

const int TRANSMITTANCE_STEPS = 40;

${Vc}

void main() {
  float mu = mix(-1.0, 1.0, vUv.x);
  float radius = mix(uPlanetRadius, uAtmosphereRadius, vUv.y);

  vec3 rayOrigin = vec3(0.0, radius, 0.0);
  float sinTheta = sqrt(max(1.0 - mu * mu, 0.0));
  vec3 rayDir = normalize(vec3(sinTheta, mu, 0.0));

  vec2 atmoHit = raySphereIntersect(rayOrigin, rayDir, uAtmosphereRadius);
  vec2 groundHit = raySphereIntersect(rayOrigin, rayDir, uPlanetRadius);
  float rayLen = atmoHit.y;
  if (rayLen <= 0.0) { gl_FragColor = vec4(1.0); return; }
  if (groundHit.x > 0.0) { gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0); return; }

  float dt = rayLen / float(TRANSMITTANCE_STEPS);
  float odR = 0.0, odM = 0.0, odO = 0.0;
  for (int i = 0; i < TRANSMITTANCE_STEPS; i++) {
    float t = (float(i) + 0.5) * dt;
    vec3 p = rayOrigin + rayDir * t;
    vec3 d = sampleMediumDensity(p, uPlanetRadius, uRayleighSH, uMieSH,
                                  uOzoneCenter, uOzoneWidth, uMieOn, uOzoneOn);
    odR += d.x * dt;
    odM += d.y * dt;
    odO += d.z * dt;
  }
  vec3 tau = uRayleighBeta * odR + uMieBetaExt * odM + uOzoneBetaAbs * odO;
  gl_FragColor = vec4(exp(-tau), 1.0);
}
`;class lx{constructor({width:e=256,height:t=64}={}){this.width=e,this.height=t,this.target=new Ot(e,t,{depthBuffer:!1,stencilBuffer:!1,minFilter:Ze,magFilter:Ze,wrapS:un,wrapT:un,format:Kt,type:Bt,colorSpace:nn}),this.target.texture.name="TransmittanceLUT",this.uniforms={uPlanetRadius:{value:Ut.groundRadius},uAtmosphereRadius:{value:Ut.atmosphereRadius},uRayleighSH:{value:Ut.rayleighScaleHeight},uRayleighBeta:{value:vn.rayleigh.clone()},uMieSH:{value:Ut.mieScaleHeight},uMieBetaExt:{value:vn.mie*vn.mieExtRatio},uMieOn:{value:!0},uOzoneCenter:{value:Ut.ozoneCenter},uOzoneWidth:{value:Ut.ozoneWidth},uOzoneBetaAbs:{value:vn.ozoneAbs.clone()},uOzoneOn:{value:!0}},this.material=new Nt({uniforms:this.uniforms,vertexShader:ff,fragmentShader:ox,depthTest:!1,depthWrite:!1}),this._scene=new jn,this._camera=new oa(-1,1,1,-1,0,1),this._quad=new wt(new wn(2,2),this.material),this._quad.frustumCulled=!1,this._scene.add(this._quad),this.dirty=!0}get texture(){return this.target.texture}setAtmosphere({rayleighMul:e,mieBeta:t,mieEnabled:i,ozoneMul:r,ozoneEnabled:a}){e!=null&&this.uniforms.uRayleighBeta.value.copy(vn.rayleigh).multiplyScalar(e),t!=null&&(this.uniforms.uMieBetaExt.value=t*vn.mieExtRatio),i!=null&&(this.uniforms.uMieOn.value=i),r!=null&&this.uniforms.uOzoneBetaAbs.value.copy(vn.ozoneAbs).multiplyScalar(r),a!=null&&(this.uniforms.uOzoneOn.value=a),this.dirty=!0}render(e){if(!this.dirty)return;const t=e.getRenderTarget();e.setRenderTarget(this.target),e.clear(),e.render(this._scene,this._camera),e.setRenderTarget(t),this.dirty=!1}dispose(){this.target.dispose(),this.material.dispose(),this._quad.geometry.dispose()}}const cx=`
varying vec2 vUv;

uniform vec3  uCameraPos;
uniform vec3  uSunDir;
uniform bool  uHorizonWarp;

uniform float uPlanetRadius;
uniform float uAtmosphereRadius;
uniform float uRayleighSH;
uniform vec3  uRayleighBeta;
uniform float uMieSH;
uniform float uMieBeta;
uniform float uMieBetaExt;
uniform float uMieG;
uniform bool  uMieOn;
uniform float uOzoneCenter;
uniform float uOzoneWidth;
uniform vec3  uOzoneBetaAbs;
uniform bool  uOzoneOn;
uniform float uSunIntensity;

uniform sampler2D uTransmittanceLUT;
uniform int  uMarchSteps;

${Vc}
${df}

vec3 sampleTransmittance(vec3 p, vec3 lightDir) {
  vec2 uv = getTransmittanceLUTUv(p, lightDir, uPlanetRadius, uAtmosphereRadius);
  return texture2D(uTransmittanceLUT, uv).rgb;
}

vec3 getSkyViewForward(vec3 up) {
  vec3 projectedSun = uSunDir - up * dot(uSunDir, up);
  float lenSq = dot(projectedSun, projectedSun);
  if (lenSq < 1e-5) {
    vec3 axis = abs(up.y) > 0.99 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
    projectedSun = cross(axis, up);
  }
  return normalize(projectedSun);
}

vec3 getRayDir(vec2 uv, vec3 up) {
  vec3 forward = getSkyViewForward(up);
  vec3 right = normalize(cross(forward, up));
  float azimuth = (uv.x - 0.5) * 2.0 * PI;
  float elevation = decodeLatitude(uv.y, uHorizonWarp);
  float ce = cos(elevation);
  vec3 horizontal = cos(azimuth) * forward + sin(azimuth) * right;
  return normalize(horizontal * ce + up * sin(elevation));
}

void main() {
  vec3 rayOrigin = uCameraPos;
  vec3 up = normalize(rayOrigin);
  vec3 rayDir = getRayDir(vUv, up);

  vec2 atmoHit = raySphereIntersect(rayOrigin, rayDir, uAtmosphereRadius);
  vec2 planetHit = raySphereIntersect(rayOrigin, rayDir, uPlanetRadius);

  if (atmoHit.y <= 0.0) { gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0); return; }

  float tNear = max(atmoHit.x, 0.0);
  float tFar = atmoHit.y;
  if (planetHit.x > tNear) tFar = min(tFar, planetHit.x);

  float segLen = tFar - tNear;
  if (segLen <= 1e-4) { gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0); return; }

  int steps = clamp(uMarchSteps, 4, 96);
  float dt = segLen / float(steps);
  float odR = 0.0, odM = 0.0, odO = 0.0;
  vec3 totalR = vec3(0.0);
  vec3 totalM = vec3(0.0);

  float mu = dot(rayDir, uSunDir);
  float phaseR = rayleighPhase(mu);
  float phaseM = miePhase(mu, uMieG);

  for (int i = 0; i < 96; i++) {
    if (i >= steps) break;
    float t = tNear + (float(i) + 0.5) * dt;
    vec3 p = rayOrigin + rayDir * t;
    vec3 d = sampleMediumDensity(p, uPlanetRadius, uRayleighSH, uMieSH,
                                  uOzoneCenter, uOzoneWidth, uMieOn, uOzoneOn);
    odR += d.x * dt;
    odM += d.y * dt;
    odO += d.z * dt;
    vec3 sunT = sampleTransmittance(p, uSunDir);
    vec3 viewTau = uRayleighBeta * odR + uMieBetaExt * odM + uOzoneBetaAbs * odO;
    vec3 inscatTrans = sunT * exp(-viewTau);
    totalR += d.x * inscatTrans * dt;
    if (uMieOn) totalM += d.y * inscatTrans * dt;
  }

  vec3 scattered = uSunIntensity * (
    phaseR * uRayleighBeta * totalR +
    (uMieOn ? phaseM * uMieBeta * totalM : vec3(0.0))
  );
  gl_FragColor = vec4(scattered, 1.0);
}
`;class ux{constructor({width:e=256,height:t=128,marchSteps:i=40}={}){this.width=e,this.height=t,this.lastRenderUs=0,this._makeTarget(e,t),this.uniforms={uCameraPos:{value:new P(0,Ut.groundRadius+.0016,0)},uSunDir:{value:new P(0,1,0)},uHorizonWarp:{value:!0},uPlanetRadius:{value:Ut.groundRadius},uAtmosphereRadius:{value:Ut.atmosphereRadius},uRayleighSH:{value:Ut.rayleighScaleHeight},uRayleighBeta:{value:vn.rayleigh.clone()},uMieSH:{value:Ut.mieScaleHeight},uMieBeta:{value:vn.mie},uMieBetaExt:{value:vn.mie*vn.mieExtRatio},uMieG:{value:.758},uMieOn:{value:!0},uOzoneCenter:{value:Ut.ozoneCenter},uOzoneWidth:{value:Ut.ozoneWidth},uOzoneBetaAbs:{value:vn.ozoneAbs.clone()},uOzoneOn:{value:!0},uSunIntensity:{value:22},uTransmittanceLUT:{value:null},uMarchSteps:{value:i}},this.material=new Nt({uniforms:this.uniforms,vertexShader:ff,fragmentShader:cx,depthTest:!1,depthWrite:!1}),this._scene=new jn,this._camera=new oa(-1,1,1,-1,0,1),this._quad=new wt(new wn(2,2),this.material),this._quad.frustumCulled=!1,this._scene.add(this._quad)}get texture(){return this.target.texture}_makeTarget(e,t){this.target&&this.target.dispose(),this.target=new Ot(e,t,{depthBuffer:!1,stencilBuffer:!1,minFilter:Ze,magFilter:Ze,wrapS:Un,wrapT:un,format:Kt,type:Bt,colorSpace:nn}),this.target.texture.name="SkyViewLUT"}resize(e,t){e===this.width&&t===this.height||(this.width=e,this.height=t,this._makeTarget(e,t))}setMarchSteps(e){this.uniforms.uMarchSteps.value=e}setHorizonWarp(e){this.uniforms.uHorizonWarp.value=!!e}setSunDir(e){this.uniforms.uSunDir.value.copy(e)}setSunIntensity(e){this.uniforms.uSunIntensity.value=e}setMieG(e){this.uniforms.uMieG.value=e}setObserverPosition(e){this.uniforms.uCameraPos.value.copy(e)}setTransmittanceLUT(e){this.uniforms.uTransmittanceLUT.value=e}setAtmosphere({rayleighMul:e,mieBeta:t,ozoneMul:i}){e!=null&&this.uniforms.uRayleighBeta.value.copy(vn.rayleigh).multiplyScalar(e),t!=null&&(this.uniforms.uMieBeta.value=t,this.uniforms.uMieBetaExt.value=t*vn.mieExtRatio),i!=null&&this.uniforms.uOzoneBetaAbs.value.copy(vn.ozoneAbs).multiplyScalar(i)}setGeometry({planetRadiusKm:e,atmosphereThicknessKm:t}){if(e!=null&&(this.uniforms.uPlanetRadius.value=e),t!=null){const i=this.uniforms.uPlanetRadius.value;this.uniforms.uAtmosphereRadius.value=i+t}}render(e){const t=performance.now(),i=e.getRenderTarget();e.setRenderTarget(this.target),e.clear(),e.render(this._scene,this._camera),e.setRenderTarget(i),this.lastRenderUs=(performance.now()-t)*1e3}dispose(){this.target.dispose(),this.material.dispose(),this._quad.geometry.dispose()}}const hx=`
varying vec3 vViewRay;
uniform mat4 uInvProj;
uniform mat4 uCameraWorld;

void main() {
  gl_Position = vec4(position.xy, 1.0, 1.0);
  vec4 ndc = vec4(position.xy, 1.0, 1.0);
  vec4 viewPos = uInvProj * ndc;
  viewPos /= viewPos.w;
  vec3 viewRay = normalize(viewPos.xyz);
  vViewRay = normalize(mat3(uCameraWorld) * viewRay);
}
`,dx=`
varying vec3 vViewRay;

uniform vec3  uObserverPos;
uniform vec3  uSunDir;
uniform bool  uHorizonWarp;

uniform sampler2D uSkyViewLUT;
uniform sampler2D uTransmittanceLUT;
uniform float uPlanetRadius;
uniform float uAtmosphereRadius;

uniform float uSunIntensity;
uniform float uSunDiskAngularRadius;
uniform float uCoronaSoftness;
uniform vec3  uSunTint;
uniform bool  uForceBelowHorizonFog;
uniform vec3  uBelowHorizonFog;

${Vc}
${df}

vec3 sampleTransmittance(vec3 p, vec3 lightDir) {
  vec2 uv = getTransmittanceLUTUv(p, lightDir, uPlanetRadius, uAtmosphereRadius);
  return texture2D(uTransmittanceLUT, uv).rgb;
}

vec3 getSkyViewForward(vec3 up) {
  vec3 projectedSun = uSunDir - up * dot(uSunDir, up);
  float lenSq = dot(projectedSun, projectedSun);
  if (lenSq < 1e-5) {
    vec3 axis = abs(up.y) > 0.99 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
    projectedSun = cross(axis, up);
  }
  return normalize(projectedSun);
}

vec3 sampleSkyView(vec3 rayDir) {
  vec3 up = normalize(uObserverPos);
  vec3 forward = getSkyViewForward(up);
  vec3 right = normalize(cross(forward, up));
  float vertical = clamp(dot(rayDir, up), -1.0, 1.0);
  float elevation = asin(vertical);
  vec3 horizontal = rayDir - up * vertical;
  float azimuth = atan(dot(horizontal, right), dot(horizontal, forward));
  float v = encodeLatitude(elevation, uHorizonWarp);
  float u = azimuth / (2.0 * PI) + 0.5;
  return texture2D(uSkyViewLUT, vec2(u, v)).rgb;
}

vec3 sampleSun(vec3 rayDir) {
  vec3 up = normalize(uObserverPos);
  float sunUp = dot(uSunDir, up);
  float theta = acos(clamp(dot(rayDir, uSunDir), -1.0, 1.0));
  float r = uSunDiskAngularRadius;
  float disk = smoothstep(r * 1.04, r * 0.96, theta);

  float coronaInner = exp(-theta / max(r * uCoronaSoftness, 1e-5));
  float coronaOuter = exp(-theta / max(r * (uCoronaSoftness * 1.6), 1e-5));

  vec3 radiance = disk * 16.0
    + uSunTint * coronaInner * 2.0
    + vec3(1.0, 0.98, 0.95) * coronaOuter * 0.6;

  float elFade = smoothstep(-0.12, 0.04, sunUp);
  vec3 sunT = sampleTransmittance(uObserverPos, uSunDir);
  return radiance * uSunIntensity * sunT * elFade * 0.01;
}

void main() {
  vec3 rayDir = normalize(vViewRay);
  vec3 sky = sampleSkyView(rayDir);
  vec2 planetHit = raySphereIntersect(uObserverPos, rayDir, uPlanetRadius);
  bool hitsPlanet = planetHit.x >= 0.0;
  if (uForceBelowHorizonFog && hitsPlanet) {
    sky = uBelowHorizonFog;
  } else if (!hitsPlanet) {
    sky += sampleSun(rayDir);
  }
  gl_FragColor = vec4(sky, 1.0);
}
`;class fx{constructor(){this.uniforms={uInvProj:{value:new Ue},uCameraWorld:{value:new Ue},uObserverPos:{value:new P(0,Ut.groundRadius+.4,0)},uSunDir:{value:new P(0,1,0)},uHorizonWarp:{value:!0},uSkyViewLUT:{value:null},uTransmittanceLUT:{value:null},uPlanetRadius:{value:Ut.groundRadius},uAtmosphereRadius:{value:Ut.atmosphereRadius},uSunIntensity:{value:22},uSunDiskAngularRadius:{value:me.degToRad(.55)},uCoronaSoftness:{value:5.5},uSunTint:{value:new P(1,.95,.86)},uForceBelowHorizonFog:{value:!1},uBelowHorizonFog:{value:new P(0,0,0)}},this.material=new Nt({uniforms:this.uniforms,vertexShader:hx,fragmentShader:dx,depthTest:!1,depthWrite:!1}),this.mesh=new wt(new wn(2,2),this.material),this.mesh.frustumCulled=!1,this.mesh.renderOrder=-1,this.mesh.matrixAutoUpdate=!1,this.mesh.name="SkyBackdrop"}setLUTs(e,t){this.uniforms.uSkyViewLUT.value=e,this.uniforms.uTransmittanceLUT.value=t}setObserver(e){this.uniforms.uObserverPos.value.copy(e)}setSun({direction:e,intensity:t,diskRad:i,coronaSoftness:r,tint:a}){e!=null&&this.uniforms.uSunDir.value.copy(e),t!=null&&(this.uniforms.uSunIntensity.value=t),i!=null&&(this.uniforms.uSunDiskAngularRadius.value=i),r!=null&&(this.uniforms.uCoronaSoftness.value=r),a!=null&&this.uniforms.uSunTint.value.copy(a)}setDiagnostics({forceBelowHorizonFog:e,belowHorizonFog:t}={}){e!=null&&(this.uniforms.uForceBelowHorizonFog.value=!!e),t!=null&&this.uniforms.uBelowHorizonFog.value.set(t.r,t.g,t.b)}setHorizonWarp(e){this.uniforms.uHorizonWarp.value=!!e}setGeometry({planetRadiusKm:e,atmosphereThicknessKm:t}){if(e!=null&&(this.uniforms.uPlanetRadius.value=e),t!=null){const i=this.uniforms.uPlanetRadius.value;this.uniforms.uAtmosphereRadius.value=i+t}}updateCamera(e){this.uniforms.uInvProj.value.copy(e.projectionMatrixInverse),this.uniforms.uCameraWorld.value.copy(e.matrixWorld)}dispose(){this.material.dispose(),this.mesh.geometry.dispose()}}const fi={accelSeconds:1.5,maxFrameSeconds:1/30,minMoveSpeed:55,maxMoveSpeed:260,minAltitudeSpeed:40,maxAltitudeSpeed:170,minYawSpeed:.9,maxYawSpeed:2.6};class px{constructor(e,t){this.camera=e,this.dom=t,this._keys=new Map,this._pointers=new Map,this._cameraEuler=new Fn(0,0,0,"YXZ"),this._lastHumanInput=performance.now(),this._pointerDown=!1,this._dragging=!1,this._pinchDistance=0,this._pinchCentroid=null,this._setupKeyboard(),this._setupPointer()}markHumanInput(){this._lastHumanInput=performance.now()}clearInput(){this._keys.clear(),this._pointers.clear(),this._pointerDown=!1,this._dragging=!1,this._pinchDistance=0,this._pinchCentroid=null,this.dom.style.cursor="crosshair",this.markHumanInput()}getIdleSeconds(e=performance.now()){return Math.max(0,(e-this._lastHumanInput)/1e3)}hasActiveInput(){return this._keys.size>0||this._pointers.size>0||this._pointerDown||this._dragging}_ignore(e){const t=e.target;return t&&(t.tagName==="INPUT"||t.tagName==="SELECT"||t.tagName==="TEXTAREA"||t.isContentEditable)}_setupKeyboard(){window.addEventListener("keydown",e=>{if(this._ignore(e))return;if(e.metaKey||e.ctrlKey||e.altKey){this._keys.clear();return}const t=e.key.toLowerCase();["w","a","s","d","q","arrowup","arrowdown","arrowleft","arrowright"].includes(t)&&(e.preventDefault(),this.markHumanInput(),this._keys.has(t)||this._keys.set(t,performance.now()))}),window.addEventListener("keyup",e=>{this._keys.delete(e.key.toLowerCase()),this.markHumanInput()}),window.addEventListener("blur",()=>this._keys.clear()),document.addEventListener("visibilitychange",()=>{document.hidden&&this._keys.clear()})}_setupPointer(){let e=0,t=0,i=0,r=0;this.dom.style.touchAction="none",this.dom.addEventListener("pointerdown",s=>{s.target.closest&&s.target.closest("#ui-root")||(s.preventDefault(),this.dom.setPointerCapture?.(s.pointerId),this._pointers.set(s.pointerId,{x:s.clientX,y:s.clientY,type:s.pointerType||"mouse"}),this._pointerDown=!0,this._dragging=!1,this._pinchDistance=0,this._pinchCentroid=null,this.markHumanInput(),e=s.clientX,t=s.clientY,i=s.clientX,r=s.clientY)},{passive:!1});const a=s=>{if(this._pointers.delete(s.pointerId),this._pinchDistance=0,this._pinchCentroid=null,this._pointers.size){const o=this._pointers.values().next().value;e=o.x,t=o.y,i=o.x,r=o.y,this._pointerDown=!0,this._dragging=!1,this.markHumanInput()}else(this._pointerDown||this._dragging)&&(this._pointerDown=!1,this.dom.style.cursor="crosshair",this._dragging=!1,this.markHumanInput())};window.addEventListener("pointerup",a),window.addEventListener("pointercancel",a),window.addEventListener("pointermove",s=>{if(!this._pointerDown&&!this._dragging)return;if(this._pointers.has(s.pointerId)){s.preventDefault();const g=this._pointers.get(s.pointerId);g.x=s.clientX,g.y=s.clientY}const o=[...this._pointers.values()].filter(g=>g.type==="touch");if(o.length>=2){this._handleTouchPanZoom(o);return}const l=s.pointerType==="touch",c=l?.0045:8e-4,h=me.clamp(s.clientX-i,-80,80),d=me.clamp(s.clientY-r,-80,80),f=Math.hypot(s.clientX-e,s.clientY-t);if(i=s.clientX,r=s.clientY,!this._dragging){if(f<(l?2:4))return;this._dragging=!0,this.dom.style.cursor="none"}this.markHumanInput(),this._cameraEuler.setFromQuaternion(this.camera.quaternion),this._cameraEuler.y-=h*c,this._cameraEuler.x=Math.max(-1.25,Math.min(1.15,this._cameraEuler.x-d*c)),this.camera.quaternion.setFromEuler(this._cameraEuler)},{passive:!1}),this.dom.addEventListener("wheel",s=>{if(s.target.closest&&s.target.closest("#ui-root"))return;s.preventDefault(),this.markHumanInput();const o=me.clamp(s.deltaY,-180,180),l=new P;this.camera.getWorldDirection(l),this.camera.position.addScaledVector(l,-o*.6)},{passive:!1})}_handleTouchPanZoom(e){const t=e[0],i=e[1],r=(t.x+i.x)*.5,a=(t.y+i.y)*.5,s=Math.hypot(t.x-i.x,t.y-i.y);if(!this._pinchCentroid||!this._pinchDistance){this._pinchCentroid={x:r,y:a},this._pinchDistance=s,this.markHumanInput();return}const o=me.clamp(r-this._pinchCentroid.x,-80,80),l=me.clamp(a-this._pinchCentroid.y,-80,80),c=me.clamp(s-this._pinchDistance,-80,80);this._pinchCentroid.x=r,this._pinchCentroid.y=a,this._pinchDistance=s,this.markHumanInput();const h=Math.max(.8,Math.min(8,this.camera.position.y*.004)),d=Math.max(1.5,Math.min(18,this.camera.position.y*.008)),f=new P,g=new P,_=new P;this.camera.getWorldDirection(f),g.crossVectors(f,this.camera.up).normalize(),_.set(0,1,0),this.camera.position.addScaledVector(g,-o*h).addScaledVector(_,l*h).addScaledVector(f,c*d)}update(e){if(!this._keys.size)return;this.markHumanInput();const t=Math.min(e,fi.maxFrameSeconds),i=performance.now();let r=0;for(const _ of this._keys.values())r=Math.max(r,(i-_)/1e3);const a=me.clamp(r/fi.accelSeconds,0,1),s=a*a*(3-2*a),o=me.lerp(fi.minMoveSpeed,fi.maxMoveSpeed,s)*t,l=me.lerp(fi.minAltitudeSpeed,fi.maxAltitudeSpeed,s)*t,c=me.lerp(fi.minYawSpeed,fi.maxYawSpeed,s)*t,h=new P;this.camera.getWorldDirection(h),h.y=0,h.lengthSq()<1e-4&&h.set(0,0,-1),h.normalize();const d=new P().crossVectors(h,this.camera.up).normalize(),f=new P;if(this._keys.has("w")&&f.add(h),this._keys.has("s")&&f.sub(h),this._keys.has("d")&&f.add(d),this._keys.has("a")&&f.sub(d),this._keys.has("arrowup")&&(f.y+=1),(this._keys.has("q")||this._keys.has("arrowdown"))&&(f.y-=1),f.lengthSq()>0){const _=new P(f.x,0,f.z);_.lengthSq()>0&&(_.normalize().multiplyScalar(o),_.clampLength(0,fi.maxMoveSpeed*t));const S=Math.sign(f.y)*l;this.camera.position.add(new P(_.x,S,_.z))}let g=0;this._keys.has("arrowleft")&&(g+=c),this._keys.has("arrowright")&&(g-=c),g&&(this._cameraEuler.setFromQuaternion(this.camera.quaternion),this._cameraEuler.y+=g,this.camera.quaternion.setFromEuler(this._cameraEuler))}}const mx=3,gx=2.5;class vx{constructor(e,t,i){this.camera=e,this.human=t,this.store=i,this.enabled=!1,this.blend=0,this.state="human",this.anchorPosition=new P,this.anchorQuaternion=new ni,this.targetPosition=new P,this.targetQuaternion=new ni,this.syncFromCamera(),i.subscribe(r=>{(r.path==="*"||r.path==="camera.director")&&(this.enabled=!!i.get("camera.director"),this.enabled||this.returnToHuman())}),this.enabled=!!i.get("camera.director")}syncFromCamera(){this.anchorPosition.copy(this.camera.position),this.anchorQuaternion.copy(this.camera.quaternion),this.targetPosition.copy(this.camera.position),this.targetQuaternion.copy(this.camera.quaternion)}returnToHuman(){this.state="human",this.blend=0,this.syncFromCamera()}update(e){if(!this.enabled){this.returnToHuman();return}const t=performance.now(),i=this.human.hasActiveInput(),r=this.human.getIdleSeconds(t);if(i||r<mx){this.returnToHuman();return}this.state!=="director"&&(this.state="director",this.syncFromCamera()),this.blend=Math.min(1,this.blend+e/gx),this.targetPosition.copy(this.anchorPosition),this.targetQuaternion.copy(this.anchorQuaternion),this.camera.position.lerpVectors(this.anchorPosition,this.targetPosition,this.blend),this.camera.quaternion.slerpQuaternions(this.anchorQuaternion,this.targetQuaternion,this.blend)}getDebugState(){return{enabled:this.enabled,state:this.state,blend:this.blend,idleSeconds:this.human.getIdleSeconds()}}}const _x=600,Sx=3,xx=.85,Bi=1e-5;class yx{constructor(e,t){this.store=e,this.scene=t,this.enabled=!1,this.fade=0,this.time=0,this.sunBase=this._readSun(),this.elevationPhase=0,this.elevationOffsetDeg=0,this.azimuthPhase=0,this.azimuthBaseDeg=this.sunBase.azimuthDeg??0,this._lastSunApplied=null,this._manualOverride=!1,this._publishing=!1,this._suppressEnableChange=!1,e.subscribe(i=>this._onStoreChange(i)),this.enabled=!!e.get("orbitSweep.enable"),this._alignSweepToSun(this.sunBase),this._publishSun(this.sunBase,!0)}_readSun(){return{elevationDeg:this.store.get("sun.elevationDeg"),azimuthDeg:this.store.get("sun.azimuthDeg"),intensity:this.store.get("sun.intensity")}}_onStoreChange(e){if(this._publishing)return;const t=e.path;if(t==="*"){this.enabled=!!this.store.get("orbitSweep.enable"),this._manualOverride=!1,this._resetBase(),this.enabled||(this.fade=0);return}if(t==="orbitSweep.enable"){if(this.enabled=!!e.value,this._suppressEnableChange)return;this.enabled?this._startFromOrbitValue():this._freezeAtCurrentSun();return}if(t==="orbitSweep.elevationRange"){this._alignSweepToSun(this._readOrbitSun(),{elevation:!0,azimuth:!1});return}if(t==="orbitSweep.elevationDeg"||t==="orbitSweep.azimuthDeg"){this._manualOverride=!this.enabled,this.fade=1;const i=this._readOrbitSun();this._alignSweepToSun(i,{elevation:t==="orbitSweep.elevationDeg",azimuth:t==="orbitSweep.azimuthDeg"}),this.scene.setSunOverride(i),this._lastSunApplied=i;return}if(t&&t.startsWith("sun.")){if(this._manualOverride=!1,this._lastSunApplied=null,this.sunBase=this._readSun(),this._alignSweepToSun(this.sunBase),this._publishSun(this.sunBase,!0),this.enabled){this.enabled=!1;try{this._suppressEnableChange=!0,this.store.set("orbitSweep.enable",!1)}finally{this._suppressEnableChange=!1}}this.scene.setSunOverride(null)}}_resetBase(){this._manualOverride=!1,this.sunBase=this._readSun(),this._alignSweepToSun(this.sunBase),this._lastSunApplied=null,this.scene.setSunOverride(null),this._publishSun(this.sunBase,!0)}_startFromOrbitValue(){this._manualOverride=!1,this.sunBase=this._readSun();const e=this._readOrbitSun();this._alignSweepToSun(e),this._lastSunApplied=null,this.fade=1}_freezeAtCurrentSun(){const e=this._lastSunApplied||this._readOrbitSun();this._manualOverride=!0,this.fade=1,this._alignSweepToSun(e),this.scene.setSunOverride(e),this._lastSunApplied=e,this._publishSun(e,!0)}_alignSweepToSun(e,t={elevation:!0,azimuth:!0}){if(t.elevation){const i=this._elevationRange(),r=me.clamp(e.elevationDeg,i[0],i[1]);this.elevationPhase=wx(this.elevationPhase,r,i),this.elevationOffsetDeg=e.elevationDeg-r}t.azimuth&&(this.azimuthBaseDeg=zr(e.azimuthDeg-me.radToDeg(this.azimuthPhase)))}_elevationRange(){const e=this.store.get("orbitSweep.elevationRange"),t=Array.isArray(e)?Number(e[0]):2,i=Array.isArray(e)?Number(e[1]):50,r=me.clamp(Math.min(t,i),-10,90),a=me.clamp(Math.max(t,i),-10,90);return a-r<.5?[r,r+.5]:[r,a]}_speed(){return me.clamp(this.store.get("orbitSweep.speed")??.5,0,4)}_axisSpeed(e,t,i){return me.clamp(this.store.get(e)??t,0,i)}_readOrbitSun(){const e=this._readSun();return{elevationDeg:me.clamp(Number(this.store.get("orbitSweep.elevationDeg")??e.elevationDeg),-10,90),azimuthDeg:zr(Number(this.store.get("orbitSweep.azimuthDeg")??e.azimuthDeg)),intensity:e.intensity}}_publishSun(e,t=!1){const i=me.clamp(Number(e.elevationDeg),-10,90),r=zr(Number(e.azimuthDeg)),a=this.store.get("orbitSweep.elevationDeg"),s=this.store.get("orbitSweep.azimuthDeg"),o=t||Math.abs(i-a)>Bi,l=t||Math.abs(Ys(r,s))>Bi;if(!(!o&&!l))try{this._publishing=!0,o&&this.store.set("orbitSweep.elevationDeg",i),l&&this.store.set("orbitSweep.azimuthDeg",r)}finally{this._publishing=!1}}_sunSweep(){const[e,t]=this._elevationRange(),i=(e+t)*.5,r=(t-e)*.5,a=i+Math.sin(this.elevationPhase)*r+this.elevationOffsetDeg,s=zr(this.azimuthBaseDeg+me.radToDeg(this.azimuthPhase));return{elevationDeg:me.clamp(a,-10,90),azimuthDeg:s,intensity:this.sunBase.intensity}}update(e){this.time+=e;const t=this._speed(),i=e/_x*Math.PI*2*t;if(this.enabled){const d=i*this._axisSpeed("orbitSweep.elevationSpeed",4,24);this.elevationPhase+=d,this.azimuthPhase+=i*this._axisSpeed("orbitSweep.azimuthSpeed",.5,8),this._relaxElevationOffset(d)}if(this._manualOverride&&!this.enabled){const d=this._readOrbitSun();(!this._lastSunApplied||Math.abs(d.elevationDeg-this._lastSunApplied.elevationDeg)>Bi||Math.abs(Ys(d.azimuthDeg,this._lastSunApplied.azimuthDeg))>Bi)&&(this.scene.setSunOverride(d),this._lastSunApplied=d),this._publishSun(d);return}const r=this.enabled?1:0,a=this.enabled?Sx:xx,s=e/a;if(this.fade<r?this.fade=Math.min(r,this.fade+s):this.fade>r&&(this.fade=Math.max(r,this.fade-s)),this.fade<=0&&!this.enabled){this._lastSunApplied&&(this.scene.setSunOverride(null),this._lastSunApplied=null),this._publishSun(this._readSun());return}const o=this._readSun(),l=this._sunSweep(),c={elevationDeg:me.lerp(o.elevationDeg,l.elevationDeg,this.fade),azimuthDeg:zr(Ex(o.azimuthDeg,l.azimuthDeg,this.fade)),intensity:o.intensity};(!this._lastSunApplied||Math.abs(c.elevationDeg-this._lastSunApplied.elevationDeg)>Bi||Math.abs(Ys(c.azimuthDeg,this._lastSunApplied.azimuthDeg))>Bi)&&(this.scene.setSunOverride(c),this._lastSunApplied=c),this._publishSun(c)}_relaxElevationOffset(e){if(Math.abs(this.elevationOffsetDeg)<=Bi){this.elevationOffsetDeg=0;return}const[t,i]=this._elevationRange(),r=Math.max(.001,(i-t)*.5),a=Math.abs(e)*r;a<=Bi||(this.elevationOffsetDeg=Tx(this.elevationOffsetDeg,0,a))}}function zr(n){return((n+180)%360+360)%360-180}function Ys(n,e){return zr(n-e)}function Ex(n,e,t){return n+Ys(e,n)*me.clamp(t,0,1)}function wx(n,e,t){const[i,r]=t,a=(i+r)*.5,s=Math.max(.001,(r-i)*.5),o=me.clamp((e-a)/s,-1,1),l=Math.asin(o),c=Math.PI-l,h=[],d=Math.round(n/(Math.PI*2));for(let _=d-1;_<=d+1;_++){const S=_*Math.PI*2;h.push(l+S,c+S)}let f=h[0],g=Math.abs(f-n);for(const _ of h){const S=Math.abs(_-n);S<g&&(f=_,g=S)}return f}function Tx(n,e,t){return n<e?Math.min(e,n+t):n>e?Math.max(e,n-t):e}function or(n){let e=n>>>0;return function(){e+=1831565813;let i=Math.imul(e^e>>>15,1|e);return i^=i+Math.imul(i^i>>>7,61|i),((i^i>>>14)>>>0)/4294967296}}function Fa(n,e,t){return n+(e-n)*t}function Pa(n,e,t=1){let i=Math.imul(n|0,374761393)^Math.imul(e|0,668265263)^Math.imul(t|0,2246822519);return i=(i^i>>>13)>>>0,i=Math.imul(i,1274126177)>>>0,((i^i>>>16)>>>0)/4294967296}function Sh(n){return n*n*(3-2*n)}function Ba(n,e,t=1){const i=Math.floor(n),r=Math.floor(e),a=n-i,s=e-r,o=Sh(a),l=Sh(s),c=Pa(i,r,t),h=Pa(i+1,r,t),d=Pa(i,r+1,t),f=Pa(i+1,r+1,t);return Fa(Fa(c,h,o),Fa(d,f,o),l)}function qn(n,e,{seed:t=1,octaves:i=5,lacunarity:r=2,gain:a=.5,warp:s=0}={}){let o=.5,l=1,c=0,h=0,d=n,f=e;for(let g=0;g<i;g++)s>0&&(d+=(Ba(d*.7,f*.7,t+31+g)-.5)*s,f+=(Ba(d*.7+9.2,f*.7,t+67+g)-.5)*s),c+=Ba(d*l,f*l,t+g*101)*o,h+=o,l*=r,o*=a;return c/Math.max(h,1e-4)}function xh(n,e,t={}){const i=qn(n,e,t);return 1-Math.abs(i*2-1)}class Mx{constructor({resolution:e,worldSize:t,vstep:i}){this.res=e,this.worldSize=t,this.cellSize=t/e,this.vstep=i,this.half=t/2;const r=e*e;this.heightVox=new Int16Array(r),this.material=new Uint8Array(r),this.season=new Uint8Array(r),this.land=new Uint8Array(r),this.channel=new Uint8Array(r)}idx(e,t){return t*this.res+e}inBounds(e,t){return e>=0&&t>=0&&e<this.res&&t<this.res}cellToWorld(e,t){return[(e+.5)*this.cellSize-this.half,(t+.5)*this.cellSize-this.half]}worldToCell(e,t){return[Math.floor((e+this.half)/this.cellSize),Math.floor((t+this.half)/this.cellSize)]}heightMetresAt(e,t){return this.inBounds(e,t)?this.heightVox[this.idx(e,t)]*this.vstep:-9999}surfaceHeightWorld(e,t){const[i,r]=this.worldToCell(e,t);return this.inBounds(i,r)?this.heightVox[this.idx(i,r)]*this.vstep:-9999}}function $e(n){const e=parseInt(n.slice(1),16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}function hn(n,e,t){return[n[0]+(e[0]-n[0])*t,n[1]+(e[1]-n[1])*t,n[2]+(e[2]-n[2])*t]}const ot={SAND:0,SEAFLOOR:1,GRASS:2,GRASSY_SNOW:3,SNOW:4,ROCK:5,DIRT:6,AUTUMN:7,FAIRWAY:8},yh={[ot.SAND]:[$e("#cf9a4f"),$e("#f0d089")],[ot.SEAFLOOR]:[$e("#0a4e6e"),$e("#2fd9c8")],[ot.GRASS]:[$e("#2f8a2e"),$e("#7ad83e")],[ot.GRASSY_SNOW]:[$e("#5f8a55"),$e("#aecaa0")],[ot.SNOW]:[$e("#9fc3cc"),$e("#dceef0")],[ot.ROCK]:[$e("#5a554b"),$e("#8a8276")],[ot.DIRT]:[$e("#6a4a2c"),$e("#a8814a")],[ot.AUTUMN]:[$e("#b5601f"),$e("#e8a52e")],[ot.FAIRWAY]:[$e("#5fb22a"),$e("#a6ef4e")]},bx=$e("#05293c"),Eh=$e("#137a8c"),Ax=$e("#2fd9c8"),Rx=$e("#3debe0");function wh(n,e){const t=yh[n]||yh[ot.ROCK];return hn(t[0],t[1],Math.max(0,Math.min(1,e)))}function Cx(n){const e=Math.max(0,Math.min(1,n));return e<.5?hn(Ax,Eh,e*2):hn(Eh,bx,(e-.5)*2)}const Th={0:[$e("#2f8a2e"),$e("#7ad83e")],1:[$e("#7a5520"),$e("#d99a33")],2:[$e("#1d5a2c"),$e("#3f8f3c")],3:[$e("#6f8a74"),$e("#cfe3da")]};function Dx(n,e){const t=Th[n]||Th[0];return hn(t[0],t[1],Math.max(0,Math.min(1,e)))}const gn={palmTrunkLow:$e("#7a5a30"),palmTrunkHigh:$e("#b08a4a"),palmFrondLow:$e("#2f7d33"),palmFrondHigh:$e("#6fce4a"),coniferLow:$e("#1f4d3a"),coniferHigh:$e("#2e6b4f"),coniferTrunk:$e("#5a4632"),broadleafTrunkLow:$e("#5a4127"),broadleafTrunkHigh:$e("#8a6a42"),summerLeafLow:$e("#3c8f33"),summerLeafHigh:$e("#7ad84f"),autumnLeaf:[$e("#e6b800"),$e("#d98a2b"),$e("#c6492f")],winterBark:$e("#6b5240"),winterSnow:$e("#eef6f8"),winterCyan:$e("#bfe9f0")},lr={SUMMER:0,AUTUMN:1,CONIFER:2,WINTER:3};function Px(n,e){const t=n.sweepDeg*Math.PI/180,i=Math.cos(t)*7.3,r=Math.sin(t)*7.3,a=Math.min(.085,n.borderWarp*.14);return function(o,l,c){const h=qn(o*.0017+i,l*.0017+r,{seed:e+71,octaves:3,warp:.5})-.5,d=Math.max(0,Math.min(1,c+h*a*2));let f;return d<n.summerEnd?f=lr.SUMMER:d<n.autumnEnd?f=lr.AUTUMN:d<n.coniferEnd?f=lr.CONIFER:f=lr.WINTER,{s:d,season:f}}}function Mh(n){const{seed:e,radius:t,shape:i,resolution:r,lowland:a,massif:s,massifSharpness:o,massifOffsetX:l,massifOffsetZ:c,terraceStep:h,warp:d,ridge:f,beachWidth:g,valleyDepth:_,valleyWidth:S,seaLevel:p,floorDepth:m,floorShape:R,floorRoughness:A,deltaFloor:M,seasons:H}=n,D=a+s,L=Math.max(.45,o??1),O=Math.max(-.45,Math.min(.45,l??0))*t,w=Math.max(-.45,Math.min(.45,c??0))*t,E=Math.max(.35,R??.85),N=Math.max(0,A??1),G=Math.max(0,Math.min(1,M??0)),W=t*2.3,Y=W/r,ne=h>0?h:Math.max(1.5,Y*.85),X=new Mx({resolution:r,worldSize:W,vstep:ne}),oe=Px(H,e),Z=.0015,le=or(e*2654435761>>>0),ve=i>=1&&i<=4?i:1+Math.floor(or(e*40503>>>0)()*4),De=le()*Math.PI*2,Fe=Math.cos(De),Ye=Math.sin(De),re=1.55+le()*.55,ce=3+Math.floor(le()*3),fe=le()*Math.PI*2,_e=.17+le()*.1,Ie=le()*Math.PI*2,Ge=t*(.52+le()*.18),Ve=t*(.5+le()*.22),ct=Math.cos(Ie)*Ge,je=Math.sin(Ie)*Ge;function xt(x,B){const $=x*Fe-B*Ye,J=x*Ye+B*Fe,Q=Math.hypot(ve===3?$/re:$,J),xe=qn(x*.001+4.2,B*.001-7.8,{seed:e+5,octaves:4,warp:.55}),ue=qn(x*.0026-2.1,B*.0026+5.4,{seed:e+23,octaves:3,warp:.4})-.5;let Se=t*(.74+.46*(xe-.5)+.16*ue);if(ve===4){const se=Math.atan2(J,$);Se*=1+_e*Math.cos(ce*se+fe+(xe-.5)*1.5)}let ze=1-Ji(.45,1.04,Q/Math.max(1,Se));if(ve===2){const se=Math.hypot(x-ct,B-je);ze*=Ji(Ve*.45,Ve*1,se)}return ze}function z(x,B){const $=qn(x*.0016+31.7,B*.0016-12.3,{seed:e+131,octaves:3,warp:.45});return Math.max(0,Math.min(1,($-.34)/.5))}const Vt=(()=>{const x=or(e*911>>>0),B=[],$=x()*Math.PI*2,J=t*(.08+x()*.24);B.push({cx:Math.cos($)*J+O,cz:Math.sin($)*J+w,h:s*(.8+x()*.16),sig:t*(.13+x()*.05),rot:x()*Math.PI*2,sk:x(),spur:3+Math.floor(x()*4)});const Q=(x()<.55?1:0)+(x()<.25?1:0);for(let xe=0;xe<Q;xe++){const ue=$+(x()-.5)*2.6,Se=t*(.22+x()*.3);B.push({cx:Math.cos(ue)*Se+O,cz:Math.sin(ue)*Se+w,h:s*(.2+x()*.2),sig:t*(.09+x()*.05),rot:x()*Math.PI*2,sk:x(),spur:3+Math.floor(x()*3)})}return B})();function it(x,B){let $=0;for(const J of Vt){const Q=x-J.cx,xe=B-J.cz,ue=Math.exp(-(Q*Q+xe*xe)/(2*J.sig*J.sig));if(ue<.0025)continue;const Se=Math.pow(ue,1.22*L),ze=Math.cos(J.rot),se=Math.sin(J.rot),Te=Q*ze-xe*se,Re=Q*se+xe*ze,Pe=xh(Te*.011+J.sk*7,Re*.011-J.sk*4,{seed:e+17+((J.cx|0)&255),octaves:5,warp:.55}),we=Math.atan2(Re,Te),Be=.5+.5*Math.cos(we*J.spur+Pe*3);$+=J.h*Se*(.5+.5*Pe)*(.85+.3*Be)}return $}const Qe=_>0,He=[];if(Qe){const x=or(e*2246822519>>>0^2654435761),B=Vt[0]||{cx:0,cz:0},$=B.cx*.6+(x()-.5)*t*.12,J=B.cz*.6+(x()-.5)*t*.12,Q=Math.atan2(J,$)+(x()-.5)*1.6,xe=Math.cos(Q),ue=Math.sin(Q),Se=-ue,ze=xe,se=t*1.2,Te=48,Re=[];for(let we=0;we<=Te;we++){const Be=we/Te,Ne=Be*se,Le=(qn(Be*2.6+11.3,7.7,{seed:e+201,octaves:3})-.5)*t*.55*(.2+Be);Re.push({x:$+xe*Ne+Se*Le,z:J+ue*Ne+ze*Le,t:Be})}He.push(Re);const Pe=Re[Math.floor(Te*.8)];for(const we of[-1,1]){const Be=Q+we*(.34+x()*.26),Ne=Math.cos(Be),Le=Math.sin(Be),F=t*.55,K=[];for(let te=0;te<=16;te++){const ae=te/16;K.push({x:Pe.x+Ne*ae*F,z:Pe.z+Le*ae*F,t:.8+.2*ae})}He.push(K)}}function gt(x,B){let $=0,J=0;for(const Q of He)for(let xe=0;xe<Q.length;xe++){const ue=Q[xe],Se=x-ue.x,ze=B-ue.z,se=S*(.5+1.7*ue.t)+(ue.t>.78?S*2.4*(ue.t-.78)/.22:0),Te=Math.exp(-(Se*Se+ze*ze)/(se*se));Te>$&&($=Te,J=ue.t)}return{field:$,t:J}}function ke(x,B){if(!Qe)return 0;const{field:$,t:J}=gt(x,B);if($<.02)return 0;const Q=.32+.68*Ji(0,.42,J);return _*Q*$}function C(x,B){const $=xt(x,B);if($>.5){const ue=($-.5)*2,Se=Math.min(1,Math.hypot(x,B)/t),ze=z(x,B),se=qn(x*Z,B*Z,{seed:e,octaves:5,warp:d}),Te=xh(x*Z*1.7+9.7,B*Z*1.7-3.3,{seed:e+17,octaves:5,warp:d*.6}),Re=(1-Math.pow(Se,1.5))*a*.5,Pe=se*a*.85+Math.pow(Te,1.5)*a*1.1*(.35+f)+it(x,B)+Re,we=Fa(.03,.46,Ji(.3,.74,ze)),Be=Math.min(1,ue/we),Ne=Ji(0,1,Be)*(g*Fa(.35,.9,ze)),Le=Ji(we,Math.min(.98,we+.5),ue);return p+.5+Ne+Le*Pe-ke(x,B)}const J=(.5-$)*2,Q=(qn(x*.01,B*.01,{seed:e+90,octaves:3})-.5)*4*N;let xe=p-1-Math.pow(J,E)*m+Q;if(Qe&&G>0){const ue=gt(x,B),Se=Ji(.58,1,ue.t);xe-=_*G*ue.field*Se*.85}return xe}for(let x=0;x<r;x++)for(let B=0;B<r;B++){const[$,J]=X.cellToWorld(B,x),Q=C($,J),xe=X.idx(B,x),ue=C($+Y,J),Se=C($,J+Y),ze=Math.hypot(ue-Q,Se-Q)/Y,se=(Q-p)/Math.max(1,D),{season:Te}=oe($,J,se);X.season[xe]=Te;const Re=Q>p-.35;X.land[xe]=Re?1:0,X.channel[xe]=Qe&&gt($,J).field>.3?1:0;const Pe=z($,J),we=(qn($*.02+5.1,J*.02-2.7,{seed:e+88,octaves:3,warp:.4})-.5)*.13,Be=(H.coniferEnd??.84)*.78,Ne=se+we;let Le;Re?Ne>Be+.05?Le=ot.SNOW:ze>.92?Le=ot.ROCK:Q<=p+g*1.25&&ze<.34?Le=ot.SAND:Q<=p+g*.9&&Pe<.34?Le=ot.ROCK:Ne>Be-.06&&ze<.8?Le=ot.GRASSY_SNOW:se>.66?Le=ot.ROCK:se>.5&&ze>.62?Le=ot.DIRT:Le=ot.GRASS:Le=ot.SEAFLOOR,(Le===ot.SNOW||Le===ot.GRASSY_SNOW)&&(H.craggy??0)>0&&Ba($*.085+2.3,J*.085-4.1,e+211)<H.craggy*.6&&(Le=ot.ROCK);const F=H.fairway??0;if(F>0&&Le===ot.GRASS&&ze<.42){const te=p+g*1.25+(H.fairwayBand??24);if(Q<=te&&qn($*.011+7.7,J*.011-3.3,{seed:e+223,octaves:3,warp:.45})<.3+F*.62){Le=ot.FAIRWAY;const Ae=Math.max(3,H.bunkerSize??11);Ba($/Ae+41,J/Ae-17,e+233)<(H.bunkerDensity??0)*.45&&(Le=ot.SAND)}}X.material[xe]=Le;const K=(qn($*.05+3.1,J*.05-6.7,{seed:e+53,octaves:3,warp:.5})-.5)*ne*1.5;X.heightVox[xe]=Math.round((Q+K)/ne)}return X.meta={seed:e,radius:t,worldSize:W,cellSize:Y,vstep:ne,seaLevel:p,floorDepth:m,maxHeight:D},X}function Ji(n,e,t){const i=Math.max(0,Math.min(1,(t-n)/(e-n||1)));return i*i*(3-2*i)}function bh(n,e){const{res:t,cellSize:i,vstep:r,half:a}=n,{seaLevel:s,maxHeight:o,floorDepth:l}=n.meta,c=s-l-6,h=[],d=[],f=[],g=(D,L)=>n.heightVox[n.idx(D,L)]*r;function _(D,L){const O=n.idx(D,L),w=n.material[O],E=n.heightVox[O]*r,N=(Pa(D,L,e)-.5)*.09;let G;if(w===ot.SEAFLOOR){const ne=(s-E)/Math.max(1,l);G=Cx(ne+N*.4),n.channel&&n.channel[O]&&(G=hn(G,Rx,.55+N))}else if(w===ot.SAND){const ne=Math.max(0,Math.min(1,(E-s)/6));G=wh(ot.SAND,.25+ne*.6+N)}else if(w===ot.GRASS){const ne=Math.max(0,Math.min(1,(E-s)/Math.max(1,o)));G=Dx(n.season[O],.34+ne*.5+N)}else{const ne=Math.max(0,Math.min(1,(E-s)/Math.max(1,o)));G=wh(w,.32+ne*.55+N)}let W=0,Y=0;if(D>0&&(W+=n.heightVox[O-1],Y++),D<t-1&&(W+=n.heightVox[O+1],Y++),L>0&&(W+=n.heightVox[O-t],Y++),L<t-1&&(W+=n.heightVox[O+t],Y++),Y){const ne=n.heightVox[O]-W/Y,X=Math.max(.66,Math.min(1.14,1+ne*.11));G=[G[0]*X,G[1]*X,G[2]*X]}return G}function S(D,L,O,w,E,N,G,W,Y,ne,X,oe,Z,le,ve){const De=w-D,Fe=E-L,Ye=N-O,re=ne-D,ce=X-L,fe=oe-O;let _e=-(Fe*fe-Ye*ce),Ie=-(Ye*re-De*fe),Ge=-(De*ce-Fe*re);const Ve=Math.hypot(_e,Ie,Ge)||1;_e/=Ve,Ie/=Ve,Ge/=Ve;const ct=[D,L,O,G,W,Y,w,E,N,D,L,O,ne,X,oe,G,W,Y];for(let je=0;je<6;je++)h.push(ct[je*3],ct[je*3+1],ct[je*3+2]),d.push(_e,Ie,Ge),f.push(Z,le,ve)}for(let D=0;D<t;D++){let L=0;for(;L<t;){const O=n.idx(L,D),w=n.material[O],E=n.heightVox[O];let N=L;for(;N+1<t;){const ve=n.idx(N+1,D);if(n.material[ve]!==w||n.heightVox[ve]!==E)break;N++}const G=E*r,W=L*i-a,Y=(N+1)*i-a,ne=D*i-a,X=(D+1)*i-a,[oe,Z,le]=_(L,D);S(W,G,ne,Y,G,ne,Y,G,X,W,G,X,oe,Z,le),L=N+1}}const p=.8;for(let D=0;D<t;D++)for(let L=0;L<t;L++){const O=g(L,D),[w,E,N]=_(L,D),G=w*p,W=E*p,Y=N*p,ne=L*i-a,X=(L+1)*i-a,oe=D*i-a,Z=(D+1)*i-a,le=[[L-1,D,ne,oe,ne,Z],[L+1,D,X,Z,X,oe],[L,D-1,X,oe,ne,oe],[L,D+1,ne,Z,X,Z]];for(const[ve,De,Fe,Ye,re,ce]of le){let fe;if(n.inBounds(ve,De))fe=g(ve,De);else{if(O<=s+.5)continue;fe=c}O-fe<=.001||S(Fe,O,Ye,re,O,ce,re,fe,ce,Fe,fe,Ye,G,W,Y)}}const m=new Pn;m.setAttribute("position",new an(h,3)),m.setAttribute("normal",new an(d,3)),m.setAttribute("color",new an(f,3)),m.computeBoundingSphere();const R=new ca({vertexColors:!0,flatShading:!0,side:Jn,roughness:.95,metalness:0,transparent:!0}),A=n.meta.radius*1.05,M=Math.min(n.meta.radius*1.1,n.worldSize*.5*.98);R.onBeforeCompile=D=>{D.uniforms.uRFade0={value:A},D.uniforms.uRFade1={value:M},D.vertexShader=D.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vWorldXZ;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWorldXZ = (modelMatrix * vec4(transformed,1.0)).xz;`),D.fragmentShader=D.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vWorldXZ;
uniform float uRFade0;
uniform float uRFade1;`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
  float _r = length(vWorldXZ);
  gl_FragColor.a *= 1.0 - smoothstep(uRFade0, uRFade1, _r);`)};const H=new wt(m,R);return H.castShadow=!0,H.receiveShadow=!0,H.name="IslandVoxels",H.userData.quadVerts=h.length/3,H}function Lx(n,e,t){const i=n?.res||1,r=new Uint8Array(i*i*4),a=Math.max(1,t||n?.meta?.floorDepth||64);if(!n?.heightVox){const o=new fr(r,i,i,Kt);return o.needsUpdate=!0,o}for(let o=0;o<i;o++)for(let l=0;l<i;l++){const c=n.idx(l,o),h=n.heightVox[c]*n.vstep,d=Math.max(0,e-h),f=c*4;r[f]=Math.round(me.clamp(d/a,0,1)*255),r[f+1]=n.channel?.[c]?255:0,r[f+2]=n.land?.[c]?255:0,r[f+3]=255}const s=new fr(r,i,i,Kt);return s.wrapS=un,s.wrapT=un,s.magFilter=Ze,s.minFilter=Ze,s.colorSpace=nn,s.needsUpdate=!0,s}class Ix{constructor(e){this.group=new Kn,this.group.name="Sea";const t=Math.max(e.worldSize*12,26e3)*.5,i=e.seaLevel-(e.floorDepth||60)-10;this._horizon=new Oe("#bcd4d6"),this.floor=new wt(new po(t,96),new ho({color:new Oe("#0b4f68"),fog:!0})),this.floor.rotation.x=-Math.PI/2,this.floor.position.y=i,this.floor.renderOrder=1,this.group.add(this.floor),this._enabled=e.enable!==!1,this._seaLevel=e.seaLevel,this._surfaceLift=e.surfaceLift??.08,this._waterData=Lx(e.volume,e.seaLevel,e.floorDepth),this.surfaceMat=new ca({color:new Oe("#1f93a4"),transparent:!0,opacity:1,depthWrite:!1,roughness:.24,metalness:0,side:cn}),this.surfaceMat.forceSinglePass=!0;const r=e.radius*1.4,a=t*.96;this._sunDir=new P(0,1,0),this._sunCol=new Oe("#fff3df"),this.surfaceMat.onBeforeCompile=s=>{s.uniforms.uHorizon={value:this._horizon},s.uniforms.uF0={value:r},s.uniforms.uF1={value:a},s.uniforms.uSunDir={value:this._sunDir},s.uniforms.uSunCol={value:this._sunCol},s.uniforms.uGlint={value:.7},s.uniforms.uGlintSpread={value:1.1},s.uniforms.uSurfaceSpecular={value:1},s.uniforms.uCamPos={value:new P},s.uniforms.uTime={value:0},s.uniforms.uWaterData={value:this._waterData},s.uniforms.uWaterWorldSize={value:e.worldSize||e.radius*2.3},s.uniforms.uStage={value:e.surfaceStage??5},s.uniforms.uSurfaceAlpha={value:e.surfaceOpacity??.55},s.uniforms.uDepthTint={value:e.depthTint??.78},s.uniforms.uWaveHeight={value:e.waveHeight??1.92},s.uniforms.uWaveScale={value:e.waveScale??.0275},s.uniforms.uWaveRotation={value:e.waveRotation??143},s.uniforms.uDetailMix={value:e.detailMix??.42},s.uniforms.uWaveSpeed={value:e.waveSpeed??2.7},s.uniforms.uGlintSpeed={value:e.glintSpeed??3.5},s.uniforms.uGlintScale={value:e.glintScale??1.34},s.uniforms.uWaveChoppy={value:e.waveChoppy??5.95},s.uniforms.uNormalStrength={value:e.normalStrength??.4},s.uniforms.uRefractionStrength={value:e.refractionStrength??.18},s.uniforms.uLagoonTint={value:e.lagoonTint??.18},s.uniforms.uLandMask={value:e.landMask??1},s.uniforms.uDebugView={value:e.debugView??0},this._surfUniforms=s.uniforms;const o=`
uniform float uStage;
uniform float uTime;
uniform float uWaveHeight;
uniform float uWaveScale;
uniform float uWaveSpeed;
uniform float uGlintSpeed;
uniform float uGlintScale;
uniform float uWaveChoppy;
uniform float uWaveRotation;
float waterHash(vec2 p){ p=fract(p*vec2(123.34,456.21)); p+=dot(p,p+45.32); return fract(p.x*p.y); }
float waterNoise(vec2 p){ vec2 i=floor(p); vec2 f=fract(p); vec2 u=f*f*(3.0-2.0*f); return mix(mix(waterHash(i),waterHash(i+vec2(1.0,0.0)),u.x),mix(waterHash(i+vec2(0.0,1.0)),waterHash(i+vec2(1.0,1.0)),u.x),u.y); }
float waterOctave(vec2 uv,float choppy){ uv+=waterNoise(uv); vec2 wv=1.0-abs(sin(uv)); vec2 swv=abs(cos(uv)); wv=mix(wv,swv,wv); return pow(1.0-pow(clamp(wv.x*wv.y,0.0,1.0),0.65),max(0.5,choppy)); }
mat2 waterRot(float deg){ float a=radians(deg); float c=cos(a); float s=sin(a); return mat2(c,-s,s,c); }
float waterHeightAt(vec2 xz,float speedMul,float scaleMul){
  float freq=max(0.0001,uWaveScale*max(0.05,scaleMul));
  float amp=uWaveHeight;
  float chop=max(0.5,uWaveChoppy);
  float t=uTime*uWaveSpeed*max(0.0,speedMul);
  vec2 uv=waterRot(uWaveRotation)*xz;
  uv.x*=0.75;
  float h=0.0;
  mat2 octaveM=mat2(1.6,1.2,-1.2,1.6);
  for(int i=0;i<3;i++){
    float d=waterOctave((uv+vec2(t,t*0.63))*freq,chop)+waterOctave((uv-vec2(t*0.34,t))*freq,chop);
    h+=(d-1.0)*amp;
    uv=octaveM*uv;
    freq*=1.9;
    amp*=0.22;
    chop=mix(chop,1.0,0.2);
  }
  return h;
}
float waterHeight(vec2 xz){ return waterHeightAt(xz,1.0,1.0); }
vec3 waterWaveNormal(vec2 xz,float speedMul,float scaleMul){
  float eps=max(1.0,0.012/max(0.0001,uWaveScale*max(0.05,scaleMul)));
  float h0=waterHeightAt(xz,speedMul,scaleMul);
  float hx=waterHeightAt(xz+vec2(eps,0.0),speedMul,scaleMul);
  float hz=waterHeightAt(xz+vec2(0.0,eps),speedMul,scaleMul);
  return normalize(vec3(-(hx-h0)/eps,1.0,-(hz-h0)/eps));
}
`;s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
${o}
varying vec2 vWXZ;
varying vec3 vWPos;
varying float vWave;
`).replace("#include <begin_vertex>",`#include <begin_vertex>
  vec4 waterPreWorld = modelMatrix * vec4(transformed, 1.0);
  float waterWaveGate = step(2.5, uStage);
  float waterWave = waterHeight(waterPreWorld.xz) * waterWaveGate;
  transformed.z += waterWave;
  vec4 waterWorld = modelMatrix * vec4(transformed, 1.0);
  vWXZ = waterWorld.xz;
  vWPos = waterWorld.xyz;
  vWave = waterWave;
`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
${o}
varying vec2 vWXZ;
varying vec3 vWPos;
varying float vWave;
uniform vec3 uHorizon;
uniform float uF0;
uniform float uF1;
uniform vec3 uSunDir;
uniform vec3 uSunCol;
uniform float uGlint;
uniform float uGlintSpread;
uniform float uSurfaceSpecular;
uniform vec3 uCamPos;
uniform sampler2D uWaterData;
uniform float uWaterWorldSize;
uniform float uSurfaceAlpha;
uniform float uDepthTint;
uniform float uDetailMix;
uniform float uNormalStrength;
uniform float uRefractionStrength;
uniform float uLagoonTint;
uniform float uLandMask;
uniform float uDebugView;

vec4 waterSample(vec2 rawUv) {
  float inside = step(0.0, rawUv.x) * step(rawUv.x, 1.0) * step(0.0, rawUv.y) * step(rawUv.y, 1.0);
  vec4 wd = texture2D(uWaterData, clamp(rawUv, 0.0, 1.0));
  wd.r = mix(1.0, wd.r, inside);
  wd.g *= inside;
  wd.b *= inside;
  wd.a = inside;
  return wd;
}
`).replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
  float waterNormalGate = step(3.5, uStage);
  vec3 waterWorldNormal = waterWaveNormal(vWXZ, max(0.0, uGlintSpeed), max(0.05, uGlintScale));
  vec3 waterViewNormal = normalize((viewMatrix * vec4(waterWorldNormal, 0.0)).xyz);
  normal = normalize(mix(normal, waterViewNormal, waterNormalGate * clamp(uNormalStrength, 0.0, 2.0)));
`).replace("#include <color_fragment>",`#include <color_fragment>
  vec2 rawWaterUv = vWXZ / max(1.0, uWaterWorldSize) + 0.5;
  float detailGate = step(3.5, uStage);
  float distortGate = step(4.5, uStage);
  mat2 basis = waterRot(uWaveRotation);
  vec2 detailXZ = basis * vWXZ;
  vec2 dirA = normalize(basis * vec2(1.0, 0.33));
  vec2 dirB = normalize(waterRot(uWaveRotation + 71.0) * vec2(-0.25, 1.0));
  float t = uTime * uWaveSpeed;
  float broad = waterNoise(detailXZ * max(0.0001, uWaveScale) * 2.1 + dirA * t * 0.72);
  float fine = waterNoise(detailXZ * max(0.0001, uWaveScale) * 8.5 - dirB * t * 0.48);
  vec2 distort = (vec2(broad, fine) - 0.5) * uRefractionStrength * distortGate;
  vec4 waterData = waterSample(rawWaterUv + distort);
  float depth = waterData.r;
  float channel = waterData.g;
  float land = waterData.b;
  float waterMask = mix(1.0, 1.0 - smoothstep(0.14, 0.82, land), clamp(uLandMask, 0.0, 1.0));
  float clear = smoothstep(0.0, 0.2, depth);
  vec3 surfaceColor = vec3(0.10, 0.58, 0.66);
  vec3 shallowColor = vec3(0.08, 0.86, 0.93);
  vec3 midColor = vec3(0.02, 0.36, 0.45);
  vec3 deepColor = vec3(0.004, 0.055, 0.10);
  vec3 lagoonColor = vec3(0.13, 0.92, 0.84);
  vec3 depthColor = mix(shallowColor, midColor, smoothstep(0.02, 0.45, depth));
  depthColor = mix(depthColor, deepColor, smoothstep(0.36, 1.0, depth));
  depthColor = mix(depthColor, lagoonColor, clamp(channel * uLagoonTint, 0.0, 1.0));
  vec3 waterColor = mix(surfaceColor, depthColor, clamp(0.22 + uDepthTint * 0.62, 0.0, 0.95));
  float waveVis = clamp(vWave / max(0.001, uWaveHeight * 2.4), 0.0, 1.0);
  float detail = mix(broad, fine, clamp(uDetailMix, 0.0, 1.0));
  float crest = smoothstep(0.56, 0.95, max(waveVis, detail * 0.8));
  waterColor += vec3(0.08, 0.16, 0.15) * crest * detailGate * clear;
  float alpha = clamp(mix(0.16, uSurfaceAlpha, smoothstep(0.04, 0.9, depth)), 0.03, 1.0) * waterMask;
  vec3 dbgNormal = waterWaveNormal(vWXZ, max(0.0, uGlintSpeed), max(0.05, uGlintScale));
  if (uDebugView > 0.5) {
    float mode = floor(uDebugView + 0.5);
    if (mode == 1.0) waterColor = vec3(depth);
    if (mode == 2.0) waterColor = vec3(0.0, channel, channel);
    if (mode == 3.0) waterColor = vec3(waveVis, detail, crest);
    if (mode == 4.0) waterColor = dbgNormal * 0.5 + 0.5;
    if (mode == 5.0) waterColor = vec3(land, 0.0, 1.0 - land);
    alpha = mix(0.18, 0.9, max(max(waterColor.r, waterColor.g), waterColor.b)) * waterMask;
  }
  diffuseColor.rgb = waterColor;
  diffuseColor.a = alpha;
`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
  vec3 waterView = normalize(uCamPos - vWPos);
  vec3 waterGlintNormal = normalize(mix(vec3(0.0, 1.0, 0.0), waterWaveNormal(vWXZ, max(0.0, uGlintSpeed), max(0.05, uGlintScale)), step(3.5, uStage) * clamp(uNormalStrength, 0.0, 2.0)));
  float waterSpec = max(dot(reflect(-uSunDir, waterGlintNormal), waterView), 0.0);
  float waterSpread = clamp(uGlintSpread * 0.25, 0.0, 1.0);
  float waterCore = pow(waterSpec, mix(900.0, 70.0, waterSpread));
  float waterStreak = pow(waterSpec, mix(140.0, 14.0, waterSpread)) * 0.35;
  float waterGlint = (waterCore + waterStreak) * uGlint * uSurfaceSpecular * smoothstep(-0.02, 0.14, uSunDir.y);
  gl_FragColor.rgb += uSunCol * waterGlint;
  float waterFade = smoothstep(uF0, uF1, length(vWXZ));
  gl_FragColor.rgb = mix(gl_FragColor.rgb, uHorizon, waterFade);
  gl_FragColor.a = mix(gl_FragColor.a, 0.0, waterFade * waterFade);
`)},this.surface=new wt(new wn(t*2,t*2,320,320),this.surfaceMat),this.surface.rotation.x=-Math.PI/2,this.surface.renderOrder=4,this.group.add(this.surface),this.setLevel(e.seaLevel),this.setStyle(e),this.setEnabled(this._enabled)}setLevel(e){this._seaLevel=e,this.surface.position.y=e+this._surfaceLift}setEnabled(e){this._enabled=e!==!1,this.group.visible=this._enabled}setCaustic(){}setStyle(e={}){e.surfaceLift!==void 0&&(this._surfaceLift=me.clamp(e.surfaceLift,-1,2),this.setLevel(this._seaLevel)),this._surfUniforms&&(this._surfUniforms.uStage.value=me.clamp(e.surfaceStage??5,3,5),this._surfUniforms.uSurfaceAlpha.value=me.clamp(e.surfaceOpacity??.55,.02,1),this._surfUniforms.uSurfaceSpecular.value=1,this._surfUniforms.uDebugView.value=me.clamp(e.debugView??0,0,5),this._surfUniforms.uLandMask.value=me.clamp(e.landMask??1,0,1),this._surfUniforms.uDepthTint.value=me.clamp(e.depthTint??.78,0,1.5),this._surfUniforms.uWaveHeight.value=Math.max(0,e.waveHeight??1.92),this._surfUniforms.uWaveScale.value=Math.max(1e-4,e.waveScale??.0275),this._surfUniforms.uWaveRotation.value=e.waveRotation??143,this._surfUniforms.uDetailMix.value=me.clamp(e.detailMix??.42,0,1),this._surfUniforms.uWaveSpeed.value=Math.max(0,e.waveSpeed??2.7),this._surfUniforms.uGlintSpeed.value=Math.max(0,e.glintSpeed??3.5),this._surfUniforms.uGlintScale.value=Math.max(.05,e.glintScale??1.34),this._surfUniforms.uWaveChoppy.value=Math.max(.5,e.waveChoppy??5.95),this._surfUniforms.uNormalStrength.value=me.clamp(e.normalStrength??.4,0,2),this._surfUniforms.uRefractionStrength.value=me.clamp(e.refractionStrength??.18,0,.7),this._surfUniforms.uLagoonTint.value=Math.max(0,e.lagoonTint??.18))}setHorizon(e){this._horizon.copy(e),this.floor&&this.floor.material.color.copy(e).lerp(new Oe("#0b4f68"),.6)}setSun(e,t){this._sunDir.copy(e).normalize(),this._sunCol.copy(t)}setGlint(e,t){this._surfUniforms&&(this._surfUniforms.uGlint.value=Math.max(0,e),this._surfUniforms.uGlintSpread.value=Math.max(.2,t))}update(e,t){t&&this._surfUniforms&&this._surfUniforms.uCamPos.value.copy(t),this._surfUniforms&&(this._surfUniforms.uTime.value=e)}}function pf(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),a={},s={},o=n[0].morphTargetsRelative,l=new Pn;let c=0;for(let h=0;h<n.length;++h){const d=n[h];let f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const g in d.attributes){if(!i.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;a[g]===void 0&&(a[g]=[]),a[g].push(d.attributes[g]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const g in d.morphAttributes){if(!r.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;s[g]===void 0&&(s[g]=[]),s[g].push(d.morphAttributes[g])}if(e){let g;if(t)g=d.index.count;else if(d.attributes.position!==void 0)g=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,g,h),c+=g}}if(t){let h=0;const d=[];for(let f=0;f<n.length;++f){const g=n[f].index;for(let _=0;_<g.count;++_)d.push(g.getX(_)+h);h+=n[f].attributes.position.count}l.setIndex(d)}for(const h in a){const d=Ah(a[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in s){const d=s[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<d;++f){const g=[];for(let S=0;S<s[h].length;++S)g.push(s[h][S][f]);const _=Ah(g);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(_)}}return l}function Ah(n){let e,t,i,r=-1,a=0;for(let c=0;c<n.length;++c){const h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=h.count*t}const s=new e(a),o=new dn(s,t,i);let l=0;for(let c=0;c<n.length;++c){const h=n[c];if(h.isInterleavedBufferAttribute){const d=l/t;for(let f=0,g=h.count;f<g;f++)for(let _=0;_<t;_++){const S=h.getComponent(f,_);o.setComponent(f+d,_,S)}}else s.set(h.array,l);l+=h.count*t}return r!==void 0&&(o.gpuType=r),o}const mf=new Ja(.5,.5,1,6),gf=new Xi(1,1,1),vf=new wn(1,1);for(const n of[mf,gf,vf])n.deleteAttribute("uv");const Ps=new Ue,Qi=new ni,Rh=new P,Ch=new P,ki=new P,Ir=new P,oc=new P,cr=new P(0,1,0);let Dh=class{constructor(){this.parts=[]}_push(e,t){const i=e.clone().applyMatrix4(Ps),r=i.attributes.position.count,a=new Float32Array(r*3);for(let s=0;s<r;s++)a[s*3]=t[0],a[s*3+1]=t[1],a[s*3+2]=t[2];i.setAttribute("color",new dn(a,3)),this.parts.push(i)}seg(e,t,i,r){Rh.copy(e),Ch.copy(t),ki.subVectors(Ch,Rh);const a=Math.max(.001,ki.length());Qi.setFromUnitVectors(cr,ki.normalize()),oc.addVectors(e,t).multiplyScalar(.5),Ir.set(i*2,a,i*2),Ps.compose(oc,Qi,Ir),this._push(mf,r)}box(e,t,i,r,a,s,o){ki.copy(t).normalize(),Qi.setFromUnitVectors(cr,ki),s&&Qi.multiply(new ni().setFromAxisAngle(cr,s)),Ir.set(r,i,a),Ps.compose(e,Qi,Ir),this._push(gf,o)}card(e,t,i,r,a){ki.copy(t).normalize(),Qi.setFromUnitVectors(cr,ki),Ir.set(r,i,1),Ps.compose(e,Qi,Ir),this._push(vf,a)}finish(e,t){if(!this.parts.length)return null;const i=pf(this.parts,!1);for(const a of this.parts)a.dispose();i.computeVertexNormals();const r=new wt(i,new ca({vertexColors:!0,flatShading:!0,roughness:.8,metalness:0,side:t?cn:Jn}));return r.name=e,r.castShadow=!0,r.receiveShadow=!0,r}};const Nx=Math.PI*(3-Math.sqrt(5)),Ph=[.05,.17,.07],Lh=[.2,.52,.18],Ih=[.8,1,.3];function Nh(n,e,t){let i=Math.min(1,Math.max(0,n));i=Math.pow(i,1/Math.max(.2,t.shadeContrast));let r=i<.5?hn(Ph,Lh,i*2):hn(Lh,Ih,(i-.5)*2);return r=hn(r,Ph,t.shadeDark*Math.pow(1-i,1.4)*(.35+.65*e)),r=hn(r,Ih,t.shadeLime*Math.pow(i,1.6)*(1-.45*e)),r}const ln={bend:4.5,swayAmp:.06,swaySpeed:.42,height:18,trunkSegs:10,trunkBaseR:.81,trunkTopR:.22,ringFlare:2.08,frondCount:14,phyllo:96,crownLift:1,pitchSpread:1.39,frondLen:5,frondSpread:1.81,frondLenVar:.02,droop:1.45,droopBias:2.4,rachisWidth:.5,rachisStations:5,leaflets:16,leafLenMax:2.22,leafEnvExp:.68,leafCurl:.45,leafCurlGain:.9,leafWidthMax:.22,leafOut:.55,shadeDark:.84,shadeLime:.87,shadeContrast:.4};function Ox(n){return n()<.68?15+5.5*Math.pow(n(),.85):19+5*n()}function Ux(n){const e=(t,i)=>t*(1+(n()*2-1)*i);return{...ln,height:Ox(n),bend:2.6+n()*3.2,trunkSegs:8+(n()*7|0),trunkBaseR:e(ln.trunkBaseR,.16),trunkTopR:e(ln.trunkTopR,.22),ringFlare:e(ln.ringFlare,.18),frondCount:11+(n()*8|0),phyllo:ln.phyllo+(n()*2-1)*7,crownLift:e(ln.crownLift,.14),pitchSpread:e(ln.pitchSpread,.22),frondLen:4.3+n()*1.9,frondSpread:1.55+n()*.55,droop:1.15+n()*.45,droopBias:1.9+n()*.6,leaflets:13+(n()*7|0),leafLenMax:e(ln.leafLenMax,.16),leafEnvExp:e(ln.leafEnvExp,.18),leafCurl:e(ln.leafCurl,.3),leafCurlGain:e(ln.leafCurlGain,.22),leafWidthMax:e(ln.leafWidthMax,.22),leafOut:e(ln.leafOut,.16),shadeDark:Math.min(1,e(ln.shadeDark,.07)),shadeLime:Math.min(1,e(ln.shadeLime,.07)),shadeContrast:e(ln.shadeContrast,.18)}}function Fx(n,e){const t=new Dh,i=new Dh,r=n.height,a=Math.max(4,n.trunkSegs|0),s=(e()-.5)*n.bend,o=(e()-.5)*n.bend,l=[];for(let p=0;p<=a;p++){const m=p/a;l.push(new P(s*Math.sin(m*Math.PI)+o*m*m,m*r,o*Math.sin(m*Math.PI*.8)-s*m*m*.6))}for(let p=0;p<a;p++){const m=p/a,R=me.lerp(n.trunkBaseR,n.trunkTopR,m),A=hn(gn.palmTrunkLow,gn.palmTrunkHigh,m);t.seg(l[p],l[p+1],R,A);const M=hn(A,[A[0]*.66,A[1]*.62,A[2]*.5],.7),H=oc.copy(l[p]).lerp(l[p+1],.5).clone();t.box(H,cr,r/a*.42,R*n.ringFlare,R*n.ringFlare,p*Nx,M)}const c=l[a],h=Math.max(1,n.frondCount|0),d=me.degToRad(n.phyllo),f=Math.max(3,n.rachisStations|0);for(let p=0;p<h;p++){const m=p*d,R=new P(Math.cos(m),0,Math.sin(m)),A=h>1?p/(h-1):0,M=n.crownLift+n.pitchSpread*(1-A)-.15*A,H=n.frondLen*(1-n.frondLenVar*.5+e()*n.frondLenVar),D=[];for(let O=0;O<=f;O++){const w=O/f;let E=w*w*(6-4*w+w*w)/3;E=Math.pow(Math.max(0,E),n.droopBias);const N=Math.sin(w*Math.PI*.5)*M;D.push(new P(R.x*H*w*n.frondSpread,N-n.droop*H*E,R.z*H*w*n.frondSpread))}for(let O=0;O<f;O++){const w=me.lerp(n.rachisWidth,n.rachisWidth*.3,O/f),E=D[O],N=D[O+1];i.card(E.clone().lerp(N,.5),N.clone().sub(E),E.distanceTo(N),w,Nh(.1+.3*O/f,A,n))}const L=Math.max(2,n.leaflets|0);for(let O=1;O<L;O++){const w=O/L,E=Math.min(f-1,w*f|0),N=D[E].clone().lerp(D[E+1],w*f-E),G=D[E+1].clone().sub(D[E]).normalize(),W=ki.crossVectors(G,cr).normalize(),Y=Math.pow(Math.sin(w*Math.PI),n.leafEnvExp),ne=(.4+Y)*n.leafLenMax,X=n.leafCurl+n.leafCurlGain*(w+n.droop*.5),oe=Nh(.12+.88*w,A,n);for(const Z of[-1,1]){const le=W.clone().multiplyScalar(Z*n.leafOut).addScaledVector(G,1-n.leafOut).addScaledVector(cr,-X).normalize(),ve=N.clone().addScaledVector(le,ne*.5);i.card(ve,le,ne,.06+n.leafWidthMax*Y,oe)}}}const g=new Kn,_=t.finish("PalmTrunk",!1),S=i.finish("PalmCrown",!0);return _&&g.add(_),S&&(S.position.copy(c),g.add(S)),g.userData.sway={amp:n.swayAmp,speed:n.swaySpeed,phase:e()*6.28,crown:S},g.name="Palm",g}function Bx(n){const e=or(n>>>0||1);return Fx(Ux(e),e)}const lc=new Xi(1,1,1),_f=new Ja(.5,.5,1,6),Sf=new Gc(.5,1,7);for(const n of[lc,_f,Sf])n.deleteAttribute("uv");const Oh=new Ue,Uh=new ni,Fh=new Fn,Bh=new P,Hh=new P;class xf{constructor(){this.parts=[]}_add(e,t,i,r,a,s,o,l,c,h,d){const f=e.clone();Fh.set(l,c,h),Uh.setFromEuler(Fh),Bh.set(t,i,r),Hh.set(a,s,o),Oh.compose(Bh,Uh,Hh),f.applyMatrix4(Oh);const g=f.attributes.position.count,_=new Float32Array(g*3);for(let S=0;S<g;S++)_[S*3]=d[0],_[S*3+1]=d[1],_[S*3+2]=d[2];f.setAttribute("color",new dn(_,3)),this.parts.push(f)}box(e,t,i,r,a,s,o,l){this._add(lc,e,t,i,r,a,s,0,o,0,l)}boxR(e,t,i,r,a,s,o,l,c,h){this._add(lc,e,t,i,r,a,s,o,l,c,h)}cyl(e,t,i,r,a,s,o){this._add(_f,e,t,i,a*2,s,r*2,0,0,0,o)}cone(e,t,i,r,a,s){this._add(Sf,e,t,i,r*2,a,r*2,0,0,0,s)}build(e){const t=pf(this.parts,!1);for(const a of this.parts)a.dispose();t.computeVertexNormals();const i=new ca({vertexColors:!0,flatShading:!0,roughness:.85,metalness:0}),r=new wt(t,i);return r.name=e,r.castShadow=!0,r}}function Hx(n){const e=new xf,t=13+n()*6;e.cyl(0,t*.32,0,.34,.5,t*.64,gn.coniferTrunk);const i=6;for(let r=0;r<i;r++){const a=r/(i-1),s=t*.28+a*t*.7,o=me.lerp(3.4,.5,a),l=t*.22;e.cone(0,s+l*.5,0,o,l,hn(gn.coniferLow,gn.coniferHigh,.2+a*.7))}return e.build("Conifer")}function sl(n,e){const t=new xf,i=8+n()*4;let r=0,a=0;for(let c=0;c<3;c++){const h=c/3,d=h*i*.62;r+=(n()-.5)*.5,a+=(n()-.5)*.5,t.cyl(r,d+i*.11,a,.34,.5-h*.12,i*.22,hn(gn.broadleafTrunkLow,gn.broadleafTrunkHigh,h))}const s=i*.62+1.2,o=4+(n()*3|0);for(let c=0;c<o;c++){const h=c/o*Math.PI*2+n(),d=1.6+n()*1.8;t.boxR(r+Math.cos(h)*d*.5,s-.4+n()*.6,a+Math.sin(h)*d*.5,.22,.22,d,0,-h,.4+n()*.3,e==="winter"?gn.winterBark:gn.broadleafTrunkLow)}if(e==="winter"){for(let c=0;c<10;c++){const h=n()*Math.PI*2,d=n()*2.4,f=r+Math.cos(h)*d,g=a+Math.sin(h)*d,_=s+(n()-.2)*2.2;t.boxR(f,_,g,.12,.12,1+n(),0,-h,.6,gn.winterBark),n()>.45&&t.box(f,_+.5,g,.5,.28,.5,0,hn(gn.winterSnow,gn.winterCyan,.25))}return t.build("BroadleafWinter")}const l=e==="autumn"?7:13;for(let c=0;c<l;c++){const h=n()*Math.PI*2,d=n()*2.6,f=r+Math.cos(h)*d,g=a+Math.sin(h)*d,_=s+(n()-.3)*2.6,S=1.5+n()*1.8;let p;e==="autumn"?(p=gn.autumnLeaf[n()*3|0],p=hn(p,[p[0]*.8,p[1]*.8,p[2]*.7],n()*.4)):p=hn(gn.summerLeafLow,gn.summerLeafHigh,n()),t.box(f,_,g,S,S*.85,S,n()*.6,p)}return t.build(e==="autumn"?"BroadleafAutumn":"BroadleafSummer")}function zx(n,e){const t=or(e>>>0);switch(n){case"palm":return Bx(e);case"conifer":return Hx(t);case"autumn":return sl(t,"autumn");case"winter":return sl(t,"winter");case"summer":default:return sl(t,"summer")}}const Nr=new wn(2,2),er=new oa(-1,1,1,-1,0,1),Gx=`
  float godInUv(vec2 uv) {
    return step(0.0, uv.x) * step(uv.x, 1.0) * step(0.0, uv.y) * step(uv.y, 1.0);
  }

  float godLum(vec3 c) {
    return max(max(c.r, c.g), c.b);
  }

  float godSky(vec2 uv) {
    return smoothstep(0.999, 1.0, texture2D(tDepth, uv).x) * godInUv(uv);
  }

  float godForeground(vec2 uv) {
    float inUv = godInUv(uv);
    float depth = texture2D(tDepth, uv).x;
    float sky = smoothstep(0.999, 1.0, depth);
    float nearGeom = 1.0 - smoothstep(0.992, 0.9995, depth);
    return (1.0 - sky) * nearGeom * inUv;
  }

  float godEdgeBase(vec2 uv) {
    float sky = godSky(uv);
    vec2 px = uGodTexel * max(0.35, uGodEdgeWidth);
    float fg = 0.0;
    fg = max(fg, godForeground(uv + vec2( px.x, 0.0)));
    fg = max(fg, godForeground(uv + vec2(-px.x, 0.0)));
    fg = max(fg, godForeground(uv + vec2(0.0,  px.y)));
    fg = max(fg, godForeground(uv + vec2(0.0, -px.y)));
    return sky * fg;
  }

  float godEdge(vec2 uv) {
    vec2 px = uGodTexel * max(0.35, uGodEdgeWidth);
    float e = godEdgeBase(uv);
    // A perfectly long horizontal horizon line is also a depth edge, but it
    // transports into an ugly slab. Suppress laterally continuous edges and
    // keep jagged/curved mountain silhouette fragments.
    float lateral = 0.5 * (
      godEdgeBase(uv + vec2(px.x * 6.0, 0.0)) +
      godEdgeBase(uv - vec2(px.x * 6.0, 0.0))
    );
    float lineReject = 1.0 - smoothstep(0.35, 0.95, lateral);
    return e * lineReject * uGodEdgeGain;
  }

  void godSourceFields(vec2 uv, vec2 rayUV, out vec3 src, out float baseScalar, out float edgeScalar) {
    float inUv = godInUv(uv);
    vec3 s = texture2D(tScene, uv).rgb;
    float lum = godLum(s);
    float rawSrc = max(0.0, lum - uGodThr) * inUv;
    float sky = godSky(uv);
    float nearSun = exp(-dot(uv - rayUV, uv - rayUV) * 5.5);
    float cleanSrc = sky * nearSun * smoothstep(max(0.0, uGodThr - 0.28), 1.0, lum) * inUv;
    vec3 baseSrc = mix(s * rawSrc, vec3(cleanSrc), uGodSource);
    baseScalar = max(max(baseSrc.r, baseSrc.g), baseSrc.b);
    edgeScalar = 0.0;
    if (uGodEdgeSource > 0.001 || (uGodDebug > 1.5 && uGodDebug < 2.5)) {
      edgeScalar = godEdge(uv) * nearSun;
    }
    src = mix(baseSrc, vec3(edgeScalar), uGodEdgeSource);
  }

  vec3 godMarch(vec2 vUv) {
    if ((uGod < 0.001 && uGodDebug < 0.5) || uSunVis <= 0.001) return vec3(0.0);
    vec2 rayUV = clamp(uSunUV, vec2(0.0), vec2(1.0));
    vec3 debugSrc; float debugBase; float debugEdge;
    godSourceFields(vUv, rayUV, debugSrc, debugBase, debugEdge);
    if (uGodDebug > 0.5 && uGodDebug < 1.5) return vec3(debugBase) * uGodDebugGain;
    if (uGodDebug > 1.5 && uGodDebug < 2.5) return vec3(debugEdge) * uGodDebugGain;

    vec2 delta = (rayUV - vUv) / float(uGodN) * uGodDensity;
    vec2 uv = vUv; float decay = 1.0; vec3 acc = vec3(0.0);
    for (int i = 0; i < 48; i++) {
      if (i >= uGodN) break;
      uv += delta;
      vec3 src; float baseScalar; float edgeScalar;
      godSourceFields(uv, rayUV, src, baseScalar, edgeScalar);
      float gm = mix(1.0, smoothstep(rayUV.y - 0.30, rayUV.y + 0.04, uv.y), uGodHorizon);
      acc += src * gm * decay * uGodW;
      decay *= uGodDecay;
    }
    acc /= float(uGodN);
    float radial = smoothstep(uGodRadius, 0.0, distance(vUv, rayUV));
    vec3 tint = mix(uHazeColor, uSunCol, uGodTint);
    float a = (acc.r + acc.g + acc.b) * 0.3333;
    return tint * a * uGodExp * max(uGod, step(2.5, uGodDebug)) * radial * uSunVis;
  }`,kx=()=>({tScene:{value:null},tDepth:{value:null},uSunUV:{value:new Ee(.5,.7)},uSunVis:{value:0},uHazeColor:{value:new Oe("#bcd4d6")},uSunCol:{value:new Oe("#ffd9a0")},uGod:{value:0},uGodN:{value:16},uGodDensity:{value:.6},uGodDecay:{value:.93},uGodW:{value:.6},uGodExp:{value:.9},uGodThr:{value:.62},uGodHorizon:{value:.5},uGodRadius:{value:1.1},uGodTint:{value:.5},uGodSource:{value:0},uGodEdgeSource:{value:0},uGodEdgeWidth:{value:1.2},uGodEdgeGain:{value:1},uGodTexel:{value:new Ee(1/256,1/144)},uGodDebug:{value:0},uGodDebugGain:{value:1}});class Wx{constructor(e){this.renderer=e;const t=e.getPixelRatio(),i=Math.max(2,window.innerWidth*t|0),r=Math.max(2,window.innerHeight*t|0);this.sceneRT=new Ot(i,r,{depthBuffer:!0,stencilBuffer:!1,type:Bt,magFilter:Ze,minFilter:Ze}),this.sceneRT.depthTexture=new Ka(i,r),this.sceneRT.depthTexture.format=ur,this.sceneRT.depthTexture.type=Ai,this.sceneRT.texture.colorSpace=_n,this.bloomRT=new Ot(i/4|0,r/4|0,{depthBuffer:!1,stencilBuffer:!1,type:Bt,magFilter:Ze,minFilter:Ze}),this.bloomRT.texture.colorSpace=_n,this._godScale=.25,this.godRT=new Ot(Math.max(1,i*this._godScale|0),Math.max(1,r*this._godScale|0),{depthBuffer:!1,stencilBuffer:!1,type:Bt,magFilter:Ze,minFilter:Ze}),this.godRT.texture.colorSpace=_n,this.godBlurA=this.godRT.clone(),this.godBlurB=this.godRT.clone(),this.godBlurA.texture.colorSpace=_n,this.godBlurB.texture.colorSpace=_n,this.brightMat=new Nt({uniforms:{tScene:{value:null},uTexel:{value:new Ee},uThresh:{value:.72}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position.xy,0.0,1.0); }",fragmentShader:`
        varying vec2 vUv; uniform sampler2D tScene; uniform vec2 uTexel; uniform float uThresh;
        vec3 bp(vec2 o){ vec3 c=texture2D(tScene,vUv+o).rgb; float l=max(max(c.r,c.g),c.b);
          return c*smoothstep(uThresh,1.0,l); }
        void main(){
          vec3 s = bp(vec2(0.0));
          s += bp(vec2( uTexel.x,0.0))+bp(vec2(-uTexel.x,0.0));
          s += bp(vec2(0.0, uTexel.y))+bp(vec2(0.0,-uTexel.y));
          s += bp(uTexel)+bp(-uTexel)+bp(vec2(uTexel.x,-uTexel.y))+bp(vec2(-uTexel.x,uTexel.y));
          gl_FragColor = vec4(s/9.0, 1.0);
        }`,depthTest:!1,depthWrite:!1}),this.godMat=new Nt({uniforms:kx(),vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position.xy,0.0,1.0); }",fragmentShader:`
        varying vec2 vUv;
        uniform sampler2D tScene, tDepth;
        uniform vec2 uSunUV, uGodTexel; uniform float uSunVis;
        uniform vec3 uHazeColor, uSunCol;
        uniform float uGod, uGodDensity, uGodDecay, uGodW, uGodExp, uGodThr, uGodHorizon, uGodRadius, uGodTint, uGodSource;
        uniform float uGodEdgeSource, uGodEdgeWidth, uGodEdgeGain, uGodDebug, uGodDebugGain;
        uniform int uGodN;
        ${Gx}
        void main(){ gl_FragColor = vec4(godMarch(vUv), 1.0); }`,depthTest:!1,depthWrite:!1}),this.godBlurMat=new Nt({uniforms:{tGod:{value:null},uGodTexel:{value:new Ee(1/256,1/144)},uDirection:{value:new Ee(1,0)},uRadius:{value:1}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position.xy,0.0,1.0); }",fragmentShader:`
        varying vec2 vUv;
        uniform sampler2D tGod;
        uniform vec2 uGodTexel, uDirection;
        uniform float uRadius;
        void main(){
          vec2 o = uDirection * uGodTexel * max(0.0, uRadius);
          vec3 c = texture2D(tGod, vUv).rgb * 0.34;
          c += texture2D(tGod, vUv + o).rgb * 0.23;
          c += texture2D(tGod, vUv - o).rgb * 0.23;
          c += texture2D(tGod, vUv + o * 2.0).rgb * 0.10;
          c += texture2D(tGod, vUv - o * 2.0).rgb * 0.10;
          gl_FragColor = vec4(c, 1.0);
        }`,depthTest:!1,depthWrite:!1,toneMapped:!1}),this.overlayMat=new Nt({uniforms:{tGod:{value:null},tGodBlur:{value:null},uGodBlur:{value:0},uGodSharp:{value:0},uGodTexel:{value:new Ee}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position.xy,0.0,1.0); }",fragmentShader:`
        varying vec2 vUv;
        uniform sampler2D tGod, tGodBlur;
        uniform float uGodSharp, uGodBlur;
        uniform vec2 uGodTexel;
        void main(){
          vec2 g = (floor(vUv / uGodTexel) + 0.5) * uGodTexel;
          vec2 guv = mix(vUv, g, uGodSharp);
          vec3 raw = texture2D(tGod, guv).rgb;
          vec3 soft = texture2D(tGodBlur, guv).rgb;
          gl_FragColor = vec4(mix(raw, soft, uGodBlur), 1.0);
        }`,blending:El,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),this.debugMat=new Nt({uniforms:{tGod:{value:null},tGodBlur:{value:null},uGodBlur:{value:0},uGodSharp:{value:0},uGodTexel:{value:new Ee}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position.xy,0.0,1.0); }",fragmentShader:`
        varying vec2 vUv;
        uniform sampler2D tGod, tGodBlur;
        uniform float uGodSharp, uGodBlur;
        uniform vec2 uGodTexel;
        void main(){
          vec2 g = (floor(vUv / uGodTexel) + 0.5) * uGodTexel;
          vec2 guv = mix(vUv, g, uGodSharp);
          vec3 raw = texture2D(tGod, guv).rgb;
          vec3 soft = texture2D(tGodBlur, guv).rgb;
          gl_FragColor = vec4(mix(raw, soft, uGodBlur), 1.0);
        }`,depthTest:!1,depthWrite:!1,toneMapped:!1}),this.compMat=new Nt({uniforms:{tScene:{value:null},tBloom:{value:null},tGod:{value:null},tGodBlur:{value:null},uBloom:{value:0},uHaze:{value:0},uHazeColor:{value:new Oe("#bcd4d6")},uSunCol:{value:new Oe("#ffd9a0")},uSunUV:{value:new Ee(.5,.7)},uSunVis:{value:0},uGod:{value:0},uGodCompare:{value:0},uGodBlur:{value:0},uGodSharp:{value:0},uGodTexel:{value:new Ee}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position.xy,0.0,1.0); }",fragmentShader:`
        varying vec2 vUv;
        uniform sampler2D tScene, tBloom, tGod, tGodBlur;
        uniform float uBloom, uHaze, uSunVis, uGod, uGodCompare, uGodBlur, uGodSharp;
        uniform vec3 uHazeColor, uSunCol; uniform vec2 uSunUV, uGodTexel;
        void main(){
          vec3 col = texture2D(tScene, vUv).rgb;

          // God rays — UPSAMPLE the low-res march. uGodSharp snaps the
          // sample to the godRT texel grid so the raw downsampled blocks
          // are visible (a deliberate tuning aid, not a defect).
          if (uGod > 0.001 && uSunVis > 0.001 && (uGodCompare < 0.5 || vUv.x >= 0.5)) {
            vec2 g = (floor(vUv / uGodTexel) + 0.5) * uGodTexel;
            vec2 guv = mix(vUv, g, uGodSharp);
            vec3 raw = texture2D(tGod, guv).rgb;
            vec3 soft = texture2D(tGodBlur, guv).rgb;
            col += mix(raw, soft, uGodBlur);
          }

          // Aerial haze — sky-coloured veil, thicker toward the horizon and a
          // SOFT broad forward-scatter near the sun (no hard ring). Screen-
          // space approx (no depth pass — the expensive path we skip on
          // mobile); independent of the Render-panel Horizon-Haze safety net.
          if (uHaze > 0.001) {
            float horiz = smoothstep(0.62, 0.18, vUv.y);
            float d = distance(vUv, uSunUV);
            float sunGlow = exp(-d * d * 2.2) * 0.30 * uSunVis;
            col = mix(col, uHazeColor, clamp(uHaze * (0.35 * horiz + sunGlow), 0.0, 0.9));
          }

          if (uBloom > 0.001) col += texture2D(tBloom, vUv).rgb * uBloom;

          gl_FragColor = vec4(col, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,depthTest:!1,depthWrite:!1}),this._brightQuad=new wt(Nr,this.brightMat),this._godQuad=new wt(Nr,this.godMat),this._godBlurQuad=new wt(Nr,this.godBlurMat),this._overlayQuad=new wt(Nr,this.overlayMat),this._debugQuad=new wt(Nr,this.debugMat),this._compQuad=new wt(Nr,this.compMat),this._brightScene=new jn().add(this._brightQuad),this._godScene=new jn().add(this._godQuad),this._godBlurScene=new jn().add(this._godBlurQuad),this._overlayScene=new jn().add(this._overlayQuad),this._debugScene=new jn().add(this._debugQuad),this._compScene=new jn().add(this._compQuad)}setSize(){const e=this.renderer.getPixelRatio(),t=Math.max(2,window.innerWidth*e|0),i=Math.max(2,window.innerHeight*e|0);this.sceneRT.setSize(t,i),this.bloomRT.setSize(t/4|0,i/4|0),this._sizeGod(t,i)}_sizeGod(e,t){const i=Math.max(1,e*this._godScale|0),r=Math.max(1,t*this._godScale|0);(this.godRT.width!==i||this.godRT.height!==r)&&this.godRT.setSize(i,r),(this.godBlurA.width!==i||this.godBlurA.height!==r)&&this.godBlurA.setSize(i,r),(this.godBlurB.width!==i||this.godBlurB.height!==r)&&this.godBlurB.setSize(i,r),this.compMat.uniforms.uGodTexel.value.set(1/i,1/r),this.godMat.uniforms.uGodTexel.value.set(1/i,1/r),this.godBlurMat.uniforms.uGodTexel.value.set(1/i,1/r)}render(e,t,i){const r=i.bloom||0,a=i.haze||0,s=i.god||{},o=i.sunFade??(i.sunVisible?1:0),l=Math.max(0,Math.min(3,s.debugView??0)),c=((s.intensity||0)>0||l>0)&&o>.001,h=this.renderer,d=c&&r<=0&&a<=0;if(r<=0&&a<=0&&!c){h.setRenderTarget(null),h.render(e,t);return}const f=h.getDrawingBufferSize(new Ee);if((this.sceneRT.width!==f.x||this.sceneRT.height!==f.y)&&(this.sceneRT.setSize(f.x,f.y),this.bloomRT.setSize(Math.max(1,f.x/4|0),Math.max(1,f.y/4|0))),c){const p=Math.max(.04,Math.min(1,s.resScale??.25));p!==this._godScale&&(this._godScale=p),this._sizeGod(f.x,f.y)}if(h.setRenderTarget(this.sceneRT),h.render(e,t),r>0&&(this.brightMat.uniforms.tScene.value=this.sceneRT.texture,this.brightMat.uniforms.uTexel.value.set(1/this.bloomRT.width,1/this.bloomRT.height),h.setRenderTarget(this.bloomRT),h.render(this._brightScene,er)),c){const p=this.godMat.uniforms;p.tScene.value=this.sceneRT.texture,p.tDepth.value=this.sceneRT.depthTexture,i.hazeColor&&p.uHazeColor.value.copy(i.hazeColor),i.sunCol&&p.uSunCol.value.copy(i.sunCol),i.sunUV&&p.uSunUV.value.set(i.sunUV.x,i.sunUV.y),p.uSunVis.value=o,p.uGod.value=s.intensity||0,p.uGodN.value=Math.max(6,Math.min(48,(s.samples||16)|0)),p.uGodDensity.value=s.density??.6,p.uGodDecay.value=s.decay??.93,p.uGodW.value=s.weight??.6,p.uGodExp.value=s.exposure??.9,p.uGodThr.value=s.threshold??.62,p.uGodHorizon.value=s.horizon??.5,p.uGodRadius.value=s.radius??1.1,p.uGodTint.value=s.tint??.5,p.uGodSource.value=Math.max(0,Math.min(1,s.source??0)),p.uGodEdgeSource.value=Math.max(0,Math.min(1,s.edgeSource??0)),p.uGodEdgeWidth.value=Math.max(.35,Math.min(8,s.edgeWidth??1.2)),p.uGodEdgeGain.value=Math.max(0,Math.min(12,s.edgeGain??1)),p.uGodDebug.value=l,p.uGodDebugGain.value=Math.max(.1,Math.min(20,s.debugGain??1)),h.setRenderTarget(this.godRT),h.render(this._godScene,er)}const g=c&&s.blurEnable?Math.max(0,Math.min(1,s.blurAmount??.18)):0;let _=this.godRT.texture;if(g>.001){const p=this.godBlurMat.uniforms;p.uRadius.value=Math.max(.05,Math.min(8,s.blurRadius??1.5));const m=Math.max(1,Math.min(4,(s.blurPasses??1)|0));for(let R=0;R<m;R++)p.tGod.value=_,p.uDirection.value.set(1,0),h.setRenderTarget(this.godBlurA),h.render(this._godBlurScene,er),p.tGod.value=this.godBlurA.texture,p.uDirection.value.set(0,1),h.setRenderTarget(this.godBlurB),h.render(this._godBlurScene,er),_=this.godBlurB.texture}if(l>0){const p=this.debugMat.uniforms;p.tGod.value=this.godRT.texture,p.tGodBlur.value=_,p.uGodBlur.value=g,p.uGodSharp.value=Math.max(0,Math.min(1,s.sharp??0)),p.uGodTexel.value.copy(this.compMat.uniforms.uGodTexel.value),h.setRenderTarget(null),h.render(this._debugScene,er);return}if(d){const p=h.autoClear;h.setRenderTarget(null),h.autoClear=!0,h.setScissorTest(!1),h.render(e,t);const m=this.overlayMat.uniforms;if(m.tGod.value=this.godRT.texture,m.tGodBlur.value=_,m.uGodBlur.value=g,m.uGodSharp.value=Math.max(0,Math.min(1,s.sharp??0)),m.uGodTexel.value.copy(this.compMat.uniforms.uGodTexel.value),h.autoClear=!1,s.compare){const R=h.getSize(new Ee),A=Math.floor(R.x*.5);h.setScissorTest(!0),h.setScissor(A,0,R.x-A,R.y)}h.render(this._overlayScene,er),h.setScissorTest(!1),h.autoClear=p;return}const S=this.compMat.uniforms;S.tScene.value=this.sceneRT.texture,S.tBloom.value=this.bloomRT.texture,S.tGod.value=this.godRT.texture,S.tGodBlur.value=_,S.uBloom.value=r,S.uHaze.value=a,i.hazeColor&&S.uHazeColor.value.copy(i.hazeColor),i.sunCol&&S.uSunCol.value.copy(i.sunCol),i.sunUV&&S.uSunUV.value.set(i.sunUV.x,i.sunUV.y),S.uSunVis.value=o,S.uGod.value=c?1:0,S.uGodCompare.value=s.compare?1:0,S.uGodBlur.value=g,S.uGodSharp.value=Math.max(0,Math.min(1,s.sharp??0)),h.setRenderTarget(null),h.render(this._compScene,er)}dispose(){this.sceneRT.dispose(),this.bloomRT.dispose(),this.godRT.dispose(),this.godBlurA.dispose(),this.godBlurB.dispose(),this.brightMat.dispose(),this.godMat.dispose(),this.godBlurMat.dispose(),this.overlayMat.dispose(),this.debugMat.dispose(),this.compMat.dispose()}}const zh=new P(0,Ut.groundRadius+.35,0),Gh=()=>new Promise(n=>requestAnimationFrame(n)),Vx=[Ip,bc,qs],Xx=new Oe("#081018"),Yx=new Oe("#ff00ff"),qx=jx();class $x{constructor(e,t,i={}){this.container=e,this.store=t,this.loader=i.loader||null,this.elapsed=0,this.treeCount=0,this._terrainDirty=!1,this._regenTimer=null,this._regenToken=0,this._hasGenerated=!1,this.asyncRegenerate=!!i.asyncRegenerate,this.SeaClass=i.SeaClass||Ix,this.afterGenerate=i.afterGenerate||null,this.mobileProfile=qx,this.renderer=new uf({antialias:!this.mobileProfile.mobile,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,this.mobileProfile.pixelRatioCap)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.outputColorSpace=It,this.renderer.toneMapping=zd,this.renderer.toneMappingExposure=t.get("render.exposure"),this.renderer.info.autoReset=!1,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=qs,e.appendChild(this.renderer.domElement),this.scene=new jn;const r=t.get("render.fov");this.camera=new Dn(r,window.innerWidth/window.innerHeight,.5,32e3),this.camera.position.set(420,230,480),this.camera.lookAt(0,t.get("water.seaLevel")+30,0),this.transmittanceLUT=new lx,this.skyViewLUT=new ux,this.skyViewLUT.setTransmittanceLUT(this.transmittanceLUT.texture),this.skyViewLUT.setObserverPosition(zh),this.backdrop=new fx,this.backdrop.setObserver(zh),this.backdrop.setLUTs(this.skyViewLUT.texture,this.transmittanceLUT.texture),this.scene.add(this.backdrop.mesh),this.sun=this._makeSunLight("SunPrimary"),this.shadowSun=this._makeSunLight("SunCoarse"),this.sunLayers=[this.sun,this.shadowSun],this.scene.add(this.sun),this.scene.add(this.sun.target),this.scene.add(this.shadowSun),this.scene.add(this.shadowSun.target),this.hemi=new tx(12575743,5916208,.34),this.scene.add(this.hemi),this.ambient=new ax(16777215,.05),this.scene.add(this.ambient),this.scene.fog=new zc(12375254,t.get("render.fogDensity")),this.islandGroup=new Kn,this.treeGroup=new Kn,this.scene.add(this.islandGroup),this.scene.add(this.treeGroup),this.sea=null,this.camDirector=new px(this.camera,this.renderer.domElement),this.autoCameraDirector=new vx(this.camera,this.camDirector,t),this.orbitSweep=new yx(t,this),this.postfx=new Wx(this.renderer),this.takramRig=null,this._applyShadowSettings(),this._applyAll(),i.autoGenerate!==!1&&this.regenerate(),t.subscribe(a=>this._onParam(a)),window.addEventListener("resize",()=>this._onResize()),this.clock=new sx}_makeSunLight(e){const t=new rx(16773852,0);return t.name=e,t.castShadow=!0,t.shadow.bias=-6e-4,t.shadow.normalBias=2.2,t.shadow.radius=1,t}regenerate(){this._regenTimer&&(clearTimeout(this._regenTimer),this._regenTimer=null),this._regenToken++,this.loader?.start("island asset build",8,{mode:this._hasGenerated?"transition":"boot"});const e=this.store,t=this._buildGenOptions(e);this.loader?.step("params",`seed=${t.seed} res=${t.resolution}`);const i=Mh(t);this.vol=i,this.loader?.step("terrain",`${i.res}x${i.res}`),this._applyShadowBounds(t),this.loader?.step("shadow bounds"),this.islandGroup.clear(),this._islandMesh&&this._islandMesh.geometry.dispose(),this.loader?.step("clear meshes"),this._islandMesh=bh(i,t.seed),this.islandGroup.add(this._islandMesh),this.loader?.step("island mesh",`${this._islandMesh.geometry.getAttribute("position")?.count||0} verts`),this.sea&&this.scene.remove(this.sea.group),this.sea=new this.SeaClass(this._seaParams(i,t,e)),this.scene.add(this.sea.group),this._applyWaterLighting(),this.loader?.step("sea");const r=this._plantTrees(i,t);this.treeCount=r.treeCount,this.treeCounts=r.treeCounts,this.loader?.step("trees",`${this.treeCount}`),this.loader?.done("ready"),this._hasGenerated=!0,this.afterGenerate?.(this),this._applySkyDiagnosis()}async regenerateAsync(e="scene rebuild"){this._regenTimer&&(clearTimeout(this._regenTimer),this._regenTimer=null);const t=++this._regenToken,i=this._hasGenerated?"transition":"boot",r=()=>t!==this._regenToken,a=async(g,_="")=>(this.loader?.step(g,_),await Gh(),r());if(this.loader?.start(e,9,{mode:i}),await Gh(),r())return!1;const s=this._buildGenOptions(this.store);if(await a("params",`seed=${s.seed} res=${s.resolution}`))return!1;const o=Mh(s);if(await a("terrain",`${o.res}x${o.res}`))return!1;const l=new this.SeaClass(this._seaParams(o,s,this.store));if(await a("sea"))return!1;const c=bh(o,s.seed),h=c.geometry.getAttribute("position")?.count||0;if(await a("island mesh",`${h} verts`))return c.geometry.dispose(),!1;const d=new Kn;d.name="Trees";const f=this._plantTrees(o,s,d);return await a("trees",`${f.treeCount}`)||(this._applyShadowBounds(s),await a("shadow bounds"))?!1:(this._swapGeneratedAssets(o,c,l,d,f),this.loader?.step("swap"),this.loader?.done("ready"),this._hasGenerated=!0,this.afterGenerate?.(this),this._applySkyDiagnosis(),!0)}_buildGenOptions(e){const t={seed:e.get("voxel.seed")|0,radius:e.get("island.radius"),shape:e.get("island.shape")|0,resolution:e.get("voxel.resolution")|0,lowland:e.get("island.lowland"),massif:e.get("island.massif"),massifSharpness:e.get("island.massifSharpness"),massifOffsetX:e.get("island.massifOffsetX"),massifOffsetZ:e.get("island.massifOffsetZ"),terraceStep:e.get("voxel.terraceStep"),warp:e.get("island.warp"),ridge:e.get("island.ridge"),beachWidth:e.get("island.beachWidth"),valleyDepth:e.get("island.valleyDepth"),valleyWidth:e.get("island.valleyWidth"),seaLevel:e.get("water.seaLevel"),floorDepth:e.get("water.floorDepth"),floorShape:e.get("water.floorShape"),floorRoughness:e.get("water.floorRoughness"),deltaFloor:e.get("water.deltaFloor"),seasons:{sweepDeg:e.get("seasons.sweepDeg"),summerEnd:e.get("seasons.summerEnd"),autumnEnd:e.get("seasons.autumnEnd"),coniferEnd:e.get("seasons.coniferEnd"),borderWarp:e.get("seasons.borderWarp"),craggy:e.get("seasons.craggy"),fairway:e.get("seasons.fairway"),fairwayBand:e.get("seasons.fairwayBand"),bunkerDensity:e.get("seasons.bunkerDensity"),bunkerSize:e.get("seasons.bunkerSize")},palmCount:e.get("tree.palmCount")|0,palmLine:e.get("tree.palmLine"),mixedTreeCount:e.get("tree.mixedTreeCount")|0};return t.maxHeight=t.lowland+t.massif,t}_seaParams(e,t,i=this.store){return{...i.get("water")||{},...i.get("waves")||{},worldSize:e.worldSize,volume:e,radius:t.radius,seaLevel:t.seaLevel,floorDepth:t.floorDepth}}_applyShadowBounds(e){this._lastShadowOpts=e,this._applyShadowBoundsFor(this.sun,e,this.store.get("shadows.primaryCoverage")??1),this._applyShadowBoundsFor(this.shadowSun,e,this.store.get("shadows.secondaryCoverage")??1)}_applyShadowBoundsFor(e,t,i=1){if(!e?.shadow?.camera||!t)return;const r=me.clamp(Number(i)||1,.25,2),a=t.radius*1.4*r,s=e.shadow.camera;s.left=-a,s.right=a,s.top=a,s.bottom=-a,s.near=Math.max(50,6e3-a-t.maxHeight-600),s.far=6e3+a+600,s.updateProjectionMatrix(),e.shadow.needsUpdate=!0}_swapGeneratedAssets(e,t,i,r,a){this.vol=e,this.islandGroup.clear(),this._islandMesh&&this._islandMesh.geometry.dispose(),this._islandMesh=t,this.islandGroup.add(this._islandMesh),this.sea&&this.scene.remove(this.sea.group),this.sea=i,this.scene.add(this.sea.group),this._applyWaterLighting(),this.scene.remove(this.treeGroup),this.treeGroup=r,this.scene.add(this.treeGroup),this.treeCount=a.treeCount,this.treeCounts=a.treeCounts}_plantTrees(e,t,i=this.treeGroup){i.clear();const r=or(t.seed*2654435761>>>0),a={palm:0,summer:0,autumn:0,conifer:0,winter:0},s=p=>{if(!e.land[p])return!1;const m=e.material[p];if(m===ot.ROCK||m===ot.SEAFLOOR)return!1;const R=e.heightVox[p]*e.vstep;return R>=t.seaLevel+.4&&R<=t.seaLevel+t.maxHeight*.82},o=(p,m,R,A)=>{const M=zx(p,(r()*1e9|0)^A),H=e.heightVox[A]*e.vstep,[D,L]=e.cellToWorld(m,R);M.position.set(D,H-.5,L),M.scale.setScalar(.85+r()*.5),M.rotation.y=r()*Math.PI*2,i.add(M),a[p]=(a[p]||0)+1},l=Math.max(0,Math.min(512,t.palmCount|0)),c=Math.max(.18,Math.min(.9,t.palmLine??.58));let h=0,d=0;const f=l*60+400;for(;h<l&&d<f;){d++;const p=r()*e.res|0,m=r()*e.res|0,R=e.idx(p,m);if(!s(R))continue;const A=e.material[R];(e.heightVox[R]*e.vstep-t.seaLevel)/Math.max(1,t.maxHeight)>c||A===ot.SNOW||A===ot.GRASSY_SNOW||A===ot.DIRT||!(A===ot.FAIRWAY||A===ot.SAND)&&r()>.3||(o("palm",p,m,R),h++)}const g=p=>{const m=e.season[p];return m===lr.WINTER?r()>.55?"conifer":"winter":m===lr.CONIFER?"conifer":m===lr.AUTUMN?"autumn":"summer"},_=Math.max(0,Math.min(256,t.mixedTreeCount??34));let S=0;for(d=0;S<_&&d<_*40;){d++;const p=r()*e.res|0,m=r()*e.res|0,R=e.idx(p,m);s(R)&&(o(g(R),p,m,R),S++)}return{treeCount:h+S,treeCounts:a}}_effectiveSun(){const e=this._sunOverride||{};return{elevationDeg:e.elevationDeg??this.store.get("sun.elevationDeg"),azimuthDeg:e.azimuthDeg??this.store.get("sun.azimuthDeg"),intensity:e.intensity??this.store.get("sun.intensity")}}_sunDir(e=this._effectiveSun()){const t=me.degToRad(e.elevationDeg),i=me.degToRad(e.azimuthDeg),r=Math.cos(t);return new P(r*Math.cos(i),Math.sin(t),r*Math.sin(i)).normalize()}getSunDirection(){return this._sunDir()}_shadowLayerWeights(){const e=this.store,t=!!e.get("shadows.primaryEnable"),i=!!e.get("shadows.secondaryEnable"),r=me.clamp(e.get("shadows.secondaryMix")??.22,0,1);return(e.get("shadows.blendMode")|0)===1?{primary:t?1:0,secondary:i?r:0}:t&&i?{primary:1-r,secondary:r}:{primary:t?1:0,secondary:i?1:0}}_applyAll(){const e=this.store;this._applySunLighting(),this.transmittanceLUT.setAtmosphere({rayleighMul:e.get("atmosphere.rayleighMul"),mieBeta:e.get("atmosphere.mieBeta"),ozoneMul:e.get("atmosphere.ozoneMul")}),this.skyViewLUT.setAtmosphere({rayleighMul:e.get("atmosphere.rayleighMul"),mieBeta:e.get("atmosphere.mieBeta"),ozoneMul:e.get("atmosphere.ozoneMul")}),this.skyViewLUT.setMieG(e.get("atmosphere.mieG")),this._applyPlanetR();const i=(e.get("skyDiagnosis")||{}).disableHorizonWarp?!1:e.get("render.horizonWarp");this.skyViewLUT.setHorizonWarp(i),this.backdrop.setHorizonWarp(i),this.renderer.toneMappingExposure=e.get("render.exposure"),this.camera.fov=e.get("render.fov"),this.camera.updateProjectionMatrix(),this.scene.fog.density=e.get("render.fogDensity"),this._applyTakramSettings(),this._applySkyDiagnosis()}_applySunLighting(){const e=this.store,t=this._effectiveSun(),i=this._sunDir(t),r=t.intensity;this.skyViewLUT.setSunDir(i),this.skyViewLUT.setSunIntensity(r),this.backdrop.setSun({direction:i,intensity:r});const a=t.elevationDeg,s=me.clamp((a+6)/28,0,1),o=s*s*(3-2*s),l=me.clamp(r/22,.45,2.2),c=new Oe("#ff7a36").lerp(new Oe("#fff3df"),o),h=me.lerp(.5,3.1,o)*l,d=this._shadowLayerWeights();for(const S of this.sunLayers)S.position.copy(i).multiplyScalar(6e3),S.target.position.set(0,0,0),S.color.copy(c);this.sun.intensity=h*d.primary,this.shadowSun.intensity=h*d.secondary;const f=e.get("shadows.enable")!==!1;this.sun.castShadow=f&&d.primary>0&&!!e.get("shadows.primaryEnable"),this.shadowSun.castShadow=f&&d.secondary>0&&!!e.get("shadows.secondaryEnable");const g=e.get("lighting.skyBounce"),_=e.get("lighting.groundBounce");this._gi={tint:e.get("lighting.bounceTint")},this._hemiBase=new Oe("#e8a86a").lerp(new Oe("#a9c8e6"),o),this.hemi.color.copy(this._hemiBase),this.hemi.groundColor.set("#3a2a1c").lerp(new Oe("#60503a"),o),this.hemi.intensity=me.lerp(.3,.6,o)*(g/.55),this.ambient.intensity=me.lerp(.03,.09,o)*(.7+_),this.scene.fog.color.set("#d99250").lerp(new Oe("#acc6cf"),o),this._skyDirty=!0,this._applyWaterLighting(),this._applySkyDiagnosis()}_applyWaterLighting(){if(!this.sea)return;const e=this.store;this.sea.setSun(this._sunDir(),this.sun.color),this.sea.setGlint(e.get("lighting.sunGlint"),e.get("lighting.glintSpread"))}_onParam(e){const t=e.path;(t==="*"||t.startsWith("sun.")||t.startsWith("atmosphere.")||t.startsWith("render.")||t.startsWith("lighting.")||t.startsWith("skyDiagnosis.")||t.startsWith("takram.")||t.startsWith("cloudsRender.")||t.startsWith("takramAtmosphere.")||t.startsWith("cloudWeather.")||t.startsWith("cloudLayer0.")||t.startsWith("cloudLighting.")||t.startsWith("cloudShadows.")||t.startsWith("cloudDebug.")||t.startsWith("cloudFinishing."))&&this._applyAll(),(t==="*"||t.startsWith("island.")||t.startsWith("voxel.")||t.startsWith("seasons.")||t==="tree.palmCount"||t==="tree.palmLine"||t==="tree.mixedTreeCount"||t==="water.seaLevel"||t==="water.floorDepth"||t==="water.floorShape"||t==="water.floorRoughness"||t==="water.deltaFloor")&&this._scheduleRegen(),(t==="*"||t.startsWith("shadows."))&&(this._applyShadowSettings(),this._applySunLighting()),this.sea&&((t==="*"||t==="water.enable")&&(this.sea.setEnabled(this.store.get("water.enable")),this._applySkyDiagnosis()),(t==="*"||t.startsWith("water.")||t.startsWith("waves."))&&(this.sea.setStyle?.({...this.store.get("water")||{},...this.store.get("waves")||{}}),this._applySkyDiagnosis()))}_applySkyDiagnosis(){const e=this.store.get("skyDiagnosis")||{},t=!!this.takramRig?.skyEnabled,i=!!e.skyOnly,r=!!e.seaOnlyStub,a=!!e.floorOnlyStub,s=i||r||a,o=r||a,l=!!e.hideIsland,c=this.store.get("water.enable")!==!1;this.renderer.setClearColor(e.magentaClear?Yx:Xx,1),this.backdrop.mesh.visible=!t&&!o,this.takramRig?.setSkyVisible(!o),this.backdrop.setDiagnostics({forceBelowHorizonFog:!!e.forceBelowHorizonFog,belowHorizonFog:this.scene.fog.color}),this.islandGroup.visible=!l&&!s,this.treeGroup.visible=!l&&!s;const h=this.scene.getObjectByName("IslandReferenceBlocks");h&&(h.visible=!l&&!s&&!!this.store.get("water.referenceBlocks")),this.sea&&(this.sea.group.visible=c&&!i||o,this.sea.floor&&(this.sea.floor.visible=!i&&(a||r||c)),this.sea.surface&&(this.sea.surface.visible=r||!i&&!a&&c&&!(this.sea._lodEnabled&&this.sea._lodSolo)),this.sea.lodSurface&&(this.sea.lodSurface.visible=!i&&!a&&c&&!!this.sea._lodEnabled))}setTakramRig(e){this.takramRig=e||null,this._applyTakramSettings(),this._applySkyDiagnosis()}_applyTakramSettings(){if(!this.takramRig)return;const e=this.store.get("takram")||{},t=this.store.get("cloudsRender")||{},i=!!(t.atmosphere??e.atmosphere),r=!!(t.clouds??e.clouds),a=!!(t.aerialPerspective??i),s=r&&!i&&!a;this.takramRig.setEnabled(i||r||a),this.takramRig.setSkyEnabled(i),this.takramRig.setParams({render:{clouds:r,aerialPerspective:a,exposure:s?this.store.get("render.exposure"):t.exposure??e.exposure??10,quality:this.mobileProfile.mobile?Math.min(t.quality??e.quality??2,this.mobileProfile.cloudQualityMax):t.quality??e.quality??2,resolutionScale:this.mobileProfile.mobile?Math.min(t.resolutionScale??e.resolutionScale??.75,this.mobileProfile.cloudResolutionMax):t.resolutionScale??e.resolutionScale??.75,temporalUpscale:this.mobileProfile.mobile?!1:t.temporalUpscale??!0},atmosphere:this.store.get("takramAtmosphere")||{},weather:{...this.store.get("cloudWeather")||{},coverage:this.store.get("cloudWeather.coverage")??e.coverage??.68},layer:this.store.get("cloudLayer0")||{},lighting:this.store.get("cloudLighting")||{},shadows:this.mobileProfile.mobile?{...this.store.get("cloudShadows")||{},layerShadow:!1,lightShafts:!1,cascadeCount:1,mapSize:0}:this.store.get("cloudShadows")||{},debug:this.store.get("cloudDebug")||{},finishing:this.store.get("cloudFinishing")||{}})}setSunOverride(e){this._sunOverride=e||null,this._applySunLighting()}_scheduleRegen(){this.store.get("skyDiagnosis.fastSkyBoot")&&!this.vol||(this._regenTimer&&clearTimeout(this._regenTimer),this._regenTimer=setTimeout(()=>{this._regenTimer=null,this.asyncRegenerate?this.regenerateAsync("scene rebuild"):this.regenerate()},260))}_onResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.postfx?.setSize(),this.takramRig?.setSize(window.innerWidth,window.innerHeight)}_applyShadowSettings(){const e=this.store,t=Vx[me.clamp(e.get("shadows.filterMode")|0,0,2)]||qs,i=this.renderer.shadowMap.type!==t;this.renderer.shadowMap.type=t,this._applyShadowLightSettings(this.sun,e.get("shadows.primarySize")??2048,i),this._applyShadowLightSettings(this.shadowSun,e.get("shadows.secondarySize")??512,i),this._applyShadowBounds(this._lastShadowOpts||this._buildGenOptions(e))}_applyShadowLightSettings(e,t,i=!1){if(!e?.shadow)return;const r=Math.min(this.renderer.capabilities.maxTextureSize||8192,this.mobileProfile.shadowMapMax),a=me.clamp(Math.round((t||2048)/512)*512,512,r),s=e.shadow,o=s.mapSize.x!==a||s.mapSize.y!==a;s.mapSize.set(a,a),s.bias=this.store.get("shadows.bias")??-6e-4,s.normalBias=this.store.get("shadows.normalBias")??2.2,s.radius=this.store.get("shadows.softness")??1,(o||i)&&this._disposeShadowMap(s),s.needsUpdate=!0}_disposeShadowMap(e){e.map&&(e.map.dispose(),e.map=null)}setExperimental(e){const t=e?.planetR?Math.max(150,e.planetRadiusKm||1200):Ut.groundRadius;this.store.set("atmosphere.planetRadiusKm",t)}_applyPlanetR(e=this.store.get("atmosphere.planetRadiusKm")){const t=me.clamp(e||Ut.groundRadius,150,Ut.groundRadius);if(this._planetRadiusApplied===t)return;this._planetRadiusApplied=t;const i=Ut.atmosphereRadius-Ut.groundRadius;this.skyViewLUT.setGeometry({planetRadiusKm:t,atmosphereThicknessKm:i}),this.backdrop.setGeometry({planetRadiusKm:t,atmosphereThicknessKm:i});const r=new P(0,t+.35,0);this.skyViewLUT.setObserverPosition(r),this.backdrop.setObserver(r),this._skyDirty=!0}_fxParams(){const e=this.store,t=this._sunDir(),i=this._fxv||=new P;i.copy(this.camera.position).addScaledVector(t,2e3).project(this.camera);let r={x:i.x*.5+.5,y:i.y*.5+.5};if(!Number.isFinite(r.x)||!Number.isFinite(r.y)){const h=(this._fxRight||=new P).setFromMatrixColumn(this.camera.matrixWorld,0),d=(this._fxUp||=new P).setFromMatrixColumn(this.camera.matrixWorld,1),f=t.dot(h),g=t.dot(d),_=2/Math.max(.001,Math.abs(f),Math.abs(g));r={x:.5+f*_,y:.5+g*_}}const s=me.smoothstep(t.y,-.02,.04),o=s>.001,l=e.get("godrays")||{},c=l.enable?{intensity:l.intensity??.85,samples:l.samples??16,density:l.density??.32,decay:l.decay??.915,weight:l.weight??2,exposure:l.exposure??.7,threshold:l.threshold??.62,horizon:l.groundMask??.5,radius:l.reach??1.45,tint:l.warmth??.5,resScale:l.resScale??.25,sharp:l.sharp??.25,source:l.source??1,compare:!!l.compare,edgeSource:l.edgeSource??0,edgeWidth:l.edgeWidth??1.2,edgeGain:l.edgeGain??1,blurEnable:!!l.blurEnable,blurAmount:l.blurAmount??.18,blurRadius:l.blurRadius??1.5,blurPasses:l.blurPasses??1,debugView:l.debugView??0,debugGain:l.debugGain??1}:{intensity:0};return{bloom:e.get("lighting.bloom")||0,haze:e.get("lighting.aerialHaze")||0,hazeColor:this.scene.fog.color,sunCol:this.sun.color,sunUV:r,sunVisible:o,sunFade:s,god:c}}getDebugInfo(){const e=this.camera.position;return{name:"Isometric Island",camera:[e.x.toFixed(1),e.y.toFixed(1),e.z.toFixed(1)],triangles:this.renderer.info.render.triangles,drawCalls:this.renderer.info.render.calls,trees:this.treeCount,worldSize:this.vol?.worldSize,seaLevel:this.store.get("water.seaLevel"),sunElevationDeg:this.store.get("sun.elevationDeg"),seed:this.store.get("voxel.seed")}}getHorizonDiagnosticSnapshot(){const e=this.skyViewLUT,t=e.width,i=e.height,r=[0,Math.floor(i*.25),Math.max(0,Math.floor(i*.5)-3),Math.max(0,Math.floor(i*.5)-1),Math.floor(i*.5),Math.min(i-1,Math.floor(i*.5)+1),Math.min(i-1,Math.floor(i*.75)),i-1],a=new Uint16Array(t*4),s=Zs.fromHalfFloat,o=[];for(const c of r){this.renderer.readRenderTargetPixels(e.target,0,c,t,1,a);let h=0,d=0,f=0,g=1/0,_=-1/0,S=0;for(let p=0;p<t;p++){const m=s(a[p*4]),R=s(a[p*4+1]),A=s(a[p*4+2]);h+=m,d+=R,f+=A;const M=m*.2126+R*.7152+A*.0722;g=Math.min(g,M),_=Math.max(_,M),M<1e-5&&S++}o.push({row:c,v:Number((c/Math.max(1,i-1)).toFixed(4)),avg:[h/t,d/t,f/t].map(p=>Number(p.toPrecision(5))),minLum:Number(g.toPrecision(5)),maxLum:Number(_.toPrecision(5)),darkPct:Number((S/t).toFixed(4))})}const l=this.camera.position;return{camera:[l.x,l.y,l.z].map(c=>Number(c.toFixed(2))),horizonWarp:this.backdrop.uniforms.uHorizonWarp.value,forceBelowHorizonFog:this.backdrop.uniforms.uForceBelowHorizonFog.value,diagnosis:structuredClone(this.store.get("skyDiagnosis")||{}),fog:[this.scene.fog.color.r,this.scene.fog.color.g,this.scene.fog.color.b].map(c=>Number(c.toPrecision(5))),rows:o,renderer:{triangles:this.renderer.info.render.triangles,calls:this.renderer.info.render.calls}}}_syncHorizonFog(){try{const e=this.skyViewLUT,t=e.width,i=e.height,r=Math.max(0,Math.floor(i*.5)-1);(!this._fogBuf||this._fogBuf.length!==t*4)&&(this._fogBuf=new Uint16Array(t*4)),this.renderer.readRenderTargetPixels(e.target,0,r,t,1,this._fogBuf);const a=Zs.fromHalfFloat;let s=0,o=0,l=0;for(let d=0;d<t;d++)s+=a(this._fogBuf[d*4]),o+=a(this._fogBuf[d*4+1]),l+=a(this._fogBuf[d*4+2]);if(s/=t,o/=t,l/=t,!(s>=0)||!(o>=0)||!(l>=0))return;const c=this.renderer.toneMappingExposure,h=d=>(d=Math.max(0,d*c),Math.min(1,Math.max(0,d*(2.51*d+.03)/(d*(2.43*d+.59)+.14))));this.scene.fog.color.setRGB(h(s),h(o),h(l),It),this.sea?.setHorizon(this.scene.fog.color),this._hemiBase&&this.hemi.color.copy(this._hemiBase).lerp(this.scene.fog.color,this._gi?.tint??.7)}catch{}}start(){const e=()=>{this._raf=requestAnimationFrame(e);const t=Math.min(this.clock.getDelta(),.5),i=Math.min(t,1/20);this.elapsed+=i,this.renderer.info.reset(),this.camDirector.update(i),this.autoCameraDirector.update(i),this.orbitSweep.update(t),this.sea?.update(this.elapsed,this.camera.position),this.camera.updateMatrixWorld(),this.backdrop.updateCamera(this.camera),this.transmittanceLUT.render(this.renderer),this.skyViewLUT.render(this.renderer),this._skyDirty&&(this._syncHorizonFog(),this._skyDirty=!1),this._applySkyDiagnosis(),this._swayTrees(),this.takramRig?.enabled?(this.takramRig.syncFromScene(this),this.takramRig.render(i)):this.postfx.render(this.scene,this.camera,this._fxParams())};e()}_swayTrees(){const e=this.elapsed,t=this.store.get("tree.palmSway")??1;if(!(t<=0))for(const i of this.treeGroup.children){const r=i.userData&&i.userData.sway;if(!r)continue;const a=Math.sin(e*r.speed+r.phase)*r.amp*t;r.crown&&(r.crown.rotation.z=a,r.crown.rotation.x=a*.5),i.rotation.z=a*.18}}}function jx(){if(typeof window>"u")return{mobile:!1,pixelRatioCap:2,shadowMapMax:8192,cloudQualityMax:3,cloudResolutionMax:1};const n=navigator.userAgent||"",e=window.matchMedia?.("(pointer: coarse)")?.matches??!1,t=/iPad|iPhone|iPod/.test(n)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,i=e||t||/Android|Mobile/.test(n);return{mobile:i,pixelRatioCap:i?1:2,shadowMapMax:i?1024:8192,cloudQualityMax:i?0:3,cloudResolutionMax:i?.35:1}}const yf={sun:{label:"sun",icon:"☉",blurb:"drives both the Hillaire sky and the island key light",fields:{elevationDeg:{type:"float",label:"Elevation",min:-10,max:90,step:.5,default:26,unit:"°",hint:"low = warm sunset · high = bright noon"},azimuthDeg:{type:"float",label:"Azimuth",min:-180,max:180,step:1,default:-84,unit:"°",hint:"rakes the terrain — avoids flat back-to-sun lighting"},intensity:{type:"float",label:"Intensity",min:1,max:60,step:.5,default:22}}},atmosphere:{label:"atmosphere",icon:"◐",blurb:"Hillaire 2020 — Rayleigh / Mie / ozone",fields:{rayleighMul:{type:"float",label:"Rayleigh ×",min:0,max:4,step:.01,default:1},mieBeta:{type:"float",label:"Mie β",min:0,max:.05,step:5e-4,default:.021,hint:"haze thickness"},mieG:{type:"float",label:"Mie g",min:0,max:.95,step:.005,default:.758},ozoneMul:{type:"float",label:"Ozone ×",min:0,max:3,step:.01,default:1},planetRadiusKm:{type:"float",label:"Planet R",min:150,max:6371,step:25,default:6371,unit:"km",hint:"6371 = Earth · lower bends the horizon/sky harder"}}},lighting:{label:"lighting",icon:"✦",blurb:"sky-tinted bounce · water sun-glint · bloom · aerial haze",fields:{skyBounce:{type:"float",label:"Sky bounce",min:0,max:1.6,step:.02,default:.55,hint:"faked GI — hemisphere fill tinted by the live sky"},bounceTint:{type:"float",label:"Bounce tint",min:0,max:1,step:.02,default:.7,hint:"how hard the bounce pulls toward the sampled sky colour"},groundBounce:{type:"float",label:"Ground bounce",min:0,max:1,step:.02,default:.3,hint:"warm up-light from the lit ground"},sunGlint:{type:"float",label:"Sun glint width",min:0,max:2.5,step:.05,default:.7,hint:"analytic specular sun streak on the sea"},glintSpread:{type:"float",label:"Glint spread",min:.2,max:4,step:.05,default:1.1,hint:"lower = tight mirror streak · higher = broad shimmer"},bloom:{type:"float",label:"Bloom",min:0,max:1.5,step:.02,default:0,hint:"staged — shared post pass (0 = off, zero cost)"},aerialHaze:{type:"float",label:"Aerial haze",min:0,max:1,step:.02,default:0,hint:"staged — sky-coloured depth haze (0 = off)"}}},voxel:{label:"voxel",icon:"⬚",blurb:"world structure — never randomized · pin (◆ amber) to lock",fields:{seed:{type:"int",label:"Seed",min:1,max:99999,step:1,default:1337,hint:"the island. not rolled by random — ◆ to keep one"},resolution:{type:"int",label:"Voxel grid",min:128,max:1024,step:32,default:384,hint:"cells across the world · structural, never randomized"},terraceStep:{type:"float",label:"Terrace step",min:0,max:8,step:.5,default:2.5,unit:"m",hint:"0 = smooth · >0 = stepped terraces · structural"}}},island:{label:"island",icon:"▲",blurb:"bounded voxel island — mask + domain-warp + ridged multifractal",fields:{radius:{type:"float",label:"Radius",min:300,max:1100,step:10,default:700,unit:"m",hint:"island size — bigger = more room for beaches/relief"},shape:{type:"int",label:"Shape",min:0,max:4,step:1,default:0,hint:"0 auto (from seed) · 1 round · 2 crescent · 3 long · 4 lobed"},lowland:{type:"float",label:"Lowland relief",min:6,max:90,step:2,default:32,unit:"m",hint:"rolling-hill amplitude of the bulk of the island"},massif:{type:"float",label:"Massif height",min:0,max:480,step:10,default:150,unit:"m",hint:"localized mountain uplift above the lowland"},massifSharpness:{type:"float",label:"Massif sharpness",min:.45,max:2.2,step:.05,default:1,hint:"higher = narrower, pointier summit envelope"},massifOffsetX:{type:"float",label:"Massif east/west",min:-.45,max:.45,step:.01,default:0,hint:"manual mountain placement as a fraction of island radius"},massifOffsetZ:{type:"float",label:"Massif north/south",min:-.45,max:.45,step:.01,default:0,hint:"manual mountain placement as a fraction of island radius"},warp:{type:"float",label:"Domain warp",min:0,max:2,step:.05,default:.85,hint:"bends the noise sampling coordinates; not a simple rotation"},ridge:{type:"float",label:"Ridge weight",min:0,max:1.5,step:.05,default:.7,hint:"ridged multifractal — sharp spines"},beachWidth:{type:"float",label:"Beach apron",min:2,max:50,step:1,default:16,unit:"m",hint:"raises/extends the low coastal apron; also preserves golf-course greens"},valleyDepth:{type:"float",label:"Valley carve",min:0,max:180,step:5,default:55,unit:"m",hint:"gully → river → delta cut (post-build subtraction) · 0 = off"},valleyWidth:{type:"float",label:"Valley width",min:8,max:60,step:2,default:22,unit:"m",hint:"channel half-width near source · widens downstream"}}},seasons:{label:"seasons",icon:"❄",blurb:"altitude bands · coast=summer → peak=winter · winter never touches summer",fields:{sweepDeg:{type:"float",label:"Region drift",min:-180,max:180,step:1,default:35,unit:"°",hint:"rotates the lateral-variety noise"},summerEnd:{type:"float",label:"Summer line",min:.15,max:.6,step:.01,default:.44,hint:"altitude frac · below = tropical lowland; keep below autumn"},autumnEnd:{type:"float",label:"Autumn line",min:.4,max:.78,step:.01,default:.66,hint:"altitude frac · keep between summer and snow"},coniferEnd:{type:"float",label:"Snow line",min:.6,max:.92,step:.01,default:.84,hint:"below = conifer band · above = winter/snow cap"},borderWarp:{type:"float",label:"Border warp",min:0,max:1.5,step:.05,default:.6,hint:"organic wander of the altitude bands"},craggy:{type:"float",label:"Craggy peaks",min:0,max:1,step:.02,default:.4,hint:"rock speckled through the snow/upper zone"},fairway:{type:"float",label:"Fairway (greens)",min:0,max:1,step:.02,default:0,hint:'0 = off · lime "greens" band above the beach'},fairwayBand:{type:"float",label:"Fairway band",min:4,max:80,step:2,default:24,unit:"m",hint:"how far the greens reach inland from the sand"},bunkerDensity:{type:"float",label:"Bunkers",min:0,max:1,step:.02,default:.18,hint:"sand-trap frequency inside the greens"},bunkerSize:{type:"float",label:"Bunker size",min:3,max:30,step:1,default:11,unit:"m",hint:"sand-trap blob radius"}}},water:{label:"water",icon:"≈",blurb:"water datum · seafloor depth · masks",fields:{enable:{type:"bool",label:"Water",default:!0,hint:"C toggles the sea surface/glow/floor stack"},seaLevel:{type:"float",label:"Water datum",min:-2,max:40,step:.5,default:9,unit:"m",hint:"structural build datum; terrain is generated around it"},floorDepth:{type:"float",label:"Seafloor depth",min:10,max:140,step:5,default:64,unit:"m"},floorShape:{type:"float",label:"Shelf shape",min:.35,max:1.8,step:.05,default:.85,hint:"lower = quick deep drop · higher = long shallow shelf"},floorRoughness:{type:"float",label:"Seafloor jag",min:0,max:3,step:.05,default:1,hint:"height variation below water"},deltaFloor:{type:"float",label:"Delta follow",min:0,max:1,step:.02,default:0,hint:"carves underwater floor along the river/delta channel"},surfaceLift:{type:"float",label:"Surface lift",min:-1,max:2,step:.02,default:.08,unit:"m",hint:"nudges the water skin off the terrain to fight shore z-flicker"},landMask:{type:"float",label:"Land mask",min:0,max:1,step:.02,default:1,hint:"fade water off generated land cells; lower exposes seam behavior"},debugView:{type:"int",label:"Debug view",min:0,max:5,step:1,default:0,labels:["final","depth","channel","wave","normal","land"],hint:"visualize the generated water masks"},depthTint:{type:"float",label:"Depth tint",min:0,max:1.5,step:.02,default:.78,hint:"Beer-Lambert-ish blue/green tint from generated seafloor depth"},lagoonTint:{type:"float",label:"Lagoon tint",min:0,max:2,step:.02,default:.18,hint:"extra cyan along generated valley/delta channel"}}},waves:{label:"waves",icon:"≋",blurb:"POOL surface stage 3-5 · displacement · detail · distortion",fields:{waveSpeed:{type:"float",label:"Wave speed",min:0,max:3,step:.02,default:2.7,hint:"phase speed; tune for rolling, not sheet sliding"},glintSpeed:{type:"float",label:"Glint motion",min:0,max:5,step:.02,default:3.5,hint:"multiplies only the sun-highlight normal motion; 0 = locked"},glintScale:{type:"float",label:"Glint scale",min:.1,max:4,step:.02,default:1.34,hint:"wave-normal scale seen by the broad white sun path"},waveScale:{type:"float",label:"Wave scale",min:1e-4,max:.05,step:1e-4,precision:4,default:.0275,curve:2.8,uiStep:.001,hint:"world-space wave frequency; curved for low-end tuning"},waveRotation:{type:"float",label:"Wave rotation",min:-180,max:180,step:1,default:143,unit:"°",hint:"rotates the wave basis so flow is not locked to the island axes"},surfaceOpacity:{type:"float",label:"Opacity",min:.02,max:1,step:.01,default:.55,hint:"water surface alpha; high opacity should stay blue, not black"},waveHeight:{type:"float",label:"Wave height",min:0,max:3,step:.02,default:1.92,unit:"m",hint:"vertex displacement; top-down wants more, side angle wants less"},waveChoppy:{type:"float",label:"Wave chop",min:.5,max:8,step:.05,default:5.95,hint:"shape sharpness from the tutorial sea octave"},surfaceStage:{type:"int",label:"Surface stage",min:3,max:5,step:1,default:5,hint:"3 = vertex waves · 4 = detail/normal · 5 = depth distortion"},detailMix:{type:"float",label:"Detail mix",min:0,max:1,step:.02,default:.42,hint:"fragment detail over the vertex waves"},normalStrength:{type:"float",label:"Normal strength",min:0,max:2,step:.02,default:.4,hint:"procedural normal perturbation; visible in stage 4+"},refractionStrength:{type:"float",label:"Distortion",min:0,max:.7,step:.005,default:.18,hint:"stage 5 depth/mask distortion; not true screen refraction yet"}}},tree:{label:"tree",icon:"🌴",blurb:"grove population — palms (more sliders later)",fields:{palmCount:{type:"int",label:"Palm count",min:0,max:512,step:1,default:56,hint:"palms massed on the fairway/courseway · raise to stress-test"},palmLine:{type:"float",label:"Palm line",min:.18,max:.9,step:.01,default:.58,hint:"highest normalized altitude where palms may plant"},mixedTreeCount:{type:"int",label:"Mixed trees",min:0,max:256,step:1,default:34,hint:"summer/autumn/conifer/winter scatter count"},palmSway:{type:"float",label:"Palm sway",min:0,max:2,step:.02,default:1,hint:"multiplies the baked palm wind"}}},shadows:{label:"shadows",icon:"◒",blurb:"two sun shadow maps · fine layer plus coarse motion layer",fields:{enable:{type:"bool",label:"Shadows",default:!0,hint:"X toggles shadow casting without killing sun light"},primaryEnable:{type:"bool",label:"Primary layer",default:!0,hint:"main sun shadow map"},primarySize:{type:"int",label:"Primary map",min:512,max:8192,step:512,default:8192,hint:"texels per side; GPU clamps if unsupported"},primaryCoverage:{type:"float",label:"Primary span",min:.35,max:1.6,step:.01,default:1.28,hint:"smaller = sharper but can clip island-edge shadows"},secondaryEnable:{type:"bool",label:"Coarse layer",default:!0,hint:"second sun shadow map for low-res dance"},secondarySize:{type:"int",label:"Coarse map",min:512,max:8192,step:512,default:2560,hint:"try 512, 1024, 2048 against the primary"},secondaryCoverage:{type:"float",label:"Coarse span",min:.35,max:1.8,step:.01,default:1,hint:"coarse layer shadow-camera coverage"},secondaryMix:{type:"float",label:"Coarse mix",min:0,max:1,step:.01,default:1,hint:"add mode: amount of extra coarse-map sun"},blendMode:{type:"int",label:"Blend mode",min:0,max:1,step:1,default:1,labels:["split","add"],hint:"split keeps total light stable · add is stylized and brighter"},filterMode:{type:"int",label:"Filter",min:0,max:2,step:1,default:1,labels:["hard","pcf","soft"],hint:"shadow-map sampling kernel"},softness:{type:"float",label:"Softness",min:0,max:8,step:.1,default:1.7,hint:"shadow radius used by filtered modes"},bias:{type:"float",label:"Bias",min:-.005,max:.005,step:1e-4,precision:4,default:-6e-4,hint:"depth offset; fights acne vs detached shadows"},normalBias:{type:"float",label:"Normal bias",min:0,max:6,step:.05,default:2.2,hint:"offset along voxel normals; original default was 2.2"}}},render:{label:"render",icon:"◯",blurb:"camera, exposure, horizon haze",fields:{fov:{type:"float",label:"FOV",min:40,max:95,step:1,default:68,unit:"°"},exposure:{type:"float",label:"Exposure",min:.2,max:3,step:.01,default:1.05},fogDensity:{type:"float",label:"Horizon haze",min:0,max:.006,step:5e-5,default:72e-5,hint:"dissolves the bounded sea edge into the sky"},horizonWarp:{type:"bool",label:"Horizon warp",default:!0}}},godrays:{label:"god rays",icon:"✺",blurb:"screen-space radial scatter · downsample→march→upsample",fields:{enable:{type:"bool",label:"Enable",default:!0,hint:"G toggles · off = golden bypass (zero cost)"},source:{type:"float",label:"Source mask",min:0,max:1,step:.02,default:1,hint:"1 = clean depth sky/occluder · 0 = raw-scene debug echoes"},intensity:{type:"float",label:"Intensity",min:0,max:3,step:.05,default:.85,hint:"first gain knob"},density:{type:"float",label:"Density",min:.2,max:1,step:.02,default:.32,hint:"ray reach toward the sun"},decay:{type:"float",label:"Decay",min:.8,max:1,step:.005,default:.915,hint:"tail length"},weight:{type:"float",label:"Weight",min:.1,max:2,step:.05,default:2,hint:"per-sample lift"},exposure:{type:"float",label:"Exposure",min:.1,max:3,step:.05,default:.7,hint:"final ray gain after the march"},threshold:{type:"float",label:"Threshold",min:.05,max:.95,step:.01,default:.62,hint:"source cutoff"},groundMask:{type:"float",label:"Ground mask",min:0,max:1,step:.02,default:.5,hint:"suppresses sources below the sun"},reach:{type:"float",label:"Reach",min:.4,max:2.5,step:.05,default:1.45,hint:"screen-space falloff radius"},warmth:{type:"float",label:"Warmth",min:0,max:1,step:.02,default:.5,hint:"0 = sky-colour rays · 1 = warm sun"},samples:{type:"int",label:"March taps",min:6,max:48,step:1,default:16,hint:"sample count in the radial march"},resScale:{type:"float",label:"Buffer scale",min:.06,max:1,step:.02,default:.25,hint:"LOW = cheap + blocky scatter"},sharp:{type:"float",label:"Upsample snap",min:0,max:1,step:.05,default:.25,hint:"0 = bilinear · 1 = raw low-res blocks; no blur pass"},blurEnable:{type:"bool",label:"Blur",default:!1,hint:"off = raw march · on = optional coalescing pass"},blurAmount:{type:"float",label:"Blur mix",min:0,max:1,step:.01,default:.18,hint:"blend raw rays with the blur pass"},blurRadius:{type:"float",label:"Blur radius",min:.25,max:8,step:.05,default:1.5,hint:"god-buffer texel radius"},blurPasses:{type:"int",label:"Blur passes",min:1,max:4,step:1,default:1,hint:"extra separable passes; cost is linear"}}},camera:{label:"camera",icon:"◌",blurb:"director scaffold · human input always wins",fields:{director:{type:"bool",label:"Camera director",default:!1,hint:"AFK handoff scaffold; no path/focus math yet"},focusMountain:{type:"float",label:"Mountain focus",min:0,max:1,step:.01,default:.35,hint:"future focus probability · not wired yet"},focusSky:{type:"float",label:"Sky focus",min:0,max:1,step:.01,default:.18,hint:"future focus probability · not wired yet"},focusGreenway:{type:"float",label:"Greenway focus",min:0,max:1,step:.01,default:.16,hint:"future focus probability · not wired yet"},focusMassif:{type:"float",label:"Massif focus",min:0,max:1,step:.01,default:.22,hint:"future focus probability · not wired yet"},focusValley:{type:"float",label:"Valley focus",min:0,max:1,step:.01,default:.14,hint:"future focus probability · not wired yet"},focusShoreline:{type:"float",label:"Shoreline focus",min:0,max:1,step:.01,default:.24,hint:"future focus probability · not wired yet"},focusPalms:{type:"float",label:"Palms focus",min:0,max:1,step:.01,default:.12,hint:"future focus probability · not wired yet"},focusWater:{type:"float",label:"Water focus",min:0,max:1,step:.01,default:.16,hint:"future focus probability · not wired yet"}}},orbitSweep:{label:"orbit sweep",icon:"↻",blurb:"sun elevation + azimuth overlay · real sliders stay authoritative",fields:{enable:{type:"bool",label:"Orbit sweep",default:!1,hint:"slow hidden sun path; touching sun controls turns it off"},speed:{type:"float",label:"Sim speed",min:0,max:4,step:.001,precision:3,default:1,curve:2.4,uiStep:.001,hint:"curved time multiplier · most slider travel lives below 1.2"},elevationDeg:{type:"float",label:"Elevation",min:-10,max:90,step:.01,precision:2,default:26,unit:"°",pin:!1,hint:"runtime sweep value; not saved to presets"},azimuthDeg:{type:"float",label:"Azimuth",min:-180,max:180,step:.01,precision:2,default:-84,unit:"°",pin:!1,hint:"runtime sweep value; wraps through 360° under the hood"},elevationSpeed:{type:"float",label:"Elevation speed",min:0,max:24,step:.01,default:4,hint:"multiplies sim speed for sunset cycling"},azimuthSpeed:{type:"float",label:"Azimuth speed",min:0,max:8,step:.01,default:.5,hint:"multiplies sim speed for horizontal orbit drift"},elevationRange:{type:"range",label:"Elevation arc",min:-10,max:90,step:.5,default:[2,50],unit:"°",handle:"ticks",hint:"sweep band; current elevation can drift outside before re-entering"}}}},Zx=["orbitSweep","sun","atmosphere","lighting","voxel","island","seasons","water","waves","tree","shadows","render","godrays","camera"];function Kx(n){return n.type==="range"?[...n.default]:n.default}function Jx(){const n={};for(const e of Zx){n[e]={};const t=yf[e].fields;for(const[i,r]of Object.entries(t))n[e][i]=Kx(r)}return n}const Js=Jx();function vi(n){if(n==null||typeof n!="object")return n;if(Array.isArray(n))return n.map(vi);const e={};for(const t in n)e[t]=vi(n[t]);return e}function Qx(n,e){const t=e.split(".");let i=n;for(const r of t){if(i==null)return;i=i[r]}return i}function ey(n,e,t){const i=e.split("."),r=i.pop();let a=n;for(const o of i)a[o]==null&&(a[o]=isNaN(Number(o))?{}:[]),a=a[o];const s=a[r];return a[r]=t,s}class ty{constructor(e){this.state=vi(e??Js),this.defaults=vi(Js),this.listeners=new Set}get(e){return Qx(this.state,e)}set(e,t){const i=ey(this.state,e,vi(t));this._notify(e,t,i)}fromJSON(e){!e||typeof e!="object"||(this.state=vi(e),this._notify("*",this.state,null))}_mergeInto(e,t){for(const i in t){const r=t[i];r&&typeof r=="object"&&!Array.isArray(r)?(e[i]==null&&(e[i]={}),this._mergeInto(e[i],r)):e[i]=vi(r)}}toJSON(){return vi(this.state)}reset(){this.state=vi(this.defaults),this._notify("*",this.state,null)}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}_notify(e,t,i){for(const r of this.listeners)try{r({path:e,value:t,prev:i,store:this})}catch(a){console.error("store listener error",a)}}}function kh(n){if(!n||typeof n!="object")return{};const e={};for(const t of Object.keys(n)){const i=/^([1-8])$/.exec(t);e[i?"A"+i[1]:t]=n[t]}return e}const Ef="isometric-island.presets.v1";function cc(){try{const n=window.localStorage?.getItem(Ef);return n?JSON.parse(n):{}}catch{return{}}}function ny(n,e){try{const t=cc();return t[String(n)]=e,window.localStorage?.setItem(Ef,JSON.stringify(t)),!0}catch{return!1}}async function iy(){try{const n=new URL("presets.json",document.baseURI).href,e=await fetch(n,{cache:"no-cache"});if(e.ok){const t=await e.json(),i=t&&typeof t=="object"?t.presets||t:{};return kh({...i,...cc()})}}catch{}return kh(cc())}async function ry(n,e){{ny(n,e);return}}function Wh(n){const e=/rgb\((\d+),\s*(\d+),\s*(\d+)\)/.exec(n);if(e)return[+e[1],+e[2],+e[3]];const t=n.replace("#","");return[parseInt(t.slice(0,2),16),parseInt(t.slice(2,4),16),parseInt(t.slice(4,6),16)]}function tr(n,e,t){const i=Wh(n),r=Wh(e),a=Math.max(0,Math.min(1,t)),s=i.map((o,l)=>Math.round(o+(r[l]-o)*a));return`rgb(${s[0]},${s[1]},${s[2]})`}function ay(n){const e=n&&n.params;if(!e)return null;const t=e.sun?.elevationDeg??26,i=Math.max(0,Math.min(1,(t+4)/26)),r=1-i,a=e.render?.exposure??1.05,s=Math.max(.8,Math.min(1.25,a)),o=tr("#1c2742","#6fa9da",i),l=tr("#ff7a3c","#d5e8f1",i),c=["#4f9e34","#caa033","#2f7a44","#acd7de"],h=e.seasons?.sweepDeg??0,d=c[Math.abs(Math.round(h/90))%4],f=tr(d,"#e7d59a",.28*s),g=tr(d,"#10331f",.5),_=tr(tr("#0e4f63","#36b9c0",i),"#1f6f6a",r*.5),S=tr("#06283a","#0e5566",i);return`linear-gradient(180deg, ${o} 0%, ${l} 32%, ${f} 36%, ${d} 50%, ${g} 63%, ${_} 66%, ${S} 100%)`}class sy{constructor({store:e,schema:t,sectionOrder:i,onToggle:r,sticky:a,presets:s}){this.store=e,this.schema=t,this.sectionOrder=i,this.onToggle=r,this.sticky=a||{has:()=>!1,toggle:()=>!1},this.presets=s||{slots:{},save:()=>{},load:()=>{}},this.fieldUpdaters=new Map,this.stickyEls=new Map,this.collapsed=!0,this.statusTimer=null,this.root=document.createElement("div"),this.root.className="ff-panel"+(this.collapsed?" collapsed":""),this._buildHeader(),this._buildBody(),this._buildFooter(),this.unsubscribe=e.subscribe(o=>this._onStoreChange(o))}toggle(){this.collapsed=!this.collapsed,this.root.classList.toggle("collapsed",this.collapsed),this.onToggle?.(this.collapsed)}collapseSections(){this.root.querySelectorAll(".ff-section.open").forEach(e=>{e.classList.remove("open")})}flashStatus(e,t="ok"){this.statusEl.textContent=e,this.statusEl.classList.remove("ok","err"),this.statusEl.classList.add(t),this.statusTimer&&clearTimeout(this.statusTimer),this.statusTimer=setTimeout(()=>{this.statusEl.textContent="",this.statusEl.classList.remove("ok","err")},2200)}_onStoreChange(e){if(e.path==="*"){for(const[i,r]of this.fieldUpdaters)for(const a of r)a(this.store.get(i));return}const t=this.fieldUpdaters.get(e.path);if(t)for(const i of t)i(e.value)}_registerUpdater(e,t){this.fieldUpdaters.has(e)||this.fieldUpdaters.set(e,new Set),this.fieldUpdaters.get(e).add(t)}_buildHeader(){const e=document.createElement("div");e.className="ff-panel-header",e.innerHTML='<div class="ff-panel-status"></div>',this.statusEl=e.querySelector(".ff-panel-status"),this.root.appendChild(e)}_buildBody(){this.body=document.createElement("div"),this.body.className="ff-panel-body";for(const e of this.sectionOrder){const t=this.schema[e];this.body.appendChild(this._buildSection(e,t,!1))}this.root.appendChild(this.body)}_buildSection(e,t,i){const r=document.createElement("div");r.className="ff-section"+(i?" open":""),r.setAttribute("data-section",e);const a=document.createElement("div");a.className="ff-section-head",a.innerHTML=`
      <span class="ff-section-icon">${t.icon||"·"}</span>
      <span class="ff-section-label">${t.label}</span>
      <span class="ff-section-blurb">${t.blurb||""}</span>
      <span class="ff-section-chevron">▸</span>
    `,a.addEventListener("click",()=>r.classList.toggle("open")),r.appendChild(a);const s=document.createElement("div");s.className="ff-section-body";for(const[o,l]of Object.entries(t.fields)){const c=l.path||`${e}.${o}`,h=this._buildField(c,l);h&&s.appendChild(h)}return r.appendChild(s),r}_buildField(e,t){switch(t.type){case"int":case"float":return this._buildSliderField(e,t);case"range":return this._buildRangeField(e,t);case"bool":return this._buildToggleField(e,t);default:return null}}_buildSliderField(e,t){const i=Number(t.curve)>0&&t.type!=="int",r=i?0:t.min,a=i?1:t.max,s=i?t.uiStep??.001:t.step,o=document.createElement("div");o.className="ff-field",o.innerHTML=`
      <div class="ff-field-label">
        <span class="ff-field-name">${t.label}</span>
        ${t.hint?`<span class="ff-field-hint">${t.hint}</span>`:""}
      </div>
      <div class="ff-field-value"></div>
      <div class="ff-field-control">
        <div class="ff-slider">
          <input type="range" min="${r}" max="${a}" step="${s}" />
        </div>
      </div>
    `;const l=o.querySelector(".ff-field-value"),c=o.querySelector(".ff-slider"),h=o.querySelector("input"),d=Vh(t),f=S=>{if(!i)return S;const p=(Number(S)-t.min)/(t.max-t.min);return Math.pow(Math.max(0,Math.min(1,p)),1/t.curve)},g=S=>{if(!i)return Number(S);const p=Math.max(0,Math.min(1,Number(S)));return t.min+(t.max-t.min)*Math.pow(p,t.curve)},_=S=>{const p=Number(S),m=f(p);h.value=String(m),l.textContent=d(p);const R=i?m*100:(p-t.min)/(t.max-t.min)*100;c.style.setProperty("--ff-pct",`${R.toFixed(2)}%`)};return _(this.store.get(e)),h.addEventListener("input",()=>{const S=g(h.value),p=t.type==="int"?Math.round(S):S;this.store.set(e,p),_(p)}),this._releaseRangeFocus(h),this._attachSticky(o,e,t),this._registerUpdater(e,_),o}_buildRangeField(e,t){const i=document.createElement("div");i.className="ff-field",i.innerHTML=`
      <div class="ff-field-label">
        <span class="ff-field-name">${t.label}</span>
        ${t.hint?`<span class="ff-field-hint">${t.hint}</span>`:""}
      </div>
      <div class="ff-field-value"></div>
      <div class="ff-field-control">
        <div class="ff-range${t.handle==="ticks"?" ff-range-ticks":""}">
          <div class="ff-range-track"><div class="ff-range-fill"></div></div>
          <input type="range" min="${t.min}" max="${t.max}" step="${t.step}" />
          <input type="range" min="${t.min}" max="${t.max}" step="${t.step}" />
        </div>
      </div>
    `;const r=i.querySelector(".ff-field-value"),a=i.querySelector(".ff-range-fill"),s=i.querySelectorAll("input"),o=s[0],l=s[1],c=Vh(t),h=f=>{const[g,_]=f;o.value=String(g),l.value=String(_);const S=t.max-t.min,p=(g-t.min)/S*100,m=(1-(_-t.min)/S)*100;a.style.left=`${p.toFixed(2)}%`,a.style.right=`${m.toFixed(2)}%`,r.textContent=`${c(g)} ─ ${c(_)}`},d=()=>{let f=Number(o.value),g=Number(l.value);const _=t.step;f>g-_&&(f>Number(this.store.get(e)[0])?f=g-_:g=f+_),f=Math.max(t.min,Math.min(t.max-_,f)),g=Math.max(t.min+_,Math.min(t.max,g));const S=[f,g];this.store.set(e,S),h(S)};return h(this.store.get(e)),o.addEventListener("input",d),l.addEventListener("input",d),this._releaseRangeFocus(o),this._releaseRangeFocus(l),this._attachSticky(i,e,t),this._registerUpdater(e,h),i}_releaseRangeFocus(e){const t=()=>e.blur();e.addEventListener("pointerup",t),e.addEventListener("change",t),e.addEventListener("keydown",i=>{!i.key.startsWith("Arrow")&&i.key!=="Tab"&&t()})}_buildToggleField(e,t){const i=document.createElement("div");i.className="ff-field",i.innerHTML=`
      <div class="ff-field-label">
        <span class="ff-field-name">${t.label}</span>
        ${t.hint?`<span class="ff-field-hint">${t.hint}</span>`:""}
      </div>
      <div class="ff-field-value">
        <div class="ff-toggle"></div>
      </div>
    `;const r=i.querySelector(".ff-toggle"),a=s=>{r.classList.toggle("on",!!s)};return a(this.store.get(e)),r.addEventListener("click",()=>{const s=!this.store.get(e);this.store.set(e,s),a(s)}),this._attachSticky(i,e,t),this._registerUpdater(e,a),i}_buildFooter(){const e=document.createElement("div");e.className="ff-panel-footer";const t=document.createElement("div");t.className="ff-banks",this.bankEls=new Map;for(const r of["A","B","C","D","E","F","G","H"]){const a=document.createElement("button");a.className="ff-bank",a.dataset.bank=r,a.textContent=r,a.title=`bank ${r}`,a.addEventListener("click",()=>{a.blur(),this.presets.setBank?.(r),this._syncBankActive()}),t.appendChild(a),this.bankEls.set(r,a)}e.appendChild(t);const i=document.createElement("div");i.className="ff-presets",this.presetEls=new Map;for(let r=1;r<=8;r++){const a=document.createElement("button");a.className="ff-preset",a.dataset.slot=String(r),a.innerHTML=`<span class="ff-preset-num">${r}</span>`,a.addEventListener("click",s=>{a.blur(),s.shiftKey?this.presets.save(r):this.presets.load(r)}),i.appendChild(a),this.presetEls.set(r,a)}e.appendChild(i),this.root.appendChild(e),this.refreshPresets()}_syncBankActive(){if(!this.bankEls)return;const e=this.presets?.getBank?.()||"A";for(const[t,i]of this.bankEls)i.classList.toggle("active",t===e)}refreshPresets(){if(this._syncBankActive(),!this.presetEls)return;const e=this.presets?.getBank?.()||"A",t=this.presets?.slots||{};for(const[i,r]of this.presetEls){const a=`${e}${i}`,s=t[a],o=!!s;r.classList.toggle("filled",o),r.style.backgroundImage=o&&ay(s)||"",r.title=`${a}${a==="A1"?" (default)":""} — click load · shift-click save`}}_attachSticky(e,t,i={}){if(i.pin===!1)return;const r=e.querySelector(".ff-field-name");if(!r)return;const a=t.startsWith("voxel."),s=document.createElement("button");s.className="ff-sticky"+(a?" major":"")+(this.sticky.has(t)?" on":""),s.title="important param marker — visual reminder only",s.textContent=this.sticky.has(t)?"◆":"◇",s.addEventListener("click",o=>{o.stopPropagation(),s.blur();const l=this.sticky.toggle(t),c=this.stickyEls.get(t)||new Set([s]);for(const h of c)h.classList.toggle("on",l),h.textContent=l?"◆":"◇"}),r.prepend(s),this.stickyEls.has(t)||this.stickyEls.set(t,new Set),this.stickyEls.get(t).add(s)}refreshSticky(){for(const[e,t]of this.stickyEls){const i=this.sticky.has(e);for(const r of t)r.classList.toggle("on",i),r.textContent=i?"◆":"◇"}}destroy(){this.unsubscribe?.(),this.root.remove()}}function Vh(n){const e=n.type==="int",t=Number.isInteger(n.precision)?n.precision:n.step>=1?0:n.step>=.1?1:n.step>=.01?2:n.step>=.001?3:4;return i=>{if(n.labels&&n.labels[i|0]!==void 0)return n.labels[i|0];const r=e?String(i|0):Number(i).toFixed(t);return n.unit?`${r} ${n.unit}`:r}}class oy{constructor({scene:e,rows:t}){this.scene=e,this.rows=t||null,this.hidden=!0,this.root=document.createElement("div"),this.root.className="ff-perf hidden",this.root.innerHTML=`
      <span class="ff-perf-key">fps</span><span class="ff-perf-val" data-k="fps">—</span>
      <span class="ff-perf-key">scene tris</span><span class="ff-perf-val" data-k="tris">—</span>
      <span class="ff-perf-key">draws</span><span class="ff-perf-val" data-k="calls">—</span>
      <span class="ff-perf-key">trees</span><span class="ff-perf-val" data-k="trees">—</span>
    `,this.cells={};for(const i of this.root.querySelectorAll("[data-k]"))this.cells[i.dataset.k]=i;this._frames=0,this._acc=0,this._fps=0,requestAnimationFrame(i=>{this._last=i,this._tick(i)})}toggle(){this.hidden=!this.hidden,this.root.classList.toggle("hidden",this.hidden)}_tick(e){requestAnimationFrame(i=>this._tick(i));const t=(e-this._last)/1e3;if(this._last=e,this._frames++,this._acc+=t,this._acc>=.5){if(this._fps=this._frames/this._acc,this._frames=0,this._acc=0,this.hidden)return;const i=this.scene?.renderer?.info,r=this._fps;this.cells.fps.textContent=r.toFixed(0),this.cells.fps.className="ff-perf-val"+(r<24?" bad":r<45?" warn":""),i&&(this.cells.tris.textContent=i.render.triangles.toLocaleString(),this.cells.calls.textContent=String(i.render.calls)),this.cells.trees.textContent=String(this.scene?.treeCount??0),this.rows&&this._syncRows(this.rows())}}_syncRows(e=[]){const t=new Set;for(const i of e){if(!i?.key)continue;t.add(i.key);let r=this.root.querySelector(`[data-extra-label="${i.key}"]`),a=this.root.querySelector(`[data-extra-val="${i.key}"]`);(!r||!a)&&(r=document.createElement("span"),r.className="ff-perf-key",r.dataset.extraLabel=i.key,a=document.createElement("span"),a.className="ff-perf-val",a.dataset.extraVal=i.key,this.root.append(r,a)),r.textContent=i.label,a.textContent=i.value}for(const i of[...this.root.querySelectorAll("[data-extra-label]")])t.has(i.dataset.extraLabel)||(this.root.querySelector(`[data-extra-val="${i.dataset.extraLabel}"]`)?.remove(),i.remove())}}class ly{constructor({parent:e=document.body,label:t="sim build",settleMs:i=600}={}){this.label=t,this.settleMs=i,this._lines=[],this._active=!1,this._count=0,this._total=1,this._t0=performance.now(),this._last=this._t0,this._hideTimer=null,this.root=document.createElement("div"),this.root.className="iso-build-console",this.root.innerHTML=`
      <div class="iso-build-row">
        <span class="iso-build-spin">|</span>
        <span class="iso-build-title"></span>
        <span class="iso-build-time"></span>
      </div>
      <div class="iso-build-track"><i></i></div>
      <div class="iso-build-lines"></div>
    `,this.spinEl=this.root.querySelector(".iso-build-spin"),this.titleEl=this.root.querySelector(".iso-build-title"),this.timeEl=this.root.querySelector(".iso-build-time"),this.barEl=this.root.querySelector(".iso-build-track i"),this.linesEl=this.root.querySelector(".iso-build-lines"),e.appendChild(this.root),this._mode="transition",this._renderIdle()}start(e=this.label,t=8,i={}){this._hideTimer&&(clearTimeout(this._hideTimer),this._hideTimer=null),this.label=e,this._mode=i.mode||this._mode||"transition",this._active=!0,this._count=0,this._total=Math.max(1,t|0),this._t0=performance.now(),this._last=this._t0,this._lines=[],this.root.classList.remove("boot","transition"),this.root.classList.add(this._mode,"visible","active"),this.step("start")}step(e,t=""){const i=performance.now(),r=i-this._t0,a=i-this._last;this._last=i,this._count=Math.min(this._total,this._count+1);const s=`${String(this._count).padStart(2,"0")} ${e.padEnd(16," ")} +${a.toFixed(1)}ms  ${r.toFixed(1)}ms${t?`  ${t}`:""}`;this._lines.push(s),this._lines.length>4&&this._lines.shift(),this._render()}done(e="ready"){this.step(e),this._active=!1,this._count=this._total,this.root.classList.remove("active"),this._render(),this._hideTimer=setTimeout(()=>{this.root.classList.remove("visible"),this._hideTimer=null},this.settleMs)}_render(){const e=performance.now(),t=Math.max(0,e-this._t0),i="|/-\\";this.spinEl.textContent=this._active?i[Math.floor(e/120)%i.length]:" ",this.titleEl.textContent=this.label,this.timeEl.textContent=`${t.toFixed(0)}ms`,this.barEl.style.transform=`scaleX(${Math.max(.04,Math.min(1,this._count/this._total))})`,this.linesEl.textContent=this._lines.join(`
`)}_renderIdle(){this.titleEl.textContent=this.label,this.timeEl.textContent="idle",this.barEl.style.transform="scaleX(0.04)",this.linesEl.textContent="waiting",this.root.classList.remove("visible","active","boot","transition"),this.root.classList.add(this._mode||"transition")}}const cy=1e4;/**
 * postprocessing v6.39.1 build Fri Apr 17 2026
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2026 Raoul van Rüschen
 * @license Zlib
 */var uy=(()=>{const n=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),t=new Pn;return t.setAttribute("position",new dn(n,3)),t.setAttribute("uv",new dn(e,2)),t})(),Ln=class uc{static get fullscreenGeometry(){return uy}constructor(e="Pass",t=new jn,i=new oa){this.name=e,this.renderer=null,this.scene=t,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthBlit=!1,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const t=this.fullscreenMaterial;t!==null&&(t.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let t=this.screen;t!==null?t.material=e:(t=new wt(uc.fullscreenGeometry,e),t.frustumCulled=!1,this.scene===null&&(this.scene=new jn),this.scene.add(t),this.screen=t)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,t=ja){}render(e,t,i,r,a){throw new Error("Render method not implemented!")}setSize(e,t){}initialize(e,t,i){}dispose(){for(const e of Object.keys(this)){const t=this[e];(t instanceof Ot||t instanceof Bn||t instanceof Ht||t instanceof uc)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},hy=class extends Ln{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(n,e,t,i,r){const a=n.state.buffers.stencil;a.setLocked(!1),a.setTest(!1)}},dy=`#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`,Xc="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",fy=class extends Nt{constructor(){super({name:"CopyMaterial",defines:{COLOR_SPACE_CONVERSION:"1",DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new U(null),depthBuffer:new U(null),channelWeights:new U(null),opacity:new U(1)},blending:On,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:dy,vertexShader:Xc}),this.depthFunc=$s}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(n){const e=n!==null;this.colorWrite!==e&&(e?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=e,this.needsUpdate=!0),this.uniforms.inputBuffer.value=n}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(n){const e=n!==null;this.depthWrite!==e&&(e?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=e,this.depthWrite=e,this.needsUpdate=!0),this.uniforms.depthBuffer.value=n}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}get colorSpaceConversion(){return this.defines.COLOR_SPACE_CONVERSION!==void 0}set colorSpaceConversion(n){this.colorSpaceConversion!==n&&(n?this.defines.COLOR_SPACE_CONVERSION=!0:delete this.defines.COLOR_SPACE_CONVERSION,this.needsUpdate=!0)}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(n){n!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=n):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(n){this.uniforms.inputBuffer.value=n}getOpacity(n){return this.uniforms.opacity.value}setOpacity(n){this.uniforms.opacity.value=n}},wf=class extends Ln{constructor(n,e=!0){super("CopyPass"),this.fullscreenMaterial=new fy,this.needsSwap=!1,this.renderTarget=n,n===void 0&&(this.renderTarget=new Ot(1,1,{minFilter:Ze,magFilter:Ze,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(n){this.autoResize=n}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(n){this.autoResize=n}render(n,e,t,i,r){this.fullscreenMaterial.inputBuffer=e.texture,n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){this.autoResize&&this.renderTarget.setSize(n,e)}initialize(n,e,t){t!==void 0&&(this.renderTarget.texture.type=t,t!==Jt?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":n!==null&&n.outputColorSpace===It&&(this.renderTarget.texture.colorSpace=It))}},Xh=new Oe,Tf=class extends Ln{constructor(n=!0,e=!0,t=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=n,this.depth=e,this.stencil=t,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(n,e,t){this.color=n,this.depth=e,this.stencil=t}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(n){this.overrideClearColor=n}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(n){this.overrideClearAlpha=n}render(n,e,t,i,r){const a=this.overrideClearColor,s=this.overrideClearAlpha,o=n.getClearAlpha(),l=a!==null,c=s>=0;l?(n.getClearColor(Xh),n.setClearColor(a,c?s:o)):c&&n.setClearAlpha(s),n.setRenderTarget(this.renderToScreen?null:e),n.clear(this.color,this.depth,this.stencil),l?n.setClearColor(Xh,o):c&&n.setClearAlpha(o)}},py=class extends Ln{constructor(n,e){super("MaskPass",n,e),this.needsSwap=!1,this.clearPass=new Tf(!1,!1,!0),this.inverse=!1}set mainScene(n){this.scene=n}set mainCamera(n){this.camera=n}get inverted(){return this.inverse}set inverted(n){this.inverse=n}get clear(){return this.clearPass.enabled}set clear(n){this.clearPass.enabled=n}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(n){this.inverted=n}render(n,e,t,i,r){const a=n.getContext(),s=n.state.buffers,o=this.scene,l=this.camera,c=this.clearPass,h=this.inverted?0:1,d=1-h;s.color.setMask(!1),s.depth.setMask(!1),s.color.setLocked(!0),s.depth.setLocked(!0),s.stencil.setTest(!0),s.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),s.stencil.setFunc(a.ALWAYS,h,4294967295),s.stencil.setClear(d),s.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?c.render(n,null):(c.render(n,e),c.render(n,t))),this.renderToScreen?(n.setRenderTarget(null),n.render(o,l)):(n.setRenderTarget(e),n.render(o,l),n.setRenderTarget(t),n.render(o,l)),s.color.setLocked(!1),s.depth.setLocked(!1),s.stencil.setLocked(!1),s.stencil.setFunc(a.EQUAL,1,4294967295),s.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),s.stencil.setLocked(!0)}},ol=1/1e3,my=1e3,gy=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(n){typeof document<"u"&&document.hidden!==void 0&&(n?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=n)}get delta(){return this._delta*ol}get fixedDelta(){return this._fixedDelta*ol}set fixedDelta(n){this._fixedDelta=n*my}get elapsed(){return this._elapsed*ol}update(n){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(n!==void 0?n:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(n){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},vy=class{constructor(n=null,{depthBuffer:e=!0,stencilBuffer:t=!1,multisampling:i=0,frameBufferType:r}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,t,r,i),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new wf,this.depthTexture=null,this.depthRenderTarget=null,this.passes=[],this.timer=new gy,this.autoRenderToScreen=!0,this.setRenderer(n)}get multisampling(){return this.inputBuffer.samples}set multisampling(n){const e=this.inputBuffer,t=this.multisampling;t>0&&n>0?(this.inputBuffer.samples=n,this.outputBuffer.samples=n,this.inputBuffer.dispose(),this.outputBuffer.dispose()):t!==n&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,n),this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(n){if(this.renderer=n,n!==null){const e=n.getSize(new Ee),t=n.getContext().getContextAttributes().alpha,i=this.inputBuffer.texture.type;i===Jt&&n.outputColorSpace===It&&(this.inputBuffer.texture.colorSpace=It,this.outputBuffer.texture.colorSpace=It,this.inputBuffer.dispose(),this.outputBuffer.dispose()),n.autoClear=!1,this.setSize(e.width,e.height);for(const r of this.passes)r.initialize(n,t,i)}}replaceRenderer(n,e=!0){const t=this.renderer,i=t.domElement.parentNode;return this.setRenderer(n),e&&i!==null&&(i.removeChild(t.domElement),i.appendChild(n.domElement)),t}createDepthTexture(){const n=this.inputBuffer,e=new Ka;this.depthTexture=e,n.stencilBuffer?(e.format=dr,e.type=hr):e.type=rn;const t=e.clone();return t.name="EffectComposer.StableDepth",this.depthRenderTarget=new Ot(n.width,n.height,{depthBuffer:!0,stencilBuffer:n.stencilBuffer,depthTexture:t}),t}blitDepthBuffer(n){const e=this.renderer,t=this.depthRenderTarget,i=e.properties,r=e.getContext();e.setRenderTarget(t);const a=i.get(n).__webglFramebuffer,s=i.get(t).__webglFramebuffer,o=n.stencilBuffer?r.DEPTH_BUFFER_BIT|r.STENCIL_BUFFER_BIT:r.DEPTH_BUFFER_BIT;r.bindFramebuffer(r.READ_FRAMEBUFFER,a),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,s),r.blitFramebuffer(0,0,n.width,n.height,0,0,t.width,t.height,o,r.NEAREST),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),e.setRenderTarget(null)}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.depthRenderTarget.dispose(),this.depthRenderTarget=null,this.inputBuffer.depthTexture=null,this.outputBuffer.depthTexture=null;for(const n of this.passes)n.setDepthTexture(null)}}createBuffer(n,e,t,i){const r=this.renderer,a=r===null?new Ee:r.getDrawingBufferSize(new Ee),s={minFilter:Ze,magFilter:Ze,stencilBuffer:e,depthBuffer:n,type:t},o=new Ot(a.width,a.height,s);return i>0&&(o.samples=i),t===Jt&&r!==null&&r.outputColorSpace===It&&(o.texture.colorSpace=It),o.texture.name="EffectComposer.Buffer",o.texture.generateMipmaps=!1,o}setMainScene(n){for(const e of this.passes)e.mainScene=n}setMainCamera(n){for(const e of this.passes)e.mainCamera=n}addPass(n,e){const t=this.passes,i=this.renderer,r=i.getDrawingBufferSize(new Ee),a=i.getContext().getContextAttributes().alpha,s=this.inputBuffer.texture.type;if(n.renderer=i,n.setSize(r.width,r.height),n.initialize(i,a,s),this.autoRenderToScreen&&(t.length>0&&(t[t.length-1].renderToScreen=!1),n.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?t.splice(e,0,n):t.push(n),this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!0),n.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const o=this.createDepthTexture();for(n of t)n.setDepthTexture(o)}else{const o=this.depthRenderTarget.depthTexture;n.setDepthTexture(o)}}removePass(n){const e=this.passes,t=e.indexOf(n);if(t!==-1&&e.splice(t,1).length>0){if(this.depthTexture!==null){const a=(o,l)=>o||l.needsDepthTexture;if(!e.reduce(a,!1)){const o=this.depthRenderTarget.depthTexture;n.getDepthTexture()===o&&n.setDepthTexture(null),this.deleteDepthTexture()}}this.autoRenderToScreen&&t===e.length&&(n.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const n=this.passes;this.deleteDepthTexture(),n.length>0&&(this.autoRenderToScreen&&(n[n.length-1].renderToScreen=!1),this.passes=[])}render(n){const e=this.renderer,t=this.copyPass;let i=this.inputBuffer,r=this.outputBuffer,a,s=!1;n===void 0&&(this.timer.update(),n=this.timer.getDelta());for(const o of this.passes)if(o.enabled){if(i.depthTexture=this.depthTexture,r.depthTexture=null,o.render(e,i,r,n,s),o.needsDepthBlit&&this.depthRenderTarget!==null&&this.blitDepthBuffer(i),o.needsSwap){if(s){t.renderToScreen=o.renderToScreen;const l=e.getContext(),c=e.state.buffers.stencil;c.setFunc(l.NOTEQUAL,1,4294967295),t.render(e,i,r,n,s),c.setFunc(l.EQUAL,1,4294967295)}a=i,i=r,r=a}o instanceof py?s=!0:o instanceof hy&&(s=!1)}}setSize(n,e,t){const i=this.renderer,r=i.getSize(new Ee);(n===void 0||e===void 0)&&(n=r.width,e=r.height),(r.width!==n||r.height!==e)&&i.setSize(n,e,t);const a=i.getDrawingBufferSize(new Ee);this.inputBuffer.setSize(a.width,a.height),this.outputBuffer.setSize(a.width,a.height),this.depthRenderTarget!==null&&this.depthRenderTarget.setSize(a.width,a.height);for(const s of this.passes)s.setSize(a.width,a.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const n of this.passes)n.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),Ln.fullscreenGeometry.dispose()}},Mi={NONE:0,DEPTH:1,CONVOLUTION:2},mt={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},_y=class{constructor(){this.shaderParts=new Map([[mt.FRAGMENT_HEAD,null],[mt.FRAGMENT_MAIN_UV,null],[mt.FRAGMENT_MAIN_IMAGE,null],[mt.VERTEX_HEAD,null],[mt.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=Mi.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=_n}},ll=!1,Yh=class{constructor(n=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(n),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let t;if(e.material.flatShading)switch(e.material.side){case cn:t=this.materialsFlatShadedDoubleSide;break;case Zt:t=this.materialsFlatShadedBackSide;break;default:t=this.materialsFlatShaded;break}else switch(e.material.side){case cn:t=this.materialsDoubleSide;break;case Zt:t=this.materialsBackSide;break;default:t=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=t[2]:e.isInstancedMesh?e.material=t[1]:e.material=t[0],++this.meshCount}}}cloneMaterial(n){if(!(n instanceof Nt))return n.clone();const e=n.uniforms,t=new Map;for(const r in e){const a=e[r].value;a.isRenderTargetTexture&&(e[r].value=null,t.set(r,a))}const i=n.clone();for(const r of t)e[r[0]].value=r[1],i.uniforms[r[0]].value=r[1];return i}setMaterial(n){if(this.disposeMaterials(),this.material=n,n!==null){const e=this.materials=[this.cloneMaterial(n),this.cloneMaterial(n),this.cloneMaterial(n)];for(const t of e)t.uniforms=Object.assign({},n.uniforms),t.side=Jn;e[2].skinning=!0,this.materialsBackSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.side=Zt,i}),this.materialsDoubleSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.side=cn,i}),this.materialsFlatShaded=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i}),this.materialsFlatShadedBackSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i.side=Zt,i}),this.materialsFlatShadedDoubleSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i.side=cn,i})}}render(n,e,t){const i=n.shadowMap.enabled;if(n.shadowMap.enabled=!1,ll){const r=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),n.render(e,t);for(const a of r)a[0].material=a[1];this.meshCount!==r.size&&r.clear()}else{const r=e.overrideMaterial;e.overrideMaterial=this.material,n.render(e,t),e.overrideMaterial=r}n.shadowMap.enabled=i}disposeMaterials(){if(this.material!==null){const n=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of n)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return ll}static set workaroundEnabled(n){ll=n}},Hi=-1,bi=class extends ri{constructor(n=null,e=Hi,t=Hi,i=1){super(),n!==null&&this.addEventListener("change",()=>n.setSize(this.baseSize.width,this.baseSize.height)),this.baseSize=new Ee(1,1),this.preferredSize=new Ee(e,t),this.target=this.preferredSize,this.s=i,this.effectiveSize=new Ee,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const n=this.baseSize,e=this.preferredSize,t=this.effectiveSize,i=this.scale;e.width!==Hi?t.width=e.width:e.height!==Hi?t.width=Math.round(e.height*(n.width/Math.max(n.height,1))):t.width=Math.round(n.width*i),e.height!==Hi?t.height=e.height:e.width!==Hi?t.height=Math.round(e.width/Math.max(n.width/Math.max(n.height,1),1)):t.height=Math.round(n.height*i)}get width(){return this.effectiveSize.width}set width(n){this.preferredWidth=n}get height(){return this.effectiveSize.height}set height(n){this.preferredHeight=n}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(n){this.s!==n&&(this.s=n,this.preferredSize.setScalar(Hi),this.dispatchEvent({type:"change"}))}getScale(){return this.scale}setScale(n){this.scale=n}get baseWidth(){return this.baseSize.width}set baseWidth(n){this.baseSize.width!==n&&(this.baseSize.width=n,this.dispatchEvent({type:"change"}))}getBaseWidth(){return this.baseWidth}setBaseWidth(n){this.baseWidth=n}get baseHeight(){return this.baseSize.height}set baseHeight(n){this.baseSize.height!==n&&(this.baseSize.height=n,this.dispatchEvent({type:"change"}))}getBaseHeight(){return this.baseHeight}setBaseHeight(n){this.baseHeight=n}setBaseSize(n,e){(this.baseSize.width!==n||this.baseSize.height!==e)&&(this.baseSize.set(n,e),this.dispatchEvent({type:"change"}))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(n){this.preferredSize.width!==n&&(this.preferredSize.width=n,this.dispatchEvent({type:"change"}))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(n){this.preferredWidth=n}get preferredHeight(){return this.preferredSize.height}set preferredHeight(n){this.preferredSize.height!==n&&(this.preferredSize.height=n,this.dispatchEvent({type:"change"}))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(n){this.preferredHeight=n}setPreferredSize(n,e){(this.preferredSize.width!==n||this.preferredSize.height!==e)&&(this.preferredSize.set(n,e),this.dispatchEvent({type:"change"}))}copy(n){this.s=n.scale,this.baseSize.set(n.baseWidth,n.baseHeight),this.preferredSize.set(n.preferredWidth,n.preferredHeight),this.dispatchEvent({type:"change"})}static get AUTO_SIZE(){return Hi}},st={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},Sy="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",xy="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",yy="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ey="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",wy="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ty="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",My="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",by="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ay="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ry="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Cy="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Dy="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Py="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ly="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Iy="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ny="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Oy="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Uy="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Fy="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",By="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Hy="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",zy="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Gy="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",ky="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Wy="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Vy="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Xy="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Yy="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",qy="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",$y="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",jy="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Zy="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ky=new Map([[st.ADD,Sy],[st.ALPHA,xy],[st.AVERAGE,yy],[st.COLOR,Ey],[st.COLOR_BURN,wy],[st.COLOR_DODGE,Ty],[st.DARKEN,My],[st.DIFFERENCE,by],[st.DIVIDE,Ay],[st.DST,null],[st.EXCLUSION,Ry],[st.HARD_LIGHT,Cy],[st.HARD_MIX,Dy],[st.HUE,Py],[st.INVERT,Ly],[st.INVERT_RGB,Iy],[st.LIGHTEN,Ny],[st.LINEAR_BURN,Oy],[st.LINEAR_DODGE,Uy],[st.LINEAR_LIGHT,Fy],[st.LUMINOSITY,By],[st.MULTIPLY,Hy],[st.NEGATION,zy],[st.NORMAL,Gy],[st.OVERLAY,ky],[st.PIN_LIGHT,Wy],[st.REFLECT,Vy],[st.SATURATION,Xy],[st.SCREEN,Yy],[st.SOFT_LIGHT,qy],[st.SRC,$y],[st.SUBTRACT,jy],[st.VIVID_LIGHT,Zy]]),Jy=class extends ri{constructor(n,e=1){super(),this._blendFunction=n,this.opacity=new U(e)}getOpacity(){return this.opacity.value}setOpacity(n){this.opacity.value=n}get blendFunction(){return this._blendFunction}set blendFunction(n){this._blendFunction=n,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(n){this.blendFunction=n}getShaderCode(){return Ky.get(this.blendFunction)}},Yc=class extends ri{constructor(n,e,{attributes:t=Mi.NONE,blendFunction:i=st.NORMAL,defines:r=new Map,uniforms:a=new Map,extensions:s=null,vertexShader:o=null}={}){super(),this.name=n,this.renderer=null,this.attributes=t,this.fragmentShader=e,this.vertexShader=o,this.defines=r,this.uniforms=a,this.extensions=s,this.blendMode=new Jy(i),this.blendMode.addEventListener("change",l=>this.setChanged()),this._inputColorSpace=_n,this._outputColorSpace=nn}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(n){this._inputColorSpace=n,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n,this.setChanged()}set mainScene(n){}set mainCamera(n){}getName(){return this.name}setRenderer(n){this.renderer=n}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(n){this.attributes=n,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(n){this.fragmentShader=n,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(n){this.vertexShader=n,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(n,e=ja){}update(n,e,t){}setSize(n,e){}initialize(n,e,t){}dispose(){for(const n of Object.keys(this)){const e=this[n];(e instanceof Ot||e instanceof Bn||e instanceof Ht||e instanceof Ln)&&this[n].dispose()}}},Qy=`#include <common>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);float mask=1.0;
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);mask=low*high;
#elif defined(THRESHOLD)
mask=smoothstep(threshold,threshold+smoothing,l);
#endif
#ifdef COLOR
gl_FragColor=texel*mask;
#else
gl_FragColor=vec4(l*mask);
#endif
}`,eE=class extends Nt{constructor(n=!1,e=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:ia.replace(/\D+/g,"")},uniforms:{inputBuffer:new U(null),threshold:new U(0),smoothing:new U(1),range:new U(null)},blending:On,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Qy,vertexShader:Xc}),this.colorOutput=n,this.luminanceRange=e}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get threshold(){return this.uniforms.threshold.value}set threshold(n){this.smoothing>0||n>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=n}getThreshold(){return this.threshold}setThreshold(n){this.threshold=n}get smoothing(){return this.uniforms.smoothing.value}set smoothing(n){this.threshold>0||n>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=n}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(n){this.smoothing=n}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(n){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(n){n?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(n){return this.colorOutput}setColorOutputEnabled(n){this.colorOutput=n}get useRange(){return this.luminanceRange!==null}set useRange(n){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(n){n!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=n,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(n){this.luminanceRange=n}},tE=class extends Ln{constructor({renderTarget:n,luminanceRange:e,colorOutput:t,resolutionScale:i=1,width:r=bi.AUTO_SIZE,height:a=bi.AUTO_SIZE,resolutionX:s=r,resolutionY:o=a}={}){super("LuminancePass"),this.fullscreenMaterial=new eE(t,e),this.needsSwap=!1,this.renderTarget=n,this.renderTarget===void 0&&(this.renderTarget=new Ot(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");const l=this.resolution=new bi(this,s,o,i);l.addEventListener("change",c=>this.setSize(l.baseWidth,l.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(n,e,t,i,r){const a=this.fullscreenMaterial;a.inputBuffer=e.texture,n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height)}initialize(n,e,t){t!==void 0&&t!==Jt&&(this.renderTarget.texture.type=t,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},hc=class extends Ln{constructor(n,e="inputBuffer"){super("ShaderPass"),this.fullscreenMaterial=n,this.input=e}setInput(n){this.input=n}render(n,e,t,i,r){const a=this.fullscreenMaterial.uniforms;e!==null&&a!==void 0&&a[this.input]!==void 0&&(a[this.input].value=e.texture),n.setRenderTarget(this.renderToScreen?null:t),n.render(this.scene,this.camera)}initialize(n,e,t){t!==void 0&&t!==Jt&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},Mf=class extends Ln{constructor(n,e,t=null){super("RenderPass",n,e),this.needsSwap=!1,this.needsDepthBlit=!0,this.clearPass=new Tf,this.overrideMaterialManager=t===null?null:new Yh(t),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(n){this.scene=n}set mainCamera(n){this.camera=n}get renderToScreen(){return super.renderToScreen}set renderToScreen(n){super.renderToScreen=n,this.clearPass.renderToScreen=n}get overrideMaterial(){const n=this.overrideMaterialManager;return n!==null?n.material:null}set overrideMaterial(n){const e=this.overrideMaterialManager;n!==null?e!==null?e.setMaterial(n):this.overrideMaterialManager=new Yh(n):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(n){this.overrideMaterial=n}get clear(){return this.clearPass.enabled}set clear(n){this.clearPass.enabled=n}getSelection(){return this.selection}setSelection(n){this.selection=n}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(n){this.ignoreBackground=n}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(n){this.skipShadowMapUpdate=n}getClearPass(){return this.clearPass}render(n,e,t,i,r){const a=this.scene,s=this.camera,o=this.selection,l=s.layers.mask,c=a.background,h=n.shadowMap.autoUpdate,d=this.renderToScreen?null:e;o!==null&&s.layers.set(o.getLayer()),this.skipShadowMapUpdate&&(n.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(a.background=null),this.clearPass.enabled&&this.clearPass.render(n,e),n.setRenderTarget(d),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(n,a,s):n.render(a,s),s.layers.mask=l,a.background=c,n.shadowMap.autoUpdate=h}},en={LINEAR:0,REINHARD:1,REINHARD2:2,REINHARD2_ADAPTIVE:3,OPTIMIZED_CINEON:5,CINEON:5,ACES_FILMIC:6,AGX:7,NEUTRAL:8},nE=`#include <packing>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
uniform lowp sampler2D luminanceBuffer0;uniform lowp sampler2D luminanceBuffer1;uniform float minLuminance;uniform float deltaTime;uniform float tau;varying vec2 vUv;void main(){float l0=unpackRGBAToFloat(texture2D(luminanceBuffer0,vUv));
#if __VERSION__ < 300
float l1=texture2DLodEXT(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#else
float l1=textureLod(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#endif
l0=max(minLuminance,l0);l1=max(minLuminance,l1);float adaptedLum=l0+(l1-l0)*(1.0-exp(-deltaTime*tau));gl_FragColor=(adaptedLum==1.0)?vec4(1.0):packFloatToRGBA(adaptedLum);}`,iE=class extends Nt{constructor(){super({name:"AdaptiveLuminanceMaterial",defines:{MIP_LEVEL_1X1:"0.0"},uniforms:{luminanceBuffer0:new U(null),luminanceBuffer1:new U(null),minLuminance:new U(.01),deltaTime:new U(0),tau:new U(1)},extensions:{shaderTextureLOD:!0},blending:On,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:nE,vertexShader:Xc})}set luminanceBuffer0(n){this.uniforms.luminanceBuffer0.value=n}setLuminanceBuffer0(n){this.uniforms.luminanceBuffer0.value=n}set luminanceBuffer1(n){this.uniforms.luminanceBuffer1.value=n}setLuminanceBuffer1(n){this.uniforms.luminanceBuffer1.value=n}set mipLevel1x1(n){this.defines.MIP_LEVEL_1X1=n.toFixed(1),this.needsUpdate=!0}setMipLevel1x1(n){this.mipLevel1x1=n}set deltaTime(n){this.uniforms.deltaTime.value=n}setDeltaTime(n){this.uniforms.deltaTime.value=n}get minLuminance(){return this.uniforms.minLuminance.value}set minLuminance(n){this.uniforms.minLuminance.value=n}getMinLuminance(){return this.uniforms.minLuminance.value}setMinLuminance(n){this.uniforms.minLuminance.value=n}get adaptationRate(){return this.uniforms.tau.value}set adaptationRate(n){this.uniforms.tau.value=n}getAdaptationRate(){return this.uniforms.tau.value}setAdaptationRate(n){this.uniforms.tau.value=n}},rE=class extends Ln{constructor(n,{minLuminance:e=.01,adaptationRate:t=1}={}){super("AdaptiveLuminancePass"),this.fullscreenMaterial=new iE,this.needsSwap=!1,this.renderTargetPrevious=new Ot(1,1,{minFilter:zt,magFilter:zt,depthBuffer:!1}),this.renderTargetPrevious.texture.name="Luminance.Previous";const i=this.fullscreenMaterial;i.luminanceBuffer0=this.renderTargetPrevious.texture,i.luminanceBuffer1=n,i.minLuminance=e,i.adaptationRate=t,this.renderTargetAdapted=this.renderTargetPrevious.clone(),this.renderTargetAdapted.texture.name="Luminance.Adapted",this.copyPass=new wf(this.renderTargetPrevious,!1)}get texture(){return this.renderTargetAdapted.texture}getTexture(){return this.renderTargetAdapted.texture}set mipLevel1x1(n){this.fullscreenMaterial.mipLevel1x1=n}get adaptationRate(){return this.fullscreenMaterial.adaptationRate}set adaptationRate(n){this.fullscreenMaterial.adaptationRate=n}render(n,e,t,i,r){this.fullscreenMaterial.deltaTime=i,n.setRenderTarget(this.renderToScreen?null:this.renderTargetAdapted),n.render(this.scene,this.camera),this.copyPass.render(n,this.renderTargetAdapted)}},aE=`#include <tonemapping_pars_fragment>
uniform float whitePoint;
#if TONE_MAPPING_MODE == 2 || TONE_MAPPING_MODE == 3
uniform float middleGrey;
#if TONE_MAPPING_MODE == 3
uniform lowp sampler2D luminanceBuffer;
#else
uniform float averageLuminance;
#endif
vec3 Reinhard2ToneMapping(vec3 color){color*=toneMappingExposure;float l=luminance(color);
#if TONE_MAPPING_MODE == 3
float lumAvg=unpackRGBAToFloat(texture2D(luminanceBuffer,vec2(0.5)));
#else
float lumAvg=averageLuminance;
#endif
float lumScaled=(l*middleGrey)/max(lumAvg,1e-6);float lumCompressed=lumScaled*(1.0+lumScaled/(whitePoint*whitePoint));lumCompressed/=(1.0+lumScaled);return clamp(lumCompressed*color,0.0,1.0);}
#elif TONE_MAPPING_MODE == 4
#define A 0.15
#define B 0.50
#define C 0.10
#define D 0.20
#define E 0.02
#define F 0.30
vec3 Uncharted2Helper(const in vec3 x){return((x*(A*x+C*B)+D*E)/(x*(A*x+B)+D*F))-E/F;}vec3 Uncharted2ToneMapping(vec3 color){color*=toneMappingExposure;return clamp(Uncharted2Helper(color)/Uncharted2Helper(vec3(whitePoint)),0.0,1.0);}
#endif
void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){
#if TONE_MAPPING_MODE == 2 || TONE_MAPPING_MODE == 3
outputColor=vec4(Reinhard2ToneMapping(inputColor.rgb),inputColor.a);
#elif TONE_MAPPING_MODE == 4
outputColor=vec4(Uncharted2ToneMapping(inputColor.rgb),inputColor.a);
#else
outputColor=vec4(toneMapping(inputColor.rgb),inputColor.a);
#endif
}`,sE=class extends Yc{constructor({blendFunction:n=st.SRC,adaptive:e=!1,mode:t=e?en.REINHARD2_ADAPTIVE:en.AGX,resolution:i=256,maxLuminance:r=4,whitePoint:a=r,middleGrey:s=.6,minLuminance:o=.01,averageLuminance:l=1,adaptationRate:c=1}={}){super("ToneMappingEffect",aE,{blendFunction:n,uniforms:new Map([["luminanceBuffer",new U(null)],["maxLuminance",new U(r)],["whitePoint",new U(a)],["middleGrey",new U(s)],["averageLuminance",new U(l)]])}),this.renderTargetLuminance=new Ot(1,1,{minFilter:xi,depthBuffer:!1}),this.renderTargetLuminance.texture.generateMipmaps=!0,this.renderTargetLuminance.texture.name="Luminance",this.luminancePass=new tE({renderTarget:this.renderTargetLuminance}),this.adaptiveLuminancePass=new rE(this.luminancePass.texture,{minLuminance:o,adaptationRate:c}),this.uniforms.get("luminanceBuffer").value=this.adaptiveLuminancePass.texture,this.resolution=i,this.mode=t}get mode(){return Number(this.defines.get("TONE_MAPPING_MODE"))}set mode(n){if(this.mode===n)return;const t=ia.replace(/\D+/g,"")>=168?"CineonToneMapping(texel)":"OptimizedCineonToneMapping(texel)";switch(this.defines.clear(),this.defines.set("TONE_MAPPING_MODE",n.toFixed(0)),n){case en.LINEAR:this.defines.set("toneMapping(texel)","LinearToneMapping(texel)");break;case en.REINHARD:this.defines.set("toneMapping(texel)","ReinhardToneMapping(texel)");break;case en.CINEON:case en.OPTIMIZED_CINEON:this.defines.set("toneMapping(texel)",t);break;case en.ACES_FILMIC:this.defines.set("toneMapping(texel)","ACESFilmicToneMapping(texel)");break;case en.AGX:this.defines.set("toneMapping(texel)","AgXToneMapping(texel)");break;case en.NEUTRAL:this.defines.set("toneMapping(texel)","NeutralToneMapping(texel)");break;default:this.defines.set("toneMapping(texel)","texel");break}this.adaptiveLuminancePass.enabled=n===en.REINHARD2_ADAPTIVE,this.setChanged()}getMode(){return this.mode}setMode(n){this.mode=n}get whitePoint(){return this.uniforms.get("whitePoint").value}set whitePoint(n){this.uniforms.get("whitePoint").value=n}get middleGrey(){return this.uniforms.get("middleGrey").value}set middleGrey(n){this.uniforms.get("middleGrey").value=n}get averageLuminance(){return this.uniforms.get("averageLuminance").value}set averageLuminance(n){this.uniforms.get("averageLuminance").value=n}get adaptiveLuminanceMaterial(){return this.adaptiveLuminancePass.fullscreenMaterial}getAdaptiveLuminanceMaterial(){return this.adaptiveLuminanceMaterial}get resolution(){return this.luminancePass.resolution.width}set resolution(n){const e=Math.max(0,Math.ceil(Math.log2(n))),t=Math.pow(2,e);this.luminancePass.resolution.setPreferredSize(t,t),this.adaptiveLuminanceMaterial.mipLevel1x1=e}getResolution(){return this.resolution}setResolution(n){this.resolution=n}get adaptive(){return this.mode===en.REINHARD2_ADAPTIVE}set adaptive(n){this.mode=n?en.REINHARD2_ADAPTIVE:en.REINHARD2}get adaptationRate(){return this.adaptiveLuminanceMaterial.adaptationRate}set adaptationRate(n){this.adaptiveLuminanceMaterial.adaptationRate=n}get distinction(){return console.warn(this.name,"distinction was removed."),1}set distinction(n){console.warn(this.name,"distinction was removed.")}update(n,e,t){this.adaptiveLuminancePass.enabled&&(this.luminancePass.render(n,e),this.adaptiveLuminancePass.render(n,null,null,t))}initialize(n,e,t){this.adaptiveLuminancePass.initialize(n,e,t)}},oE=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,lE="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",cE=class extends Nt{constructor(n,e,t,i,r=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:ia.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new U(null),depthBuffer:new U(null),resolution:new U(new Ee),texelSize:new U(new Ee),cameraNear:new U(.3),cameraFar:new U(1e3),aspect:new U(1),time:new U(0)},blending:On,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:r}),n&&this.setShaderParts(n),e&&this.setDefines(e),t&&this.setUniforms(t),this.copyCameraSettings(i)}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(n){this.uniforms.depthBuffer.value=n}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=ja){this.depthBuffer=n,this.depthPacking=e}setShaderData(n){this.setShaderParts(n.shaderParts),this.setDefines(n.defines),this.setUniforms(n.uniforms),this.setExtensions(n.extensions)}setShaderParts(n){return this.fragmentShader=oE.replace(mt.FRAGMENT_HEAD,n.get(mt.FRAGMENT_HEAD)||"").replace(mt.FRAGMENT_MAIN_UV,n.get(mt.FRAGMENT_MAIN_UV)||"").replace(mt.FRAGMENT_MAIN_IMAGE,n.get(mt.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=lE.replace(mt.VERTEX_HEAD,n.get(mt.VERTEX_HEAD)||"").replace(mt.VERTEX_MAIN_SUPPORT,n.get(mt.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(n){for(const e of n.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(n){for(const e of n.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(n){this.extensions={};for(const e of n)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(n){this.encodeOutput!==n&&(n?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(n){return this.encodeOutput}setOutputEncodingEnabled(n){this.encodeOutput=n}get time(){return this.uniforms.time.value}set time(n){this.uniforms.time.value=n}setDeltaTime(n){this.uniforms.time.value+=n}adoptCameraSettings(n){this.copyCameraSettings(n)}copyCameraSettings(n){n&&(this.uniforms.cameraNear.value=n.near,this.uniforms.cameraFar.value=n.far,n instanceof Dn?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(n,e){const t=this.uniforms;t.resolution.value.set(n,e),t.texelSize.value.set(1/n,1/e),t.aspect.value=n/e}static get Section(){return mt}};function qh(n,e,t){for(const i of e){const r="$1"+n+i.charAt(0).toUpperCase()+i.slice(1),a=new RegExp("([^\\.])(\\b"+i+"\\b)","g");for(const s of t.entries())s[1]!==null&&t.set(s[0],s[1].replace(a,r))}}function uE(n,e,t){let i=e.getFragmentShader(),r=e.getVertexShader();const a=i!==void 0&&/mainImage/.test(i),s=i!==void 0&&/mainUv/.test(i);if(t.attributes|=e.getAttributes(),i===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(s&&(t.attributes&Mi.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!a&&!s)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const o=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,l=t.shaderParts;let c=l.get(mt.FRAGMENT_HEAD)||"",h=l.get(mt.FRAGMENT_MAIN_UV)||"",d=l.get(mt.FRAGMENT_MAIN_IMAGE)||"",f=l.get(mt.VERTEX_HEAD)||"",g=l.get(mt.VERTEX_MAIN_SUPPORT)||"";const _=new Set,S=new Set;if(s&&(h+=`	${n}MainUv(UV);
`,t.uvTransformation=!0),r!==null&&/mainSupport/.test(r)){const R=/mainSupport *\([\w\s]*?uv\s*?\)/.test(r);g+=`	${n}MainSupport(`,g+=R?`vUv);
`:`);
`;for(const A of r.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const M of A[1].split(/\s*,\s*/))t.varyings.add(M),_.add(M),S.add(M);for(const A of r.matchAll(o))S.add(A[1])}for(const R of i.matchAll(o))S.add(R[1]);for(const R of e.defines.keys())S.add(R.replace(/\([\w\s,]*\)/g,""));for(const R of e.uniforms.keys())S.add(R);S.delete("while"),S.delete("for"),S.delete("if"),e.uniforms.forEach((R,A)=>t.uniforms.set(n+A.charAt(0).toUpperCase()+A.slice(1),R)),e.defines.forEach((R,A)=>t.defines.set(n+A.charAt(0).toUpperCase()+A.slice(1),R));const p=new Map([["fragment",i],["vertex",r]]);qh(n,S,t.defines),qh(n,S,p),i=p.get("fragment"),r=p.get("vertex");const m=e.blendMode;if(t.blendModes.set(m.blendFunction,m),a){e.inputColorSpace!==null&&e.inputColorSpace!==t.colorSpace&&(d+=e.inputColorSpace===It?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==nn?t.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(t.colorSpace=e.inputColorSpace);const R=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;d+=`${n}MainImage(color0, UV, `,(t.attributes&Mi.DEPTH)!==0&&R.test(i)&&(d+="depth, ",t.readDepth=!0),d+=`color1);
	`;const A=n+"BlendOpacity";t.uniforms.set(A,m.opacity),d+=`color0 = blend${m.blendFunction}(color0, color1, ${A});

	`,c+=`uniform float ${A};

`}if(c+=i+`
`,r!==null&&(f+=r+`
`),l.set(mt.FRAGMENT_HEAD,c),l.set(mt.FRAGMENT_MAIN_UV,h),l.set(mt.FRAGMENT_MAIN_IMAGE,d),l.set(mt.VERTEX_HEAD,f),l.set(mt.VERTEX_MAIN_SUPPORT,g),e.extensions!==null)for(const R of e.extensions)t.extensions.add(R)}}var $h=class extends Ln{constructor(n,...e){super("EffectPass"),this.fullscreenMaterial=new cE(null,null,null,n),this.listener=t=>this.handleEvent(t),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(n){for(const e of this.effects)e.mainScene=n}set mainCamera(n){this.fullscreenMaterial.copyCameraSettings(n);for(const e of this.effects)e.mainCamera=n}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(n){this.fullscreenMaterial.encodeOutput=n}get dithering(){return this.fullscreenMaterial.dithering}set dithering(n){const e=this.fullscreenMaterial;e.dithering=n,e.needsUpdate=!0}setEffects(n){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=n.sort((e,t)=>t.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const n=new _y;let e=0;for(const s of this.effects)if(s.blendMode.blendFunction===st.DST)n.attributes|=s.getAttributes()&Mi.DEPTH;else{if((n.attributes&s.getAttributes()&Mi.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${s.name})`);uE("e"+e++,s,n)}let t=n.shaderParts.get(mt.FRAGMENT_HEAD),i=n.shaderParts.get(mt.FRAGMENT_MAIN_IMAGE),r=n.shaderParts.get(mt.FRAGMENT_MAIN_UV);const a=/\bblend\b/g;for(const s of n.blendModes.values())t+=s.getShaderCode().replace(a,`blend${s.blendFunction}`)+`
`;(n.attributes&Mi.DEPTH)!==0?(n.readDepth&&(i=`float depth = readDepth(UV);

	`+i),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,n.colorSpace===It&&(i+=`color0 = sRGBToLinear(color0);
	`),n.uvTransformation?(r=`vec2 transformedUv = vUv;
`+r,n.defines.set("UV","transformedUv")):n.defines.set("UV","vUv"),n.shaderParts.set(mt.FRAGMENT_HEAD,t),n.shaderParts.set(mt.FRAGMENT_MAIN_IMAGE,i),n.shaderParts.set(mt.FRAGMENT_MAIN_UV,r);for(const[s,o]of n.shaderParts)o!==null&&n.shaderParts.set(s,o.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(n)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(n,e=ja){this.fullscreenMaterial.depthBuffer=n,this.fullscreenMaterial.depthPacking=e;for(const t of this.effects)t.setDepthTexture(n,e)}render(n,e,t,i,r){for(const a of this.effects)a.update(n,e,i);if(!this.skipRendering||this.renderToScreen){const a=this.fullscreenMaterial;a.inputBuffer=e.texture,a.time+=i*this.timeScale,n.setRenderTarget(this.renderToScreen?null:t),n.render(this.scene,this.camera)}}setSize(n,e){this.fullscreenMaterial.setSize(n,e);for(const t of this.effects)t.setSize(n,e)}initialize(n,e,t){this.renderer=n;for(const i of this.effects)i.initialize(n,e,t);this.updateMaterial(),t!==void 0&&t!==Jt&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const n of this.effects)n.removeEventListener("change",this.listener),n.dispose()}handleEvent(n){switch(n.type){case"change":this.recompile();break}}},hE=class extends Ln{constructor(n,e,{renderTarget:t,resolutionScale:i=1,width:r=bi.AUTO_SIZE,height:a=bi.AUTO_SIZE,resolutionX:s=r,resolutionY:o=a}={}){super("NormalPass"),this.needsSwap=!1,this.renderPass=new Mf(n,e,new jS);const l=this.renderPass;l.ignoreBackground=!0,l.skipShadowMapUpdate=!0;const c=l.getClearPass();c.overrideClearColor=new Oe(7829503),c.overrideClearAlpha=1,this.renderTarget=t,this.renderTarget===void 0&&(this.renderTarget=new Ot(1,1,{minFilter:zt,magFilter:zt}),this.renderTarget.texture.name="NormalPass.Target");const h=this.resolution=new bi(this,s,o,i);h.addEventListener("change",d=>this.setSize(h.baseWidth,h.baseHeight))}set mainScene(n){this.renderPass.mainScene=n}set mainCamera(n){this.renderPass.mainCamera=n}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}render(n,e,t,i,r){const a=this.renderToScreen?null:this.renderTarget;this.renderPass.render(n,a,a)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height)}},dE="Invariant failed";function Xa(n,e){if(!n)throw new Error(dE)}const fE=128,pE=128,mE=64;let gE=class extends Hn{load(e,t,i,r){const a=new Ti,s=new kc(this.manager);return s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.setResponseType("arraybuffer"),s.load(e,o=>{Xa(o instanceof ArrayBuffer),a.image.data=new Uint8Array(o),a.image.width=fE,a.image.height=pE,a.image.depth=mE,a.type=Jt,a.format=ra,a.minFilter=zt,a.magFilter=zt,a.wrapS=Un,a.wrapT=Un,a.wrapR=Un,a.needsUpdate=!0,t?.(a)},i,r),a}};const vE=new P;function bf(n,e,t=new P,i){const{x:r,y:a,z:s}=n,o=e.x,l=e.y,c=e.z,h=r*r*o,d=a*a*l,f=s*s*c,g=h+d+f,_=Math.sqrt(1/g);if(!Number.isFinite(_))return;const S=vE.copy(n).multiplyScalar(_);if(g<(i?.centerTolerance??.1))return t.copy(S);const p=S.multiply(e).multiplyScalar(2);let m=(1-_)*n.length()/(p.length()/2),R=0,A,M,H,D;do{m-=R,A=1/(1+m*o),M=1/(1+m*l),H=1/(1+m*c);const L=A*A,O=M*M,w=H*H,E=L*A,N=O*M,G=w*H;D=h*L+d*O+f*w-1,R=D/((h*E*o+d*N*l+f*G*c)*-2)}while(Math.abs(D)>1e-12);return t.set(r*A,a*M,s*H)}const Or=new P,cl=new P,ul=new P,dc=class{constructor(e,t,i){this.radii=new P(e,t,i)}get minimumRadius(){return Math.min(this.radii.x,this.radii.y,this.radii.z)}get maximumRadius(){return Math.max(this.radii.x,this.radii.y,this.radii.z)}get flattening(){return 1-this.minimumRadius/this.maximumRadius}get eccentricity(){return Math.sqrt(this.eccentricitySquared)}get eccentricitySquared(){const e=this.maximumRadius**2,t=this.minimumRadius**2;return(e-t)/e}reciprocalRadii(e=new P){const{x:t,y:i,z:r}=this.radii;return e.set(1/t,1/i,1/r)}reciprocalRadiiSquared(e=new P){const{x:t,y:i,z:r}=this.radii;return e.set(1/t**2,1/i**2,1/r**2)}projectOnSurface(e,t=new P,i){return bf(e,this.reciprocalRadiiSquared(),t,i)}getSurfaceNormal(e,t=new P){return t.multiplyVectors(this.reciprocalRadiiSquared(Or),e).normalize()}getEastNorthUpVectors(e,t=new P,i=new P,r=new P){this.getSurfaceNormal(e,r),t.set(-e.y,e.x,0).normalize(),i.crossVectors(r,t).normalize()}getEastNorthUpFrame(e,t=new Ue){const i=Or,r=cl,a=ul;return this.getEastNorthUpVectors(e,i,r,a),t.makeBasis(i,r,a).setPosition(e)}getNorthUpEastFrame(e,t=new Ue){const i=Or,r=cl,a=ul;return this.getEastNorthUpVectors(e,i,r,a),t.makeBasis(r,a,i).setPosition(e)}getIntersection(e,t=new P){const i=this.reciprocalRadii(Or),r=cl.copy(i).multiply(e.origin),a=ul.copy(i).multiply(e.direction),s=r.lengthSq(),o=a.lengthSq(),l=r.dot(a),c=l**2-o*(s-1);if(s===1)return t.copy(e.origin);if(s>1){if(l>=0||c<0)return;const h=Math.sqrt(c),d=(-l-h)/o,f=(-l+h)/o;return e.at(Math.min(d,f),t)}if(s<1){const h=l**2-o*(s-1),d=Math.sqrt(h),f=(-l+d)/o;return e.at(f,t)}if(l<0)return e.at(-l/o,t)}getOsculatingSphereCenter(e,t,i=new P){Xa(this.radii.x===this.radii.y);const r=this.radii.x**2,a=this.radii.z**2,s=Or.set(e.x/r,e.y/r,e.z/a).normalize();return i.copy(s.multiplyScalar(-t).add(e))}getNormalAtHorizon(e,t,i=new P){Xa(this.radii.x===this.radii.y);const r=this.radii.x**2,a=this.radii.z**2,s=e,o=t;let l=(s.x*o.x+s.y*o.y)/r+s.z*o.z/a;l/=(s.x**2+s.y**2)/r+s.z**2/a;const c=Or.copy(o).multiplyScalar(-l).add(e);return i.set(c.x/r,c.y/r,c.z/a).normalize()}};dc.WGS84=new dc(6378137,6378137,6356752314245179e-9);let Ya=dc;const Ls=new P,jh=new P,La=class fc{constructor(e=0,t=0,i=0){this.longitude=e,this.latitude=t,this.height=i}set(e,t,i){return this.longitude=e,this.latitude=t,i!=null&&(this.height=i),this}clone(){return new fc(this.longitude,this.latitude,this.height)}copy(e){return this.longitude=e.longitude,this.latitude=e.latitude,this.height=e.height,this}equals(e){return e.longitude===this.longitude&&e.latitude===this.latitude&&e.height===this.height}setLongitude(e){return this.longitude=e,this}setLatitude(e){return this.latitude=e,this}setHeight(e){return this.height=e,this}normalize(){return this.longitude<fc.MIN_LONGITUDE&&(this.longitude+=Math.PI*2),this}setFromECEF(e,t){const i=(t?.ellipsoid??Ya.WGS84).reciprocalRadiiSquared(Ls),r=bf(e,i,jh,t);if(r==null)throw new Error(`Could not project position to ellipsoid surface: ${e.toArray()}`);const a=Ls.multiplyVectors(r,i).normalize();this.longitude=Math.atan2(a.y,a.x),this.latitude=Math.asin(a.z);const s=Ls.subVectors(e,r);return this.height=Math.sign(s.dot(e))*s.length(),this}toECEF(e=new P,t){const i=t?.ellipsoid??Ya.WGS84,r=Ls.multiplyVectors(i.radii,i.radii),a=Math.cos(this.latitude),s=jh.set(a*Math.cos(this.longitude),a*Math.sin(this.longitude),Math.sin(this.latitude)).normalize();return e.multiplyVectors(r,s),e.divideScalar(Math.sqrt(s.dot(e))).add(s.multiplyScalar(this.height))}fromArray(e,t=0){return this.longitude=e[t],this.latitude=e[t+1],this.height=e[t+2],this}toArray(e=[],t=0){return e[t]=this.longitude,e[t+1]=this.latitude,e[t+2]=this.height,e}*[Symbol.iterator](){yield this.longitude,yield this.latitude,yield this.height}};La.MIN_LONGITUDE=-Math.PI,La.MAX_LONGITUDE=Math.PI,La.MIN_LATITUDE=-Math.PI/2,La.MAX_LATITUDE=Math.PI/2;let qc=La;/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var Nn=Uint8Array,Wr=Uint16Array,_E=Int32Array,Af=new Nn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Rf=new Nn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),SE=new Nn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Cf=function(n,e){for(var t=new Wr(31),i=0;i<31;++i)t[i]=e+=1<<n[i-1];for(var r=new _E(t[30]),i=1;i<30;++i)for(var a=t[i];a<t[i+1];++a)r[a]=a-t[i]<<5|i;return{b:t,r}},Df=Cf(Af,2),Pf=Df.b,xE=Df.r;Pf[28]=258,xE[258]=28;var yE=Cf(Rf,0),EE=yE.b,pc=new Wr(32768);for(var Dt=0;Dt<32768;++Dt){var zi=(Dt&43690)>>1|(Dt&21845)<<1;zi=(zi&52428)>>2|(zi&13107)<<2,zi=(zi&61680)>>4|(zi&3855)<<4,pc[Dt]=((zi&65280)>>8|(zi&255)<<8)>>1}var Ha=(function(n,e,t){for(var i=n.length,r=0,a=new Wr(e);r<i;++r)n[r]&&++a[n[r]-1];var s=new Wr(e);for(r=1;r<e;++r)s[r]=s[r-1]+a[r-1]<<1;var o;if(t){o=new Wr(1<<e);var l=15-e;for(r=0;r<i;++r)if(n[r])for(var c=r<<4|n[r],h=e-n[r],d=s[n[r]-1]++<<h,f=d|(1<<h)-1;d<=f;++d)o[pc[d]>>l]=c}else for(o=new Wr(i),r=0;r<i;++r)n[r]&&(o[r]=pc[s[n[r]-1]++]>>15-n[r]);return o}),Qa=new Nn(288);for(var Dt=0;Dt<144;++Dt)Qa[Dt]=8;for(var Dt=144;Dt<256;++Dt)Qa[Dt]=9;for(var Dt=256;Dt<280;++Dt)Qa[Dt]=7;for(var Dt=280;Dt<288;++Dt)Qa[Dt]=8;var Lf=new Nn(32);for(var Dt=0;Dt<32;++Dt)Lf[Dt]=5;var wE=Ha(Qa,9,1),TE=Ha(Lf,5,1),hl=function(n){for(var e=n[0],t=1;t<n.length;++t)n[t]>e&&(e=n[t]);return e},Vn=function(n,e,t){var i=e/8|0;return(n[i]|n[i+1]<<8)>>(e&7)&t},dl=function(n,e){var t=e/8|0;return(n[t]|n[t+1]<<8|n[t+2]<<16)>>(e&7)},ME=function(n){return(n+7)/8|0},bE=function(n,e,t){return(t==null||t>n.length)&&(t=n.length),new Nn(n.subarray(e,t))},AE=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],$n=function(n,e,t){var i=new Error(e||AE[n]);if(i.code=n,Error.captureStackTrace&&Error.captureStackTrace(i,$n),!t)throw i;return i},RE=function(n,e,t,i){var r=n.length,a=0;if(!r||e.f&&!e.l)return t||new Nn(0);var s=!t,o=s||e.i!=2,l=e.i;s&&(t=new Nn(r*3));var c=function(ct){var je=t.length;if(ct>je){var xt=new Nn(Math.max(je*2,ct));xt.set(t),t=xt}},h=e.f||0,d=e.p||0,f=e.b||0,g=e.l,_=e.d,S=e.m,p=e.n,m=r*8;do{if(!g){h=Vn(n,d,1);var R=Vn(n,d+1,3);if(d+=3,R)if(R==1)g=wE,_=TE,S=9,p=5;else if(R==2){var D=Vn(n,d,31)+257,L=Vn(n,d+10,15)+4,O=D+Vn(n,d+5,31)+1;d+=14;for(var w=new Nn(O),E=new Nn(19),N=0;N<L;++N)E[SE[N]]=Vn(n,d+N*3,7);d+=L*3;for(var G=hl(E),W=(1<<G)-1,Y=Ha(E,G,1),N=0;N<O;){var ne=Y[Vn(n,d,W)];d+=ne&15;var A=ne>>4;if(A<16)w[N++]=A;else{var X=0,oe=0;for(A==16?(oe=3+Vn(n,d,3),d+=2,X=w[N-1]):A==17?(oe=3+Vn(n,d,7),d+=3):A==18&&(oe=11+Vn(n,d,127),d+=7);oe--;)w[N++]=X}}var Z=w.subarray(0,D),le=w.subarray(D);S=hl(Z),p=hl(le),g=Ha(Z,S,1),_=Ha(le,p,1)}else $n(1);else{var A=ME(d)+4,M=n[A-4]|n[A-3]<<8,H=A+M;if(H>r){l&&$n(0);break}o&&c(f+M),t.set(n.subarray(A,H),f),e.b=f+=M,e.p=d=H*8,e.f=h;continue}if(d>m){l&&$n(0);break}}o&&c(f+131072);for(var ve=(1<<S)-1,De=(1<<p)-1,Fe=d;;Fe=d){var X=g[dl(n,d)&ve],Ye=X>>4;if(d+=X&15,d>m){l&&$n(0);break}if(X||$n(2),Ye<256)t[f++]=Ye;else if(Ye==256){Fe=d,g=null;break}else{var re=Ye-254;if(Ye>264){var N=Ye-257,ce=Af[N];re=Vn(n,d,(1<<ce)-1)+Pf[N],d+=ce}var fe=_[dl(n,d)&De],_e=fe>>4;fe||$n(3),d+=fe&15;var le=EE[_e];if(_e>3){var ce=Rf[_e];le+=dl(n,d)&(1<<ce)-1,d+=ce}if(d>m){l&&$n(0);break}o&&c(f+131072);var Ie=f+re;if(f<le){var Ge=a-le,Ve=Math.min(le,Ie);for(Ge+f<0&&$n(3);f<Ve;++f)t[f]=i[Ge+f]}for(;f<Ie;++f)t[f]=t[f-le]}}e.l=g,e.p=Fe,e.b=f,e.f=h,g&&(h=1,e.m=S,e.d=_,e.n=p)}while(!h);return f!=t.length&&s?bE(t,0,f):t.subarray(0,f)},CE=new Nn(0),DE=function(n,e){return((n[0]&15)!=8||n[0]>>4>7||(n[0]<<8|n[1])%31)&&$n(6,"invalid zlib data"),(n[1]>>5&1)==1&&$n(6,"invalid zlib data: "+(n[1]&32?"need":"unexpected")+" dictionary"),(n[1]>>3&4)+2};function Is(n,e){return RE(n.subarray(DE(n),-4),{i:2},e,e)}var PE=typeof TextDecoder<"u"&&new TextDecoder,LE=0;try{PE.decode(CE,{stream:!0}),LE=1}catch{}class If extends QS{constructor(e){super(e),this.type=Bt}parse(e){const w=Math.pow(2.7182818,2.2);function E(u,v){let y=0;for(let b=0;b<65536;++b)(b==0||u[b>>3]&1<<(b&7))&&(v[y++]=b);const T=y-1;for(;y<65536;)v[y++]=0;return T}function N(u){for(let v=0;v<16384;v++)u[v]={},u[v].len=0,u[v].lit=0,u[v].p=null}const G={l:0,c:0,lc:0};function W(u,v,y,T,b){for(;y<u;)v=v<<8|we(T,b),y+=8;y-=u,G.l=v>>y&(1<<u)-1,G.c=v,G.lc=y}const Y=new Array(59);function ne(u){for(let y=0;y<=58;++y)Y[y]=0;for(let y=0;y<65537;++y)Y[u[y]]+=1;let v=0;for(let y=58;y>0;--y){const T=v+Y[y]>>1;Y[y]=v,v=T}for(let y=0;y<65537;++y){const T=u[y];T>0&&(u[y]=T|Y[T]++<<6)}}function X(u,v,y,T,b,I){const k=v;let ee=0,V=0;for(;T<=b;T++){if(k.value-v.value>y)return!1;W(6,ee,V,u,k);const j=G.l;if(ee=G.c,V=G.lc,I[T]=j,j==63){if(k.value-v.value>y)throw new Error("Something wrong with hufUnpackEncTable");W(8,ee,V,u,k);let q=G.l+6;if(ee=G.c,V=G.lc,T+q>b+1)throw new Error("Something wrong with hufUnpackEncTable");for(;q--;)I[T++]=0;T--}else if(j>=59){let q=j-59+2;if(T+q>b+1)throw new Error("Something wrong with hufUnpackEncTable");for(;q--;)I[T++]=0;T--}}ne(I)}function oe(u){return u&63}function Z(u){return u>>6}function le(u,v,y,T){for(;v<=y;v++){const b=Z(u[v]),I=oe(u[v]);if(b>>I)throw new Error("Invalid table entry");if(I>14){const k=T[b>>I-14];if(k.len)throw new Error("Invalid table entry");if(k.lit++,k.p){const ee=k.p;k.p=new Array(k.lit);for(let V=0;V<k.lit-1;++V)k.p[V]=ee[V]}else k.p=new Array(1);k.p[k.lit-1]=v}else if(I){let k=0;for(let ee=1<<14-I;ee>0;ee--){const V=T[(b<<14-I)+k];if(V.len||V.p)throw new Error("Invalid table entry");V.len=I,V.lit=v,k++}}}return!0}const ve={c:0,lc:0};function De(u,v,y,T){u=u<<8|we(y,T),v+=8,ve.c=u,ve.lc=v}const Fe={c:0,lc:0};function Ye(u,v,y,T,b,I,k,ee,V){if(u==v){T<8&&(De(y,T,b,I),y=ve.c,T=ve.lc),T-=8;let j=y>>T;if(j=new Uint8Array([j])[0],ee.value+j>V)return!1;const q=k[ee.value-1];for(;j-- >0;)k[ee.value++]=q}else if(ee.value<V)k[ee.value++]=u;else return!1;Fe.c=y,Fe.lc=T}function re(u){return u&65535}function ce(u){const v=re(u);return v>32767?v-65536:v}const fe={a:0,b:0};function _e(u,v){const y=ce(u),b=ce(v),I=y+(b&1)+(b>>1),k=I,ee=I-b;fe.a=k,fe.b=ee}function Ie(u,v){const y=re(u),T=re(v),b=y-(T>>1)&65535,I=T+b-32768&65535;fe.a=I,fe.b=b}function Ge(u,v,y,T,b,I,k){const ee=k<16384,V=y>b?b:y;let j=1,q,ie;for(;j<=V;)j<<=1;for(j>>=1,q=j,j>>=1;j>=1;){ie=0;const de=ie+I*(b-q),pe=I*j,Me=I*q,ye=T*j,ge=T*q;let he,rt,We,At;for(;ie<=de;ie+=Me){let pt=ie;const qe=ie+T*(y-q);for(;pt<=qe;pt+=ge){const Rt=pt+ye,at=pt+pe,yt=at+ye;ee?(_e(u[pt+v],u[at+v]),he=fe.a,We=fe.b,_e(u[Rt+v],u[yt+v]),rt=fe.a,At=fe.b,_e(he,rt),u[pt+v]=fe.a,u[Rt+v]=fe.b,_e(We,At),u[at+v]=fe.a,u[yt+v]=fe.b):(Ie(u[pt+v],u[at+v]),he=fe.a,We=fe.b,Ie(u[Rt+v],u[yt+v]),rt=fe.a,At=fe.b,Ie(he,rt),u[pt+v]=fe.a,u[Rt+v]=fe.b,Ie(We,At),u[at+v]=fe.a,u[yt+v]=fe.b)}if(y&j){const Rt=pt+pe;ee?_e(u[pt+v],u[Rt+v]):Ie(u[pt+v],u[Rt+v]),he=fe.a,u[Rt+v]=fe.b,u[pt+v]=he}}if(b&j){let pt=ie;const qe=ie+T*(y-q);for(;pt<=qe;pt+=ge){const Rt=pt+ye;ee?_e(u[pt+v],u[Rt+v]):Ie(u[pt+v],u[Rt+v]),he=fe.a,u[Rt+v]=fe.b,u[pt+v]=he}}q=j,j>>=1}return ie}function Ve(u,v,y,T,b,I,k,ee,V){let j=0,q=0;const ie=k,de=Math.trunc(T.value+(b+7)/8);for(;T.value<de;)for(De(j,q,y,T),j=ve.c,q=ve.lc;q>=14;){const Me=j>>q-14&16383,ye=v[Me];if(ye.len)q-=ye.len,Ye(ye.lit,I,j,q,y,T,ee,V,ie),j=Fe.c,q=Fe.lc;else{if(!ye.p)throw new Error("hufDecode issues");let ge;for(ge=0;ge<ye.lit;ge++){const he=oe(u[ye.p[ge]]);for(;q<he&&T.value<de;)De(j,q,y,T),j=ve.c,q=ve.lc;if(q>=he&&Z(u[ye.p[ge]])==(j>>q-he&(1<<he)-1)){q-=he,Ye(ye.p[ge],I,j,q,y,T,ee,V,ie),j=Fe.c,q=Fe.lc;break}}if(ge==ye.lit)throw new Error("hufDecode issues")}}const pe=8-b&7;for(j>>=pe,q-=pe;q>0;){const Me=v[j<<14-q&16383];if(Me.len)q-=Me.len,Ye(Me.lit,I,j,q,y,T,ee,V,ie),j=Fe.c,q=Fe.lc;else throw new Error("hufDecode issues")}return!0}function ct(u,v,y,T,b,I){const k={value:0},ee=y.value,V=Pe(v,y),j=Pe(v,y);y.value+=4;const q=Pe(v,y);if(y.value+=4,V<0||V>=65537||j<0||j>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const ie=new Array(65537),de=new Array(16384);N(de);const pe=T-(y.value-ee);if(X(u,y,pe,V,j,ie),q>8*(T-(y.value-ee)))throw new Error("Something wrong with hufUncompress");le(ie,V,j,de),Ve(ie,de,u,y,q,j,I,b,k)}function je(u,v,y){for(let T=0;T<y;++T)v[T]=u[v[T]]}function xt(u){for(let v=1;v<u.length;v++){const y=u[v-1]+u[v]-128;u[v]=y}}function z(u,v){let y=0,T=Math.floor((u.length+1)/2),b=0;const I=u.length-1;for(;!(b>I||(v[b++]=u[y++],b>I));)v[b++]=u[T++]}function Vt(u){let v=u.byteLength;const y=new Array;let T=0;const b=new DataView(u);for(;v>0;){const I=b.getInt8(T++);if(I<0){const k=-I;v-=k+1;for(let ee=0;ee<k;ee++)y.push(b.getUint8(T++))}else{const k=I;v-=2;const ee=b.getUint8(T++);for(let V=0;V<k+1;V++)y.push(ee)}}return y}function it(u,v,y,T,b,I){let k=new DataView(I.buffer);const ee=y[u.idx[0]].width,V=y[u.idx[0]].height,j=3,q=Math.floor(ee/8),ie=Math.ceil(ee/8),de=Math.ceil(V/8),pe=ee-(ie-1)*8,Me=V-(de-1)*8,ye={value:0},ge=new Array(j),he=new Array(j),rt=new Array(j),We=new Array(j),At=new Array(j);for(let qe=0;qe<j;++qe)At[qe]=v[u.idx[qe]],ge[qe]=qe<1?0:ge[qe-1]+ie*de,he[qe]=new Float32Array(64),rt[qe]=new Uint16Array(64),We[qe]=new Uint16Array(ie*64);for(let qe=0;qe<de;++qe){let Rt=8;qe==de-1&&(Rt=Me);let at=8;for(let ut=0;ut<ie;++ut){ut==ie-1&&(at=pe);for(let nt=0;nt<j;++nt)rt[nt].fill(0),rt[nt][0]=b[ge[nt]++],Qe(ye,T,rt[nt]),He(rt[nt],he[nt]),gt(he[nt]);ke(he);for(let nt=0;nt<j;++nt)C(he[nt],We[nt],ut*64)}let yt=0;for(let ut=0;ut<j;++ut){const nt=y[u.idx[ut]].type;for(let Yt=8*qe;Yt<8*qe+Rt;++Yt){yt=At[ut][Yt];for(let yn=0;yn<q;++yn){const bn=yn*64+(Yt&7)*8;k.setUint16(yt+0*nt,We[ut][bn+0],!0),k.setUint16(yt+2*nt,We[ut][bn+1],!0),k.setUint16(yt+4*nt,We[ut][bn+2],!0),k.setUint16(yt+6*nt,We[ut][bn+3],!0),k.setUint16(yt+8*nt,We[ut][bn+4],!0),k.setUint16(yt+10*nt,We[ut][bn+5],!0),k.setUint16(yt+12*nt,We[ut][bn+6],!0),k.setUint16(yt+14*nt,We[ut][bn+7],!0),yt+=16*nt}}if(q!=ie)for(let Yt=8*qe;Yt<8*qe+Rt;++Yt){const yn=At[ut][Yt]+8*q*2*nt,bn=q*64+(Yt&7)*8;for(let cs=0;cs<at;++cs)k.setUint16(yn+cs*2*nt,We[ut][bn+cs],!0)}}}const pt=new Uint16Array(ee);k=new DataView(I.buffer);for(let qe=0;qe<j;++qe){y[u.idx[qe]].decoded=!0;const Rt=y[u.idx[qe]].type;if(y[qe].type==2)for(let at=0;at<V;++at){const yt=At[qe][at];for(let ut=0;ut<ee;++ut)pt[ut]=k.getUint16(yt+ut*2*Rt,!0);for(let ut=0;ut<ee;++ut)k.setFloat32(yt+ut*2*Rt,K(pt[ut]),!0)}}}function Qe(u,v,y){let T,b=1;for(;b<64;)T=v[u.value],T==65280?b=64:T>>8==255?b+=T&255:(y[b]=T,b++),u.value++}function He(u,v){v[0]=K(u[0]),v[1]=K(u[1]),v[2]=K(u[5]),v[3]=K(u[6]),v[4]=K(u[14]),v[5]=K(u[15]),v[6]=K(u[27]),v[7]=K(u[28]),v[8]=K(u[2]),v[9]=K(u[4]),v[10]=K(u[7]),v[11]=K(u[13]),v[12]=K(u[16]),v[13]=K(u[26]),v[14]=K(u[29]),v[15]=K(u[42]),v[16]=K(u[3]),v[17]=K(u[8]),v[18]=K(u[12]),v[19]=K(u[17]),v[20]=K(u[25]),v[21]=K(u[30]),v[22]=K(u[41]),v[23]=K(u[43]),v[24]=K(u[9]),v[25]=K(u[11]),v[26]=K(u[18]),v[27]=K(u[24]),v[28]=K(u[31]),v[29]=K(u[40]),v[30]=K(u[44]),v[31]=K(u[53]),v[32]=K(u[10]),v[33]=K(u[19]),v[34]=K(u[23]),v[35]=K(u[32]),v[36]=K(u[39]),v[37]=K(u[45]),v[38]=K(u[52]),v[39]=K(u[54]),v[40]=K(u[20]),v[41]=K(u[22]),v[42]=K(u[33]),v[43]=K(u[38]),v[44]=K(u[46]),v[45]=K(u[51]),v[46]=K(u[55]),v[47]=K(u[60]),v[48]=K(u[21]),v[49]=K(u[34]),v[50]=K(u[37]),v[51]=K(u[47]),v[52]=K(u[50]),v[53]=K(u[56]),v[54]=K(u[59]),v[55]=K(u[61]),v[56]=K(u[35]),v[57]=K(u[36]),v[58]=K(u[48]),v[59]=K(u[49]),v[60]=K(u[57]),v[61]=K(u[58]),v[62]=K(u[62]),v[63]=K(u[63])}function gt(u){const v=.5*Math.cos(.7853975),y=.5*Math.cos(3.14159/16),T=.5*Math.cos(3.14159/8),b=.5*Math.cos(3*3.14159/16),I=.5*Math.cos(5*3.14159/16),k=.5*Math.cos(3*3.14159/8),ee=.5*Math.cos(7*3.14159/16),V=new Array(4),j=new Array(4),q=new Array(4),ie=new Array(4);for(let de=0;de<8;++de){const pe=de*8;V[0]=T*u[pe+2],V[1]=k*u[pe+2],V[2]=T*u[pe+6],V[3]=k*u[pe+6],j[0]=y*u[pe+1]+b*u[pe+3]+I*u[pe+5]+ee*u[pe+7],j[1]=b*u[pe+1]-ee*u[pe+3]-y*u[pe+5]-I*u[pe+7],j[2]=I*u[pe+1]-y*u[pe+3]+ee*u[pe+5]+b*u[pe+7],j[3]=ee*u[pe+1]-I*u[pe+3]+b*u[pe+5]-y*u[pe+7],q[0]=v*(u[pe+0]+u[pe+4]),q[3]=v*(u[pe+0]-u[pe+4]),q[1]=V[0]+V[3],q[2]=V[1]-V[2],ie[0]=q[0]+q[1],ie[1]=q[3]+q[2],ie[2]=q[3]-q[2],ie[3]=q[0]-q[1],u[pe+0]=ie[0]+j[0],u[pe+1]=ie[1]+j[1],u[pe+2]=ie[2]+j[2],u[pe+3]=ie[3]+j[3],u[pe+4]=ie[3]-j[3],u[pe+5]=ie[2]-j[2],u[pe+6]=ie[1]-j[1],u[pe+7]=ie[0]-j[0]}for(let de=0;de<8;++de)V[0]=T*u[16+de],V[1]=k*u[16+de],V[2]=T*u[48+de],V[3]=k*u[48+de],j[0]=y*u[8+de]+b*u[24+de]+I*u[40+de]+ee*u[56+de],j[1]=b*u[8+de]-ee*u[24+de]-y*u[40+de]-I*u[56+de],j[2]=I*u[8+de]-y*u[24+de]+ee*u[40+de]+b*u[56+de],j[3]=ee*u[8+de]-I*u[24+de]+b*u[40+de]-y*u[56+de],q[0]=v*(u[de]+u[32+de]),q[3]=v*(u[de]-u[32+de]),q[1]=V[0]+V[3],q[2]=V[1]-V[2],ie[0]=q[0]+q[1],ie[1]=q[3]+q[2],ie[2]=q[3]-q[2],ie[3]=q[0]-q[1],u[0+de]=ie[0]+j[0],u[8+de]=ie[1]+j[1],u[16+de]=ie[2]+j[2],u[24+de]=ie[3]+j[3],u[32+de]=ie[3]-j[3],u[40+de]=ie[2]-j[2],u[48+de]=ie[1]-j[1],u[56+de]=ie[0]-j[0]}function ke(u){for(let v=0;v<64;++v){const y=u[0][v],T=u[1][v],b=u[2][v];u[0][v]=y+1.5747*b,u[1][v]=y-.1873*T-.4682*b,u[2][v]=y+1.8556*T}}function C(u,v,y){for(let T=0;T<64;++T)v[y+T]=Zs.toHalfFloat(x(u[T]))}function x(u){return u<=1?Math.sign(u)*Math.pow(Math.abs(u),2.2):Math.sign(u)*Math.pow(w,Math.abs(u)-1)}function B(u){return new DataView(u.array.buffer,u.offset.value,u.size)}function $(u){const v=u.viewer.buffer.slice(u.offset.value,u.offset.value+u.size),y=new Uint8Array(Vt(v)),T=new Uint8Array(y.length);return xt(y),z(y,T),new DataView(T.buffer)}function J(u){const v=u.array.slice(u.offset.value,u.offset.value+u.size),y=Is(v),T=new Uint8Array(y.length);return xt(y),z(y,T),new DataView(T.buffer)}function Q(u){const v=u.viewer,y={value:u.offset.value},T=new Uint16Array(u.columns*u.lines*(u.inputChannels.length*u.type)),b=new Uint8Array(8192);let I=0;const k=new Array(u.inputChannels.length);for(let Me=0,ye=u.inputChannels.length;Me<ye;Me++)k[Me]={},k[Me].start=I,k[Me].end=k[Me].start,k[Me].nx=u.columns,k[Me].ny=u.lines,k[Me].size=u.type,I+=k[Me].nx*k[Me].ny*k[Me].size;const ee=te(v,y),V=te(v,y);if(V>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(ee<=V)for(let Me=0;Me<V-ee+1;Me++)b[Me+ee]=Be(v,y);const j=new Uint16Array(65536),q=E(b,j),ie=Pe(v,y);ct(u.array,v,y,ie,T,I);for(let Me=0;Me<u.inputChannels.length;++Me){const ye=k[Me];for(let ge=0;ge<k[Me].size;++ge)Ge(T,ye.start+ge,ye.nx,ye.size,ye.ny,ye.nx*ye.size,q)}je(j,T,I);let de=0;const pe=new Uint8Array(T.buffer.byteLength);for(let Me=0;Me<u.lines;Me++)for(let ye=0;ye<u.inputChannels.length;ye++){const ge=k[ye],he=ge.nx*ge.size,rt=new Uint8Array(T.buffer,ge.end*2,he*2);pe.set(rt,de),de+=he*2,ge.end+=he}return new DataView(pe.buffer)}function xe(u){const v=u.array.slice(u.offset.value,u.offset.value+u.size),y=Is(v),T=u.inputChannels.length*u.lines*u.columns*u.totalBytes,b=new ArrayBuffer(T),I=new DataView(b);let k=0,ee=0;const V=new Array(4);for(let j=0;j<u.lines;j++)for(let q=0;q<u.inputChannels.length;q++){let ie=0;switch(u.inputChannels[q].pixelType){case 1:V[0]=k,V[1]=V[0]+u.columns,k=V[1]+u.columns;for(let pe=0;pe<u.columns;++pe){const Me=y[V[0]++]<<8|y[V[1]++];ie+=Me,I.setUint16(ee,ie,!0),ee+=2}break;case 2:V[0]=k,V[1]=V[0]+u.columns,V[2]=V[1]+u.columns,k=V[2]+u.columns;for(let pe=0;pe<u.columns;++pe){const Me=y[V[0]++]<<24|y[V[1]++]<<16|y[V[2]++]<<8;ie+=Me,I.setUint32(ee,ie,!0),ee+=4}break}}return I}function ue(u){const v=u.viewer,y={value:u.offset.value},T=new Uint8Array(u.columns*u.lines*(u.inputChannels.length*u.type*2)),b={version:Ne(v,y),unknownUncompressedSize:Ne(v,y),unknownCompressedSize:Ne(v,y),acCompressedSize:Ne(v,y),dcCompressedSize:Ne(v,y),rleCompressedSize:Ne(v,y),rleUncompressedSize:Ne(v,y),rleRawSize:Ne(v,y),totalAcUncompressedCount:Ne(v,y),totalDcUncompressedCount:Ne(v,y),acCompression:Ne(v,y)};if(b.version<2)throw new Error("EXRLoader.parse: "+si.compression+" version "+b.version+" is unsupported");const I=new Array;let k=te(v,y)-2;for(;k>0;){const ye=Se(v.buffer,y),ge=Be(v,y),he=ge>>2&3,rt=(ge>>4)-1,We=new Int8Array([rt])[0],At=Be(v,y);I.push({name:ye,index:We,type:At,compression:he}),k-=ye.length+3}const ee=si.channels,V=new Array(u.inputChannels.length);for(let ye=0;ye<u.inputChannels.length;++ye){const ge=V[ye]={},he=ee[ye];ge.name=he.name,ge.compression=0,ge.decoded=!1,ge.type=he.pixelType,ge.pLinear=he.pLinear,ge.width=u.columns,ge.height=u.lines}const j={idx:new Array(3)};for(let ye=0;ye<u.inputChannels.length;++ye){const ge=V[ye];for(let he=0;he<I.length;++he){const rt=I[he];ge.name==rt.name&&(ge.compression=rt.compression,rt.index>=0&&(j.idx[rt.index]=ye),ge.offset=ye)}}let q,ie,de;if(b.acCompressedSize>0)switch(b.acCompression){case 0:q=new Uint16Array(b.totalAcUncompressedCount),ct(u.array,v,y,b.acCompressedSize,q,b.totalAcUncompressedCount);break;case 1:const ye=u.array.slice(y.value,y.value+b.totalAcUncompressedCount),ge=Is(ye);q=new Uint16Array(ge.buffer),y.value+=b.totalAcUncompressedCount;break}if(b.dcCompressedSize>0){const ye={array:u.array,offset:y,size:b.dcCompressedSize};ie=new Uint16Array(J(ye).buffer),y.value+=b.dcCompressedSize}if(b.rleRawSize>0){const ye=u.array.slice(y.value,y.value+b.rleCompressedSize),ge=Is(ye);de=Vt(ge.buffer),y.value+=b.rleCompressedSize}let pe=0;const Me=new Array(V.length);for(let ye=0;ye<Me.length;++ye)Me[ye]=new Array;for(let ye=0;ye<u.lines;++ye)for(let ge=0;ge<V.length;++ge)Me[ge].push(pe),pe+=V[ge].width*u.type*2;it(j,Me,V,q,ie,T);for(let ye=0;ye<V.length;++ye){const ge=V[ye];if(!ge.decoded)switch(ge.compression){case 2:let he=0,rt=0;for(let We=0;We<u.lines;++We){let At=Me[ye][he];for(let pt=0;pt<ge.width;++pt){for(let qe=0;qe<2*ge.type;++qe)T[At++]=de[rt+qe*ge.width*ge.height];rt++}he++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(T.buffer)}function Se(u,v){const y=new Uint8Array(u);let T=0;for(;y[v.value+T]!=0;)T+=1;const b=new TextDecoder().decode(y.slice(v.value,v.value+T));return v.value=v.value+T+1,b}function ze(u,v,y){const T=new TextDecoder().decode(new Uint8Array(u).slice(v.value,v.value+y));return v.value=v.value+y,T}function se(u,v){const y=Re(u,v),T=Pe(u,v);return[y,T]}function Te(u,v){const y=Pe(u,v),T=Pe(u,v);return[y,T]}function Re(u,v){const y=u.getInt32(v.value,!0);return v.value=v.value+4,y}function Pe(u,v){const y=u.getUint32(v.value,!0);return v.value=v.value+4,y}function we(u,v){const y=u[v.value];return v.value=v.value+1,y}function Be(u,v){const y=u.getUint8(v.value);return v.value=v.value+1,y}const Ne=function(u,v){let y;return"getBigInt64"in DataView.prototype?y=Number(u.getBigInt64(v.value,!0)):y=u.getUint32(v.value+4,!0)+Number(u.getUint32(v.value,!0)<<32),v.value+=8,y};function Le(u,v){const y=u.getFloat32(v.value,!0);return v.value+=4,y}function F(u,v){return Zs.toHalfFloat(Le(u,v))}function K(u){const v=(u&31744)>>10,y=u&1023;return(u>>15?-1:1)*(v?v===31?y?NaN:1/0:Math.pow(2,v-15)*(1+y/1024):6103515625e-14*(y/1024))}function te(u,v){const y=u.getUint16(v.value,!0);return v.value+=2,y}function ae(u,v){return K(te(u,v))}function Ae(u,v,y,T){const b=y.value,I=[];for(;y.value<b+T-1;){const k=Se(v,y),ee=Re(u,y),V=Be(u,y);y.value+=3;const j=Re(u,y),q=Re(u,y);I.push({name:k,pixelType:ee,pLinear:V,xSampling:j,ySampling:q})}return y.value+=1,I}function Ce(u,v){const y=Le(u,v),T=Le(u,v),b=Le(u,v),I=Le(u,v),k=Le(u,v),ee=Le(u,v),V=Le(u,v),j=Le(u,v);return{redX:y,redY:T,greenX:b,greenY:I,blueX:k,blueY:ee,whiteX:V,whiteY:j}}function Ke(u,v){const y=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],T=Be(u,v);return y[T]}function Pt(u,v){const y=Re(u,v),T=Re(u,v),b=Re(u,v),I=Re(u,v);return{xMin:y,yMin:T,xMax:b,yMax:I}}function Xt(u,v){const y=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],T=Be(u,v);return y[T]}function vt(u,v){const y=["ENVMAP_LATLONG","ENVMAP_CUBE"],T=Be(u,v);return y[T]}function Mn(u,v){const y=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],T=["ROUND_DOWN","ROUND_UP"],b=Pe(u,v),I=Pe(u,v),k=Be(u,v);return{xSize:b,ySize:I,levelMode:y[k&15],roundingMode:T[k>>4]}}function zn(u,v){const y=Le(u,v),T=Le(u,v);return[y,T]}function as(u,v){const y=Le(u,v),T=Le(u,v),b=Le(u,v);return[y,T,b]}function ss(u,v,y,T,b){if(T==="string"||T==="stringvector"||T==="iccProfile")return ze(v,y,b);if(T==="chlist")return Ae(u,v,y,b);if(T==="chromaticities")return Ce(u,y);if(T==="compression")return Ke(u,y);if(T==="box2i")return Pt(u,y);if(T==="envmap")return vt(u,y);if(T==="tiledesc")return Mn(u,y);if(T==="lineOrder")return Xt(u,y);if(T==="float")return Le(u,y);if(T==="v2f")return zn(u,y);if(T==="v3f")return as(u,y);if(T==="int")return Re(u,y);if(T==="rational")return se(u,y);if(T==="timecode")return Te(u,y);if(T==="preview")return y.value+=b,"skipped";y.value+=b}function ai(u,v){const y=Math.log2(u);return v=="ROUND_DOWN"?Math.floor(y):Math.ceil(y)}function fa(u,v,y){let T=0;switch(u.levelMode){case"ONE_LEVEL":T=1;break;case"MIPMAP_LEVELS":T=ai(Math.max(v,y),u.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return T}function pa(u,v,y,T){const b=new Array(u);for(let I=0;I<u;I++){const k=1<<I;let ee=v/k|0;T=="ROUND_UP"&&ee*k<v&&(ee+=1);const V=Math.max(ee,1);b[I]=(V+y-1)/y|0}return b}function os(){const u=this,v=u.offset,y={value:0};for(let T=0;T<u.tileCount;T++){const b=Re(u.viewer,v),I=Re(u.viewer,v);v.value+=8,u.size=Pe(u.viewer,v);const k=b*u.blockWidth,ee=I*u.blockHeight;u.columns=k+u.blockWidth>u.width?u.width-k:u.blockWidth,u.lines=ee+u.blockHeight>u.height?u.height-ee:u.blockHeight;const V=u.columns*u.totalBytes,q=u.size<u.lines*V?u.uncompress(u):B(u);v.value+=u.size;for(let ie=0;ie<u.lines;ie++){const de=ie*u.columns*u.totalBytes;for(let pe=0;pe<u.inputChannels.length;pe++){const Me=si.channels[pe].name,ye=u.channelByteOffsets[Me]*u.columns,ge=u.decodeChannels[Me];if(ge===void 0)continue;y.value=de+ye;const he=(u.height-(1+ee+ie))*u.outLineWidth;for(let rt=0;rt<u.columns;rt++){const We=he+(rt+k)*u.outputChannels+ge;u.byteArray[We]=u.getter(q,y)}}}}}function vr(){const u=this,v=u.offset,y={value:0};for(let T=0;T<u.height/u.blockHeight;T++){const b=Re(u.viewer,v)-si.dataWindow.yMin;u.size=Pe(u.viewer,v),u.lines=b+u.blockHeight>u.height?u.height-b:u.blockHeight;const I=u.columns*u.totalBytes,ee=u.size<u.lines*I?u.uncompress(u):B(u);v.value+=u.size;for(let V=0;V<u.blockHeight;V++){const j=T*u.blockHeight,q=V+u.scanOrder(j);if(q>=u.height)continue;const ie=V*I,de=(u.height-1-q)*u.outLineWidth;for(let pe=0;pe<u.inputChannels.length;pe++){const Me=si.channels[pe].name,ye=u.channelByteOffsets[Me]*u.columns,ge=u.decodeChannels[Me];if(ge!==void 0){y.value=ie+ye;for(let he=0;he<u.columns;he++){const rt=de+he*u.outputChannels+ge;u.byteArray[rt]=u.getter(ee,y)}}}}}}function ls(u,v,y){const T={};if(u.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");T.version=u.getUint8(4);const b=u.getUint8(5);T.spec={singleTile:!!(b&2),longName:!!(b&4),deepFormat:!!(b&8),multiPart:!!(b&16)},y.value=8;let I=!0;for(;I;){const k=Se(v,y);if(k==0)I=!1;else{const ee=Se(v,y),V=Pe(u,y),j=ss(u,v,y,ee,V);j===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${ee}'.`):T[k]=j}}if((b&-7)!=0)throw console.error("THREE.EXRHeader:",T),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return T}function _r(u,v,y,T,b){const I={size:0,viewer:v,array:y,offset:T,width:u.dataWindow.xMax-u.dataWindow.xMin+1,height:u.dataWindow.yMax-u.dataWindow.yMin+1,inputChannels:u.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:_n};switch(u.compression){case"NO_COMPRESSION":I.blockHeight=1,I.uncompress=B;break;case"RLE_COMPRESSION":I.blockHeight=1,I.uncompress=$;break;case"ZIPS_COMPRESSION":I.blockHeight=1,I.uncompress=J;break;case"ZIP_COMPRESSION":I.blockHeight=16,I.uncompress=J;break;case"PIZ_COMPRESSION":I.blockHeight=32,I.uncompress=Q;break;case"PXR24_COMPRESSION":I.blockHeight=16,I.uncompress=xe;break;case"DWAA_COMPRESSION":I.blockHeight=32,I.uncompress=ue;break;case"DWAB_COMPRESSION":I.blockHeight=256,I.uncompress=ue;break;default:throw new Error("EXRLoader.parse: "+u.compression+" is unsupported")}const k={};for(const q of u.channels)switch(q.name){case"Y":case"R":case"G":case"B":case"A":k[q.name]=!0,I.type=q.pixelType}let ee=!1;if(k.R&&k.G&&k.B)ee=!k.A,I.outputChannels=4,I.decodeChannels={R:0,G:1,B:2,A:3};else if(k.Y)I.outputChannels=1,I.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(I.type==1)switch(b){case rn:I.getter=ae;break;case Bt:I.getter=te;break}else if(I.type==2)switch(b){case rn:I.getter=Le;break;case Bt:I.getter=F}else throw new Error("EXRLoader.parse: unsupported pixelType "+I.type+" for "+u.compression+".");I.columns=I.width;const V=I.width*I.height*I.outputChannels;switch(b){case rn:I.byteArray=new Float32Array(V),ee&&I.byteArray.fill(1,0,V);break;case Bt:I.byteArray=new Uint16Array(V),ee&&I.byteArray.fill(15360,0,V);break;default:console.error("THREE.EXRLoader: unsupported type: ",b);break}let j=0;for(const q of u.channels)I.decodeChannels[q.name]!==void 0&&(I.channelByteOffsets[q.name]=j),j+=q.pixelType*2;if(I.totalBytes=j,I.outLineWidth=I.width*I.outputChannels,u.lineOrder==="INCREASING_Y"?I.scanOrder=q=>q:I.scanOrder=q=>I.height-1-q,I.outputChannels==4?(I.format=Kt,I.colorSpace=_n):(I.format=ra,I.colorSpace=nn),u.spec.singleTile){I.blockHeight=u.tiles.ySize,I.blockWidth=u.tiles.xSize;const q=fa(u.tiles,I.width,I.height),ie=pa(q,I.width,u.tiles.xSize,u.tiles.roundingMode),de=pa(q,I.height,u.tiles.ySize,u.tiles.roundingMode);I.tileCount=ie[0]*de[0];for(let pe=0;pe<q;pe++)for(let Me=0;Me<de[pe];Me++)for(let ye=0;ye<ie[pe];ye++)Ne(v,T);I.decode=os.bind(I)}else{I.blockWidth=I.width;const q=Math.ceil(I.height/I.blockHeight);for(let ie=0;ie<q;ie++)Ne(v,T);I.decode=vr.bind(I)}return I}const ma={value:0},ga=new DataView(e),Do=new Uint8Array(e),si=ls(ga,e,ma),Pi=_r(si,ga,Do,ma,this.type);return Pi.decode(),{header:si,width:Pi.width,height:Pi.height,data:Pi.byteArray,format:Pi.format,colorSpace:Pi.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,i,r){function a(s,o){s.colorSpace=o.colorSpace,s.minFilter=Ze,s.magFilter=Ze,s.generateMipmaps=!1,s.flipY=!1,t&&t(s,o)}return super.load(e,a,i,r)}}class IE extends Hn{load(e,t,i,r){const a=new kc(this.manager);a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(this.withCredentials),a.load(e,s=>{Xa(s instanceof ArrayBuffer);try{t(s)}catch(o){r!=null?r(o):console.error(o),this.manager.itemError(e)}},i,r)}}function NE(n){return n instanceof uf?n.getContext().getExtension("OES_texture_float_linear")!=null:n.backend.hasFeature?.("float32-filterable")??!1}const OE="This is not an object",UE="This is not a Float16Array object",Zh="This constructor is not a subclass of Float16Array",Nf="The constructor property value is not an object",FE="Species constructor didn't return TypedArray object",BE="Derived constructor created TypedArray object which was too small length",za="Attempting to access detached ArrayBuffer",mc="Cannot convert undefined or null to object",gc="Cannot mix BigInt and other types, use explicit conversions",Kh="@@iterator property is not callable",Jh="Reduce of empty array with no initial value",HE="The comparison function must be either a function or undefined",fl="Offset is out of bounds";function bt(n){return(e,...t)=>En(n,e,t)}function ua(n,e){return bt(Qr(n,e).get)}const{apply:En,construct:Ia,defineProperty:zE,get:pl,getOwnPropertyDescriptor:Qr,getPrototypeOf:es,has:vc,ownKeys:Of,set:Qh,setPrototypeOf:Uf}=Reflect,GE=Proxy,{EPSILON:kE,MAX_SAFE_INTEGER:ed,isFinite:Ff,isNaN:ea}=Number,{iterator:ii,species:WE,toStringTag:$c,for:VE}=Symbol,ta=Object,{create:go,defineProperty:ts,freeze:XE,is:td}=ta,_c=ta.prototype,YE=_c.__lookupGetter__?bt(_c.__lookupGetter__):(n,e)=>{if(n==null)throw Lt(mc);let t=ta(n);do{const i=Qr(t,e);if(i!==void 0)return Si(i,"get")?i.get:void 0}while((t=es(t))!==null)},Si=ta.hasOwn||bt(_c.hasOwnProperty),Bf=Array,Hf=Bf.isArray,vo=Bf.prototype,qE=bt(vo.join),$E=bt(vo.push),jE=bt(vo.toLocaleString),jc=vo[ii],ZE=bt(jc),{abs:KE,trunc:zf}=Math,_o=ArrayBuffer,JE=_o.isView,Gf=_o.prototype,QE=bt(Gf.slice),ew=ua(Gf,"byteLength"),Sc=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:null,tw=Sc&&ua(Sc.prototype,"byteLength"),Zc=es(Uint8Array),nw=Zc.from,Qt=Zc.prototype,iw=Qt[ii],rw=bt(Qt.keys),aw=bt(Qt.values),sw=bt(Qt.entries),ow=bt(Qt.set),nd=bt(Qt.reverse),lw=bt(Qt.fill),cw=bt(Qt.copyWithin),id=bt(Qt.sort),ya=bt(Qt.slice),uw=bt(Qt.subarray),$t=ua(Qt,"buffer"),nr=ua(Qt,"byteOffset"),St=ua(Qt,"length"),kf=ua(Qt,$c),hw=Uint8Array,Cn=Uint16Array,rd=(...n)=>En(nw,Cn,n),Kc=Uint32Array,dw=Float32Array,pr=es([][ii]()),So=bt(pr.next),fw=bt((function*(){})().next),pw=es(pr),mw=DataView.prototype,gw=bt(mw.getUint16),Lt=TypeError,ml=RangeError,Wf=WeakSet,Vf=Wf.prototype,vw=bt(Vf.add),_w=bt(Vf.has),xo=WeakMap,Jc=xo.prototype,Qs=bt(Jc.get),Sw=bt(Jc.has),Qc=bt(Jc.set),Xf=new xo,xw=go(null,{next:{value:function(){const n=Qs(Xf,this);return So(n)}},[ii]:{value:function(){return this}}});function Na(n){if(n[ii]===jc&&pr.next===So)return n;const e=go(xw);return Qc(Xf,e,ZE(n)),e}const Yf=new xo,qf=go(pw,{next:{value:function(){const n=Qs(Yf,this);return fw(n)},writable:!0,configurable:!0}});for(const n of Of(pr))n!=="next"&&ts(qf,n,Qr(pr,n));function ad(n){const e=go(qf);return Qc(Yf,e,n),e}function eo(n){return n!==null&&typeof n=="object"||typeof n=="function"}function sd(n){return n!==null&&typeof n=="object"}function to(n){return kf(n)!==void 0}function xc(n){const e=kf(n);return e==="BigInt64Array"||e==="BigUint64Array"}function yw(n){try{return Hf(n)?!1:(ew(n),!0)}catch{return!1}}function $f(n){if(Sc===null)return!1;try{return tw(n),!0}catch{return!1}}function Ew(n){return yw(n)||$f(n)}function od(n){return Hf(n)?n[ii]===jc&&pr.next===So:!1}function ww(n){return to(n)?n[ii]===iw&&pr.next===So:!1}function Ns(n){if(typeof n!="string")return!1;const e=+n;return n!==e+""||!Ff(e)?!1:e===zf(e)}const no=VE("__Float16Array__");function Tw(n){if(!sd(n))return!1;const e=es(n);if(!sd(e))return!1;const t=e.constructor;if(t===void 0)return!1;if(!eo(t))throw Lt(Nf);return vc(t,no)}const yc=1/kE;function Mw(n){return n+yc-yc}const jf=6103515625e-14,bw=65504,Zf=.0009765625,ld=Zf*jf,Aw=Zf*yc;function Rw(n){const e=+n;if(!Ff(e)||e===0)return e;const t=e>0?1:-1,i=KE(e);if(i<jf)return t*Mw(i/ld)*ld;const r=(1+Aw)*i,a=r-(r-i);return a>bw||ea(a)?t*(1/0):t*a}const Kf=new _o(4),Jf=new dw(Kf),Qf=new Kc(Kf),Xn=new Cn(512),Yn=new hw(512);for(let n=0;n<256;++n){const e=n-127;e<-24?(Xn[n]=0,Xn[n|256]=32768,Yn[n]=24,Yn[n|256]=24):e<-14?(Xn[n]=1024>>-e-14,Xn[n|256]=1024>>-e-14|32768,Yn[n]=-e-1,Yn[n|256]=-e-1):e<=15?(Xn[n]=e+15<<10,Xn[n|256]=e+15<<10|32768,Yn[n]=13,Yn[n|256]=13):e<128?(Xn[n]=31744,Xn[n|256]=64512,Yn[n]=24,Yn[n|256]=24):(Xn[n]=31744,Xn[n|256]=64512,Yn[n]=13,Yn[n|256]=13)}function Qn(n){Jf[0]=Rw(n);const e=Qf[0],t=e>>23&511;return Xn[t]+((e&8388607)>>Yn[t])}const eu=new Kc(2048);for(let n=1;n<1024;++n){let e=n<<13,t=0;for(;(e&8388608)===0;)e<<=1,t-=8388608;e&=-8388609,t+=947912704,eu[n]=e|t}for(let n=1024;n<2048;++n)eu[n]=939524096+(n-1024<<13);const ha=new Kc(64);for(let n=1;n<31;++n)ha[n]=n<<23;ha[31]=1199570944;ha[32]=2147483648;for(let n=33;n<63;++n)ha[n]=2147483648+(n-32<<23);ha[63]=3347054592;const ep=new Cn(64);for(let n=1;n<64;++n)n!==32&&(ep[n]=1024);function Et(n){const e=n>>10;return Qf[0]=eu[ep[e]+(n&1023)]+ha[e],Jf[0]}function gi(n){const e=+n;return ea(e)||e===0?0:zf(e)}function gl(n){const e=gi(n);return e<0?0:e<ed?e:ed}function Os(n,e){if(!eo(n))throw Lt(OE);const t=n.constructor;if(t===void 0)return e;if(!eo(t))throw Lt(Nf);return t[WE]??e}function Ga(n){if($f(n))return!1;try{return QE(n,0,0),!1}catch{}return!0}function cd(n,e){const t=ea(n),i=ea(e);if(t&&i)return 0;if(t)return 1;if(i||n<e)return-1;if(n>e)return 1;if(n===0&&e===0){const r=td(n,0),a=td(e,0);if(!r&&a)return-1;if(r&&!a)return 1}return 0}const tu=2,io=new xo;function Vr(n){return Sw(io,n)||!JE(n)&&Tw(n)}function _t(n){if(!Vr(n))throw Lt(UE)}function Us(n,e){const t=Vr(n),i=to(n);if(!t&&!i)throw Lt(FE);if(typeof e=="number"){let r;if(t){const a=et(n);r=St(a)}else r=St(n);if(r<e)throw Lt(BE)}if(xc(n))throw Lt(gc)}function et(n){const e=Qs(io,n);if(e!==void 0){const r=$t(e);if(Ga(r))throw Lt(za);return e}const t=n.buffer;if(Ga(t))throw Lt(za);const i=Ia(Ci,[t,n.byteOffset,n.length],n.constructor);return Qs(io,i)}function ud(n){const e=St(n),t=[];for(let i=0;i<e;++i)t[i]=Et(n[i]);return t}const tp=new Wf;for(const n of Of(Qt)){if(n===$c)continue;const e=Qr(Qt,n);Si(e,"get")&&typeof e.get=="function"&&vw(tp,e.get)}const Cw=XE({get(n,e,t){return Ns(e)&&Si(n,e)?Et(pl(n,e)):_w(tp,YE(n,e))?pl(n,e):pl(n,e,t)},set(n,e,t,i){return Ns(e)&&Si(n,e)?Qh(n,e,Qn(t)):Qh(n,e,t,i)},getOwnPropertyDescriptor(n,e){if(Ns(e)&&Si(n,e)){const t=Qr(n,e);return t.value=Et(t.value),t}return Qr(n,e)},defineProperty(n,e,t){return Ns(e)&&Si(n,e)&&Si(t,"value")&&(t.value=Qn(t.value)),zE(n,e,t)}});let Ci=class jt{constructor(e,t,i){let r;if(Vr(e))r=Ia(Cn,[et(e)],new.target);else if(eo(e)&&!Ew(e)){let s,o;if(to(e)){s=e,o=St(e);const l=$t(e);if(Ga(l))throw Lt(za);if(xc(e))throw Lt(gc);const c=new _o(o*tu);r=Ia(Cn,[c],new.target)}else{const l=e[ii];if(l!=null&&typeof l!="function")throw Lt(Kh);l!=null?od(e)?(s=e,o=e.length):(s=[...e],o=s.length):(s=e,o=gl(s.length)),r=Ia(Cn,[o],new.target)}for(let l=0;l<o;++l)r[l]=Qn(s[l])}else r=Ia(Cn,arguments,new.target);const a=new GE(r,Cw);return Qc(io,a,r),a}static from(e,...t){const i=this;if(!vc(i,no))throw Lt(Zh);if(i===jt){if(Vr(e)&&t.length===0){const h=et(e),d=new Cn($t(h),nr(h),St(h));return new jt($t(ya(d)))}if(t.length===0)return new jt($t(rd(e,Qn)));const l=t[0],c=t[1];return new jt($t(rd(e,function(h,...d){return Qn(En(l,this,[h,...Na(d)]))},c)))}let r,a;const s=e[ii];if(s!=null&&typeof s!="function")throw Lt(Kh);if(s!=null)od(e)?(r=e,a=e.length):ww(e)?(r=e,a=St(e)):(r=[...e],a=r.length);else{if(e==null)throw Lt(mc);r=ta(e),a=gl(r.length)}const o=new i(a);if(t.length===0)for(let l=0;l<a;++l)o[l]=r[l];else{const l=t[0],c=t[1];for(let h=0;h<a;++h)o[h]=En(l,c,[r[h],h])}return o}static of(...e){const t=this;if(!vc(t,no))throw Lt(Zh);const i=e.length;if(t===jt){const a=new jt(i),s=et(a);for(let o=0;o<i;++o)s[o]=Qn(e[o]);return a}const r=new t(i);for(let a=0;a<i;++a)r[a]=e[a];return r}keys(){_t(this);const e=et(this);return rw(e)}values(){_t(this);const e=et(this);return ad((function*(){for(const t of aw(e))yield Et(t)})())}entries(){_t(this);const e=et(this);return ad((function*(){for(const[t,i]of sw(e))yield[t,Et(i)]})())}at(e){_t(this);const t=et(this),i=St(t),r=gi(e),a=r>=0?r:i+r;if(!(a<0||a>=i))return Et(t[a])}with(e,t){_t(this);const i=et(this),r=St(i),a=gi(e),s=a>=0?a:r+a,o=+t;if(s<0||s>=r)throw ml(fl);const l=new Cn($t(i),nr(i),St(i)),c=new jt($t(ya(l))),h=et(c);return h[s]=Qn(o),c}map(e,...t){_t(this);const i=et(this),r=St(i),a=t[0],s=Os(i,jt);if(s===jt){const l=new jt(r),c=et(l);for(let h=0;h<r;++h){const d=Et(i[h]);c[h]=Qn(En(e,a,[d,h,this]))}return l}const o=new s(r);Us(o,r);for(let l=0;l<r;++l){const c=Et(i[l]);o[l]=En(e,a,[c,l,this])}return o}filter(e,...t){_t(this);const i=et(this),r=St(i),a=t[0],s=[];for(let c=0;c<r;++c){const h=Et(i[c]);En(e,a,[h,c,this])&&$E(s,h)}const o=Os(i,jt),l=new o(s);return Us(l),l}reduce(e,...t){_t(this);const i=et(this),r=St(i);if(r===0&&t.length===0)throw Lt(Jh);let a,s;t.length===0?(a=Et(i[0]),s=1):(a=t[0],s=0);for(let o=s;o<r;++o)a=e(a,Et(i[o]),o,this);return a}reduceRight(e,...t){_t(this);const i=et(this),r=St(i);if(r===0&&t.length===0)throw Lt(Jh);let a,s;t.length===0?(a=Et(i[r-1]),s=r-2):(a=t[0],s=r-1);for(let o=s;o>=0;--o)a=e(a,Et(i[o]),o,this);return a}forEach(e,...t){_t(this);const i=et(this),r=St(i),a=t[0];for(let s=0;s<r;++s)En(e,a,[Et(i[s]),s,this])}find(e,...t){_t(this);const i=et(this),r=St(i),a=t[0];for(let s=0;s<r;++s){const o=Et(i[s]);if(En(e,a,[o,s,this]))return o}}findIndex(e,...t){_t(this);const i=et(this),r=St(i),a=t[0];for(let s=0;s<r;++s){const o=Et(i[s]);if(En(e,a,[o,s,this]))return s}return-1}findLast(e,...t){_t(this);const i=et(this),r=St(i),a=t[0];for(let s=r-1;s>=0;--s){const o=Et(i[s]);if(En(e,a,[o,s,this]))return o}}findLastIndex(e,...t){_t(this);const i=et(this),r=St(i),a=t[0];for(let s=r-1;s>=0;--s){const o=Et(i[s]);if(En(e,a,[o,s,this]))return s}return-1}every(e,...t){_t(this);const i=et(this),r=St(i),a=t[0];for(let s=0;s<r;++s)if(!En(e,a,[Et(i[s]),s,this]))return!1;return!0}some(e,...t){_t(this);const i=et(this),r=St(i),a=t[0];for(let s=0;s<r;++s)if(En(e,a,[Et(i[s]),s,this]))return!0;return!1}set(e,...t){_t(this);const i=et(this),r=gi(t[0]);if(r<0)throw ml(fl);if(e==null)throw Lt(mc);if(xc(e))throw Lt(gc);if(Vr(e))return ow(et(this),et(e),r);if(to(e)){const l=$t(e);if(Ga(l))throw Lt(za)}const a=St(i),s=ta(e),o=gl(s.length);if(r===1/0||o+r>a)throw ml(fl);for(let l=0;l<o;++l)i[l+r]=Qn(s[l])}reverse(){_t(this);const e=et(this);return nd(e),this}toReversed(){_t(this);const e=et(this),t=new Cn($t(e),nr(e),St(e)),i=new jt($t(ya(t))),r=et(i);return nd(r),i}fill(e,...t){_t(this);const i=et(this);return lw(i,Qn(e),...Na(t)),this}copyWithin(e,t,...i){_t(this);const r=et(this);return cw(r,e,t,...Na(i)),this}sort(e){_t(this);const t=et(this),i=e!==void 0?e:cd;return id(t,(r,a)=>i(Et(r),Et(a))),this}toSorted(e){_t(this);const t=et(this);if(e!==void 0&&typeof e!="function")throw new Lt(HE);const i=e!==void 0?e:cd,r=new Cn($t(t),nr(t),St(t)),a=new jt($t(ya(r))),s=et(a);return id(s,(o,l)=>i(Et(o),Et(l))),a}slice(e,t){_t(this);const i=et(this),r=Os(i,jt);if(r===jt){const _=new Cn($t(i),nr(i),St(i));return new jt($t(ya(_,e,t)))}const a=St(i),s=gi(e),o=t===void 0?a:gi(t);let l;s===-1/0?l=0:s<0?l=a+s>0?a+s:0:l=a<s?a:s;let c;o===-1/0?c=0:o<0?c=a+o>0?a+o:0:c=a<o?a:o;const h=c-l>0?c-l:0,d=new r(h);if(Us(d,h),h===0)return d;const f=$t(i);if(Ga(f))throw Lt(za);let g=0;for(;l<c;)d[g]=Et(i[l]),++l,++g;return d}subarray(e,t){_t(this);const i=et(this),r=Os(i,jt),a=new Cn($t(i),nr(i),St(i)),s=uw(a,e,t),o=new r($t(s),nr(s),St(s));return Us(o),o}indexOf(e,...t){_t(this);const i=et(this),r=St(i);let a=gi(t[0]);if(a===1/0)return-1;a<0&&(a+=r,a<0&&(a=0));for(let s=a;s<r;++s)if(Si(i,s)&&Et(i[s])===e)return s;return-1}lastIndexOf(e,...t){_t(this);const i=et(this),r=St(i);let a=t.length>=1?gi(t[0]):r-1;if(a===-1/0)return-1;a>=0?a=a<r-1?a:r-1:a+=r;for(let s=a;s>=0;--s)if(Si(i,s)&&Et(i[s])===e)return s;return-1}includes(e,...t){_t(this);const i=et(this),r=St(i);let a=gi(t[0]);if(a===1/0)return!1;a<0&&(a+=r,a<0&&(a=0));const s=ea(e);for(let o=a;o<r;++o){const l=Et(i[o]);if(s&&ea(l)||l===e)return!0}return!1}join(e){_t(this);const t=et(this),i=ud(t);return qE(i,e)}toLocaleString(...e){_t(this);const t=et(this),i=ud(t);return jE(i,...Na(e))}get[$c](){if(Vr(this))return"Float16Array"}};ts(Ci,"BYTES_PER_ELEMENT",{value:tu});ts(Ci,no,{});Uf(Ci,Zc);const ro=Ci.prototype;ts(ro,"BYTES_PER_ELEMENT",{value:tu});ts(ro,ii,{value:ro.values,writable:!0,configurable:!0});Uf(ro,Qt);function Dw(n,e,...t){return Et(gw(n,e,...Na(t)))}class Pw extends Hn{constructor(e,t){super(t),this.parser=e}load(e,t,i,r){const a=new IE(this.manager);a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(this.withCredentials),a.load(e,s=>{try{t(this.parser(s))}catch(o){r!=null?r(o):console.error(o),this.manager.itemError(e)}},i,r)}}function Lw(n){const e=n instanceof Int8Array?Ac:n instanceof Uint8Array||n instanceof Uint8ClampedArray?Jt:n instanceof Int16Array?Rc:n instanceof Uint16Array?Kr:n instanceof Int32Array?co:n instanceof Uint32Array?Ai:n instanceof Ci?Bt:n instanceof Float32Array||n instanceof Float64Array?rn:null;return Xa(e!=null),e}class Gr extends Hn{constructor(e,t,i={},r){super(r),this.textureClass=e,this.parser=t,this.options={format:Kt,minFilter:Ze,magFilter:Ze,...i}}load(e,t,i,r){const a=new this.textureClass,s=new Pw(this.parser,this.manager);return s.setRequestHeader(this.requestHeader),s.setPath(this.path),s.setWithCredentials(this.withCredentials),s.load(e,o=>{a.image.data=o instanceof Ci?new Uint16Array(o.buffer):o;const{width:l,height:c,depth:h,...d}=this.options;l!=null&&(a.image.width=l),c!=null&&(a.image.height=c),"depth"in a.image&&h!=null&&(a.image.depth=h),a.type=Lw(o),Object.assign(a,d),a.needsUpdate=!0,t?.(a)},i,r),a}}const ao=me.clamp,np=me.lerp,Iw=me.degToRad;function Nw(n,e,t,i=0,r=1){return me.mapLinear(n,e,t,i,r)}function Ow(n){return Math.min(Math.max(n,0),1)}function dt(n){return(e,t)=>{e instanceof Bn?Object.defineProperty(e,t,{enumerable:!0,get(){return this.defines?.[n]!=null},set(i){i!==this[t]&&(i?(this.defines??={},this.defines[n]="1"):delete this.defines?.[n],this.needsUpdate=!0)}}):Object.defineProperty(e,t,{enumerable:!0,get(){return this.defines.has(n)},set(i){i!==this[t]&&(i?this.defines.set(n,"1"):this.defines.delete(n),this.setChanged())}})}}function hd(n){return typeof n=="number"?Math.floor(n):typeof n=="string"?parseInt(n,10):typeof n=="boolean"?+n:0}function mr(n,{min:e=Number.MIN_SAFE_INTEGER,max:t=Number.MAX_SAFE_INTEGER}={}){return(i,r)=>{i instanceof Bn?Object.defineProperty(i,r,{enumerable:!0,get(){const a=this.defines?.[n];return a!=null?hd(a):0},set(a){const s=this[r];a!==s&&(this.defines??={},this.defines[n]=ao(a,e,t).toFixed(0),this.needsUpdate=!0)}}):Object.defineProperty(i,r,{enumerable:!0,get(){const a=this.defines.get(n);return a!=null?hd(a):0},set(a){const s=this[r];a!==s&&(this.defines.set(n,ao(a,e,t).toFixed(0)),this.setChanged())}})}}function dd(n){return typeof n=="number"?n:typeof n=="string"?parseFloat(n):typeof n=="boolean"?+n:0}function nu(n,{min:e=-1/0,max:t=1/0,precision:i=7}={}){return(r,a)=>{r instanceof Bn?Object.defineProperty(r,a,{enumerable:!0,get(){const s=this.defines?.[n];return s!=null?dd(s):0},set(s){const o=this[a];s!==o&&(this.defines??={},this.defines[n]=ao(s,e,t).toFixed(i),this.needsUpdate=!0)}}):Object.defineProperty(r,a,{enumerable:!0,get(){const s=this.defines.get(n);return s!=null?dd(s):0},set(s){const o=this[a];s!==o&&(this.defines.set(n,ao(s,e,t).toFixed(i)),this.setChanged())}})}}function ip(n,{validate:e}={}){return(t,i)=>{t instanceof Bn?Object.defineProperty(t,i,{enumerable:!0,get(){return this.defines?.[n]},set(r){if(r!==this[i]){if(e?.(r)===!1){console.error(`Expression validation failed: ${r}`);return}this.defines??={},this.defines[n]=r,this.needsUpdate=!0}}}):Object.defineProperty(t,i,{enumerable:!0,get(){return this.defines.get(n)},set(r){if(r!==this[i]){if(e?.(r)===!1){console.error(`Expression validation failed: ${r}`);return}this.defines.set(n,r),this.setChanged()}}})}}function fd(n,...e){const t={};for(let i=0;i<e.length;i+=2){const r=e[i],a=e[i+1];for(const s of a)t[s]={enumerable:!0,get:()=>r[s],set:o=>{r[s]=o}}}return Object.defineProperties(n,t),n}function pd(n,e,t){const i={};for(const r of t)i[r]={enumerable:!0,get:()=>e.uniforms[r].value,set:a=>{e.uniforms[r].value=a}};return Object.defineProperties(n,i),n}class vl extends Hn{constructor(e={},t){super(t),this.options=e}load(e,t,i,r){const{width:a,height:s,depth:o}=this.options,l=new Ti(null,a,s,o),c=new If(this.manager);return c.setRequestHeader(this.requestHeader),c.setPath(this.path),c.setWithCredentials(this.withCredentials),c.load(e,h=>{const{image:d}=h;l.image={data:d.data,width:a??d.width,height:s??d.height,depth:o??Math.sqrt(d.height)},l.type=h.type,l.format=h.format,l.colorSpace=h.colorSpace,l.needsUpdate=!0;try{t?.(l)}catch(f){r!=null?r(f):console.error(f),this.manager.itemError(e)}},i,r),l}}class md extends Hn{constructor(e={},t){super(t),this.options=e}load(e,t,i,r){const{width:a,height:s}=this.options,o=new fr(null,a,s),l=new If(this.manager);return l.setRequestHeader(this.requestHeader),l.setPath(this.path),l.setWithCredentials(this.withCredentials),l.load(e,c=>{const{image:h}=c;o.image={data:h.data,width:a??h.width,height:s??h.height},o.type=c.type,o.format=c.format,o.colorSpace=c.colorSpace,o.needsUpdate=!0;try{t?.(o)}catch(d){r!=null?r(d):console.error(d),this.manager.itemError(e)}},i,r),o}}const Uw=/^[ \t]*#include +"([\w\d./]+)"/gm;function Ri(n,e){return n.replace(Uw,(t,i)=>{const r=i.split("/").reduce((a,s)=>typeof a!="string"&&a!=null?a[s]:void 0,e);if(typeof r!="string")throw new Error(`Could not find include for ${i}.`);return Ri(r,e)})}let Fs;function Fw(){if(Fs!=null)return Fs;const n=new Uint32Array([268435456]);return Fs=new Uint8Array(n.buffer,n.byteOffset,n.byteLength)[0]===0,Fs}function Bw(n,e,t,i=!0){if(i===Fw())return new e(n);const r=Object.assign(new DataView(n),{getFloat16(s,o){return Dw(this,s,o)}}),a=new e(r.byteLength/e.BYTES_PER_ELEMENT);for(let s=0,o=0;s<a.length;++s,o+=e.BYTES_PER_ELEMENT)a[s]=r[t](o,i);return a}const Hw=n=>new Uint8Array(n),Ea=(n,e)=>Bw(n,Ci,"getFloat16",e);const zw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*(?:i\s*\+\+|\+\+\s*i)\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gw(n,e,t,i){let r="";for(let a=parseInt(e,10);a<parseInt(t,10);++a)r+=i.replace(/\[\s*i\s*\]/g,`[${a}]`).replace(/UNROLLED_LOOP_INDEX/g,`${a}`);return r}function ns(n){return n.replace(zw,Gw)}const kw=`// Reference: https://github.com/mrdoob/three.js/blob/r171/examples/jsm/csm/CSMShader.js

#ifndef SHADOW_CASCADE_COUNT
#error "SHADOW_CASCADE_COUNT macro must be defined."
#endif // SHADOW_CASCADE_COUNT

int getCascadeIndex(
  const mat4 viewMatrix,
  const vec3 worldPosition,
  const vec2 intervals[SHADOW_CASCADE_COUNT],
  const float near,
  const float far
) {
  vec4 viewPosition = viewMatrix * vec4(worldPosition, 1.0);
  float depth = viewZToOrthographicDepth(viewPosition.z, near, far);
  vec2 interval;
  #pragma unroll_loop_start
  for (int i = 0; i < 4; ++i) {
    #if UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT
    interval = intervals[i];
    if (depth >= interval.x && depth < interval.y) {
      return UNROLLED_LOOP_INDEX;
    }
    #endif // UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT
  }
  #pragma unroll_loop_end
  return SHADOW_CASCADE_COUNT - 1;
}

int getFadedCascadeIndex(
  const mat4 viewMatrix,
  const vec3 worldPosition,
  const vec2 intervals[SHADOW_CASCADE_COUNT],
  const float near,
  const float far,
  const float jitter
) {
  vec4 viewPosition = viewMatrix * vec4(worldPosition, 1.0);
  float depth = viewZToOrthographicDepth(viewPosition.z, near, far);

  vec2 interval;
  float intervalCenter;
  float closestEdge;
  float margin;
  int nextIndex = -1;
  int prevIndex = -1;
  float alpha;

  #pragma unroll_loop_start
  for (int i = 0; i < 4; ++i) {
    #if UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT
    interval = intervals[i];
    intervalCenter = (interval.x + interval.y) * 0.5;
    closestEdge = depth < intervalCenter ? interval.x : interval.y;
    margin = closestEdge * closestEdge * 0.5;
    interval += margin * vec2(-0.5, 0.5);

    #if UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT - 1
    if (depth >= interval.x && depth < interval.y) {
      prevIndex = nextIndex;
      nextIndex = UNROLLED_LOOP_INDEX;
      alpha = saturate(min(depth - interval.x, interval.y - depth) / margin);
    }
    #else // UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT - 1
    // Don't fade out the last cascade.
    if (depth >= interval.x) {
      prevIndex = nextIndex;
      nextIndex = UNROLLED_LOOP_INDEX;
      alpha = saturate((depth - interval.x) / margin);
    }
    #endif // UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT - 1
    #endif // UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT
  }
  #pragma unroll_loop_end

  return jitter <= alpha
    ? nextIndex
    : prevIndex;
}
`,Ww=`// cSpell:words logdepthbuf

#ifdef DEPTH_PACKING
float readDepthValue(const sampler2D depthBuffer, const vec2 uv) {
  #if DEPTH_PACKING == 3201
  return unpackRGBAToDepth(texture(depthBuffer, uv));
  #else // DEPTH_PACKING == 3201
  return texture(depthBuffer, uv).r;
  #endif // DEPTH_PACKING == 3201
}
#endif // DEPTH_PACKING

float reverseLogDepth(const float depth, const float near, const float far) {
  #if defined(USE_LOGDEPTHBUF) || defined(USE_LOGARITHMIC_DEPTH_BUFFER)
  float d = pow(2.0, depth * log2(far + 1.0)) - 1.0;
  float a = far / (far - near);
  float b = far * near / (near - far);
  return a + b / d;
  #else // defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(USE_LOGARITHMIC_DEPTH_BUFFER)
  return depth;
  #endif // defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(USE_LOGARITHMIC_DEPTH_BUFFER)
}

float linearizeDepth(const float depth, const float near, const float far) {
  float ndc = depth * 2.0 - 1.0;
  return 2.0 * near * far / (far + near - ndc * (far - near));
}
`,Vw=`float checker(const vec2 uv, const vec2 repeats) {
  vec2 c = floor(repeats * uv);
  float result = mod(c.x + c.y, 2.0);
  return sign(result);
}

float checker(const vec2 uv, const float repeats) {
  return checker(uv, vec2(repeats));
}
`,Xw=`// Reference: https://advances.realtimerendering.com/s2014/index.html#_NEXT_GENERATION_POST

float interleavedGradientNoise(const vec2 coord) {
  const vec3 magic = vec3(0.06711056, 0.00583715, 52.9829189);
  return fract(magic.z * fract(dot(coord, magic.xy)));
}
`,Yw=`#if !defined(saturate)
#define saturate(a) clamp(a, 0.0, 1.0)
#endif // !defined(saturate)

float remap(const float x, const float min1, const float max1, const float min2, const float max2) {
  return min2 + (x - min1) / (max1 - min1) * (max2 - min2);
}

vec2 remap(const vec2 x, const vec2 min1, const vec2 max1, const vec2 min2, const vec2 max2) {
  return min2 + (x - min1) / (max1 - min1) * (max2 - min2);
}

vec3 remap(const vec3 x, const vec3 min1, const vec3 max1, const vec3 min2, const vec3 max2) {
  return min2 + (x - min1) / (max1 - min1) * (max2 - min2);
}

vec4 remap(const vec4 x, const vec4 min1, const vec4 max1, const vec4 min2, const vec4 max2) {
  return min2 + (x - min1) / (max1 - min1) * (max2 - min2);
}

float remapClamped(
  const float x,
  const float min1,
  const float max1,
  const float min2,
  const float max2
) {
  return clamp(min2 + (x - min1) / (max1 - min1) * (max2 - min2), min2, max2);
}

vec2 remapClamped(
  const vec2 x,
  const vec2 min1,
  const vec2 max1,
  const vec2 min2,
  const vec2 max2
) {
  return clamp(min2 + (x - min1) / (max1 - min1) * (max2 - min2), min2, max2);
}

vec3 remapClamped(
  const vec3 x,
  const vec3 min1,
  const vec3 max1,
  const vec3 min2,
  const vec3 max2
) {
  return clamp(min2 + (x - min1) / (max1 - min1) * (max2 - min2), min2, max2);
}

vec4 remapClamped(
  const vec4 x,
  const vec4 min1,
  const vec4 max1,
  const vec4 min2,
  const vec4 max2
) {
  return clamp(min2 + (x - min1) / (max1 - min1) * (max2 - min2), min2, max2);
}

// Implicitly remap to 0 and 1
float remap(const float x, const float min1, const float max1) {
  return (x - min1) / (max1 - min1);
}

vec2 remap(const vec2 x, const vec2 min1, const vec2 max1) {
  return (x - min1) / (max1 - min1);
}

vec3 remap(const vec3 x, const vec3 min1, const vec3 max1) {
  return (x - min1) / (max1 - min1);
}

vec4 remap(const vec4 x, const vec4 min1, const vec4 max1) {
  return (x - min1) / (max1 - min1);
}

float remapClamped(const float x, const float min1, const float max1) {
  return saturate((x - min1) / (max1 - min1));
}

vec2 remapClamped(const vec2 x, const vec2 min1, const vec2 max1) {
  return saturate((x - min1) / (max1 - min1));
}

vec3 remapClamped(const vec3 x, const vec3 min1, const vec3 max1) {
  return saturate((x - min1) / (max1 - min1));
}

vec4 remapClamped(const vec4 x, const vec4 min1, const vec4 max1) {
  return saturate((x - min1) / (max1 - min1));
}
`,qw=`// Reference: https://jcgt.org/published/0003/02/01/paper.pdf

vec2 signNotZero(vec2 v) {
  return vec2(v.x >= 0.0 ? 1.0 : -1.0, v.y >= 0.0 ? 1.0 : -1.0);
}

vec2 packNormalToVec2(vec3 v) {
  vec2 p = v.xy * (1.0 / (abs(v.x) + abs(v.y) + abs(v.z)));
  return v.z <= 0.0
    ? (1.0 - abs(p.yx)) * signNotZero(p)
    : p;
}

vec3 unpackVec2ToNormal(vec2 e) {
  vec3 v = vec3(e.xy, 1.0 - abs(e.x) - abs(e.y));
  if (v.z < 0.0) {
    v.xy = (1.0 - abs(v.yx)) * signNotZero(v.xy);
  }
  return normalize(v);
}
`,$w=`float raySphereFirstIntersection(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const float radius
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  float c = dot(a, a) - radius * radius;
  float discriminant = b * b - 4.0 * c;
  return discriminant < 0.0
    ? -1.0
    : (-b - sqrt(discriminant)) * 0.5;
}

float raySphereFirstIntersection(const vec3 origin, const vec3 direction, const float radius) {
  return raySphereFirstIntersection(origin, direction, vec3(0.0), radius);
}

vec4 raySphereFirstIntersection(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const vec4 radius
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  vec4 c = dot(a, a) - radius * radius;
  vec4 discriminant = b * b - 4.0 * c;
  vec4 mask = step(discriminant, vec4(0.0));
  return mix((-b - sqrt(max(vec4(0.0), discriminant))) * 0.5, vec4(-1.0), mask);
}

vec4 raySphereFirstIntersection(const vec3 origin, const vec3 direction, const vec4 radius) {
  return raySphereFirstIntersection(origin, direction, vec3(0.0), radius);
}

float raySphereSecondIntersection(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const float radius
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  float c = dot(a, a) - radius * radius;
  float discriminant = b * b - 4.0 * c;
  return discriminant < 0.0
    ? -1.0
    : (-b + sqrt(discriminant)) * 0.5;
}

float raySphereSecondIntersection(const vec3 origin, const vec3 direction, const float radius) {
  return raySphereSecondIntersection(origin, direction, vec3(0.0), radius);
}

vec4 raySphereSecondIntersection(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const vec4 radius
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  vec4 c = dot(a, a) - radius * radius;
  vec4 discriminant = b * b - 4.0 * c;
  vec4 mask = step(discriminant, vec4(0.0));
  return mix((-b + sqrt(max(vec4(0.0), discriminant))) * 0.5, vec4(-1.0), mask);
}

vec4 raySphereSecondIntersection(const vec3 origin, const vec3 direction, const vec4 radius) {
  return raySphereSecondIntersection(origin, direction, vec3(0.0), radius);
}

void raySphereIntersections(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const float radius,
  out float intersection1,
  out float intersection2
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  float c = dot(a, a) - radius * radius;
  float discriminant = b * b - 4.0 * c;
  if (discriminant < 0.0) {
    intersection1 = -1.0;
    intersection2 = -1.0;
    return;
  } else {
    float Q = sqrt(discriminant);
    intersection1 = (-b - Q) * 0.5;
    intersection2 = (-b + Q) * 0.5;
  }
}

void raySphereIntersections(
  const vec3 origin,
  const vec3 direction,
  const float radius,
  out float intersection1,
  out float intersection2
) {
  raySphereIntersections(origin, direction, vec3(0.0), radius, intersection1, intersection2);
}

void raySphereIntersections(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const vec4 radius,
  out vec4 intersection1,
  out vec4 intersection2
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  vec4 c = dot(a, a) - radius * radius;
  vec4 discriminant = b * b - 4.0 * c;
  vec4 mask = step(discriminant, vec4(0.0));
  vec4 Q = sqrt(max(vec4(0.0), discriminant));
  intersection1 = mix((-b - Q) * 0.5, vec4(-1.0), mask);
  intersection2 = mix((-b + Q) * 0.5, vec4(-1.0), mask);
}

void raySphereIntersections(
  const vec3 origin,
  const vec3 direction,
  const vec4 radius,
  out vec4 intersection1,
  out vec4 intersection2
) {
  raySphereIntersections(origin, direction, vec3(0.0), radius, intersection1, intersection2);
}
`,jw=`vec3 screenToView(
  const vec2 uv,
  const float depth,
  const float viewZ,
  const mat4 projectionMatrix,
  const mat4 inverseProjectionMatrix
) {
  vec4 clip = vec4(vec3(uv, depth) * 2.0 - 1.0, 1.0);
  float clipW = projectionMatrix[2][3] * viewZ + projectionMatrix[3][3];
  clip *= clipW;
  return (inverseProjectionMatrix * clip).xyz;
}
`,Zw=`// A fifth-order polynomial approximation of Turbo color map.
// See: https://observablehq.com/@mbostock/turbo
// prettier-ignore
vec3 turbo(const float x) {
  float r = 0.1357 + x * (4.5974 - x * (42.3277 - x * (130.5887 - x * (150.5666 - x * 58.1375))));
  float g = 0.0914 + x * (2.1856 + x * (4.8052 - x * (14.0195 - x * (4.2109 + x * 2.7747))));
  float b = 0.1067 + x * (12.5925 - x * (60.1097 - x * (109.0745 - x * (88.5066 - x * 26.8183))));
  return vec3(r, g, b);
}
`,Kw=`// Reference: https://www.gamedev.net/tutorials/programming/graphics/contact-hardening-soft-shadows-made-fast-r4906/

vec2 vogelDisk(const int index, const int sampleCount, const float phi) {
  const float goldenAngle = 2.39996322972865332;
  float r = sqrt(float(index) + 0.5) / sqrt(float(sampleCount));
  float theta = float(index) * goldenAngle + phi;
  return r * vec2(cos(theta), sin(theta));
}
`,rp=kw,ap=Ww,Jw=Vw,sp=Xw,iu=Yw,Qw=qw,yo=$w,eT=jw,op=Zw,lp=Kw,ru=64,au=16,su=32,ou=128,lu=32,cu=8,tT=cu*lu,nT=ou,iT=su,uu=256,hu=64,so=1/1e3,rT=new P;function du(n,e,t,i){const r=t.projectOnSurface(n,rT);return r!=null?t.getOsculatingSphereCenter(r,e,i).negate():i.setScalar(0)}const Eo=`// Based on: https://github.com/ebruneton/precomputed_atmospheric_scattering/blob/master/atmosphere/functions.glsl

/**
 * Copyright (c) 2017 Eric Bruneton
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holders nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 *
 * Precomputed Atmospheric Scattering
 * Copyright (c) 2008 INRIA
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holders nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 */

Number ClampCosine(const Number mu) {
  return clamp(mu, Number(-1.0), Number(1.0));
}

Length ClampDistance(const Length d) {
  return max(d, 0.0 * m);
}

Length ClampRadius(const AtmosphereParameters atmosphere, const Length r) {
  return clamp(r, atmosphere.bottom_radius, atmosphere.top_radius);
}

Length SafeSqrt(const Area a) {
  return sqrt(max(a, 0.0 * m2));
}

Length DistanceToTopAtmosphereBoundary(const AtmosphereParameters atmosphere,
    const Length r, const Number mu) {
  assert(r <= atmosphere.top_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  Area discriminant = r * r * (mu * mu - 1.0) +
      atmosphere.top_radius * atmosphere.top_radius;
  return ClampDistance(-r * mu + SafeSqrt(discriminant));
}

Length DistanceToBottomAtmosphereBoundary(const AtmosphereParameters atmosphere,
    const Length r, const Number mu) {
  assert(r >= atmosphere.bottom_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  Area discriminant = r * r * (mu * mu - 1.0) +
      atmosphere.bottom_radius * atmosphere.bottom_radius;
  return ClampDistance(-r * mu - SafeSqrt(discriminant));
}

bool RayIntersectsGround(const AtmosphereParameters atmosphere,
    const Length r, const Number mu) {
  assert(r >= atmosphere.bottom_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  return mu < 0.0 && r * r * (mu * mu - 1.0) +
      atmosphere.bottom_radius * atmosphere.bottom_radius >= 0.0 * m2;
}

Number GetTextureCoordFromUnitRange(const Number x, const int texture_size) {
  return 0.5 / Number(texture_size) + x * (1.0 - 1.0 / Number(texture_size));
}

vec2 GetTransmittanceTextureUvFromRMu(const AtmosphereParameters atmosphere,
    const Length r, const Number mu) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  // Distance to top atmosphere boundary for a horizontal ray at ground level.
  Length H = sqrt(atmosphere.top_radius * atmosphere.top_radius -
      atmosphere.bottom_radius * atmosphere.bottom_radius);
  // Distance to the horizon.
  Length rho =
      SafeSqrt(r * r - atmosphere.bottom_radius * atmosphere.bottom_radius);
  // Distance to the top atmosphere boundary for the ray (r,mu), and its minimum
  // and maximum values over all mu - obtained for (r,1) and (r,mu_horizon).
  Length d = DistanceToTopAtmosphereBoundary(atmosphere, r, mu);
  Length d_min = atmosphere.top_radius - r;
  Length d_max = rho + H;
  Number x_mu = (d - d_min) / (d_max - d_min);
  Number x_r = rho / H;
  return vec2(GetTextureCoordFromUnitRange(x_mu, TRANSMITTANCE_TEXTURE_WIDTH),
              GetTextureCoordFromUnitRange(x_r, TRANSMITTANCE_TEXTURE_HEIGHT));
}

DimensionlessSpectrum GetTransmittanceToTopAtmosphereBoundary(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const Length r, const Number mu) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  vec2 uv = GetTransmittanceTextureUvFromRMu(atmosphere, r, mu);
  // @shotamatsuda: Added for the precomputation stage in half-float precision.
  #ifdef TRANSMITTANCE_PRECISION_LOG
  // Manually interpolate the transmittance instead of the optical depth.
  const vec2 size = vec2(TRANSMITTANCE_TEXTURE_WIDTH, TRANSMITTANCE_TEXTURE_HEIGHT);
  const vec3 texel_size = vec3(1.0 / size, 0.0);
  vec2 coord = (uv * size) - 0.5;
  vec2 i = (floor(coord) + 0.5) * texel_size.xy;
  vec2 f = fract(coord);
  vec4 t1 = exp(-texture(transmittance_texture, i));
  vec4 t2 = exp(-texture(transmittance_texture, i + texel_size.xz));
  vec4 t3 = exp(-texture(transmittance_texture, i + texel_size.zy));
  vec4 t4 = exp(-texture(transmittance_texture, i + texel_size.xy));
  return DimensionlessSpectrum(mix(mix(t1, t2, f.x), mix(t3, t4, f.x), f.y));
  #else // TRANSMITTANCE_PRECISION_LOG
  return DimensionlessSpectrum(texture(transmittance_texture, uv));
  #endif // TRANSMITTANCE_PRECISION_LOG
}

DimensionlessSpectrum GetTransmittance(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const Length r, const Number mu, const Length d,
    const bool ray_r_mu_intersects_ground) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  assert(d >= 0.0 * m);

  Length r_d = ClampRadius(atmosphere, sqrt(d * d + 2.0 * r * mu * d + r * r));
  Number mu_d = ClampCosine((r * mu + d) / r_d);

  if (ray_r_mu_intersects_ground) {
    return min(
        GetTransmittanceToTopAtmosphereBoundary(
            atmosphere, transmittance_texture, r_d, -mu_d) /
        GetTransmittanceToTopAtmosphereBoundary(
            atmosphere, transmittance_texture, r, -mu),
        DimensionlessSpectrum(1.0));
  } else {
    return min(
        GetTransmittanceToTopAtmosphereBoundary(
            atmosphere, transmittance_texture, r, mu) /
        GetTransmittanceToTopAtmosphereBoundary(
            atmosphere, transmittance_texture, r_d, mu_d),
        DimensionlessSpectrum(1.0));
  }
}

DimensionlessSpectrum GetTransmittanceToSun(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const Length r, const Number mu_s) {
  Number sin_theta_h = atmosphere.bottom_radius / r;
  Number cos_theta_h = -sqrt(max(1.0 - sin_theta_h * sin_theta_h, 0.0));
  return GetTransmittanceToTopAtmosphereBoundary(
          atmosphere, transmittance_texture, r, mu_s) *
      smoothstep(-sin_theta_h * atmosphere.sun_angular_radius / rad,
                 sin_theta_h * atmosphere.sun_angular_radius / rad,
                 mu_s - cos_theta_h);
}

InverseSolidAngle RayleighPhaseFunction(const Number nu) {
  InverseSolidAngle k = 3.0 / (16.0 * PI * sr);
  return k * (1.0 + nu * nu);
}

InverseSolidAngle MiePhaseFunction(const Number g, const Number nu) {
  InverseSolidAngle k = 3.0 / (8.0 * PI * sr) * (1.0 - g * g) / (2.0 + g * g);
  return k * (1.0 + nu * nu) / pow(1.0 + g * g - 2.0 * g * nu, 1.5);
}

vec4 GetScatteringTextureUvwzFromRMuMuSNu(const AtmosphereParameters atmosphere,
    const Length r, const Number mu, const Number mu_s, const Number nu,
    const bool ray_r_mu_intersects_ground) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  assert(mu_s >= -1.0 && mu_s <= 1.0);
  assert(nu >= -1.0 && nu <= 1.0);

  // Distance to top atmosphere boundary for a horizontal ray at ground level.
  Length H = sqrt(atmosphere.top_radius * atmosphere.top_radius -
      atmosphere.bottom_radius * atmosphere.bottom_radius);
  // Distance to the horizon.
  Length rho =
      SafeSqrt(r * r - atmosphere.bottom_radius * atmosphere.bottom_radius);
  Number u_r = GetTextureCoordFromUnitRange(rho / H, SCATTERING_TEXTURE_R_SIZE);

  // Discriminant of the quadratic equation for the intersections of the ray
  // (r,mu) with the ground (see RayIntersectsGround).
  Length r_mu = r * mu;
  Area discriminant =
      r_mu * r_mu - r * r + atmosphere.bottom_radius * atmosphere.bottom_radius;
  Number u_mu;
  if (ray_r_mu_intersects_ground) {
    // Distance to the ground for the ray (r,mu), and its minimum and maximum
    // values over all mu - obtained for (r,-1) and (r,mu_horizon).
    Length d = -r_mu - SafeSqrt(discriminant);
    Length d_min = r - atmosphere.bottom_radius;
    Length d_max = rho;
    u_mu = 0.5 - 0.5 * GetTextureCoordFromUnitRange(d_max == d_min ? 0.0 :
        (d - d_min) / (d_max - d_min), SCATTERING_TEXTURE_MU_SIZE / 2);
  } else {
    // Distance to the top atmosphere boundary for the ray (r,mu), and its
    // minimum and maximum values over all mu - obtained for (r,1) and
    // (r,mu_horizon).
    Length d = -r_mu + SafeSqrt(discriminant + H * H);
    Length d_min = atmosphere.top_radius - r;
    Length d_max = rho + H;
    u_mu = 0.5 + 0.5 * GetTextureCoordFromUnitRange(
        (d - d_min) / (d_max - d_min), SCATTERING_TEXTURE_MU_SIZE / 2);
  }

  Length d = DistanceToTopAtmosphereBoundary(
      atmosphere, atmosphere.bottom_radius, mu_s);
  Length d_min = atmosphere.top_radius - atmosphere.bottom_radius;
  Length d_max = H;
  Number a = (d - d_min) / (d_max - d_min);
  Length D = DistanceToTopAtmosphereBoundary(
      atmosphere, atmosphere.bottom_radius, atmosphere.mu_s_min);
  Number A = (D - d_min) / (d_max - d_min);
  // An ad-hoc function equal to 0 for mu_s = mu_s_min (because then d = D and
  // thus a = A), equal to 1 for mu_s = 1 (because then d = d_min and thus
  // a = 0), and with a large slope around mu_s = 0, to get more texture
  // samples near the horizon.
  Number u_mu_s = GetTextureCoordFromUnitRange(
      max(1.0 - a / A, 0.0) / (1.0 + a), SCATTERING_TEXTURE_MU_S_SIZE);

  Number u_nu = (nu + 1.0) / 2.0;
  return vec4(u_nu, u_mu_s, u_mu, u_r);
}

vec2 GetIrradianceTextureUvFromRMuS(const AtmosphereParameters atmosphere,
    const Length r, const Number mu_s) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu_s >= -1.0 && mu_s <= 1.0);
  Number x_r = (r - atmosphere.bottom_radius) /
      (atmosphere.top_radius - atmosphere.bottom_radius);
  Number x_mu_s = mu_s * 0.5 + 0.5;
  return vec2(GetTextureCoordFromUnitRange(x_mu_s, IRRADIANCE_TEXTURE_WIDTH),
              GetTextureCoordFromUnitRange(x_r, IRRADIANCE_TEXTURE_HEIGHT));
}

IrradianceSpectrum GetIrradiance(
    const AtmosphereParameters atmosphere,
    const IrradianceTexture irradiance_texture,
    const Length r, const Number mu_s) {
  vec2 uv = GetIrradianceTextureUvFromRMuS(atmosphere, r, mu_s);
  return IrradianceSpectrum(texture(irradiance_texture, uv));
}
`,wo=`// Based on: https://github.com/ebruneton/precomputed_atmospheric_scattering/blob/master/atmosphere/definitions.glsl

/**
 * Copyright (c) 2017 Eric Bruneton
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holders nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 */

#define assert(x)

#define Length float
#define Wavelength float
#define Angle float
#define SolidAngle float
#define Power float
#define LuminousPower float

#define Number float
#define InverseLength float
#define Area float
#define Volume float
#define NumberDensity float
#define Irradiance float
#define Radiance float
#define SpectralPower float
#define SpectralIrradiance float
#define SpectralRadiance float
#define SpectralRadianceDensity float
#define ScatteringCoefficient float
#define InverseSolidAngle float
#define LuminousIntensity float
#define Luminance float
#define Illuminance float

// A generic function from Wavelength to some other type.
#define AbstractSpectrum vec3
// A function from Wavelength to Number.
#define DimensionlessSpectrum vec3
// A function from Wavelength to SpectralPower.
#define PowerSpectrum vec3
// A function from Wavelength to SpectralIrradiance.
#define IrradianceSpectrum vec3
// A function from Wavelength to SpectralRadiance.
#define RadianceSpectrum vec3
// A function from Wavelength to SpectralRadianceDensity.
#define RadianceDensitySpectrum vec3
// A function from Wavelength to ScatteringCoefficient.
#define ScatteringSpectrum vec3

// A position in 3D (3 length values).
#define Position vec3
// A unit direction vector in 3D (3 unit-less values).
#define Direction vec3
// A vector of 3 luminance values.
#define Luminance3 vec3
// A vector of 3 illuminance values.
#define Illuminance3 vec3

#define TransmittanceTexture sampler2D
#define AbstractScatteringTexture sampler3D
#define ReducedScatteringTexture sampler3D
#define ScatteringTexture sampler3D
#define ScatteringDensityTexture sampler3D
#define IrradianceTexture sampler2D

const Length m = 1.0;
const Wavelength nm = 1.0;
const Angle rad = 1.0;
const SolidAngle sr = 1.0;
const Power watt = 1.0;
const LuminousPower lm = 1.0;

#if !defined(PI)
const float PI = 3.14159265358979323846;
#endif // !defined(PI)

const Length km = 1000.0 * m;
const Area m2 = m * m;
const Volume m3 = m * m * m;
const Angle pi = PI * rad;
const Angle deg = pi / 180.0;
const Irradiance watt_per_square_meter = watt / m2;
const Radiance watt_per_square_meter_per_sr = watt / (m2 * sr);
const SpectralIrradiance watt_per_square_meter_per_nm = watt / (m2 * nm);
const SpectralRadiance watt_per_square_meter_per_sr_per_nm = watt / (m2 * sr * nm);
const SpectralRadianceDensity watt_per_cubic_meter_per_sr_per_nm = watt / (m3 * sr * nm);
const LuminousIntensity cd = lm / sr;
const LuminousIntensity kcd = 1000.0 * cd;
const Luminance cd_per_square_meter = cd / m2;
const Luminance kcd_per_square_meter = kcd / m2;

struct DensityProfileLayer {
  Length width;
  Number exp_term;
  InverseLength exp_scale;
  InverseLength linear_term;
  Number constant_term;
};

struct DensityProfile {
  DensityProfileLayer layers[2];
};

// See AtmosphereParameter.ts for further details.
struct AtmosphereParameters {
  IrradianceSpectrum solar_irradiance;
  Angle sun_angular_radius;
  Length bottom_radius;
  Length top_radius;
  DensityProfile rayleigh_density;
  ScatteringSpectrum rayleigh_scattering;
  DensityProfile mie_density;
  ScatteringSpectrum mie_scattering;
  ScatteringSpectrum mie_extinction;
  Number mie_phase_function_g;
  DensityProfile absorption_density;
  ScatteringSpectrum absorption_extinction;
  DimensionlessSpectrum ground_albedo;
  Number mu_s_min;
};
`,To=`// Based on: https://github.com/ebruneton/precomputed_atmospheric_scattering/blob/master/atmosphere/functions.glsl

/**
 * Copyright (c) 2017 Eric Bruneton
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holders nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 *
 * Precomputed Atmospheric Scattering
 * Copyright (c) 2008 INRIA
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holders nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 */

#ifdef COMBINED_SCATTERING_TEXTURES
vec3 GetExtrapolatedSingleMieScattering(
    const AtmosphereParameters atmosphere, const vec4 scattering) {
  // Algebraically this can never be negative, but rounding errors can produce
  // that effect for sufficiently short view rays.
  // @shotamatsuda: Avoid division by infinitesimal values.
  // See https://github.com/takram-design-engineering/three-geospatial/issues/47
  if (scattering.r < 1e-5) {
    return vec3(0.0);
  }
  return scattering.rgb * scattering.a / scattering.r *
	    (atmosphere.rayleigh_scattering.r / atmosphere.mie_scattering.r) *
	    (atmosphere.mie_scattering / atmosphere.rayleigh_scattering);
}
#endif // COMBINED_SCATTERING_TEXTURES

IrradianceSpectrum GetCombinedScattering(
    const AtmosphereParameters atmosphere,
    const ReducedScatteringTexture scattering_texture,
    const ReducedScatteringTexture single_mie_scattering_texture,
    const Length r, const Number mu, const Number mu_s, const Number nu,
    const bool ray_r_mu_intersects_ground,
    out IrradianceSpectrum single_mie_scattering) {
  vec4 uvwz = GetScatteringTextureUvwzFromRMuMuSNu(
      atmosphere, r, mu, mu_s, nu, ray_r_mu_intersects_ground);
  Number tex_coord_x = uvwz.x * Number(SCATTERING_TEXTURE_NU_SIZE - 1);
  Number tex_x = floor(tex_coord_x);
  Number lerp = tex_coord_x - tex_x;
  vec3 uvw0 = vec3((tex_x + uvwz.y) / Number(SCATTERING_TEXTURE_NU_SIZE),
      uvwz.z, uvwz.w);
  vec3 uvw1 = vec3((tex_x + 1.0 + uvwz.y) / Number(SCATTERING_TEXTURE_NU_SIZE),
      uvwz.z, uvwz.w);
#ifdef COMBINED_SCATTERING_TEXTURES
  vec4 combined_scattering =
      texture(scattering_texture, uvw0) * (1.0 - lerp) +
      texture(scattering_texture, uvw1) * lerp;
  IrradianceSpectrum scattering = IrradianceSpectrum(combined_scattering);
  single_mie_scattering =
      GetExtrapolatedSingleMieScattering(atmosphere, combined_scattering);
#else // COMBINED_SCATTERING_TEXTURES
  IrradianceSpectrum scattering = IrradianceSpectrum(
      texture(scattering_texture, uvw0) * (1.0 - lerp) +
      texture(scattering_texture, uvw1) * lerp);
  single_mie_scattering = IrradianceSpectrum(
      texture(single_mie_scattering_texture, uvw0) * (1.0 - lerp) +
      texture(single_mie_scattering_texture, uvw1) * lerp);
#endif // COMBINED_SCATTERING_TEXTURES
  return scattering;
}

// @shotamatsuda: Added for reading higher-order scattering texture.
#ifdef HAS_HIGHER_ORDER_SCATTERING_TEXTURE
IrradianceSpectrum GetScattering(
    const AtmosphereParameters atmosphere,
    const ReducedScatteringTexture scattering_texture,
    const Length r, const Number mu, const Number mu_s, const Number nu,
    const bool ray_r_mu_intersects_ground) {
  vec4 uvwz = GetScatteringTextureUvwzFromRMuMuSNu(
      atmosphere, r, mu, mu_s, nu, ray_r_mu_intersects_ground);
  Number tex_coord_x = uvwz.x * Number(SCATTERING_TEXTURE_NU_SIZE - 1);
  Number tex_x = floor(tex_coord_x);
  Number lerp = tex_coord_x - tex_x;
  vec3 uvw0 = vec3((tex_x + uvwz.y) / Number(SCATTERING_TEXTURE_NU_SIZE),
      uvwz.z, uvwz.w);
  vec3 uvw1 = vec3((tex_x + 1.0 + uvwz.y) / Number(SCATTERING_TEXTURE_NU_SIZE),
      uvwz.z, uvwz.w);
  IrradianceSpectrum scattering = IrradianceSpectrum(
      texture(scattering_texture, uvw0) * (1.0 - lerp) +
      texture(scattering_texture, uvw1) * lerp);
  return scattering;
}
#endif // HAS_HIGHER_ORDER_SCATTERING_TEXTURE

RadianceSpectrum GetSkyRadiance(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const ReducedScatteringTexture scattering_texture,
    const ReducedScatteringTexture single_mie_scattering_texture,
    Position camera, const Direction view_ray, const Length shadow_length,
    const Direction sun_direction,
    out DimensionlessSpectrum transmittance) {
  // Compute the distance to the top atmosphere boundary along the view ray,
  // assuming the viewer is in space (or NaN if the view ray does not intersect
  // the atmosphere).
  Length r = length(camera);
  Length rmu = dot(camera, view_ray);
  // @shotamatsuda: Use SafeSqrt instead.
  // See: https://github.com/takram-design-engineering/three-geospatial/pull/26
  Length distance_to_top_atmosphere_boundary = -rmu -
      SafeSqrt(rmu * rmu - r * r +
          atmosphere.top_radius * atmosphere.top_radius);
  // If the viewer is in space and the view ray intersects the atmosphere, move
  // the viewer to the top atmosphere boundary (along the view ray):
  if (distance_to_top_atmosphere_boundary > 0.0 * m) {
    camera = camera + view_ray * distance_to_top_atmosphere_boundary;
    r = atmosphere.top_radius;
    rmu += distance_to_top_atmosphere_boundary;
  } else if (r > atmosphere.top_radius) {
    // If the view ray does not intersect the atmosphere, simply return 0.
    transmittance = DimensionlessSpectrum(1.0);
    return RadianceSpectrum(0.0 * watt_per_square_meter_per_sr_per_nm);
  }
  // Compute the r, mu, mu_s and nu parameters needed for the texture lookups.
  Number mu = rmu / r;
  Number mu_s = dot(camera, sun_direction) / r;
  Number nu = dot(view_ray, sun_direction);

  // @shotamatsuda: For rendering points below the bottom atmosphere.
  #ifdef GROUND
  bool ray_r_mu_intersects_ground = RayIntersectsGround(atmosphere, r, mu);
  #else // GROUND
  bool ray_r_mu_intersects_ground = false;
  #endif // GROUND

  transmittance = ray_r_mu_intersects_ground ? DimensionlessSpectrum(0.0) :
      GetTransmittanceToTopAtmosphereBoundary(
          atmosphere, transmittance_texture, r, mu);
  IrradianceSpectrum single_mie_scattering;
  IrradianceSpectrum scattering;
  if (shadow_length == 0.0 * m) {
    scattering = GetCombinedScattering(
        atmosphere, scattering_texture, single_mie_scattering_texture,
        r, mu, mu_s, nu, ray_r_mu_intersects_ground,
        single_mie_scattering);
  } else {
    // Case of light shafts (shadow_length is the total length noted l in our
    // paper): we omit the scattering between the camera and the point at
    // distance l, by implementing Eq. (18) of the paper (shadow_transmittance
    // is the T(x,x_s) term, scattering is the S|x_s=x+lv term).
    Length d = shadow_length;
    Length r_p =
        ClampRadius(atmosphere, sqrt(d * d + 2.0 * r * mu * d + r * r));
    Number mu_p = (r * mu + d) / r_p;
    Number mu_s_p = (r * mu_s + d * nu) / r_p;

    scattering = GetCombinedScattering(
        atmosphere, scattering_texture, single_mie_scattering_texture,
        r_p, mu_p, mu_s_p, nu, ray_r_mu_intersects_ground,
        single_mie_scattering);
    DimensionlessSpectrum shadow_transmittance =
        GetTransmittance(atmosphere, transmittance_texture,
            r, mu, shadow_length, ray_r_mu_intersects_ground);
    // @shotamatsuda: Occlude only single Rayleigh scattering by the shadow.
#ifdef HAS_HIGHER_ORDER_SCATTERING_TEXTURE
    IrradianceSpectrum higher_order_scattering = GetScattering(
        atmosphere, higher_order_scattering_texture,
        r_p, mu_p, mu_s_p, nu, ray_r_mu_intersects_ground);
    IrradianceSpectrum single_scattering = scattering - higher_order_scattering;
    scattering = single_scattering * shadow_transmittance + higher_order_scattering;
#else // HAS_HIGHER_ORDER_SCATTERING_TEXTURE
    scattering = scattering * shadow_transmittance;
#endif // HAS_HIGHER_ORDER_SCATTERING_TEXTURE
    single_mie_scattering = single_mie_scattering * shadow_transmittance;
  }
  return scattering * RayleighPhaseFunction(nu) + single_mie_scattering *
      MiePhaseFunction(atmosphere.mie_phase_function_g, nu);
}

// @shotamatsuda: Returns the point on the ray closest to the origin.
vec3 ClosestPointOnRay(const Position camera, const Position point) {
  Position ray = point - camera;
  Number t = clamp(-dot(camera, ray) / dot(ray, ray), 0.0, 1.0);
  return camera + t * ray;
}

vec2 RaySphereIntersections(
    const Position camera, const Direction direction, const Length radius) {
  float b = 2.0 * dot(direction, camera);
  float c = dot(camera, camera) - radius * radius;
  float discriminant = b * b - 4.0 * c;
  float Q = sqrt(discriminant);
  return vec2(-b - Q, -b + Q) * 0.5;
}

// @shotamatsuda: Clip the view ray at the bottom atmosphere boundary.
bool ClipAtBottomAtmosphere(
    const AtmosphereParameters atmosphere,
    const Direction view_ray, inout Position camera, inout Position point) {
  const Length eps = 0.0;
  Length bottom_radius = atmosphere.bottom_radius + eps;
  Length r_camera = length(camera);
  Length r_point = length(point);
  bool camera_below = r_camera < bottom_radius;
  bool point_below = r_point < bottom_radius;

  vec2 t = RaySphereIntersections(camera, view_ray, bottom_radius);
  Position intersection = camera + view_ray * (camera_below ? t.y : t.x);
  camera = camera_below ? intersection : camera;
  point = point_below ? intersection : point;

  return camera_below && point_below;
}

RadianceSpectrum GetSkyRadianceToPoint(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const ReducedScatteringTexture scattering_texture,
    const ReducedScatteringTexture single_mie_scattering_texture,
    Position camera, Position point, const Length shadow_length,
    const Direction sun_direction, out DimensionlessSpectrum transmittance) {
  // @shotamatsuda: Avoid artifacts when the ray does not intersect the top
  // atmosphere boundary.
  if (length(ClosestPointOnRay(camera, point)) > atmosphere.top_radius) {
    transmittance = vec3(1.0);
    return vec3(0.0);
  }

  Direction view_ray = normalize(point - camera);
  if (ClipAtBottomAtmosphere(atmosphere, view_ray, camera, point)) {
    transmittance = vec3(1.0);
    return vec3(0.0);
  }

  // Compute the distance to the top atmosphere boundary along the view ray,
  // assuming the viewer is in space (or NaN if the view ray does not intersect
  // the atmosphere).
  Length r = length(camera);
  Length rmu = dot(camera, view_ray);
  // @shotamatsuda: Use SafeSqrt instead.
  // See: https://github.com/takram-design-engineering/three-geospatial/pull/26
  Length distance_to_top_atmosphere_boundary = -rmu -
      SafeSqrt(rmu * rmu - r * r +
          atmosphere.top_radius * atmosphere.top_radius);
  // If the viewer is in space and the view ray intersects the atmosphere, move
  // the viewer to the top atmosphere boundary (along the view ray):
  if (distance_to_top_atmosphere_boundary > 0.0 * m) {
    camera = camera + view_ray * distance_to_top_atmosphere_boundary;
    r = atmosphere.top_radius;
    rmu += distance_to_top_atmosphere_boundary;
  }

  // Compute the r, mu, mu_s and nu parameters for the first texture lookup.
  Number mu = rmu / r;
  Number mu_s = dot(camera, sun_direction) / r;
  Number nu = dot(view_ray, sun_direction);
  Length d = length(point - camera);
  bool ray_r_mu_intersects_ground = RayIntersectsGround(atmosphere, r, mu);

  // @shotamatsuda: Hack to avoid rendering artifacts near the horizon, due to
  // finite atmosphere texture resolution and finite floating point precision.
  // See: https://github.com/ebruneton/precomputed_atmospheric_scattering/pull/32
  if (!ray_r_mu_intersects_ground) {
    Number mu_horizon = -SafeSqrt(1.0 -
        (atmosphere.bottom_radius * atmosphere.bottom_radius) / (r * r));
    const Number eps = 0.004;
    mu = max(mu, mu_horizon + eps);
  }

  transmittance = GetTransmittance(atmosphere, transmittance_texture,
      r, mu, d, ray_r_mu_intersects_ground);

  IrradianceSpectrum single_mie_scattering;
  IrradianceSpectrum scattering = GetCombinedScattering(
      atmosphere, scattering_texture, single_mie_scattering_texture,
      r, mu, mu_s, nu, ray_r_mu_intersects_ground,
      single_mie_scattering);

  // Compute the r, mu, mu_s and nu parameters for the second texture lookup.
  // If shadow_length is not 0 (case of light shafts), we want to ignore the
  // scattering along the last shadow_length meters of the view ray, which we
  // do by subtracting shadow_length from d (this way scattering_p is equal to
  // the S|x_s=x_0-lv term in Eq. (17) of our paper).
  d = max(d - shadow_length, 0.0 * m);
  Length r_p = ClampRadius(atmosphere, sqrt(d * d + 2.0 * r * mu * d + r * r));
  Number mu_p = (r * mu + d) / r_p;
  Number mu_s_p = (r * mu_s + d * nu) / r_p;

  IrradianceSpectrum single_mie_scattering_p;
  IrradianceSpectrum scattering_p = GetCombinedScattering(
      atmosphere, scattering_texture, single_mie_scattering_texture,
      r_p, mu_p, mu_s_p, nu, ray_r_mu_intersects_ground,
      single_mie_scattering_p);

  // Combine the lookup results to get the scattering between camera and point.
  DimensionlessSpectrum shadow_transmittance = transmittance;
  if (shadow_length > 0.0 * m) {
    // This is the T(x,x_s) term in Eq. (17) of our paper, for light shafts.
    shadow_transmittance = GetTransmittance(atmosphere, transmittance_texture,
        r, mu, d, ray_r_mu_intersects_ground);
  }
  // @shotamatsuda: Occlude only single Rayleigh scattering by the shadow.
#ifdef HAS_HIGHER_ORDER_SCATTERING_TEXTURE
  IrradianceSpectrum higher_order_scattering = GetScattering(
      atmosphere, higher_order_scattering_texture,
      r, mu, mu_s, nu, ray_r_mu_intersects_ground);
  IrradianceSpectrum single_scattering = scattering - higher_order_scattering;
  IrradianceSpectrum higher_order_scattering_p = GetScattering(
      atmosphere, higher_order_scattering_texture,
      r_p, mu_p, mu_s_p, nu, ray_r_mu_intersects_ground);
  IrradianceSpectrum single_scattering_p =
      scattering_p - higher_order_scattering_p;
  scattering =
      single_scattering - shadow_transmittance * single_scattering_p +
      higher_order_scattering - transmittance * higher_order_scattering_p;
#else // HAS_HIGHER_ORDER_SCATTERING_TEXTURE
  scattering = scattering - shadow_transmittance * scattering_p;
#endif // HAS_HIGHER_ORDER_SCATTERING_TEXTURE

  single_mie_scattering =
      single_mie_scattering - shadow_transmittance * single_mie_scattering_p;
#ifdef COMBINED_SCATTERING_TEXTURES
  single_mie_scattering = GetExtrapolatedSingleMieScattering(
      atmosphere, vec4(scattering, single_mie_scattering.r));
#endif // COMBINED_SCATTERING_TEXTURES

  // Hack to avoid rendering artifacts when the sun is below the horizon.
  single_mie_scattering = single_mie_scattering *
      smoothstep(Number(0.0), Number(0.01), mu_s);

  return scattering * RayleighPhaseFunction(nu) + single_mie_scattering *
      MiePhaseFunction(atmosphere.mie_phase_function_g, nu);
}

IrradianceSpectrum GetSunAndSkyIrradiance(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const IrradianceTexture irradiance_texture,
    const Position point, const Direction normal, const Direction sun_direction,
    out IrradianceSpectrum sky_irradiance) {
  Length r = length(point);
  Number mu_s = dot(point, sun_direction) / r;

  // Indirect irradiance (approximated if the surface is not horizontal).
  sky_irradiance = GetIrradiance(atmosphere, irradiance_texture, r, mu_s) *
      (1.0 + dot(normal, point) / r) * 0.5;

  // Direct irradiance.
  return atmosphere.solar_irradiance *
      GetTransmittanceToSun(
          atmosphere, transmittance_texture, r, mu_s) *
      max(dot(normal, sun_direction), 0.0);
}

// @shotamatsuda: Added for the clouds.
IrradianceSpectrum GetSunAndSkyScalarIrradiance(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const IrradianceTexture irradiance_texture,
    const Position point, const Direction sun_direction,
    out IrradianceSpectrum sky_irradiance) {
  Length r = length(point);
  Number mu_s = dot(point, sun_direction) / r;

  // Indirect irradiance. Integral over sphere yields 2π.
  sky_irradiance = GetIrradiance(atmosphere, irradiance_texture, r, mu_s) *
      2.0 * PI;

  // Direct irradiance. Omit the cosine term.
  return atmosphere.solar_irradiance *
      GetTransmittanceToSun(atmosphere, transmittance_texture, r, mu_s);
}

Luminance3 GetSolarLuminance() {
  return ATMOSPHERE.solar_irradiance /
      (PI * ATMOSPHERE.sun_angular_radius * ATMOSPHERE.sun_angular_radius) *
      SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
}

Luminance3 GetSkyLuminance(
    const Position camera, Direction view_ray, const Length shadow_length,
    const Direction sun_direction, out DimensionlessSpectrum transmittance) {
  return GetSkyRadiance(ATMOSPHERE, transmittance_texture,
      scattering_texture, single_mie_scattering_texture,
      camera, view_ray, shadow_length, sun_direction,
      transmittance) * SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
}

Luminance3 GetSkyLuminanceToPoint(
    const Position camera, const Position point, const Length shadow_length,
    const Direction sun_direction, out DimensionlessSpectrum transmittance) {
  return GetSkyRadianceToPoint(ATMOSPHERE, transmittance_texture,
      scattering_texture, single_mie_scattering_texture,
      camera, point, shadow_length, sun_direction, transmittance) *
      SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
}

Illuminance3 GetSunAndSkyIlluminance(
    const Position p, const Direction normal, const Direction sun_direction,
    out IrradianceSpectrum sky_irradiance) {
  IrradianceSpectrum sun_irradiance = GetSunAndSkyIrradiance(
      ATMOSPHERE, transmittance_texture, irradiance_texture, p, normal,
      sun_direction, sky_irradiance);
  sky_irradiance *= SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
  return sun_irradiance * SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
}

// @shotamatsuda: Added for the clouds.
Illuminance3 GetSunAndSkyScalarIlluminance(
    const Position p, const Direction sun_direction,
    out IrradianceSpectrum sky_irradiance) {
  IrradianceSpectrum sun_irradiance = GetSunAndSkyScalarIrradiance(
      ATMOSPHERE, transmittance_texture, irradiance_texture, p,
      sun_direction, sky_irradiance);
  sky_irradiance *= SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
  return sun_irradiance * SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
}

#define GetSolarRadiance GetSolarLuminance
#define GetSkyRadiance GetSkyLuminance
#define GetSkyRadianceToPoint GetSkyLuminanceToPoint
#define GetSunAndSkyIrradiance GetSunAndSkyIlluminance
#define GetSunAndSkyScalarIrradiance GetSunAndSkyScalarIlluminance
`,aT=new P(.2126,.7152,.0722),sT=["solarIrradiance","sunAngularRadius","bottomRadius","topRadius","rayleighDensity","rayleighScattering","mieDensity","mieScattering","mieExtinction","miePhaseFunctionG","absorptionDensity","absorptionExtinction","groundAlbedo","muSMin","skyRadianceToLuminance","sunRadianceToLuminance"];function oT(n,e){if(e!=null)for(const t of sT){const i=e[t];i!=null&&(n[t]instanceof P?n[t].copy(i):n[t]=i)}}class Ur{constructor(e,t,i,r,a){this.width=e,this.expTerm=t,this.expScale=i,this.linearTerm=r,this.constantTerm=a}toUniform(){return new U({width:this.width,exp_term:this.expTerm,exp_scale:this.expScale,linear_term:this.linearTerm,constant_term:this.constantTerm})}}const Ec=class{constructor(e){this.solarIrradiance=new P(1.474,1.8504,1.91198),this.sunAngularRadius=.004675,this.bottomRadius=636e4,this.topRadius=642e4,this.rayleighDensity=[new Ur(0,0,0,0,0),new Ur(0,1,-.125,0,0)],this.rayleighScattering=new P(.005802,.013558,.0331),this.mieDensity=[new Ur(0,0,0,0,0),new Ur(0,1,-.833333,0,0)],this.mieScattering=new P(.003996,.003996,.003996),this.mieExtinction=new P(.00444,.00444,.00444),this.miePhaseFunctionG=.8,this.absorptionDensity=[new Ur(25,0,0,1/15,-2/3),new Ur(0,0,0,-1/15,8/3)],this.absorptionExtinction=new P(65e-5,.001881,85e-6),this.groundAlbedo=new Oe().setScalar(.1),this.muSMin=Math.cos(Iw(120)),this.sunRadianceToLuminance=new P(98242.786222,69954.398112,66475.012354),this.skyRadianceToLuminance=new P(114974.916437,71305.954816,65310.548555),this.sunRadianceToRelativeLuminance=new P,this.skyRadianceToRelativeLuminance=new P,oT(this,e);const t=aT.dot(this.sunRadianceToLuminance);this.sunRadianceToRelativeLuminance.copy(this.sunRadianceToLuminance).divideScalar(t),this.skyRadianceToRelativeLuminance.copy(this.skyRadianceToLuminance).divideScalar(t)}toUniform(){return new U({solar_irradiance:this.solarIrradiance,sun_angular_radius:this.sunAngularRadius,bottom_radius:this.bottomRadius*so,top_radius:this.topRadius*so,rayleigh_density:{layers:this.rayleighDensity.map(e=>e.toUniform().value)},rayleigh_scattering:this.rayleighScattering,mie_density:{layers:this.mieDensity.map(e=>e.toUniform().value)},mie_scattering:this.mieScattering,mie_extinction:this.mieExtinction,mie_phase_function_g:this.miePhaseFunctionG,absorption_density:{layers:this.absorptionDensity.map(e=>e.toUniform().value)},absorption_extinction:this.absorptionExtinction,ground_albedo:this.groundAlbedo,mu_s_min:this.muSMin})}};Ec.DEFAULT=new Ec;let Mo=Ec;const lT=`precision highp sampler2DArray;

#include "core/depth"
#include "core/math"
#include "core/packing"
#include "core/transform"
#ifdef HAS_SHADOW
#include "core/raySphereIntersection"
#include "core/cascadedShadowMaps"
#include "core/interleavedGradientNoise"
#include "core/vogelDisk"
#endif // HAS_SHADOW

#include "bruneton/definitions"

uniform AtmosphereParameters ATMOSPHERE;
uniform vec3 SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
uniform vec3 SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;

uniform sampler2D transmittance_texture;
uniform sampler3D scattering_texture;
uniform sampler2D irradiance_texture;
uniform sampler3D single_mie_scattering_texture;
uniform sampler3D higher_order_scattering_texture;

#include "bruneton/common"
#include "bruneton/runtime"

uniform sampler2D normalBuffer;

uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 inverseProjectionMatrix;
uniform mat4 inverseViewMatrix;
uniform float bottomRadius;
uniform mat4 worldToECEFMatrix;
uniform float geometricErrorCorrectionAmount;
uniform vec3 sunDirection;
uniform float cosSunAngularRadius;
uniform vec3 moonDirection;
uniform float moonAngularRadius;
uniform float lunarRadianceScale;
uniform float albedoScale;

#include "sky"

#ifdef HAS_LIGHTING_MASK
uniform sampler2D lightingMaskBuffer;
#endif // HAS_LIGHTING_MASK

// prettier-ignore
#define LIGHTING_MASK_CHANNEL_ LIGHTING_MASK_CHANNEL

#ifdef HAS_OVERLAY
uniform sampler2D overlayBuffer;
#endif // HAS_OVERLAY

#ifdef HAS_SHADOW
uniform sampler2DArray shadowBuffer;
uniform vec2 shadowIntervals[SHADOW_CASCADE_COUNT];
uniform mat4 shadowMatrices[SHADOW_CASCADE_COUNT];
uniform mat4 inverseShadowMatrices[SHADOW_CASCADE_COUNT];
uniform float shadowFar;
uniform float shadowTopHeight;
uniform float shadowRadius;
uniform sampler3D stbnTexture;
uniform int frame;
#endif // HAS_SHADOW

#ifdef HAS_SHADOW_LENGTH
uniform sampler2D shadowLengthBuffer;
#endif // HAS_SHADOW_LENGTH

varying vec3 vCameraPosition;
varying vec3 vRayDirection;
varying vec3 vGeometryAltitudeCorrection;
varying vec3 vEllipsoidRadiiSquared;

vec3 readNormal(const vec2 uv, out bool degenerate) {
  vec3 normal = texture(normalBuffer, uv).xyz;
  degenerate = normal == vec3(0.0);
  #ifdef OCT_ENCODED_NORMAL
  return unpackVec2ToNormal(normal.xy);
  #else // OCT_ENCODED_NORMAL
  return 2.0 * normal - 1.0;
  #endif // OCT_ENCODED_NORMAL
}

void correctGeometricError(inout vec3 positionECEF, inout vec3 normalECEF) {
  // TODO: The error is pronounced at the edge of the ellipsoid due to the
  // large difference between the sphere position and the unprojected position
  // at the current fragment. Calculating the sphere position from the fragment
  // UV may resolve this.

  // Correct way is slerp, but this will be small-angle interpolation anyways.
  vec3 sphereNormal = normalize(positionECEF / vEllipsoidRadiiSquared);
  vec3 spherePosition = ATMOSPHERE.bottom_radius * sphereNormal;
  normalECEF = mix(normalECEF, sphereNormal, geometricErrorCorrectionAmount);
  positionECEF = mix(positionECEF, spherePosition, geometricErrorCorrectionAmount);
}

#if defined(SUN_LIGHT) || defined(SKY_LIGHT)

vec3 getSunSkyIrradiance(
  const vec3 positionECEF,
  const vec3 normal,
  const vec3 inputColor,
  const float sunTransmittance
) {
  // Assume lambertian BRDF. If both SUN_LIGHT and SKY_LIGHT are not defined,
  // regard the inputColor as radiance at the texel.
  vec3 diffuse = inputColor * albedoScale * RECIPROCAL_PI;
  vec3 skyIrradiance;
  vec3 sunIrradiance = GetSunAndSkyIrradiance(positionECEF, normal, sunDirection, skyIrradiance);

  #ifdef HAS_SHADOW
  sunIrradiance *= sunTransmittance;
  #endif // HAS_SHADOW

  #if defined(SUN_LIGHT) && defined(SKY_LIGHT)
  return diffuse * (sunIrradiance + skyIrradiance);
  #elif defined(SUN_LIGHT)
  return diffuse * sunIrradiance;
  #elif defined(SKY_LIGHT)
  return diffuse * skyIrradiance;
  #endif // defined(SUN_LIGHT) && defined(SKY_LIGHT)
}

#endif // defined(SUN_LIGHT) || defined(SKY_LIGHT)

#if defined(TRANSMITTANCE) || defined(INSCATTER)

void applyTransmittanceInscatter(const vec3 positionECEF, float shadowLength, inout vec3 radiance) {
  vec3 transmittance;
  vec3 inscatter = GetSkyRadianceToPoint(
    vCameraPosition,
    positionECEF,
    shadowLength,
    sunDirection,
    transmittance
  );
  #ifdef TRANSMITTANCE
  radiance = radiance * transmittance;
  #endif // TRANSMITTANCE
  #ifdef INSCATTER
  radiance = radiance + inscatter;
  #endif // INSCATTER
}

#endif // defined(TRANSMITTANCE) || defined(INSCATTER)

#ifdef HAS_SHADOW

float getSTBN() {
  ivec3 size = textureSize(stbnTexture, 0);
  vec3 scale = 1.0 / vec3(size);
  return texture(stbnTexture, vec3(gl_FragCoord.xy, float(frame % size.z)) * scale).r;
}

vec2 getShadowUv(const vec3 worldPosition, const int cascadeIndex) {
  vec4 clip = shadowMatrices[cascadeIndex] * vec4(worldPosition, 1.0);
  clip /= clip.w;
  return clip.xy * 0.5 + 0.5;
}

float getDistanceToShadowTop(const vec3 positionECEF) {
  // Distance to the top of the shadows along the sun direction, which matches
  // the ray origin of BSM.
  return raySphereSecondIntersection(
    positionECEF / METER_TO_LENGTH_UNIT, // TODO: Make units consistent
    sunDirection,
    vec3(0.0),
    bottomRadius + shadowTopHeight
  );
}

float readShadowOpticalDepth(const vec2 uv, const float distanceToTop, const int cascadeIndex) {
  // r: frontDepth, g: meanExtinction, b: maxOpticalDepth, a: maxOpticalDepthTail
  vec4 shadow = texture(shadowBuffer, vec3(uv, float(cascadeIndex)));
  // Omit adding maxOpticalDepthTail to avoid pronounced aliasing. Ground
  // shadow will be attenuated by inscatter anyways.
  return min(shadow.b, shadow.g * max(0.0, distanceToTop - shadow.r));
}

float sampleShadowOpticalDepthPCF(
  const vec3 worldPosition,
  const float distanceToTop,
  const float radius,
  const int cascadeIndex
) {
  vec2 uv = getShadowUv(worldPosition, cascadeIndex);
  if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
    return 0.0;
  }

  vec2 texelSize = vec2(1.0) / vec2(textureSize(shadowBuffer, 0).xy);
  float sum = 0.0;
  vec2 offset;
  #pragma unroll_loop_start
  for (int i = 0; i < 16; ++i) {
    #if UNROLLED_LOOP_INDEX < SHADOW_SAMPLE_COUNT
    offset = vogelDisk(
      UNROLLED_LOOP_INDEX,
      SHADOW_SAMPLE_COUNT,
      interleavedGradientNoise(gl_FragCoord.xy) * PI2
    );
    sum += readShadowOpticalDepth(uv + offset * radius * texelSize, distanceToTop, cascadeIndex);
    #endif // UNROLLED_LOOP_INDEX < SHADOW_SAMPLE_COUNT
  }
  #pragma unroll_loop_end
  return sum / float(SHADOW_SAMPLE_COUNT);
}

float sampleShadowOpticalDepth(
  const vec3 worldPosition,
  const vec3 positionECEF,
  const float radius,
  const float jitter
) {
  float distanceToTop = getDistanceToShadowTop(positionECEF);
  if (distanceToTop <= 0.0) {
    return 0.0;
  }
  int cascadeIndex = getFadedCascadeIndex(
    viewMatrix,
    worldPosition,
    shadowIntervals,
    cameraNear,
    shadowFar,
    jitter
  );
  return cascadeIndex >= 0
    ? sampleShadowOpticalDepthPCF(worldPosition, distanceToTop, radius, cascadeIndex)
    : 0.0;
}

float getShadowRadius(const vec3 worldPosition) {
  vec4 clip = shadowMatrices[0] * vec4(worldPosition, 1.0);
  clip /= clip.w;

  // Offset by 1px in each direction in shadow's clip coordinates.
  vec2 shadowSize = vec2(textureSize(shadowBuffer, 0));
  vec3 offset = vec3(2.0 / shadowSize, 0.0);
  vec4 clipX = clip + offset.xzzz;
  vec4 clipY = clip + offset.zyzz;

  // Convert back to world space.
  vec4 worldX = inverseShadowMatrices[0] * clipX;
  vec4 worldY = inverseShadowMatrices[0] * clipY;

  // Project into the main camera's clip space.
  mat4 viewProjectionMatrix = projectionMatrix * viewMatrix;
  vec4 projected = viewProjectionMatrix * vec4(worldPosition, 1.0);
  vec4 projectedX = viewProjectionMatrix * worldX;
  vec4 projectedY = viewProjectionMatrix * worldY;
  projected /= projected.w;
  projectedX /= projectedX.w;
  projectedY /= projectedY.w;

  // Take the mean of pixel sizes.
  vec2 center = (projected.xy * 0.5 + 0.5) * resolution;
  vec2 offsetX = (projectedX.xy * 0.5 + 0.5) * resolution;
  vec2 offsetY = (projectedY.xy * 0.5 + 0.5) * resolution;
  float size = max(length(offsetX - center), length(offsetY - center));

  return remapClamped(size, 10.0, 50.0, 0.0, shadowRadius);
}

#endif // HAS_SHADOW

void mainImage(const vec4 inputColor, const vec2 uv, out vec4 outputColor) {
  #if defined(HAS_LIGHTING_MASK) && defined(DEBUG_SHOW_LIGHTING_MASK)
  outputColor.rgb = vec3(texture(lightingMaskBuffer, uv).LIGHTING_MASK_CHANNEL_);
  outputColor.a = 1.0;
  return;
  #endif // defined(HAS_LIGHTING_MASK) && defined(DEBUG_SHOW_LIGHTING_MASK)

  float shadowLength = 0.0;
  #ifdef HAS_SHADOW_LENGTH
  shadowLength = texture(shadowLengthBuffer, uv).r;
  #endif // HAS_SHADOW_LENGTH

  #ifdef HAS_OVERLAY
  vec4 overlay = texture(overlayBuffer, uv);
  if (overlay.a == 1.0) {
    outputColor = overlay;
    return;
  }
  #endif // HAS_OVERLAY

  vec3 rayDirection = normalize(vRayDirection);
  vec3 dRDdx = dFdx(rayDirection);
  vec3 dRDdy = dFdy(rayDirection);
  float fragmentAngle = length(dRDdx + dRDdy) / length(rayDirection);

  float depth = readDepthValue(depthBuffer, uv);
  if (depth >= 1.0 - 1e-8) {
    #ifdef SKY
    outputColor.rgb = getSkyRadiance(
      vCameraPosition,
      rayDirection,
      shadowLength,
      sunDirection,
      moonDirection,
      moonAngularRadius,
      lunarRadianceScale,
      fragmentAngle
    );
    outputColor.a = 1.0;
    #else // SKY
    outputColor = inputColor;
    #endif // SKY

    #ifdef HAS_OVERLAY
    outputColor.rgb = outputColor.rgb * (1.0 - overlay.a) + overlay.rgb;
    #endif // HAS_OVERLAY
    return;
  }
  depth = reverseLogDepth(depth, cameraNear, cameraFar);

  // Reconstruct position and normal in world space.
  vec3 viewPosition = screenToView(
    uv,
    depth,
    getViewZ(depth),
    projectionMatrix,
    inverseProjectionMatrix
  );
  vec3 worldPosition = (inverseViewMatrix * vec4(viewPosition, 1.0)).xyz;
  vec3 positionECEF = (worldToECEFMatrix * vec4(worldPosition, 1.0)).xyz;
  positionECEF = positionECEF * METER_TO_LENGTH_UNIT + vGeometryAltitudeCorrection;

  vec3 viewNormal;
  bool degenerateNormal = false;
  #ifdef RECONSTRUCT_NORMAL
  vec3 dVPdx = dFdx(viewPosition);
  vec3 dVPdy = dFdy(viewPosition);
  viewNormal = normalize(cross(dVPdx, dVPdy));
  #elif defined(HAS_NORMALS)
  viewNormal = readNormal(uv, degenerateNormal);
  #endif // defined(HAS_NORMALS)

  #if defined(RECONSTRUCT_NORMAL) || defined(HAS_NORMALS)
  vec3 worldNormal = (inverseViewMatrix * vec4(viewNormal, 0.0)).xyz;
  vec3 normalECEF = (worldToECEFMatrix * vec4(worldNormal, 0.0)).xyz;
  #else // defined(RECONSTRUCT_NORMAL) || defined(HAS_NORMALS)
  vec3 normalECEF = normalize(positionECEF);
  #endif // defined(RECONSTRUCT_NORMAL) || defined(HAS_NORMALS)

  #ifdef CORRECT_GEOMETRIC_ERROR
  correctGeometricError(positionECEF, normalECEF);
  #endif // CORRECT_GEOMETRIC_ERROR

  #ifdef HAS_SHADOW
  float stbn = getSTBN();
  float radius = getShadowRadius(worldPosition);
  float opticalDepth = sampleShadowOpticalDepth(worldPosition, positionECEF, radius, stbn);
  float sunTransmittance = exp(-opticalDepth);
  #else // HAS_SHADOW
  float sunTransmittance = 1.0;
  #endif // HAS_SHADOW

  vec3 radiance;
  #if defined(SUN_LIGHT) || defined(SKY_LIGHT)
  // WORKAROUND: When both post-process lighting and sky options are enabled,
  // stars have degenerate normals. We use this to disable irradiance, which is
  // irrelevant for them.
  if (!degenerateNormal) {
    radiance = getSunSkyIrradiance(positionECEF, normalECEF, inputColor.rgb, sunTransmittance);
  } else {
    radiance = inputColor.rgb;
  }
  #ifdef HAS_LIGHTING_MASK
  float lightingMask = texture(lightingMaskBuffer, uv).LIGHTING_MASK_CHANNEL_;
  radiance = mix(inputColor.rgb, radiance, lightingMask);
  #endif // HAS_LIGHTING_MASK
  #else // defined(SUN_LIGHT) || defined(SKY_LIGHT)
  radiance = inputColor.rgb;
  #endif // defined(SUN_LIGHT) || defined(SKY_LIGHT)

  #if defined(TRANSMITTANCE) || defined(INSCATTER)
  applyTransmittanceInscatter(positionECEF, shadowLength, radiance);
  #endif // defined(TRANSMITTANCE) || defined(INSCATTER)

  outputColor = vec4(radiance, inputColor.a);

  #ifdef HAS_OVERLAY
  outputColor.rgb = outputColor.rgb * (1.0 - overlay.a) + overlay.rgb;
  #endif // HAS_OVERLAY
}
`,cT=`uniform mat4 inverseViewMatrix;
uniform mat4 inverseProjectionMatrix;
uniform vec3 cameraPosition;
uniform mat4 worldToECEFMatrix;
uniform vec3 altitudeCorrection;
uniform float geometricErrorCorrectionAmount;
uniform vec3 ellipsoidRadii;

varying vec3 vCameraPosition;
varying vec3 vRayDirection;
varying vec3 vGeometryAltitudeCorrection;
varying vec3 vEllipsoidRadiiSquared;

void getCameraRay(out vec3 origin, out vec3 direction) {
  bool isPerspective = inverseProjectionMatrix[2][3] != 0.0; // 4th entry in the 3rd column

  if (isPerspective) {
    // Calculate the camera ray for a perspective camera.
    vec4 viewPosition = inverseProjectionMatrix * vec4(position, 1.0);
    vec4 worldDirection = inverseViewMatrix * vec4(viewPosition.xyz, 0.0);
    origin = cameraPosition;
    direction = worldDirection.xyz;
  } else {
    // Unprojected points to calculate direction.
    vec4 nearPoint = inverseProjectionMatrix * vec4(position.xy, -1.0, 1.0);
    vec4 farPoint = inverseProjectionMatrix * vec4(position.xy, -0.9, 1.0);
    nearPoint /= nearPoint.w;
    farPoint /= farPoint.w;

    // Calculate world values.
    vec4 worldDirection = inverseViewMatrix * vec4(farPoint.xyz - nearPoint.xyz, 0.0);
    vec4 worldOrigin = inverseViewMatrix * nearPoint;

    // Outputs
    direction = worldDirection.xyz;
    origin = worldOrigin.xyz;
  }
}

void mainSupport() {
  vec3 direction, origin;
  getCameraRay(origin, direction);

  vec3 cameraPositionECEF = (worldToECEFMatrix * vec4(origin, 1.0)).xyz;
  vCameraPosition = (cameraPositionECEF + altitudeCorrection) * METER_TO_LENGTH_UNIT;
  vRayDirection = (worldToECEFMatrix * vec4(direction, 0.0)).xyz;

  vGeometryAltitudeCorrection = altitudeCorrection * METER_TO_LENGTH_UNIT;
  // Gradually turn off the altitude correction on geometries as the geometric
  // error correction takes effect, because that on the ideal sphere will be
  // over corrected.
  // See: https://github.com/takram-design-engineering/three-geospatial/pull/23#issuecomment-2542914656
  #ifdef CORRECT_GEOMETRIC_ERROR
  vGeometryAltitudeCorrection *= 1.0 - geometricErrorCorrectionAmount;
  #endif // CORRECT_GEOMETRIC_ERROR

  vec3 radii = ellipsoidRadii * METER_TO_LENGTH_UNIT;
  vEllipsoidRadiiSquared = radii * radii;
}
`,cp=`vec3 getLunarRadiance(const float moonAngularRadius) {
  // Not a physical number but the order of 10^-6 relative to the sun may fit.
  vec3 radiance =
    ATMOSPHERE.solar_irradiance *
    0.000002 /
    (PI * moonAngularRadius * moonAngularRadius) *
    SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
  return radiance;
}

float intersectSphere(const vec3 ray, const vec3 point, const float radius) {
  vec3 P = -point;
  float PoR = dot(P, ray);
  float D = dot(P, P) - radius * radius;
  return -PoR - sqrt(PoR * PoR - D);
}

float orenNayarDiffuse(const vec3 L, const vec3 V, const vec3 N) {
  float NoL = dot(N, L);
  float NoV = dot(N, V);
  float s = dot(L, V) - NoL * NoV;
  float t = mix(1.0, max(NoL, NoV), step(0.0, s));
  return max(0.0, NoL) * (0.62406015 + 0.41284404 * s / t);
}

vec3 getSkyRadiance(
  const vec3 cameraPosition,
  const vec3 rayDirection,
  const float shadowLength,
  const vec3 sunDirection,
  const vec3 moonDirection,
  const float moonAngularRadius,
  const float lunarRadianceScale,
  const float fragmentAngle
) {
  vec3 transmittance;
  vec3 radiance = GetSkyRadiance(
    cameraPosition,
    rayDirection,
    shadowLength,
    sunDirection,
    transmittance
  );

  // Rendering celestial objects without perspective doesn't make sense.
  #ifdef PERSPECTIVE_CAMERA

  #ifdef SUN
  float viewDotSun = dot(rayDirection, sunDirection);
  if (viewDotSun > cosSunAngularRadius) {
    float angle = acos(clamp(viewDotSun, -1.0, 1.0));
    float antialias = smoothstep(
      ATMOSPHERE.sun_angular_radius,
      ATMOSPHERE.sun_angular_radius - fragmentAngle,
      angle
    );
    radiance += transmittance * GetSolarRadiance() * antialias;
  }
  #endif // SUN

  #ifdef MOON
  float intersection = intersectSphere(rayDirection, moonDirection, moonAngularRadius);
  if (intersection > 0.0) {
    vec3 normal = normalize(moonDirection - rayDirection * intersection);
    float diffuse = orenNayarDiffuse(-sunDirection, rayDirection, normal);
    float viewDotMoon = dot(rayDirection, moonDirection);
    float angle = acos(clamp(viewDotMoon, -1.0, 1.0));
    float antialias = smoothstep(moonAngularRadius, moonAngularRadius - fragmentAngle, angle);
    radiance +=
      transmittance *
      getLunarRadiance(moonAngularRadius) *
      lunarRadianceScale *
      diffuse *
      antialias;
  }
  #endif // MOON

  #endif // PERSPECTIVE_CAMERA

  return radiance;
}
`;var uT=Object.defineProperty,Sn=(n,e,t,i)=>{for(var r=void 0,a=n.length-1,s;a>=0;a--)(s=n[a])&&(r=s(e,t,r)||r);return r&&uT(e,t,r),r};const hT=new P,dT=new P,fT=new qc,pT={blendFunction:st.NORMAL,octEncodedNormal:!1,reconstructNormal:!1,ellipsoid:Ya.WGS84,correctAltitude:!0,correctGeometricError:!0,sunLight:!1,skyLight:!1,transmittance:!0,inscatter:!0,albedoScale:1,sky:!1,sun:!0,moon:!0,moonAngularRadius:.0045,lunarRadianceScale:1,ground:!0};class fn extends Yc{constructor(e=new Za,t,i=Mo.DEFAULT){const{blendFunction:r,normalBuffer:a=null,octEncodedNormal:s,reconstructNormal:o,irradianceTexture:l=null,scatteringTexture:c=null,transmittanceTexture:h=null,singleMieScatteringTexture:d=null,higherOrderScatteringTexture:f=null,ellipsoid:g,correctAltitude:_,correctGeometricError:S,sunDirection:p,sunLight:m,skyLight:R,transmittance:A,inscatter:M,albedoScale:H,sky:D,sun:L,moon:O,moonDirection:w,moonAngularRadius:E,lunarRadianceScale:N,ground:G}={...pT,...t};super("AerialPerspectiveEffect",ns(Ri(lT,{core:{depth:ap,packing:Qw,math:iu,transform:eT,raySphereIntersection:yo,cascadedShadowMaps:rp,interleavedGradientNoise:sp,vogelDisk:lp},bruneton:{common:Eo,definitions:wo,runtime:To},sky:cp})),{blendFunction:r,vertexShader:cT,attributes:Mi.DEPTH,uniforms:new Map(Object.entries({normalBuffer:new U(a),projectionMatrix:new U(new Ue),viewMatrix:new U(new Ue),inverseProjectionMatrix:new U(new Ue),inverseViewMatrix:new U(new Ue),cameraPosition:new U(new P),bottomRadius:new U(i.bottomRadius),ellipsoidRadii:new U(new P),worldToECEFMatrix:new U(new Ue),altitudeCorrection:new U(new P),geometricErrorCorrectionAmount:new U(0),sunDirection:new U(p?.clone()??new P),cosSunAngularRadius:new U(i.sunAngularRadius),albedoScale:new U(H),moonDirection:new U(w?.clone()??new P),moonAngularRadius:new U(E),lunarRadianceScale:new U(N),overlayBuffer:new U(null),shadowBuffer:new U(null),shadowMapSize:new U(new Ee),shadowIntervals:new U([]),shadowMatrices:new U([]),inverseShadowMatrices:new U([]),shadowFar:new U(0),shadowTopHeight:new U(0),shadowRadius:new U(3),stbnTexture:new U(null),frame:new U(0),shadowLengthBuffer:new U(null),lightingMaskBuffer:new U(null),ATMOSPHERE:i.toUniform(),SUN_SPECTRAL_RADIANCE_TO_LUMINANCE:new U(i.sunRadianceToRelativeLuminance),SKY_SPECTRAL_RADIANCE_TO_LUMINANCE:new U(i.skyRadianceToRelativeLuminance),irradiance_texture:new U(l),scattering_texture:new U(c),transmittance_texture:new U(h),single_mie_scattering_texture:new U(null),higher_order_scattering_texture:new U(null)})),defines:new Map([["TRANSMITTANCE_TEXTURE_WIDTH",uu.toFixed(0)],["TRANSMITTANCE_TEXTURE_HEIGHT",hu.toFixed(0)],["SCATTERING_TEXTURE_R_SIZE",su.toFixed(0)],["SCATTERING_TEXTURE_MU_SIZE",ou.toFixed(0)],["SCATTERING_TEXTURE_MU_S_SIZE",lu.toFixed(0)],["SCATTERING_TEXTURE_NU_SIZE",cu.toFixed(0)],["IRRADIANCE_TEXTURE_WIDTH",ru.toFixed(0)],["IRRADIANCE_TEXTURE_HEIGHT",au.toFixed(0)],["METER_TO_LENGTH_UNIT",so.toFixed(7)]])}),this.camera=e,this.atmosphere=i,this.overlay=null,this.shadow=null,this.shadowLength=null,this.lightingMask=null,this.hasNormals=!1,this.combinedScatteringTextures=!1,this.hasHigherOrderScatteringTexture=!1,this.shadowSampleCount=8,this.octEncodedNormal=s,this.reconstructNormal=o,this.singleMieScatteringTexture=d,this.higherOrderScatteringTexture=f,this.ellipsoid=g,this.correctAltitude=_,this.correctGeometricError=S,this.sunLight=m,this.skyLight=R,this.transmittance=A,this.inscatter=M,this.sky=D,this.sun=L,this.moon=O,this.ground=G}get mainCamera(){return this.camera}set mainCamera(e){this.camera=e}copyCameraSettings(e){const{projectionMatrix:t,matrixWorldInverse:i,projectionMatrixInverse:r,matrixWorld:a}=e,s=this.uniforms;s.get("projectionMatrix").value.copy(t),s.get("viewMatrix").value.copy(i),s.get("inverseProjectionMatrix").value.copy(r),s.get("inverseViewMatrix").value.copy(a);const o=e.getWorldPosition(s.get("cameraPosition").value),l=s.get("worldToECEFMatrix").value,c=hT.copy(o).applyMatrix4(l);try{const d=fT.setFromECEF(c).height,f=dT.set(0,this.ellipsoid.maximumRadius,-Math.max(0,d)).applyMatrix4(t);s.get("geometricErrorCorrectionAmount").value=Ow(Nw(f.y,41.5,13.8,0,1))}catch{return}const h=s.get("altitudeCorrection");this.correctAltitude?du(c,this.atmosphere.bottomRadius,this.ellipsoid,h.value):h.value.setScalar(0)}updateOverlay(){let e=!1;const{uniforms:t,defines:i,overlay:r}=this,a=i.has("HAS_OVERLAY"),s=r!=null;return s!==a&&(s?i.set("HAS_OVERLAY","1"):(i.delete("HAS_OVERLAY"),t.get("overlayBuffer").value=null),e=!0),s&&(t.get("overlayBuffer").value=r.map),e}updateShadow(){let e=!1;const{uniforms:t,defines:i,shadow:r}=this,a=i.has("HAS_SHADOW"),s=r!=null;if(s!==a&&(s?i.set("HAS_SHADOW","1"):(i.delete("HAS_SHADOW"),t.get("shadowBuffer").value=null),e=!0),s){const o=i.get("SHADOW_CASCADE_COUNT"),l=`${r.cascadeCount}`;o!==l&&(i.set("SHADOW_CASCADE_COUNT",r.cascadeCount.toFixed(0)),e=!0),t.get("shadowBuffer").value=r.map,t.get("shadowMapSize").value=r.mapSize,t.get("shadowIntervals").value=r.intervals,t.get("shadowMatrices").value=r.matrices,t.get("inverseShadowMatrices").value=r.inverseMatrices,t.get("shadowFar").value=r.far,t.get("shadowTopHeight").value=r.topHeight}return e}updateShadowLength(){let e=!1;const{uniforms:t,defines:i,shadowLength:r}=this,a=i.has("HAS_SHADOW_LENGTH"),s=r!=null;return s!==a&&(s?i.set("HAS_SHADOW_LENGTH","1"):(i.delete("HAS_SHADOW_LENGTH"),t.get("shadowLengthBuffer").value=null),e=!0),s&&(t.get("shadowLengthBuffer").value=r.map),e}updateLightingMask(){let e=!1;const{uniforms:t,defines:i,lightingMask:r}=this,a=i.has("HAS_LIGHTING_MASK"),s=r!=null;if(s!==a&&(s?i.set("HAS_LIGHTING_MASK","1"):(i.delete("HAS_LIGHTING_MASK"),t.get("lightingMaskBuffer").value=null),e=!0),s){t.get("lightingMaskBuffer").value=r.map;const o=i.get("LIGHTING_MASK_CHANNEL"),l=r.channel;l!==o&&(/^[rgba]$/.test(l)?(i.set("LIGHTING_MASK_CHANNEL",l),e=!0):console.error(`Expression validation failed: ${l}`))}return e}update(e,t,i){this.copyCameraSettings(this.camera);let r=!1;r||=this.updateOverlay(),r||=this.updateShadow(),r||=this.updateShadowLength(),r||=this.updateLightingMask(),r&&this.setChanged(),++this.uniforms.get("frame").value}get normalBuffer(){return this.uniforms.get("normalBuffer").value}set normalBuffer(e){this.uniforms.get("normalBuffer").value=e,this.hasNormals=e!=null}get irradianceTexture(){return this.uniforms.get("irradiance_texture").value}set irradianceTexture(e){this.uniforms.get("irradiance_texture").value=e}get scatteringTexture(){return this.uniforms.get("scattering_texture").value}set scatteringTexture(e){this.uniforms.get("scattering_texture").value=e}get transmittanceTexture(){return this.uniforms.get("transmittance_texture").value}set transmittanceTexture(e){this.uniforms.get("transmittance_texture").value=e}get singleMieScatteringTexture(){return this.uniforms.get("single_mie_scattering_texture").value}set singleMieScatteringTexture(e){this.uniforms.get("single_mie_scattering_texture").value=e,this.combinedScatteringTextures=e==null}get higherOrderScatteringTexture(){return this.uniforms.get("higher_order_scattering_texture").value}set higherOrderScatteringTexture(e){this.uniforms.get("higher_order_scattering_texture").value=e,this.hasHigherOrderScatteringTexture=e!=null}get ellipsoid(){return this._ellipsoid}set ellipsoid(e){this._ellipsoid=e,this.uniforms.get("ellipsoidRadii").value.copy(e.radii)}get worldToECEFMatrix(){return this.uniforms.get("worldToECEFMatrix").value}get sunDirection(){return this.uniforms.get("sunDirection").value}get sunAngularRadius(){return this.uniforms.get("ATMOSPHERE").value.sun_angular_radius}set sunAngularRadius(e){this.uniforms.get("ATMOSPHERE").value.sun_angular_radius=e,this.uniforms.get("cosSunAngularRadius").value=Math.cos(e)}get albedoScale(){return this.uniforms.get("albedoScale").value}set albedoScale(e){this.uniforms.get("albedoScale").value=e}get moonDirection(){return this.uniforms.get("moonDirection").value}get moonAngularRadius(){return this.uniforms.get("moonAngularRadius").value}set moonAngularRadius(e){this.uniforms.get("moonAngularRadius").value=e}get lunarRadianceScale(){return this.uniforms.get("lunarRadianceScale").value}set lunarRadianceScale(e){this.uniforms.get("lunarRadianceScale").value=e}get stbnTexture(){return this.uniforms.get("stbnTexture").value}set stbnTexture(e){this.uniforms.get("stbnTexture").value=e}get shadowRadius(){return this.uniforms.get("shadowRadius").value}set shadowRadius(e){this.uniforms.get("shadowRadius").value=e}}Sn([dt("OCT_ENCODED_NORMAL")],fn.prototype,"octEncodedNormal");Sn([dt("RECONSTRUCT_NORMAL")],fn.prototype,"reconstructNormal");Sn([dt("HAS_NORMALS")],fn.prototype,"hasNormals");Sn([dt("COMBINED_SCATTERING_TEXTURES")],fn.prototype,"combinedScatteringTextures");Sn([dt("HAS_HIGHER_ORDER_SCATTERING_TEXTURE")],fn.prototype,"hasHigherOrderScatteringTexture");Sn([dt("CORRECT_GEOMETRIC_ERROR")],fn.prototype,"correctGeometricError");Sn([dt("SUN_LIGHT")],fn.prototype,"sunLight");Sn([dt("SKY_LIGHT")],fn.prototype,"skyLight");Sn([dt("TRANSMITTANCE")],fn.prototype,"transmittance");Sn([dt("INSCATTER")],fn.prototype,"inscatter");Sn([dt("SKY")],fn.prototype,"sky");Sn([dt("SUN")],fn.prototype,"sun");Sn([dt("MOON")],fn.prototype,"moon");Sn([dt("GROUND")],fn.prototype,"ground");Sn([mr("SHADOW_SAMPLE_COUNT",{min:1,max:16})],fn.prototype,"shadowSampleCount");var mT=Object.defineProperty,up=(n,e,t,i)=>{for(var r=void 0,a=n.length-1,s;a>=0;a--)(s=n[a])&&(r=s(e,t,r)||r);return r&&mT(e,t,r),r};const gT=new P;function vT(n,e){let t="",i="";for(let r=1;r<e;++r)t+=`layout(location = ${r}) out float renderTarget${r};
`,i+=`renderTarget${r} = 0.0;
`;return n.replace("#include <mrt_layout>",t).replace("#include <mrt_output>",i)}const fu={ellipsoid:Ya.WGS84,correctAltitude:!0,renderTargetCount:1};class is extends mo{constructor(e,t=Mo.DEFAULT){const{irradianceTexture:i=null,scatteringTexture:r=null,transmittanceTexture:a=null,singleMieScatteringTexture:s=null,higherOrderScatteringTexture:o=null,ellipsoid:l,correctAltitude:c,sunDirection:h,sunAngularRadius:d,renderTargetCount:f,...g}={...fu,...e};super({toneMapped:!1,depthWrite:!1,depthTest:!1,...g,uniforms:{cameraPosition:new U(new P),worldToECEFMatrix:new U(new Ue),altitudeCorrection:new U(new P),sunDirection:new U(h?.clone()??new P),cosSunAngularRadius:new U(t.sunAngularRadius),ATMOSPHERE:t.toUniform(),SUN_SPECTRAL_RADIANCE_TO_LUMINANCE:new U(t.sunRadianceToRelativeLuminance),SKY_SPECTRAL_RADIANCE_TO_LUMINANCE:new U(t.skyRadianceToRelativeLuminance),irradiance_texture:new U(i),scattering_texture:new U(r),transmittance_texture:new U(a),single_mie_scattering_texture:new U(null),higher_order_scattering_texture:new U(null),...g.uniforms},defines:{PI:`${Math.PI}`,TRANSMITTANCE_TEXTURE_WIDTH:uu.toFixed(0),TRANSMITTANCE_TEXTURE_HEIGHT:hu.toFixed(0),SCATTERING_TEXTURE_R_SIZE:su.toFixed(0),SCATTERING_TEXTURE_MU_SIZE:ou.toFixed(0),SCATTERING_TEXTURE_MU_S_SIZE:lu.toFixed(0),SCATTERING_TEXTURE_NU_SIZE:cu.toFixed(0),IRRADIANCE_TEXTURE_WIDTH:ru.toFixed(0),IRRADIANCE_TEXTURE_HEIGHT:au.toFixed(0),METER_TO_LENGTH_UNIT:so.toFixed(7),...g.defines}}),this.atmosphere=t,this.combinedScatteringTextures=!1,this.hasHigherOrderScatteringTexture=!1,this.singleMieScatteringTexture=s,this.higherOrderScatteringTexture=o,this.ellipsoid=l,this.correctAltitude=c,d!=null&&(this.sunAngularRadius=d),this.renderTargetCount=f}copyCameraSettings(e){const t=this.uniforms,i=e.getWorldPosition(t.cameraPosition.value),r=gT.copy(i).applyMatrix4(t.worldToECEFMatrix.value),a=t.altitudeCorrection.value;this.correctAltitude?du(r,this.atmosphere.bottomRadius,this.ellipsoid,a):a.setScalar(0)}onBeforeCompile(e,t){e.fragmentShader=vT(e.fragmentShader,this.renderTargetCount)}onBeforeRender(e,t,i,r,a,s){this.copyCameraSettings(i)}get irradianceTexture(){return this.uniforms.irradiance_texture.value}set irradianceTexture(e){this.uniforms.irradiance_texture.value=e}get scatteringTexture(){return this.uniforms.scattering_texture.value}set scatteringTexture(e){this.uniforms.scattering_texture.value=e}get transmittanceTexture(){return this.uniforms.transmittance_texture.value}set transmittanceTexture(e){this.uniforms.transmittance_texture.value=e}get singleMieScatteringTexture(){return this.uniforms.single_mie_scattering_texture.value}set singleMieScatteringTexture(e){this.uniforms.single_mie_scattering_texture.value=e,this.combinedScatteringTextures=e==null}get higherOrderScatteringTexture(){return this.uniforms.higher_order_scattering_texture.value}set higherOrderScatteringTexture(e){this.uniforms.higher_order_scattering_texture.value=e,this.hasHigherOrderScatteringTexture=e!=null}get worldToECEFMatrix(){return this.uniforms.worldToECEFMatrix.value}get sunDirection(){return this.uniforms.sunDirection.value}get sunAngularRadius(){return this.uniforms.ATMOSPHERE.value.sun_angular_radius}set sunAngularRadius(e){this.uniforms.ATMOSPHERE.value.sun_angular_radius=e,this.uniforms.cosSunAngularRadius.value=Math.cos(e)}get renderTargetCount(){return this._renderTargetCount}set renderTargetCount(e){e!==this.renderTargetCount&&(this._renderTargetCount=e,this.needsUpdate=!0)}}up([dt("COMBINED_SCATTERING_TEXTURES")],is.prototype,"combinedScatteringTextures");up([dt("HAS_HIGHER_ORDER_SCATTERING_TEXTURE")],is.prototype,"hasHigherOrderScatteringTexture");var ei;(function(n){n.Sun="Sun",n.Moon="Moon",n.Mercury="Mercury",n.Venus="Venus",n.Earth="Earth",n.Mars="Mars",n.Jupiter="Jupiter",n.Saturn="Saturn",n.Uranus="Uranus",n.Neptune="Neptune",n.Pluto="Pluto",n.SSB="SSB",n.EMB="EMB",n.Star1="Star1",n.Star2="Star2",n.Star3="Star3",n.Star4="Star4",n.Star5="Star5",n.Star6="Star6",n.Star7="Star7",n.Star8="Star8"})(ei||(ei={}));ei.Star1,ei.Star2,ei.Star3,ei.Star4,ei.Star5,ei.Star6,ei.Star7,ei.Star8;var gd;(function(n){n[n.From2000=0]="From2000",n[n.Into2000=1]="Into2000"})(gd||(gd={}));var vd;(function(n){n[n.Pericenter=0]="Pericenter",n[n.Apocenter=1]="Apocenter"})(vd||(vd={}));var _d;(function(n){n.Penumbral="penumbral",n.Partial="partial",n.Annular="annular",n.Total="total"})(_d||(_d={}));var Sd;(function(n){n[n.Invalid=0]="Invalid",n[n.Ascending=1]="Ascending",n[n.Descending=-1]="Descending"})(Sd||(Sd={}));function _T(n){var e=[];if(n.length===0)return"";if(typeof n[0]!="string")throw new TypeError("Url must be a string. Received "+n[0]);if(n[0].match(/^[^/:]+:\/*$/)&&n.length>1){var t=n.shift();n[0]=t+n[0]}n[0].match(/^file:\/\/\//)?n[0]=n[0].replace(/^([^/:]+):\/*/,"$1:///"):n[0]=n[0].replace(/^([^/:]+):\/*/,"$1://");for(var i=0;i<n.length;i++){var r=n[i];if(typeof r!="string")throw new TypeError("Url must be a string. Received "+r);r!==""&&(i>0&&(r=r.replace(/^[\/]+/,"")),i<n.length-1?r=r.replace(/[\/]+$/,""):r=r.replace(/[\/]+$/,"/"),e.push(r))}var a=e.join("/");a=a.replace(/\/(\?|&|#[^!])/g,"$1");var s=a.split("?");return a=s.shift()+(s.length>0?"?":"")+s.join("&"),a}function ST(){var n;return typeof arguments[0]=="object"?n=arguments[0]:n=[].slice.call(arguments),_T(n)}const xd={width:uu,height:hu},Fr={width:tT,height:nT,depth:iT},yd={width:ru,height:au};class xT extends Hn{constructor({format:e="exr",type:t=Bt,combinedScattering:i=!0,higherOrderScattering:r=!0}={},a){super(a),this.format=e,this.type=t,this.combinedScattering=i,this.higherOrderScattering=r}setType(e){return this.type=NE(e)?rn:Bt,this}load(e,t,i,r){const a={},s=({key:o,loader:l,path:c})=>(l.setRequestHeader(this.requestHeader),l.setPath(this.path),l.setWithCredentials(this.withCredentials),l.load(ST(e,c),h=>{h.type=this.type,this.type===rn&&(h.image,h.image.data!=null&&(h.image.data=new Float32Array(new Ci(h.image.data?.buffer)))),h.minFilter=Ze,h.magFilter=Ze,a[`${o}Texture`]=h,a.irradianceTexture!=null&&a.scatteringTexture!=null&&a.transmittanceTexture!=null&&(this.combinedScattering||a.singleMieScatteringTexture!=null)&&(!this.higherOrderScattering||a.higherOrderScatteringTexture!=null)&&t?.(a)},i,r));return this.format==="exr"?{transmittanceTexture:s({key:"transmittance",loader:new md(xd,this.manager),path:"transmittance.exr"}),scatteringTexture:s({key:"scattering",loader:new vl(Fr,this.manager),path:"scattering.exr"}),irradianceTexture:s({key:"irradiance",loader:new md(yd,this.manager),path:"irradiance.exr"}),singleMieScatteringTexture:this.combinedScattering?void 0:s({key:"singleMieScattering",loader:new vl(Fr,this.manager),path:"single_mie_scattering.exr"}),higherOrderScatteringTexture:this.higherOrderScattering?s({key:"higherOrderScattering",loader:new vl(Fr,this.manager),path:"higher_order_scattering.exr"}):void 0}:{transmittanceTexture:s({key:"transmittance",loader:new Gr(fr,Ea,xd,this.manager),path:"transmittance.bin"}),scatteringTexture:s({key:"scattering",loader:new Gr(Ti,Ea,Fr,this.manager),path:"scattering.bin"}),irradianceTexture:s({key:"irradiance",loader:new Gr(fr,Ea,yd,this.manager),path:"irradiance.bin"}),singleMieScatteringTexture:this.combinedScattering?void 0:s({key:"singleMieScattering",loader:new Gr(Ti,Ea,Fr,this.manager),path:"single_mie_scattering.bin"}),higherOrderScatteringTexture:this.higherOrderScattering?s({key:"higherOrderScattering",loader:new Gr(Ti,Ea,Fr,this.manager),path:"higher_order_scattering.bin"}):void 0}}}const yT=`precision highp float;
precision highp sampler3D;

#define RECIPROCAL_PI 0.3183098861837907

#include "core/raySphereIntersection"

#include "bruneton/definitions"

uniform AtmosphereParameters ATMOSPHERE;
uniform vec3 SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
uniform vec3 SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;

uniform sampler2D transmittance_texture;
uniform sampler3D scattering_texture;
uniform sampler2D irradiance_texture;
uniform sampler3D single_mie_scattering_texture;
uniform sampler3D higher_order_scattering_texture;

#include "bruneton/common"
#include "bruneton/runtime"

uniform vec3 sunDirection;
uniform float cosSunAngularRadius;
uniform vec3 moonDirection;
uniform float moonAngularRadius;
uniform float lunarRadianceScale;
uniform vec3 groundAlbedo;

#include "sky"

#ifdef HAS_SHADOW_LENGTH
uniform sampler2D shadowLengthBuffer;
#endif // HAS_SHADOW_LENGTH

in vec2 vUv;
in vec3 vCameraPosition;
in vec3 vRayDirection;

layout(location = 0) out vec4 outputColor;

#include <mrt_layout>

void main() {
  float shadowLength = 0.0;
  #ifdef HAS_SHADOW_LENGTH
  shadowLength = texture(shadowLengthBuffer, vUv).r;
  #endif // HAS_SHADOW_LENGTH

  vec3 cameraPosition = vCameraPosition;
  vec3 rayDirection = normalize(vRayDirection);
  vec3 dRDdx = dFdx(rayDirection);
  vec3 dRDdy = dFdy(rayDirection);
  float fragmentAngle = length(dRDdx + dRDdy) / length(rayDirection);

  #ifdef GROUND_ALBEDO

  float r = length(cameraPosition);
  float mu = dot(cameraPosition, rayDirection) / r;
  bool intersectsGround = RayIntersectsGround(ATMOSPHERE, r, mu);
  if (intersectsGround) {
    float distanceToGround = raySphereFirstIntersection(
      cameraPosition,
      rayDirection,
      ATMOSPHERE.bottom_radius
    );
    vec3 groundPosition = rayDirection * distanceToGround + cameraPosition;
    vec3 surfaceNormal = normalize(groundPosition);
    vec3 skyIrradiance;
    vec3 sunIrradiance = GetSunAndSkyIrradiance(
      cameraPosition,
      surfaceNormal,
      sunDirection,
      skyIrradiance
    );
    vec3 transmittance;
    vec3 inscatter = GetSkyRadianceToPoint(
      cameraPosition,
      ATMOSPHERE.bottom_radius * surfaceNormal,
      shadowLength,
      sunDirection,
      transmittance
    );
    vec3 radiance = groundAlbedo * RECIPROCAL_PI * (sunIrradiance + skyIrradiance);
    outputColor.rgb = radiance * transmittance + inscatter;
  } else {
    outputColor.rgb = getSkyRadiance(
      cameraPosition,
      rayDirection,
      shadowLength,
      sunDirection,
      moonDirection,
      moonAngularRadius,
      lunarRadianceScale,
      fragmentAngle
    );
  }

  #else // GROUND_ALBEDO

  outputColor.rgb = getSkyRadiance(
    cameraPosition,
    rayDirection,
    shadowLength,
    sunDirection,
    moonDirection,
    moonAngularRadius,
    lunarRadianceScale,
    fragmentAngle
  );

  #endif // GROUND_ALBEDO

  outputColor.a = 1.0;

  #include <mrt_output>
}
`,ET=`precision highp float;
precision highp sampler3D;

uniform mat4 inverseProjectionMatrix;
uniform mat4 inverseViewMatrix;
uniform vec3 cameraPosition;
uniform mat4 worldToECEFMatrix;
uniform vec3 altitudeCorrection;

layout(location = 0) in vec3 position;

out vec2 vUv;
out vec3 vCameraPosition;
out vec3 vRayDirection;

void getCameraRay(out vec3 origin, out vec3 direction) {
  bool isPerspective = inverseProjectionMatrix[2][3] != 0.0; // 4th entry in the 3rd column

  if (isPerspective) {
    // Calculate the camera ray for a perspective camera.
    vec4 viewPosition = inverseProjectionMatrix * vec4(position, 1.0);
    vec4 worldDirection = inverseViewMatrix * vec4(viewPosition.xyz, 0.0);
    origin = cameraPosition;
    direction = worldDirection.xyz;
  } else {
    // Unprojected points to calculate direction.
    vec4 nearPoint = inverseProjectionMatrix * vec4(position.xy, -1.0, 1.0);
    vec4 farPoint = inverseProjectionMatrix * vec4(position.xy, -0.9, 1.0);
    nearPoint /= nearPoint.w;
    farPoint /= farPoint.w;

    // Calculate world values
    vec4 worldDirection = inverseViewMatrix * vec4(farPoint.xyz - nearPoint.xyz, 0.0);
    vec4 worldOrigin = inverseViewMatrix * nearPoint;

    // Outputs
    direction = worldDirection.xyz;
    origin = worldOrigin.xyz;
  }
}

void main() {
  vUv = position.xy * 0.5 + 0.5;

  vec3 direction, origin;
  getCameraRay(origin, direction);

  vec3 cameraPositionECEF = (worldToECEFMatrix * vec4(origin, 1.0)).xyz;
  vCameraPosition = (cameraPositionECEF + altitudeCorrection) * METER_TO_LENGTH_UNIT;
  vRayDirection = (worldToECEFMatrix * vec4(direction, 0.0)).xyz;

  gl_Position = vec4(position.xy, 1.0, 1.0);
}
`;var wT=Object.defineProperty,pu=(n,e,t,i)=>{for(var r=void 0,a=n.length-1,s;a>=0;a--)(s=n[a])&&(r=s(e,t,r)||r);return r&&wT(e,t,r),r};const TT={...fu,sun:!0,moon:!0,moonAngularRadius:.0045,lunarRadianceScale:1,ground:!0,groundAlbedo:new Oe(0)};class bo extends is{constructor(e){const{sun:t,moon:i,moonDirection:r,moonAngularRadius:a,lunarRadianceScale:s,ground:o,groundAlbedo:l,...c}={...TT,...e};super({name:"SkyMaterial",glslVersion:Vi,vertexShader:ET,fragmentShader:Ri(yT,{core:{raySphereIntersection:yo},bruneton:{common:Eo,definitions:wo,runtime:To},sky:cp}),...c,uniforms:{inverseProjectionMatrix:new U(new Ue),inverseViewMatrix:new U(new Ue),moonDirection:new U(r?.clone()??new P),moonAngularRadius:new U(a),lunarRadianceScale:new U(s),groundAlbedo:new U(l.clone()),shadowLengthBuffer:new U(null),...c.uniforms},defines:{PERSPECTIVE_CAMERA:"1"},depthWrite:!1,depthTest:!0}),this.shadowLength=null,this.sun=t,this.moon=i,this.ground=o}onBeforeRender(e,t,i,r,a,s){super.onBeforeRender(e,t,i,r,a,s);const{uniforms:o,defines:l}=this;o.inverseProjectionMatrix.value.copy(i.projectionMatrixInverse),o.inverseViewMatrix.value.copy(i.matrixWorld);const c=l.PERSPECTIVE_CAMERA!=null,h=i.isPerspectiveCamera===!0;h!==c&&(h?l.PERSPECTIVE_CAMERA="1":delete l.PERSPECTIVE_CAMERA,this.needsUpdate=!0);const d=this.groundAlbedo,f=l.GROUND_ALBEDO!=null,g=d.r!==0||d.g!==0||d.b!==0;g!==f&&(g?this.defines.GROUND_ALBEDO="1":delete this.defines.GROUND_ALBEDO,this.needsUpdate=!0);const _=this.shadowLength,S=l.HAS_SHADOW_LENGTH!=null,p=_!=null;p!==S&&(p?l.HAS_SHADOW_LENGTH="1":(delete l.HAS_SHADOW_LENGTH,o.shadowLengthBuffer.value=null),this.needsUpdate=!0),p&&(o.shadowLengthBuffer.value=_.map)}get moonDirection(){return this.uniforms.moonDirection.value}get moonAngularRadius(){return this.uniforms.moonAngularRadius.value}set moonAngularRadius(e){this.uniforms.moonAngularRadius.value=e}get lunarRadianceScale(){return this.uniforms.lunarRadianceScale.value}set lunarRadianceScale(e){this.uniforms.lunarRadianceScale.value=e}get groundAlbedo(){return this.uniforms.groundAlbedo.value}}pu([dt("SUN")],bo.prototype,"sun");pu([dt("MOON")],bo.prototype,"moon");pu([dt("GROUND")],bo.prototype,"ground");const MT=`precision highp float;
precision highp sampler3D;

#include "bruneton/definitions"

uniform AtmosphereParameters ATMOSPHERE;
uniform vec3 SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
uniform vec3 SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;

uniform sampler2D transmittance_texture;
uniform sampler3D scattering_texture;
uniform sampler2D irradiance_texture;
uniform sampler3D single_mie_scattering_texture;
uniform sampler3D higher_order_scattering_texture;

#include "bruneton/common"
#include "bruneton/runtime"

uniform vec3 sunDirection;

in vec3 vCameraPosition;
in vec3 vRayDirection;

layout(location = 0) out vec4 outputColor;

#include <mrt_layout>

in vec3 vColor;

void main() {
  #if !defined(PERSPECTIVE_CAMERA)
  outputColor = vec4(0.0);
  discard; // Rendering celestial objects without perspective doesn't make sense.
  #endif // !defined(PERSPECTIVE_CAMERA)

  #ifdef BACKGROUND
  vec3 rayDirection = normalize(vRayDirection);
  float r = length(vCameraPosition);
  float mu = dot(vCameraPosition, rayDirection) / r;

  if (RayIntersectsGround(ATMOSPHERE, r, mu)) {
    discard;
  }

  vec3 transmittance;
  vec3 radiance = GetSkyRadiance(
    vCameraPosition,
    normalize(vRayDirection),
    0.0, // Shadow length
    sunDirection,
    transmittance
  );
  radiance += transmittance * vColor;
  outputColor = vec4(radiance, 1.0);
  #else // BACKGROUND
  outputColor = vec4(vColor, 1.0);
  #endif // BACKGROUND

  #include <mrt_output>
}
`,bT=`precision highp float;
precision highp sampler3D;

#define saturate(x) clamp(x, 0.0, 1.0)

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 viewMatrix;
uniform mat4 matrixWorld;
uniform vec3 cameraPosition;
uniform float cameraFar;
uniform mat4 worldToECEFMatrix;
uniform vec3 altitudeCorrection;
uniform float pointSize;
uniform vec2 magnitudeRange;
uniform float intensity;

layout(location = 0) in vec3 position;
layout(location = 1) in float magnitude;
layout(location = 2) in vec3 color;

out vec3 vCameraPosition;
out vec3 vRayDirection;
out vec3 vEllipsoidCenter;
out vec3 vColor;

void main() {
  // Magnitude is stored between 0 to 1 within the given range.
  float m = mix(magnitudeRange.x, magnitudeRange.y, magnitude);
  vec3 v = pow(vec3(10.0), -vec3(magnitudeRange, m) / 2.5);
  vColor = vec3(intensity * color);
  vColor *= saturate((v.z - v.y) / (v.x - v.y));

  #ifdef BACKGROUND
  vec3 worldDirection = normalize(matrixWorld * vec4(position, 1.0)).xyz;
  vec3 cameraPositionECEF = (worldToECEFMatrix * vec4(cameraPosition, 1.0)).xyz;
  vCameraPosition = (cameraPositionECEF + altitudeCorrection) * METER_TO_LENGTH_UNIT;
  vRayDirection = (worldToECEFMatrix * vec4(worldDirection, 0.0)).xyz;
  gl_Position =
    projectionMatrix * viewMatrix * vec4(cameraPosition + worldDirection * cameraFar, 1.0);
  #else // BACKGROUND
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  #endif // BACKGROUND

  gl_PointSize = pointSize;
}
`;var AT=Object.defineProperty,hp=(n,e,t,i)=>{for(var r=void 0,a=n.length-1,s;a>=0;a--)(s=n[a])&&(r=s(e,t,r)||r);return r&&AT(e,t,r),r};const RT={...fu,pointSize:1,intensity:1,background:!0,ground:!0};let dp=class extends is{constructor(e){const{pointSize:t,intensity:i,background:r,ground:a,...s}={...RT,...e};super({name:"StarsMaterial",glslVersion:Vi,vertexShader:bT,fragmentShader:Ri(MT,{bruneton:{common:Eo,definitions:wo,runtime:To}}),...s,uniforms:{projectionMatrix:new U(new Ue),modelViewMatrix:new U(new Ue),viewMatrix:new U(new Ue),matrixWorld:new U(new Ue),cameraFar:new U(0),pointSize:new U(0),magnitudeRange:new U(new Ee(-2,8)),intensity:new U(i),...s.uniforms},defines:{PERSPECTIVE_CAMERA:"1"},depthWrite:!0,depthTest:!0}),this.pointSize=t,this.background=r,this.ground=a}onBeforeRender(e,t,i,r,a,s){super.onBeforeRender(e,t,i,r,a,s);const o=this.uniforms;o.projectionMatrix.value.copy(i.projectionMatrix),o.modelViewMatrix.value.copy(i.modelViewMatrix),o.viewMatrix.value.copy(i.matrixWorldInverse),o.matrixWorld.value.copy(a.matrixWorld),o.cameraFar.value=i.far,o.pointSize.value=this.pointSize*e.getPixelRatio();const l=i.isPerspectiveCamera===!0;this.defines.PERSPECTIVE_CAMERA!=null!==l&&(l?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}get magnitudeRange(){return this.uniforms.magnitudeRange.value}get intensity(){return this.uniforms.intensity.value}set intensity(e){this.uniforms.intensity.value=e}};hp([dt("BACKGROUND")],dp.prototype,"background");hp([dt("GROUND")],dp.prototype,"ground");const CT="./",fp=new URL(CT,window.location.href),DT=new URL("atmosphere/",fp).href,wa=new URL("clouds/",fp).href;let Bs=null;function PT({onProgress:n}={}){if(Bs)return Bs;const e=new hf;e.onProgress=(i,r,a)=>{n?.({url:i,loaded:r,total:a,label:`${r}/${a}`})};const t=new xT({format:"binary",combinedScattering:!1,higherOrderScattering:!0},e);return Bs=Promise.all([LT(t),IT(e)]).then(([i,r])=>({atmosphere:i,clouds:r})),Bs}function LT(n){return new Promise((e,t)=>{n.load(DT,e,void 0,t)})}async function IT(n){const e=new ex(n),t=Ed(128,n),i=Ed(32,n),r=new gE(n),[a,s,o,l,c]=await Promise.all([Ta(e,`${wa}local_weather.png`,wd),Ta(t,`${wa}shape.bin`),Ta(i,`${wa}shape_detail.bin`),Ta(e,`${wa}turbulence.png`,wd),Ta(r,`${wa}stbn.bin`)]);return{localWeatherTexture:a,shapeTexture:s,shapeDetailTexture:o,turbulenceTexture:l,stbnTexture:c}}function Ed(n,e){return new Gr(Ti,Hw,{width:n,height:n,depth:n,format:ra,colorSpace:nn,wrapS:Un,wrapT:Un,wrapR:Un,minFilter:Ze,magFilter:Ze},e)}function Ta(n,e,t){return new Promise((i,r)=>{n.load(e,a=>{t?.(a),i(a)},void 0,r)})}function wd(n){n.colorSpace=nn,n.wrapS=Un,n.wrapT=Un,n.minFilter=Ze,n.magFilter=Ze,n.needsUpdate=!0}const Td=To,Md=Eo,bd=wo;class Ao{constructor(e=0,t=0,i=0,r=0){this.expTerm=e,this.exponent=t,this.linearTerm=i,this.constantTerm=r}set(e=0,t=0,i=0,r=0){return this.expTerm=e,this.exponent=t,this.linearTerm=i,this.constantTerm=r,this}clone(){return new Ao(this.expTerm,this.exponent,this.linearTerm,this.constantTerm)}copy(e){return this.expTerm=e.expTerm,this.exponent=e.exponent,this.linearTerm=e.linearTerm,this.constantTerm=e.constantTerm,this}}const NT=["channel","altitude","height","densityScale","shapeAmount","shapeDetailAmount","weatherExponent","shapeAlteringBias","coverageFilterWidth","shadow","densityProfile"];function OT(n,e){if(e!=null)for(const t of NT){const i=e[t];i!=null&&(n[t]instanceof Ao?n[t].copy(i):n[t]=i)}}const wc=class pp{constructor(e){this.channel="r",this.altitude=0,this.height=0,this.densityScale=.2,this.shapeAmount=1,this.shapeDetailAmount=1,this.weatherExponent=1,this.shapeAlteringBias=.35,this.coverageFilterWidth=.6,this.densityProfile=new Ao(0,0,.75,.25),this.shadow=!1,this.set(e)}set(e){return OT(this,e),this}clone(){return new pp(this)}copy(e){return this.channel=e.channel,this.altitude=e.altitude,this.height=e.height,this.densityScale=e.densityScale,this.shapeAmount=e.shapeAmount,this.shapeDetailAmount=e.shapeDetailAmount,this.weatherExponent=e.weatherExponent,this.shapeAlteringBias=e.shapeAlteringBias,this.coverageFilterWidth=e.coverageFilterWidth,this.densityProfile.copy(e.densityProfile),this.shadow=e.shadow,this}};wc.DEFAULT=new wc;let Gi=wc;const Br=Array.from({length:8},()=>({value:0,flag:0})),Ma=Array.from({length:3},()=>({min:0,max:0}));function UT(n,e){return n.value!==e.value?n.value-e.value:n.flag-e.flag}const Tc=class mp extends Array{constructor(e){super(new Gi(e?.[0]),new Gi(e?.[1]),new Gi(e?.[2]),new Gi(e?.[3]))}set(e){return this[0].set(e?.[0]),this[1].set(e?.[1]),this[2].set(e?.[2]),this[3].set(e?.[3]),this}reset(){return this[0].copy(Gi.DEFAULT),this[1].copy(Gi.DEFAULT),this[2].copy(Gi.DEFAULT),this[3].copy(Gi.DEFAULT),this}clone(){return new mp(this)}copy(e){return this[0].copy(e[0]),this[1].copy(e[1]),this[2].copy(e[2]),this[3].copy(e[3]),this}get localWeatherChannels(){return this[0].channel+this[1].channel+this[2].channel+this[3].channel}packValues(e,t){return t.set(this[0][e],this[1][e],this[2][e],this[3][e])}packSums(e,t,i){return i.set(this[0][e]+this[0][t],this[1][e]+this[1][t],this[2][e]+this[2][t],this[3][e]+this[3][t])}packDensityProfiles(e,t){return t.set(this[0].densityProfile[e],this[1].densityProfile[e],this[2].densityProfile[e],this[3].densityProfile[e])}packIntervalHeights(e,t){for(let s=0;s<4;++s){const o=this[s];let l=Br[s];l.value=o.altitude,l.flag=0,l=Br[s+4],l.value=o.altitude+o.height,l.flag=1}Br.sort(UT);let i=0,r=0;for(let s=0;s<Br.length;++s){const{value:o,flag:l}=Br[s];if(r===0&&s>0){const c=Ma[i++];c.min=Br[s-1].value,c.max=o}r+=l===0?1:-1}for(;i<3;++i){const s=Ma[i];s.min=0,s.max=0}let a=Ma[0];e.x=a.min,t.x=a.max,a=Ma[1],e.y=a.min,t.y=a.max,a=Ma[2],e.z=a.min,t.z=a.max}};Tc.DEFAULT=new Tc([{channel:"r",altitude:750,height:650,densityScale:.2,shapeAmount:1,shapeDetailAmount:1,weatherExponent:1,shapeAlteringBias:.35,coverageFilterWidth:.6,shadow:!0},{channel:"g",altitude:1e3,height:1200,densityScale:.2,shapeAmount:1,shapeDetailAmount:1,weatherExponent:1,shapeAlteringBias:.35,coverageFilterWidth:.6,shadow:!0},{channel:"b",altitude:7500,height:500,densityScale:.003,shapeAmount:.4,shapeDetailAmount:0,weatherExponent:1,shapeAlteringBias:.35,coverageFilterWidth:.5},{channel:"a"}]);let FT=Tc;var BT="Invariant failed";function Wi(n,e){if(!n)throw new Error(BT)}class qa{constructor(e,t){this.near=[new P,new P,new P,new P],this.far=[new P,new P,new P,new P],e!=null&&t!=null&&this.setFromCamera(e,t)}clone(){return new qa().copy(this)}copy(e){for(let t=0;t<4;++t)this.near[t].copy(e.near[t]),this.far[t].copy(e.far[t]);return this}setFromCamera(e,t){const i=e.isOrthographicCamera===!0,r=e.projectionMatrixInverse;this.near[0].set(1,1,-1),this.near[1].set(1,-1,-1),this.near[2].set(-1,-1,-1),this.near[3].set(-1,1,-1);for(let a=0;a<4;++a)this.near[a].applyMatrix4(r);this.far[0].set(1,1,1),this.far[1].set(1,-1,1),this.far[2].set(-1,-1,1),this.far[3].set(-1,1,1);for(let a=0;a<4;++a){const s=this.far[a];s.applyMatrix4(r);const o=Math.abs(s.z);i?s.z*=Math.min(t/o,1):s.multiplyScalar(Math.min(t/o,1))}return this}split(e,t=[]){for(let i=0;i<e.length;++i){const r=t[i]??=new qa;if(i===0)for(let a=0;a<4;++a)r.near[a].copy(this.near[a]);else for(let a=0;a<4;++a)r.near[a].lerpVectors(this.near[a],this.far[a],e[i-1]);if(i===e.length-1)for(let a=0;a<4;++a)r.far[a].copy(this.far[a]);else for(let a=0;a<4;++a)r.far[a].lerpVectors(this.near[a],this.far[a],e[i])}return t.length=e.length,t}applyMatrix4(e){for(let t=0;t<4;++t)this.near[t].applyMatrix4(e),this.far[t].applyMatrix4(e);return this}}const HT={uniform:(n,e,t,i,r=[])=>{for(let a=0;a<n;++a)r[a]=(e+(t-e)*(a+1)/n)/t;return r.length=n,r},logarithmic:(n,e,t,i,r=[])=>{for(let a=0;a<n;++a)r[a]=e*(t/e)**((a+1)/n)/t;return r.length=n,r},practical:(n,e,t,i=.5,r=[])=>{for(let a=0;a<n;++a){const s=(e+(t-e)*(a+1)/n)/t,o=e*(t/e)**((a+1)/n)/t;r[a]=np(s,o,i)}return r.length=n,r}};function zT(n,e,t,i,r,a=[]){return HT[n](e,t,i,r,a)}const Ad=new P,Rd=new P,GT=new Ue,Cd=new Ue,kT=new qa,WT=new sa,VT={maxFar:null,farScale:1,splitMode:"practical",splitLambda:.5,margin:0,fade:!0};class XT{constructor(e){this.cascades=[],this.mapSize=new Ee,this.cameraFrustum=new qa,this.frusta=[],this.splits=[],this._far=0;const{cascadeCount:t,mapSize:i,maxFar:r,farScale:a,splitMode:s,splitLambda:o,margin:l,fade:c}={...VT,...e};this.cascadeCount=t,this.mapSize.copy(i),this.maxFar=r,this.farScale=a,this.splitMode=s,this.splitLambda=o,this.margin=l,this.fade=c}get cascadeCount(){return this.cascades.length}set cascadeCount(e){if(e!==this.cascadeCount){for(let t=0;t<e;++t)this.cascades[t]??={interval:new Ee,matrix:new Ue,inverseMatrix:new Ue,projectionMatrix:new Ue,inverseProjectionMatrix:new Ue,viewMatrix:new Ue,inverseViewMatrix:new Ue};this.cascades.length=e}}get far(){return this._far}updateIntervals(e){const t=this.cascadeCount,i=this.splits,r=this.far;zT(this.splitMode,t,e.near,r,this.splitLambda,i),this.cameraFrustum.setFromCamera(e,r),this.cameraFrustum.split(i,this.frusta);const a=this.cascades;for(let s=0;s<t;++s)a[s].interval.set(i[s-1]??0,i[s]??0)}getFrustumRadius(e,t){const i=t.near,r=t.far;let a=Math.max(r[0].distanceTo(r[2]),r[0].distanceTo(i[2]));if(this.fade){const s=e.near,o=this.far,l=r[0].z/(o-s);a+=.25*l**2*(o-s)}return a*.5}updateMatrices(e,t,i=1){const r=GT.lookAt(Ad.setScalar(0),Rd.copy(t).multiplyScalar(-1),Gt.DEFAULT_UP),a=Cd.multiplyMatrices(Cd.copy(r).invert(),e.matrixWorld),s=this.frusta,o=this.cascades;Wi(s.length===o.length);const l=this.margin,c=this.mapSize;for(let h=0;h<s.length;++h){const d=s[h],f=o[h],g=this.getFrustumRadius(e,s[h]),_=-g,S=g,p=g,m=-g;f.projectionMatrix.makeOrthographic(_,S,p,m,-this.margin,g*2+this.margin);const{near:R,far:A}=kT.copy(d).applyMatrix4(a),M=WT.makeEmpty();for(let w=0;w<4;w++)M.expandByPoint(R[w]),M.expandByPoint(A[w]);const H=M.getCenter(Ad);H.z=M.max.z+l;const D=(S-_)/c.width,L=(p-m)/c.height;H.x=Math.round(H.x/D)*D,H.y=Math.round(H.y/L)*L,H.applyMatrix4(r);const O=Rd.copy(t).multiplyScalar(i).add(H);f.inverseViewMatrix.lookAt(H,O,Gt.DEFAULT_UP).setPosition(O)}}update(e,t,i){this._far=this.maxFar!=null?Math.min(this.maxFar,e.far*this.farScale):e.far*this.farScale,this.updateIntervals(e),this.updateMatrices(e,t,i);const r=this.cascades,a=this.cascadeCount;for(let s=0;s<a;++s){const{matrix:o,inverseMatrix:l,projectionMatrix:c,inverseProjectionMatrix:h,viewMatrix:d,inverseViewMatrix:f}=r[s];h.copy(c).invert(),d.copy(f).invert(),o.copy(c).multiply(d),l.copy(f).multiply(h)}}}const Dd=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],gp=Dd.reduce((n,e,t)=>{const i=new Ee;for(let r=0;r<16;++r)if(Dd[r]===t){i.set((r%4+.5)/4,(Math.floor(r/4)+.5)/4);break}return[...n,i]},[]),YT={resolutionScale:1,lightShafts:!0,shapeDetail:!0,turbulence:!0,haze:!0,clouds:{multiScatteringOctaves:8,accurateSunSkyLight:!0,accuratePhaseFunction:!1,maxIterationCount:500,minStepSize:50,maxStepSize:1e3,maxRayDistance:2e5,perspectiveStepScale:1.01,minDensity:1e-5,minExtinction:1e-5,minTransmittance:.01,maxIterationCountToGround:3,maxIterationCountToSun:2,minSecondaryStepSize:100,secondaryStepScale:2,maxShadowLengthIterationCount:500,minShadowLengthStepSize:50,maxShadowLengthRayDistance:2e5},shadow:{cascadeCount:3,mapSize:new Ee(512,512),maxIterationCount:50,minStepSize:100,maxStepSize:1e3,minDensity:1e-5,minExtinction:1e-5,minTransmittance:1e-4}},Xe=YT,qT={low:{...Xe,lightShafts:!1,shapeDetail:!1,turbulence:!1,clouds:{...Xe.clouds,accurateSunSkyLight:!1,maxIterationCount:200,minStepSize:100,maxRayDistance:1e5,minDensity:1e-4,minExtinction:1e-4,minTransmittance:.1,maxIterationCountToGround:0,maxIterationCountToSun:1},shadow:{...Xe.shadow,maxIterationCount:25,minDensity:1e-4,minExtinction:1e-4,minTransmittance:.01,cascadeCount:2,mapSize:new Ee(256,256)}},medium:{...Xe,lightShafts:!1,turbulence:!1,clouds:{...Xe.clouds,minDensity:1e-4,minExtinction:1e-4,accurateSunSkyLight:!1,maxIterationCountToSun:2,maxIterationCountToGround:1},shadow:{...Xe.shadow,minDensity:1e-4,minExtinction:1e-4,mapSize:new Ee(256,256)}},high:Xe,ultra:{...Xe,clouds:{...Xe.clouds,minStepSize:10},shadow:{...Xe.shadow,mapSize:new Ee(1024,1024)}}},$T=`precision highp float;
precision highp sampler3D;
precision highp sampler2DArray;

#include <common>
#include <packing>

#include "core/depth"
#include "core/math"
#include "core/turbo"
#include "core/generators"
#include "core/raySphereIntersection"
#include "core/cascadedShadowMaps"
#include "core/interleavedGradientNoise"
#include "core/vogelDisk"

#include "atmosphere/bruneton/definitions"

uniform AtmosphereParameters ATMOSPHERE;
uniform vec3 SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
uniform vec3 SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;

uniform sampler2D transmittance_texture;
uniform sampler3D scattering_texture;
uniform sampler2D irradiance_texture;
uniform sampler3D single_mie_scattering_texture;
uniform sampler3D higher_order_scattering_texture;

#include "atmosphere/bruneton/common"
#include "atmosphere/bruneton/runtime"

#include "types"
#include "parameters"
#include "clouds"

#if !defined(RECIPROCAL_PI4)
#define RECIPROCAL_PI4 0.07957747154594767
#endif // !defined(RECIPROCAL_PI4)

uniform sampler2D depthBuffer;
uniform mat4 viewMatrix;
uniform mat4 reprojectionMatrix;
uniform mat4 viewReprojectionMatrix;
uniform float cameraNear;
uniform float cameraFar;
uniform float cameraHeight;
uniform vec2 temporalJitter;
uniform vec2 targetUvScale;
uniform float mipLevelScale;

// Scattering
const vec2 scatterAnisotropy = vec2(SCATTER_ANISOTROPY_1, SCATTER_ANISOTROPY_2);
const float scatterAnisotropyMix = SCATTER_ANISOTROPY_MIX;
uniform float skyLightScale;
uniform float groundBounceScale;
uniform float powderScale;
uniform float powderExponent;

// Primary raymarch
uniform int maxIterationCount;
uniform float minStepSize;
uniform float maxStepSize;
uniform float maxRayDistance;
uniform float perspectiveStepScale;

// Secondary raymarch
uniform int maxIterationCountToSun;
uniform int maxIterationCountToGround;
uniform float minSecondaryStepSize;
uniform float secondaryStepScale;

// Beer shadow map
uniform sampler2DArray shadowBuffer;
uniform vec2 shadowTexelSize;
uniform vec2 shadowIntervals[SHADOW_CASCADE_COUNT];
uniform mat4 shadowMatrices[SHADOW_CASCADE_COUNT];
uniform float shadowFar;
uniform float maxShadowFilterRadius;

// Shadow length
#ifdef SHADOW_LENGTH
uniform int maxShadowLengthIterationCount;
uniform float minShadowLengthStepSize;
uniform float maxShadowLengthRayDistance;
#endif // SHADOW_LENGTH

in vec2 vUv;
in vec3 vCameraPosition;
in vec3 vCameraDirection; // Direction to the center of screen
in vec3 vRayDirection; // Direction to the texel
in vec3 vViewPosition;
in GroundIrradiance vGroundIrradiance;
in CloudsIrradiance vCloudsIrradiance;

layout(location = 0) out vec4 outputColor;
layout(location = 1) out vec3 outputDepthVelocity;
#ifdef SHADOW_LENGTH
layout(location = 2) out float outputShadowLength;
#endif // SHADOW_LENGTH

float getViewZ(const float depth) {
  #ifdef PERSPECTIVE_CAMERA
  return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
  #else // PERSPECTIVE_CAMERA
  return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
  #endif // PERSPECTIVE_CAMERA
}

vec3 ecefToWorld(const vec3 positionECEF) {
  return (ecefToWorldMatrix * vec4(positionECEF - altitudeCorrection, 1.0)).xyz;
}

vec2 getShadowUv(const vec3 worldPosition, const int cascadeIndex) {
  vec4 clip = shadowMatrices[cascadeIndex] * vec4(worldPosition, 1.0);
  clip /= clip.w;
  return clip.xy * 0.5 + 0.5;
}

float getDistanceToShadowTop(const vec3 rayPosition) {
  // Distance to the top of the shadows along the sun direction, which matches
  // the ray origin of BSM.
  return raySphereSecondIntersection(
    rayPosition,
    sunDirection,
    vec3(0.0),
    bottomRadius + shadowTopHeight
  );
}

#ifdef DEBUG_SHOW_CASCADES

const vec3 cascadeColors[4] = vec3[4](
  vec3(1.0, 0.0, 0.0),
  vec3(0.0, 1.0, 0.0),
  vec3(0.0, 0.0, 1.0),
  vec3(1.0, 1.0, 0.0)
);

vec3 getCascadeColor(const vec3 rayPosition) {
  vec3 worldPosition = ecefToWorld(rayPosition);
  int cascadeIndex = getCascadeIndex(
    viewMatrix,
    worldPosition,
    shadowIntervals,
    cameraNear,
    shadowFar
  );
  vec2 uv = getShadowUv(worldPosition, cascadeIndex);
  if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
    return vec3(1.0);
  }
  return cascadeColors[cascadeIndex];
}

vec3 getFadedCascadeColor(const vec3 rayPosition, const float jitter) {
  vec3 worldPosition = ecefToWorld(rayPosition);
  int cascadeIndex = getFadedCascadeIndex(
    viewMatrix,
    worldPosition,
    shadowIntervals,
    cameraNear,
    shadowFar,
    jitter
  );
  return cascadeIndex >= 0
    ? cascadeColors[cascadeIndex]
    : vec3(1.0);
}

#endif // DEBUG_SHOW_CASCADES

float readShadowOpticalDepth(
  const vec2 uv,
  const float distanceToTop,
  const float distanceOffset,
  const int cascadeIndex
) {
  // r: frontDepth, g: meanExtinction, b: maxOpticalDepth, a: maxOpticalDepthTail
  // Also see the discussion here: https://x.com/shotamatsuda/status/1885322308908442106
  vec4 shadow = texture(shadowBuffer, vec3(uv, float(cascadeIndex)));
  float distanceToFront = max(0.0, distanceToTop - distanceOffset - shadow.r);
  return min(shadow.b + shadow.a, shadow.g * distanceToFront);
}

float sampleShadowOpticalDepthPCF(
  const vec3 worldPosition,
  const float distanceToTop,
  const float distanceOffset,
  const float radius,
  const int cascadeIndex
) {
  vec2 uv = getShadowUv(worldPosition, cascadeIndex);
  if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
    return 0.0;
  }
  if (radius < 0.1) {
    return readShadowOpticalDepth(uv, distanceToTop, distanceOffset, cascadeIndex);
  }
  float sum = 0.0;
  vec2 offset;
  #pragma unroll_loop_start
  for (int i = 0; i < 16; ++i) {
    #if UNROLLED_LOOP_INDEX < SHADOW_SAMPLE_COUNT
    offset = vogelDisk(
      UNROLLED_LOOP_INDEX,
      SHADOW_SAMPLE_COUNT,
      interleavedGradientNoise(gl_FragCoord.xy + temporalJitter * resolution) * PI2
    );
    sum += readShadowOpticalDepth(
      uv + offset * radius * shadowTexelSize,
      distanceToTop,
      distanceOffset,
      cascadeIndex
    );
    #endif // UNROLLED_LOOP_INDEX < SHADOW_SAMPLE_COUNT
  }
  #pragma unroll_loop_end
  return sum / float(SHADOW_SAMPLE_COUNT);
}

float sampleShadowOpticalDepth(
  const vec3 rayPosition,
  const float distanceOffset,
  const float radius,
  const float jitter
) {
  float distanceToTop = getDistanceToShadowTop(rayPosition);
  if (distanceToTop <= 0.0) {
    return 0.0;
  }
  vec3 worldPosition = ecefToWorld(rayPosition);
  int cascadeIndex = getFadedCascadeIndex(
    viewMatrix,
    worldPosition,
    shadowIntervals,
    cameraNear,
    shadowFar,
    jitter
  );
  return cascadeIndex >= 0
    ? sampleShadowOpticalDepthPCF(
      worldPosition,
      distanceToTop,
      distanceOffset,
      radius,
      cascadeIndex
    )
    : 0.0;
}

#ifdef DEBUG_SHOW_SHADOW_MAP
vec4 getCascadedShadowMaps(vec2 uv) {
  vec4 coord = vec4(vUv, vUv - 0.5) * 2.0;
  vec4 shadow = vec4(0.0);
  if (uv.y > 0.5) {
    if (uv.x < 0.5) {
      shadow = texture(shadowBuffer, vec3(coord.xw, 0.0));
    } else {
      #if SHADOW_CASCADE_COUNT > 1
      shadow = texture(shadowBuffer, vec3(coord.zw, 1.0));
      #endif // SHADOW_CASCADE_COUNT > 1
    }
  } else {
    if (uv.x < 0.5) {
      #if SHADOW_CASCADE_COUNT > 2
      shadow = texture(shadowBuffer, vec3(coord.xy, 2.0));
      #endif // SHADOW_CASCADE_COUNT > 2
    } else {
      #if SHADOW_CASCADE_COUNT > 3
      shadow = texture(shadowBuffer, vec3(coord.zy, 3.0));
      #endif // SHADOW_CASCADE_COUNT > 3
    }
  }

  #if !defined(DEBUG_SHOW_SHADOW_MAP_TYPE)
  #define DEBUG_SHOW_SHADOW_MAP_TYPE 0
  #endif // !defined(DEBUG_SHOW_SHADOW_MAP_TYPE

  const float frontDepthScale = 1e-5;
  const float meanExtinctionScale = 10.0;
  const float maxOpticalDepthScale = 0.01;
  vec3 color;
  #if DEBUG_SHOW_SHADOW_MAP_TYPE == 1
  color = vec3(shadow.r * frontDepthScale);
  #elif DEBUG_SHOW_SHADOW_MAP_TYPE == 2
  color = vec3(shadow.g * meanExtinctionScale);
  #elif DEBUG_SHOW_SHADOW_MAP_TYPE == 3
  color = vec3((shadow.b + shadow.a) * maxOpticalDepthScale);
  #else // DEBUG_SHOW_SHADOW_MAP_TYPE
  color =
    (shadow.rgb + vec3(0.0, 0.0, shadow.a)) *
    vec3(frontDepthScale, meanExtinctionScale, maxOpticalDepthScale);
  #endif // DEBUG_SHOW_SHADOW_MAP_TYPE
  return vec4(color, 1.0);
}
#endif // DEBUG_SHOW_SHADOW_MAP

vec2 henyeyGreenstein(const vec2 g, const float cosTheta) {
  vec2 g2 = g * g;
  // prettier-ignore
  return RECIPROCAL_PI4 *
    ((1.0 - g2) / max(vec2(1e-7), pow(1.0 + g2 - 2.0 * g * cosTheta, vec2(1.5))));
}

#ifdef ACCURATE_PHASE_FUNCTION

float draine(float u, float g, float a) {
  float g2 = g * g;
  // prettier-ignore
  return (1.0 - g2) *
    (1.0 + a * u * u) /
    (4.0 * (1.0 + a * (1.0 + 2.0 * g2) / 3.0) * PI * pow(1.0 + g2 - 2.0 * g * u, 1.5));
}

// Numerically-fitted large particles (d=10) phase function It won't be
// plausible without a more precise multiple scattering.
// Reference: https://research.nvidia.com/labs/rtr/approximate-mie/
float phaseFunction(const float cosTheta, const float attenuation) {
  const float gHG = 0.988176691700256; // exp(-0.0990567/(d-1.67154))
  const float gD = 0.5556712547839497; // exp(-2.20679/(d+3.91029) - 0.428934)
  const float alpha = 21.995520856274638; // exp(3.62489 - 8.29288/(d+5.52825))
  const float weight = 0.4819554318404214; // exp(-0.599085/(d-0.641583)-0.665888)
  return mix(
    henyeyGreenstein(vec2(gHG) * attenuation, cosTheta).x,
    draine(cosTheta, gD * attenuation, alpha),
    weight
  );
}

#else // ACCURATE_PHASE_FUNCTION

float phaseFunction(const float cosTheta, const float attenuation) {
  const vec2 g = scatterAnisotropy;
  const vec2 weights = vec2(1.0 - scatterAnisotropyMix, scatterAnisotropyMix);
  // A similar approximation is described in the Frostbite's paper, where phase
  // angle is attenuated instead of anisotropy.
  return dot(henyeyGreenstein(g * attenuation, cosTheta), weights);
}

#endif // ACCURATE_PHASE_FUNCTION

float phaseFunction(const float cosTheta) {
  return phaseFunction(cosTheta, 1.0);
}

float marchOpticalDepth(
  const vec3 rayOrigin,
  const vec3 rayDirection,
  const int maxIterationCount,
  const float mipLevel,
  const float jitter,
  out float rayDistance
) {
  int iterationCount = int(
    max(0.0, remap(mipLevel, 0.0, 1.0, float(maxIterationCount + 1), 1.0) - jitter)
  );
  if (iterationCount == 0) {
    // Fudge factor to approximate the mean optical depth.
    // TODO: Remove it.
    return 0.5;
  }
  float stepSize = minSecondaryStepSize / float(iterationCount);
  float nextDistance = stepSize * jitter;
  float opticalDepth = 0.0;
  for (int i = 0; i < iterationCount; ++i) {
    rayDistance = nextDistance;
    vec3 position = rayDistance * rayDirection + rayOrigin;
    vec2 uv = getGlobeUv(position);
    float height = length(position) - bottomRadius;
    WeatherSample weather = sampleWeather(uv, height, mipLevel);
    MediaSample media = sampleMedia(weather, position, uv, mipLevel, jitter);
    opticalDepth += media.extinction * stepSize;
    nextDistance += stepSize;
    stepSize *= secondaryStepScale;
  }
  return opticalDepth;
}

float marchOpticalDepth(
  const vec3 rayOrigin,
  const vec3 rayDirection,
  const int maxIterationCount,
  const float mipLevel,
  const float jitter
) {
  float rayDistance;
  return marchOpticalDepth(
    rayOrigin,
    rayDirection,
    maxIterationCount,
    mipLevel,
    jitter,
    rayDistance
  );
}

float approximateMultipleScattering(const float opticalDepth, const float cosTheta) {
  // Multiple scattering approximation
  // See: https://fpsunflower.github.io/ckulla/data/oz_volumes.pdf
  // a: attenuation, b: contribution, c: phase attenuation
  vec3 coeffs = vec3(1.0); // [a, b, c]
  const vec3 attenuation = vec3(0.5, 0.5, 0.5); // Should satisfy a <= b
  float scattering = 0.0;
  float beerLambert;
  #pragma unroll_loop_start
  for (int i = 0; i < 12; ++i) {
    #if UNROLLED_LOOP_INDEX < MULTI_SCATTERING_OCTAVES
    beerLambert = exp(-opticalDepth * coeffs.y);
    scattering += coeffs.x * beerLambert * phaseFunction(cosTheta, coeffs.z);
    coeffs *= attenuation;
    #endif // UNROLLED_LOOP_INDEX < MULTI_SCATTERING_OCTAVES
  }
  #pragma unroll_loop_end
  return scattering;
}

// TODO: Construct spherical harmonics of degree 2 using 2 sample points
// positioned near the horizon occlusion points on the sun direction plane.
vec3 getGroundSunSkyIrradiance(
  const vec3 position,
  const vec3 surfaceNormal,
  const float height,
  out vec3 skyIrradiance
) {
  #ifdef ACCURATE_SUN_SKY_LIGHT
  return GetSunAndSkyIrradiance(
    (position - surfaceNormal * height) * METER_TO_LENGTH_UNIT,
    surfaceNormal,
    sunDirection,
    skyIrradiance
  );
  #else // ACCURATE_SUN_SKY_LIGHT
  skyIrradiance = vGroundIrradiance.sky;
  return vGroundIrradiance.sun;
  #endif // ACCURATE_SUN_SKY_LIGHT
}

vec3 getCloudsSunSkyIrradiance(const vec3 position, const float height, out vec3 skyIrradiance) {
  #ifdef ACCURATE_SUN_SKY_LIGHT
  return GetSunAndSkyScalarIrradiance(position * METER_TO_LENGTH_UNIT, sunDirection, skyIrradiance);
  #else // ACCURATE_SUN_SKY_LIGHT
  float alpha = remapClamped(height, minHeight, maxHeight);
  skyIrradiance = mix(vCloudsIrradiance.minSky, vCloudsIrradiance.maxSky, alpha);
  return mix(vCloudsIrradiance.minSun, vCloudsIrradiance.maxSun, alpha);
  #endif // ACCURATE_SUN_SKY_LIGHT
}

#ifdef GROUND_BOUNCE
vec3 approximateRadianceFromGround(
  const vec3 position,
  const vec3 surfaceNormal,
  const float height,
  const float mipLevel,
  const float jitter
) {
  float opticalDepthToGround = marchOpticalDepth(
    position,
    -surfaceNormal,
    maxIterationCountToGround,
    mipLevel,
    jitter
  );
  vec3 skyIrradiance;
  vec3 sunIrradiance = getGroundSunSkyIrradiance(position, surfaceNormal, height, skyIrradiance);
  const float groundAlbedo = 0.3;
  vec3 groundIrradiance = skyIrradiance + (1.0 - coverage) * sunIrradiance;
  vec3 bouncedRadiance = groundAlbedo * RECIPROCAL_PI * groundIrradiance;
  return bouncedRadiance * exp(-opticalDepthToGround);
}
#endif // GROUND_BOUNCE

vec4 marchClouds(
  const vec3 rayOrigin,
  const vec3 rayDirection,
  const vec2 rayNearFar,
  const float cosTheta,
  const float jitter,
  const float rayStartTexelsPerPixel,
  out float frontDepth,
  out ivec3 sampleCount
) {
  vec3 radianceIntegral = vec3(0.0);
  float transmittanceIntegral = 1.0;
  float weightedDistanceSum = 0.0;
  float transmittanceSum = 0.0;

  float maxRayDistance = rayNearFar.y - rayNearFar.x;
  float stepSize = minStepSize + (perspectiveStepScale - 1.0) * rayNearFar.x;
  // I don't understand why spatial aliasing remains unless doubling the jitter.
  float rayDistance = stepSize * jitter * 2.0;

  for (int i = 0; i < maxIterationCount; ++i) {
    if (rayDistance > maxRayDistance) {
      break; // Termination
    }

    vec3 position = rayDistance * rayDirection + rayOrigin;
    float height = length(position) - bottomRadius;
    float mipLevel = log2(max(1.0, rayStartTexelsPerPixel + rayDistance * 1e-5));

    #if !defined(DEBUG_MARCH_INTERVALS)
    if (insideLayerIntervals(height)) {
      stepSize *= perspectiveStepScale;
      rayDistance += mix(stepSize, maxStepSize, min(1.0, mipLevel));
      continue;
    }
    #endif // !defined(DEBUG_MARCH_INTERVALS)

    // Sample rough weather.
    vec2 uv = getGlobeUv(position);
    WeatherSample weather = sampleWeather(uv, height, mipLevel);

    #ifdef DEBUG_SHOW_SAMPLE_COUNT
    ++sampleCount.x;
    #endif // DEBUG_SHOW_SAMPLE_COUNT

    if (!any(greaterThan(weather.density, vec4(minDensity)))) {
      // Step longer in empty space.
      // TODO: This produces banding artifacts.
      // Possible improvement: Binary search refinement
      stepSize *= perspectiveStepScale;
      rayDistance += mix(stepSize, maxStepSize, min(1.0, mipLevel));
      continue;
    }

    // Sample detailed participating media.
    MediaSample media = sampleMedia(weather, position, uv, mipLevel, jitter, sampleCount);

    if (media.extinction > minExtinction) {
      vec3 skyIrradiance;
      vec3 sunIrradiance = getCloudsSunSkyIrradiance(position, height, skyIrradiance);
      vec3 surfaceNormal = normalize(position);

      // March optical depth to the sun for finer details, which BSM lacks.
      float sunRayDistance = 0.0;
      float opticalDepth = marchOpticalDepth(
        position,
        sunDirection,
        maxIterationCountToSun,
        mipLevel,
        jitter,
        sunRayDistance
      );

      if (height < shadowTopHeight) {
        // Obtain the optical depth from BSM at the ray position.
        opticalDepth += sampleShadowOpticalDepth(
          position,
          // Take account of only positions further than the marched ray
          // distance.
          sunRayDistance,
          // Apply PCF only when the sun is close to the horizon.
          maxShadowFilterRadius * remapClamped(dot(sunDirection, surfaceNormal), 0.1, 0.0),
          jitter
        );
      }

      vec3 radiance = sunIrradiance * approximateMultipleScattering(opticalDepth, cosTheta);

      #ifdef GROUND_BOUNCE
      // Fudge factor for the irradiance from ground.
      if (height < shadowTopHeight && mipLevel < 0.5) {
        vec3 groundRadiance = approximateRadianceFromGround(
          position,
          surfaceNormal,
          height,
          mipLevel,
          jitter
        );
        radiance += groundRadiance * RECIPROCAL_PI4 * groundBounceScale;
      }
      #endif // GROUND_BOUNCE

      // Crude approximation of sky gradient. Better than none in the shadows.
      float skyGradient = dot(weather.heightFraction * 0.5 + 0.5, media.weight);
      radiance += skyIrradiance * RECIPROCAL_PI4 * skyGradient * skyLightScale;

      // Finally multiply by scattering.
      radiance *= media.scattering;

      #ifdef POWDER
      radiance *= 1.0 - powderScale * exp(-media.extinction * powderExponent);
      #endif // POWDER

      #ifdef DEBUG_SHOW_CASCADES
      if (height < shadowTopHeight) {
        radiance = 1e-3 * getFadedCascadeColor(position, jitter);
      }
      #endif // DEBUG_SHOW_CASCADES

      // Energy-conserving analytical integration of scattered light
      // See 5.6.3 in https://media.contentapi.ea.com/content/dam/eacom/frostbite/files/s2016-pbs-frostbite-sky-clouds-new.pdf
      float transmittance = exp(-media.extinction * stepSize);
      float clampedExtinction = max(media.extinction, 1e-7);
      vec3 scatteringIntegral = (radiance - radiance * transmittance) / clampedExtinction;
      radianceIntegral += transmittanceIntegral * scatteringIntegral;
      transmittanceIntegral *= transmittance;

      // Aerial perspective affecting clouds
      // See 5.9.1 in https://media.contentapi.ea.com/content/dam/eacom/frostbite/files/s2016-pbs-frostbite-sky-clouds-new.pdf
      weightedDistanceSum += rayDistance * transmittanceIntegral;
      transmittanceSum += transmittanceIntegral;
    }

    if (transmittanceIntegral <= minTransmittance) {
      break; // Early termination
    }

    // Take a shorter step because we've already hit the clouds.
    stepSize *= perspectiveStepScale;
    rayDistance += stepSize;
  }

  // The final product of 5.9.1 and we'll evaluate this in aerial perspective.
  frontDepth = transmittanceSum > 0.0 ? weightedDistanceSum / transmittanceSum : -1.0;

  return vec4(radianceIntegral, remapClamped(transmittanceIntegral, 1.0, minTransmittance));
}

#ifdef SHADOW_LENGTH

float marchShadowLength(
  const vec3 rayOrigin,
  const vec3 rayDirection,
  const vec2 rayNearFar,
  const float jitter
) {
  float shadowLength = 0.0;
  float maxRayDistance = rayNearFar.y - rayNearFar.x;
  float stepSize = minShadowLengthStepSize;
  float rayDistance = stepSize * jitter;
  const float attenuationFactor = 1.0 - 5e-4;
  float attenuation = 1.0;

  // TODO: This march is closed, and sample resolution can be much lower.
  // Refining the termination by binary search will make it much more efficient.
  for (int i = 0; i < maxShadowLengthIterationCount; ++i) {
    if (rayDistance > maxRayDistance) {
      break; // Termination
    }
    vec3 position = rayDistance * rayDirection + rayOrigin;
    float opticalDepth = sampleShadowOpticalDepth(position, 0.0, 0.0, jitter);
    shadowLength += (1.0 - exp(-opticalDepth)) * stepSize * attenuation;
    stepSize *= perspectiveStepScale;
    rayDistance += stepSize;
  }
  return shadowLength;
}

#endif // SHADOW_LENGTH

#ifdef HAZE

vec4 approximateHaze(
  const vec3 rayOrigin,
  const vec3 rayDirection,
  const float maxRayDistance,
  const float cosTheta,
  const float shadowLength
) {
  float modulation = remapClamped(coverage, 0.2, 0.4);
  if (cameraHeight * modulation < 0.0) {
    return vec4(0.0);
  }
  float density = modulation * hazeDensityScale * exp(-cameraHeight * hazeExponent);
  if (density < 1e-7) {
    return vec4(0.0); // Prevent artifact in views from space
  }

  // Blend two normals by the difference in angle so that normal near the
  // ground becomes that of the origin, and in the sky that of the horizon.
  vec3 normalAtOrigin = normalize(rayOrigin);
  vec3 normalAtHorizon = (rayOrigin - dot(rayOrigin, rayDirection) * rayDirection) / bottomRadius;
  float alpha = remapClamped(dot(normalAtOrigin, normalAtHorizon), 0.9, 1.0);
  vec3 normal = mix(normalAtOrigin, normalAtHorizon, alpha);

  // Analytical optical depth where density exponentially decreases with height.
  // Based on: https://iquilezles.org/articles/fog/
  float angle = max(dot(normal, rayDirection), 1e-5);
  float exponent = angle * hazeExponent;
  float linearTerm = density / hazeExponent / angle;

  // Derive the optical depths separately for with and without shadow length.
  float expTerm = 1.0 - exp(-maxRayDistance * exponent);
  float shadowExpTerm = 1.0 - exp(-min(maxRayDistance, shadowLength) * exponent);
  float opticalDepth = expTerm * linearTerm;
  float shadowOpticalDepth = max((expTerm - shadowExpTerm) * linearTerm, 0.0);
  float transmittance = saturate(1.0 - exp(-opticalDepth));
  float shadowTransmittance = saturate(1.0 - exp(-shadowOpticalDepth));

  vec3 skyIrradiance = vGroundIrradiance.sky;
  vec3 sunIrradiance = vGroundIrradiance.sun;
  vec3 inscatter = sunIrradiance * phaseFunction(cosTheta) * shadowTransmittance;
  inscatter += skyIrradiance * RECIPROCAL_PI4 * skyLightScale * transmittance;
  inscatter *= hazeScatteringCoefficient / (hazeAbsorptionCoefficient + hazeScatteringCoefficient);
  return vec4(inscatter, transmittance);
}

#endif // HAZE

void applyAerialPerspective(
  const vec3 cameraPosition,
  const vec3 frontPosition,
  const float shadowLength,
  inout vec4 color
) {
  vec3 transmittance;
  vec3 inscatter = GetSkyRadianceToPoint(
    cameraPosition * METER_TO_LENGTH_UNIT,
    frontPosition * METER_TO_LENGTH_UNIT,
    shadowLength * METER_TO_LENGTH_UNIT,
    sunDirection,
    transmittance
  );
  color.rgb = color.rgb * transmittance + inscatter * color.a;
}

bool rayIntersectsGround(const vec3 cameraPosition, const vec3 rayDirection) {
  float r = length(cameraPosition);
  float mu = dot(cameraPosition, rayDirection) / r;
  return mu < 0.0 && r * r * (mu * mu - 1.0) + bottomRadius * bottomRadius >= 0.0;
}

struct IntersectionResult {
  bool ground;
  vec4 first;
  vec4 second;
};

IntersectionResult getIntersections(const vec3 cameraPosition, const vec3 rayDirection) {
  IntersectionResult intersections;
  intersections.ground = rayIntersectsGround(cameraPosition, rayDirection);
  raySphereIntersections(
    cameraPosition,
    rayDirection,
    bottomRadius + vec4(0.0, minHeight, maxHeight, shadowTopHeight),
    intersections.first,
    intersections.second
  );
  return intersections;
}

vec2 getRayNearFar(const IntersectionResult intersections) {
  vec2 nearFar;
  if (cameraHeight < minHeight) {
    // View below the clouds
    if (intersections.ground) {
      nearFar = vec2(-1.0); // No clouds to the ground
    } else {
      nearFar = vec2(intersections.second.y, intersections.second.z);
      nearFar.y = min(nearFar.y, maxRayDistance);
    }
  } else if (cameraHeight < maxHeight) {
    // View inside the total cloud layer
    if (intersections.ground) {
      nearFar = vec2(cameraNear, intersections.first.y);
    } else {
      nearFar = vec2(cameraNear, intersections.second.z);
    }
  } else {
    // View above the clouds
    nearFar = vec2(intersections.first.z, intersections.second.z);
    if (intersections.ground) {
      // Clamp the ray at the min height.
      nearFar.y = intersections.first.y;
    }
  }
  return nearFar;
}

#ifdef SHADOW_LENGTH
vec2 getShadowRayNearFar(const IntersectionResult intersections) {
  vec2 nearFar;
  if (cameraHeight < shadowTopHeight) {
    if (intersections.ground) {
      nearFar = vec2(cameraNear, intersections.first.x);
    } else {
      nearFar = vec2(cameraNear, intersections.second.w);
    }
  } else {
    nearFar = vec2(intersections.first.w, intersections.second.w);
    if (intersections.ground) {
      // Clamp the ray at the ground.
      nearFar.y = intersections.first.x;
    }
  }
  nearFar.y = min(nearFar.y, maxShadowLengthRayDistance);
  return nearFar;
}
#endif // SHADOW_LENGTH

#ifdef HAZE
vec2 getHazeRayNearFar(const IntersectionResult intersections) {
  vec2 nearFar;
  if (cameraHeight < maxHeight) {
    if (intersections.ground) {
      nearFar = vec2(cameraNear, intersections.first.x);
    } else {
      nearFar = vec2(cameraNear, intersections.second.z);
    }
  } else {
    nearFar = vec2(cameraNear, intersections.second.z);
    if (intersections.ground) {
      // Clamp the ray at the ground.
      nearFar.y = intersections.first.x;
    }
  }
  return nearFar;
}
#endif // HAZE

float getRayDistanceToScene(const vec3 rayDirection, out float viewZ) {
  float depth = readDepthValue(depthBuffer, vUv * targetUvScale + temporalJitter);
  if (depth < 1.0 - 1e-7) {
    depth = reverseLogDepth(depth, cameraNear, cameraFar);
    viewZ = getViewZ(depth);
    return -viewZ / dot(rayDirection, vCameraDirection);
  }
  viewZ = 0.0;
  return 0.0;
}

void main() {
  #ifdef DEBUG_SHOW_SHADOW_MAP
  outputColor = getCascadedShadowMaps(vUv);
  outputDepthVelocity = vec3(0.0);
  #ifdef SHADOW_LENGTH
  outputShadowLength = 0.0;
  #endif // SHADOW_LENGTH
  return;
  #endif // DEBUG_SHOW_SHADOW_MAP

  vec3 cameraPosition = vCameraPosition + altitudeCorrection;
  vec3 rayDirection = normalize(vRayDirection);
  float cosTheta = dot(sunDirection, rayDirection);

  IntersectionResult intersections = getIntersections(cameraPosition, rayDirection);
  vec2 rayNearFar = getRayNearFar(intersections);
  #ifdef SHADOW_LENGTH
  vec2 shadowRayNearFar = getShadowRayNearFar(intersections);
  #endif // SHADOW_LENGTH
  #ifdef HAZE
  vec2 hazeRayNearFar = getHazeRayNearFar(intersections);
  #endif // HAZE

  float sceneViewZ;
  float rayDistanceToScene = getRayDistanceToScene(rayDirection, sceneViewZ);
  if (rayDistanceToScene > 0.0) {
    rayNearFar.y = min(rayNearFar.y, rayDistanceToScene);
    #ifdef SHADOW_LENGTH
    shadowRayNearFar.y = min(shadowRayNearFar.y, rayDistanceToScene);
    #endif // SHADOW_LENGTH
    #ifdef HAZE
    hazeRayNearFar.y = min(hazeRayNearFar.y, rayDistanceToScene);
    #endif // HAZE
  }

  bool intersectsGround = any(lessThan(rayNearFar, vec2(0.0)));
  bool intersectsScene = rayNearFar.y < rayNearFar.x;

  float stbn = getSTBN();

  vec4 color = vec4(0.0);
  float frontDepth = rayNearFar.y;
  vec3 depthVelocity = vec3(0.0);
  float shadowLength = 0.0;
  bool hitClouds = false;

  if (!intersectsGround && !intersectsScene) {
    vec3 rayOrigin = rayNearFar.x * rayDirection + cameraPosition;

    vec2 globeUv = getGlobeUv(rayOrigin);
    #ifdef DEBUG_SHOW_UV
    outputColor = vec4(vec3(checker(globeUv, localWeatherRepeat + localWeatherOffset)), 1.0);
    outputDepthVelocity = vec3(0.0);
    #ifdef SHADOW_LENGTH
    outputShadowLength = 0.0;
    #endif // SHADOW_LENGTH
    return;
    #endif // DEBUG_SHOW_UV

    float mipLevel = getMipLevel(globeUv * localWeatherRepeat) * mipLevelScale;
    mipLevel = mix(0.0, mipLevel, min(1.0, 0.2 * cameraHeight / maxHeight));

    float marchedFrontDepth;
    ivec3 sampleCount = ivec3(0);
    color = marchClouds(
      rayOrigin,
      rayDirection,
      rayNearFar,
      cosTheta,
      stbn,
      pow(2.0, mipLevel),
      marchedFrontDepth,
      sampleCount
    );

    #ifdef DEBUG_SHOW_SAMPLE_COUNT
    outputColor = vec4(vec3(sampleCount) / vec3(500.0, 5.0, 5.0), 1.0);
    outputDepthVelocity = vec3(0.0);
    #ifdef SHADOW_LENGTH
    outputShadowLength = 0.0;
    #endif // SHADOW_LENGTH
    return;
    #endif // DEBUG_SHOW_SAMPLE_COUNT

    // Front depth will be -1.0 when no samples are accumulated.
    hitClouds = marchedFrontDepth >= 0.0;
    if (hitClouds) {
      frontDepth = rayNearFar.x + marchedFrontDepth;

      #ifdef SHADOW_LENGTH
      // Clamp the shadow length ray at the clouds.
      shadowRayNearFar.y = mix(
        shadowRayNearFar.y,
        min(frontDepth, shadowRayNearFar.y),
        color.a // Interpolate by the alpha for smoother edges.
      );

      // Shadow length must be computed before applying aerial perspective.
      if (all(greaterThanEqual(shadowRayNearFar, vec2(0.0)))) {
        shadowLength = marchShadowLength(
          shadowRayNearFar.x * rayDirection + cameraPosition,
          rayDirection,
          shadowRayNearFar,
          stbn
        );
      }
      #endif // SHADOW_LENGTH

      #ifdef HAZE
      // Clamp the haze ray at the clouds.
      hazeRayNearFar.y = mix(
        hazeRayNearFar.y,
        min(frontDepth, hazeRayNearFar.y),
        color.a // Interpolate by the alpha for smoother edges.
      );
      #endif // HAZE

      // Apply aerial perspective.
      vec3 frontPosition = cameraPosition + frontDepth * rayDirection;
      applyAerialPerspective(cameraPosition, frontPosition, shadowLength, color);

      // Velocity for temporal resolution.
      vec3 frontPositionWorld = ecefToWorld(frontPosition);
      vec4 prevClip = reprojectionMatrix * vec4(frontPositionWorld, 1.0);
      prevClip /= prevClip.w;
      vec2 prevUv = prevClip.xy * 0.5 + 0.5;
      vec2 velocity = vUv - prevUv;
      depthVelocity = vec3(frontDepth, velocity);
    }
  }

  if (!hitClouds) {
    #ifdef SHADOW_LENGTH
    if (all(greaterThanEqual(shadowRayNearFar, vec2(0.0)))) {
      shadowLength = marchShadowLength(
        shadowRayNearFar.x * rayDirection + cameraPosition,
        rayDirection,
        shadowRayNearFar,
        stbn
      );
    }
    #endif // SHADOW_LENGTH

    // Velocity for temporal resolution. Here reproject in the view space for
    // greatly reducing the precision errors.
    frontDepth = sceneViewZ < 0.0 ? -sceneViewZ : cameraFar;
    vec3 frontView = vViewPosition * frontDepth;
    vec4 prevClip = viewReprojectionMatrix * vec4(frontView, 1.0);
    prevClip /= prevClip.w;
    vec2 prevUv = prevClip.xy * 0.5 + 0.5;
    vec2 velocity = vUv - prevUv;
    depthVelocity = vec3(frontDepth, velocity);
  }

  #ifdef DEBUG_SHOW_FRONT_DEPTH
  outputColor = vec4(turbo(frontDepth / maxRayDistance), 1.0);
  outputDepthVelocity = vec3(0.0);
  #ifdef SHADOW_LENGTH
  outputShadowLength = 0.0;
  #endif // SHADOW_LENGTH
  return;
  #endif // DEBUG_SHOW_FRONT_DEPTH

  #ifdef HAZE
  vec4 haze = approximateHaze(
    cameraNear * rayDirection + cameraPosition,
    rayDirection,
    hazeRayNearFar.y - hazeRayNearFar.x,
    cosTheta,
    shadowLength
  );
  color.rgb = mix(color.rgb, haze.rgb, haze.a);
  color.a = color.a * (1.0 - haze.a) + haze.a;
  #endif // HAZE

  outputColor = color;
  outputDepthVelocity = depthVelocity;
  #ifdef SHADOW_LENGTH
  outputShadowLength = shadowLength * METER_TO_LENGTH_UNIT;
  #endif // SHADOW_LENGTH
}
`,vp=`float getSTBN() {
  ivec3 size = textureSize(stbnTexture, 0);
  vec3 scale = 1.0 / vec3(size);
  return texture(stbnTexture, vec3(gl_FragCoord.xy, float(frame % size.z)) * scale).r;
}

// Straightforward spherical mapping
vec2 getSphericalUv(const vec3 position) {
  vec2 st = normalize(position.yx);
  float phi = atan(st.x, st.y);
  float theta = asin(normalize(position).z);
  return vec2(phi * RECIPROCAL_PI2 + 0.5, theta * RECIPROCAL_PI + 0.5);
}

vec2 getCubeSphereUv(const vec3 position) {
  // Cube-sphere relaxation by: http://mathproofs.blogspot.com/2005/07/mapping-cube-to-sphere.html
  // TODO: Tile and fix seams.
  // Possible improvements:
  // https://iquilezles.org/articles/texturerepetition/
  // https://gamedev.stackexchange.com/questions/184388/fragment-shader-map-dot-texture-repeatedly-over-the-sphere
  // https://github.com/mmikk/hextile-demo

  vec3 n = normalize(position);
  vec3 f = abs(n);
  vec3 c = n / max(f.x, max(f.y, f.z));
  vec2 m;
  if (all(greaterThan(f.yy, f.xz))) {
    m = c.y > 0.0 ? vec2(-n.x, n.z) : n.xz;
  } else if (all(greaterThan(f.xx, f.yz))) {
    m = c.x > 0.0 ? n.yz : vec2(-n.y, n.z);
  } else {
    m = c.z > 0.0 ? n.xy : vec2(n.x, -n.y);
  }

  vec2 m2 = m * m;
  float q = dot(m2.xy, vec2(-2.0, 2.0)) - 3.0;
  float q2 = q * q;
  vec2 uv;
  uv.x = sqrt(1.5 + m2.x - m2.y - 0.5 * sqrt(-24.0 * m2.x + q2)) * (m.x > 0.0 ? 1.0 : -1.0);
  uv.y = sqrt(6.0 / (3.0 - uv.x * uv.x)) * m.y;
  return uv * 0.5 + 0.5;
}

vec2 getGlobeUv(const vec3 position) {
  return getCubeSphereUv(position);
}

float getMipLevel(const vec2 uv) {
  const float mipLevelScale = 0.1;
  vec2 coord = uv * resolution;
  vec2 ddx = dFdx(coord);
  vec2 ddy = dFdy(coord);
  float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy)) * mipLevelScale;
  return max(0.0, 0.5 * log2(max(1.0, deltaMaxSqr)));
}

bool insideLayerIntervals(const float height) {
  bvec3 gt = greaterThan(vec3(height), minIntervalHeights);
  bvec3 lt = lessThan(vec3(height), maxIntervalHeights);
  return any(bvec3(gt.x && lt.x, gt.y && lt.y, gt.z && lt.z));
}

struct WeatherSample {
  vec4 heightFraction; // Normalized height of each layer
  vec4 density;
};

vec4 shapeAlteringFunction(const vec4 heightFraction, const vec4 bias) {
  // Apply a semi-circle transform to round the clouds towards the top.
  vec4 biased = pow(heightFraction, bias);
  vec4 x = clamp(biased * 2.0 - 1.0, -1.0, 1.0);
  return 1.0 - x * x;
}

WeatherSample sampleWeather(const vec2 uv, const float height, const float mipLevel) {
  WeatherSample weather;
  weather.heightFraction = remapClamped(vec4(height), minLayerHeights, maxLayerHeights);

  vec4 localWeather = pow(
    textureLod(
      localWeatherTexture,
      uv * localWeatherRepeat + localWeatherOffset,
      mipLevel
    ).LOCAL_WEATHER_CHANNELS,
    weatherExponents
  );
  #ifdef SHADOW
  localWeather *= shadowLayerMask;
  #endif // SHADOW

  vec4 heightScale = shapeAlteringFunction(weather.heightFraction, shapeAlteringBiases);

  // Modulation to control weather by coverage parameter.
  // Reference: https://github.com/Prograda/Skybolt/blob/master/Assets/Core/Shaders/Clouds.h#L63
  vec4 factor = 1.0 - coverage * heightScale;
  weather.density = remapClamped(
    mix(localWeather, vec4(1.0), coverageFilterWidths),
    factor,
    factor + coverageFilterWidths
  );

  return weather;
}

vec4 getLayerDensity(const vec4 heightFraction) {
  // prettier-ignore
  return densityProfile.expTerms * exp(densityProfile.exponents * heightFraction) +
    densityProfile.linearTerms * heightFraction +
    densityProfile.constantTerms;
}

struct MediaSample {
  float density;
  vec4 weight;
  float scattering;
  float extinction;
};

MediaSample sampleMedia(
  const WeatherSample weather,
  const vec3 position,
  const vec2 uv,
  const float mipLevel,
  const float jitter,
  out ivec3 sampleCount
) {
  vec4 density = weather.density;

  // TODO: Define in physical length.
  vec3 surfaceNormal = normalize(position);
  float localWeatherSpeed = length(localWeatherOffset);
  vec3 evolution = -surfaceNormal * localWeatherSpeed * 2e4;

  vec3 turbulence = vec3(0.0);
  #ifdef TURBULENCE
  vec2 turbulenceUv = uv * localWeatherRepeat * turbulenceRepeat;
  turbulence =
    turbulenceDisplacement *
    (texture(turbulenceTexture, turbulenceUv).rgb * 2.0 - 1.0) *
    dot(density, remapClamped(weather.heightFraction, vec4(0.3), vec4(0.0)));
  #endif // TURBULENCE

  vec3 shapePosition = (position + evolution + turbulence) * shapeRepeat + shapeOffset;
  float shape = texture(shapeTexture, shapePosition).r;
  density = remapClamped(density, vec4(1.0 - shape) * shapeAmounts, vec4(1.0));

  #ifdef DEBUG_SHOW_SAMPLE_COUNT
  ++sampleCount.y;
  #endif // DEBUG_SHOW_SAMPLE_COUNT

  #ifdef SHAPE_DETAIL
  if (mipLevel * 0.5 + (jitter - 0.5) * 0.5 < 0.5) {
    vec3 detailPosition = (position + turbulence) * shapeDetailRepeat + shapeDetailOffset;
    float detail = texture(shapeDetailTexture, detailPosition).r;
    // Fluffy at the top and whippy at the bottom.
    vec4 modifier = mix(
      vec4(pow(detail, 6.0)),
      vec4(1.0 - detail),
      remapClamped(weather.heightFraction, vec4(0.2), vec4(0.4))
    );
    modifier = mix(vec4(0.0), modifier, shapeDetailAmounts);
    density = remapClamped(density * 2.0, vec4(modifier * 0.5), vec4(1.0));

    #ifdef DEBUG_SHOW_SAMPLE_COUNT
    ++sampleCount.z;
    #endif // DEBUG_SHOW_SAMPLE_COUNT
  }
  #endif // SHAPE_DETAIL

  // Apply the density profiles.
  density = saturate(density * densityScales * getLayerDensity(weather.heightFraction));

  MediaSample media;
  float densitySum = density.x + density.y + density.z + density.w;
  media.weight = density / densitySum;
  media.scattering = densitySum * scatteringCoefficient;
  media.extinction = densitySum * absorptionCoefficient + media.scattering;
  return media;
}

MediaSample sampleMedia(
  const WeatherSample weather,
  const vec3 position,
  const vec2 uv,
  const float mipLevel,
  const float jitter
) {
  ivec3 sampleCount;
  return sampleMedia(weather, position, uv, mipLevel, jitter, sampleCount);
}
`,jT=`precision highp float;
precision highp sampler3D;

#include "atmosphere/bruneton/definitions"

uniform AtmosphereParameters ATMOSPHERE;
uniform vec3 SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
uniform vec3 SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;

uniform sampler2D transmittance_texture;
uniform sampler3D scattering_texture;
uniform sampler2D irradiance_texture;
uniform sampler3D single_mie_scattering_texture;
uniform sampler3D higher_order_scattering_texture;

#include "atmosphere/bruneton/common"
#include "atmosphere/bruneton/runtime"

#include "types"

uniform mat4 inverseProjectionMatrix;
uniform mat4 inverseViewMatrix;
uniform vec3 cameraPosition;
uniform mat4 worldToECEFMatrix;
uniform vec3 altitudeCorrection;

// Atmosphere
uniform float bottomRadius;
uniform vec3 sunDirection;

// Cloud layers
uniform float minHeight;
uniform float maxHeight;

layout(location = 0) in vec3 position;

out vec2 vUv;
out vec3 vCameraPosition;
out vec3 vCameraDirection; // Direction to the center of screen
out vec3 vRayDirection; // Direction to the texel
out vec3 vViewPosition;

out GroundIrradiance vGroundIrradiance;
out CloudsIrradiance vCloudsIrradiance;

void sampleSunSkyIrradiance(const vec3 positionECEF) {
  vGroundIrradiance.sun = GetSunAndSkyScalarIrradiance(
    positionECEF * METER_TO_LENGTH_UNIT,
    sunDirection,
    vGroundIrradiance.sky
  );

  vec3 surfaceNormal = normalize(positionECEF);
  vec2 radii = (bottomRadius + vec2(minHeight, maxHeight)) * METER_TO_LENGTH_UNIT;
  vCloudsIrradiance.minSun = GetSunAndSkyScalarIrradiance(
    surfaceNormal * radii.x,
    sunDirection,
    vCloudsIrradiance.minSky
  );
  vCloudsIrradiance.maxSun = GetSunAndSkyScalarIrradiance(
    surfaceNormal * radii.y,
    sunDirection,
    vCloudsIrradiance.maxSky
  );
}

void main() {
  vUv = position.xy * 0.5 + 0.5;

  vec3 viewPosition = (inverseProjectionMatrix * vec4(position, 1.0)).xyz;
  vec3 worldDirection = (inverseViewMatrix * vec4(viewPosition.xyz, 0.0)).xyz;
  vec3 cameraDirection = normalize((inverseViewMatrix * vec4(0.0, 0.0, -1.0, 0.0)).xyz);
  vCameraPosition = (worldToECEFMatrix * vec4(cameraPosition, 1.0)).xyz;
  vCameraDirection = (worldToECEFMatrix * vec4(cameraDirection, 0.0)).xyz;
  vRayDirection = (worldToECEFMatrix * vec4(worldDirection, 0.0)).xyz;
  vViewPosition = viewPosition;

  sampleSunSkyIrradiance(vCameraPosition + altitudeCorrection);

  gl_Position = vec4(position.xy, 1.0, 1.0);
}
`,_p=`uniform vec2 resolution;
uniform int frame;
uniform sampler3D stbnTexture;

// Atmosphere
uniform float bottomRadius;
uniform mat4 worldToECEFMatrix;
uniform mat4 ecefToWorldMatrix;
uniform vec3 altitudeCorrection;
uniform vec3 sunDirection;

// Participating medium
uniform float scatteringCoefficient;
uniform float absorptionCoefficient;

// Primary raymarch
uniform float minDensity;
uniform float minExtinction;
uniform float minTransmittance;

// Shape and weather
uniform sampler2D localWeatherTexture;
uniform vec2 localWeatherRepeat;
uniform vec2 localWeatherOffset;
uniform float coverage;
uniform sampler3D shapeTexture;
uniform vec3 shapeRepeat;
uniform vec3 shapeOffset;

#ifdef SHAPE_DETAIL
uniform sampler3D shapeDetailTexture;
uniform vec3 shapeDetailRepeat;
uniform vec3 shapeDetailOffset;
#endif // SHAPE_DETAIL

#ifdef TURBULENCE
uniform sampler2D turbulenceTexture;
uniform vec2 turbulenceRepeat;
uniform float turbulenceDisplacement;
#endif // TURBULENCE

// Haze
#ifdef HAZE
uniform float hazeDensityScale;
uniform float hazeExponent;
uniform float hazeScatteringCoefficient;
uniform float hazeAbsorptionCoefficient;
#endif // HAZE

// Cloud layers
uniform vec4 minLayerHeights;
uniform vec4 maxLayerHeights;
uniform vec3 minIntervalHeights;
uniform vec3 maxIntervalHeights;
uniform vec4 densityScales;
uniform vec4 shapeAmounts;
uniform vec4 shapeDetailAmounts;
uniform vec4 weatherExponents;
uniform vec4 shapeAlteringBiases;
uniform vec4 coverageFilterWidths;
uniform float minHeight;
uniform float maxHeight;
uniform float shadowTopHeight;
uniform float shadowBottomHeight;
uniform vec4 shadowLayerMask;
uniform CloudDensityProfile densityProfile;
`,Mc=`struct GroundIrradiance {
  vec3 sun;
  vec3 sky;
};

struct CloudsIrradiance {
  vec3 minSun;
  vec3 minSky;
  vec3 maxSun;
  vec3 maxSky;
};

struct CloudDensityProfile {
  vec4 expTerms;
  vec4 exponents;
  vec4 linearTerms;
  vec4 constantTerms;
};
`;var ZT=Object.defineProperty,Tn=(n,e,t,i)=>{for(var r=void 0,a=n.length-1,s;a>=0;a--)(s=n[a])&&(r=s(e,t,r)||r);return r&&ZT(e,t,r),r};const KT=new P,JT=new qc;class xn extends is{constructor({parameterUniforms:e,layerUniforms:t,atmosphereUniforms:i},r=Mo.DEFAULT){super({name:"CloudsMaterial",glslVersion:Vi,vertexShader:Ri(jT,{atmosphere:{bruneton:{common:Md,definitions:bd,runtime:Td}},types:Mc}),fragmentShader:ns(Ri($T,{core:{depth:ap,math:iu,turbo:op,generators:Jw,raySphereIntersection:yo,cascadedShadowMaps:rp,interleavedGradientNoise:sp,vogelDisk:lp},atmosphere:{bruneton:{common:Md,definitions:bd,runtime:Td}},types:Mc,parameters:_p,clouds:vp})),uniforms:{...e,...t,...i,depthBuffer:new U(null),viewMatrix:new U(new Ue),inverseProjectionMatrix:new U(new Ue),inverseViewMatrix:new U(new Ue),reprojectionMatrix:new U(new Ue),viewReprojectionMatrix:new U(new Ue),resolution:new U(new Ee),cameraNear:new U(0),cameraFar:new U(0),cameraHeight:new U(0),frame:new U(0),temporalJitter:new U(new Ee),targetUvScale:new U(new Ee),mipLevelScale:new U(1),stbnTexture:new U(null),skyLightScale:new U(1),groundBounceScale:new U(1),powderScale:new U(.8),powderExponent:new U(150),maxIterationCount:new U(Xe.clouds.maxIterationCount),minStepSize:new U(Xe.clouds.minStepSize),maxStepSize:new U(Xe.clouds.maxStepSize),maxRayDistance:new U(Xe.clouds.maxRayDistance),perspectiveStepScale:new U(Xe.clouds.perspectiveStepScale),minDensity:new U(Xe.clouds.minDensity),minExtinction:new U(Xe.clouds.minExtinction),minTransmittance:new U(Xe.clouds.minTransmittance),maxIterationCountToSun:new U(Xe.clouds.maxIterationCountToSun),maxIterationCountToGround:new U(Xe.clouds.maxIterationCountToGround),minSecondaryStepSize:new U(Xe.clouds.minSecondaryStepSize),secondaryStepScale:new U(Xe.clouds.secondaryStepScale),shadowBuffer:new U(null),shadowTexelSize:new U(new Ee),shadowIntervals:new U(Array.from({length:4},()=>new Ee)),shadowMatrices:new U(Array.from({length:4},()=>new Ue)),shadowFar:new U(0),maxShadowFilterRadius:new U(6),shadowLayerMask:new U(new lt().setScalar(1)),maxShadowLengthIterationCount:new U(Xe.clouds.maxShadowLengthIterationCount),minShadowLengthStepSize:new U(Xe.clouds.minShadowLengthStepSize),maxShadowLengthRayDistance:new U(Xe.clouds.maxShadowLengthRayDistance),hazeDensityScale:new U(3e-5),hazeExponent:new U(.001),hazeScatteringCoefficient:new U(.9),hazeAbsorptionCoefficient:new U(.5)}},r),this.temporalUpscale=!0,this.depthPacking=0,this.localWeatherChannels="rgba",this.shapeDetail=Xe.shapeDetail,this.turbulence=Xe.turbulence,this.shadowLength=Xe.lightShafts,this.haze=Xe.haze,this.multiScatteringOctaves=Xe.clouds.multiScatteringOctaves,this.accurateSunSkyLight=Xe.clouds.accurateSunSkyLight,this.accuratePhaseFunction=Xe.clouds.accuratePhaseFunction,this.shadowCascadeCount=Xe.shadow.cascadeCount,this.shadowSampleCount=8,this.scatterAnisotropy1=.7,this.scatterAnisotropy2=-.2,this.scatterAnisotropyMix=.5}onBeforeRender(e,t,i,r,a,s){const o=this.defines.USE_LOGARITHMIC_DEPTH_BUFFER!=null,l=e.capabilities.logarithmicDepthBuffer;l!==o&&(l?this.defines.USE_LOGARITHMIC_DEPTH_BUFFER="1":delete this.defines.USE_LOGARITHMIC_DEPTH_BUFFER);const c=this.defines.POWDER!=null,h=this.uniforms.powderScale.value>0;h!==c&&(h?this.defines.POWDER="1":delete this.defines.POWDER,this.needsUpdate=!0);const d=this.defines.GROUND_BOUNCE!=null;(this.uniforms.groundBounceScale.value>0&&this.uniforms.maxIterationCountToGround.value>0)!==d&&(h?this.defines.GROUND_BOUNCE="1":delete this.defines.GROUND_BOUNCE,this.needsUpdate=!0)}copyCameraSettings(e){e.isPerspectiveCamera===!0?this.defines.PERSPECTIVE_CAMERA!=="1"&&(this.defines.PERSPECTIVE_CAMERA="1",this.needsUpdate=!0):this.defines.PERSPECTIVE_CAMERA!=null&&(delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0);const t=this.uniforms;t.viewMatrix.value.copy(e.matrixWorldInverse),t.inverseViewMatrix.value.copy(e.matrixWorld);const i=this.previousProjectionMatrix??e.projectionMatrix,r=this.previousViewMatrix??e.matrixWorldInverse,a=t.inverseProjectionMatrix.value,s=t.inverseViewMatrix.value,o=t.reprojectionMatrix.value,l=t.viewReprojectionMatrix.value;if(this.temporalUpscale){const d=t.frame.value%16,f=t.resolution.value,g=gp[d],_=(g.x-.5)/f.x*4,S=(g.y-.5)/f.y*4;t.temporalJitter.value.set(_,S),t.mipLevelScale.value=.25,a.copy(e.projectionMatrix),a.elements[8]+=_*2,a.elements[9]+=S*2,a.invert(),o.copy(i),o.elements[8]+=_*2,o.elements[9]+=S*2,o.multiply(r),l.copy(o).multiply(s)}else t.temporalJitter.value.setScalar(0),t.mipLevelScale.value=1,a.copy(e.projectionMatrixInverse),o.copy(i).multiply(r),l.copy(o).multiply(s);t.cameraNear.value=e.near,t.cameraFar.value=e.far;const c=e.getWorldPosition(t.cameraPosition.value),h=KT.copy(c).applyMatrix4(t.worldToECEFMatrix.value);try{t.cameraHeight.value=JT.setFromECEF(h).height}catch{}}copyReprojectionMatrix(e){this.previousProjectionMatrix??=new Ue,this.previousViewMatrix??=new Ue,this.previousProjectionMatrix.copy(e.projectionMatrix),this.previousViewMatrix.copy(e.matrixWorldInverse)}setSize(e,t,i,r){this.uniforms.resolution.value.set(e,t),i!=null&&r!=null?this.uniforms.targetUvScale.value.set(e/i,t/r):this.uniforms.targetUvScale.value.setScalar(1),this.previousProjectionMatrix=void 0,this.previousViewMatrix=void 0}setShadowSize(e,t){this.uniforms.shadowTexelSize.value.set(1/e,1/t)}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(e){this.uniforms.depthBuffer.value=e}}Tn([mr("DEPTH_PACKING")],xn.prototype,"depthPacking");Tn([ip("LOCAL_WEATHER_CHANNELS",{validate:n=>/^[rgba]{4}$/.test(n)})],xn.prototype,"localWeatherChannels");Tn([dt("SHAPE_DETAIL")],xn.prototype,"shapeDetail");Tn([dt("TURBULENCE")],xn.prototype,"turbulence");Tn([dt("SHADOW_LENGTH")],xn.prototype,"shadowLength");Tn([dt("HAZE")],xn.prototype,"haze");Tn([mr("MULTI_SCATTERING_OCTAVES",{min:1,max:12})],xn.prototype,"multiScatteringOctaves");Tn([dt("ACCURATE_SUN_SKY_LIGHT")],xn.prototype,"accurateSunSkyLight");Tn([dt("ACCURATE_PHASE_FUNCTION")],xn.prototype,"accuratePhaseFunction");Tn([mr("SHADOW_CASCADE_COUNT",{min:1,max:4})],xn.prototype,"shadowCascadeCount");Tn([mr("SHADOW_SAMPLE_COUNT",{min:1,max:16})],xn.prototype,"shadowSampleCount");Tn([nu("SCATTER_ANISOTROPY_1")],xn.prototype,"scatterAnisotropy1");Tn([nu("SCATTER_ANISOTROPY_2")],xn.prototype,"scatterAnisotropy2");Tn([nu("SCATTER_ANISOTROPY_MIX")],xn.prototype,"scatterAnisotropyMix");const QT=`// Taken from https://gist.github.com/TheRealMJP/c83b8c0f46b63f3a88a5986f4fa982b1
// TODO: Use 5-taps version: https://www.shadertoy.com/view/MtVGWz
// Or even 4 taps (requires preprocessing in the input buffer):
// https://www.shadertoy.com/view/4tyGDD

/**
 * MIT License
 *
 * Copyright (c) 2019 MJP
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

vec4 textureCatmullRom(sampler2D tex, vec2 uv) {
  vec2 texSize = vec2(textureSize(tex, 0));

  // We're going to sample a a 4x4 grid of texels surrounding the target UV
  // coordinate. We'll do this by rounding down the sample location to get the
  // exact center of our "starting" texel. The starting texel will be at
  // location [1, 1] in the grid, where [0, 0] is the top left corner.
  vec2 samplePos = uv * texSize;
  vec2 texPos1 = floor(samplePos - 0.5) + 0.5;

  // Compute the fractional offset from our starting texel to our original
  // sample location, which we'll feed into the Catmull-Rom spline function to
  // get our filter weights.
  vec2 f = samplePos - texPos1;

  // Compute the Catmull-Rom weights using the fractional offset that we
  // calculated earlier. These equations are pre-expanded based on our knowledge
  // of where the texels will be located, which lets us avoid having to evaluate
  // a piece-wise function.
  vec2 w0 = f * (-0.5 + f * (1.0 - 0.5 * f));
  vec2 w1 = 1.0 + f * f * (-2.5 + 1.5 * f);
  vec2 w2 = f * (0.5 + f * (2.0 - 1.5 * f));
  vec2 w3 = f * f * (-0.5 + 0.5 * f);

  // Work out weighting factors and sampling offsets that will let us use
  // bilinear filtering to simultaneously evaluate the middle 2 samples from the
  // 4x4 grid.
  vec2 w12 = w1 + w2;
  vec2 offset12 = w2 / (w1 + w2);

  // Compute the final UV coordinates we'll use for sampling the texture
  vec2 texPos0 = texPos1 - 1.0;
  vec2 texPos3 = texPos1 + 2.0;
  vec2 texPos12 = texPos1 + offset12;

  texPos0 /= texSize;
  texPos3 /= texSize;
  texPos12 /= texSize;

  vec4 result = vec4(0.0);
  result += texture(tex, vec2(texPos0.x, texPos0.y)) * w0.x * w0.y;
  result += texture(tex, vec2(texPos12.x, texPos0.y)) * w12.x * w0.y;
  result += texture(tex, vec2(texPos3.x, texPos0.y)) * w3.x * w0.y;

  result += texture(tex, vec2(texPos0.x, texPos12.y)) * w0.x * w12.y;
  result += texture(tex, vec2(texPos12.x, texPos12.y)) * w12.x * w12.y;
  result += texture(tex, vec2(texPos3.x, texPos12.y)) * w3.x * w12.y;

  result += texture(tex, vec2(texPos0.x, texPos3.y)) * w0.x * w3.y;
  result += texture(tex, vec2(texPos12.x, texPos3.y)) * w12.x * w3.y;
  result += texture(tex, vec2(texPos3.x, texPos3.y)) * w3.x * w3.y;

  return result;
}

vec4 textureCatmullRom(sampler2DArray tex, vec3 uv) {
  vec2 texSize = vec2(textureSize(tex, 0));
  vec2 samplePos = uv.xy * texSize;
  vec2 texPos1 = floor(samplePos - 0.5) + 0.5;
  vec2 f = samplePos - texPos1;
  vec2 w0 = f * (-0.5 + f * (1.0 - 0.5 * f));
  vec2 w1 = 1.0 + f * f * (-2.5 + 1.5 * f);
  vec2 w2 = f * (0.5 + f * (2.0 - 1.5 * f));
  vec2 w3 = f * f * (-0.5 + 0.5 * f);
  vec2 w12 = w1 + w2;
  vec2 offset12 = w2 / (w1 + w2);
  vec2 texPos0 = texPos1 - 1.0;
  vec2 texPos3 = texPos1 + 2.0;
  vec2 texPos12 = texPos1 + offset12;
  texPos0 /= texSize;
  texPos3 /= texSize;
  texPos12 /= texSize;
  vec4 result = vec4(0.0);
  result += texture(tex, vec3(texPos0.x, texPos0.y, uv.z)) * w0.x * w0.y;
  result += texture(tex, vec3(texPos12.x, texPos0.y, uv.z)) * w12.x * w0.y;
  result += texture(tex, vec3(texPos3.x, texPos0.y, uv.z)) * w3.x * w0.y;
  result += texture(tex, vec3(texPos0.x, texPos12.y, uv.z)) * w0.x * w12.y;
  result += texture(tex, vec3(texPos12.x, texPos12.y, uv.z)) * w12.x * w12.y;
  result += texture(tex, vec3(texPos3.x, texPos12.y, uv.z)) * w3.x * w12.y;
  result += texture(tex, vec3(texPos0.x, texPos3.y, uv.z)) * w0.x * w3.y;
  result += texture(tex, vec3(texPos12.x, texPos3.y, uv.z)) * w12.x * w3.y;
  result += texture(tex, vec3(texPos3.x, texPos3.y, uv.z)) * w3.x * w3.y;
  return result;
}
`,eM=`precision highp float;
precision highp sampler2DArray;

#include "core/turbo"
#include "catmullRomSampling"
#include "varianceClipping"

uniform sampler2D colorBuffer;
uniform sampler2D depthVelocityBuffer;
uniform sampler2D colorHistoryBuffer;

#ifdef SHADOW_LENGTH
uniform sampler2D shadowLengthBuffer;
uniform sampler2D shadowLengthHistoryBuffer;
#endif // SHADOW_LENGTH

uniform vec2 texelSize;
uniform int frame;
uniform float varianceGamma;
uniform float temporalAlpha;
uniform vec2 jitterOffset;

in vec2 vUv;

layout(location = 0) out vec4 outputColor;
#ifdef SHADOW_LENGTH
layout(location = 1) out float outputShadowLength;
#endif // SHADOW_LENGTH

const ivec2 neighborOffsets[9] = ivec2[9](
  ivec2(-1, -1),
  ivec2(-1, 0),
  ivec2(-1, 1),
  ivec2(0, -1),
  ivec2(0, 0),
  ivec2(0, 1),
  ivec2(1, -1),
  ivec2(1, 0),
  ivec2(1, 1)
);

const ivec4[4] bayerIndices = ivec4[4](
  ivec4(0, 12, 3, 15),
  ivec4(8, 4, 11, 7),
  ivec4(2, 14, 1, 13),
  ivec4(10, 6, 9, 5)
);

vec4 getClosestFragment(const ivec2 coord) {
  vec4 result = vec4(1e7, 0.0, 0.0, 0.0);
  vec4 neighbor;
  #pragma unroll_loop_start
  for (int i = 0; i < 9; ++i) {
    neighbor = texelFetchOffset(depthVelocityBuffer, coord, 0, neighborOffsets[i]);
    if (neighbor.r < result.r) {
      result = neighbor;
    }
  }
  #pragma unroll_loop_end
  return result;
}

void temporalUpscale(
  const ivec2 coord,
  const ivec2 lowResCoord,
  const bool currentFrame,
  out vec4 outputColor,
  out float outputShadowLength
) {
  vec4 currentColor = texelFetch(colorBuffer, lowResCoord, 0);
  #ifdef SHADOW_LENGTH
  vec4 currentShadowLength = vec4(texelFetch(shadowLengthBuffer, lowResCoord, 0).rgb, 1.0);
  #endif // SHADOW_LENGTH

  if (currentFrame) {
    // Use the texel just rendered without any accumulation.
    outputColor = currentColor;
    #ifdef SHADOW_LENGTH
    outputShadowLength = currentShadowLength.r;
    #endif // SHADOW_LENGTH
    return;
  }

  vec4 depthVelocity = getClosestFragment(lowResCoord);
  vec2 velocity = depthVelocity.gb;
  vec2 prevUv = vUv - velocity;
  if (prevUv.x < 0.0 || prevUv.x > 1.0 || prevUv.y < 0.0 || prevUv.y > 1.0) {
    outputColor = currentColor;
    #ifdef SHADOW_LENGTH
    outputShadowLength = currentShadowLength.r;
    #endif // SHADOW_LENGTH
    return; // Rejection
  }

  // Variance clipping with a large variance gamma seems to work fine for
  // upsampling. This increases ghosting, of course, but it's hard to notice on
  // clouds.
  // vec4 historyColor = textureCatmullRom(colorHistoryBuffer, prevUv);
  vec4 historyColor = texture(colorHistoryBuffer, prevUv);
  vec4 clippedColor = varianceClipping(colorBuffer, vUv, currentColor, historyColor, varianceGamma);
  outputColor = clippedColor;

  #ifdef SHADOW_LENGTH
  // Sampling the shadow length history using scene depth doesn't make much
  // sense, but it's too hard to derive it properly. At least this approach
  // resolves the edges of scene objects.
  // vec4 historyShadowLength = vec4(textureCatmullRom(shadowLengthHistoryBuffer, prevUv).rgb, 1.0);
  vec4 historyShadowLength = vec4(texture(shadowLengthHistoryBuffer, prevUv).rgb, 1.0);
  vec4 clippedShadowLength = varianceClipping(
    shadowLengthBuffer,
    vUv,
    currentShadowLength,
    historyShadowLength,
    varianceGamma
  );
  outputShadowLength = clippedShadowLength.r;
  #endif // SHADOW_LENGTH
}

void temporalAntialiasing(const ivec2 coord, out vec4 outputColor, out float outputShadowLength) {
  vec4 currentColor = texelFetch(colorBuffer, coord, 0);
  #ifdef SHADOW_LENGTH
  vec4 currentShadowLength = vec4(texelFetch(shadowLengthBuffer, coord, 0).rgb, 1.0);
  #endif // SHADOW_LENGTH

  vec4 depthVelocity = getClosestFragment(coord);
  vec2 velocity = depthVelocity.gb;

  vec2 prevUv = vUv - velocity;
  if (prevUv.x < 0.0 || prevUv.x > 1.0 || prevUv.y < 0.0 || prevUv.y > 1.0) {
    outputColor = currentColor;
    #ifdef SHADOW_LENGTH
    outputShadowLength = currentShadowLength.r;
    #endif // SHADOW_LENGTH
    return; // Rejection
  }

  vec4 historyColor = texture(colorHistoryBuffer, prevUv);
  vec4 clippedColor = varianceClipping(colorBuffer, coord, currentColor, historyColor);
  outputColor = mix(clippedColor, currentColor, temporalAlpha);

  #ifdef SHADOW_LENGTH
  vec4 historyShadowLength = vec4(texture(shadowLengthHistoryBuffer, prevUv).rgb, 1.0);
  vec4 clippedShadowLength = varianceClipping(
    shadowLengthBuffer,
    coord,
    currentShadowLength,
    historyShadowLength
  );
  outputShadowLength = mix(clippedShadowLength.r, currentShadowLength.r, temporalAlpha);
  #endif // SHADOW_LENGTH
}

void main() {
  ivec2 coord = ivec2(gl_FragCoord.xy);

  #if !defined(SHADOW_LENGTH)
  float outputShadowLength;
  #endif // !defined(SHADOW_LENGTH)

  #ifdef TEMPORAL_UPSCALE
  ivec2 lowResCoord = coord / 4;
  int bayerValue = bayerIndices[coord.x % 4][coord.y % 4];
  bool currentFrame = bayerValue == frame % 16;
  temporalUpscale(coord, lowResCoord, currentFrame, outputColor, outputShadowLength);
  #else // TEMPORAL_UPSCALE
  temporalAntialiasing(coord, outputColor, outputShadowLength);
  #endif // TEMPORAL_UPSCALE

  #if defined(SHADOW_LENGTH) && defined(DEBUG_SHOW_SHADOW_LENGTH)
  outputColor = vec4(turbo(outputShadowLength * 0.05), 1.0);
  #endif // defined(SHADOW_LENGTH) && defined(DEBUG_SHOW_SHADOW_LENGTH)

  #ifdef DEBUG_SHOW_VELOCITY
  outputColor.rgb = outputColor.rgb + vec3(abs(texture(depthVelocityBuffer, vUv).gb) * 10.0, 0.0);
  #endif // DEBUG_SHOW_VELOCITY
}
`,tM=`precision highp float;

layout(location = 0) in vec3 position;

out vec2 vUv;

void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 1.0, 1.0);
}
`,Sp=`#ifdef VARIANCE_9_SAMPLES
#define VARIANCE_OFFSET_COUNT 8
const ivec2 varianceOffsets[8] = ivec2[8](
  ivec2(-1, -1),
  ivec2(-1, 1),
  ivec2(1, -1),
  ivec2(1, 1),
  ivec2(1, 0),
  ivec2(0, -1),
  ivec2(0, 1),
  ivec2(-1, 0)
);
#else // VARIANCE_9_SAMPLES
#define VARIANCE_OFFSET_COUNT 4
const ivec2 varianceOffsets[4] = ivec2[4](ivec2(1, 0), ivec2(0, -1), ivec2(0, 1), ivec2(-1, 0));
#endif // VARIANCE_9_SAMPLES

// Reference: https://github.com/playdeadgames/temporal
vec4 clipAABB(const vec4 current, const vec4 history, const vec4 minColor, const vec4 maxColor) {
  vec3 pClip = 0.5 * (maxColor.rgb + minColor.rgb);
  vec3 eClip = 0.5 * (maxColor.rgb - minColor.rgb) + 1e-7;
  vec4 vClip = history - vec4(pClip, current.a);
  vec3 vUnit = vClip.xyz / eClip;
  vec3 aUnit = abs(vUnit);
  float maUnit = max(aUnit.x, max(aUnit.y, aUnit.z));
  if (maUnit > 1.0) {
    return vec4(pClip, current.a) + vClip / maUnit;
  }
  return history;
}

#ifdef VARIANCE_SAMPLER_ARRAY
#define VARIANCE_SAMPLER sampler2DArray
#define VARIANCE_SAMPLER_COORD ivec3
#else // VARIANCE_SAMPLER_ARRAY
#define VARIANCE_SAMPLER sampler2D
#define VARIANCE_SAMPLER_COORD ivec2
#endif // VARIANCE_SAMPLER_ARRAY

// Variance clipping
// Reference: https://developer.download.nvidia.com/gameworks/events/GDC2016/msalvi_temporal_supersampling.pdf
vec4 varianceClipping(
  const VARIANCE_SAMPLER inputBuffer,
  const VARIANCE_SAMPLER_COORD coord,
  const vec4 current,
  const vec4 history,
  const float gamma
) {
  vec4 moment1 = current;
  vec4 moment2 = current * current;
  vec4 neighbor;
  #pragma unroll_loop_start
  for (int i = 0; i < 8; ++i) {
    #if UNROLLED_LOOP_INDEX < VARIANCE_OFFSET_COUNT
    neighbor = texelFetchOffset(inputBuffer, coord, 0, varianceOffsets[i]);
    moment1 += neighbor;
    moment2 += neighbor * neighbor;
    #endif // UNROLLED_LOOP_INDEX < VARIANCE_OFFSET_COUNT
  }
  #pragma unroll_loop_end

  const float N = float(VARIANCE_OFFSET_COUNT + 1);
  vec4 mean = moment1 / N;
  vec4 varianceGamma = sqrt(max(moment2 / N - mean * mean, 0.0)) * gamma;
  vec4 minColor = mean - varianceGamma;
  vec4 maxColor = mean + varianceGamma;
  return clipAABB(clamp(mean, minColor, maxColor), history, minColor, maxColor);
}

vec4 varianceClipping(
  const VARIANCE_SAMPLER inputBuffer,
  const VARIANCE_SAMPLER_COORD coord,
  const vec4 current,
  const vec4 history
) {
  return varianceClipping(inputBuffer, coord, current, history, 1.0);
}

vec4 varianceClipping(
  const sampler2D inputBuffer,
  const vec2 coord,
  const vec4 current,
  const vec4 history,
  const float gamma
) {
  vec4 moment1 = current;
  vec4 moment2 = current * current;
  vec4 neighbor;
  #pragma unroll_loop_start
  for (int i = 0; i < 8; ++i) {
    #if UNROLLED_LOOP_INDEX < VARIANCE_OFFSET_COUNT
    neighbor = textureOffset(inputBuffer, coord, varianceOffsets[i]);
    moment1 += neighbor;
    moment2 += neighbor * neighbor;
    #endif // UNROLLED_LOOP_INDEX < VARIANCE_OFFSET_COUNT
  }
  #pragma unroll_loop_end

  const float N = float(VARIANCE_OFFSET_COUNT + 1);
  vec4 mean = moment1 / N;
  vec4 varianceGamma = sqrt(max(moment2 / N - mean * mean, 0.0)) * gamma;
  vec4 minColor = mean - varianceGamma;
  vec4 maxColor = mean + varianceGamma;
  return clipAABB(clamp(mean, minColor, maxColor), history, minColor, maxColor);
}

vec4 varianceClipping(
  const sampler2D inputBuffer,
  const vec2 coord,
  const vec4 current,
  const vec4 history
) {
  return varianceClipping(inputBuffer, coord, current, history, 1.0);
}
`;var nM=Object.defineProperty,xp=(n,e,t,i)=>{for(var r=void 0,a=n.length-1,s;a>=0;a--)(s=n[a])&&(r=s(e,t,r)||r);return r&&nM(e,t,r),r};class mu extends mo{constructor({colorBuffer:e=null,depthVelocityBuffer:t=null,shadowLengthBuffer:i=null,colorHistoryBuffer:r=null,shadowLengthHistoryBuffer:a=null}={}){super({name:"CloudsResolveMaterial",glslVersion:Vi,vertexShader:tM,fragmentShader:ns(Ri(eM,{core:{turbo:op},catmullRomSampling:QT,varianceClipping:Sp})),uniforms:{colorBuffer:new U(e),depthVelocityBuffer:new U(t),shadowLengthBuffer:new U(i),colorHistoryBuffer:new U(r),shadowLengthHistoryBuffer:new U(a),texelSize:new U(new Ee),frame:new U(0),jitterOffset:new U(new Ee),varianceGamma:new U(2),temporalAlpha:new U(.1)}}),this.temporalUpscale=!0,this.shadowLength=!0}setSize(e,t){this.uniforms.texelSize.value.set(1/e,1/t)}onBeforeRender(e,t,i,r,a,s){const o=this.uniforms.frame.value%16,l=gp[o],c=(l.x-.5)*4,h=(l.y-.5)*4;this.uniforms.jitterOffset.value.set(c,h)}}xp([dt("TEMPORAL_UPSCALE")],mu.prototype,"temporalUpscale");xp([dt("SHADOW_LENGTH")],mu.prototype,"shadowLength");class yp extends Ln{constructor(e,t){super(e),this._mainCamera=new Za;const{shadow:i}=t;this.shadow=i}get mainCamera(){return this._mainCamera}set mainCamera(e){this._mainCamera=e}}function _l(n,{depthVelocity:e,shadowLength:t}){const i=new Ot(1,1,{depthBuffer:!1,type:Bt});i.texture.minFilter=Ze,i.texture.magFilter=Ze,i.texture.name=n;let r;e&&(r=i.texture.clone(),r.isRenderTargetTexture=!0,i.depthVelocity=r,i.textures.push(r));let a;return t&&(a=i.texture.clone(),a.isRenderTargetTexture=!0,a.format=ra,i.shadowLength=a,i.textures.push(a)),Object.assign(i,{depthVelocity:r??null,shadowLength:a??null})}class iM extends yp{constructor({parameterUniforms:e,layerUniforms:t,atmosphereUniforms:i,...r},a){super("CloudsPass",r),this.atmosphere=a,this.width=0,this.height=0,this.currentMaterial=new xn({parameterUniforms:e,layerUniforms:t,atmosphereUniforms:i},a),this.currentPass=new hc(this.currentMaterial),this.resolveMaterial=new mu,this.resolvePass=new hc(this.resolveMaterial),this.initRenderTargets({depthVelocity:!0,shadowLength:Xe.lightShafts})}copyCameraSettings(e){this.currentMaterial.copyCameraSettings(e)}initialize(e,t,i){this.currentPass.initialize(e,t,i),this.resolvePass.initialize(e,t,i)}initRenderTargets(e){this.currentRenderTarget?.dispose(),this.resolveRenderTarget?.dispose(),this.historyRenderTarget?.dispose();const t=_l("Clouds",e),i=_l("Clouds.A",{...e,depthVelocity:!1}),r=_l("Clouds.B",{...e,depthVelocity:!1});this.currentRenderTarget=t,this.resolveRenderTarget=i,this.historyRenderTarget=r;const a=this.resolveMaterial.uniforms;a.colorBuffer.value=t.texture,a.depthVelocityBuffer.value=t.depthVelocity,a.shadowLengthBuffer.value=t.shadowLength,a.colorHistoryBuffer.value=r.texture,a.shadowLengthHistoryBuffer.value=r.shadowLength}copyShadow(){const e=this.shadow,t=this.currentMaterial.uniforms;for(let i=0;i<e.cascadeCount;++i){const r=e.cascades[i];t.shadowIntervals.value[i].copy(r.interval),t.shadowMatrices.value[i].copy(r.matrix)}t.shadowFar.value=e.far}copyReprojection(){this.currentMaterial.copyReprojectionMatrix(this.mainCamera)}swapBuffers(){const e=this.historyRenderTarget,t=this.resolveRenderTarget;this.resolveRenderTarget=e,this.historyRenderTarget=t;const i=this.resolveMaterial.uniforms;i.colorHistoryBuffer.value=t.texture,i.shadowLengthHistoryBuffer.value=t.shadowLength}update(e,t,i){this.currentMaterial.uniforms.frame.value=t,this.resolveMaterial.uniforms.frame.value=t,this.copyCameraSettings(this.mainCamera),this.copyShadow(),this.currentPass.render(e,null,this.currentRenderTarget),this.resolvePass.render(e,null,this.resolveRenderTarget),this.copyReprojection(),this.swapBuffers()}setSize(e,t){if(this.width=e,this.height=t,this.temporalUpscale){const i=Math.ceil(e/4),r=Math.ceil(t/4);this.currentRenderTarget.setSize(i,r),this.currentMaterial.setSize(i*4,r*4,e,t)}else this.currentRenderTarget.setSize(e,t),this.currentMaterial.setSize(e,t);this.resolveRenderTarget.setSize(e,t),this.resolveMaterial.setSize(e,t),this.historyRenderTarget.setSize(e,t)}setShadowSize(e,t,i){this.currentMaterial.shadowCascadeCount=i,this.currentMaterial.setShadowSize(e,t)}setDepthTexture(e,t){this.currentMaterial.depthBuffer=e,this.currentMaterial.depthPacking=t??0}get outputBuffer(){return this.historyRenderTarget.texture}get shadowBuffer(){return this.currentMaterial.uniforms.shadowBuffer.value}set shadowBuffer(e){this.currentMaterial.uniforms.shadowBuffer.value=e}get shadowLengthBuffer(){return this.historyRenderTarget.shadowLength}get temporalUpscale(){return this.currentMaterial.temporalUpscale}set temporalUpscale(e){e!==this.temporalUpscale&&(this.currentMaterial.temporalUpscale=e,this.resolveMaterial.temporalUpscale=e,this.setSize(this.width,this.height))}get lightShafts(){return this.currentMaterial.shadowLength}set lightShafts(e){e!==this.lightShafts&&(this.currentMaterial.shadowLength=e,this.resolveMaterial.shadowLength=e,this.initRenderTargets({depthVelocity:!0,shadowLength:e}),this.setSize(this.width,this.height))}}function rM(n,e){const t=n.properties.get(e.texture).__webglTexture,i=n.getContext();Wi(i instanceof WebGL2RenderingContext),n.setRenderTarget(e);const r=[];if(t!=null)for(let a=0;a<e.depth;++a)i.framebufferTextureLayer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+a,t,0,a),r.push(i.COLOR_ATTACHMENT0+a);i.drawBuffers(r)}class Pd extends hc{render(e,t,i,r,a){const s=this.fullscreenMaterial.uniforms;t!==null&&s?.[this.input]!=null&&(s[this.input].value=t.texture),rM(e,i),e.render(this.scene,this.camera)}}const aM=`precision highp float;
precision highp sampler3D;

#include <common>

#include "core/math"
#include "core/raySphereIntersection"
#include "types"
#include "parameters"
#include "structuredSampling"
#include "clouds"

uniform mat4 inverseShadowMatrices[CASCADE_COUNT];
uniform mat4 reprojectionMatrices[CASCADE_COUNT];

// Primary raymarch
uniform int maxIterationCount;
uniform float minStepSize;
uniform float maxStepSize;
uniform float opticalDepthTailScale;

in vec2 vUv;

layout(location = 0) out vec4 outputColor[CASCADE_COUNT];

// Redundant notation for prettier.
#if CASCADE_COUNT == 1
layout(location = 1) out vec3 outputDepthVelocity[CASCADE_COUNT];
#elif CASCADE_COUNT == 2
layout(location = 2) out vec3 outputDepthVelocity[CASCADE_COUNT];
#elif CASCADE_COUNT == 3
layout(location = 3) out vec3 outputDepthVelocity[CASCADE_COUNT];
#elif CASCADE_COUNT == 4
layout(location = 4) out vec3 outputDepthVelocity[CASCADE_COUNT];
#endif // CASCADE_COUNT

vec4 marchClouds(
  const vec3 rayOrigin,
  const vec3 rayDirection,
  const float maxRayDistance,
  const float jitter,
  const float mipLevel
) {
  // Setup structured volume sampling (SVS).
  // While SVS introduces spatial aliasing, it is indeed temporally stable,
  // which is important for lower-resolution shadow maps where a flickering
  // single pixel can be highly noticeable.
  vec3 normal = getStructureNormal(rayDirection, jitter);
  float rayDistance;
  float stepSize;
  intersectStructuredPlanes(
    normal,
    rayOrigin,
    rayDirection,
    clamp(maxRayDistance / float(maxIterationCount), minStepSize, maxStepSize),
    rayDistance,
    stepSize
  );

  #ifdef TEMPORAL_JITTER
  rayDistance -= stepSize * jitter;
  #endif // TEMPORAL_JITTER

  float extinctionSum = 0.0;
  float maxOpticalDepth = 0.0;
  float maxOpticalDepthTail = 0.0;
  float transmittanceIntegral = 1.0;
  float weightedDistanceSum = 0.0;
  float transmittanceSum = 0.0;

  int sampleCount = 0;
  for (int i = 0; i < maxIterationCount; ++i) {
    if (rayDistance > maxRayDistance) {
      break; // Termination
    }

    vec3 position = rayDistance * rayDirection + rayOrigin;
    float height = length(position) - bottomRadius;

    #if !defined(DEBUG_MARCH_INTERVALS)
    if (insideLayerIntervals(height)) {
      rayDistance += stepSize;
      continue;
    }
    #endif // !defined(DEBUG_MARCH_INTERVALS)

    // Sample rough weather.
    vec2 uv = getGlobeUv(position);
    WeatherSample weather = sampleWeather(uv, height, mipLevel);

    if (any(greaterThan(weather.density, vec4(minDensity)))) {
      // Sample detailed participating media.
      // Note this assumes an homogeneous medium.
      MediaSample media = sampleMedia(weather, position, uv, mipLevel, jitter);
      if (media.extinction > minExtinction) {
        extinctionSum += media.extinction;
        maxOpticalDepth += media.extinction * stepSize;
        transmittanceIntegral *= exp(-media.extinction * stepSize);
        weightedDistanceSum += rayDistance * transmittanceIntegral;
        transmittanceSum += transmittanceIntegral;
        ++sampleCount;
      }
    }

    if (transmittanceIntegral <= minTransmittance) {
      // A large amount of optical depth accumulates in the tail, beyond the
      // point of minimum transmittance. The expected optical depth seems to
      // decrease exponentially with the number of samples taken before reaching
      // the minimum transmittance.
      // See the discussion here: https://x.com/shotamatsuda/status/1886259549931520437
      maxOpticalDepthTail = min(
        opticalDepthTailScale * stepSize * exp(float(1 - sampleCount)),
        stepSize * 0.5 // Excessive optical depth only introduces aliasing.
      );
      break; // Early termination
    }
    rayDistance += stepSize;
  }

  if (sampleCount == 0) {
    return vec4(maxRayDistance, 0.0, 0.0, 0.0);
  }
  float frontDepth = min(weightedDistanceSum / transmittanceSum, maxRayDistance);
  float meanExtinction = extinctionSum / float(sampleCount);
  return vec4(frontDepth, meanExtinction, maxOpticalDepth, maxOpticalDepthTail);
}

void getRayNearFar(
  const vec3 sunPosition,
  const vec3 rayDirection,
  out float rayNear,
  out float rayFar
) {
  vec4 firstIntersections = raySphereFirstIntersection(
    sunPosition,
    rayDirection,
    vec3(0.0),
    bottomRadius + vec4(shadowTopHeight, shadowBottomHeight, 0.0, 0.0)
  );
  rayNear = max(0.0, firstIntersections.x);
  rayFar = firstIntersections.y;
  if (rayFar < 0.0) {
    rayFar = 1e6;
  }
}

void cascade(
  const int cascadeIndex,
  const float mipLevel,
  out vec4 outputColor,
  out vec3 outputDepthVelocity
) {
  vec2 clip = vUv * 2.0 - 1.0;
  vec4 point = inverseShadowMatrices[cascadeIndex] * vec4(clip.xy, -1.0, 1.0);
  point /= point.w;
  vec3 sunPosition = (worldToECEFMatrix * vec4(point.xyz, 1.0)).xyz + altitudeCorrection;

  vec3 rayDirection = normalize(-sunDirection);
  float rayNear;
  float rayFar;
  getRayNearFar(sunPosition, rayDirection, rayNear, rayFar);

  vec3 rayOrigin = rayNear * rayDirection + sunPosition;
  float stbn = getSTBN();
  vec4 color = marchClouds(rayOrigin, rayDirection, rayFar - rayNear, stbn, mipLevel);
  outputColor = color;

  // Velocity for temporal resolution.
  #ifdef TEMPORAL_PASS
  vec3 frontPosition = color.x * rayDirection + rayOrigin;
  vec3 frontPositionWorld = (ecefToWorldMatrix * vec4(frontPosition - altitudeCorrection, 1.0)).xyz;
  vec4 prevClip = reprojectionMatrices[cascadeIndex] * vec4(frontPositionWorld, 1.0);
  prevClip /= prevClip.w;
  vec2 prevUv = prevClip.xy * 0.5 + 0.5;
  vec2 velocity = (vUv - prevUv) * resolution;
  outputDepthVelocity = vec3(color.x, velocity);
  #else // TEMPORAL_PASS
  outputDepthVelocity = vec3(0.0);
  #endif // TEMPORAL_PASS
}

// TODO: Calculate from the main camera frustum perhaps?
const float mipLevels[4] = float[4](0.0, 0.5, 1.0, 2.0);

void main() {
  #pragma unroll_loop_start
  for (int i = 0; i < 4; ++i) {
    #if UNROLLED_LOOP_INDEX < CASCADE_COUNT
    cascade(UNROLLED_LOOP_INDEX, mipLevels[i], outputColor[i], outputDepthVelocity[i]);
    #endif // UNROLLED_LOOP_INDEX < CASCADE_COUNT
  }
  #pragma unroll_loop_end
}
`,sM=`precision highp float;

layout(location = 0) in vec3 position;

out vec2 vUv;

void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 1.0, 1.0);
}
`,oM=`// Implements Structured Volume Sampling in fragment shader:
// https://github.com/huwb/volsample
// Implementation reference:
// https://www.shadertoy.com/view/ttVfDc

void getIcosahedralVertices(const vec3 direction, out vec3 v1, out vec3 v2, out vec3 v3) {
  // Normalization scalers to fit dodecahedron to unit sphere.
  const float a = 0.85065080835204; // phi / sqrt(2 + phi)
  const float b = 0.5257311121191336; // 1 / sqrt(2 + phi)

  // Derive the vertices of icosahedron where triangle intersects the direction.
  // See: https://www.ppsloan.org/publications/AmbientDice.pdf
  const float kT = 0.6180339887498948; // 1 / phi
  const float kT2 = 0.38196601125010515; // 1 / phi^2
  vec3 absD = abs(direction);
  float selector1 = dot(absD, vec3(1.0, kT2, -kT));
  float selector2 = dot(absD, vec3(-kT, 1.0, kT2));
  float selector3 = dot(absD, vec3(kT2, -kT, 1.0));
  v1 = selector1 > 0.0 ? vec3(a, b, 0.0) : vec3(-b, 0.0, a);
  v2 = selector2 > 0.0 ? vec3(0.0, a, b) : vec3(a, -b, 0.0);
  v3 = selector3 > 0.0 ? vec3(b, 0.0, a) : vec3(0.0, a, -b);
  vec3 octantSign = sign(direction);
  v1 *= octantSign;
  v2 *= octantSign;
  v3 *= octantSign;
}

void swapIfBigger(inout vec4 a, inout vec4 b) {
  if (a.w > b.w) {
    vec4 t = a;
    a = b;
    b = t;
  }
}

void sortVertices(inout vec3 a, inout vec3 b, inout vec3 c) {
  const vec3 base = vec3(0.5, 0.5, 1.0);
  vec4 aw = vec4(a, dot(a, base));
  vec4 bw = vec4(b, dot(b, base));
  vec4 cw = vec4(c, dot(c, base));
  swapIfBigger(aw, bw);
  swapIfBigger(bw, cw);
  swapIfBigger(aw, bw);
  a = aw.xyz;
  b = bw.xyz;
  c = cw.xyz;
}

vec3 getPentagonalWeights(const vec3 direction, const vec3 v1, const vec3 v2, const vec3 v3) {
  float d1 = dot(v1, direction);
  float d2 = dot(v2, direction);
  float d3 = dot(v3, direction);
  vec3 w = exp(vec3(d1, d2, d3) * 40.0);
  return w / (w.x + w.y + w.z);
}

vec3 getStructureNormal(
  const vec3 direction,
  const float jitter,
  out vec3 a,
  out vec3 b,
  out vec3 c,
  out vec3 weights
) {
  getIcosahedralVertices(direction, a, b, c);
  sortVertices(a, b, c);
  weights = getPentagonalWeights(direction, a, b, c);
  return jitter < weights.x
    ? a
    : jitter < weights.x + weights.y
      ? b
      : c;
}

vec3 getStructureNormal(const vec3 direction, const float jitter) {
  vec3 a, b, c, weights;
  return getStructureNormal(direction, jitter, a, b, c, weights);
}

// Reference: https://github.com/huwb/volsample/blob/master/src/unity/Assets/Shaders/RayMarchCore.cginc
void intersectStructuredPlanes(
  const vec3 normal,
  const vec3 rayOrigin,
  const vec3 rayDirection,
  const float samplePeriod,
  out float stepOffset,
  out float stepSize
) {
  float NoD = dot(rayDirection, normal);
  stepSize = samplePeriod / abs(NoD);

  // Skips leftover bit to get from rayOrigin to first strata plane.
  stepOffset = -mod(dot(rayOrigin, normal), samplePeriod) / NoD;

  // mod() gives different results depending on if the arg is negative or
  // positive. This line makes it consistent, and ensures the first sample is in
  // front of the viewer.
  if (stepOffset < 0.0) {
    stepOffset += stepSize;
  }
}
`;var lM=Object.defineProperty,da=(n,e,t,i)=>{for(var r=void 0,a=n.length-1,s;a>=0;a--)(s=n[a])&&(r=s(e,t,r)||r);return r&&lM(e,t,r),r};class gr extends mo{constructor({parameterUniforms:e,layerUniforms:t,atmosphereUniforms:i}){super({name:"ShadowMaterial",glslVersion:Vi,vertexShader:sM,fragmentShader:ns(Ri(aM,{core:{math:iu,raySphereIntersection:yo},types:Mc,parameters:_p,structuredSampling:oM,clouds:vp})),uniforms:{...e,...t,...i,inverseShadowMatrices:new U(Array.from({length:4},()=>new Ue)),reprojectionMatrices:new U(Array.from({length:4},()=>new Ue)),resolution:new U(new Ee),frame:new U(0),stbnTexture:new U(null),maxIterationCount:new U(Xe.shadow.maxIterationCount),minStepSize:new U(Xe.shadow.minStepSize),maxStepSize:new U(Xe.shadow.maxStepSize),minDensity:new U(Xe.shadow.minDensity),minExtinction:new U(Xe.shadow.minExtinction),minTransmittance:new U(Xe.shadow.minTransmittance),opticalDepthTailScale:new U(2)},defines:{SHADOW:"1",TEMPORAL_PASS:"1",TEMPORAL_JITTER:"1"}}),this.localWeatherChannels="rgba",this.cascadeCount=Xe.shadow.cascadeCount,this.temporalPass=!0,this.temporalJitter=!0,this.shapeDetail=Xe.shapeDetail,this.turbulence=Xe.turbulence,this.cascadeCount=Xe.shadow.cascadeCount}setSize(e,t){this.uniforms.resolution.value.set(e,t)}}da([ip("LOCAL_WEATHER_CHANNELS",{validate:n=>/^[rgba]{4}$/.test(n)})],gr.prototype,"localWeatherChannels");da([mr("CASCADE_COUNT",{min:1,max:4})],gr.prototype,"cascadeCount");da([dt("TEMPORAL_PASS")],gr.prototype,"temporalPass");da([dt("TEMPORAL_JITTER")],gr.prototype,"temporalJitter");da([dt("SHAPE_DETAIL")],gr.prototype,"shapeDetail");da([dt("TURBULENCE")],gr.prototype,"turbulence");const cM=`precision highp float;
precision highp sampler2DArray;

#define VARIANCE_9_SAMPLES 1
#define VARIANCE_SAMPLER_ARRAY 1

#include "varianceClipping"

uniform sampler2DArray inputBuffer;
uniform sampler2DArray historyBuffer;

uniform vec2 texelSize;
uniform float varianceGamma;
uniform float temporalAlpha;

in vec2 vUv;

layout(location = 0) out vec4 outputColor[CASCADE_COUNT];

const ivec2 neighborOffsets[9] = ivec2[9](
  ivec2(-1, -1),
  ivec2(-1, 0),
  ivec2(-1, 1),
  ivec2(0, -1),
  ivec2(0, 0),
  ivec2(0, 1),
  ivec2(1, -1),
  ivec2(1, 0),
  ivec2(1, 1)
);

vec4 getClosestFragment(const ivec3 coord) {
  vec4 result = vec4(1e7, 0.0, 0.0, 0.0);
  vec4 neighbor;
  #pragma unroll_loop_start
  for (int i = 0; i < 9; ++i) {
    neighbor = texelFetchOffset(
      inputBuffer,
      coord + ivec3(0, 0, CASCADE_COUNT),
      0,
      neighborOffsets[i]
    );
    if (neighbor.r < result.r) {
      result = neighbor;
    }
  }
  #pragma unroll_loop_end
  return result;
}

void cascade(const int cascadeIndex, out vec4 outputColor) {
  ivec3 coord = ivec3(gl_FragCoord.xy, cascadeIndex);
  vec4 current = texelFetch(inputBuffer, coord, 0);

  vec4 depthVelocity = getClosestFragment(coord);
  vec2 velocity = depthVelocity.gb * texelSize;
  vec2 prevUv = vUv - velocity;
  if (prevUv.x < 0.0 || prevUv.x > 1.0 || prevUv.y < 0.0 || prevUv.y > 1.0) {
    outputColor = current;
    return; // Rejection
  }

  vec4 history = texture(historyBuffer, vec3(prevUv, float(cascadeIndex)));
  vec4 clippedHistory = varianceClipping(inputBuffer, coord, current, history, varianceGamma);
  outputColor = mix(clippedHistory, current, temporalAlpha);
}

void main() {
  #pragma unroll_loop_start
  for (int i = 0; i < 4; ++i) {
    #if UNROLLED_LOOP_INDEX < CASCADE_COUNT
    cascade(UNROLLED_LOOP_INDEX, outputColor[i]);
    #endif // UNROLLED_LOOP_INDEX < CASCADE_COUNT
  }
  #pragma unroll_loop_end
}
`,uM=`precision highp float;

layout(location = 0) in vec3 position;

out vec2 vUv;

void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 1.0, 1.0);
}
`;var hM=Object.defineProperty,dM=(n,e,t,i)=>{for(var r=void 0,a=n.length-1,s;a>=0;a--)(s=n[a])&&(r=s(e,t,r)||r);return r&&hM(e,t,r),r};class Ep extends mo{constructor({inputBuffer:e=null,historyBuffer:t=null}={}){super({name:"ShadowResolveMaterial",glslVersion:Vi,vertexShader:uM,fragmentShader:ns(Ri(cM,{varianceClipping:Sp})),uniforms:{inputBuffer:new U(e),historyBuffer:new U(t),texelSize:new U(new Ee),varianceGamma:new U(1),temporalAlpha:new U(.01)},defines:{}}),this.cascadeCount=Xe.shadow.cascadeCount}setSize(e,t){this.uniforms.texelSize.value.set(1/e,1/t)}}dM([mr("CASCADE_COUNT",{min:1,max:4})],Ep.prototype,"cascadeCount");function Sl(n){const e=new zm(1,1,1,{depthBuffer:!1});return e.texture.type=Bt,e.texture.minFilter=Ze,e.texture.magFilter=Ze,e.texture.name=n,e}class fM extends yp{constructor({parameterUniforms:e,layerUniforms:t,atmosphereUniforms:i,...r}){super("ShadowPass",r),this.width=0,this.height=0,this.currentMaterial=new gr({parameterUniforms:e,layerUniforms:t,atmosphereUniforms:i}),this.currentPass=new Pd(this.currentMaterial),this.resolveMaterial=new Ep,this.resolvePass=new Pd(this.resolveMaterial),this.initRenderTargets()}initialize(e,t,i){this.currentPass.initialize(e,t,i),this.resolvePass.initialize(e,t,i)}initRenderTargets(){this.currentRenderTarget?.dispose(),this.resolveRenderTarget?.dispose(),this.historyRenderTarget?.dispose();const e=Sl("Shadow"),t=this.temporalPass?Sl("Shadow.A"):null,i=this.temporalPass?Sl("Shadow.B"):null;this.currentRenderTarget=e,this.resolveRenderTarget=t,this.historyRenderTarget=i;const r=this.resolveMaterial.uniforms;r.inputBuffer.value=e.texture,r.historyBuffer.value=i?.texture??null}copyShadow(){const e=this.shadow,t=this.currentMaterial.uniforms;for(let i=0;i<e.cascadeCount;++i){const r=e.cascades[i];t.inverseShadowMatrices.value[i].copy(r.inverseMatrix)}}copyReprojection(){const e=this.shadow,t=this.currentMaterial.uniforms;for(let i=0;i<e.cascadeCount;++i){const r=e.cascades[i];t.reprojectionMatrices.value[i].copy(r.matrix)}}swapBuffers(){Wi(this.historyRenderTarget!=null),Wi(this.resolveRenderTarget!=null);const e=this.historyRenderTarget,t=this.resolveRenderTarget;this.resolveRenderTarget=e,this.historyRenderTarget=t,this.resolveMaterial.uniforms.historyBuffer.value=t.texture}update(e,t,i){this.currentMaterial.uniforms.frame.value=t,this.copyShadow(),this.currentPass.render(e,null,this.currentRenderTarget),this.temporalPass&&(Wi(this.resolveRenderTarget!=null),this.resolvePass.render(e,null,this.resolveRenderTarget),this.copyReprojection(),this.swapBuffers())}setSize(e,t,i=this.shadow.cascadeCount){this.width=e,this.height=t,this.currentMaterial.cascadeCount=i,this.resolveMaterial.cascadeCount=i,this.currentMaterial.setSize(e,t),this.resolveMaterial.setSize(e,t),this.currentRenderTarget.setSize(e,t,this.temporalPass?i*2:i),this.resolveRenderTarget?.setSize(e,t,i),this.historyRenderTarget?.setSize(e,t,i)}get outputBuffer(){return this.temporalPass?(Wi(this.historyRenderTarget!=null),this.historyRenderTarget.texture):this.currentRenderTarget.texture}get temporalPass(){return this.currentMaterial.temporalPass}set temporalPass(e){e!==this.temporalPass&&(this.currentMaterial.temporalPass=e,this.initRenderTargets(),this.setSize(this.width,this.height))}}function pM(n){return{scatteringCoefficient:new U(1),absorptionCoefficient:new U(0),coverage:new U(.3),localWeatherTexture:new U(n.localWeatherTexture),localWeatherRepeat:new U(n.localWeatherRepeat),localWeatherOffset:new U(n.localWeatherOffset),shapeTexture:new U(n.shapeTexture),shapeRepeat:new U(n.shapeRepeat),shapeOffset:new U(n.shapeOffset),shapeDetailTexture:new U(n.shapeDetailTexture),shapeDetailRepeat:new U(n.shapeDetailRepeat),shapeDetailOffset:new U(n.shapeDetailOffset),turbulenceTexture:new U(n.turbulenceTexture),turbulenceRepeat:new U(n.turbulenceRepeat),turbulenceDisplacement:new U(350)}}function mM(){return{minLayerHeights:new U(new lt),maxLayerHeights:new U(new lt),minIntervalHeights:new U(new P),maxIntervalHeights:new U(new P),densityScales:new U(new lt),shapeAmounts:new U(new lt),shapeDetailAmounts:new U(new lt),weatherExponents:new U(new lt),shapeAlteringBiases:new U(new lt),coverageFilterWidths:new U(new lt),minHeight:new U(0),maxHeight:new U(0),shadowTopHeight:new U(0),shadowBottomHeight:new U(0),shadowLayerMask:new U(new lt),densityProfile:new U({expTerms:new lt,exponents:new lt,linearTerms:new lt,constantTerms:new lt})}}const xl=[0,0,0,0];function gM(n,e){e.packValues("altitude",n.minLayerHeights.value),e.packSums("altitude","height",n.maxLayerHeights.value),e.packIntervalHeights(n.minIntervalHeights.value,n.maxIntervalHeights.value),e.packValues("densityScale",n.densityScales.value),e.packValues("shapeAmount",n.shapeAmounts.value),e.packValues("shapeDetailAmount",n.shapeDetailAmounts.value),e.packValues("weatherExponent",n.weatherExponents.value),e.packValues("shapeAlteringBias",n.shapeAlteringBiases.value),e.packValues("coverageFilterWidth",n.coverageFilterWidths.value);const t=n.densityProfile.value;e.packDensityProfiles("expTerm",t.expTerms),e.packDensityProfiles("exponent",t.exponents),e.packDensityProfiles("linearTerm",t.linearTerms),e.packDensityProfiles("constantTerm",t.constantTerms);let i=1/0,r=0,a=1/0,s=0;xl.fill(0);for(let o=0;o<e.length;++o){const{altitude:l,height:c,shadow:h}=e[o],d=l+c;c>0&&(l<i&&(i=l),h&&l<a&&(a=l),d>r&&(r=d),h&&d>s&&(s=d)),xl[o]=h?1:0}i!==1/0?(n.minHeight.value=i,n.maxHeight.value=r):(Wi(r===0),n.minHeight.value=0),a!==1/0?(n.shadowBottomHeight.value=a,n.shadowTopHeight.value=s):(Wi(s===0),n.shadowBottomHeight.value=0),n.shadowLayerMask.value.fromArray(xl)}function vM(n,e){return{bottomRadius:new U(n.bottomRadius),topRadius:new U(n.topRadius),worldToECEFMatrix:new U(e.worldToECEFMatrix),ecefToWorldMatrix:new U(e.ecefToWorldMatrix),altitudeCorrection:new U(e.altitudeCorrection),sunDirection:new U(e.sunDirection)}}const _M=`uniform sampler2D cloudsBuffer;

void mainImage(const vec4 inputColor, const vec2 uv, out vec4 outputColor) {
  #ifdef SKIP_RENDERING
  outputColor = inputColor;
  #else // SKIP_RENDERING
  vec4 clouds = texture(cloudsBuffer, uv);
  outputColor.rgb = inputColor.rgb * (1.0 - clouds.a) + clouds.rgb;
  outputColor.a = inputColor.a * (1.0 - clouds.a) + clouds.a;
  #endif // SKIP_RENDERING
}
`;var SM=Object.defineProperty,xM=(n,e,t,i)=>{for(var r=void 0,a=n.length-1,s;a>=0;a--)(s=n[a])&&(r=s(e,t,r)||r);return r&&SM(e,t,r),r};const ba=new P,yM=new Ee,EM=new Je,wM=["maxIterationCount","minStepSize","maxStepSize","maxRayDistance","perspectiveStepScale","minDensity","minExtinction","minTransmittance","maxIterationCountToSun","maxIterationCountToGround","minSecondaryStepSize","secondaryStepScale","maxShadowFilterRadius","maxShadowLengthIterationCount","minShadowLengthStepSize","maxShadowLengthRayDistance","hazeDensityScale","hazeExponent","hazeScatteringCoefficient","hazeAbsorptionCoefficient"],TM=["multiScatteringOctaves","accurateSunSkyLight","accuratePhaseFunction"],MM=["maxIterationCount","minStepSize","maxStepSize","minDensity","minExtinction","minTransmittance","opticalDepthTailScale"],bM=["temporalJitter"],AM=["temporalPass"],RM=["cascadeCount","mapSize","maxFar","farScale","splitMode","splitLambda"],pi={type:"change"},CM={resolutionScale:Xe.resolutionScale,width:bi.AUTO_SIZE,height:bi.AUTO_SIZE};class wp extends Yc{constructor(e=new Za,t,i=Mo.DEFAULT){super("CloudsEffect",_M,{attributes:Mi.DEPTH,uniforms:new Map([["cloudsBuffer",new U(null)]])}),this.camera=e,this.atmosphere=i,this.cloudLayers=FT.DEFAULT.clone(),this.correctAltitude=!0,this.localWeatherRepeat=new Ee().setScalar(100),this.localWeatherOffset=new Ee,this.shapeRepeat=new P().setScalar(3e-4),this.shapeOffset=new P,this.shapeDetailRepeat=new P().setScalar(.006),this.shapeDetailOffset=new P,this.turbulenceRepeat=new Ee().setScalar(20),this.worldToECEFMatrix=new Ue,this.ecefToWorldMatrix=new Ue,this.altitudeCorrection=new P,this.sunDirection=new P,this.localWeatherVelocity=new Ee,this.shapeVelocity=new P,this.shapeDetailVelocity=new P,this._atmosphereOverlay=null,this._atmosphereShadow=null,this._atmosphereShadowLength=null,this.events=new ri,this.frame=0,this.shadowCascadeCount=0,this.shadowMapSize=new Ee,this.onResolutionChange=()=>{this.setSize(this.resolution.baseWidth,this.resolution.baseHeight)},this.skipRendering=!0;const{resolutionScale:r,width:a,height:s,resolutionX:o=a,resolutionY:l=s}={...CM,...t};this.shadowMaps=new XT({cascadeCount:Xe.shadow.cascadeCount,mapSize:Xe.shadow.mapSize,splitLambda:.6}),this.parameterUniforms=pM({localWeatherTexture:this.proceduralLocalWeather?.texture??null,localWeatherRepeat:this.localWeatherRepeat,localWeatherOffset:this.localWeatherOffset,shapeTexture:this.proceduralShape?.texture??null,shapeRepeat:this.shapeRepeat,shapeOffset:this.shapeOffset,shapeDetailTexture:this.proceduralShapeDetail?.texture??null,shapeDetailRepeat:this.shapeDetailRepeat,shapeDetailOffset:this.shapeDetailOffset,turbulenceTexture:this.proceduralTurbulence?.texture??null,turbulenceRepeat:this.turbulenceRepeat}),this.layerUniforms=mM(),this.atmosphereUniforms=vM(i,{worldToECEFMatrix:this.worldToECEFMatrix,ecefToWorldMatrix:this.ecefToWorldMatrix,altitudeCorrection:this.altitudeCorrection,sunDirection:this.sunDirection});const c={shadow:this.shadowMaps,parameterUniforms:this.parameterUniforms,layerUniforms:this.layerUniforms,atmosphereUniforms:this.atmosphereUniforms};this.shadowPass=new fM(c),this.shadowPass.mainCamera=e,this.cloudsPass=new iM(c,i),this.cloudsPass.mainCamera=e,this.clouds=fd(pd({},this.cloudsPass.currentMaterial,wM),this.cloudsPass.currentMaterial,TM),this.shadow=fd(pd({},this.shadowPass.currentMaterial,MM),this.shadowPass.currentMaterial,bM,this.shadowPass,AM,this.shadowMaps,RM),this.resolution=new bi(this,o,l,r),this.resolution.addEventListener("change",this.onResolutionChange)}get mainCamera(){return this.camera}set mainCamera(e){this.camera=e,this.shadowPass.mainCamera=e,this.cloudsPass.mainCamera=e}initialize(e,t,i){this.shadowPass.initialize(e,t,i),this.cloudsPass.initialize(e,t,i)}updateSharedUniforms(e){gM(this.layerUniforms,this.cloudLayers);const{parameterUniforms:t}=this;t.localWeatherOffset.value.add(yM.copy(this.localWeatherVelocity).multiplyScalar(e)),t.shapeOffset.value.add(ba.copy(this.shapeVelocity).multiplyScalar(e)),t.shapeDetailOffset.value.add(ba.copy(this.shapeDetailVelocity).multiplyScalar(e));const i=this.worldToECEFMatrix;this.ecefToWorldMatrix.copy(i).invert();const r=this.camera.getWorldPosition(ba).applyMatrix4(this.worldToECEFMatrix),a=this.altitudeCorrection;this.correctAltitude?du(r,this.atmosphere.bottomRadius,this.ellipsoid,a):a.setScalar(0);const s=this.ellipsoid.getSurfaceNormal(r,ba),o=this.sunDirection.dot(s),l=np(1e6,1e3,o),c=EM.setFromMatrix4(i).transpose();this.shadowMaps.update(this.camera,ba.copy(this.sunDirection).applyMatrix3(c),l)}updateWeatherTextureChannels(){const e=this.cloudLayers.localWeatherChannels;this.cloudsPass.currentMaterial.localWeatherChannels=e,this.shadowPass.currentMaterial.localWeatherChannels=e}updateAtmosphereComposition(){const{shadowMaps:e,shadowPass:t,cloudsPass:i}=this,r=t.currentMaterial.uniforms,a=i.currentMaterial.uniforms,s=this._atmosphereOverlay,o=Object.assign(this._atmosphereOverlay??{},{map:i.outputBuffer});s!==o&&(this._atmosphereOverlay=o,pi.target=this,pi.property="atmosphereOverlay",this.events.dispatchEvent(pi));const l=this._atmosphereShadow,c=Object.assign(this._atmosphereShadow??{},{map:t.outputBuffer,mapSize:e.mapSize,cascadeCount:e.cascadeCount,intervals:a.shadowIntervals.value,matrices:a.shadowMatrices.value,inverseMatrices:r.inverseShadowMatrices.value,far:e.far,topHeight:a.shadowTopHeight.value});l!==c&&(this._atmosphereShadow=c,pi.target=this,pi.property="atmosphereShadow",this.events.dispatchEvent(pi));const h=this._atmosphereShadowLength,d=i.shadowLengthBuffer!=null?Object.assign(this._atmosphereShadowLength??{},{map:i.shadowLengthBuffer}):null;h!==d&&(this._atmosphereShadowLength=d,pi.target=this,pi.property="atmosphereShadowLength",this.events.dispatchEvent(pi))}update(e,t,i=0){const{shadowMaps:r,shadowPass:a,cloudsPass:s}=this;if(r.cascadeCount!==this.shadowCascadeCount||!r.mapSize.equals(this.shadowMapSize)){const{width:o,height:l}=r.mapSize,c=r.cascadeCount;this.shadowMapSize.set(o,l),this.shadowCascadeCount=c,a.setSize(o,l,c),s.setShadowSize(o,l,c)}this.proceduralLocalWeather?.render(e,i),this.proceduralShape?.render(e,i),this.proceduralShapeDetail?.render(e,i),this.proceduralTurbulence?.render(e,i),++this.frame,this.updateSharedUniforms(i),this.updateWeatherTextureChannels(),a.update(e,this.frame,i),s.shadowBuffer=a.outputBuffer,s.update(e,this.frame,i),this.updateAtmosphereComposition(),this.uniforms.get("cloudsBuffer").value=this.cloudsPass.outputBuffer}setSize(e,t){const{resolution:i}=this;i.setBaseSize(e,t);const{width:r,height:a}=i;this.cloudsPass.setSize(r,a)}setDepthTexture(e,t){this.shadowPass.setDepthTexture(e,t),this.cloudsPass.setDepthTexture(e,t)}set qualityPreset(e){const{clouds:t,shadow:i,...r}=qT[e];Object.assign(this,r),Object.assign(this.clouds,t),Object.assign(this.shadow,i)}get localWeatherTexture(){return this.proceduralLocalWeather??this.parameterUniforms.localWeatherTexture.value}set localWeatherTexture(e){e instanceof Ht||e==null?(this.proceduralLocalWeather=void 0,this.parameterUniforms.localWeatherTexture.value=e):(this.proceduralLocalWeather=e,this.parameterUniforms.localWeatherTexture.value=e.texture)}get shapeTexture(){return this.proceduralShape??this.parameterUniforms.shapeTexture.value}set shapeTexture(e){e instanceof Ti||e==null?(this.proceduralShape=void 0,this.parameterUniforms.shapeTexture.value=e):(this.proceduralShape=e,this.parameterUniforms.shapeTexture.value=e.texture)}get shapeDetailTexture(){return this.proceduralShapeDetail??this.parameterUniforms.shapeDetailTexture.value}set shapeDetailTexture(e){e instanceof Ti||e==null?(this.proceduralShapeDetail=void 0,this.parameterUniforms.shapeDetailTexture.value=e):(this.proceduralShapeDetail=e,this.parameterUniforms.shapeDetailTexture.value=e.texture)}get turbulenceTexture(){return this.proceduralTurbulence??this.parameterUniforms.turbulenceTexture.value}set turbulenceTexture(e){e instanceof Ht||e==null?(this.proceduralTurbulence=void 0,this.parameterUniforms.turbulenceTexture.value=e):(this.proceduralTurbulence=e,this.parameterUniforms.turbulenceTexture.value=e.texture)}get stbnTexture(){return this.cloudsPass.currentMaterial.uniforms.stbnTexture.value}set stbnTexture(e){this.cloudsPass.currentMaterial.uniforms.stbnTexture.value=e,this.shadowPass.currentMaterial.uniforms.stbnTexture.value=e}get resolutionScale(){return this.resolution.scale}set resolutionScale(e){this.resolution.scale=e}get temporalUpscale(){return this.cloudsPass.temporalUpscale}set temporalUpscale(e){this.cloudsPass.temporalUpscale=e}get lightShafts(){return this.cloudsPass.lightShafts}set lightShafts(e){this.cloudsPass.lightShafts=e}get shapeDetail(){return this.cloudsPass.currentMaterial.shapeDetail}set shapeDetail(e){this.cloudsPass.currentMaterial.shapeDetail=e,this.shadowPass.currentMaterial.shapeDetail=e}get turbulence(){return this.cloudsPass.currentMaterial.turbulence}set turbulence(e){this.cloudsPass.currentMaterial.turbulence=e,this.shadowPass.currentMaterial.turbulence=e}get haze(){return this.cloudsPass.currentMaterial.haze}set haze(e){this.cloudsPass.currentMaterial.haze=e}get scatteringCoefficient(){return this.parameterUniforms.scatteringCoefficient.value}set scatteringCoefficient(e){this.parameterUniforms.scatteringCoefficient.value=e}get absorptionCoefficient(){return this.parameterUniforms.absorptionCoefficient.value}set absorptionCoefficient(e){this.parameterUniforms.absorptionCoefficient.value=e}get coverage(){return this.parameterUniforms.coverage.value}set coverage(e){this.parameterUniforms.coverage.value=e}get turbulenceDisplacement(){return this.parameterUniforms.turbulenceDisplacement.value}set turbulenceDisplacement(e){this.parameterUniforms.turbulenceDisplacement.value=e}get scatterAnisotropy1(){return this.cloudsPass.currentMaterial.scatterAnisotropy1}set scatterAnisotropy1(e){this.cloudsPass.currentMaterial.scatterAnisotropy1=e}get scatterAnisotropy2(){return this.cloudsPass.currentMaterial.scatterAnisotropy2}set scatterAnisotropy2(e){this.cloudsPass.currentMaterial.scatterAnisotropy2=e}get scatterAnisotropyMix(){return this.cloudsPass.currentMaterial.scatterAnisotropyMix}set scatterAnisotropyMix(e){this.cloudsPass.currentMaterial.scatterAnisotropyMix=e}get skyLightScale(){return this.cloudsPass.currentMaterial.uniforms.skyLightScale.value}set skyLightScale(e){this.cloudsPass.currentMaterial.uniforms.skyLightScale.value=e}get groundBounceScale(){return this.cloudsPass.currentMaterial.uniforms.groundBounceScale.value}set groundBounceScale(e){this.cloudsPass.currentMaterial.uniforms.groundBounceScale.value=e}get powderScale(){return this.cloudsPass.currentMaterial.uniforms.powderScale.value}set powderScale(e){this.cloudsPass.currentMaterial.uniforms.powderScale.value=e}get powderExponent(){return this.cloudsPass.currentMaterial.uniforms.powderExponent.value}set powderExponent(e){this.cloudsPass.currentMaterial.uniforms.powderExponent.value=e}get atmosphereOverlay(){return this._atmosphereOverlay}get atmosphereShadow(){return this._atmosphereShadow}get atmosphereShadowLength(){return this._atmosphereShadowLength}get irradianceTexture(){return this.cloudsPass.currentMaterial.irradianceTexture}set irradianceTexture(e){this.cloudsPass.currentMaterial.irradianceTexture=e}get scatteringTexture(){return this.cloudsPass.currentMaterial.scatteringTexture}set scatteringTexture(e){this.cloudsPass.currentMaterial.scatteringTexture=e}get transmittanceTexture(){return this.cloudsPass.currentMaterial.transmittanceTexture}set transmittanceTexture(e){this.cloudsPass.currentMaterial.transmittanceTexture=e}get singleMieScatteringTexture(){return this.cloudsPass.currentMaterial.singleMieScatteringTexture}set singleMieScatteringTexture(e){this.cloudsPass.currentMaterial.singleMieScatteringTexture=e}get higherOrderScatteringTexture(){return this.cloudsPass.currentMaterial.higherOrderScatteringTexture}set higherOrderScatteringTexture(e){this.cloudsPass.currentMaterial.higherOrderScatteringTexture=e}get ellipsoid(){return this.cloudsPass.currentMaterial.ellipsoid}set ellipsoid(e){this.cloudsPass.currentMaterial.ellipsoid=e}get sunAngularRadius(){return this.cloudsPass.currentMaterial.sunAngularRadius}set sunAngularRadius(e){this.cloudsPass.currentMaterial.sunAngularRadius=e}}xM([dt("SKIP_RENDERING")],wp.prototype,"skipRendering");const Ld=["low","medium","high","ultra"],Id=[256,512,1024,2048],yl=[en.ACES_FILMIC,en.NEUTRAL,en.AGX,en.LINEAR],DM=["aces","neutral","agx","linear"],Nd=["DEBUG_SHOW_SAMPLE_COUNT","DEBUG_SHOW_FRONT_DEPTH","DEBUG_SHOW_SHADOW_MAP","DEBUG_SHOW_CASCADES","DEBUG_SHOW_UV"],PM=["DEBUG_SHOW_SHADOW_LENGTH","DEBUG_SHOW_VELOCITY"],Od=[{channel:"r",altitude:750,height:650,densityScale:.2,shapeAmount:1,shapeDetailAmount:1,weatherExponent:1,shapeAlteringBias:.35,coverageFilterWidth:.6,shadow:!0},{channel:"g",altitude:1e3,height:1200,densityScale:.2,shapeAmount:1,shapeDetailAmount:1,weatherExponent:1,shapeAlteringBias:.35,coverageFilterWidth:.6,shadow:!0},{channel:"b",altitude:7500,height:500,densityScale:.003,shapeAmount:.4,shapeDetailAmount:0,weatherExponent:1,shapeAlteringBias:.35,coverageFilterWidth:.5,shadow:!1},{channel:"a",height:0,densityScale:0,shapeAmount:0,shapeDetailAmount:0,shadow:!1}],LM=new Ue().set(1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1);function IM(){const n=new Pn;return n.setAttribute("position",new an([-1,-1,0,3,-1,0,-1,3,0],3)),n}function NM(){const e=new qc(0,me.degToRad(35),100).toECEF(new P);return Ya.WGS84.getEastNorthUpFrame(e,new Ue).multiply(LM)}class OM{constructor({scene:e,camera:t,renderer:i}){this.scene=e,this.camera=t,this.renderer=i,this.enabled=!1,this.skyEnabled=!1,this.skyVisibilityGate=!0,this.cloudsEnabled=!1,this.aerialPerspectiveEnabled=!1,this.assetsReady=!1,this.exposure=10,this.qualityPreset="medium",this.resolutionScale=.7,this.coverage=.6,this.toneMappingIndex=0,this.toneMappingMode=yl[this.toneMappingIndex],this.dithering=!0,this.worldToECEFMatrix=NM(),this.sunECEF=new P(0,1,0),this.sunRotation=new Je().setFromMatrix4(this.worldToECEFMatrix),this.skyMaterial=new bo({ground:!0,moon:!1,groundAlbedo:new Oe("#05080b")}),this.skyMaterial.worldToECEFMatrix.copy(this.worldToECEFMatrix),this.skyMesh=new wt(IM(),this.skyMaterial),this.skyMesh.name="TakramSkyMaterialFullscreen",this.skyMesh.frustumCulled=!1,this.skyMesh.renderOrder=-1e3,this.skyMesh.visible=!1,this.scene.add(this.skyMesh),this.aerialPerspective=new fn(t,{sky:!1,sun:!0,moon:!1,ground:!0,sunLight:!0,skyLight:!0,reconstructNormal:!1}),this.aerialPerspective.worldToECEFMatrix.copy(this.worldToECEFMatrix),this.clouds=new wp(t),this.clouds.qualityPreset=this.qualityPreset,this.clouds.coverage=this.coverage,this.clouds.resolutionScale=this.resolutionScale,this.clouds.lightShafts=!1,this.clouds.localWeatherVelocity.set(.001,0),this.clouds.worldToECEFMatrix.copy(this.worldToECEFMatrix),this._configureFirstCloudLayer(),this.clouds.events.addEventListener("change",r=>this._onCloudsChange(r)),this.composer=new vy(i,{frameBufferType:Bt,multisampling:0}),this.renderPass=new Mf(e,t),this.normalPass=new hE(e,t),this.aerialPerspective.normalBuffer=this.normalPass.texture,this.toneMappingEffect=new sE({mode:this.toneMappingMode}),this.finalPass=new $h(t,this.toneMappingEffect),this.finalPass.dithering=this.dithering,this.effectPass=null,this.composer.addPass(this.renderPass),this.composer.addPass(this.normalPass),this.composer.addPass(this.finalPass),this._rebuildEffectPass()}setEnabled(e){this.enabled=!!e,this._syncSkyMeshVisibility()}setSkyEnabled(e){this.skyEnabled=!!e,this._syncSkyMeshVisibility()}setSkyVisible(e){this.skyVisibilityGate=!!e,this._syncSkyMeshVisibility()}setParams(e={}){const t=e.render||e,i=e.atmosphere||{},r=e.weather||e,a=e.layer||{},s=e.lighting||{},o=e.shadows||{},l=e.debug||{},c=e.finishing||{};this.exposure=t.exposure??this.exposure,this.coverage=me.clamp(r.coverage??this.coverage,0,1),this.resolutionScale=me.clamp(t.resolutionScale??this.resolutionScale,.25,1),this.clouds.coverage=this.coverage,this.clouds.resolutionScale=this.resolutionScale,this.clouds.temporalUpscale=t.temporalUpscale!==!1;const h=me.clamp(Math.round(t.quality??1),0,Ld.length-1),d=Ld[h];d!==this.qualityPreset&&(this.qualityPreset=d,this.clouds.qualityPreset=d),this._applyAtmosphereParams(i),this._applyWeatherParams(r),this._applyLayerParams(a,o),this._applyLightingParams(s),this._applyShadowParams(o),this._applyDebugParams(l),this._applyFinishingParams(c);const f=!!t.clouds,g=!!t.aerialPerspective;(f!==this.cloudsEnabled||g!==this.aerialPerspectiveEnabled)&&(this.cloudsEnabled=f,this.aerialPerspectiveEnabled=g,this._rebuildEffectPass())}setAssets(e){if(!e)return;const{atmosphere:t,clouds:i}=e;Object.assign(this.skyMaterial,t),Object.assign(this.aerialPerspective,t),Object.assign(this.clouds,t),this.aerialPerspective.stbnTexture=i.stbnTexture,this.clouds.localWeatherTexture=i.localWeatherTexture,this.clouds.shapeTexture=i.shapeTexture,this.clouds.shapeDetailTexture=i.shapeDetailTexture,this.clouds.turbulenceTexture=i.turbulenceTexture,this.clouds.stbnTexture=i.stbnTexture,this.assetsReady=!0}syncFromScene(e){const t=e.getSunDirection?e.getSunDirection():e._sunDir();this.sunECEF.copy(t).applyMatrix3(this.sunRotation).normalize(),this.skyMaterial.sunDirection.copy(this.sunECEF),this.aerialPerspective.sunDirection.copy(this.sunECEF),this.clouds.sunDirection.copy(this.sunECEF),this.skyMaterial.worldToECEFMatrix.copy(this.worldToECEFMatrix),this.aerialPerspective.worldToECEFMatrix.copy(this.worldToECEFMatrix),this.clouds.worldToECEFMatrix.copy(this.worldToECEFMatrix)}render(e){const t=this.renderer.toneMapping,i=this.renderer.toneMappingExposure;this.renderer.toneMapping=Ei,this.renderer.toneMappingExposure=this.exposure,this.composer.render(e),this.renderer.toneMapping=t,this.renderer.toneMappingExposure=i}setSize(e=window.innerWidth,t=window.innerHeight){this.composer.setSize(e,t)}resetTemporalState({resetWeather:e=!1}={}){const t=this.renderer.getSize(new Ee),i=this.clouds.temporalUpscale,r=this.clouds.shadow.temporalPass;e&&(this.clouds.localWeatherOffset.set(0,0),this.clouds.shapeOffset.set(0,0,0),this.clouds.shapeDetailOffset.set(0,0,0)),this.clouds.temporalUpscale=!i,this.clouds.temporalUpscale=i,this.clouds.shadow.temporalPass=!r,this.clouds.shadow.temporalPass=r,this.clouds.setSize(t.x,t.y),this.composer.setSize(t.x,t.y),this.clouds.frame=0}getDebugSnapshot(){return{enabled:this.enabled,cloudsEnabled:this.cloudsEnabled,skyEnabled:this.skyEnabled,aerialPerspectiveEnabled:this.aerialPerspectiveEnabled,assetsReady:this.assetsReady,exposure:this.exposure,toneMapping:DM[this.toneMappingIndex]??"aces",dithering:this.dithering,qualityPreset:this.qualityPreset,resolutionScale:this.resolutionScale,coverage:this.coverage,skyVisible:this.skyMesh.visible,temporalUpscale:this.clouds.temporalUpscale,lightShafts:this.clouds.lightShafts,cloudLayer:{layers:this.clouds.cloudLayers.map(e=>({channel:e.channel,altitude:e.altitude,height:e.height,densityScale:e.densityScale,shapeAmount:e.shapeAmount,shapeDetailAmount:e.shapeDetailAmount,shadow:e.shadow}))},shadow:{cascadeCount:this.clouds.shadowMaps.cascadeCount,mapSize:this.clouds.shadowMaps.mapSize.toArray(),shadowIterations:this.clouds.shadow.maxIterationCount,shadowStep:this.clouds.shadow.minStepSize,shadowLengthIterations:this.clouds.clouds.maxShadowLengthIterationCount,shadowLengthStep:this.clouds.clouds.minShadowLengthStepSize,shadowLengthDistance:this.clouds.clouds.maxShadowLengthRayDistance},sunECEF:this.sunECEF.toArray().map(e=>Number(e.toFixed(5))),passes:this.composer.passes.map(e=>({name:e.name,enabled:e.enabled}))}}_applyAtmosphereParams(e={}){const t=e.sun!==!1,i=e.ground!==!1;this.skyMaterial.sun=t,this.skyMaterial.ground=i,this.skyMaterial.groundAlbedo.setScalar(me.clamp(e.groundAlbedo??.018,0,1)),this.aerialPerspective.sun=t,this.aerialPerspective.ground=i,this.aerialPerspective.transmittance=e.transmittance!==!1,this.aerialPerspective.inscatter=e.inscatter!==!1,this.aerialPerspective.sunLight=e.sunLight!==!1,this.aerialPerspective.skyLight=e.skyLight!==!1,this.aerialPerspective.albedoScale=e.albedoScale??1}_applyWeatherParams(e={}){this.clouds.localWeatherRepeat.set(e.weatherRepeatX??100,e.weatherRepeatY??100),this.clouds.localWeatherVelocity.set(e.weatherVelocityX??.001,e.weatherVelocityY??0);const t=e.shapeRepeat??3e-4;this.clouds.shapeRepeat.setScalar(t),this.clouds.shapeDetailRepeat.setScalar(e.detailRepeat??.006),this.clouds.turbulenceRepeat.setScalar(e.turbulenceRepeat??20),this.clouds.turbulenceDisplacement=e.turbulenceDisplacement??350}_applyLayerParams(e={},t={}){const i=e.enabled!==!1;if(i&&e.referenceStack!==!1){this.clouds.cloudLayers.set(Od);return}this.clouds.cloudLayers.set([{channel:"r",altitude:e.altitude??750,height:i?e.height??600:0,densityScale:i?e.densityScale??.4:0,shapeAmount:e.shapeAmount??1,shapeDetailAmount:e.shapeDetailAmount??.8,weatherExponent:e.weatherExponent??1,shapeAlteringBias:e.shapeAlteringBias??.35,coverageFilterWidth:e.coverageFilterWidth??.6,shadow:i&&t.layerShadow!==!1},{channel:"g",altitude:0,height:0,densityScale:0,shapeAmount:0,shapeDetailAmount:0,shadow:!1},{channel:"b",altitude:0,height:0,densityScale:0,shapeAmount:0,shapeDetailAmount:0,shadow:!1},{channel:"a",altitude:0,height:0,densityScale:0,shapeAmount:0,shapeDetailAmount:0,shadow:!1}])}_applyLightingParams(e={}){this.clouds.scatteringCoefficient=e.scatteringCoefficient??1,this.clouds.absorptionCoefficient=e.absorptionCoefficient??0,this.clouds.skyLightScale=e.skyLightScale??1,this.clouds.groundBounceScale=e.groundBounceScale??1,this.clouds.powderScale=e.powderScale??.8,this.clouds.powderExponent=e.powderExponent??150,this.clouds.scatterAnisotropy1=e.anisotropy1??.7,this.clouds.scatterAnisotropy2=e.anisotropy2??-.2,this.clouds.scatterAnisotropyMix=e.anisotropyMix??.5,this.clouds.shapeDetail=e.shapeDetail!==!1,this.clouds.turbulence=!!e.turbulence,this.clouds.haze=e.haze!==!1}_applyShadowParams(e={}){this.clouds.lightShafts=!!e.lightShafts;const t=me.clamp(Math.round(e.cascadeCount??3),1,4),i=Id[me.clamp(Math.round(e.mapSize??0),0,Id.length-1)];this.clouds.shadowMaps.cascadeCount=t,this.clouds.shadowMaps.mapSize.set(i,i),this.clouds.shadow.maxIterationCount=e.shadowIterations??50,this.clouds.shadow.minStepSize=e.shadowStep??100,this.clouds.clouds.maxShadowLengthIterationCount=e.shadowLengthIterations??180,this.clouds.clouds.minShadowLengthStepSize=e.shadowLengthStep??80,this.clouds.clouds.maxShadowLengthRayDistance=e.shadowLengthDistance??12e4}_applyFinishingParams(e={}){const t=me.clamp(Math.round(e.toneMapping??this.toneMappingIndex),0,yl.length-1);t!==this.toneMappingIndex&&(this.toneMappingIndex=t,this.toneMappingMode=yl[t],this.toneMappingEffect.mode=this.toneMappingMode),this.dithering=!!e.dithering,this.finalPass.dithering=this.dithering}_applyDebugParams(e={}){this.clouds.clouds.maxIterationCount=e.primarySteps??200,this.clouds.clouds.minStepSize=e.minStep??80,this.clouds.clouds.maxStepSize=e.maxStep??1e3,this.clouds.clouds.maxRayDistance=e.rayDistance??12e4;const t=this.clouds.cloudsPass.currentMaterial,i=this.clouds.cloudsPass.resolveMaterial,r=Math.round(e.mode??0);for(const a of Nd)Aa(t,a,!1);for(const a of PM)Aa(i,a,!1);r>=1&&r<=5&&Aa(t,Nd[r-1],!0),r===6&&Aa(i,"DEBUG_SHOW_SHADOW_LENGTH",!0),r===7&&Aa(i,"DEBUG_SHOW_VELOCITY",!0)}_configureFirstCloudLayer(){this.clouds.cloudLayers.set(Od)}_rebuildEffectPass(){this.effectPass&&(this.composer.removePass(this.effectPass),this.effectPass.setEffects?.([]),this.effectPass.dispose?.(),this.effectPass=null),this.clouds.skipRendering=!this.cloudsEnabled;const e=this.cloudsEnabled&&this.aerialPerspectiveEnabled;this.aerialPerspective.overlay=e?this.clouds.atmosphereOverlay:null,this.aerialPerspective.shadow=e?this.clouds.atmosphereShadow:null,this.aerialPerspective.shadowLength=e?this.clouds.atmosphereShadowLength:null;const t=[];if(this.cloudsEnabled&&t.push(this.clouds),this.aerialPerspectiveEnabled&&t.push(this.aerialPerspective),t.length>0){this.effectPass=new $h(this.camera,...t);const i=this.composer.passes.indexOf(this.finalPass);this.composer.addPass(this.effectPass,i>=0?i:void 0),this._ensureDistinctComposerDepthTexture()}}_onCloudsChange(e){if(!(!this.cloudsEnabled||!this.aerialPerspectiveEnabled))switch(e.property){case"atmosphereOverlay":this.aerialPerspective.overlay=this.clouds.atmosphereOverlay;break;case"atmosphereShadow":this.aerialPerspective.shadow=this.clouds.atmosphereShadow;break;case"atmosphereShadowLength":this.aerialPerspective.shadowLength=this.clouds.atmosphereShadowLength;break}}_ensureDistinctComposerDepthTexture(){const e=this.composer.depthTexture,t=this.composer.depthRenderTarget?.depthTexture;if(!e||!t||e.source!==t.source)return;const i=new Ka(e.image?.width,e.image?.height,e.type,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.anisotropy,e.format);i.name="EffectComposer.SourceDepth",i.compareFunction=e.compareFunction,this.composer.depthTexture=i}_syncSkyMeshVisibility(){this.skyMesh.visible=this.enabled&&this.skyEnabled&&this.skyVisibilityGate}}function Aa(n,e,t,i="1"){const r=n.defines?.[e]!=null;t&&!r?(n.defines[e]=i,n.needsUpdate=!0):!t&&r&&(delete n.defines[e],n.needsUpdate=!0)}function UM(n,e,t){const i=n?.res||1,r=new Uint8Array(i*i*4),a=Math.max(1,t||n?.meta?.floorDepth||64);if(n?.heightVox)for(let o=0;o<i;o++)for(let l=0;l<i;l++){const c=n.idx(l,o),h=n.heightVox[c]*n.vstep,d=Math.max(0,e-h),f=c*4;r[f]=Math.round(me.clamp(d/a,0,1)*255),r[f+1]=n.channel?.[c]?255:0,r[f+2]=n.land?.[c]?255:0,r[f+3]=255}const s=new fr(r,i,i,Kt);return s.wrapS=un,s.wrapT=un,s.magFilter=Ze,s.minFilter=Ze,s.colorSpace=nn,s.needsUpdate=!0,s}function Hs(n,e){const t=n.attributes.position.count,i=new Float32Array(t);return i.fill(e),n.setAttribute("aPatchRole",new dn(i,1)),n}const Ud=`
uniform float uStage;
uniform float uTime;
uniform float uWaveHeight;
uniform float uWaveScale;
uniform float uWaveSpeed;
uniform float uGlintSpeed;
uniform float uGlintScale;
uniform float uWaveChoppy;
uniform float uWaveRotation;
uniform float uExtraDetailMix;
uniform float uExtraDetailOpacity;
uniform float uExtraDetailScale;
uniform float uExtraDetailSpeed;
uniform float uExtraDetailRotation;
uniform float uExtraDetailContrast;
uniform float uExtraDetailBias;
uniform float uExtraDetailSharp;
uniform float uExtraDetailTint;
uniform float uExtraDetailDistort;
uniform float uLayerVertex;
uniform float uLayerBroad;
uniform float uLayerFine;
uniform float uLayerGlint;
uniform float uLayerChaos;
uniform float uLodEnabled;
uniform float uLodSize;
uniform float uLodFeather;
uniform float uLodLobes;
uniform float uLodAlpha;
uniform float uLodSuppress;
uniform float uLodHeightMul;
uniform float uLodScaleMul;
uniform float uLodSpeedMul;
uniform float uLodChopBoost;
uniform float uLodDetailBoost;
uniform float uLodNormalBoost;

float whash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float wnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(whash(i), whash(i + vec2(1.0, 0.0)), u.x),
    mix(whash(i + vec2(0.0, 1.0)), whash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float seaOctave(vec2 uv, float choppy) {
  uv += wnoise(uv);
  vec2 wv = 1.0 - abs(sin(uv));
  vec2 swv = abs(cos(uv));
  wv = mix(wv, swv, wv);
  return pow(1.0 - pow(clamp(wv.x * wv.y, 0.0, 1.0), 0.65), max(0.5, choppy));
}

mat2 waveRot(float deg) {
  float a = radians(deg);
  float c = cos(a);
  float s = sin(a);
  return mat2(c, -s, s, c);
}

float waterHeightAt(vec2 xz, float speedMul, float scaleMul, float heightMul, float chopBoost) {
  float freq = max(0.0001, uWaveScale * max(0.05, scaleMul));
  float amp = uWaveHeight * max(0.0, heightMul);
  float chop = max(0.5, uWaveChoppy + chopBoost);
  float t = uTime * uWaveSpeed * max(0.0, speedMul);
  vec2 uv = waveRot(uWaveRotation) * xz;
  uv.x *= 0.75;
  float h = 0.0;
  mat2 octaveM = mat2(1.6, 1.2, -1.2, 1.6);
  for (int i = 0; i < 3; i++) {
    float d = seaOctave((uv + vec2(t, t * 0.63)) * freq, chop)
      + seaOctave((uv - vec2(t * 0.34, t)) * freq, chop);
    h += (d - 1.0) * amp;
    uv = octaveM * uv;
    freq *= 1.9;
    amp *= 0.22;
    chop = mix(chop, 1.0, 0.2);
  }
  return h;
}
float waterHeight(vec2 xz) { return waterHeightAt(xz, 1.0, 1.0, 1.0, 0.0); }
vec3 waterWaveNormal(vec2 xz, float speedMul, float scaleMul, float heightMul, float chopBoost) {
  float eps = max(1.0, 0.012 / max(0.0001, uWaveScale * max(0.05, scaleMul)));
  float h0 = waterHeightAt(xz, speedMul, scaleMul, heightMul, chopBoost);
  float hx = waterHeightAt(xz + vec2(eps, 0.0), speedMul, scaleMul, heightMul, chopBoost);
  float hz = waterHeightAt(xz + vec2(0.0, eps), speedMul, scaleMul, heightMul, chopBoost);
  return normalize(vec3(-(hx - h0) / eps, 1.0, -(hz - h0) / eps));
}
`;class FM{constructor(e){this.group=new Kn,this.group.name="IslandSea",this._enabled=e.enable!==!1,this._seaLevel=e.seaLevel,this._surfaceLift=e.surfaceLift??.08,this._horizon=new Oe("#bcd4d6"),this._sunDir=new P(0,1,0),this._sunCol=new Oe("#fff3df"),this._waterData=UM(e.volume,e.seaLevel,e.floorDepth);const t=Math.max(e.worldSize*12,26e3)*.5;this.floor=new wt(new po(t,96),new ho({color:new Oe("#062a36"),fog:!0})),this.floor.rotation.x=-Math.PI/2,this.floor.position.y=e.seaLevel-(e.floorDepth||64)-10,this.floor.renderOrder=1,this.group.add(this.floor),this.surfaceMat=new $S({color:new Oe("#1f8fa3"),transparent:!0,opacity:1,depthWrite:!1,roughness:.24,metalness:0,specularIntensity:1,transmission:0,side:cn}),this.surfaceMat.forceSinglePass=!0;const i=e.radius*1.4,r=t*.96;this.surfaceMat.onBeforeCompile=a=>{a.uniforms.uHorizon={value:this._horizon},a.uniforms.uF0={value:i},a.uniforms.uF1={value:r},a.uniforms.uSunDir={value:this._sunDir},a.uniforms.uSunCol={value:this._sunCol},a.uniforms.uCamPos={value:new P},a.uniforms.uWaterData={value:this._waterData},a.uniforms.uWaterWorldSize={value:e.worldSize||e.radius*2.3},a.uniforms.uStage={value:e.surfaceStage??e.tutorialStage??5},a.uniforms.uTime={value:0},a.uniforms.uSurfaceAlpha={value:e.surfaceOpacity??.55},a.uniforms.uDepthTint={value:e.depthTint??.78},a.uniforms.uWaveHeight={value:e.waveHeight??1.92},a.uniforms.uWaveScale={value:e.waveScale??.0275},a.uniforms.uWaveSpeed={value:e.waveSpeed??2.7},a.uniforms.uGlintSpeed={value:e.glintSpeed??3.5},a.uniforms.uGlintScale={value:e.glintScale??1.34},a.uniforms.uWaveChoppy={value:e.waveChoppy??5.95},a.uniforms.uWaveRotation={value:e.waveRotation??143},a.uniforms.uExtraDetailMix={value:e.extraDetailMix??0},a.uniforms.uExtraDetailOpacity={value:e.extraDetailOpacity??1},a.uniforms.uExtraDetailScale={value:e.extraDetailScale??2.4},a.uniforms.uExtraDetailSpeed={value:e.extraDetailSpeed??.7},a.uniforms.uExtraDetailRotation={value:e.extraDetailRotation??119},a.uniforms.uExtraDetailContrast={value:e.extraDetailContrast??1.4},a.uniforms.uExtraDetailBias={value:e.extraDetailBias??0},a.uniforms.uExtraDetailSharp={value:e.extraDetailSharp??1},a.uniforms.uExtraDetailTint={value:e.extraDetailTint??.55},a.uniforms.uExtraDetailDistort={value:e.extraDetailDistort??.25},a.uniforms.uLayerVertex={value:1},a.uniforms.uLayerBroad={value:1},a.uniforms.uLayerFine={value:1},a.uniforms.uLayerGlint={value:1},a.uniforms.uLayerChaos={value:e.extraDetailMix?1:0},a.uniforms.uLodEnabled={value:e.nearPatch?1:0},a.uniforms.uLodSize={value:e.patchSize??820},a.uniforms.uLodFeather={value:e.patchFeather??.38},a.uniforms.uLodLobes={value:e.patchLobes??5},a.uniforms.uLodAlpha={value:e.patchAlpha??.9},a.uniforms.uLodSuppress={value:e.patchSuppress??.82},a.uniforms.uLodHeightMul={value:e.patchHeightMul??3.5},a.uniforms.uLodScaleMul={value:e.patchScaleMul??2.4},a.uniforms.uLodSpeedMul={value:e.patchSpeedMul??1.15},a.uniforms.uLodChopBoost={value:e.patchChopBoost??1.1},a.uniforms.uLodDetailBoost={value:e.patchDetailBoost??1.35},a.uniforms.uLodNormalBoost={value:e.patchNormalBoost??1.6},a.uniforms.uDetailMix={value:e.detailMix??.42},a.uniforms.uNormalStrength={value:e.normalStrength??.4},a.uniforms.uRefractionStrength={value:e.refractionStrength??.18},a.uniforms.uLagoonTint={value:e.lagoonTint??.18},a.uniforms.uLandMask={value:e.landMask??1},a.uniforms.uDebugView={value:e.debugView??0},this._uniforms=a.uniforms,a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
${Ud}
attribute float aPatchRole;
varying vec2 vWaterXZ;
varying vec3 vWaterWorld;
varying float vWaterWave;
varying float vPatchRole;
varying vec2 vPatchLocal;
`).replace("#include <begin_vertex>",`#include <begin_vertex>
  vPatchLocal = transformed.xy;
  float waterPatchRole = clamp(aPatchRole, 0.0, 1.0);
  vec4 waterPreWorld = modelMatrix * vec4(transformed, 1.0);
  float waterWaveGate = step(2.5, uStage) * uLayerVertex;
  float waterHeightMul = mix(1.0, max(0.0, uLodHeightMul), waterPatchRole);
  float waterScaleMul = mix(1.0, max(0.05, uLodScaleMul), waterPatchRole);
  float waterSpeedMul = mix(1.0, max(0.0, uLodSpeedMul), waterPatchRole);
  float waterChopBoost = mix(0.0, uLodChopBoost, waterPatchRole);
  float waterWave = waterHeightAt(waterPreWorld.xz, waterSpeedMul, waterScaleMul, waterHeightMul, waterChopBoost) * waterWaveGate;
  transformed.z += waterWave;
  vec4 waterWorld = modelMatrix * vec4(transformed, 1.0);
  vWaterXZ = waterWorld.xz;
  vWaterWorld = waterWorld.xyz;
  vWaterWave = waterWave;
  vPatchRole = waterPatchRole;
`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
${Ud}
varying vec2 vWaterXZ;
varying vec3 vWaterWorld;
varying float vWaterWave;
varying float vPatchRole;
varying vec2 vPatchLocal;
uniform vec3 uHorizon;
uniform float uF0;
uniform float uF1;
uniform vec3 uSunDir;
uniform vec3 uSunCol;
uniform vec3 uCamPos;
uniform sampler2D uWaterData;
uniform float uWaterWorldSize;
uniform float uSurfaceAlpha;
uniform float uDepthTint;
uniform float uDetailMix;
uniform float uNormalStrength;
uniform float uRefractionStrength;
uniform float uLagoonTint;
uniform float uLandMask;
uniform float uDebugView;

vec4 waterSample(vec2 rawUv) {
  float inside = step(0.0, rawUv.x) * step(rawUv.x, 1.0) * step(0.0, rawUv.y) * step(rawUv.y, 1.0);
  vec4 wd = texture2D(uWaterData, clamp(rawUv, 0.0, 1.0));
  wd.r = mix(1.0, wd.r, inside);
  wd.g *= inside;
  wd.b *= inside;
  wd.a = inside;
  return wd;
}
`).replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
  float waterNormalGate = step(3.5, uStage);
  float normalPatchRole = clamp(vPatchRole, 0.0, 1.0);
  float waterNormalHeightMul = mix(1.0, max(0.0, uLodHeightMul), normalPatchRole);
  float waterNormalScaleMul = mix(1.0, max(0.05, uLodScaleMul), normalPatchRole);
  float waterNormalSpeedMul = mix(1.0, max(0.0, uLodSpeedMul), normalPatchRole);
  float waterNormalChopBoost = mix(0.0, uLodChopBoost, normalPatchRole);
  float waterNormalBoost = mix(1.0, max(0.0, uLodNormalBoost), normalPatchRole);
  vec3 waterWorldNormal = waterWaveNormal(vWaterXZ, max(0.0, uGlintSpeed) * waterNormalSpeedMul, max(0.05, uGlintScale) * waterNormalScaleMul, waterNormalHeightMul, waterNormalChopBoost);
  vec3 waterViewNormal = normalize((viewMatrix * vec4(waterWorldNormal, 0.0)).xyz);
  normal = normalize(mix(normal, waterViewNormal, waterNormalGate * clamp(uNormalStrength * waterNormalBoost, 0.0, 4.0) * uLayerGlint));
`).replace("#include <color_fragment>",`#include <color_fragment>
  vec2 rawWaterUv = vWaterXZ / max(1.0, uWaterWorldSize) + 0.5;
  float detailGate = step(3.5, uStage);
  float distortGate = step(4.5, uStage);
  float waterPatchRole = clamp(vPatchRole, 0.0, 1.0);
  float patchScaleMul = mix(1.0, max(0.05, uLodScaleMul), waterPatchRole);
  float patchSpeedMul = mix(1.0, max(0.0, uLodSpeedMul), waterPatchRole);
  float patchHeightMul = mix(1.0, max(0.0, uLodHeightMul), waterPatchRole);
  float patchDetailBoost = mix(1.0, max(0.0, uLodDetailBoost), waterPatchRole);
  mat2 basis = waveRot(uWaveRotation);
  vec2 detailXZ = basis * vWaterXZ;
  vec2 dirA = normalize(basis * vec2(1.0, 0.33));
  vec2 dirB = normalize(waveRot(uWaveRotation + 71.0) * vec2(-0.25, 1.0));
  vec2 dirC = normalize(waveRot(uWaveRotation - 38.0) * vec2(0.62, -1.0));
  float t = uTime * uWaveSpeed * patchSpeedMul;
  float waveFreq = max(0.0001, uWaveScale) * patchScaleMul;
  float broadRaw = wnoise(detailXZ * waveFreq * 2.1 + dirA * t * 0.72);
  float fineRaw = wnoise(detailXZ * waveFreq * 8.5 - dirB * t * 0.48);
  float chaosRaw = wnoise((waveRot(uWaveRotation + uExtraDetailRotation) * vWaterXZ) * waveFreq * max(0.05, uExtraDetailScale) + dirC * t * uExtraDetailSpeed);
  float chaos = clamp((chaosRaw - 0.5) * max(0.01, uExtraDetailContrast) + 0.5 + uExtraDetailBias, 0.0, 1.0);
  chaos = pow(chaos, max(0.1, uExtraDetailSharp));
  float broad = mix(0.5, broadRaw, uLayerBroad);
  float fine = mix(0.5, fineRaw, uLayerFine);
  float chaosLayer = mix(0.5, chaos, uLayerChaos * uExtraDetailOpacity);
  vec2 distort = (vec2(broad, fine) - 0.5 + (chaosLayer - 0.5) * uExtraDetailDistort) * uRefractionStrength * distortGate;
  vec4 waterData = waterSample(rawWaterUv + distort);
  float depth = waterData.r;
  float channel = waterData.g;
  float land = waterData.b;
  float waterMask = mix(1.0, 1.0 - smoothstep(0.14, 0.82, land), clamp(uLandMask, 0.0, 1.0));
  float clear = smoothstep(0.0, 0.2, depth);

  vec3 surfaceColor = vec3(0.10, 0.58, 0.66);
  vec3 shallowColor = vec3(0.08, 0.86, 0.93);
  vec3 midColor = vec3(0.02, 0.36, 0.45);
  vec3 deepColor = vec3(0.004, 0.055, 0.10);
  vec3 lagoonColor = vec3(0.13, 0.92, 0.84);
  vec3 depthColor = mix(shallowColor, midColor, smoothstep(0.02, 0.45, depth));
  depthColor = mix(depthColor, deepColor, smoothstep(0.36, 1.0, depth));
  depthColor = mix(depthColor, lagoonColor, clamp(channel * uLagoonTint, 0.0, 1.0));

  float depthGate = step(1.5, uStage);
  float colorGate = step(5.5, uStage);
  vec3 waterColor = mix(surfaceColor, mix(surfaceColor, depthColor, clamp(0.22 + uDepthTint * 0.62, 0.0, 0.95)), depthGate);
  waterColor = mix(waterColor, depthColor, colorGate);

  float waveVis = clamp(vWaterWave / max(0.001, uWaveHeight * patchHeightMul * 2.4), 0.0, 1.0);
  float detail = mix(broad, fine, clamp(uDetailMix, 0.0, 1.0));
  detail = clamp((detail - 0.5) * patchDetailBoost + 0.5, 0.0, 1.0);
  float chaosMix = clamp(uExtraDetailMix * uLayerChaos, 0.0, 2.0);
  detail = mix(detail, chaosLayer, clamp(chaosMix, 0.0, 1.0));
  detail = clamp(detail + (chaosLayer - 0.5) * max(0.0, chaosMix - 1.0), 0.0, 1.0);
  float crest = smoothstep(0.56, 0.95, max(waveVis, detail * 0.8));
  waterColor += vec3(0.08, 0.16, 0.15) * crest * detailGate * clear;
  vec3 chaosTint = mix(vec3(-0.08, 0.02, 0.03), vec3(0.16, 0.24, 0.22), clamp(uExtraDetailTint, 0.0, 1.0));
  waterColor += chaosTint * (chaosLayer - 0.5) * uExtraDetailMix * detailGate * clear;

  float alpha = clamp(mix(0.16, uSurfaceAlpha, smoothstep(0.04, 0.9, depth)), 0.03, 1.0) * waterMask;
  vec3 dbgNormal = waterWaveNormal(vWaterXZ, max(0.0, uGlintSpeed) * patchSpeedMul, max(0.05, uGlintScale) * patchScaleMul, patchHeightMul, mix(0.0, uLodChopBoost, waterPatchRole));

  if (uDebugView > 0.5) {
    float mode = floor(uDebugView + 0.5);
    if (mode == 1.0) waterColor = vec3(depth);
    if (mode == 2.0) waterColor = vec3(0.0, channel, channel);
    if (mode == 3.0) waterColor = vec3(waveVis, detail, crest);
    if (mode == 4.0) waterColor = dbgNormal * 0.5 + 0.5;
    if (mode == 5.0) waterColor = vec3(land, 0.0, 1.0 - land);
    if (mode == 6.0) waterColor = vec3(chaosLayer);
    if (mode == 7.0) waterColor = vec3(uLayerBroad, uLayerFine, uLayerChaos);
    alpha = mix(0.18, 0.9, max(max(waterColor.r, waterColor.g), waterColor.b)) * waterMask;
  }

  vec2 lodVec = mix(vWaterWorld.xz - uCamPos.xz, vPatchLocal, step(0.5, waterPatchRole));
  float lodHalf = max(1.0, uLodSize * 0.5);
  vec2 lodUv = lodVec / lodHalf;
  float lodDist = length(lodUv);
  float lodAngle = atan(lodUv.y, lodUv.x);
  float lodLobes = max(0.0, uLodLobes);
  float lobeAmp = 0.13 * step(0.5, lodLobes);
  float lodLobe = 1.0 + lobeAmp * sin(lodAngle * max(1.0, lodLobes) + uTime * 0.18);
  float lodEdge0 = clamp(1.0 - uLodFeather, 0.02, 0.98) * lodLobe;
  float lodMask = 1.0 - smoothstep(lodEdge0, lodLobe, lodDist);
  if (waterPatchRole > 0.5) {
    alpha *= lodMask * clamp(uLodAlpha, 0.0, 1.0);
  } else if (uLodEnabled > 0.5) {
    alpha *= mix(1.0, 1.0 - lodMask, clamp(uLodSuppress, 0.0, 1.0));
  }

  diffuseColor.rgb = waterColor;
  diffuseColor.a = alpha;
`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
  float horizonFade = smoothstep(uF0, uF1, length(vWaterXZ));
  gl_FragColor.rgb = mix(gl_FragColor.rgb, uHorizon, horizonFade);
  gl_FragColor.a = mix(gl_FragColor.a, 0.0, horizonFade * horizonFade);
`)},this.surface=new wt(Hs(new wn(t*2,t*2,320,320),0),this.surfaceMat),this.surface.rotation.x=-Math.PI/2,this.surface.renderOrder=4,this.group.add(this.surface),this._surfaceRadius=t,this._baseSegments=320,this._lodSize=820,this._lodSegments=180,this._lodLift=.05,this.lodSurface=new wt(Hs(new wn(this._lodSize,this._lodSize,this._lodSegments,this._lodSegments),1),this.surfaceMat),this.lodSurface.rotation.x=-Math.PI/2,this.lodSurface.renderOrder=5,this.lodSurface.visible=!1,this.group.add(this.lodSurface),this.setLevel(e.seaLevel),this.setStyle(e),this.setEnabled(this._enabled)}setEnabled(e){this._enabled=e!==!1,this.group.visible=this._enabled,this._syncLodVisibility()}setLevel(e){this._seaLevel=e,this.surface.position.y=e+this._surfaceLift,this.lodSurface.position.y=e+this._surfaceLift+this._lodLift}setStyle(e={}){if(e.surfaceLift!==void 0&&(this._surfaceLift=me.clamp(e.surfaceLift,-1,2),this.setLevel(this._seaLevel)),!this._uniforms)return;this._uniforms.uStage.value=me.clamp(e.surfaceStage??e.tutorialStage??5,3,5),this._uniforms.uSurfaceAlpha.value=me.clamp(e.surfaceOpacity??.55,.02,1),this._uniforms.uDepthTint.value=me.clamp(e.depthTint??.78,0,1.5),this._uniforms.uWaveHeight.value=Math.max(0,e.waveHeight??1.92),this._uniforms.uWaveScale.value=Math.max(1e-4,e.waveScale??.0275),this._uniforms.uWaveSpeed.value=Math.max(0,e.waveSpeed??2.7),this._uniforms.uGlintSpeed.value=Math.max(0,e.glintSpeed??3.5),this._uniforms.uGlintScale.value=Math.max(.05,e.glintScale??1.34),this._uniforms.uWaveChoppy.value=Math.max(.5,e.waveChoppy??5.95),this._uniforms.uWaveRotation.value=e.waveRotation??143,this._uniforms.uExtraDetailMix.value=me.clamp(e.extraDetailMix??0,0,2),this._uniforms.uExtraDetailOpacity.value=me.clamp(e.extraDetailOpacity??1,0,1),this._uniforms.uExtraDetailScale.value=Math.max(.05,e.extraDetailScale??2.4),this._uniforms.uExtraDetailSpeed.value=e.extraDetailSpeed??.7,this._uniforms.uExtraDetailRotation.value=e.extraDetailRotation??119,this._uniforms.uExtraDetailContrast.value=Math.max(.01,e.extraDetailContrast??1.4),this._uniforms.uExtraDetailBias.value=me.clamp(e.extraDetailBias??0,-1,1),this._uniforms.uExtraDetailSharp.value=Math.max(.1,e.extraDetailSharp??1),this._uniforms.uExtraDetailTint.value=me.clamp(e.extraDetailTint??.55,0,1),this._uniforms.uExtraDetailDistort.value=Math.max(0,e.extraDetailDistort??.25),this._uniforms.uDetailMix.value=me.clamp(e.detailMix??.42,0,1),this._uniforms.uNormalStrength.value=me.clamp(e.normalStrength??.4,0,2),this._uniforms.uRefractionStrength.value=me.clamp(e.refractionStrength??.18,0,.7),this._uniforms.uLagoonTint.value=Math.max(0,e.lagoonTint??.18),this._uniforms.uLandMask.value=me.clamp(e.landMask??1,0,1),this._uniforms.uDebugView.value=me.clamp(e.debugView??0,0,7);const t=this._layerWeights(e);this._uniforms.uLayerVertex.value=t.vertex,this._uniforms.uLayerBroad.value=t.broad,this._uniforms.uLayerFine.value=t.fine,this._uniforms.uLayerGlint.value=t.glint,this._uniforms.uLayerChaos.value=t.chaos;const i=me.clamp(Math.round(e.baseSegments??320),80,520);i!==this._baseSegments&&(this._baseSegments=i,this.surface.geometry.dispose(),this.surface.geometry=Hs(new wn(this._surfaceRadius*2,this._surfaceRadius*2,this._baseSegments,this._baseSegments),0));const r=me.clamp(e.patchSize??820,120,2400),a=me.clamp(Math.round(e.patchSegments??180),24,420);(r!==this._lodSize||a!==this._lodSegments)&&(this._lodSize=r,this._lodSegments=a,this.lodSurface.geometry.dispose(),this.lodSurface.geometry=Hs(new wn(this._lodSize,this._lodSize,this._lodSegments,this._lodSegments),1)),this._lodEnabled=!!e.nearPatch,this._lodSolo=!!e.patchSolo,this._lodLift=me.clamp(e.patchLift??.05,0,.4),this._uniforms.uLodEnabled.value=this._lodEnabled?1:0,this._uniforms.uLodSize.value=this._lodSize,this._uniforms.uLodFeather.value=me.clamp(e.patchFeather??.38,.02,.9),this._uniforms.uLodLobes.value=Math.max(0,e.patchLobes??5),this._uniforms.uLodAlpha.value=me.clamp(e.patchAlpha??.9,0,1),this._uniforms.uLodSuppress.value=me.clamp(e.patchSuppress??.82,0,1),this._uniforms.uLodHeightMul.value=me.clamp(e.patchHeightMul??3.5,0,10),this._uniforms.uLodScaleMul.value=me.clamp(e.patchScaleMul??2.4,.05,24),this._uniforms.uLodSpeedMul.value=me.clamp(e.patchSpeedMul??1.15,0,8),this._uniforms.uLodChopBoost.value=me.clamp(e.patchChopBoost??1.1,0,8),this._uniforms.uLodDetailBoost.value=me.clamp(e.patchDetailBoost??1.35,0,8),this._uniforms.uLodNormalBoost.value=me.clamp(e.patchNormalBoost??1.6,0,8),this.setLevel(this._seaLevel),this._syncLodVisibility()}_layerWeights(e={}){const i=["Vertex","Broad","Fine","Glint","Chaos"].some(a=>!!e[`solo${a}`]),r=a=>i?e[`solo${a}`]?1:0:e[`mute${a}`]?0:1;return{vertex:r("Vertex"),broad:r("Broad"),fine:r("Fine"),glint:r("Glint"),chaos:r("Chaos")}}_syncLodVisibility(){!this.surface||!this.lodSurface||(this.surface.visible=this._enabled&&!(this._lodEnabled&&this._lodSolo),this.lodSurface.visible=this._enabled&&!!this._lodEnabled)}setCaustic(){}setHorizon(e){this._horizon.copy(e),this.floor.material.color.copy(e).lerp(new Oe("#062a36"),.72)}setSun(e,t){this._sunDir.copy(e).normalize(),this._sunCol.copy(t)}setGlint(){}update(e,t){this._uniforms&&(this._uniforms.uTime.value=e,t&&(this._uniforms.uCamPos.value.copy(t),this._lodEnabled&&(this.lodSurface.position.x=t.x,this.lodSurface.position.z=t.z)))}}const BM=document.getElementById("canvas-container"),gu=document.getElementById("ui-root"),HM=()=>new Promise(n=>requestAnimationFrame(n)),rs="island",zM="Island",GM="island",$a=eb(),kM=["waves"],WM=["cloudsRender","takramAtmosphere","cloudWeather","cloudLayer0","cloudLighting","cloudShadows","cloudDebug","cloudFinishing"],VM=["skyDiagnosis",...WM,"water","waves","sun","atmosphere","lighting","island","voxel","seasons","tree","shadows","render","godrays"],Tp=tb($a,Js),Di=new ly({parent:gu,label:`${rs} build`});Di.start("bootstrap",6,{mode:"boot"});Di.step("ui shell");await HM();Di.step("presets");const Ro=await iy();Di.step("param markers");const Fd=new Set(nb()),Ra=new Set,vu=structuredClone(Js),ka=Ro.A1;ka?.params&&_u(vu,Cp(ka.params));rb(vu);const ht=new ty(vu);Di.step("param store");let Xr=null;const Mt=new $x(BM,ht,{loader:Di,autoGenerate:!1,asyncRegenerate:!0,SeaClass:FM,afterGenerate:n=>{n.sea?.setStyle?.(Rp()),Xr=ab(n,Xr),Xr&&(Xr.visible=!!ht.get("water.referenceBlocks"))}});Di.step("renderer");const na=new OM({scene:Mt.scene,camera:Mt.camera,renderer:Mt.renderer});Mt.setTakramRig(na);ka?.cam&&(Mt.camera.position.fromArray(ka.cam.p),Mt.camera.quaternion.fromArray(ka.cam.q),Mt.camera.updateMatrixWorld());const XM={has:n=>Ra.has(n),toggle:n=>(Ra.has(n)?Ra.delete(n):Ra.add(n),Ra.has(n))};let oo="A";const Mp=n=>`${oo}${n}`;function YM(){const n=Mt.camera;return{params:ht.toJSON(),cam:{p:n.position.toArray(),q:n.quaternion.toArray()},t:Date.now()}}function qM(n){return n?.params?(ht.fromJSON(ib(n.params)),Mt.camDirector?.clearInput?.(),Mt.autoCameraDirector?.returnToHuman?.(),(!ht.get("skyDiagnosis.fastSkyBoot")||Mt.vol)&&Mt.regenerateAsync(`${rs} preset rebuild`),n.cam&&(Mt.camera.position.fromArray(n.cam.p),Mt.camera.quaternion.fromArray(n.cam.q),Mt.camera.updateMatrixWorld()),na.resetTemporalState({resetWeather:!0}),!0):!1}async function bp(n){const e=Mp(n),t=YM();Ro[e]=t,Ct.refreshPresets(),await ry(e,t),Ct.flashStatus(`saved ${e} · master preset`,"ok")}function Ap(n){const e=Mp(n),t=Ro[e];if(!t){Ct.flashStatus(`${e} empty`,"err");return}qM(t),Ct.refreshPresets(),Ct.flashStatus(`loaded ${e} · ${GM}`,"ok")}function $M(n){!/^[A-H]$/.test(n)||n===oo||(oo=n,Ct.refreshPresets(),Ct.flashStatus(`bank ${n}`,"ok"))}const jM={slots:Ro,save:bp,load:Ap,setBank:$M,getBank:()=>oo},Ct=new sy({store:ht,schema:$a,sectionOrder:VM,sticky:XM,presets:jM});gu.appendChild(Ct.root);Ct.flashStatus(`${zM.toLowerCase()} · master presets`,"ok");const Co=new oy({scene:Mt});Co.root.classList.add("sky-clouds-perf");gu.appendChild(Co.root);const ZM=PT({onProgress:({loaded:n,total:e})=>Ct.flashStatus(`sky assets ${n}/${e}`,"ok")}).then(n=>(na.setAssets(n),Ct.flashStatus("sky assets loaded","ok"),n)).catch(n=>{throw console.error("[island] asset load failed",n),Ct.flashStatus("sky assets failed","err"),n});Mt.start();Di.step("first frame");ht.get("skyDiagnosis.fastSkyBoot")?(Di.done("island sky ready"),Ct.flashStatus("sky-only fast boot · island build skipped","ok")):await Mt.regenerateAsync(`${rs} asset build`);ht.subscribe(n=>{if(n.path==="cloudsRender.mode"&&QM(n.value),(n.path==="*"||KM(n.path))&&na.resetTemporalState(),Fd.has(n.path)&&Ct.refreshPresets(),(n.path==="*"||Fd.has(n.path))&&Mt.sea?.setStyle?.(Rp()),(n.path==="*"||n.path==="water.referenceBlocks")&&Xr){const e=ht.get("skyDiagnosis")||{};Xr.visible=!!ht.get("water.referenceBlocks")&&e.hideIsland===!1&&!e.skyOnly&&!e.seaOnlyStub&&!e.floorOnlyStub}n.path==="skyDiagnosis.fastSkyBoot"&&n.value===!1&&!Mt.vol&&Mt.regenerateAsync(`${rs} diagnostic island build`)});function KM(n){return n==="cloudsRender.clouds"||n==="cloudsRender.aerialPerspective"||n==="cloudsRender.quality"||n==="cloudsRender.resolutionScale"||n==="cloudsRender.temporalUpscale"||n.startsWith("cloudShadows.")||n.startsWith("cloudDebug.")}function JM(){ht.set("voxel.seed",1+(Math.random()*99998|0)),ht.set("sun.elevationDeg",8+Math.random()*54),ht.set("sun.azimuthDeg",-180+Math.random()*360),ht.set("seasons.sweepDeg",-180+Math.random()*360),(!ht.get("skyDiagnosis.fastSkyBoot")||Mt.vol)&&Mt.regenerateAsync(`${rs} random rebuild`)}function QM(n){const t=Math.round(n??0)===0?{"cloudsRender.atmosphere":!0,"cloudsRender.clouds":!0,"cloudsRender.aerialPerspective":!0,"cloudsRender.exposure":10,"cloudFinishing.toneMapping":0,"cloudFinishing.dithering":!0}:{"cloudsRender.atmosphere":!1,"cloudsRender.clouds":!0,"cloudsRender.aerialPerspective":!1,"cloudsRender.exposure":1.05,"cloudFinishing.toneMapping":0,"cloudFinishing.dithering":!1};for(const[i,r]of Object.entries(t))ht.get(i)!==r&&ht.set(i,r)}function Rp(){return{...ht.get("water")||{},...ht.get("waves")||{},...ht.get("chaos")||{},...ht.get("lod")||{},...ht.get("layers")||{}}}window.addEventListener("keydown",n=>{if(n.repeat||n.metaKey||n.ctrlKey||n.altKey)return;const e=n.target;if(e&&(e.tagName==="TEXTAREA"||e.tagName==="INPUT"&&e.type!=="range"))return;const i=n.key.toLowerCase(),r=()=>{e&&e.tagName==="INPUT"&&e.blur&&e.blur()};e&&e.tagName==="INPUT"&&e.type==="range"&&/^[wasdqe]$/.test(i)&&r();const a=/^(?:Digit|Numpad)([1-8])$/.exec(n.code);if(a){n.preventDefault(),r();const s=Number(a[1]);n.shiftKey?bp(s):Ap(s);return}if(i==="h"||i==="b")n.preventDefault(),r(),Ct.toggle();else if(i==="p")n.preventDefault(),r(),Ct.collapseSections(),Ct.flashStatus("categories collapsed","ok");else if(i==="c"){n.preventDefault(),r();const s=!ht.get("water.enable");ht.set("water.enable",s),Ct.flashStatus(s?"water on":"water off","ok")}else if(i==="t"){n.preventDefault(),r();const s=!ht.get("cloudsRender.atmosphere");ht.set("cloudsRender.atmosphere",s),Ct.flashStatus(s?"takram sky on":"takram sky off","ok")}else if(i==="g"){n.preventDefault(),r();const s=!ht.get("godrays.enable");ht.set("godrays.enable",s),Ct.flashStatus(s?"god rays on":"god rays off","ok")}else if(i==="x"){n.preventDefault(),r();const s=!ht.get("shadows.enable");ht.set("shadows.enable",s),Ct.flashStatus(s?"shadows on":"shadows off","ok")}else i==="f"?(n.preventDefault(),r(),Co.toggle()):i==="r"?(n.preventDefault(),r(),JM(),Ct.flashStatus("rolled","ok")):i==="escape"&&(n.preventDefault(),r(),Ct.collapsed||Ct.toggle())});function eb(){const n=structuredClone(yf);return n.skyDiagnosis={label:"sky diagnosis",icon:"◐",blurb:"horizon strip isolation · no fixes",fields:{skyOnly:{type:"bool",label:"Sky only",default:!1,hint:"hide island, trees, sea, and floor"},fastSkyBoot:{type:"bool",label:"Fast sky boot",default:!1,hint:"skip the slow voxel island build until this is on"},hideIsland:{type:"bool",label:"Hide island",default:!1,hint:"hide terrain, trees, and reference blocks while tuning sky/clouds"},seaOnlyStub:{type:"bool",label:"Sea only",default:!1,hint:"hide sky and terrain; keep sea surface/floor"},floorOnlyStub:{type:"bool",label:"Floor only",default:!1,hint:"hide sky, terrain, and sea surface; keep floor disc"},magentaClear:{type:"bool",label:"Magenta clear",default:!1,hint:"reveals uncovered pixels behind all rendered layers"},disableHorizonWarp:{type:"bool",label:"Disable warp",default:!1,hint:"forces unwarped sky-view LUT latitude mapping"},forceBelowHorizonFog:{type:"bool",label:"Below-horizon fog",default:!1,hint:"diagnostic fill for rays that hit the planet"}}},n.cloudsRender={label:"clouds render",icon:"◎",blurb:"sky choice · clouds compositor · quality",fields:{mode:{type:"int",label:"Mode",min:0,max:1,step:1,default:0,labels:["Takram ref","legacy sky"],hint:"switches between the faithful Takram sky/LUT stack and the legacy sim sky composite experiment"},atmosphere:{type:"bool",label:"Takram sky",default:!0,hint:"SkyMaterial fullscreen sky; off keeps the original sim sky"},clouds:{type:"bool",label:"Cloud layer",default:!0,hint:"Takram CloudsEffect over whichever sky is visible"},aerialPerspective:{type:"bool",label:"Takram haze",default:!0,hint:"Takram AerialPerspectiveEffect; off preserves the old sim color/lighting path"},quality:{type:"int",label:"Quality",min:0,max:3,step:1,default:2,labels:["low","medium","high","ultra"]},resolutionScale:{type:"float",label:"Cloud res",min:.25,max:1,step:.01,default:.75,hint:"volumetric cloud render resolution scale"},temporalUpscale:{type:"bool",label:"Temporal upscale",default:!0,hint:"Takram 1/4-res temporal upscale path"},exposure:{type:"float",label:"Exposure",min:.2,max:20,step:.05,default:10,hint:"Takram composer exposure; legacy sky clouds follow render.exposure to preserve scene color"}}},n.takramAtmosphere={label:"takram atmosphere",icon:"◐",blurb:"Takram sky/material flags",fields:{sun:{type:"bool",label:"Sun disk",default:!0,hint:"draw analytic sun in Takram sky"},ground:{type:"bool",label:"Ground branch",default:!0,hint:"SkyMaterial ground intersection branch"},groundAlbedo:{type:"float",label:"Ground albedo",min:0,max:.35,step:.005,default:.018,hint:"neutral ground bounce for rays below horizon"},transmittance:{type:"bool",label:"Transmittance",default:!0},inscatter:{type:"bool",label:"Inscatter",default:!0},sunLight:{type:"bool",label:"Sun light",default:!0,hint:"post-process sun irradiance on scene geometry"},skyLight:{type:"bool",label:"Sky light",default:!0,hint:"post-process sky irradiance on scene geometry"},albedoScale:{type:"float",label:"Albedo scale",min:0,max:2,step:.02,default:1}}},n.cloudWeather={label:"cloud weather",icon:"☁",blurb:"coverage · texture scale · drift",fields:{coverage:{type:"float",label:"Coverage",min:0,max:1,step:.01,default:.4,hint:"global weather coverage"},weatherRepeatX:{type:"float",label:"Weather X",min:5,max:260,step:1,default:100},weatherRepeatY:{type:"float",label:"Weather Y",min:5,max:260,step:1,default:100},weatherVelocityX:{type:"float",label:"Weather drift X",min:-.02,max:.02,step:5e-5,precision:5,default:.001,hint:"near 0.00005 is very slow; 0 freezes weather drift"},weatherVelocityY:{type:"float",label:"Weather drift Y",min:-.02,max:.02,step:5e-5,precision:5,default:0,hint:"vertical weather-map drift; keep near zero for slow clouds"},shapeRepeat:{type:"float",label:"Shape repeat",min:5e-5,max:.0012,step:1e-5,precision:5,default:3e-4},detailRepeat:{type:"float",label:"Detail repeat",min:5e-4,max:.02,step:1e-4,precision:4,default:.006},turbulenceRepeat:{type:"float",label:"Turbulence repeat",min:1,max:80,step:.5,default:20},turbulenceDisplacement:{type:"float",label:"Turbulence push",min:0,max:900,step:5,default:350}}},n.cloudLayer0={label:"cloud layer",icon:"▤",blurb:"Takram reference stack · optional single-layer isolate",fields:{referenceStack:{type:"bool",label:"Reference stack",default:!0,hint:"use Takram default r/g/b cloud layers instead of the single-layer isolate"},enabled:{type:"bool",label:"Layer on",default:!0},altitude:{type:"float",label:"Altitude",min:100,max:5e3,step:25,default:750,unit:"m"},height:{type:"float",label:"Height",min:0,max:2400,step:25,default:600,unit:"m"},densityScale:{type:"float",label:"Density",min:0,max:1.6,step:.01,default:.4},shapeAmount:{type:"float",label:"Shape amount",min:0,max:2,step:.02,default:1},shapeDetailAmount:{type:"float",label:"Detail amount",min:0,max:2,step:.02,default:.8},weatherExponent:{type:"float",label:"Weather exponent",min:.2,max:4,step:.02,default:1},shapeAlteringBias:{type:"float",label:"Shape bias",min:0,max:1,step:.01,default:.35},coverageFilterWidth:{type:"float",label:"Coverage feather",min:.05,max:1.5,step:.01,default:.6}}},n.cloudLighting={label:"cloud lighting",icon:"✦",blurb:"phase · powder · bounce",fields:{scatteringCoefficient:{type:"float",label:"Scatter",min:0,max:3,step:.001,precision:3,default:1,curve:4,uiStep:.001,hint:"curved so the useful low range around 0.04 is tunable"},absorptionCoefficient:{type:"float",label:"Absorb",min:0,max:3,step:.02,default:0},skyLightScale:{type:"float",label:"Sky light",min:0,max:3,step:.02,default:1},groundBounceScale:{type:"float",label:"Ground bounce",min:0,max:3,step:.02,default:1},powderScale:{type:"float",label:"Powder",min:0,max:2,step:.02,default:.8},powderExponent:{type:"float",label:"Powder exp",min:5,max:300,step:1,default:150},anisotropy1:{type:"float",label:"Anisotropy A",min:-.95,max:.95,step:.01,default:.7},anisotropy2:{type:"float",label:"Anisotropy B",min:-.95,max:.95,step:.01,default:-.2},anisotropyMix:{type:"float",label:"Phase mix",min:0,max:1,step:.01,default:.5},shapeDetail:{type:"bool",label:"Shape detail",default:!0},turbulence:{type:"bool",label:"Turbulence",default:!1},haze:{type:"bool",label:"Haze",default:!0}}},n.cloudShadows={label:"cloud shadows",icon:"◒",blurb:"Beer map · layer shadows · shafts",fields:{layerShadow:{type:"bool",label:"Layer shadow",default:!0},lightShafts:{type:"bool",label:"Light shafts",default:!1,hint:"enables Takram shadow-length buffer into AerialPerspectiveEffect"},cascadeCount:{type:"int",label:"Cascades",min:1,max:4,step:1,default:3},mapSize:{type:"int",label:"Map size",min:0,max:3,step:1,default:0,labels:["256","512","1024","2048"]},shadowIterations:{type:"int",label:"Shadow steps",min:8,max:160,step:1,default:50},shadowStep:{type:"float",label:"Shadow min step",min:20,max:500,step:5,default:100,unit:"m"},shadowLengthIterations:{type:"int",label:"Shaft steps",min:16,max:500,step:4,default:180},shadowLengthStep:{type:"float",label:"Shaft min step",min:20,max:500,step:5,default:80,unit:"m"},shadowLengthDistance:{type:"float",label:"Shaft reach",min:2e4,max:22e4,step:5e3,default:12e4,unit:"m"}}},n.cloudDebug={label:"debug",icon:"□",blurb:"shader overlays · march budgets",fields:{mode:{type:"int",label:"Debug view",min:0,max:7,step:1,default:0,labels:["off","samples","front depth","shadow map","cascades","uv","shadow length","velocity"]},primarySteps:{type:"int",label:"Primary steps",min:32,max:520,step:4,default:200},minStep:{type:"float",label:"Min step",min:10,max:300,step:5,default:80,unit:"m"},maxStep:{type:"float",label:"Max step",min:100,max:2500,step:25,default:1e3,unit:"m"},rayDistance:{type:"float",label:"Ray distance",min:2e4,max:22e4,step:5e3,default:12e4,unit:"m"}}},n.cloudFinishing={label:"lens / finishing",icon:"◌",blurb:"tone map · dither",fields:{toneMapping:{type:"int",label:"Tone map",min:0,max:3,step:1,default:0,labels:["ACES","neutral","AGX","linear"],hint:"ACES is the lab default; AGX is available for manual Takram comparison"},dithering:{type:"bool",label:"Dither",default:!0,hint:"postprocessing fullscreen dithering toggle"}}},n.water={label:"water",icon:"≈",blurb:"datum · seafloor · depth tint · masks",fields:{enable:{type:"bool",label:"Water",default:!0,hint:"C toggles only the water surface in this workshop"},seaLevel:{type:"float",label:"Water datum",min:-2,max:40,step:.5,default:9,unit:"m",hint:"structural; rebuilds terrain/water data"},floorDepth:{type:"float",label:"Seafloor depth",min:10,max:140,step:5,default:64,unit:"m"},floorShape:{type:"float",label:"Shelf shape",min:.35,max:1.8,step:.05,default:.85,hint:"lower = quick deep drop · higher = long shallow shelf"},floorRoughness:{type:"float",label:"Seafloor jag",min:0,max:3,step:.05,default:1,hint:"height variation below water"},deltaFloor:{type:"float",label:"Delta follow",min:0,max:1,step:.02,default:0,hint:"carves underwater floor along the river/delta channel"},surfaceLift:{type:"float",label:"Surface lift",min:-1,max:2,step:.02,default:.08,unit:"m",hint:"shore z-fighting diagnostic"},landMask:{type:"float",label:"Land mask",min:0,max:1,step:.02,default:1,hint:"fade water off generated land cells"},referenceBlocks:{type:"bool",label:"Reference blocks",default:!0,hint:"colored lagoon blocks for transparency/depth tuning"},debugView:{type:"int",label:"Debug view",min:0,max:5,step:1,default:0,labels:["final","depth","channel","wave","normal","land"],hint:"raw masks and procedural fields before art layering"},depthTint:{type:"float",label:"Depth tint",min:0,max:1.5,step:.02,default:.78,hint:"absorption/fog amount from generated seafloor depth"},lagoonTint:{type:"float",label:"Channel tint",min:0,max:2,step:.02,default:.18,hint:"generated river/delta mask tint; keep low while tuning PBR"}}},n.waves={label:"waves",icon:"≋",blurb:"POOL surface stages 3-5",fields:{waveSpeed:{type:"float",label:"Wave speed",min:0,max:3,step:.02,default:2.7,hint:"phase speed; tune for rolling, not sheet sliding"},glintSpeed:{type:"float",label:"Glint motion",min:0,max:5,step:.02,default:3.5,hint:"multiplies only the sun-highlight normal motion; 0 = locked"},glintScale:{type:"float",label:"Glint scale",min:.1,max:4,step:.02,default:1.34,hint:"wave-normal scale seen by the broad white sun path"},waveScale:{type:"float",label:"Wave scale",min:1e-4,max:.05,step:1e-4,precision:4,default:.0275,curve:2.8,uiStep:.001,hint:"world-space wave frequency; curved for low-end tuning"},waveRotation:{type:"float",label:"Wave rotation",min:-180,max:180,step:1,default:143,unit:"°",hint:"rotates the wave basis so flow is not locked to island axes"},surfaceOpacity:{type:"float",label:"Opacity",min:.02,max:1,step:.01,default:.55,hint:"water surface alpha; high opacity should stay blue, not black"},waveHeight:{type:"float",label:"Wave height",min:0,max:3,step:.02,default:1.92,unit:"m",hint:"top-down wants more; side angle wants less"},waveChoppy:{type:"float",label:"Wave chop",min:.5,max:8,step:.05,default:5.95,hint:"shape sharpness from the tutorial sea octave"},surfaceStage:{type:"int",label:"Surface stage",min:3,max:5,step:1,default:5,hint:"3 = vertex waves · 4 = detail/normal · 5 = depth distortion"},detailMix:{type:"float",label:"Detail mix",min:0,max:1,step:.02,default:.42,hint:"fragment detail over vertex waves"},normalStrength:{type:"float",label:"Normal strength",min:0,max:2,step:.02,default:.4,hint:"stage 4 normal perturbation"},refractionStrength:{type:"float",label:"Distortion",min:0,max:.7,step:.005,default:.18,hint:"stage 5 depth/mask distortion; not true screen refraction yet"}}},n}function tb(n,e){const t=structuredClone(e);for(const[i,r]of Object.entries(n))for(const[a,s]of Object.entries(r.fields||{})){const o=s.path||`${i}.${a}`;Dp(t,o,s.type==="range"?[...s.default]:s.default)}return t}function nb(){const n=new Set;for(const e of kM)for(const[t,i]of Object.entries($a[e]?.fields||{}))n.add(i.path||`${e}.${t}`);return[...n]}function Bd(n,e){const t=e.split(".");let i=n;for(const r of t){if(i==null)return;i=i[r]}return i}function Cp(n){return structuredClone(n||{})}function ib(n){return _u(structuredClone(Tp),Cp(n))}function rb(n){for(const[e,t]of Object.entries($a))for(const[i]of Object.entries(t.fields||{})){const r=$a[e].fields[i].path||`${e}.${i}`;Bd(n,r)===void 0&&Dp(n,r,Bd(Tp,r))}}function _u(n,e){for(const t in e){const i=e[t];i&&typeof i=="object"&&!Array.isArray(i)?((n[t]==null||typeof n[t]!="object")&&(n[t]={}),_u(n[t],i)):n[t]=Array.isArray(i)?i.slice():i}return n}function Dp(n,e,t){const i=e.split("."),r=i.pop();let a=n;for(const s of i)a=a[s]??={};a[r]=structuredClone(t)}function ab(n,e){e&&(n.scene.remove(e),e.traverse(l=>{l.geometry&&l.geometry.dispose(),l.material&&l.material.dispose?.()}));const t=n.vol;if(!t?.heightVox)return null;const i=ht.get("water.seaLevel"),r=[];for(let l=1;l<t.res-1;l+=Math.max(1,Math.floor(t.res/160)))for(let c=1;c<t.res-1;c+=Math.max(1,Math.floor(t.res/160))){const h=t.idx(c,l),d=t.heightVox[h]*t.vstep;t.channel?.[h]&&d<i-1.5&&r.push({i:c,j:l,idx:h,y:d})}if(!r.length){const l=t.res>>1;for(let c=-3;c<=3;c++){const h=me.clamp(l+c*8,0,t.res-1),d=me.clamp(l+c*5,0,t.res-1),f=t.idx(h,d);r.push({i:h,j:d,idx:f,y:t.heightVox[f]*t.vstep})}}const a=["#ff4d57","#ffb84a","#f6ff63","#55ff8d","#3df6ff","#806bff","#ff6ff0"],s=new Kn;s.name="IslandReferenceBlocks";const o=Math.min(a.length,r.length);for(let l=0;l<o;l++){const c=r[Math.floor(l/Math.max(1,o-1)*(r.length-1))],[h,d]=t.cellToWorld(c.i,c.j),f=4+l*1.4,g=new Xi(8,f,8),_=new Oe(a[l]),S=new ca({color:_,emissive:_,emissiveIntensity:.28,roughness:.55,metalness:0}),p=new wt(g,S);p.name=`IslandRefBlock${l+1}`,p.castShadow=!1,p.receiveShadow=!0,p.position.set(h,Math.min(i-.8,c.y+f*.5),d),s.add(p)}return n.scene.add(s),s}window.island={scene:Mt,store:ht,panel:Ct,perf:Co,captureSettleMs:cy,assets:()=>ZM,diagnostics:()=>Mt.getHorizonDiagnosticSnapshot(),takram:()=>na.getDebugSnapshot(),setDiagnosis:(n={})=>{for(const[e,t]of Object.entries(n))ht.set(`skyDiagnosis.${e}`,t);return Mt.getHorizonDiagnosticSnapshot()},setTakram:(n={})=>{const e={atmosphere:"cloudsRender.atmosphere",mode:"cloudsRender.mode",sky:"cloudsRender.atmosphere",takramSky:"cloudsRender.atmosphere",clouds:"cloudsRender.clouds",haze:"cloudsRender.aerialPerspective",aerialPerspective:"cloudsRender.aerialPerspective",exposure:"cloudsRender.exposure",quality:"cloudsRender.quality",resolutionScale:"cloudsRender.resolutionScale",temporalUpscale:"cloudsRender.temporalUpscale",coverage:"cloudWeather.coverage",toneMapping:"cloudFinishing.toneMapping",dithering:"cloudFinishing.dithering"};for(const[t,i]of Object.entries(n))ht.set(e[t]||t,i);return na.getDebugSnapshot()}};
