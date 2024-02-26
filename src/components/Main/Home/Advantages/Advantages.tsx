import React from 'react';

const Advantages = () => {
    return (
        <section className='container mx-auto max-w-[1340px] mt-[100px]'>
            <h1 className='text-[2.625rem] text-black font-playenSans font-bold'>Наши преимущества</h1>
            <div className='flex flex-col mt-[3.125rem]'>
                <div className='flex gap-x-[1rem]'>
                    <div className='relative bg-black pt-[7.75rem] pl-[2.5rem] pb-[2.5rem] w-full'>
                        <svg className='absolute right-0 top-0' width="230" height="259" viewBox="0 0 230 259" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.5 55L85 0H230V258.5L203 137L126.5 239L149 103.5L42 161L98 55H0.5Z" fill="#FF3F62" />
                            <path d="M137 22.3404L171.242 0H230V105L219.059 55.648L188.059 97.0793L197.176 42.0406L153.817 65.3965L176.51 22.3404H137Z" fill="black" />
                        </svg>
                        <h1 className='text-white font-playenSans font-medium text-[3rem] leading-[3rem] max-w-[22.5rem] relative z-[1]'>Всегда выполняем ваши запросы</h1>
                        <p className='text-gray font-proxiNova font-normal text-[1.125rem] leading-[1.375rem] mt-[2.8125rem] max-w-[33.125rem] relative z-[1]'>Разнообразный и богатый опыт консультация с профессионалами из IT играет важную роль в формировании</p>
                    </div>
                    <div className='relative bg-black pt-[7.75rem] pl-[2.5rem] pb-[2.5rem] w-full'>
                        <svg className='absolute right-0 top-0' width="252" height="266" viewBox="0 0 252 266" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="74" cy="178.999" r="52" fill="#FF3F62" />
                            <circle cx="191.001" cy="205.001" r="39" fill="#FF3F62" />
                            <circle cx="61" cy="62.001" r="39" fill="#FF3F62" />
                            <circle cx="126" cy="-2.99927" r="26" fill="#FF3F62" />
                            <circle cx="269" cy="152.999" r="26" fill="#FF3F62" />
                            <path d="M308 68.4988L171.5 126.999L139 94.4988L217 -42.0012L308 68.4988Z" fill="#FF3F62" />
                        </svg>
                        <h1 className='text-white font-playenSans font-medium text-[3rem] leading-[3rem] max-w-[30.625rem] relative z-[1]'>Профессиональный подход:</h1>
                        <p className='text-gray font-proxiNova font-normal text-[1.125rem] leading-[1.375rem] mt-[2.8125rem] max-w-[33.125rem] relative z-[1]'>Рекламные агентства имеют опыт работы в разных отраслях и знают, как эффективно привлекать целевую аудиторию.</p>
                    </div>
                </div>
                <div className='flex gap-x-[1rem] mt-[1.2rem]'>
                    <div className='relative bg-black w-full max-w-[33.75rem] flex flex-col justify-center items-center'>
                        <svg className='absolute right-0 top-0' width="100%" height="100%" viewBox="0 0 540 262" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M426.405 0H358.81L482.669 38.8961L540 170.384V117L507.859 30.1408L426.405 0Z" fill="#FF3F62" />
                            <path d="M0 0H225.302L453.29 71.596L536.31 262H332.927L82.8882 188.881L0 11.8565V0Z" fill="#FF3F62" />
                            <path d="M0 106.185V145L32.1408 231.859L113.595 262H190.414L54.3228 222.203L0 106.185Z" fill="#FF3F62" />
                        </svg>
                        <h1 className='text-white font-playenSans font-medium text-[3rem] leading-[3rem] relative z-[1]'>Креативность</h1>
                    </div>
                    <div className='relative bg-black pt-[3.75rem] pl-[2.5rem] pb-[3.75rem] w-full'>
                        <svg className='absolute right-0 top-0' width="195" height="262" viewBox="0 0 195 262" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M157 131.5L106 -21.5L211 -13.5L226 190.5L240.5 300.5L91 312L0.500024 242.5L27 144.5L157 131.5Z" fill="#FF3F62" />
                            <path d="M183.5 158L169 17.6207L206.663 17.6207L219.038 186.448L231 277.483L107.663 287L33.0001 229.483L72 176.5L183.5 158Z" fill="black" />
                        </svg>

                        <h1 className='text-white font-playenSans font-medium text-[3rem] leading-[3rem] relative z-[1]'>Доступ к новейшим технологиям</h1>
                        <p className='text-gray font-proxiNova font-normal text-[1.125rem] leading-[1.375rem] mt-[1.75rem] max-w-[33.125rem] relative z-[1]'>Рекламные агентства обычно имеют доступ к самым передовым инструментам и технологиям в области маркетинга и рекламы.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Advantages;