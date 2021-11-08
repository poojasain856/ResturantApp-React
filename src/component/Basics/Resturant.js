import React, {useState} from 'react';
import "./style.css";
import Menu from './menuApi.js';
import MenuCard from './MenuCard.js';
import Navbar from './Navbar';

const uniqueList = [
    ...new Set (
    Menu.map((curElem)=>{
    return curElem.category;
})
),"All"
]
 console.log(uniqueList)

const Resturant = () => {
const [menuData,setMenuData] = useState(Menu);
console.log(Menu)

// eslint-disable-next-line
const[menuList, setMenuList]=useState(uniqueList);
console.log(uniqueList)


const filterItem=(category)=>{
    if(category==="All"){
        setMenuData(Menu);
        return;
    }
    const upDatedList=Menu.filter((curElem)=>{
        return curElem.category===category;
    })
setMenuData(upDatedList);
};

    return (
        <>
      <Navbar filterItem={filterItem}menuList={menuList}/>
     <MenuCard menuData={menuData}/>
        </>
    )
}

export default Resturant
