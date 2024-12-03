import "./App.css";

function App() {
  return (
    <>
      <div className="cardFrame">
        <div className="cardName">Monster Name</div>
        <div className="imgPlaceHolder"></div>
        <div className="cardDesc">
          <b>[Monster Type]</b>
          <i>Monster effect</i>
          <hr />
          <p className="stats">ATK/??? DEF/???</p>
        </div>
      </div>
    </>
  );
}

export default App;
