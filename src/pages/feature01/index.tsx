import { action } from 'mobx'
import { observer } from 'mobx-react'
import { fStore1 } from '@/store'

import './style.less'

/**
 * 讲解点：
 * 1. constructor要声明 makeObservable(this)
 * 2. 全局mobx配置 enforceActions
 */
const TodoLit = observer(() => {
  return (
    <div className="contain">
      <div className="head">TodoList({fStore1.totalNumber})</div>
      <div className="body">
        <ul>
          { fStore1.todoList.map((item, key) => <li key={key}>{item}</li>)}
        </ul>
      </div>
      <div className="foot">
        <input
          type="text"
          defaultValue={fStore1.val}
          onChange={action((e) => fStore1.val = e.target.value)}
        />
        <button onClick={() => fStore1.addTodo(fStore1.val)}>+ADD</button>
      </div>
    </div>
  )
})

export default TodoLit