import React from 'react';
import axios from 'axios';
class InmarsatLogo extends React.Component{
	constructor(props) {
		console.log('header cons');
		super(props);
		this.state = {
			logo : ""
		};
	}
	componentWillMount() {
	}
	componentDidMount() {
		console.log('header CDM');
		axios.get('http://www.json-generator.com/api/json/get/cfeGHecKgi?indent=2')
		  .then((res)=> {
		  	this.setState({logo: res.data.logoUrl, appLogo:res.data.appLogoUrl, userName: res.data.userName});
		  });
	}
	render() {
		console.log('header render');
	  return(
      <div className="logo">
      </div>
	  );
	}
}
class UserName extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			userName: "",
			appLogo: ""
		}
	}
	componentDidMount() {
		axios.get('http://www.json-generator.com/api/json/get/cfeGHecKgi?indent=2')
			.then((res)=> {
				this.setState({userName : res.data.userName, appLogo: res.data.appLogoUrl});
			})
	}
	render() {
		return (
			<div className="app-details">
				<span className="username">{this.state.userName}</span>
			</div>
		);
	}
}
class Header extends React.Component{
	render() {
		return(
			<header>
				<InmarsatLogo />
				<UserName />
			</header>
		);
	}
}

export default Header;