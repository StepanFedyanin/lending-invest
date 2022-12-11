import React from 'react'
import './ButtonUI.scss'
function ButtonUI({ children, color }) {
	return (
		<button className={color ? 'ButtonUI--blue' : 'ButtonUI--purple'}>
			{children}
		</button>
	)
}

export default ButtonUI