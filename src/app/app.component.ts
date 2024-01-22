import { Component } from '@angular/core';
import { DiaryService } from './shared/diary.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private DiaryService: DiaryService) {}

  refreshNavigationSignal: boolean = false;
  campaigns = this.DiaryService.campaigns;
  entries = this.DiaryService.entries;

  handleEntrySubmitted() {
    this.refreshNavigationSignal = !this.refreshNavigationSignal;
  }
}
