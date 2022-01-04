import React from 'react';
import Canvas from 'components/02_Molecules/Canvas';
import Top from 'components/03_Organisms/Top';
import Body from 'components/03_Organisms/Body';

const HomePresenter = ({ me, iam }) => {
	// console.log(me);
	return (
		<Canvas>
			<Top {...me} />
			<Body iam={iam} />
		</Canvas>
	);
};

export default HomePresenter;
