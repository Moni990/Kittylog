import { useNavigate } from 'react-router-dom';

import Layout from '../layout';
import CatCard from '../components/CatCard';
import { cats } from './data';
import liveIcon from '../assets/live.svg';
import cat1 from '../images/cat1.png';

const catLive = cat1;

export default function Home() {
  const go = useNavigate();

  const handleViewAll = () => {
    go('/explore');
  };

  return (
    <Layout>
      <div className="p-2 text-yellow-200">
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="font-bold text-fs-lg">Home</span>
          </div>
          <div className="mb-6 rounded-[8px] shadow-md overflow-hidden">
            <a target="_blank" href="https://google.com">
              <div className="cat-live aspect-[168/112] object-cover">
                <img className="absolute w-20 left-2 top-2" src={liveIcon} />
                <img className="bg-black w-full" src={catLive} />
              </div>
            </a>
            <div className="grid grid-cols-2 bg-yellow-100 py-3">
              <div className="flex flex-col items-center justify-center">
                <div className="text-fs-md font-bold">150s ago</div>
                <div className="text-fs-sm">Last visit</div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="text-fs-md font-bold">30g</div>
                <div className="text-fs-sm">Food remain</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="font-bold text-fs-lg">Residents</span>
            <span className="text-fs-sm cursor-pointer" onClick={handleViewAll}>View all</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {cats.map((i, idx) => <CatCard key={+idx} {...i} onClick={() => go(`/explore/${i.id}`)} />)}
          </div>
        </div>
      </div>
    </Layout>
  )
}

