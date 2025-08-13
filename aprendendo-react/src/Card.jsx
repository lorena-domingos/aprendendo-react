import ImagemPerfil from './assets/profile.jpg'

function Card() {
    return (
        <div className='card'>
            <img className='card-image' src={ImagemPerfil} alt="foto de perfil de lorena" />
            <h2 className='card-title'>Lorena Domingos</h2>
            <p className='card-text'>Eu estou aprendendo React para criar belas páginas, mas amo usar Python ainda.</p>
        </div>
    );

}

export default Card