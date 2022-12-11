import ParticlesBg from 'particles-bg';

// Components
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';

// Styles
import './App.css';

const App = () => {
	return (
		<div>
			<header>
				<Logo />
				<Navigation />
			</header>
			<main>
				<h1 className='offscreen'>Smart Brain Detection App</h1>
				<Rank />
				<ImageLinkForm />
				{/* FaceRecognition */}
			</main>
			<ParticlesBg bg={true} color='#ffffff' type='cobweb' />
		</div>
	);
};
export default App;
