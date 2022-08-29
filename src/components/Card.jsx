const Card = (props) => {
  
    
    
    return (
    <div class="container">
      <div className="card" style={{ width: "18rem" ,border:"2px solid #a79c9c",padding:"4px"}}>
        <img className="card-img-top" style={{width:"80px",height:"80px"}} src={props.url} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
           {props.description}
          </p>
          <a href="#" className="btn btn-primary">
            Buy now
          </a>
        </div>
      </div>
    </div>
  );
};
export default Card;
