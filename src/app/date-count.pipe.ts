import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {
  present:Date;
  seconds:number;
  minutes:number;
  hours:number;
  days:number;
  months:number;

  transform(value: Date): any {
    this.present=new Date();
    this.seconds=Math.floor(this.present.getTime()/1000-value.getTime()/1000);
    this.minutes=Math.floor(this.seconds/60);
    this.hours=Math.floor(this.minutes/60);
    this.days=Math.floor(this.hours/24);
    this.months=Math.floor(this.days/30);
    if(this.months > 0){
      if(this.months == 1){
         return this.months + "months back"
      }
      return this.months + "months back"
    }
    if(this.days > 0){
      if(this.days == 1){
        return this.days + "days back"
      }
      return this.days + "days back"
    }
    if (this.hours > 0){
      if(this.hours == 0){
        return this.hours + "hours back"
      }
      return this.hours + "hours back"
    }
    if (this.minutes > 0){
      if(this.minutes==1){
        return this.minutes + "minutes back"
      }
      return this.minutes + "minutes beck"
    }
    if(this.seconds>0){
      if(this.seconds==1){
        return this.seconds + "seconds back"
      }
      return this.seconds +"seconds back"
    }
  }
}
