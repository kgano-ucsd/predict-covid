import { useEffect, useState } from "react"
const { Configuration, OpenAIApi } = require("openai");

export default function LLM()  {
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);
  const responding = "Responding..."
  const submit = "Submit";
  const [input, setInput] = useState("");

  const [prompts, setPrompts] = useState([]);
  const [apiResponse, setApiResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  /*

You are a chat bot on a medical imaging platform. 
Your role is to answer questions about a lung scan showing a covid-19 diagnosis. 
The lung scan contains a GradCAM image from an AI analysis indicating signs of a positive covid 19 diagnosis. 
The doctor's notes are as follows: you have been diagnosed with covid 19. You have clouding in your lungs and a difficulty breathing. 
Next steps include quarantining for 14 days and managing symptoms. 
Limit responses to 2 sentences, and word your explanations like I am someone who has 100 IQ.
  */

  const init = "You are a chat bot on a medical imaging platform. Your role is to answer questions about a lung scan pertaining to whether or not someone has covid. The lung scan contains a GradCAM image from an AI analysis indicating the biological features that contributed to their diagnosis. You are permitted to access verified information about COVID-19. If you do not understand the question, say you can not answer.";
  const handleSubmit = async (e) => {
    e.preventDefault();
    setInput("")
    setPrompts(prompts => [...prompts, input])
    setLoading(true);
    const result = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: init + input,
      temperature: 0.5,
      max_tokens: 4000,
    });
    console.log("response", result.data.choices[0].text);
    
    setApiResponse(apiResponse => [...apiResponse, result.data.choices[0].text]);
    console.log("api", apiResponse)
    setLoading(false) 

    
  };


  return (
    <div className="h-40 static p-4 mt-6">
      <div className="flex flex-col justify-center items-center  ">
        <header className="sticky">
          <h1 className="text-3xl h-[20%] font-bold">Interactive Diagnosis</h1>
        </header>
          <div className="sticky flex flex-row justify-center items-center p-4 w-[80%]">
            <input type="text" 
                  placeholder="Ask to learn more..." 
                  className="input input-bordered w-[100%] text-xl font-medium h-20"
                  onChange={(e) => 
                            setInput(e.target.value)
                          } 
            /> 
            <div className="px-4">
              <button className="btn btn-primary normal-case text-white " 
                disabled={input.length === 0}
                type="submit"
                onClick={handleSubmit}>
                  {!loading ? submit : responding}
              </button>
            </div>
          </div>

          <div className="rounded-lg max-h-80% overflow-auto rounded-box bg-netural py-4">
               {apiResponse.map((res, i) => {
                return (
                  <div>
                    <div class="chat chat-end">
                      <div class="chat-bubble chat-bubble-primary text_white">{prompts[i]}</div>
                    </div>
                    <div class="chat chat-start">
                      <div class="chat-bubble chat-bubble-neutral">{res}</div>
                    </div>
                  </div> 
                );
               })}
                
          </div>
      </div>
    </div>
  );
};



