import type { SponsorConfig } from "../types/sponsorConfig";

export const sponsorConfig: SponsorConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// 打赏用途说明
	usage: "",

	// 是否显示打赏者列表
	showSponsorsList: true,

	// 是否显示评论区，需要先在commentConfig.ts启用评论系统
	showComment: true,

	// 是否在文章详情页底部显示打赏按钮
	showButtonInPost: true,

	// 打赏方式列表
	// 已清空 Firefly 自带示例，需要时按下面格式自行添加（记得把 siteConfig.pages.sponsor 打开）
	// 收款码图片放在 public 目录下，如 public/assets/images/sponsor/alipay.png → 填 "/assets/images/sponsor/alipay.png"
	// 也可以只填 link，点击后跳转到 ko-fi / 爱发电等页面
	methods: [
		// {
		// 	name: "支付宝",
		// 	icon: "fa7-brands:alipay",
		// 	qrCode: "/assets/images/sponsor/alipay.png",
		// 	link: "",
		// 	description: "使用 支付宝 扫码打赏",
		// 	enabled: true,
		// },
		// {
		// 	name: "ko-fi",
		// 	icon: "simple-icons:kofi",
		// 	qrCode: "",
		// 	link: "https://ko-fi.com/yourname",
		// 	description: "Buy me a coffee",
		// 	enabled: true,
		// },
	],

	// 打赏者列表（可选）
	// 已清空 Firefly 自带示例，需要时按下面格式自行添加
	sponsors: [
		// {
		// 	name: "某位朋友",
		// 	avatar: "https://example.com/avatar.png", // 可选，留空则显示首字母
		// 	amount: "¥20",
		// 	date: "2026-10-16",
		// },
	],
};
