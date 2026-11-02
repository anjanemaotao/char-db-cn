/* 本地原图配置：只有在用 file:// 双击打开时才会用到；
   放到站点上（http/https）时会自动忽略，改用源站链接。 */
window.LOCAL_ORIGINALS = {
  img: "../二次元换装库/originals/img/",
  line: "../二次元换装库/originals/line/",
  ref: "../二次元换装库/originals/costume-ref/"
};

/**
 * 埋点配置（可选，填了才会上报）。可以同时接多家：
 *
 * provider 取值：
 *   "ga4"         → Google Analytics 4，id 形如 G-XXXXXXXXXX
 *   "baidu"       → 百度统计，id 是 hm.js? 后面那串
 *   "umami"       → Umami Cloud，id 是 website-id
 *   "clarity"     → Microsoft Clarity，id 是项目 ID（设置 → 概览里的那串）
 *   "cloudflare"  → Cloudflare Web Analytics，id 是 beacon token（只统计 PV，无自定义事件）
 *
 * 本站和 ai-ref-library-cn 都在 https://sleepyzone.online 下，
 * 共用同一个 Clarity 项目；报表里按 URL 过滤（包含 char-db-cn）即可只看本站。
 *
 * 留空 / 不写 providers = 完全关闭，只写本地 window.__trackLog，不发任何请求。
 *
 * 调试：控制台执行 window.__trackDebug = true 后刷新，可看到每条事件；
 *      window.__trackLog 里始终保留最近 200 条。
 */
window.ANALYTICS = {
  providers: [
    { provider: "clarity", id: "r1wmvdsf4a" }
  ]
};
