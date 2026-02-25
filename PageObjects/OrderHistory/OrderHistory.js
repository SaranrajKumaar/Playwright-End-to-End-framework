import { expect } from "@playwright/test";

export class OrderHistorys {
    constructor(page) { 
        this.page = page;
        this.getOrderId = page.locator("tbody tr");
    }

    async getOrderID(exceptedOrderID){

        const orderCount = await this.getOrderId.count();
        for(let i=0; i<orderCount; i++){
            const actualOrderID = await this.getOrderId.nth(i).locator("th").textContent();
            const cleanID = actualOrderID.trim();
            console.log(actualOrderID);
            if(actualOrderID === exceptedOrderID){
                await this.getOrderId.nth(i).locator("button").first().click();
                break;
            }

    }
}

}