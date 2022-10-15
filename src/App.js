import "./App.css";
import Colors from "./Components/Colors/Colors";
import Interactive from "./Components/Interactive/Interactive";
import Typography from "./Components/Typography/Typography";

function App() {
  return (
    <div className="container">
      <h3 className="letter-spacing-3 uppercase heading">Design System</h3>
      <Colors></Colors>
      <Typography></Typography>
      <Interactive></Interactive>
    </div>
  );
}

export default App;
