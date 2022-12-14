const Card = (props) => {
    return (
      <div className="card" style={{ width: "18rem",height:"22rem" ,border:"2px solid #a79c9c",padding:"4px"}}>
        <img className="card-img-top" style={{width:"80px",height:"80px"}} src={props.url} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text" style={{minHeight:'40px'}}>
           {props.name}
          </p>
          <button className="btn btn-primary"  >
            {props.children}
          </button>
        </div>
      </div>
  );
};
export default Card;
