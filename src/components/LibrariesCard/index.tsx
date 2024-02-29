import { useState } from 'react';
import Image from 'next/image';
import AllFilterMatchings from '../AllFilterMatchings';
import { Button, Drawer, Alert, Tooltip } from 'antd';
import MyIcon from '../MyIcon';

interface IProps {
  name: string;
  logo: string;
  url: string;
  repoOwner: string;
  repoName: string;
  packageName: string;
  componentMatchings: {
    name: string;
    url: string;
    tips: string;
    category: string;
  }[];
  filterMatchings: {
    id: string;
  }[];
  starsCount: number;
  downloadsCount: number;
  version: string;
}

interface ICategoryComponent {
  [key: string]: any
  name: string;
  url: string;
  tips: string;
  category: string;
}

const categoryComponents = (componentMatchings: ICategoryComponent[]) => {
  const categoryComponents = componentMatchings.reduce((acc: {
    [key: string]: ICategoryComponent[]
  }, component) => {
    if (!acc[component.category]) {
      acc[component.category] = [];
    }
    acc[component.category].push(component);
    return acc;
  }, {});
  return categoryComponents;
};

const LibrariesCard: React.FC<IProps> = (props) => {
  const { name, logo, url, repoOwner, repoName, packageName, componentMatchings, filterMatchings, starsCount, downloadsCount, version } = props;
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-lg px-3 py-2 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-700 w-auto min-h-[180px]">
      <div className="h-full flex flex-col justify-between">
        <div className="flex items-start justify-between px-4 py-2 gap-8">
          <div className="shrink-0">
            <div className="relative inline-flex">
              <a href={url} className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-base text-black-500 dark:text-black-400 hover:bg-black-50 disabled:bg-transparent dark:hover:bg-black-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-black-500 dark:focus-visible:ring-black-400 items-center flex flex-col gap-3" target="_blank">
                <div className="min-h-[48px] flex">
                  <Image
                    src={`${logo}`}
                    alt={`${name} Logo`}
                    width={48}
                    height={48}
                    className="m-auto"
                  />
                </div>
                <p className="font-medium tracking-wide">{name}</p>
              </a>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap place-content-end">
            {filterMatchings.map((componentMatching) => (
              <AllFilterMatchings key={componentMatching.id} id={componentMatching.id} />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex ml-1">
            <div className={`relative inline-flex ${starsCount === 0 ? 'hidden' : ''}`}>
              <a href={`https://github.com/${repoOwner}/${repoName}`} target="_blank">
                <Button type="text" icon={<MyIcon size={16} type="icon-star" />}>
                  {(starsCount / 1000).toFixed(1)}k
                </Button>
              </a>
            </div>
            <div className={`relative inline-flex ${downloadsCount === 0 ? 'hidden' : ''}`}>
              <a href={`https://www.npmjs.com/${packageName}`} target="_blank">
                <Button type="text" icon={<MyIcon size={16} type="icon-download" />}>
                  {(downloadsCount / 1000).toFixed(1)}k
                </Button>
              </a>
            </div>
          </div>
          <div className="relative inline-flex">
            <Button icon={<MyIcon size={16} type="icon-components" />} onClick={() => {
              setOpen(true);
            }}>{componentMatchings.length} components</Button>
          </div>
        </div>
      </div>
      <Drawer size="large" title={`${name} UI库组件总览`} onClose={() => setOpen(false)} open={open}>
        <div className='mb-4'>
          <Alert message={<>
            <p>
              请注意：此页面展示的组件列表是通过先进的AI模型(ChatGPT 插件 Web Reader)自动统计生成的，以确保您能够获取到最全面和最新的组件信息。由于组件库持续更新，列表内容也许会滞后，当前版本是 <span className='text-red-500'>{version}</span>
            </p>
          </>} type="info" />
        </div>
        <div className="flex flex-col gap-2">
          {
            Object.keys(categoryComponents(componentMatchings)).map((category) => (
              <div key={category}>
                <h2 className="text-lg font-bold">{category}</h2>
                <div className="flex flex-wrap">
                  {categoryComponents(componentMatchings)[category].map((component) => (
                    <a key={component.name} href={component.url} target="_blank">
                    <Button style={{
                      fontSize: 12,
                      marginTop: 8,
                    }} type="text">
                      <Tooltip title={component.tips}>
                        <span  className='text-primary-500'>{component.name}</span>
                      </Tooltip>
                    </Button>
                  </a>
                  ))}
                </div>
              </div>
            ))
          }
        </div>
      </Drawer>
    </div>
  );
};

export default LibrariesCard;