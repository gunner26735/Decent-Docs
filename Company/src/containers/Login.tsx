import React, { FC, useState } from "react";
import { useAuthentication } from "./Authentication";
import { Button, Form, FormControl } from "react-bootstrap";
import config from '../config';

const Login: FC = () => {
  const { loading, login } = useAuthentication();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [shareCredRequestToken] = useState('eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJpbnRlcmFjdGlvblRva2VuIjp7ImNyZWRlbnRpYWxSZXF1aXJlbWVudHMiOlt7InR5cGUiOlsiVmVyaWZpYWJsZUNyZWRlbnRpYWwiLCJJRERvY3VtZW50Q3JlZGVudGlhbFBlcnNvblYxIl0sImNvbnN0cmFpbnRzIjpbXX1dLCJjYWxsYmFja1VSTCI6IiJ9LCJleHAiOjE2MjQ3MTAwNDczMTEsInR5cCI6ImNyZWRlbnRpYWxSZXF1ZXN0IiwianRpIjoiZmFjM2JmNTFlOWI1MWE4MiIsImlzcyI6ImRpZDplbGVtOkVpQlBBSUFYYUtnZ2NleVc2NC1LdXNuQmxzMWlJZ2VtTUpoci1NSnRVd2g3emc7ZWxlbTppbml0aWFsLXN0YXRlPWV5SndjbTkwWldOMFpXUWlPaUpsZVVwMlkwZFdlVmxZVW5CaU1qUnBUMmxLYW1OdFZtaGtSMVZwVEVOS2NtRlhVV2xQYVVscVkwaEtjR0pYUm5sbFUwbHpTVzFHYzFwNVNUWkphMVpVVFdwVk1sTjVTamtpTENKd1lYbHNiMkZrSWpvaVpYbEtRVmt5T1hWa1IxWTBaRU5KTmtsdGFEQmtTRUo2VDJrNGRtUjZUbkJhUXpWMlkyMWpkbU15Vm1wa1dFcHdaRWhyZG1ScVNXbE1RMHAzWkZkS2MyRlhUa3hhV0d0cFQyeDBOMGx0Ykd0SmFtOXBTVE5DZVdGWE1XaGpibXRwVEVOS01XTXlSbTVhVTBrMlNXNU9jRm95TlhCaWJXTnBURU5LTUdWWVFteEphbTlwVlRKV2FtTkVTVEZPYlhONFZtMVdlV0ZYV25CWk1rWXdZVmM1ZFZNeVZqVk5ha0Y0VDBOSmMwbHVRakZaYlhod1dUQjBiR1ZWYUd4bFEwazJTV3BCZVZsWFZYZE9SMXBxV2xSRmVsbFVTVEZOUjFFeFdWUlpNazB5Vm1oWlYwWm9Xa1JzYlU0eVRtcE9SRkUwVDBSck0wMUhVbXRhVjAweVRrUm9hVnBxUVhoYVIxRTFXbFJaZVZscVJYZGFha0Y2VFdwV2FFMTVTamxNU0hOcFlWZFJhVTlwU1dwamJWWnFZak5hYkdOdWEybE1RMG94WXpKR2JscFRTVFpKYmtwc1dUSTVNbHBZU2pWSmFYZHBaRWhzZDFwVFNUWkpiRTVzV1ROQmVVNVVXbkpOVmxwc1kyMXNiV0ZYVG1oa1IyeDJZbXQwYkdWVVNYZE5WR2RwVEVOS2QyUlhTbk5oVjA1TVdsaHNTVnBZWjJsUGFVbDNUWHBKTVZsWFRUTmFhbHBwV2tSRk1FNXRVbTFOTWxrelQwZEZNRmt5U20xWmFsbDNXbXBPYWs1RVRUVk9WRmt5VGtSS2FsbDZZek5PVkdzeFdXMUtiVTB5U1hkTmJVa3lUVWROTUUxVVRYbE5SRlUwVG5wUmFXWldNSE5KYlVZeFpFZG9iR0p1VW5CWk1rWXdZVmM1ZFVscWNHSkphVTUzWTIxc2RGbFlTalZKYkRCelNXMUdlbU15Vm5sa1IyeDJZbXN4YkdSSGFIWmFRMGsyVjNsSmFtTklTbkJpVjBaNVpWTktaR1pSSWl3aWMybG5ibUYwZFhKbElqb2lNbE5LWlhOMFpEVklhMmxFTlZad1JXeFlla2xXUms1V1ZVOUlRWFYyVVcwelpXWkdTVGREZEc1bmRGSlVSVXRqY0hwVGNsSmlhSFIyV0hoS2JtVTRaVWhuUmpkUGVGcGlZamgwVlROWFVHZEhNRlZxVFVFaWZRI3ByaW1hcnkifQ.2b0a39aff77d86984a859dfc462a6023897255d83d180d21182675a57c7a751d1b6d2d3234f62722d3a15bc1ee3c545f057f6b0d6da92f98edd50255eea6e295');

  async function onLogin() {
    try {
      await login.fromLoginAndPassword(username, password);
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div className='Login'>
      <div className='Form'>
        <h1 className='Title'>Verifier Login</h1>
        <p className='Info'>
          Login in order to continue
        </p>

        <Form style={{ width: 280 }}>
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <FormControl
              autoFocus
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <FormControl
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Group>

          <Button block disabled={loading} onClick={onLogin}>
            Login
          </Button>

         <p> Looking to rent for a vehicle for your trip? Share your document credentials <a href={config.wallet_url + '/share-credentials?token=' + shareCredRequestToken} target='_blank' rel="noopener noreferrer">here!</a></p>
        </Form>
      </div>
    </div>
    
  );
};

export default Login;
