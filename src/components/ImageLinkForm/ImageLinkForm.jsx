// Styles
import './imageLinkForm.css';

const ImageLinkForm = () => {
	return (
		<section className='detect'>
			<h2 className='detect__title'>{'This magic brain will detect faces in your pictures'}</h2>
			<div className='detect__form'>
				<input type='text' className='detect__url' placeholder='Enter URL here...' />
				<button className='detect__button'>Detect</button>
			</div>
		</section>
	);
};
export default ImageLinkForm;
