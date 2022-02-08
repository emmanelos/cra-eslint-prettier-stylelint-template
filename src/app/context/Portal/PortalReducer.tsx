import { TOGGLE_PORTAL } from '../types';
import { PortalInitialState, PortalAction } from './Portal';

const PortalReducer = (state: PortalInitialState, action: PortalAction) => {
	const { type, payload } = action;

	switch (type) {
		case TOGGLE_PORTAL:
			return {
				portal: payload,
			};

		default:
			return state;
	}
};

export default PortalReducer;
