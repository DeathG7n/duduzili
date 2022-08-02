import { useState } from 'react'
import {useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useGetRequest, useUserActions } from "../../../../../api/api"
import {  Container, Content, TextBox, Accounts, Text } from '../account/accountStyles'
import arrowBack from "../../../../../assets/arrow-right.png";

export default function Muted() {
  const { getRequest, data } = useGetRequest()
  const { userAction } = useUserActions();
  const [unMuted, setUnMuted] = useState(false)

  const history = useNavigate();
  useEffect(()=>{
    getRequest('muted_list/')
  },[unMuted])
  console.log(unMuted)
    
  console.log(data?.muted)
  const mutedUsers = data?.muted.map((m) =>{
    return(
        <>
            <Content style={{justifyContent: "space-between"}}>
                <Link to={`/user/${m?.username}/${m?.id}`} style={{textDecoration: "none", display: "flex",gap: "10px", alignItems: "center", width: "50%"}}>
                    <img src={m?.photo_url} alt="" />
                    <TextBox>
                        <p>{m?.first_name} {m?.last_name}</p>
                    </TextBox>
                </Link>
                <button
                  width="110px"
                  height="35px"
                  border="1px solid #29BB89"
                  color="#29BB89"
                  br="20px"
                  bc="white"
                  fw="600"
                  fs= "14px"
                  hbc="#29BB89"
                  hc="white"
                  onClick={() =>
                    {setUnMuted(!unMuted)
                    userAction(
                      `unmute/${m?.id}/`,
                      "User unmuted successfully"
                    )}
                  }
                > Unmute
                </button>
            </Content>
        </>
    )
  })
  console.log(mutedUsers)

  return (
    <Container>
        <Accounts>
            <img
                src={arrowBack}
                alt="arrow back icon"
                onClick={() => history(-1)}
            />
            <h4>Muted</h4>
        </Accounts>
        {data && data?.muted?.length !== 0 ? mutedUsers : <Text>You don't have any muted users.</Text>}
    </Container>
)
}