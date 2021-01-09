# A Restful Api With Node.js Express & MongoDB

## Install

    npm install

## Run the app

    npm start

## Run the tests

    npm start

# REST API

The REST API to the example app is described below.

## Get list of Things

### Request

`GET /posts/`

    curl -i -H 'Accept: application/json' http://localhost:3000/posts/

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2

    []

## Create a new Thing

### Request

`POST /posts/`

    curl -i -H 'Accept: application/json' -d 'name=Foo&status=new' http://localhost:3000/posts

### Response

    HTTP/1.1 201 Created
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 201 Created
    Connection: close
    Content-Type: application/json
    Location: /thing/1
    Content-Length: 36

    [
      {
          "_id": "5ff977e0872d774e40a86384",
          "title": "Update title",
          "description": "This is test desciption",
          "date": "2021-01-09T09:31:12.563Z",
          "__v": 0
      }
  ]

## Get a specific Thing

### Request

`GET /posts/:id`

    curl -i -H 'Accept: application/json' http://localhost:3000/posts/5ff977e0872d774e40a86384

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 36

    [
      {
          "_id": "5ff977e0872d774e40a86384",
          "title": "Update title",
          "description": "This is test desciption",
          "date": "2021-01-09T09:31:12.563Z",
          "__v": 0
      }
  ]

## Get list of Things again

### Request

`GET /posts/`

    curl -i -H 'Accept: application/json' http://localhost:3000/posts/

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:31 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 74

    [
      {
          "_id": "5ff977e0872d774e40a86384",
          "title": "Update title",
          "description": "This is test desciption",
          "date": "2021-01-09T09:31:12.563Z",
          "__v": 0
      }
  ]

## Change a Thing

### Request

`PATCH /posts/:id`

    curl -i -H 'Accept: application/json' -X PUT -d 'name=Foo&status=changed2' http://localhost:3000/posts/1

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:31 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 41

    [
        {
            "_id": "5ff977e0872d774e40a86384",
            "title": "Update title",
            "description": "This is test desciption",
            "date": "2021-01-09T09:31:12.563Z",
            "__v": 0
        }
    ]


## Delete a Thing

### Request

`DELETE /post/:id`

    curl -i -H 'Accept: application/json' -X DELETE http://localhost:3000/post/5ff977e0872d774e40a86384

### Response

    HTTP/1.1 204 No Content
    Date: Thu, 24 Feb 2011 12:36:32 GMT
    Status: 204 No Content
    Connection: close
    
    {
    "n": 1,
    "opTime": {
        "ts": "6915704568483416017",
        "t": 2
    },
    "electionId": "7fffffff0000000000000002",
    "ok": 1,
    "$clusterTime": {
        "clusterTime": "6915704568483416017",
        "signature": {
            "hash": "31t8I6wJDbGhb7EIPN3/6HqCC10=",
            "keyId": "6915149104657989635"
        }
    },
    "operationTime": "6915704568483416017",
    "deletedCount": 1
}


## Try to delete same Thing again

### Request

`DELETE /thing/:id`

    curl -i -H 'Accept: application/json' -X DELETE http://localhost:3000/thing/5ff977e0872d774e40a86384

### Response

    HTTP/1.1 404 Not Found
    Date: Thu, 24 Feb 2011 12:36:32 GMT
    Status: 404 Not Found
    Connection: close
    Content-Type: application/json
    Content-Length: 35

    {
    "n": 0,
    "opTime": {
        "ts": "6915704632907924463",
        "t": 2
    },
    "electionId": "7fffffff0000000000000002",
    "ok": 1,
    "$clusterTime": {
        "clusterTime": "6915704632907924463",
        "signature": {
            "hash": "eQJjh3E/mGS5EP0tczr3Qvkfiaw=",
            "keyId": "6915149104657989635"
        }
    },
    "operationTime": "6915704632907924463",
    "deletedCount": 0
}
