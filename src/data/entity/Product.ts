import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import ITrackable from './ITrackable';
import User from './User';
import IAssignable from './IAssignable';
import ProductType from './ProductType';

@Entity()
export default class Product implements ITrackable, IAssignable {
  @PrimaryGeneratedColumn('uuid')
  Id!: string;

  @OneToOne(() => ProductType)
  @JoinColumn()
  Type!: ProductType;

  @Column({ type: 'date' })
  Status!: string;

  @Column({ type: 'date' })
  CreatedAt!: Date;

  @OneToOne(() => User)
  @JoinColumn()
  CreatedBy!: User;

  @Column({ type: 'date' })
  ModifiedAt!: Date;

  @OneToOne(() => User)
  @JoinColumn()
  ModifiedBy!: User;

  @Column({ type: 'date' })
  AssignedAt!: Date;

  @OneToOne(() => User)
  @JoinColumn()
  AssignedBy!: User;

  @OneToOne(() => User)
  @JoinColumn()
  AssignedTo!: User;
}
