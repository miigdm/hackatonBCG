import request from './request'

export default (obj )=>{
   let body = {
    "query": "mutation user($date: Datetime!, $actionId: Int!, $orderId: Int!, $userId: Int!) {\n  createTransaction(\n    input: {transaction: {date: $date, userId: $userId, orderId: $orderId, actionId: $actionId}}\n  ) {\n    clientMutationId\n    transaction {\n      id\n    }\n  }\n}\n",
    "variables":  obj,
    "operationName": "user"
}
    return request(body)
}




