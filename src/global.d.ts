interface Proposal {
  id: number;
  type: string;
  name: string;
  date: string;
  imageUrl: string;
  textInfo: string;
}

interface Project {
  id?: string;
  open?: boolean;
  type?: string;
  name: string;
  date: string;
  imageUrl: string;
  textInfo: string;
}
