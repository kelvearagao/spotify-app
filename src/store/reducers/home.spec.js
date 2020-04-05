import reducer, {
    searchRequest,
    searchRequestSuccess,
    searchRequestError,
    initialState
} from './home'

describe('Home reducer', () => {
    it('Should handle the searchRequest action', () => {
        const result = reducer(undefined, searchRequest('Test'))
        
        expect(result).toEqual({
            ...initialState,
            data: {
                search: 'Test'
            }
        })
    })

    it('Should handle no action', () => {
        const result = reducer(undefined, {})
        
        expect(result).toEqual({
            ...initialState,
        })
    })

    it('Should handle the searchRequestSuccess action', () => {
        const result = reducer({
            ...initialState,
            data: {
                search: 'Test'
            }
        }, searchRequestSuccess({
            albums: {
                items: []
            }
        }))
        
        expect(result).toEqual({
            ...initialState,
            data: {
                search: 'Test',
                'Test': {
                    items: []
                }
            }
        })
    })

    it('Should handle the searchRequestError action', () => {
        const result = reducer(undefined, searchRequestError())
        
        expect(result).toEqual({
            ...initialState,
            isError: true
        })
    })
})