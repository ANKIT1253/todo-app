import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes ,Route , Navigate} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Tasklist from './pages/TaskList';
import CreateTask from './pages/CreateTask';
import Profile from './pages/Profile';
import PageNotFound from './pages/PageNotFound';
import Navigaton from './components/Navigation';
import Register from './components/Register';
import Login from './components/Login';
import { AuthProvider } from './Context/AuthContext';
import ProtectedRoute from './protected/ProtectedRoute';
import { TaskProvider } from './Context/TaskContext';



function App() {
  return (
   <BrowserRouter>
   <AuthProvider> 
    <TaskProvider>    
   <Navigaton />
     <Routes>
      <Route path='/' element={<Navigate to="/login"/>}></Route>
      <Route path='/' element={<Home />}> 
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Route>
      
      <Route path='/about' element={<About/>}></Route>
      <Route path='/task-list' element={<ProtectedRoute> <Tasklist /> </ProtectedRoute> }></Route>
      <Route path='/create-task' element={<ProtectedRoute>  <CreateTask /> </ProtectedRoute> }></Route>
      <Route path='/profile' element={<ProtectedRoute> <Profile /> </ProtectedRoute> }></Route>
      <Route path='*' element={<PageNotFound />}></Route>  


     </Routes>
     </TaskProvider>
     </AuthProvider>
   </BrowserRouter>
  );
}

export default App;
