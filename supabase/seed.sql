-- MV Imóveis — dados iniciais de referência
-- Rodar depois de supabase/schema.sql. Baseado apenas em informações
-- confirmadas (bio do Instagram @imoveis_mv e SDD do projeto).
--
-- Não inclui imóveis de exemplo: o catálogo deve ser populado pelo
-- administrador, com dados reais, através do painel em /admin.

insert into public.cities (name) values
  ('Jaboatão dos Guararapes')
on conflict (name) do nothing;

insert into public.neighborhoods (city_id, name)
select id, 'Piedade' from public.cities where name = 'Jaboatão dos Guararapes'
on conflict (city_id, name) do nothing;
