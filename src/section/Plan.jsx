import React from 'react';
import { Box, Typography } from '@material-ui/core';
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
	width: '100%'
}));
const PlanFeatureItem = styled(Box, { name: 'plan-feature-item' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-start',
		borderBottom: '1px solid #EDEFF2',
		width: '100%'
	},
	[theme.breakpoints.up('laptop')]: {
		flexDirection: 'row'
	}
}));
const PlanFeatureTitle = styled(Box, { name: 'plan-feature-title' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		display: 'flex',
		width: '100%',
		maxWidth: '320px',
		margin: '0 auto',
		padding: '6px 12px 8px 12px',
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
		fontSize: '14px',
		lineHeight: '22px'
	},
	[theme.breakpoints.up('laptop')]: {
		justifyContent: 'flex-start',
		padding: '20px 0 ',
		fontSize: '16px',
		lineHeight: '24px',
		maxWidth: '41.66667%',
		textAlign: 'left'
	}
}));
const PlanFeatureInfoBox = styled(Box, { name: 'plan-feature-info' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: '100%',
		flexBasis: '33.333333%',
		maxWidth: '33.33333%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		padding: '7px 10px 17px 10px'
	},
	[theme.breakpoints.up('laptop')]: {
		flexBasis: '33.333334%',
		maxWidth: '33.333334%',
		padding: '20px 0px'
	}
}));
const PlanFeatureInfoText = styled(Typography, { name: 'plan-feature-info-text' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		fontSize: '16px',
		lineHeight: '18px',
		fontWeight: 400
	},
	[theme.breakpoints.up('tablet')]: {
		fontSize: '18px',
		lineHeight: '18px',
		fontWeight: 400
	}
}));
const PlanFeatureInfoDashMark = styled(Typography, { name: 'plan-feature-info-dash' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		fontSize: '16px',
		lineHeight: '18px',
		fontWeight: 400,
		color: '#B8BECC'
	},
	[theme.breakpoints.up('tablet')]: {
		fontSize: '18px',
		lineHeight: '18px',
		fontWeight: 400
	}
}));
const PlanFeatureCheckMark = styled('figure', { name: 'plan-feature-info-check' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		backgroundImage: 'url(./plan/checkmark.svg)',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		width: '21px',
		height: '16px',
		margin: 0
	}
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
				<PlanFeature>
					{/*Price after free trial  */}
					<PlanFeatureItem>
						<PlanFeatureTitle>Price after free trial</PlanFeatureTitle>
						<Box
							className='feature-info-container'
							sx={{ display: 'flex', width: '100%', maxWidth: { mobile: '100%', laptop: '58.333334%' } }}>
							<PlanFeatureInfoBox>
								<PlanFeatureInfoText>$5.99/mo</PlanFeatureInfoText>
							</PlanFeatureInfoBox>
							<PlanFeatureInfoBox>
								<PlanFeatureInfoText>$11.99/mo</PlanFeatureInfoText>
							</PlanFeatureInfoBox>
							<PlanFeatureInfoBox>
								<PlanFeatureInfoText>$64.99/mo</PlanFeatureInfoText>
							</PlanFeatureInfoBox>
						</Box>
					</PlanFeatureItem>
					{/*Streaming Library with thousands of TV episodes and movies  */}
					<PlanFeatureItem>
						<PlanFeatureTitle>Streaming Library with thousands of TV episodes and movies </PlanFeatureTitle>
						<Box
							className='feature-info-container'
							sx={{ display: 'flex', width: '100%', maxWidth: { mobile: '100%', laptop: '58.333334%' } }}>
							<PlanFeatureInfoBox>
								<PlanFeatureCheckMark />
							</PlanFeatureInfoBox>
							<PlanFeatureInfoBox>
								<PlanFeatureCheckMark />
							</PlanFeatureInfoBox>
							<PlanFeatureInfoBox>
								<PlanFeatureCheckMark />
							</PlanFeatureInfoBox>
						</Box>
					</PlanFeatureItem>
					{/*Most new episodes the day after they air  */}
					<PlanFeatureItem>
						<PlanFeatureTitle>Most new episodes the day after they air </PlanFeatureTitle>
						<Box
							className='feature-info-container'
							sx={{ display: 'flex', width: '100%', maxWidth: { mobile: '100%', laptop: '58.333334%' } }}>
							<PlanFeatureInfoBox>
								<PlanFeatureCheckMark />
							</PlanFeatureInfoBox>
							<PlanFeatureInfoBox>
								<PlanFeatureCheckMark />
							</PlanFeatureInfoBox>
							<PlanFeatureInfoBox>
								<PlanFeatureCheckMark />
							</PlanFeatureInfoBox>
						</Box>
					</PlanFeatureItem>
					{/*Access to award-winning Hulu Originals */}
					<PlanFeatureItem>
						<PlanFeatureTitle>Access to award-winning Hulu Originals </PlanFeatureTitle>
						<Box
							className='feature-info-container'
							sx={{ display: 'flex', width: '100%', maxWidth: { mobile: '100%', laptop: '58.333334%' } }}>
							<PlanFeatureInfoBox>
								<PlanFeatureCheckMark />
							</PlanFeatureInfoBox>
							<PlanFeatureInfoBox>
								<PlanFeatureCheckMark />
							</PlanFeatureInfoBox>
							<PlanFeatureInfoBox>
								<PlanFeatureCheckMark />
							</PlanFeatureInfoBox>
						</Box>
					</PlanFeatureItem>
					{/*Watch on your TV, laptop, phone, or tablet */}
					<PlanFeatureItem>
						<PlanFeatureTitle>Watch on your TV, laptop, phone, or tablet </PlanFeatureTitle>
						<Box
							className='feature-info-container'
							sx={{ display: 'flex', width: '100%', maxWidth: { mobile: '100%', laptop: '58.333334%' } }}>
							<PlanFeatureInfoBox>
								<PlanFeatureCheckMark />
							</PlanFeatureInfoBox>
							<PlanFeatureInfoBox>
								<PlanFeatureCheckMark />
							</PlanFeatureInfoBox>
							<PlanFeatureInfoBox>
								<PlanFeatureCheckMark />
							</PlanFeatureInfoBox>
						</Box>
					</PlanFeatureItem>
					{/*Up to 6 user profiles */}
					<PlanFeatureItem>
						<PlanFeatureTitle>Up to 6 user profiles </PlanFeatureTitle>
						<Box
							className='feature-info-container'
							sx={{ display: 'flex', width: '100%', maxWidth: { mobile: '100%', laptop: '58.333334%' } }}>
							<PlanFeatureInfoBox>
								<PlanFeatureCheckMark />
							</PlanFeatureInfoBox>
							<PlanFeatureInfoBox>
								<PlanFeatureCheckMark />
							</PlanFeatureInfoBox>
							<PlanFeatureInfoBox>
								<PlanFeatureCheckMark />
							</PlanFeatureInfoBox>
						</Box>
					</PlanFeatureItem>
					{/*Watch on 2 different screens at the same time */}
					<PlanFeatureItem>
						<PlanFeatureTitle>Watch on 2 different screens at the same time</PlanFeatureTitle>
						<Box
							className='feature-info-container'
							sx={{ display: 'flex', width: '100%', maxWidth: { mobile: '100%', laptop: '58.333334%' } }}>
							<PlanFeatureInfoBox>
								<PlanFeatureCheckMark />
							</PlanFeatureInfoBox>
							<PlanFeatureInfoBox>
								<PlanFeatureCheckMark />
							</PlanFeatureInfoBox>
							<PlanFeatureInfoBox>
								<PlanFeatureCheckMark />
							</PlanFeatureInfoBox>
						</Box>
					</PlanFeatureItem>
					{/*No ads in streaming library */}
					<PlanFeatureItem>
						<PlanFeatureTitle>No ads in streaming library</PlanFeatureTitle>
						<Box
							className='feature-info-container'
							sx={{ display: 'flex', width: '100%', maxWidth: { mobile: '100%', laptop: '58.333334%' } }}>
							<PlanFeatureInfoBox>
								<PlanFeatureInfoDashMark>—</PlanFeatureInfoDashMark>
							</PlanFeatureInfoBox>
							<PlanFeatureInfoBox>
								<PlanFeatureCheckMark />
							</PlanFeatureInfoBox>
							<PlanFeatureInfoBox>
								<PlanFeatureInfoDashMark>—</PlanFeatureInfoDashMark>
							</PlanFeatureInfoBox>
						</Box>
					</PlanFeatureItem>
					{/*Download and watch*/}
					<PlanFeatureItem>
						<PlanFeatureTitle>Download and watch</PlanFeatureTitle>
						<Box
							className='feature-info-container'
							sx={{ display: 'flex', width: '100%', maxWidth: { mobile: '100%', laptop: '58.333334%' } }}>
							<PlanFeatureInfoBox>
								<PlanFeatureInfoDashMark>—</PlanFeatureInfoDashMark>
							</PlanFeatureInfoBox>
							<PlanFeatureInfoBox>
								<PlanFeatureCheckMark />
							</PlanFeatureInfoBox>
							<PlanFeatureInfoBox>
								<PlanFeatureInfoDashMark>—</PlanFeatureInfoDashMark>
							</PlanFeatureInfoBox>
						</Box>
					</PlanFeatureItem>
					{/*Live TV with 75+ top channels. No cable requiredLive TV with 75+ top channels. No cable required*/}
					<PlanFeatureItem>
						<PlanFeatureTitle>
							Live TV with 75+ top channels.
							<br /> No cable requiredLive TV with <br />
							75+ top channels.
							<br /> No cable required
						</PlanFeatureTitle>
						<Box
							className='feature-info-container'
							sx={{ display: 'flex', width: '100%', maxWidth: { mobile: '100%', laptop: '58.333334%' } }}>
							<PlanFeatureInfoBox>
								<PlanFeatureInfoDashMark>—</PlanFeatureInfoDashMark>
							</PlanFeatureInfoBox>
							<PlanFeatureInfoBox>
								<PlanFeatureInfoDashMark>—</PlanFeatureInfoDashMark>
							</PlanFeatureInfoBox>
							<PlanFeatureInfoBox>
								<PlanFeatureCheckMark />
							</PlanFeatureInfoBox>
						</Box>
					</PlanFeatureItem>
					{/*Live TV guide to navigate channels*/}
					<PlanFeatureItem>
						<PlanFeatureTitle>Live TV guide to navigate channels</PlanFeatureTitle>
						<Box
							className='feature-info-container'
							sx={{ display: 'flex', width: '100%', maxWidth: { mobile: '100%', laptop: '58.333334%' } }}>
							<PlanFeatureInfoBox>
								<PlanFeatureInfoDashMark>—</PlanFeatureInfoDashMark>
							</PlanFeatureInfoBox>
							<PlanFeatureInfoBox>
								<PlanFeatureInfoDashMark>—</PlanFeatureInfoDashMark>
							</PlanFeatureInfoBox>
							<PlanFeatureInfoBox>
								<PlanFeatureCheckMark />
							</PlanFeatureInfoBox>
						</Box>
					</PlanFeatureItem>
					{/*Record Live TV with 50 hours of Cloud DVR storage*/}
					<PlanFeatureItem>
						<PlanFeatureTitle>
							Record Live TV with 50 hours of
							<br /> Cloud DVR storage
						</PlanFeatureTitle>
						<Box
							className='feature-info-container'
							sx={{ display: 'flex', width: '100%', maxWidth: { mobile: '100%', laptop: '58.333334%' } }}>
							<PlanFeatureInfoBox>
								<PlanFeatureInfoDashMark>—</PlanFeatureInfoDashMark>
							</PlanFeatureInfoBox>
							<PlanFeatureInfoBox>
								<PlanFeatureInfoDashMark>—</PlanFeatureInfoDashMark>
							</PlanFeatureInfoBox>
							<PlanFeatureInfoBox>
								<PlanFeatureCheckMark />
							</PlanFeatureInfoBox>
						</Box>
					</PlanFeatureItem>
				</PlanFeature>
			</PlanContainer>
		</Box>
	);
};

export default Plan;
