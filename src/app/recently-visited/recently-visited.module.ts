import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecentlyVisitedComponent } from './components/recently-visited/recently-visited.component';
import { RecentlyVisitedService } from './services/recently-visited.service';

@NgModule({
  declarations: [RecentlyVisitedComponent],
  imports: [CommonModule],
  exports: [RecentlyVisitedComponent],
  providers: [RecentlyVisitedService],
})
export class RecentlyVisitedModule {}
