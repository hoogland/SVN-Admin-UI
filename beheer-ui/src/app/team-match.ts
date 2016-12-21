export class TeamMatch {
    id: number;
    team: number;
    teamElo: number;
    datum: string;
    seizoen: number;
    groupId: number;
    competitie: string;
    competitieNr: number;
    tegenstander: string;
    tegenstanderTeam: number;
    tegenstanderElo: number;
    uitwedstrijd: boolean;
    score: number;
    scoreTegenstander: number;
    verslag: string;
    verslagTegenstander: number;
}
