import"./chunk.GEO5BVDQ.js";var Rt=()=>typeof window<"u"&&"showSaveFilePicker"in window,Ca=/^(con|prn|aux|nul|com[1-9]|lpt[1-9])(\.|$)/i;function Pr(e,t="received.bin"){let r=(String(e??"").replace(/[\u0000-\u001f\u007f]/g,"").split(/[\\/]/).filter(Boolean).pop()??"").replace(/^\.+/,"").replace(/[<>:"|?*]/g,"_").trim().slice(0,180);return r===""||Ca.test(r)?t:r}async function fn(e){let t=Pr(e.name);if(Rt()){let r;try{r=await window.showSaveFilePicker({suggestedName:t})}catch(a){if(a?.name==="AbortError")return null;throw a}let o=await r.createWritable();return{streaming:!0,name:t,write:a=>o.write(a),close:()=>o.close(),abort:()=>o.abort().catch(()=>{})}}let n=[];return{streaming:!1,name:t,async write(r){n.push(r)},async close(){let r=new Blob(n,{type:e.mime||"application/octet-stream"});n=[];let o=URL.createObjectURL(r),a=Object.assign(document.createElement("a"),{href:o,download:t});document.body.append(a),a.click(),a.remove(),setTimeout(()=>URL.revokeObjectURL(o),6e4)},async abort(){n=[]}}}var Ma={createSink:fn,canStreamToDisk:Rt};function st(){return Ma}var Ge=function(e,t){let o=e,a=at[t],s=null,i=0,c=null,h=[],f={},l=function(k,m){i=o*4+17,s=(function(w){let E=new Array(w);for(let S=0;S<w;S+=1){E[S]=new Array(w);for(let C=0;C<w;C+=1)E[S][C]=null}return E})(i),d(0,0),d(i-7,0),d(0,i-7),_(),b(),B(k,m),o>=7&&v(k),c==null&&(c=z(o,a,h)),P(c,m)},d=function(k,m){for(let w=-1;w<=7;w+=1)if(!(k+w<=-1||i<=k+w))for(let E=-1;E<=7;E+=1)m+E<=-1||i<=m+E||(0<=w&&w<=6&&(E==0||E==6)||0<=E&&E<=6&&(w==0||w==6)||2<=w&&w<=4&&2<=E&&E<=4?s[k+w][m+E]=!0:s[k+w][m+E]=!1)},u=function(){let k=0,m=0;for(let w=0;w<8;w+=1){l(!0,w);let E=Ae.getLostPoint(f);(w==0||k>E)&&(k=E,m=w)}return m},b=function(){for(let k=8;k<i-8;k+=1)s[k][6]==null&&(s[k][6]=k%2==0);for(let k=8;k<i-8;k+=1)s[6][k]==null&&(s[6][k]=k%2==0)},_=function(){let k=Ae.getPatternPosition(o);for(let m=0;m<k.length;m+=1)for(let w=0;w<k.length;w+=1){let E=k[m],S=k[w];if(s[E][S]==null)for(let C=-2;C<=2;C+=1)for(let L=-2;L<=2;L+=1)C==-2||C==2||L==-2||L==2||C==0&&L==0?s[E+C][S+L]=!0:s[E+C][S+L]=!1}},v=function(k){let m=Ae.getBCHTypeNumber(o);for(let w=0;w<18;w+=1){let E=!k&&(m>>w&1)==1;s[Math.floor(w/3)][w%3+i-8-3]=E}for(let w=0;w<18;w+=1){let E=!k&&(m>>w&1)==1;s[w%3+i-8-3][Math.floor(w/3)]=E}},B=function(k,m){let w=a<<3|m,E=Ae.getBCHTypeInfo(w);for(let S=0;S<15;S+=1){let C=!k&&(E>>S&1)==1;S<6?s[S][8]=C:S<8?s[S+1][8]=C:s[i-15+S][8]=C}for(let S=0;S<15;S+=1){let C=!k&&(E>>S&1)==1;S<8?s[8][i-S-1]=C:S<9?s[8][15-S-1+1]=C:s[8][15-S-1]=C}s[i-8][8]=!k},P=function(k,m){let w=-1,E=i-1,S=7,C=0,L=Ae.getMaskFunction(m);for(let p=i-1;p>0;p-=2)for(p==6&&(p-=1);;){for(let g=0;g<2;g+=1)if(s[E][p-g]==null){let x=!1;C<k.length&&(x=(k[C]>>>S&1)==1),L(E,p-g)&&(x=!x),s[E][p-g]=x,S-=1,S==-1&&(C+=1,S=7)}if(E+=w,E<0||i<=E){E-=w,w=-w;break}}},O=function(k,m){let w=0,E=0,S=0,C=new Array(m.length),L=new Array(m.length);for(let T=0;T<m.length;T+=1){let M=m[T].dataCount,j=m[T].totalCount-M;E=Math.max(E,M),S=Math.max(S,j),C[T]=new Array(M);for(let H=0;H<C[T].length;H+=1)C[T][H]=255&k.getBuffer()[H+w];w+=M;let W=Ae.getErrorCorrectPolynomial(j),D=it(C[T],W.getLength()-1).mod(W);L[T]=new Array(W.getLength()-1);for(let H=0;H<L[T].length;H+=1){let G=H+D.getLength()-L[T].length;L[T][H]=G>=0?D.getAt(G):0}}let p=0;for(let T=0;T<m.length;T+=1)p+=m[T].totalCount;let g=new Array(p),x=0;for(let T=0;T<E;T+=1)for(let M=0;M<m.length;M+=1)T<C[M].length&&(g[x]=C[M][T],x+=1);for(let T=0;T<S;T+=1)for(let M=0;M<m.length;M+=1)T<L[M].length&&(g[x]=L[M][T],x+=1);return g},z=function(k,m,w){let E=Rr.getRSBlocks(k,m),S=Cr();for(let L=0;L<w.length;L+=1){let p=w[L];S.put(p.getMode(),4),S.put(p.getLength(),Ae.getLengthInBits(p.getMode(),k)),p.write(S)}let C=0;for(let L=0;L<E.length;L+=1)C+=E[L].dataCount;if(S.getLengthInBits()>C*8)throw"code length overflow. ("+S.getLengthInBits()+">"+C*8+")";for(S.getLengthInBits()+4<=C*8&&S.put(0,4);S.getLengthInBits()%8!=0;)S.putBit(!1);for(;!(S.getLengthInBits()>=C*8||(S.put(236,8),S.getLengthInBits()>=C*8));)S.put(17,8);return O(S,E)};f.addData=function(k,m){m=m||"Byte";let w=null;switch(m){case"Numeric":w=Ba(k);break;case"Alphanumeric":w=Oa(k);break;case"Byte":w=Da(k);break;case"Kanji":w=Ia(k);break;default:throw"mode:"+m}h.push(w),c=null},f.isDark=function(k,m){if(k<0||i<=k||m<0||i<=m)throw k+","+m;return s[k][m]},f.getModuleCount=function(){return i},f.make=function(){if(o<1){let k=1;for(;k<40;k++){let m=Rr.getRSBlocks(k,a),w=Cr();for(let S=0;S<h.length;S++){let C=h[S];w.put(C.getMode(),4),w.put(C.getLength(),Ae.getLengthInBits(C.getMode(),k)),C.write(w)}let E=0;for(let S=0;S<m.length;S++)E+=m[S].dataCount;if(w.getLengthInBits()<=E*8)break}o=k}l(!1,u())},f.createTableTag=function(k,m){k=k||2,m=typeof m>"u"?k*4:m;let w="";w+='<table style="',w+=" border-width: 0px; border-style: none;",w+=" border-collapse: collapse;",w+=" padding: 0px; margin: "+m+"px;",w+='">',w+="<tbody>";for(let E=0;E<f.getModuleCount();E+=1){w+="<tr>";for(let S=0;S<f.getModuleCount();S+=1)w+='<td style="',w+=" border-width: 0px; border-style: none;",w+=" border-collapse: collapse;",w+=" padding: 0px; margin: 0px;",w+=" width: "+k+"px;",w+=" height: "+k+"px;",w+=" background-color: ",w+=f.isDark(E,S)?"#000000":"#ffffff",w+=";",w+='"/>';w+="</tr>"}return w+="</tbody>",w+="</table>",w},f.createSvgTag=function(k,m,w,E){let S={};typeof arguments[0]=="object"&&(S=arguments[0],k=S.cellSize,m=S.margin,w=S.alt,E=S.title),k=k||2,m=typeof m>"u"?k*4:m,w=typeof w=="string"?{text:w}:w||{},w.text=w.text||null,w.id=w.text?w.id||"qrcode-description":null,E=typeof E=="string"?{text:E}:E||{},E.text=E.text||null,E.id=E.text?E.id||"qrcode-title":null;let C=f.getModuleCount()*k+m*2,L,p,g,x,T="",M;for(M="l"+k+",0 0,"+k+" -"+k+",0 0,-"+k+"z ",T+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',T+=S.scalable?"":' width="'+C+'px" height="'+C+'px"',T+=' viewBox="0 0 '+C+" "+C+'" ',T+=' preserveAspectRatio="xMinYMin meet"',T+=E.text||w.text?' role="img" aria-labelledby="'+R([E.id,w.id].join(" ").trim())+'"':"",T+=">",T+=E.text?'<title id="'+R(E.id)+'">'+R(E.text)+"</title>":"",T+=w.text?'<description id="'+R(w.id)+'">'+R(w.text)+"</description>":"",T+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',T+='<path d="',g=0;g<f.getModuleCount();g+=1)for(x=g*k+m,L=0;L<f.getModuleCount();L+=1)f.isDark(g,L)&&(p=L*k+m,T+="M"+p+","+x+M);return T+='" stroke="transparent" fill="black"/>',T+="</svg>",T},f.createDataURL=function(k,m){k=k||2,m=typeof m>"u"?k*4:m;let w=f.getModuleCount()*k+m*2,E=m,S=w-m;return Ha(w,w,function(C,L){if(E<=C&&C<S&&E<=L&&L<S){let p=Math.floor((C-E)/k),g=Math.floor((L-E)/k);return f.isDark(g,p)?0:1}else return 1})},f.createImgTag=function(k,m,w){k=k||2,m=typeof m>"u"?k*4:m;let E=f.getModuleCount()*k+m*2,S="";return S+="<img",S+=' src="',S+=f.createDataURL(k,m),S+='"',S+=' width="',S+=E,S+='"',S+=' height="',S+=E,S+='"',w&&(S+=' alt="',S+=R(w),S+='"'),S+="/>",S};let R=function(k){let m="";for(let w=0;w<k.length;w+=1){let E=k.charAt(w);switch(E){case"<":m+="&lt;";break;case">":m+="&gt;";break;case"&":m+="&amp;";break;case'"':m+="&quot;";break;default:m+=E;break}}return m},I=function(k){k=typeof k>"u"?2:k;let w=f.getModuleCount()*1+k*2,E=k,S=w-k,C,L,p,g,x,T={"\u2588\u2588":"\u2588","\u2588 ":"\u2580"," \u2588":"\u2584","  ":" "},M={"\u2588\u2588":"\u2580","\u2588 ":"\u2580"," \u2588":" ","  ":" "},j="";for(C=0;C<w;C+=2){for(p=Math.floor((C-E)/1),g=Math.floor((C+1-E)/1),L=0;L<w;L+=1)x="\u2588",E<=L&&L<S&&E<=C&&C<S&&f.isDark(p,Math.floor((L-E)/1))&&(x=" "),E<=L&&L<S&&E<=C+1&&C+1<S&&f.isDark(g,Math.floor((L-E)/1))?x+=" ":x+="\u2588",j+=k<1&&C+1>=S?M[x]:T[x];j+=`
`}return w%2&&k>0?j.substring(0,j.length-w-1)+Array(w+1).join("\u2580"):j.substring(0,j.length-1)};return f.createASCII=function(k,m){if(k=k||1,k<2)return I(m);k-=1,m=typeof m>"u"?k*2:m;let w=f.getModuleCount()*k+m*2,E=m,S=w-m,C,L,p,g,x=Array(k+1).join("\u2588\u2588"),T=Array(k+1).join("  "),M="",j="";for(C=0;C<w;C+=1){for(p=Math.floor((C-E)/k),j="",L=0;L<w;L+=1)g=1,E<=L&&L<S&&E<=C&&C<S&&f.isDark(p,Math.floor((L-E)/k))&&(g=0),j+=g?x:T;for(p=0;p<k;p+=1)M+=j+`
`}return M.substring(0,M.length-1)},f.renderTo2dContext=function(k,m){m=m||2;let w=f.getModuleCount();for(let E=0;E<w;E++)for(let S=0;S<w;S++)k.fillStyle=f.isDark(E,S)?"black":"white",k.fillRect(S*m,E*m,m,m)},f};Ge.stringToBytes=function(e){let t=[];for(let n=0;n<e.length;n+=1){let r=e.charCodeAt(n);t.push(r&255)}return t};Ge.createStringToBytes=function(e,t){let n=(function(){let o=Na(e),a=function(){let c=o.read();if(c==-1)throw"eof";return c},s=0,i={};for(;;){let c=o.read();if(c==-1)break;let h=a(),f=a(),l=a(),d=String.fromCharCode(c<<8|h),u=f<<8|l;i[d]=u,s+=1}if(s!=t)throw s+" != "+t;return i})(),r=63;return function(o){let a=[];for(let s=0;s<o.length;s+=1){let i=o.charCodeAt(s);if(i<128)a.push(i);else{let c=n[o.charAt(s)];typeof c=="number"?(c&255)==c?a.push(c):(a.push(c>>>8),a.push(c&255)):a.push(r)}}return a}};var oe={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},at={L:1,M:0,Q:3,H:2},Ee={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},Ae=(function(){let e=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],t=1335,n=7973,r=21522,o={},a=function(s){let i=0;for(;s!=0;)i+=1,s>>>=1;return i};return o.getBCHTypeInfo=function(s){let i=s<<10;for(;a(i)-a(t)>=0;)i^=t<<a(i)-a(t);return(s<<10|i)^r},o.getBCHTypeNumber=function(s){let i=s<<12;for(;a(i)-a(n)>=0;)i^=n<<a(i)-a(n);return s<<12|i},o.getPatternPosition=function(s){return e[s-1]},o.getMaskFunction=function(s){switch(s){case Ee.PATTERN000:return function(i,c){return(i+c)%2==0};case Ee.PATTERN001:return function(i,c){return i%2==0};case Ee.PATTERN010:return function(i,c){return c%3==0};case Ee.PATTERN011:return function(i,c){return(i+c)%3==0};case Ee.PATTERN100:return function(i,c){return(Math.floor(i/2)+Math.floor(c/3))%2==0};case Ee.PATTERN101:return function(i,c){return i*c%2+i*c%3==0};case Ee.PATTERN110:return function(i,c){return(i*c%2+i*c%3)%2==0};case Ee.PATTERN111:return function(i,c){return(i*c%3+(i+c)%2)%2==0};default:throw"bad maskPattern:"+s}},o.getErrorCorrectPolynomial=function(s){let i=it([1],0);for(let c=0;c<s;c+=1)i=i.multiply(it([1,Pe.gexp(c)],0));return i},o.getLengthInBits=function(s,i){if(1<=i&&i<10)switch(s){case oe.MODE_NUMBER:return 10;case oe.MODE_ALPHA_NUM:return 9;case oe.MODE_8BIT_BYTE:return 8;case oe.MODE_KANJI:return 8;default:throw"mode:"+s}else if(i<27)switch(s){case oe.MODE_NUMBER:return 12;case oe.MODE_ALPHA_NUM:return 11;case oe.MODE_8BIT_BYTE:return 16;case oe.MODE_KANJI:return 10;default:throw"mode:"+s}else if(i<41)switch(s){case oe.MODE_NUMBER:return 14;case oe.MODE_ALPHA_NUM:return 13;case oe.MODE_8BIT_BYTE:return 16;case oe.MODE_KANJI:return 12;default:throw"mode:"+s}else throw"type:"+i},o.getLostPoint=function(s){let i=s.getModuleCount(),c=0;for(let l=0;l<i;l+=1)for(let d=0;d<i;d+=1){let u=0,b=s.isDark(l,d);for(let _=-1;_<=1;_+=1)if(!(l+_<0||i<=l+_))for(let v=-1;v<=1;v+=1)d+v<0||i<=d+v||_==0&&v==0||b==s.isDark(l+_,d+v)&&(u+=1);u>5&&(c+=3+u-5)}for(let l=0;l<i-1;l+=1)for(let d=0;d<i-1;d+=1){let u=0;s.isDark(l,d)&&(u+=1),s.isDark(l+1,d)&&(u+=1),s.isDark(l,d+1)&&(u+=1),s.isDark(l+1,d+1)&&(u+=1),(u==0||u==4)&&(c+=3)}for(let l=0;l<i;l+=1)for(let d=0;d<i-6;d+=1)s.isDark(l,d)&&!s.isDark(l,d+1)&&s.isDark(l,d+2)&&s.isDark(l,d+3)&&s.isDark(l,d+4)&&!s.isDark(l,d+5)&&s.isDark(l,d+6)&&(c+=40);for(let l=0;l<i;l+=1)for(let d=0;d<i-6;d+=1)s.isDark(d,l)&&!s.isDark(d+1,l)&&s.isDark(d+2,l)&&s.isDark(d+3,l)&&s.isDark(d+4,l)&&!s.isDark(d+5,l)&&s.isDark(d+6,l)&&(c+=40);let h=0;for(let l=0;l<i;l+=1)for(let d=0;d<i;d+=1)s.isDark(d,l)&&(h+=1);let f=Math.abs(100*h/i/i-50)/5;return c+=f*10,c},o})(),Pe=(function(){let e=new Array(256),t=new Array(256);for(let r=0;r<8;r+=1)e[r]=1<<r;for(let r=8;r<256;r+=1)e[r]=e[r-4]^e[r-5]^e[r-6]^e[r-8];for(let r=0;r<255;r+=1)t[e[r]]=r;let n={};return n.glog=function(r){if(r<1)throw"glog("+r+")";return t[r]},n.gexp=function(r){for(;r<0;)r+=255;for(;r>=256;)r-=255;return e[r]},n})(),it=function(e,t){if(typeof e.length>"u")throw e.length+"/"+t;let n=(function(){let o=0;for(;o<e.length&&e[o]==0;)o+=1;let a=new Array(e.length-o+t);for(let s=0;s<e.length-o;s+=1)a[s]=e[s+o];return a})(),r={};return r.getAt=function(o){return n[o]},r.getLength=function(){return n.length},r.multiply=function(o){let a=new Array(r.getLength()+o.getLength()-1);for(let s=0;s<r.getLength();s+=1)for(let i=0;i<o.getLength();i+=1)a[s+i]^=Pe.gexp(Pe.glog(r.getAt(s))+Pe.glog(o.getAt(i)));return it(a,0)},r.mod=function(o){if(r.getLength()-o.getLength()<0)return r;let a=Pe.glog(r.getAt(0))-Pe.glog(o.getAt(0)),s=new Array(r.getLength());for(let i=0;i<r.getLength();i+=1)s[i]=r.getAt(i);for(let i=0;i<o.getLength();i+=1)s[i]^=Pe.gexp(Pe.glog(o.getAt(i))+a);return it(s,0).mod(o)},r},Rr=(function(){let e=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],t=function(o,a){let s={};return s.totalCount=o,s.dataCount=a,s},n={},r=function(o,a){switch(a){case at.L:return e[(o-1)*4+0];case at.M:return e[(o-1)*4+1];case at.Q:return e[(o-1)*4+2];case at.H:return e[(o-1)*4+3];default:return}};return n.getRSBlocks=function(o,a){let s=r(o,a);if(typeof s>"u")throw"bad rs block @ typeNumber:"+o+"/errorCorrectionLevel:"+a;let i=s.length/3,c=[];for(let h=0;h<i;h+=1){let f=s[h*3+0],l=s[h*3+1],d=s[h*3+2];for(let u=0;u<f;u+=1)c.push(t(l,d))}return c},n})(),Cr=function(){let e=[],t=0,n={};return n.getBuffer=function(){return e},n.getAt=function(r){let o=Math.floor(r/8);return(e[o]>>>7-r%8&1)==1},n.put=function(r,o){for(let a=0;a<o;a+=1)n.putBit((r>>>o-a-1&1)==1)},n.getLengthInBits=function(){return t},n.putBit=function(r){let o=Math.floor(t/8);e.length<=o&&e.push(0),r&&(e[o]|=128>>>t%8),t+=1},n},Ba=function(e){let t=oe.MODE_NUMBER,n=e,r={};r.getMode=function(){return t},r.getLength=function(s){return n.length},r.write=function(s){let i=n,c=0;for(;c+2<i.length;)s.put(o(i.substring(c,c+3)),10),c+=3;c<i.length&&(i.length-c==1?s.put(o(i.substring(c,c+1)),4):i.length-c==2&&s.put(o(i.substring(c,c+2)),7))};let o=function(s){let i=0;for(let c=0;c<s.length;c+=1)i=i*10+a(s.charAt(c));return i},a=function(s){if("0"<=s&&s<="9")return s.charCodeAt(0)-48;throw"illegal char :"+s};return r},Oa=function(e){let t=oe.MODE_ALPHA_NUM,n=e,r={};r.getMode=function(){return t},r.getLength=function(a){return n.length},r.write=function(a){let s=n,i=0;for(;i+1<s.length;)a.put(o(s.charAt(i))*45+o(s.charAt(i+1)),11),i+=2;i<s.length&&a.put(o(s.charAt(i)),6)};let o=function(a){if("0"<=a&&a<="9")return a.charCodeAt(0)-48;if("A"<=a&&a<="Z")return a.charCodeAt(0)-65+10;switch(a){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+a}};return r},Da=function(e){let t=oe.MODE_8BIT_BYTE,n=e,r=Ge.stringToBytes(e),o={};return o.getMode=function(){return t},o.getLength=function(a){return r.length},o.write=function(a){for(let s=0;s<r.length;s+=1)a.put(r[s],8)},o},Ia=function(e){let t=oe.MODE_KANJI,n=e,r=Ge.stringToBytes;(function(s,i){let c=r(s);if(c.length!=2||(c[0]<<8|c[1])!=i)throw"sjis not supported."})("\u53CB",38726);let o=r(e),a={};return a.getMode=function(){return t},a.getLength=function(s){return~~(o.length/2)},a.write=function(s){let i=o,c=0;for(;c+1<i.length;){let h=(255&i[c])<<8|255&i[c+1];if(33088<=h&&h<=40956)h-=33088;else if(57408<=h&&h<=60351)h-=49472;else throw"illegal char at "+(c+1)+"/"+h;h=(h>>>8&255)*192+(h&255),s.put(h,13),c+=2}if(c<i.length)throw"illegal char at "+(c+1)},a},Mr=function(){let e=[],t={};return t.writeByte=function(n){e.push(n&255)},t.writeShort=function(n){t.writeByte(n),t.writeByte(n>>>8)},t.writeBytes=function(n,r,o){r=r||0,o=o||n.length;for(let a=0;a<o;a+=1)t.writeByte(n[a+r])},t.writeString=function(n){for(let r=0;r<n.length;r+=1)t.writeByte(n.charCodeAt(r))},t.toByteArray=function(){return e},t.toString=function(){let n="";n+="[";for(let r=0;r<e.length;r+=1)r>0&&(n+=","),n+=e[r];return n+="]",n},t},La=function(){let e=0,t=0,n=0,r="",o={},a=function(i){r+=String.fromCharCode(s(i&63))},s=function(i){if(i<0)throw"n:"+i;if(i<26)return 65+i;if(i<52)return 97+(i-26);if(i<62)return 48+(i-52);if(i==62)return 43;if(i==63)return 47;throw"n:"+i};return o.writeByte=function(i){for(e=e<<8|i&255,t+=8,n+=1;t>=6;)a(e>>>t-6),t-=6},o.flush=function(){if(t>0&&(a(e<<6-t),e=0,t=0),n%3!=0){let i=3-n%3;for(let c=0;c<i;c+=1)r+="="}},o.toString=function(){return r},o},Na=function(e){let t=e,n=0,r=0,o=0,a={};a.read=function(){for(;o<8;){if(n>=t.length){if(o==0)return-1;throw"unexpected end of file./"+o}let c=t.charAt(n);if(n+=1,c=="=")return o=0,-1;if(c.match(/^\s$/))continue;r=r<<6|s(c.charCodeAt(0)),o+=6}let i=r>>>o-8&255;return o-=8,i};let s=function(i){if(65<=i&&i<=90)return i-65;if(97<=i&&i<=122)return i-97+26;if(48<=i&&i<=57)return i-48+52;if(i==43)return 62;if(i==47)return 63;throw"c:"+i};return a},za=function(e,t){let n=e,r=t,o=new Array(e*t),a={};a.setPixel=function(h,f,l){o[f*n+h]=l},a.write=function(h){h.writeString("GIF87a"),h.writeShort(n),h.writeShort(r),h.writeByte(128),h.writeByte(0),h.writeByte(0),h.writeByte(0),h.writeByte(0),h.writeByte(0),h.writeByte(255),h.writeByte(255),h.writeByte(255),h.writeString(","),h.writeShort(0),h.writeShort(0),h.writeShort(n),h.writeShort(r),h.writeByte(0);let f=2,l=i(f);h.writeByte(f);let d=0;for(;l.length-d>255;)h.writeByte(255),h.writeBytes(l,d,255),d+=255;h.writeByte(l.length-d),h.writeBytes(l,d,l.length-d),h.writeByte(0),h.writeString(";")};let s=function(h){let f=h,l=0,d=0,u={};return u.write=function(b,_){if(b>>>_)throw"length over";for(;l+_>=8;)f.writeByte(255&(b<<l|d)),_-=8-l,b>>>=8-l,d=0,l=0;d=b<<l|d,l=l+_},u.flush=function(){l>0&&f.writeByte(d)},u},i=function(h){let f=1<<h,l=(1<<h)+1,d=h+1,u=c();for(let P=0;P<f;P+=1)u.add(String.fromCharCode(P));u.add(String.fromCharCode(f)),u.add(String.fromCharCode(l));let b=Mr(),_=s(b);_.write(f,d);let v=0,B=String.fromCharCode(o[v]);for(v+=1;v<o.length;){let P=String.fromCharCode(o[v]);v+=1,u.contains(B+P)?B=B+P:(_.write(u.indexOf(B),d),u.size()<4095&&(u.size()==1<<d&&(d+=1),u.add(B+P)),B=P)}return _.write(u.indexOf(B),d),_.write(l,d),_.flush(),b.toByteArray()},c=function(){let h={},f=0,l={};return l.add=function(d){if(l.contains(d))throw"dup key:"+d;h[d]=f,f+=1},l.size=function(){return f},l.indexOf=function(d){return h[d]},l.contains=function(d){return typeof h[d]<"u"},l};return a},Ha=function(e,t,n){let r=za(e,t);for(let i=0;i<t;i+=1)for(let c=0;c<e;c+=1)r.setPixel(c,i,n(c,i));let o=Mr();r.write(o);let a=La(),s=o.toByteArray();for(let i=0;i<s.length;i+=1)a.writeByte(s[i]);return a.flush(),"data:image/gif;base64,"+a},un=Ge,eh=Ge.stringToBytes;var ja=async()=>(await import("./jsQR.QLJDMRMY.js")).default;function pn(e,{cellSize:t=6,margin:n=3}={}){let r=un(0,"M");r.addData(e),r.make();let o=document.createElement("template");o.innerHTML=r.createSvgTag({cellSize:t,margin:n,scalable:!0});let a=o.content.firstElementChild,s=(r.getModuleCount()+n*2)*t;return a.setAttribute("width",String(s)),a.setAttribute("height",String(s)),a}function Br(e,t,{ec:n="L",margin:r=2}={}){let o=un(0,n);o.addData(e),o.make();let a=o.getModuleCount(),s=a+r*2;t.width=s,t.height=s;let i=t.getContext("2d");if(!i)throw new Error("Could not open a 2D canvas to draw the code");i.fillStyle="#fff",i.fillRect(0,0,s,s),i.fillStyle="#000";for(let c=0;c<a;c++)for(let h=0;h<a;h++)o.isDark(c,h)&&i.fillRect(h+r,c+r,1,1)}async function qa(){if("BarcodeDetector"in globalThis)try{let r=globalThis.BarcodeDetector,o=new r({formats:["qr_code"]});return async a=>{let[s]=await o.detect(a);return s?.rawValue??null}}catch{}let e=await ja(),t=document.createElement("canvas"),n=t.getContext("2d",{willReadFrequently:!0});if(!n)throw new Error("Could not open a 2D canvas to decode the code");return async r=>{let o=r.videoWidth,a=r.videoHeight;return!o||!a?null:(t.width=o,t.height=a,n.drawImage(r,0,0,o,a),e(n.getImageData(0,0,o,a).data,o,a,{inversionAttempts:"dontInvert"})?.data??null)}}async function mn({video:e,onCode:t,signal:n}){if(n.aborted)return;let r=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"},audio:!1}),o=()=>{for(let a of r.getTracks())a.stop();e.srcObject=null};try{e.srcObject=r,e.setAttribute("playsinline",""),await e.play();let a=await qa();if(n.aborted)return;await new Promise(s=>{let i=!1,c=null;n.addEventListener("abort",()=>{i=!0,s(void 0)},{once:!0});let h=async()=>{if(!i){try{let f=await a(e);f&&f!==c&&(c=f,t(f))}catch{}requestAnimationFrame(h)}};requestAnimationFrame(h)})}finally{o()}}async function gn({video:e,signal:t}){let n=new AbortController,r=()=>n.abort();t?.aborted?n.abort():t?.addEventListener("abort",r,{once:!0});let o=null;try{await mn({video:e,signal:n.signal,onCode:a=>{o===null&&(o=a,n.abort())}})}finally{t?.removeEventListener("abort",r)}if(o===null)throw new DOMException("Scan cancelled","AbortError");return o}var ze=()=>typeof navigator<"u"&&!!navigator.mediaDevices?.getUserMedia;function Mt(e){let t=null,n=0,r=null;function o(s){if(r=null,s>=e.size)return;let i=e.slice(s,Math.min(s+2097152,e.size));r={start:s,bytes:i.arrayBuffer().then(c=>new Uint8Array(c),()=>null)}}async function a(s){let i=r&&r.start===s?r:null;if(r=null,t=null,n=s,i&&(t=await i.bytes),t===null){let c=e.slice(s,Math.min(s+2097152,e.size));t=new Uint8Array(await c.arrayBuffer())}o(n+t.length)}return{name:e.name,size:e.size,mime:e.type||"application/octet-stream",async slice(s,i){if(i-s>2097152)return new Uint8Array(await e.slice(s,i).arrayBuffer());if(t!==null&&s>=n&&i<=n+t.length)return Ct(t,s-n,i-n);if(t!==null&&s>=n&&s<n+t.length){let c=Ct(t,s-n,t.length);await a(n+t.length);let h=new Uint8Array(i-s);return h.set(c),h.set(Ct(t,0,h.length-c.length),c.length),h}return await a(s),Ct(t,s-n,i-n)}}}function Ct(e,t,n){if(e===null)throw new Error("read from an unloaded block");return e.slice(t,n)}var Ua=new TextEncoder().encode("qrdrop/v1"),$a=new TextEncoder;function Ir(){return crypto.getRandomValues(new Uint8Array(32))}async function Lr(e,t,n){let r=await crypto.subtle.importKey("raw",e,"HKDF",!1,["deriveBits"]),o=await crypto.subtle.deriveBits({name:"HKDF",hash:"SHA-256",salt:Ua,info:$a.encode(t)},r,n*8);return new Uint8Array(o)}async function Nr(e,t=null){let n=t===null?"topic":`topic/${t}`;return Re(await Lr(e,n,16))}async function zr(e){return Re(await Lr(e,"signal",32))}function Re(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function ct(e){let t=e.replace(/-/g,"+").replace(/_/g,"/"),n=atob(t.padEnd(Math.ceil(t.length/4)*4,"="));return Uint8Array.from(n,r=>r.charCodeAt(0))}function Bt(e){return`qrdrop:${Re(e)}`}function Hr(e,t){let n;try{n=new URL(t)}catch{throw new Error("base-url must be an absolute http(s) URL")}if(n.protocol!=="http:"&&n.protocol!=="https:")throw new Error("base-url must be an absolute http(s) URL");return n.hash="",n.search="",`${n.toString()}#${Bt(e)}`}function Or(e){let t=ct(e);if(t.length!==32)throw new Error("Malformed qrdrop code \u2014 expected 32 bytes of key, base64url-encoded");return t}var Dr=/^qrdrop:([A-Za-z0-9_-]{43})$/;function Ot(e){let t=e.trim(),n=Dr.exec(t);if(n)return Or(n[1]);let r;try{r=new URL(t)}catch{throw new Error("Not a qrdrop code \u2014 expected qrdrop:\u2026 or a link with #qrdrop:\u2026 in it")}if(r.protocol!=="http:"&&r.protocol!=="https:")throw new Error("Not a qrdrop code \u2014 expected qrdrop:\u2026 or a link with #qrdrop:\u2026 in it");let o=Dr.exec(r.hash.slice(1));if(o)return Or(o[1]);throw/qrdrop:[A-Za-z0-9_-]+/.test(r.search)||/qrdrop:[A-Za-z0-9_-]+/.test(r.pathname)?new Error("qrdrop code must be in the URL fragment (after #), not the query string or path"):new Error("Not a qrdrop code \u2014 expected qrdrop:\u2026 or a link with #qrdrop:\u2026 in it")}var Gr=Object.freeze({p:0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2fn,n:0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141n,h:1n,a:0n,b:7n,Gx:0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798n,Gy:0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8n}),{p:Ce,n:ht,Gx:Fa,Gy:Ka,b:Qr}=Gr,se=32,Qe=64,wn={publicKey:se+1,publicKeyUncompressed:Qe+1,signature:Qe,seed:se+se/2},Q=(e="",t=Error)=>{let n=new t(e),{captureStackTrace:r}=Error;throw typeof r=="function"&&r(n,Q),n},Wa=e=>e instanceof Uint8Array||ArrayBuffer.isView(e)&&e.constructor.name==="Uint8Array"&&e.BYTES_PER_ELEMENT===1,ue=(e,t,n="")=>{let r=Wa(e),o=e?.length,a=t!==void 0;if(!r||a&&o!==t){let s=n&&`"${n}" `,i=a?` of length ${t}`:"",c=r?`length=${o}`:`type=${typeof e}`,h=s+"expected Uint8Array"+i+", got "+c;return r?Q(h,RangeError):Q(h,TypeError)}return e},lt=e=>new Uint8Array(e),Vr=(e,t)=>e.toString(16).padStart(t,"0"),Jr=e=>{let t="";for(let n of ue(e))t+=Vr(n,2);return t},ve={_0:48,_9:57,A:65,F:70,a:97,f:102},jr=e=>e>=ve._0&&e<=ve._9?e-ve._0:e>=ve.A&&e<=ve.F?e-(ve.A-10):e>=ve.a&&e<=ve.f?e-(ve.a-10):void 0,Xr=e=>{let t="hex invalid";if(typeof e!="string")return Q(t);let n=e.length,r=n/2;if(n%2)return Q(t);let o=lt(r);for(let a=0,s=0;a<r;a++,s+=2){let i=jr(e.charCodeAt(s)),c=jr(e.charCodeAt(s+1));if(i===void 0||c===void 0)return Q(t);o[a]=i*16+c}return o},qr=()=>globalThis?.crypto?.subtle??Q("crypto.subtle must be defined, consider polyfill"),Ve=(...e)=>{let t=0;for(let o of e)t+=ue(o).length;let n=lt(t),r=0;for(let o of e)n.set(o,r),r+=o.length;return n},Sn=(e=se)=>(globalThis?.crypto).getRandomValues(lt(e)),yn=BigInt,je=(e,t,n,r="bad number: out of range")=>typeof e!="bigint"?Q(r,TypeError):t<=e&&e<n?e:Q(r,RangeError),N=(e,t=Ce)=>{let n=e%t;return n>=0n?n:t+n},Nt=e=>N(e,ht),Ya=(e,t)=>{(e===0n||t<=0n)&&Q("no inverse n="+e+" mod="+t);let n=N(e,t),r=t,o=0n,a=1n,s=1n,i=0n;for(;n!==0n;){let c=r/n,h=r%n,f=o-s*c,l=a-i*c;r=n,n=h,o=s,a=i,s=f,i=l}return r===1n?N(o,t):Q("no inverse")},Zr=e=>{let t=Za[e];return typeof t!="function"&&Q("hashes."+e+" not set"),t},Ur=(e,t,n)=>ue(Zr(e)(t,n),se,"digest"),$r=(e,t,n)=>Promise.resolve(Zr(e)(t,n)).then(r=>ue(r,se,"digest"));var bn=e=>e instanceof Me?e:Q("Point expected"),eo=e=>N(N(e*e)*e+Qr),Fr=e=>je(e,0n,Ce),Dt=e=>je(e,1n,Ce),Ga=e=>je(e,1n,ht),zt=e=>!(e&1n),to=e=>Uint8Array.of(e),Qa=e=>to(zt(e)?2:3),no=e=>{let t=eo(Dt(e)),n=1n;for(let r=t,o=(Ce+1n)/4n;o>0n;o>>=1n)o&1n&&(n=n*r%Ce),r=r*r%Ce;return N(n*n)!==t&&Q("sqrt invalid"),zt(n)?n:N(-n)};var Me=class e{static BASE;static ZERO;X;Y;Z;constructor(t,n,r){this.X=Fr(t),this.Y=Dt(n),this.Z=Fr(r),Object.freeze(this)}static CURVE(){return Gr}static fromAffine(t){let{x:n,y:r}=t;return n===0n&&r===0n?He:new e(n,r,1n)}static fromBytes(t){ue(t);let{publicKey:n,publicKeyUncompressed:r}=wn,o,a=t.length,s=t[0],i=t.subarray(1),c=It(i,0,se);if(a===n&&(s===2||s===3)){let h=no(c);s===3&&(h=N(-h)),o=new e(c,h,1n)}return a===r&&s===4&&(o=new e(c,It(i,se,Qe),1n)),o?o.assertValidity():Q("bad point: not on curve")}static fromHex(t){return e.fromBytes(Xr(t))}get x(){return this.toAffine().x}get y(){return this.toAffine().y}equals(t){let{X:n,Y:r,Z:o}=this,{X:a,Y:s,Z:i}=bn(t),c=N(n*i),h=N(a*o),f=N(r*i),l=N(s*o);return c===h&&f===l}is0(){return this.equals(He)}negate(){return new e(this.X,N(-this.Y),this.Z)}double(){return this.add(this)}add(t){let{X:n,Y:r,Z:o}=this,{X:a,Y:s,Z:i}=bn(t),c=0n,h=Qr,f=0n,l=0n,d=0n,u=N(h*3n),b=N(n*a),_=N(r*s),v=N(o*i),B=N(n+r),P=N(a+s);B=N(B*P),P=N(b+_),B=N(B-P),P=N(n+o);let O=N(a+i);return P=N(P*O),O=N(b+v),P=N(P-O),O=N(r+o),f=N(s+i),O=N(O*f),f=N(_+v),O=N(O-f),d=N(c*P),f=N(u*v),d=N(f+d),f=N(_-d),d=N(_+d),l=N(f*d),_=N(b+b),_=N(_+b),v=N(c*v),P=N(u*P),_=N(_+v),v=N(b-v),v=N(c*v),P=N(P+v),b=N(_*P),l=N(l+b),b=N(O*P),f=N(B*f),f=N(f-b),b=N(B*_),d=N(O*d),d=N(d+b),new e(f,l,d)}subtract(t){return this.add(bn(t).negate())}multiply(t,n=!0){if(!n&&t===0n)return He;if(Ga(t),t===1n)return this;if(this.equals(qe))return ci(t).p;let r=He,o=qe;for(let a=this;t>0n;a=a.double(),t>>=1n)t&1n?r=r.add(a):n&&(o=o.add(a));return r}multiplyUnsafe(t){return this.multiply(t,!1)}toAffine(){let{X:t,Y:n,Z:r}=this;if(this.equals(He))return{x:0n,y:0n};if(r===1n)return{x:t,y:n};let o=Ya(r,Ce);return N(r*o)!==1n&&Q("inverse invalid"),{x:N(t*o),y:N(n*o)}}assertValidity(){let{x:t,y:n}=this.toAffine();return Dt(t),Dt(n),N(n*n)===eo(t)?this:Q("bad point: not on curve")}toBytes(t=!0){let{x:n,y:r}=this.assertValidity().toAffine(),o=be(n);return t?Ve(Qa(r),o):Ve(to(4),o,be(r))}toHex(t){return Jr(this.toBytes(t))}},qe=new Me(Fa,Ka,1n),He=new Me(0n,1n,0n);Me.BASE=qe;Me.ZERO=He;var Va=(e,t,n)=>qe.multiply(t,!1).add(e.multiply(n,!1)).assertValidity(),Ue=e=>yn("0x"+(Jr(e)||"0")),It=(e,t,n)=>Ue(e.subarray(t,n)),Ja=2n**256n,be=e=>Xr(Vr(je(e,0n,Ja),Qe)),Xa=e=>{let t=Ue(ue(e,se,"secret key"));return je(t,1n,ht,"invalid secret key: outside of range")};var Kr="SHA-256",Za={hmacSha256Async:async(e,t)=>{let n=qr(),r="HMAC",o=await n.importKey("raw",e,{name:r,hash:{name:Kr}},!1,["sign"]);return lt(await n.sign(r,o,t))},hmacSha256:void 0,sha256Async:async e=>lt(await qr().digest(Kr,e)),sha256:void 0};var ei=e=>{if(e=e===void 0?Sn(wn.seed):e,ue(e),e.length<wn.seed||e.length>1024)return Q("expected 48-1024b",RangeError);let t=N(Ue(e),ht-1n);return be(t+1n)},ti=e=>t=>{let n=ei(t);return{secretKey:n,publicKey:e(n)}};var ro=e=>Uint8Array.from("BIP0340/"+e,t=>t.charCodeAt(0)),oo="aux",so="nonce",ao="challenge",vn=(e,...t)=>{let n=Ur("sha256",ro(e));return Ur("sha256",Ve(n,n,...t))},kn=(e,...t)=>$r("sha256Async",ro(e)).then(n=>$r("sha256Async",Ve(n,n,...t))),Tn=e=>{let t=Xa(e),n=qe.multiply(t),{x:r,y:o}=n.assertValidity().toAffine(),a=zt(o)?t:Nt(-t),s=be(r);return{d:a,px:s}},_n=e=>Nt(Ue(e)),io=(...e)=>_n(vn(ao,...e)),co=async(...e)=>_n(await kn(ao,...e)),lo=e=>Tn(e).px,ni=ti(lo),ho=(e,t,n)=>{let{px:r,d:o}=Tn(t);return{m:ue(e),px:r,d:o,a:ue(n,se)}},fo=e=>{let t=_n(e);t===0n&&Q("sign failed: k is zero");let{px:n,d:r}=Tn(be(t));return{rx:n,k:r}},uo=(e,t,n,r)=>Ve(t,be(Nt(e+n*r))),po="invalid signature produced",ri=(e,t,n=Sn(se))=>{let{m:r,px:o,d:a,a:s}=ho(e,t,n),i=vn(oo,s),c=be(a^Ue(i)),h=vn(so,c,o,r),{rx:f,k:l}=fo(h),d=io(f,o,r),u=uo(l,f,d,a);return go(u,r,o)||Q(po),u},oi=async(e,t,n=Sn(se))=>{let{m:r,px:o,d:a,a:s}=ho(e,t,n),i=await kn(oo,s),c=be(a^Ue(i)),h=await kn(so,c,o,r),{rx:f,k:l}=fo(h),d=await co(f,o,r),u=uo(l,f,d,a);return await bo(u,r,o)||Q(po),u},si=(e,t)=>e instanceof Promise?e.then(t):t(e),mo=(e,t,n,r)=>{let o=ue(e,Qe,"signature"),a=ue(t,void 0,"message"),s=ue(n,se,"publicKey");try{let i=Ue(s),c=no(i),h=new Me(i,c,1n).assertValidity(),f=be(h.toAffine().x),l=It(o,0,se);je(l,1n,Ce);let d=It(o,se,Qe);je(d,1n,ht);let u=Ve(be(l),f,a);return si(r(u),b=>{let{x:_,y:v}=Va(h,d,Nt(-b)).toAffine();return!(!zt(v)||_!==l)})}catch{return!1}},go=(e,t,n)=>mo(e,t,n,io),bo=async(e,t,n)=>mo(e,t,n,co),En=Object.freeze({keygen:ni,getPublicKey:lo,sign:ri,verify:go,signAsync:oi,verifyAsync:bo}),Lt=8,ai=256,wo=Math.ceil(ai/Lt)+1,xn=2**(Lt-1),ii=()=>{let e=[],t=qe,n=t;for(let r=0;r<wo;r++){n=t,e.push(n);for(let o=1;o<xn;o++)n=n.add(t),e.push(n);t=n.double()}return e},Wr,Yr=(e,t)=>{let n=t.negate();return e?n:t},ci=e=>{let t=Wr||(Wr=ii()),n=He,r=qe,o=2**Lt,a=o,s=yn(o-1),i=yn(Lt);for(let c=0;c<wo;c++){let h=Number(e&s);e>>=i,h>xn&&(h-=a,e+=1n);let f=c*xn,l=f,d=f+Math.abs(h)-1,u=c%2!==0,b=h<0;h===0?r=r.add(Yr(u,t[l])):n=n.add(Yr(b,t[d]))}return e!==0n&&Q("invalid wnaf"),{p:n,f:r}};var{floor:Pn,min:li,sin:hi}=Math,J="Trystero",Be=(e,t)=>Array(e).fill(void 0).map(t),di="0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz",ce=e=>Be(e,()=>di[Pn(Math.random()*62)]??"").join(""),Z=ce(20),le=Promise.all.bind(Promise),Cn=typeof window<"u",{entries:ae,fromEntries:Mn,keys:V,values:ke}=Object,ee=()=>{},Ht="candidate",F=e=>(e!==null&&clearTimeout(e),null),K=e=>new Error(`${J}: ${e}`),xe=(e,t)=>e instanceof Error&&e.message?e.message:typeof e=="string"&&e?e:te(e??t),pe=(e,t)=>e instanceof Error?e:K(xe(e,t)),fi=new TextEncoder,ui=new TextDecoder,me=e=>fi.encode(e),ge=e=>ui.decode(e),Se=e=>e.reduce((t,n)=>t+n.toString(16).padStart(2,"0"),""),$e=(...e)=>e.join("@"),pi=(e,t)=>{let n=[...e],r=()=>{let a=hi(t++)*1e4;return a-Pn(a)},o=n.length;for(;o;){let a=Pn(r()*o--),s=n[o];n[o]=n[a],n[a]=s}return n},ft=(e,t,n,r=!1)=>e.relayConfig?.urls||(r?pi(t,jt(e.appId)):t).slice(0,e.relayConfig?.redundancy??n),te=JSON.stringify,he=e=>{try{return JSON.parse(e)}catch{throw K(`failed to parse JSON: ${e}`)}},jt=(e,t=Number.MAX_SAFE_INTEGER)=>e.split("").reduce((n,r)=>n+r.charCodeAt(0),0)%t,yo=3333,mi=6e4,An={},dt=null,Rn=null,qt=()=>{dt||(dt=new Promise(e=>{Rn=e}).finally(()=>{Rn=null,dt=null}))},Ut=()=>{Rn?.()},ut=(e,t,n)=>{let r={},o=!1,a=!1,s=ee;r.ready=new Promise(c=>s=c);let i=()=>{a=!1;let c=new WebSocket(e);c.onclose=()=>{if(a)return;if(a=!0,dt){dt.then(i);return}let h=An[e]??=yo;setTimeout(i,Math.random()*h),An[e]=li(h*2,mi)},c.onmessage=h=>t(String(h.data)),r.socket=c,r.url=c.url,c.onopen=()=>{let h=o;o=!0,s(r),An[e]=yo,h&&n?.()},r.send=h=>{c.readyState===1&&c.send(h)}};return i(),r};var pt=e=>{let t={},n=new WeakMap,r=s=>{let i=n.get(s);if(!i)throw K("relay bookkeeping missing registration for relay client");return i},o=()=>{let s={},i=c=>s[c]??={};return{forKey:i,forRelay:c=>i(r(c))}},a=(s,i)=>(t[s]=i,n.set(i,s),i);return{register:(s,i)=>{let c=t[s];return c||a(s,i())},keyOf:r,scoped:o,getSockets:()=>Mn(ae(t).flatMap(([s,i])=>{let c=e(i);return c?[[s,c]]:[]}))}},vo=()=>{if(Cn){let e=new AbortController;return addEventListener("online",Ut,{signal:e.signal}),addEventListener("offline",qt,{signal:e.signal}),()=>e.abort()}return ee};var Bn="AES-GCM",gi={},bi=e=>btoa(String.fromCharCode.apply(null,Array.from(new Uint8Array(e)))),wi=e=>{let t=atob(e);return new Uint8Array(t.length).map((n,r)=>t.charCodeAt(r)).buffer},Fe=async(e,t)=>new Uint8Array(await crypto.subtle.digest(e,me(t))),we=async e=>gi[e]??=Array.from(await Fe("SHA-1",e)).map(t=>t.toString(36)).join(""),ko=async(e,t,n)=>crypto.subtle.importKey("raw",await crypto.subtle.digest({name:"SHA-256"},me(`${e}:${t}:${n}`)),{name:Bn},!1,["encrypt","decrypt"]),xo=async(e,t)=>Se(await Fe("SHA-256",`${J}:${e}:${t}`)),So="$",To=",",_o=async(e,t)=>{let n=crypto.getRandomValues(new Uint8Array(16));return n.join(To)+So+bi(await crypto.subtle.encrypt({name:Bn,iv:n},await e,me(t)))},Eo=async(e,t)=>{let[n,r]=t.split(So);return ge(await crypto.subtle.decrypt({name:Bn,iv:new Uint8Array(n?.split(To).map(Number)??[])},await e,wi(r??"")))};var mt=57333,yi=18e4,vi=20,Ao=class{makeOffer;pool=[];pooled=new Set;leased=new Map;recycling=new Set;cleanupTimer=null;active=!1;constructor(e){this.makeOffer=e}get isActive(){return this.active}warmup(){this.pool=[],this.pooled.clear(),Be(vi,this.makeOffer).forEach(e=>this.push(e)),this.active=!0,this.cleanupTimer=setInterval(()=>{this.pool=this.pool.filter(e=>e.isDead?(this.pooled.delete(e),!1):!0)},mt)}push(e){e.isDead||this.pooled.has(e)||this.leased.has(e)||(this.pool.push(e),this.pooled.add(e))}shift(e){let t=[];for(;t.length<e&&this.pool.length>0;){let n=this.pool.shift();if(!n)break;this.pooled.delete(n),t.push(n)}return t}claimLeased(e){let t=this.leased.get(e);t&&(F(t),this.leased.delete(e))}recycle(e){if(!(e.isDead||this.recycling.has(e))){if(e.connection.remoteDescription){e.destroy();return}if(!this.active){e.destroy();return}this.recycling.add(e),e.setHandlers({connect:ee,close:ee,error:ee}),e.getOffer(!0).then(t=>{if(!t||t.type!=="offer"||e.isDead||!this.active){e.destroy();return}this.push(e)}).catch(()=>e.destroy()).finally(()=>this.recycling.delete(e))}}reclaimLeased(e){let t=this.leased.get(e);t&&(F(t),this.leased.delete(e),this.recycle(e))}lease(e){this.claimLeased(e),this.leased.set(e,setTimeout(()=>{this.leased.delete(e),this.recycle(e)},yi))}checkout(e,t,n){let r=this.shift(e),o=Math.max(0,e-r.length);o>0&&r.push(...Be(o,this.makeOffer));let a=async(s,i=!1)=>{try{let c=await n(s);return t?(this.lease(s),{peer:s,offer:c,claim:()=>this.claimLeased(s),reclaim:()=>this.reclaimLeased(s)}):{peer:s,offer:c}}catch(c){if(this.claimLeased(s),this.pooled.delete(s),s.destroy(),!i)return a(this.makeOffer(),!0);throw c}};return le(r.map(s=>a(s)))}getOffers(e,t){return this.checkout(e,!0,t)}destroy(){this.active=!1,this.cleanupTimer&&(clearInterval(this.cleanupTimer),this.cleanupTimer=null),this.pool.forEach(e=>e.destroy()),this.pool=[],this.pooled.clear(),this.leased.forEach((e,t)=>{F(e),t.destroy()}),this.leased.clear(),this.recycling.forEach(e=>e.destroy()),this.recycling.clear()}};var On=K("incorrect password for overlapping room"),Po=(e,t,n)=>{let r=s=>Fe("SHA-256",`${s}:${e}:${t}:${n}`).then(Se),o=async(s,i,c)=>{if(!e)return;if(c){let f=ce(36);await s({__trystero_pw:"challenge",c:f});let{data:l}=await i();if(!l||typeof l!="object"||l.__trystero_pw!=="response"||typeof l.h!="string")throw On;let d=await r(f);if(l.h!==d)throw On;return}let{data:h}=await i();if(!h||typeof h!="object"||h.__trystero_pw!=="challenge"||typeof h.c!="string")throw On;await s({__trystero_pw:"response",h:await r(h.c)})};return{run:o,compose:s=>e||s?async(i,c,h,f)=>{await o(c,h,f),await s?.(i,c,h,f)}:void 0}},ki=e=>{let t=xe(e,"unknown error");return t.startsWith("handshake ")?t:`handshake failed: ${t}`},Ro=({onPeerHandshake:e,onHandshakeError:t,handshakeTimeoutMs:n,sendHandshakeData:r,sendHandshakeReady:o,onActivate:a,onFailure:s})=>{let i={},c=(l,d)=>{let u=i[l];!u||d&&u.peer!==d||u.isActive||!u.didLocalHandshakePass||!u.didReceiveRemoteReady||(u.isActive=!0,u.handshakeTimer=F(u.handshakeTimer),a(l,u.peer))},h=(l,d,u)=>{let b=i[l];if(!b||b.peer!==d)return;let _=ki(u);t?.(l,_),s(l,d,K(_))},f=(l,d)=>{let u=i[l];!u||u.peer!==d||u.isActive||(u.didLocalHandshakePass=!0,o("",l).catch(b=>h(l,d,K(`failed sending handshake readiness: ${xe(b,"unknown send failure")}`))),c(l,d))};return{addPeer:(l,d)=>{i[l]={peer:d,isActive:!1,didLocalHandshakePass:!1,didReceiveRemoteReady:!1,handshakeTimer:null,pendingHandshakePayloads:[],handshakeWaiters:[]}},clearPeer:(l,d)=>{let u=i[l];u&&(u.handshakeTimer=F(u.handshakeTimer),u.pendingHandshakePayloads.length=0,u.handshakeWaiters.splice(0).forEach(b=>b.reject(d)),delete i[l])},canReceiveFromPeer:(l,d)=>{let u=i[l];return!!(u&&(u.isActive||d))},start:(l,d)=>{let u=i[l];if(!u||u.peer!==d)return;u.handshakeTimer=setTimeout(()=>h(l,d,K(`handshake timed out after ${n}ms`)),n);let b=async(B,P)=>{await r(B,l,P)},_=()=>new Promise((B,P)=>{let O=i[l];if(!O||O.peer!==d){P(K("peer disconnected during handshake"));return}let z=O.pendingHandshakePayloads.shift();if(z){B(z);return}O.handshakeWaiters.push({resolve:B,reject:R=>P(R)})}),v=Z<l;Promise.resolve(e?.(l,b,_,v)).then(()=>f(l,d)).catch(B=>h(l,d,pe(B,"handshake failed")))},receiveHandshakeData:(l,d,u)=>{let b=i[d];if(!b||b.isActive)return;let _=u===void 0?{data:l}:{data:l,metadata:u},v=b.handshakeWaiters.shift();if(v){v.resolve(_);return}b.pendingHandshakePayloads.push(_)},receiveHandshakeReady:l=>{let d=i[l];!d||d.isActive||(d.didReceiveRemoteReady=!0,c(l))}}};var xi=15e3,Si=5e3,Co="icegatheringstatechange",Ti="iceconnectionstatechange",gt="offer",_i="answer",Ei=/out of range/i,Mo=e=>e.replace(/ (\S+\.local) (\d+) typ host/g," 127.0.0.1 $2 typ host"),Dn=(e,{trickleIce:t,rtcConfig:n,rtcPolyfill:r,turnConfig:o,_test_only_mdnsHostFallbackToLoopback:a})=>{let s=new(r??RTCPeerConnection)({iceServers:Ai.concat(o??[]),...n}),i={},c=[],h=[],f=t!==!1,l=[],d=[],u=!1,b=!1,_=null,v=null,B=!1,P=()=>v=F(v),O=()=>{B||(B=!0,P(),i.close?.())},z=A=>{i.signal?i.signal(A):c.push(A)},R=A=>{let D=i.signal;i.signal=H=>{D?.(H),A(H)},c.length>0&&c.splice(0).forEach(H=>i.signal?.(H))},I=A=>a?Mo(A):A,k=A=>{if(!a||typeof A.candidate!="string")return A;let D=Mo(A.candidate);return D===A.candidate?A:{...A,candidate:D}},m=A=>({type:A.localDescription?.type??gt,sdp:I(A.localDescription?.sdp??"")}),w=()=>{let A=s.remoteDescription?.sdp;return A?A.match(/a=ice-ufrag:([^\s]+)/)?.[1]??null:null},E=()=>(s.remoteDescription?.sdp?.match(/^m=/gm)??[]).length,S=A=>{if(!s.remoteDescription)return!1;let D=E();if(typeof A.sdpMLineIndex=="number"&&D>0&&A.sdpMLineIndex>=D)return!1;let H=w();return!(H&&A.usernameFragment&&A.usernameFragment!==H)},C=async A=>{try{return await s.addIceCandidate(A),!0}catch(D){if(D instanceof Error&&Ei.test(D.message)&&typeof A.sdpMLineIndex=="number")return!1;throw D}},L=async()=>{if(!s.remoteDescription||l.length===0)return;let A=l.splice(0),D=[];for(let H of A){if(!S(H)){D.push(H);continue}await C(H)||D.push(H)}D.length>0&&l.push(...D)},p=async A=>{if(S(A)){await C(A)||l.push(A);return}l.push(A)},g=A=>{A.binaryType="arraybuffer",A.bufferedAmountLowThreshold=65535,A.onmessage=D=>{let H=D.data;i.data?i.data(H):h.push(H)},A.onopen=()=>i.connect?.(),A.onclose=O,A.onerror=({error:D})=>i.error?.(pe(D,"data channel error"))},x=async A=>{let D=null;try{await Promise.race([new Promise(H=>{let G=()=>{A.iceGatheringState==="complete"&&(A.removeEventListener(Co,G),H())};A.addEventListener(Co,G),G()}),new Promise(H=>{D=setTimeout(H,xi)})])}finally{F(D)}return m(A)},T=async()=>{let A=f?m(s):await x(s);return z(A),A};e?(_=s.createDataChannel("data"),g(_)):s.ondatachannel=({channel:A})=>{_=A,g(A)};let M=async(A=!1)=>{if(s.connectionState!=="closed")try{return u=!0,A&&(s.signalingState!=="stable"&&s.signalingState!=="closed"&&s.localDescription?.type===gt&&await s.setLocalDescription({type:"rollback"}),typeof s.restartIce=="function"&&s.restartIce()),await s.setLocalDescription(A?await s.createOffer({iceRestart:!0}):void 0),await T()}catch(D){i.error?.(pe(D,"failed to create local offer"))}finally{u=!1}};s.onnegotiationneeded=async()=>M(!1),s.onicecandidate=({candidate:A})=>{if(!f||!A)return;let D=k(typeof A.toJSON=="function"?A.toJSON():{candidate:A.candidate,sdpMid:A.sdpMid,sdpMLineIndex:A.sdpMLineIndex,usernameFragment:A.usernameFragment});z({type:Ht,sdp:JSON.stringify(D)})};let j=()=>{if(s.connectionState==="failed"||s.connectionState==="closed"||s.iceConnectionState==="failed"||s.iceConnectionState==="closed"){O();return}if(s.connectionState==="connected"||s.connectionState==="connecting"||s.iceConnectionState==="connected"||s.iceConnectionState==="completed"||s.iceConnectionState==="checking"){P();return}if(s.connectionState==="disconnected"||s.iceConnectionState==="disconnected"){v||(v=setTimeout(()=>{v=null,(s.connectionState==="disconnected"||s.iceConnectionState==="disconnected")&&O()},Si));return}};s.onconnectionstatechange=j,s.addEventListener(Ti,j),s.ontrack=A=>{let D=A.streams[0];if(D){if(!i.track&&!i.stream){d.push({track:A.track,stream:D});return}i.track?.(A.track,D),i.stream?.(D)}},s.onremovestream=A=>i.stream?.(A.stream);let W=e?new Promise(A=>R(D=>{D.type===gt&&A(D)})):Promise.resolve();return e&&queueMicrotask(()=>{!u&&s.signalingState==="stable"&&!s.localDescription&&s.connectionState!=="closed"&&s.onnegotiationneeded?.(new Event("negotiationneeded"))}),{created:Date.now(),connection:s,get channel(){return _},get isDead(){return s.connectionState==="closed"},getOffer:async(A=!1)=>{if(e)return A?M(!0):s.localDescription?.type===gt?f?m(s):x(s):W},async signal(A){if(A.type==="candidate"){try{let D=JSON.parse(A.sdp);D&&typeof D=="object"&&await p(k(D))}catch(D){i.error?.(pe(D,"failed to parse remote candidate"))}return}if(!(_?.readyState==="open"&&!A.sdp?.includes("a=rtpmap")))try{let D={...A,sdp:I(A.sdp)};if(A.type===gt){if(u||s.signalingState!=="stable"&&!b){if(e)return;await le([s.setLocalDescription({type:"rollback"}),s.setRemoteDescription(D)])}else await s.setRemoteDescription(D);return await L(),await s.setLocalDescription(),await T()}if(A.type===_i){b=!0;try{await s.setRemoteDescription(D),await L()}finally{b=!1}}}catch(D){i.error?.(pe(D,"failed to apply remote signal"))}},sendData:A=>_?.send(A),destroy:()=>{P(),_?.close(),s.close(),u=!1,b=!1,O()},setHandlers:A=>{let{signal:D,...H}=A;Object.assign(i,H),i.data&&h.length>0&&h.splice(0).forEach(G=>i.data?.(G)),D&&R(D),(i.track||i.stream)&&d.length>0&&d.splice(0).forEach(({track:G,stream:Te})=>{i.track?.(G,Te),i.stream?.(Te)})},offerPromise:W,addStream:A=>A.getTracks().forEach(D=>s.addTrack(D,A)),removeStream:A=>s.getSenders().filter(D=>D.track&&A.getTracks().includes(D.track)).forEach(D=>s.removeTrack(D)),addTrack:(A,D)=>s.addTrack(A,D),removeTrack:A=>{let D=s.getSenders().find(H=>H.track===A);D&&s.removeTrack(D)},replaceTrack:(A,D)=>{let H=s.getSenders().find(G=>G.track===A);if(H)return H.replaceTrack(D)}}},Ai=[...Be(3,(e,t)=>`stun:stun${t||""}.l.google.com:19302`),"stun:stun.cloudflare.com:3478"].map(e=>({urls:e}));var Pi=Object.getPrototypeOf(Uint8Array),In=32,Ri=0,Ln=32,Bo=34,Nn=35,$t=36,Ke=16*2**10-$t,bt=255,Ci=65535,Oo="bufferedamountlow",Do="close",Io="error",Mi=1e4,Bi=e=>e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength),Oi=(e,t=Mi)=>e.readyState!=="open"||e.bufferedAmount<=e.bufferedAmountLowThreshold?Promise.resolve(e.readyState==="open"):new Promise(n=>{let r=!1,o=null,a=c=>{r||(r=!0,e.removeEventListener(Oo,s),e.removeEventListener(Do,i),e.removeEventListener(Io,i),F(o),n(c))},s=()=>a(!0),i=()=>a(!1);if(e.addEventListener(Oo,s),e.addEventListener(Do,i),e.addEventListener(Io,i),o=setTimeout(()=>a(!1),t),e.readyState!=="open"){a(!1);return}e.bufferedAmount<=e.bufferedAmountLowThreshold&&a(!0)}),Lo=({getPeer:e,getPeerIds:t,canReceiveFromPeer:n,throwIfAborted:r})=>{let o={},a={},s={},i={},c=(l,d,{includePending:u=!1}={})=>(l?Array.isArray(l)?l:[l]:t(u)).flatMap(b=>{let _=e(b,u);return _?[Promise.resolve(d(b,_))]:(console.warn(`${J}: no peer with id ${b} found`),[])});return{makeInternalAction:(l,d={})=>{let u=a[l];if(o[l]&&u){let P=o[l].options;if(P.sendToPending!==!!d.sendToPending||P.receiveWhilePending!==!!d.receiveWhilePending)throw K(`action type "${l}" cannot be redefined`);return u}if(!l)throw K("action type argument is required");let b=me(l);if(b.byteLength>In)throw K(`action type string "${l}" (${b.byteLength}b) exceeds byte limit (${In}). Hint: choose a shorter name.`);let _={sendToPending:!!d.sendToPending,receiveWhilePending:!!d.receiveWhilePending},v=new Uint8Array(In);v.set(b);let B=0;return o[l]={onComplete:ee,onProgress:ee,setOnComplete:P=>{o[l].onComplete=P;let O=i[l];O?.length&&(delete i[l],O.forEach(({payload:z,peerId:R,metadata:I})=>P(z,R,I)))},setOnProgress:P=>{o[l].onProgress=P},send:async(P,O,z,R,I)=>{r(I);let k=typeof P;if(k==="undefined")throw K("action data cannot be undefined");let m=k!=="string",w=P instanceof Blob,E=w||P instanceof ArrayBuffer||P instanceof Pi,S=z!==void 0,C=E?Bi(w?await P.arrayBuffer():P):me(m?te(P):P),L=S?me(te(z)):null,p=Math.ceil(C.byteLength/Ke)+(S?1:0)||1,g=Be(p,(x,T)=>{let M=T===p-1,j=!!(S&&T===0),W=new Uint8Array($t+(j?L?.byteLength??0:M?C.byteLength-Ke*(p-(S?2:1)):Ke));return W.set(v),W.set([B>>8,B&bt],Ln),W.set([Number(M)|Number(j)<<1|Number(E)<<2|Number(m)<<3],Bo),W.set([Math.round((T+1)/p*bt)],Nn),W.set(S?j?L??new Uint8Array:C.subarray((T-1)*Ke,T*Ke):C.subarray(T*Ke,(T+1)*Ke),$t),W});return B=B+1&Ci,await le(c(O,async(x,T)=>{let{channel:M}=T,j=0;for(;j<p;){r(I);let W=g[j];if(!W)break;if(M&&M.bufferedAmount>M.bufferedAmountLowThreshold){let H=await Oi(M);if(r(I),!H)break}let A=e(x,_.sendToPending);if(!A||A!==T)break;T.sendData(W),j++;let D=W[Nn]??bt;R?.(D/bt,x,z)}},{includePending:_.sendToPending})),[]},options:_},a[l]={send:o[l].send,onMessage:o[l].setOnComplete,onProgress:o[l].setOnProgress}},handleData:(l,d)=>{let u=new Uint8Array(d),b=ge(u.subarray(Ri,Ln)).replaceAll("\0",""),_=o[b];if(!n(l,!!_?.options.receiveWhilePending))return;let v=(u[Ln]??0)<<8|(u[33]??0),B=u[Bo]??0,P=u[Nn]??0,O=u.subarray($t),z=!!(B&1),R=!!(B&2),I=!!(B&4),k=!!(B&8);s[l]??={},s[l][b]??={};let m=s[l][b][v]??={chunks:[]};if(R?m.meta=he(ge(O)):m.chunks.push(O),_?.onProgress(P/bt,l,m.meta),!z)return;let w=new Uint8Array(m.chunks.reduce((S,C)=>S+C.byteLength,0));m.chunks.reduce((S,C)=>(w.set(C,S),S+C.byteLength),0),delete s[l][b][v];let E=I?w:k?he(ge(w)):ge(w);if(_){_.onComplete(E,l,m.meta);return}(i[b]??=[]).push({payload:E,peerId:l,...m.meta===void 0?{}:{metadata:m.meta}})},clearPeer:l=>{delete s[l]}}};var Di=500,Je=(e,t)=>{let n=K(t);return n.kind=e,n.name=e==="aborted"?"AbortError":n.name,n},zn=e=>{if(e?.aborted)throw Je("aborted","operation aborted")},No=e=>e&&typeof e=="object"&&!Array.isArray(e)&&typeof e.r=="string"?{r:e.r,...Object.hasOwn(e,"m")?{m:e.m}:{}}:null,Ii=e=>e&&typeof e=="object"&&!Array.isArray(e)&&typeof e.r=="string"?{r:e.r,...typeof e.e=="string"?{e:e.e}:{}}:null,Ft=(e,t)=>t===void 0?e:{...e,metadata:t},zo=({getPeer:e,getPeerIds:t,canReceiveFromPeer:n})=>{let r={},o={},a=Lo({getPeer:e,getPeerIds:t,canReceiveFromPeer:n,throwIfAborted:zn}),s=a.makeInternalAction,i=a.handleData,c=u=>{let b=o[u];b&&(F(b.timer),b.signal&&b.abortHandler&&b.signal.removeEventListener("abort",b.abortHandler),delete o[u])},h=(u,b)=>{ae(o).forEach(([_,v])=>{v.peerId===u&&(c(_),v.reject(b))})},f=(u,b)=>{a.clearPeer(u),h(u,Je("disconnected",xe(b,"peer disconnected")))},l=s("@_response");return l.onMessage((u,b,_)=>{let v=Ii(_);if(!v)return;let B=o[v.r];if(!(!B||B.peerId!==b)){if(c(v.r),v.e!==void 0){B.reject(Je("rejected",v.e));return}B.resolve(u)}}),{makeAction:(u,b)=>{if(b&&"onRequest"in b&&b.kind!=="request")throw K('request actions must use kind: "request"');let _=b?.kind??"message",v=s(u),B=r[u];if(B){if(B.kind!==_)throw K(`action type "${u}" cannot be redefined`);return B.action}let P={kind:_,action:null,pendingMessages:[],pendingRequests:[],onReceiveProgress:b?.onReceiveProgress??null},O=(p,g)=>p?(x,T)=>p(x,Ft({peerId:T},g)):void 0,z=p=>{P.onReceiveProgress=p},R=(p,g,x)=>{let T=P.kind==="request"?No(x):null;P.onReceiveProgress?.(p,Ft({peerId:g},T?T.m:x))};if(v.onProgress(R),_==="message"){let p=b?.onMessage??null,g=()=>{if(!p)return;let T=p;P.pendingMessages.splice(0).forEach(({payload:M,peerId:j,metadata:W})=>{Promise.resolve().then(()=>T(M,Ft({peerId:j},W))).catch(A=>console.error(`${J} action handler error:`,A))})},x={send:async(T,M={})=>{await v.send(T,M.target,M.metadata,O(M.onProgress,M.metadata),M.signal)},get onMessage(){return p},set onMessage(T){p=T,g()},get onReceiveProgress(){return P.onReceiveProgress},set onReceiveProgress(T){z(T)}};return v.onMessage((T,M,j)=>{if(!p){P.pendingMessages.push(j===void 0?{payload:T,peerId:M}:{payload:T,peerId:M,metadata:j});return}let W=p;Promise.resolve().then(()=>W(T,Ft({peerId:M},j))).catch(A=>console.error(`${J} action handler error:`,A))}),P.action=x,r[u]=P,g(),x}let I=b?.onRequest??null,k=p=>{F(p.timer);let g=P.pendingRequests.indexOf(p);g>-1&&P.pendingRequests.splice(g,1)},m=(p,g,x)=>{l.send(null,p,{r:g,e:xe(x,"request failed")})},w=(p,g)=>{k(p),Promise.resolve().then(()=>g(p.payload,{peerId:p.peerId,...p.metadata===void 0?{}:{metadata:p.metadata},signal:p.controller.signal})).then(async x=>{if(x===void 0)throw K("request handler returned undefined");await l.send(x,p.peerId,{r:p.requestId})}).catch(x=>m(p.peerId,p.requestId,x)).finally(()=>p.controller.abort())},E=()=>{I&&P.pendingRequests.slice().forEach(p=>w(p,I))},S=(p,g,x,T)=>{if(I){w({payload:p,peerId:g,...x===void 0?{}:{metadata:x},requestId:T,controller:new AbortController,timer:null},I);return}let M={payload:p,peerId:g,...x===void 0?{}:{metadata:x},requestId:T,controller:new AbortController,timer:setTimeout(()=>{k(M),M.controller.abort(),m(g,T,"request handler unavailable")},Di)};P.pendingRequests.push(M)},C=async(p,g)=>{let{target:x,metadata:T,onProgress:M,signal:j,timeoutMs:W}=g;if(zn(j),!e(x,!1))throw Je("disconnected",`no active peer with id ${x}`);let A=ce(20),D=new Promise((H,G)=>{let Te={peerId:x,resolve:H,reject:G,timer:null,...j===void 0?{}:{signal:j}},_e=()=>{c(A),G(Je("aborted","operation aborted"))};j&&(Te.abortHandler=_e,j.addEventListener("abort",_e,{once:!0})),o[A]=Te}).catch(H=>{throw H});try{await v.send(p,x,T===void 0?{r:A}:{r:A,m:T},O(M,T),j);let H=o[A];return H&&W!==void 0&&(H.timer=setTimeout(()=>{c(A),H.reject(Je("timeout","request timed out"))},W)),await D}catch(H){throw c(A),H}},L={request:C,requestMany:async(p,g)=>(zn(g.signal),await le(g.targets.map(async x=>{try{let T={peerId:x,status:"fulfilled",value:await C(p,{target:x,...g.metadata===void 0?{}:{metadata:g.metadata},...g.timeoutMs===void 0?{}:{timeoutMs:g.timeoutMs},...g.onProgress===void 0?{}:{onProgress:g.onProgress},...g.signal===void 0?{}:{signal:g.signal}})};return g.onResult?.(T),T}catch(T){let M=pe(T,"request failed");if(M.kind==="aborted"||!M.kind)throw M;let j=M.kind==="timeout"?{peerId:x,status:"timeout"}:M.kind==="disconnected"?{peerId:x,status:"disconnected"}:{peerId:x,status:"rejected",error:M};return g.onResult?.(j),j}}))),get onRequest(){return I},set onRequest(p){I=p,E()},get onReceiveProgress(){return P.onReceiveProgress},set onReceiveProgress(p){z(p)}};return v.onMessage((p,g,x)=>{let T=No(x);T&&S(p,g,T.m,T.r)}),P.action=L,r[u]=P,E(),L},makeInternalAction:s,handleData:i,clearPeer:f}};var Ho=e=>e&&typeof e=="object"&&!Array.isArray(e)&&typeof e.k=="string"?{key:e.k,...typeof e.s=="string"?{streamId:e.s}:{},...typeof e.t=="string"?{trackId:e.t}:{},...Object.hasOwn(e,"m")?{metadata:e.m}:{}}:null,jo=e=>t=>{let n=e.get(t);return n||(n=ce(20),e.set(t,n)),n},Hn=()=>{let e=new WeakMap,t=new WeakMap,n=new Map,r=new Map,o=new Map,a=new Map;return{getStreamKey:jo(e),getTrackKey:jo(t),rememberRemoteStream:(s,i,c)=>{n.set(s,i),c&&r.set(c,i)},getRemoteStream:(s,i)=>n.get(s)??(i?r.get(i):void 0),rememberRemoteTrack:(s,i,c,h,f)=>{let l={track:i,stream:c};o.set(s,l),h&&a.set(h,l),f&&r.set(f,c)},getRemoteTrack:(s,i)=>o.get(s)??(i?a.get(i):void 0),clearRemote:()=>{n.clear(),r.clear(),o.clear(),a.clear()}}},qo=({iterate:e,isActive:t,getSharedMediaPeer:n})=>{let r={},o={},a=Hn(),s={onPeerStream:null,onPeerTrack:null},i=(f,l,d,u)=>{t(f)&&(n(f)?.__trysteroMedia?.rememberRemoteStream(l,d,typeof d.id=="string"?d.id:void 0),s.onPeerStream?.(d,f,u))},c=(f,l,d,u,b)=>{t(f)&&(n(f)?.__trysteroMedia?.rememberRemoteTrack(l,d,u,typeof d.id=="string"?d.id:void 0,typeof u.id=="string"?u.id:void 0),s.onPeerTrack?.(d,u,f,b))},h=(f,l,d,u,b,_={})=>{let v={k:l,..._,...d===void 0?{}:{m:d}};return e(f,async(B,P)=>{await u(v,B),b(P)})};return{addStream:(f,l,d)=>h(l.target,a.getStreamKey(f),l.metadata,d,u=>u.addStream(f),{s:f.id}),removeStream:(f,l)=>{e(l,(d,u)=>u.removeStream(f))},addTrack:(f,l,d,u)=>h(d.target,a.getTrackKey(f),d.metadata,u,b=>b.addTrack(f,l),{s:l.id,t:f.id}),removeTrack:(f,l)=>{e(l,(d,u)=>u.removeTrack(f))},replaceTrack:(f,l,d,u)=>h(d.target,a.getTrackKey(l),d.metadata,u,b=>b.replaceTrack(f,l),{t:f.id}),receiveStreamMeta:(f,l)=>{if(!t(l))return;let d=Ho(f);if(!d)return;let u=n(l)?.__trysteroMedia?.getRemoteStream(d.key,d.streamId);if(u){i(l,d.key,u,d.metadata);return}(r[l]??=[]).push(d)},receiveTrackMeta:(f,l)=>{if(!t(l))return;let d=Ho(f);if(!d)return;let u=n(l)?.__trysteroMedia?.getRemoteTrack(d.key,d.trackId);if(u){c(l,d.key,u.track,u.stream,d.metadata);return}(o[l]??=[]).push(d)},receiveRemoteStream:(f,l)=>{if(!t(f))return;let d=r[f]?.shift();d&&i(f,d.key,l,d.metadata)},receiveRemoteTrack:(f,l,d)=>{if(!t(f))return;let u=o[f]?.shift();u&&c(f,u.key,l,d,u.metadata)},clearPeer:f=>{delete r[f],delete o[f]},get onPeerStream(){return s.onPeerStream},set onPeerStream(f){s.onPeerStream=f},get onPeerTrack(){return s.onPeerTrack},set onPeerTrack(f){s.onPeerTrack=f}}};var Uo="beforeunload",Li=1e4,Oe=e=>"@_"+e,wt=new Set,$o=()=>wt.forEach(e=>e()),Ni=e=>(wt.add(e),wt.size===1&&addEventListener(Uo,$o),()=>{wt.delete(e),wt.size||removeEventListener(Uo,$o)}),Fo=(e,t,n,{onPeerHandshake:r,onHandshakeError:o,handshakeTimeoutMs:a=Li,isPassive:s=!1}={})=>{let i={},c={},h={},f={onPeerJoin:null,onPeerLeave:null},l=ee,d=null,u=(p,g,{includePending:x=!1}={})=>(p?Array.isArray(p)?p:[p]:V(x?i:c)).flatMap(T=>{let M=x?i[T]:c[T];return M?[Promise.resolve(g(T,M))]:(console.warn(`${J}: no peer with id ${T} found`),[])}),b=qo({iterate:(p,g)=>u(p,(x,T)=>g(x,T)),isActive:p=>!!c[p],getSharedMediaPeer:p=>i[p]??null}),_=zo({getPeer:(p,g)=>(g?i:c)[p],getPeerIds:p=>V(p?i:c),canReceiveFromPeer:(p,g)=>!!d?.canReceiveFromPeer(p,g)}),v=_.makeInternalAction,B=_.handleData,P=_.makeAction,O=(p,g=K("peer disconnected"))=>{let x=pe(g,"peer disconnected");d?.clearPeer(p,x),delete i[p],delete c[p],_.clearPeer(p,x),h[p]?.splice(0).forEach(T=>T.reject(x)),delete h[p],b.clearPeer(p)},z=(p,g,x)=>{let T=i[p];if(!T||g&&T!==g)return;let M=!!c[p];O(p,x),T.destroy(),M&&f.onPeerLeave?.(p),t(p)},R=async()=>{await S.send(""),await new Promise(p=>setTimeout(p,99)),ae(i).forEach(([p,g])=>{g.destroy(),O(p,K("room left"))}),l(),n()},I=v(Oe("ping")),k=v(Oe("pong")),m=v(Oe("signal")),w=v(Oe("stream")),E=v(Oe("track")),S=v(Oe("leave"),{sendToPending:!0,receiveWhilePending:!0}),C=v(Oe("hsdata"),{sendToPending:!0,receiveWhilePending:!0}),L=v(Oe("hsready"),{sendToPending:!0,receiveWhilePending:!0});return d=Ro({...r===void 0?{}:{onPeerHandshake:r},...o===void 0?{}:{onHandshakeError:o},handshakeTimeoutMs:a,sendHandshakeData:C.send,sendHandshakeReady:L.send,onActivate:(p,g)=>{c[p]=g,f.onPeerJoin?.(p)},onFailure:(p,g,x)=>z(p,g,x)}),I.onMessage((p,g)=>k.send("",g)),k.onMessage((p,g)=>{let x=h[g];x?.shift()?.resolve(),x&&!x.length&&delete h[g]}),m.onMessage((p,g)=>{c[g]&&i[g]?.signal(p)}),w.onMessage((p,g)=>b.receiveStreamMeta(p,g)),E.onMessage((p,g)=>b.receiveTrackMeta(p,g)),S.onMessage((p,g)=>z(g,void 0,K("peer left room"))),C.onMessage((p,g,x)=>d?.receiveHandshakeData(p,g,x)),L.onMessage((p,g)=>d?.receiveHandshakeReady(g)),e((p,g)=>{let x=i[g];if(x){if(x===p)return;x.destroy(),O(g,K("peer replaced"))}i[g]=p,d?.addPeer(g,p),p.setHandlers({data:T=>B(g,T),stream:T=>b.receiveRemoteStream(g,T),track:(T,M)=>b.receiveRemoteTrack(g,T,M),signal:T=>{c[g]&&m.send(T,g)},close:()=>z(g,p,K("peer disconnected")),error:T=>{console.error(`${J} peer error:`,T),z(g,p,T)}}),d?.start(g,p)}),Cn&&(l=Ni(()=>R().catch(ee))),{makeAction:P,leave:R,ping:async p=>{if(!c[p])throw K(`no active peer with id ${p}`);let g=Date.now();return await new Promise((x,T)=>{let M=h[p]??=[],j=()=>{let A=h[p];if(!A)return;let D=A.indexOf(W);D>-1&&A.splice(D,1),A.length||delete h[p]},W={resolve:()=>{j(),x()},reject:A=>{j(),T(A)}};M.push(W),I.send("",p).catch(A=>W.reject(pe(A,"peer disconnected")))}),Date.now()-g},isPassive:()=>s,getPeers:()=>Mn(ae(c).map(([p,g])=>[p,g.connection])),addStream:(p,g={})=>b.addStream(p,g,w.send),removeStream:(p,g={})=>{b.removeStream(p,g.target)},addTrack:(p,g,x={})=>b.addTrack(p,g,x,E.send),removeTrack:(p,g={})=>{b.removeTrack(p,g.target)},replaceTrack:(p,g,x={})=>b.replaceTrack(p,g,x,E.send),get onPeerJoin(){return f.onPeerJoin},set onPeerJoin(p){f.onPeerJoin=p,p&&V(c).forEach(g=>p(g))},get onPeerLeave(){return f.onPeerLeave},set onPeerLeave(p){f.onPeerLeave=p},get onPeerStream(){return b.onPeerStream},set onPeerStream(p){b.onPeerStream=p},get onPeerTrack(){return b.onPeerTrack},set onPeerTrack(p){b.onPeerTrack=p}}};var Wo=1,Yo=2,Ko=(e,t)=>{let n=me(e),r=new Uint8Array(3+n.byteLength+t.byteLength);return r[0]=Wo,r[1]=n.byteLength>>>8&255,r[2]=n.byteLength&255,r.set(n,3),r.set(t,3+n.byteLength),r},zi=(e,t)=>{let n=me(e),r=new Uint8Array(4+n.byteLength);return r[0]=Yo,r[1]=Number(t),r[2]=n.byteLength>>>8&255,r[3]=n.byteLength&255,r.set(n,4),r},Hi=e=>{let t=new Uint8Array(e);if(t.byteLength<3)return null;if(t[0]===Wo){let o=(t[1]??0)<<8|(t[2]??0),a=3+o;return o<=0||t.byteLength<a?null:{type:"room",roomToken:ge(t.subarray(3,a)),payload:t.subarray(a).slice().buffer}}if(t[0]!==Yo||t.byteLength<4)return null;let n=(t[2]??0)<<8|(t[3]??0),r=4+n;return n<=0||t.byteLength<r?null:{type:"presence",roomToken:ge(t.subarray(4,r)),isPresent:t[1]===1}},Go=e=>{let{connection:t,channel:n}=e;return e.isDead||t.connectionState==="closed"||t.connectionState==="failed"||t.iceConnectionState==="closed"||t.iceConnectionState==="failed"||n?.readyState==="closing"||n?.readyState==="closed"},Qo=e=>{if(Go(e))return"stale";let{channel:t}=e;return!t||t.readyState!=="open"?"transient":"live"},Vo=class{byApp={};roomPresenceHandlers={};getMap(e){return this.byApp[e]??={}}get(e,t){return this.byApp[e]?.[t]}isPeerStale(e){return Go(e)}getHealth(e){return this.isPeerStale(e)?"stale":"live"}setRoomPresenceHandler(e,t){return this.roomPresenceHandlers[e]=t,()=>{this.roomPresenceHandlers[e]===t&&delete this.roomPresenceHandlers[e]}}sendRoomPresence(e,t,n){e.isClosing||e.peer.isDead||e.peer.sendData(zi(t,n))}clear(e,t,{destroyPeer:n}){let r=this.byApp[e],o=r?.[t];if(!o||o.isClosing)return;o.idleTimer=F(o.idleTimer),o.isClosing=!0,n&&!o.peer.isDead&&o.peer.destroy();let a=ke(o.bindings);o.bindings={},o.bindingsByToken={},o.controlRoomId=null,delete r[t],a.forEach(s=>{s.handlers.close?.(),s.pendingData.length=0,s.pendingSendData.length=0,s.pendingTracks.length=0}),o.media.clearRemote(),o.pendingDataByToken.clear(),o.remoteRoomTokens.clear(),V(r).length===0&&delete this.byApp[e]}register(e,t,n,r){let o=this.getMap(e),a=o[t];if(a){if(a.idleTimer=F(a.idleTimer),a.peer===n)return a;this.clear(e,t,{destroyPeer:!0})}let s={appId:e,peerId:t,peer:n,bindings:{},bindingsByToken:{},pendingDataByToken:new Map,remoteRoomTokens:new Set,idleTimer:null,controlRoomId:null,streamOwners:new Map,trackOwners:new Map,media:Hn(),idleMs:r,isClosing:!1};return n.setHandlers({data:i=>this.dispatchData(s,i),signal:i=>this.dispatchSignal(s,i),close:()=>this.clear(e,t,{destroyPeer:!1}),error:i=>{console.error(`${J} peer error:`,i),this.clear(e,t,{destroyPeer:!1})},track:(i,c)=>this.dispatchTrack(s,i,c)}),o[t]=s,s}bind(e,t,n,{onDetach:r}){let o=n.bindings[e];if(o)return n.idleTimer=F(n.idleTimer),{proxy:o.proxy,isNew:!1};let a={roomId:e,roomToken:null,roomTokenPromise:t,handlers:{},pendingData:[],pendingSendData:[],pendingTracks:[],detach:ee,proxy:{}},s=()=>{n.bindings[e]&&(this.pruneRoomOwnership(n,e),delete n.bindings[e],a.roomToken&&n.bindingsByToken[a.roomToken]===a&&delete n.bindingsByToken[a.roomToken],n.controlRoomId===e&&(n.controlRoomId=V(n.bindings)[0]??null),r(),this.scheduleIdleTimer(n))},i={created:n.peer.created,get connection(){return n.peer.connection},get channel(){return n.peer.channel},get isDead(){return n.peer.isDead},getOffer:c=>n.peer.getOffer(c),signal:c=>n.peer.signal(c),sendData:c=>{if(!a.roomToken){a.pendingSendData.push(c);return}n.peer.sendData(Ko(a.roomToken,c))},destroy:()=>s(),setHandlers:c=>{let{signal:h,...f}=c;Object.assign(a.handlers,f),h&&(a.handlers.signal=h),this.flushBindingQueues(a)},offerPromise:n.peer.offerPromise,addStream:c=>{let h=n.streamOwners.get(c)??new Set,f=h.size===0;h.add(e),n.streamOwners.set(c,h),f&&n.peer.addStream(c)},removeStream:c=>{let h=n.streamOwners.get(c);h&&(h.delete(e),h.size===0&&(n.streamOwners.delete(c),n.peer.removeStream(c)))},addTrack:(c,h)=>{let f=n.trackOwners.get(c)??{stream:h,rooms:new Set},l=f.rooms.size===0;return f.stream=h,f.rooms.add(e),n.trackOwners.set(c,f),l?n.peer.addTrack(c,h):n.peer.connection.getSenders().find(d=>d.track===c)??n.peer.addTrack(c,h)},removeTrack:c=>{let h=n.trackOwners.get(c);h&&(h.rooms.delete(e),h.rooms.size===0&&(n.trackOwners.delete(c),n.peer.removeTrack(c)))},replaceTrack:(c,h)=>{let f=n.trackOwners.get(c);if(f){n.trackOwners.delete(c);let l=n.trackOwners.get(h)??{stream:f.stream,rooms:new Set};f.rooms.forEach(d=>l.rooms.add(d)),n.trackOwners.set(h,l)}return n.peer.replaceTrack(c,h)},__trysteroMedia:n.media};return a.proxy=i,a.detach=s,n.bindings[e]=a,n.controlRoomId??=e,n.idleTimer=F(n.idleTimer),t.then(c=>{if(n.isClosing||n.bindings[e]!==a)return;a.roomToken=c,n.bindingsByToken[c]=a;let h=n.pendingDataByToken.get(c);h?.length&&(a.pendingData.push(...h),n.pendingDataByToken.delete(c)),a.pendingSendData.splice(0).forEach(f=>n.peer.sendData(Ko(c,f))),this.flushBindingQueues(a)}),{proxy:i,isNew:!0}}pruneRoomOwnership(e,t){e.streamOwners.forEach((n,r)=>{n.delete(t),n.size===0&&(e.streamOwners.delete(r),e.peer.removeStream(r))}),e.trackOwners.forEach((n,r)=>{n.rooms.delete(t),n.rooms.size===0&&(e.trackOwners.delete(r),e.peer.removeTrack(r))})}scheduleIdleTimer(e){e.isClosing||V(e.bindings).length>0||(e.idleTimer=F(e.idleTimer),e.idleTimer=setTimeout(()=>{let t=this.byApp[e.appId]?.[e.peerId];!t||V(t.bindings).length>0||this.clear(e.appId,e.peerId,{destroyPeer:!0})},e.idleMs))}getSignalBinding(e){if(e.controlRoomId){let n=e.bindings[e.controlRoomId];if(n?.handlers.signal)return n}let t=ke(e.bindings).find(n=>!!n.handlers.signal);return t?(e.controlRoomId=t.roomId,t):null}flushBindingQueues(e){let{handlers:t}=e;t.data&&e.pendingData.length>0&&e.pendingData.splice(0).forEach(n=>t.data?.(n)),(t.track||t.stream)&&e.pendingTracks.length&&e.pendingTracks.splice(0).forEach(({track:n,stream:r})=>{t.track?.(n,r),t.stream?.(r)})}dispatchData(e,t){let n=Hi(t);if(!n)return;if(n.type==="presence"){n.isPresent?e.remoteRoomTokens.add(n.roomToken):e.remoteRoomTokens.delete(n.roomToken),this.roomPresenceHandlers[e.appId]?.(e.peerId,n.roomToken,n.isPresent);return}let r=e.bindingsByToken[n.roomToken];if(!r){let o=e.pendingDataByToken.get(n.roomToken)??[];o.push(n.payload),e.pendingDataByToken.set(n.roomToken,o);return}r.handlers.data?r.handlers.data(n.payload):r.pendingData.push(n.payload)}dispatchSignal(e,t){this.getSignalBinding(e)?.handlers.signal?.(t)}dispatchTrack(e,t,n){ke(e.bindings).forEach(r=>{if(r.handlers.track||r.handlers.stream){r.handlers.track?.(t,n),r.handlers.stream?.(n);return}r.pendingTracks.push({track:t,stream:n})})}};var ji=23333,qi=12,Ui=7533,$i=23333,jn="__legacy__",Wt="offer-placeholder",Fi=["offer","answer","candidate"],Ki=e=>{if(typeof e=="string")try{let t=he(e);return t&&typeof t=="object"?t:null}catch{return null}return e&&typeof e=="object"?e:null},yt=(e,t)=>typeof e[t]=="string"&&e[t]?e[t]:void 0,Wi=e=>Fi.some(t=>t in e&&(typeof e[t]!="string"||e[t]==="")),Xo=(e,t,n,r,o,a)=>{e.toCipher(t).then(s=>{e.isLeaving()||!a()||r(n,te(o(s.sdp)))})},Yi=()=>({status:"idle",offerPeer:null,offerId:null,offerSdp:null,offerInitPromise:null,offerAnswered:!1,offerRelays:[],offerSignalRelays:[],offerSignalBacklog:[],offerRelayTimers:[],offerExpiryTimer:null,connectedPeer:null,connectedPeerUnhealthySinceMs:null,answeringExpiryTimer:null,answeringPeer:null,answerSent:!1,connectionErrorReported:!1,pendingCandidates:{}}),Gi=e=>[...e.turnConfig??[],...e.rtcConfig?.iceServers??[]].some(({urls:t})=>(Array.isArray(t)?t:[t]).some(n=>/^turns?:/i.test(n))),Qi=(e,t)=>`could not connect to peer ${e} after exchanging SDP; ${Gi(t)?"check that your TURN server URLs and credentials are reachable by both peers":"configure TURN servers with turnConfig or rtcConfig.iceServers"}`,Gt=(e,t,n)=>{e.isLeaving()||t.connectedPeer||t.connectionErrorReported||(t.connectionErrorReported=!0,e.onJoinError?.({error:Qi(n,e.config),appId:e.appId,peerId:n,roomId:e.roomId}))},Xe=(e,t)=>e[t]??=Yi(),de=e=>{e.connectedPeer?e.status="connected":e.answeringPeer?e.status="answering":e.offerPeer||e.offerRelays.some(Boolean)?e.status="offering":e.status="idle"},Kt=(e,t)=>{e.answeringPeer===t&&(e.answeringExpiryTimer=F(e.answeringExpiryTimer),e.answeringPeer=null,e.answerSent=!1,de(e))},Yt=(e,t,n)=>{e.connectedPeer&&(e.connectedPeer.isDead||e.connectedPeer.destroy(),e.connectedPeer=null,e.connectedPeerUnhealthySinceMs=null,de(e))},qn=(e,t)=>{e.offerRelayTimers[t]=F(e.offerRelayTimers[t]),e.offerRelays[t]&&(e.offerRelays[t]=void 0,de(e))},Jo=(e,t)=>{e?.offerRelays[t]===Wt&&qn(e,t)},Vi=e=>{if(e.isDead||e.connection.connectionState==="closed")return!0;try{return!!e.connection.remoteDescription}catch{return!0}},Ze=(e,t)=>{let n=e.offerAnswered;e.offerExpiryTimer=F(e.offerExpiryTimer),e.offerInitPromise=null,e.offerRelays.forEach((r,o)=>qn(e,o)),e.offerRelays=[],e.offerSignalRelays=[],e.offerRelayTimers=[],e.offerSignalBacklog=[],e.offerPeer&&e.offerPeer!==e.connectedPeer&&(n||Vi(e.offerPeer)?e.offerPeer.isDead||e.offerPeer.destroy():t.recycle(e.offerPeer)),e.offerPeer=null,e.offerId=null,e.offerSdp=null,e.offerAnswered=!1,e.connectionErrorReported=!1,de(e)},Ji=(e,t,n,r)=>{F(t.answeringExpiryTimer),t.answeringExpiryTimer=setTimeout(()=>{let o=e.peerStates[n];!o||o.connectedPeer||o.answeringPeer!==r||(o.answerSent&&Gt(e,o,n),r.destroy(),Kt(o,r),e.checkDeactivate())},$i)},Xi=async(e,t,n)=>{let r=n?[n,jn]:[jn];for(let o of r){let a=e.pendingCandidates[o];if(a?.length){delete e.pendingCandidates[o];for(let s of a)await t.signal(s)}}},Zo=(e,t,n,r=mt)=>{F(t.offerExpiryTimer);let o=t.offerId;t.offerExpiryTimer=setTimeout(()=>{let a=e.peerStates[n];!a||a.connectedPeer||a.offerId!==o||(a.offerAnswered&&Gt(e,a,n),Ze(a,e.offerPool),e.checkDeactivate())},r)},Zi=(e,t,n,r)=>t.offerPeer&&t.offerId&&t.offerSdp?Promise.resolve({peer:t.offerPeer,offer:t.offerSdp,offerId:t.offerId}):(t.offerInitPromise||(t.offerInitPromise=(async()=>{let o=(await e.offerPool.checkout(1,!1,e.encryptOffer))[0];if(!o)throw K("failed to allocate offer peer");let{peer:a,offer:s}=o;t.offerPeer=a,t.offerId=ce(qi),t.offerSdp=s,t.offerAnswered=!1,t.connectionErrorReported=!1,t.offerSignalBacklog=[],de(t);let i=()=>{t.offerPeer===a&&!t.connectedPeer&&(t.offerAnswered&&Gt(e,t,n),Ze(t,e.offerPool)),e.disconnectPeer(a,n),e.checkDeactivate()};return a.setHandlers({connect:()=>e.connectPeer(a,n,r),signal:c=>{t.offerPeer===a&&(t.offerSignalBacklog.push(c),t.offerSignalRelays.forEach(h=>h?.(c)))},close:i,error:i}),Zo(e,t,n),{peer:a,offer:s,offerId:t.offerId}})().finally(()=>t.offerInitPromise=null)),t.offerInitPromise),ec=async(e,t,n,r,o)=>{if(r){e.attachSharedPeerToRoom(n,r);return}let a=e.peerStates[n];if(!a||a.connectedPeer||a.answeringPeer||a.offerAnswered){Jo(a,t);return}if(a.offerRelays[t]!==Wt)return;let[s,i]=await le([we($e(e.rootTopicPlaintext,n)),Zi(e,a,n,t)]);if(e.isLeaving())return;if(a.connectedPeer||a.answeringPeer||a.offerAnswered||a.offerRelays[t]!==Wt){Jo(a,t);return}a.offerRelayTimers[t]=F(a.offerRelayTimers[t]),a.offerRelays[t]=!0,de(a),a.offerRelayTimers[t]=setTimeout(()=>oc(e,n,t),(e.announceIntervals[t]??e.announceIntervalMs)*.9);let c=!1;a.offerSignalRelays[t]=h=>{c&&(e.isLeaving()||a.connectedPeer||a.offerPeer!==i.peer||a.offerId!==i.offerId||h.type!=="candidate"||Xo(e,h,s,o,f=>({peerId:Z,offerId:i.offerId,candidate:f,...e.isPassive?{passive:!0}:{}}),()=>!a.connectedPeer&&a.offerPeer===i.peer&&a.offerId===i.offerId))},o(s,te({peerId:Z,offerId:i.offerId,offer:i.offer,...e.isPassive?{passive:!0}:{}})),c=!0,a.offerSignalBacklog.forEach(h=>a.offerSignalRelays[t]?.(h))},tc=async(e,t,n,r,o,a,s)=>{let i=Xe(e.peerStates,n);if(i.answeringPeer||i.offerAnswered)return;let c=!!(i.offerPeer||i.offerRelays.some(Boolean));if((c||a)&&Z<n)return;c&&Ze(i,e.offerPool);let h=e.initPeer(!1,e.config);i.answeringPeer=h,i.answerSent=!1,i.connectionErrorReported=!1,Ji(e,i,n,h),de(i);let f=()=>{i.answeringPeer===h&&!i.connectedPeer&&i.answerSent&&Gt(e,i,n),Kt(i,h),e.disconnectPeer(h,n),e.checkDeactivate()};h.setHandlers({connect:()=>e.connectPeer(h,n,t),close:f,error:f});let l;try{l=await e.toPlain({type:"offer",sdp:r})}catch{Kt(i,h),e.onJoinError?.({error:"incorrect room password when decrypting offer",appId:e.appId,peerId:n,roomId:e.roomId});return}if(h.isDead){Kt(i,h);return}let d=await we($e(e.rootTopicPlaintext,n));e.isLeaving()||(h.setHandlers({signal:u=>{e.isLeaving()||i.answeringPeer!==h||h.isDead||u.type!=="answer"&&u.type!=="candidate"||Xo(e,u,d,s,b=>{let _={peerId:Z};return u.type==="answer"?(i.answerSent=!0,_.answer=b):_.candidate=b,o&&(_.offerId=o),e.isPassive&&(_.passive=!0),_},()=>i.answeringPeer===h&&!h.isDead)}}),await h.signal(l),await Xi(i,h,o))},nc=async(e,t,n,r,o)=>{let a;try{a=await e.toPlain({type:Ht,sdp:n})}catch{return}let s=Xe(e.peerStates,t),i=r&&s?.offerPeer&&s.offerId===r?s.offerPeer:null,c=s?.answeringPeer??null,h=!r&&s?.offerPeer?s.offerPeer:null,f=o&&!o.isDead?o:i??c??h;if(!f||f.isDead){let l=r??jn;(s.pendingCandidates[l]??=[]).push(a);return}f.signal(a)},rc=async(e,t,n,r,o,a)=>{let s;try{s=await e.toPlain({type:"answer",sdp:r})}catch{e.onJoinError?.({error:"incorrect room password when decrypting answer",appId:e.appId,peerId:n,roomId:e.roomId});return}if(a)e.offerPool.claimLeased(a),a.setHandlers({connect:()=>e.connectPeer(a,n,t),close:()=>e.disconnectPeer(a,n)}),a.signal(s);else{let i=e.peerStates[n];if(!i||!i.offerPeer||i.offerAnswered||o&&i.offerId&&o!==i.offerId||i.offerPeer.isDead)return;i.offerAnswered=!0,Zo(e,i,n,ji),i.offerPeer.signal(s)}},oc=(e,t,n)=>{let r=e.peerStates[t];!r||r.connectedPeer||r.offerRelays[n]&&(qn(r,n),e.checkDeactivate())},es=e=>t=>async(n,r,o)=>{if(e.isLeaving())return;let a=Ki(r);if(!a||Wi(a))return;let s=yt(a,"peerId")??"",i=yt(a,"offer"),c=yt(a,"answer"),h=yt(a,"candidate"),f=yt(a,"offerId"),l=a.peer,d=a.hasOutgoingOffer===!0,u=a.passive===!0;if(!s||s===Z)return;let[b,_]=await le([e.rootTopicP,e.selfTopicP]);if(e.isLeaving()||n!==b&&n!==_||e.isPassive&&u||(e.isPassive&&!e.isActive&&!c&&!h&&(e.isActive=!0,e.requeueAnnounce?.()),e.isPassive&&!e.isActive))return;let v=e.peerStates[s],B=v?.connectedPeer;if(B&&v){let z=Qo(B);if(z==="live"){v.connectedPeerUnhealthySinceMs=null;return}if(z==="stale")Yt(v,s,"message-from-stale-peer");else{let R=Date.now(),I=v.connectedPeerUnhealthySinceMs??R;if(v.connectedPeerUnhealthySinceMs=I,R-I<Ui)return;Yt(v,s,"message-from-prolonged-disconnect")}}let P=e.sharedPeers.get(e.appId,s);P&&e.sharedPeers.getHealth(P.peer)==="stale"&&(e.sharedPeers.clear(e.appId,s,{destroyPeer:!0}),P=void 0);let O=!!(s&&!i&&!c&&!h);if(O&&!P){let z=Xe(e.peerStates,s),R=Z<s;if(z.answeringPeer||z.connectedPeer||z.offerAnswered)return;if(!R&&!z.offerPeer){let I=await we($e(e.rootTopicPlaintext,s));!e.isLeaving()&&!z.connectedPeer&&o(I,te({peerId:Z}));return}if(z.offerRelays[t])return;z.offerRelays[t]=Wt,de(z)}if(P&&(i||c||h)){if(P.bindings[e.roomId])return;e.attachSharedPeerToRoom(s,P);return}if(O)return ec(e,t,s,P,o);if(i)return tc(e,t,s,i,f,d,o);if(h)return nc(e,s,h,f,l);if(c)return rc(e,t,s,c,f,l)};var Un=5333,sc=[233,533,1333],ac=7533,ic=123333,vt=({init:e,subscribe:t,announce:n,deactivate:r})=>{let o={},a={},s={},i={},c=new Vo,h=()=>ke(o).some(R=>V(R).length>0),f=R=>a[R]??={},l=R=>s[R]??={},d=(R,I,k)=>{c.getHealth(R.peer)==="live"&&c.sendRoomPresence(R,I,k)},u=(R,I)=>{ae(a[R]??{}).forEach(([k,m])=>{if(!m.shouldAdvertise())return;let{roomToken:w,roomTokenPromise:E}=m;if(w){d(I,w,!0);return}E.then(S=>{a[R]?.[k]===m&&m.roomToken===S&&(c.get(R,I.peerId)!==I||I.isClosing||m.shouldAdvertise()&&d(I,S,!0))})})},b=(R,I,k)=>ke(c.getMap(R)).forEach(m=>d(m,I,k)),_=R=>{i[R]||(i[R]=c.setRoomPresenceHandler(R,(I,k,m)=>{if(!m)return;let w=c.get(R,I),E=s[R]?.[k];!w||!E||a[R]?.[E]?.attachSharedPeerToRoom(I,w)}))},v=R=>{o[R]&&V(o[R]).length>0||(i[R]?.(),delete i[R],delete a[R],delete s[R])},B=!1,P=[],O=null,z=ee;return(R,I,k)=>{if(!R)throw K("requires a config map as the first argument");if(k&&typeof k!="object")throw K("third argument must be a callbacks object");let{appId:m}=R,w=k?.onJoinError,E=k?.onPeerHandshake,S=k?.handshakeTimeoutMs;if(!m)throw K("config map is missing appId field");if(!I)throw K("roomId argument required");if(S!==void 0&&(!Number.isFinite(S)||S<=0))throw K("handshakeTimeoutMs must be a positive number");if(o[m]?.[I])return o[m][I];_(m);let C=$e(J,m,I),L=we(C),p=we($e(C,Z)),g=ko(R.password??"",m,I),x=xo(m,I),T=R._test_only_sharedPeerIdleMs??ic,M=!1,j=q=>async U=>({type:U.type,sdp:await q(g,U.sdp)}),W=j(Eo),A=j(_o),D=c.getMap(m),H=()=>Dn(!0,R);O||=new Ao(H);let G=O,Te=async q=>{let U=await q.getOffer(Date.now()-q.created>mt);if(!U||U.type!=="offer")throw K("failed to get offer for peer");return(await A(U)).sdp},_e=(q,U)=>{let $=Xe(X.peerStates,q);$.answeringExpiryTimer=F($.answeringExpiryTimer),$.answeringPeer=null;let{proxy:re,isNew:Y}=c.bind(I,x,U,{onDetach:()=>{let ie=X.peerStates[q];ie?.connectedPeer===U.peer&&(ie.connectedPeer=null,ie.connectedPeerUnhealthySinceMs=null,de(ie))}});$.connectedPeer=U.peer,$.connectedPeerUnhealthySinceMs=null,de($),Y&&dn(re,q),Ze($,G)},xa=(q,U,$)=>{if(M){q.destroy();return}let re=Xe(X.peerStates,U);if(re.connectedPeer){let Ne=D[U];if(Ne&&re.connectedPeer===Ne.peer&&Ne.bindings[I])return;re.connectedPeer!==q&&!q.isDead&&q.destroy();return}let Y=D[U];if(Y&&c.getHealth(Y.peer)==="stale"&&(c.clear(m,U,{destroyPeer:!0}),Y=void 0),Y&&Y.peer!==q){q.isDead||q.destroy(),_e(U,Y);return}let ie=!Y;Y||=c.register(m,U,q,T),_e(U,Y),ie&&u(m,Y)},Sa=(q,U)=>{if(M)return;let $=X.peerStates[U];$?.connectedPeer===q&&(Yt($,U,"close-event"),Pt())},fe=!!R.passive,Ie=null,Le,kr=ee,Pt=()=>{if(!fe||!X.isActive)return;let q=!1;ae(X.peerStates).forEach(([U,$])=>{$.connectedPeer||$.answeringPeer||$.offerInitPromise||$.offerPeer||$.offerRelays.some(Boolean)?q=!0:$.status==="idle"&&delete X.peerStates[U]}),q||(X.isActive=!1,Le=F(Le),Ye.forEach(F),Ye.length=0,kr(),Ie?.roomToken&&b(m,Ie.roomToken,!1))},X={appId:m,roomId:I,config:R,peerStates:{},rootTopicPlaintext:C,rootTopicP:L,selfTopicP:p,toPlain:W,toCipher:A,isLeaving:()=>M,isPassive:fe,isActive:!fe,onJoinError:w,sharedPeers:c,offerPool:G,encryptOffer:Te,initPeer:Dn,connectPeer:xa,disconnectPeer:Sa,attachSharedPeerToRoom:_e,checkDeactivate:Pt,announceIntervals:[],announceIntervalMs:Un},cn={config:R,appId:m,roomId:I,isPassive:fe},Ta=es(X);if(!B){let q=e(R);P=(Array.isArray(q)?q:[q]).map(U=>Promise.resolve(U)),B=!0,z=R.relayConfig?.manualReconnection?ee:vo()}!fe&&!G.isActive&&G.warmup(),X.announceIntervals=P.map(()=>Un);let ln=P.map(()=>0),hn=P.map(()=>0),Ye=[],xr=P.map(async(q,U)=>t(await q,await L,await p,Ta(U),$=>G.getOffers($,Te),cn));le([L,p]).then(([q,U])=>{if(M)return;let $=async(re,Y)=>{if(M||fe&&!X.isActive)return;let ie=fe?{passive:!0}:void 0,Ne;try{Ne=await n(re,q,U,ie,cn),hn[Y]=0}catch(Ra){let Ar=hn[Y]??0;Ar===0&&R.relayConfig?.warnOnRelayFailure!==!1&&console.warn(`${J}: announce failed - ${xe(Ra,"")}`),hn[Y]=Ar+1}if(M||fe&&!X.isActive)return;typeof Ne=="number"&&(X.announceIntervals[Y]=Ne);let Tr=ln[Y]??0;ln[Y]=Tr+1;let _r=X.announceIntervals[Y]??Un,Er=sc[Tr];Ye[Y]=setTimeout(()=>{$(re,Y)},typeof Er=="number"?Math.min(_r,Er):_r)};kr=()=>{r&&P.forEach(async re=>{let Y=await re;M||r(Y,q,U,cn)})},X.requeueAnnounce=()=>{Ye.forEach(F),Ye.length=0,Le=F(Le),G.isActive||G.warmup(),Ie?.roomToken&&b(m,Ie.roomToken,!0),Le=setTimeout(Pt,ac),P.forEach(async(re,Y)=>{let ie=await re;ie&&!M&&(ln[Y]=0,$(ie,Y))})},xr.forEach(async(re,Y)=>{if(await re,M)return;let ie=await P[Y];ie&&!M&&(!fe||X.isActive)&&$(ie,Y)})});let dn=ee,{compose:_a}=Po(R.password??"",m,I),Sr=_a(E),Ea={...Sr?{onPeerHandshake:Sr}:{},...S===void 0?{}:{handshakeTimeoutMs:S},isPassive:fe,onHandshakeError:(q,U)=>w?.({error:U.replace(/^handshake failed: /,""),appId:m,peerId:q,roomId:I})};o[m]??={};let Aa=f(m),Pa=Fo(q=>dn=q,q=>{if(M)return;let U=X.peerStates[q];U?.connectedPeer&&(U.connectedPeer=null,de(U),Pt())},()=>{M=!0,dn=ee;let q=a[m]?.[I];q?.roomToken&&(b(m,q.roomToken,!1),delete s[m]?.[q.roomToken],s[m]&&!V(s[m]).length&&delete s[m]),a[m]&&(delete a[m][I],V(a[m]).length||delete a[m]),ae(X.peerStates).forEach(([U,$])=>{if($.answeringExpiryTimer=F($.answeringExpiryTimer),$.connectedPeer&&!$.connectedPeer.isDead){let re=D[U];(!re||re.peer!==$.connectedPeer)&&$.connectedPeer.destroy()}$.answeringPeer&&!$.answeringPeer.isDead&&$.answeringPeer.destroy(),Ze($,G),$.connectedPeer=null,$.answeringPeer=null,de($)}),o[m]&&(delete o[m][I],V(o[m]).length===0&&delete o[m]),Ye.forEach(F),Le=F(Le),xr.forEach(async U=>{(await U)()}),!h()&&(B=!1,G.destroy(),O=null,z(),v(m))},Ea);return Ie={roomToken:null,roomTokenPromise:x,attachSharedPeerToRoom:_e,shouldAdvertise:()=>!fe||X.isActive},Aa[I]=Ie,x.then(q=>{let U=Ie;!U||M||a[m]?.[I]!==U||(U.roomToken=q,l(m)[q]=I,ke(D).forEach($=>{$.remoteRoomTokens.has(q)&&_e($.peerId,$)}),(!fe||X.isActive)&&b(m,q,!0))}),o[m][I]=Pa}};var cc=["offer","answer","candidate"],lc=e=>{if(typeof e=="string")try{let t=he(e);return t&&typeof t=="object"?t:null}catch{return null}return e},$n=(e,t)=>typeof e[t]=="string"&&e[t]?e[t]:void 0,hc=e=>cc.some(t=>t in e&&(typeof e[t]!="string"||e[t]==="")),dc=e=>{let t=lc(e);if(!t||hc(t))return!1;let n=$n(t,"peerId");return!!(n&&n!==Z&&t.passive!==!0&&!$n(t,"answer")&&!$n(t,"candidate"))},Fn=e=>{if(!e)throw K("topic strategy missing room context");return e},ts=(e,t,n,r)=>({kind:t,appId:e.appId,roomId:e.roomId,rootTopic:n,selfTopic:r}),Kn=(e,t,n,r)=>({kind:t,appId:e.appId,roomId:e.roomId,rootTopic:n,selfTopic:r}),Wn=({init:e,subscribeTopic:t,publishTopic:n,unpublishTopic:r})=>vt({init:e,subscribe:async(o,a,s,i,c,h)=>{let f=Fn(h),l=(O,z)=>n(o,O,z,Kn(f,"signal",a,s)),d=null,u=!1,b=null,_=!1,v=O=>{u||(u=!0,O())},B=()=>(b||(b=Promise.resolve(t(o,s,(O,z)=>{_||i(O,z,l)},ts(f,"self",a,s))).then(O=>{d=O,_&&v(O)})),b);f.isPassive||await B();let P=await t(o,a,async(O,z)=>{_||(f.isPassive&&dc(z)&&await B(),_||await i(O,z,l))},ts(f,"root",a,s));return()=>{_=!0,d&&v(d),P()}},announce:(o,a,s,i,c)=>{let h=Fn(c);return n(o,a,te({peerId:Z,...i}),Kn(h,"announce",a,s))},...r?{deactivate:(o,a,s,i)=>r(o,a,Kn(Fn(i),"announce",a,s))}:{}});var rs=pt(e=>e.socket),fc=5,os="x",ss="EVENT",{secretKey:uc,publicKey:pc}=En.keygen(),mc=Se(pc),gc={},bc={},wc={},ns=250,as=()=>Math.floor(Date.now()/1e3),is=e=>wc[e]??=jt(e,1e4)+2e4,yc=async(e,t)=>{let n={kind:is(e),tags:[[os,e]],created_at:as(),content:t,pubkey:mc},r=await Fe("SHA-256",te([0,n.pubkey,n.created_at,n.kind,n.tags,n.content]));return te([ss,{...n,id:Se(r),sig:Se(await En.signAsync(r,uc))}])};var et={},vc=(e,t,n)=>{let r=et[e.url]??={subIds:[],topics:new Map,updateTimer:null};r.topics.set(t,n),cs(e,r)},kc=(e,t)=>{let n=et[e.url];n&&(n.topics.delete(t),n.topics.size===0?(n.updateTimer!==null&&(clearTimeout(n.updateTimer),n.updateTimer=null),n.subIds.forEach(r=>e.send(te(["CLOSE",r]))),delete et[e.url]):cs(e,n))},cs=(e,t)=>{t.updateTimer===null&&(t.updateTimer=setTimeout(()=>{t.updateTimer=null,ls(e)},0))},ls=e=>{let t=et[e.url];if(!t||t.topics.size===0)return;let n=[...t.topics.keys()],r=[],o=as();for(let a=0;a<n.length;a+=ns)r.push(n.slice(a,a+ns));for(;t.subIds.length>r.length;){let a=t.subIds.pop();a&&e.send(te(["CLOSE",a]))}r.forEach((a,s)=>{let i=t.subIds[s]??=ce(64);e.send(te(["REQ",i,{kinds:[...new Set(a.map(is))],since:o,"#x":a}]))})},xc=e=>{let t=et[e.url];t&&t.topics.size>0&&ls(e)},hs=Wn({init:e=>ft(e,Sc,fc,!0).map(t=>{let n=rs.register(t,()=>ut(t,r=>{let[o,a,s,i]=he(r);if(o!==ss){let c=`${J}: relay failure from ${n.url} - `;e.relayConfig?.warnOnRelayFailure!==!1&&(o==="NOTICE"?console.warn(c+a):o==="OK"&&!s&&console.warn(c+i));return}if(s&&typeof s=="object"&&"content"in s){let{content:c}=s,h=bc[a];if(h){h(gc[a]??"",c);return}let f=et[n.url];if(f?.subIds.includes(a)&&s.tags){let l=s.tags.find(d=>d[0]===os);l?.[1]&&f.topics.get(l[1])?.(l[1],c)}}},()=>xc(n)));return n.ready}),subscribeTopic:(e,t,n)=>(vc(e,t,(o,a)=>void n(o,a)),()=>{kc(e,t)}),publishTopic:async(e,t,n)=>e.send(await yc(t,typeof n=="string"?n:te(n)))}),sd=rs.getSockets,Sc=["basspistol.org","bucket.coracle.social","chorus.almostmachines.dev","chorus.pjv.me","communities.nos.social","ftp.halifax.rwth-aachen.de/nostr","hol.is","hornetstorage.net/relay","koru.bitcointxoko.org","nos.lol","nostr-01.uid.ovh","nostr-01.yakihonne.com","nostr-relay.corb.net","nostr.data.haus","nostr.islandarea.net","nostr.sathoarder.com","nostr.self-determined.de","nostr.tegila.com.br","nostr.vulpem.com","purplerelay.com","relay-can.zombi.cloudrodion.com","relay-rpi.edufeed.org","relay.agorist.space","relay.angor.io","relay.artio.inf.unibe.ch","relay.binaryrobot.com","relay.damus.io","relay.froth.zone","relay.libernet.app","relay.mostr.pub","relay.mostro.network","relay.nostr.place","relay.nostrdice.com","relay.notoshi.win","relay.sigit.io","relay02.lnfi.network","relay2.angor.io","schnorr.me","slick.mjex.me","social.amanah.eblessing.co","staging.yabu.me","strfry.openhoofd.nl","strfry.shock.network","testnet-relay.samt.st","top.testrelay.top","x.kojira.io","yabu.me/v2"].map(e=>"wss://"+e);var We=pt(e=>e.socket),Yn={},gs={},Qt=We.scoped(),kt=We.scoped(),Tc=We.scoped(),tt={},Vt={},ds=We.scoped(),Gn=We.scoped(),Jt={},nt={},ye={},_c="announce",bs=20,Jn=3,fs=1e4,us=12e4,Ec=2e4,Ac=12e4,ps=4e3,Pc=3,Rc=async e=>{if(Yn[e])return Yn[e];let t=(await we(e)).slice(0,bs);return Yn[e]=t,gs[t]=e,t},Qn=async(e,t,n)=>e.send(te({action:_c,info_hash:await Rc(t),peer_id:Z,...n})),ms=(e,t,n=!1)=>console.warn(`${J}: torrent tracker ${n?"failure":"warning"} from ${e} - ${t}`),xt=e=>Jt[e]??={},Xn=e=>{delete Jt[e],delete nt[e]},Cc=(e,t)=>{let n=Jt[e],r=n?.[t];if(r)return delete n[t],r.claim?.(),!V(n).length&&!ye[e]&&Xn(e),r},ws=(e,t)=>{let n=Jt[e],r=n?.[t];r&&(delete n[t],r.reclaim?.(),!V(n).length&&!ye[e]&&Xn(e))},Vn=e=>{V(xt(e)).forEach(t=>ws(e,t)),Xn(e)},Mc=e=>{let t=Date.now();ae(xt(e)).forEach(([n,r])=>{t-r.createdAt>Ac&&ws(e,n)})},Bc=async(e,t)=>{for(;nt[e];)await nt[e];let n=(async()=>{Mc(e);let r=xt(e),o=V(r).length,a=Math.max(0,Jn-o);a>0&&(await t(a)).forEach(s=>{r[ce(bs)]={...s,createdAt:Date.now()}})})().finally(()=>{nt[e]===n&&delete nt[e]});return nt[e]=n,await n,xt(e)},Oc=vt({init:e=>ft(e,Dc,Pc).map(t=>{let n=We.register(t,()=>ut(t,r=>{let o=he(r),a=o["failure reason"],s=o["warning message"],{interval:i}=o,c=o.info_hash?gs[o.info_hash]:void 0;if(a){e.relayConfig?.warnOnRelayFailure!==!1&&ms(n.url,a,!0);return}if(s&&e.relayConfig?.warnOnRelayFailure!==!1&&ms(n.url,s),i&&i*1e3>(tt[n.url]??fs)&&c&&kt.forKey(t)[c]){let h=Math.min(i*1e3,Ec),f=Qt.forKey(t),l=kt.forKey(t);f[c]&&clearInterval(f[c]),tt[n.url]=h;let d=l[c];d&&(f[c]=setInterval(()=>{d()},h))}if((o.offer||o.answer)&&c&&o.offer_id){if(o.peer_id===Z)return;let h=`${c}:${o.offer?"offer":"answer"}:${o.offer_id}:${o.peer_id??""}`,f=Date.now(),l=Vt[h];if(typeof l=="number"&&f-l<ps)return;Vt[h]=f,ae(Vt).forEach(([d,u])=>{f-u>ps*6&&delete Vt[d]}),ds.forKey(t)[c]?.(o)}}));return n.ready}),subscribe:(e,t,n,r,o,a)=>{let s=ds.forRelay(e),i=kt.forRelay(e),c=Qt.forRelay(e),h=Tc.forRelay(e),f=Gn.forRelay(e),l=Symbol(t);h[t]=l,ye[t]=(ye[t]??0)+1;let d=v=>{if(v.offer&&v.peer_id&&v.offer_id)r(t,{offer:v.offer.sdp,peerId:v.peer_id,hasOutgoingOffer:V(xt(t)).length>0},(B,P)=>void Qn(e,t,{answer:{type:"answer",sdp:he(P).answer},offer_id:v.offer_id,to_peer_id:v.peer_id}));else if(v.answer&&v.offer_id&&v.peer_id){let B=Cc(t,v.offer_id);B&&r(t,{answer:v.answer.sdp,peerId:v.peer_id,peer:B.peer},()=>{})}};s[t]=d;let u={announce:async()=>{if(h[t]===l){if(!u.isActive){Qn(e,t,{left:0,numwant:Jn,offers:[]});return}Qn(e,t,{numwant:Jn,offers:ae(await Bc(t,o)).map(([v,{offer:B}])=>({offer_id:v,offer:{type:"offer",sdp:B}}))})}},isActive:!a?.isPassive};tt[e.url]=fs;let{announce:b}=u;i[t]=b,f[t]=u;let _=u.isActive?tt[e.url]:us;return c[t]=setInterval(b,_),b(),()=>{if(ye[t]=Math.max(0,(ye[t]??1)-1),ye[t]||delete ye[t],h[t]!==l){ye[t]||(Vn(t),delete f[t]);return}let v=c[t];v&&(clearInterval(v),delete c[t]),s[t]===d&&delete s[t],i[t]===b&&delete i[t],delete h[t],f[t]===u&&delete f[t],ye[t]||Vn(t)}},announce:(e,t)=>{let n=Gn.forRelay(e)[t],r=Qt.forRelay(e),o=kt.forRelay(e)[t];return n&&(n.isActive=!0),o&&r[t]&&(clearInterval(r[t]),r[t]=setInterval(()=>{o()},tt[e.url]),o()),tt[e.url]},deactivate:(e,t)=>{let n=Gn.forRelay(e)[t],r=Qt.forRelay(e),o=kt.forRelay(e)[t];n&&(n.isActive=!1),Vn(t),o&&r[t]&&(clearInterval(r[t]),r[t]=setInterval(()=>{o()},us),o())}}),ys=(e,t,n)=>Oc({...e,trickleIce:e.trickleIce??!1},t,n),cd=We.getSockets,Dc=["open.ftorrent.com","tracker.webtorrent.dev","tracker.openwebtorrent.com","tracker.btorrent.xyz","tracker.files.fm:7073/announce"].map(e=>"wss://"+e);function vs(e,t){return{send:n=>e.send(n,{target:t}),bufferedAmount:0,bufferedAmountLowThreshold:0,addEventListener(){},removeEventListener(){}}}var Zn=new TextEncoder;async function ks(){return await crypto.subtle.generateKey({name:"ECDH",namedCurve:"P-256"},!1,["deriveBits"])}async function tr(e){return new Uint8Array(await crypto.subtle.exportKey("raw",e.publicKey))}async function Ic(e){return crypto.subtle.importKey("raw",e,{name:"ECDH",namedCurve:"P-256"},!1,[])}async function Lc(e,t){let[n,r]=Nc(e,t)<=0?[e,t]:[t,e],o=new Uint8Array(n.length+r.length);return o.set(n,0),o.set(r,n.length),new Uint8Array(await crypto.subtle.digest("SHA-256",o))}function Nc(e,t){for(let n=0;n<Math.min(e.length,t.length);n++)if(e[n]!==t[n])return e[n]-t[n];return e.length-t.length}async function er(e,t,n,r,o){let a=await crypto.subtle.importKey("raw",e,"HKDF",!1,["deriveBits","deriveKey"]),s=new Uint8Array(Zn.encode(n).length+r.length);s.set(Zn.encode(n),0),s.set(r,Zn.encode(n).length);let i={name:"HKDF",hash:"SHA-256",salt:t,info:s};return o==="bits"?new Uint8Array(await crypto.subtle.deriveBits(i,a,32)):crypto.subtle.deriveKey(i,a,{name:"AES-GCM",length:256},!1,["encrypt","decrypt"])}async function xs({keypair:e,peerPublicRaw:t,secret:n,role:r}){let o=new Uint8Array(await crypto.subtle.deriveBits({name:"ECDH",public:await Ic(t)},e.privateKey,256)),a=await Lc(await tr(e),t),s=await er(o,n,"host->guest",a,"key"),i=await er(o,n,"guest->host",a,"key"),c=await er(o,n,"sas",a,"bits"),{sas:h,sasWords:f}=Hc(c);return{sendKey:r==="host"?s:i,recvKey:r==="host"?i:s,sas:h,sasWords:f}}var zc=[["\u{1F34E}","apple"],["\u{1F41D}","bee"],["\u{1F335}","cactus"],["\u{1F42C}","dolphin"],["\u{1F418}","elephant"],["\u{1F525}","fire"],["\u{1F47B}","ghost"],["\u{1F344}","mushroom"],["\u{1F9CA}","ice"],["\u{1F511}","key"],["\u{1F34B}","lemon"],["\u{1F319}","moon"],["\u{1F989}","owl"],["\u{1F419}","octopus"],["\u{1F334}","palm"],["\u{1F451}","crown"],["\u{1F308}","rainbow"],["\u{1F40D}","snake"],["\u{1F33B}","sunflower"],["\u{1F32E}","taco"],["\u{1F984}","unicorn"],["\u{1F30A}","wave"],["\u231B","hourglass"],["\u{1F993}","zebra"],["\u2693","anchor"],["\u{1F388}","balloon"],["\u{1F56F}\uFE0F","candle"],["\u{1F48E}","diamond"],["\u{1F95A}","egg"],["\u{1F3B8}","guitar"],["\u{1F528}","hammer"],["\u{1F9F2}","magnet"],["\u{1F3BA}","trumpet"],["\u{1FA90}","saturn"],["\u{1F9E9}","puzzle"],["\u{1F680}","rocket"],["\u2702\uFE0F","scissors"],["\u{1F480}","skull"],["\u{1F52D}","telescope"],["\u{1F32A}\uFE0F","tornado"],["\u{1F9F5}","thread"],["\u{1F682}","train"],["\u2602\uFE0F","umbrella"],["\u{1F3BB}","violin"],["\u26A1","lightning"],["\u{1FA93}","axe"],["\u{1F9F6}","yarn"],["\u{1F9B4}","bone"],["\u{1F3F9}","arrow"],["\u{1F9F1}","brick"],["\u{1F570}\uFE0F","clock"],["\u{1F369}","donut"],["\u{1F941}","drum"],["\u{1FAB6}","feather"],["\u{1F347}","grapes"],["\u{1F514}","bell"],["\u{1FA81}","kite"],["\u{1F37F}","popcorn"],["\u{1F3AF}","target"],["\u{1F9ED}","compass"],["\u{1FA9E}","mirror"],["\u{1F9EA}","flask"],["\u{1F321}\uFE0F","thermometer"],["\u{1FA84}","wand"]];function Hc(e){let t=[0,1,2,3].map(n=>zc[e[n]&63]);return{sas:t.map(([n])=>n).join(" "),sasWords:t.map(([,n])=>n)}}var jc="qrdrop",qc=6e4,Uc=16,$c=["wss://nos.lol","wss://relay.primal.net","wss://relay.mostr.pub","wss://purplerelay.com","wss://nostr.data.haus","wss://nostr-01.yakihonne.com","wss://bucket.coracle.social"],Fc=["wss://tracker.openwebtorrent.com","wss://tracker.webtorrent.dev"],Ss=[{name:"nostr",join:hs,urls:$c},{name:"torrent",join:ys,urls:Fc}],bd=Ss.flatMap(e=>e.urls),Kc=[{urls:["stun:stun.l.google.com:19302","stun:stun1.l.google.com:19302"]},{urls:"stun:global.stun.twilio.com:3478"},{urls:"stun:stun.cloudflare.com:3478"},{urls:"stun:stun.relay.metered.ca:80"},{urls:"turn:openrelay.metered.ca:80",username:"openrelayproject",credential:"openrelayproject"},{urls:"turn:openrelay.metered.ca:443",username:"openrelayproject",credential:"openrelayproject"},{urls:"turn:openrelay.metered.ca:443?transport=tcp",username:"openrelayproject",credential:"openrelayproject"}],Tt=100*1024*1024,Wc=e=>e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):ArrayBuffer.isView(e)?Uint8Array.from(new Uint8Array(e.buffer,e.byteOffset,e.byteLength)):new Uint8Array(0),nr=async e=>{try{await e.leave()}catch{}};function St(e){if(typeof e!="string"||e==="")return!1;let t=e.toLowerCase();if(t.endsWith(".local"))return!0;let n=/^::ffff:(\d{1,3}(?:\.\d{1,3}){3})$/i.exec(t);if(n)return St(n[1]);if(t.includes(":"))return t==="::1"||/^fe[89ab]/.test(t)||/^f[cd]/.test(t);let r=t.split(".");if(r.length!==4)return!1;let[o,a]=r.map(Number);return!Number.isInteger(o)||!Number.isInteger(a)?!1:o===10||o===127||o===192&&a===168||o===172&&a>=16&&a<=31||o===169&&a===254}function rr(e,t){let n=[e,t];return n.includes("relay")?"relay":n.includes("direct")?"direct":n.includes("local")?"local":"unknown"}function Yc(e){for(let t of e.values()){if(t.type!=="transport"||!t.selectedCandidatePairId)continue;let n=e.get(t.selectedCandidatePairId);if(n)return n}for(let t of e.values())if(t.type==="candidate-pair"&&t.selected)return t;for(let t of e.values())if(t.type==="candidate-pair"&&t.state==="succeeded"&&t.nominated!==!1)return t;return null}async function Ts(e){let t=Date.now()+3e3;for(;Date.now()<t;){let n;try{n=await e.getStats()}catch{return"unknown"}let r=new Map;n.forEach((a,s)=>r.set(s,a));let o=Yc(r);if(o){let a=r.get(o.localCandidateId),s=r.get(o.remoteCandidateId);if(a||s)return Gc(a,s)}await new Promise(a=>setTimeout(a,300))}return"unknown"}function Gc(e,t){let n=[e?.candidateType,t?.candidateType],r=[e?.address??e?.ip,t?.address??t?.ip];if(n.includes("relay"))return"relay";if(n.includes("srflx"))return"direct";if(n[0]==="host"&&n[1]==="host"||r.every(St))return"local";let o=["ipv4-public","ipv6-global","ipv4-cgnat"];return r.some(a=>o.includes(Xt(a)))?"direct":"unknown"}function Xt(e){if(typeof e!="string"||e==="")return"none";let t=e.toLowerCase();if(t.endsWith(".local"))return"mdns";let n=/^::ffff:(\d{1,3}(?:\.\d{1,3}){3})$/i.exec(t);if(n)return Xt(n[1]);if(t.includes(":"))return t==="::1"?"ipv6-loopback":/^fe[89ab]/.test(t)?"ipv6-linklocal":/^f[cd]/.test(t)?"ipv6-ula":"ipv6-global";let r=t.split(".");if(r.length!==4)return"unrecognised";let[o,a]=r.map(Number);return!Number.isInteger(o)||!Number.isInteger(a)?"unrecognised":o===127?"ipv4-loopback":o===10||o===192&&a===168||o===172&&a>=16&&a<=31?"ipv4-rfc1918":o===169&&a===254?"ipv4-linklocal":o===100&&a>=64&&a<=127?"ipv4-cgnat":"ipv4-public"}function Qc(e){return typeof e!="string"||e===""?null:e.replace(/[0-9]/g,"#").replace(/[a-z]/gi,"a").slice(0,80)}async function Vc(e){let t=new Map;try{(await e.getStats()).forEach((s,i)=>t.set(i,s))}catch(s){return{error:String(s)}}let n=s=>s&&{type:s.candidateType,addressForm:Xt(s.address??s.ip),addressShape:Xt(s.address??s.ip)==="unrecognised"?Qc(s.address??s.ip):void 0,privateByRule:St(s.address??s.ip),port:s.port??null,protocol:s.protocol??null,network:s.networkType??null},r=new Set;for(let s of t.values())(s.type==="local-candidate"||s.type==="remote-candidate")&&s.candidateType==="srflx"&&(s.address??s.ip)&&r.add(s.address??s.ip);let o=[];for(let s of t.values())s.type==="transport"&&s.selectedCandidatePairId&&o.push(s.selectedCandidatePairId);let a=[];for(let[s,i]of t)i.type==="candidate-pair"&&a.push({id:s,state:i.state,nominated:i.nominated,selectedFlag:i.selected,isSelectedByTransport:o.includes(s),local:n(t.get(i.localCandidateId)),remote:n(t.get(i.remoteCandidateId)),remoteIsPeerPublic:(()=>{let c=t.get(i.remoteCandidateId),h=c?.address??c?.ip;return!!(h&&r.has(h))})(),wouldBeBothHost:t.get(i.localCandidateId)?.candidateType==="host"&&t.get(i.remoteCandidateId)?.candidateType==="host",wouldBeBothPrivate:St(t.get(i.localCandidateId)?.address??t.get(i.localCandidateId)?.ip)&&St(t.get(i.remoteCandidateId)?.address??t.get(i.remoteCandidateId)?.ip)});return{selectedIds:o,pairs:a,classified:await Ts(e)}}async function Jc(e,{topic:t,password:n,secret:r,role:o,iceServers:a,rtcPolyfill:s,signal:i,onStatus:c}){let h=await ks(),f=Re(await tr(h)),l=e.join({appId:jc,password:n,relayConfig:{urls:[...e.urls]},rtcConfig:{iceServers:[...a]},...s?{rtcPolyfill:s}:{}},t),d=l.makeAction("ecdh"),u=l.makeAction("frame"),b=null,_=[],v=null;return u.onMessage=(B,{peerId:P})=>{if(P!==v)return;let O=Wc(B);if(b)return b(O);_.length<Uc&&_.push(O)},new Promise((B,P)=>{let O=I=>{nr(l),P(I)},z=()=>O(new Error(`${e.name}: superseded`));if(i.aborted)return z();i.addEventListener("abort",z,{once:!0});let R=!1;l.onPeerJoin=I=>{c?.(`Found the other device via ${e.name}, agreeing keys\u2026`),d.send(f,{target:I})},d.onMessage=async(I,{peerId:k})=>{if(!R){if(R=!0,v=k,typeof I!="string")return i.removeEventListener("abort",z),O(new Error(`${e.name}: peer sent a malformed public key`));try{let m=await xs({keypair:h,peerPublicRaw:ct(I),secret:r,role:o});i.removeEventListener("abort",z),B({strategy:e.name,room:l,frameAction:u,setFrameHandler:w=>{b=w;for(let E of _.splice(0))w(E)},session:m,peerId:k})}catch(m){i.removeEventListener("abort",z),O(m instanceof Error?m:new Error(String(m)))}}}})}async function _s({topic:e,password:t,secret:n,role:r,timeoutMs:o=qc,onStatus:a,strategies:s=Ss,iceServers:i=Kc,rtcPolyfill:c}){let h=new AbortController,f=s.map(R=>Jc(R,{topic:e,password:t,secret:n,role:r,iceServers:i,rtcPolyfill:c,signal:h.signal,onStatus:a}));f.forEach(R=>R.catch(()=>{})),a?.(`Waiting for the other device (${s.map(R=>R.name).join(", ")})\u2026`);let l,d=new Promise((R,I)=>{l=setTimeout(()=>I(new Error("Timed out waiting for the other device")),o)}),u;try{u=await Promise.race([Promise.any(f),d])}catch(R){throw h.abort(),clearTimeout(l),R instanceof AggregateError?new Error("Could not pair on any signalling network",{cause:R}):R}clearTimeout(l),h.abort(),f.forEach(R=>R.then(I=>{I!==u&&nr(I.room)},()=>{})),a?.(`Paired over ${u.strategy}`);let{session:b,peerId:_,room:v,frameAction:B,setFrameHandler:P}=u,O=null,z=()=>{if(O)return O;let R=v.getPeers()[_];return R?(O=Ts(R),O):Promise.resolve("unknown")};return{session:b,peerId:_,channel:vs(B,_),onFrame(R){P(R)},onPeerLeave(R){v.onPeerLeave=I=>{I===_&&R()}},path:z,async pathEvidence(){let R=v.getPeers()[_];return R?Vc(R):null},async isRelayed(){return await z()==="relay"},close(){return nr(v)}}}function Xc({type:e,fileSeq:t,index:n,last:r=!1}){let o=new Uint8Array(14),a=new DataView(o.buffer);return a.setUint8(0,e),a.setUint32(1,t,!1),a.setBigUint64(5,BigInt(n),!1),a.setUint8(13,r?1:0),o}function or(e){let t=new DataView(e.buffer,e.byteOffset,14);return{type:t.getUint8(0),fileSeq:t.getUint32(1,!1),index:Number(t.getBigUint64(5,!1)),last:t.getUint8(13)===1}}function Es(e){return e.slice(1,13)}async function sr(e,t,n){let r=Xc(t),o=new Uint8Array(await crypto.subtle.encrypt({name:"AES-GCM",iv:Es(r),additionalData:r},e,n)),a=new Uint8Array(14+o.length);return a.set(r,0),a.set(o,14),a}var _t=class extends Error{constructor(t){super("Frame did not authenticate under the session key",{cause:t}),this.name="UnauthenticatedFrame"}};async function Zt(e,t,n){if(t.length<30)throw new Error("Frame too short");if(t.length>16414)throw new Error("Frame exceeds maximum size");let r=t.slice(0,14),o=or(r),a;try{a=new Uint8Array(await crypto.subtle.decrypt({name:"AES-GCM",iv:Es(r),additionalData:r},e,t.slice(14)))}catch(s){throw new _t(s)}if(n){if(o.type!==n.type)throw new Error("Unexpected frame type");if(o.fileSeq!==n.fileSeq)throw new Error("Frame from unexpected file");if(o.index!==n.index)throw new Error(`Out-of-order frame: expected ${n.index}, got ${o.index}`)}return{...o,plaintext:a}}var Zc=new TextEncoder,el=new TextDecoder;async function As(e,t,n){return sr(e,{type:0,fileSeq:4294967295,index:t},Zc.encode(JSON.stringify(n)))}async function Ps(e,t,n){let{plaintext:r}=await Zt(e,t,{type:0,fileSeq:4294967295,index:n});return JSON.parse(el.decode(r))}var Rs=new WeakMap;function rt({channel:e,key:t,nextControlIndex:n},r){let a=(Rs.get(n)??Promise.resolve()).then(async()=>{await e.send(await As(t,n(),r))});return Rs.set(n,a.catch(()=>{})),a}function Cs(){let e=[],t=null,n=!1,r=null,o=!1,a,s=(i,c,h)=>c.includes(i.t)&&(h===void 0||i.t==="error"||"seq"in i&&i.seq===h);return{push(i){if(t&&s(i,t.types,t.seq)){let{resolve:c}=t;return t=null,c(i),!0}return e.push(i),!1},next(i,c,{signal:h}={}){let f=e.findIndex(l=>s(l,i,c));return f!==-1?Promise.resolve(e.splice(f,1)[0]):o?Promise.reject(a):t?Promise.reject(new Error("Control stream already has a waiter")):new Promise((l,d)=>{t={types:i,seq:c,resolve:l,reject:d},h?.addEventListener("abort",()=>{t=null,d(new Error("Cancelled"))},{once:!0})})},fail(i){if(o||(o=!0,a=i),t){let{reject:c}=t;t=null,c(a)}if(r){let{reject:c}=r;r=null,c(a)}},throwIfFailed(){if(o)throw a},setFlow(i){if(i==="pause"){n=!0;return}n=!1,r?.resolve(),r=null},flowGate(){return o?Promise.reject(a):n?new Promise((i,c)=>{r={resolve:i,reject:c}}):null}}}var Ms=async e=>new Uint8Array(await crypto.subtle.digest("SHA-256",e)),en=()=>new Uint8Array(32);async function tn(e,t){let n=new Uint8Array(64);return n.set(e,0),n.set(await Ms(t),32),Ms(n)}var Et=e=>[...e].map(t=>t.toString(16).padStart(2,"0")).join("");function Bs(e,t){if(typeof e!="string"||typeof t!="string"||e.length!==t.length)return!1;let n=0;for(let r=0;r<e.length;r++)n|=e.charCodeAt(r)^t.charCodeAt(r);return n===0}var rl=["accept","decline","done","error"],ol=4*1024*1024,sl=1*1024*1024;function Os({channel:e,sendKey:t,recvKey:n,control:r,nextControlIndex:o,onOffer:a,onProgress:s,onFileDone:i,onError:c,onPeerPath:h,createSink:f}){let l=0,d=0,u=0,b=!1,_=!1,v=null,B=g=>rt({channel:e,key:t,nextControlIndex:o},g),P=g=>{B({t:g}).catch(()=>{})};function O(){b||u<ol||(b=!0,P("pause"))}function z(){!b||u>sl||(b=!1,P("resume"))}async function R(g){_=!0;let x=v?.manifest?.seq,T=v?.sink;v=null,T&&await T.abort().catch(()=>{}),await I(x??0,g),c?.(g)}async function I(g,x){try{await B({t:"error",seq:g,message:String(x instanceof Error?x.message:x).slice(0,200)})}catch{}}async function k(g){if(v)throw new Error("Peer offered a file while one was already in flight");let x=async()=>{v=null,await B({t:"decline",seq:g.seq})};a({manifest:g,accept:async()=>{if(_)return null;let M;try{M=await f(g)}catch(j){throw _=!0,await I(g.seq,j),j}return _?(await M?.abort().catch(()=>{}),null):M?(v={manifest:g,sink:M,expected:0,digest:en(),received:0},await B({t:"accept",seq:g.seq}),M):(await x(),null)},decline:x})}async function m(g){if(!v)throw await Zt(n,g,null),new Error("Chunk arrived with no accepted file");let x=v,{plaintext:T,last:M}=await Zt(n,g,{type:1,fileSeq:x.manifest.seq,index:x.expected});if(await x.sink.write(T),x===v){if(x.digest=await tn(x.digest,T),x.expected+=1,x.received+=T.length,x.received>x.manifest.size)throw new Error("Peer sent more data than the manifest declared");if(M&&x.expected!==x.manifest.chunks)throw new Error("End-of-file flag arrived at the wrong chunk");s?.({received:x.received,total:x.manifest.size,chunk:x.expected,chunks:x.manifest.chunks})}}async function w(g){if(!v||g.seq!==v.manifest.seq)throw new Error("Unexpected completion");if(v.expected!==g.chunks)throw new Error("Chunk count mismatch");if(v.received!==v.manifest.size)throw new Error("Size mismatch");if(!Bs(Et(v.digest),g.digest))throw new Error("Digest mismatch");let x=v;if(await x.sink.close(),x!==v)return;let T={name:x.sink.name,size:x.received,digest:g.digest};v=null,await B({t:"done",seq:g.seq}),i?.(T)}async function E(g){if(!_)try{if(g.length<14)throw new Error("Runt frame");if(or(g).type===0){let x=await Ps(n,g,l);return l+=1,x.t==="path"?void h?.(x.path):x.t==="pause"||x.t==="resume"?void r.setFlow(x.t):rl.includes(x.t)?void r.push(x):x.t==="manifest"?void await k(x):x.t==="complete"?void await w(x):void 0}await m(g)}catch(x){if(_)return;if(x instanceof _t){d+=1;return}r.fail(x),await R(x)}}let S=Promise.resolve();function C(g){u+=g.length,O();let x=S.then(()=>E(g));return S=x.catch(()=>{}),x.finally(()=>{u-=g.length,z()})}async function L(){if(_)return;_=!0;let g=v?.sink;v=null,g&&await g.abort().catch(()=>{})}function p(){return S}return{handleFrame:C,cancel:L,settled:p,get busy(){return v!==null},get dropped(){return d},get pending(){return u}}}async function Ds({channel:e,key:t,nextControlIndex:n,path:r}){await rt({channel:e,key:t,nextControlIndex:n},{t:"path",path:r})}var al=4*1024*1024,il=256*1024,cl=120*1e3;function ll(e){return e.bufferedAmount<=al?null:new Promise(t=>{let n=()=>{e.removeEventListener("bufferedamountlow",n),t()};e.addEventListener("bufferedamountlow",n)})}async function hl(e){let t=e.flowGate();if(!t)return;let n,r=new Promise((o,a)=>{n=setTimeout(()=>a(new Error("Peer paused the transfer and never resumed")),cl)});try{await Promise.race([t,r])}finally{clearTimeout(n)}}async function Is({channel:e,key:t,file:n,fileSeq:r,control:o,nextControlIndex:a,onProgress:s,signal:i}){e.bufferedAmountLowThreshold=il;let c={channel:e,key:t,nextControlIndex:a},h=Math.max(1,Math.ceil(n.size/16318));await rt(c,{t:"manifest",seq:r,name:n.name,size:n.size,mime:n.mime||"application/octet-stream",chunks:h});let f=await o.next(["accept","decline","error"],r);if(f.t==="error")throw new Error("Peer refused the transfer: "+f.message);if(f.t==="decline")return{declined:!0};let l=en(),d=0;for(let b=0;b<h;b++){if(i?.aborted)throw new Error("Transfer cancelled");o.throwIfFailed(),await ll(e),await hl(o);let _=b*16318,v=await n.slice(_,Math.min(_+16318,n.size));l=await tn(l,v),await e.send(await sr(t,{type:1,fileSeq:r,index:b,last:b===h-1},v)),d+=v.length,s?.({sent:d,total:n.size,chunk:b+1,chunks:h})}await rt(c,{t:"complete",seq:r,chunks:h,digest:Et(l)});let u=await o.next(["done","error"],r);if(u.t==="error")throw new Error("Peer could not complete the transfer: "+u.message);return{declined:!1,digest:Et(l)}}function cr(e){if(!Number.isFinite(e)||e<0)return"";if(e<20)return"a few seconds";if(e<90)return`about ${Math.round(e/10)*10} seconds`;let t=Math.round(e/30)/2;return t<10?`about ${t%1===0?t:Math.floor(t)+"\xBD"} min`:`about ${Math.round(e/60)} min`}function ne(e){if(e<1024)return`${e} B`;let t=["KB","MB","GB","TB"],n=e/1024,r=0;for(;n>=1024&&r<t.length-1;)n/=1024,r++;return`${n<10?n.toFixed(1):Math.round(n)} ${t[r]}`}function Ls({name:e,size:t,limit:n}){return`This connection is going through a public relay, capped at ${ne(n)}. ${e} is ${ne(t)}. Try again on a network where a direct connection is possible.`}function Ns({name:e,size:t,limit:n}){return`${e} (${ne(t)}) is over the ${ne(n)} limit for a transfer going through a public relay.`}var nn="The other device disconnected.";function rn(e){switch(e){case"local":return{label:"Local network",detail:"The file's bytes are staying on this network, not crossing the internet."};case"direct":return{label:"Direct, over the internet",detail:"A direct connection to the other device, but the bytes cross the internet."};case"relay":return{label:"Through a public relay",detail:"Bytes cross the internet twice, via a third-party TURN server, and are size-capped."};default:return{label:"Path unknown",detail:"This device can't tell which route the connection took."}}}var lr=25*1024*1024;function zs({name:e,size:t,path:n}){return n!=="direct"&&n!=="relay"||t<=lr?null:`${e} is ${ne(t)} and this connection crosses the internet. On a metered connection that may cost money.`}var ot="QRD1",dl=600,on=1024*1024,fl=64*1024*1024,At=20,js=new Uint32Array(256);for(let e=0;e<256;e++){let t=e;for(let n=0;n<8;n++)t=t&1?3988292384^t>>>1:t>>>1;js[e]=t>>>0}function hr(e){let t=4294967295;for(let n=0;n<e.length;n++)t=js[(t^e[n])&255]^t>>>8;return((t^4294967295)>>>0).toString(16).padStart(8,"0")}function ul(e){let t=e>>>0;return()=>{t=t+2654435769>>>0;let n=t;return n=Math.imul(n^n>>>16,569420461),n=Math.imul(n^n>>>15,1935289751),((n^n>>>15)>>>0)/4294967296}}function qs(e){let r=Math.max(1,.03*Math.log(e/.05)*Math.sqrt(e)),o=Math.max(1,Math.round(e/r)),a=new Float64Array(e+1);a[1]=1/e;for(let c=2;c<=e;c++)a[c]=1/(c*(c-1));for(let c=1;c<o;c++)a[c]+=r/(c*e);o<=e&&(a[o]+=r*Math.log(r/.05)/e);let s=0;for(let c=1;c<=e;c++)s+=a[c];let i=0;for(let c=1;c<=e;c++)i+=a[c]/s,a[c]=i;return a[e]=1,a}function Us(e,t,n){if(e<t)return[e];let r=ul(e),o=r(),a=1;for(;a<t&&n[a]<o;)a++;let s=new Set,i=a*8+16;for(;s.size<a&&i-- >0;)s.add(Math.floor(r()*t));return[...s]}var Hs="gzip",$s=()=>typeof CompressionStream<"u"&&typeof DecompressionStream<"u";function Fs(e){return new ReadableStream({start(t){t.enqueue(e),t.close()}})}async function Ks(e,t){let n=e.getReader(),r=[],o=0;for(;;){let{done:i,value:c}=await n.read();if(i)break;if(o+=c.length,o>t)throw await n.cancel(),new Error("The sender's file expands to more than it declared, so it was refused");r.push(c)}let a=new Uint8Array(o),s=0;for(let i of r)a.set(i,s),s+=i.length;return a}async function pl(e,t){return Ks(Fs(e).pipeThrough(new CompressionStream(t)),Number.MAX_SAFE_INTEGER)}async function ml(e,t,n){return Ks(Fs(e).pipeThrough(new DecompressionStream(t)),n)}async function Ws(e){return[...new Uint8Array(await crypto.subtle.digest("SHA-256",e))].map(n=>n.toString(16).padStart(2,"0")).join("")}function gl(e,t){let n=new TextEncoder().encode(JSON.stringify(t));return`${ot}|M|${e}|${Re(n)}|${hr(n)}`}function bl(e,t,n){let r=(t>>>0).toString(16).padStart(8,"0");return`${ot}|D|${e}|${r}|${Re(n)}|${hr(n)}`}function wl(e){let t=e.split("|");if(t[0]!==ot)throw new Error("Not a beam frame");let n=t[1],r=t[2];if(!/^[0-9a-f]{16}$/.test(r??""))throw new Error("Invalid beam session id");let o=0,a,s;if(n==="M"&&t.length===5)a=t[3],s=t[4];else if(n==="D"&&t.length===6){if(!/^[0-9a-f]{8}$/.test(t[3]))throw new Error("Invalid beam frame seed");o=parseInt(t[3],16),a=t[4],s=t[5]}else throw new Error("Malformed beam frame");if(!/^[A-Za-z0-9_-]*$/.test(a))throw new Error("Malformed beam payload");let i=ct(a);if(!/^[0-9a-f]{8}$/.test(s))throw new Error("Invalid beam checksum");if(hr(i)!==s)throw new Error("Beam frame failed its checksum");return{kind:n,sessionId:r,seed:o,payload:i}}async function Ys({source:e,blockSize:t=dl,sessionId:n}){let r=await e.slice(0,e.size),o=r,a="identity";if($s()&&r.length>0){let d=await pl(r,Hs);d.length<r.length*.95&&(o=d,a=Hs)}if(o.length>on)throw new Error(`Too large to beam: ${o.length} bytes after compression, and the limit is ${on}. Use the network transfer instead.`);let s=Math.max(1,Math.ceil(o.length/t)),i=qs(s),c=n??yl();if(!/^[0-9a-f]{16}$/.test(c))throw new Error("sessionId must be 16 lowercase hex characters");let h={protocol:ot,name:e.name,size:r.length,encodedSize:o.length,encoding:a,mime:e.mime,blockSize:t,blocks:s,sha256:await Ws(r)},f=gl(c,h),l=d=>{let u=new Uint8Array(t);return u.set(o.subarray(d*t,Math.min((d+1)*t,o.length))),u};return{manifest:h,frameCount:s,cycleLength:s+Math.ceil(s/At),frameAt(d){if(!Number.isSafeInteger(d)||d<0)throw new Error("Frame position must be a non-negative integer");let u=d%(At+1);if(u===0)return f;let b=Math.floor(d/(At+1))*At+u-1,_=Us(b,s,i),v=l(_[0]);for(let B=1;B<_.length;B++){let P=l(_[B]);for(let O=0;O<t;O++)v[O]^=P[O]}return bl(c,b,v)}}}function yl(){return[...crypto.getRandomValues(new Uint8Array(8))].map(t=>t.toString(16).padStart(2,"0")).join("")}function Gs(){let e=null,t=null,n=null,r=[],o=0,a=[],s=[],i=At*4,c=new Set,h=(l,d)=>{if(r[l])return;r[l]=d,o++;let u=[l];for(;u.length;){let b=u.pop(),_=r[b];for(let v=a.length-1;v>=0;v--){let B=a[v];if(!B.indices.has(b))continue;for(let O=0;O<_.length;O++)B.payload[O]^=_[O];if(B.indices.delete(b),B.indices.size>1||(a.splice(v,1),B.indices.size===0))continue;let P=B.indices.values().next().value;r[P]||(r[P]=B.payload,o++,u.push(P))}}},f=(l,d)=>{if(c.has(l))return;c.add(l);let u=new Set(Us(l,e.blocks,n));for(let b of[...u]){let _=r[b];if(_){for(let v=0;v<d.length;v++)d[v]^=_[v];u.delete(b)}}u.size!==0&&(u.size===1?h(u.values().next().value,d):a.push({indices:u,payload:d}))};return{offer(l){let d;try{d=wl(l)}catch{return!1}if(t===null)t=d.sessionId;else if(t!==d.sessionId)return!1;if(d.kind==="M"){if(e)return!0;let u=vl(d.payload);e=u,n=qs(u.blocks),r=new Array(u.blocks).fill(null);for(let b of s.splice(0))f(b.seed,b.payload);return!0}return e?(f(d.seed,d.payload),!0):(s.length<i&&s.push({seed:d.seed,payload:d.payload}),!0)},get manifest(){return e},get solved(){return o},get blocks(){return e?.blocks??0},get complete(){return e!==null&&o===e.blocks},async assemble(){let l=e;if(!l||o!==l.blocks)throw new Error("The transfer is not complete yet");let d=new Uint8Array(l.blocks*l.blockSize);for(let _=0;_<l.blocks;_++)d.set(r[_],_*l.blockSize);let u=d.subarray(0,l.encodedSize),b=l.encoding==="gzip"?await ml(u,"gzip",l.size):new Uint8Array(u);if(b.length!==l.size)throw new Error("The received file is not the size it declared");if(await Ws(b)!==l.sha256)throw new Error("The received file failed its checksum, so it was discarded");return b}}}function vl(e){let t;try{t=JSON.parse(new TextDecoder().decode(e))}catch{throw new Error("The beam manifest was not readable")}if(!t||typeof t!="object")throw new Error("The beam manifest was not readable");if(t.protocol!==ot)throw new Error(`Unsupported beam protocol: ${t.protocol}`);let n=t.blocks,r=t.blockSize,o=t.size,a=t.encodedSize,s=i=>Number.isSafeInteger(i)&&i>0;if(!s(n)||!s(r))throw new Error("The beam manifest is malformed");if(!Number.isSafeInteger(o)||o<0)throw new Error("The beam manifest is malformed");if(!Number.isSafeInteger(a)||a<0)throw new Error("The beam manifest is malformed");if(o>fl)throw new Error("The sender declared a file too large to receive");if(a>on)throw new Error("The sender declared a file too large to receive");if(n*r>on+r)throw new Error("The beam manifest is malformed");if(t.encoding!=="gzip"&&t.encoding!=="identity")throw new Error(`Unsupported beam encoding: ${t.encoding}`);if(t.encoding==="gzip"&&!$s())throw new Error("This browser cannot decompress the incoming file. Try Chrome, Firefox or Safari.");if(typeof t.sha256!="string"||!/^[0-9a-f]{64}$/.test(t.sha256))throw new Error("The beam manifest is malformed");return{protocol:ot,name:typeof t.name=="string"?t.name:"",size:o,encodedSize:a,encoding:t.encoding,mime:typeof t.mime=="string"?t.mime:"application/octet-stream",blockSize:r,blocks:n,sha256:t.sha256}}var De=10,Qs=[5,10,15,20];async function Vs({source:e,fps:t=De,onTick:n}){let r=await Ys({source:e}),o=document.createElement("canvas");o.id="beam-canvas",o.className="beam-canvas",o.setAttribute("aria-hidden","true");let a=0,s=1e3/t,i=0,c=0,h=!1,f=l=>{h||(c=requestAnimationFrame(f),!(l-i<s)&&(i=l,Br(r.frameAt(a),o),a++,n?.({position:a,loops:Math.floor(a/r.cycleLength)})))};return c=requestAnimationFrame(f),{canvas:o,manifest:r.manifest,frameCount:r.frameCount,cycleLength:r.cycleLength,setFps(l){s=1e3/l,i=0},stop(){h=!0,cancelAnimationFrame(c)}}}function Js({video:e,onManifest:t,onProgress:n,onComplete:r,onError:o}){let a=Gs(),s=new AbortController,i=!1,c=!1;return mn({video:e,signal:s.signal,onCode:h=>{if(c)return;let f=!1;try{f=a.offer(h)}catch(d){c=!0,s.abort(),o(d);return}if(!f)return;let l=a.manifest;l&&!i&&(i=!0,t(l)),l&&(n({solved:a.solved,blocks:a.blocks}),a.complete&&(c=!0,s.abort(),r(()=>a.assemble())))}}).catch(h=>{c||o(h)}),{stop(){c=!0,s.abort()}}}var kl="http://www.w3.org/2000/svg";function y(e,t={},n=[]){return{tag:e,key:t.key,props:t,children:Xs(n)}}function Xs(e){Array.isArray(e)||(e=[e]);let t=[];for(let n of e)n==null||n===!1||n===!0||(Array.isArray(n)?t.push(...Xs(n)):typeof n=="object"?t.push(n):t.push(String(n)));return t}function dr(e,t,n){return Zs(e,t,n??[]),t}function xl(e,t,n){return typeof t=="string"?e.nodeType===Node.TEXT_NODE:e.nodeType!==Node.ELEMENT_NODE||e.localName!==t.tag?!1:(typeof n=="object"?n?.key:void 0)===t.key}function Zs(e,t,n){let r=[...e.childNodes];for(let o=0;o<t.length;o++){let a=t[o],s=r[o];if(s&&xl(s,a,n[o])){Sl(s,a,n[o]);continue}let i=ta(a);s?e.replaceChild(i,s):e.appendChild(i)}for(let o=r.length-1;o>=t.length;o--)e.removeChild(r[o])}function Sl(e,t,n){if(typeof t=="string"){e.nodeValue!==t&&(e.nodeValue=t);return}let r=e,o=typeof n=="object"&&n?n.props:{};if(na(r,t.props,o),t.props.adopt)return ea(r,t.props.adopt);Zs(r,t.children,typeof n=="object"&&n?n.children:[])}function ea(e,t){e.firstChild===t&&e.childNodes.length===1||e.replaceChildren(t)}function ta(e){if(typeof e=="string")return document.createTextNode(e);let t=Tl.has(e.tag)?document.createElementNS(kl,e.tag):document.createElement(e.tag);if(e.props.adopt)ea(t,e.props.adopt);else for(let n of e.children)t.appendChild(ta(n));return na(t,e.props,{}),t}var Tl=new Set(["svg","path","circle","rect","line","polyline","g"]),_l=new Set(["disabled","hidden","checked","muted"]);function na(e,t,n){for(let r of new Set([...Object.keys(n),...Object.keys(t)])){if(r==="key"||r==="children"||r==="adopt")continue;let o=t[r],a=n[r];if(o!==a){if(r.startsWith("on")){e[r.toLowerCase()]=typeof o=="function"?o:null;continue}if(r==="style"){El(e,o??{},a??{});continue}if(_l.has(r)){e[r]=!!o;continue}if(r==="value"){let s=e,i=o==null?"":String(o);s.value!==i&&(s.value=i);continue}o==null||o===!1?e.removeAttribute(r):e.setAttribute(r,o===!0?"":String(o))}}}function El(e,t,n){for(let r of Object.keys(n))r in t||e.style.removeProperty(r);for(let[r,o]of Object.entries(t))n[r]!==o&&e.style.setProperty(r,o)}var Al=["choose","send","receive","verify","transfer","done","beam-send","beam-receive"],Pl={send:0,receive:0,verify:1,transfer:2,done:2},Rl=["Connect","Verify","Transfer"],sa=new Set(["sent","received"]),aa={choose:Bl,send:Ol,receive:Dl,verify:Il,transfer:Nl,done:jl,"beam-send":$l,"beam-receive":Fl};function pr(e){if(!e.path||e.mode==="beam")return null;let{label:t,detail:n}=rn(e.path),r=e.file??e.offer,o=r?zs({name:r.name,size:r.size,path:e.path}):null;return y("div",{class:"path-info","aria-live":"polite"},[y("p",{class:`path-badge ${e.path}`},t),y("p",{class:"note"},n),o?y("p",{class:"callout warn"},o):null,e.pathDebug?y("pre",{class:"path-debug"},e.pathDebug):null])}function ia(e,t){return e.copied===t?"Copied":e.copied===`${t}-failed`?"Couldn\u2019t copy":"Copy"}var ca={position:"absolute",width:"1px",height:"1px",overflow:"hidden",clip:"rect(0,0,0,0)","white-space":"nowrap"};function la(e,t){return[...Al.map(n=>Ml(n,e,t)),y("div",{class:"dialog-host",key:"dialog-host",adopt:e.dialogNode}),e.toast?y("div",{class:"toast",role:"status",key:"toast"},e.toast):null].filter(Boolean)}function ha(e,t){if(e.modal==="info"){let n=aa[e.screen](e,t).info;return n?[y("h2",{class:"sheet-title",tabindex:"-1",autofocus:!0},n.title),y("div",{class:"sheet-body"},n.content),y("div",{class:"sheet-actions"},[y("button",{class:"btn",type:"button",onclick:()=>t("modal:close")},"Close")])]:[]}return e.modal==="beam-offer"&&e.offer?[y("h2",{class:"sheet-title",tabindex:"-1",autofocus:!0},"Before you accept"),y("div",{class:"sheet-body"},[y("p",{class:"filename"},`${e.offer.name} (${ne(e.offer.size)})`),y("p",{},"This saves a file straight away and fills it in at the end, so both screens have to stay as they are until it finishes. Stopping early leaves an empty file you can delete."),y("p",{},fa)]),y("div",{class:"sheet-actions"},[y("button",{class:"btn primary",type:"button",disabled:e.busy,onclick:()=>t("offer:accept")},"Accept"),y("button",{class:"btn ghost",type:"button",disabled:e.busy,onclick:()=>t("offer:decline")},"Decline")])]:e.modal==="error"&&e.error?[y("h2",{class:"sheet-title",tabindex:"-1",autofocus:!0},"Something went wrong"),y("div",{class:"sheet-body"},[y("p",{role:"alert"},ur(e.error)),ur(e.error)===e.error?null:y("details",{class:"error-detail"},[y("summary",{},"Details"),y("p",{},e.error)])]),y("div",{class:"sheet-actions"},[y("button",{class:"btn",type:"button",onclick:()=>t("modal:close")},"Close")])]:[]}function Cl(e){let n=e.screen==="beam-send"||e.screen==="beam-receive"||e.screen==="choose",r=e.screen==="done"&&sa.has(e.outcome??""),o=Pl[e.screen];return y("ol",{class:"rail",key:"rail",hidden:n,"aria-label":"Progress"},Rl.map((a,s)=>{let i=r||s<o?"is-done":s===o?"is-active":"";return y("li",{class:`rail-seg ${i}`.trim(),key:a,"aria-current":i==="is-active"?"step":void 0},[y("span",{style:ca},a)])}))}function Ml(e,t,n){let{media:r,body:o,actions:a,controls:s,info:i}=aa[e](t,n),c=i?[...a,y("button",{class:"btn ghost",type:"button",onclick:()=>n("modal:open","info")},i.label??"Details")]:a;return y("section",{id:`screen-${e}`,class:"card",hidden:t.screen!==e},[Cl(t),y("div",{class:`card-body${r?" has-media":""}`},[r?y("div",{class:"card-media"},r):null,y("div",{class:"card-copy"},o)].filter(Boolean)),y("div",{class:"card-controls"},s??[]),y("div",{class:"card-actions"},c)])}function fr(e){return e.coarse&&e.cameraAvailable}function ra(e,t){let n=fr(e),r=!e.rtcAvailable;return y("button",{type:"button",id:n?r?"btn-beam-receive":"btn-receive":void 0,class:`dropzone${n?" scan-panel":""}${e.dragging?" is-dragging":""}`,onclick:()=>t(n?r?"beam:scan":"receive:scan":"send:pick")},[y("p",{},n?"Tap to scan a code.":"Drop a file here, or click to choose one.")])}function Bl(e,t){return e.rtcAvailable?{media:ra(e,t),body:[y("h2",{tabindex:"-1"},"Send or receive a file"),e.capabilityNote?y("p",{class:"note"},e.capabilityNote):null],actions:[y("button",{id:"btn-send",class:"btn primary",onclick:()=>t("send:pick")},"Send a file"),e.coarse?y("button",{id:"btn-photo",class:"btn ghost",onclick:()=>t("send:photo")},"Take a photo"):null,fr(e)?null:y("button",{id:"btn-receive",class:"btn",onclick:()=>t("receive:scan")},"Receive a file")].filter(Boolean),info:{label:"No network?",title:"No network?",content:[y("p",{class:"note"},"No network needed: the file plays as an animated QR code and is read back by a camera, at about 6 kB/s. Not encrypted, and capped at 1 MiB compressed \u2014 text and code, rarely photos."),y("div",{class:"choices secondary"},[y("button",{id:"btn-beam",class:"btn ghost",onclick:()=>t("beam:pick")},"Show it as a QR code"),y("button",{id:"btn-beam-receive",class:"btn ghost",onclick:()=>t("beam:scan")},"Scan a beamed file")])]}}:{media:ra(e,t),body:[y("h2",{tabindex:"-1"},"Send or receive a file"),y("p",{class:"note"},"This platform has no WebRTC, so network transfer is not available here. Beam sends a file as an animated QR code instead \u2014 no network, no encryption.")],actions:[y("button",{id:"btn-beam",class:"btn primary",onclick:()=>t("beam:pick")},"Show it as a QR code"),fr(e)?null:y("button",{id:"btn-beam-receive",class:"btn",onclick:()=>t("beam:scan")},"Scan a beamed file")].filter(Boolean)}}function Ol(e,t){return{media:y("div",{id:"qr",class:"qr",key:"qr",adopt:e.qrNode}),body:[y("h2",{tabindex:"-1"},"Scan this on the other device"),y("p",{class:"note"},e.qrIsLink?"Any camera app will do \u2014 this code is a link that opens qrdrop, ready to receive.":"On the other device, open qrdrop, tap \u201CReceive a file\u201D, and point it at this code."),y("div",{class:"stack"},[y("div",{class:"code-row"},[y("code",{id:"manual-code",class:"code"},e.code),y("button",{class:"btn small",type:"button",onclick:()=>t("copy","code"),"aria-label":"Copy the transfer code"},ia(e,"code"))]),y("p",{class:"note"},"Anyone who learns it can join.")]),y("div",{class:"stack"},[e.pairing?y("div",{class:"bar indeterminate",role:"progressbar","aria-label":"Connecting","aria-valuetext":e.status},[y("div",{class:"bar-fill"})]):null,y("p",{class:"status","aria-live":"polite"},e.status)])],actions:[y("button",{class:"btn ghost",type:"button",onclick:()=>t("cancel")},"Cancel")],info:{title:"About this code",content:[y("p",{class:"note"},"Read it out if scanning fails."),y("p",{class:"note"},"Treat it like a password.")]}}}function Dl(e,t){return{media:e.cameraAvailable?y("div",{class:"scanner-frame"},[y("video",{id:"scanner",key:"scanner",class:"scanner",muted:!0,playsinline:""}),y("div",{class:"viewfinder"},[y("span",{},[])])]):y("div",{class:"scanner-frame is-empty"},[y("p",{class:"note"},mr)]),body:[y("h2",{tabindex:"-1"},"Scan the sender's code"),y("div",{class:"manual"},[y("label",{class:"manual-label",for:"manual-input"},"Enter the code by hand"),y("form",{id:"manual-form",onsubmit:n=>{n.preventDefault();let r=n.currentTarget.elements.namedItem("manual-input");t("manual:submit",r.value)}},[y("input",{id:"manual-input",key:"manual-input",type:"text",placeholder:"qrdrop:\u2026 or a link",autocomplete:"off",spellcheck:"false","aria-invalid":e.manualError?"true":void 0,"aria-describedby":e.manualError?"manual-error":void 0}),y("button",{class:"btn",type:"submit"},"Join")]),e.manualError?y("p",{id:"manual-error",class:"callout danger",role:"alert"},e.manualError):null]),y("p",{class:"status","aria-live":"polite"},e.status)],actions:[y("button",{class:"btn ghost",type:"button",onclick:()=>t("cancel")},"Cancel")]}}function Il(e,t){let n=e.sas?e.sas.split(" "):[];return{media:y("div",{class:"sas-grid",role:"group","aria-label":`Verification code: ${e.sasWords.join(", ")}`},e.sasWords.map((r,o)=>y("div",{class:"sas-tile",key:r},[y("span",{class:"sas-emoji","aria-hidden":"true"},n[o]??""),y("span",{class:"sas-word"},r)]))),body:[y("h2",{tabindex:"-1"},"Check both devices show the same symbols"),y("span",{id:"sas",style:ca,"aria-hidden":"true"},e.sas),y("p",{class:"note"},"If these differ, someone is between you. Stop, and start over with a fresh code."),y("div",{class:"stack"},[e.offer?y("p",{class:"filename"},`${e.offer.name} (${ne(e.offer.size)})`):null,pr(e)])],actions:[y("div",{id:"verify-status",class:"verify-actions","aria-live":"polite"},Ll(e,t)),y("button",{class:"btn ghost",type:"button",onclick:()=>t("cancel")},"Cancel")]}}function Ll(e,t){return e.role==="sender"?[y("button",{class:"btn primary",type:"button",onclick:()=>t("verify:confirm")},`They match \u2014 send ${e.file?.name??"the file"}`),y("button",{class:"btn danger",type:"button",onclick:()=>t("verify:reject")},"They don't match")]:e.offer?[y("button",{class:"btn primary",type:"button",disabled:e.busy,onclick:()=>t("offer:accept")},"Accept"),y("button",{class:"btn ghost",type:"button",disabled:e.busy,onclick:()=>t("offer:decline")},"Decline")]:[y("div",{class:"bar indeterminate",role:"progressbar","aria-label":"Waiting for an offer"},[y("div",{class:"bar-fill"})]),y("p",{class:"status"},"Waiting for the sender to offer a file\u2026")]}function Nl(e,t){let n=e.progress?.moved??0,r=e.progress?.total??0,o=r>0?Math.min(100,n/r*100):0;return{media:y("div",{class:"transfer-meter"},[y("p",{class:"transfer-pct","aria-hidden":"true"},`${Math.floor(o)}%`),y("div",{class:"bar",role:"progressbar","aria-valuemin":"0","aria-valuemax":String(r),"aria-valuenow":String(n)},[y("div",{class:"bar-fill",style:{"--progress":`${o}%`}})])]),body:[y("h2",{tabindex:"-1"},e.role==="receiver"?"Receiving":"Sending"),y("div",{class:"stack"},[e.file?y("p",{class:"filename"},`${e.file.name} (${ne(e.file.size)})`):null,pr(e)]),y("p",{class:"status","aria-live":"polite"},e.status)],actions:[y("button",{class:"btn ghost",type:"button",onclick:()=>t("cancel")},"Cancel")]}}var oa={sent:{variant:"ok",glyph:"\u2713",title:"File sent"},received:{variant:"ok",glyph:"\u2713",title:"File received"},declined:{variant:"warn",glyph:"\u26A0",title:"File declined"},"too-large":{variant:"warn",glyph:"\u26A0",title:"Too large for this connection"},failed:{variant:"bad",glyph:"\u2715",title:"Transfer failed"},mismatch:{variant:"bad",glyph:"\u2715",title:"The symbols didn't match"}};function zl(e){if(e.message)return e.message;switch(e.outcome){case"sent":return"Your file was delivered.";case"received":return"The file was saved to your device.";case"declined":return"The other device turned down the file.";case"failed":return"Nothing was saved. Start over with a fresh code.";case"mismatch":return"Different symbols on each device means something is relaying between them. Nothing about your file left this device \u2014 not its name, not its size. Start over, and use a fresh code.";default:return""}}function Hl(e){return e.outcome==="mismatch"?"Start over with a fresh code":e.role==="receiver"?"Receive another file":e.role==="sender"?"Send another file":"Start over"}function jl(e,t){let n=e.outcome&&oa[e.outcome]||oa.failed;return{media:y("div",{class:`outcome ${n.variant}`},[y("span",{class:"glyph","aria-hidden":"true"},n.glyph),y("p",{},zl(e))]),body:[y("h2",{tabindex:"-1"},n.title),y("div",{class:"stack"},[e.file&&sa.has(e.outcome??"")?y("p",{class:"filename"},e.file.name):null,pr(e)]),e.digest?y("details",{},[y("summary",{},"Verification digest"),y("div",{class:"code-row"},[y("code",{id:"done-digest",class:"code"},e.digest),y("button",{class:"btn small",type:"button",onclick:()=>t("copy","digest"),"aria-label":"Copy the verification digest"},ia(e,"digest"))]),y("p",{class:"note"},"Both devices computed this independently from the file contents.")]):null],actions:[y("button",{class:"btn primary",type:"button",onclick:()=>t("restart")},Hl(e))]}}function ur(e){let t=/^Peer (?:refused|could not complete) the transfer: /;return t.test(e)?ur(e.replace(t,"")):/^Out-of-order frame/.test(e)||e==="Unexpected frame type"||e==="Frame from unexpected file"||e==="Chunk arrived with no accepted file"||e==="Unexpected completion"||e==="Peer offered a file while one was already in flight"?"The two devices lost track of each other mid-transfer, so nothing was saved. Start again with a fresh code.":e==="Digest mismatch"||e==="Size mismatch"||e==="Chunk count mismatch"||e==="Peer sent more data than the manifest declared"||e==="End-of-file flag arrived at the wrong chunk"?"What arrived does not match what the other device said it was sending, so it was thrown away rather than saved.":e==="Frame too short"||e==="Frame exceeds maximum size"||e==="Runt frame"?"The other device sent something this one could not read, so the transfer stopped.":e}var mr="No camera available \u2014 enter the code by hand.",ql="This device has no usable camera, so it cannot receive a beamed file.",da="This is not encrypted, and cannot be \u2014 there is no handshake, so nothing here to verify. Anyone who can see this screen while it plays can read the file.",Ul="Keep this code on screen until the other device says it is done. Nothing comes back here.",fa="Keep the camera on the other screen, and leave that screen playing, until this one says it is done.";function $l(e,t){let n=e.beam?.fps??De,r=e.beam?.loops??0,o=e.beam?.eta??0;return{media:y("div",{id:"beam-stage",class:"beam-stage",key:"beam-stage",adopt:e.beamNode}),body:[y("h2",{tabindex:"-1"},"Show this to the other device"),y("p",{class:"callout danger",role:"note"},da),e.file?y("p",{class:"filename"},`${e.file.name} (${ne(e.file.size)})`):null,y("p",{class:"callout warn"},Ul)],controls:[y("div",{class:"beam-controls"},[y("label",{for:"beam-fps"},"Speed"),y("select",{id:"beam-fps",value:String(n),onchange:a=>t("beam:fps",Number(a.target.value))},Qs.map(a=>y("option",{key:String(a),value:String(a)},`${a} fps`)))]),y("p",{class:"status","aria-live":"polite"},`Shown in full ${r} time${r===1?"":"s"}, ${cr(o)} per pass.`)],actions:[y("button",{class:"btn ghost",type:"button",onclick:()=>t("cancel")},"Cancel")],info:{title:"About beaming",content:[y("p",{class:"note"},"Several passes are normal.")]}}}function Fl(e,t){let n=e.beam?.solved??0,r=e.beam?.blocks??0,o=r>0?Math.min(100,n/r*100):0;return{media:e.cameraAvailable?y("div",{class:"scanner-frame"},[y("video",{id:"beam-scanner",key:"beam-scanner",class:"scanner",muted:!0,playsinline:""}),y("div",{class:"viewfinder"},[y("span",{},[])])]):y("div",{class:"scanner-frame is-empty"},[y("p",{class:"note"},ql)]),body:[y("h2",{tabindex:"-1"},"Point the camera at the other screen"),y("p",{class:"callout danger",role:"note"},da),e.offer?y("p",{class:"filename"},`${e.offer.name} (${ne(e.offer.size)})`):null,!e.offer&&e.beam&&e.beam.blocks>0?y("p",{class:"callout warn"},fa):null,e.offer?null:y("p",{class:"status","aria-live":"polite"},e.status),y("div",{class:"stack"},[e.beam?y("div",{id:"beam-progress",class:"bar",role:"progressbar","aria-valuemin":"0","aria-valuemax":String(r),"aria-valuenow":String(n)},[y("div",{class:"bar-fill",style:{"--progress":`${o}%`}})]):null,e.beam&&r>0?y("p",{class:"status","aria-live":"polite"},`${Math.floor(o)}% \u2014 ${n} of ${r} pieces`+(e.beam.eta?`, ${cr(e.beam.eta)} left`:"")):null])],actions:e.offer?[y("button",{class:"btn primary",type:"button",disabled:e.busy,onclick:()=>t("modal:open","beam-offer")},"Review file")]:[y("button",{class:"btn ghost",type:"button",onclick:()=>t("cancel")},"Cancel")]}}async function ua(e){if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText(e),!0}catch{}let t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.top="0",t.style.left="-9999px",document.body.appendChild(t),t.focus(),t.select();let n=!1;try{n=document.execCommand("copy")}catch{n=!1}return t.remove(),n}var pa="(min-width: 48rem) and (max-height: 62rem)",gr="(max-height: 46rem)",ma="(min-width: 48rem) and (max-height: 30rem)",Kl="#f7f6f3";function ga(e){return`
${e} {
  /*
   * WITHOUT THIS THE DARK PALETTE AT THE FOOT OF THIS FILE NEVER RUNS ON
   * ANDROID, and that was as true of the deployed site as of the app.
   *
   * A page that never declares color-scheme is treated as light-only.
   * Android WebView, and Chrome with force-dark on, respond by
   * ALGORITHMICALLY DARKENING it -- a post-render pixel transform that
   * inverts the light theme and is invisible to CSS and JS, which go on
   * reporting prefers-color-scheme: light. So the careful dark values below
   * sat unused while a machine-generated approximation shipped in their
   * place, and nothing measurable said so: on a device in night mode the
   * computed styles read light, the screenshot came back dark, and the two
   * disagreed only because one of them was a photograph.
   *
   * Declaring both schemes says the page handles this itself. The browser
   * stops transforming, prefers-color-scheme starts telling the truth, and
   * the block at the end of this file is what paints.
   *
   * It belongs here rather than only in the site stylesheet because the
   * component ships standalone and has to take its own scheme with it -- and
   * because this also decides how the UA draws form controls and scrollbars.
   */
  color-scheme: light dark;

  /* ---- space: 4/8/12/16/24/32/48px, as rem ---- */
  --sp-1: 0.25rem;
  --sp-2: 0.5rem;
  --sp-3: 0.75rem;
  --sp-4: 1rem;
  --sp-5: 1.5rem;
  --sp-6: 2rem;
  --sp-7: 3rem;

  /* ---- radius ---- */
  --r-sm: 0.5rem;
  --r-md: 0.75rem;
  --r-lg: 1rem;
  --r-full: 999px;

  /* ---- layout ----
   *
   * --col is the reading column, matching the cap site/styles.css puts on
   * main. It moved here when the site began sharing the viewport grid with the
   * component: two files claiming a different idea of "the column" is the same
   * drift this whole file exists to prevent.
   *
   * --bar-h and --head-h used to sit here, described as "the two rows that
   * bracket the scrollable middle". They named a layout that no longer exists:
   * the action bar sizes to its buttons and the page chrome to its content,
   * and neither stylesheet ever read either token. A token nothing consumes is
   * worse than no token, because the next reader sizes something to it and
   * changes nothing.
   *
   * --tap is the one that replaced them, and it IS consumed: the floor for
   * anything a finger has to hit. 44px is the figure both platform guidelines
   * land on. .btn already computes to ~50px without help; every other control
   * in the component (the Copy chip, the fps select, the manual-code input)
   * was between 28px and 36px, which is a miss on a phone and was never
   * measured because check-layout.mjs asks whether a button is ON the screen,
   * not whether it can be hit.
   */
  --col: 34rem;
  --tap: 2.75rem;

  /* ---- stacking ----
   *
   * A named ladder rather than integers scattered across rules. There was no
   * z-index anywhere in this codebase before the dialog layer, which is the
   * best possible moment to decide the order once: anything competing for the
   * same plane is a bug in one of these two values, not a reason to type 9999.
   *
   * The dialog itself needs no token -- showModal() promotes it to the
   * browser's top layer, which sits above every z-index on the page by
   * definition. --z-dialog is here for the non-modal fallback path only.
   */
  --z-bar: 10;
  --z-dialog: 20;
  --z-toast: 30;

  /* ---- type ---- */
  --font-sans: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  --fs--1: 0.8125rem;
  --fs-0: 1rem;
  --fs-1: 1.125rem;
  --fs-2: 1.375rem;
  --fs-3: 1.875rem;
  --lh-tight: 1.25;
  --lh-body: 1.55;

  /* ---- colour: light (default) ----
   *
   * --text on --surface is 17.4:1 and on --bg is 16.1:1 -- both nowhere near
   * the 4.5:1 floor, which leaves headroom to keep --text a near-black rather
   * than a pure one.
   *
   * --muted is the one built to a budget rather than to taste: #5f5d57 is the
   * darkest warm gray that still reads as "muted" against #6b6b66 (the old
   * value, which was never checked) while clearing 4.5:1 on both --surface
   * (6.58:1) and --bg (6.09:1). A lighter muted would drift under the floor
   * on --bg specifically, since --bg is the darker of the two.
   *
   * --accent is deepened from the old #b8563a to #a8462d specifically so
   * white text on it (--accent-text, used on .btn.primary) clears 4.5:1
   * (measured 5.87:1) -- the old value sat closer to 4:1 and failed for small
   * button labels. The same #a8462d against --surface is 5.87:1, past the
   * 3:1 floor for the large-text/UI-border uses (the step rail's active
   * segment, the SAS "these differ" note's accent underline).
   */
  --bg: ${Kl};
  --surface: #ffffff;
  --surface-raised: #f1efe9;
  /* The other direction from --surface-raised, and the axis this palette was
   * missing. The card, the code block, the text input and the sheet were all
   * --surface inside a 1px --line, so nothing led and nothing receded -- four
   * things at one weight, which is the flat, undifferentiated look that reads
   * as unfinished however carefully the spacing is set. Fields go below the
   * card they sit in; the card keeps --surface and its shadow. --muted holds
   * 6.0:1 here and --text 16.7:1, so nothing is bought at the cost of the
   * contrast budget the rest of this block is written to. */
  --surface-sunken: #f2f0ea;
  --text: #1a1a19;
  --muted: #5f5d57;
  --line: #e3e1db;
  --line-strong: #8f8d85;
  --accent-rgb: 168, 70, 45;
  --accent: rgb(var(--accent-rgb));
  --accent-hover: #8f3a24;
  --accent-text: #ffffff;
  --accent-soft: rgba(var(--accent-rgb), 0.12);
  --ok: #1f6e46;
  --ok-soft: rgba(31, 110, 70, 0.12);
  --bad: #a33328;
  --bad-soft: rgba(163, 51, 40, 0.12);
  --warn: #8a5a00;
  --warn-soft: rgba(138, 90, 0, 0.12);

  /* ---- camera and QR surfaces: deliberately NOT themed ----
   *
   * These three are the only colours here that must stay the same in light
   * and dark, so they sit outside the palette above and are never restated
   * in the dark block below. A QR is read by a camera, not by a person: a
   * scanner binarizes what it sees and needs dark modules on a light quiet
   * zone whatever the page around them is doing, and the viewfinder's
   * brackets have to stay legible over an arbitrary camera image. Wiring
   * any of them to --surface/--text would make dark mode quietly unreadable
   * to a scanner while looking perfectly fine to whoever changed it.
   *
   * They are tokens rather than the literals they replaced in styles.js for
   * the same reason as everything else in this file: --qr-quiet-zone alone
   * had two hand-kept copies (.qr and .beam-stage). */
  --qr-quiet-zone: #ffffff;
  --scan-bg: #000000;
  --scan-line: #ffffff;

  /* ---- elevation ---- */
  --shadow-1: 0 1px 2px rgba(20, 18, 14, 0.06), 0 1px 1px rgba(20, 18, 14, 0.04);
  --shadow-2: 0 8px 24px rgba(20, 18, 14, 0.10), 0 2px 6px rgba(20, 18, 14, 0.06);

  /* ---- motion ----
   *
   * The last axis that was still magic numbers scattered through styles.js.
   * Unlike colour and shadow, motion does not retheme -- a transition is the
   * same length on a dark background as on a light one -- so these are
   * declared once here and never restated in the dark block, which also
   * keeps that block honest about what actually changes with the theme.
   *
   * The reduced-motion query in styles.js overrides all of them at once with
   * transition-duration: 0s, so these are the "motion is wanted" values
   * only; do not try to encode the reduced case here. */
  --dur-fast: 0.05s;    /* .btn:active nudge -- must feel instant */
  --dur-base: 0.15s;    /* border and background on hover */
  --dur-slow: 0.2s;     /* the progress bar's fill, which is being watched */
  --dur-slower: 0.28s;  /* a screen's contents settling in; see screen-in */
  --dur-shimmer: 1.4s;  /* one pass of the indeterminate bar */

  /* Every animation here moves something INTO place and stops -- a screen
   * arriving, a rail segment filling, a toast rising. None of them move
   * something out. So the curve wants to be fast at the start and settle at
   * the end, which \`ease-out\` names but flattens too early to read as
   * deliberate; this is the same shape with a longer tail. Transitions that
   * run in both directions (hover, the button press) keep plain easing, since
   * an asymmetric curve on a reversible change feels wrong going back. */
  --ease-out: cubic-bezier(0.2, 0.7, 0.3, 1);

  /* ---- focus ---- */
  --focus-ring: 0 0 0 3px rgba(var(--accent-rgb), 0.35);
}

@media (prefers-color-scheme: dark) {
  ${e} {
    /*
     * Every pair below is re-measured against the dark surfaces, not just
     * colour-inverted -- a light-mode ratio says nothing about the same hex
     * pair on a dark background. --muted lightens to #b1b0aa (7.55:1 on
     * --surface, 8.30:1 on --bg); --accent lightens to #e08662 so
     * --accent-text (now dark, #17171a, matching the old scheme of a dark
     * label on a light-ish accent chip) still clears 4.5:1 (6.61:1 measured).
     */
    --bg: #16161a;
    --surface: #1f1f24;
    --surface-raised: #262630;
    /* Below --bg as well as below --surface. In light mode a sunken field can
     * sit between the page and the card; here the page is already the darkest
     * thing on screen, so an inset field has to go past it or it reads as
     * raised. --muted holds 8.7:1 on this. */
    --surface-sunken: #131317;
    --text: #ecebe8;
    --muted: #b1b0aa;
    --line: #33333a;
    --line-strong: #77747c;
    --accent-rgb: 224, 134, 98;
    --accent: rgb(var(--accent-rgb));
    --accent-hover: #e89a7c;
    --accent-text: #17171a;
    --accent-soft: rgba(var(--accent-rgb), 0.18);
    --ok: #7fc39b;
    --ok-soft: rgba(127, 195, 155, 0.16);
    --bad: #f0968a;
    --bad-soft: rgba(240, 150, 138, 0.16);
    --warn: #e3b34d;
    --warn-soft: rgba(227, 179, 77, 0.16);

    /*
     * Black shadows read as mud on a dark surface -- there is no darker tone
     * for them to imply depth against. Elevation here leans on --line-strong
     * borders (already applied by .card etc. in both themes) plus these
     * faint, mostly-flat shadows instead of the pronounced light-mode ones.
     */
    --shadow-1: 0 1px 0 rgba(0, 0, 0, 0.2);
    --shadow-2: 0 4px 16px rgba(0, 0, 0, 0.35);

    --focus-ring: 0 0 0 3px rgba(var(--accent-rgb), 0.45);
  }
}
`}function Wl(e="30rem"){return`
.sheet {
  max-inline-size: min(${e}, calc(100vw - var(--sp-6)));
  max-block-size: min(80dvh, calc(100dvh - var(--sp-6)));
  inline-size: 100%;
  margin: auto;
  padding: var(--sp-5);
  border: 1px solid var(--line);
  border-radius: var(--r-lg);
  background: var(--surface);
  color: var(--text);
  box-shadow: var(--shadow-1);
  overflow: hidden;
  flex-direction: column;
  gap: var(--sp-4);
  font: var(--fs-0)/var(--lh-body) var(--font-sans);
}

.sheet[open] { display: flex; }

.sheet::backdrop { background: rgb(0 0 0 / 0.45); }

/*
 * On a finger, a sheet comes up from the bottom.
 *
 * Not decoration. A centred dialog on a phone puts its buttons in the middle
 * of the screen, which is the part of a large phone a thumb reaches last --
 * and this component's sheets are where the beam Accept lives, so "hard to
 * reach" is the same failure the body/actions split exists to prevent, moved
 * into the one box that is exempt from the card's layout rules.
 *
 * margin-block-start: auto is what does it. The base rule sets margin: auto,
 * which centres on both axes; overriding only the block-start edge pushes it
 * down while leaving the inline centring alone, so this stays one declaration
 * rather than a repositioning that has to restate the horizontal case.
 *
 * The bottom corners go square because the sheet now meets the edge of the
 * screen, and a rounded corner against a screen edge reads as a rendering
 * fault rather than as a radius. env(safe-area-inset-bottom) keeps the last
 * control clear of the home indicator: a dialog is outside the flow that
 * site/styles.css's main padding covers, so it has to say this itself.
 *
 * pointer: coarse, not a width query, for the reason the block at the foot of
 * this file gives: a tablet is as wide as a laptop and still has a thumb.
 */
@media (pointer: coarse) {
  .sheet {
    max-inline-size: 100%;
    max-block-size: 85dvh;
    margin-block-start: auto;
    margin-block-end: 0;
    border-radius: var(--r-lg) var(--r-lg) 0 0;
    border-block-end: none;
    padding-block-end: calc(var(--sp-5) + env(safe-area-inset-bottom));
  }
}
`}function Yl(){return`
.btn.ghost {
  border-color: transparent;
  background: none;
  color: var(--muted);
}
.btn.ghost:hover { background: var(--surface-raised); color: var(--text); }
`}var br=`
/*
 * The component fills the box it is given, and does NOT claim the viewport.
 *
 * \`block-size: 100%\` rather than \`100dvh\`, which is the obvious thing to
 * write and is wrong here: on the deployed site <qr-drop> is one row of a page
 * grid that also holds a heading and a footer (site/index.html), so a
 * component sized to the whole viewport would overflow it by exactly the
 * height of that chrome -- which is the bug this layout exists to fix,
 * reintroduced one level up. The page owns the viewport; the component owns
 * its row. site/styles.css is where \`100dvh\` is allowed to appear.
 *
 * It also degrades correctly for the embedding case package.json's
 * \`exports["./web"]\` exists to serve: \`height: 100%\` inside a parent of
 * auto height resolves to auto, so a consumer who drops <qr-drop> into an
 * ordinary flowing page gets a component the height of its content, exactly
 * as before. Nothing about this requires the host page to cooperate.
 *
 * min-block-size: 0 because this is itself a grid item on that page, and a
 * grid item refuses to shrink below its content without it -- the single most
 * common reason a "fixed height" layout silently keeps growing.
 *
 * A flex column rather than a grid with named rows, which was tried first and
 * does not survive contact with render(): the shadow root's children are all
 * eight screens, the dialog host (\`display: contents\`, so it lays out
 * nothing) and the toast (absolutely positioned, so it lays out nothing
 * either), of which seven screens are \`hidden\`. The number of laid-out
 * children is therefore exactly one, but it was 1, 2 or 3 when the step rail
 * and the error banner were still root children, and a three-row template
 * silently put the card in the wrong row whenever the rail was absent. Flex
 * asks nothing about how many children there are, which is why it survived
 * both of those elements moving.
 */
:host {
  all: initial;
  display: flex;
  flex-direction: column;
  block-size: 100%;
  min-block-size: 0;
  font: var(--fs-0)/var(--lh-body) var(--font-sans);
  -webkit-font-smoothing: antialiased;
  color: var(--text);
}

${ga(":host")}

*, *::before, *::after { box-sizing: border-box; }

/* ---- step rail: Connect \xB7 Verify \xB7 Transfer ----
 *
 * Three segments of a hairline along the card's top edge, and it is a hairline
 * rather than the row of labelled pills it used to be for one reason above the
 * rest: it costs no height at all.
 *
 * The labelled version sat OUTSIDE .card, as a sibling, and was hidden on the
 * choose screen and on both beam screens. So it appeared and disappeared during
 * ordinary use, and every appearance moved the card and everything in it down
 * by ~50px -- most visibly on the way into beam, where the whole layout jumped
 * as the sheet closed. A conditional element in the block flow cannot not do
 * that. This one is absolutely positioned inside the card, so it contributes
 * zero height whether it is there or not, and the jump is gone by construction
 * rather than by remembering to reserve a placeholder.
 *
 * The second reason is that it never survived being short of room. Under
 * BREAKPOINT_SHORT the rail collapsed to three 8px dots via \`font-size: 0\`,
 * which the comment beside it described as "the sr-only clip technique
 * preserving them for assistive tech" -- it is not that, it has no clip and no
 * overflow, and text at zero size is read by nothing. So on the viewport where
 * it mattered most the rail was three identical grey dots to a sighted user and
 * absent to everyone else. The labels here are genuinely clipped (view.js
 * passes SR_ONLY_STYLE), so they read the same at every size, and there is one
 * appearance instead of two.
 *
 * The inline inset is --r-lg, the card's own corner radius, because that is
 * exactly the distance the rounded corner curves away from the top edge -- a
 * 3px bar run to inset-inline: 0 pokes out past the curve at both ends.
 * Naming the radius rather than a literal keeps the two tied if it changes.
 *
 * Not rendered at all on the beam screens -- see stepRail() in view.js for why
 * inventing a middle step for a mode that has no handshake would be the UI
 * telling the same lie core/beam.js refuses to tell about encryption. That it
 * can simply be absent, with no layout consequence, is what makes keeping that
 * position free.
 */
.rail {
  position: absolute;
  inset-block-start: 0;
  inset-inline: var(--r-lg);
  display: flex;
  gap: 2px;
  block-size: 3px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.rail-seg {
  flex: 1 1 0;
  border-radius: var(--r-full);
  background: var(--line);
  transition: background var(--dur-slower) var(--ease-out);
}

/* The third time this note has had to be written in this codebase, after
 * .card[hidden] and .sheet[open]: the rule above sets an author \`display\`, and
 * an author \`display\` beats the UA stylesheet's [hidden] { display: none } on
 * specificity. Without this the beam screens -- which render the rail hidden
 * rather than absent, so its siblings keep their positions and the adopted
 * canvas survives -- would show a full step rail for a mode that has no steps. */
.rail[hidden] { display: none; }

.rail-seg.is-active { background: var(--accent); }
.rail-seg.is-done { background: var(--ok); }

/*
 * The live screen. Exactly one .card is ever laid out -- screen() renders all
 * eight and marks seven \`hidden\` -- so this is the component's flexible row,
 * and it is split into a body that may give up space and an action bar that
 * may not.
 *
 * That split is the whole fix. A beam receiver used to render its heading,
 * warning, camera, filename and two paragraphs of notes above Accept, in one
 * flat column, and on a phone Accept landed 99px past the bottom of the
 * screen: the tester read a camera with nothing under it as a failed scan and
 * put the phone down. Buttons are no longer laid out after content -- they are
 * laid out in a row content cannot reach, so "below the fold" stops being a
 * state this component can express.
 */
.card {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-block-size: 0;
  /* The containing block for .rail above, which is positioned against this
   * card's top edge rather than against the component. Anchoring it to :host
   * would put it above the card on the screens where the card is not the
   * component's full height. */
  position: relative;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--r-lg);
  box-shadow: var(--shadow-1);
  padding: var(--sp-6);
  gap: var(--sp-4);
}

/*
 * The entrance runs on the card's CONTENTS, not on the card.
 *
 * It used to be \`.card:not([hidden]) { animation: screen-in }\` with a keyframe
 * that only moved opacity, and between those two facts it animated the one
 * thing on screen that had not changed. The card is the same size, in the same
 * place, with the same border, on every screen -- it is the frame. What
 * actually changes is what is inside it, so that is what should arrive: a
 * short rise, settling, on the media block and the copy column.
 *
 * The selector still keys off :not([hidden]), so this matches on a screen
 * change and not on the progress ticks that re-render the same visible screen
 * ten times a second during a beam.
 */
.card:not([hidden]) > .card-body > .card-media,
.card:not([hidden]) > .card-body > .card-copy {
  animation: screen-in var(--dur-slower) var(--ease-out);
}

/*
 * Restores what \`display: flex\` above just broke.
 *
 * screen() renders all eight screens and marks seven \`hidden\`, and \`hidden\`
 * hides them by exactly one mechanism: \`[hidden] { display: none }\` in the UA
 * stylesheet. Any author \`display\` on the same element wins on specificity, so
 * the moment .card gained one, all eight screens laid themselves out in a
 * column -- a 4300px page inside a component that had just been told to be
 * exactly one viewport tall.
 *
 * This is the same edit that has to be made for \`<dialog>\` in
 * site/styles.css, and for the same reason. Anywhere a rule sets \`display\` on
 * something the platform hides with \`display: none\`, the hiding has to be
 * said again.
 */
.card[hidden] { display: none; }

/* The card body: the media slot and the copy slot, stacked. */
.card-body {
  flex: 1 1 auto;
  min-block-size: 0;
  display: flex;
  flex-direction: column;
  gap: var(--sp-4);
}

/* The two halves of a card body. .card-media holds the screen's one visual
 * thing -- QR, camera, SAS tiles -- and .card-copy everything else. They stack
 * at most sizes and sit side by side on a wide, short window; see the media
 * query further down. The slot exists in the markup at every size so that the
 * switch is a change of direction and nothing else.
 *
 * The scroll lives on .card-copy rather than on .card-body, or the two columns
 * would scroll as one and take the camera with them. */
/* flex-shrink: 4, so the media gives up space roughly four times as readily as
 * the words beside it. Equal shrink is the default and is wrong here: the two
 * had similar natural heights, so both gave up the same amount, and since the
 * copy is the half that can scroll it was the half that ended up scrolling --
 * a camera holding its full size above a clipped sentence. The media has a
 * floor it cannot pass (a QR below ~7rem stops being scannable, a viewfinder
 * below 8rem stops being aimable), so letting it yield first costs nothing
 * until that floor and buys the copy every pixel up to it. */
/*
 * min-block-size is the fix for the vertical twin of the reflow the
 * \`media: null\` comment in view.js's transfer() already records fixing
 * horizontally.
 *
 * The slot sizes to its content, and its contents across one run of the flow
 * are: a 16rem QR, a 1:1 camera frame, the SAS tiles at ~7rem, transfer's
 * progress bar at EIGHT PIXELS, and the outcome banner at ~5rem. So the copy
 * column's top edge -- the heading, the first thing read on every screen --
 * jumped several hundred pixels between verify, transfer and done, which is a
 * third of the way down the card and back in the space of two clicks. Nothing
 * was broken and everything moved, which is most of what "clunky" describes.
 *
 * A floor plus centring means the short blocks sit in a box the tall ones
 * already needed, so the heading holds still.
 *
 * 7rem IS NOT A ROUND NUMBER, IT IS .qr's OWN min-block-size. The floor has to
 * be the largest one the media already had, never larger: at 9rem, which was
 * the first guess, this rule stopped being free and started being a demand --
 * the QR could no longer shrink to the 7rem below which a phone camera stops
 * locking on, so it held 32px it used to give up and the send screen's copy
 * scrolled by 30px on a 390x844 phone. Which is the original bug, reintroduced
 * by the fix for the reflow. check-layout.mjs caught it; that is what it is
 * for. At 7rem nothing that was already tall gives up anything, and only the
 * short blocks -- the transfer meter, the outcome banner -- are lifted.
 *
 * \`min()\` against 20vh so the reserve still gives way first on a genuinely
 * short viewport, and BREAKPOINT_SHORT drops it entirely.
 */
.card-media {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-block-size: min(7rem, 20vh);
  /*
   * shrink 20, not 4, and the number is doing real work.
   *
   * The intent written below has always been "the media yields, the words do
   * not, until the media hits a floor it cannot pass". Flexbox does not
   * express that directly: it distributes a deficit across every shrinkable
   * item at once, in proportion to shrink-factor x base-size. At 4 against the
   * copy column's 1 that split a 94px deficit as 82px of media and 12px of
   * copy -- so the copy gave up 12px it did not have to, and scrolled, while
   * the camera above it still had 100px of slack before its own floor. Every
   * "card copy scrolls by 3px" in the sweep was a version of that: not too
   * little room, room taken from the wrong box.
   *
   * A ratio cannot make the copy's share exactly zero -- flex-shrink: 0 would,
   * and is wrong, because then a deficit the media cannot absorb has nowhere
   * to go and .card-body's content overflows across the action bar instead of
   * scrolling inside the one box allowed to scroll. So the copy stays
   * shrinkable as the last resort it is meant to be, and 20 makes its share
   * GROW 1, for the opposite problem at the other end of the range. The card
   * is a fixed height and several screens have very little to say in it -- the
   * choose screen is a heading and a dropzone, transfer is a filename and a
   * status line -- so with nothing growing, the content sat at the top and left
   * a 450px white void above the action bar. That void is the single most
   * visible unfinished thing on a phone. Letting the media take the slack fills
   * it with the screen's own subject: the dropzone becomes a target worth
   * aiming at, the QR and the outcome banner centre in the space, and the words
   * settle just above the buttons instead of floating half a screen away from
   * them. The copy column takes grow: 0 below so the slack goes to the media
   * rather than being split with a text block that cannot use it.
   *
   * 20 was the first try
   * and left 2-4px of it on three screens, which is still a scrollbar; 100
   * puts the copy's share under the sweep's 1px tolerance on every viewport it
   * checks, while keeping it non-zero so the fallback above still exists.
   */
  flex: 1 100 auto;
}
.card-copy {
  /* grow 0: see .card-media above. Free space belongs to the visual block,
   * not to a column of top-aligned text that looks identical either way. */
  flex: 0 1 auto;
  min-block-size: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: var(--sp-4);
}

/*
 * SPACING HAS ONE OWNER, AND IT IS \`gap\`.
 *
 * These are gapped flex containers, and until now nearly every child also
 * carried its own margin -- h2 \`0 0 sp-4\`, .qr \`0 auto sp-5\`, .bar
 * \`sp-4 0 sp-3\`, .callout \`0 0 sp-4\`, .sas-grid \`sp-5 0\`, .status
 * \`sp-2 0 0\`, and six more. Flex gaps do not collapse with margins, so every
 * real gap was the sum of two numbers written in different places: heading to
 * note was 32px, note to code 24px, filename to controls 16px. No two
 * adjacent pairs on a screen matched, and no single edit could make them,
 * because half the spacing was per-element and half was per-container.
 *
 * So: nothing inside a gapped container sets a margin, and this rule is the
 * backstop rather than the mechanism -- the margins are gone from the rules
 * themselves below, and this only catches the next one. Where two things want
 * to sit closer than the container gap, they get grouped in a .stack rather
 * than clawing a margin back.
 *
 * Descendants, not children, and that is not tidiness. The half of this the
 * per-element rules could not reach was the UA's own margins on text nested
 * one level down -- \`.outcome p\` (a 16px top margin pushing the outcome
 * sentence out of line with the glyph beside it) and \`.dropzone p\` (16px top
 * and bottom inside a box already padded --sp-7, which is a good part of why
 * the choose screen's dropzone is the tallest block in the app). Neither was
 * ever written down anywhere; they came free with <p>.
 */
.card :where(p, h2, ul, ol, pre, figure), .sheet-body > * { margin: 0; }

/*
 * The one deliberate exception to the single gap: a group whose members belong
 * to each other more than to the screen. The copy column at --sp-4 throughout
 * lists everything at one weight, so a code block and the sentence explaining
 * it read as two unrelated paragraphs; grouped at --sp-2 inside a --sp-4
 * column they read as one thing with a caption, which is what they are.
 *
 * Four of them, all named at the call site in view.js: the transfer code and
 * its warning, a filename and its path badge, a progress bar and its
 * percentage line, the beam speed control and its status.
 */
.stack {
  display: flex;
  flex-direction: column;
  gap: var(--sp-2);
}

/* Every member of a stack is conditional somewhere -- the sender has no
 * \`offer\`, so its filename line is absent, and pathBadge() returns null until
 * classification resolves, which on the verify screen is both of them at once.
 * An empty flex child still consumes one of the parent's gaps, so without this
 * the sender's verify screen carries 16px of nothing between the SAS warning
 * and the action bar for the first second or two and then silently loses it.
 * The same argument as .card-actions:empty above. */
.stack:empty { display: none; }

/*
 * flex: none, so it keeps its height while .card-body above gives up whatever
 * is needed. The separator is drawn only when the body can scroll away
 * underneath it, which is what makes the bar read as pinned rather than as
 * the end of the content.
 */
.card-actions {
  flex: none;
  display: flex;
  flex-wrap: wrap;
  gap: var(--sp-3);
  align-items: center;
  padding-block-start: var(--sp-4);
  border-block-start: 1px solid var(--line);
}

/* The primary action leads and takes the room; the ghost escape hatch does
 * not stretch to match it. Reusing .choices' flex basis so a button in the bar
 * and a button in the body are visibly the same object. */
.card-actions .btn { flex: 1 1 12rem; }
.card-actions .btn.ghost { flex: 0 1 auto; }

/* An action bar with nothing in it draws a rule across the card for no
 * reason -- the choose screen has no cancel and no primary. */
.card-actions:empty { display: none; }

/*
 * The controls slot: a screen's one control that is not a button.
 *
 * Only beam-send fills it (view.js's \`controls\`), and this rule is what makes
 * it look no different from the .stack it used to be inside .card-copy --
 * same direction, same gap, so the stacked layout is unchanged by the move.
 * What the move buys is that it is now a child of .card, which is the only
 * place the landscape branch further down can reposition it from.
 *
 * flex: none for .card-actions' reason: it is a control, not prose, and it
 * must not be the thing that gives way while the body above it scrolls.
 *
 * :empty is not an optimisation. view.js renders this element on EVERY screen
 * rather than only where there is something to put in it, because vdom.js's
 * canReuse matches children by position and a slot that came and went would
 * shift .card-actions' index -- next to a .card-body holding an adopted canvas
 * that web/beam.js is repainting. Rendered-and-hidden is the same bargain the
 * step rail already strikes, and this line is the hiding half of it.
 */
.card-controls {
  flex: none;
  display: flex;
  flex-direction: column;
  gap: var(--sp-2);
}
.card-controls:empty { display: none; }

/*
 * The rule this element never had.
 *
 * #verify-status is a plain <div> holding the verify screen's role-dependent
 * controls, and it had no CSS at all -- so it was a block box inside
 * .card-actions' flex row, and \`.card-actions .btn\` above did not reach its
 * children. Accept and Decline therefore laid out as two inline-level boxes
 * with no gap between them and no flex basis, touching edge to edge, on the
 * one screen in the app where the two buttons mean opposite things. Every
 * other action bar in the component has a --sp-3 gap. This is that gap,
 * arriving on the screen that most needed it.
 *
 * Restating .card-actions' own values rather than \`display: contents\`, which
 * is shorter and was rejected: this element carries aria-live="polite" and is
 * how a receiver is told an offer arrived, and dropping a live region's box to
 * save four declarations is not a trade worth making. It also stays a real
 * element for check-layout.mjs, whose strayActions assertion names it by id as
 * the single permitted non-button in the bar.
 *
 * flex: 1 1 auto so the group takes the row and the sibling Cancel stays
 * ghost-sized beside it, exactly as a primary/ghost pair does anywhere else.
 */
#verify-status {
  display: flex;
  flex: 1 1 auto;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--sp-3);
}
#verify-status .btn { flex: 1 1 12rem; }
#verify-status .btn.ghost { flex: 0 1 auto; }
/* Same as .ghost and for the same reason: the primary carries the filename,
 * so it is the one that deserves the row. Giving this a 12rem basis too wraps
 * the pair onto two rows at 390px and pushes Cancel off the action bar. */
#verify-status .btn.danger { flex: 0 1 auto; }

/* The waiting branch: an indeterminate bar and the line explaining it, in the
 * same row the buttons will occupy once the offer lands. The bar has no
 * content width, so without a basis it collapses to nothing in a flex row. */
#verify-status .bar { flex: 1 1 100%; }
#verify-status .status { flex: 1 1 100%; }

/*
 * The sheet: the component's one <dialog>, owned by element.js and adopted by
 * the view (see the .dialog-host wrapper in view.js).
 *
 * .dialog-host is display: contents so that wrapping the dialog in a <div> the
 * \`adopt\` prop needs does not put a flex item in :host's column. The dialog
 * itself is out of flow the moment showModal() runs, but the wrapper is not,
 * and an empty flex child still eats the column's gap.
 *
 * display goes on [open], never on .sheet. A closed <dialog> is hidden by
 * exactly one thing -- \`display: none\` in the UA stylesheet -- and any author
 * \`display\` beats it, which renders the sheet permanently, in flow, at the
 * bottom of the component. That mistake cost 4300px of page height once
 * already in this file's sibling, site/styles.css; it is written down in both
 * places because it looks correct in a stylesheet either way.
 *
 * No z-index: showModal() promotes the element to the browser's top layer,
 * which is above every stacking context by definition. That immunity is the
 * reason this is a real <dialog> rather than a positioned div -- the layout it
 * sits inside is made of fixed-height, overflow-hidden boxes, and any
 * in-flow overlay would be clipped by one of them.
 */
.dialog-host { display: contents; }

${Wl()}

.sheet-title {
  margin: 0;
  font-size: var(--fs-1);
  line-height: var(--lh-tight);
  font-weight: 600;
}
/* No ring, for the reason already written above h2:focus -- a rounded box
 * around a line of text is the universal look of an editable field, and users
 * tried to type in it. The sheet heading takes focus on open (see
 * dialogContent) precisely so Accept does not, so it is a focus target that is
 * never Tab-reachable, and the ring would be misleading rather than helpful.
 * This rule exists only because .sheet-title would otherwise out-specify that
 * one; it says the same thing. */
.sheet-title:focus, .sheet-title:focus-visible { outline: none; box-shadow: none; }

/* The one box in the component allowed to scroll. Long copy lives here
 * precisely so that it does not have to fit on a screen that cannot grow. */
.sheet-body {
  overflow-y: auto;
  min-block-size: 0;
  display: flex;
  flex-direction: column;
  gap: var(--sp-3);
}
.sheet-body p { margin: 0; color: var(--muted); font-size: var(--fs--1); }
.sheet-body .filename { color: var(--text); font-size: var(--fs-0); }

/* The raw failure text, for a bug report. Closed by default and deliberately
 * quieter than the sentence above it: this is the developer's copy of the
 * message, and a user who does not need it should not have to read past it.
 * Monospace because the interesting part is usually a number. */
.error-detail > summary {
  cursor: pointer;
  color: var(--muted);
  font-size: var(--fs--1);
}
.error-detail > p {
  margin-block-start: var(--sp-2);
  font-family: var(--font-mono);
  overflow-wrap: anywhere;
}

.sheet-actions {
  flex: none;
  display: flex;
  flex-wrap: wrap;
  gap: var(--sp-3);
}
.sheet-actions .btn { flex: 1 1 10rem; }
.sheet-actions .btn.ghost { flex: 0 1 auto; }

/*
 * The toast: one transient line, for a change the user did not cause.
 *
 * position: absolute against :host, NOT fixed against the viewport. Fixed was
 * the first attempt and is wrong on the deployed site: the viewport's bottom
 * edge is the page's, not the component's, so the toast landed on top of the
 * site footer's links. Absolute anchors it to the component, which is the
 * thing it is reporting about. Nothing clips it -- :host sets no overflow, and
 * only .card-body does, which is not an ancestor of this.
 *
 * Sitting just above the card's bottom edge puts it directly over the action
 * bar, which is where the eye already is.
 *
 * pointer-events: none because it must never intercept a tap meant for the
 * button underneath it. It says something; it is not something to use.
 */
:host { position: relative; }

.toast {
  position: absolute;
  inset-block-end: var(--sp-4);
  inset-inline: var(--sp-4);
  margin-inline: auto;
  inline-size: fit-content;
  max-inline-size: calc(100% - var(--sp-6));
  z-index: var(--z-toast);
  pointer-events: none;
  padding: var(--sp-2) var(--sp-4);
  border-radius: var(--r-full);
  background: var(--text);
  color: var(--surface);
  font-size: var(--fs--1);
  font-weight: 500;
  box-shadow: var(--shadow-1);
  animation: toast-in var(--dur-slow) ease-out;
}

@keyframes toast-in {
  from { opacity: 0; transform: translateY(var(--sp-3)); }
  to { opacity: 1; transform: none; }
}

/* A short rise, not just a fade. Opacity alone reads as a flicker at this
 * duration -- something replacing something -- where a few pixels of travel
 * reads as the new screen arriving. --sp-2 and not more: this runs on every
 * screen change in a flow that is three screens long, so it has to be
 * invisible by the third time you see it. */
@keyframes screen-in {
  from { opacity: 0; transform: translateY(var(--sp-2)); }
  to { opacity: 1; transform: none; }
}

h2 {
  margin: 0;
  font-size: var(--fs-1);
  line-height: var(--lh-tight);
  font-weight: 600;
}

/* The screen's <h2> takes focus on every transition (see element.js's
 * _afterRender) so assistive tech announces the new screen instead of
 * leaving focus stranded on a button that just went hidden. outline: none
 * on plain :focus keeps that programmatic move visually silent; :focus-visible
 * still shows a ring for anyone who then tabs away and back with a keyboard. */
/* The heading takes focus on every screen change so assistive tech announces
   the new screen instead of leaving focus stranded. It is tabindex="-1", so
   it is never reachable by Tab and a person navigating by keyboard can never
   land here by accident -- which is why it carries no focus ring in either
   state. A ring here is actively misleading: h2 is a block element, so it
   paints a full-width rounded box around the line, and a rounded box around
   text is the universal look of an editable field. Users tried to type in it. */
h2:focus, h2:focus-visible { outline: none; box-shadow: none; }

/* ---- buttons ---- */
.btn {
  font: inherit;
  font-weight: 500;
  font-size: var(--fs-0);
  padding: var(--sp-3) var(--sp-4);
  /* Belt and braces with the padding above, which already computes to ~50px
   * at the default font size -- but the padding is in rem and a user who has
   * turned their base size DOWN would shrink the target along with the text,
   * which is the opposite of what they asked for. */
  min-block-size: var(--tap);
  border-radius: var(--r-sm);
  border: 1px solid var(--line-strong);
  background: var(--surface);
  color: var(--text);
  cursor: pointer;
  /* box-shadow joins the list so .primary's rest/hover/press elevation below
   * animates rather than snapping. */
  transition: border-color var(--dur-base), background var(--dur-base),
    box-shadow var(--dur-base), transform var(--dur-fast);
}

.btn:hover { border-color: var(--muted); background: var(--surface-raised); }
.btn:active { transform: translateY(1px); }
.btn:focus-visible { outline: none; box-shadow: var(--focus-ring); }
.btn:disabled { opacity: 0.5; cursor: default; transform: none; }

/*
 * The primary action is the only thing in the component that sits above the
 * card, and it now looks it. Everything here was one weight -- card, code
 * block, input and button all --surface inside a 1px line -- so the button a
 * screen exists to get someone to press was distinguished by hue alone.
 *
 * The press has somewhere to go: shadow at rest, more on hover, none while
 * held, alongside the 1px nudge that was previously carrying the whole
 * gesture on its own.
 */
.btn.primary {
  background: var(--accent);
  color: var(--accent-text);
  border-color: transparent;
  box-shadow: var(--shadow-1);
}
.btn.primary:hover { background: var(--accent-hover); box-shadow: var(--shadow-2); }
.btn.primary:active { box-shadow: none; }
/* focus-visible's ring must win over both of the above, or a keyboard user
 * tabbing onto the primary button gets an elevation change and no ring. */
.btn.primary:focus-visible { box-shadow: var(--focus-ring); }
.btn.primary:disabled { box-shadow: none; }

/* The mismatch button on the verify screen, and the only place this variant
 * is used. Outlined rather than filled: it sits beside the filled primary,
 * and two filled buttons in one row would be asking the user to pick between
 * two equally-weighted calls to action when only one of them is a decision
 * about their file. The --bad pair is the same one .outcome.bad and
 * .callout.danger already use, and it is defined in both palettes, so this
 * needs no new token. */
.btn.danger {
  border-color: var(--bad);
  color: var(--bad);
}
.btn.danger:hover { background: var(--bad-soft); border-color: var(--bad); }

${Yl()}

/* Small in type and padding, not in target. This is the Copy chip beside the
 * transfer code and the digest, and at --sp-1/--sp-2 it computed to about
 * 28px -- comfortably missable with a thumb, and never caught, because
 * check-layout.mjs asks whether a button is on the screen rather than whether
 * it can be hit. The label stays --fs--1 so it still reads as subordinate to
 * the action bar; only the box grows. */
.btn.small {
  padding: var(--sp-1) var(--sp-3);
  min-block-size: var(--tap);
  font-size: var(--fs--1);
}

.choices { display: flex; gap: var(--sp-3); flex-wrap: wrap; }
.choices .btn { flex: 1 1 12rem; }

/* .beam-entry used to style the wrapper around the two beam buttons on the
 * choose screen. Those buttons moved into the info sheet several commits ago
 * and the wrapper went with them; the rule stayed, matching nothing. */
.choices.secondary { display: flex; gap: var(--sp-2); flex-wrap: wrap; }
/* Bordered, unlike every other .ghost in the component. Ghost means "the way
 * out" elsewhere -- Cancel, Decline -- and a borderless control is legible
 * enough when the user already knows they want it. These two are the opposite:
 * an entry point into a mode nobody is looking for yet, and without an edge
 * they read as centred body text rather than as something clickable, which is
 * how they first rendered. Subordinate by size and colour, not by being
 * invisible. */
.choices.secondary .btn {
  flex: 1 1 12rem;
  font-size: var(--fs--1);
  border-color: var(--line);
}
.choices.secondary .btn:hover { border-color: var(--line-strong); }

/* ---- callout boxes: warn and danger ----
 *
 * A left border rather than a full outline keeps boxed guidance from reading
 * as an error the way a bordered box always would. The tinted background, the
 * coloured border and the colour of the text itself all carry the level; the
 * shape is shared.
 *
 * font-weight 500, down from 600. The longest text in the component is
 * BEAM_WARNING, which is two full sentences and renders in one of these, and
 * at 600 the single most important paragraph in the app was a solid block of
 * bold -- the least readable treatment available, applied to the text that
 * most needs reading. Nothing about the warning is softened by this: the
 * wording is untouched, and it keeps the danger tint, the --bad text colour
 * and the border. It is only being made legible.
 *
 * An .info variant existed here too and was never rendered by view.js; the
 * only levels the UI has are warn and danger.
 */
.callout {
  border-left: 3px solid;
  padding: var(--sp-3) var(--sp-4);
  border-radius: var(--r-sm);
  font-weight: 500;
  font-size: var(--fs--1);
}

.callout.warn {
  border-left-color: var(--warn);
  background: var(--warn-soft);
  color: var(--warn);
}

.callout.danger {
  border-left-color: var(--bad);
  background: var(--bad-soft);
  color: var(--bad);
}

/* ---- drop zone: the choose screen's file-picking target ----
 *
 * A <button> now, at every pointer (see view.js's dropzone()), so the first
 * block of this rule is undoing the UA button styling that arrived with the
 * tag. The all shorthand is not used, and appearance: none alone is not
 * enough: Safari keeps the UA font on a button whatever the appearance is set
 * to, so a box that inherited the card's type on every other engine rendered
 * in 13px system-ui there. Naming font, colour and text-align explicitly is
 * what makes this look identical to the div it replaced.
 *
 * inline-size: 100% because a button shrink-wraps its content and a div did
 * not -- without it the dashed box became a pill around one sentence, which
 * is the single most visible way this change could have gone wrong.
 */
.dropzone {
  appearance: none;
  /* appearance: none does NOT clear the UA background. A <button> keeps
   * background-color: buttonface, which is rgb(239,239,239) -- close enough to
   * this card's white to pass for deliberate in a desktop screenshot, and a
   * solid grey slab filling most of the landing screen on a phone in dark
   * mode. The div this replaced had no background at all, so transparent is
   * what restores the look it is meant to have. .is-dragging below still sets
   * its own. Found on a device; no assertion in check-layout.mjs could have
   * seen it, and neither could I in the light-theme pictures. */
  background: transparent;
  inline-size: 100%;
  font: inherit;
  cursor: pointer;
  border: 2px dashed var(--line-strong);
  border-radius: var(--r-md);
  /* --sp-6, down from --sp-7, and the UA margins inside it are gone (see the
   * margin reset above). Together those were ~112px of vertical space on the
   * landing screen for one sentence and a dashed edge, which is more than the
   * two buttons it sits above are given between them. */
  padding: var(--sp-6) var(--sp-4);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--muted);
  transition: border-color var(--dur-base), background var(--dur-base);
}

