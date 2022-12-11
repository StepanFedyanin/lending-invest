import React from 'react'
import './SectionApply.scss'
import SectionPhoto from '../../Resurce/SectionApply.png';
import ButtonUI from '../UI/ButtonUI/ButtonUI';
function SectionApply() {
	return (
		<div className='SectionApply'>
			<div className="SectionApply--container">
				<div className="SectionApply__content">
					<div className="SectionApply__title">
						<h3 className='SectionApply__title--style'>
							Looking to raise capital
							for your growing business?
						</h3>
					</div>
					<div className="SectionApply__description">
						<p className='SectionApply__description--style'>
							Whether expanding or opening a brand-new concept, we make it easy to raise money from thousands of local investors.
						</p>
					</div>
					<div className="SectionApply__btn">
						<ButtonUI color={true}>Apply Online</ButtonUI>
					</div>
				</div>
				<div className="SectionApply__cover">
					<img src={SectionPhoto} alt="" />
				</div>
			</div>
		</div>
	)
}

export default SectionApply