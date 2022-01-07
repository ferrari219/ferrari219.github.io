import ExpList from './ExpList';

export default {
	title: '02_Molecules/ExpList',
	component: ExpList,
};

const Template = (args) => <ExpList {...args} />;

export const Overview = Template.bind({});
Overview.args = {};