/* Same treatment for the pointer that can hover and the one that cannot: on
 * touch there is no hover, and :active is what a finger produces. */
.dropzone:hover { border-color: var(--muted); color: var(--text); }
.dropzone:active { background: var(--surface-raised); }
.dropzone:focus-visible { outline: none; box-shadow: var(--focus-ring); }

.dropzone.is-dragging {
  border-color: var(--accent);
  background: var(--accent-soft);
  color: var(--text);
}

/* ---- the same box, as a viewfinder ----
 *
 * On a coarse pointer with a camera the choose screen's slot stops being a
 * drag target and becomes the way into the scanner (view.js's dropzone). It
 * is the SAME element restyled rather than a second one swapped in, because
 * vdom.js's canReuse matches by tag and position and the rule that a pointer
 * change may alter copy and never shape is worth keeping unbroken where it is
 * free. Nothing adopted lives on this screen, so breaking it here would be
 * survivable -- and the screens where it is not free give no warning.
 *
 * It has to READ as the receive screen's viewfinder, since that is what it is
 * a preview of: same dark ground, same corner brackets, same square. A box
 * that merely said "tap to scan" would be a button with new words on it, and
 * the tap it saves is not the point -- the point is that a phone opening this
 * app looks like a scanner.
 *
 * The dark ground is not decoration and it is why the brackets can exist:
 * --scan-line is white (tokens.js), so the brackets are invisible on the light
 * card this box otherwise sits on. Ground and brackets ship together or
 * neither does.
 *
 * Specificity, not order, is what these have to beat: .dropzone:hover and
 * .dropzone:focus-visible are 0-2-0, so a plain .scan-panel rule later in the
 * file still loses to them. Each state is therefore restated here rather than
 * inherited, which is also why this block looks more repetitive than it is.
 */
