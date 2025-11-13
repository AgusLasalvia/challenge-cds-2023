export class SuccessfulLoginDTO {
    constructor(
        public email: string,
        public firstName: string,
        public lastName: string,
        public token: string,

    ) { }
}