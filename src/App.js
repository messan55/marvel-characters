import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from "./store/store";
import { CharactersTable } from "./components/CharatersTable";
import { CharacterItem } from "./components/CharacterItem";
import 'antd/dist/antd.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/characters" component={() => <CharactersTable />} />
        <Route exact path="/character/:id" component={() => <CharacterItem />} />
      </Router>
    </Provider>
  );
}

export default App;
