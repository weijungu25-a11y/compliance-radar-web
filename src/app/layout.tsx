import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import './globals.css';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: '合规雷达 - 机器人合规导航仪',
    template: '%s | 合规雷达',
  },
  description:
    '合规雷达是机器人合规导航仪，帮助企业快速了解机器人产品在不同市场的合规要求，提供法规时间线和合规查询服务。',
  keywords: [
    '合规雷达',
    '机器人合规',
    '合规查询',
    '法规导航',
    '机器人法规',
    '市场合规',
    '合规指南',
  ],
  authors: [{ name: '牛宿（杭州）科技有限责任公司' }],
  generator: '合规雷达',
  // icons: {
  //   icon: '',
  // },
  openGraph: {
    title: '合规雷达 - 机器人合规导航仪',
    description:
      '牛宿（杭州）科技有限责任公司提供的机器人合规导航仪，帮助企业快速了解机器人产品在不同市场的合规要求。',
    url: 'https://compliance-radar.com',
    siteName: '合规雷达',
    locale: 'zh_CN',
    type: 'website',
    // images: [
    //   {
    //     url: '',
    //     width: 1200,
    //     height: 630,
    //     alt: '合规雷达 - 机器人合规导航仪',
    //   },
    // ],
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'Coze Code | Your AI Engineer is Here',
  //   description:
  //     'Build and deploy full-stack applications through AI conversation. No env setup, just flow.',
  //   // images: [''],
  // },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.COZE_PROJECT_ENV === 'DEV';

  return (
    <html lang="zh-CN">
      <body className={`antialiased`}>
        {isDev && <Inspector />}
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
