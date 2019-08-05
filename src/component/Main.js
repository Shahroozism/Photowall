import React, { Component } from 'react';
import Title from './Title';
import photoWall from './photowall';
import AddPhoto from './AddPhoto';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {removePost} from '../redux/actions';
import Single from './Single'

class Main extends Component {

 state = {
     loading: true 
 }   

componentDidMount () {
    this.props.startLoadingpost().then(() => {
        this.setState({loading: false})
    })
    this.props.startLoadingComments()
}
render () {

       return (
        <div> 
            <h1> <Link to="/"> PhotoWall </Link> </h1>
            <Route exact path = "/" render={() => (
                <div>   
                <PhotoWall {...this.props} />
                </div>
            )}/>

            <Route path = "/addPhoto" render = {({history}) => (
                <AddPhoto {...this.props} onHistory={history}/>
            )}/>
            )}/> 

<Route path="/single/:id" render = {(parans) => (
<Single loading={this.state.loading}{...this.props} {...parans}/>
)}/>
</div>
        )
                }
}
         

export default Main