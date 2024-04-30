import { StreamChat } from 'stream-chat';


const serverClient = new StreamChat(
    '68yr8cv2k5b6',
    'autypwyh7kn6w5u65zkedbvgdr2k7s63mva93wg6zfevjxmnurgkfwb629adeguh'
);

const token = serverClient.createToken("danhnguyen");

console.log("token: ", token)