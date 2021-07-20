import React from 'react';
import { Box, Typography, Button, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { styled } from '@material-ui/core/styles';
const BackgroundImage = styled(Box, { name: 'background-image' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		position: 'absolute',
		zIndex: -1,
		width: '100%',
		height: '100%',
		backgroundImage:
			'linear-gradient(0deg, transparent 60%, rgba(0, 0, 0, 0.2) 90%, rgba(0, 0, 0, 0.4) 100%), url(./hero/hero_bgImage_mobile.jpg)',

		margin: 0,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat'
	},
	[theme.breakpoints.up('tablet')]: {
		backgroundImage:
			'linear-gradient(0deg, transparent 60%, rgba(0, 0, 0, 0.2) 90%, rgba(0, 0, 0, 0.4) 100%), url(./hero/hero_bgImage_tablet.jpg)'
	},
	[theme.breakpoints.up('laptop')]: {
		backgroundImage:
			'linear-gradient(0deg, transparent 60%, rgba(0, 0, 0, 0.2) 90%, rgba(0, 0, 0, 0.4) 100%), url(./hero/hero_bgImage_laptop.jpg)'
	}
}));
const HeroButton = styled(Button, { name: 'start-your-free-trial-button' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		color: '#040505',
		backgroundColor: '#fff',
		textTransform: 'uppercase',
		whiteSpace: 'nowrap',
		borderRadius: '4px',
		fontSize: '14px',
		fontWeight: 600,
		lineHeight: '14px',
		letterSpacing: '1px',
		padding: '0 32px',
		height: '56px',
		minWidth: '136px',
		'&:hover': {
			backgroundColor: 'rgba(255,255,255,0.8)'
		}
	}
}));
const BundleButton = styled(Button, { name: 'bundle-button' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		color: '#fff',
		backgroundColor: 'transparent',
		border: '2px solid #fff',
		textTransform: 'uppercase',
		whiteSpace: 'nowrap',
		borderRadius: '4px',
		fontSize: '14px',
		fontWeight: 600,
		lineHeight: '14px',
		letterSpacing: '1px',
		padding: '0 32px',
		height: '56px',
		minWidth: '136px',
		'&:hover': {
			border: '2px solid rgba(255,255,255,0.5)'
		}
	}
}));
const Overlay = styled(Box, { name: 'hero-top-overlay' })(() => ({
	content: '""',
	position: 'absolute',
	width: '100%',
	height: '180px',
	top: 0,
	left: 0,
	background: 'linear-gradient(180deg, rgba(0,0,0,0.76) 15.54%, rgba(0,0,0,0.192) 60.23%, rgba(0,0,0,8e-05) 100%)'
}));
const Hero = () => {
	return (
		<Box
			className='hero-section'
			component='section'
			sx={{
				width: '100%',
				height: '660px',
				overflow: 'hidden',
				position: 'relative'
			}}>
			<Overlay />
			<BackgroundImage component='figure' />
			<Box
				className='hero-content'
				sx={{
					padding: {
						mobile: '72px 0 0 0',
						laptop: '80px 0 0 0'
					},
					width: '100%',
					height: '100%',
					position: 'relative',
					zIndex: 2
				}}>
				<Box
					className='login-header'
					sx={{
						position: 'absolute',
						height: { mobile: '72px', laptop: '80px', top: 0, left: 0, width: '100%' },
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'flex-end'
					}}>
					<IconButton sx={{ color: '#fff', padding: '20px' }}>
						<MenuIcon />
					</IconButton>
				</Box>
				<Box
					className='copy-container'
					sx={{ width: '100%', padding: { mobile: '40px', laptop: '60px 40px' }, textAlign: 'center' }}>
					<Typography
						variant='Ribbon_eyebrow'
						component='h5'
						sx={{
							width: { mobile: '87.5%', tablet: '570px', laptop: '670px' },
							margin: '0 auto',
							padding: { mobile: '0 0 15px 0', tablet: '0 0 25px 0' }
						}}>
						TRY UP TO ONE MONTH FREE
					</Typography>
					<Typography
						component='h1'
						sx={{
							width: { mobile: '100%', tablet: '570px', laptop: '670px' },
							height: 'fit-content',
							margin: '0 auto'
						}}>
						<Box
							component='figure'
							className='hulu-logo'
							sx={{
								width: { mobile: '201px', tablet: '234px', laptop: '270px' },
								height: { mobile: '67px', tablet: '78px', laptop: '90px' },
								backgroundImage: ' url(./hero/Hulu_logo_desktop.png)',
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								margin: '0 auto'
							}}></Box>
					</Typography>
					<Typography
						variant='hero_subheadline'
						component='p'
						sx={{
							width: { mobile: '87.5%', tablet: '570px', laptop: '670px' },
							margin: { mobile: '8px auto 0 auto', tablet: '16px auto 0 auto' },
							color: '#fff'
						}}>
						Watch thousands of TV shows and movies.
					</Typography>
					<Typography
						variant='hero_secondaryMessage'
						component='p'
						sx={{
							width: { mobile: '87.5%', tablet: '570px', laptop: '670px' },
							margin: { mobile: '8px auto 0 auto', tablet: '20px auto 0 auto' },
							color: '#fff',
							display: { mobile: 'none', tablet: 'block' }
						}}>
						HBO Max™, SHOWTIME®, CINEMAX® and STARZ® available as add-ons.
					</Typography>

					<HeroButton sx={{ margin: '26px 0 0 0' }}>START YOUR FREE TRIAL</HeroButton>
					<Typography
						variant='disclaimer'
						component='p'
						sx={{
							width: { mobile: '87.5%', tablet: '570px', laptop: '670px' },
							margin: { mobile: '8px auto 0 auto', tablet: '20px auto 0 auto' },
							color: '#fff',
							opacity: 0.6
						}}>
						Free trial for new & eligible returning subscribers only.
					</Typography>
				</Box>
				<Box
					className='Ribbon'
					sx={{
						width: '100%',
						background: 'linear-gradient(318.68deg, #0F495C 0%, #0D3640 49.72%, #08141F 100%)',
						padding: { mobile: '28px 10px 28px 10px', tablet: '33px 40px' },
						display: 'flex',
						flexDirection: { mobile: 'column', tablet: 'row' },
						alignItems: 'center',
						justifyContent: { mobile: 'flex-start', tablet: 'space-between' },
						position: 'absolute',
						bottom: 0,
						left: 0
					}}>
					<Box
						component='figure'
						className='ribbon-logo'
						sx={{
							width: { mobile: '178.4px', tablet: '178.4px', laptop: '218.5px' },
							height: { mobile: '40px', tablet: '40px', laptop: '49px' },
							backgroundImage: ' url(./hero/Ribbon_logo_desktop.png)',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							margin: { mobile: '10px 0', tablet: '12px 0 ', laptop: 0 },
							order: { mobile: 2, tablet: 1 }
						}}></Box>
					<Box
						className='info-wrapper'
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'flex-start',
							flexBasis: { mobile: '100%', tablet: '41.66667%', laptop: '41.66667%' },
							maxWidth: { mobile: '100%', tablet: '41.66667%', laptop: '41.66667%' },
							order: { mobile: 1, tablet: 2 }
						}}>
						<Typography
							variant='Ribbon_eyebrow'
							component='h6'
							sx={{
								padding: { mobile: '0 0 8px 0', tablet: '0 0 8px 0' }
							}}>
							BUNDLE WITH ANY HULU PLAN & SAVE
						</Typography>
						<Typography
							component='p'
							sx={{
								margin: '5px 0 0 0',
								fontSize: '24px',
								lineHeight: '32px',
								color: '#fff',
								display: { mobile: 'none', tablet: 'block' }
							}}>
							Get Hulu, Disney+, and ESPN+.
						</Typography>
						<Typography
							component='p'
							sx={{
								margin: '5px 0 0  0',
								display: { mobile: 'none', tablet: 'block' },
								color: '#fff',
								opacity: 0.7,
								textDecoration: 'underline'
							}}>
							Details
						</Typography>
					</Box>
					<Box
						className='get-all-three'
						sx={{
							alignItems: 'center',
							order: { mobile: 3 },
							display: { mobile: 'flex', tablet: 'none' },
							margin: '12px 0',
							width: '150px',
							justifyContent: 'center'
						}}>
						<Typography
							component='p'
							sx={{
								fontSize: '14px',
								lineHeight: '15px',
								color: '#fff',
								display: { mobile: 'block', tablet: 'none' },
								margin: '0 10px 0 0'
							}}>
							Get all three.
						</Typography>
						<Typography
							component='p'
							sx={{
								color: '#fff',
								opacity: 0.7,
								textDecoration: 'underline',
								fontSize: '14px',
								lineHeight: '15px'
							}}>
							Details
						</Typography>
					</Box>
					<Box
						className='ribbon-button-wrapper'
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							flexBasis: { laptop: '16.66667%' },
							maxWidth: { laptop: '16.66667%' },
							padding: { laptop: '20px 8px 0 8px' },
							order: { mobile: 4, tablet: 3 }
						}}>
						<BundleButton>GET BUNDLE</BundleButton>
						<Typography
							component='p'
							sx={{
								margin: '5px 0 0  0',
								color: '#fff',
								opacity: 0.7,
								textDecoration: 'underline'
							}}>
							Terms apply
						</Typography>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Hero;
