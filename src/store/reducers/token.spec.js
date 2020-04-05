import reducer, {
    initialState,
    tokenRequest,
    tokenRequestSuccess,
    tokenRequestError
} from './token'

describe('Token reducer', () => {
    it('Should handle the tokenRequest action', () => {
        const result = reducer(undefined, tokenRequest())
        
        expect(result).toEqual({
            ...initialState,
            requestToken: true
        })
    })

    it('Should handle no action', () => {
        const result = reducer(undefined, {})
        
        expect(result).toEqual({
            ...initialState,
        })
    })

    it('Should handle the tokenRequestSuccess action', () => {
        const result = reducer(undefined, tokenRequestSuccess())
        
        expect(result).toEqual({
            ...initialState,
            requestToken: false
        })
    })

    it('Should handle the tokenRequestError action', () => {
        const result = reducer(undefined, tokenRequestError())
        
        expect(result).toEqual({
            ...initialState,
            requestToken: true
        })
    })
})