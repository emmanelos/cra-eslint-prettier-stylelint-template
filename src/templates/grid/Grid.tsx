import React, { FC } from 'react';
import './Grid.scss';

interface Props {
	children: React.ReactNode;
}

const Grid = ({ children }: Props): JSX.Element => {
	return <div className="grid">{children}</div>;
};

export default Grid;
