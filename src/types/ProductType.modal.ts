import User from '../data/entity/User';

export default class ProductTypeModal {
  Id!: string;

  Name!: string;

  Cost!: number;

  CreatedAt!: Date;

  CreatedBy!: User;

  ModifiedAt!: Date;

  ModifiedBy!: User;
}
