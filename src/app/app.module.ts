import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CampaignsListComponent } from './campaigns-list/campaigns-list.component';
import { SingleCampaignComponent } from './campaigns-list/single-campaign/single-campaign.component';
import { DiaryEntryComponent } from './diary-entry/diary-entry.component';
import { DiaryControlsComponent } from './diary-entry/diary-controls/diary-controls.component';
import { DiaryContentComponent } from './diary-entry/diary-content/diary-content.component';
import { CreateEntryComponent } from './create-entry/create-entry.component';
import { DiaryService } from './shared/diary.service';

@NgModule({
  declarations: [
    AppComponent,
    CampaignsListComponent,
    SingleCampaignComponent,
    DiaryEntryComponent,
    DiaryControlsComponent,
    DiaryContentComponent,
    CreateEntryComponent,
  ],
  imports: [BrowserModule],
  providers: [DiaryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
