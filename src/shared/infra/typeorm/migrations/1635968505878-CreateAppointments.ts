import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAppointments1635968505878 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'appointments',
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: 'client_id',
                        type: 'uuid',
                    },
                    {
                        name: 'schedule_id',
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
                        name: "ClientId",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ['client_id'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE',
                    },
                    {
                        name: "ScheduleId",
                        referencedTableName: "schedules",
                        referencedColumnNames: ["id"],
                        columnNames: ['schedule_id'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE',
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('appointments');
    }

}
