import type {
	ExpressiveCodeConfig,
	FriendsConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "LK's Kernel Ring 0",
	subtitle: "Segmentation fault (core dumped)",
	lang: "zh_CN", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
	themeColor: {
		hue: 250, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: false, // Hide the theme color picker for visitors
	},
	banner: {
		enable: false,
		src: "assets/images/demo-banner.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: false, // Display the credit text of the banner image
			text: "", // Credit text to be displayed
			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		// {
		//   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
		//   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
		//   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		// }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.Friends,
		LinkPreset.About,
		// {
		// 	name: "GitHub",
		// 	url: "https://github.com/saicaca/fuwari", // Internal links should not include the base path, as it is automatically added
		// 	external: true, // Show an external link icon and will open in a new tab
		// },
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/icon_clean_1024px.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "PTALTS-LK",
	bio: "Half Linux: Endless Segmentation Fault (Core Dumped)",
	links: [
		// {
		// 	name: "Twitter",
		// 	icon: "fa6-brands:twitter", // Visit https://icones.js.org/ for icon codes
		// 	// You will need to install the corresponding icon set if it's not already included
		// 	// `pnpm add @iconify-json/<icon-set-name>`
		// 	url: "https://twitter.com",
		// },
		{
			name: "Bilibili",
			icon: "fa6-brands:bilibili",
			url: "https://space.bilibili.com/301890673",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/PTALTS-LK",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

// 友链页：每页最多 20 个友链卡片，桌面端两列网格排版，超出自动分页
export const friendsConfig: FriendsConfig = {
	links: [
		// 以下为示例，替换成自己的友链即可（avatar 可填外链图片地址，description 可省略）
		// {
		// 	name: "Fuwari",
		// 	url: "https://github.com/saicaca/fuwari",
		// 	avatar: "https://avatars.githubusercontent.com/u/101227423",
		// 	description: "A static blog template built with Astro.",
		// },
		// {
		// 	name: "Astro",
		// 	url: "https://astro.build/",
		// 	avatar: "https://avatars.githubusercontent.com/u/44914786",
		// 	description: "The web framework for content-driven websites.",
		// },
		//
		{
			name: "QingXi的小屋",
			url: "https://blog.qing-xi.top",
			avatar: "https://avatars.githubusercontent.com/u/212183851",
			description: "神秘滚木用户",
		},
	],
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};
