import Canvas from 'components/02_Molecules/Canvas';
import Cont from './Cont';

export default {
	title: '01_Atom/Cont',
	component: Cont,
};

const Template = (args) => (
	<Canvas>
		<Cont {...args} />
	</Canvas>
);

export const Overview = Template.bind({});
Overview.args = {
	blk: false,
	contP: 'Lorem Ipsum',
	contDt: 'Lorem Ipsum',
	contDd: 'Lorem Ipsum',
};
