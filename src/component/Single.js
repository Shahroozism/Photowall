import React, {Component} from 'react';
import Photo from './photo';
import Comments from './Comments';

class Single extends Component {
render() {
    const {match, posts} = this.props
    const id = match.parans.id
    const post = posts.find((post) => post.id === id) 
    const comments = this.props.comments[match.parans.id] || []
    const index = this.props.posts.findIndex((post) => post.id === id )
    if(this.props.loading === true) {
        return<div className="loader"> ...loading </div>
    } else  if (post) {
    
    return <div className='single-photo'>
<Photo post= {post} {...this.props} index={index} />
<Comments startAddingComment={this.props.startAddingComment} comments={comments} id= {id}/> 
    </div>
    } else {
        return <h1> ...no post found! </h1>
}
}
}
export default Single 