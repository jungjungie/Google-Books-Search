import React from "react";
import Header from "./components/Header/Header";
import SearchPage from "./pages/SearchPage";

import { Container } from 'reactstrap';

function App() {
	return (
		<>
			<Header />
			<Container>
				<SearchPage />
			</Container>
		</>
	);
}


export default App;
