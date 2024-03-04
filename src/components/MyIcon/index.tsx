'use client';

import { createFromIconfontCN } from '@ant-design/icons';

interface IProps {
  [key: string]: unknown;
  type: string;
  size?: number;
}

const IconComponent = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_4441233_xo3w0rpd82.js', // 在 iconfont.cn 上生成
});


const MyIcon: React.FC<IProps> = (props) => {
  const { type, size = 12, ...otherProps } = props;
  return (
    <div {...otherProps}>
      <IconComponent style={{fontSize: size }} type={type}></IconComponent>
    </div>
  );
};

export default MyIcon;