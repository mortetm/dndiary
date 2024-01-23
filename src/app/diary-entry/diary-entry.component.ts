import { Component, Input } from '@angular/core';
import { DiaryService } from '../shared/diary.service';
import { DiaryEntry } from './diary.model';

@Component({
  selector: 'app-diary-entry',
  templateUrl: './diary-entry.component.html',
  styleUrl: './diary-entry.component.css',
})
export class DiaryEntryComponent {
  entries: DiaryEntry[];
  disableLeft: boolean;
  disableRight: boolean;
  selectedDiary: number;

  @Input() refreshNavigation: boolean;

  ngOnInit() {
    this.refreshFromService();
  }

  refreshFromService() {
    this.DiaryService.disableControls();
    this.entries = this.DiaryService.entries;
    this.disableLeft = this.DiaryService.disableLeft;
    this.disableRight = this.DiaryService.disableRight;
    this.selectedDiary = this.DiaryService.selectedDiary;
  }

  constructor(private DiaryService: DiaryService) {
    this.DiaryService.statusUpdated.subscribe(() => {
      this.refreshFromService();
    });
  }

  handleDiaryControls(direction: string) {
    if (direction === 'left') {
      this.DiaryService.selectedDiary--;
    } else if (direction === 'right') {
      this.DiaryService.selectedDiary++;
    }
    this.refreshFromService();
  }
}
