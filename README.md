# autoSkeleton

Vue 3 自动生成骨架屏

本项目依赖于 lodash。

支持全局自定义指令以及局部指令，demo 中为局部指令。

使用方法详见Demo autoSkeleton
`v-skeleton-item` 必须应用在 DOM 节点上。

本效果基于定位实现。在带有滚动条的页面会禁止滚动，loading 为 false 时会恢复。如果有嵌套滚动条（暂不支持,懒），需要自行修改，原理不难。

