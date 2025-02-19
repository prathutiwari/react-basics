import { useEffect, useState } from 'react'
import resList from '../utils/mockData'
import { useParams } from 'react-router'

const RestaurantMenu = () => {
     const paramResId = useParams();
     console.log(paramResId)
     const [resData, setResData] = useState(null)

     const fetchMenu = () => {
          const foundRest = resList.find((res) => res?.info?.id === paramResId?.resId);
          if(foundRest){
               setResData(foundRest);
               console.log(resData)
          }
     }

     useEffect(() => {
          fetchMenu();
     }, [])

     return (
          <div>
               <h3>{resData?.info?.name}</h3>
               <h4>Menu</h4>
               <ul>
                    {
                         resData?.info?.cuisines.map((cus, index) => <li key={index}>{cus}</li>)
                    }
                    <li>Biriyani</li>
                    <li>Burger</li>
               </ul>
          </div>
     )
}

export default RestaurantMenu