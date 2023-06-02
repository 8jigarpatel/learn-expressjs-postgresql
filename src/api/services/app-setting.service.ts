import Container, { Service } from 'typedi';

import AppSettingRepository from '../../data/repositories/app-setting.repository';
import AppSettingModal from '../../types/app-setting.modal';

@Service()
export default class AppSettingService {
  repository = Container.get(AppSettingRepository);

  async getAll() {
    return this.repository.getAll();
  }

  async get(Key: string) {
    return this.repository.get(Key);
  }

  async update(modal: AppSettingModal) {
    return this.repository.update(modal);
  }
}
