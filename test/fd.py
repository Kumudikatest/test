import boto3
ses = boto3.client("ses")

def handler(event, context):
    
    try:
        data = ses.send_email(
    		Destination={
    		    "ToAddresses": ['hirudinee@adroitlogic.com'],
    			"CcAddresses": [],
    			"BccAddresses": []
    		},
    		Message={
    			"Body": {
    			    "Text": {
    					"Data": ''
    				}
    			},
    			"Subject": { 
    				"Data": 'test'
    			}
    		},
    		Source='kumudika@adroitlogic.com'
        )
        print(data)
    except BaseException as e:
        print(e)
        raise(e)
    
    
    return {"message": "Successfully executed"}
