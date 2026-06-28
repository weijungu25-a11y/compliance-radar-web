import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import institutions from '@/data/institutions.json';

export const metadata: Metadata = {
  title: '关于我们 - 合规雷达',
  description: '了解合规雷达 - 机器人合规导航仪，为您提供全方位的合规解决方案',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">关于合规雷达</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            机器人合规导航仪，帮助企业快速了解机器人产品在不同市场的合规要求
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">我们的使命</CardTitle>
            </CardHeader>
            <CardContent className="text-base">
              <p className="mb-4">
                随着机器人产业的快速发展，各国政府和监管机构纷纷出台严格的法规和标准，
                对机器人产品的安全性、可靠性和合规性提出了更高要求。
              </p>
              <p className="mb-4">
                <strong className="text-blue-500">合规雷达</strong>致力于为机器人企业提供一站式的合规解决方案，
                帮助企业快速了解全球主要市场的法规要求，降低合规风险，加速产品上市。
              </p>
              <p>
                我们追踪全球机器人行业最新的法规动态，为您提供精准的合规导航服务，
                让您在复杂的法规迷宫中找到清晰的路径。
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Features Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">核心服务</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="transition-all hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-lg bg-blue-500 flex items-center justify-center mr-4">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <CardTitle className="text-xl">智能合规查询</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  根据您的机器人类型、目标市场和具体应用场景，智能匹配相关标准和法规要求，
                  提供定制化的合规解决方案。
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-lg bg-blue-500 flex items-center justify-center mr-4">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <CardTitle className="text-xl">法规动态追踪</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  实时追踪全球机器人行业最新的法规动态，包括新标准发布、修订、废止等信息，
                  助您及时把握合规时机。
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-lg bg-blue-500 flex items-center justify-center mr-4">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <CardTitle className="text-xl">合规流程指导</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  提供详细的合规流程指导，包括文档准备、测试认证、申请流程等，
                  帮助您顺利完成合规认证。
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-lg bg-blue-500 flex items-center justify-center mr-4">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-5 0H3m2 0h-5m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <CardTitle className="text-xl">认证机构推荐</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  推荐全球权威的检测认证机构，帮助您快速找到合适的合作伙伴，
                  提高认证效率。
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Covered Markets Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">覆盖市场</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="transition-all hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center">
                  <span className="text-4xl mr-3">🇨🇳</span>
                  <CardTitle className="text-lg">中国</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  CCC认证、CR机器人认证、GB标准、医疗器械注册等
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center">
                  <span className="text-4xl mr-3">🇪🇺</span>
                  <CardTitle className="text-lg">欧盟</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  CE认证、EU AI Act、EN ISO标准、机械法规等
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center">
                  <span className="text-4xl mr-3">🇺🇸</span>
                  <CardTitle className="text-lg">美国</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  FCC认证、UL认证、ANSI标准、FDA审批等
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center">
                  <span className="text-4xl mr-3">🇯🇵</span>
                  <CardTitle className="text-lg">日本</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  JIS标准、电气安全法、无线通信法规等
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Covered Robot Types Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">覆盖机器人类型</h2>
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
            {[
              { icon: '🤖', name: '人形机器人' },
              { icon: '🦾', name: '服务机器人' },
              { icon: '🏭', name: '工业机器人' },
              { icon: '🏥', name: '医疗机器人' },
              { icon: '🚁', name: '无人机' },
            ].map((type) => (
              <Card key={type.name} className="text-center transition-all hover:shadow-lg">
                <CardContent className="pt-6">
                  <span className="text-4xl mb-2 block">{type.icon}</span>
                  <span className="font-semibold">{type.name}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Partner Institutions Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">推荐认证机构</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {institutions.slice(0, 7).map((institution) => (
              <Card key={institution.id} className="transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">{institution.name}</CardTitle>
                  <CardDescription className="text-sm font-medium">
                    {institution.fullName}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-3">
                    <div className="text-sm font-semibold mb-1">专业领域：</div>
                    <div className="flex flex-wrap gap-1">
                      {institution.specialties.slice(0, 3).map((spec) => (
                        <span
                          key={spec}
                          className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-300"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="text-sm font-semibold mb-1">服务市场：</div>
                    <div className="text-sm text-muted-foreground">
                      {institution.markets.join('、')}
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {institution.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Statistics Section */}
        <section className="mb-12">
          <Card className="bg-blue-50 dark:bg-blue-950">
            <CardContent className="py-12">
              <div className="grid gap-8 md:grid-cols-4 text-center">
                <div>
                  <div className="text-4xl font-bold text-blue-500 mb-2">25+</div>
                  <div className="text-sm text-muted-foreground">收录标准</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-500 mb-2">4</div>
                  <div className="text-sm text-muted-foreground">覆盖市场</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-500 mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">机器人类型</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-500 mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">推荐机构</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Company Profile Section */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">关于牛宿科技</CardTitle>
            </CardHeader>
            <CardContent className="text-base">
              <p className="mb-4 font-semibold text-blue-500">
                牛宿（杭州）科技有限责任公司
              </p>
              <p className="mb-4">
                牛宿（杭州）科技有限责任公司，专注于具身智能机器人合规服务。
              </p>
              <p className="mb-4">
                作为具身智能机器人合规领域的先行者，我们致力于为机器人企业提供全方位的合规解决方案，
                包括法规解读、标准匹配、认证指导和风险评估等专业服务。
              </p>
              <p>
                我们拥有丰富的行业经验和专业团队，帮助企业快速了解全球主要市场的法规要求，
                降低合规风险，加速产品上市，让您的机器人产品合规无忧。
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Contact Section */}
        <section className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">联系我们</h2>
          <p className="text-lg text-muted-foreground mb-8">
            如有任何疑问或需要专业咨询，欢迎联系我们
          </p>
          <Card className="max-w-md mx-auto">
            <CardContent className="py-8">
              <div className="space-y-4">
                <div className="flex items-center justify-center">
                  <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-base">luoxi@touchlabelai.cn</span>
                </div>
                <div className="flex items-center justify-center">
                  <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9m-9 9a9 9 0 009 9" />
                  </svg>
                  <span className="text-base">www.touchlabelai.cn</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}