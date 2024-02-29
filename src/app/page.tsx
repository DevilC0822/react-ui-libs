'use client';

import { useEffect, useState } from 'react';
import AllFilter from '@/components/AllFilter';
import LibrariesCard from '@/components/LibrariesCard';
import libraries from '@/data/libraries';

export default function Home() {
  const [filterMatchings, setFilterMatchings] = useState<{
    id: string;
    count?: number;
  }[]>([]);
  const onFilterChange = (filterMatching: {
    id: string;
    count?: number | undefined;
  }[]) => {
    setFilterMatchings(filterMatching);
  };
  const librariesFiltered = libraries.filter((library) => {
    if (filterMatchings.length === 0) {
      return true;
    }
    return filterMatchings.every((filterMatching) => {
      if (filterMatching.count === undefined) {
        return library.filterMatchings.some((libraryFilterMatching) => libraryFilterMatching.id === filterMatching.id);
      }
      if (filterMatching.id === 'componentsCount') {
        return library.componentMatchings.length >= filterMatching.count;
      }
      return library[filterMatching.id as 'starsCount' | 'downloadsCount'] >= filterMatching.count * (filterMatching.id === 'downloadsCount' ? 1000 : 1);
    });
  });
  const getInitData = () => {
    // 使用Promise.all来并行请求数据
    Promise.all(libraries.map((library) => {
      if (!library.repoOwner || !library.repoName || !library.packageName) {
        return Promise.resolve([{}, {}]);
      }
      return Promise.all([
        fetch(`https://api.github.com/repos/${library.repoOwner}/${library.repoName}`).then((response) => response.json()),
        fetch(`https://api.npmjs.org/downloads/point/last-week/${library.packageName}`).then((response) => response.json())
      ]);
    })).then((data) => {
      data.forEach((item, index) => {
        libraries[index].starsCount = item[0]?.stargazers_count ?? 0;
        libraries[index].downloadsCount = item[1].downloads ?? 0;
      });
      // 重新渲染页面
      setFilterMatchings(filterMatchings);
    });
  };
  useEffect(() => {
    getInitData();
  }, []);
  return (
    <main className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pb-6">
      <div className="text-center mt-6 sm:my-12">
        <p className="text-lg sm:text-xl"> 为你的 <a href="https://react.dev/" rel="noopener noreferrer" target="_blank" className="text-primary-500 font-semibold"> React </a> 或 <a href="https://nextjs.org/" rel="noopener noreferrer" target="_blank" className="text-primary-500 font-semibold">Next.js</a> 项目 </p>
        <p className="text-3xl sm:text-4xl font-semibold tracking-tight"> 选择合适的UI组件库 </p>
      </div>
      <div className="mt-6 sm:mt-8 flex gap-4 flex-grow justify-center">
        <div className="w-72 -mt-2 p-3 hidden md:block shrink-0">
          <AllFilter onFilterChange={onFilterChange} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-grow content-start">
          {
            librariesFiltered.map((library) => (
              <LibrariesCard key={library.name} {...library} />
            ))
          }
        </div>
      </div>
    </main>
  );
}
