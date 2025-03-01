export interface Pokemon {
    name: string;
    type: string;
    type2?: string;
    attack: string;
    level: number;
}

export const POKEMON_TYPES: string[] = [
    "normal",
    "fire",
    "water",
    "electric",
    "grass",
    "ice",
    "fighting",
    "poison",
    "ground",
    "flying",
    "psychic",
    "bug",
    "rock",
    "ghost",
    "dragon",
    "dark",
    "steel",
    "fairy"
];
