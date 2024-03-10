import Advantages from './Advantages/Advantages';
import ApplicationForm from './ApplicationForm/ApplicationForm';
import Cases from './Cases/Cases';
import Welcome from './Welcome/Welcome';
import { Swiper, SwiperSlide } from 'swiper/react';

const Home = () => {
    return (
        <>
            <Welcome />
            <Cases />
            <Advantages />
            <ApplicationForm />

        </>
    );
};

export default Home;