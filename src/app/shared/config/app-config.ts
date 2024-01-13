import { InjectionToken } from "@angular/core";
import { environment } from "../../../environments/environment";

export interface AppConfig {
  apiEndpoint: string;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app-config');

export const APP_DI_CONFIG: AppConfig = {
  apiEndpoint: environment.apiEndpoint
};

