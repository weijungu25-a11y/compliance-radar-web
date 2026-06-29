# 📡 合规雷达 ComplianceRadar

> 让每一台机器人，合规上路。

具身智能机器人合规导航助手 —— 帮你在 3 分钟内搞清楚产品要满足哪些标准。

[在线体验](https://weijungu25-a11y.github.io/compliance-radar-web/) · [问题反馈](https://github.com/weijungu25-a11y/compliance-radar-web/issues)

---

## 解决什么问题？

机器人创业团队在产品上市前，通常需要花大量时间翻阅国标、行标、地标，才能搞清楚"我的产品到底要满足什么标准"。这个过程中：

- 标准分散在几十个文件里，找全都难
- 不同机器人类型、不同场景适用的标准完全不同
- 分不清哪些是强制的、哪些是建议的
- 不知道自己的产品在特定场景下有哪些风险

**合规雷达把这件事从"翻三天国标"缩短到"3步出结果"。**

## 怎么用？

3 步完成合规检测：

1. **选机器人类型** — 人形 / 服务 / 工业 / 特种
2. **选应用场景** — 工业制造 / 家庭服务 / 医疗康养 / 公共服务 / 应急救援 / 电力巡检
3. **补充信息** — 是否人机协作、是否采集个人信息、目标市场（国内/出口）

完成后自动输出合规报告：

- 📜 **适用标准清单** — 按"必须 / 建议 / 可选 / 参考"四级分类，每条可展开看具体要求
- 🏛️ **杭州条例** — 在杭州运营的企业需遵守的条款
- ⚠️ **风险矩阵** — 基于产品类型和场景的风险分析
- 📋 **行动指南** — 按优先级排序的下一步建议

## 在线体验

👉 **[https://weijungu25-a11y.github.io/compliance-radar-web/](https://weijungu25-a11y.github.io/compliance-radar-web/)**

## 技术栈

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** + shadcn/ui
- 纯前端静态站，零后端依赖
- GitHub Pages 部署，零成本运行

## 本地开发

```bash
git clone https://github.com/weijungu25-a11y/compliance-radar-web.git
cd compliance-radar-web
npm install
npm run dev
```

访问 `http://localhost:3000`

## 当前状态与路线图

这是 **P0 版本**，定位为合规认知导航工具。

| 阶段 | 内容 | 状态 |
|------|------|------|
| P0 | 国内标准查询 + 风险矩阵 + 行动指南 | ✅ 已完成 |
| P1 | EU AI Act 等国际合规模块 | 🔜 规划中 |
| P2 | 检测机构智能匹配 + 一键询价 | 🔜 规划中 |
| P3 | 合规报告自动生成 + PDF导出 | 🔜 规划中 |

### 诚实说明

- 当前知识库收录 11 条国标/行标 + 杭州条例，标准覆盖面还在持续扩充中
- 目前仅覆盖中国市场标准，国际市场数据待补充
- 本工具是合规认知的起点，不能替代专业合规咨询

欢迎提 Issue 反馈问题或建议，也欢迎贡献更多标准数据。

## 开发

由 [牛宿（杭州）科技有限责任公司](https://weijungu25-a11y.github.io/compliance-radar-web/about) 开发运营。

## License

MIT
