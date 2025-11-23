import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { QuestionService, Question, Unit } from '../services/question.service';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent {
  units: Unit[] = [];
  questions: Question[] = [];
  currentQuestionIndex = 0;
  score = 0;
  
  // State flags
  quizStarted = false;
  quizFinished = false;
  loading = false;
  error: string | null = null;
  
  // Selection state
  selectedMode: 'master' | 'unit' | null = null;
  selectedUnitId: number | null = null;

  // Question state
  selectedOptionIndex: number | null = null;
  isAnswered = false;

  constructor(private questionService: QuestionService, private cdr: ChangeDetectorRef) {
    this.loadUnits();
  }

  loadUnits() {
    this.questionService.getUnits().subscribe({
      next: (units) => {
        this.units = units;
      },
      error: (err) => {
        console.error('Failed to load units', err);
        this.error = 'Failed to load quiz data. Please check your connection.';
      }
    });
  }

  selectMode(mode: 'master' | 'unit') {
    this.selectedMode = mode;
    this.selectedUnitId = null;
    this.error = null;
  }

  selectUnit(unitId: number) {
    this.selectedUnitId = unitId;
  }

  startQuiz() {
    this.loading = true;
    this.quizStarted = true;
    this.quizFinished = false;
    this.score = 0;
    this.currentQuestionIndex = 0;
    this.error = null;
    this.resetQuestionState();

    if (this.selectedMode === 'master') {
      this.questionService.getMasterQuizQuestions(20).subscribe({
        next: (questions) => {
          this.questions = questions;
          this.loading = false;
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('QuizComponent: Master Quiz error', err);
          this.loading = false;
          this.error = 'Failed to generate Master Quiz. Please try again.';
          this.quizStarted = false;
          this.cdr.detectChanges();
        }
      });
    } else if (this.selectedMode === 'unit' && this.selectedUnitId) {
      this.questionService.getQuestionsForUnit(this.selectedUnitId, 5).subscribe({
        next: (questions) => {
          this.questions = questions;
          this.loading = false;
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('QuizComponent: Unit Quiz error', err);
          this.loading = false;
          this.error = 'Failed to generate Unit Quiz. Please try again.';
          this.quizStarted = false;
          this.cdr.detectChanges();
        }
      });
    }
  }

  get currentQuestion(): Question {
    return this.questions[this.currentQuestionIndex];
  }

  selectOption(index: number) {
    if (this.isAnswered) return;
    
    this.selectedOptionIndex = index;
    this.isAnswered = true;

    if (index === this.currentQuestion.correctAnswer) {
      this.score++;
    }
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.resetQuestionState();
    } else {
      this.quizFinished = true;
    }
  }

  resetQuestionState() {
    this.selectedOptionIndex = null;
    this.isAnswered = false;
  }

  restartQuiz() {
    this.quizStarted = false;
    this.quizFinished = false;
    this.selectedMode = null;
    this.selectedUnitId = null;
    this.questions = [];
  }
}
