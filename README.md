# sam-local-sample

This is a sample repository for [aws-sam-local](https://github.com/awslabs/aws-sam-local).

## Preparation

Use `npm` instead of `yarn` because `yarn global add aws-sam-local` does not install `sam` command.

```sh
$ npm install -g aws-sam-local
```

## Sample

```sh
$ sam local invoke HelloWorld -e event.json
```

```sh
$ sam validate
$ sam local start-api # Start API Gateway
$ curl -H "Accept: application/json" -H "Content-type: application/json" -X PUT http://127.0.0.1:3000/resource/hello -d 'world'
```

## Reference

- https://dev.classmethod.jp/cloud/aws/20170816-sam-local/

