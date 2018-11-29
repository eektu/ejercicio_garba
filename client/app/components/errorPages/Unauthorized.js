import ErrorPage, { applyDefaults } from './ErrorPage'

const defaultValues = {
    message: {
        main: 'Hmm, te faltan privilegios',
        desc: 'Volvé cuando seas más grande o sepas cómo acceder ;D',
        action: 'A la cucha',
        img: '/assets/img/401.png'
    },
    navAction: '/products',
    style: 'errorPage unauthorized'
}

const Unauthorized = applyDefaults(ErrorPage, defaultValues)

export default Unauthorized