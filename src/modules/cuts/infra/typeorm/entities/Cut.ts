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
import { Expose } from 'class-transformer';

import uploadConfig from '@config/storage';
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

  @Expose({ name: 'cut_photo_url' })
  getAvatarUrl(): string | null {
    if (!this.cut_photo) {
      return null;
    }

    switch (uploadConfig.driver) {
      case 'disk':
        return `http://localhost:3333/files/${this.cut_photo}`;
      default:
        return null;
    }
  }

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Cut };