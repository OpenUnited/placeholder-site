export default class Header {
    constructor () {
        this.body = document.documentElement;
        this.toggle = document.querySelector('[data-header-toggle]');
        this.headerNavigation = document.querySelector('[data-header-navigation]');
        this.logo = document.querySelector('[data-header-logo]');
    }

    init () {
        if (this.toggle && this.headerNavigation) {
            this.toggle.addEventListener('click', () => this.toggleHandle());
        }

        if (this.headerNavigation) {
            const items = this.headerNavigation.querySelectorAll('[data-header-link]');
            items.forEach(item => item.addEventListener('click', (e) => this.linkHandle(e, item)));
        }

        if (this.logo) {
            setTimeout(() => this.logo.classList.add('start'), 2000);

            this.logo.addEventListener('click', (e) => this.linkHandle(e, this.logo));
        }
    }

    toggleHandle () {
        this.toggle.classList.toggle('active');
        this.headerNavigation.classList.toggle('active');
        this.body.classList.toggle('is-scroll-locked');
    }

    linkHandle (e, item) {
        e.preventDefault();
        const href = item.getAttribute('href');
        const offsetTop = document.querySelector(href).offsetTop;

        scroll({ /* eslint-disable-line  no-undef */
            top: offsetTop,
            behavior: 'smooth'
        });

        this.toggle.classList.remove('active');
        this.headerNavigation.classList.remove('active');
        this.body.classList.remove('is-scroll-locked');
    }
}
