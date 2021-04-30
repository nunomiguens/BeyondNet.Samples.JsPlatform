class UserModel {
    constructor(
        public id: string,
        public name: string,
        public userName: string,
        public password: string,
        public email: string,
    ) {}
}

export const primaryKeyPropertyName: keyof UserModel = 'id';

export default UserModel;
