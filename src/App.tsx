import "./App.css";
import { CountryDAO } from "./domain/";
import { FetchAdapter } from "./adapters";
import { Main } from "./pages/main";

const baseURL = "https://restcountries.com/v3.1";
const countryDao = new CountryDAO(new FetchAdapter(baseURL));

function App() {
  return (
    <div className="App container">
      <Main countryDao={countryDao} />
    </div>
  );
}

export default App;
