import { Character } from '../types';

export function getName(character: Character): string {
    return character.name || character.aliases[0] || 'Unknown';
}
