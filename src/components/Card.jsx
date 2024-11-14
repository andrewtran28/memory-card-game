function Card({ name, img, handleCardClick }) {
    return (
        <div className="card">
            <button onClick={handleCardClick}>
                <img className="card-img" src={img} width="100px"/>
                <div className="card-name">{name}</div>
            </button>
        </div>
    )
}

export default Card;