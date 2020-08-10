import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import SearchPage from "./pages/SearchPage";
import SavedPage from "./pages/SavedPage";

import { Container } from 'reactstrap';

function App() {
	return (
		<Router>
			<Header />
			<Container>
				<Route exact path="/" component={SearchPage} />
				<Route exact path="/search" component={SearchPage} />
				<Route exact path="/saved" component={SavedPage} />

				{/* <SearchPage /> */}
			</Container>
		</Router>
	);
}


export default App;
