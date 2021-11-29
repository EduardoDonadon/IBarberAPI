import {MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey} from "typeorm";

export class CreateAddress1638149111008 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'addresses',
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: 'cep',
                        type: 'varchar',
                    },
                    {
                        name: 'street',
                        type: 'varchar',
                    },
                    {
                        name: 'neighborhood',
                        type: 'varchar',
                    },
                    {
                        name: 'number',
                        type: 'varchar',
                    },
                    {
                        name: 'complement',
                        type: 'varchar',
                    },
                    {
                        name: 'state',
                        type: 'varchar',
                    },
                    {
                        name: 'city',
                        type: 'varchar',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ],
            }),
        );

        await queryRunner.addColumn(
            'users',
            new TableColumn({
                name: 'address_id',
                type: 'uuid',
            }),
        );

        await queryRunner.createForeignKey(
            'users',
            new TableForeignKey({
              name: 'UsersAddressIdProvider',
              columnNames: ['address_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'addresses',
              onDelete: 'CASCADE',
              onUpdate: 'CASCADE',
            }),
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('addresses');
        
        await queryRunner.dropColumn('users', 'address_id');

        await queryRunner.dropForeignKey('users', 'UsersAddressIdProvider');
    }

}
