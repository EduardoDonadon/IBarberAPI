import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { v4 as uuid } from "uuid";

import { User } from '@modules/users/infra/typeorm/entities/User';

@Entity('cuts')
class Cut {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  cut_photo: string;

  @Column()
  barber_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'barber_id' })
  barber: User;

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

export { Cut };