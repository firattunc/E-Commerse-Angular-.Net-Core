import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AppSessionService } from '@shared/session/app-session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  /**
   *
   */
  constructor(private readonly appSessionService:AppSessionService) {    
    
  }
  isLoggedIn=false;
  ngOnInit(): void {
    
    if(this.appSessionService.user!=null)
    this.isLoggedIn=true;

  }
}
