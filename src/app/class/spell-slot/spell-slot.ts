import { Spell } from '../spell/spell';

export class SpellSlot {
    id:number;
    created:string;
    spells: Spell[];
    level: number;
    max: number;
    used: number;

    constructor(props:any) {
        this.id = props.id;
        this.created = props.created;
        this.spells = props.spells;
        this.level = props.level;
        this.max = props.max;
        this.used = props.used;
    }
}
