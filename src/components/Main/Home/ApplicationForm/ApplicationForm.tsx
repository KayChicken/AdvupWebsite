import React from 'react';

const ApplicationForm = () => {
    return (
        <section className='relative z-[1] bg-black pb-[5rem]'>

            <svg className='absolute left-0 top-0 z-[-1]' width="500" height="1147" viewBox="0 0 500 1147" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-222.961 167.15L337.545 -73.355L499.139 -36.9877L0.973098 230.26L136.636 471.381L-156.94 639.987L-7.56763 1146.02L-519.953 1077.1L-397.37 518.349L-96.0934 370.881L-222.961 167.15Z" fill="#0C0C0C" />
            </svg>


            <svg className='absolute left-0 bottom-0 z-[-1]' width="793" height="100%" viewBox="0 0 793 1265" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M101.446 304.88L627.331 -16.8978L792.5 -2.99996L331.966 336.968L497.637 561.141L227.664 772.703L440.928 1262.26L-76.8441 1265.01L-26.7462 683.882L253.588 492.563L101.446 304.88Z" fill="#0C0C0C" />
            </svg>

            <svg className='absolute left-0 top-[275px] z-[-1]' width="632" height="872" viewBox="0 0 632 872" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-164.777 564.567L-78.1432 201.527L469.162 529.352L364.221 788.504L-164.777 564.567Z" fill="#FF3F62" />
                <path d="M204.939 586.749L-78.1432 201.527L469.162 529.352L204.939 586.749Z" fill="#7B1527" />
                <path d="M455.755 260.59L-78.1429 201.527L469.162 529.352L455.755 260.59Z" fill="#B3203A" />
                <path d="M204.939 586.749L37.047 358.28L72.645 252.998L442.606 454.442L387.969 546.99L204.939 586.749Z" fill="white" />
                <path d="M89.924 335.919L94.0539 303.296L394.434 478.295L384.975 491.568L89.924 335.919Z" fill="#E7E7E7" />
                <path d="M115.151 387.251L101.254 412.465L340.364 513.167L342.049 497.217L115.151 387.251Z" fill="#E7E7E7" />
            </svg>


            <svg className='absolute right-0 top-[200px] z-[-1]' width="453" height="544" viewBox="0 0 453 544" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M491.993 309.376L400.131 104.533L113.407 359.571L204.452 500.969L491.993 309.376Z" fill="#FF3F62" />
                <path d="M275.985 363.896L400.131 104.533L113.407 359.571L275.985 363.896Z" fill="#7B1527" />
                <path d="M91.227 199.238L400.131 104.533L113.407 359.571L91.227 199.238Z" fill="#B3203A" />
                <path d="M275.985 363.896L349.614 210.072L316.784 151.84L120.71 312.327L163.366 360.9L275.985 363.896Z" fill="white" />
                <path d="M315.861 202.779L309.766 183.962L151.85 321.027L158.927 327.812L315.861 202.779Z" fill="#E7E7E7" />
                <path d="M306.702 235.94L317.739 249.285L187.71 335.579L184.928 326.342L306.702 235.94Z" fill="#E7E7E7" />
            </svg>


            <svg className='absolute right-0 bottom-0 z-[-2]' width="691" height="100%" viewBox="0 0 691 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.487204 371.209L152.235 -334.096L296.37 -459.807L212.299 206.338L533.295 255.455L494.305 656.185L1076.18 886.921L663.213 1319.6L215.723 793.633L280.01 401.163L0.487204 371.209Z" fill="#0C0C0C" />
            </svg>





            <div className='container mx-auto max-w-[34.375rem] mt-[9.375rem]'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-white text-[4rem] font-playenSans font-bold text-center pt-[9rem]'>Оставить заявку</h1>
                    <p className='text-gray text-[1.125rem] font-proximaNova text-center max-w-[530px] w-full'>Рекламные агентства имеют опыт работы в разных отраслях и знают, как эффективно привлекать целевую аудиторию.</p>
                </div>
                <div>
                    <form action="" className="flex flex-col space-y-4 mt-[5.5rem]">
                        <label htmlFor="life_question" className="text-white font-proximaNova font-semibold text-[1rem]">Кто по жизни?</label>
                        <div className="flex space-x-4">
                            <button className="bg-white font-proxiNova font-semibold rounded-[1px] py-[0.94rem] px-[1.56rem]">Блогер</button>
                            <button className="border border-gray text-gray font-proxiNova font-semibold rounded-[1px] py-[0.94rem] px-[1.56rem]">Рекламодатель</button>
                        </div>
                        <div>
                            <label htmlFor="name" className="text-white font-proximaNova font-semibold text-[1rem]">Ваше имя</label>
                            <input type="text" id="name" placeholder="Введите ваше имя" className="w-full text-gray border-gray bg-transparent border-solid border p-2 rounded-[1px] mt-[0.625rem]" />
                        </div>
                        <div>
                            <label htmlFor="email" className="text-white font-proximaNova font-semibold text-[1rem]">Почта</label>
                            <input type="email" id="email" placeholder="Введите электронную почту" className="w-full text-gray border-gray bg-transparent border-solid border p-2 rounded-[1px] mt-[0.625rem]" />
                        </div>
                        <div>
                            <label htmlFor="phone" className="text-white font-proximaNova font-semibold text-[1rem]">Телефон</label>
                            <input type="tel" id="phone" placeholder="Введите ваш номер телефона" className="w-full text-gray border-gray bg-transparent border-solid border p-2 rounded-[1px] mt-[0.625rem]" />
                        </div>
                        <div>
                            <label htmlFor="comment" className="text-white font-proximaNova font-semibold text-[1rem]">Комментарий</label>
                            <textarea id="comment" name="comment" cols={30} rows={10} placeholder="Комментарий" className="w-full text-gray border-gray bg-transparent border-solid border p-2 rounded-[1px] mt-[0.625rem]"></textarea>
                        </div>
                        <div className="flex items-center pt-[2rem]">
                            <button type="submit" className="font-proxiNova font-semibold bg-white rounded-full py-[0.94rem] px-[1.56rem] mr-[1rem] transition duration-200 hover:bg-red hover:text-white ">Отправить</button>
                            <p className="text-gray max-w-[17rem]">Нажав на кнопку, вы соглашаетесь на <a href="#" className="text-white underline">обработку персональных данных</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ApplicationForm;