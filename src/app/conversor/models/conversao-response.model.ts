export class ConversaoResponse {

    constructor(
        public success: boolean,
        public timestamp: string,
        public base: string,
        public date: string,
        public rates: any
    ) {}
}
