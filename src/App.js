import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance"
};

const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("Translation will appear here...");

  function handleInput(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) setMeaning(emojiDictionary[inputEmoji]);
    else setMeaning("failure to recognise this emoji");
  }

  function handleEmojiClick(inputEmoji) {
    setEmoji(inputEmoji);
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input
        onChange={handleInput}
        placeholder={"put an emoji here to know the meaning"}
        value={emoji}
        style={{
          padding: "0.25em",
          minWidth: "80%",
          fontSize: "25px"
        }}
      />
      <h2>{meaning}</h2>
      {emojis.map((emoji) => (
        <span
          onClick={() => handleEmojiClick(emoji)}
          style={{ padding: "0.5rem", fontSize: "35px", cursor: "pointer" }}
          key={emoji}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
}
