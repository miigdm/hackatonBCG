
export default (user )=>{


    body = {
        "query": "mutation user($fullname: String!, $email: String!, $password: String!, $phoneNumber: String!, $direction: String!, $businessCategory: String!, $roleId: Int!) {\n  createUser(\n    input: {user: {fullname: $fullname, email: $email, password: $password, phoneNumber: $phoneNumber, direction: $direction, businessCategory: $businessCategory, roleId: $roleId}, clientMutationId: \"id\"}\n  ) {\n    clientMutationId\n    user {\n      id\n    }\n  }\n}\n",
        "variables": user,
        "operationName": "user"
    }

    fetch("https://bcg-backend.malba.cl/graphql", {
  "headers": {
    "accept": "application/json",
    "accept-language": "es-CL,es;q=0.9",
    "content-type": "application/json",
    "sec-ch-ua": "\"Google Chrome\";v=\"117\", \"Not;A=Brand\";v=\"8\", \"Chromium\";v=\"117\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin"
  },
  "referrer": "https://bcg-backend.malba.cl/graphiql",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": JSON.stringify(body),
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
})
.then(response => response.json())

}


