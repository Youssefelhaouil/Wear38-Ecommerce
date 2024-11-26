export function textSlicer(desc:string,max:number){
    return desc.length>max ? `${desc.slice(0,max)}...`:desc;
}