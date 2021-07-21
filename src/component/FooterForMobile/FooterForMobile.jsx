import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Box } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { styled } from '@material-ui/system';
import { FooterHeader, SiteLink } from '../FooterForLaptop/FooterForLaptop';
const CustomAccordion = styled(Accordion, { name: 'footer-nav-accordion' })(({ theme }) => ({
	color: '#656B7B',
	backgroundColor: 'transparent',
	boxShadow: theme.shadows[0],
	width: '100%'
}));
const FooterForMobile = () => {
	return (
		<React.Fragment>
			<CustomAccordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
					<FooterHeader component='h3'>browse</FooterHeader>
				</AccordionSummary>
				<AccordionDetails>
					<SiteLink>Streaming Library</SiteLink>
					<SiteLink>Live TV</SiteLink>
					<SiteLink>Live News</SiteLink>
					<SiteLink>Live sports</SiteLink>
					{/*second row */}
					<Box sx={{ padding: '20px 0' }}>
						<SiteLink>Tv shows</SiteLink>
						<SiteLink>Movies</SiteLink>
						<SiteLink>Originals</SiteLink>
						<SiteLink>NetWorks</SiteLink>
						<SiteLink>Kids</SiteLink>
						<SiteLink>FX on Hulu</SiteLink>
					</Box>
					{/*third row */}
					<SiteLink>HBO Max™</SiteLink>
					<SiteLink>Cinemax</SiteLink>
					<SiteLink>Showtime</SiteLink>
					<SiteLink>STARZ</SiteLink>
				</AccordionDetails>
			</CustomAccordion>
			<CustomAccordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
					<FooterHeader component='h3'>help</FooterHeader>
				</AccordionSummary>
				<AccordionDetails>
					<SiteLink>Account & Billing</SiteLink>
					<SiteLink>Plans & Pricing</SiteLink>
					<SiteLink>Supported Devices</SiteLink>
					<SiteLink>Accessibility</SiteLink>
				</AccordionDetails>
			</CustomAccordion>
			<CustomAccordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
					<FooterHeader component='h3'>about</FooterHeader>
				</AccordionSummary>
				<AccordionDetails>
					<SiteLink>Press</SiteLink>
					<SiteLink>Job</SiteLink>
					<SiteLink>Contact</SiteLink>
				</AccordionDetails>
			</CustomAccordion>
		</React.Fragment>
	);
};

export default FooterForMobile;
