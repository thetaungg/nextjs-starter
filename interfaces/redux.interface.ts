export interface InitialPageProps {
  pageProps: any;
}

export interface ReduxState {}

export type DispatchType = (action: ActionType) => ActionType;

export interface ActionType {
  type: string;
  payload?: any;
}
