import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-papers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './papers.component.html',
  styleUrl: './papers.component.scss'
})
export class PapersComponent {
  years: number[] = [];

  constructor() {
    // Generate years from 2024 down to 2012
    for (let i = 2024; i >= 2012; i--) {
      this.years.push(i);
    }
  }

  getLink(year: number): string {
    if (year >= 2020) {
      return 'https://prepp.in/cbse-ugc-net-exam/computer-science-and-applications-previous-year-question-papers';
    } else {
      return 'https://www.ugcnetonline.in/previous_question_papers.php';
    }
  }
}
