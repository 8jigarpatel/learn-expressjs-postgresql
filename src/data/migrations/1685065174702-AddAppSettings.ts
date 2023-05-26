import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddAppSettings1685065174702 implements MigrationInterface {
  name = 'AddAppSettings1685065174702';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "app_setting" ("key" text NOT NULL, "value" text NOT NULL, CONSTRAINT "PK_0d66bfb0d9f93124a4549d21af0" PRIMARY KEY ("key"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "app_setting"`);
  }
}
