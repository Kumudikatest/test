import boto3
ddb = boto3.client("dynamodb")

def handler(event, context):
    print(event)
    try:
        data = ddb.get_item(
            TableName="testhistory",
            Key={
                'Name': {
                    'S': "K"
                }
            }
        )
        print(data)
    except BaseException as e:
        print(e)
        raise(e)
    
    return {"message": "Successfully executed"}
