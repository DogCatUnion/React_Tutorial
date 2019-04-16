import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from'@material-ui/core/TableHead';
import TableBody from'@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme=>({

  root :{
     width: '100%',
     marginTop: theme.spacing.unit*3,
     overflowX : "auto"

  },

  table:{
    minWidth : 1088

  }


}



)

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
    const {classes} = this.props;
     return ( 
       <Paper className ={classes.root}>
       <Table className ={classes.table} >
        <TableHead>
          <TableRow>
            <TableCell>아이디</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>

         <TableBody>
           {customers.map(c =>{ return( <Customer key = {c.id} id={c.id} image={c.image} name={c.name} gender={c.gender} birthday={c.birthday} job={c.job} />);})}
         </TableBody>
       </Table>
       
       </Paper>
    );
  }
}

export default withStyles(styles)(App);
