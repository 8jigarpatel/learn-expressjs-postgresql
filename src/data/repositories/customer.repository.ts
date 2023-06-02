import { Service } from 'typedi';

import CustomerModal from '../../types/customer.modal';
import { dataSource } from '../data-source';
import Customer from '../entity/customer.entity';

@Service()
export default class CustomerRepository {
  async getAll() {
    const repo = dataSource.getRepository(Customer);
    const entities = await repo.find();
    return entities;
  }

  async get(Id: string) {
    try {
      const repo = dataSource.getRepository(Customer);
      const entity = await repo.findOneBy({ Id });
      return entity;
    } catch (ex) {
      // JP > TODO: log ex
      return null;
    }
  }

  async create(modal: CustomerModal) {
    try {
      const entity = new Customer();
      entity.Email = modal.Email;
      entity.Phone = modal.Phone;
      entity.FirstName = modal.FirstName;
      entity.LastName = modal.LastName;
      entity.IdExternal = modal.IdExternal;

      const repo = dataSource.getRepository(Customer);
      await repo.save(entity);
      return entity;
    } catch (ex) {
      // JP > TODO: log ex
      return null;
    }
  }

  async update(modal: CustomerModal) {
    try {
      const repo = dataSource.getRepository(Customer);
      const entity = await repo.findOneBy({ Id: modal.Id });
      if (entity) {
        entity.IdExternal = modal.IdExternal || '';
        entity.FirstName = modal.FirstName || '';
        entity.LastName = modal.LastName || '';
        entity.Email = modal.Email || '';
        entity.Phone = modal.Phone || '';
        await repo.save(entity);
      }
      return entity;
    } catch (ex) {
      // JP > TODO: log ex
      return null;
    }
  }

  async patch(modal: CustomerModal) {
    try {
      const repo = dataSource.getRepository(Customer);
      const entity = await repo.findOneBy({ Id: modal.Id });
      if (entity) {
        if (modal.IdExternal) entity.IdExternal = modal.IdExternal;
        if (modal.FirstName) entity.FirstName = modal.FirstName;
        if (modal.LastName) entity.LastName = modal.LastName;
        if (modal.Email) entity.Email = modal.Email;
        if (modal.Phone) entity.Phone = modal.Phone;
        await repo.save(entity);
      }
      return entity;
    } catch (ex) {
      // JP > TODO: log ex
      return null;
    }
  }

  async delete(Id: string) {
    try {
      const repo = dataSource.getRepository(Customer);
      const entity = await repo.findOneBy({ Id });
      if (entity) {
        await repo.remove(entity);
        return true;
      }
      return false;
    } catch (ex) {
      // JP > TODO: log ex
      return false;
    }
  }
}
