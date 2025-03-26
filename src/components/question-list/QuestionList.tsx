import { useState } from "react";
import { QuestionType } from "../../types/types";
export const QuestionList = ({
  questionData,
}: {
  questionData: QuestionType[];
}) => {
  const [currQuestion, setCurrQuestion] = useState(1);
  console.log(questionData);

  return (
    <div className="flex flex-col bg-[#353962] w-full rounded-xl gap-6 px-3 py-5">
      <div className="flex justify-between px-3">
        {questionData.map((question: QuestionType) => {
          return (
            <button
              key={question.questionNumber}
              onClick={() => setCurrQuestion(question.questionNumber)}
              className="bg-[#393F6E] w-[45px] h-[45px] cursor-pointer rounded-full text-xl"
            >
              {question.questionNumber}
            </button>
          );
        })}
      </div>
      <div className="flex justify-center gap-2 text-xl">
        <div className="flex justify-center items-center gap-2 text-xl">
          {questionData[currQuestion - 1]?.questionText.map((part, index) =>
            part === "{placeholder}" ? (
              questionData[currQuestion - 1]?.questionType ===
              "flagQuestion" ? (
                <img
                  key={index}
                  src={questionData[currQuestion - 1]?.correctAnswer.flags.svg}
                  alt={
                    questionData[currQuestion - 1]?.correctAnswer.name.common
                  }
                  className="w-[25px] h-[20px]"
                />
              ) : (
                <p key={index}>
                  {questionData[currQuestion - 1]?.correctAnswer.capital}
                </p>
              )
            ) : (
              <p key={index}>{part}</p>
            )
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {questionData[currQuestion - 1]?.answers?.map((answer) => (
          <button
            key={answer}
            className="bg-[#393F6E] py-3 cursor-pointer hover:bg-gradient-to-r hover:from-[#E65895] hover:to-[#BC6BE8] text-xl rounded-xl"
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};
