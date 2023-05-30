import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class User {
  @PrimaryGeneratedColumn('uuid')
  Id!: string;

  @Column({ type: 'text', nullable: true })
  IdExternal!: string;

  @Column({ type: 'text' })
  FirstName!: string;

  @Column({ type: 'text' })
  LastName!: string;

  @Column({ type: 'text' })
  Email!: string;
}
