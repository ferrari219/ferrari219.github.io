import Button from './Button';

export default {
	title: '01_Atom/Button',
	component: Button,
};

const Template = (args) => <Button {...args} />;

export const Overview = Template.bind({});
Overview.args = {};
