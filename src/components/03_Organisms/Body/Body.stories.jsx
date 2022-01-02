import Body from './Body';

export default {
	title: '03_Organisms/Body',
	component: Body,
};

const Template = (args) => <Body {...args} />;

export const Overview = Template.bind({});
Overview.args = {
	blk: false,
};
