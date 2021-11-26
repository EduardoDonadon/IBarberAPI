import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCuts1637951830134 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'cuts',
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "cut_photo",
                        type: "varchar"
                    },
                    {
                        name: 'barber_id',
                        type: 'uuid',
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "BarberId",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ['barber_id'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE',
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('cuts');
    }

}
