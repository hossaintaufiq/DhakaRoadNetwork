export interface Road{
    id: string ; 
    name: string; 
    highway:string; 
    nodeRefs: string[]
}

export interface OSMNode {
    id:string ; 
    lat:number; 
    lon: number; 
}