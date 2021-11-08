import {React,useState,useEffect} from "react";
import { getData } from "../services/dataService";
import {Table} from "react-bootstrap"
import "../components/showData.css"
import { useSelector, } from "react-redux";

export default function ShowData()
{
    const bids=useSelector(state=>state.data.bids);
    const asks=useSelector(state=>state.data.asks);
   // const [bids,setBids]=useState("");
    //const [asks,setAsks]=useState("");
    const [start,setStart]=useState(true);
    useEffect(()=>{
    //     async function fetchData()
    //     {try
    //         {
    //             const res =await getData();
    //             console.log(res)
    //             setBids(res["bids"]);
    //             setAsks(res["asks"]);
    //             debugger;
    //             console.log(bids);
    //             console.log(asks);
    //             setStart(false);
    //         }
    //         catch(e)
    //         {
    //             setBids([]);
    //         }
            

    //     }     
    //  fetchData();
               setStart(false);

    },[])
    if (start)
    return(<div>hello</div>) 
else
    return(
    <Table striped bordered hover>
         <thead>
               <tr>
              <th id="txt">BTC-USD</th>
              </tr>
         </thead>
         <tbody>
             <tr>
                 <td>
                 <Table id="green" striped bordered hover>
              <thead>
               <tr>
              <th>bid qty</th>
              <th>bid price</th>
              </tr>
         </thead>
         {bids.map(bid=><tbody>
             <tr>
             <td>
            {bid[1]}
            </td>
            <td>
            {bid[0]}
            </td>
             </tr>
            
            </tbody>)}
         )
             </Table>
                 </td>
                 <td>
                 <Table id="red" striped bordered hover>
                 <thead>
                  <tr>
                 <th>ask qty</th>
                 <th>ask price</th>
                 </tr>
            </thead>
            {asks.map(ask=><tbody>
                <tr>
                <td>
               {ask[1]}
               </td>
               <td>
               {ask[0]}
               </td>
                </tr>
               </tbody>)}
            )
                </Table>
                 </td>
             </tr>
         </tbody>
            
                 
                </Table>
            
    )
}