import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSchedules1635958043921 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'schedules',
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "date",
                        type: "timestamp"
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
        await queryRunner.dropTable('schedules');
    }

}
