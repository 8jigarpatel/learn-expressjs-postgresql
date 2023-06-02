// import {
//   Column,
//   Entity,
//   JoinColumn,
//   OneToOne,
//   PrimaryGeneratedColumn,
// } from 'typeorm';
// import IAssignableEntity from './IAssignable.entity';
// import ITrackableEntity from './ITrackable.entity';
// import Customer from './customer.entity';
// import ProductTypeEntity from './product-type.entity';
// import User from './user.entity';

// @Entity()
// export default class ProductEntity
//   implements ITrackableEntity, IAssignableEntity
// {
//   @PrimaryGeneratedColumn('uuid')
//   Id!: string;

//   @OneToOne(() => ProductTypeEntity)
//   @JoinColumn()
//   Type!: ProductTypeEntity;

//   @Column({ type: 'timestamp' })
//   Status!: string;

//   @OneToOne(() => Customer)
//   @JoinColumn()
//   Customer!: Customer;

//   @Column({ type: 'timestamp' })
//   CreatedAt!: Date;

//   @OneToOne(() => User)
//   @JoinColumn()
//   CreatedBy!: User;

//   @Column({ type: 'timestamp' })
//   ModifiedAt!: Date;

//   @OneToOne(() => User)
//   @JoinColumn()
//   ModifiedBy!: User;

//   @Column({ type: 'timestamp' })
//   AssignedAt!: Date;

//   @OneToOne(() => User)
//   @JoinColumn()
//   AssignedBy!: User;

//   @OneToOne(() => User)
//   @JoinColumn()
//   AssignedTo!: User;
// }
