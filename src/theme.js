import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					fontSize: '1rem',
					lineHeight: 1.5,
					fontWeight: 400,
					letterSpacing: '-.022em',
					fontFamily: 'Graphik, Helvetica, Arial, sans-serif',
					backgroundColor: '#f5f6f7',
					color: '#292b2c',
					fontStyle: 'normal',
					margin: 0,
					padding: 0
				}
			}
		}
	},
	breakpoints: {
		values: {
			mobile: 0,
			tablet: 768,
			laptop: 1024,
			desktop: 1440
		}
	},
	palette: {
		common: {
			button_background: '#0071e3',
			button_background_hover: '#0077ED',
			link: '#06c'
		}
	},
	spacing: 5
});
const fontSize = 16; // px
// Tell Material-UI what's the font-size on the html element.
// 16px is the default font-size used by browsers.
const htmlFontSize = 16;
const coef = fontSize / 16;

// const theme = createMuiTheme({
//   typography: {
//     pxToRem: size => `${(size / htmlFontSize) * coef}rem`,
//   },
// });
theme.typography = {
	pxToRem: (size) => `${(size / htmlFontSize) * coef}rem`,
	body: {
		fontSize: '1rem',
		lineHeight: 1.5,
		fontWeight: 400,
		letterSpacing: '-.022em',
		fontFamily: 'Graphik, Helvetica, Arial, sans-serif',
		backgroundColor: '#f5f6f7',
		color: '#292b2c',
		fontStyle: 'normal',
		margin: 0,
		padding: 0
	},
	body_reduced: {
		[theme.breakpoints.up('mobile')]: {
			fontSize: '14px',
			lineHeight: 1.42859,
			fontWeight: 400,
			letterSpacing: '-.016em'
		}
	},
	h1: {
		fontWeight: 600,
		color: '#1d1d1f'
	},
	h2: {
		fontWeight: 600,
		color: '#1d1d1f'
	},
	h3: {
		fontWeight: 600,
		color: '#1d1d1f'
	},
	h4: {
		fontWeight: 600,
		color: '#1d1d1f'
	},
	h5: {
		fontWeight: 600,
		color: '#1d1d1f'
	},
	h6: {
		fontWeight: 600,
		color: '#1d1d1f'
	},
	chapternav_label: {
		fontSize: '12px',
		lineHeight: 1.33337,
		fontWeight: 400,
		letterSpacing: '-.01em'
	},
	chapternav_new: {
		fontSize: '10px',
		lineHeight: 1.2,
		fontWeight: 400,
		letterSpacing: '-.008em',
		color: '#bf4800'
	},
	caption: {
		fontSize: '12px',
		lineHeight: 1.33337,
		fontWeight: 400,
		letterSpacing: '-.01em'
	},
	eyebrow: {
		[theme.breakpoints.up('mobile')]: {
			fontSize: '19px',
			lineHeight: 1.21053,
			fontWeight: 600,
			letterSpacing: '.012em'
		},
		[theme.breakpoints.up('tablet')]: {
			fontSize: '21px',
			lineHeight: 1.19048,
			fontWeight: 600,
			letterSpacing: '.011em'
		},
		[theme.breakpoints.up('laptop')]: {
			fontSize: '24px',
			lineHeight: 1.16667,
			fontWeight: 600,
			letterSpacing: '.009em'
		}
	},
	library_eyebrow: {
		[theme.breakpoints.up('mobile')]: {
			fontSize: '12px',
			lineHeight: '12px',
			fontWeight: 600,
			letterSpacing: '0.86px',
			color: '#00ED82'
		}
	},
	library_title: {
		[theme.breakpoints.up('mobile')]: {
			fontSize: '24px',
			lineHeight: '44px',
			fontWeight: 800
		},
		[theme.breakpoints.up('tablet')]: {
			fontSize: '42px',
			lineHeight: '70px',
			fontWeight: 800,
			letterSpacing: '-0.5px'
		},
		[theme.breakpoints.up('laptop')]: {
			fontSize: '48px',
			lineHeight: '53px',
			fontWeight: 800,
			letterSpacing: '-0.5px'
		}
	},
	library_discription: {
		[theme.breakpoints.up('mobile')]: {
			fontSize: '16px',
			lineHeight: '24px',
			fontWeight: 400
		}
	},
	eyebrow_elevated: {
		[theme.breakpoints.up('mobile')]: {
			fontSize: '21px',
			lineHeight: 1.19048,
			fontWeight: 600,
			letterSpacing: '.011em'
		},
		[theme.breakpoints.up('tablet')]: {
			fontSize: '24px',
			lineHeight: 1.16667,
			fontWeight: 600,
			letterSpacing: '.009em'
		},
		[theme.breakpoints.up('laptop')]: {
			fontSize: '28px',
			lineHeight: 1.14286,
			fontWeight: 600,
			letterSpacing: '.007em'
		}
	},
	Ribbon_eyebrow: {
		[theme.breakpoints.up('mobile')]: {
			fontSize: '12px',
			lineHeight: '13px',
			fontWeight: 600,
			letterSpacing: '0.5px',
			color: '#00ED82'
		}
	},
	headline: {
		[theme.breakpoints.up('mobile')]: {
			fontSize: '32px',
			lineHeight: 1.125,
			fontWeight: 600,
			letterSpacing: '.004em'
		},
		[theme.breakpoints.up('tablet')]: {
			fontSize: '40px',
			lineHeight: 1.1,
			fontWeight: 600,
			letterSpacing: '0em'
		},
		[theme.breakpoints.up('laptop')]: {
			fontSize: '48px',
			lineHeight: 1.08349,
			fontWeight: 600,
			letterSpacing: '-.003em'
		}
	},
	hero_subheadline: {
		[theme.breakpoints.up('mobile')]: {
			fontSize: '18px',
			lineHeight: '24px',
			fontWeight: 600
		},
		[theme.breakpoints.up('tablet')]: {
			fontSize: '22px',
			lineHeight: '30px',
			fontWeight: 600
		}
	},
	hero_secondaryMessage: {
		[theme.breakpoints.up('mobile')]: {
			fontSize: '14px',
			lineHeight: '21px',
			fontWeight: 400
		},
		[theme.breakpoints.up('tablet')]: {
			fontSize: '14px',
			lineHeight: '21px',
			fontWeight: 400
		},
		[theme.breakpoints.up('laptop')]: {
			fontSize: '16px',
			lineHeight: '26px',
			fontWeight: 400
		}
	},
	section_headline: {
		[theme.breakpoints.up('mobile')]: {
			fontSize: '32px',
			lineHeight: 1.2,
			fontWeight: 600,
			letterSpacing: '.004em'
		},
		[theme.breakpoints.up('tablet')]: {
			fontSize: '56px',
			lineHeight: 1.07143,
			fontWeight: 600,
			letterSpacing: '-.005em'
		},
		[theme.breakpoints.up('laptop')]: {
			fontSize: '64px',
			lineHeight: 1.0625,
			fontWeight: 600,
			letterSpacing: '-.009em'
		}
	},
	tile_headline: {
		[theme.breakpoints.up('mobile')]: {
			fontSize: '30px',
			lineHeight: 1.125,
			fontWeight: 600,
			letterSpacing: '.004em'
		},
		[theme.breakpoints.up('tablet')]: {
			fontSize: '32px',
			lineHeight: 1.125,
			fontWeight: 600,
			letterSpacing: '.004em'
		},
		[theme.breakpoints.up('laptop')]: {
			fontSize: '48px',
			lineHeight: 1.08349,
			fontWeight: 600,
			letterSpacing: '-.003em'
		}
	},
	buystrip_copy: {
		[theme.breakpoints.up('mobile')]: {
			fontSize: '17px',
			lineHeight: 1.47059,
			fontWeight: 600,
			letterSpacing: '-.022em'
		},
		[theme.breakpoints.up('tablet')]: {
			fontSize: '21px',
			lineHeight: 1.381,
			fontWeight: 600,
			letterSpacing: '.011em'
		}
	},
	button: {
		[theme.breakpoints.up('mobile')]: {
			fontSize: '17px',
			lineHeight: 1.17648,
			fontWeight: 400,
			letterSpacing: '-.022em'
		}
	},
	button_reduced: {
		[theme.breakpoints.up('mobile')]: {
			fontSize: '12px',
			lineHeight: 1.33337,
			fontWeight: 400,
			letterSpacing: '-.01em'
		}
	},
	hero_copy: {
		[theme.breakpoints.up('mobile')]: {
			fontSize: '21px',
			lineHeight: 1.381,
			fontWeight: 400,
			letterSpacing: '.011em'
		}
	},
	compare_all_cta: {
		[theme.breakpoints.up('mobile')]: {
			fontSize: '24px',
			lineHeight: 1.33341,
			fontWeight: 400,
			letterSpacing: '.009em'
		}
	},

	tout: {
		[theme.breakpoints.up('mobile')]: {
			fontSize: '19px',
			lineHeight: 1.21053,
			fontWeight: 600,
			letterSpacing: '.012em'
		}
	},
	tile_copy: {
		[theme.breakpoints.up('mobile')]: {
			fontSize: '17px',
			lineHeight: 1.47059,
			fontWeight: 400,
			letterSpacing: '-.022em'
		},
		[theme.breakpoints.up('tablet')]: {
			fontSize: '17px',
			lineHeight: 1.47059,
			fontWeight: 400,
			letterSpacing: '-.022em'
		},
		[theme.breakpoints.up('laptop')]: {
			fontSize: '21px',
			lineHeight: 1.381,
			fontWeight: 400,
			letterSpacing: '.011em'
		}
	},
	tabnav_link: {
		fontSize: '17px',
		lineHeight: 1,
		fontWeight: 400,
		letterSpacing: '-.021em'
	},
	cta_link: {
		fontSize: '19px',
		lineHeight: 1.4211,
		fontWeight: 400,
		letterSpacing: '.012em'
	},
	promo_intro: {
		[theme.breakpoints.up('mobile')]: {
			fontSize: '17px',
			lineHeight: 1.47059,
			fontWeight: 400,
			letterSpacing: '-.022em'
		},
		[theme.breakpoints.up('tablet')]: {
			fontSize: '19px',
			lineHeight: 1.4211,
			fontWeight: 400,
			letterSpacing: '.012em'
		},
		[theme.breakpoints.up('laptop')]: {
			fontSize: '21px',
			lineHeight: 1.381,
			fontWeight: 400,
			letterSpacing: '.011em'
		}
	},
	intro: {
		[theme.breakpoints.up('mobile')]: {
			fontSize: '19px',
			lineHeight: 1.4211,
			fontWeight: 400,
			letterSpacing: '.012em'
		},
		[theme.breakpoints.up('tablet')]: {
			fontSize: '21px',
			lineHeight: 1.381,
			fontWeight: 400,
			letterSpacing: '.011em'
		}
	},
	disclaimer: {
		[theme.breakpoints.up('mobile')]: {
			fontSize: '10px',
			lineHeight: '16px',
			fontWeight: 400
		}
	},
	library_item_eyebrow: {
		[theme.breakpoints.up('mobile')]: {
			fontSize: '16px',
			lineHeight: '21px',
			fontWeight: 400
		}
	},
	library_item_category: {
		[theme.breakpoints.up('mobile')]: {
			fontSize: '24px',
			lineHeight: '24px',
			fontWeight: 700
		}
	},
	plan_head_title: {
		[theme.breakpoints.up('mobile')]: {
			fontSize: '28px',
			lineHeight: '31px',
			fontWeight: 700,
			letterSpacing: '-0.5px'
		}
	},
	plan_card_option_title: {
		[theme.breakpoints.up('mobile')]: {
			fontSize: '14px',
			lineHeight: '20px',
			fontWeight: 700,
			letterSpacing: '-0.5px',
			color: '#292C33'
		},
		[theme.breakpoints.up('tablet')]: {
			fontSize: '20px',
			lineHeight: '31px',
			fontWeight: 700,
			letterSpacing: '-0.5px',
			color: '#292C33'
		}
	},
	plan_card_option_eyebrow: {
		[theme.breakpoints.up('mobile')]: {
			fontSize: '12px',
			lineHeight: '13px',
			fontWeight: 600,
			letterSpacing: '-0.5px',
			color: '#888',
			textTransform: 'uppercase'
		}
	}
};

export default theme;
