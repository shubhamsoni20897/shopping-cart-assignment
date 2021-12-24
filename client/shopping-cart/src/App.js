import logo from './logo.svg';
import React,{Component} from 'react'
import {HashRouter,Route,BrowserRouter,Routes,Switch} from 'react-router-dom'
import './App.css';
import Dashboard from './pages/dashboard/dashboard';
import Products from './pages/products/product';
import Login from './pages/login/login';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Register from './pages/register/register';
// import 'bootstrap/dist/css/bootstrap.min.css';
// const Dashboard =React.lazy(()=>import('./pages/dashboard/dashboard'))
function App(props) {
  return (
    <>
    <Routes>

      <Route exact path='/'  element={<Dashboard/>}/>
      <Route  path='/dashboard'  element={<Dashboard/>}/>

      <Route  path='/login'  element={<Login/>}/>
      <Route  path='/register'  element={<Register/>}/>
      <Route  path='/products'  element={<Products {...props}/>}/>
      <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
    </Routes>

    {/* <Products/> */}
    {/* <Header/> */}
     {/* <Dashboard/> */}
{/* <Register/> */}
    {/* <Login/> */}
    {/* <Footer/> */}
    </>
    //  <BrowserRouter>
    //  <Routes>

    //    <Route exact path='/' name="Dashboard" component={Dashboard}/>
    //  </Routes>
    //  </BrowserRouter>
  );
}

export default App;
