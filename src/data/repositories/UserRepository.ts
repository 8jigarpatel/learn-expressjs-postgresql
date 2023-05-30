import { Service } from 'typedi';
import dataSource from '../data-source';
import User from '../entity/User';
import UserModal from '../../types/User.modal';

@Service()
export default class UserRepository {
  async getUsers() {
    const repo = dataSource.getRepository(User);
    const users = await repo.find();
    return users;
  }

  async getUser(Id: string) {
    try {
      const repo = dataSource.getRepository(User);
      const user = await repo.findOneBy({ Id });
      return user;
    } catch (ex) {
      // JP > TODO: log ex
      return null;
    }
  }

  async createUser(user: UserModal) {
    try {
      const userEntity = new User();
      userEntity.Email = user.Email;
      userEntity.FirstName = user.FirstName;
      userEntity.LastName = user.LastName;
      userEntity.IdExternal = user.IdExternal;

      const repo = dataSource.getRepository(User);
      await repo.save(userEntity);
      return userEntity;
    } catch (ex) {
      // JP > TODO: log ex
      return null;
    }
  }

  async updateUser(user: UserModal) {
    try {
      const repo = dataSource.getRepository(User);
      const userEntity = await repo.findOneBy({ Id: user.Id });
      if (userEntity) {
        userEntity.IdExternal = user.IdExternal || '';
        userEntity.FirstName = user.FirstName || '';
        userEntity.LastName = user.LastName || '';
        userEntity.Email = user.Email || '';
        await repo.save(userEntity);
      }
      return userEntity;
    } catch (ex) {
      // JP > TODO: log ex
      return null;
    }
  }

  async patchUser(user: UserModal) {
    try {
      const repo = dataSource.getRepository(User);
      const userEntity = await repo.findOneBy({ Id: user.Id });
      if (userEntity) {
        if (user.IdExternal) userEntity.IdExternal = user.IdExternal;
        if (user.FirstName) userEntity.FirstName = user.FirstName;
        if (user.LastName) userEntity.LastName = user.LastName;
        if (user.Email) userEntity.Email = user.Email;
        await repo.save(userEntity);
      }
      return userEntity;
    } catch (ex) {
      // JP > TODO: log ex
      return null;
    }
  }

  async deleteUser(Id: string) {
    try {
      const repo = dataSource.getRepository(User);
      const userEntity = await repo.findOneBy({ Id });
      if (userEntity) {
        await repo.remove(userEntity);
        return true;
      }
      return false;
    } catch (ex) {
      // JP > TODO: log ex
      return false;
    }
  }
}
