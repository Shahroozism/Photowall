
import {database} from '../database/config'

export function startAddingPost(post){
    return (dispatch) => {
        return database.ref('posts').update({[post.id]:post}).then(() => {
dispatch(addPost(post))
        }).catch(error) => {
            console.log(error)
        })
    }
}

export function startLoadingPost() {
    return (dispatch) => {
        return database.ref('posts').once('value').then((snapshop) => {
            let posts = []
           snapshop.forEach((childSnapshot) => {
            posts.push(childSnapshot.val())
           })
           dispatch(loadPosts(posts))
        }).catch(error) => {
            console.log(error)
        })
    }
}

export function startRemovingPost(index,id){
    return() => {
        return database.ref(`posts/${id}`).remove().then(() => {
            dispatch(removePost(index))
        }).catch()
    }
}

export function startAddingComments(comment,postId) {
    return (dispatch)  => {
    return database.ref('comments/+postId').push(comment).then(() => {
        dispatch(addComment(comment,postId))
    }).catch(error) => {
        console.log(error)
    })

    }
}

export function startLoadingComments() {
return(dispatch) => {
    return database.ref('comments').once('value').then(snapshot) => {
        let comments = {}
        snapshot.forEach((childSnapshot) => {
            comments(childSnapshot.key) = Object.values(childSnapshot.val())
        })
        dispatch(loadingComments(comments))
    })
}
}

export function loadComments(comments) {
    return {
        type: 'LOAD_COMMENTS',
        comments
    }
}

export function removePost(index) {
return {
    type: 'REMOVE_POST',
    index
}
}

export function addPost(post){
    return {
        type: 'ADD_POST',
        post
    }
}

export function addComment (comment,postID) {
    return {
        type: 'ADD_COMMENT',
        comment,
        postID
    }
} 

export function loadPosts(posts) {
return {
    type: 'LOAD_POSTS',
    posts
}
}

//adding post 