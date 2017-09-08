import React from 'react';
import Header from './Header.jsx'
import MainContent from './content.jsx'
class App extends React.Component{
	render() {
	  return (
	  	<div className="mainWrapper">
	    	<Header />
	    	<MainContent />
	    </div>
	  );
	}
}

export default App;
