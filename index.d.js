import * as moment from 'moment';

declare module 'moment' {
    interface Duration {
        literal(): string;
    }
}

export = moment;
