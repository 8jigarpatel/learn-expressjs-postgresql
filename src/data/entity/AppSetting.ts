import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export default class AppSetting {
  @PrimaryColumn({ type: 'text' })
  key!: string;

  @Column({ type: 'text' })
  value!: string;
}
