import React, { SetStateAction, useState } from 'react';
import SlideActive from '../SlideActive/SlideActive';


interface SliderProps {
    selectSlide: number,
    setSelectSlide: React.Dispatch<number>,
    slides: {
        title: string,
        description: string,
        descriptionSlide: string,
        img: string
    }[]
}

const Slider = ({ selectSlide, setSelectSlide, slides }: SliderProps) => {


    const onSlide = (direction: string) => {
        switch (direction) {
            case 'left':
                if (selectSlide > 0) {
                    setSelectSlide(selectSlide - 1)
                }
                break;
            case 'right':
                if (selectSlide < slides.length - 1) {
                    setSelectSlide(selectSlide + 1)
                }
                break
        }

    }




    return (
        <div className='relative flex justify-between mt-[9rem]'>
            <div onClick={() => onSlide('left')}>
                <svg className='select-none cursor-pointer absolute left-[-50px] top-[50%] translate-y-[-50%]' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 25.3333L10.6667 15.9999L20 6.66658" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>

            {slides.map((slide, index) => (
                <SlideActive title={slide.title} description={slide.descriptionSlide} img={slide.img} active={selectSlide === index} />
            ))}




            <div onClick={() => onSlide('right')}>
                <svg className='select-none cursor-pointer absolute right-[-50px] top-[50%] translate-y-[-50%]' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6.66675L21.3333 16.0001L12 25.3334" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>


        </div>
    );
};

export default Slider;