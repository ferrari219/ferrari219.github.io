import ImgContLi from './ImgContLi';

export default {
	title: '01_Atom/ImgContLi',
	component: ImgContLi,
};

const Template = (args) => <ImgContLi {...args} />;

export const Overview = Template.bind({});
Overview.args = {
	blk: false,
	contUl: 'Lorem Ipsum',
};
