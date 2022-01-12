import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { delay, filter, tap } from 'rxjs/operators';
import { ShortnerActions ,addUrlSelector} from 'store';

@Component({
  selector: 'app-shortner',
  templateUrl: './shortner.component.html',
  styleUrls: ['./shortner.component.scss']
})
export class ShortnerComponent implements OnInit {

  
  shortUrl$: Observable<string> = this.store.pipe(
    select(addUrlSelector),
    delay(0),
    tap(products => console.log(products,'products 1000', products)),
  )
  isAdded:boolean=false;
  formGroup: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<any>,
  ) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      longUrl: this.formBuilder.control('', [Validators.required])
    })
  }

  shorten(){
    this.isAdded=true;
    console.log(this.formGroup.value.longUrl);
    const longUrl:string=this.formGroup.value.longUrl
    this.store.dispatch(ShortnerActions.AddUrlAction({longUrl}))
  }

}
