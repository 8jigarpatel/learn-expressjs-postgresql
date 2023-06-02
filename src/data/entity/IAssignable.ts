import User from './user';

export default interface IAssignable {
  AssignedAt: Date;
  AssignedBy: User;
  AssignedTo: User;
}
