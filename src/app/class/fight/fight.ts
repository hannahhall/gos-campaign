import { Monster } from '../monster/monster';

export class Fight {
    id: number;
    name: string;
    members: Monster[];
    challengeRating: number;

    constructor(props) {
        this.id = props.id;
        this.name = props.name;
        this.challengeRating = props.challengeRating;

        if (props.members) {
            this.members = props.members.map(member => new Monster(member));
        }
    }
}
