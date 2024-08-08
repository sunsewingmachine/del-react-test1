import { useState } from "react";
import Alert from "./Components/Alert";
import Button from "./Components/Button";
import ListGroup from "./Components/ListGroup";

function App() {
  let items = [
    "Chennai",
    "Madurai",
    "Coimbatore",
    "Tiruchirappalli",
    "Salem",
    "Tirunelveli",
  ];
  const handleSelectItem = (item: string) => {
    console.log("Selected: " + item);
    setChild("Added City: " + item);
    setAlertVisible(true);
  };

  const colorName = "primary";
  // const child = <h2>{colorName} Alert!</h2>;
  const [alertVisible, setAlertVisible] = useState(false);
  const [child, setChild] = useState("Hello");

  return (
    <div className="p-10 m-15">
      {alertVisible && (
        <Alert
          child={child}
          colorName={colorName}
          onClose={() => setAlertVisible(false)}
        />
      )}
      <p></p>
      <Button showAlert={() => setAlertVisible(true)} />
      <p></p>
      <ListGroup
        items={items}
        heading={"Cities"}
        OnSelectItem={handleSelectItem}
      />
      <p>Next List</p>
    </div>
  );
}

export default App;
