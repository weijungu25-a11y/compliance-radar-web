import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: '合规雷达 - 机器人合规导航仪',
  description: '快速了解机器人产品在不同市场的合规要求，为您提供法规时间线和合规查询服务',
};

const timelineData = [
  {
    date: '2024-01',
    title: '欧盟AI法案生效',
    description: '欧盟人工智能法案正式生效，对高风险AI系统实施严格监管',
    status: 'active',
  },
  {
    date: '2023-12',
    title: '中国机器人产业政策',
    description: '工信部发布机器人产业发展指导意见，明确安全标准要求',
    status: 'completed',
  },
  {
    date: '2023-06',
    title: 'ISO标准更新',
    description: 'ISO 13482机器人安全标准更新，新增服务机器人要求',
    status: 'completed',
  },
  {
    date: '2022-09',
    title: '美国机器人安全指南',
    description: 'FDA发布医疗机器人安全指南，规范产品审批流程',
    status: 'completed',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-background dark:from-blue-950 dark:to-background">
        <div className="container mx-auto px-4 py-16 sm:py-20 lg:py-24">
          <div className="flex flex-col items-center justify-center text-center">
            {/* Radar Animation */}
            <div className="relative mb-6 h-24 w-24 sm:h-32 sm:w-32 flex-shrink-0">
              <div className="absolute inset-0 rounded-full bg-blue-500 opacity-20 animate-pulse" />
              <div className="absolute inset-3 rounded-full bg-blue-500 opacity-30" />
              <div className="absolute inset-6 rounded-full bg-blue-500 opacity-40" />
              <div className="absolute inset-9 sm:inset-12 rounded-full bg-blue-500" />
              <svg
                className="absolute inset-0 h-24 w-24 sm:h-32 sm:w-32 animate-spin"
                style={{ animationDuration: '3s' }}
                viewBox="0 0 100 100"
              >
                <path
                  d="M 50 50 L 50 0 A 50 50 0 0 1 100 50 Z"
                  fill="rgba(59, 130, 246, 0.3)"
                  className="animate-pulse"
                />
              </svg>
            </div>

            {/* Slogan */}
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              机器人合规导航仪
            </h1>
            <p className="mb-2 text-lg font-semibold text-blue-500">
              一站式合规雷达 · 精准导航法规迷宫
            </p>
            <p className="mb-8 max-w-2xl text-lg text-muted-foreground">
              快速了解机器人产品在不同市场的合规要求，为您提供法规时间线和合规查询服务，助力产品合规上市
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/query">
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 h-12">
                  开始合规查询
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="px-8 h-12 border-blue-500 text-blue-500 hover:bg-blue-50">
                  了解更多
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="container mx-auto px-4 py-16 sm:py-24">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground">法规时间线</h2>
          <p className="text-lg text-muted-foreground">
            追踪全球机器人行业最新法规动态，把握合规时机
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 h-full w-px bg-blue-200 dark:bg-blue-800 hidden lg:block" />

          {/* Timeline Cards */}
          <div className="space-y-8 lg:space-y-0">
            {timelineData.map((item, index) => (
              <div key={index} className={`relative lg:flex lg:items-center lg:justify-between ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Timeline Dot */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block">
                  <div className={`h-4 w-4 rounded-full ${item.status === 'active' ? 'bg-blue-500 animate-pulse' : 'bg-blue-300'}`} />
                </div>

                {/* Card */}
                <div className={`lg:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:shadow-blue-100 dark:hover:shadow-blue-900">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-blue-500">{item.date}</span>
                        {item.status === 'active' && (
                          <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900 px-2 py-1 text-xs font-medium text-blue-600 dark:text-blue-400">
                            最新
                          </span>
                        )}
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{item.description}</CardDescription>
                    </CardContent>
                  </Card>
                </div>

                {/* Empty Space for alternating layout */}
                <div className="hidden lg:block lg:w-[calc(50%-2rem)]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-blue-50 dark:bg-blue-950 py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">核心功能</h2>
            <p className="text-lg text-muted-foreground">
              为您提供全方位的机器人合规解决方案
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Feature 1 */}
            <Card className="bg-background transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="mb-4 h-12 w-12 rounded-lg bg-blue-500 flex items-center justify-center">
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <CardTitle>合规查询</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  分步引导选择机器人类型、目标市场和应用场景，快速获取合规要求
                </CardDescription>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="bg-background transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="mb-4 h-12 w-12 rounded-lg bg-blue-500 flex items-center justify-center">
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <CardTitle>法规时间线</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  追踪全球机器人行业最新法规动态，实时更新，把握合规时机
                </CardDescription>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="bg-background transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="mb-4 h-12 w-12 rounded-lg bg-blue-500 flex items-center justify-center">
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <CardTitle>合规指南</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  提供详细的合规流程指导，帮助您快速完成合规认证和产品上市
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 sm:py-24 text-center">
        <h2 className="mb-4 text-3xl font-bold text-foreground">立即开始您的合规之旅</h2>
        <p className="mb-8 text-lg text-muted-foreground">
          选择您的机器人类型和市场，获取定制化合规方案
        </p>
        <Link href="/query">
          <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-12 h-14 text-lg">
            开始查询
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Button>
        </Link>
      </section>
    </div>
  );
}