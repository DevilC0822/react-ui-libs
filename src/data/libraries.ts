const libraries = [
  {
    name: 'Ant Design',
    logo: '/logo/antd.svg',
    url: 'https://ant.design/index-cn',
    repoOwner: 'ant-design',
    repoName: 'ant-design',
    packageName: 'antd',
    componentMatchings: [{
      'name': 'Button',
      'url': 'https://ant-design.antgroup.com/components/button-cn',
      'tips': '按钮用于开始一个即时操作。',
      'category': 'General'
    },
    {
      'name': 'FloatButton',
      'url': 'https://ant-design.antgroup.com/components/float-button-cn',
      'tips': '悬浮按钮。自 5.0.0 版本开始提供该组件。',
      'category': 'General'
    },
    {
      'name': 'Icon',
      'url': 'https://ant-design.antgroup.com/components/icon-cn',
      'tips': '图标',
      'category': 'General'
    },
    {
      'name': 'Typography',
      'url': 'https://ant-design.antgroup.com/components/typography-cn',
      'tips': '排版',
      'category': 'General'
    },
    {
      'name': 'Divider',
      'url': 'https://ant-design.antgroup.com/components/divider-cn',
      'tips': '分割线',
      'category': 'Layout'
    },
    {
      'name': 'Flex',
      'url': 'https://ant-design.antgroup.com/components/flex-cn',
      'tips': '弹性布局',
      'category': 'Layout'
    },
    {
      'name': 'Grid',
      'url': 'https://ant-design.antgroup.com/components/grid-cn',
      'tips': '栅格',
      'category': 'Layout'
    },
    {
      'name': 'Layout',
      'url': 'https://ant-design.antgroup.com/components/layout-cn',
      'tips': '布局',
      'category': 'Layout'
    },
    {
      'name': 'Space',
      'url': 'https://ant-design.antgroup.com/components/space-cn',
      'tips': '间距',
      'category': 'Layout'
    },
    {
      'name': 'Anchor',
      'url': 'https://ant-design.antgroup.com/components/anchor-cn',
      'tips': '锚点',
      'category': 'Navigation'
    },
    {
      'name': 'Breadcrumb',
      'url': 'https://ant-design.antgroup.com/components/breadcrumb-cn',
      'tips': '面包屑',
      'category': 'Navigation'
    },
    {
      'name': 'Dropdown',
      'url': 'https://ant-design.antgroup.com/components/dropdown-cn',
      'tips': '下拉菜单',
      'category': 'Navigation'
    },
    {
      'name': 'Menu',
      'url': 'https://ant-design.antgroup.com/components/menu-cn',
      'tips': '导航菜单',
      'category': 'Navigation'
    },
    {
      'name': 'Pagination',
      'url': 'https://ant-design.antgroup.com/components/pagination-cn',
      'tips': '分页',
      'category': 'Navigation'
    },
    {
      'name': 'Steps',
      'url': 'https://ant-design.antgroup.com/components/steps-cn',
      'tips': '步骤条',
      'category': 'Navigation'
    },
    {
      'name': 'AutoComplete',
      'url': 'https://ant-design.antgroup.com/components/auto-complete-cn',
      'tips': '自动完成',
      'category': 'Data Entry'
    },
    {
      'name': 'Cascader',
      'url': 'https://ant-design.antgroup.com/components/cascader-cn',
      'tips': '级联选择',
      'category': 'Data Entry'
    },
    {
      'name': 'Checkbox',
      'url': 'https://ant-design.antgroup.com/components/checkbox-cn',
      'tips': '多选框',
      'category': 'Data Entry'
    },
    {
      'name': 'ColorPicker',
      'url': 'https://ant-design.antgroup.com/components/color-picker-cn',
      'tips': '颜色选择器',
      'category': 'Data Entry'
    },
    {
      'name': 'DatePicker',
      'url': 'https://ant-design.antgroup.com/components/date-picker-cn',
      'tips': '日期选择框',
      'category': 'Data Entry'
    },
    {
      'name': 'Form',
      'url': 'https://ant-design.antgroup.com/components/form-cn',
      'tips': '表单',
      'category': 'Data Entry'
    },
    {
      'name': 'Input',
      'url': 'https://ant-design.antgroup.com/components/input-cn',
      'tips': '输入框',
      'category': 'Data Entry'
    },
    {
      'name': 'InputNumber',
      'url': 'https://ant-design.antgroup.com/components/input-number-cn',
      'tips': '数字输入框',
      'category': 'Data Entry'
    },
    {
      'name': 'Mentions',
      'url': 'https://ant-design.antgroup.com/components/mentions-cn',
      'tips': '提及',
      'category': 'Data Entry'
    },
    {
      'name': 'Radio',
      'url': 'https://ant-design.antgroup.com/components/radio-cn',
      'tips': '单选框',
      'category': 'Data Entry'
    },
    {
      'name': 'Rate',
      'url': 'https://ant-design.antgroup.com/components/rate-cn',
      'tips': '评分',
      'category': 'Data Entry'
    },
    {
      'name': 'Select',
      'url': 'https://ant-design.antgroup.com/components/select-cn',
      'tips': '选择器',
      'category': 'Data Entry'
    },
    {
      'name': 'Slider',
      'url': 'https://ant-design.antgroup.com/components/slider-cn',
      'tips': '滑动输入条',
      'category': 'Data Entry'
    },
    {
      'name': 'Switch',
      'url': 'https://ant-design.antgroup.com/components/switch-cn',
      'tips': '开关',
      'category': 'Data Entry'
    },
    {
      'name': 'TimePicker',
      'url': 'https://ant-design.antgroup.com/components/time-picker-cn',
      'tips': '时间选择框',
      'category': 'Data Entry'
    },
    {
      'name': 'Transfer',
      'url': 'https://ant-design.antgroup.com/components/transfer-cn',
      'tips': '穿梭框',
      'category': 'Data Entry'
    },
    {
      'name': 'TreeSelect',
      'url': 'https://ant-design.antgroup.com/components/tree-select-cn',
      'tips': '树选择',
      'category': 'Data Entry'
    },
    {
      'name': 'Upload',
      'url': 'https://ant-design.antgroup.com/components/upload-cn',
      'tips': '上传',
      'category': 'Data Entry'
    },
    {
      'name': 'Avatar',
      'url': 'https://ant-design.antgroup.com/components/avatar-cn',
      'tips': '头像',
      'category': 'Data Display'
    },
    {
      'name': 'Badge',
      'url': 'https://ant-design.antgroup.com/components/badge-cn',
      'tips': '徽标数',
      'category': 'Data Display'
    },
    {
      'name': 'Calendar',
      'url': 'https://ant-design.antgroup.com/components/calendar-cn',
      'tips': '日历',
      'category': 'Data Display'
    },
    {
      'name': 'Card',
      'url': 'https://ant-design.antgroup.com/components/card-cn',
      'tips': '卡片',
      'category': 'Data Display'
    },
    {
      'name': 'Carousel',
      'url': 'https://ant-design.antgroup.com/components/carousel-cn',
      'tips': '走马灯',
      'category': 'Data Display'
    },
    {
      'name': 'Collapse',
      'url': 'https://ant-design.antgroup.com/components/collapse-cn',
      'tips': '折叠面板',
      'category': 'Data Display'
    },
    {
      'name': 'Descriptions',
      'url': 'https://ant-design.antgroup.com/components/descriptions-cn',
      'tips': '描述列表',
      'category': 'Data Display'
    },
    {
      'name': 'Empty',
      'url': 'https://ant-design.antgroup.com/components/empty-cn',
      'tips': '空状态',
      'category': 'Data Display'
    },
    {
      'name': 'Image',
      'url': 'https://ant-design.antgroup.com/components/image-cn',
      'tips': '图片',
      'category': 'Data Display'
    },
    {
      'name': 'List',
      'url': 'https://ant-design.antgroup.com/components/list-cn',
      'tips': '列表',
      'category': 'Data Display'
    },
    {
      'name': 'Popover',
      'url': 'https://ant-design.antgroup.com/components/popover-cn',
      'tips': '气泡卡片',
      'category': 'Data Display'
    },
    {
      'name': 'QRCode',
      'url': 'https://ant-design.antgroup.com/components/qrcode-cn',
      'tips': '二维码',
      'category': 'Data Display'
    },
    {
      'name': 'Segmented',
      'url': 'https://ant-design.antgroup.com/components/segmented-cn',
      'tips': '分段控制器',
      'category': 'Data Display'
    },
    {
      'name': 'Statistic',
      'url': 'https://ant-design.antgroup.com/components/statistic-cn',
      'tips': '统计数值',
      'category': 'Data Display'
    },
    {
      'name': 'Table',
      'url': 'https://ant-design.antgroup.com/components/table-cn',
      'tips': '表格',
      'category': 'Data Display'
    },
    {
      'name': 'Tabs',
      'url': 'https://ant-design.antgroup.com/components/tabs-cn',
      'tips': '标签页',
      'category': 'Data Display'
    },
    {
      'name': 'Tag',
      'url': 'https://ant-design.antgroup.com/components/tag-cn',
      'tips': '标签',
      'category': 'Data Display'
    },
    {
      'name': 'Timeline',
      'url': 'https://ant-design.antgroup.com/components/timeline-cn',
      'tips': '时间轴',
      'category': 'Data Display'
    },
    {
      'name': 'Tooltip',
      'url': 'https://ant-design.antgroup.com/components/tooltip-cn',
      'tips': '文字提示',
      'category': 'Data Display'
    },
    {
      'name': 'Tour',
      'url': 'https://ant-design.antgroup.com/components/tour-cn',
      'tips': '漫游式引导',
      'category': 'Data Display'
    },
    {
      'name': 'Tree',
      'url': 'https://ant-design.antgroup.com/components/tree-cn',
      'tips': '树形控件',
      'category': 'Data Display'
    },
    {
      'name': 'Alert',
      'url': 'https://ant-design.antgroup.com/components/alert-cn',
      'tips': '警告提示',
      'category': 'Feedback'
    },
    {
      'name': 'Drawer',
      'url': 'https://ant-design.antgroup.com/components/drawer-cn',
      'tips': '抽屉',
      'category': 'Feedback'
    },
    {
      'name': 'Message',
      'url': 'https://ant-design.antgroup.com/components/message-cn',
      'tips': '全局提示',
      'category': 'Feedback'
    },
    {
      'name': 'Modal',
      'url': 'https://ant-design.antgroup.com/components/modal-cn',
      'tips': '对话框',
      'category': 'Feedback'
    },
    {
      'name': 'Notification',
      'url': 'https://ant-design.antgroup.com/components/notification-cn',
      'tips': '通知提醒框',
      'category': 'Feedback'
    },
    {
      'name': 'Popconfirm',
      'url': 'https://ant-design.antgroup.com/components/popconfirm-cn',
      'tips': '气泡确认框',
      'category': 'Feedback'
    },
    {
      'name': 'Progress',
      'url': 'https://ant-design.antgroup.com/components/progress-cn',
      'tips': '进度条',
      'category': 'Feedback'
    },
    {
      'name': 'Result',
      'url': 'https://ant-design.antgroup.com/components/result-cn',
      'tips': '结果',
      'category': 'Feedback'
    },
    {
      'name': 'Skeleton',
      'url': 'https://ant-design.antgroup.com/components/skeleton-cn',
      'tips': '骨架屏',
      'category': 'Feedback'
    },
    {
      'name': 'Spin',
      'url': 'https://ant-design.antgroup.com/components/spin-cn',
      'tips': '加载中',
      'category': 'Feedback'
    },
    {
      'name': 'Watermark',
      'url': 'https://ant-design.antgroup.com/components/watermark-cn',
      'tips': '水印',
      'category': 'Feedback'
    },
    {
      'name': 'Affix',
      'url': 'https://ant-design.antgroup.com/components/affix-cn',
      'tips': '固钉',
      'category': 'Other'
    },
    {
      'name': 'App',
      'url': 'https://ant-design.antgroup.com/components/app-cn',
      'tips': '包裹组件',
      'category': 'Other'
    },
    {
      'name': 'ConfigProvider',
      'url': 'https://ant-design.antgroup.com/components/config-provider-cn',
      'tips': '全局化配置',
      'category': 'Other'
    }
    ],
    filterMatchings: [
      { id: 'FStyled' },
      { id: 'FImported' },
      { id: 'FComponents' },
      { id: 'FReactAndNext' },
      { id: 'FFree' },
      { id: 'FDarkMode' },
      { id: 'FSemanticColors' },
      { id: 'FFigma' },
      { id: 'FPublicRoadmap' },
      { id: 'FRTLSupport' },
      { id: 'FFullyTyped' },
      { id: 'FFormHelpers' },
      { id: 'FChineseDoc' },
    ],
    version: '5.14.1',
    starsCount: 0,
    downloadsCount: 0,
  },
  {
    name: 'Fusion Design',
    logo: '/logo/FusionDesign.svg',
    url: 'https://fusion.design/pc/?themeid=2',
    repoOwner: 'alibaba-fusion',
    repoName: 'next',
    packageName: '@alifd/next',
    componentMatchings: [
      {
        'name': 'Box',
        'url': 'https://fusion.design/pc/component/box?themeid=2',
        'tips': '弹性布局',
        'category': 'General'
      },
      {
        'name': 'Button',
        'url': 'https://fusion.design/pc/component/button?themeid=2',
        'tips': '按钮',
        'category': 'General'
      },
      {
        'name': 'Divider',
        'url': 'https://fusion.design/pc/component/divider?themeid=2',
        'tips': '分隔符',
        'category': 'General'
      },
      {
        'name': 'Grid',
        'url': 'https://fusion.design/pc/component/grid?themeid=2',
        'tips': '栅格',
        'category': 'General'
      },
      {
        'name': 'Icon',
        'url': 'https://fusion.design/pc/component/icon?themeid=2',
        'tips': '图标',
        'category': 'General'
      },
      {
        'name': 'MenuButton',
        'url': 'https://fusion.design/pc/component/menu-button?themeid=2',
        'tips': '菜单按钮',
        'category': 'General'
      },
      {
        'name': 'Paragraph',
        'url': 'https://fusion.design/pc/component/paragraph?themeid=2',
        'tips': '段落',
        'category': 'General'
      },
      {
        'name': 'ResponsiveGrid',
        'url': 'https://fusion.design/pc/component/responsive-grid?themeid=2',
        'tips': '响应式栅格布局',
        'category': 'General'
      },
      {
        'name': 'Shell',
        'url': 'https://fusion.design/pc/component/shell?themeid=2',
        'tips': '框架布局',
        'category': 'General'
      },
      {
        'name': 'SplitButton',
        'url': 'https://fusion.design/pc/component/split-button?themeid=2',
        'tips': '分隔按钮',
        'category': 'General'
      },
      {
        'name': 'Typography',
        'url': 'https://fusion.design/pc/component/typography?themeid=2',
        'tips': '排版',
        'category': 'General'
      },
      {
        'name': 'Breadcrumb',
        'url': 'https://fusion.design/pc/component/breadcrumb?themeid=2',
        'tips': '面包屑',
        'category': 'Navigation'
      },
      {
        'name': 'Nav',
        'url': 'https://fusion.design/pc/component/nav?themeid=2',
        'tips': '导航',
        'category': 'Navigation'
      },
      {
        'name': 'Pagination',
        'url': 'https://fusion.design/pc/component/pagination?themeid=2',
        'tips': '翻页器',
        'category': 'Navigation'
      },
      {
        'name': 'Step',
        'url': 'https://fusion.design/pc/component/step?themeid=2',
        'tips': '步骤',
        'category': 'Navigation'
      },
      {
        'name': 'Tab',
        'url': 'https://fusion.design/pc/component/tab?themeid=2',
        'tips': '选项卡',
        'category': 'Navigation'
      },
      {
        'name': 'CascaderSelect',
        'url': 'https://fusion.design/pc/component/cascader-select?themeid=2',
        'tips': '级联选择',
        'category': 'Data Entry'
      },
      {
        'name': 'Checkbox',
        'url': 'https://fusion.design/pc/component/checkbox?themeid=2',
        'tips': '复选框',
        'category': 'Data Entry'
      },
      {
        'name': 'DatePicker',
        'url': 'https://fusion.design/pc/component/date-picker?themeid=2',
        'tips': '日期选择器',
        'category': 'Data Entry'
      },
      {
        'name': 'DatePicker2',
        'url': 'https://fusion.design/pc/component/date-picker2?themeid=2',
        'tips': '日期选择器2',
        'category': 'Data Entry'
      },
      {
        'name': 'Field',
        'url': 'https://fusion.design/pc/component/field?themeid=2',
        'tips': '表单辅助工具',
        'category': 'Data Entry'
      },
      {
        'name': 'Form',
        'url': 'https://fusion.design/pc/component/form?themeid=2',
        'tips': '表单',
        'category': 'Data Entry'
      },
      {
        'name': 'Input',
        'url': 'https://fusion.design/pc/component/input?themeid=2',
        'tips': '输入框',
        'category': 'Data Entry'
      },
      {
        'name': 'NumberPicker',
        'url': 'https://fusion.design/pc/component/number-picker?themeid=2',
        'tips': '数字输入框',
        'category': 'Data Entry'
      },
      {
        'name': 'Radio',
        'url': 'https://fusion.design/pc/component/radio?themeid=2',
        'tips': '单选框',
        'category': 'Data Entry'
      },
      {
        'name': 'Range',
        'url': 'https://fusion.design/pc/component/range?themeid=2',
        'tips': '区段选择',
        'category': 'Data Entry'
      },
      {
        'name': 'Rating',
        'url': 'https://fusion.design/pc/component/rating?themeid=2',
        'tips': '评分',
        'category': 'Data Entry'
      },
      {
        'name': 'Search',
        'url': 'https://fusion.design/pc/component/search?themeid=2',
        'tips': '搜索',
        'category': 'Data Entry'
      },
      {
        'name': 'Select',
        'url': 'https://fusion.design/pc/component/select?themeid=2',
        'tips': '选择器',
        'category': 'Data Entry'
      },
      {
        'name': 'Switch',
        'url': 'https://fusion.design/pc/component/switch?themeid=2',
        'tips': '开关',
        'category': 'Data Entry'
      },
      {
        'name': 'TimePicker',
        'url': 'https://fusion.design/pc/component/time-picker?themeid=2',
        'tips': '时间选择器',
        'category': 'Data Entry'
      },
      {
        'name': 'TimePicker2',
        'url': 'https://fusion.design/pc/component/time-picker2?themeid=2',
        'tips': '时间选择器2',
        'category': 'Data Entry'
      },
      {
        'name': 'Transfer',
        'url': 'https://fusion.design/pc/component/transfer?themeid=2',
        'tips': '穿梭框',
        'category': 'Data Entry'
      },
      {
        'name': 'TreeSelect',
        'url': 'https://fusion.design/pc/component/tree-select?themeid=2',
        'tips': '树形选择控件',
        'category': 'Data Entry'
      },
      {
        'name': 'Upload',
        'url': 'https://fusion.design/pc/component/upload?themeid=2',
        'tips': '上传组件',
        'category': 'Data Entry'
      },
      {
        'name': 'Avatar',
        'url': 'https://fusion.design/pc/component/avatar?themeid=2',
        'tips': '头像',
        'category': 'Data Display'
      },
      {
        'name': 'Badge',
        'url': 'https://fusion.design/pc/component/badge?themeid=2',
        'tips': '徽标数',
        'category': 'Data Display'
      },
      {
        'name': 'Calendar',
        'url': 'https://fusion.design/pc/component/calendar?themeid=2',
        'tips': '日历',
        'category': 'Data Display'
      },
      {
        'name': 'Calendar2',
        'url': 'https://fusion.design/pc/component/calendar2?themeid=2',
        'tips': '日历2',
        'category': 'Data Display'
      },
      {
        'name': 'Card',
        'url': 'https://fusion.design/pc/component/card?themeid=2',
        'tips': '卡片',
        'category': 'Data Display'
      },
      {
        'name': 'Cascader',
        'url': 'https://fusion.design/pc/component/cascader?themeid=2',
        'tips': '级联',
        'category': 'Data Display'
      },
      {
        'name': 'Collapse',
        'url': 'https://fusion.design/pc/component/collapse?themeid=2',
        'tips': '折叠面板',
        'category': 'Data Display'
      },
      {
        'name': 'List',
        'url': 'https://fusion.design/pc/component/list?themeid=2',
        'tips': '列表',
        'category': 'Data Display'
      },
      {
        'name': 'Menu',
        'url': 'https://fusion.design/pc/component/menu?themeid=2',
        'tips': '菜单',
        'category': 'Data Display'
      },
      {
        'name': 'Progress',
        'url': 'https://fusion.design/pc/component/progress?themeid=2',
        'tips': '进度条',
        'category': 'Data Display'
      },
      {
        'name': 'Slider',
        'url': 'https://fusion.design/pc/component/slider?themeid=2',
        'tips': '滑块',
        'category': 'Data Display'
      },
      {
        'name': 'Table',
        'url': 'https://fusion.design/pc/component/table?themeid=2',
        'tips': '表格',
        'category': 'Data Display'
      },
      {
        'name': 'Tag',
        'url': 'https://fusion.design/pc/component/tag?themeid=2',
        'tips': '标签',
        'category': 'Data Display'
      },
      {
        'name': 'Timeline',
        'url': 'https://fusion.design/pc/component/timeline?themeid=2',
        'tips': '时间轴',
        'category': 'Data Display'
      },
      {
        'name': 'Tree',
        'url': 'https://fusion.design/pc/component/tree?themeid=2',
        'tips': '树形控件',
        'category': 'Data Display'
      },
      {
        'name': 'Balloon',
        'url': 'https://fusion.design/pc/component/balloon?themeid=2',
        'tips': '气泡',
        'category': 'Feedback'
      },
      {
        'name': 'Dialog',
        'url': 'https://fusion.design/pc/component/dialog?themeid=2',
        'tips': '对话框',
        'category': 'Feedback'
      },
      {
        'name': 'Drawer',
        'url': 'https://fusion.design/pc/component/drawer?themeid=2',
        'tips': '抽屉',
        'category': 'Feedback'
      },
      {
        'name': 'Loading',
        'url': 'https://fusion.design/pc/component/loading?themeid=2',
        'tips': '加载',
        'category': 'Feedback'
      },
      {
        'name': 'Message',
        'url': 'https://fusion.design/pc/component/message?themeid=2',
        'tips': '全局提示',
        'category': 'Feedback'
      },
      {
        'name': 'Notification',
        'url': 'https://fusion.design/pc/component/notification?themeid=2',
        'tips': '通知',
        'category': 'Feedback'
      },
      {
        'name': 'Affix',
        'url': 'https://fusion.design/pc/component/affix?themeid=2',
        'tips': '固钉',
        'category': 'Other'
      },
      {
        'name': 'Animate',
        'url': 'https://fusion.design/pc/component/animate?themeid=2',
        'tips': '动画',
        'category': 'Other'
      },
      {
        'name': 'ConfigProvider',
        'url': 'https://fusion.design/pc/component/config-provider?themeid=2',
        'tips': '全局配置',
        'category': 'Other'
      },
      {
        'name': 'Dropdown',
        'url': 'https://fusion.design/pc/component/dropdown?themeid=2',
        'tips': '下拉',
        'category': 'Other'
      },
      {
        'name': 'Overlay',
        'url': 'https://fusion.design/pc/component/overlay?themeid=2',
        'tips': '遮罩层',
        'category': 'Other'
      },
      {
        'name': 'VirtualList',
        'url': 'https://fusion.design/pc/component/virtual-list?themeid=2',
        'tips': '虚拟列表',
        'category': 'Other'
      }
    ],
    filterMatchings: [
      { id: 'FStyled' },
      { id: 'FImported' },
      { id: 'FComponents' },
      { id: 'FFree' },
      { id: 'FFullyAccessible' },
      { id: 'FBuiltInThemes' },
      { id: 'FThemeGenerator' },
      { id: 'FSemanticColors' },
      { id: 'FFigma' },
      { id: 'FPublicRoadmap' },
      { id: 'FFormHelpers' },
      { id: 'FChineseDoc' },
    ],
    version: '1.25.x',
    starsCount: 0,
    downloadsCount: 0,
  },
  {
    name: 'Semi Design',
    logo: '/logo/semi.png',
    url: 'https://semi.design/zh-CN/',
    repoOwner: 'DouyinFE',
    repoName: 'semi-design',
    packageName: '@douyinfe/semi-ui',
    componentMatchings: [
      {
        name: 'Divider',
        url: 'https://semi.design/zh-CN/basic/divider',
        tips: '分割线',
        category: '基础'
      },
      {
        name: 'Grid',
        url: 'https://semi.design/zh-CN/basic/grid',
        tips: '栅格',
        category: '基础'
      },
      {
        name: 'Icon',
        url: 'https://semi.design/zh-CN/basic/icon',
        tips: '图标',
        category: '基础'
      },
      {
        name: 'Layout',
        url: 'https://semi.design/zh-CN/basic/layout',
        tips: '布局',
        category: '基础'
      },
      {
        name: 'Button',
        url: 'https://semi.design/zh-CN/basic/button',
        tips: '按钮',
        category: '基础'
      },
      {
        name: 'Space',
        url: 'https://semi.design/zh-CN/basic/space',
        tips: '间距',
        category: '基础'
      },
      {
        name: 'Typography',
        url: 'https://semi.design/zh-CN/basic/typography',
        tips: '版式',
        category: '基础'
      },
      {
        name: 'AutoComplete',
        url: 'https://semi.design/zh-CN/data-entry/auto-complete',
        tips: '自动完成',
        category: '输入类'
      },
      {
        name: 'Cascader',
        url: 'https://semi.design/zh-CN/data-entry/cascader',
        tips: '级联选择',
        category: '输入类'
      },
      {
        name: 'Checkbox',
        url: 'https://semi.design/zh-CN/data-entry/checkbox',
        tips: '复选框',
        category: '输入类'
      },
      {
        name: 'DatePicker',
        url: 'https://semi.design/zh-CN/data-entry/date-picker',
        tips: '日期选择器',
        category: '输入类'
      },
      {
        name: 'Form',
        url: 'https://semi.design/zh-CN/data-entry/form',
        tips: '表单',
        category: '输入类'
      },
      {
        name: 'Input',
        url: 'https://semi.design/zh-CN/data-entry/input',
        tips: '输入框',
        category: '输入类'
      },
      {
        name: 'InputNumber',
        url: 'https://semi.design/zh-CN/data-entry/input-number',
        tips: '数字输入框',
        category: '输入类'
      },
      {
        name: 'Radio',
        url: 'https://semi.design/zh-CN/data-entry/radio',
        tips: '单选框',
        category: '输入类'
      },
      {
        name: 'Rating',
        url: 'https://semi.design/zh-CN/data-entry/rating',
        tips: '评分',
        category: '输入类'
      },
      {
        name: 'Select',
        url: 'https://semi.design/zh-CN/data-entry/select',
        tips: '选择器',
        category: '输入类'
      },
      {
        name: 'Slider',
        url: 'https://semi.design/zh-CN/data-entry/slider',
        tips: '滑动选择器',
        category: '输入类'
      },
      {
        name: 'Switch',
        url: 'https://semi.design/zh-CN/data-entry/switch',
        tips: '开关',
        category: '输入类'
      },
      {
        name: 'TagInput',
        url: 'https://semi.design/zh-CN/data-entry/tag-input',
        tips: '标签输入框',
        category: '输入类'
      },
      {
        name: 'TimePicker',
        url: 'https://semi.design/zh-CN/data-entry/time-picker',
        tips: '时间选择器',
        category: '输入类'
      },
      {
        name: 'Transfer',
        url: 'https://semi.design/zh-CN/data-entry/transfer',
        tips: '穿梭框',
        category: '输入类'
      },
      {
        name: 'TreeSelect',
        url: 'https://semi.design/zh-CN/data-entry/tree-select',
        tips: '树选择器',
        category: '输入类'
      },
      {
        name: 'Upload',
        url: 'https://semi.design/zh-CN/data-entry/upload',
        tips: '上传',
        category: '输入类'
      },
      {
        name: 'Anchor',
        url: 'https://semi.design/zh-CN/navigation/anchor',
        tips: '锚点',
        category: '导航类'
      },
      {
        name: 'BackTop',
        url: 'https://semi.design/zh-CN/navigation/back-top',
        tips: '回到顶部',
        category: '导航类'
      },
      {
        name: 'Breadcrumb',
        url: 'https://semi.design/zh-CN/navigation/breadcrumb',
        tips: '面包屑',
        category: '导航类'
      },
      {
        name: 'Navigation',
        url: 'https://semi.design/zh-CN/navigation/navigation',
        tips: '导航',
        category: '导航类'
      },
      {
        name: 'Pagination',
        url: 'https://semi.design/zh-CN/navigation/pagination',
        tips: '翻页器',
        category: '导航类'
      },
      {
        name: 'Steps',
        url: 'https://semi.design/zh-CN/navigation/steps',
        tips: '步骤',
        category: '导航类'
      },
      {
        name: 'Tabs',
        url: 'https://semi.design/zh-CN/navigation/tabs',
        tips: '标签栏',
        category: '导航类'
      },
      {
        name: 'Tree',
        url: 'https://semi.design/zh-CN/navigation/tree',
        tips: '树形控件',
        category: '导航类'
      },
      {
        name: 'Avatar',
        url: 'https://semi.design/zh-CN/data-display/avatar',
        tips: '头像',
        category: '展示类'
      },
      {
        name: 'Badge',
        url: 'https://semi.design/zh-CN/data-display/badge',
        tips: '徽章',
        category: '展示类'
      },
      {
        name: 'Calendar',
        url: 'https://semi.design/zh-CN/data-display/calendar',
        tips: '日历',
        category: '展示类'
      },
      {
        name: 'Card',
        url: 'https://semi.design/zh-CN/data-display/card',
        tips: '卡片',
        category: '展示类'
      },
      {
        name: 'Carousel',
        url: 'https://semi.design/zh-CN/data-display/carousel',
        tips: '轮播图',
        category: '展示类'
      },
      {
        name: 'Collapse',
        url: 'https://semi.design/zh-CN/data-display/collapse',
        tips: '折叠面板',
        category: '展示类'
      },
      {
        name: 'Collapsible',
        url: 'https://semi.design/zh-CN/data-display/collapsible',
        tips: '折叠',
        category: '展示类'
      },
      {
        name: 'Descriptions',
        url: 'https://semi.design/zh-CN/data-display/descriptions',
        tips: '描述列表',
        category: '展示类'
      },
      {
        name: 'Dropdown',
        url: 'https://semi.design/zh-CN/data-display/dropdown',
        tips: '下拉框',
        category: '展示类'
      },
      {
        name: 'Empty',
        url: 'https://semi.design/zh-CN/data-display/empty',
        tips: '空状态',
        category: '展示类'
      },
      {
        name: 'Image',
        url: 'https://semi.design/zh-CN/data-display/image',
        tips: '图片',
        category: '展示类'
      },
      {
        name: 'List',
        url: 'https://semi.design/zh-CN/data-display/list',
        tips: '列表',
        category: '展示类'
      },
      {
        name: 'Modal',
        url: 'https://semi.design/zh-CN/feedback/modal',
        tips: '模态对话框',
        category: '反馈类'
      },
      {
        name: 'OverflowList',
        url: 'https://semi.design/zh-CN/data-display/overflow-list',
        tips: '折叠列表',
        category: '展示类'
      },
      {
        name: 'Popover',
        url: 'https://semi.design/zh-CN/data-display/popover',
        tips: '气泡卡片',
        category: '展示类'
      },
      {
        name: 'ScrollList',
        url: 'https://semi.design/zh-CN/data-display/scroll-list',
        tips: '滚动列表',
        category: '展示类'
      },
      {
        name: 'SideSheet',
        url: 'https://semi.design/zh-CN/feedback/sidesheet',
        tips: '滑动侧边栏',
        category: '反馈类'
      },
      {
        name: 'Table',
        url: 'https://semi.design/zh-CN/data-display/table',
        tips: '表格',
        category: '展示类'
      },
      {
        name: 'Tag',
        url: 'https://semi.design/zh-CN/data-display/tag',
        tips: '标签',
        category: '展示类'
      },
      {
        name: 'Timeline',
        url: 'https://semi.design/zh-CN/data-display/timeline',
        tips: '时间轴',
        category: '展示类'
      },
      {
        name: 'Tooltip',
        url: 'https://semi.design/zh-CN/data-display/tooltip',
        tips: '工具提示',
        category: '展示类'
      },
      {
        name: 'Highlight',
        url: 'https://semi.design/zh-CN/data-display/highlight',
        tips: '高亮文本',
        category: '展示类'
      },
      {
        name: 'Banner',
        url: 'https://semi.design/zh-CN/feedback/banner',
        tips: '通知横幅',
        category: '反馈类'
      },
      {
        name: 'Notification',
        url: 'https://semi.design/zh-CN/feedback/notification',
        tips: '通知',
        category: '反馈类'
      },
      {
        name: 'Popconfirm',
        url: 'https://semi.design/zh-CN/feedback/popconfirm',
        tips: '气泡确认框',
        category: '反馈类'
      },
      {
        name: 'Progress',
        url: 'https://semi.design/zh-CN/feedback/progress',
        tips: '进度条',
        category: '反馈类'
      },
      {
        name: 'Skeleton',
        url: 'https://semi.design/zh-CN/feedback/skeleton',
        tips: '骨架屏',
        category: '反馈类'
      },
      {
        name: 'Spin',
        url: 'https://semi.design/zh-CN/feedback/spin',
        tips: '加载器',
        category: '反馈类'
      },
      {
        name: 'Toast',
        url: 'https://semi.design/zh-CN/feedback/toast',
        tips: '提示',
        category: '反馈类'
      },
      {
        name: 'ConfigProvider',
        url: 'https://semi.design/zh-CN/others/config-provider',
        tips: '全局配置',
        category: '其他'
      },
      {
        name: 'LocaleProvider',
        url: 'https://semi.design/zh-CN/others/locale-provider',
        tips: '多语言',
        category: '其他'
      },
      {
        name: 'VChart',
        url: 'https://semi.design/zh-CN/data-display/vchart',
        tips: '图表',
        category: '展示类'
      },
    ],
    filterMatchings: [
      { id: 'FStyled' },
      { id: 'FImported' },
      { id: 'FComponents' },
      { id: 'FReactAndNext' },
      { id: 'FFree' },
      { id: 'FFullyAccessible' },
      { id: 'FBuiltInThemes' },
      { id: 'FThemeGenerator' },
      { id: 'FDarkMode' },
      { id: 'FSemanticColors' },
      { id: 'FFigma' },
      { id: 'FFullyTyped' },
      { id: 'FFormHelpers' },
      { id: 'FChineseDoc' },
    ],
    version: '2.53.1',
    starsCount: 0,
    downloadsCount: 0,
  },
  {
    name: 'Arco Design',
    logo: '/logo/arco.png',
    url: 'https://arco.design/',
    repoOwner: 'arco-design',
    repoName: 'arco-design',
    packageName: '@arco-design/web-react',
    componentMatchings: [
      {
        name: 'Icon',
        url: 'https://arco.design/react/components/icon',
        tips: '图标',
        category: '通用'
      },
      {
        name: 'Button',
        url: 'https://arco.design/react/components/button',
        tips: '按钮',
        category: '通用'
      },
      {
        name: 'Link',
        url: 'https://arco.design/react/components/link',
        tips: '链接',
        category: '通用'
      },
      {
        name: 'Typography',
        url: 'https://arco.design/react/components/typography',
        tips: '排版',
        category: '通用'
      },
      {
        name: 'Grid',
        url: 'https://arco.design/react/components/grid',
        tips: '栅格',
        category: '布局'
      },
      {
        name: 'Divider',
        url: 'https://arco.design/react/components/divider',
        tips: '分割线',
        category: '布局'
      },
      {
        name: 'Layout',
        url: 'https://arco.design/react/components/layout',
        tips: '布局',
        category: '布局'
      },
      {
        name: 'Space',
        url: 'https://arco.design/react/components/space',
        tips: '间距',
        category: '布局'
      },
      {
        name: 'Avatar',
        url: 'https://arco.design/react/components/avatar',
        tips: '头像',
        category: '数据展示'
      },
      {
        name: 'Badge',
        url: 'https://arco.design/react/components/badge',
        tips: '徽标',
        category: '数据展示'
      },
      {
        name: 'Calendar',
        url: 'https://arco.design/react/components/calendar',
        tips: '日历',
        category: '数据展示'
      },
      {
        name: 'Card',
        url: 'https://arco.design/react/components/card',
        tips: '卡片',
        category: '数据展示'
      },
      {
        name: 'Collapse',
        url: 'https://arco.design/react/components/collapse',
        tips: '折叠面板',
        category: '数据展示'
      },
      {
        name: 'Comment',
        url: 'https://arco.design/react/components/comment',
        tips: '评论',
        category: '数据展示'
      },
      {
        name: 'Descriptions',
        url: 'https://arco.design/react/components/descriptions',
        tips: '描述列表',
        category: '数据展示'
      },
      {
        name: 'Empty',
        url: 'https://arco.design/react/components/empty',
        tips: '空状态',
        category: '数据展示'
      },
      {
        name: 'List',
        url: 'https://arco.design/react/components/list',
        tips: '列表',
        category: '数据展示'
      },
      {
        name: 'Statistic',
        url: 'https://arco.design/react/components/statistic',
        tips: '数值显示',
        category: '数据展示'
      },
      {
        name: 'Tabs',
        url: 'https://arco.design/react/components/tabs',
        tips: '标签页',
        category: '数据展示'
      },
      {
        name: 'Table',
        url: 'https://arco.design/react/components/table',
        tips: '表格',
        category: '数据展示'
      },
      {
        name: 'Tag',
        url: 'https://arco.design/react/components/tag',
        tips: '标签',
        category: '数据展示'
      },
      {
        name: 'Timeline',
        url: 'https://arco.design/react/components/timeline',
        tips: '时间轴',
        category: '数据展示'
      },
      {
        name: 'Tooltip',
        url: 'https://arco.design/react/components/tooltip',
        tips: '文字气泡',
        category: '数据展示'
      },
      {
        name: 'Popover',
        url: 'https://arco.design/react/components/popover',
        tips: '气泡卡片',
        category: '数据展示'
      },
      {
        name: 'Carousel',
        url: 'https://arco.design/react/components/carousel',
        tips: '图片轮播',
        category: '数据展示'
      },
      {
        name: 'Tree',
        url: 'https://arco.design/react/components/tree',
        tips: '树',
        category: '数据展示'
      },
      {
        name: 'Image',
        url: 'https://arco.design/react/components/image',
        tips: '图片',
        category: '数据展示'
      },
      {
        name: 'DatePicker',
        url: 'https://arco.design/react/components/date-picker',
        tips: '日期选择器',
        category: '数据输入'
      },
      {
        name: 'TimePicker',
        url: 'https://arco.design/react/components/time-picker',
        tips: '时间选择器',
        category: '数据输入'
      },
      {
        name: 'Input',
        url: 'https://arco.design/react/components/input',
        tips: '输入框',
        category: '数据输入'
      },
      {
        name: 'InputNumber',
        url: 'https://arco.design/react/components/input-number',
        tips: '数字输入框',
        category: '数据输入'
      },
      {
        name: 'AutoComplete',
        url: 'https://arco.design/react/components/auto-complete',
        tips: '自动补全',
        category: '数据输入'
      },
      {
        name: 'Checkbox',
        url: 'https://arco.design/react/components/checkbox',
        tips: '复选框',
        category: '数据输入'
      },
      {
        name: 'Radio',
        url: 'https://arco.design/react/components/radio',
        tips: '单选框',
        category: '数据输入'
      },
      {
        name: 'Rate',
        url: 'https://arco.design/react/components/rate',
        tips: '评分',
        category: '数据输入'
      },
      {
        name: 'Switch',
        url: 'https://arco.design/react/components/switch',
        tips: '开关',
        category: '数据输入'
      },
      {
        name: 'Select',
        url: 'https://arco.design/react/components/select',
        tips: '选择器',
        category: '数据输入'
      },
      {
        name: 'TreeSelect',
        url: 'https://arco.design/react/components/tree-select',
        tips: '树选择',
        category: '数据输入'
      },
      {
        name: 'Cascader',
        url: 'https://arco.design/react/components/cascader',
        tips: '级联选择',
        category: '数据输入'
      },
      {
        name: 'Slider',
        url: 'https://arco.design/react/components/slider',
        tips: '滑动输入条',
        category: '数据输入'
      },
      {
        name: 'Form',
        url: 'https://arco.design/react/components/form',
        tips: '表单',
        category: '数据输入'
      },
      {
        name: 'Upload',
        url: 'https://arco.design/react/components/upload',
        tips: '上传',
        category: '数据输入'
      },
      {
        name: 'Transfer',
        url: 'https://arco.design/react/components/transfer',
        tips: '数据穿梭框',
        category: '数据输入'
      },
      {
        name: 'Mentions',
        url: 'https://arco.design/react/components/mentions',
        tips: '提及',
        category: '数据输入'
      },
      {
        name: 'Alert',
        url: 'https://arco.design/react/components/alert',
        tips: '警告提示',
        category: '反馈'
      },
      {
        name: 'Drawer',
        url: 'https://arco.design/react/components/drawer',
        tips: '抽屉',
        category: '反馈'
      },
      {
        name: 'Message',
        url: 'https://arco.design/react/components/message',
        tips: '全局提示',
        category: '反馈'
      },
      {
        name: 'Notification',
        url: 'https://arco.design/react/components/notification',
        tips: '通知提醒框',
        category: '反馈'
      },
      {
        name: 'Popconfirm',
        url: 'https://arco.design/react/components/popconfirm',
        tips: '气泡确认框',
        category: '反馈'
      },
      {
        name: 'Progress',
        url: 'https://arco.design/react/components/progress',
        tips: '进度条',
        category: '反馈'
      },
      {
        name: 'Result',
        url: 'https://arco.design/react/components/result',
        tips: '结果页',
        category: '反馈'
      },
      {
        name: 'Spin',
        url: 'https://arco.design/react/components/spin',
        tips: '加载中',
        category: '反馈'
      },
      {
        name: 'Modal',
        url: 'https://arco.design/react/components/modal',
        tips: '对话框',
        category: '反馈'
      },
      {
        name: 'Skeleton',
        url: 'https://arco.design/react/components/skeleton',
        tips: '骨架屏',
        category: '反馈'
      },
      {
        name: 'Breadcrumb',
        url: 'https://arco.design/react/components/breadcrumb',
        tips: '面包屑',
        category: '导航'
      },
      {
        name: 'Dropdown',
        url: 'https://arco.design/react/components/dropdown',
        tips: '下拉菜单',
        category: '导航'
      },
      {
        name: 'Menu',
        url: 'https://arco.design/react/components/menu',
        tips: '菜单',
        category: '导航'
      },
      {
        name: 'PageHeader',
        url: 'https://arco.design/react/components/page-header',
        tips: '页头',
        category: '导航'
      },
      {
        name: 'Pagination',
        url: 'https://arco.design/react/components/pagination',
        tips: '分页',
        category: '导航'
      },
      {
        name: 'Steps',
        url: 'https://arco.design/react/components/steps',
        tips: '步骤条',
        category: '导航'
      },
      {
        name: 'ConfigProvider',
        url: 'https://arco.design/react/components/config-provider',
        tips: '全局配置',
        category: '其他'
      },
      {
        name: 'Affix',
        url: 'https://arco.design/react/components/affix',
        tips: '固钉',
        category: '其他'
      },
      {
        name: 'Anchor',
        url: 'https://arco.design/react/components/anchor',
        tips: '锚点',
        category: '其他'
      },
      {
        name: 'BackTop',
        url: 'https://arco.design/react/components/back-top',
        tips: '返回顶部',
        category: '其他'
      },
      {
        name: 'Trigger',
        url: 'https://arco.design/react/components/trigger',
        tips: '触发器',
        category: '其他'
      },
      {
        name: 'ResizeBox',
        url: 'https://arco.design/react/components/resize-box',
        tips: '伸缩框',
        category: '其他'
      },
    ],
    filterMatchings: [
      { id: 'FStyled' },
      { id: 'FComponents' },
      { id: 'FImported' },
      { id: 'FFree' },
      { id: 'FThemeGenerator' },
      { id: 'FDarkMode' },
      { id: 'FSemanticColors' },
      { id: 'FFigma' },
      { id: 'FRTLSupport' },
      { id: 'FFullyTyped' },
      { id: 'FFormHelpers' },
      { id: 'FChineseDoc' },
    ],
    version: '2.60.0',
    starsCount: 0,
    downloadsCount: 0,
  },
  {
    name: 'Tailwind CSS',
    logo: '/logo/tailwind.svg',
    url: 'https://tailwindui.com/components',
    repoOwner: '',
    repoName: '',
    packageName: '',
    componentMatchings: [
      {
        name: 'Popover',
        url: 'https://tailwindui.com/components',
        tips: '气泡卡片',
        category: 'Overlays',
      },
      {
        name: 'Select',
        url: 'https://tailwindui.com/components',
        tips: '选择器',
        category: 'Inputs',
      },
      {
        name: 'Input',
        url: 'https://tailwindui.com/components',
        tips: '输入框',
        category: 'Inputs',
      },
      {
        name: 'Textarea',
        url: 'https://tailwindui.com/components',
        tips: '文本域',
        category: 'Inputs',
      },
      {
        name: 'Radio',
        url: 'https://tailwindui.com/components',
        tips: '单选框',
        category: 'Inputs',
      },
      {
        name: 'Checkbox',
        url: 'https://tailwindui.com/components',
        tips: '复选框',
        category: 'Inputs',
      },
      {
        name: 'Toggle',
        url: 'https://tailwindui.com/components',
        tips: '开关',
        category: 'Inputs',
      },
      {
        name: 'Modal',
        url: 'https://tailwindui.com/components',
        tips: '模态框',
        category: 'Overlays',
      },
      {
        name: 'Alert',
        url: 'https://tailwindui.com/components',
        tips: '警告框',
        category: 'Elements',
      },
      {
        name: 'Pagination',
        url: 'https://tailwindui.com/components',
        tips: '分页',
        category: 'Navigation',
      },
      {
        name: 'Tabs',
        url: 'https://tailwindui.com/components',
        tips: '标签页',
        category: 'Navigation',
      },
      {
        name: 'Vertical Navigation',
        url: 'https://tailwindui.com/components',
        tips: '垂直导航',
        category: 'Navigation',
      },
      {
        name: 'Slideover',
        url: 'https://tailwindui.com/components',
        tips: '滑动面板',
        category: 'Overlays',
      },
      {
        name: 'Breadcrumb',
        url: 'https://tailwindui.com/components',
        tips: '面包屑',
        category: 'Elements',
      },
      {
        name: 'Steps',
        url: 'https://tailwindui.com/components',
        tips: '步骤条',
        category: 'Navigation',
      },
      {
        name: 'Command Palette',
        url: 'https://tailwindui.com/components',
        tips: '命令面板',
        category: 'Navigation',
      },
      {
        name: 'Toast',
        url: 'https://tailwindui.com/components',
        tips: '提示框',
        category: 'Overlays',
      },
      {
        name: 'Avatar',
        url: 'https://tailwindui.com/components',
        tips: '头像',
        category: 'Elements',
      },
      {
        name: 'Badge',
        url: 'https://tailwindui.com/components',
        tips: '徽标',
        category: 'Elements',
      },
      {
        name: 'Dropdown',
        url: 'https://tailwindui.com/components',
        tips: '下拉菜单',
        category: 'Elements',
      },
      {
        name: 'Button',
        url: 'https://tailwindui.com/components',
        tips: '按钮',
        category: 'Elements',
      },
      {
        name: 'Divider',
        url: 'https://tailwindui.com/components',
        tips: '分割线',
        category: 'Elements',
      },
      {
        name: 'Container',
        url: 'https://tailwindui.com/components',
        tips: '容器',
        category: 'Layout',
      },
      {
        name: 'Card',
        url: 'https://tailwindui.com/components',
        tips: '卡片',
        category: 'Layout',
      },
      {
        name: 'Calendar',
        url: 'https://tailwindui.com/components',
        tips: '日历',
        category: 'Data',
      },
    ],
    filterMatchings: [
      { id: 'FStyled' },
      { id: 'FComponents' },
      { id: 'FPasted' },
      { id: 'FReactAndNext' },
      { id: 'FTailwind' },
      { id: 'FFullyAccessible' },
      { id: 'FOfficial' },
    ],
    version: '3.4',
    starsCount: 0,
    downloadsCount: 0,
  },
  {
    name: 'NextUI',
    logo: '/logo/nextui.png',
    url: 'https://nextui.org/',
    repoOwner: 'nextui-org',
    repoName: 'nextui',
    packageName: '@nextui-org/react',
    componentMatchings: [
      {
        name: 'Avatar',
        url: 'https://nextui.org/docs/components/avatar',
        tips: '头像',
        category: 'Data Display',
      },
      {
        name: 'Accordion',
        url: 'https://nextui.org/docs/components/accordion',
        tips: '手风琴',
        category: 'Data Display',
      },
      {
        name: 'Autocomplete',
        url: ' https://nextui.org/docs/components/autocomplete',
        tips: '自动完成',
        category: 'Data Entry',
      },
      {
        name: 'Badge',
        url: 'https://nextui.org/docs/components/badge',
        tips: '徽标',
        category: 'Data Display',
      },
      {
        name: 'Button',
        url: 'https://nextui.org/docs/components/button',
        tips: '按钮',
        category: 'General',
      },
      {
        name: 'Breadcrumbs',
        url: 'https://nextui.org/docs/components/breadcrumbs',
        tips: '面包屑',
        category: 'Navigation',
      },
      {
        name: 'Card',
        url: 'https://nextui.org/docs/components/card',
        tips: '卡片',
        category: 'General',
      },
      {
        name: 'Checkbox',
        url: 'https://nextui.org/docs/components/checkbox',
        tips: '复选框',
        category: 'Data Entry',
      },
      {
        name: 'Checkbox Group',
        url: 'https://nextui.org/docs/components/checkbox-group',
        tips: '复选框组',
        category: 'Data Entry',
      },
      {
        name: 'Chip',
        url: 'https://nextui.org/docs/components/chip',
        tips: '标签',
        category: 'Data Display',
      },
      {
        name: 'Circular Progress',
        url: 'https://nextui.org/docs/components/circular-progress',
        tips: '圆形进度条',
        category: 'Feedback',
      },
      {
        name: 'Code',
        url: 'https://nextui.org/docs/components/code',
        tips: '代码',
        category: 'Data Display',
      },
      {
        name: 'Divider',
        url: 'https://nextui.org/docs/components/divider',
        tips: '分割线',
        category: 'General',
      },
      {
        name: 'Dropdown',
        url: 'https://nextui.org/docs/components/dropdown',
        tips: '下拉菜单',
        category: 'General',
      },
      {
        name: 'Image',
        url: 'https://nextui.org/docs/components/image',
        tips: '图片',
        category: 'Data Display',
      },
      {
        name: 'Input',
        url: 'https://nextui.org/docs/components/input',
        tips: '输入框',
        category: 'Data Entry',
      },
      {
        name: 'Kbd',
        url: 'https://nextui.org/docs/components/kbd',
        tips: '键盘',
        category: 'Data Display',
      },
      {
        name: 'Listbox',
        url: 'https://nextui.org/docs/components/listbox',
        tips: '列表框',
        category: 'Data Entry',
      },
      {
        name: 'Modal',
        url: 'https://nextui.org/docs/components/modal',
        tips: '模态框',
        category: 'General',
      },
      {
        name: 'Navbar',
        url: 'https://nextui.org/docs/components/navbar',
        tips: '导航栏',
        category: 'Navigation',
      },
      {
        name: 'Pagination',
        url: 'https://nextui.org/docs/components/pagination',
        tips: '分页',
        category: 'Navigation',
      },
      {
        name: 'Popover',
        url: 'https://nextui.org/docs/components/popover',
        tips: '气泡卡片',
        category: 'General',
      },
      {
        name: 'Progress',
        url: 'https://nextui.org/docs/components/progress',
        tips: '进度条',
        category: 'Feedback',
      },
      {
        name: 'Radio Group',
        url: 'https://nextui.org/docs/components/radio-group',
        tips: '单选框组',
        category: 'Data Entry',
      },
      {
        name: 'Select',
        url: 'https://nextui.org/docs/components/select',
        tips: '选择器',
        category: 'Data Entry',
      },
      {
        name: 'Skeleton',
        url: 'https://nextui.org/docs/components/skeleton',
        tips: '骨架屏',
        category: 'Feedback',
      },
      {
        name: 'Snippet',
        url: 'https://nextui.org/docs/components/snippet',
        tips: '代码片段',
        category: 'Data Display',
      },
      {
        name: 'Scroll Shadow',
        url: 'https://nextui.org/docs/components/scroll-shadow',
        tips: '滚动阴影',
        category: 'Feedback',
      },
      {
        name: 'Spacer',
        url: 'https://nextui.org/docs/components/spacer',
        tips: '间距',
        category: 'General',
      },
      {
        name: 'Spinner',
        url: 'https://nextui.org/docs/components/spinner',
        tips: '加载中',
        category: 'Feedback',
      },
      {
        name: 'Switch',
        url: 'https://nextui.org/docs/components/switch',
        tips: '开关',
        category: 'Data Entry',
      },
      {
        name: 'Slider',
        url: 'https://nextui.org/docs/components/slider',
        tips: '滑动输入条',
        category: 'Data Entry',
      },
      {
        name: 'Table',
        url: 'https://nextui.org/docs/components/table',
        tips: '表格',
        category: 'Data Display',
      },
      {
        name: 'Tabs',
        url: 'https://nextui.org/docs/components/tabs',
        tips: '标签页',
        category: 'Navigation',
      },
      {
        name: 'Textarea',
        url: 'https://nextui.org/docs/components/textarea',
        tips: '文本域',
        category: 'Data Entry',
      },
      {
        name: 'Tooltip',
        url: 'https://nextui.org/docs/components/tooltip',
        tips: '提示框',
        category: 'General',
      },
      {
        name: 'User',
        url: 'https://nextui.org/docs/components/user',
        tips: '用户',
        category: 'Data Display',
      },
    ],
    filterMatchings: [
      { id: 'FStyled' },
      { id: 'FImported' },
      { id: 'FComponents' },
      { id: 'FReactAndNext' },
      { id: 'FFree' },
      { id: 'FDarkMode' },
      { id: 'FSemanticColors' },
      { id: 'FFigma' },
      { id: 'FOfficial' },
      { id: 'FFullyTyped' },
    ],
    version: '2.2.9',
    starsCount: 0,
    downloadsCount: 0,
  },
  {
    name: 'Daisy UI',
    logo: '/logo/daisyui.png',
    url: 'https://daisyui.com',
    repoOwner: 'saadeghi',
    repoName: 'daisyui',
    packageName: 'daisyui',
    componentMatchings: [
      {
        name: 'Button',
        url: 'https://daisyui.com/components/button/',
        tips: '按钮可以让用户执行命令或者作出选择。',
        category: '动作',
      },
      {
        name: 'Dropdown',
        url: 'https://daisyui.com/components/dropdown/',
        tips: '下拉菜单可以在点击按钮时打开菜单或其他元素。',
        category: '动作',
      },
      {
        name: 'Modal',
        url: 'https://daisyui.com/components/modal/',
        tips: '对话框用于点击按钮时显示对话框或一个盒子模型。',
        category: '动作',
      },
      {
        name: 'Swap',
        url: 'https://daisyui.com/components/swap/',
        tips: '使用 Swap，你可以使用复选框或类名来切换两个元素的显示。',
        category: '动作',
      },
      {
        name: '主题控制器',
        url: 'https://daisyui.com/components/theme-controller/',
        tips: '如果页面中存在带有 theme-controller 类的选中复选框输入或选中的单选框输入，则页面将具有与该输入值相同的主题。',
        category: '动作',
      },
      {
        'name': 'Accordion',
        'url': 'https://daisyui.com/components/accordion/',
        'tips': 'Accordion 用于显示和隐藏内容，但一次只能打开一项。',
        'category': '数据展示'
      },
      {
        'name': 'Avatar',
        'url': 'https://daisyui.com/components/avatar/',
        'tips': 'Avatars 用于在界面中显示个人或企业的缩略图表示。',
        'category': '数据展示'
      },
      {
        'name': 'Badge',
        'url': 'https://daisyui.com/components/badge/',
        'tips': 'Badges 用于通知用户特定数据的状态。',
        'category': '数据展示'
      },
      {
        'name': 'Card',
        'url': 'https://daisyui.com/components/card/',
        'tips': 'Cards 用于以易于阅读的方式分组和显示内容。',
        'category': '数据展示'
      },
      {
        'name': 'Carousel',
        'url': 'https://daisyui.com/components/carousel/',
        'tips': 'Carousel show images or content in a scrollable area.',
        'category': '数据展示'
      },
      {
        name: 'Chat bubble',
        url: 'https://daisyui.com/components/chat/',
        tips: '聊天气泡用于显示一行对话及其所有数据，包括作者图像、作者名称、时间等。',
        category: '数据展示'
      },
      {
        'name': 'Collapse',
        'url': 'https://daisyui.com/components/collapse/',
        'tips': 'Collapse 用于显示和隐藏内容。',
        'category': '数据展示'
      },
      {
        'name': 'Countdown',
        'url': 'https://daisyui.com/components/countdown/',
        'tips': 'Countdown 提供了一个变化数字的过渡效果。',
        'category': '数据展示'
      },
      {
        'name': 'Diff',
        'url': 'https://daisyui.com/components/diff/',
        'tips': 'Diff component shows a side-by-side comparison of two items.',
        'category': '数据展示'
      },
      {
        'name': 'Kbd',
        'url': 'https://daisyui.com/components/kbd/',
        'tips': 'Kbd 用于显示键盘快捷键。',
        'category': '数据展示'
      },
      {
        'name': 'Stat',
        'url': 'https://daisyui.com/components/stat/',
        'tips': 'Stat 用于在盒子中显示数字和数据。',
        'category': '数据展示'
      },
      {
        'name': 'Table',
        'url': 'https://daisyui.com/components/table/',
        'tips': 'Table 用于以表格格式显示数据列表。',
        'category': '数据展示'
      },
      {
        'name': 'Timeline',
        'url': 'https://daisyui.com/components/timeline/',
        'tips': 'Timeline 组件按时间顺序显示事件列表。',
        'category': '数据展示'
      },
      {
        'name': 'Breadcrumbs',
        'url': 'https://daisyui.com/components/breadcrumbs/',
        'tips': '面包屑导航可以帮助用户导航网站。',
        'category': '导航栏'
      },
      {
        'name': 'Bottom navigation',
        'url': 'https://daisyui.com/components/bottom-navigation/',
        'tips': '底部导航栏允许在主屏幕之间导航。',
        'category': '导航栏'
      },
      {
        'name': 'Link',
        'url': 'https://daisyui.com/components/link/',
        'tips': '链接将缺失的下划线样式添加到链接中。',
        'category': '导航栏'
      },
      {
        'name': 'Menu',
        'url': 'https://daisyui.com/components/menu/',
        'tips': '菜单用于垂直或水平显示链接列表。',
        'category': '导航栏'
      },
      {
        'name': 'Navbar',
        'url': 'https://daisyui.com/components/navbar/',
        'tips': '导航栏用于在页面顶部显示导航栏。',
        'category': '导航栏'
      },
      {
        'name': 'Pagination',
        'url': 'https://daisyui.com/components/pagination/',
        'tips': '分页是一组按钮，允许用户在一系列相关内容之间移动。',
        'category': '导航栏'
      },
      {
        'name': 'Steps',
        'url': 'https://daisyui.com/components/steps/',
        'tips': '你可以使用步骤条来显示流程步骤的列表。',
        'category': '导航栏'
      },
      {
        name: 'Tabs',
        url: 'https://daisyui.com/components/tabs/',
        tips: '你可以使用选项卡，以选项卡的形式显示链接列表。',
        category: '导航栏'
      },
      {
        name: 'Toast',
        url: 'https://daisyui.com/components/toast/',
        tips: 'Toast 用于在页面的角落显示消息。',
        category: '反馈'
      },
      {
        name: 'Tooltip',
        url: 'https://daisyui.com/components/tooltip/',
        tips: 'Tooltip 用于在鼠标悬停时显示消息。',
        category: '反馈'
      },
      {
        name: 'Alert',
        url: 'https://daisyui.com/components/alert/',
        tips: 'Alert 用于显示重要的事件消息。',
        category: '反馈'
      },
      {
        name: 'Loading',
        url: 'https://daisyui.com/components/loading/',
        tips: 'Loading 用于显示加载动画。',
        category: '反馈'
      },
      {
        name: 'Progress',
        url: 'https://daisyui.com/components/progress/',
        tips: 'Progress 用于显示任务的进展情况。',
        category: '反馈'
      },
      {
        name: 'Radial progress',
        url: 'https://daisyui.com/components/radial-progress/',
        tips: 'Radial progress 用于显示任务的进度。',
        category: '反馈'
      },
      {
        name: 'Skeleton',
        url: 'https://daisyui.com/components/skeleton/',
        tips: 'Skeleton 用于显示组件加载状态。',
        category: '反馈'
      },
      {
        name: 'Checkbox',
        url: 'https://daisyui.com/components/checkbox/',
        tips: '复选框用于选择或取消选择值。',
        category: '数据输入',
      },
      {
        name: 'File Input',
        url: 'https://daisyui.com/components/file-input/',
        tips: '文件输入框是一个用于上传文件的输入框。',
        category: '数据输入',
      },
      {
        name: 'Radio',
        url: 'https://daisyui.com/components/radio/',
        tips: '使用单选框，用户可以从多个选项中选择一个选项。',
        category: '数据输入',
      },
      {
        name: 'Range',
        url: 'https://daisyui.com/components/range/',
        tips: '范围滑块用于滑动选择值。',
        category: '数据输入',
      },
      {
        name: 'Rating',
        url: 'https://daisyui.com/components/rating/',
        tips: '评价是一组单选按钮，用户可以对某件事进行评价。',
        category: '数据输入',
      },
      {
        name: 'Select',
        url: 'https://daisyui.com/components/select/',
        tips: '选择器用于从选项列表中选择值。',
        category: '数据输入',
      },
      {
        name: 'Text input',
        url: 'https://daisyui.com/components/input/',
        tips: '文字输入框是简单的输入框。',
        category: '数据输入',
      },
      {
        name: 'Textarea',
        url: 'https://daisyui.com/components/textarea/',
        tips: '多行文本框允许用户在多行中输入文本。',
        category: '数据输入',
      },
      {
        name: 'Toggle',
        url: 'https://daisyui.com/components/toggle/',
        tips: '开关是为了看起来像开关按钮的样式的复选框。',
        category: '数据输入',
      },
    {
        name: 'Artboard',
        url: 'https://daisyui.com/components/artboard/',
        tips: 'Artboard 提供了固定尺寸的容器，用于在手机尺寸里显示演示内容。',
        category: '布局',
      },
      {
        name: 'Divider',
        url: 'https://daisyui.com/components/divider/',
        tips: '分隔线用于垂直或水平分隔内容。',
        category: '布局',
      },
      {
        name: 'Drawer',
        url: 'https://daisyui.com/components/drawer/',
        tips: '抽屉是一种可以显示/隐藏页面左侧或右侧的侧边栏的网格布局。',
        category: '布局',
      },
      {
        name: 'Footer',
        url: 'https://daisyui.com/components/footer/',
        tips: 'Footer 页脚可以包括标志、版权声明和链接到其他网页。',
        category: '布局',
      },
      {
        name: 'Hero',
        url: 'https://daisyui.com/components/hero/',
        tips: 'Hero 是显示带有标题和描述的大方框或图像的组件。',
        category: '布局',
      },
      {
        name: 'Indicator',
        url: 'https://daisyui.com/components/indicator/',
        tips: '标志用来将元素放置在另一个元素的角落。',
        category: '布局',
      },
      {
        name: 'Join',
        url: 'https://daisyui.com/components/join/',
        tips: 'Join 是用于对多个项目进行分组的容器，它可用于对按钮、输入或任何其他元素进行分组。Join 将边框半径应用于第一个和最后一个项目。Join 可用于创建一个水平或垂直的项目列表。',
        category: '布局',
      },
      {
        name: 'Mask',
        url: 'https://daisyui.com/components/mask/',
        tips: 'Mask 将元素的内容修剪成常见的形状。',
        category: '布局',
      },
      {
        name: 'Stack',
        url: 'https://daisyui.com/components/stack/',
        tips: '堆叠使元素在视觉上有重叠的效果。',
        category: '布局',
      },
      {
        name: 'Browser',
        url: 'https://daisyui.com/components/mockup-browser',
        tips: '浏览器模型展示了一个看起来像浏览器窗口的框。',
        category: '模型',
      },
      {
        name: 'Code',
        url: 'https://daisyui.com/components/mockup-code',
        tips: '代码模型用于在看起来像代码编辑器的方框中显示代码块。',
        category: '模型',
      },
      {
        name: 'Phone',
        url: 'https://daisyui.com/components/mockup-phone',
        tips: '手机模型显示了一个像 iPhone 的模型。',
        category: '模型',
      },
      {
        name: 'Window',
        url: 'https://daisyui.com/components/mockup-window',
        tips: '视窗模型展示了一个看起来像操作系统窗口的框。',
        category: '模型',
      },
    ],
    filterMatchings: [
      { id: 'FStyled' },
      { id: 'FImported' },
      { id: 'FCSSOnly' },
      { id: 'FReactAndNext' },
      { id: 'FTailwind' },
      { id: 'FFree' },
      { id: 'FBuiltInThemes' },
      { id: 'FThemeGenerator' },
      { id: 'FDarkMode' },
      { id: 'FSemanticColors' },
      { id: 'FRTLSupport' },
      { id: 'FChineseDoc' },
    ],
    version: '4.7.2',
    starsCount: 0,
    downloadsCount: 0,
  },
];

export default libraries;