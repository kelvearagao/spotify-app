import { millisToMinutesAndSeconds } from './time'

describe('millisToMinutesAndSeconds', () => {
    it('Should convert 60000 to 1:00', () => {
        expect(millisToMinutesAndSeconds(60000)).toBe('1:00')
    })

    it('Should convert 72000 to 1:12', () => {
        expect(millisToMinutesAndSeconds(72000)).toBe('1:12')
    })
})