.scan-panel {
  /* Read by the corner-bracket rules further down, which are shared with
   * .viewfinder. That one is an absolutely positioned overlay already inset
   * 12% from the video, so its corners sit at 0; this one IS the box, so its
   * corners need holding off the dashed edge themselves. */
  --corner-inset: var(--sp-4);
  position: relative;
  background: var(--scan-bg);
  color: var(--scan-line);
  /*
   * Square, by the same mechanism .qr uses and for a related reason: this is a
   * picture of a viewfinder, and a viewfinder that is not square stops looking
   * like one -- it reads as a slab with brackets stuck on the corners.
   *
   * flex: 0 0 auto, and that is the whole trick. The coarse rule at the foot
   * of this file gives .dropzone a grow of 1 so the DRAG TARGET fills the
   * slot, which is right for a box whose only job is to be big. Applied to an
   * aspect-ratio box it is the 352x306 bug again from the growth side instead
   * of the shrink side: check-layout measured 302x417, 332x461 and 478x622
   * across the viewports before this line existed, because flex-grow settles
   * the block axis and aspect-ratio never gets to. Hence the :not() on that
   * rule -- the panel opts out of filling and states its own shape.
   *
   * Which axis DRIVES that shape then depends on which one is scarce, exactly
   * as it does for .qr: inline here, where height is plentiful, and block in
   * the short and wide branches below, where it is not. Setting both pins the
   * box and clamping one without releasing the other is what breaks the
   * square.
   */
  aspect-ratio: 1;
  flex: 0 0 auto;
  min-block-size: 8rem;
  margin-inline: auto;
}

