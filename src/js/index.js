import Header from './modules/header';
import AOS from 'aos';

window.onload = () => {
    const header = new Header();
    header.init();

    setTimeout(() => {
        AOS.init();
    }, 50);
};
