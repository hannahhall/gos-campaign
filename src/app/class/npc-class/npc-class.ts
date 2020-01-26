import { AbilityScore } from '../ability-score/ability-score';
import { Feature } from '../feature/feature';

export class NpcClass {
    id: number;
    name: string;
    shortDescription: string;
    description: string;
    armorClass: number;
    maxHitPoints: number;
    speed: number;
    str: AbilityScore;
    dex: AbilityScore;
    con: AbilityScore;
    int: AbilityScore;
    wis: AbilityScore;
    cha: AbilityScore;
    savingThrows: string;
    damageResistance: string;
    damageImmunities: string;
    conditionImmunities: string;
    senses: string;
    languages: string;
    challenge: number;
    features: Feature[];
    skills: string;
    actions: any;
    reactions: any;

    constructor(props: any) {
        if (!props) return;
        console.log(props)
        this.id = props.id;
        this.name = props.name;
        this.description = props.description;
        this.shortDescription = props.short_description;
        this.armorClass = props.armor_class;
        this.maxHitPoints = props.max_hit_points;
        this.speed = props.speed;
        this.str = props.str;
        this.dex = props.dex;
        this.con = props.con;
        this.int = props.int;
        this.wis = props.wis;
        this.cha = props.cha;
        this.savingThrows = props.saving_throws;
        this.damageImmunities = props.damage_immunities;
        this.damageResistance = props.damage_resistance;
        this.conditionImmunities = props.condition_immunities;
        this.senses = props.senses;
        this.languages = props.languages;
        this.challenge = props.challenge;
        this.features = props.features;
        this.skills = props.skills;
        this.actions = props.actions;
        this.reactions = props.reactions;

    }

}
