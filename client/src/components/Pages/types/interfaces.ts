export interface IAboutPageProps {
  themeState: any;
  children: any;
}

export interface IContactPageProps {
  themeState: any;
}

export interface IProjectsPageProps {
  themeState: any;
  data: any;
  dimensions: IDimensionsProps;
}
export interface IDesktopPageProps {
  themeState: any;
}

export type IDimensionsProps = {
  width: number;
  height: number;
};
