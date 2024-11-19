export interface ChildProps {
    text: string;
  backgroundImage: string;
  url: string;
}


export interface ParentComponentProps {
    childrenData: ChildProps[];
}