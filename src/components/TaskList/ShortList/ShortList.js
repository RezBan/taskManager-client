import React from 'react'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import { taskPriority, taskStatus } from '../../../helpers/constants'

function ShortList({ tasks, status, priority, sortBy }) {
  return (
    <div>
      <table className="table table-striped text-center">
        <thead>
          <tr>
            <td>Task name</td>
            <td>
              Priority
                <span 
                  className="ml-1 link" 
                  onClick={()=>sortBy('priority')}
                >
                  {priority
                    ? <span>
                        &uarr;
                      </span> 
                    : <span>
                        &darr;
                    </span>
                  }
              </span>
            </td>
            <td>
              Status
              <span 
                  className="ml-1 link" 
                  onClick={()=>sortBy('status')}
                >
                  {status
                    ? <span>
                        &uarr;
                      </span> 
                    : <span>
                        &darr;
                    </span>
                  }
              </span>
            </td>
          </tr>
        </thead>
        <tbody>
          {_.map(tasks, item => {
            return (
              <tr key={`task_${item.id}`}>
                <td>
                  <Link to={`/task/${item.id}`}>
                    {item.taskName}
                 </Link> 
                </td>
                <td>{taskPriority[item.priority].name}</td>
                <td>{taskStatus[item.status].name}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ShortList
