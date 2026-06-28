import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '查询结果 - 合规雷达',
  description: '机器人合规查询结果',
};

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold">查询结果</h1>
        <p className="mt-4 text-muted-foreground">您的机器人合规查询结果</p>
      </main>
    </div>
  );
}