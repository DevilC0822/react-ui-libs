import { Tooltip } from 'antd';
import MyIcon from '../MyIcon';
import filterMatchings from '@/data/filterMatchings';

interface IProps {
  id: string;
}


const AllFilterMatchings: React.FC<IProps> = (props) => {
  const { id } = props;

  const current = filterMatchings.find((item) => item.id === id) || {
    tips: '',
    icon: '',
    name: '',
  };
  return (
    <div className="relative inline-flex w-28">
      <Tooltip title={current.tips}>
        <div className='flex items-center gap-1 text-xs cursor-default'>
          <MyIcon type={current.icon}></MyIcon>
          <span className='text-xs text-nowrap'>{current.name}</span>
        </div>
      </Tooltip>
    </div>
  );
};

export default AllFilterMatchings;