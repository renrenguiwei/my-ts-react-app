import { useEffect, useCallback } from "react";

import { action, autorun, reaction, when } from 'mobx'
import { observer } from 'mobx-react'
import { fStore3 } from '@/store'

import './style.less'

/**
 * 讲解点：
 * 1. makeObservable与makeAutoObservable自动推断代码量对比
 */
const TodoLit = observer(() => {

  useEffect(() => {
    // 注意点：generator与async await都可用于取值
    // fStore3.fetchData()
    fStore3.fetchDataAsync().then()
    callback()
  }, [])

  // stopAutorun()

  const callback = useCallback(() => {

    /**
     * 1. 创建时会自动触发一次
     * 2. 观察对象变化时，会自动触发
     */
    autorun(() => {
      console.log('autorun init')
      if (fStore3.val === '1111') {
        console.log('autorun', 'val 1111', fStore3.val)
      }
    })

    /**
     * 1. 不会自动执行
     * 2. 只有当表达式值变化那一次，才触发
     */
    reaction(
      // () => fStore3.val,
      () => fStore3.todoList.length >= 10,
      (input: any) => {
        if (input) {
          console.log('reaction >= 10')
        } else {
          console.log('reaction < 10')
        }
        console.log('reaction change')
      }
    )

    /**
     * 1. 当preditcate触发返回true，会立即执行下面effect
     * 2. 销毁when自执行函数，以后不再触发
     */

    when(
      // () => fStore3.totalNumber > 10,
      () => fStore3.val === '清除',
      () => dispose(),
    )

    const dispose = () => {
      fStore3.todoList = []
    }

  }, [])

  return (
    <div className="contain">
      <div className="head">TodoList({fStore3.totalNumber}) ({fStore3.totalNumber2}){fStore3.typeStatus}</div>
      <div className="body">
        <ul>
          { fStore3.todoList.map((item, key) => <li key={key}>{key+1}  {item}</li>)}
        </ul>
      </div>
      <div className="foot">
        <input
          type="text"
          value={fStore3.val}
          onChange={action((e) => fStore3.val = e.target.value)}
        />
        <button onClick={() => fStore3.addTodo(fStore3.val)}>+ADD</button>
      </div>
    </div>
  )
})

export default TodoLit