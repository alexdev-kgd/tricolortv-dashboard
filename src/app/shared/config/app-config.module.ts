import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_CONFIG, APP_DI_CONFIG } from "./app-config";

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: APP_CONFIG,
      useValue: APP_DI_CONFIG
    }
  ]
})
export class AppConfigModule {
}
