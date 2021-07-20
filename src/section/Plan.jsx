import React from 'react';
import { Box, Typography, Button, IconButton } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import PlanSectionHeader from '../component/PlanSectionHeader/PlanSectionHeader';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
const PlanContainer = styled(Box, { name: 'plan-container' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: '100%',
		backgroundColor: '#fff',
		color: '#292C33',
		position: 'relative'
	},
	[theme.breakpoints.up('laptop')]: {
		// when screen hits 1024px,set maxwidth to 900px
		width: '100%',
		maxWidth: '900px',
		margin: '0 auto'
	},
	[theme.breakpoints.up('desktop')]: {
		// when screen hits 1440px,set maxwidth to 1236px
		width: '100%',
		maxWidth: '1236px',
		margin: '0 auto'
	}
}));

const PlanFeature = styled(Box, { name: 'plane-feature-container' })(({ theme }) => ({
	width: '100%',
	height: '500vh'
}));
function ElevationScroll(props) {
	const { children } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
		disableHysteresis: false,
		threshold: 0,
		target: undefined
	});

	return React.cloneElement(children, {
		elevation: trigger ? 1 : 0
	});
}
const Plan = (props) => {
	return (
		<Box
			className='plan-section'
			component='section'
			sx={{ backgroundColor: '#fff', position: 'relative', width: '100%', padding: '0 0 40px 0' }}>
			<PlanContainer>
				<ElevationScroll>
					<PlanSectionHeader />
				</ElevationScroll>
				<PlanFeature></PlanFeature>
			</PlanContainer>
		</Box>
	);
};

export default Plan;
