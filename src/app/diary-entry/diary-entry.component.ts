import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() refreshTest = new EventEmitter();

  ngOnInit() {
    this.DiaryService.disableControls();
    this.refreshFromService();
    console.log('init', this.refreshNavigation);
  }

  refreshFromService() {
    this.entries = this.DiaryService.entries;
    this.disableLeft = this.DiaryService.disableLeft;
    this.disableRight = this.DiaryService.disableRight;
    this.selectedDiary = this.DiaryService.selectedDiary;
  }

  constructor(private DiaryService: DiaryService) {}

  handleDiaryControls(direction: string) {
    if (direction === 'left') {
      this.DiaryService.selectedDiary--;
      this.DiaryService.disableControls();
      this.refreshFromService();
    } else if (direction === 'right') {
      this.DiaryService.selectedDiary++;
      this.DiaryService.disableControls();
      this.refreshFromService();
    }
  }

  ngOnChanges() {
    console.log('ngonchange', this.refreshNavigation);
    this.refreshFromService();
    this.DiaryService.disableControls();
    this.refreshTest.emit();
  }
}
