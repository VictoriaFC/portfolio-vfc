import './App.css';
import { Route } from 'react-router-dom'
import LandingPage from '../Components/LandingPage'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Work from '../Components/Work'
import Nav from '../Components/Nav'

const App = () => {
  return (
    <div className="App">
			<Nav />
			<LandingPage />
			<About />
			<Contact />
			<Work />
			{/* <Route exact path="/">
				<Nav />
				<LandingPage />
			</Route>

			<Route exact path="/About">
				<About />
			</Route>

			<Route exact path="/Work">
				<Work />
			</Route>

			<Route exact path="/Contact">
				<Contact />
			</Route> */}
    </div>
  );
}

export default App;
