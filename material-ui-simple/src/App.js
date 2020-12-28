import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './Component/Navbar/Navbar';
import Blog from './Component/Blog/Blog';
import PostDetail from './Component/PostDetail/PostDetail';


function App() {
  return (
    <div className="App">
      <Container  maxWidth="sm">
       <Router>
         <Switch>
           <Route path="/blog">
           <Navbar></Navbar>
            <Blog></Blog>
           </Route>
           <Route path="/post/:postId">
           
             <PostDetail></PostDetail>
           </Route>
           <Route exact path="/">
           <Navbar></Navbar>
            <Blog/>
           </Route>
         </Switch>
       </Router>
      </Container>
    </div>
  );
}

export default App;