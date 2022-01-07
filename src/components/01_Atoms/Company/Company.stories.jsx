import Company from './Company';

export default {
	title: '02_Molecules/Company',
	component: Company,
};

const Template = (args) => <Company {...args} />;

export const Overview = Template.bind({});
Overview.args = {};
