import './App.css';
import ListCustomer from './components/ListCustomer';
import Header from './components/Header';
import Card from './components/Card';
function App() {
  let handleClick=()=>{
    console.log("Click me!")
  }
  
  return (
    <div className="App">
      <Header />
      <ListCustomer />
      <div className="container">

      <div className="flex">
          <div className="col-sm">
            <Card handleClick={handleClick} title="MAC M1" url="https://ict-imgs.vgcloud.vn/2022/07/15/21/macbook-air-m1-giam-gia-mot-chiec-laptop-dang-dong-tien-bat-gao.jpg" name="Mac m1">
              Buy Now
            </Card>
          </div>
          <div className="col-sm">
            <Card handleClick={handleClick} title="MAC M1" url="https://ict-imgs.vgcloud.vn/2022/07/15/21/macbook-air-m1-giam-gia-mot-chiec-laptop-dang-dong-tien-bat-gao.jpg" name="Mac m1">
            Buy Now
            </Card>
          </div>
          <div className="col-sm">
            <Card handleClick={handleClick} title="MAC M1" url="https://ict-imgs.vgcloud.vn/2022/07/15/21/macbook-air-m1-giam-gia-mot-chiec-laptop-dang-dong-tien-bat-gao.jpg" name="Mac m1">
            Buy Now
            </Card>
          </div>
          <div className="col-sm">
            <Card handleClick={handleClick} title="MAC M1" url="https://ict-imgs.vgcloud.vn/2022/07/15/21/macbook-air-m1-giam-gia-mot-chiec-laptop-dang-dong-tien-bat-gao.jpg" name="Mac m1">
            Buy Now
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
