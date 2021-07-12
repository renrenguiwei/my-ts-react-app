import { action } from 'mobx'
import { observer } from 'mobx-react'
import { fStore2 } from '@/store'

import './style.less'

/**
 * 讲解点：
 * 1. makeObservable与makeAutoObservable自动推断代码量对比
 */
const TodoLit = observer(() => {
  return (
    <div className="contain">
      <div className="head">TodoList({fStore2.totalNumber})</div>
      <div className="body">
        <ul>
          { fStore2.todoList.map((item, key) => <li key={key}>{item}</li>)}
        </ul>
      </div>
      <div className="foot">
        <input
          type="text"
          defaultValue={fStore2.val}
          onChange={action((e) => fStore2.val = e.target.value)}
        />
        <button onClick={() => fStore2.addTodo(fStore2.val)}>+ADD</button>
      </div>
    </div>
  )
})

export default TodoLit