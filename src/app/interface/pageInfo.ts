export class pageInfo {
    constructor(userId: string, page: string, pageName: string, stampTime: string) {
        this.userId=userId;
        this.page=page;
        this.pageName=pageName;
        this.stayTime=stampTime;
    }

    userId:string;
    page:string;
    pageName:string;
    stayTime:string
}
