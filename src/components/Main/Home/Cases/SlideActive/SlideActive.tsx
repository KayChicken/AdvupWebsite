import React from 'react';

interface SlideActiveProps {
    title: string,
    description: string,
    img: string
}



const SlideActive = ({ title, description, img }: SlideActiveProps) => {
    return (
        <div>
            <div className='bg-red p-[1.5625rem]'>
                <h2 className='text-white font-proxiNova font-bold text-[1.125rem] leading-[1.125rem]'>{title}</h2>
                <p className='text-white font-proxiNova text-[0.875rem] leading-[0.875rem] font-light mt-[0.3125rem]'>Специальный проект с Моргенштерном</p>
            </div>
            <div className='max-w-[19.875rem]'>
                <img className='w-full object-contain' src={`/img/slider/${img}`} alt={`${img}`} />
            </div>
        </div>
    );
};

export default SlideActive;