import boto3
ses = boto3.client("ses")

def handler(event, context):
    try:
        data = ses.send_email(
            Source="kumudika@adroitlogic.com",
            Destination={
                'ToAddresses': ["hirudinee@adroitlogic.com"],
                'CcAddresses': ["hirudinee+aws@adroitlogic.com"],
                'BccAddresses': ["indunil@adroitlogic.com"]
            },
            Message={
                'Subject': {
                    'Data': "Please Ignore This Test Message"
                },
                'Body': {
                    'Text': {
                        'Data': ""
                    }
                }
            }
        )
    except BaseException as e:
        print(e)
        raise(e)
    
    return {"message": "Successfully executed"}
