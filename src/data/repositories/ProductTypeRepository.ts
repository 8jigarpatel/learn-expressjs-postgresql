import { Service } from 'typedi';

import dataSource from '../data-source';
import ProductType from '../entity/ProductType';
import ProductTypeModal from '../../types/ProductType.modal';
import User from '../entity/User';

@Service()
export default class ProductTypeRepository {
  async getAll() {
    const repo = dataSource.getRepository(ProductType);
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
      const repo = dataSource.getRepository(ProductType);
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
      const userRepo = dataSource.getRepository(User);
      const uesrEntity = await userRepo.findOneByOrFail({
        Id: modal.CreatedById,
      });

      const entity = new ProductType();
      entity.CreatedBy = uesrEntity;
      entity.ModifiedBy = uesrEntity;
      entity.CreatedAt = new Date();
      entity.ModifiedAt = new Date();
      entity.Name = modal.Name;
      entity.Cost = modal.Cost;

      const repo = dataSource.getRepository(ProductType);
      await repo.save(entity);
      return entity;
    } catch (ex) {
      // JP > TODO: log ex
      return null;
    }
  }
}
