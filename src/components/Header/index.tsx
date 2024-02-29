import Image from 'next/image';
import { Button } from 'antd';
import MyIcon from '../MyIcon';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-t border-transparent backdrop-blur-md shadow-sm shadow-gray-200 dark:shadow-gray-600">
      <div className="flex items-center justify-between px-4 md:px-8 py-2">
        <div className="hidden md:flex gap-2 items-center h-12">
          <h1 className="text-xl font-bold">UI Lib Picker</h1>
        </div>
        <div className="flex items-center justify-end gap-1 md:gap-2">
        <Button type="text">
          <a href="https://promises.top/" target='_blank'>
            <MyIcon type="icon-github-fill" size={20} />
          </a>
        </Button>
        <Button type="primary">
          <a href="https://promises.top/" target='_blank'>
            About Me
          </a>
        </Button>
      </div>
      </div>
    </header>
  );
}
