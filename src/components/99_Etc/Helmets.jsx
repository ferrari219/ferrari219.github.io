import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Helmets = () => {
	return (
		<HelmetProvider>
			<Helmet>
				<title>Graham's</title>
			</Helmet>
		</HelmetProvider>
	);
};

export default Helmets;
