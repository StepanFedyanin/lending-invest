import React, { useState } from 'react'
import './SectionInvestment.scss'
import InvestorCard from '../../Resurce/InvestorCard.png'
import ButtonUI from '../UI/ButtonUI/ButtonUI';
const InvestmentCard = () => {
	const [show, setShow] = useState(true);
	const shange = () => {
		if (show) {
			setShow(false)
		} else {
			setShow(true)
		}
	}
	return (
		<div className="InvestmentCard">
			<div className={show ? "InvestmentCard__cover" : 'InvestmentCard__cover--transform'} onClick={() => shange()}>
				<div className="InvestmentCard__cover--img">
					<div className="">
						<img src={InvestorCard} alt="" />
					</div>
					<div className="InvestmentCard__img--description InvestmentCard__description--one">
						<p className='InvestmentCard__img--text'>House</p>
					</div>
					<div className="InvestmentCard__img--description InvestmentCard__description--two">
						<p className='InvestmentCard__img--text'>Family Business</p>
					</div>
				</div>
				<div className="cover__content">
					<div className="cover__content--title">
						<div className="cover__title--item">
							<h3 className='cover__title--style'>Oxalis</h3>
						</div>
						<div className="cover__title--item">
							<p className='cover__title--subtitle'>Brooklyn, NY</p>
						</div>
					</div>
					<div className="cover__content--description">
						<p className='cover__description--text'>
							A recognized leader in language immersion & early education, opening second school.
						</p>
					</div>
					<div className="cover__content--progress">
						<div className="cover__bar">
							<div className="cover__bar--filled"></div>
						</div>
						<div className="cover__progress--description">
							<p className='cover__progress--text'><span>$574,920</span> raised of $1,000,000</p>
						</div>
					</div>
				</div>
			</div>
			<div className={show ? "InvestmentCard__characteristics" : "InvestmentCard__characteristics--transform"} onClick={() => shange()}>
				<div className="cover__content">
					<div className="cover__content--title">
						<div className="cover__title--item">
							<h3 className='cover__title--style'>Oxalis</h3>
						</div>
						<div className="cover__title--item">
							<p className='cover__title--subtitle'>Brooklyn, NY</p>
						</div>
					</div>
					<div className="cover__content--description">
						<p className='cover__description--text'>
							A recognized leader in language immersion & early education, opening second school.
						</p>
					</div>
					<div className="cover__content--progress">
						<div className="cover__bar">
							<div className="cover__bar--filled"></div>
						</div>
						<div className="cover__progress--description">
							<p className='cover__progress--text'><span>$574,920</span> raised of $1,000,000</p>
						</div>
					</div>
				</div>
				<div className="characteristics">
					<div className="characteristics_content">
						<div className="characteristics_content--item">
							<div className="characteristics__item--title">
								<p className='characteristics__title--style'>Security Type</p>
							</div>
							<div className="characteristics__item--value">
								<p className='characteristics__value--style'>Revenue Sharing Note</p>
							</div>
						</div>
						<div className="characteristics_content--item">
							<div className="characteristics__item--title">
								<p className='characteristics__title--style'>Investment Multiple</p>
							</div>
							<div className="characteristics__item--value">
								<p className='characteristics__value--style'>1.4x</p>
							</div>
						</div>
						<div className="characteristics_content--item">
							<div className="characteristics__item--title">
								<p className='characteristics__title--style'>Maturity</p>
							</div>
							<div className="characteristics__item--value">
								<p className='characteristics__value--style'>48 Months</p>
							</div>
						</div>
						<div className="characteristics_content--item">
							<div className="characteristics__item--title">
								<p className='characteristics__title--style'>Min. Investment</p>
							</div>
							<div className="characteristics__item--value">
								<p className='characteristics__value--style'>$100</p>
							</div>
						</div>
					</div>
					<div className="characteristics__btn">
						<button className="characteristics__btn--style">View</button>
					</div>
				</div>
			</div>
		</div >
	)
}
function SectionInvestment() {
	return (
		<div className='SectionInvestment'>
			<div className="SectionInvestment--container">
				<div className="SectionInvestment__title">
					<h1 className='SectionInvestment__title--style'>Offerings open for investment</h1>
				</div>
				<div className="SectionInvestment__decription">
					<p className='SectionInvestment__decription--style'>
						Explore pre-vetted investment opportunities available in a growing number of industry categories.
					</p>
				</div>
				<div className="SectionInvestment__contenet">
					<InvestmentCard />
					<InvestmentCard />
					<InvestmentCard />
					<InvestmentCard />
					<InvestmentCard />
					<InvestmentCard />
				</div>
				<div className="SectionInvestment__btn">
					<ButtonUI color={true}>View All Projects</ButtonUI>
				</div>
			</div>
		</div>
	)
}

export default SectionInvestment