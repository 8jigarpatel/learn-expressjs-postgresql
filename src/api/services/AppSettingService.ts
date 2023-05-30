import Container, { Service } from 'typedi';

import AppSettingRepository from '../../data/repositories/AppSettingRepository';
import AppSettingModal from '../../types/AppSetting.modal';

@Service()
export default class AppSettingService {
  appSettingRepository = Container.get(AppSettingRepository);

  async getAppSettings() {
    return this.appSettingRepository.getAppSettings();
  }

  async getAppSetting(key: string) {
    return this.appSettingRepository.getAppSetting(key);
  }

  async updateAppSetting(appSetting: AppSettingModal) {
    return this.appSettingRepository.updateAppSetting(appSetting);
  }
}
