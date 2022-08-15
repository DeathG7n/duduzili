import { useState } from 'react'
import {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useGetRequest, useUserActions } from "../../../../api/api"
import { ProfileImg } from '../../messaging/messageStyles'
import { Button, Container, Content, TextBox } from '../account/accountStyles'

export default function Muted() {
  const { getRequest, data } = useGetRequest()
  const { userAction } = useUserActions();
  const [unMuted, setUnMuted] = useState(false)

  useEffect(()=>{
    getRequest('muted_list/')
  },[unMuted])
  console.log(unMuted)
    
  console.log(data?.muted)
  const mutedUsers = data?.muted.map((m) =>{
    return(
        <Container>
            <Content style={{justifyContent: "space-between"}}>
                <Link to={`/user/${m?.username}`} style={{textDecoration: "none", display: "flex",gap: "10px", alignItems: "center", width: "50%"}}>
                    <ProfileImg src={m?.photo_url} alt="" />
                    <TextBox>
                        <p>{m?.first_name} {m?.last_name}</p>
                    </TextBox>
                </Link>
                <Button
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
                </Button>
            </Content>
        </Container>
    )
  })
  console.log(mutedUsers)

  return (
    <>
        {data && data?.muted?.length !== 0 ? mutedUsers : <div>You don't have any muted users.</div>}
    </>
)
}