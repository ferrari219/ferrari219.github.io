import ImgContListLi from './ImgContList';

export default {
	title: '01_Atom/ImgContListLi',
	component: ImgContListLi,
};

const Template = (args) => <ImgContListLi {...args} />;

export const Overview = Template.bind({});
Overview.args = {
	blk: false,
	// contUl: 'Lorem Ipsum',
};
