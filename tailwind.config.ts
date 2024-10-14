import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
    	extend: {
    		container: {
    			center: true,
    			screens: {
    				'2xl': '1200px'
    			}
    		},
    		colors: {
    			main: '#34D399',
    			mainAccent: '#4d80e6',
    			overlay: 'rgba(0,0,0,0.8)',
    			bg: '#dfe5f2',
    			text: '#000',
    			border: '#000',
    			darkBg: '#272933',
    			darkText: '#eeefe9',
    			darkBorder: '#000',
    			secondaryBlack: '#212121'
    		},
    		borderRadius: {
    			base: '5px'
    		},
    		boxShadow: {
    			light: '4px 4px 0px 0px #000',
    			dark: '4px 4px 0px 0px #000'
    		},
    		translate: {
    			boxShadowX: '4px',
    			boxShadowY: '4px',
    			reverseBoxShadowX: '-4px',
    			reverseBoxShadowY: '-4px'
    		},
    		fontWeight: {
    			base: '500',
    			heading: '700'
    		},
    		animation: {
    			'shiny-text': 'shiny-text 8s infinite'
    		},
    		keyframes: {
    			'shiny-text': {
    				'0%, 90%, 100%': {
    					'background-position': 'calc(-100% - var(--shiny-width)) 0'
    				},
    				'30%, 60%': {
    					'background-position': 'calc(100% + var(--shiny-width)) 0'
    				}
    			}
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
};
export default config;
