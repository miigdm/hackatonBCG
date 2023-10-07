import request from './request'

export default (user )=>{
   let body = {
        "query": "mutation user($fullname: String!, $email: String!, $password: String!, $phoneNumber: String!, $direction: String!, $businessCategory: String!, $roleId: Int!) {\n  createUser(\n    input: {user: {fullname: $fullname, email: $email, password: $password, phoneNumber: $phoneNumber, direction: $direction, businessCategory: $businessCategory, roleId: $roleId}, clientMutationId: \"id\"}\n  ) {\n    clientMutationId\n    user {\n      id\n      roleId\n      fullname\n    }\n  }\n}\n",
        "variables": user,
        "operationName": "user"
    }
    return request(body)
}


