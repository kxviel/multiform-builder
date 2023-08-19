import { Component } from '@angular/core';
import { questions } from 'src/utils/Questions';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  questions = questions;
}
