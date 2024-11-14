function Card({ name, img, handleCardClick }) {
    return (
        <div className="card">
            <button onClick={handleCardClick}>
                <img className="card-img" src={img}/>
                <div className="card-name">{name}</div>
            </button>
        </div>
    )
}

export default Card;