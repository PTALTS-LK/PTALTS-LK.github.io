export type LicenseConfig = {
	enable: boolean;
	name: string;
	url: string;
	icon?: string;
	// 文章底部许可协议卡片中的声明文案，留空则不显示该区块
	notice?: string;
};
