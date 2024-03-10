import Home from './pages/home';
import Add from './pages/add';
import Choosing from 'pages/choosing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from 'components/Footer';
import DefaultPage from 'components/DefaultPage';
import NotFound from 'pages/NotFound';

export default function AppRouter() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<DefaultPage/>}>
					<Route index element={<Home/>}/>
					<Route path='add' element={<Add/>}/>
					<Route path='sortear' element={<Choosing/>}/>
					<Route path='*' element={<NotFound/>}/>
				</Route>
			</Routes>
			<Footer/>
		</Router>
		
	);
}
