import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Match } from './match';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    providers: [DataService]
})
export class AppComponent implements OnInit {

    match: Match = new Match();   // изменяемый товар
    matches: Match[];                // массив товаров
    tableMode: boolean = true;          // табличный режим

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.loadMatches();    // загрузка данных при старте компонента  
    }
    // получаем данные через сервис
    loadMatches() {
        this.dataService.getMatches()
            .subscribe((data: Match[]) => this.matches = data);
    }
    // сохранение данных
    save() {
        if (this.match.matchId == null) {
            this.dataService.createMatch(this.match)
                .subscribe((data: Match) => this.matches.push(data));
        } else {
            this.dataService.updateMatch(this.match)
                .subscribe(data => this.loadMatches());
        }
        this.cancel();
    }
    editMatch(m: Match) {
        this.match = m;
    }
    cancel() {
        this.match = new Match();
        this.tableMode = true;
    }
    delete(m: Match) {
        this.dataService.deleteMatch(m.matchId)
            .subscribe(data => this.loadMatches());
    }
    add() {
        this.cancel();
        this.tableMode = false;
    }
}