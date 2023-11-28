import React, { useEffect } from "react";
import { useQueryClient } from "react-query";
import { useSearchParams } from "react-router-dom";

function Oauth2Redirect() {
    const [searchParams] = useSearchParams();
    const queryClient = useQueryClient();
    useEffect(() => {
        localStorage.setItem("accessToken", `Bearer ${searchParams.get("token")}`);
        window.location.replace("/");
    }, []);
    queryClient.refetchQueries(["getPrincipal"]);
    return <></>;
}

export default Oauth2Redirect;
