import React from 'react';
import HyperLogo from '../../../Logos/HyperLogo';
import BroadBandLogo from '../../../Logos/BroadBandLogo';
import DxacerLogo from '../../../Logos/DxacerLogo';
import LogitechLogo from '../../../Logos/LogitechLogo';
import LolzteamLogo from '../../../Logos/LolzteamLogo';
import ParimatchLogo from '../../../Logos/Parimatch';
import PokerDom from '../../../Logos/PokerDom';
import PubgLogo from '../../../Logos/PubgLogo';
import SteelSeriesLogo from '../../../Logos/SteelSeriesLogo';
import TiktokLogo from '../../../Logos/TiktokLogo';
import TlauncherLogo from '../../../Logos/TlauncherLogo';
import WinLogo from '../../../Logos/WinLogo';
import XbetLogo from '../../../Logos/XbetLogo';

const Welcome = () => {
    return (
        <section className='container mx-auto max-w-[1340px]'>
            <p className='text-gray'>Рекламное агентсво ADVUP</p>
            <div className='flex items-center mt-[1rem]'>
                <h1 className='text-[5.125rem] grow shrink basis-[753px] leading-[5rem] font-playenSans font-light'>Новый поток клиентов Вашему продукту</h1>
                <div className='relative grow shrink basis-[545px]'>
                    <svg width="100%" height="124" viewBox="0 0 545 124" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0.5L545 10.5V32L41 124L0 0.5Z" fill="#FF3F62" />
                    </svg>
                    <button className='absolute font-proxiNova font-semibold leading-[1.5rem] border-[3px] text-[1.25rem]  border-black right-[-10px] lg:top-[-10px] top-[-1px] px-[1.5625rem] py-[0.8rem] text-white bg-black rounded-[2rem] transition duration-200 hover:border-gray'>
                        Приступим
                    </button>
                </div>
            </div>
            <div className='mt-[6.25rem]'>
                <img src="/img/banner.png" alt="banner" className='w-full' />
            </div>
            <div className='h-[65px] mt-[100px]'>
                <div className='absolute logos-line bg-red whitespace-nowrap overflow-hidden w-full left-0 z-10'>
                    <div className='logos inline-block'>
                        <HyperLogo />
                        <SteelSeriesLogo />
                        <TlauncherLogo />
                        <BroadBandLogo />
                        <DxacerLogo />
                        <LogitechLogo />
                        <PokerDom />
                        <XbetLogo />
                        <WinLogo />
                        <ParimatchLogo />
                        <LolzteamLogo />
                        <TiktokLogo />
                        <PubgLogo />
                    </div>

                    <div className='logos inline-block'>
                        <HyperLogo />
                        <SteelSeriesLogo />
                        <TlauncherLogo />
                        <BroadBandLogo />
                        <DxacerLogo />
                        <LogitechLogo />
                        <PokerDom />
                        <XbetLogo />
                        <WinLogo />
                        <ParimatchLogo />
                        <LolzteamLogo />
                        <TiktokLogo />
                        <PubgLogo />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Welcome;