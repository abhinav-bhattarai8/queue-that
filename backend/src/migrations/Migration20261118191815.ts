import { Migration } from '@mikro-orm/migrations';

class Migration20261118191815 extends Migration {

  override name = 'Migration20261118191815';

  override up(): void | Promise<void> {
    this.addSql(`create table "workflow" ("id" serial primary key, "name" varchar(255) not null, "description" varchar(255) null, "enabled" boolean not null, "trigger_type" varchar(255) not null, "trigger_config" jsonb null, "webhook_id" varchar(255) null);`);
    this.addSql(`alter table "workflow" add constraint "workflow_webhook_id_unique" unique ("webhook_id");`);

    this.addSql(`create table "step" ("id" serial primary key, "workflow_id" int not null, "position" int not null, "node_type" varchar(255) not null, "config" jsonb null);`);

    this.addSql(`create table "execution-log" ("id" serial primary key, "workflow_id" int not null, "status" text not null, "output" jsonb null, "created_at" timestamptz not null);`);
    this.addSql(`alter table "execution-log" add constraint "execution-log_status_check" check ("status" in ('SUCCESS', 'PENDING', 'FAILED'));`);

    this.addSql(`alter table "step" add constraint "step_workflow_id_foreign" foreign key ("workflow_id") references "workflow" ("id");`);

    this.addSql(`alter table "execution-log" add constraint "execution-log_workflow_id_foreign" foreign key ("workflow_id") references "workflow" ("id");`);
  }

}

module.exports = Migration20261118191815;
