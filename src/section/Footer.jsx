import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import FaceBook from '../component/Icon/Facebook';
import Twitter from '../component/Icon/twitter';
import Instagram from '../component/Icon/instagram';
import YouTube from '../component/Icon/youtube';
const Container = styled(Box, { name: 'footer-container' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		backgroundColor: '#EBEDF2',
		padding: '0 20px',
		width: '100%'
	},
	[theme.breakpoints.up('tablet')]: {
		maxWidth: '768px',
		padding: '0 20px',
		margin: '0 auto'
	},
	[theme.breakpoints.up('laptop')]: {
		maxWidth: '1024px',
		padding: '0 40px'
	},
	[theme.breakpoints.up('desktop')]: {
		padding: '0 140px',
		maxWidth: '1440px',
		margin: '0 auto'
	}
}));
const BrowseRow = styled(Box, { name: 'browse-row-container' })(({ theme }) => ({
	[theme.breakpoints.up('tablet')]: {
		padding: '0 8px 23px 8px',
		flexGrow: 0,
		flexShrink: 0,
		flexBasis: '100%',
		maxWidth: '100%',
		display: 'flex',
		flexWrap: 'wrap',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start'
	},
	[theme.breakpoints.up('laptop')]: {
		padding: '0 8px',
		flexGrow: 0,
		flexShrink: 0,
		flexBasis: '66.666667%',
		maxWidth: '66.66667%'
	}
}));
const BrowseColumn = styled(Box, { name: 'browse-link-column' })(({ theme }) => ({
	flexBasis: '25%',
	maxWidth: '25%',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	justifyContent: 'flex-start'
}));
const OneColumn = styled(Box, { name: 'one-column' })(({ theme }) => ({
	flexBasis: '100%',
	maxWidth: '100%',
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	justifyContent: 'flex-start'
}));
const HelpRow = styled(Box, { name: 'help-row-container' })(({ theme }) => ({
	[theme.breakpoints.up('tablet')]: {
		padding: '0 0 23px 8px',
		flexGrow: 0,
		flexShrink: 0,
		flexBasis: '24.45054945054945%',
		maxWidth: '24.45054945054945%',
		display: 'flex',
		flexWrap: 'wrap',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		margin: '0 0 0 8px'
	},
	[theme.breakpoints.up('laptop')]: {
		padding: '0 8px',
		flexGrow: 0,
		flexShrink: 0,
		flexBasis: '16.66667%',
		maxWidth: '16.66667%',
		margin: 0
	}
}));
const AboutRow = styled(Box, { name: 'help-row-container' })(({ theme }) => ({
	[theme.breakpoints.up('tablet')]: {
		padding: '0 8px 23px 0',
		flexGrow: 0,
		flexShrink: 0,
		flexBasis: '24.45054945054945%',
		maxWidth: '24.45054945054945%',
		display: 'flex',
		flexWrap: 'wrap',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start'
	},
	[theme.breakpoints.up('laptop')]: {
		padding: '0 8px',
		flexGrow: 0,
		flexShrink: 0,
		flexBasis: '16.66667%',
		maxWidth: '16.66667%'
	}
}));
const FooterHeader = styled(Typography, { name: 'footer-header' })(({ theme }) => ({
	fontSize: '12px',
	fontWeight: 700,
	color: '#262930',
	lineHeight: '28px',
	padding: '8px 0',
	margin: 0,
	textTransform: 'uppercase',
	width: '100%'
}));
const SiteLink = styled(Typography, { name: 'site-link' })(({ theme }) => ({
	...theme.typography.body,
	fontSize: '14px',
	color: '#656B7B',
	backgroundColor: 'transparent',
	cursor: 'pointer',
	padding: '0 32px 8px 0',
	width: '100%',
	'&:hover,&:active,&:focus': {
		color: '#3370BB'
	}
}));
const LegalLink = styled(Typography, { name: 'legal-link' })(({ theme }) => ({
	...theme.typography.body,
	margin: '0 32px 0 0 ',
	lineHeight: '32px',
	fontSize: '12px',
	color: '#656B7B',
	textAlign: 'left',
	backgroundColor: 'transparent',
	display: 'flex',
	alignItems: 'center',
	'&:hover,&:active,&:focus': {
		color: '#3370BB'
	}
}));
const AboutAdsImage = styled('figure', { name: 'about-ads-image' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		backgroundImage: 'url(./footer/aboutAds.png)',
		backgroundSize: 'contain',
		backgroundRepeat: 'no-repeat',
		width: '18px',
		height: '18px',
		margin: 0,
		padding: '0 8px 0 0'
	}
}));
const Footer = () => {
	return (
		<Box component='footer' sx={{ backgroundColor: '#EBEDF2', width: '100%' }}>
			<Container>
				<Box
					className='footer-site-links'
					sx={{
						width: '100%',
						height: '100%',
						padding: '32px 0',
						display: 'flex',
						alignItems: 'flex-start',
						justifyContent: 'flex-start',
						flexWrap: 'wrap'
					}}>
					<BrowseRow>
						<FooterHeader component='h3'>browse</FooterHeader>
						<Box
							className='column-container'
							sx={{ width: '100%', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
							<BrowseColumn>
								<SiteLink>Streaming Library</SiteLink>
								<SiteLink>Live TV</SiteLink>
								<SiteLink>Live News</SiteLink>
								<SiteLink>Live sports</SiteLink>
							</BrowseColumn>
							<BrowseColumn>
								<SiteLink>Tv shows</SiteLink>
								<SiteLink>Movies</SiteLink>
								<SiteLink>Originals</SiteLink>
								<SiteLink>NetWorks</SiteLink>
								<SiteLink>Kids</SiteLink>
								<SiteLink>FX on Hulu</SiteLink>
							</BrowseColumn>
							<BrowseColumn>
								<SiteLink>HBO Max™</SiteLink>
								<SiteLink>Cinemax</SiteLink>
								<SiteLink>Showtime</SiteLink>
								<SiteLink>STARZ</SiteLink>
							</BrowseColumn>
							<BrowseColumn>
								<SiteLink>Hulu, Disney+, and ESPN+</SiteLink>
								<SiteLink>Disney bundle with Hulu (No Ads)</SiteLink>
								<SiteLink>Disney bundle with Hulu + Live TV</SiteLink>
								<SiteLink>Student Discount</SiteLink>
							</BrowseColumn>
						</Box>
					</BrowseRow>
					<HelpRow>
						<FooterHeader component='h3'>help</FooterHeader>
						<OneColumn>
							<SiteLink>Account & Billing</SiteLink>
							<SiteLink>Plans & Pricing</SiteLink>
							<SiteLink>Supported Devices</SiteLink>
							<SiteLink>Accessibility</SiteLink>
						</OneColumn>
					</HelpRow>
					<AboutRow>
						<FooterHeader component='h3'>about</FooterHeader>
						<OneColumn>
							<SiteLink>Press</SiteLink>
							<SiteLink>Job</SiteLink>
							<SiteLink>Contact</SiteLink>
						</OneColumn>
					</AboutRow>
				</Box>
				<Box
					className='legal-container'
					sx={{
						width: '100%',
						height: '200px',
						padding: '32px 0 0 0',
						borderTop: '2px solid #DCDFE6',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'flex-start',
						alignItems: 'flex-start'
					}}>
					<Box
						className='social-logo-group'
						sx={{
							width: '126px',
							display: 'flex',
							justifyContent: 'space-between',
							alignItem: 'center',
							margin: '0 42px 32px 0'
						}}>
						<FaceBook />
						<Twitter />
						<Instagram />
						<YouTube />
					</Box>
					<Box
						className='legal-links-group'
						sx={{
							width: '100%',
							display: 'flex',
							flexWrap: 'wrap',
							justifyContent: 'flex-start',
							alignItem: 'center',
							margin: '0 0 32px 0'
						}}>
						<LegalLink>© 2021 Hulu, LLC</LegalLink>
						<LegalLink>
							<AboutAdsImage /> About Ads
						</LegalLink>
						<LegalLink>Term of Use</LegalLink>
						<LegalLink>Privacy Policy</LegalLink>
						<LegalLink>Do not sell my personal info</LegalLink>
						<LegalLink>TV Parental GuideLines</LegalLink>
						<LegalLink>Site Map</LegalLink>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default Footer;
