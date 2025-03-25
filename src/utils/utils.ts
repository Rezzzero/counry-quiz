import { CountryType } from "../types/types";

interface questionListType {
  [key: string]: string[];
}

const questionList = {
  flagQuestion: ["Which country does this flag", "{placeholder}", "belong to?"],
  capitalQuestion: ["Which country is", "{placeholder}", "the capital?"],
} as questionListType;

export const getQuestion = (countryData: CountryType[]) => {
  const randomIndex = Math.floor(Math.random() * countryData.length);
  const randomCountry = countryData[randomIndex];

  const keys = Object.keys(questionList);

  const randomKey = keys[Math.floor(Math.random() * keys.length)];

  const randomQuestion = questionList[randomKey];

  const answersList = [randomCountry.name.common];

  for (let i = 0; i < 3; ) {
    const randomIndex = Math.floor(Math.random() * countryData.length);
    const randomAnswer = countryData[randomIndex];

    if (
      randomAnswer.name.common !== randomCountry.name.common &&
      !answersList.includes(randomAnswer.name.common)
    ) {
      answersList.push(randomAnswer.name.common);
      i++;
    }
  }

  return {
    question: randomQuestion,
    country: randomCountry,
    type: randomKey,
    answers: answersList,
  };
};
