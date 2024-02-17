//import { Accordion } from "./components/Accordion/Accordion";
//import { RandomColor } from "./components/RandomColor/RandomColor";
import {StarRating} from './components/StarRating/StarRating'
function App() {
  return (
    <div className="App">
    
    {/*<Accordion /> */}
    {/*<RandomColor />*/ }
    <StarRating noOfStars={10}/>
    </div>
  );
}

export default App;
