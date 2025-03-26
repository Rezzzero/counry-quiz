import congratulations from "../../assets/icons/congrats.png";

export const Congratulations = ({
  points,
  handleRestartQuiz,
}: {
  points: number;
  handleRestartQuiz: () => void;
}) => {
  return (
    <div className="mx-auto flex flex-col bg-[#353962] max-w-[400px] justify-center items-center gap-4 px-6 pt-5 pb-16 rounded-xl">
      <img src={congratulations} alt="congratulations" className="w-full" />
      <h1 className="text-2xl font-medium">
        Congrats! You completed the quiz.
      </h1>
      <h2 className="text-xl mb-6">You answer {points}/10 correctly</h2>
      <button
        type="button"
        onClick={() => handleRestartQuiz()}
        className="flex cursor-pointer bg-gradient-to-r from-[#E65895] to-[#BC6BE8] text-lg items-center font-medium py-4 px-20 rounded-xl"
      >
        Play again
      </button>
    </div>
  );
};
