export interface BattleStats {
  strength: number;
  speed: number;
  intelligence: number;
  durability: number;
}

export interface MatchupOdds {
  opponent: string;
  winProbability: number;
  notes: string;
}

export interface CharacterData {
  id: number;
  name: string;
  firstAppearance: string;
  aliases: string[];
  powers: string[];
  isVillain: boolean;
  baseOfOperations: string;
  stats: BattleStats;
  matchups: MatchupOdds[];
}

export class MockDCAPI {
  private _dcCharacterAPI: CharacterData[] = [
    {
      id: 1,
      name: "Superman",
      firstAppearance: "Action Comics #1 (1938-06-01)",
      aliases: ["Clark Kent", "Man of Steel", "Kal-El", "Last Son of Krypton"],
      powers: [
        "Super Strength",
        "Flight",
        "Invulnerability",
        "Heat Vision",
        "Super Speed",
      ],
      isVillain: false,
      baseOfOperations: "Metropolis",
      stats: {
        strength: 10,
        speed: 10,
        intelligence: 8,
        durability: 10,
      },
      matchups: [
        {
          opponent: "Lex Luthor (In Power Suit)",
          winProbability: 0.85,
          notes:
            "Superior physicals generally overcome tech, but Kryptonite is a risk.",
        },
        {
          opponent: "Doomsday",
          winProbability: 0.3,
          notes:
            "Pure physical threat, requires extreme measures, and fight often ends in mutual devastation.",
        },
      ],
    },
    {
      id: 2,
      name: "Batman",
      firstAppearance: "Detective Comics #27 (1939-03-30)",
      aliases: ["Bruce Wayne", "The Dark Knight", "World's Greatest Detective"],
      powers: [
        "Peak Human Conditioning",
        "Genius-level Intellect",
        "Master Martial Artist",
        "Advanced Gadgetry",
      ],
      isVillain: false,
      baseOfOperations: "Gotham City",
      stats: {
        strength: 7,
        speed: 7,
        intelligence: 10,
        durability: 6,
      },
      matchups: [
        {
          opponent: "The Joker",
          winProbability: 0.95,
          notes:
            "Tactical advantage and skill always prevail, but Joker's unpredictability is a factor.",
        },
        {
          opponent: "Bane (Venom Enhanced)",
          winProbability: 0.6,
          notes:
            "Bane's strength is a huge challenge; victory relies on strategy and exploiting weaknesses.",
        },
      ],
    },
    {
      id: 3,
      name: "Wonder Woman",
      firstAppearance: "All Star Comics #8 (1941-10-25)",
      aliases: ["Diana Prince", "Princess of Themyscira", "Amazon"],
      powers: [
        "Super Strength",
        "Flight",
        "God-like Durability",
        "Lasso of Truth",
        "Amazonian Combat Skill",
      ],
      isVillain: false,
      baseOfOperations: "Themyscira / Washington D.C.",
      stats: {
        strength: 9,
        speed: 9,
        intelligence: 9,
        durability: 9,
      },
      matchups: [
        {
          opponent: "Cheetah",
          winProbability: 0.75,
          notes:
            "Cheetah's speed and claws are a challenge, but Diana's strength and gear usually win.",
        },
        {
          opponent: "Ares (God of War)",
          winProbability: 0.5,
          notes:
            "Power levels are comparable; fight is often a test of will and ideological conflict.",
        },
      ],
    },
  ];

  public addCharacter(characterData: CharacterData): void {
    this._dcCharacterAPI.push(characterData);
  }

  public removeCharacterByName(name: string): void {
    const trimmedName = name.trim().toLowerCase();

    const indexOfName = this._dcCharacterAPI.findIndex(
      (c) => c.name.toLowerCase() === trimmedName
    );

    if (indexOfName !== -1) {
      this._dcCharacterAPI.splice(indexOfName, 1);
    }
  }

  public getBooks(): CharacterData[] {
    return this._dcCharacterAPI;
  }

  public getBook(id: number): CharacterData | undefined {
    return this._dcCharacterAPI.find((d) => d.id === id);
  }
}
