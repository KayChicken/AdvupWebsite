import React from 'react';

const Advantages = () => {
    return (
        <section className='container mx-auto max-w-[1340px] mt-[100px] px-[0.9375rem]'>
            <h1 className='text-[2.625rem] text-black font-playenSans font-bold'>Наши преимущества</h1>
            <div className='flex flex-col mt-[3.125rem] text-center md:text-left'>
                <div className='flex gap-x-[1rem] flex-col xl:flex-row gap-y-4 xl:gap-y-0'>
                    <div className='bg-svg-explosive relative bg-black pt-[2.75rem] lg:pt-[7.75rem] pl-[2.5rem] pb-[2.5rem] w-full '>
                        <h1 className='text-white font-playenSans font-medium text-[3rem] leading-[3rem] w-full md:max-w-[22.5rem] relative z-[1]'>Всегда выполняем ваши запросы</h1>
                        <p className='text-gray font-proxiNova font-normal text-[1.125rem] leading-[1.375rem] mt-[2.8125rem] w-full md:max-w-[33.125rem] relative z-[1]'>Разнообразный и богатый опыт консультация с профессионалами из IT играет важную роль в формировании</p>
                    </div>
                    <div className='bg-svg-multyply relative bg-black pt-[2.75rem] lg:pt-[7.75rem] pl-[2.5rem] pb-[2.5rem] w-full'>
                        <h1 className='text-white font-playenSans font-medium text-[3rem] leading-[3rem] w-full md:max-w-[30.625rem] relative z-[1]'>Профессиональный подход:</h1>
                        <p className='text-gray font-proxiNova font-normal text-[1.125rem] leading-[1.375rem] mt-[2.8125rem] w-full md:max-w-[33.125rem] relative z-[1]'>Рекламные агентства имеют опыт работы в разных отраслях и знают, как эффективно привлекать целевую аудиторию.</p>
                    </div>
                </div>
                <div className='flex flex-col gap-x-[1rem] mt-[1.2rem] xl:flex-row gap-y-4 xl:gap-y-0 '>
                    <div className='bg-substract relative bg-black w-full xl:max-w-[33.75rem] h-[13.625rem] xl:h-auto flex flex-col justify-center items-center '>
                        <h1 className='text-white font-playenSans font-medium text-[3rem] leading-[3rem] relative z-[1]'>Креативность</h1>
                    </div>
                    <div className='bg-svg-cursive relative bg-black pt-[2.75rem] lg:pt-[3.75rem] pl-[2.5rem] pb-[3.75rem] w-full'>  
                        <h1 className='text-white font-playenSans font-medium text-[3rem] leading-[3rem] relative z-[1]'>Доступ к новейшим технологиям</h1>
                        <p className='text-gray font-proxiNova font-normal text-[1.125rem] leading-[1.375rem] mt-[1.75rem] w-full md:max-w-[33.125rem] relative z-[1]'>Рекламные агентства обычно имеют доступ к самым передовым инструментам и технологиям в области маркетинга и рекламы.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Advantages;