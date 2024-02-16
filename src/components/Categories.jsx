import React from 'react'

const Categories = ({filterItems}) => {
  return (
    <div className='btnContainer'>
      <button className="filterBtn" onClick={()=> filterItems('breakfast')}>
        breakfast
      </button>
    </div>
  )
}

export default Categories
