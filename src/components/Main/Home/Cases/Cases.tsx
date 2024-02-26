import React from 'react';
import TagButton from './TagButton/TagButton';
import SlideActive from './SlideActive/SlideActive';

const Cases = () => {
    return (
        <section className='cases bg-black left-0 w-full pt-[6rem]'>
            <div className="container mx-auto max-w-[1340px] mt-[100px]">
                <h1 className='text-[2.625rem] font-playenSans font-light text-white'>Наши кейсы</h1>
                <div className='flex gap-x-[41px] mt-[3rem]'>
                    <img src="/img/dulo.png" alt="caseimg" />
                    <div className='flex flex-col justify-between'>
                        <div className='tag-row flex '>
                            <TagButton title='🔥' />
                            <TagButton title='Игры' />
                            <TagButton title='Коллаборация' />
                        </div>
                        <div>
                            <h1 className='text-[4rem] font-playenSans font-light leading-[4rem] text-white'>Игровой проект War Thunder X ДУЛО</h1>
                            <p className='text-gray'>Разнообразный и богатый опыт консультация с профессионалами из IT играет
                                важную роль в формировании всесторонне сбалансированных нововведений.
                                Значимость этих проблем настолько очевидна, что новая модель организационной.</p>
                        </div>
                        <button className='inline-block bg-white text-black rounded-full py-[15px] px-[25px] max-w-[9.0625rem]'>
                            Подробнее
                        </button>
                    </div>
                </div>
                <div className='flex mt-[8rem]'>
                    <div className='element flex items-center gap-x-[1rem] pr-[120px]'>
                        <div className='bg-lightGray w-[72px] h-[72px]'></div>
                        <div>
                            <h4 className='text-gray uppercase font-proxiNova font-regular tracking-[2px] leading-[1.22rem] mb-[0.3125rem]'>Общее кол-во просмотров</h4>
                            <p className='text-white text-[2.625rem] font-semibold leading-[2.625rem]'>20.000+</p>
                        </div>

                    </div>
                    <div className='element flex items-center gap-x-[1rem] pr-[120px]'>
                        <div className='bg-lightGray w-[72px] h-[72px]'></div>
                        <div>
                            <h4 className='text-gray uppercase font-proxiNova font-regular tracking-[2px] leading-[1.22rem] mb-[0.3125rem]'>Лайки</h4>
                            <p className='text-white text-[2.625rem] font-semibold leading-[2.625rem]'>20.000+</p>
                        </div>

                    </div>
                    <div className='element flex items-center gap-x-[1rem]'>
                        <div className='bg-lightGray w-[72px] h-[72px]'></div>
                        <div>
                            <h4 className='text-gray uppercase font-proxiNova font-regular tracking-[2px] leading-[1.22rem] mb-[0.3125rem]'>Охваты</h4>
                            <p className='text-white text-[2.625rem] font-semibold leading-[2.625rem]'>20.000+</p>
                        </div>

                    </div>
                </div>
                <div className='flex gap-x-[1rem] mt-[9rem] pb-[9.3rem]'>
                    <SlideActive title="Игровой проект War Thunder" description='Специальный проект с Моргенштерном' img='dulo.png' />
                    <SlideActive title="Казино Stake x Drake" description='Азарт, Рэп, Реклама' img='drake.png' />
                    <SlideActive title="Игровой проект Free Fire" description='Уникальная рекламная компания' img='freefire.png' />
                    <SlideActive title="VK Music" description='Музыкальный сервис соц. сети ВКонтакте' img='vk.png' />
                </div>
            </div>

        </section>
    );
};

export default Cases;