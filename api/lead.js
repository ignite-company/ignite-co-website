// Server-side lead capture. Configure SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in Vercel.
// Service credentials must never be exposed in public source or browser code.
module.exports = async function handler(req,res){
  if(req.method!=='POST'){res.setHeader('Allow','POST');return res.status(405).json({error:'Method not allowed'})}
  const body=req.body||{};
  if(body.website)return res.status(200).json({ok:true}); // honeypot
  const val=(key,max)=>String(body[key]||'').trim().slice(0,max);
  const name=val('name',120),company=val('company',120),email=val('email',254),phone=val('phone',30),industry=val('industry',90);
  if(!name||!company||!email||!phone||!industry||!/^\S+@\S+\.\S+$/.test(email))return res.status(400).json({error:'Complete all required fields.'});
  const base=process.env.SUPABASE_URL,key=process.env.SUPABASE_SERVICE_ROLE_KEY;
  if(!base||!key)return res.status(503).json({error:'Lead storage not configured yet.'});
  try{const url=base.replace(/\/$/,'')+'/rest/v1/ignite_website_leads';const response=await fetch(url,{method:'POST',headers:{apikey:key,Authorization:'Bearer '+key,'Content-Type':'application/json',Prefer:'return=minimal'},body:JSON.stringify({name,company,email,phone,industry,source:'ignite-website'})});if(!response.ok){console.error('Supabase write rejected:',response.status);return res.status(502).json({error:'Could not save lead.'})}return res.status(200).json({ok:true})}catch(err){console.error('Lead storage unavailable');return res.status(502).json({error:'Temporarily unavailable.'})}
};