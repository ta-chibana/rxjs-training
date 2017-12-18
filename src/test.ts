import { Observable } from 'rxjs/Rx'

const add = (a: number, b: number): number => {
  return a + b
}

const multi = (a: number, b: number): number => {
  return a * b
}

console.log(add(1, 3))
console.log(multi(4, 2))

Observable.of('HelloWorld').subscribe(text => console.log(text))
