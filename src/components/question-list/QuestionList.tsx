import { useEffect, useState } from "react";
import { CountryType, QuestionType } from "../../types/types";
import { getQuestion } from "../../utils/utils";
export const QuestionList = ({
  countryData,
}: {
  countryData: CountryType[];
}) => {
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [questionData, setQuestionData] = useState<{
    question: string[] | null;
    country: CountryType | null;
    type: string | null;
    answers: string[] | null;
  }>({
    question: null,
    country: null,
    type: null,
    answers: null,
  });

  useEffect(() => {
    if (countryData.length > 0) {
      setQuestionData(getQuestion(countryData));
    }
  }, [countryData]);

  const { question, country, type, answers } = questionData;

  return (
    <div className="flex flex-col bg-[#353962] w-full rounded-xl gap-6 px-3 py-5">
      <div className="flex justify-between px-3">
        {countryData.map((country: CountryType, index: number) => {
          return (
            <button
              key={country.name.common}
              className="bg-[#393F6E] w-[45px] h-[45px] rounded-full text-xl"
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <div className="flex justify-center gap-2 text-xl">
        <div className="flex justify-center gap-2 text-xl">
          {question?.map((part, index) =>
            part === "{placeholder}" ? (
              type === "flagQuestion" ? (
                <img
                  key={index}
                  src={country?.flags.svg}
                  alt={country?.name.common}
                  className="w-[25px]"
                />
              ) : (
                <p key={index}>{country?.capital}</p>
              )
            ) : (
              <p key={index}>{part}</p>
            )
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {answers?.map((answer) => (
          <button key={answer} className="bg-[#393F6E] py-3 text-xl rounded-xl">
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};
