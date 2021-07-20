import React from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import PlanSectionHeader from '../component/PlanSectionHeader/PlanSectionHeader';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import PlanSectionFeature from '../component/PlanSectionFeature/PlanSectionFeature';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import {
	PlanFeatureItem,
	PlanFeatureTitle,
	PlanFeatureInfoBox,
	PlanFeatureInfoDashMark,
	PlanFeatureCheckMark
} from '../component/PlanSectionFeature/PlanSectionFeature';
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
const PlanFeatureFootNote = styled(Box, { name: 'plan-feature-footnote' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: '100%',
		textAlign: 'center',
		fontSize: '10px',
		lineHeight: '17px',
		margin: '20px 0 0 0'
	},
	[theme.breakpoints.up('laptop')]: {
		textAlign: 'left'
	}
}));
const ShowAddonButton = styled(Button, { name: 'plan-addon-controller' })(({ theme, open }) => ({
	[theme.breakpoints.up('mobile')]: {
		...theme.typography.body,
		width: '180px',
		display: `${open === false ? 'flex' : 'none'}`,
		alignItems: 'center',
		padding: '8px 16px'
	}
}));
const HideAddonButton = styled(Button, { name: 'plan-addon-controller' })(({ theme, open }) => ({
	[theme.breakpoints.up('mobile')]: {
		...theme.typography.body,
		width: '180px',
		display: `${open === false ? 'none' : 'flex'}`,
		alignItems: 'center',
		padding: '8px 16px'
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
	const [isAddonOpen, setIsAddonOpen] = React.useState(false);
	const toggleAddon = () => {
		setIsAddonOpen((previous) => !previous);
	};
	console.log('isAddonOpen:', isAddonOpen);
	return (
		<Box
			className='plan-section'
			component='section'
			sx={{ backgroundColor: '#fff', position: 'relative', width: '100%', padding: '0 0 40px 0' }}>
			<PlanContainer>
				<ElevationScroll>
					<PlanSectionHeader />
				</ElevationScroll>
				<PlanSectionFeature />
				<PlanFeatureFootNote>
					*For current-season shows in the streaming library only.
					<br />
					**Switches from Live TV to Hulu take effect as of the next billing cycle
				</PlanFeatureFootNote>
				<Box
					sx={{
						width: '100%',
						height: '70px',
						display: `${isAddonOpen === false ? 'flex' : 'none'}`,
						marginTop: '50px',
						justifyContent: 'center',
						alignItems: 'center',
						borderTop: '1px solid #DCDFE6',
						borderBottom: '1px solid #DCDFE6',
						zIndex: 1
					}}>
					<ShowAddonButton endIcon={<KeyboardArrowDownIcon />} onClick={() => toggleAddon()} open={isAddonOpen}>
						show Add-ons
					</ShowAddonButton>
				</Box>
				<Box
					className='available-addons -container'
					sx={{
						width: '100%',
						position: 'relative',
						zIndex: 1,
						display: `${isAddonOpen === false ? 'none' : 'block'}`
					}}>
					<Box
						className='available_addons_header-title'
						sx={{
							padding: { mobile: '30px', laptop: '30px 30px 30px 0px' },
							width: { mobile: '100%', laptop: '41.66667%' },
							textAlign: { mobile: 'center', laptop: 'left' },
							borderBottom: '1px solid #EDEFF2',
							alignSelf: { tablet: 'stretch' }
						}}>
						<Typography
							component='h3'
							variant='available_addons_head_title'
							sx={{ padding: '8px 0', margin: '0 0 4px 0' }}>
							Available Add-ons
						</Typography>
						<Typography component='p' className='available-addons_head_description'>
							Add-ons available at an additional cost.
							<br /> Add them up after you sign up for Hulu.
						</Typography>
					</Box>
					{/*CINEMAX® */}
					<PlanFeatureItem>
						<PlanFeatureTitle>CINEMAX®</PlanFeatureTitle>
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
					{/*SHOWTIME® */}
					<PlanFeatureItem>
						<PlanFeatureTitle>SHOWTIME®</PlanFeatureTitle>
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
					{/*STARZ® */}
					<PlanFeatureItem>
						<PlanFeatureTitle>STARZ®</PlanFeatureTitle>
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
					{/*Unlimited Screens */}
					<PlanFeatureItem>
						<PlanFeatureTitle>Unlimited Screens</PlanFeatureTitle>
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
					{/*Enhanced Cloud DVREnhanced Cloud DVR*/}
					<PlanFeatureItem>
						<PlanFeatureTitle>Enhanced Cloud DVREnhanced Cloud DVR</PlanFeatureTitle>
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
					{/*Entertainment Add-on*/}
					<PlanFeatureItem>
						<PlanFeatureTitle>Entertainment Add-on</PlanFeatureTitle>
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
					{/*Español Add-on*/}
					<PlanFeatureItem>
						<PlanFeatureTitle>Español Add-on</PlanFeatureTitle>
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
				</Box>
				<Box
					sx={{
						width: '100%',
						height: '70px',
						display: `${isAddonOpen === false ? 'none' : 'flex'}`,
						marginTop: '50px',
						justifyContent: 'center',
						alignItems: 'center',
						borderTop: '1px solid #DCDFE6',
						borderBottom: '1px solid #DCDFE6',
						position: 'relative',
						zIndex: 1
					}}>
					<HideAddonButton endIcon={<ArrowUpwardIcon />} onClick={() => toggleAddon()} open={isAddonOpen}>
						Hide Add-ons
					</HideAddonButton>
				</Box>
			</PlanContainer>
		</Box>
	);
};

export default Plan;
