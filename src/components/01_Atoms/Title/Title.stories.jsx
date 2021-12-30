import Title from './Title';

export default {
	title: '01_Atom/Title',
	component: Title,
};

const Template = (args) => <Title {...args} />;

export const Overview = Template.bind({});
Overview.args = {
	ttl: 'Contact',
	blk: true,
};