/* Neither of these inherits from the .dropzone versions: those resolve to
 * --text and --surface-raised, which are the page's dark-on-light pair and
 * disappear on this box's dark ground. */
.scan-panel:hover { border-color: var(--scan-line); color: var(--scan-line); }
.scan-panel:active { background: var(--scan-bg); border-color: var(--accent); }

/* Always light, whatever the page theme: scanners read dark-on-light best. */
/*
 * Sized from its INLINE size, with aspect-ratio deriving the height, and NOT
 * flex-shrinkable. Both halves of that are load-bearing.
 *
 * A QR is square, so whichever axis is scarcer has to be the one that
 * governs, and the version before this drove the block size for exactly that
 * reason: a 16rem-wide code demands 16rem of vertical space unconditionally,
 * and on the send screen that was 322px of a card that did not have it. That
 * reasoning was right; the mechanism was not. \`flex: 0 1 auto\` in a column
 * flex container leaves the BLOCK axis shrinkable, and an aspect-ratio box
 * that is allowed to shrink on one axis only is no longer square -- it just
 * quietly stops being. check-layout.mjs caught this at 1280x620, where the
 * box measured 352x306 in both engines and the extra 46px paid out as a white
 * band beside a code pinned to the corner by preserveAspectRatio.
 *
 * So: the scarcer axis is respected by CAPPING the inline size with a
 * viewport-height term, not by handing the browser a second axis to squash.
 * Same device .card-media uses one rule up (\`min-block-size: min(7rem, 20vh)\`),
 * and it holds in both directions -- the box shrinks on a short card and sits
 * at full size on a tall one, while staying square at every step.
 *
 * The floor matters: below roughly 7rem the modules of a version-6 code get
 * small enough that a phone camera at arm length stops locking on, and a QR
 * nobody can scan is not a smaller QR, it is a broken screen. It has only
 * changed axis, not value.
 */
