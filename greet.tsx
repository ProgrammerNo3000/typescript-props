type GreetProps =  {
    name: string 
}
export const Greet = (props: GreetProps) => {
    return ( 
        <div>
            <h2>Welcome {props.name} to your page Omar! You have unread 10 messages</h2>
        </div>
    )
}
