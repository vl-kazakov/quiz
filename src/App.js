import "./App.css";
import QuizForm from "./components/form/QuizForm";
import MainWrapper from "./components/wrapper/MainWrapper";

function App() {
  return (
    <div className="App">
      <MainWrapper>
        <QuizForm />
      </MainWrapper>
    </div>
  );
}

export default App;
