import { setSharedRequestData } from '../shared data/sharedData';

    export async function POST(request) {
    const requestBody = await request.json();
    // console.log(requestBody);

    setSharedRequestData(requestBody);

    return new Response({
        status: 200,
        body: JSON.stringify(requestBody),
    })
}
