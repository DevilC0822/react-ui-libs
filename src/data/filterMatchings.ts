const filterMatchings = [
  {
    id: 'FStyled',
    tips: '样式组件自带特有样式。通常可以通过重写这些样式来对组件进行自定义。',
    icon: 'icon-paletteseban',
    name: 'Styled',
    category: 'main',
    repel: 'FUnStyled',
  },
  {
    id: 'FUnStyled',
    tips: '未经样式化的组件没有样式，需要你为其编写样式。',
    icon: 'icon-palette-off',
    name: 'UnStyled',
    category: 'main',
    repel: 'FStyled',
  },
  {
    id: 'FImported',
    tips: '你的项目依赖于一个外部库，这个库提供了你需要的组件。虽然你可以通过库的更新获得新功能或改进，但因为这些组件不是你自己编写的，所以你不能直接对它们进行自定义更改。',
    icon: 'icon-daoru',
    name: 'Imported',
    category: 'main',
    repel: 'FPasted',
  },
  {
    id: 'FPasted',
    tips: '你的项目不需要依赖任何外部的库，但需要把组件的代码复制粘贴到你自己的项目中。在贴入代码之后，你就可以对这些代码自由的进行修改和自定义了。但这种方式的一个缺点是，你不能自动从库的更新中获得改进或新功能。',
    icon: 'icon-niantie1',
    name: 'Pasted',
    category: 'main',
    repel: 'FImported',
  },
  {
    id: 'FComponents',
    tips: '提供的React组件既能处理内部的业务逻辑，又能处理样式（当然，如果这些组件没有样式，那么它们就只处理逻辑）。但要注意，这些组件是和React框架紧密结合的，不能在React框架以外使用。',
    icon: 'icon-icon_components',
    name: 'Components',
    category: 'main',
    repel: 'FCSSOnly',
  },
  {
    id: 'FCSSOnly',
    tips: '这个库只提供了一些CSS类，你可以将这些类注入你自己的React组件中。虽然你不能从这个库获得任何业务逻辑，但你可以将这个库与任何框架一起使用，而不仅仅限于React框架。',
    icon: 'icon-css1',
    name: 'CSS only',
    category: 'main',
    repel: 'FComponents',
  },
  {
    id: 'FReactAndNext',
    tips: '这个库是专为React框架设计的，但同时也能与Next.js兼容使用。',
    icon: 'icon-reactjs-fill',
    name: 'React/Next',
    category: 'main',
    repel: 'FNextOnly',
  },
  {
    id: 'FNextOnly',
    tips: '这个库是专为Next.js设计的，无法和React兼容使用。',
    icon: 'icon-nextjs',
    name: 'Next only',
    category: 'main',
    repel: 'FReactAndNext',
  },
  {
    id: 'FTailwind',
    tips: '这个库本身就使用了Tailwind CSS，并且允许你利用它来个性化你的组件。作为一个Tailwind CSS的用户，这意味着你可以使用一个统一的工具来完成所有的样式设计。',
    icon: 'icon-tailwindcss-logo',
    name: 'Tailwind CSS',
    category: 'main',
    wFull: true,
  },
  {
    id: 'FFree',
    tips: 'Ul库里的所有组件都是完全免费可用的。',
    icon: 'icon-Free-Tag',
    name: 'Free',
    category: 'main',
    wFull: true,
  },
  {
    id: 'FFullyAccessible',
    tips: '这个库的所有组件都是完全无障碍支持的。',
    icon: 'icon-wuzhangai',
    name: 'Fully Accessible',
    category: 'secondary',
  },
  {
    id: 'FBuiltInThemes',
    tips: '提供了准备好的各种主题供使用。',
    icon: 'icon-zhuti',
    name: 'Built-in Themes',
    category: 'secondary',
  },
  {
    id: 'FThemeGenerator',
    tips: '提供了一个工具，帮助开发人员轻松生成新的主题。',
    icon: 'icon-wand',
    name: 'Theme Generator',
    category: 'secondary',
  },
  {
    id: 'FDarkMode',
    tips: '组件的设计是为了同时支持亮色主题和深色主题。',
    icon: 'icon-a-zu4',
    name: 'Dark Mode',
    category: 'secondary',
  },
  {
    id: 'FSemanticColors',
    tips: '颜色可以与特定的含义相对应，例如 \'primary（主要）\'，\'secondary（次要）\'等。',
    icon: 'icon-sanyuan1',
    name: 'Semantic Colors',
    category: 'secondary',
  },
  {
    id: 'FFigma',
    tips: 'Figma是顶级的设计工具。Figma文件含有和UI库一样的组件，这使得设计师无需编程技术也能创建设计。',
    icon: 'icon-figma',
    name: 'Figma files',
    category: 'secondary',
  },
  {
    id: 'FOfficial',
    tips: '这是由一个负责管理该框架的团队制作的。',
    icon: 'icon-a-Officialproprietary-outlined',
    name: 'Official',
    category: 'secondary',
  },
  {
    id: 'FPublicRoadmap',
    tips: '我们有公开的路线图，可以帮助您了解下一阶段组件库的特性。',
    icon: 'icon-roadmap',
    name: 'Public Roadmap',
    category: 'secondary',
  },
  {
    id: 'FRTLSupport',
    tips: '有能力展示从右至左书写的文字（如阿拉伯语、希伯来语等）。',
    icon: 'icon-rtl',
    name: 'RTL support',
    category: 'secondary',
  },
  {
    id: 'FFullyTyped',
    tips: '我们提供的所有组件都进行了类型声明，可以帮助开发者实现代码自动补全和避免潜在错误。',
    icon: 'icon-typescript',
    name: 'Fully Typed',
    category: 'secondary',
  },
  {
    id: 'FFormHelpers',
    tips: '为与表单管理库（如Vee-Validate、Zod、Yup等）集成配备了工具和示例。',
    icon: 'icon-form_light',
    name: 'Form Helpers',
    category: 'secondary',
  },
  {
    id: 'FChineseDoc',
    tips: '提供了中文文档。',
    icon: 'icon-Chinese',
    name: 'Chinese Doc',
    category: 'secondary',
  },
];

export default filterMatchings;