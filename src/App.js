import logo from './logo.svg';
import './App.css';
const name = 'Hasna';
const number =22;
const singer={name:'SM', job:'SQA', titale:'gadha'}

const singerStyle ={
  color: 'red',
  backgroundColor: 'white'

}

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <h1>jsx</h1>
        <div id="countries" className="countries">
          <p></p>
          <p></p>
          <p></p>
        </div>

       <div className="container"><h3>hello react it's my 1st react</h3></div>
        <div className="music">
          <p>Name: {name} </p>
          <p style={
            {color: 'yellow',backgroundColor: 'red'}
          }>Number: { number}</p>
          <p style={singerStyle}>Singer: {singer.name} {singer.job} {singer.titale}</p>
        </div>
        
      </header> */}
    
    <Person name='Hena' nayka="cheka"></Person>
    <Person name='happy' nayka="moushumi"></Person>
    <Person name='Maraz' nayka="moni"></Person>
    <Person name='hero' nayka="khan"></Person>
    <h1 > New Component.YaY</h1>
    <h1 id="newcm"> View Sorce</h1>
    <Friend name="jui" number="1"></Friend>
    <Friend name="liya" number="2"></Friend>
    <Friend name = "hena" number="3"></Friend>
    <Friend name = "maraz" number="4"></Friend>
    

    </div>
  );
}

function Person(props){
  console.log(props);
  return (
  <div className='person'>
    <h1> {props.name} </h1>
  <p>Nayka: {props.nayka} </p>
  </div>
  
  )

}


function Friend(props){
  console.log(props);
  return (
  <div className='friend'>
    <h1> {props.name} </h1>
  <p> {props.number} </p>
  </div>
  
  )

}


export default App;
