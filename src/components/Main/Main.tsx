import React from 'react';

interface MainProps {
    children: React.ReactNode
}


const Main = ({ children }: MainProps) => {
    return (
        <main className='mt-[6.25rem]'>
            {children}
        </main>
    );
};

export default Main;