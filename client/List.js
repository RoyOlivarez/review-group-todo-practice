import React from 'react';

function List(props) {
  return (
    <div>
      <h3>
        List
      </h3>
        {props.list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
    </div>
  )
}

export default List;