/* One rule, not two. A beam frame is read by the exact same class of scanner
 * as the pairing QR -- same quiet zone, same always-light surface, same
 * unscannable floor -- and these were two byte-for-byte identical blocks
 * differing only in a bottom margin that .card-copy's gap now owns anyway.
 * Both media queries below already grouped them in one selector, which is the
 * tell that they were one thing. */
.qr, .beam-stage {
  background: var(--qr-quiet-zone);
  border-radius: var(--r-sm);
  padding: var(--sp-3);
  flex: 0 1 auto;
  block-size: min(16rem, 100%);
  min-block-size: 7rem;
  aspect-ratio: 1;
  /* inline-size stays AUTO on purpose, and every override below must keep it
   * that way. It is what lets aspect-ratio derive the width from whatever
   * block size the box ends up with after .card-media (flex: 1 100 auto) has
   * taken its share -- so a squeezed box gets smaller rather than oblong.
   * Pin it, and the two axes stop agreeing the moment anything shrinks. */
  max-inline-size: 100%;
  margin-inline: auto;
}
/* aspect-ratio as well as 100%/100%: the box above is square by construction,
 * but this says so a second time at the one element that has no intrinsic
 * size of its own to fall back on -- qrcode-generator's \`scalable: true\`
 * emits a viewBox and no width/height, and an inline <svg> with no size is
 * 300x150 by CSS default. site/styles.css:375 records the same trap for the
 * footer icons. */
