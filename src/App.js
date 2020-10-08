import React, { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  Icon,
  Input,
  InputLabel,
} from "@material-ui/core";
import "./App.css";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState("");
  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  });

  useEffect(() => {
    setUserName(prompt("Enter your name"));
  }, []);

  const sendMessages = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      message: input,
      username: userName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    handleScroll(messages[messages.length].id);
    setInput("");
  };

  const handleScroll = (ref) => {
    window.scrollTo(0, ref.current.offsetTop);
  };
  return (
    <div className="App">
      <h1>Welcome guys</h1>
      <h2>Hello {userName}</h2>
      <form className="app__form">
        <FormControl className="app_formControl">
          <Input
            className="app__input"
            placeholder="Enter a message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <IconButton
            type="submit"
            onClick={sendMessages}
            color="primary"
            variant="outlined"
            className="app__iconButton"
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessages}
            disabled={!input}
          ></IconButton>
          <Button>
            <SendIcon />
          </Button>
        </FormControl>
      </form>

      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={userName} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
