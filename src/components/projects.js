import React, { Component } from 'react';
import {
	Tabs,
	Tab,
	Grid,
	Cell,
	Card,
	CardActions,
	CardMenu,

	CardTitle,
	CardText,
	Button,
	IconButton
} from 'react-mdl';

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = { activeTab: 0 };
	}
	toggleCategories() {
		if (this.state.activeTab === 0) {
			return (
				<Card shadow={5} style={{ minWidth: 'auto', margin: 'auto' }}>
					<CardTitle
						style={{
							color: '#fff',
							/* height: '176px', */
							//background: 'url(https://youtu.be/tXVmcNNZrm8) center /cover'
						}}
					>
                    <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
        showinfo='0'
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
        title='video'
/>
						React Project #1
					</CardTitle>
					{/* <CardText>
						Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit
						standard ända sedan 1500-talet
					</CardText> */}
				</Card>
			);
		} else if (this.state.activeTab === 1) {
			return (
				<div>
					<h1>This is Menu 2</h1>
				</div>
			);
		} else if (this.state.activeTab === 2) {
			return (
				<div>
					<h1>This is Menu 3</h1>
				</div>
			);
		} else if (this.state.activeTab === 3) {
			return (
				<div>
					<h1>This is Menu 4</h1>
				</div>
			);
		}
	}

	render() {
		return (
			<div className="category-tabs">
				<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
					<Tab>Menu 1</Tab>
					<Tab>Menu 2</Tab>
					<Tab>Menu 3</Tab>
					<Tab>Menu 4</Tab>
				</Tabs>
				<section className="projects-grid">
					<Grid className="projects-grid">
						<Cell col={12}>
							<div className="content">{this.toggleCategories()}</div>
						</Cell>
					</Grid>
				</section>
			</div>
		);
	}
}
export default Projects;
