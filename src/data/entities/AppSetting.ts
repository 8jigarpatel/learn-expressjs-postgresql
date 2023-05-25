import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class AppSetting {
  @PrimaryGeneratedColumn()
  key!: string;

  @Column()
  value!: string;
}
