import { useState, useEffect, useRef } from "react";
import "./App.css";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { sampleWords } from "./lib/sampleWords";

function App() {
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [text]);

  const handleSample = () => {
    setText(sampleWords.join(","));
  };

  const handleGenerate = () => {
    // make array from text
    const wordsArray = text.split(",");

    //   clean array
    const stringWords = wordsArray.map((value) => value.toString());
    const finalWords = stringWords.filter((word) => word.length > 0);
    const section = document.querySelector("section");

    // Check if section is not null before appending
    if (section) {
      for (let i = 0; i < finalWords.length; i += 6) {
        const p = document.createElement("pre");
        p.innerText = `${finalWords[i + 5]};${
          finalWords[i]
        }<br> <br>Noun<br>Ental ubestemt: ${finalWords[i]}<br>Ental bestemt: ${
          finalWords[i + 1]
        }<br>Flertal ubestemt: ${finalWords[i + 2]}<br>Flertal bestemt: ${
          finalWords[i + 3]
        }<br>Gruppe: ${finalWords[i + 4]};[sound:${finalWords[i]}.mp3];`;
        section.appendChild(p);
      }
    }
  };

  return (
    <>
      <h1 className="mb-10">Anki Flash Card Generator</h1>
      <Button onClick={handleSample}>Sample words</Button>
      <div className="grid w-full gap-2">
        <Textarea
          ref={textareaRef}
          onChange={handleOnChange}
          placeholder="write words to generate flash cards separated by commas"
          className="mb-4 resize-none	"
          value={text}
          rows={1}
          spellCheck={false}
        />
        <Button onClick={handleGenerate} className="mb-4">
          Generate flash card codes
        </Button>
      </div>

      <div>Code to copy to Anki app:</div>
      <section></section>
    </>
  );
}

export default App;
