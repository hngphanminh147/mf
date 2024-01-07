import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitDatabase1704107553230 implements MigrationInterface {
  name = 'InitDatabase1704107553230';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
      CREATE TABLE "text_box" 
      ("id" SERIAL NOT NULL,
      "created_date" TIMESTAMP NOT NULL DEFAULT now(),
      "update_date" TIMESTAMP NOT NULL DEFAULT now(),
      "delete_date" TIMESTAMP,
      "x" integer NOT NULL,
      "y" integer NOT NULL,
      "width" integer NOT NULL,
      "height" integer NOT NULL,
      "memeId" integer,
      CONSTRAINT "PK_72eb004f1def8369f10e0eee572" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "meme" ("id" SERIAL NOT NULL,
      "created_date" TIMESTAMP NOT NULL DEFAULT now(),
      "update_date" TIMESTAMP NOT NULL DEFAULT now(),
      "delete_date" TIMESTAMP,
      "image_url" character varying NOT NULL,
      CONSTRAINT "PK_d6db1ab4ee9ad9dbe86c64e4cc3" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "text_box" 
      ADD CONSTRAINT "FK_8873f368ef1ec39b5f9c21c0326" 
      FOREIGN KEY ("memeId") REFERENCES "meme"("id") 
      ON DELETE NO ACTION 
      ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "text_box" DROP CONSTRAINT "FK_8873f368ef1ec39b5f9c21c0326"`);
    await queryRunner.query(`DROP TABLE "meme"`);
    await queryRunner.query(`DROP TABLE "text_box"`);
  }
}
