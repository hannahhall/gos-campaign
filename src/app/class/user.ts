export class User {
    username: string;
    isSuperUser: boolean;

    constructor(props: any) {
        this.username = props.username;
        this.isSuperUser = props.isSuperUser;
    }
}
