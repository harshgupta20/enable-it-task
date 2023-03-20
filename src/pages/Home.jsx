import { useEffect, useState } from 'react';
import Card from "../components/Card";
import "../styles/Home.css";

import FetchAPI from '../config/FetchAPI';

const Home = () => {

  const [users, setUsers] = useState([]);

  const [nextPage, setNextPage] = useState(1);
  const [prevPage, setPrevPage] = useState(-1);
  
  useEffect(()=> {
    const handleFetch = async () => {
      const rawData = await FetchAPI(0);
      setUsers(rawData.data.users);
    }
    handleFetch();
  },[])

  
  
  const nextPageResult = async () => {
    const rawData = await FetchAPI(nextPage*10);
    setUsers(rawData.data.users);
    setNextPage(nextPage+1);
    setPrevPage(prevPage+1);
  }
  const previousPageResult = async () => {
    const rawData = await FetchAPI(prevPage*10);
    setUsers(rawData.data.users);
      setNextPage(nextPage-1);
      setPrevPage(prevPage-1);
  }
  return (
    <>
    <div id="home-btn-div">

    {prevPage<0 ? <button id="home-btn" style={{backgroundColor:'grey', color:"white", cursor:'not-allowed'}}>Back</button> : <button id="home-btn" style={{backgroundColor:'green', color:"white"}} onClick={previousPageResult}>Back</button>}
    <button id="home-btn" style={{backgroundColor:'Green', color:"white"}} onClick={nextPageResult}>Next</button>
    </div>
      <table id="home-table">
        <tr id="tr-head">
          <th id="th">ID</th>
          <th id="th">Full Name</th>
          <th id="th">Email</th>
          <th id="th">Email Address</th>
          <th id="th">Phone</th>
          <th id="th">Job Title</th>
          <th id="th">Company</th>
        </tr>
        {
          users.length !== 0 ? users.slice(0, 10).map((data, key) => (
            <tr id="tr-data" key={key}>
              <td id="td">{data.ID}</td>
              <td id="td">{data.FirstNameLastName}</td>
              <td id="td">{data.Email}</td>
              <td id="td">{data.EmailAddress}</td>
              <td id="td">{data.Phone}</td>
              <td id="td">{data.JobTitle}</td>
              <td id="td">{data.Company}</td>
            </tr>
          )) : "Loading... ( If data is not loading kindly ask to API Owner )"
        }
      </table>

      <Card/>
    </>
  );
}

export default Home;
