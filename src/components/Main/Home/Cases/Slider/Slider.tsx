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
        <div className='slider relative flex justify-between mt-[9rem]'>
         

            {slides.map((slide, index) => (
                <div onClick={() => setSelectSlide(index)}>
                    <SlideActive title={slide.title} description={slide.descriptionSlide} img={slide.img} active={selectSlide === index} />
                </div>
            ))}





        </div>
    );
};

export default Slider;