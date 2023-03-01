import './style.scss';

export default function Header() {
    return (
        <div className="header">
            <div className='menu'>
                <i class="fa-sharp fa-solid fa-bars"></i>
            </div>
            <h1>
                Meu amor por vc é eterno
            </h1>
            <a href="https://wa.me/qr/YE66C7WFWNHYB1">
                <div className='contatos'>
                    <i class="fa-brands fa-whatsapp"></i>
                </div>
            </a>
        </div>
    )
}