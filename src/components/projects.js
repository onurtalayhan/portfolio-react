import  React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell} from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0};
    }
    toggleCategories(){
        if(this.state.activeTab === 0) {
            return(
                <div><h1>This is Menu 1</h1></div>
            )
        }else if(this.state.activeTab === 1) {
            return (
                <div><h1>This is Menu 2</h1></div>
            )    
        }else if(this.state.activeTab === 2 ){
            return (
                <div><h1>This is Menu 3</h1></div>
            )
        }else if(this.state.activeTab === 3){
            return (
                <div><h1>This is Menu 4</h1></div>
            )  
        }

        }
    
    
    render(){
        return(
            <div className="category-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
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
        )
    }
}
export default Projects;