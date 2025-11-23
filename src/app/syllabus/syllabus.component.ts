import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-syllabus',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './syllabus.component.html',
  styleUrl: './syllabus.component.scss'
})
export class SyllabusComponent {
  units = [
    {
      id: 1,
      title: 'Discrete Structures and Optimization',
      topics: ['Mathematical Logic', 'Sets and Relations', 'Counting, Mathematical Induction', 'Graph Theory', 'Boolean Algebra', 'Optimization']
    },
    {
      id: 2,
      title: 'Computer System Architecture',
      topics: ['Digital Logic Circuits', 'Data Representation', 'Register Transfer and Micro-operations', 'Basic Computer Organization', 'Programming the Basic Computer']
    },
    {
      id: 3,
      title: 'Programming Languages and Computer Graphics',
      topics: ['Language Design and Translation Issues', 'Elementary Data Types', 'Programming in C/C++', 'Object Oriented Programming', 'Computer Graphics']
    },
    {
      id: 4,
      title: 'Database Management Systems',
      topics: ['Database System Concepts and Architecture', 'Data Modeling', 'SQL', 'Normalization', 'Transaction Processing']
    },
    {
      id: 5,
      title: 'System Software and Operating System',
      topics: ['System Software', 'Operating System Basics', 'Process Management', 'Memory Management', 'File Systems']
    },
    {
      id: 6,
      title: 'Software Engineering',
      topics: ['Software Process Models', 'Software Requirements', 'Software Design', 'Software Testing', 'Software Quality']
    },
    {
      id: 7,
      title: 'Data Structures and Algorithms',
      topics: ['Data Structures', 'Performance Analysis of Algorithms', 'Design Techniques', 'Lower Bound Theory', 'Graph Algorithms']
    },
    {
      id: 8,
      title: 'Theory of Computation and Compilers',
      topics: ['Theory of Computation', 'Regular Language Models', 'Context Free Language', 'Turing Machines', 'Compiler Design']
    },
    {
      id: 9,
      title: 'Data Communication and Computer Networks',
      topics: ['Data Communication', 'Computer Networks', 'Network Models', 'Functions of OSI and TCP/IP Layers', 'Network Security']
    },
    {
      id: 10,
      title: 'Artificial Intelligence (AI)',
      topics: ['Approaches to AI', 'Knowledge Representation', 'Planning', 'Natural Language Processing', 'Genetic Algorithms']
    }
  ];
}
