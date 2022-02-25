import { NextApiRequest, NextApiResponse} from 'next';

export default (request: NextApiRequest, response: NextApiResponse ) => {
    const users = [
        {id: 1, name: 'Diego'},
        {id: 2, name: 'Daylo'},
        {id: 3, name: 'Dielo'},

    ]

    return response.json(users)
};

//Serverless