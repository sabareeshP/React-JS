/**
 * All the contents of the application will go into this?
 * Know how to user .map
 * Know how to work with keys
 */
import React from 'react';
import axios from 'axios';
class ContentTable extends React.Component{
	constructor(props) {
		super(props);
		this.state = {header : [], content: [], search: '', results: []};
		this.sortBy = this.sortBy.bind(this);
		this.searchUpdate = this.searchUpdate.bind(this);
		this.renderResult = this.renderResult.bind(this);
	}
	componentDidMount() {
		axios.get('http://www.json-generator.com/api/json/get/cjCgbuGCOG?indent=2')
		  .then((res) => {
		  	this.setState({
		  		'header' : res.data.header,
		  		'content' : res.data.Data
		  	});
		  });
	}
	sortBy(sortValue) {
		
	}
	searchUpdate(event) {
		this.setState({'search' : event.target.value});
	}
	renderResult() {
		let searchResults = [];
		if(!this.state.search) {
			searchResults = this.state.content;
			const tbody = this.state.content.map(
				(value, key) => {
				  return( <tr key={value.id}>
	      		<td key={value.id + value.name} className="nothingty">{value.name}</td>
	      		<td key={value.id + value.dept}>{value.dept}</td>
	      		<td key={value.id + value.tech}>{value.tech}</td>
	      	</tr>);
	      }
		);
		return tbody;
		}
		searchResults = this.state.content;
		const tbody = this.state.content.map(
			(value, key) =>  {
			  let nameMatch = value.name.toLowerCase().indexOf(this.state.search.toLowerCase()) >=0; 
			  let deptMatch = value.dept.toLowerCase().indexOf(this.state.search.toLowerCase()) >=0; 
			  let techMatch = value.tech.toLowerCase().indexOf(this.state.search.toLowerCase()) >=0; 
			  if(nameMatch || deptMatch || techMatch ) {
			  	return(<tr key={value.id}>
      			<td key={value.id + value.name} className="typo">{value.name}</td>
      			<td key={value.id + value.dept}>{value.dept}</td>
      			<td key={value.id + value.tech}>{value.tech}</td>
      		</tr>);
      	}
    	}
		);
		return tbody;
	}
	render() {
		return (
			<div className="outter">
				<input type="text"  value={this.state.search} onChange={this.searchUpdate} />
				<table>
				  <thead>
				  	<tr>
				  		{this.state.header.map(
			  				(value, key) => <td key={value.id} onClick={this.sortBy('asc')}>{value.value}</td>
			  			)}
			  		</tr>
				  </thead>
				  <tbody>
				      {this.renderResult()}
				  </tbody>
				</table>
			</div>
		);
	}
}

class MainContent extends React.Component{
	constructor(props) {
		super(props);
	}
	render() {
		return (	
			<ContentTable/>
    );
	}
}
export default MainContent;