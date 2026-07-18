const fs=require('fs'),path=require('path');
const ROOT=path.join(__dirname,'..');const SKIP=new Set(['node_modules','scripts','docs','.claude','.git']);
function html(d,b=''){let o=[];for(const n of fs.readdirSync(d)){if(SKIP.has(n))continue;const a=path.join(d,n);if(fs.statSync(a).isDirectory())o=o.concat(html(a,b+n+'/'));else if(n.endsWith('.html'))o.push(b+n);}return o;}
let issues=0;
html(ROOT).forEach(p=>{
  const s=fs.readFileSync(path.join(ROOT,p),'utf8');
  const title=(s.match(/<title>([^<]*)<\/title>/)||[])[1]||'';
  const desc=(s.match(/name="description"\s+content="([^"]*)"/)||[])[1]||'';
  const canon=/rel="canonical"/.test(s);
  const og=/property="og:title"/.test(s);
  let ld=0,ldErr=0;
  const re=/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;let m;
  while((m=re.exec(s))){ld++;try{JSON.parse(m[1]);}catch(e){ldErr++;}}
  const flags=[];
  if(!title||title.length>62)flags.push('title('+title.length+')');
  if(!desc||desc.length>158)flags.push('desc('+desc.length+')');
  if(p!=='404.html'&&!canon)flags.push('no-canonical');
  if(p!=='404.html'&&!og)flags.push('no-og');
  if(ldErr)flags.push('BAD-JSONLD');
  if(flags.length){issues++;console.log('  ⚠ '+p+' :: '+flags.join(', ')+'  ['+ld+' ld]');}
  else console.log('  ✓ '+p+'  ['+ld+' json-ld, title '+title.length+', desc '+desc.length+']');
});
console.log(issues?('\n'+issues+' page(s) with warnings'):'\nAll pages have valid SEO metadata + JSON-LD');
