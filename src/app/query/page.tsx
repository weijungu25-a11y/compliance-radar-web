import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '合规查询 - 合规雷达',
  description: '分步引导选择机器人类型、目标市场和应用场景',
};

export default function QueryPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold">合规查询</h1>
        <p className="mt-4 text-muted-foreground">分步引导选择机器人类型、目标市场和应用场景</p>
      </main>
    </div>
  );
}