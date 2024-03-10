import React, { useState } from 'react';
import TagButton from './TagButton/TagButton';
import Slider from './Slider/Slider';



const Cases = () => {

 
    const slides = [
        {
            title: "Игровой проект War Thunder",
            description: "Разнообразный и богатый опыт консультация с профессионалами из IT играет важную роль в формировании всесторонне сбалансированных нововведений. Значимость этих проблем настолько очевидна, что новая модель организационной.",
            descriptionSlide: "Специальный проект с Моргенштерном",
            img: "dulo.png",
            tags: ['🔥', 'Игры', 'Коллаборация']
        },
        {
            title: "Казино Stake x Drake",
            descriptionSlide: "Азарт, Рэп, Реклама",
            description: "Наша компания, Stake X Drake, представляет собой инновационное онлайн-казино, объединяющее передовые технологии и впечатляющий игровой опыт. Мы создали это казино, чтобы предложить нашим пользователям уникальное сочетание азарта, развлечений и надежности",
            img: "drake.png",
            tags: ['🤑', 'Казино', 'Реп']
        },
        {
            title: "Игровой проект Free Fire",
            description: "Наша компания предоставляет высококачественные IT-услуги для ведущего игрового проекта Free Fire. Мы являемся надежным партнером и экспертом в области разработки игровых решений, предлагая комплексные технологические решения, которые помогают улучшить и оптимизировать игровой процесс",
            descriptionSlide: "Уникальная рекламная компания",
            img: "freefire.png",
            tags: ['💥', 'Игры', 'Коллаборация']
        },
        {
            title: "VK Music",
            description: "Наша компания специализируется на предоставлении высокотехнологичных IT-услуг для популярной социальной платформы ВКонтакте.",
            descriptionSlide: "Музыкальный сервис соц. сети ВКонтакте",
            img: "vk.png",
            tags: ['😄', 'Социальные сети']
        },
    ]



    const [selectSlide, setSelectSlide] = useState<number>(0)


    return (
        <section className='relative cases bg-black left-0 w-full pt-[6rem] pb-[9.3rem] px-[0.9375rem]'>
            <svg className='svg-decoration absolute right-0 bottom-0 z-0' width="521" height="1115" viewBox="0 0 521 1115" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M173.033 207.185L544.281 0.838515L585.543 149.029L403.382 239.879L569.978 460.761L301.5 667L517 1126L-6.9632e-05 1126L47 578.5L325.928 392.184L173.033 207.185Z" fill="#0C0C0C" />
            </svg>

            <svg className='svg-decoration absolute left-0 bottom-0 z-0' width="382" height="635" viewBox="0 0 382 635" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M207.993 206.581L-163.255 0.234634L-204.517 148.425L-22.3556 239.275L-188.952 460.157L79.526 666.396L-135.974 1125.4L381.026 1125.4L334.026 577.896L55.098 391.58L207.993 206.581Z" fill="#0C0C0C" />
            </svg>
            <div className="relative z-[1] container mx-auto max-w-[1340px] mt-[100px]">
                <h1 className='text-[2.625rem] font-playenSans font-light text-white'>Наши кейсы</h1>
                <div className='cases-container relative flex gap-x-[41px] mt-[3rem]'>


                    <svg className='svg-img-left absolute left-[-120px] top-[-65px] z-[-1]' width="345" height="278" viewBox="0 0 345 278" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M44.3682 0L344.309 260.816L331.014 277.713L0.221491 122.41L44.3682 0Z" fill="#161616" />
                    </svg>

                    <svg className='svg-img-left absolute left-[-230px] top-[150px] z-[-1]' width="369" height="103" viewBox="0 0 369 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M65.6232 0.125489L368.653 62.2884L364.919 83.4616L-5.46596e-05 102.87L65.6232 0.125489Z" fill="#161616" />
                    </svg>


                    <svg className='svg-img-left absolute left-[-130px] top-[300px] z-[-1]' width="98" height="60" viewBox="0 0 98 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 24.0087L95.6221 0.0767171L97.7684 6.77668L22.0031 59.3954L0 24.0087Z" fill="#161616" />
                    </svg>


                    <svg className='svg-img-left absolute left-[-130px] bottom-[-100px] z-[-1]' width="351" height="287" viewBox="0 0 351 287" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 208.198L338.646 0.0928497L350.788 17.8363L103.581 286.966L0 208.198Z" fill="#161616" />
                    </svg>


                    <img className='case-img max-w-[39.8rem] w-full h-full object-cover object-center' src={`/img/${slides[selectSlide].img}`} alt="caseimg" />
                    <div className='flex flex-col justify-between'>
                        <div className='tag-row flex '>
                            {slides[selectSlide].tags.map((tag) => (
                                <TagButton title={tag} />
                            ))}
                        </div>
                        <div className='cases-title'>
                            <h1 className='text-[4rem] font-playenSans font-light leading-[4rem] text-white'>{slides[selectSlide].title}</h1>
                            <p className='text-gray'>{slides[selectSlide].description}</p>
                        </div>
                        <button className='cases-more-btn font-proxiNova font-semibold inline-block bg-white text-black rounded-full py-[15px] px-[25px] max-w-[9.0625rem] transition duration-200 hover:bg-red hover:text-white'>
                            Подробнее
                        </button>
                    </div>
                </div>
                <div className='views flex mt-[8rem]'>
                    <div className='element flex items-center gap-x-[1rem] pr-[120px]'>
                        <div className='black-box bg-lightGray w-[72px] h-[72px]'></div>
                        <div>
                            <h4 className='text-gray uppercase font-proxiNova font-regular tracking-[2px] leading-[1.22rem] mb-[0.3125rem]'>Общее кол-во просмотров</h4>
                            <p className='text-white text-[2.625rem] font-semibold leading-[2.625rem]'>20.000+</p>
                        </div>

                    </div>
                    <div className='element flex items-center gap-x-[1rem] pr-[120px]'>
                        <div className='black-box bg-lightGray w-[72px] h-[72px]'></div>
                        <div>
                            <h4 className='text-gray uppercase font-proxiNova font-regular tracking-[2px] leading-[1.22rem] mb-[0.3125rem]'>Лайки</h4>
                            <p className='text-white text-[2.625rem] font-semibold leading-[2.625rem]'>20.000+</p>
                        </div>

                    </div>
                    <div className='element flex items-center gap-x-[1rem]'>
                        <div className='black-box bg-lightGray w-[72px] h-[72px]'></div>
                        <div>
                            <h4 className='text-gray uppercase font-proxiNova font-regular tracking-[2px] leading-[1.22rem] mb-[0.3125rem]'>Охваты</h4>
                            <p className='text-white text-[2.625rem] font-semibold leading-[2.625rem]'>20.000+</p>
                        </div>

                    </div>
                </div>
                <Slider selectSlide={selectSlide} setSelectSlide={setSelectSlide} slides={slides} />
                
            </div>

        </section>
    );
};

export default Cases;