.qr svg { display: block; inline-size: 100%; block-size: 100%; aspect-ratio: 1; }

/* web/beam.js paints one canvas pixel per QR module and leaves the CSS to
 * blow it up to display size (see startBeamSend's canvas). image-rendering:
 * pixelated is not decorative here -- the default smoothing algorithm blurs
 * those hard module edges into a soft gradient a scanner cannot binarize, so
 * an un-pixelated beam looks fine to a person and is unreadable to a camera. */
.beam-canvas {
  display: block;
  inline-size: 100%;
  block-size: 100%;
  image-rendering: pixelated;
}


.beam-controls {
  display: flex;
  align-items: center;
  gap: var(--sp-3);
}
.beam-controls select {
  font: inherit;
  font-size: var(--fs--1);
  padding: var(--sp-1) var(--sp-3);
  /* The one control on the beam screen, on the one screen that runs for
   * minutes and where changing the rate is the only thing a sender can
   * actually do. It was a ~28px target. */
  min-block-size: var(--tap);
  border-radius: var(--r-sm);
  border: 1px solid var(--line-strong);
  background: var(--surface-sunken);
  color: var(--text);
}

/* ---- camera scanner + corner-bracket viewfinder ----
 * .scanner-frame is a plain positioned box; .viewfinder draws its four
 * corner brackets with box-shadow slivers rather than four extra elements,
 * so it can sit over the <video> without intercepting pointer events. */
