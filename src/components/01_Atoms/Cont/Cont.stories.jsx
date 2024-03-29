import Cont from './Cont';

export default {
	title: '01_Atom/Cont',
	component: Cont,
};

const Template = (args) => <Cont {...args} />;

export const Overview = Template.bind({});
Overview.args = {
	blk: false,
	contP: 'Lorem Ipsum',
	contDt: 'Lorem Ipsum',
	contDd: 'Lorem Ipsum',
	contUl: 'Lorem Ipsum',
};
