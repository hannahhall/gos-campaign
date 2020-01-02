import { NpcClass } from './npc-class';

export class Npc {
    id: number;
    name: string;
    bio: string;
    race: string;
    alignment: string
    personalityTraits: string;
    ideals: string;
    bonds: string;
    flaws: string;
    notes: string;
    secrets: string;
    npcClass: NpcClass;
    currentHp: number;

    constructor(props: any) {
        this.id = props.id;
        this.name = props.name;
        this.bio = props.bio;
        this.race = props.race;
        this.alignment = props.alignment;
        this.personalityTraits = props.personalityTraits;
        this.ideals = props.ideals;
        this.bonds = props.bonds;
        this.flaws = props.flaws;
        this.notes = props.notes;
        this.secrets = props.secrets;
        this.npcClass = props.npcClass;
        this.currentHp = props.currentHp;
    }
}
