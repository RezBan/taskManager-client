import React from 'react'
import { Link } from 'react-router-dom'
import InputMask from 'react-input-mask'
import _ from 'lodash'

import Select from '../ui/Select'
import Header from '../Header'

import { taskPriority, taskStatus } from '../../helpers/constants'

function Task ({
  task,
  isShow,
  isUpdate,
  handleChange,
  handleChangeNumber,
  handleSelect,
  savePayment,
  updatePayment,
  changeMode
}) {
    return (
      <div>
        <Header />
        <div className="container mt-3">
          {
            isUpdate && 
            (
              <div className="text-right">
                <button 
                  className="btn btn-danger"
                  onClick={()=>changeMode()}
                >
                  {isShow ? 'Edit task' : 'Show task'}
                </button>
              </div>
            )
          }
          <div className="">
            <span>
              Task name:
            </span>
            <input
              placeholder="Enter task name"
              className="form-control"
              readOnly={isShow}
              name="name"
              value={_.get(task, 'taskName') || ''}
              onChange={e=>handleChange(e, 'taskName')}
            />
          </div>
          <div className="">
            <span>
              Status:
            </span>
            <Select
              readOnly={isShow}
              name="status"
              items={taskStatus}
              handleSelect={handleSelect}
            />
          </div>
          <div className="">
            <span>
              Priority:
            </span>
            <Select
              readOnly={isShow}
              name="priority"
              items={taskPriority}
              handleSelect={handleSelect}
            />
          </div>
          <div className="">
            <span>
              Plain time:
            </span>
            <InputMask
              placeholder="Enter plain time"
              className="form-control"
              readOnly={isShow}
              mask="999h 99min"
              value={_.get(task, 'plainTime') || ''}
              onChange={e => handleChangeNumber(e, 'plainTime')}
            />
          </div>
          <div className="">
            <span>
              Spend time:
            </span>
            <InputMask
              placeholder="Enter spend time"
              className="form-control"
              readOnly={isShow}
              mask="999h 99min"
              value={_.get(task, 'spendTime') || ''}
              onChange={e => handleChangeNumber(e, 'spendTime')}
            />
          </div>
          <div className="">
            <span>
              Description:
            </span>
            <textarea
              placeholder="Enter task description"
              className="form-control"
              readOnly={isShow}
              name="description"
              value={_.get(task, 'description') || ''}
              onChange={e => handleChange(e, 'description')}
            />
          </div>
            <div className="mt-3">
              <Link to="/">
                <button className="btn btn-light">
                  Back
                </button>
              </Link>
              {isUpdate
                ? (<button 
                    className="ml-2 btn btn-primary"
                    onClick={()=>updatePayment()}
                    disabled={isShow}
                  >
                    Update
                  </button>
                  ) 
                : (
                  <button 
                    className="ml-2 btn btn-primary"
                    onClick={()=>savePayment()}
                  >
                    Save
                  </button>
                )
              }
            </div>
          </div>
      </div>
    )
  }

export default Task