import UserEntity from './user.entity';

export default interface IAssignableEntity {
  AssignedAt: Date;
  AssignedBy: UserEntity;
  AssignedTo: UserEntity;
}
