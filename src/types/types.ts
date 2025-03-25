export interface CountryType {
  area: number;
  borders?: string[];
  capital: string[];
  flags: {
    svg: string;
  };
  independent: boolean;
  name: {
    common: string;
    official: string;
  };
  population: number;
  region: string;
  continents: string[];
  currencies: {
    [key: string]: {
      name: string;
    };
  };
  languages: {
    [key: string]: string;
  };
  unMember: boolean;
  subregion?: string;
}

export interface QuestionType {
  questionText: string;
  questionNumber: number;
  answers: string[];
  correctAnswer: string;
  selectedAnswer?: string;
}
