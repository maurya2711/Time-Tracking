import React from 'react'
function AssignedTask() {
  return (
    <div className='assigned-task card shadow-lg p-3 mb-5 bg-white rounded'>
        <div className='list-heading card shadow-sm p-3 mb-5 bg-body rounded mt-5'>
            <h6> Assigned Task</h6>
            <p>Here are the task which assigned to you. Please saved them when they complete and make sure to note time.</p>
        </div>
        <div className='list card shadow-sm p-3 mb-5 bg-body rounded'>
        <ul>
            <li>
                Practise Node.js
            </li>
            <li>
                Practise React.js
            </li>
            <li>
                Practise Next.js
            </li>
            <li>
                Practise Vue js.js
            </li>
            <li>
                Practise Nux .js
            </li>
        </ul>
        </div>
    </div>
  )
}

export default AssignedTask