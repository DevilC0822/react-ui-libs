'use client';

import React, { useEffect, useState } from 'react';
import { Button, Collapse, Slider, Tooltip } from 'antd';
import filterMatchings from '@/data/filterMatchings';
import MyIcon from '@/components/MyIcon';

interface IProps {
  id?: string;
  onFilterChange: (filterMatching: { id: string; count?: number }[]) => void;
}

const AllFilter: React.FC<IProps> = (props) => {
  const mainMatchings = filterMatchings.filter((item) => item.category === 'main');
  const secondaryMatchings = filterMatchings.filter((item) => item.category === 'secondary');

  const [fComponentsCount, setFComponentsCount] = useState(0);
  const [fPopularityStar, setFPopularityStar] = useState(0);
  const [fPopularityDownload, setFPopularityDownload] = useState(0);

  const [fMatchings, setFMatchings] = useState<{
    id: string,
    count?: number
  }[]>([]);

  const onFilterChange = (filterMatching: { id: string; repel?: string }) => {
    const index = fMatchings.findIndex((item) => item.id === filterMatching.id);
    if (index !== -1) {
      const newFMatchings = [...fMatchings];
      newFMatchings.splice(index, 1);
      setFMatchings(newFMatchings);
    } else {
      const repelIndex = fMatchings.findIndex((item) => item.id === filterMatching?.repel);
      if (repelIndex !== -1) {
        const newFMatchings = [...fMatchings];
        newFMatchings.splice(repelIndex, 1);
        setFMatchings([...newFMatchings, filterMatching]);
      } else {
        setFMatchings([...fMatchings, filterMatching]);
      }
    }
  };
  const onSliderChange = (key: string, value: number) => {
    if (fMatchings.find((i) => i.id === key)) {
      const newFMatchings = fMatchings.map((item) => {
        if (item.id === key) {
          return { id: key, count: value };
        }
        return item;
      });
      setFMatchings(newFMatchings);
    } else {
      setFMatchings([...fMatchings, { id: key, count: value }]);
    }
  };

  const onReset = () => {
    setFMatchings([]);
    setFComponentsCount(0);
    setFPopularityStar(0);
    setFPopularityDownload(0);
  };
  const fMatchings0 = fMatchings.filter((item) => item?.count !== 0);
  useEffect(() => {
    props.onFilterChange(fMatchings0);
  }, [fMatchings]);

  return (
    <div className="relative inline-flex flex-col w-full">
      <Collapse
        bordered={false}
        expandIconPosition="end"
        style={{ background: 'transparent' }}
        defaultActiveKey={['1', '2', '3', '4']}
        items={[
          {
            key: '1',
            style: { border: 'none' },
            label: <span className='text-lg font-bold'>主要特性</span>,
            children: <div className="flex gap-2 flex-wrap">
              {mainMatchings.map((filterMatching) => (
                <Tooltip key={filterMatching.id} title={filterMatching.tips}><div className={`relative inline-flex text-primary-500 cursor-pointer px-2 py-1 rounded-md ${fMatchings.find((i) => i.id === filterMatching.id) ? 'bg-primary-500 hover:bg-primary-600 text-white' : 'hover:bg-slate-100'} ${filterMatching?.wFull ? 'w-full' : 'w-28'}`} onClick={() => { onFilterChange(filterMatching); }}>
                  <div className={'flex items-center gap-1 text-xs'}>
                    <MyIcon type={filterMatching.icon} />
                    <span className="text-xs text-nowrap">{filterMatching.name}</span>
                  </div>
                </div>
                </Tooltip>
              ))}
            </div>
          },
          {
            key: '2',
            style: { border: 'none' },
            label: <span className='text-lg font-bold'>次要特性</span>,
            children: <div className="flex gap-2 flex-wrap h-[376px] transition duration-200 ease-out">
              {secondaryMatchings.map((filterMatching) => (
                <Tooltip key={filterMatching.id} title={filterMatching.tips}><div className={`relative inline-flex text-primary-500 cursor-pointer w-full px-2 py-1 rounded-md ${fMatchings.find((i) => i.id === filterMatching.id) ? 'bg-primary-500 hover:bg-primary-600 text-white' : 'hover:bg-slate-100'}`} onClick={() => { onFilterChange(filterMatching); }}>
                  <div className="flex items-center gap-1 text-xs">
                    <MyIcon type={filterMatching.icon} />
                    <span className="text-xs text-nowrap">{filterMatching.name}</span>
                  </div>
                </div>
                </Tooltip>
              ))}
            </div>
          },
          {
            key: '3',
            style: { border: 'none' },
            label: <span className='text-lg font-bold'>组件数量</span>,
            children: <div className='flex items-center'>
              <div className='mr-2 text-[#007498]'>
                <MyIcon size={22} type="icon-components" />
              </div>
              <div className='w-full text-primary-500'>
                <p>超过{fComponentsCount}个组件</p>
                <Slider value={fComponentsCount} min={0} max={100} tooltip={{ open: false }} onChange={(v) => { setFComponentsCount(v); onSliderChange('componentsCount', v); }} />
              </div>
            </div>
          },
          {
            key: '4',
            style: { border: 'none' },
            label: <span className='text-lg font-bold'>受欢迎程度</span>,
            children: <div className='flex flex-col'>
              <div className='flex items-center'>
                <div className='mr-2 text-[#007498]'>
                  <MyIcon size={22} type="icon-star" />
                </div>
                <div className='w-full text-primary-500'>
                  <p>超过{fPopularityStar}个Github Stars</p>
                  <Slider value={fPopularityStar} min={0} max={35000} step={1000} tooltip={{ open: false }} onChange={(v) => { setFPopularityStar(v); onSliderChange('starsCount', v); }} />
                </div>
              </div>
              <div className='flex items-center'>
                <div className='mr-2 text-[#007498]'>
                  <MyIcon size={22} type="icon-download" />
                </div>
                <div className='w-full text-primary-500'>
                  <p>超过{fPopularityDownload}k周npm下载数量</p>
                  <Slider value={fPopularityDownload} min={0} max={500} tooltip={{ open: false }} onChange={(v) => { setFPopularityDownload(v); onSliderChange('downloadsCount', v); }} />
                </div>
              </div>
            </div>
          }
        ]}
      />
      {
        fMatchings0.length > 0 && <Button className='text-primary-500' onClick={onReset}>清除{fMatchings0.length}个过滤条件</Button>
      }
    </div >
  );
};

export default AllFilter;