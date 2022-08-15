import {useEffect, useState} from 'react'
import { useGetRequest, useUserActions } from "../../../../api/api"
import { ProfileImg } from '../../messaging/messageStyles'
import { Button, Container, Content, TextBox } from '../account/accountStyles'
import { Link } from 'react-router-dom'

export default function Blocked() {
  const { getRequest, data } = useGetRequest()
  const { userAction } = useUserActions();
  const [unMuted, setUnMuted] = useState(false)

  useEffect(()=>{
      getRequest('blocked_list/')
    },[unMuted])
    
    const blockedUsers = data?.blocked.map((b) =>{
        return(
            <Container>
            <Content style={{justifyContent: "space-between"}}>
                <Link to={`/user/${b?.username}`} style={{textDecoration: "none", display: "flex",gap: "10px", alignItems: "center", width: "50%"}}>
                    <ProfileImg src={b?.photo_url} alt="" />
                    <TextBox>
                        <p>{b?.first_name} {b?.last_name}</p>
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
                      `unblock/${b?.id}/`,
                      "User unblocked successfully"
                    )}
                  }
                > Unblock
                </Button>
            </Content>
        </Container>
        )
    })
    console.log(blockedUsers)
    
    return (
      <>
        {data && data?.blocked?.length !== 0 ? blockedUsers : <div>You don't have any blocked users.</div>}
      </>
    )
}
