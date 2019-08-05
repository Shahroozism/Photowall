import React from 'react';
import Photo from './photo';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
//anchor tag, href attribute 
function photoWall(props) {
    return <div>
        <Link className = "addIcon" to="/addPhoto"> </Link>  
        <div className="photoGrid"> 
        {props.posts
        .sort(function(x,y) {
            return y.id - x.id})
        .map((post, index) => <Photo key = {index} post = {post} {...props} index={index} />)} 
        </div> 
</div> 
}

            photoWall.propTypes = {
                posts: PropTypes.array.isRequired,
            
            }

            export default photoWall