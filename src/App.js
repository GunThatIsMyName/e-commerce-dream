function App() {

  const data = async ()=>{
    const response = await fetch ("http://localhost:8888/api/1-dream?id=recUbK9iAP0DQnYeF");
    const data = await response.json();
    console.log(data)
  }
  data();

  return (
    <h2>E-commerce</h2>
  );
}

export default App;
