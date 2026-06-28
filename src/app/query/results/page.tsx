'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import standards from '@/data/standards.json';
import { robotTypes, markets, applicationScenarios, priorityLevels } from '@/data/queryConfig';

type Standard = {
  id: string;
  number: string;
  name: string;
  description: string;
  market: string;
  robotTypes: string[];
  priority: string;
  status: string;
  effectiveDate: string;
  requirements: string[];
  scope: string;
};

function ResultsContent() {
  const searchParams = useSearchParams();
  const robotTypeId = searchParams.get('robotType') || '';
  const marketId = searchParams.get('market') || '';
  const applicationId = searchParams.get('application') || '';

  // 获取选择的名称
  const robotTypeName = robotTypes.find((t) => t.id === robotTypeId)?.name || '';
  const marketName = markets.find((m) => m.id === marketId)?.name || '';
  const applicationName =
    applicationScenarios[robotTypeId]?.find((s) => s.id === applicationId)?.name || '';

  // 市场ID到实际市场名称的映射
  const marketMapping: Record<string, string> = {
    china: '中国',
    eu: '欧盟',
    usa: '美国',
    japan: '日本',
    multi: '多国',
  };

  // 机器人类型ID到实际类型名称的映射
  const robotTypeMapping: Record<string, string> = {
    humanoid: '人形机器人',
    service: '服务机器人',
    industrial: '工业机器人',
    medical: '医疗机器人',
    drone: '无人机',
    other: '其他机器人',
  };

  // 过滤匹配的标准
  const matchedStandards = useMemo(() => {
    const targetMarket = marketMapping[marketId] || '';
    const targetRobotType = robotTypeMapping[robotTypeId] || '';

    // 如果是多国市场，匹配所有市场
    const marketsToMatch = marketId === 'multi'
      ? ['中国', '欧盟', '美国', '日本']
      : [targetMarket];

    return standards.filter((standard: Standard) => {
      const marketMatch = marketsToMatch.includes(standard.market);
      const robotTypeMatch = standard.robotTypes.includes(targetRobotType);
      return marketMatch && robotTypeMatch;
    });
  }, [robotTypeId, marketId]);

  // 按优先级分组
  const groupedStandards = useMemo(() => {
    const mandatory = matchedStandards.filter((s: Standard) => s.priority === 'mandatory');
    const recommended = matchedStandards.filter((s: Standard) => s.priority === 'recommended');
    const optional = matchedStandards.filter((s: Standard) => s.priority === 'optional');

    return { mandatory, recommended, optional };
  }, [matchedStandards]);

  // 生成合规待办清单
  const complianceTasks = useMemo(() => {
    const tasks: Array<{
      category: string;
      items: Array<{ name: string; description: string; priority: string }>;
    }> = [];

    // 文档准备
    const documents = [];
    if (groupedStandards.mandatory.length > 0) {
      documents.push({
        name: '技术文件',
        description: '包含设计图纸、风险评估报告、测试报告等',
        priority: 'mandatory',
      });
      documents.push({
        name: '符合性声明',
        description: '声明产品符合相关标准和法规要求',
        priority: 'mandatory',
      });
      if (marketId === 'eu') {
        documents.push({
          name: 'EC符合性声明',
          description: '欧盟市场必需的符合性声明文件',
          priority: 'mandatory',
        });
      }
    }
    if (documents.length > 0) {
      tasks.push({ category: '需准备的文档', items: documents });
    }

    // 测试认证
    const tests = [];
    if (groupedStandards.mandatory.some((s: Standard) => s.id.includes('emc'))) {
      tests.push({
        name: 'EMC测试',
        description: '电磁兼容性测试，确保不对其他设备产生干扰',
        priority: 'mandatory',
      });
    }
    if (groupedStandards.mandatory.some((s: Standard) => s.id.includes('safety'))) {
      tests.push({
        name: '安全测试',
        description: '电气安全、机械安全等测试',
        priority: 'mandatory',
      });
    }
    if (robotTypeId === 'medical') {
      tests.push({
        name: '医疗器械注册',
        description: '通过医疗器械注册审批',
        priority: 'mandatory',
      });
    }
    if (marketId === 'eu') {
      tests.push({
        name: 'CE认证',
        description: '通过欧盟产品合格认证',
        priority: 'mandatory',
      });
    }
    if (marketId === 'usa') {
      tests.push({
        name: 'FCC认证',
        description: '通过美国联邦通信委员会认证',
        priority: 'mandatory',
      });
    }
    if (tests.length > 0) {
      tasks.push({ category: '需进行的测试和认证', items: tests });
    }

    // 预估周期
    const estimatedTime = [];
    if (groupedStandards.mandatory.length > 0) {
      const mandatoryCount = groupedStandards.mandatory.length;
      const baseTime = mandatoryCount * 2;
      estimatedTime.push({
        name: '预估认证周期',
        description: `根据需认证的标准数量，预计需要${baseTime}-${baseTime + 4}个月`,
        priority: 'info',
      });
      estimatedTime.push({
        name: '建议启动时间',
        description: '建议提前6-12个月启动认证流程',
        priority: 'info',
      });
    }
    if (estimatedTime.length > 0) {
      tasks.push({ category: '时间规划建议', items: estimatedTime });
    }

    return tasks;
  }, [groupedStandards, robotTypeId, marketId]);

  const getPriorityInfo = (priorityId: string) => {
    return priorityLevels.find((p) => p.id === priorityId);
  };

  const getStatusBadge = (status: string) => {
    if (status === 'effective') {
      return <Badge className="bg-emerald-500">已生效</Badge>;
    }
    return <Badge className="bg-amber-500">即将执行</Badge>;
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">合规查询结果</h1>
          <div className="flex flex-wrap gap-2 text-lg text-muted-foreground">
            <span className="font-medium">{robotTypeName}</span>
            <span>·</span>
            <span className="font-medium">{marketName}</span>
            <span>·</span>
            <span className="font-medium">{applicationName}</span>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-8 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm font-semibold">匹配到 {matchedStandards.length} 条标准</span>
            </div>
            <div className="flex gap-4 text-sm">
              <div className="flex items-center">
                <span className="mr-1">🔴</span>
                <span>{groupedStandards.mandatory.length} 强制</span>
              </div>
              <div className="flex items-center">
                <span className="mr-1">🟡</span>
                <span>{groupedStandards.recommended.length} 推荐</span>
              </div>
              <div className="flex items-center">
                <span className="mr-1">🟢</span>
                <span>{groupedStandards.optional.length} 可选</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mandatory Standards */}
        {groupedStandards.mandatory.length > 0 && (
          <section className="mb-8">
            <div className="mb-4 flex items-center">
              <span className="text-2xl mr-2">🔴</span>
              <h2 className="text-2xl font-bold">强制标准</h2>
              <span className="ml-2 text-muted-foreground">
                - 必须符合，否则无法上市或面临法律风险
              </span>
            </div>
            <div className="grid gap-4">
              {groupedStandards.mandatory.map((standard: Standard) => (
                <Card key={standard.id} className="transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <CardTitle className="text-lg">{standard.number}</CardTitle>
                          {getStatusBadge(standard.status)}
                        </div>
                        <CardDescription className="text-base font-medium text-foreground">
                          {standard.name}
                        </CardDescription>
                      </div>
                      <Badge variant="outline">{standard.market}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {standard.description}
                    </p>
                    <div className="mb-4">
                      <div className="text-sm font-semibold mb-2">适用范围：</div>
                      <p className="text-sm text-muted-foreground">{standard.scope}</p>
                    </div>
                    <div className="mb-4">
                      <div className="text-sm font-semibold mb-2">关键要求：</div>
                      <ul className="space-y-1">
                        {standard.requirements.map((req, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-start">
                            <span className="mr-2">•</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <span className="font-medium">执行日期：</span>
                      {standard.effectiveDate}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Recommended Standards */}
        {groupedStandards.recommended.length > 0 && (
          <section className="mb-8">
            <div className="mb-4 flex items-center">
              <span className="text-2xl mr-2">🟡</span>
              <h2 className="text-2xl font-bold">推荐标准</h2>
              <span className="ml-2 text-muted-foreground">
                - 强烈建议符合，提升产品竞争力
              </span>
            </div>
            <div className="grid gap-4">
              {groupedStandards.recommended.map((standard: Standard) => (
                <Card key={standard.id} className="transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <CardTitle className="text-lg">{standard.number}</CardTitle>
                          {getStatusBadge(standard.status)}
                        </div>
                        <CardDescription className="text-base font-medium text-foreground">
                          {standard.name}
                        </CardDescription>
                      </div>
                      <Badge variant="outline">{standard.market}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {standard.description}
                    </p>
                    <div className="mb-4">
                      <div className="text-sm font-semibold mb-2">关键要求：</div>
                      <ul className="space-y-1">
                        {standard.requirements.map((req, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-start">
                            <span className="mr-2">•</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Optional Standards */}
        {groupedStandards.optional.length > 0 && (
          <section className="mb-8">
            <div className="mb-4 flex items-center">
              <span className="text-2xl mr-2">🟢</span>
              <h2 className="text-2xl font-bold">可选标准</h2>
              <span className="ml-2 text-muted-foreground">
                - 选择性符合，可根据市场需求决定
              </span>
            </div>
            <div className="grid gap-4">
              {groupedStandards.optional.map((standard: Standard) => (
                <Card key={standard.id} className="transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <CardTitle className="text-lg">{standard.number}</CardTitle>
                          {getStatusBadge(standard.status)}
                        </div>
                        <CardDescription className="text-base font-medium text-foreground">
                          {standard.name}
                        </CardDescription>
                      </div>
                      <Badge variant="outline">{standard.market}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {standard.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Compliance Checklist */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">合规待办清单</h2>
          <div className="grid gap-6">
            {complianceTasks.map((task) => (
              <Card key={task.category}>
                <CardHeader>
                  <CardTitle className="text-lg">{task.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {task.items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                            item.priority === 'mandatory'
                              ? 'bg-red-500 text-white'
                              : item.priority === 'info'
                              ? 'bg-blue-500 text-white'
                              : 'bg-gray-300 dark:bg-gray-700'
                          }`}
                        >
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-semibold">{item.name}</div>
                          <div className="text-sm text-muted-foreground">{item.description}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* No Standards Found */}
        {matchedStandards.length === 0 && (
          <Card className="text-center">
            <CardContent className="py-12">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">暂未找到匹配的标准</h3>
              <p className="text-muted-foreground mb-4">
                当前选择可能暂无具体标准要求，建议咨询专业机构获取详细指导
              </p>
              <Button className="bg-blue-500 hover:bg-blue-600">
                联系专业咨询
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Action Buttons */}
        <div className="mt-8 flex gap-4 justify-center">
          <Button variant="outline" size="lg" onClick={() => window.history.back()}>
            重新查询
          </Button>
          <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
            导出合规清单
          </Button>
        </div>
      </main>
    </div>
  );
}

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-lg text-muted-foreground">正在加载查询结果...</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function ResultsPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ResultsContent />
    </Suspense>
  );
}