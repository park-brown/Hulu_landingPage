import React from 'react';
import { Box, Typography, useMediaQuery } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import FaceBook from '../component/Icon/Facebook';
import Twitter from '../component/Icon/twitter';
import Instagram from '../component/Icon/instagram';
import YouTube from '../component/Icon/youtube';
import FooterForLaptop from '../component/FooterForLaptop/FooterForLaptop';
import { useTheme } from '@material-ui/core/styles';
import FooterForMobile from '../component/FooterForMobile/FooterForMobile';

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
	const theme = useTheme();
	const below_768 = useMediaQuery(theme.breakpoints.down('tablet'));
	console.log('below_768:', below_768);
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
					{below_768 ? <FooterForMobile /> : <FooterForLaptop />}
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
