import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

const GridContainer = styled(Box, { name: 'grid-container' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: '100%',
		maxWidth: '334px',
		margin: '0 auto',
		padding: '0 20px 60px 20px',
		display: 'grid',
		gap: '20px',
		gridTemplateColumns: 'minmax(294px, 1fr)',
		gridTemplateRows: 'repeat(4, auto)',
		gridTemplateAreas: `"bob-burger"
                        "billie-holiday"
                        "solar-opposite"
                        "ww84" `
	},
	[theme.breakpoints.up('tablet')]: {
		width: '100%',
		maxWidth: '648px',
		gridTemplateColumns: 'repeat(2,minmax(294px, 1fr))',
		gridTemplateRows: 'repeat(2, auto)',

		gridTemplateAreas: `"bob-burger     billie-holiday"
                        "solar-opposite   ww84"`
	},
	[theme.breakpoints.up('desktop')]: {
		width: '100%',
		maxWidth: '1276px',
		gridTemplateColumns: 'repeat(4,minmax(294px, 1fr))',
		gridTemplateRows: 'repeat(1, auto)',

		gridTemplateAreas: `"bob-burger billie-holiday  solar-opposite   ww84"`
	}
}));
const Gradient = styled(Box, { name: 'library-overlay' })(() => ({
	content: '""',
	position: 'absolute',
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	background:
		'linear-gradient(156.82deg, rgba(0,0,0,0.6) 4.58%, rgba(0,0,0,0) 69.61%),linear-gradient(24.5deg, rgba(0,0,0,0.2) 4.71%, rgba(0,0,0,0) 71.49%)'
}));
const Library = () => {
	return (
		<Box
			className='library-section'
			component='section'
			sx={{ width: '100%', position: 'relative', backgroundColor: '#000' }}>
			<Box
				className='library-header'
				sx={{
					width: { mobile: '100%', tablet: '80%', laptop: '768px' },
					margin: '0 auto',
					color: '#fff'
				}}>
				<Box
					className='library-header-content'
					sx={{
						width: '100%',
						padding: { mobile: '50px 20px', tablet: '88px 20px 50px 20px' },
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center'
					}}>
					<Typography variant='library_eyebrow' component='h5' sx={{ mb: '16px' }}>
						INCLUDED IN ALL PLANS
					</Typography>
					<Typography variant='library_title' component='h2' sx={{ mb: '16px' }}>
						All The TV You Love
					</Typography>
					<Typography
						variant='library_discription'
						component='p'
						sx={{
							width: { mobile: '100%', tablet: '87.5%', laptop: '728px' },
							margin: { mobile: 0, tablet: '0 auto' },
							padding: { mobile: 0, tablet: '16px 0 0 0' },
							textAlign: 'center'
						}}>
						Stream full seasons of exclusive series, current-season episodes, hit movies, Hulu Originals, kids shows,
						and more.
					</Typography>
				</Box>
			</Box>
			<GridContainer>
				<Box gridArea='bob-burger' sx={{ width: '294px', height: '450px' }}>
					<Box
						className='item-wrapper'
						sx={{
							width: '100%',
							height: '100%',
							margin: '0 auto',
							backgroundImage: 'url(./library/bobsburgers.jpg)',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							position: 'relative',
							borderRadius: '8px'
						}}>
						<Gradient />
						<Box className='item-title' sx={{ position: 'absolute', top: 0, left: 0, padding: '25px', color: '#fff' }}>
							<Typography variant='library_item_eyebrow' component='h6' sx={{ mb: '10px' }}>
								Past & Current Seasons
							</Typography>
							<Typography variant='library_item_category' component='p'>
								TV Shows
							</Typography>
						</Box>
					</Box>
				</Box>
				<Box gridArea='billie-holiday' sx={{ width: '294px', height: '450px' }}>
					<Box
						className='item-wrapper'
						sx={{
							width: '100%',
							height: '100%',
							margin: '0 auto',
							backgroundImage: 'url(./library/billieholiday.jpg)',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							position: 'relative',
							borderRadius: '8px'
						}}>
						<Gradient />
						<Box className='item-title' sx={{ position: 'absolute', top: 0, left: 0, padding: '25px', color: '#fff' }}>
							<Typography variant='library_item_eyebrow' component='h6' sx={{ mb: '10px' }}>
								New & Classic
							</Typography>
							<Typography variant='library_item_category' component='p'>
								Movies
							</Typography>
						</Box>
					</Box>
				</Box>
				<Box gridArea='solar-opposite' sx={{ width: '294px', height: '450px' }}>
					<Box
						className='item-wrapper'
						sx={{
							width: '100%',
							height: '100%',
							margin: '0 auto',
							backgroundImage: 'url(./library/solaropposites.jpg)',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							position: 'relative',
							borderRadius: '8px'
						}}>
						<Gradient />
						<Box className='item-title' sx={{ position: 'absolute', top: 0, left: 0, padding: '25px', color: '#fff' }}>
							<Typography variant='library_item_eyebrow' component='h6' sx={{ mb: '10px' }}>
								GroundBreaking
							</Typography>
							<Typography variant='library_item_category' component='p'>
								Hulu Originals
							</Typography>
						</Box>
					</Box>
				</Box>
				<Box gridArea='ww84' sx={{ width: '294px', height: '450px' }}>
					<Box
						className='item-wrapper'
						sx={{
							width: '100%',
							height: '100%',
							margin: '0 auto',
							backgroundImage: 'url(./library/WW84.jpg)',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							position: 'relative',
							borderRadius: '8px'
						}}>
						<Gradient />
						<Box className='item-title' sx={{ position: 'absolute', top: 0, left: 0, padding: '25px', color: '#fff' }}>
							<Typography variant='library_item_eyebrow' component='h6' sx={{ mb: '10px' }}>
								Add-on
							</Typography>
							<Typography variant='library_item_category' component='p'>
								Premiums
							</Typography>
						</Box>
						<Box
							className='item-legal'
							sx={{ position: 'absolute', bottom: '-45px', left: '12px', right: 0, paddingTop: '25px' }}>
							<Typography
								component='h6'
								sx={{ fontSize: '10px', lineHeight: '16px', textAlign: 'center', color: '#fff' }}>
								Premium network add-ons available for an additional cost
							</Typography>
						</Box>
					</Box>
				</Box>
			</GridContainer>
		</Box>
	);
};

export default Library;
