interface IEmp {
    id: number,
    empName: string,
    age?: number, // optional property,
    readonly ph: number
}

const employee: IEmp = {
    id: 1,
    empName: 'Jack',
    ph: 0
}

// interface with params and return type
interface MathFunc {
    (x: number, y: number) : number
}

const add: MathFunc =(x: number, y: number) : number => x + y;