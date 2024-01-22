import axios from 'axios';


export const baseUrl=axios.create({
    baseURL:"https://ap-south-1.aws.data.mongodb-api.com/app/application-0-mfzwi/endpoint"
})