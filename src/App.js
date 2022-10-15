import "./App.css";
import Colors from "./Components/Colors/Colors";
import Typography from "./Components/Typography/Typography";

function App() {
  return (
    <div className="container">
      <h3 className="letter-spacing-3 uppercase heading">Design System</h3>
      <Colors></Colors>
      <Typography></Typography>
    </div>
  );
}

export default App;
