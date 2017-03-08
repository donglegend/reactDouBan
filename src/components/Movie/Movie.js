import React, {Component} from  "react";

import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import {orange600} from 'material-ui/styles/colors';

import {MovieListData} from '../../utils/api';
import {STAGEW} from "../../utils/Global";


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 20
  },
  gridList: {
    width: 800,
    height: 'auto',
  },
  colorOrange: {
  	color: orange600
  }
};

const datList = MovieListData.data.list;

class MovieList extends Component {
	constructor(props) {
		super(props);
		const Big = STAGEW > 720;
		console.log(Big, STAGEW)
		this.state = {
			cols: Big ? 4 : 3,
			cellHeight: Big ? 220 : 160,
		}
	}

	render() {
		return (
			<div>
				<h2 className="textCenter">热播电影</h2>
				<div style={styles.root}>
					<GridList
						cellHeight={this.state.cellHeight}
						cols={this.state.cols}
						style={styles.gridList}>
						{
							datList.map((item, key) => (
								<GridTile 
									key={key} 
									title={<span>{item.title}</span>} 
									subtitle={ <span>评分: <b style={styles.colorOrange}>{item.rate}</b></span>}>
									<img src={item.cover}/>
								</GridTile>
							))
						}
					</GridList>
				</div>
			</div>
		)
	}
}

export default MovieList;