import ListGroup from "./components/ListGroup";

function handleClick(item: string) {
  console.log(item);
}

function App() {
  let items = ["Leh", "Ladakh", "Shimla", "Manali", "Shillong"];

  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleClick} />
    </div>
  );
}

export default App;
