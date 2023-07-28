import ListGroup from "./components/ListGroup";
import "./App.css";

function App() {
  const items = ["Leh", "Ladakh", "Shillong", "Manali"];

  return (
    <>
      <ListGroup items={items} heading="Cities" />
    </>
  );
}

export default App;
