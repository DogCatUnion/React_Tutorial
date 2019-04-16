import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'

const customers = [
  {
    'id' : 1,
    'image' : 'https://placeimg.com/64/64/1',
    'name' : '곽준서',
    'birthday' : '930621',
    'gender' : '남자',
    'job' : '웹 개발자'

    },

  {
   'id' : 2,
   'image' : 'https://placeimg.com/64/64/2',
   'name' : '홍길동',
   'birthday' : '962621',
   'gender' : '남자',
   'job' : '서버 개발자'

  },
  
  {
    'id' : 3,
    'image' : 'https://placeimg.com/64/64/3',
    'name' : '김동일',
    'birthday' : '930121',
    'gender' : '남자',
    'job' : '퍼블리셔'

  } 
]


class App extends Component {

  render() {
     return ( 
       <div>
       {
       customers.map(c =>{
         return(
           <Customer id={c.id} image={c.image} name={c.name} gender={c.gender} birthday={c.birthday} job={c.job} />
         );

       })
      }
       </div>
    );
  }
}

export default App;
