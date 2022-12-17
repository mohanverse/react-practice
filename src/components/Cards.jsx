

function Cards({detaials}) {
  return (
    <div className="card" style={{width: "18rem"}}>
       <img src={detaials.picture?.large} className="card-img-top" alt="..." />
       <div className="card-body">
         <h5 className="card-title">{detaials.name?.first}</h5>
         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         <a href="https://randomuser.me/documentation" className="btn btn-primary">visit-</a>
        </div>
    </div>
  )
}

export default Cards
