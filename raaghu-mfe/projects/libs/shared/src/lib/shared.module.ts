import { NgModule } from '@angular/core';
import { ComponentLoaderComponent } from './component-loader.component';
import { ServiceProxyModule } from './service-proxy.module';

@NgModule({
  declarations: [ComponentLoaderComponent],
  imports: [ServiceProxyModule],
  exports: [ComponentLoaderComponent],
  
})
export class SharedModule {
  
}
