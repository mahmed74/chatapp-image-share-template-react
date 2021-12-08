import React, { useState } from "react";
import "./ChatPage.css";
import FiberManualRecordRoundedIcon from "@material-ui/icons/FiberManualRecordRounded";
import { MessageSharp } from "@material-ui/icons";
import ImagePic from "./Image/test.jpg";
import FileBase from "react-file-base64";

export const ChatPage = () => {
  const [MsgArr, setMsgArr] = useState([]);

  const [message, setMessage] = useState("");
  const [imgMsg, setImgMsg] = useState("");
  const [showImg, setShowImg] = useState(false);
  const [isRecieved, setIsRecieved] = useState();

  const sendMessage = () => {
    setMsgArr((oldItems) => {
      return [...oldItems, { Textmessage: message, selectedFile: imgMsg }];
    });
    setMessage("");
    setImgMsg();
  };

  let handlechange = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  const MessageCreator = (event) => {
    setMessage(event.target.value);
  };

  const recivedFile = (event) => {
    console.log(event.target.value);
    setIsRecieved(event.target.value);
  };

  return (
    <div className="chatpage__main">
      <div className="chat__header">
        <div className="online__logo">
          <h2>mahmed</h2>
        </div>
        <div className="username">
          <FiberManualRecordRoundedIcon className="online" />
        </div>
      </div>

      <div className="chat__messages">
        <div className="chat__byuser">
          <h4>this is users message</h4>
        </div>

        {MsgArr.map((eachMsg, index) => {
          console.log(eachMsg);
          if (eachMsg.selectedFile && !eachMsg.Textmessage) {
            return (
              <div key={index} className="chat__byme">
                <img src={eachMsg.selectedFile} alt="abcd" />
              </div>
            );
          } else {
            return (
              <div key={index} className="chat__byme">
                <h4>{eachMsg.Textmessage} </h4>
              </div>
            );
          }
        })}
        <div
          className={`chat__byme  ${showImg ? "visible" : "invisible"}`}
          style={{
            backgroundColor: "transparent",
          }}
        >
          <img
            src={ImagePic}
            alt="img"
            width={400}
            height={400}
            style={{ width: 400, height: 400 }}
          />
        </div>
      </div>
      <div className="chat__input">
        {/* <form onSubmit={handlechange}> */}
        <div className="message">
          <label>
            <input type="text" onChange={MessageCreator} value={message} />
          </label>
          <label>
            {/* <input
              type="file"
              name="picture"
              id="picture"
              onChange={recivedFile}
              value={isRecieved}
            /> */}

            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) => {
                setImgMsg(base64);
              }}
              value={imgMsg}
            />
          </label>
        </div>
        <div className="sendbtn">
          <button onClick={sendMessage}>Send</button>
        </div>
        {/* </form> */}
      </div>
    </div>
  );
};
