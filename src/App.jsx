import './App.css'

function App() {
  let randomSon = Math.floor(Math.random()*90+10);
  console.log(randomSon);
  const a = prompt("Ism kiriting");
  console.log(a);
  const sana = new Date();
  const soat = sana.getHours();
  const minut = sana.getMinutes();
  return (
    <div>
      <div className="box" style={{backgroundColor:(soat>6&&soat<18)?"white":"black"}}>
        <div className="box-bola">
        <h1>Sening isming: {a}</h1>
      <p>Bugungi sana:{sana.getMonth()+1}.{sana.getDate()}.{sana.getFullYear()}</p>
      <h2>Soat: {soat}:{minut}</h2>
      <h3>Random son:{randomSon}</h3>
        </div>
      </div>
      
    </div>
  )
}

export default App