import { Component, OnDestroy, OnInit } from '@angular/core';
import { CounterState, UserState } from '../../state/app.state';
import { Store } from '@ngrx/store';
import { getCounterSelector, getUserStateModelSelector } from '../../state/app.selectors';
import { Subscription } from 'rxjs';
import { actionDecreaseCounter, actionIncreaseCounter } from 'src/app/state/app.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, OnDestroy {

counterSubscription?:Subscription;
userSubscription?:Subscription


constructor(private store:Store<CounterState>,private userStore:Store<UserState>)
{

}

 increaseCounter()
 {
  this.store.dispatch(actionIncreaseCounter());
 }
 decreaseCounter()
 {
  this.store.dispatch(actionDecreaseCounter());
 }


  ngOnDestroy(): void {
    this.counterSubscription?.unsubscribe();
    this.userSubscription?.unsubscribe();
  }
  ngOnInit(): void {
   

   this.counterSubscription= this.store.select(getCounterSelector).subscribe(x=>{
      console.log("counter",x);
    })

  this.userSubscription=  this.userStore.select(getUserStateModelSelector).subscribe(x=>{
      console.log("counter",x)
    })

  }

}
