import { useEffect, useState } from "react";
import { QuestionList } from "./components/question-list/QuestionList";
import axios from "axios";

function App() {
  const [countryData, setCountryData] = useState([]);
  const [points, setPoints] = useState(0);
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

  console.log(countryData);
  return (
    <>
      <div className="container mx-auto pt-32 px-5 flex flex-col gap-12 text-white">
        <div className="flex justify-between">
          <p className="text-3xl font-bold">Country Quiz</p>
          <div className="flex justify-between w-[175px] py-1 px-4 rounded-full text-xl font-bold bg-gradient-to-r from-[#E65895] to-[#BC6BE8]">
            <p>🏆</p> <p>{points}/10 Points</p>
          </div>
        </div>
        <div className="bg-[#353962] w-full h-[200px] rounded-xl">
          <QuestionList countryData={countryData} />
        </div>
      </div>
    </>
  );
}

export default App;
