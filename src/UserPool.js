import { CognitoUserPool} from "amazon-cognito-identity-js"

const poolData = {
    UserPoolId: 'us-east-2_n5BmvyBUe',
    ClientId: "f2r18srudh3n9hcjeiolfmca1"
}

export default new CognitoUserPool(poolData)