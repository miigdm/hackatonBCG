
export default (body) =>{

    return fetch("https://bcg-backend.malba.cl/graphql", {
        "headers": {
          "accept": "application/json",
          "accept-language": "es-CL,es;q=0.9",
          "content-type": "application/json",
        },
        "referrer": "https://bcg-backend.malba.cl/graphiql",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": JSON.stringify(body),
        "method": "POST",
      })
      .then(response => response.json())
      
    }
      