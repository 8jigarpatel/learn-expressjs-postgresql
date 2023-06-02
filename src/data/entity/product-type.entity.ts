import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import ITrackableEntity from './ITrackable.entity';
import UserEntity from './user.entity';

@Entity()
export default class ProductTypeEntity implements ITrackableEntity {
  @PrimaryGeneratedColumn('uuid')
  Id!: string;

  @Column({ type: 'text' })
  Name!: string;

  @Column({ type: 'money' })
  Cost!: number;

  @Column({ type: 'timestamp' })
  CreatedAt!: Date;

  @OneToOne(() => UserEntity)
  @JoinColumn()
  CreatedBy!: UserEntity;

  @Column({ type: 'timestamp' })
  ModifiedAt!: Date;

  @OneToOne(() => UserEntity)
  @JoinColumn()
  ModifiedBy!: UserEntity;
}
