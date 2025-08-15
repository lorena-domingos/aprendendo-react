import Student from "./Student.js";

function App() {
  
  return(
    <>
    <Student name="Lorena Mendes" age={26} isStudent={true}/>
    <Student name="Mel 🐶" age={3} isStudent={false}/>
    <Student />
    </>
  );
}

export default App
