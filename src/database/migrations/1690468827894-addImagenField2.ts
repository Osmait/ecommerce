import { MigrationInterface, QueryRunner } from "typeorm";

export class AddImagenField21690468827894 implements MigrationInterface {
    name = 'AddImagenField21690468827894'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "imagen" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "imagen"`);
    }

}
