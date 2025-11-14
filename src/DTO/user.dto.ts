export class SuccessfulLoginDTO {


    constructor(
        private _email: string,
        private _firstName: string,
        private _lastName: string,
        private _token: string
    ) { }

    get email() { return this._email }
    get firstName() { return this._firstName }
    get lastName() { return this._lastName }
    get token() { return this._token }
}