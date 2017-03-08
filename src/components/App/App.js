import React from 'react';
import { Link, IndexLink } from 'react-router';
import AppBar from 'material-ui/AppBar';
// import Menu from '../Menu';     
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
// import {List, ListItem} from 'material-ui/List';


import ContentLink from 'material-ui/svg-icons/content/link';

import ActionHome from 'material-ui/svg-icons/action/home';
import ActionBook from 'material-ui/svg-icons/action/book';
import AvMovie from 'material-ui/svg-icons/av/movie';
import AvMusic from 'material-ui/svg-icons/av/music-video';

const styles = {
	active: {
		color: 'red',
		fontSize: 18
	}
}

class App extends React.Component {
	constructor(props) {
		super(props);
		this.handleLeftIconTap = this.handleLeftIconTap.bind(this);
		this.handleClose =  this.handleClose.bind(this)
		this.state  = {
			open: false
		}
	}
	render() {
		return (
			<div>
				<AppBar onLeftIconButtonTouchTap={this.handleLeftIconTap}/>
				<Drawer 
					docked={false}
					open={this.state.open}
					onRequestChange={(open) => this.setState({open})}>
					<IndexLink to="/" onTouchTap={this.handleClose}>
						<MenuItem primaryText="首页" leftIcon={<ActionHome />} />
					</IndexLink>
					<Link to="/movie" onTouchTap={this.handleClose}>
						<MenuItem primaryText="电影" leftIcon={<AvMovie />} />
					</Link>
					<Link to="/music" onTouchTap={this.handleClose}>
						<MenuItem primaryText="音乐" leftIcon={<AvMusic />} />
					</Link>
					<Link to="/book" onTouchTap={this.handleClose}>
						<MenuItem primaryText="读书" leftIcon={<ActionBook />} />
					</Link>
				</Drawer>
			    {this.props.children}
		    </div>
		)
	}
	handleLeftIconTap() {
		this.setState({
			open: true
		})
	}
	handleClose() {
		this.setState({
			open: false
		})
	}
}

App.propTypes = {
  children: React.PropTypes.object,
};

export default App;
