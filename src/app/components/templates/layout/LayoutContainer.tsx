import { ReactNode } from 'react';
import Layout from './Layout';

export interface LayoutProps {
	children: ReactNode;
}

const LayoutContainer = (props: LayoutProps): JSX.Element => {
	const { children } = props;

	return <Layout children={children} />;
};

export default LayoutContainer;
