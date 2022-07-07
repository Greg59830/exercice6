import { Pipe, PipeTransform } from "@angular/core";
import { Server } from "./server.model";

@Pipe({
    name: 'camelPipe'
})
export class CamelPipe implements PipeTransform {
    transform(value: string, ...args: any[]) {
        let resultArray = []
        let baseArray = value.split(' ')

        for (let i = 0; i < baseArray.length; i++) {
            if (i == 0) resultArray.push(baseArray[i].toLowerCase())
            else resultArray.push(baseArray[i].substring(0,1).toUpperCase() + baseArray[i].substring(1, baseArray[i].length).toLowerCase())
        }

        return resultArray.join('')
    }
}

@Pipe({
    name: 'trimPipe'
})
export class TrimPipe implements PipeTransform {
    transform(value: string, ...args: any[]) {
        return value.length > 10 ? value.substring(0, 10) + "..." : value
    }
}