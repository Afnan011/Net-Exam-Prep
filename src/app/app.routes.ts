import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { PapersComponent } from './papers/papers.component';
import { QuizComponent } from './quiz/quiz.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'syllabus', component: SyllabusComponent },
  { path: 'papers', component: PapersComponent },
  { path: 'quiz', component: QuizComponent },
  { path: '**', redirectTo: '' }
];
