import  { useRef } from "react";
const AddProduct = (props)=> {
    const title = useRef(0);
    const url = useRef(0);
    const name = useRef(0);
    let handleSubmit=() => {
        let listProductUpdate=props.listProduct;
        let dataUpdate={
            title: title.current.value,
            url:url.current.value,
            name: name.current.value,
        }
        listProductUpdate.push(dataUpdate)
        props.handleProduct([...listProductUpdate])
        
    }
    return(
        <div style={{width: '50%', margin:'auto',padding:"10px",marginBottom:'20px',border:"2px solid rgb(167, 156, 156)"}}>

        <div >
          <legend>Add product</legend>
          <div className="form-group">
            <label >Title</label>
            <input type="text" className="form-control" id="title" placeholder="Input field" ref={title}/>
          </div>
          <div className="form-group">
            <label >Url</label>
            <input type="text" className="form-control" id="url" placeholder="Input field" ref={url}/>
          </div>
          <div className="form-group">
            <label >Name</label>
            <input type="text" className="form-control" id="name" placeholder="Input field" ref={name}/>
          </div>
          <button type="submit" className="btn btn-primary" onClick={()=>{handleSubmit()}} >Submit</button>
        </div>
        </div>
    )

};
export default AddProduct;