import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUserAndAppSetting1685475315896 implements MigrationInterface {
    name = 'AddUserAndAppSetting1685475315896'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "app_setting" ("Key" text NOT NULL, "Value" text NOT NULL, CONSTRAINT "PK_4893d42e0537075f24144014d21" PRIMARY KEY ("Key"))`);
        await queryRunner.query(`CREATE TABLE "user" ("Id" uuid NOT NULL DEFAULT uuid_generate_v4(), "IdExternal" text, "FirstName" text NOT NULL, "LastName" text NOT NULL, "Email" text NOT NULL, CONSTRAINT "PK_1e4be10b13490bd87f4cc30c142" PRIMARY KEY ("Id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "app_setting"`);
    }

}
