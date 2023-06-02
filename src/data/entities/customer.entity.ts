import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Customer {
  @PrimaryGeneratedColumn('uuid')
  Id!: string;

  @Column({ type: 'text', nullable: true })
  IdExternal!: string;

  @Column({ type: 'text' })
  FirstName!: string;

  @Column({ type: 'text' })
  LastName!: string;

  @Column({ type: 'text', nullable: true })
  Email!: string;

  @Column({ type: 'text', nullable: true })
  Phone!: string;
}
