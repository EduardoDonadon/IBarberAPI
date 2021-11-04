import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { v4 as uuid } from "uuid";

import { User } from '@modules/users/infra/typeorm/entities/User';
import { Schedule } from '@modules/schedules/infra/typeorm/entities/Schedule';

@Entity('appointments')
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  client_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'client_id' })
  client: User;

  @Column()
  schedule_id: string;

  @OneToOne(() => Schedule)
  @JoinColumn({ name: 'schedule_id'})
  schedule: Schedule;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Appointment };