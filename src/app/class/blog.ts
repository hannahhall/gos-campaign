export class Blog {
    id:number;
    title:string;
    image?:string;
    description?:string;
    type?:string;

    constructor(props: any) {
        this.id = props.id;
        this.title = props.title;
        this.image = props.image || undefined;
        this.description = props.description || undefined;
        this.type = props.type || undefined;
    }
}
