import React from 'react';
import { Link, matchPath, Params, useLocation, useParams } from 'react-router-dom';
import routes from '../../routes';

const replaceParamWithValue = (path: string, params: Readonly<Params<string>>) => {
    return Object.keys(params).reduce((routePath, param) => {
        const paramValue = params[param];
        if (paramValue === undefined) return routePath;
        return routePath.replace(`:${param}`, paramValue);
    }, path);
};

export default function BreadCrumb(): JSX.Element {
    const location = useLocation();
    const params = useParams();
    const matching = routes.filter((r) => r.path !== '*' && matchPath({ path: r.path, end: false }, location.pathname));

    return (
        <nav>
            {matching.map((route, idx) => {
                const isLast = idx === matching.length - 1;
                const path = replaceParamWithValue(route.path, params);

                return (
                    <span key={idx}>
                        <Link to={path}>{route.name}</Link>
                        {!isLast ? <span> / </span> : null}
                    </span>
                );
            })}
        </nav>
    );
}
