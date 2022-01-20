type User = {
    id: number,
    name: string
}


const user : User = {
    id: 1,
    name: 'Jack'
}

// Type assertion

 let cid: any = 1
 // let customerId = <number> cid
 let customerId = cid as number