import {
  NgModule,
  ModuleWithProviders,
  Inject,
  Optional,
  SkipSelf
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiUrlService } from './services/urlApi.service';

@NgModule({
  imports: [CommonModule]
})
export class NgCoreModule {
  public static forRoot(env: any): ModuleWithProviders<NgCoreModule> {
    return {
      ngModule: NgCoreModule,
      providers: [
        {
          provide: 'env',
          useValue: env
        }
      ]
    };
  }

  constructor(
    private apiUrlService: ApiUrlService,
    @Inject('env') private env,
    @Optional()
    @SkipSelf()
    parentModule?: NgCoreModule
  ) {
    console.log(0, 'Setando API');
    this.apiUrlService.getMyConfig();

    if (parentModule) {
      throw new Error(
        'NgCoreModule só pode ser importada uma vez, no AppModule :-('
      );
    }
  }
}
