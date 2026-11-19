import { Migration } from '@mikro-orm/migrations';

export class Migration20261119203325 extends Migration {

  override name = 'Migration20261119203325';

  override up(): void | Promise<void> {
    this.addSql(`alter table "public"."workflow" add column "last_triggered_at" timestamptz null;`);
  }
}

module.exports = Migration20261119203325;
