import ErrorPage, { applyDefaults } from './ErrorPage'

const defaultValues = {
    message: {
        main: 'Uy! Ese no lo tenemos',
        desc: 'Parece que te distrajiste un poco y terminaste en cualquier lugar!',
        action: 'Vamos al listado?',
        img: '/assets/img/404.png'
    },
    navAction: '/products',
    style: 'errorPage notFound'
}

const NotFound = applyDefaults(ErrorPage, defaultValues)

export default NotFound