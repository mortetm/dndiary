import { Component, Input } from '@angular/core';
import { CampaignEntry } from '../../diary-entry/diary.model';

@Component({
  selector: 'app-single-campaign',
  templateUrl: './single-campaign.component.html',
  styleUrl: './single-campaign.component.css',
})
export class SingleCampaignComponent {
  @Input() campaign: CampaignEntry;
}
