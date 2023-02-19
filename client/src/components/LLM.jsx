import { useEffect, useState } from "react"
const { Configuration, OpenAIApi } = require("openai");

const LLM = () => {
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const [input, setInput] = useState("");

  const [apiResponse, setApiResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const init = "You are a chat bot on a medical imaging platform. Your role is to answer questions about a lung scan showing a covid-19 diagnosis.";
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: init + input,
      temperature: 0.5,
      max_tokens: 4000,
    });
    console.log("response", result.data.choices[0].text);
    setApiResponse(result.data.choices[0].text);
    setLoading(false);
  };



  return (
    <>
        <div className="align-items-center text-center">
          <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">What is your name?</span>
            <span className="label-text-alt">Alt label</span>
          </label>
          <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
          <label className="label">
            <span className="label-text-alt">Alt label</span>
            <span className="label-text-alt">Alt label</span>
          </label>
        </div>
        </div>
    </>
  );
};


export default LLM;
