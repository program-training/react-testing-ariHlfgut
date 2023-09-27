import { useRef, useState } from "react";
import "./InputUrl.css";

export function InputUrl() {
  const [state, setState] = useState("");
  const url = useRef<HTMLInputElement>(null);
  const handleButtonClick = () => {
    if (url.current) {
      const inputValue = url.current.value;
      setMetadata(
        `url: https://api.qrserver.com/v1/create-qr-code/?data=${inputValue}&size=500x500  date: ${new Date()}`
      );
      setState(
        `https://api.qrserver.com/v1/create-qr-code/?data=${inputValue}&size=500x500`
      );
    }
  };
  const [Metadata, setMetadata] = useState("");
  const [showMetadata, setShowMetadata] = useState("");
  const handleButtonClickMetadata = () => {
    if (url.current) {
      setShowMetadata(Metadata);
    }
  };

  return (
    <div className="example">
      <h1>Create a QR</h1>
      <h2>Enter an address</h2>
      <input ref={url} id="url" type="url" />
      <button onClick={handleButtonClick}>Click me</button>
      <br />
      <img src={state} alt="" />
      <br />
      <button onClick={handleButtonClickMetadata}>Data headquarters</button>
      <br />
      <p>{showMetadata}</p>
    </div>
  );
}
