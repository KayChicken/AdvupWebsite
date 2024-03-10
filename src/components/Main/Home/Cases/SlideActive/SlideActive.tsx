import React from 'react';

interface SlideActiveProps {
    title: string,
    description: string,
    img: string,
    active?: boolean,
  

}



const SlideActive = ({ title, description, img, active }: SlideActiveProps) => {
    return (
        <>
            <div className={`relative border-x-[1px] border-t-[1px] ${active ? 'bg-red border-red' : 'bg-black border-gray-400'} p-[1.5625rem]`}>
                {active &&
                    <svg className='animate-down absolute top-[-30px] left-[50%] translate-x-[-50%]' width="73" height="49" viewBox="0 0 73 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M36.5 49L4.89007 12.25L68.1099 12.25L36.5 49Z" fill="black" />
                        <path d="M36.5 38L17.8805 16.25L55.1195 16.25L36.5 38Z" fill="#FF3F62" />
                    </svg>}

                <h2 className='text-white font-proxiNova font-bold text-[1.125rem] leading-[1.125rem]'>{title}</h2>
                <p className='text-white font-proxiNova text-[0.875rem] leading-[0.875rem] font-light mt-[0.3125rem]'>{description}</p>
            </div>
            <div className='max-w-[19.875rem]'>
                <img className='w-full object-contain' src={`/img/slider/${img}`} alt={`${img}`} />
            </div>
        </>

    );
};

export default SlideActive;