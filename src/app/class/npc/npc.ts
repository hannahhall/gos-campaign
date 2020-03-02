import { NpcClass } from '../npc-class/npc-class';
import { SpellSlot } from '../spell-slot/spell-slot';
import { Monster } from '../monster/monster';

export class Npc extends Monster {
    bio: string;
    race: string;
    alignment: string
    personalityTraits: string;
    ideals: string;
    bonds: string;
    flaws: string;
    notes: string;
    secrets: string;

    constructor(props: any) {
        if (!props) return;
        super(props);
        this.bio = props.bio;
        this.race = props.race;
        this.alignment = props.alignment;
        this.personalityTraits = props.personality_traits;
        this.ideals = props.ideals;
        this.bonds = props.bonds;
        this.flaws = props.flaws;
        this.notes = props.notes;
        this.secrets = props.secrets;
    }
}
