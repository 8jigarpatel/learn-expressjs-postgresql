import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import ITrackable from './ITrackable';
import User from './user';

@Entity()
export default class ProductType implements ITrackable {
  @PrimaryGeneratedColumn('uuid')
  Id!: string;

  @Column({ type: 'text' })
  Name!: string;

  @Column({ type: 'money' })
  Cost!: number;

  @Column({ type: 'timestamp' })
  CreatedAt!: Date;

  @OneToOne(() => User)
  @JoinColumn()
  CreatedBy!: User;

  @Column({ type: 'timestamp' })
  ModifiedAt!: Date;

  @OneToOne(() => User)
  @JoinColumn()
  ModifiedBy!: User;
}
