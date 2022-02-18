export interface IStyledProps {
  themeState: IThemeStateProps;
}

export interface IThemeStateProps {
  backgroundColor: string;
  terminalColor: string;
  borderColor: string;
  textColor: string;
  shadowColor: string;
}

export interface IWindowObject {
  id: number;
  data: any;
  label: string;
  pageName: string;
  windowType: string;
  isProject: boolean;
  windowList: any;
}

export enum EWindowTypes {
  sidebar = "sidebar",
  noSidebar = "noSidebar",
}

export enum EPageNames {
  github = "github",
  twitter = "twitter",
  blog = "blog",
  about = "about",
  project = "project",
  projects = "projects",
  contact = "contact",
}
