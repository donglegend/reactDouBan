/**
 * 因该是废弃不用
 */
import React, {Component} from 'react';

import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
// import Subheader from 'material-ui/Subheader';
// import Toggle from 'material-ui/Toggle';


export default class Menu extends Component{

	constructor(props) {
		super(props);
		this.state = {
			open: this.props.open
		}
	}

	render() {
		return (
			<Drawer 
				docked={false}
				open={this.props.open}>
				<List>
					<ListItem primaryText="Sent mail" />
	            	<ListItem primaryText="Drafts" />
				</List>
			</Drawer>
		)
	}

}