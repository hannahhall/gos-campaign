import { NpcClass } from '../npc-class/npc-class';
import { SpellSlot } from '../spell-slot/spell-slot';

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
    reactions: any;
    spellSlots: SpellSlot[];

    constructor(props: any) {
        if (!props) return;
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
        this.npcClass = new NpcClass(props.npc_class);
        this.currentHp = props.currentHp;
        if (props.spell_slots) {
            this.spellSlots = props.spell_slots.map((slot: any) => new SpellSlot(slot));
        }
    }
}
