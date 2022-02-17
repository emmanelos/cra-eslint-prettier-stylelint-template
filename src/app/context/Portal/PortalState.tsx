import { Reducer, useReducer } from 'react';
import { PortalInitialState, PortalAction, PortalStateProps } from './Portal';
import { PortalReducer } from './PortalReducer';
import { PortalContext } from './PortalContext';

const PortalState = (props: PortalStateProps): JSX.Element => {
	const { children } = props;

	const initialState: PortalInitialState = {
		id: 'portal',
		portal: false,
	};

	const [state, dispatch] = useReducer<
		Reducer<PortalInitialState, PortalAction>
	>(PortalReducer, initialState);

	const togglePortal = () => {
		dispatch({
			type: 'TOGGLE_PORTAL',
			payload: !state.portal,
		});
	};

	return (
		<PortalContext.Provider
			value={{
				id: state.id!,
				portal: state.portal,
				togglePortal,
			}}
		>
			{children}
		</PortalContext.Provider>
	);
};

export default PortalState;
