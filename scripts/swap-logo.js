const fs=require('fs'),path=require('path');
const ROOT=path.join(__dirname,'..');const SKIP=new Set(['node_modules','scripts','docs','.git']);
function htmls(d,b=''){let o=[];for(const n of fs.readdirSync(d)){if(SKIP.has(n))continue;const a=path.join(d,n);if(fs.statSync(a).isDirectory())o=o.concat(htmls(a,b+n+'/'));else if(n.endsWith('.html'))o.push(b+n);}return o;}
// match the logo-light + logo-dark img pair (nav or footer) and replace with mark + wordmark
const re=/<img class="logo-light"[\s\S]*?class="logo-dark"[\s\S]*?\/>/g;
const rep=`<img class="brand-mark" src="/assets/logo-mark.svg" alt="" width="30" height="30" />
        <span class="brand-word">gantts<b>.app</b></span>`;
let n=0,files=0;
htmls(ROOT).forEach(p=>{
  const fp=path.join(ROOT,p);let s=fs.readFileSync(fp,'utf8');
  const m=s.match(re);
  if(m){ s=s.replace(re,rep); fs.writeFileSync(fp,s); n+=m.length; files++; }
});
console.log('replaced',n,'logo blocks across',files,'files');
