import { type } from 'os'

type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never

type ObjectsWithMethodsType<T> = T extends { [key: string]: infer R } ? R : never  

type FunctionType<T> = ObjectsWithMethodsType<T> extends (...args: any) => any ? ObjectsWithMethodsType<T> : never

type ObjectWhithFunctionsType<T> = ReturnType<FunctionType<T>> 


const actionsExamples = {
	add1: () => ({
		type: 'Hi',
		data: {
			name: 'aae'
		}
	}) as const,
	add2: () => ({
		type: 'pop',
		data: {
			name: 'sae'
		}
	}) as const
}

const actionExample: ObjectWhichType<typeof actionsExamples> = {
	type: 'pop',
	data: {
		name: 'sae'
	}

}



export type {
	ObjectWhithFunctionsType
}