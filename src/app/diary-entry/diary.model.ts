export class DiaryEntry {
  constructor(
    public campaign: number,
    public title: string,
    public date: string,
    public content: string
  ) {}
}

export class CampaignEntry {
  constructor(
    public campaignId: number,
    public campaignName: string,
    public campaignDescription?: string
  ) {}
}
