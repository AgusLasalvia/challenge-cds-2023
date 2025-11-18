export class CreateUserDTO {
    constructor(
        public email: string,
        public firstName: string,
        public lastName: string,
        public password: string
    ) {

    }
}


export class SuccessfulLoginDTO {
    constructor(
        public email: string,
        public firstName: string,
        public lastName: string,
        public token: string
    ) { }
}

export class LoginDTO {
    constructor(
        public email: string,
        public password: string
    ) { }
}