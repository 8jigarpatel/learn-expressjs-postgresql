import User from './User';

export default interface IAssignable {
  AssignedAt: Date;
  AssignedBy: User;
  AssignedTo: User;
}
