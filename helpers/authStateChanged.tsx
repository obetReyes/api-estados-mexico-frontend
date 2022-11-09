import React, { useEffect, useState } from "react";
import { useAut } from "../contexts/authContext";

export default function AuthStateChanged({ children }:any) {
	const { setUser, waitForUser, setToken } = useAut();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		waitForUser((userCred:any) => {
			
            if(userCred){
            setUser({
                name:userCred.displayName
            });
            userCred.getIdToken().then((token:any) => {
                setToken(token)
            })
            }else{
                setUser(null)
                setToken(null)
            }
		});
        setLoading(false);
		//eslint-disable-next-line
	}, []);

	if (loading) {
		return <h1>Loading...</h1>;
	}

	return children;
}