import React from 'react';

interface TagButtonProps {
    title: string
}

const TagButton = ({ title }: TagButtonProps) => {
    return (
        <div className='border-2 border-red px-[13px] py-[8px] rounded-full'>
            <span className='text-red font-playenSans font-light'>{title}</span>
        </div>
    );
};

export default TagButton;