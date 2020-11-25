import React from 'react';
import MenuItem from '../components/menuItem';

const menuList = ['test1','test2','test3'];

const Aside = () => {


  return (
    <>
      <div className="aside">
      {menuList.map((v,i) => {
        return <MenuItem key={i} menu={v}/>
      })}
      </div>
    </>
  )
}

export default Aside;