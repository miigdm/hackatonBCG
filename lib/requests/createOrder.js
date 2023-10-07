import request from './request'

export default (obj )=>{
    console.log(obj)
   
   let body =  {
    "query": "mutation user($date: Datetime!, $category: Int!, $description: String!, $quantity: Int!, $userId: Int!) {\n  createOrder(\n    input: {order: {date: $date, categoryId: $category, description: $description, quantity: $quantity, userId: $userId, availability: true}}\n  ) {\n    clientMutationId\n    order {\n      id\n    }\n  }\n}\n",
    "variables": obj,
    "operationName": "user"
   }
    return request(body)
}
