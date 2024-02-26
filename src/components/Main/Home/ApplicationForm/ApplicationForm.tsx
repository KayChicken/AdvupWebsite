import React from 'react';

const ApplicationForm = () => {
    return (
        <section className='bg-black pb-[5rem]'>
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
                            <textarea id="comment" name="comment" cols={30} rows={10} placeholder="Комментарий" className="w-full text-gray border-gray bg-transparent border-solid border p-2 rounded-md mt-[0.625rem]"></textarea>
                        </div>
                        <div className="flex items-center pt-[2rem]">
                            <button type="submit" className="bg-white rounded-full py-[0.94rem] px-[1.56rem] mr-[1rem]">Отправить</button>
                            <p className="text-gray max-w-[17rem]">Нажав на кнопку, вы соглашаетесь на <a href="#" className="text-white underline">обработку персональных данных</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ApplicationForm;