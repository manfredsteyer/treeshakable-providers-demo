

export interface Flight {

    id: number;
    from: string;
    to: string;
    date: string; // JSON: ISO-Format: 2017-12-24T17:00:00.00+01:00
    delayed: boolean;

}