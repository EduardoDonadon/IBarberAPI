import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddAvailableFieldToSchedule1637583783674 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'schedules',
            new TableColumn({
              name: 'available',
              type: "boolean",
              default: true
            }),
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('schedules', 'available');
    }

}
