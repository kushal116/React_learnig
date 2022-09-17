import logo from './logo.svg';
import './App.css';
import Users from './curd/Users';
import { RegisterUser } from './form/RegisterUser';
import { Form } from './form/Form';
import { Store } from './components/Store';
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Aboutus } from './components/Aboutus';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import {Conatctdetail} from './components/Conatctdetail';
import { Product, Products } from './components/Products';
import { ProductDetails } from './components/ProductDetails';
import { AddUser } from './curd/AddUser';
import { Login } from './components/Login';

import { ViewUser } from './components/ViewUser';
import Lout from './components/Lout';

function App() {
  return (
    <div className="App">
      {/* <Form/> */}
      <Navbar/>
    {/* <Store/> */}
    {/* <AddUser/> */}
    {/* <RegisterUser></RegisterUser> */}
     {/* <Users></Users> */}

     <Routes>
         <Route path='/Aboutus' element={<Aboutus/>}/> 
         <Route path='/Contact' element={<Contact/>}/>
         <Route path='/Blog' element={<Blog/>}/>
         <Route path="/Conatctdetail/:id" element={<Conatctdetail/>}/>
         <Route path='/Products' element={<Products/>}/>
         <Route path='/Product/:id' element={<ProductDetails/>}/>
         <Route path='/Store' element={<Store/>} />
         <Route path='/view' element={<ViewUser/>} />
         <Route path='/login' element={<Login/>} />
         <Route path='/logout' element={<Lout/>}/>
     </Routes>
    </div>
  );
}

export default App;
