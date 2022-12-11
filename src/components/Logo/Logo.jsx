import Tilt from 'react-parallax-tilt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain } from '@fortawesome/free-solid-svg-icons';

// Styles
import './logo.css';

const Logo = () => {
	return (
		<div className='logo__container'>
			<Tilt
				glareEnable={true}
				glareMaxOpacity={0.8}
				glareColor='lightblue'
				glarePosition='all'
				glareBorderRadius='1em'
				className='logo__tilt'>
				<FontAwesomeIcon className='logo__icon' icon={faBrain} />
			</Tilt>
		</div>
	);
};
export default Logo;
