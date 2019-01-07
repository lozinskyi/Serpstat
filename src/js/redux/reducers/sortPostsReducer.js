import { SORT_POSTS } from './../constants/posts.js'

let initState = '';

export default function findPostsReducer(state = initState, action){
    if(action.type === SORT_POSTS){
        return action.payload;
    }
    return state;
}