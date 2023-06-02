import User from './user.entity';

export default interface ITrackableEntity {
  CreatedAt: Date;
  CreatedBy: User;
  ModifiedAt: Date;
  ModifiedBy: User;
}
