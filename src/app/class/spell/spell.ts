export class Spell {
    id: number;
    created?: string;
    name: string;
    description?: string;
    level?: string;
    castingTime?: string;
    range?: string;
    components?: string;
    duration?: string;
    school?: string;
    attackSave?: string;
    damageEffect?: string;
    higherLevels?: string;

    constructor(props: any) {
        this.id = props.id;
        this.created = props.created;
        this.name = props.name;
        this.description = props.description;
        this.level = props.level;
        this.castingTime = props.castingTime;
        this.range = props.range;
        this.components = props.components;
        this.duration = props.duration;
        this.school = props.school;
        this.attackSave = props.attackSave;
        this.damageEffect = props.damageEffect;
        this.higherLevels = props.higherLevels;
    }
}
