import { ServerResponse } from "http";
import Router from "next/router";

export const redirectTo = (status: number, location: string, res: ServerResponse) => {
    res.writeHead(status, {
        Location: location,
    });
    res.end();
};

export const redirectOnEitherSide = (res: ServerResponse | undefined, pathname: string) => {
    if (res) {
        redirectTo(307, pathname, res);
    } else {
        Router.push(pathname);
    }
};

export const emptyFunction = () => {
    // do nothing
};
