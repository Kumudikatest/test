import boto3
sns = boto3.client("sns")

def handler(event, context):
    try:
        data = sns.confirm_subscription(
            TopicArn="arn:aws:sns:us-east-1:318300609668:New",
            Token="arn:aws:sns:us-east-1:318300609668:New:ba5c7f71-0825-4310-93ed-cb44c176a8d2",
            AuthenticateOnUnsubscribe="false"
        )
        print(data)
    except BaseException as e:
        print(e)
        raise(e)
    
    return {"message": "Successfully executed"}