/*
 * The camera is the one element allowed to give up space, and it is the reason
 * everything else used to be pushed off the screen.
 *
 * \`width: 100%; aspect-ratio: 1\` with nothing capping it made this an
 * unconditional 390px square on a 390px phone -- the tallest thing in the app,
 * demanding its full height before any of the text or buttons under it were
 * given a pixel. \`flex: 1 1 auto\` with \`min-block-size\` puts that the other
 * way round: the frame takes the space the card has left after the copy and
 * the action bar are served, down to a floor below which a viewfinder stops
 * being usable to aim with. The square is now a preference, not a demand --
 * \`object-fit: cover\` on the video means a shorter frame crops the picture
 * rather than distorting it, which is what a camera viewfinder does anyway.
 */
.scanner-frame {
  position: relative;
  flex: 1 1 auto;
  inline-size: 100%;
  aspect-ratio: 1;
  min-block-size: 8rem;
  max-block-size: 100%;
}

.scanner {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: var(--scan-bg);
  border-radius: var(--r-sm);
  display: block;
}

.viewfinder {
  position: absolute;
  inset: 12%;
  pointer-events: none;
  border-radius: var(--r-sm);
}
/*
 * Four corners out of two elements, and the choose screen's scan panel is
 * hung on the same rules rather than given its own copy of them.
 *
 * A pseudo-element pair gives two corners, so the bottom two come from a
 * child's pair: .viewfinder's <span>, and on the panel the <p> holding its one
 * line (view.js keeps that child there at every pointer). Neither child is
 * positioned, so all four resolve against the same containing block. Four
 * extra elements was the alternative, and it puts markup in the vdom that
 * exists only to be drawn on.
 *
 * --corner-inset is how one set of rules serves both. .viewfinder is an
 * overlay already inset 12% from the video, so it wants 0; .scan-panel is the
 * box itself and has to hold its corners off its own dashed edge. Pseudo
 * elements inherit from the element they belong to, and the child inherits
 * from the parent, so setting it once on each host reaches all four.
 */
.viewfinder { --corner-inset: 0px; }
.viewfinder::before, .viewfinder::after,
.viewfinder > span::before, .viewfinder > span::after,
.scan-panel::before, .scan-panel::after,
.scan-panel > p::before, .scan-panel > p::after {
  content: '';
  position: absolute;
  width: var(--sp-5);
  height: var(--sp-5);
  border: 3px solid var(--scan-line);
  /* The panel's <p> is a flex item that would otherwise be laid out around
   * these; the viewfinder's <span> is empty so it costs nothing there. */
  pointer-events: none;
}
.viewfinder::before, .scan-panel::before {
  top: var(--corner-inset); left: var(--corner-inset);
  border-right: none; border-bottom: none;
}
.viewfinder::after, .scan-panel::after {
  top: var(--corner-inset); right: var(--corner-inset);
  border-left: none; border-bottom: none;
}
.viewfinder > span::before, .scan-panel > p::before {
  bottom: var(--corner-inset); left: var(--corner-inset);
  border-right: none; border-top: none;
}
.viewfinder > span::after, .scan-panel > p::after {
  bottom: var(--corner-inset); right: var(--corner-inset);
  border-left: none; border-top: none;
}

/* No camera on this device: view.js still fills the media slot, with an empty
 * frame the same size and shape as the live one so the screen keeps its
 * two-column wide-and-short layout instead of collapsing to one column on the
 * screens that have no camera to show. Nothing to aim, so it reads as an inert
 * placeholder -- dashed edge, muted fill -- with its one line centred where the
 * picture would have been. It inherits the box (aspect-ratio, min-block-size,
 * margin) from .scanner-frame above; this rule only restyles the surface. */
.scanner-frame.is-empty {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--sp-4);
  border: 2px dashed var(--line-strong);
  border-radius: var(--r-sm);
  background: var(--scan-bg);
  text-align: center;
}
.scanner-frame.is-empty .note { margin: 0; }

/* ---- SAS tiles: emoji above word, so the pair can be read aloud ---- */
/*
 * Two by two, at every size, and it is a grid rather than a wrapping flex row
 * for one reason: a wrapping row of four cannot be stopped from breaking 3 + 1.
 *
 * At a 6rem flex basis the tiles fit four across whenever ~420px is available
 * and three otherwise -- and "otherwise" includes the wide two-column layout,
 * where the media column is 22rem however wide the window is. So on a 1280x620
 * laptop the verification code rendered as three tiles and then one stretched
 * across the full width beneath them, which is not a layout, and no viewport
 * media query can fix it because the viewport is not what is narrow.
 *
 * Four fixed columns would be the other option and is worse on a phone, where
 * it was already being overridden to 2x2. So 2x2 everywhere: it is the shape
 * the smallest screen had already settled on, it never reflows, and four
 * things a person reads aloud in pairs is if anything easier to keep your
 * place in than a row of four.
 */
.sas-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--sp-3);
}

.sas-tile {
  flex: 1 1 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--sp-1);
  padding: var(--sp-3);
  background: var(--surface-raised);
  border-radius: var(--r-md);
}

.sas-emoji {
  font-size: var(--fs-3);
  line-height: 1;
  /* Emoji fonts vary; give the glyph room so it cannot be mistaken. */
}

.sas-word {
  font-size: var(--fs--1);
  font-weight: 600;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

/* ---- code block + copy button ---- */
/* Row, at every width. Stacking this to a column on a phone was tried, on the
 * grounds that a --tap-tall Copy button under the code is an easier target
 * than one beside it -- and it cost the send screen 52px on a 390x844 viewport,
 * where the check-layout sweep was already failing. Beside a code block that
 * wraps to four lines the button adds no height at all, which on the tightest
 * screen in the app is worth more than the extra width. */
.code-row {
  display: flex;
  /* Centre, not stretch: stretch makes a "Copy" chip as tall as a four-line
   * code block, which reads as a second panel rather than a button. */
  align-items: center;
  gap: var(--sp-2);
}

.code {
  flex: 1 1 auto;
  display: block;
  font-family: var(--font-mono);
  font-size: var(--fs--1);
  word-break: break-all;
  /* Sunken rather than --bg. The distinction was invisible in light mode (--bg
   * against a white card) and inverted in dark, where --bg is lighter than
   * nothing the card contains. A field that holds a value someone reads out or
   * copies should look like a field. */
  background: var(--surface-sunken);
  border: 1px solid var(--line);
  border-radius: var(--r-sm);
  padding: var(--sp-3);
}

/* ---- progress bar ----
 * .bar-fill's width is driven by a --progress custom property set via
 * .style.setProperty from element.js on every progress event -- this is the
 * inline style write that keeps style-src 'unsafe-inline' in the site's CSP
 * (see scripts/build-site.mjs). Do not replace it with a class toggle; there
 * is no finite set of classes for a continuously-varying percentage. */
.bar {
  height: 0.5rem;
  background: var(--line);
  border-radius: var(--r-full);
  overflow: hidden;
}

/*
 * The transfer screen's media block: a big percentage over the bar.
 *
 * The bar alone was 8px of content in the slot that had held a 256px QR one
 * screen earlier and would hold the outcome banner on the next -- the emptiest
 * moment in the app placed at its longest wait. .card-media's floor now
 * reserves that space whatever fills it, so the choice was between reserving it
 * for nothing and giving the screen a subject. The percentage was already being
 * computed for the bar's width and already being said, in the status line, as
 * part of "Sent 1.2 MB of 2.3 MB"; this is the same number at the size the
 * screen's importance deserves. Both stay: the readout answers "how far", the
 * status line answers "how far in bytes", and they are not the same question
 * when the file is 40 KB.
 *
 * font-variant-numeric: tabular-nums so the digits do not reflow the line as
 * the number climbs -- proportional digits make a percentage counter twitch
 * horizontally on every tick, which is exactly the kind of small constant
 * movement that reads as unfinished.
 */
.transfer-pct {
  font-size: var(--fs-3);
  font-weight: 600;
  line-height: var(--lh-tight);
  font-variant-numeric: tabular-nums;
  color: var(--text);
  text-align: center;
}

/* .card-media is a column flex box whose wide-and-short query sets
 * align-items: center, which on a bar with no content width of its own would
 * shrink it to nothing. align-self: stretch opts this one child back out, so
 * the meter fills the media column at every width. (This used to be
 * \`.card-media > .bar\`, when the bar was the media block itself.) */
.transfer-meter {
  display: flex;
  flex-direction: column;
  gap: var(--sp-3);
  align-self: stretch;
}

.bar-fill {
  height: 100%;
  width: var(--progress, 0%);
  background: var(--accent);
  border-radius: var(--r-full);
  transition: width var(--dur-slow) ease-out;
}

/* Indeterminate: pairing has no percentage to report, so a shimmering fixed
 * segment reads as "working" instead of the old static "Starting\u2026" text. */
.bar.indeterminate .bar-fill {
  width: 40%;
  animation: qrdrop-shimmer var(--dur-shimmer) ease-in-out infinite;
}

@keyframes qrdrop-shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(250%); }
}

/* ---- outcome banner: a failed transfer must not look like a success ---- */
.outcome {
  display: flex;
  align-items: flex-start;
  gap: var(--sp-3);
  padding: var(--sp-4);
  border-radius: var(--r-md);
}

.outcome .glyph { font-size: var(--fs-2); line-height: 1; flex: none; }

.outcome.ok { background: var(--ok-soft); color: var(--ok); }
.outcome.bad { background: var(--bad-soft); color: var(--bad); }
.outcome.warn { background: var(--warn-soft); color: var(--warn); }

/* ---- network path: which route the bytes actually took ----
   A pill plus one explanatory line, sitting next to the SAS confirm and the
   Accept button. Styled flat and unclickable on purpose: it is the answer to
   "is this costing me data", not a control, and anything button-shaped beside
   a safety gesture is something people learn to click through. Same reasoning
   as .callout above -- a permanent property of the connection, not a
   fault. */
/* A .stack in its own right -- the pill, its sentence, and any warning belong
 * to each other more than to the column. Same --sp-2 the .stack helper uses;
 * not the helper itself, because this group is built by pathBadge() rather
 * than named at a call site. */
.path-info {
  display: flex;
  flex-direction: column;
  gap: var(--sp-2);
}

.path-badge {
  /* align-self, not align-items on the parent: as a flex item the pill would
   * otherwise stretch to the column width, turning a badge into a banner --
   * but the metered warning below it is a .callout and does want the full
   * width, so the opt-out has to be on this child alone. */
  align-self: flex-start;
  padding: var(--sp-1) var(--sp-3);
  border-radius: var(--r-full);
  font-size: var(--fs--1);
  font-weight: 600;
}

.path-badge.local { background: var(--ok-soft); color: var(--ok); }
.path-badge.direct { background: var(--accent-soft); color: var(--accent); }
.path-badge.relay { background: var(--warn-soft); color: var(--warn); }
.path-badge.unknown { background: var(--surface-raised); color: var(--muted); }

/* TEMPORARY, ?debug=path only -- the raw candidate-pair dump. Scrolls in its
   own box so a long dump cannot make the page scroll sideways. Remove along
   with collectPathEvidence. */
.path-debug {
  padding: var(--sp-2);
  border-radius: var(--r-sm);
  background: var(--surface-raised);
  color: var(--muted);
  font-size: 0.7rem;
  line-height: 1.4;
  max-height: 18rem;
  overflow: auto;
  white-space: pre;
}


.status { color: var(--muted); font-size: var(--fs--1); }
.note { color: var(--muted); font-size: var(--fs--1); }
.filename { font-weight: 600; word-break: break-all; }

/* The only <summary> left in the component is the done screen's verification
 * digest, which is a real <details>. The receive screen used to carry one
 * outside any <details> -- inert, but styled exactly like this, so it looked
 * like a control that did nothing when pressed. It is a <label> now; see
 * .manual-label below. */
summary {
  cursor: pointer;
  color: var(--muted);
  font-size: var(--fs--1);
  min-block-size: var(--tap);
  display: flex;
  align-items: center;
}

/* ---- manual code entry ----
 * A group: the label, the field, and the error that belongs to the field. This
 * had no rule at all, so its three parts sat at the copy column's --sp-4 and
 * read as three unrelated things, one of which happened to be an input. */
.manual {
  display: flex;
  flex-direction: column;
  gap: var(--sp-2);
}

.manual-label {
  color: var(--muted);
  font-size: var(--fs--1);
  font-weight: 500;
}

#manual-form { display: flex; gap: var(--sp-2); }

input[type="text"] {
  flex: 1;
  font: inherit;
  font-size: var(--fs--1);
  padding: var(--sp-2) var(--sp-3);
  /* ~36px before this, and it is the fallback every user without a working
   * camera has to hit. */
  min-block-size: var(--tap);
  border-radius: var(--r-sm);
  border: 1px solid var(--line-strong);
  background: var(--surface-sunken);
  color: var(--text);
  min-width: 0;
}
input[type="text"]:focus-visible { outline: none; box-shadow: var(--focus-ring); }

@media (max-width: 30rem) {
  .card { padding: var(--sp-4); gap: var(--sp-3); }
  .card-body, .card-copy { gap: var(--sp-3); }
  .card-actions { padding-block-start: var(--sp-3); }
  /* .sas-tile { flex: 1 1 40% } used to live here to force 2x2 on a phone.
   * The grid does that at every size now, so only the gap is worth trimming. */
  .sas-grid { gap: var(--sp-2); }
  .sas-emoji { font-size: var(--fs-2); }

}

/*
 * The height counterpart, and the query this stylesheet did not have.
 *
 * Every breakpoint here used to be about width, which is the axis a phone
 * makes obvious and the one this component was never actually short of. The
 * failure mode was always vertical -- a wide, short laptop window has plenty
 * of room for the text and none for the padding around it, and the first thing
 * to go was whatever sat at the bottom of the card. Trading generous spacing
 * for a screen that fits is the right way round: the padding is a comfort and
 * the content is the point.
 */
@media ${gr} {
  .card { padding: var(--sp-4); gap: var(--sp-3); }
  .card-body { gap: var(--sp-3); }
  .card-actions { padding-block-start: var(--sp-3); }
  .outcome { padding: var(--sp-3); }
  .qr, .beam-stage { block-size: min(12rem, 100%); }
  /* The scan panel joins them, and for the same reason spelled out on the
   * wide-branch rule below: height is the scarce axis here, so it has to be
   * the one that governs, with inline-size released so aspect-ratio can
   * derive it. It keeps its own floor rather than taking the QR's cap -- 8rem
   * is where a viewfinder stops being aimable, and unlike a code there is
   * nothing here that has to resolve. */
  .scan-panel { block-size: min(12rem, 100%); inline-size: auto; }
  .transfer-pct { font-size: var(--fs-2); }

  /* Callouts keep their colour, border and every word, and give up eight
   * pixels of padding each. The beam send screen carries two of them -- the
   * encryption warning and the keep-it-on-screen instruction, neither of which
   * can be shortened -- and on a 1280x620 laptop that was the last 6px between
   * this screen and a scrollbar. Exactly the trade the card padding above
   * makes, and for the reason written there: the padding is a comfort, the
   * content is the point. */
  .callout { padding: var(--sp-2) var(--sp-3); }

  /* The whole step-rail branch that used to live here is gone with the rail
   * itself -- it collapsed the three labelled pills to bare dots to buy back
   * ~50px of a 258px content box. A 3px hairline has no height to buy back. */

  /* The media floor is the first thing to give when height is the scarce axis.
   * It exists to stop the heading jumping between screens, which is a comfort;
   * a screen that fits is the point. This is the same trade the padding above
   * makes, and the reason that comment is written where it is. */
  .card-media { min-block-size: 0; }
}

/*
 * Wide and short: media beside the words instead of above them.
 *
 * A laptop in landscape is short of height with several hundred horizontal
 * pixels to spare, so a single column scrolls next to an empty margin -- the
 * layout refusing to use the axis it has plenty of. The send screen scrolled
 * 303px internally in exactly that window.
 *
 * The media query is interpolated from src/web/tokens.js at build time,
 * so there is one definition shared with site/styles.css. CSS cannot read
 * a custom property in a media query, so build-time interpolation is the
 * only single-home option.
 */
@media ${pa} {
  .card-body.has-media { flex-direction: row; align-items: stretch; gap: var(--sp-5); }
  /* The floor is a stacked-layout concern only: in two columns the media
   * column already stretches to the row's height, so reserving a minimum
   * would be reserving space the layout has given it anyway. */
  .card-media { flex: 0 1 22rem; align-items: center; min-block-size: 0; }
  /* Centred against the media column beside it, which .card-media's own
   * justify-content already is. Top-aligned, three short lines of copy sat
   * against the top of a 600px row with the SAS tiles floating at its middle
   * -- two columns that had visibly not been laid out together. In one column
   * this changes nothing: the copy hugs its content there (grow 0) and there
   * is no slack to centre within. */
  /*
   * \`safe center\`, and the keyword is the whole point rather than a nicety.
   *
   * Plain \`center\` distributes overflow to BOTH ends, and the start end of a
   * scroll container is not reachable -- scrollTop 0 is already the top, so
   * anything pushed above it can never be scrolled back to. On a landscape
   * phone (800x360) the copy column gets 111px and beam's content wants 213,
   * and the measurement was unambiguous: the column ran y=110..221 while its
   * <h2> sat at y=8 and the encryption callout at y=46, both off the top and
   * unreachable. The screen looked like it had lost its heading, which is
   * exactly what it had done.
   *
   * \`safe\` falls back to flex-start the moment the content overflows, so the
   * column reads from the top and the rest is a scroll away. Centred still,
   * whenever there is room to centre -- which is every other viewport in
   * check-layout.mjs, so this changes nothing anywhere it was already right.
   * Both engines were checked for support before this shipped.
   */
  .card-copy { flex: 1 1 20rem; justify-content: safe center; }

  /* Height stops being the scarce axis in two columns, so the QR goes back to
   * filling the width it is given. */
  /*
   * Left-aligned in its column rather than centred, and bigger than the base
   * rule allows -- there is width to spare in this layout and a larger code
   * is easier to scan across a desk.
   *
   * What it must NOT do is pin the inline size, which is what this rule used
   * to say (\`block-size: auto; inline-size: 100%\`). .card-media is
   * flex: 1 100 auto and gives way readily, so on a short window the box was
   * squeezed on the block axis while its width stayed nailed to the column:
   * check-layout.mjs measured 352x306 at 1280x620, in both engines. A QR is
   * square or it is a QR with a white band down one side, because
   * preserveAspectRatio pins the code to the corner of whatever box it is
   * handed. So this raises the block cap and lets aspect-ratio derive the
   * width, exactly as the base rule does.
   */
  .qr, .beam-stage { block-size: min(22rem, 100%); margin-inline: 0; }

  /* The scan panel, same treatment and the same reasoning. This is the branch
   * that exposed the bug: at 1280x620 the panel measured 352x302 in both
   * engines, its width nailed to the 22rem column while the block axis gave
   * way -- the 352x306 QR failure, on a different element, five hundred lines
   * further down the file. It stays centred rather than taking the QR's
   * margin-inline: 0, because a viewfinder centred in its column is where a
   * person expects to aim and a code pushed left is easier to hold a phone up
   * to. */
  .scan-panel { block-size: min(22rem, 100%); inline-size: auto; }
}


