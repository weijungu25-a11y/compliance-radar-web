'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { robotTypes, markets, applicationScenarios } from '@/data/queryConfig';

type FormData = {
  robotType: string | null;
  market: string | null;
  application: string | null;
};

export default function QueryPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    robotType: null,
    market: null,
    application: null,
  });

  const steps = [
    { id: 1, title: '选择机器人类型', description: '确定您的产品类型' },
    { id: 2, title: '选择目标市场', description: '确定目标销售地区' },
    { id: 3, title: '选择应用场景', description: '确定具体应用领域' },
  ];

  const handleSelect = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    // 将查询参数传递到结果页
    const params = new URLSearchParams({
      robotType: formData.robotType || '',
      market: formData.market || '',
      application: formData.application || '',
    });
    router.push(`/query/results?${params.toString()}`);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.robotType !== null;
      case 2:
        return formData.market !== null;
      case 3:
        return formData.application !== null;
      default:
        return false;
    }
  };

  const getScenarios = () => {
    if (formData.robotType && applicationScenarios[formData.robotType]) {
      return applicationScenarios[formData.robotType];
    }
    return [];
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">合规查询</h1>
          <p className="text-lg text-muted-foreground">
            分步引导选择机器人类型、目标市场和应用场景
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold ${
                      currentStep >= step.id
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 dark:bg-gray-800 text-gray-500'
                    }`}
                  >
                    {step.id}
                  </div>
                  <span className="mt-2 text-sm font-medium text-foreground">
                    {step.title}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {step.description}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-24 h-1 mx-4 ${
                      currentStep > step.id ? 'bg-blue-500' : 'bg-gray-200 dark:bg-gray-800'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="mb-8">
          {/* Step 1: Robot Type Selection */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-center mb-6">请选择您的机器人类型</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {robotTypes.map((type) => (
                  <Card
                    key={type.id}
                    className={`cursor-pointer transition-all ${
                      formData.robotType === type.id
                        ? 'ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-950'
                        : 'hover:shadow-lg hover:-translate-y-1'
                    }`}
                    onClick={() => handleSelect('robotType', type.id)}
                  >
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <span className="text-4xl">{type.icon}</span>
                        <CardTitle className="text-lg">{type.name}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base mb-2">
                        {type.description}
                      </CardDescription>
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium">示例：</span>
                        {type.examples.join('、')}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Market Selection */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-center mb-6">请选择目标市场</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {markets.map((market) => (
                  <Card
                    key={market.id}
                    className={`cursor-pointer transition-all ${
                      formData.market === market.id
                        ? 'ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-950'
                        : 'hover:shadow-lg hover:-translate-y-1'
                    }`}
                    onClick={() => handleSelect('market', market.id)}
                  >
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <span className="text-4xl">{market.flag}</span>
                        <CardTitle className="text-lg">{market.name}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {market.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Application Scenario Selection */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-center mb-6">请选择应用场景</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {getScenarios().map((scenario) => (
                  <Card
                    key={scenario.id}
                    className={`cursor-pointer transition-all ${
                      formData.application === scenario.id
                        ? 'ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-950'
                        : 'hover:shadow-lg hover:-translate-y-1'
                    }`}
                    onClick={() => handleSelect('application', scenario.id)}
                  >
                    <CardHeader>
                      <CardTitle className="text-lg">{scenario.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {scenario.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            size="lg"
            onClick={handleBack}
            disabled={currentStep === 1}
            className="px-8"
          >
            上一步
          </Button>

          {currentStep < 3 ? (
            <Button
              size="lg"
              onClick={handleNext}
              disabled={!canProceed()}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8"
            >
              下一步
            </Button>
          ) : (
            <Button
              size="lg"
              onClick={handleSubmit}
              disabled={!canProceed()}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8"
            >
              查看合规要求
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
          )}
        </div>

        {/* Current Selection Summary */}
        <div className="mt-8 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
          <h3 className="text-sm font-semibold mb-2">当前选择：</h3>
          <div className="flex flex-wrap gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">机器人类型：</span>
              <span className="font-medium ml-1">
                {formData.robotType
                  ? robotTypes.find((t) => t.id === formData.robotType)?.name
                  : '未选择'}
              </span>
            </div>
            <div>
              <span className="text-muted-foreground">目标市场：</span>
              <span className="font-medium ml-1">
                {formData.market
                  ? markets.find((m) => m.id === formData.market)?.name
                  : '未选择'}
              </span>
            </div>
            <div>
              <span className="text-muted-foreground">应用场景：</span>
              <span className="font-medium ml-1">
                {formData.application
                  ? getScenarios().find((s) => s.id === formData.application)?.name
                  : '未选择'}
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}