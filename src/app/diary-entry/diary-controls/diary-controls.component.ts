import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-diary-controls',
  templateUrl: './diary-controls.component.html',
  styleUrl: './diary-controls.component.css',
})
export class DiaryControlsComponent {
  @Input() disabled: boolean;
  @Input() direction: string;
}
