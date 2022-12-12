import React from 'react'
import './FooterContent.scss'
import Backtotop from '../../Resurce/Backtotop.png'
import InputUI from '../UI/InputUI/InputUI'
import facebook from '../../Resurce/facebook.png';
import twitter from '../../Resurce/twitter.png';
import instagram from '../../Resurce/instagram.png';
function FooterContent() {
	return (
		<div className='FooterContent'>
			<div className="FooterContent--container">
				<div className="FooterContent__content">
					<div className="FooterContent__content--logo">
						<div className="FooterContent__logo">
							<h1 className='FooterContent__logo--text'>NEXT INVEST</h1>
						</div>
						<div className="FooterContent__logo--description">
							<p className='FooterContent__description--text'>
								Copyright © 2020. LogoIpsum. All rights reserved.
							</p>
						</div>
					</div>
					<div className="FooterContent__content--navs">
						<div className="FooterContent__content--nav">
							<div className="FooterContent__nav--title">
								<h5 className='FooterContent__title--style'>Services</h5>
							</div>
							<div className="FooterContent__nav--item">
								<p className='FooterContent__item--style'>Email Marketing</p>
							</div>
							<div className="FooterContent__nav--item">
								<p className='FooterContent__item--style'>Campaigns</p>
							</div>
							<div className="FooterContent__nav--item">
								<p className='FooterContent__item--style'>Branding</p>
							</div>
							<div className="FooterContent__nav--item">
								<p className='FooterContent__item--style'>Offline</p>
							</div>
						</div>
						<div className="FooterContent__content--nav">
							<div className="FooterContent__nav--title">
								<h5 className='FooterContent__title--style'>About</h5>
							</div>
							<div className="FooterContent__nav--item">
								<p className='FooterContent__item--style'>Our Story</p>
							</div>
							<div className="FooterContent__nav--item">
								<p className='FooterContent__item--style'>Benefits</p>
							</div>
							<div className="FooterContent__nav--item">
								<p className='FooterContent__item--style'>Team</p>
							</div>
							<div className="FooterContent__nav--item">
								<p className='FooterContent__item--style'>Careers</p>
							</div>
						</div>
					</div>
					<div className="FooterContent__content--back">
						<a href='#top'>
							<img src={Backtotop} alt="" />
						</a>
					</div>
				</div>
				<div className="FooterContent__connection">
					<InputUI title="Subscribe to our newsletter" plaseholder="Email address" />
					<div className="FooterContent__connection--list">
						<div className="FooterContent__connection--item">
							<img src={facebook} alt="" />
						</div>
						<div className="FooterContent__connection--item">
							<img src={twitter} alt="" />
						</div>
						<div className="FooterContent__connection--item">
							<img src={instagram} alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FooterContent
