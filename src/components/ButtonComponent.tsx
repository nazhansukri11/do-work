
interface Props{
    color?:'primary' | 'secondary';
    children:string;
    handleClick:()=>void;
}

const ButtonComponent = ({color="primary",children, handleClick}:Props) => {
   

  return (
    <button className={"btn btn-" + color} onClick={handleClick}>{children}</button>
  )
}

export default ButtonComponent