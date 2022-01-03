import Project from './Project';

export default {
	title: '01_Atom/Project',
	component: Project,
};

const Template = (args) => <Project {...args} />;

export const Overview = Template.bind({});
Overview.args = {
	contDt: 'Lorem ipsum',
	contDd: 'Lorem ipsum',
};
