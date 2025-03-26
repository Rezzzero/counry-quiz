import { useEffect, useState } from "react";
import { QuestionList } from "./components/question-list/QuestionList";
import axios from "axios";
import { CountryType, QuestionType } from "./types/types";
import { getQuestion } from "./utils/utils";

function App() {
  const [countryData, setCountryData] = useState<CountryType[]>([]);
  const [points, setPoints] = useState(0);
  const [questionData, setQuestionData] = useState<QuestionType[]>([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all?")
      .then((res) => {
        setCountryData(res.data.slice(0, 10));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (countryData.length > 0) {
      setQuestionData(getQuestion(countryData));
    }
  }, [countryData]);

  return (
    <>
      <div className="container mx-auto pt-32 px-5 flex flex-col gap-12 text-white">
        <div className="flex justify-between">
          <p className="text-3xl font-bold">Country Quiz</p>
          <div className="flex justify-between items-center w-[155px] px-4 rounded-full text-lg font-semibold bg-gradient-to-r from-[#E65895] to-[#BC6BE8]">
            <p className="text-sm">🏆</p> <p>{points}/10 Points</p>
          </div>
        </div>
        <QuestionList questionData={questionData} />
      </div>
    </>
  );
}

export default App;
