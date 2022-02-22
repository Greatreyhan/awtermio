import React from 'react'
import Activity from './activity'

function List({data}) {

  return (
    <div className='mt-8'>
        {data.map(list=>{
            return <Activity key={list.key} id={list.key} title={list.title} time={list.time} tag={list.tag} date={list.date} />
        })}  
    </div>
  )
}

export default List