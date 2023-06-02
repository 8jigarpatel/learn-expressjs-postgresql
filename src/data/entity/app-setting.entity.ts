import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export default class AppSettingEntity {
  @PrimaryColumn({ type: 'text' })
  Key!: string;

  @Column({ type: 'text' })
  Value!: string;
}
