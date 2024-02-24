import React from 'react';
import TagButton from './TagButton/TagButton';

const Cases = () => {
    return (
        <section className='absolute bg-black left-0 w-full'>
            <div className="container mx-auto max-w-[1340px] mt-[100px]">
                <h1 className='text-[2.625rem] font-playenSans font-light text-white'>Наши кейсы</h1>
                <div className='flex gap-x-[41px]'>
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
                        <button className='inline-block bg-white text-black rounded-full py-[15px] px-[25px] w-[calc(100%/5)]'>
                            Подробнее
                        </button>
                    </div>
                </div>
                <div className='flex justify-between mt-[8rem]'>
                    <div className='flex items-center'>
                        <div className='bg-lightGray w-[72px] h-[72px]'></div>
                        <div>
                            <h4 className='text-gray uppercase'>Общее кол-во просмотров</h4>
                            <p className='text-white text-[2.625rem]'>20.000+</p>
                        </div>

                    </div>
                    <div className='flex items-center'>
                        <div className='bg-lightGray w-[72px] h-[72px]'></div>
                        <div>
                            <h4 className='text-gray uppercase'>Лайки</h4>
                            <p className='text-white text-[2.625rem]'>20.000+</p>
                        </div>

                    </div>
                    <div className='flex items-center'>
                        <div className='bg-lightGray w-[72px] h-[72px]'></div>
                        <div>
                            <h4 className='text-gray uppercase'>Охваты</h4>
                            <p className='text-white text-[2.625rem]'>20.000+</p>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    );
};

export default Cases;