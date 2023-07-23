import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1690134594490 implements MigrationInterface {
    name = 'Init1690134594490'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product" ("id" character varying NOT NULL, "name" character varying NOT NULL, "price" integer NOT NULL, "description" character varying NOT NULL, "stock" integer NOT NULL, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "product"`);
    }

}
