import React from 'react'
import ButtonUI from '../UI/ButtonUI/ButtonUI'
import './SectionStart.scss'
function SectionStart() {
	return (
		<div className='SectionStart' name="top">
			<div className="SectionStart__content">
				<div className="SectionStart__content--title">
					<h1 className='SectionStart__title--style'>
						Meaningful investments in
						Main Street businesses
					</h1>
				</div>
				<div className="SectionStart__content--description">
					<p className='SectionStart__description--style'>
						Browse vetted investment offerings in communities all over the US.
					</p>
				</div>
				<div className="SectionStart__content--btn">
					<ButtonUI color={true} >Get Started</ButtonUI>
				</div>
			</div>
		</div>
	)
}

export default SectionStart