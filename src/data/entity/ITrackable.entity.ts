import UserEntity from './user.entity';

export default interface ITrackableEntity {
  CreatedAt: Date;
  CreatedBy: UserEntity;
  ModifiedAt: Date;
  ModifiedBy: UserEntity;
}
