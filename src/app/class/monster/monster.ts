import { NpcClass } from '../npc-class/npc-class';
import { SpellSlot } from '../spell-slot/spell-slot';

export class Monster {
    id: number;
    name: string;
    npcClass: NpcClass;
    currentHp: number;
    spellSlots: SpellSlot[];
    initiative: number;

    constructor(props: any) {
        if (!props) return;

        this.id = props.id;
        this.name = props.name;
        this.npcClass = new NpcClass(props.npc_class);
        this.currentHp = props.current_hp;
        this.initiative = props.initiative;
        if (props.spell_slots) {
            this.spellSlots = props.spell_slots.map((slot: any) => new SpellSlot(slot));
        }
    }
}
