-- Adiciona a finalidade do imóvel sem alterar os anúncios existentes.
-- Imóveis já cadastrados passam a ser considerados disponíveis para venda.

do $$
begin
  if not exists (
    select 1 from pg_type where typname = 'property_transaction'
  ) then
    create type public.property_transaction as enum ('venda', 'aluguel');
  end if;
end
$$;

alter table public.properties
  add column if not exists transaction_type public.property_transaction
  not null default 'venda';

create index if not exists properties_transaction_type_idx
  on public.properties(transaction_type);
