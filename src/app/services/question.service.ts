import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, catchError, throwError } from 'rxjs';

export interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Unit {
  id: number;
  name: string;
  questions: Question[];
}

export interface QuestionBank {
  units: Unit[];
}

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private dataUrl = '/assets/questions.json';

  constructor(private http: HttpClient) {}

  getUnits(): Observable<Unit[]> {
    return this.http.get<QuestionBank>(this.dataUrl).pipe(
      map(data => data.units),
      catchError(error => {
        console.error('Error loading questions:', error);
        return throwError(() => new Error('Failed to load questions. Please try again later.'));
      })
    );
  }

  getQuestionsForUnit(unitId: number, count: number): Observable<Question[]> {
    return this.getUnits().pipe(
      map(units => {
        const unit = units.find(u => u.id === unitId);
        if (!unit) return [];
        return this.getRandomQuestions(unit.questions, count);
      })
    );
  }

  getMasterQuizQuestions(count: number): Observable<Question[]> {
    return this.getUnits().pipe(
      map(units => {
        const allQuestions = units.flatMap(u => u.questions);
        return this.getRandomQuestions(allQuestions, count);
      })
    );
  }

  private getRandomQuestions(questions: Question[], count: number): Question[] {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
}
