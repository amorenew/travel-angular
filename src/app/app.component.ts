import {Component} from '@angular/core';
import {FrameworkConfigService, FrameworkConfigSettings} from '../framework/services/framework-config.service';

@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.scss']})
export class AppComponent {
  constructor(private frameworkConfigService : FrameworkConfigService) {
    let config : FrameworkConfigSettings = {
      socialIcons: [
        {
          imageFile: 'assets/ic_social_fb.svg',
          alt: 'Facebook',
          link: 'https:/www.facebook.com'
        }, {
          imageFile: 'assets/ic_social_tw.svg',
          alt: 'Twitter',
          link: 'https:/www.twitter.com'
        }, {
          imageFile: 'assets/ic_social_gp.svg',
          alt: 'Google +',
          link: 'https:/www.Google.com'
        }
      ],
      showLanguageSelector: true,
      showUserControls: true,
      showStatusBar: true,
      showStatusBarBreakpoint: 800,
    };
    frameworkConfigService.configure(config);
  }
}
