import './App.css';
import ListCustomer from './components/ListCustomer';
import Header from './components/Header';
import Card from './components/Card';
function App() {
  
  return (
    <div className="App">
      
      <Header/>
      <ListCustomer/>     
      <Card title="MAC M1" url="https://ict-imgs.vgcloud.vn/2022/07/15/21/macbook-air-m1-giam-gia-mot-chiec-laptop-dang-dong-tien-bat-gao.jpg" name="Mac m1"></Card>

    </div>
  );
}

export default App;
