interface IProps {
    url:string,
    alt:string,
    classname:string
  }
  
  function Image({url,alt,classname}: IProps) {
    return (
      <>
      
      <img src={url} alt={alt} className={`${classname} rounded-md`} /></>
    );
  }
  
  export default Image;