interface ITitle {
    logo?: string; // 标题logo图片地址
    size?: { w: number, h: number }; // logo的宽、高
    align: string; // 标题对齐方式
    text?: string; // 标题文字
    color: string; // 标题文字颜色
    opacity: number; // 标题文字颜色透明度
    fontSize: number; // 标题文字大小
    isBold: boolean; // 标题文字是否加粗
    lineHeight: number; // 标题文字行高
    letterSpacing: number; // 标题文字间隙
}

interface IBase {
    banners: string[]; // banner图片地址
    type: string | number; // 登录页面类型
    themeColor: string; // 主题色
    opacity: number; // 主题色透明度
    hasAccountLogin: boolean; // 是否显示账号登录
    hasMobileLogin: boolean; // 是否显示手机登录
    hasForgetPassword: boolean; // 是否显示忘记密码
    hasRegister: boolean; // 是否显示立即注册
    hasCopyright: boolean; // 是否显示版权信息
    hasLogo: boolean // 是否显示LOGO
}

interface ICopyright {
    text: string; // 版权信息文字
    align: string; // 版权信息对齐方式
    color: string; // 版权信息文字颜色
    opacity: number; // 版权信息文字颜色透明度
    fontSize: number; // 版权信息文字大小
    isBold: boolean; // 版权信息文字是否加粗
    lineHeight: number; // 版权信息文字行高
    letterSpacing: number; // 版权信息文字间隙
}

export interface IPortalConfig {
    base: IBase; // 基础设置
    title: ITitle; // 标题设置
    copyright: ICopyright; // 版权信息设置
}