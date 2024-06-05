import { useNavigate } from 'react-router-dom';

import Layout from '../layout';
import CatCard2 from '../components/CatCard2';
import { cats } from './data';

export default function Explore() {
    const go = useNavigate();

    const handleDetail = (id) => {
        go(`/explore/${id}`);
    };

    return (
        <Layout>
            <div className="p-2 text-yellow-200 pb-[100px]">
                <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-fs-lg">Explore</span>
                </div>
                <div className="flex flex-col gap-3">
                    {cats.map((i, idx) => (
                        <CatCard2 key={+idx} {...i} onClick={() => handleDetail(i.id)} />
                    ))}
                </div>
            </div>
        </Layout>
    )
}