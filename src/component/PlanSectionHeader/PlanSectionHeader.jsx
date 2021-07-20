import React from 'react';
import { Box, Typography, Button } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

const PlanHeader = styled(Box, { name: 'plan-header' })(({ theme, elevation }) => ({
	[theme.breakpoints.up('mobile')]: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-start',
		backgroundColor: '#fff',
		width: '100%',
		position: 'sticky',
		top: 0,
		left: 0,
		boxShadow: `${elevation === 1 ? '0px 2px 1px -1px rgb(0 0 0 / 20%)' : 'none'}`
	},
	[theme.breakpoints.up('laptop')]: {
		flexDirection: 'row',
		alignItems: 'flex-start'
	}
}));
const PlanOptionCard = styled(Box, { name: 'plan-option-card' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		flexBasis: '33.333333%',
		maxWidth: '33.33333%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		alignSelf: 'stretch',
		justifyContent: 'flex-end',
		textAlign: 'center',
		padding: '8px 8px 16px 8px',
		borderTop: '1px solid #DCDFE6',
		borderBottom: '1px solid #EDEFF2'
	},
	[theme.breakpoints.up('laptop')]: {
		padding: '32px 8px 8px 8px'
	}
}));
const CardBadge = styled(Typography, { name: 'card-button' })(({ theme }) => ({
	width: '100%',
	maxWidth: '160px',
	borderRadius: '15px',
	backgroundColor: '#67728A',
	color: '#fff',
	fontSize: '11px',
	padding: '7px 18px 5px',
	fontWeight: 600,
	letterSpacing: '0.42px',
	textTransform: 'uppercase'
}));
const CardButton = styled(Button, { name: 'card-badge' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: '100px',
		height: '40px',
		borderRadius: '4px',
		backgroundColor: '#040505',
		margin: '16px 0 0 0',
		color: '#fff',
		fontSize: '12px',
		lineHeight: '14px',
		letterSpacing: '1px',
		fontWeight: 600,
		textTransform: 'uppercase',
		'&:hover,&:active': {
			backgroundColor: 'rgba(39,44,53,0.9)'
		}
	},
	[theme.breakpoints.up('tablet')]: {
		width: '120px',
		fontSize: '14px',
		lineHeight: '16px'
	}
}));

const PlanSectionHeader = ({ elevation }) => {
	return (
		<PlanHeader elevation={elevation}>
			<Box
				className='plan-header-title'
				sx={{
					padding: { mobile: '30px', laptop: '30px 30px 30px 0px' },
					width: { mobile: '100%', laptop: '41.66667%' },
					textAlign: { mobile: 'center', laptop: 'left' },
					borderBottom: '1px solid #EDEFF2',
					alignSelf: { tablet: 'stretch' }
				}}>
				<Typography component='h3' variant='plan_head_title' sx={{ padding: '8px 0', margin: '0 0 4px 0' }}>
					Select Your Plan
				</Typography>
				<Typography component='p' className='plan_head_description'>
					No hidden fees, equipment rentals, or
					<br /> installation appointments.
					<br />
					<Typography component='span' sx={{ display: 'block', fontWeight: 700 }}>
						Switch plans or cancel anytime.**
					</Typography>
				</Typography>
			</Box>
			<Box
				className='plan-header-options-container'
				sx={{
					width: { mobile: '100%', laptop: '58.333333%' },
					borderBottom: '1px solid #EDEFF2',
					display: 'flex',
					alignItems: 'center'
				}}>
				{/*Hulu */}
				<PlanOptionCard>
					<CardBadge>most popular</CardBadge>
					<Typography component='h6' variant='plan_card_option_title' sx={{ padding: '8px 0' }}>
						Hulu
					</Typography>
					<Typography component='p' variant='plan_card_option_eyebrow' sx={{ padding: '8px 0' }}>
						30 DAY FREE TRIAL
					</Typography>
					<CardButton>try for $0</CardButton>
				</PlanOptionCard>
				{/*Hulu (no ads) */}
				<PlanOptionCard>
					<CardBadge sx={{ visibility: 'hidden' }}>dummy text</CardBadge>
					<Typography component='h6' variant='plan_card_option_title' sx={{ padding: '8px 0' }}>
						Hulu (No Ads)
					</Typography>
					<Typography component='p' variant='plan_card_option_eyebrow' sx={{ padding: '8px 0' }}>
						30 DAY FREE TRIAL
					</Typography>
					<CardButton>try for $0</CardButton>
				</PlanOptionCard>
				{/*Hulu (live TV) */}
				<PlanOptionCard>
					<CardBadge sx={{ visibility: 'hidden' }}>dummy text</CardBadge>
					<Typography component='h6' variant='plan_card_option_title' sx={{ padding: '8px 0' }}>
						Hulu + Live TV
					</Typography>
					<Typography component='p' variant='plan_card_option_eyebrow' sx={{ padding: '8px 0' }}>
						7 DAY FREE TRIAL
					</Typography>
					<CardButton>try for $0</CardButton>
				</PlanOptionCard>
			</Box>
		</PlanHeader>
	);
};

export default PlanSectionHeader;
