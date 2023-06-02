import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import IAssignable from './IAssignable';
import ITrackable from './ITrackable';
import Customer from './customer';
import ProductType from './product-type';
import User from './user';

@Entity()
export default class Product implements ITrackable, IAssignable {
  @PrimaryGeneratedColumn('uuid')
  Id!: string;

  @OneToOne(() => ProductType)
  @JoinColumn()
  Type!: ProductType;

  @Column({ type: 'timestamp' })
  Status!: string;

  @OneToOne(() => Customer)
  @JoinColumn()
  Customer!: Customer;

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

  @Column({ type: 'timestamp' })
  AssignedAt!: Date;

  @OneToOne(() => User)
  @JoinColumn()
  AssignedBy!: User;

  @OneToOne(() => User)
  @JoinColumn()
  AssignedTo!: User;
}
