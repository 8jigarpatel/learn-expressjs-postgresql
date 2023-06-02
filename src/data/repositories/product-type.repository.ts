import { Service } from 'typedi';

import ProductTypeModal from '../../types/product-type.modal';
import { dataSource } from '../data-source';
import ProductTypeEntity from '../entity/product-type.entity';
import UserEntity from '../entity/user.entity';

@Service()
export default class ProductTypeRepository {
  async getAll() {
    const repo = dataSource.getRepository(ProductTypeEntity);
    const entities = await repo.find({
      relations: {
        CreatedBy: true,
        ModifiedBy: true,
      },
    });
    return entities;
  }

  async get(Id: string) {
    try {
      const repo = dataSource.getRepository(ProductTypeEntity);
      const entity = await repo.findOneBy({ Id });
      // JP > TODO: return CreatedBy/ModifiedBy entities with result
      return entity;
    } catch (ex) {
      // JP > TODO: log ex
      return null;
    }
  }

  async create(modal: ProductTypeModal) {
    try {
      const userRepo = dataSource.getRepository(UserEntity);
      const uesrEntity = await userRepo.findOneByOrFail({
        Id: modal.CreatedById,
      });

      const entity = new ProductTypeEntity();
      entity.CreatedBy = uesrEntity;
      entity.ModifiedBy = uesrEntity;
      entity.CreatedAt = new Date();
      entity.ModifiedAt = new Date();
      entity.Name = modal.Name;
      entity.Cost = modal.Cost;

      const repo = dataSource.getRepository(ProductTypeEntity);
      await repo.save(entity);
      return entity;
    } catch (ex) {
      // JP > TODO: log ex
      return null;
    }
  }
}
