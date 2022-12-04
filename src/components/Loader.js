import LoaderLogo from '../images/Loader.svg'

export default function Loader() {
    return (
        <div className='loader'>
            <img src={LoaderLogo} className="loader__img" alt="Идет загрузка" />
        </div>
    )

}
