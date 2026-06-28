import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '关于我们 - 合规雷达',
  description: '了解合规雷达 - 机器人合规导航仪',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold">关于我们</h1>
        <p className="mt-4 text-muted-foreground">合规雷达 - 您的机器人合规导航仪</p>
      </main>
    </div>
  );
}