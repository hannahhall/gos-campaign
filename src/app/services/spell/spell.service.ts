import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Spell } from '../../class/spell';

@Injectable({
  providedIn: 'root'
})
export class SpellService {
  private _spells: BehaviorSubject<Spell[]> = new BehaviorSubject([]);
  private _spell: BehaviorSubject<Spell> = new BehaviorSubject(new Spell({}))

  constructor(private http: HttpClient) {
    this.loadInitialData();
  }

  get spells() {
    return this._spells.asObservable();
  }

  get spell() {
    return this._spell.asObservable();
  }

  getAllSpells() {
    return this.http.get(`api/spells/`);
  }

  loadInitialData() {
    this.getAllSpells().subscribe(
      (res: any) => {
        let spells = res.map((spell: any) =>
          new Spell(spell)
        );
        this._spells.next(spells);
      },
      err => console.log('Error getting spells', err)
    );
  }

  setSpell(id: number) {
    return this.http.get(`api/spells/${id}`).subscribe(
      (res: any) => {
        let spell = new Spell(res);
        this._spell.next(spell);
      }
    )
  }
}
