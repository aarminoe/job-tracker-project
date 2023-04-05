import { CognitoUserPool} from "amazon-cognito-identity-js"

const poolData = {
    UserPoolId: 'us-east-2_1ACiCIHBL',
    ClientId: "f0sf7jn8uvo219l610n6pngat"
}

export default new CognitoUserPool(poolData)