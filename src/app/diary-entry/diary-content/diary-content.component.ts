import { Component, Input } from '@angular/core';
import { DiaryEntry } from '../diary.model';

@Component({
  selector: 'app-diary-content',
  templateUrl: './diary-content.component.html',
  styleUrl: './diary-content.component.css',
})
export class DiaryContentComponent {
  @Input() entry: DiaryEntry;
}
