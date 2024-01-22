import { Component, EventEmitter, Output } from '@angular/core';
import { DiaryService } from '../shared/diary.service';
import { CampaignEntry, DiaryEntry } from '../diary-entry/diary.model';

@Component({
  selector: 'app-create-entry',
  templateUrl: './create-entry.component.html',
  styleUrl: './create-entry.component.css',
})
export class CreateEntryComponent {
  campaigns: CampaignEntry[];
  @Output() onEntrySubmitted = new EventEmitter();

  ngOnInit() {
    this.campaigns = this.DiaryService.campaigns;
  }

  constructor(private DiaryService: DiaryService) {}

  submitNewEntry(id: number, title: string, date: string, content: string) {
    if (title.length > 0) {
      const newEntry = new DiaryEntry(id, title, date, content);
      this.DiaryService.entries.push(newEntry);
      this.DiaryService.disableControls();
      this.onEntrySubmitted.emit();
    }
  }
}
