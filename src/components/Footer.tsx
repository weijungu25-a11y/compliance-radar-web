import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Logo and Company Info */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2 mb-2">
              <div className="h-6 w-6 rounded-lg bg-blue-500 flex items-center justify-center">
                <svg
                  className="h-4 w-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
              </div>
              <span className="text-lg font-bold text-foreground">合规雷达</span>
            </div>
            <p className="text-sm text-muted-foreground">
              机器人合规导航仪
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
              首页
            </Link>
            <Link href="/query" className="text-muted-foreground hover:text-foreground transition-colors">
              合规查询
            </Link>
            <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
              关于我们
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © 2026 牛宿（杭州）科技有限责任公司 保留所有权利
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}