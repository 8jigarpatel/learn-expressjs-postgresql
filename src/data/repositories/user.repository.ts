import { Service } from 'typedi';

import UserModal from '../../types/user.modal';
import { dataSource } from '../data-source';
import User from '../entity/user';

@Service()
export default class UserRepository {
  async getAll() {
    const repo = dataSource.getRepository(User);
    const entities = await repo.find();
    return entities;
  }

  async get(Id: string) {
    try {
      const repo = dataSource.getRepository(User);
      const entity = await repo.findOneBy({ Id });
      return entity;
    } catch (ex) {
      // JP > TODO: log ex
      return null;
    }
  }

  async create(modal: UserModal) {
    try {
      const entity = new User();
      entity.Email = modal.Email;
      entity.Phone = modal.Phone;
      entity.FirstName = modal.FirstName;
      entity.LastName = modal.LastName;
      entity.IdExternal = modal.IdExternal;

      const repo = dataSource.getRepository(User);
      await repo.save(entity);
      return entity;
    } catch (ex) {
      // JP > TODO: log ex
      return null;
    }
  }

  async update(modal: UserModal) {
    try {
      const repo = dataSource.getRepository(User);
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

  async patch(modal: UserModal) {
    try {
      const repo = dataSource.getRepository(User);
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
      const repo = dataSource.getRepository(User);
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
