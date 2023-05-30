import User from './User';

export default interface ITrackable {
  CreatedAt: Date;
  CreatedBy: User;
  ModifiedAt: Date;
  ModifiedBy: User;
}
