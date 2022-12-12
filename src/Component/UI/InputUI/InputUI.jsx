import React from 'react'
import './InputUI.scss'
function InputUI({ title, plaseholder }) {
	return (
		<div className='InputUI'>
			<div className="InputUI__title">
				<h4 className='InputUI__title--style'>{title}</h4>
			</div>
			<div className="InputUI__send">
				<div className="InputUI__send--email">
					<input className='InputUI__email--style' type="email" placeholder={plaseholder} />
				</div>
				<div className="InputUI__send--submit">
					<input className='InputUI__submi--style' type="submit" value=">" />
				</div>
			</div>
		</div>
	)
}

export default InputUI