import './Style/reset.scss'
import HeaderContent from './Component/HeaderContent/HeaderContent';
import SectionStart from './Component/SectionStart/SectionStart';
import SectionInvestment from './Component/SectionInvestment/SectionInvestment';
import SectionDiagram from './Component/SectionDiagram/SectionDiagram';
import SectionApply from './Component/SectionApply/SectionApply';
import FooterContent from './Component/FooterContent/FooterContent';

function App() {
	return (
		<div className="App">
			<HeaderContent />
			<SectionStart />
			<SectionInvestment />
			<SectionDiagram />
			<SectionApply />
			<FooterContent />
		</div>
	);
}

export default App;
