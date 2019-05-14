var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Match } from './match';
var AppComponent = /** @class */ (function () {
    function AppComponent(dataService) {
        this.dataService = dataService;
        this.match = new Match(); // изменяемый товар
        this.tableMode = true; // табличный режим
    }
    AppComponent.prototype.ngOnInit = function () {
        this.loadMatches(); // загрузка данных при старте компонента  
    };
    // получаем данные через сервис
    AppComponent.prototype.loadMatches = function () {
        var _this = this;
        this.dataService.getMatches()
            .subscribe(function (data) { return _this.matches = data; });
    };
    // сохранение данных
    AppComponent.prototype.save = function () {
        var _this = this;
        if (this.match.matchId == null) {
            this.dataService.createMatch(this.match)
                .subscribe(function (data) { return _this.matches.push(data); });
        }
        else {
            this.dataService.updateMatch(this.match)
                .subscribe(function (data) { return _this.loadMatches(); });
        }
        this.cancel();
    };
    AppComponent.prototype.editMatch = function (m) {
        this.match = m;
    };
    AppComponent.prototype.cancel = function () {
        this.match = new Match();
        this.tableMode = true;
    };
    AppComponent.prototype.delete = function (m) {
        var _this = this;
        this.dataService.deleteMatch(m.matchId)
            .subscribe(function (data) { return _this.loadMatches(); });
    };
    AppComponent.prototype.add = function () {
        this.cancel();
        this.tableMode = false;
    };
    AppComponent = __decorate([
        Component({
            selector: 'app',
            templateUrl: './app.component.html',
            providers: [DataService]
        }),
        __metadata("design:paramtypes", [DataService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map