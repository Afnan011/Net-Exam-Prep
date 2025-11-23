import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent {
  questions: Question[] = [
    {
      question: "Which of the following is NOT a valid state in the Process State Transition Diagram?",
      options: ["Running", "Ready", "Blocked", "Deleted"],
      correctAnswer: 3
    },
    {
      question: "In the context of DBMS, what does ACID stand for?",
      options: [
        "Atomicity, Consistency, Isolation, Durability",
        "Accuracy, Consistency, Isolation, Durability",
        "Atomicity, Concurrency, Isolation, Durability",
        "Atomicity, Consistency, Integrity, Durability"
      ],
      correctAnswer: 0
    },
    {
      question: "Which data structure is best suited for implementing a recursive algorithm?",
      options: ["Queue", "Stack", "Linked List", "Tree"],
      correctAnswer: 1
    },
    {
      question: "What is the time complexity of Binary Search?",
      options: ["O(n)", "O(n log n)", "O(log n)", "O(1)"],
      correctAnswer: 2
    },
    {
      question: "Which layer of the OSI model is responsible for routing?",
      options: ["Data Link Layer", "Network Layer", "Transport Layer", "Session Layer"],
      correctAnswer: 1
    }
  ];

  currentQuestionIndex = 0;
  score = 0;
  quizStarted = false;
  quizFinished = false;
  selectedOptionIndex: number | null = null;
  isAnswered = false;

  get currentQuestion(): Question {
    return this.questions[this.currentQuestionIndex];
  }

  startQuiz() {
    this.quizStarted = true;
    this.resetQuestionState();
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
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.quizStarted = false;
    this.quizFinished = false;
    this.resetQuestionState();
  }
}
