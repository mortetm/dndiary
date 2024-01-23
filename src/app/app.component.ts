import { Component } from '@angular/core';
import { DiaryService } from './shared/diary.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private DiaryService: DiaryService) {
    this.DiaryService.showAddEntryUpdated.subscribe(() => {
      this.showAddEntry = !this.showAddEntry;
      console.log('test');
    });
  }

  campaigns = this.DiaryService.campaigns;
  entries = this.DiaryService.entries;
  showAddEntry = false;
}
