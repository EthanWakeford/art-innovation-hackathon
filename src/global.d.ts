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
  type?: string;
  name: string;
  date: string;
  imageUrl: string;
  textInfo: string;
}
