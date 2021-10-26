import {MigrationInterface, QueryRunner} from "typeorm";

export class createAaaTable1634786818204 implements MigrationInterface {
    name = 'createAaaTable1634786818204'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`blog\` (\`issueNumber\` int NOT NULL AUTO_INCREMENT, \`author\` varchar(255) NOT NULL, \`title\` varchar(500) NOT NULL, PRIMARY KEY (\`issueNumber\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`blog\``);
    }

}
