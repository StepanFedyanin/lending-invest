import React from 'react'
import Diagram from '../Diagram/Diagram'
import './SectionDiagram.scss'
function SectionDiagram() {
	return (
		<div className='SectionDiagram'>
			<div className="SectionDiagram--container">
				<div className="SectionDiagram__content">
					<div className="SectionDiagram__content--descriprion">
						<div className="SectionDiagram__descriprion--title">
							<h3 className='SectionDiagram__title--style'>
								$7M+ paid out to investors
							</h3>
						</div>
						<div className="SectionDiagram__descriprion--text">
							<p className="SectionDiagram__text--style">
								Next Invest has already paid out over $7M in cash returns to investors. Earn potential cash payments through unique revenue-share and debt financing investments.
							</p>
						</div>
					</div>
					<div className="SectionDiagram__content--diagram">
						<Diagram />
					</div>
				</div>
			</div>
		</div>
	)
}

export default SectionDiagram