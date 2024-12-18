import { useState } from "react";
import "./App.css";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

function App() {
  const [text, setText] = useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const ankiCode: string = 

  return (
    <>
      <h1 className="mb-10">Anki Flash Card Generator</h1>
      <div className="grid w-full gap-2">
        <Textarea
          onChange={handleOnChange}
          placeholder="Type your message here."
          className="mb-4"
        />
        <Button className="mb-4">Generate flash card codes</Button>
      </div>
      <div>Code to copy to Anki app:</div>

      <div>{text}</div>
    </>
  );
}

export default App;
