import { useState } from "react";
import { QuestionType } from "../../types/types";
import { AnswersList } from "../answersList/AnswersList";

export const QuestionList = ({
  questionData,
  selectAnswer,
}: {
  questionData: QuestionType[];
  selectAnswer: (selectedAnswer: string, questionNumber: number) => void;
}) => {
  const [currQuestionNum, setCurrQuestionNum] = useState(1);
  const currQuestion = questionData[currQuestionNum - 1];

  return (
    <div className="flex flex-col bg-[#353962] w-full rounded-xl gap-6 px-3 py-5">
      <div className="flex justify-between px-3">
        {questionData.map((question: QuestionType) => {
          return (
            <button
              type="button"
              key={question.questionNumber}
              onClick={() => setCurrQuestionNum(question.questionNumber)}
              className={`${
                question.selectedAnswer
                  ? "bg-gradient-to-r from-[#E65895] to-[#BC6BE8]"
                  : "bg-[#393F6E]"
              } bg-[#393F6E] w-[45px] h-[45px] cursor-pointer rounded-full text-xl`}
            >
              {question.questionNumber}
            </button>
          );
        })}
      </div>
      <div className="flex justify-center gap-2 text-xl">
        <div className="flex justify-center items-center gap-2 text-xl">
          {currQuestion?.questionText.map((part, index) =>
            part === "{placeholder}" ? (
              currQuestion?.questionType === "flagQuestion" ? (
                <img
                  key={index}
                  src={currQuestion?.correctAnswer.flags.svg}
                  alt={currQuestion?.correctAnswer.name.common}
                  className="w-[25px] h-[20px]"
                />
              ) : (
                <p key={index}>{currQuestion?.correctAnswer.capital}</p>
              )
            ) : (
              <p key={index}>{part}</p>
            )
          )}
        </div>
      </div>
      <AnswersList
        disabled={currQuestion?.selectedAnswer !== ""}
        currQuestion={currQuestion}
        currQuestionNum={currQuestionNum}
        selectAnswer={selectAnswer}
      />
    </div>
  );
};
