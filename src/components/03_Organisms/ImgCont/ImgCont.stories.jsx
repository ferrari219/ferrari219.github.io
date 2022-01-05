import ImgCont from './ImgCont';

export default {
	title: '03_Organisms/ImgCont',
	component: ImgCont,
};

const Template = (args) => <ImgCont {...args} />;

export const Overview = Template.bind({});
Overview.args = {
	blk: false,
	// contUl: 'Lorem Ipsum',
};
