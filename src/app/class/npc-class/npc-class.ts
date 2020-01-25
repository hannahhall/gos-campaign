import { AbilityScore } from '../ability-score/ability-score';
import { Feature } from '../feature/feature';

export class NpcClass {
    id: number;
    name: string;
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

    constructor(props: any) {
        this.id = props.id;
        this.name = props.name;
        this.description = props.description;
        this.armorClass = props.armorClass;
        this.maxHitPoints = props.maxHitPoints;
        this.speed = props.speed;
        this.str = props.str;
        this.dex = props.dex;
        this.con = props.con;
        this.int = props.int;
        this.wis = props.wis;
        this.cha = props.cha;
        this.savingThrows = props.savingThrows;
        this.damageImmunities = props.damageImmunities;
        this.damageResistance = props.damageResistance;
        this.conditionImmunities = props.conditionImmunities;
        this.senses = props.senses;
        this.languages = props.languages;
        this.challenge = props.challenge;
        this.features = props.features;


    }

}
