import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards'
import Counter from './components/Counter';


function App() {
  return (
    <div className="App">

      <Counter />


      {/* <Cards Name="shubham" imageUrl="https://media.istockphoto.com/id/870923074/photo/a-woodpecker-is-sitting-on-a-branch.jpg?s=612x612&w=is&k=20&c=m4pVV_iPPFpfgkttm7WiVzLetk5AFdwy_DZJQCWyHLw=" birds="picoke" href=""/> */}
      <Cards Name="mohan" imageUrl="https://media.istockphoto.com/id/1443082207/photo/middle-spotted-woodpecker-bird-on-the-tree.jpg?s=2048x2048&w=is&k=20&c=2f9UweyPmXXJ1sshIJmSGefG1n9iI_JmLFXxAHdg5nQ=" birds="owl" href=""/>

    </div>
  );
}

export default App;
