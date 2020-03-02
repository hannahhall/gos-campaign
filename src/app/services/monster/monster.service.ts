import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Monster } from 'src/app/class/monster/monster';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {
  private _monsters: BehaviorSubject<Monster[]> = new BehaviorSubject([]);
  private _monster: BehaviorSubject<Monster> = new BehaviorSubject(new Monster({}))

  constructor(private http: HttpClient, private router: Router) {
    this.loadInitialData();
  }

  get monsters() {
    return this._monsters.asObservable();
  }

  get monster() {
    return this._monster.asObservable();
  }

  getAllMonsters() {
    return this.http.get(`api/monsters/`);
  }

  loadInitialData() {
    this.getAllMonsters().subscribe(
      (res: any) => {
        let monsters = res.map((monster: any) =>
          new Monster(monster)
        );
        this._monsters.next(monsters);
      },
      err => console.log('Error getting monsters', err)
    );
  }

  setMonster(id: number) {
    return this.http.get(`api/monsters/${id}`).subscribe(
      (res: any) => {
        let monster = new Monster(res);
        this._monster.next(monster);
      }
    )
  }
}

