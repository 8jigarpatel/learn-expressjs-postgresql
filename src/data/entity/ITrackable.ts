import User from './user';

export default interface ITrackable {
  CreatedAt: Date;
  CreatedBy: User;
  ModifiedAt: Date;
  ModifiedBy: User;
}
