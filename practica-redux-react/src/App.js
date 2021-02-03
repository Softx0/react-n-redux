import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.css';
import pokeImage from './img/pokemonImage.png';

function App() {
  return (
    <div className="App container">
      <div className="row" >
        <div className="col-12" >
          <div className="card mt-5" style={{ maxWidth: '370px' }} >
            <div className="row no-gutters" >
              <div className="col-4" >
                <img src={pokeImage} alt="pokemon" className="card-img" />
              </div>
              <div className="col-8" >
                <div className="card-body" >
                  <div className="card-title h3 text-center" >
                    unidades 30
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
