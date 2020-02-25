import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Npc } from '../../class/npc/npc';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NpcService {
  private _npcs: BehaviorSubject<Npc[]> = new BehaviorSubject([]);
  private _npc: BehaviorSubject<Npc> = new BehaviorSubject(new Npc({}))

  constructor(private http: HttpClient, private router: Router) {
    this.loadInitialData();
  }

  get npcs() {
    return this._npcs.asObservable();
  }

  get npc() {
    return this._npc.asObservable();
  }

  getAllNpcs() {
    return this.http.get(`api/npcs/`);
  }

  loadInitialData() {
    this.getAllNpcs().subscribe(
      (res: any) => {
        let npcs = res.map((npc: any) =>
          new Npc(npc)
        );
        if (this.router.url.includes('npc')) {
          const id = this.router.url.split('/').pop()
          this.setNpc(parseInt(id));
        }
        this._npcs.next(npcs);
      },
      err => console.log('Error getting npcs', err)
    );
  }

  getNpc(id: number) {
    return this.http.get(`api/npcs/${id}`).subscribe(
      (res: any) => {
        let npc = new Npc(res);
        return npc;
      }
    )
  }

  setNpc(id: number) {
    return this.http.get(`api/npcs/${id}`).subscribe(
      (res: any) => {
        let npc = new Npc(res);
        this._npc.next(npc);
      }
    )
  }
}
