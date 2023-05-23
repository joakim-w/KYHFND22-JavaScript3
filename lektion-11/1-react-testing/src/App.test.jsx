import { test, it, expect } from 'vitest'
/*
  steg 1 - beskriva vad testet gör
  steg 2 - rendera / köra våra funktioner
  steg 3 - utföra någon form av event
  steg 4 - försäkra att resultatet blir som förväntat
*/

const func = () => {
  return true
}


it('should return true', () => {
  const result = func()

  expect(result).toBe(true)
})