import React,{useEffect} from 'react'
import './App.css';
import Modal from './modal'
import List from './List';
import database from './firebaseinit';
import Connect from './connect'


function App() {
  const [list, setList] = React.useState();

  useEffect(()=>{

    database.ref('reyhan').once('value', function(snapshot) {
      let getdata = [];
      snapshot.forEach((childSnapshot) => {
        let key = childSnapshot.key;
        let data = childSnapshot.val();

        getdata.push({ key: key, title: data.title, tag: data.tag, time: data.time, date: data.date});     
      });
      setList(getdata);
    });
  },[database.ref('reyhan')])

  return (
    <div className="App bg-gray-50 pt-16">
      <h1 className='text-4xl font-bold pb-8'>Remind Your Daily Activity 🤖</h1>
      <div className='w-10/12 mx-auto bg-white rounded-xl h-full p-12'>
        <Modal />
        {list ? <List data={list} /> : null}
        
      </div>
    </div>
  );
}

export default App;
