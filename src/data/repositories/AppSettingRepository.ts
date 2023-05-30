import { Service } from 'typedi';
import dataSource from '../data-source';
import AppSetting from '../entity/AppSetting';
import AppSettingModal from '../../types/AppSetting.modal';

@Service()
export default class AppSettingRepository {
  async getAppSettings() {
    const repo = dataSource.getRepository(AppSetting);
    const settings = await repo.find();
    return settings;
  }

  async getAppSetting(Key: string) {
    try {
      const repo = dataSource.getRepository(AppSetting);
      const setting = await repo.findOneBy({ Key });
      return setting;
    } catch (ex) {
      // JP > TODO: log ex
      return null;
    }
  }

  async updateAppSetting(appSetting: AppSettingModal) {
    try {
      const repo = dataSource.getRepository(AppSetting);
      const setting = await repo.findOneBy({ Key: appSetting.Key });
      if (setting) {
        setting.Value = appSetting.Value;
        await repo.save(setting);
      }
      return setting;
    } catch (ex) {
      // JP > TODO: log ex
      return null;
    }
  }
}
