import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export default class AppSetting {
  @PrimaryColumn({ type: 'text' })
  Key!: string;

  @Column({ type: 'text' })
  Value!: string;
}
