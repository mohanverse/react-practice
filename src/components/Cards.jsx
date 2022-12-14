

function Cards({Name, imageUrl, href}) {
  return (
    <div className="card" style={{width: "18rem"}}>
       <img src={imageUrl} className="card-img-top" alt="..." />
       <div className="card-body">
         <h5 className="card-title">Mohanverse-{Name}</h5>
         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         <a href={href} className="btn btn-primary">visit-{Name}</a>
        </div>
    </div>
  )
}

export default Cards
