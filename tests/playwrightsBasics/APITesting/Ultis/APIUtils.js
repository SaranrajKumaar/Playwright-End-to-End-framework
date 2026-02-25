export class APIUtlis {
  constructor(apiContext,playLoad) {
    this.apiContext=apiContext
    this.playLoad=playLoad

  }

  async getToken() {

    const loginResponse = await this.apiContext.post(
      "https://rahulshettyacademy.com/api/ecom/auth/login",
      {
        data:this.playLoad,
      },
    );
    //assertion for response
    //expect(loginResponse.ok()).toBeTruthy();
    const responseJson = await loginResponse.json();
    const tokenValue = responseJson.token;
    console.log(tokenValue);
    return tokenValue;
  }

  async getOrder(orderPlayload){
    let response ={};
    response.token =await this.getToken();
      const orderRespone=await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",{
        data:orderPlayload,
        headers :{
                
            'Authorization':response.token,
            'content-type':"application/json",
        },
      })
      const responeOrderJson =await orderRespone.json();
      console.log(responeOrderJson);
      let orderID =responeOrderJson.orders[0];
      console.log(orderID)
      response.orderID =orderID;
      return response;
  }
}
