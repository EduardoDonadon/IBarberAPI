import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Exclude, Expose } from 'class-transformer';

import uploadConfig from '@config/storage';
import { Address } from "./Address";
@Entity("users")
class User {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  cpf: number;

  @Column()
  barber: boolean;
  
  @Column()
  avatar: string;

  @Column()
  @Exclude()
  password: string;

  @Column()
  address_id: string;

  @OneToOne(() => Address, { eager: true })
  @JoinColumn({ name: 'address_id' })
  address: Address;


  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Expose({ name: 'avatar_url' })
  getAvatarUrl(): string | null {
    if (!this.avatar) {
      return null;
    }

    switch (uploadConfig.driver) {
      case 'disk':
        return `http://localhost:3333/files/${this.avatar}`;
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

export { User };