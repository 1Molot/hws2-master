// вот вам функция для сохранения объектов в память браузера
// (данные в этом хранилище сохраняться даже при перезагрузке компа):
export function saveState<T>(key: string, state: T) {
    const stateAsString = JSON.stringify(state)
    localStorage.setItem(key, stateAsString)
}

// и вот вам функция для получения сохранённого объекта в памяти браузера:
export function restoreState<T>(key: string, defaultState: T) {
    let state = defaultState
    const stateAsString = localStorage.getItem(key)
    if (stateAsString !== null) state = JSON.parse(stateAsString) as T
    return state
}

// ---------------------------------------------------------------------------------------------------------------
// пример использования:
/*   useEffect(()=>{      //загрузиться после отрисовки
      const a = localStorage.getItem('counterItem')  //получаем значение по ключу 'counterItem'
        const b = a ? JSON.parse(a) : {}    //true / false
        setMinValue(b.min || 0)       //текущие значения в input
        setMaxValue(b.max || 0)
    },[])
type StateType = {
    x: string
    y: number
}

// сохраняем объект типа StateType в ячейке 'test'
saveState<StateType>('test', { x: 'A', y: 1 })

// получаем в переменную state объект из ячейки 'test' или дэфолтный объект если ячейка пуста
const state: StateType = restoreState<StateType>('test', { x: '', y: 0 })
 */
