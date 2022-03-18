export interface InitialPageProps {
    pageProps: any;
}

export interface ReduxState {
    commonState: CommonState;
}

export type DispatchType = (action: ActionType) => ActionType;

export interface ActionType {
    type: string;
    payload?: any;
}

export interface CommonState {
    currentTime: string;
}
