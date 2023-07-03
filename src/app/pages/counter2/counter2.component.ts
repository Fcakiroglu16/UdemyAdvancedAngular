import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { actionDecreaseCounter, actionIncreaseCounter, actionUpdateUserStateModel } from 'src/app/state/app.actions';
import { getCounterSelector } from 'src/app/state/app.selectors';
import { CounterState, UserState } from 'src/app/state/app.state';

@Component({
  selector: 'app-counter2',
  templateUrl: './counter2.component.html',
  styleUrls: ['./counter2.component.css']
})
export class Counter2Component implements OnInit, OnDestroy {

  counterSubscription?:Subscription
  
  constructor(private store:Store<CounterState>,private userStore:Store<UserState>)
  {
  
  }

updateUser()
{
this.userStore.dispatch(actionUpdateUserStateModel({user:{userId:10, userName:"ahmet",userEmail:"ahmet@outlook.com"}}))

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
    }
    ngOnInit(): void {
     
  
     this.counterSubscription= this.store.select(getCounterSelector).subscribe(x=>{
        console.log("counter2",x);
      })
  
    }
  
  }