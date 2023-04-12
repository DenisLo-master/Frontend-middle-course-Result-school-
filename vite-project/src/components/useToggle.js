import React, { useEffect, useReducer, useRef } from 'react'
const SET_STATE = "SET_STATE"
const SET_NEXT_VALUE = "SET_NEXT_VALUE"

const initStateSample = {
    value: null,
    currentIndex: -1,
    listValue: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case SET_STATE:
            return {
                ...state,
                listValue: action.initState
            }
        case SET_NEXT_VALUE:
            return {
                ...state,
                currentIndex: action.nextIndex,
                value: action.nextValue
            }
        default:
            throw new Error()
    }
}


export function useUpdateEffect(callback, dependencies) {
    const countRenderRef = useRef(-2)
    useEffect(() => {
        if (countRenderRef.current <= 0) {
            countRenderRef.current = countRenderRef.current + 1
            callback()
            return
        }
        return
    }, [dependencies])
}



export function useToggle(curState) {
    const [state, dispatch] = useReducer(reducer, initStateSample)

    function toggle() {
        if (state.listValue.length) {
            const currentIndex = state.currentIndex
            let nextIndex = currentIndex + 1
            if (nextIndex >= state.listValue.length) {
                nextIndex = 0
            }
            const nextValue = state.listValue[nextIndex]

            dispatch({
                type: SET_NEXT_VALUE,
                nextIndex,
                nextValue
            })
        }
    }

    function setState() {
        let initState = [true, false]
        if (curState) {
            initState = curState
        }
        dispatch({
            type: SET_STATE,
            initState
        })
    }

    useUpdateEffect(() => {
        toggle()
    }, [state])

    useEffect(() => {
        setState()
    }, [])

    const value = state.value

    return [value, toggle]
}
