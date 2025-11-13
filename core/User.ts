export class User {
    constructor(
        public _id: number,
        public firstName: string,
        public lastName: string,
        public password: string
    ) { }
}

export class CreateUserDTO extends User {
    constructor(
        _id: number,
        firstName: string,
        lastName: string,
        password: string
    ) {
        super(_id, firstName, lastName, password)
    }
}

