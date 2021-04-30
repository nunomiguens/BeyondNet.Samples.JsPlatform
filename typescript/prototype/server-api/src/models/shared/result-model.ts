export enum ResultTypes {
    Error = 'ERROR',
    Data = 'DATA',
}

export interface IResultModel {
    Type: string;
    Code: number;
    Name: string;
    Payload: string;
}

export class ResultModel implements IResultModel {
    Type: ResultTypes;
    Code: number;
    Name: string;
    Payload: string;

    constructor(type: ResultTypes, code: number, name: string, payload: string) {
        this.Type = type;
        this.Code = code;
        this.Name = name;
        this.Payload = payload;
    }
}
