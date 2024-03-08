import Home from './pages/home';
import Add from './pages/add';
import Choosing from 'pages/choosing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home/>}/>
				<Route path='/add' element={<Add/>}/>
				<Route path='/sortear' element={<Choosing/>}/>
			</Routes>
		</Router>
	);
}