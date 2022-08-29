const ListCustomer = () => {
  let listCustomer = [
    {
      title: "Example headline.",
      description: `Note: If you're viewing this page via 
      URL, the "next" and "previous" Glyphicon buttons on the left and
      right might not load/display properly due to web browser
      security rules.`,
      button:'Sign up today',
      url:"https://images.unsplash.com/photo-1533167649158-6d508895b680?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
    },
    {
        title: "Another example headline.",
        description: `Note: If you're viewing this page via 
        URL, the "next" and "previous" Glyphicon buttons on the left and
        right might not load/display properly due to web browser
        security rules.`,
        button:'Sign up today',
        url:"https://images.unsplash.com/photo-1594897030264-ab7d87efc473?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      },
      {
        title: "Another example headline.",
        description: `Note: If you're viewing this page via 
        URL, the "next" and "previous" Glyphicon buttons on the left and
        right might not load/display properly due to web browser
        security rules.`,
        button:'Sign up today',
        url:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
      },
  ];
  

  let carouselId=listCustomer.map((el,index)=>{
    if(index==(listCustomer.length-1)){
        return(
        <li key={index} data-target="#carousel-id" data-slide-to={index} className="active" />

        )
    }
    else{

        return(
            <li  key={index}  data-target="#carousel-id" data-slide-to={index} className="" />
    
        )

    }

  })


  let items= listCustomer.map((el,index)=>{

    if(index==(listCustomer.length-1)){
        return(
            <div className="item active" key={index} >
            <img style={{width:"100%",height:"600px"}}
              data-src="holder.js/900x500/auto/#777:#7a7a7a/text:First slide"
              alt="First slide"
              src={el.url}
            />
            <div className="container">
              <div className="carousel-caption">
                <h1>{el.title}</h1>
                <p>
                {el.description}
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="#" role="button">
                       {el.button}
                  </a>
                </p>
              </div>
            </div>
          </div>

        )
    }
    else{
        return(
            <div className="item" key={index}>
           <img style={{width:"100%",height:"600px"}}
              data-src="holder.js/900x500/auto/#777:#7a7a7a/text:First slide"
              alt="First slide"
              src={el.url}
            />
            <div className="container">
              <div className="carousel-caption">
                <h1>{el.title}</h1>
                <p>
                {el.description}
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="#" role="button">
                       {el.button}
                  </a>
                </p>
              </div>
            </div>
          </div>

        )
        

    }
  

  })

  return (
    <div id="carousel-id" className="carousel slide" data-ride="carousel" style={{margin:"50px"}}>
      <ol className="carousel-indicators">
        {carouselId}
      </ol>
      <div className="carousel-inner">
      
        {items}
      </div>
      <a
        className="left carousel-control"
        href="#carousel-id"
        data-slide="prev"
      >
        <span className="glyphicon glyphicon-chevron-left" />
      </a>
      <a
        className="right carousel-control"
        href="#carousel-id"
        data-slide="next"
      >
        <span className="glyphicon glyphicon-chevron-right" />
      </a>
    </div>
  );
};

export default ListCustomer;
