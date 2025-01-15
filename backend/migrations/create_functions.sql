create or replace function create_tasks_table()
returns void language plpgsql security definer as $$
begin
  create table if not exists tasks (
    id serial primary key,
    name varchar not null,
    completed boolean default false,
    created_at timestamp default now()
  );
end;
$$;
