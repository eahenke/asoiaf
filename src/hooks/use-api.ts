import React from 'react';
import { ApiContext } from '../providers/api-provider';
import { Api } from '../types';

export default function useApi(): Api {
    return React.useContext(ApiContext) as Api;
}
