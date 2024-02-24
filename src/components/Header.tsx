import React from 'react';

const Header = () => {
    return (
        <header className='relative flex justify-between items-center py-[1.1875rem] after:content-[""] after:h-[1px] after:bg-slate after:absolute after:w-[100vw] after:bottom-0 after:left-[calc(50%-50vw)] '>
            <img src="/img/logo.png" alt="logo" />
            <nav className='flex flex-1 ml-[1.875rem]'>
                <ul className='flex'>
                    <li>
                        <a href="" className='text-gray'>Блогерам</a>
                    </li>
                    <li className='ml-[1rem]'>
                        <a href="" className='text-gray'>Рекламодателям</a>
                    </li>
                    <li className='ml-[1rem]'>
                        <a href="" className='text-gray'>Кейсы</a>
                    </li>
                    <li className='ml-[1rem]'>
                        <a href="" className='text-gray'>Контакты</a>
                    </li>
                </ul>
            </nav>
            <button className='py-[0.625rem] px-[0.9375rem] border border-black rounded-[1.25rem]'>
                Оставить заявку
            </button>

        </header>
    );
};

export default Header;