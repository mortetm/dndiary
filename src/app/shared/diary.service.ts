import { CampaignEntry, DiaryEntry } from '../diary-entry/diary.model';

export class DiaryService {
  disableLeft = false;
  disableRight = false;
  selectedDiary = 0;

  campaigns = [
    new CampaignEntry(1, 'RotFM', 'IBM Rime of the Frostmaiden Campaign'),
    new CampaignEntry(2, 'Calimshan'),
  ];
  entries = [
    new DiaryEntry(
      1,
      'Dear Diary',
      'Tyrsday, Myrtul 10th, 1489',
      `In mid-Summer, I awoke from my bed at the thieves' den to find myself in a campsite. At first I thought one of my companions at the guild played another prank on me, but then I saw them - my friends from my prophecy. More energized than ever, I get a gut feeling that destiny is pulling us Northward. "To the North we must go! It's our destiny!" I proclaim to be met with surprised and non-understanding faces - the faces I knew as my friends. Regardless, after a bite of the half-finished breakfast we had mysteriously had set up, I go out to scout the North from the tree tops.
          Low and behold, there it was, the great oak where the first vision began. I returned to find that Reuben and Blunder likewise took off to the East to see what they could find, reporting back about a river and a potential village. After a hasty talk and pack up of the camp (all while keeping Blunder's scissors away from the tents), we took off to the North. During this pack up was when I found this journal that actually already had an entry for my first experience in this world...and more? Interesting      
          In hindsight, we forgot to look to the West or South, but given that no one felt a pull towards those directions, it's probable that there wasn't much need to go that way. Either way, we found the shrine that we encountered originally, though it was obviously aged and overgrown, no one knew the local foliage to tell exactly how long it's been. Searching around for clues, we found grave markers, an unsettling reminder that it wasn't *just* a dream. Noki able to tell from the aged leather that it was roughly 15 years since these markers were placed.      
          My trusty guard, Reuben had manifested magical powers, and apparently could also sense other magic. Interestingly, he picked up no sensation from the oak, but as he walked by a grave, he pinged something. I disagreed with the idea that we should dig up the grave, as it is the greatest dishonor to the deceased to do so. I did know, however, that if our powers were telling us that something important was here, then we should investigate to fulfill our destiny. So, the best I could do was look away as he did the deed.      
          And thus, we set off down the river. Though on the lookout for any dangers, it was a disturbingly peaceful trip. We found the outskirts of the goblin farms, and so we knew we were close to the city. I suggested we talk to the local goblins to perhaps offer a safer, faster, or more appropriate route to said city. Reuben, and Noki, however, strongly disagreed, and thought the risk of being recognized was too great. Well, that was Reuben's objection. I think Noki just doesn't like people. However, it's been years, and we were going to a city, which would no doubt be full of people who could recognize us anyway. After some talk, we compromised that I, and Blunder in his tree costume (to this day, I still wonder why he did that) would go up and ask.      
          Blunder obviously had no fears about being recognized, bringing up the topic of the shrine directly in the conversation...and then talked about farming...then tried to play stupid? Admittedly, it was worth the time just to watch him, particularly his last skit where he said "Oh no. I'm falling." and somehow failed to fall. I guess Dwarves are even more stable than the storybooks say...physically anyway. Anyway, they didn't recognize us, and didn't even seem to know much of the shrine, and we were able to find information about a road that led straight to the town and didn't trample on crops
          We are coming upon the town now, I best put up the journal until it is needed later.`
    ),
    new DiaryEntry(
      1,
      'Dear Diary 2',
      'Tyrsday, Myrtul 10th, 1489',
      `In mid-Summer, I awoke from my bed at the thieves' den to find myself in a campsite. At first I thought one of my companions at the guild played another prank on me, but then I saw them - my friends from my prophecy. More energized than ever, I get a gut feeling that destiny is pulling us Northward. "To the North we must go! It's our destiny!" I proclaim to be met with surprised and non-understanding faces - the faces I knew as my friends. Regardless, after a bite of the half-finished breakfast we had mysteriously had set up, I go out to scout the North from the tree tops.
          Low and behold, there it was, the great oak where the first vision began. I returned to find that Reuben and Blunder likewise took off to the East to see what they could find, reporting back about a river and a potential village. After a hasty talk and pack up of the camp (all while keeping Blunder's scissors away from the tents), we took off to the North. During this pack up was when I found this journal that actually already had an entry for my first experience in this world...and more? Interesting      
          In hindsight, we forgot to look to the West or South, but given that no one felt a pull towards those directions, it's probable that there wasn't much need to go that way. Either way, we found the shrine that we encountered originally, though it was obviously aged and overgrown, no one knew the local foliage to tell exactly how long it's been. Searching around for clues, we found grave markers, an unsettling reminder that it wasn't *just* a dream. Noki able to tell from the aged leather that it was roughly 15 years since these markers were placed.      
          My trusty guard, Reuben had manifested magical powers, and apparently could also sense other magic. Interestingly, he picked up no sensation from the oak, but as he walked by a grave, he pinged something. I disagreed with the idea that we should dig up the grave, as it is the greatest dishonor to the deceased to do so. I did know, however, that if our powers were telling us that something important was here, then we should investigate to fulfill our destiny. So, the best I could do was look away as he did the deed.      
          And thus, we set off down the river. Though on the lookout for any dangers, it was a disturbingly peaceful trip. We found the outskirts of the goblin farms, and so we knew we were close to the city. I suggested we talk to the local goblins to perhaps offer a safer, faster, or more appropriate route to said city. Reuben, and Noki, however, strongly disagreed, and thought the risk of being recognized was too great. Well, that was Reuben's objection. I think Noki just doesn't like people. However, it's been years, and we were going to a city, which would no doubt be full of people who could recognize us anyway. After some talk, we compromised that I, and Blunder in his tree costume (to this day, I still wonder why he did that) would go up and ask.      
          Blunder obviously had no fears about being recognized, bringing up the topic of the shrine directly in the conversation...and then talked about farming...then tried to play stupid? Admittedly, it was worth the time just to watch him, particularly his last skit where he said "Oh no. I'm falling." and somehow failed to fall. I guess Dwarves are even more stable than the storybooks say...physically anyway. Anyway, they didn't recognize us, and didn't even seem to know much of the shrine, and we were able to find information about a road that led straight to the town and didn't trample on crops
          We are coming upon the town now, I best put up the journal until it is needed later.`
    ),
  ];

  disableControls() {
    this.disableLeft = this.selectedDiary === 0;
    this.disableRight = this.selectedDiary === this.entries.length - 1;
  }

  createEntry(campaignId: number, diary: DiaryEntry) {
    let newDiary = new DiaryEntry(
      campaignId,
      diary.title,
      diary.date,
      diary.content
    );
    this.entries.push(newDiary);
  }
}
