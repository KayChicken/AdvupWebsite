import React, { useState } from "react"


const Navigation = () => {


    const [burger, setBurger] = useState<boolean>(false);




    return (
        <>
            <nav className={`header-navigation flex text-gray flex-1 ml-[0.875rem] ${burger ? 'open' : ''}`}>
                <ul className='flex max-[600px]:flex-col'>
                    <li className='ml-[1rem]'>
                        <a href="" className=''>Блогерам</a>
                    </li>
                    <li className='ml-[1rem]'>
                        <a href="" className=''>Рекламодателям</a>
                    </li>
                    <li className='ml-[1rem]'>
                        <a href="" className=''>Кейсы</a>
                    </li>
                    <li className='ml-[1rem]'>
                        <a href="" className=''>Контакты</a>
                    </li>

                </ul>
                <button className='hidden font-proxiNova font-semibold py-[0.625rem] px-[0.9375rem] hover:bg-black hover:text-white transition duration-300 max-[600px]:block'>
                    Оставить заявку
                </button>
            </nav>
            <button className='font-proxiNova font-semibold py-[0.625rem] px-[0.9375rem] border border-black rounded-[1.25rem] hover:bg-black hover:text-white transition duration-300 max-[600px]:hidden'>
                Оставить заявку
            </button>
            <div onClick={() => { setBurger(!burger) }} className='burger-menu hidden max-[600px]:block'>
                <svg width="2rem" height="2rem" viewBox="0 0 20 20" fill="none">
                    <path fill="#000000" fill-rule="evenodd" d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z" />
                </svg>
            </div>
        </>
    )
}

export default Navigation;



