import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Fight } from 'src/app/class/fight/fight';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Monster } from 'src/app/class/monster/monster';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class FightService {
  private _fights: BehaviorSubject<Fight[]> = new BehaviorSubject([]);
  private _fight: BehaviorSubject<Fight> = new BehaviorSubject(new Fight({}))

  constructor(private http: HttpClient, private userService: UserService) { }

  get monsters() {
    return this._fights.asObservable();
  }

  get monster() {
    return this._fight.asObservable();
  }

  createFight(fight: Fight) {
    console.log(fight);
    this.http.post('api/fights/', {
      name: fight.name,
      challenge_rating: fight.challengeRating,
      members: fight.members.map((member: Monster) => ({
        monster: {
          id: member.id,
          name: member.name,
          current_hp: member.currentHp
        },
        initiative_order: member.initiative
      })),
    },
    {
      headers: new HttpHeaders()
      .set('Authorization',  `JWT ${this.userService.token}`)
    }
    ).subscribe(res => {
      console.log(res)
    })
  }
}
