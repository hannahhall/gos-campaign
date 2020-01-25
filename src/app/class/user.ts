export class User {
    username: string;
    isSuperuser: boolean;

    constructor(props: any) {
        this.username = props.username;
        this.isSuperuser = props.is_superuser;
    }
}
