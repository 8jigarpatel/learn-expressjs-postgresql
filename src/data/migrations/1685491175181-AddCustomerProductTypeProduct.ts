import { MigrationInterface, QueryRunner } from "typeorm";

export class AddCustomerProductTypeProduct1685491175181 implements MigrationInterface {
    name = 'AddCustomerProductTypeProduct1685491175181'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "customer" ("Id" uuid NOT NULL DEFAULT uuid_generate_v4(), "IdExternal" text, "FirstName" text NOT NULL, "LastName" text NOT NULL, "Email" text, "Phone" text, CONSTRAINT "PK_c20d5895eeff89de21d99c59f74" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE TABLE "product_type" ("Id" uuid NOT NULL DEFAULT uuid_generate_v4(), "Name" text NOT NULL, "Cost" money NOT NULL, "CreatedAt" date NOT NULL, "ModifiedAt" date NOT NULL, "createdById" uuid, "modifiedById" uuid, CONSTRAINT "REL_d9b43312286eddb67e9c5dce93" UNIQUE ("createdById"), CONSTRAINT "REL_182ef790b9c638027d732a2c1f" UNIQUE ("modifiedById"), CONSTRAINT "PK_3d6e28c4346de380d61d6843dfb" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE TABLE "product" ("Id" uuid NOT NULL DEFAULT uuid_generate_v4(), "Status" date NOT NULL, "CreatedAt" date NOT NULL, "ModifiedAt" date NOT NULL, "AssignedAt" date NOT NULL, "typeId" uuid, "customerId" uuid, "createdById" uuid, "modifiedById" uuid, "assignedById" uuid, "assignedToId" uuid, CONSTRAINT "REL_53bafe3ecc25867776c07c9e66" UNIQUE ("typeId"), CONSTRAINT "REL_403af02595da3ef16c6f170745" UNIQUE ("customerId"), CONSTRAINT "REL_806302f2d4da2a0c27eedbf34f" UNIQUE ("createdById"), CONSTRAINT "REL_aea63003288ea38f6f60d131cf" UNIQUE ("modifiedById"), CONSTRAINT "REL_cd0b532d194477b591076185a6" UNIQUE ("assignedById"), CONSTRAINT "REL_1eb2565a4e5ebbe186762a9ff1" UNIQUE ("assignedToId"), CONSTRAINT "PK_a22f8718d47066cb0a07aa5db66" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`ALTER TABLE "user" ADD "Phone" text`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "Email" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product_type" ADD CONSTRAINT "FK_d9b43312286eddb67e9c5dce935" FOREIGN KEY ("createdById") REFERENCES "user"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product_type" ADD CONSTRAINT "FK_182ef790b9c638027d732a2c1f7" FOREIGN KEY ("modifiedById") REFERENCES "user"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_53bafe3ecc25867776c07c9e666" FOREIGN KEY ("typeId") REFERENCES "product_type"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_403af02595da3ef16c6f170745e" FOREIGN KEY ("customerId") REFERENCES "customer"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_806302f2d4da2a0c27eedbf34fe" FOREIGN KEY ("createdById") REFERENCES "user"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_aea63003288ea38f6f60d131cf0" FOREIGN KEY ("modifiedById") REFERENCES "user"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_cd0b532d194477b591076185a62" FOREIGN KEY ("assignedById") REFERENCES "user"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_1eb2565a4e5ebbe186762a9ff15" FOREIGN KEY ("assignedToId") REFERENCES "user"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_1eb2565a4e5ebbe186762a9ff15"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_cd0b532d194477b591076185a62"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_aea63003288ea38f6f60d131cf0"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_806302f2d4da2a0c27eedbf34fe"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_403af02595da3ef16c6f170745e"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_53bafe3ecc25867776c07c9e666"`);
        await queryRunner.query(`ALTER TABLE "product_type" DROP CONSTRAINT "FK_182ef790b9c638027d732a2c1f7"`);
        await queryRunner.query(`ALTER TABLE "product_type" DROP CONSTRAINT "FK_d9b43312286eddb67e9c5dce935"`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "Email" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "Phone"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`DROP TABLE "product_type"`);
        await queryRunner.query(`DROP TABLE "customer"`);
    }

}
