import maleIcon from '../assets/male.svg';
import femaleIcon from '../assets/female.svg';

import defaultImg from '../images/cat1.png';
import liveIcon from '../assets/live.svg';

// sex: 1 male / 2 female
export default function CatCard({ name, sex, age, distance, img, onClick }) {
    const handleClick = (...rest) => {
        onClick && onClick(...rest);
    };

    return (
        <div className="bg-yellow-100 rounded-[8px] overflow-hidden" onClick={handleClick}>
            <div className="cat-live aspect-[168/112] object-cover">
                <img className="absolute w-10 left-2 top-2" src={liveIcon} />
                <img className="w-full object-cover" src={img || defaultImg} />
            </div>
            <div className="flex flex-col p-2 text-yellow-200">
                <div className="flex justify-between items-center">
                    <div className="flex gap-1">
                        <span className="text-fs-sm">{name}</span>
                        <img src={sex === 1 ? maleIcon : femaleIcon} />
                    </div>
                    <div className="text-fs-xs">{age}</div>
                </div>
                <div className="flex justify-between text-fs-xs">
                    <span>Distance</span>
                    <span>{distance}</span>
                </div>
            </div>
        </div>
    )
}
