import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"SplitHeaderName"
})
export class SplitHeaderNamePipe implements PipeTransform{
    transform(value: any, ...args: any[]) {
        if(typeof value == 'string' ){            
            return value.replace(/(?=[A-Z])/g,(val)=> ' ' + val);
        }
        return value;
    }

}