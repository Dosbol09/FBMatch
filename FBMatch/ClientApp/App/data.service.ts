import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Match } from './match';

@Injectable()
export class DataService {

    private url = "/api/matches";

    constructor(private http: HttpClient) {
    }

    getMatches() {
        return this.http.get(this.url);
    }

    createMatch(match: Match) {
        return this.http.post(this.url, match);
    }
    updateMatch(match: Match) {

        return this.http.put(this.url + '/' + match.matchId, match);
    }
    deleteMatch(matchId: number) {
        return this.http.delete(this.url + '/' + matchId);
    }
}