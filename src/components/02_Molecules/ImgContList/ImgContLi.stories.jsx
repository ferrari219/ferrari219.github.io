import ImgContList from './ImgContList';

export default {
	title: '02_Molecules/ImgContListst',
	component: ImgContList,
};

const Template = (args) => <ImgContList {...args} />;

export const Overview = Template.bind({});
Overview.args = {
	blk: false,
	contUl: 'Lorem Ipsum',
};
