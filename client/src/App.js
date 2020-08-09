import React from "react";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import Results from "./components/Results/Results";
import { Container } from 'reactstrap';

function App() {
	return (
		<>
			<Header />
			<Container>
				<SearchBar />
				<Results />
			</Container>
		</>
	);
}


export default App;
