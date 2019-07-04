import React, { Component } from 'react';  
import Posts from '../../containers/Blog/Posts/Posts';
import AsynComponent from '../../hoc/asyncComponent';
import './Blog.css'; 
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
const asyncNewPost = AsynComponent(()=>{
    return import('../Blog/NewPost/NewPost');
}); 

class Blog extends Component { 
    render () { 
        return (
            <div className="Blog">
                <header>
                    <ul>
                        <li>
                            <NavLink exact to='/posts'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/new-post'>New post</NavLink>
                        </li>
                    </ul>
                </header>  
                <Switch>
                    <Route path="/new-post"  component={asyncNewPost}/> 
                    <Route path="/posts"  component={ Posts } />  
                    <Route render={()=> <h1>Page not found</h1> } />
                    {/*<Redirect from="/" to ="/posts" />*/}  
                </Switch>  
            </div> 
        );
    }
}

export default Blog;