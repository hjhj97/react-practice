import { useState } from "react";
import Modal from "./components/Modal";

const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};

const OTHER_CONTENTS_STYLES = {
  position: "relative",
  zIndex: 2,
  backgroundColor: "red",
};

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [result, setResult] = useState("");

  const handleSubmitButton = (msg: string) => {
    setIsOpen(false);
    setResult(msg);
  };
  const handleCancelButton = (msg: string) => {
    setIsOpen(false);
    setResult(msg);
  };

  return (
    <>
      <div style={BUTTON_WRAPPER_STYLES}>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        <Modal
          open={isOpen}
          onSubmit={handleSubmitButton}
          onCancel={handleCancelButton}
          onClose={() => setIsOpen(false)}
        >
          <div>This is Modal</div>
        </Modal>
      </div>

      <div style={OTHER_CONTENTS_STYLES}>Other Contents</div>
      {result && <p>{result}</p>}
    </>
  );
}

export default App;
