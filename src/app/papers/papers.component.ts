import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Paper {
  year: number;
  link: string;
  isDirect: boolean;
  description?: string;
  isLocal?: boolean;
}

@Component({
  selector: 'app-papers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './papers.component.html',
  styleUrl: './papers.component.scss'
})
export class PapersComponent {
  papers: Paper[] = [
    // 2025 - Local
    { year: 2025, link: '/assets/papers/2025-june-p1.pdf', isDirect: true, description: 'June 26', isLocal: true },
    
    // 2024 - Specific Landing Page
    { year: 2024, link: 'https://career.aglasem.com/ugc-net-2024-question-paper/', isDirect: false, description: 'June/Dec' },
    
    // 2023 - Local
    { year: 2023, link: '/assets/papers/2023-june-p2.pdf', isDirect: true, description: 'June 17', isLocal: true },
    { year: 2023, link: '/assets/papers/2023-dec-p2.pdf', isDirect: true, description: 'Dec 07', isLocal: true },
    
    // 2022 - Local
    { year: 2022, link: '/assets/papers/2022-oct-p2.pdf', isDirect: true, description: 'Oct 08', isLocal: true },
    
    // 2019-2021 - Specific Landing Pages
    { year: 2021, link: 'https://testbook.com/ugc-net/previous-year-papers', isDirect: false },
    { year: 2020, link: 'https://docs.aglasem.com/ugc-net/2020-question-paper-computer-science-application', isDirect: false },
    { year: 2019, link: 'https://testbook.com/ugc-net/previous-year-papers', isDirect: false },
    
    // 2018 - Local
    { year: 2018, link: '/assets/papers/2018-july-p2.pdf', isDirect: true, description: 'July P-II', isLocal: true },
    
    // 2017 - Local
    { year: 2017, link: '/assets/papers/2017-nov-p2.pdf', isDirect: true, description: 'Nov P-II', isLocal: true },
    { year: 2017, link: '/assets/papers/2017-jan-p2.pdf', isDirect: true, description: 'Jan P-II', isLocal: true },
    
    // 2016 - Local
    { year: 2016, link: '/assets/papers/2016-july-p2.pdf', isDirect: true, description: 'July P-II', isLocal: true },
    
    // 2015 - Local
    { year: 2015, link: '/assets/papers/2015-dec-p2.pdf', isDirect: true, description: 'Dec P-II', isLocal: true },
    { year: 2015, link: '/assets/papers/2015-june-p2.pdf', isDirect: true, description: 'June P-II', isLocal: true },
    
    // 2014 - Local
    { year: 2014, link: '/assets/papers/2014-dec-p2.pdf', isDirect: true, description: 'Dec P-II', isLocal: true },
    { year: 2014, link: '/assets/papers/2014-june-p2.pdf', isDirect: true, description: 'June P-II', isLocal: true },
    
    // 2013 - Local
    { year: 2013, link: '/assets/papers/2013-dec-p2.pdf', isDirect: true, description: 'Dec P-II', isLocal: true },
    { year: 2013, link: '/assets/papers/2013-june-p2.pdf', isDirect: true, description: 'June P-II', isLocal: true },
    
    // 2012 - Local
    { year: 2012, link: '/assets/papers/2012-dec-p2.pdf', isDirect: true, description: 'Dec P-II', isLocal: true },
    { year: 2012, link: '/assets/papers/2012-june-p2.pdf', isDirect: true, description: 'June P-II', isLocal: true }
  ].sort((a, b) => b.year - a.year || (b.description?.localeCompare(a.description || '') || 0));
}
