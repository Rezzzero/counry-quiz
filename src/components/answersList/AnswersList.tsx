import correctIcon from "../../assets/icons/Check_round_fill.svg";
import wrongIcon from "../../assets/icons/Close_round_fill.svg";
import { QuestionType } from "../../types/types";

export const AnswersList = ({
  disabled,
  currQuestion,
  currQuestionNum,
  selectAnswer,
}: {
  disabled: boolean;
  currQuestion: QuestionType;
  currQuestionNum: number;
  selectAnswer: (selectedAnswer: string, questionNumber: number) => void;
}) => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 gap-2 md:gap-6">
      {currQuestion?.answers?.map((answer) => {
        const isSelected = currQuestion.selectedAnswer === answer;
        const isSelectedWrong =
          currQuestion.selectedAnswer &&
          answer === currQuestion.correctAnswer.name.common;
        const isCorrect = currQuestion.correctAnswer.name.common === answer;
        const showIcon = currQuestion.selectedAnswer !== undefined;

        return (
          <button
            type="button"
            key={answer}
            disabled={disabled}
            onClick={() => selectAnswer(answer, currQuestionNum)}
            className={`flex justify-center items-center gap-2 py-3 lg:py-4 cursor-pointer text-xl rounded-xl 
              ${
                isSelected
                  ? "bg-gradient-to-r from-[#E65895] to-[#BC6BE8]"
                  : "bg-[#393F6E]"
              } 
              hover:bg-gradient-to-r hover:from-[#E65895] hover:to-[#BC6BE8]`}
          >
            {answer}
            {showIcon && (
              <img
                src={isCorrect ? correctIcon : wrongIcon}
                alt={isCorrect ? "correct" : "wrong"}
                className={`${
                  isSelected || isSelectedWrong ? "block" : "hidden"
                } w-[20px] h-[20px]`}
              />
            )}
          </button>
        );
      })}
    </div>
  );
};