/*
 * The SAS tiles on a small phone, which is the one screen where trimming
 * padding was not enough.
 *
 * Four tiles at their full size, a two-line heading and the "if these differ"
 * warning together overflow a 390x844 viewport, and the warning is the half
 * that was being cut -- the sentence that tells a person what the screen is
 * FOR. Shrinking the tiles is the right trade: the emoji is decoration and the
 * word underneath is the content (see view.js), so the tile can lose a few
 * millimetres without losing anything a person reads aloud.
 */
@media (max-width: 26rem) {
  .sas-tile { padding: var(--sp-2); }
  .sas-emoji { font-size: var(--fs-1); }

  /*
   * h2 used to drop to --fs-0 here, and that inverted the type hierarchy on
   * the smallest screen in the app: the heading became the same size as body
   * text while .filename, at --fs-0 and weight 600, became the heaviest thing
   * on the card. So on a 390px phone the most prominent line on the verify
   * screen was the name of the file, and the sentence saying what to do with
   * it was not.
   *
   * The heading keeps --fs-1. The pixels it costs come from the tiles above
   * and from the copy column's line height instead, neither of which is
   * carrying the screen's meaning.
   */
  .card-copy { line-height: 1.45; }
}

/*
 * One rule, two ways to be short of room. This was declared identically in
 * both blocks above -- once against height and once against width -- which is
 * two places to edit a decision made once.
 *
 * The trade: the path badge keeps its label and loses its explanatory
 * sentence. That sentence is the third time the same fact is stated (the toast
 * announces the route, the badge names it, this explains it) and it was
 * costing 40px that the "if these differ" warning needed. The badge stays --
 * losing the fact would be a different and worse trade.
 */
@media ${gr}, (max-width: 26rem) {
  .path-info .note { display: none; }
}

/*
 * The touch branch.
 *
 * pointer: coarse rather than a width breakpoint, because every rule in here
 * answers a question about the input device and not about how many pixels it
 * has -- a tablet is as wide as a laptop and still has a thumb, and a laptop
 * with a touchscreen is still being driven by a trackpad.
 *
 * This block used to be one line, shrinking .dropzone's padding on the
 * reasoning that a touch device cannot drag and so should not spend the
 * landing screen's tallest element on a drag target. Half of that survives:
 * the box is still the tallest thing on the choose screen, and it still gets
 * less padding here. The other half turned out to be the wrong fix for the
 * right complaint. The box is not the problem -- it is the only element on
 * that screen big enough to hit without looking -- so it is now a button that
 * picks a file (view.js's dropzone()) rather than a smaller version of
 * something inert.
 */
@media (pointer: coarse) {
  /*
   * The box fills the slot it is given, instead of floating in the middle of
   * it.
   *
   * .card-media is a column flex container with justify-content: center, so
   * every child is centred on the BLOCK axis and takes only its content
   * height. That is right for the QR and the viewfinder, which have a fixed
   * shape and must keep it -- check-layout.mjs asserts the QR is square. It
   * was wrong for the dropzone, and the pictures are what showed it: at
   * 834x1112 the choose screen was a small dashed box adrift in ~600px of
   * white, and at 390x844 about 380px of it.
   *
   * The comment on .card-media's flex-shrink already claims this space gets
   * "filled with the screen's own subject", so "the dropzone becomes a target
   * worth aiming at". That was the intent and it never actually happened --
   * growing the media SLOT does nothing if the thing inside it is centred at
   * its natural height. This is the missing half, and it only matters on a
   * pointer that has to hit the thing: a mouse can click a 60px box exactly,
   * a thumb aims for whatever is biggest.
   *
   * Scoped to .dropzone, not to .card-media's children, precisely so the QR
   * and the camera keep the shape they are asserted to have.
   */
  /* :not(.scan-panel), because "fill the slot" is advice for a box with no
   * shape of its own. The scan panel is square and says so where it is
   * defined; letting flex-grow reach it settles the block axis before
   * aspect-ratio can, which is the same class of bug as the 352x306 QR seen
   * from the other end. Both halves are needed -- the padding here is still
   * right for it, only the flex is not. */
  .dropzone { padding: var(--sp-5) var(--sp-4); }
  .dropzone:not(.scan-panel) { flex: 1 1 auto; }

  /*
   * 2.75rem is 44px, which is the floor every platform guideline names, and a
   * floor is not a target. It is the size below which a control is reported
   * as a defect, reached by a thumb on a still phone held in two hands. 3rem
   * is 48px, which is Android's own recommendation and what the same thumb
   * wants while walking. The cost is 4px per button on a screen that has at
   * most three of them; the card's padding below gives back three times that.
   */
  .btn, .card-actions .btn { min-block-size: 3rem; }

  /*
   * The card gives up --sp-6 (32px) of padding for --sp-4 (16px), so 32px of
   * vertical room comes back to the content -- which on the verify screen is
   * most of what the "if these differ" warning needed at 390x844, and on
   * beam-receive is most of what put Accept below the fold.
   *
   * The border and radius stay. A card that loses its edge on a phone stops
   * reading as a single object holding one step of a flow, and the step rail
   * is drawn against this element's top edge.
   */
  .card { padding: var(--sp-4); gap: var(--sp-3); }
  .card-actions { padding-block-start: var(--sp-3); gap: var(--sp-2); }
}

/*
 * A phone on its side: the action bar stops spanning the card.
 *
 * The wide branch above puts the media beside the words, which is right, and
 * leaves the action bar underneath both -- which on a laptop is right too and
 * on a phone held sideways is the layout's last piece of waste. Measured at
 * 800x360 with everything else on this page already applied: a 64px row plus
 * a 12px gap, running the card's full 734px, holding two buttons 82px wide.
 * Seventy-six pixels of the scarce axis for 165px of content on the axis
 * there is plenty of.
 *
 * So the card becomes a grid here and the bar moves into the second column,
 * under the copy it belongs to. The media column then spans both rows and
 * takes the card's whole height: the scan panel and the QR went from 182px
 * square to 258, which on a 360px-tall screen is the difference between a
 * viewfinder you aim and a thumbnail you hunt for. The copy column gains the
 * height too (182 -> 194), and the divider .card-actions already draws now
 * separates the copy from its own buttons rather than cutting the card in
 * half beneath a camera.
 *
 * .card-body is \`display: contents\` rather than a third grid item, because
 * the two columns have to be siblings in ONE grid for the media to span the
 * action row -- a nested grid can only ever be as tall as the body box. The
 * div carries no semantics of its own, so removing its box removes nothing
 * else. Its \`.has-media\` class is what makes this safe to key on: a screen
 * with no media keeps its box and spans both columns, because a single copy
 * column pinned to the right half of a landscape card with an empty left half
 * is worse than the stacked layout it replaced.
 *
 * The rail is not a consideration here and that is worth stating, because it
 * looks like it should be: it is \`position: absolute\` against the card, so it
 * is not a grid item, does not occupy a row, and does not need one reserved.
 *
 * 18rem, not the 22rem the wide branch hands the media column. The box in it
 * is capped by aspect-ratio on the SHORT axis at this shape -- 258px of
 * height at 800x360 -- so every pixel of column past 258 was empty, and 22rem
 * (352) left 94 of them beside a copy column that was scrolling. 18rem (288)
 * still clears the box at every viewport in this band and hands the rest to
 * the copy, which is what takes the second column from 358px wide to 422 and
 * the action bar from two rows to one on the accept screen -- the one screen
 * in the app where the two buttons mean opposite things and must be read
 * together. Narrower than 18rem starts cropping the box itself.
 *
 * \`row-gap: 0\`, deliberately, and the spacing is not lost: .card-actions
 * carries its own padding-block-start above its divider, so a row gap here
 * would draw the line 12px away from what it separates. The column gap is the
 * wide branch's --sp-5, unchanged.
 */
@media ${ma} {
  /*
   * Three columns, not two, and the middle one is usually zero.
   *
   * It holds the controls slot -- beam-send's speed picker and its readout --
   * BESIDE the buttons rather than above them, and that placement was measured
   * rather than assumed. A third grid ROW was tried first and is worse by the
   * arithmetic that decides this: side by side the bottom row is
   * max(controls, buttons), stacked it is their sum. At 800x360 the controls
   * wrap to 108px and the bar is 64, so beside costs 108 and above costs 172 --
   * the copy column came out at 150px one way and 106 the other, against 194
   * with no controls at all.
   *
   * \`auto\` because on the seven screens with no controls the element is
   * \`display: none\` (.card-controls:empty), which takes it out of the grid and
   * collapses the track to nothing -- those screens lay out exactly as they did
   * before the slot existed. What is left over is one --sp-5 column gap
   * spanning nothing, and it stays there deliberately: 24px on the axis this
   * shape has 800 of is not worth a second grid definition, and the
   * alternative -- switching the template on a class -- puts a layout decision
   * back in view.js, which is the thing this slot exists to take out of it.
   *
   * The media track is a bare \`18rem\` and NOT \`minmax(0, 18rem)\`, which is the
   * bug this arrangement introduced and then fixed. A minmax with a zero floor
   * gives way to the auto track beside it, so the controls' max-content pulled
   * the media column down to 186px while the box in it stayed 258 tall: the
   * beam QR came out 186x258, which is the 352x306 failure the square
   * assertion in check-layout.mjs was written for, on a third element. Pinned,
   * the track cannot be the one that yields.
   *
   * 13rem on the button track for a reason worth a line, because it looks
   * arbitrary and one pixel decided it: Cancel and Details are both ghosts and
   * measure 82 and 83 with a --sp-3 gap, so 177px puts them on one row and
   * 176 stacks them into a 108px column. A floor of 11rem is 176.
   */
  .card {
    display: grid;
    grid-template-columns: 18rem auto minmax(13rem, 1fr);
    grid-template-rows: minmax(0, 1fr) auto;
    column-gap: var(--sp-5);
    row-gap: 0;
  }

  .card-body.has-media { display: contents; }
  .card-media { grid-area: 1 / 1 / 3 / 2; }
  .card-copy { grid-area: 1 / 2 / 2 / 4; }
  .card-controls { grid-area: 2 / 2 / 3 / 3; }
  .card-actions { grid-area: 2 / 3 / 3 / 4; }

  /* A row here, a column everywhere else: wrapping, because the track it is
   * in is about 190px at 800x360 and the label, the select and the "shown in
   * full N times" line want nearer 400. It comes out two or three lines deep,
   * which is the height this branch pays and the reason it is beside the
   * buttons rather than above them -- see the arithmetic above.
   *
   * Baseline rather than centre, for .masthead's reason: these are pieces of
   * type and a shared baseline is what makes them read as one object rather
   * than as a control with a caption parked near it. No border of its own --
   * the divider belongs to .card-actions and stays with the buttons, because
   * this slot is not a second action bar and must not grow to look like one. */
  .card-controls {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: baseline;
    gap: var(--sp-2) var(--sp-3);
    padding-block-start: var(--sp-4);
  }

  /*
   * Three buttons wrapped this bar onto two rows at 800x360 and took 59px out
   * of the copy column beside it; two fit on one. "Take a photo" is the one to
   * go: it is a second way to start a send, next to "Send a file" which is the
   * first, and framing a photo is a thing done with the phone upright. It
   * comes back the moment the phone is turned back -- this hides a duplicate
   * route, never the only route to anything.
   *
   * A rule here rather than a branch in view.js's choose(), so the vnode shape
   * stays identical across orientations -- the same discipline this component
   * already holds for pointer. \`display: none\` and not visibility or opacity:
   * it has to leave the tab order and the accessibility tree with the pixels,
   * or a rotation leaves a control that can be focused and cannot be seen.
   */
  #btn-photo { display: none; }
  /*
   * The filename goes last on the beam screens, and the reason is what the
   * first screenshot of this branch showed.
   *
   * beam-send is the one screen whose copy still overflows here, by 79px, and
   * the part that fell below the fold was \`.callout.warn\` -- "keep this code
   * on screen until the other device says it is done", which view.js calls the
   * single most important instruction on the screen and spends its most
   * prominent element on. A safety instruction being the one thing you have to
   * scroll to find is the exact shape of the bug check-layout.mjs was written
   * after (Accept, 99px below the fold), arriving by a different route.
   *
   * So in landscape the filename yields its place to it. Of everything in that
   * column the filename is the only line that is purely informational -- the
   * heading names the screen, both callouts protect the person reading them,
   * and the file is one they chose seconds ago. It is still there, one short
   * scroll down, and nothing is clipped above the scroll origin (\`safe center\`
   * on the copy column, and the clippedAbove assertion holding the line).
   *
   * \`order\` rather than a different vnode order, because the reading order is
   * right in portrait: the comment in view.js explains that the instruction
   * belongs against the action bar where the eye returns, and in a stacked
   * layout it does. This branch is the one where the eye returns to a bar in
   * the next column instead.
   *
   * The CHILD combinator is doing real work: every other .filename in the app
   * is nested inside a .stack, so this reaches the two beam screens and
   * nothing else. Both want it -- on beam-receive the line it moves ahead of
   * is the progress readout.
   */
  .card-copy > .filename { order: 1; }


  /* No media: one column across all three tracks, and the bar back underneath
   * it. The sibling combinator rather than a second class, because
   * \`has-media\` already records the fact and a screen should not have to say
   * it twice. */
  .card-body:not(.has-media) { grid-area: 1 / 1 / 2 / 4; }
  .card-body:not(.has-media) ~ .card-actions { grid-area: 2 / 1 / 3 / 4; }
}

/* Absent from the pre-restyle stylesheet entirely: every transition and the
 * pairing shimmer are motion, and someone who has asked the OS to reduce
 * motion should get a UI that still communicates state (colour, text) without
 * moving anything to do it. */
@media (prefers-reduced-motion: reduce) {
  * { transition-duration: 0s !important; animation-duration: 0s !important; animation-iteration-count: 1 !important; }
  .bar.indeterminate .bar-fill { animation: none; width: 40%; }
}
`;var Gl="This browser cannot stream downloads to disk, so received files are held in memory until complete. Expect trouble much above a gigabyte.",sn=new Set(["send","receive","verify","transfer","beam-send","beam-receive"]),Ql=()=>typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,ba=(()=>{try{let e=new CSSStyleSheet;return e.replaceSync(br),e}catch{return null}})(),an=class extends HTMLElement{static get observedAttributes(){return["base-url"]}constructor(){super();let t=this.attachShadow({mode:"open"});this._root=t,this._styleEl=null,ba?t.adoptedStyleSheets=[ba]:(this._styleEl=document.createElement("style"),this._styleEl.textContent=br),this._dialogNode=document.createElement("dialog"),this._dialogNode.className="sheet",this._dialogPrev=null,this._dialogNode.addEventListener("close",()=>{this._state.modal&&this._setState({modal:null})}),this._baseURL=this.getAttribute("base-url")||null,this._onPaste=null,this._onHashChange=null,this._onPointerChange=null,this._wakeLock=null,this._wakeLockPending=!1,this._onVisibility=null,this._onPopState=null,this._backGuard=!1,this._popSuppressed=!1,this._backArmed=!1,this._backTimer=null,this._sessionEnded=!1,this._teardown=null,this._myPath=null,this._peerPath=null,this._nextControlIndex=null,this._onVerifyConfirm=null,this._onOfferAccept=null,this._onOfferDecline=null,this._copyTimer=void 0,this._toastTimer=void 0,this._beam=null,this._beamCycle=0,this._dispatch=this._dispatch.bind(this),this._state=this._initialState(),this._prev=null}_pathDebugEnabled(){try{return new URLSearchParams(location.search).get("debug")==="path"}catch{return!1}}async _publishPath(t,n){this._publishPathDebug(t);let r=o=>{if(this._myPath=o,this._sessionEnded)return;this._announcePath(rr(o,this._peerPath??"unknown"));let a=this._nextControlIndex;a&&Ds({channel:t.channel,key:t.session.sendKey,nextControlIndex:a,path:o}).catch(()=>{})};if(n>lr){r(await t.path());return}t.path().then(r,()=>{})}_mergePeerPath(t){this._peerPath=t,!this._sessionEnded&&this._announcePath(rr(this._myPath??"unknown",t))}_publishPathDebug(t){this._pathDebugEnabled()&&t.pathEvidence().then(n=>{this._sessionEnded||this._setState({pathDebug:JSON.stringify(n,null,2)})},()=>{})}_initialState(){return{screen:"choose",role:null,status:"",error:null,code:"",qrNode:null,qrIsLink:!1,path:null,pathDebug:null,cameraAvailable:ze(),rtcAvailable:typeof RTCPeerConnection<"u",capabilityNote:st().canStreamToDisk()?null:Gl,coarse:Ql(),sas:"",sasWords:[],offer:null,file:null,progress:null,outcome:null,message:null,digest:"",dragging:!1,copied:null,pairing:!1,busy:!1,manualError:null,mode:"p2p",beamNode:null,dialogNode:this._dialogNode,modal:null,toast:null,beam:null}}attributeChangedCallback(t,n,r){t==="base-url"&&(this._baseURL=r||null)}connectedCallback(){window.isSecureContext||this._fail(new Error("This page must be served over HTTPS: WebCrypto and the camera are unavailable otherwise.")),this._render();let t=0,n=r=>{this._state.dragging!==r&&this._setState({dragging:r})};if(this.addEventListener("dragenter",r=>{this._state.screen==="choose"&&(r.preventDefault(),t++,n(!0))}),this.addEventListener("dragover",r=>{this._state.screen==="choose"&&r.preventDefault()}),this.addEventListener("dragleave",()=>{this._state.screen==="choose"&&(t=Math.max(0,t-1),t===0&&n(!1))}),this.addEventListener("drop",r=>{if(this._state.screen!=="choose")return;r.preventDefault(),t=0,n(!1);let o=r.dataTransfer?.files?.[0];o&&this._startSend(o).catch(a=>this._fail(a))}),this._onPaste=r=>{if(this._state.screen!=="choose")return;let o=r.composedPath()[0];if(o instanceof HTMLElement&&(o.isContentEditable||o.closest("input, textarea")))return;let a=[...r.clipboardData?.files??[]][0];a&&this._startSend(a).catch(s=>this._fail(s))},document.addEventListener("paste",this._onPaste),this._consumeHashCode(),this._onHashChange=()=>this._consumeHashCode(),window.addEventListener("hashchange",this._onHashChange),typeof document<"u"&&(this._onVisibility=()=>this._syncWakeLock(),document.addEventListener("visibilitychange",this._onVisibility)),this._onPopState=()=>{if(this._popSuppressed){this._popSuppressed=!1;return}sn.has(this._state.screen)&&this._onBackGesture()},window.addEventListener("popstate",this._onPopState),typeof matchMedia=="function"){let r=matchMedia("(pointer: coarse)"),o=()=>this._setState({coarse:r.matches});r.addEventListener("change",o),this._onPointerChange={query:r,handler:o}}}sendFile(t){return this._state.screen!=="choose"?(this._toast(`Finish this transfer before sending ${t.name}`),!1):(this._startSend(t).catch(n=>this._fail(n)),!0)}startAction(t){let r={receive:this._state.rtcAvailable?"receive:scan":"beam:scan",send:this._state.rtcAvailable?"send:pick":"beam:pick",photo:"send:photo"}[t];return r?this._state.screen!=="choose"?(this._toast("Finish this transfer first."),!1):(this._dispatch(r),!0):(console.warn("qrdrop: unknown launch action",t),!1)}_consumeHashCode(){if(this._state.screen!=="choose")return;let t=location.hash.slice(1);if(t){history.replaceState(null,"",location.pathname+location.search);try{this._startReceive(Ot(t)).catch(n=>this._fail(n))}catch{}}}disconnectedCallback(){if(this._onPaste&&document.removeEventListener("paste",this._onPaste),this._onPaste=null,this._onHashChange&&window.removeEventListener("hashchange",this._onHashChange),this._onHashChange=null,this._onVisibility&&document.removeEventListener("visibilitychange",this._onVisibility),this._onVisibility=null,this._onPopState&&window.removeEventListener("popstate",this._onPopState),this._onPopState=null,this._syncBackGuard(),this._disarmBack(),this._releaseWakeLock(),this._onPointerChange){let{query:t,handler:n}=this._onPointerChange;t.removeEventListener("change",n)}this._onPointerChange=null;try{this._teardown?.()}catch{}this._teardown=null,clearTimeout(this._copyTimer),clearTimeout(this._toastTimer)}_dispatch(t,n){switch(t){case"send:pick":return this._pickFile();case"send:photo":return this._pickFile(void 0,{accept:"image/*",capture:"environment"});case"receive:scan":return void this._beginScan().catch(r=>this._fail(r));case"beam:pick":return this._pickFile(r=>this._startBeamSend(r));case"beam:scan":return void this._startBeamReceive();case"beam:fps":return this._setBeamFps(n);case"manual:submit":return this._submitManualCode(n);case"verify:confirm":return this._onVerifyConfirm?.();case"verify:reject":return this._rejectVerification();case"offer:accept":return this._onOfferAccept?.();case"offer:decline":return this._onOfferDecline?.();case"modal:open":return this._setState({modal:n});case"modal:close":return this._setState({modal:null});case"cancel":return this._reset();case"restart":return this._reset();case"copy":return void this._copy(n);default:throw new Error(`Unknown intent: ${t}`)}}_setState(t){let n=this._state.screen;"screen"in t&&t.screen!==n&&(t={error:null,modal:null,...t}),t.screen==="done"&&(this._sessionEnded=!0),this._state={...this._state,...t},this._render(),this._state.screen!==n&&(this._focusScreenHeading(),this._syncWakeLock(),this._syncBackGuard(),this._disarmBack())}_syncWakeLock(){this.isConnected&&sn.has(this._state.screen)&&(typeof document>"u"||document.visibilityState==="visible")?this._acquireWakeLock():this._releaseWakeLock()}_acquireWakeLock(){if(this._wakeLock||this._wakeLockPending)return;let t=navigator.wakeLock;t&&(this._wakeLockPending=!0,t.request("screen").then(n=>{if(this._wakeLockPending=!1,!this.isConnected||!sn.has(this._state.screen)){n.release?.().catch(()=>{});return}this._wakeLock=n,n.addEventListener?.("release",()=>{this._wakeLock===n&&(this._wakeLock=null)})}).catch(()=>{this._wakeLockPending=!1}))}_releaseWakeLock(){let t=this._wakeLock;this._wakeLock=null,t?.release?.().catch(()=>{})}_syncBackGuard(){let t=this.isConnected&&sn.has(this._state.screen);if(t!==this._backGuard){if(t){history.pushState({qrdropGuard:!0},""),this._backGuard=!0;return}this._backGuard=!1,this._disarmBack(),history.state?.qrdropGuard&&(this._popSuppressed=!0,history.back())}}_onBackGesture(){if(history.pushState({qrdropGuard:!0},""),this._backGuard=!0,this._backArmed){this._disarmBack(),this._reset();return}this._backArmed=!0,this._toast("Press back again to cancel."),this._backTimer=setTimeout(()=>{this._backArmed=!1},4e3)}_disarmBack(){clearTimeout(this._backTimer),this._backArmed=!1}_render(){this._prev=dr(this._root,la(this._state,this._dispatch),this._prev),this._styleEl&&this._root.append(this._styleEl),this._dialogPrev=dr(this._dialogNode,ha(this._state,this._dispatch),this._dialogPrev);let t=this._state.modal!==null;t&&!this._dialogNode.open?this._dialogNode.showModal():!t&&this._dialogNode.open&&this._dialogNode.close()}_focusScreenHeading(){let t=this._root.getElementById(`screen-${this._state.screen}`)?.querySelector("h2");t instanceof HTMLElement&&t.focus()}_announcePath(t){let n=t!==this._state.path;this._setState({path:t}),n&&t!=="unknown"&&this._toast(rn(t).label)}_toast(t){clearTimeout(this._toastTimer),this._setState({toast:t}),this._toastTimer=setTimeout(()=>this._setState({toast:null}),4e3)}_fail(t){console.error(t),this._setState({error:t instanceof Error?t.message:String(t),modal:"error"})}_endSession(){this._sessionEnded=!0;try{this._teardown?.()}catch{}this._teardown=null}_failTransfer(t){this._endSession(),this._setState({screen:"done",outcome:"failed",file:null,digest:"",message:null}),this._fail(t)}_rejectVerification(){this._state.screen!=="verify"||this._state.role!=="sender"||(this._onVerifyConfirm=null,this._onOfferAccept=null,this._onOfferDecline=null,this._endSession(),this._setState({screen:"done",outcome:"mismatch",file:null,digest:"",message:null,path:null}))}_reset(t){try{this._teardown?.()}catch{}this._teardown=null,this._beam=null,this._beamCycle=0,this._onVerifyConfirm=null,this._onOfferAccept=null,this._onOfferDecline=null,this._myPath=null,this._peerPath=null,this._nextControlIndex=null,clearTimeout(this._copyTimer),clearTimeout(this._toastTimer),this._setState({screen:"choose",role:null,status:"",code:"",qrNode:null,qrIsLink:!1,sas:"",sasWords:[],offer:null,file:null,progress:null,outcome:null,message:null,digest:"",pairing:!1,copied:null,dragging:!1,mode:"p2p",beamNode:null,beam:null,busy:!1,manualError:null,path:null,pathDebug:null,error:t??null,modal:t?"error":null})}async _copy(t){let n=t==="code"?this._state.code:this._state.digest;if(!n)return;let r=await ua(n);clearTimeout(this._copyTimer),clearTimeout(this._toastTimer),this._setState({copied:r?t:`${t}-failed`}),this._copyTimer=setTimeout(()=>this._setState({copied:null}),1500)}_submitManualCode(t){try{let n=Ot(t);this._teardown?.(),this._setState({manualError:null}),this._startReceive(n).catch(r=>this._fail(r))}catch(n){console.error(n),this._setState({manualError:n instanceof Error?n.message:String(n)})}}_attachReceiver({room:t,onProgress:n,onFileDone:r,onOffer:o=()=>{throw new Error("Peer offered a file while we were sending one")}}){let a=Cs(),s=0,i=()=>s++;this._nextControlIndex=i;let c=Os({channel:t.channel,sendKey:t.session.sendKey,recvKey:t.session.recvKey,control:a,nextControlIndex:i,onOffer:o,onProgress:n,onFileDone:r,onError:f=>this._failTransfer(f),onPeerPath:f=>this._mergePeerPath(f),createSink:st().createSink});t.onFrame(f=>{c.handleFrame(f).catch(l=>this._fail(l))});let h=this._teardown;return this._teardown=()=>{c.cancel().catch(()=>{}),h?.()},{control:a,nextControlIndex:i,receiver:c}}_trackProgress(t){return n=>{let r="sent"in n?n.sent:n.received;this._setState({progress:{moved:r,total:n.total},status:`${t} ${ne(r)} of ${ne(n.total)}`})}}async _establish({secret:t,role:n}){let[r,o]=await Promise.all([Nr(t),zr(t)]),a=await _s({topic:r,password:o,secret:t,role:n,onStatus:s=>this._setState({status:s})});return this._sessionEnded=!1,this._teardown=()=>a.close(),a.onPeerLeave(()=>{this._sessionEnded||this._fail(new Error(nn))}),a}async _startSend(t){let n=Ir(),r=this._baseURL?Hr(n,this._baseURL):Bt(n),o=Bt(n);this._setState({screen:"send",role:"sender",code:o,qrNode:pn(r),qrIsLink:!!this._baseURL,status:"Starting\u2026",pairing:!0,file:{name:t.name,size:t.size}});let a=await this._establish({secret:n,role:"host"});if(this._setState({pairing:!1}),t.size>Tt&&await a.isRelayed())throw a.close(),new Error(Ls({name:t.name,size:t.size,limit:Tt}));let{control:s,nextControlIndex:i,receiver:c}=this._attachReceiver({room:a}),h=!1;a.onPeerLeave(()=>{c.settled().then(()=>{if(this._sessionEnded)return;let l=new Error(nn);s.fail(l),h||this._fail(l)})}),await this._publishPath(a,t.size),this._setState({screen:"verify",sas:a.session.sas,sasWords:a.session.sasWords});let f=Mt(t);this._onVerifyConfirm=async()=>{this._onVerifyConfirm=null,h=!0,this._setState({screen:"transfer",status:"",progress:{moved:0,total:t.size}});try{let l=await Is({channel:a.channel,key:a.session.sendKey,file:f,fileSeq:0,control:s,nextControlIndex:i,onProgress:this._trackProgress("Sent")});if(this._sessionEnded=!0,l.declined){this._setState({screen:"done",outcome:"declined"});return}this._setState({screen:"done",outcome:"sent",digest:l.digest})}catch(l){this._failTransfer(l)}finally{a.close()}}}async _startReceive(t){this._setState({screen:"receive",role:"receiver",status:"Starting\u2026",pairing:!0});let n=await this._establish({secret:t,role:"guest"});this._setState({pairing:!1});let{receiver:r}=this._attachReceiver({room:n,onOffer:({manifest:o,accept:a,decline:s})=>{(async()=>{if(o.size>Tt&&await n.isRelayed()){await s(),this._setState({screen:"done",outcome:"too-large",message:Ns({name:o.name,size:o.size,limit:Tt})});return}this._onOfferDecline=async()=>{this._onOfferDecline=null,this._onOfferAccept=null;try{await s()}catch(i){this._fail(i)}this._reset()},this._onOfferAccept=async()=>{this._onOfferAccept=null,this._onOfferDecline=null,this._setState({busy:!0});let i;try{i=await a()}catch(c){return this._setState({busy:!1}),this._failTransfer(c)}if(!this._sessionEnded){if(!i)return this._reset("The save dialog was closed without choosing a location, so nothing was saved.");this._setState({screen:"transfer",busy:!1,file:{name:o.name,size:o.size},status:i.streaming?"":"This browser buffers the file in memory before saving it.",progress:{moved:0,total:o.size}})}},await this._publishPath(n,o.size),this._setState({offer:{name:o.name,size:o.size}})})().catch(i=>this._fail(i))},onProgress:this._trackProgress("Received"),onFileDone:o=>{this._sessionEnded=!0,this._setState({screen:"done",outcome:"received",file:{name:o.name,size:o.size},digest:o.digest}),n.close()}});n.onPeerLeave(()=>{r.settled().then(()=>{this._sessionEnded||this._state.screen!=="verify"&&this._state.screen!=="transfer"||this._failTransfer(new Error(nn))})}),this._setState({screen:"verify",sas:n.session.sas,sasWords:n.session.sasWords})}_pickFile(t,n){let r=t??(a=>this._startSend(a)),o=Object.assign(document.createElement("input"),{type:"file"});n?.accept&&o.setAttribute("accept",n.accept),n?.capture&&o.setAttribute("capture",n.capture),o.addEventListener("change",()=>{let a=o.files?.[0];a&&r(a).catch(s=>this._fail(s))},{once:!0}),o.click()}async _startBeamSend(t){this._setState({screen:"beam-send",mode:"beam",role:"sender",file:{name:t.name,size:t.size},status:"Preparing the code\u2026",beam:{fps:De,loops:0,solved:0,blocks:0,eta:null}});let n=await Vs({source:Mt(t),fps:De,onTick:({loops:o})=>{let a=this._state.beam;!a||a.loops===o||this._setState({beam:{...a,loops:o}})}});this._beam=n,this._teardown=()=>n.stop();let{manifest:r}=n;this._beamCycle=n.cycleLength,this._setState({beamNode:n.canvas,beam:{fps:De,loops:0,solved:0,blocks:n.frameCount,eta:Math.round(n.cycleLength/De)},status:r.encoding==="gzip"?`Compressed to ${ne(r.encodedSize)} from ${ne(r.size)}.`:`${ne(r.encodedSize)} to send.`})}_setBeamFps(t){this._beam?.setFps(t);let n=this._state.beam;if(!n)return;let r=this._beamCycle?Math.round(this._beamCycle/t):n.eta;this._setState({beam:{...n,fps:t,eta:r}})}async _startBeamReceive(){if(this._setState({screen:"beam-receive",mode:"beam",role:"receiver",status:ze()?"Point the camera at the other screen.":"",beam:{fps:0,loops:0,solved:0,blocks:0,eta:null}}),!ze())return;let t=Date.now(),n=this._root.getElementById("beam-scanner"),r=null,o=!1,a=null,s=null,i=async()=>{if(!r||!a||!s)return;let h=s,f=a;a=null;try{await r.write(await f()),await r.close(),o=!0}catch(l){return await r.abort(),this._failTransfer(l)}this._sessionEnded=!0,this._setState({screen:"done",outcome:"received",file:{name:r.name,size:h.size},digest:h.sha256})},c=Js({video:n,onManifest:h=>{s=h,this._onOfferDecline=()=>{this._onOfferDecline=null,this._onOfferAccept=null,this._reset()},this._onOfferAccept=async()=>{this._onOfferAccept=null,this._onOfferDecline=null,this._setState({busy:!0});try{r=await st().createSink({t:"manifest",seq:0,chunks:h.blocks,name:h.name,size:h.size,mime:h.mime})}catch(f){return this._setState({busy:!1}),this._failTransfer(f)}if(!r)return this._reset("The save dialog was closed without choosing a location, so nothing was saved.");this._setState({offer:null,modal:null,status:"",busy:!1}),await i()},this._setState({offer:{name:h.name,size:h.size},modal:"beam-offer"})},onProgress:({solved:h,blocks:f})=>{let l=this._state.beam;if(!l||l.solved===h)return;let d=(Date.now()-t)/1e3,u=h>0&&d>4?Math.round((f-h)*(d/h)):null;this._setState({beam:{...l,solved:h,blocks:f,eta:u},progress:{moved:h,total:f}})},onComplete:h=>{a=h,this._setState({status:"Got the whole file. Saving\u2026"}),i().catch(f=>this._failTransfer(f))},onError:h=>this._failTransfer(h)});this._teardown=()=>{c.stop(),r&&!o&&r.abort()}}async _beginScan(){if(this._setState({screen:"receive",role:"receiver",status:ze()?"Point the camera at the code.":mr}),!ze())return;let t=new AbortController;this._teardown=()=>t.abort();try{let n=this._root.getElementById("scanner"),r=await gn({video:n,signal:t.signal});this._startReceive(Ot(r)).catch(o=>this._fail(o))}catch(n){(!(n instanceof Error)||n.name!=="AbortError")&&this._fail(n)}}};function wr(e="qr-drop"){customElements.get(e)||customElements.define(e,an)}function wa(e,t,n,r){let o=document.getElementById(e),a=document.getElementById(t),s=a?.querySelector(".sheet-body");!o||!a||!n||!s||(r==="move"?(n.removeAttribute("hidden"),s.append(...n.childNodes),n.remove()):s.append(n.cloneNode(!0)),o.addEventListener("click",()=>{a.showModal()(a.querySelector("h2"))?.focus()}))}function ya(){wa("how-open","how-dialog",document.querySelector(".how"),"copy"),wa("protect-open","protect-dialog",document.getElementById("protect-body"),"move")}var va="qrdrop-share",yr="./__shared__",ka="x-qrdrop-filename",vr="shared";if(window.top!==window.self)throw document.body.textContent="qrdrop will not run inside a frame.",new Error("Refusing to run in a frame");wr();document.querySelector("qr-drop")?.setAttribute("base-url",location.origin+location.pathname);ya();"serviceWorker"in navigator&&navigator.serviceWorker.register("sw.js",{scope:"./"}).catch(()=>{});Vl();async function Vl(){if(new URLSearchParams(location.search).get(vr)!=="1")return;let t=new URL(location.href);t.searchParams.delete(vr),history.replaceState(null,"",t.pathname+t.search+t.hash);try{let n=await caches.open(va),r=await n.match(yr);if(!r)return;await n.delete(yr);let o=decodeURIComponent(r.headers.get(ka)||"shared-file"),a=r.headers.get("content-type")||"application/octet-stream",s=new File([await r.blob()],o,{type:a});document.querySelector("qr-drop")?.sendFile(s)}catch{}}
/*! Bundled license information:

@noble/secp256k1/index.js:
  (*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) *)
*/
//# sourceMappingURL=main.EB5Y3U3H.js.map
