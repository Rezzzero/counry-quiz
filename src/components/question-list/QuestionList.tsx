import { useState } from "react";
import { QuestionType } from "../../types/types";
export const QuestionList = ({ countryData }: { countryData: any }) => {
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  return (
    <div>
      <div className="flex justify-between pt-5 px-5">
        {countryData.map((country: any, index: number) => {
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
      <p>{questions[0]?.questionText}</p>
    </div>
  );
};
