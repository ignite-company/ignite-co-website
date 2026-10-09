-- Add this to the selected Supabase project when ready to activate server-side form capture.
create table if not exists public.ignite_website_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  company text not null,
  email text not null,
  phone text not null,
  industry text not null,
  source text not null default 'ignite-website',
  status text not null default 'new'
);
create index if not exists ignite_website_leads_created_at_idx on public.ignite_website_leads(created_at desc);
alter table public.ignite_website_leads enable row level security;
-- No anon/user RLS policies. Only the service role can write/read through the server-side API.