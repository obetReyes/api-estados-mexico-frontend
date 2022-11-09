import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAut } from "../contexts/authContext";

export function withPublic(Component:any) {
	return function WithPublic(props:any) {
		const auth = useAut();
		const router = useRouter();

		if (auth.user) {
			router.replace("/");
			return <h1>cargando...</h1>;
		}
		return <Component auth={auth} {...props} />;
	};
}

export function withProtected(Component:any) {
	return function WithProtected(props:any) {
		const auth = useAut();
		const router = useRouter();
         
        useEffect(() => {

            if (!auth.user) {
                router.push("/");
            }
        }, [])
        

    return <Component auth={auth} {...props} />;
    }


}