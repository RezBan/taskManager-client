import React, { Component } from 'react'
import _ from 'lodash'

class Select extends Component {
  renderOptions = (items) => {
    const { handleSelect, name } = this.props
    const options = _.map(items, item => {
      return (
        <option
          key={`id_for_${item.name}`}
          value={item.value}
          onClick={() => handleSelect(item.value, name)}
        >
          {item.name}
        </option>
      )
    })
    return options
  }

  render() {
    const { items, readOnly } = this.props
    return (
      <select
        className="form-control"
        disabled={readOnly}
      >
        {this.renderOptions(items)}
      </select>
    )
  }
}

export default Select
