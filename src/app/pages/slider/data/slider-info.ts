import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })
export class sliderInfo {
    id: number;
    name: string;
    message: string;
    type:string = "slider";
}
