import { CountryType, QuestionType } from "../types/types";

interface questionListType {
  [key: string]: string[];
}

const questionVariants = {
  flagQuestion: ["Which country does this flag", "{placeholder}", "belong to?"],
  capitalQuestion: ["Which country is", "{placeholder}", "the capital?"],
} as questionListType;

export const getQuestion = (countryData: CountryType[]) => {
  let questionsList = [] as QuestionType[];
  const keys = Object.keys(questionVariants);
  countryData.map((country: CountryType, index: number) => {
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    const question = questionVariants[randomKey];
    const answersList = [] as string[];
    for (let i = 0; i < 3; ) {
      const randomCountry =
        countryData[Math.floor(Math.random() * countryData.length)];
      if (
        !answersList.includes(randomCountry.name.common) &&
        randomCountry.name.common !== country.name.common
      ) {
        answersList.push(randomCountry.name.common);
        i++;
      }
    }
    questionsList = [
      ...questionsList,
      {
        questionText: question,
        questionNumber: index + 1,
        answers: [country.name.common, ...answersList],
        correctAnswer: country,
        selectedAnswer: "",
        questionType: randomKey,
      },
    ];
  });

  return questionsList;
};
