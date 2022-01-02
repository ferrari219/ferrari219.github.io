import Top from './Top';

export default {
	title: '02_Molecules/Top',
	component: Top,
};

const Template = (args) => <Top {...args} />;

export const Overview = Template.bind({});
Overview.args = {
	blk: false,
};
