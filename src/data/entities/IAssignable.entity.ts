import User from './user.entity';

export default interface IAssignableEntity {
  AssignedAt: Date;
  AssignedBy: User;
  AssignedTo: User;
}
