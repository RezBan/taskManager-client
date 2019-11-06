import React from 'react'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import MaskedView from '../../ui/MaskedView'
import { taskPriority, taskStatus } from '../../../helpers/constants'

function DetailedList({ tasks, priority, status, sortBy }) {
  return (
    <div>
      <table className="table table-striped text-center">
        <thead>
          <tr>
            <td>Task Name</td>
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
            <td>Plain time</td>
            <td>Spend time</td>
          </tr>
        </thead>
        <tbody>
          {!_.isNil(tasks) 
            ? _.map(tasks, item => {
              return (
                <tr key={`task_${item.id}`}>
                  <td>
                    <Link to={`/task/${item.id}`}>
                      {item.taskName}
                    </Link>
                  </td>
                  <td>{taskPriority[item.priority].name}</td>
                  <td>{taskStatus[item.status].name}</td>
                  <td><MaskedView value={item.plainTime} /></td>
                  <td><MaskedView value={item.spendTime} /></td>
                </tr>
              )
            })
            : <tr>
                <td>
                  <span>There is no tasks, yet</span>
                </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  )
}

export default DetailedList
