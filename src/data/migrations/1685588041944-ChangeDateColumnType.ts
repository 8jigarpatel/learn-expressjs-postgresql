import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeDateColumnType1685588041944 implements MigrationInterface {
    name = 'ChangeDateColumnType1685588041944'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_type" DROP COLUMN "CreatedAt"`);
        await queryRunner.query(`ALTER TABLE "product_type" ADD "CreatedAt" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product_type" DROP COLUMN "ModifiedAt"`);
        await queryRunner.query(`ALTER TABLE "product_type" ADD "ModifiedAt" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "Status"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "Status" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "CreatedAt"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "CreatedAt" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "ModifiedAt"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "ModifiedAt" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "AssignedAt"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "AssignedAt" TIMESTAMP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "AssignedAt"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "AssignedAt" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "ModifiedAt"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "ModifiedAt" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "CreatedAt"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "CreatedAt" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "Status"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "Status" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product_type" DROP COLUMN "ModifiedAt"`);
        await queryRunner.query(`ALTER TABLE "product_type" ADD "ModifiedAt" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product_type" DROP COLUMN "CreatedAt"`);
        await queryRunner.query(`ALTER TABLE "product_type" ADD "CreatedAt" date NOT NULL`);
    }

}
