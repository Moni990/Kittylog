import { useParams } from "react-router-dom"
import { useMemo } from 'react';

import { cats, catInfoMap } from "./data";
// import cat1 from '../images/cat1.png';
import maleIcon from '../assets/male.svg';
import femaleIcon from '../assets/female.svg';
import houseIcon from "../assets/house.svg";
import ArrowIcon from '../icons/Arrow';

export default function ExploreDetail() {
    const params = useParams();

    const catInfo = useMemo(() => {
        return cats[params.id - 1];
    }, [params.id])

    return (
        <div className="max-w-[480px] m-auto flex flex-col text-yellow-200 bg-gray-300/20 h-screen">
            <div className="flex-grow overflow-y-auto">
                <div className="flex p-2 justify-between items-center">
                    <ArrowIcon className="w-8" onClick={() => history.back()} />
                    <span className="font-bold">Cat Profile</span>
                    <span />
                </div>
                <img src={catInfo.img} />
                <div className="flex flex-col py-2 px-4">
                    <div className="flex gap-1 justify-between items-center">
                        <div className="flex items-center">
                            <span className="text-[30px] font-bold">{catInfo.name}</span>
                            <img className="w-3 ml-2" src={catInfo.sex === 1 ? maleIcon : femaleIcon} />
                        </div>
                        <div>
                            <div className="badge bg-yellow-200/70 text-white p-3">primary</div>
                        </div>
                    </div>
                    <div className="flex text-[12px] mb-2 items-center">
                        <img className="w-5" src={houseIcon} />
                        <span>Jing'an Sculpture Park</span>
                    </div>
                    <div className="flex flex-col mt-2 p-2 rounded-lg gap-2 bg-white">
                        <div className="flex justify-between items-center">
                            <div className="text-[20px]">Age</div>
                            <div className="font-bold">{catInfo.age}</div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="text-fs-md">Condition</div>
                            <div className="font-bold">{catInfo.condition}</div>
                        </div>
                    </div>
                </div>
                <div className="p-4">
                    <div className="text-fs-lg font-bold mb-1">Relationship</div>
                    <p>{catInfo.description}</p>
                </div>

                <div className="flex flex-col mx-4 bg-[#FFF1E4] p-2 rounded-md">
                    <div>
                    Oliver is not neutered yet.
                    </div>
                    <div className="">
                        <button className="font-bold bg-white px-2 py-1 rounded-lg text-[12px]">Join to support</button>
                    </div>
                </div>
                <div className="pl-4 pb-4 mt-4">
                    {catInfoMap[params.id] && (
                        <div>
                            <div className="flex justify-between w-full pr-4 mb-2 items-center">
                                <div className="text-fs-lg font-bold mb-1">Recent photo</div>
                                <span>View all</span>
                            </div>
                            <div className="flex w-full overflow-hidden mb-4">
                                <div className="flex overflow-x-auto gap-4 overflow-y-hidden w-full">
                                    {catInfoMap[params.id]?.map((i, idx) => {
                                        return (
                                            <div className="min-w-[50%] max-w-[50%] h-[120px] object-cover overflow-hidden rounded-md">
                                                <img
                                                    key={+idx}
                                                    src={i}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="flex mr-4 items-center justify-center bg-yellow-200 text-white py-2 rounded-full font-bold text-[14px]">Apply for Adoption</div>
                </div>
            </div>
        </div>
    )
}