import React, { useState } from 'react'
import ButtonUI from '../UI/ButtonUI/ButtonUI'
import './HeaderContent.scss'
const DropDuwn = ({ title, content }) => {
	return (
		<div className="DropDuwn" >
			<div className="DropDuwn__title">
				<p className='DropDuwn__title--style'>{title} &#9660;</p>
			</div>
			<div
				className="DropDuwn__content"
			>
				<div className="DropDuwn__content--conteiner">
					{
						content.map(item =>
							<div className='DropDuwn__content--item' key={item}>
								<p className='DropDuwn__item--page'>{item}</p>
							</div>
						)
					}
				</div>
			</div>
		</div>
	)
}
function HeaderContent() {
	const [burgerAdaptive, setBurgerAdaptive] = useState(false);
	return (
		<div className='header' style={burgerAdaptive ? { height: '100vh' } : null}>
			<div className="header--container">
				<div className="header__logo">
					<h1 className='header__logo--text'>NEXT INVEST</h1>
				</div>
				<div className={burgerAdaptive ? "header__content--active" : "header__content"} onClick={() => setBurgerAdaptive(false)}>
					<div className="header__content--nav">
						<DropDuwn title="Investment Opportunities" content={['page1', 'page2']} />
						<DropDuwn title="How it works" content={['page1', 'page2']} />
						<div className="header__content--page">
							<p className='header__page--link'>About us</p>
						</div>
					</div>
					<div className="header__content--input">
						<div className="header__input">
							<ButtonUI color={true}>Login</ButtonUI>
						</div>
						<div className="header__input">
							<ButtonUI color={false}>Register</ButtonUI>
						</div>
					</div>
				</div>
				<div className="header__burger" onClick={() => burgerAdaptive ? setBurgerAdaptive(false) : setBurgerAdaptive(true)}>
					<span></span>
				</div>
			</div>

		</div>
	)
}

export default HeaderContent