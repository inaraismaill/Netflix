// import { useQuery } from "@tanstack/react-query";
import Question from "./Question";
import Signup from "./SignUp";
import { useState } from "react";
import data from "../data";

const Faq = () => {
  const [selectedId, setSelectedId] = useState(null);

  const open = (n) => {
    selectedId == n ? setSelectedId(null) : setSelectedId(n);
  };

  // const { isLoading, error, data } = useQuery({
  //   queryKey: ["repoData"],
  //   queryFn: () =>
  //     fetch("http://localhost:3000/questions_and_answers").then((res) =>
  //       res.json()
  //     ),
  //   retry: false,
  // });

  // if (isLoading) return "Loading...";

  // if (error) return "have not any data";

const faqData=data.questions_and_answers
  return (
    <div className="text-white py-[60px]">
      <div className="mycontainer">
        <h2 className="text-[32px] md:text-[48px] text-center font-bold md:font-extrabold">
          Frequently Asked Questions
        </h2>
        <div>
          {faqData &&
            faqData?.map((item) => (
              <Question
                open={open}
                selectedId={selectedId}
                key={item.id}
                id={item.id}
                title={item.question}
                text={item.answer}
              />
            ))}
        </div>
        <div className="mt-[50px] text-center p-5">
          <h3 className="text-[20px]">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <Signup />
        </div>
      </div>
    </div>
  );
};

export default Faq;
