export class Feature {
    id: number;
    name: string;
    description: string;

    constructor(props: any){
        this.id = props.id;
        this.name = props.name;
        this.description = props.description;
    }
}
