export interface QuestionType {
  questionText: string;
  questionNumber: number;
  answers: string[];
  correctAnswer: string;
  selectedAnswer?: string;
}
