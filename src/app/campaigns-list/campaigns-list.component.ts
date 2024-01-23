import { Component } from '@angular/core';
import { CampaignEntry } from '../diary-entry/diary.model';
import { DiaryService } from '../shared/diary.service';

@Component({
  selector: 'app-campaigns-list',
  templateUrl: './campaigns-list.component.html',
  styleUrl: './campaigns-list.component.css',
})
export class CampaignsListComponent {
  campaigns: CampaignEntry[];
  showAddEntry: boolean = false;

  constructor(public DiaryService: DiaryService) {}

  ngOnInit() {
    this.campaigns = this.DiaryService.campaigns;
  }

  showHideAddEntry() {
    this.DiaryService.showAddEntryUpdated.emit();
  }
}
