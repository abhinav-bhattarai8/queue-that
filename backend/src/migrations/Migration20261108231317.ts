import { Migration } from '@mikro-orm/migrations';

export class Migration20261108231317 extends Migration {

  override name = 'Migration20261108231317';

  override up(): void | Promise<void> {
    this.addSql(`create table "workflow" ("id" serial primary key, "name" varchar(255) not null, "description" varchar(255) null, "enabled" boolean not null, "trigger_type" varchar(255) not null, "trigger_config" jsonb null, "webhook_id" varchar(255) null);`);
    this.addSql(`alter table "workflow" add constraint "workflow_webhook_id_unique" unique ("webhook_id");`);

    this.addSql(`create table "step" ("id" serial primary key, "workflow_id" int not null, "position" int not null, "node_type" varchar(255) not null, "config" jsonb null);`);

    this.addSql(`alter table "step" add constraint "step_workflow_id_foreign" foreign key ("workflow_id") references "workflow" ("id");`);
  }

}
