import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class ChangeUserCpfType1638617499655 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('users', 'cpf');

        await queryRunner.addColumn(
            'users',
            new TableColumn({
                name: 'cpf',
                type: 'varchar',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('users', 'cpf');

        await queryRunner.addColumn(
            'users',
            new TableColumn({
                name: 'cpf',
                type: 'integer',
            }),
        );
    }

}
